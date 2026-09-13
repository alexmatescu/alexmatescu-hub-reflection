#!/usr/bin/env node
// evidence-release / scripts/inventory_evidence.mjs
//
// STEP 2 of the pipeline: validate the raw archive, extract a disposable
// read-only-treated inspection copy, and record every file's deterministic
// facts (path, size, filesystem mtime). Never touches the original archive
// file except to read it. Never computes per-file hashes/dimensions (that's
// hash_evidence.mjs, STEP 3) and never fills any judgment field.
//
// It DOES record the SHA-256 of the archive file itself (`archive_sha256`,
// alongside `archive_hashed_at`) — this is the baseline validate_evidence.mjs
// (STEP 8, "validate structure/content") recomputes and compares before the
// artifacts are frozen, so any change to the raw archive between inventory
// and that point (accidental overwrite, wrong file swapped in, disk
// corruption) is caught rather than silently released against evidence that
// no longer matches what was actually analyzed.
//
// Usage: node inventory_evidence.mjs <evidence-package.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import {
  readConfig,
  run,
  pathExists,
  walkFiles,
  writeJson,
  writeText,
  appendLog,
  toCsv,
  parseCsv,
  sha256File,
} from "./lib/common.mjs";
import { CLASSIFICATION_COLUMNS, CLASSIFICATION_KEY_COLUMNS } from "./lib/schema.mjs";

const IGNORED_BASENAMES = new Set([".DS_Store", "Thumbs.db"]);
const IGNORED_DIR_PREFIXES = ["__MACOSX"];

function isIgnored(relPath) {
  const parts = relPath.split(path.sep);
  if (IGNORED_DIR_PREFIXES.includes(parts[0])) return true;
  if (IGNORED_BASENAMES.has(parts[parts.length - 1])) return true;
  return false;
}

