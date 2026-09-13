#!/usr/bin/env node
// evidence-release / scripts/verify_checksums.mjs
//
// STEP 11: verify the manifest build_checksums.mjs just wrote (STEP 10)
// actually matches the files sitting next to it, using the real
// `shasum`/`sha256sum` binary a human would run (falls back to an in-process
// recompute if neither is on PATH). This is a self-check right after
// generation — it catches a bug in the checksum step itself or a file that
// somehow changed in the moment between hashing and now. `github_release.mjs`
// (STEP 14) re-runs this same check immediately before upload as a second,
// later-in-time confirmation.
//
// Usage: node verify_checksums.mjs <evidence-package.yaml>

import path from "node:path";
import { readConfig, pathExists, verifyChecksumManifest, appendLog, artifactFileName } from "./lib/common.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node verify_checksums.mjs <evidence-package.yaml>");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const { entity_slug, measurement_point, metadata_version } = config;
  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const outputDir = path.resolve("evidence/output", entity_slug, measurement_point, metadata_version);
  const shaFile = artifactFileName(entity_slug, measurement_point, "sha256sums", metadata_version, "txt");

  if (!(await pathExists(path.join(outputDir, shaFile)))) {
    console.error(`FAIL: ${shaFile} not found in ${outputDir} — run build_checksums.mjs (STEP 10) first.`);
    process.exit(1);
  }

  const result = await verifyChecksumManifest(outputDir, shaFile);
  console.log(`Verifying with: ${result.tool}`);
  for (const line of result.lines) console.log(`  ${line}`);

  await appendLog(path.join(workDir, "processing-log.jsonl"), {
    operation: "verify_checksums",
    status: result.ok ? "PASS" : "FAIL",
    input: shaFile,
    output: result.lines,
    script: "verify_checksums.mjs",
    warnings: [],
  });

  if (!result.ok) {
    console.error(
      "\nFAIL: checksum manifest does not match the files in the output directory. Do not proceed to " +
        "package/release. Re-run STEP 7-10 rather than editing files by hand.",
    );
    process.exit(1);
  }
  console.log("\nPASS: every file matches its recorded SHA-256.");
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
