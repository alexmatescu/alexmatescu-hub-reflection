#!/usr/bin/env node
// evidence-release / scripts/hash_evidence.mjs
//
// STEP 3: compute SHA-256 and image dimensions for every file recorded by
// inventory_evidence.mjs. Reads bytes only — never writes into `extracted/`.
// Also performs byte-identical duplicate detection (never deletes anything).
//
// Usage: node hash_evidence.mjs <evidence-package.yaml>

import path from "node:path";
import {
  readConfig,
  sha256File,
  readHeaderBuffer,
  parseImageDimensions,
  readJson,
  writeJson,
  appendLog,
  pathExists,
} from "./lib/common.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node hash_evidence.mjs <evidence-package.yaml>");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const { entity_slug, measurement_point } = config;
  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const inventoryPath = path.join(workDir, "inventory.json");
  const logPath = path.join(workDir, "processing-log.jsonl");

  if (!(await pathExists(inventoryPath))) {
    console.error(`FAIL: ${inventoryPath} not found — run inventory_evidence.mjs first.`);
    process.exit(1);
  }

  const inventory = await readJson(inventoryPath);
  const extractedDir = path.join(workDir, "extracted");

  const bySha = new Map(); // sha256 -> first original_relative_path (sort order)
  const sortedFiles = [...inventory.files].sort((a, b) =>
    a.original_relative_path.localeCompare(b.original_relative_path),
  );

  let processed = 0;
  for (const file of sortedFiles) {
    const full = path.join(extractedDir, file.original_relative_path);
    const [sha256, headerBuf] = await Promise.all([
      sha256File(full),
      readHeaderBuffer(full).catch(() => Buffer.alloc(0)),
    ]);
    const dims = parseImageDimensions(headerBuf);
    file.sha256 = sha256;
    file.image_dimensions_pixels = dims ? `${dims.width}x${dims.height}` : "UNKNOWN";

    if (bySha.has(sha256)) {
      file.duplicate_status = "DUPLICATE";
      file.duplicate_of_original_relative_path = bySha.get(sha256);
    } else {
      bySha.set(sha256, file.original_relative_path);
      file.duplicate_status = "UNIQUE";
      file.duplicate_of_original_relative_path = "NOT_APPLICABLE";
    }
    processed++;
  }

  // Write back merged into the same file map keyed by original inventory order.
  const bySortedPath = new Map(sortedFiles.map((f) => [f.original_relative_path, f]));
  inventory.files = inventory.files.map((f) => bySortedPath.get(f.original_relative_path));
  inventory.hashed_at = new Date().toISOString();

  await writeJson(inventoryPath, inventory);

  const dupCount = sortedFiles.filter((f) => f.duplicate_status === "DUPLICATE").length;
  const unknownDims = sortedFiles.filter((f) => f.image_dimensions_pixels === "UNKNOWN").length;

  console.log(`Hashed ${processed} files.`);
  console.log(`Duplicate (byte-identical) files: ${dupCount}`);
  console.log(`Files with unrecognized image dimensions: ${unknownDims}`);
  if (dupCount > 0) {
    console.log("Duplicates are NOT deleted — marked in inventory.json / Evidence Index only.");
  }

  await appendLog(logPath, {
    operation: "hash_evidence",
    status: "PASS",
    input: inventoryPath,
    output: { fileCount: processed, duplicates: dupCount, unknownDimensions: unknownDims },
    script: "hash_evidence.mjs",
    warnings: [],
  });
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