function splitArchiveFolders(relPath) {
  const parts = relPath.split(path.sep);
  if (parts.length <= 1) {
    return { archivePlatformFolder: "NOT_APPLICABLE", originalSessionFolder: "NOT_APPLICABLE" };
  }
  const archivePlatformFolder = parts[0];
  const middle = parts.slice(1, -1);
  const originalSessionFolder = middle.length > 0 ? middle.join("/") : "NOT_APPLICABLE";
  return { archivePlatformFolder, originalSessionFolder };
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node inventory_evidence.mjs <evidence-package.yaml>");
    process.exit(2);
  }

  const config = await readConfig(configPath);
  const { entity_slug, measurement_point, archive } = config;
  if (!entity_slug || !measurement_point || !archive?.path) {
    console.error(
      "FAIL: config is missing required fields (entity_slug, measurement_point, archive.path).",
    );
    process.exit(1);
  }

  const archivePath = path.resolve(archive.path);
  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const logPath = path.join(workDir, "processing-log.jsonl");

  if (!(await pathExists(archivePath))) {
    console.error(`FAIL: archive not found at ${archivePath}`);
    await appendLog(logPath, {
      operation: "inventory_evidence",
      status: "FAIL",
      input: archivePath,
      output: null,
      script: "inventory_evidence.mjs",
      warnings: ["archive_not_found"],
    });
    process.exit(1);
  }

  console.log(`Validating archive integrity: ${archivePath}`);
  const test = await run("unzip", ["-t", archivePath]);
  if (test.code !== 0) {
    console.error("FAIL: archive failed integrity test (unzip -t).");
    console.error(test.stderr || test.stdout);
    await appendLog(logPath, {
      operation: "inventory_evidence",
      status: "FAIL",
      input: archivePath,
      output: null,
      script: "inventory_evidence.mjs",
      warnings: ["zip_integrity_test_failed"],
    });
    process.exit(1);
  }

  console.log("Hashing archive (whole-file SHA-256, for end-to-end integrity checking at STEP 8)...");
  const archiveSha256 = await sha256File(archivePath);
  console.log(`  ${archiveSha256}  ${path.basename(archivePath)}`);

  const extractedDir = path.join(workDir, "extracted");
  await fs.mkdir(extractedDir, { recursive: true });
  console.log(`Extracting (read-only inspection copy) to: ${extractedDir}`);
  const unzipResult = await run("unzip", ["-o", "-q", archivePath, "-d", extractedDir]);
  if (unzipResult.code !== 0) {
    console.error("FAIL: extraction failed.");
    console.error(unzipResult.stderr || unzipResult.stdout);
    process.exit(1);
  }

  const relFiles = (await walkFiles(extractedDir)).filter((f) => !isIgnored(f));
  relFiles.sort((a, b) => a.localeCompare(b));

  const files = [];
  for (const rel of relFiles) {
    const full = path.join(extractedDir, rel);
    const st = await fs.stat(full);
    const { archivePlatformFolder, originalSessionFolder } = splitArchiveFolders(rel);
    files.push({
      original_relative_path: rel.split(path.sep).join("/"),
      original_filename: path.basename(rel),
      archive_platform_folder: archivePlatformFolder,
      original_session_folder: originalSessionFolder,
      file_size_bytes: st.size,
      archive_mtime_iso: st.mtime.toISOString(),
    });
  }

  const inventory = {
    generated_at: new Date().toISOString(),
    config_path: path.resolve(configPath),
    archive_path: archivePath,
    archive_version: archive.version ?? null,
    archive_sha256: archiveSha256,
    archive_hashed_at: new Date().toISOString(),
    entity_slug,
    measurement_point,
    file_count: files.length,
    files,
  };
  const inventoryPath = path.join(workDir, "inventory.json");
  await writeJson(inventoryPath, inventory);
  console.log(`Wrote ${inventoryPath} (${files.length} files).`);

  // Generate/update the classification.csv skeleton — additive only, never
  // destroys existing human/Claude judgments for files that are still present.
  const classificationPath = path.join(workDir, "classification.csv");
  let existingRows = [];
  if (await pathExists(classificationPath)) {
    const existingText = await fs.readFile(classificationPath, "utf8");
    existingRows = parseCsv(existingText);
  }
  const existingByPath = new Map(existingRows.map((r) => [r["Original relative path"], r]));

  const extraColumns = Array.isArray(config.extra_columns) ? config.extra_columns : [];
  const header = [...CLASSIFICATION_KEY_COLUMNS, ...CLASSIFICATION_COLUMNS, ...extraColumns];
  const rows = files.map((f) => {
    const existing = existingByPath.get(f.original_relative_path);
    const row = { "Original relative path": f.original_relative_path, "Original filename": f.original_filename };
    for (const col of [...CLASSIFICATION_COLUMNS, ...extraColumns]) {
      row[col] = existing ? (existing[col] ?? "") : "";
    }
    return row;
  });

  const droppedPaths = existingRows
    .map((r) => r["Original relative path"])
    .filter((p) => !files.some((f) => f.original_relative_path === p));

  await writeText(classificationPath, toCsv(header, rows));
  console.log(`Wrote ${classificationPath} (${rows.length} rows).`);
  if (droppedPaths.length > 0) {
    console.warn(
      `WARNING: ${droppedPaths.length} previously-classified file(s) no longer present in the archive extraction:`,
    );
    for (const p of droppedPaths) console.warn(`  - ${p}`);
  }

  await appendLog(logPath, {
    operation: "inventory_evidence",
    status: "PASS",
    input: archivePath,
    output: { inventoryPath, classificationPath, fileCount: files.length, archiveSha256 },
    script: "inventory_evidence.mjs",
    warnings: droppedPaths.length > 0 ? ["previously_classified_files_missing"] : [],
  });

  console.log("\nNext: open each file under", extractedDir);
  console.log("and fill the judgment columns in", classificationPath);
  console.log("(STEP 4 — visual analysis, query-execution grouping, classification).");
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
