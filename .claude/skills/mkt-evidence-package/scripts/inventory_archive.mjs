#!/usr/bin/env node
// mkt-evidence-package / scripts/inventory_archive.mjs
//
// STEP 3 — INVENTORY. Lucrează pe arhiva sigilată, nu pe folder: verifică
// hash-ul arhivei față de manifest, extrage o copie de inspecție, calculează
// dimensiunile imaginilor și duplicatele, apoi creează (aditiv) scheletele
// session-context.csv și capture-classification.csv.
//
// Usage: node inventory_archive.mjs <config.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import {
  run,
  sha256File,
  pathExists,
  readJson,
  writeJson,
  writeText,
  appendLog,
  toCsv,
  parseCsv,
  readHeaderBuffer,
  parseImageDimensions,
} from "./lib/common.mjs";
import { loadConfig, instancePaths, SURFACES } from "./lib/mkt.mjs";
import {
  SESSION_COLUMNS,
  SESSION_HEADER,
  sessionColumnApplies,
  CAPTURE_CLASSIFICATION_HEADER,
} from "./lib/schema.mjs";

const SCRIPT = "inventory_archive.mjs";

async function mergeSkeleton(csvPath, header, rows, keyCol = "evidence_id") {
  let existing = new Map();
  if (await pathExists(csvPath)) {
    existing = new Map(
      parseCsv(await fs.readFile(csvPath, "utf8")).map((r) => [r[keyCol], r]),
    );
  }
  const merged = rows.map((row) => {
    const prev = existing.get(row[keyCol]);
    if (!prev) return row;
    const out = { ...row };
    for (const h of header)
      if (prev[h] !== undefined && prev[h] !== "" && out[h] === "")
        out[h] = prev[h];
    return out;
  });
  const dropped = [...existing.keys()].filter(
    (k) => !rows.some((r) => r[keyCol] === k),
  );
  await writeText(csvPath, toCsv(header, merged));
  return dropped;
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node inventory_archive.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  if (!(await pathExists(P.manifestPath))) {
    console.error(
      "FAIL: lipsește capture-manifest.json — rulează întâi seal_capture_folder.mjs.",
    );
    process.exit(1);
  }
  const manifest = await readJson(P.manifestPath);

  const archSha = await sha256File(manifest.archive_path);
  if (archSha !== manifest.archive_sha256) {
    console.error(
      "FAIL: SHA-256 al arhivei diferă de cel înregistrat la sigilare.",
    );
    process.exit(1);
  }
  const t = await run("unzip", ["-t", "-q", manifest.archive_path]);
  if (t.code !== 0) {
    console.error("FAIL: unzip -t a eșuat.");
    process.exit(1);
  }

  await fs.rm(P.extractedDir, { recursive: true, force: true });
  await fs.mkdir(P.extractedDir, { recursive: true });
  const ux = await run("unzip", [
    "-q",
    manifest.archive_path,
    "-d",
    P.extractedDir,
  ]);
  if (ux.code !== 0) {
    console.error("FAIL: extragerea a eșuat.", ux.stderr);
    process.exit(1);
  }

  const firstBySha = new Map();
  const files = [];
  for (const f of manifest.files) {
    const full = path.join(P.extractedDir, f.original_relative_path);
    const sha = await sha256File(full);
    if (sha !== f.sha256) {
      console.error(
        `FAIL: copia extrasă diferă de manifest: ${f.relative_path_nfc}`,
      );
      process.exit(1);
    }
    const dims = parseImageDimensions(await readHeaderBuffer(full));
    const dupOf = firstBySha.get(sha);
    if (!dupOf) firstBySha.set(sha, f.evidence_id);
    files.push({
      ...f,
      extracted_path: full,
      image_dimensions_pixels: dims
        ? `${dims.width}x${dims.height}`
        : "UNKNOWN",
      duplicate_status: dupOf ? "DUPLICATE" : "UNIQUE",
      duplicate_of_evidence_id: dupOf ?? "NOT_APPLICABLE",
    });
  }

  // Documentele operatorului: aceeași verificare a copiei extrase; nu primesc rânduri în schelete.
  const documents = [];
  for (const d of manifest.operator_documents ?? []) {
    const full = path.join(P.extractedDir, d.original_relative_path);
    if ((await sha256File(full)) !== d.sha256) {
      console.error(
        `FAIL: copia extrasă a documentului diferă de manifest: ${d.relative_path_nfc}`,
      );
      process.exit(1);
    }
    documents.push({ ...d, extracted_path: full });
  }

  await writeJson(P.inventoryPath, {
    generated_at: new Date().toISOString(),
    instance_id: manifest.instance_id,
    archive_path: manifest.archive_path,
    archive_sha256: archSha,
    capture_count: files.length,
    duplicates: files.filter((f) => f.duplicate_status === "DUPLICATE").length,
    operator_documents: documents,
    files,
  });

  // Schelet session-context.csv: precompletează doar ce e determinist
  // (ID, cale, suprafață, NOT_APPLICABLE unde coloana nu se aplică).
  const sessionRows = files.map((f) => {
    const type = SURFACES[f.mapped_surface];
    const row = {};
    for (const col of SESSION_COLUMNS) {
      if (col.name === "evidence_id") row[col.name] = f.evidence_id;
      else if (col.name === "original_relative_path")
        row[col.name] = f.relative_path_nfc;
      else if (col.name === "mapped_surface") row[col.name] = f.mapped_surface;
      else if (!sessionColumnApplies(col, type))
        row[col.name] = "NOT_APPLICABLE";
      else row[col.name] = "";
    }
    return row;
  });
  const droppedS = await mergeSkeleton(
    P.sessionContextPath,
    SESSION_HEADER,
    sessionRows,
  );

  const captureRows = files.map((f) => {
    const row = {};
    for (const h of CAPTURE_CLASSIFICATION_HEADER) row[h] = "";
    row.evidence_id = f.evidence_id;
    row.original_relative_path = f.relative_path_nfc;
    row.mapped_surface = f.mapped_surface;
    row.filename_timestamp_parsed = f.filename_timestamp_parsed;
    if (SURFACES[f.mapped_surface] === "AI") {
      row.serp_page = "NOT_APPLICABLE";
      row.organic_positions_visible = "NOT_APPLICABLE";
    }
    if (f.mapped_surface !== "GSEARCH")
      row.ai_overview_status = "NOT_APPLICABLE";
    return row;
  });
  const droppedC = await mergeSkeleton(
    P.captureClassificationPath,
    CAPTURE_CLASSIFICATION_HEADER,
    captureRows,
  );

  const dropped = [...droppedS, ...droppedC];
  await appendLog(P.logPath, {
    operation: "inventory",
    status: "PASS",
    script: SCRIPT,
    output: { captures: files.length, extracted: P.extractedDir },
    warnings: dropped.length ? ["rows_for_missing_evidence_ids"] : [],
  });

  const bySurface = {};
  for (const f of files)
    bySurface[f.mapped_surface] = (bySurface[f.mapped_surface] ?? 0) + 1;
  console.log(
    `INVENTORY OK — ${files.length} capturi, ${files.filter((f) => f.duplicate_status === "DUPLICATE").length} duplicate byte-identice`,
  );
  for (const [s, n] of Object.entries(bySurface))
    console.log(`  ${s.padEnd(11)} ${n}`);
  console.log(`  copie de inspecție: ${P.extractedDir}`);
  for (const d of documents)
    console.log(
      `  document al operatorului (de citit la STEP 5, pentru fișa rulării): ${d.document_id} ${d.extracted_path}`,
    );
  console.log(`  schelet: ${P.sessionContextPath}`);
  console.log(`  schelet: ${P.captureClassificationPath}`);
  if (dropped.length)
    console.warn(
      `ATENȚIE: rânduri existente fără captură corespunzătoare: ${dropped.join(", ")}`,
    );
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
