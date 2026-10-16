#!/usr/bin/env node
// mkt-evidence-package / scripts/build_checksums.mjs
//
// STEP 14 — CHECKSUMS. Refuză dacă vreun artefact nu e înghețat. Plasează
// arhiva în directorul de output ca link simbolic canonic (fără copiere) și
// scrie manifestul SHA-256 compatibil `shasum -a 256 -c`. Manifestul nu se
// include pe sine; validation-report.md e raport intern, nu artefact.
//
// Usage: node build_checksums.mjs <config.yaml>

import path from "node:path";

import {
  sha256File,
  pathExists,
  isFrozen,
  readJson,
  writeText,
  appendLog,
  ensureCanonicalArchiveLink,
} from "./lib/common.mjs";
import {
  loadConfig,
  instancePaths,
  packageFiles,
  frozenArtifactKeys,
} from "./lib/mkt.mjs";

const SCRIPT = "build_checksums.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node build_checksums.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const F = packageFiles(config);
  const manifestPath = path.join(P.outputDir, F.checksums);
  if (await pathExists(manifestPath)) {
    console.error(
      `FAIL: ${F.checksums} există deja. O versiune nouă cere o metadata_version nouă.`,
    );
    process.exit(1);
  }
  const keys = frozenArtifactKeys(config);
  for (const k of keys) {
    const p = path.join(P.outputDir, F[k]);
    if (!(await pathExists(p)) || !(await isFrozen(p))) {
      console.error(
        `FAIL: ${F[k]} nu există sau nu e înghețat — rulează freeze_artifacts.mjs.`,
      );
      process.exit(1);
    }
  }
  const manifest = await readJson(P.manifestPath);
  await ensureCanonicalArchiveLink(
    manifest.archive_path,
    P.outputDir,
    F.archive,
  );
  const names = [F.archive, ...keys.map((k) => F[k])];
  const lines = [];
  for (const n of names)
    lines.push(`${await sha256File(path.join(P.outputDir, n))}  ${n}`);
  const archiveLine = lines[0].split("  ")[0];
  if (archiveLine !== manifest.archive_sha256) {
    console.error(
      "FAIL: hash-ul arhivei din directorul de output diferă de cel de la sigilare.",
    );
    process.exit(1);
  }
  await writeText(manifestPath, lines.join("\n") + "\n");
  await appendLog(P.logPath, {
    operation: "checksums",
    status: "PASS",
    script: SCRIPT,
    output: { manifest: F.checksums, files: names.length },
  });
  console.log(`CHECKSUMS → ${F.checksums} (${names.length} fișiere)`);
  for (const l of lines) console.log(`  ${l}`);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
