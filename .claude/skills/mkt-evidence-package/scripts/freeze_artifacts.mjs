#!/usr/bin/env node
// mkt-evidence-package / scripts/freeze_artifacts.mjs
//
// STEP 13 — FREEZE. Face read-only (0o444) toate artefactele care intră în
// manifestul de checksums, doar dacă validarea are status CONTENT_VALID
// (sau HUMAN_REVIEW_REQUIRED cu --confirmed-review). --unfreeze există doar
// pentru o versiune înghețată din greșeală și încă necheckumită.
//
// Usage: node freeze_artifacts.mjs <config.yaml> [--confirmed-review | --unfreeze]

import path from "node:path";
import {
  readJson,
  pathExists,
  freezeFile,
  unfreezeFile,
  isFrozen,
  appendLog,
} from "./lib/common.mjs";
import {
  loadConfig,
  instancePaths,
  packageFiles,
  frozenArtifactKeys,
} from "./lib/mkt.mjs";

const SCRIPT = "freeze_artifacts.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error(
      "Usage: node freeze_artifacts.mjs <config.yaml> [--confirmed-review | --unfreeze]",
    );
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const F = packageFiles(config);
  const targets = frozenArtifactKeys(config).map((k) =>
    path.join(P.outputDir, F[k]),
  );

  if (process.argv.includes("--unfreeze")) {
    if (await pathExists(path.join(P.outputDir, F.checksums))) {
      console.error(
        "FAIL: există deja manifestul de checksums — corecția se face printr-o metadata_version nouă, nu prin unfreeze.",
      );
      process.exit(1);
    }
    for (const t of targets) if (await pathExists(t)) await unfreezeFile(t);
    console.warn(
      "ATENȚIE: artefactele au fost dezghețate. Folosește doar pentru o versiune înghețată din greșeală.",
    );
    await appendLog(P.logPath, {
      operation: "unfreeze",
      status: "PASS",
      script: SCRIPT,
    });
    return;
  }

  const resultPath = path.join(P.workDir, "validation-result.json");
  if (!(await pathExists(resultPath))) {
    console.error(
      "FAIL: lipsește validation-result.json — rulează validate_package.mjs.",
    );
    process.exit(1);
  }
  const result = await readJson(resultPath);
  const ok =
    result.metadata_version === String(config.metadata_version) &&
    (result.status === "CONTENT_VALID" ||
      (result.status === "HUMAN_REVIEW_REQUIRED" &&
        process.argv.includes("--confirmed-review")));
  if (!ok) {
    console.error(
      `FAIL: freeze refuzat — validarea are status ${result.status} (metadata v${result.metadata_version}).`,
    );
    process.exit(1);
  }
  for (const t of targets) {
    if (!(await pathExists(t))) {
      console.error(`FAIL: lipsește ${t}`);
      process.exit(1);
    }
    if (!(await isFrozen(t))) await freezeFile(t);
    console.log(`  înghețat (0o444): ${path.basename(t)}`);
  }
  await appendLog(P.logPath, {
    operation: "freeze",
    status: "PASS",
    script: SCRIPT,
    output: targets.map((t) => path.basename(t)),
  });
  console.log(`FREEZE OK — ${targets.length} artefacte`);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
