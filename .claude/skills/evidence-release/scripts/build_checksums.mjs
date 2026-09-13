#!/usr/bin/env node
// evidence-release / scripts/build_checksums.mjs
//
// STEP 10: SHA-256 for the raw archive + every finalized artifact (index,
// README). Written in `shasum -a 256 -c` compatible format. Never includes
// itself.
//
// Requires the index and README to already be frozen (STEP 9) — this is
// the enforcement point for "nothing that enters the checksum manifest is
// modified after it is generated": if either file is still writable, this
// script refuses to hash it, because a hash computed over a file that could
// still change is worthless as an integrity guarantee. Run
// freeze_artifacts.mjs first.
//
// The raw archive's canonical-named symlink (naming-convention.md §1) is
// placed directly in the versioned output directory, alongside the index/
// README/manifest — this makes evidence/output/<slug>/<mp>/<version>/ a
// self-contained folder that `shasum -a 256 -c` can verify in place
// (verify_checksums.mjs, STEP 11), with no manual file-gathering.
//
// Usage: node build_checksums.mjs <evidence-package.yaml>

import path from "node:path";
import {
  readConfig,
  sha256File,
  pathExists,
  isFrozen,
  writeText,
  appendLog,
  ensureCanonicalArchiveLink,
  artifactFileName,
} from "./lib/common.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node build_checksums.mjs <evidence-package.yaml>");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const { entity_slug, measurement_point, metadata_version, archive } = config;
  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const outputDir = path.resolve("evidence/output", entity_slug, measurement_point, metadata_version);

  const archiveCanonicalName = artifactFileName(entity_slug, measurement_point, "evidence-archive", archive.version, "zip");
  const indexFile = artifactFileName(entity_slug, measurement_point, "evidence-index", metadata_version, "csv");
  const readmeFile = artifactFileName(entity_slug, measurement_point, "readme", metadata_version, "md");
  const shaFile = artifactFileName(entity_slug, measurement_point, "sha256sums", metadata_version, "txt");

  const indexPath = path.join(outputDir, indexFile);
  const readmePath = path.join(outputDir, readmeFile);

  for (const [label, p] of [
    ["evidence index", indexPath],
    ["README", readmePath],
  ]) {
    if (!(await pathExists(p))) {
      console.error(`FAIL: ${label} not found at ${p} — generate it (STEP 7) before running build_checksums.mjs.`);
      process.exit(1);
    }
    if (!(await isFrozen(p))) {
      console.error(
        `FAIL: ${label} at ${p} is not frozen yet. Run freeze_artifacts.mjs (STEP 9) before build_checksums.mjs — ` +
          `a checksum over a file that can still change is not an integrity guarantee.`,
      );
      process.exit(1);
    }
  }

  const archiveLinkPath = await ensureCanonicalArchiveLink(
    path.resolve(archive.path),
    outputDir,
    archiveCanonicalName,
  );

  const entries = [
    { name: archiveCanonicalName, path: archiveLinkPath },
    { name: indexFile, path: indexPath },
    { name: readmeFile, path: readmePath },
  ];

  const lines = [];
  for (const entry of entries) {
    const hash = await sha256File(entry.path);
    lines.push(`${hash}  ${entry.name}`);
    console.log(`${hash}  ${entry.name}`);
  }

  const shaPath = path.join(outputDir, shaFile);
  await writeText(shaPath, lines.join("\n") + "\n");
  console.log(`\nWrote ${shaPath}`);
  console.log(`Next: verify_checksums.mjs (STEP 11), or manually: cd "${outputDir}" && shasum -a 256 -c "${shaFile}"`);

  await appendLog(path.join(workDir, "processing-log.jsonl"), {
    operation: "build_checksums",
    status: "PASS",
    input: entries.map((e) => e.name),
    output: shaPath,
    script: "build_checksums.mjs",
    warnings: [],
  });
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
