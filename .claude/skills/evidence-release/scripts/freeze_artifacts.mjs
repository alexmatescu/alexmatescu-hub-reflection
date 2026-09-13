#!/usr/bin/env node
// evidence-release / scripts/freeze_artifacts.mjs
//
// STEP 9 — the hard boundary the pipeline is built around: nothing that
// enters the checksum manifest is modified after it is generated. This
// script makes that a filesystem fact, not just a convention — it chmods
// the finalized Evidence Index and README to read-only (0o444) right after
// STEP 8 (validate structure/content) passes and right before STEP 10
// (build checksums) reads them. Any script that tries to rewrite a frozen
// file after this point fails loudly (assertNotFrozen in lib/common.mjs)
// instead of silently invalidating a checksum that was already computed.
//
// The raw archive is never touched here — it's already never opened for
// writing anywhere in this pipeline (release-policy.md), so there is
// nothing of ours to freeze on it.
//
// Usage:
//   node freeze_artifacts.mjs <evidence-package.yaml>              # freeze
//   node freeze_artifacts.mjs <evidence-package.yaml> --unfreeze    # deliberate reversal only —
//                                                                      see the warning below.

import path from "node:path";
import {
  readConfig,
  pathExists,
  isFrozen,
  freezeFile,
  unfreezeFile,
  appendLog,
  artifactFileName,
} from "./lib/common.mjs";

async function main() {
  const configPath = process.argv[2];
  const unfreeze = process.argv.includes("--unfreeze");
  if (!configPath) {
    console.error("Usage: node freeze_artifacts.mjs <evidence-package.yaml> [--unfreeze]");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const { entity_slug, measurement_point, metadata_version } = config;
  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const outputDir = path.resolve("evidence/output", entity_slug, measurement_point, metadata_version);

  const indexFile = artifactFileName(entity_slug, measurement_point, "evidence-index", metadata_version, "csv");
  const readmeFile = artifactFileName(entity_slug, measurement_point, "readme", metadata_version, "md");
  const targets = [path.join(outputDir, indexFile), path.join(outputDir, readmeFile)];

  for (const t of targets) {
    if (!(await pathExists(t))) {
      console.error(`FAIL: ${t} not found — run build_index.mjs --finalize and build_readme.mjs first (STEP 7).`);
      process.exit(1);
    }
  }

  if (unfreeze) {
    console.warn(
      "WARNING: unfreezing finalized artifacts. This should only be done when this exact metadata\n" +
        "version was never checksummed/uploaded anywhere. If it was, publish a correction as a new\n" +
        "metadata_version instead of editing this one in place (release-policy.md).",
    );
    for (const t of targets) {
      await unfreezeFile(t);
      console.log(`Unfrozen (writable again): ${t}`);
    }
    await appendLog(path.join(workDir, "processing-log.jsonl"), {
      operation: "freeze_artifacts",
      status: "WARNING",
      input: targets,
      output: null,
      script: "freeze_artifacts.mjs",
      warnings: ["artifacts_unfrozen"],
    });
    return;
  }

  const alreadyFrozen = [];
  const justFrozen = [];
  for (const t of targets) {
    if (await isFrozen(t)) {
      alreadyFrozen.push(t);
    } else {
      await freezeFile(t);
      justFrozen.push(t);
    }
  }

  if (justFrozen.length > 0) {
    console.log("Frozen (read-only, 0o444):");
    for (const t of justFrozen) console.log(`  - ${t}`);
  }
  if (alreadyFrozen.length > 0) {
    console.log("Already frozen (no change):");
    for (const t of alreadyFrozen) console.log(`  - ${t}`);
  }
  console.log(
    "\nFrom this point, build_checksums.mjs hashes these exact bytes. Any further correction requires\n" +
      "a new metadata_version — do not run freeze_artifacts.mjs --unfreeze unless this version was\n" +
      "never checksummed/uploaded anywhere.",
  );

  await appendLog(path.join(workDir, "processing-log.jsonl"), {
    operation: "freeze_artifacts",
    status: "PASS",
    input: targets,
    output: { justFrozen, alreadyFrozen },
    script: "freeze_artifacts.mjs",
    warnings: [],
  });
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
