#!/usr/bin/env node
// mkt-evidence-package / scripts/verify_checksums.mjs
//
// STEP 15 — VERIFICATION. Rulează `shasum -a 256 -c` (sau echivalentul) asupra
// manifestului din directorul de output și confirmă că artefactele sunt încă
// înghețate.
//
// Usage: node verify_checksums.mjs <config.yaml>

import path from "node:path";
import { verifyChecksumManifest, isFrozen, appendLog } from "./lib/common.mjs";
import {
  loadConfig,
  instancePaths,
  packageFiles,
  frozenArtifactKeys,
} from "./lib/mkt.mjs";

const SCRIPT = "verify_checksums.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node verify_checksums.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const F = packageFiles(config);
  const res = await verifyChecksumManifest(P.outputDir, F.checksums);
  const notFrozen = [];
  for (const k of frozenArtifactKeys(config))
    if (!(await isFrozen(path.join(P.outputDir, F[k])))) notFrozen.push(F[k]);
  const ok = res.ok && notFrozen.length === 0;
  await appendLog(P.logPath, {
    operation: "verify_checksums",
    status: ok ? "PASS" : "FAIL",
    script: SCRIPT,
    output: { tool: res.tool, lines: res.lines, notFrozen },
  });
  console.log(`VERIFICATION — ${ok ? "PASS" : "FAIL"} (${res.tool})`);
  for (const l of res.lines) console.log(`  ${l}`);
  if (notFrozen.length) console.log(`  neînghețate: ${notFrozen.join(", ")}`);
  if (!ok) process.exitCode = 1;
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
