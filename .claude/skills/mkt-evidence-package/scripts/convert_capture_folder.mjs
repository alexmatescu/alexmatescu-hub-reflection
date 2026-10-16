#!/usr/bin/env node
// mkt-evidence-package / scripts/convert_capture_folder.mjs
//
// STEP 1b — CONVERT (AVL-200 §8.1, AVL200-REQ-041). Convertește capturile PNG
// din `capture_folder.path` în WebP calitate 80, în
// evidence/work/mkt/<slug>/webp/converted/, cu scriptul comun
// `evidence-release/scripts/convert_to_webp.mjs` (aceleași verificări pe
// fiecare fișier: decodare completă, dimensiuni identice, PSNR ≥ 40 dB, copie
// byte-identică pentru restul). Folderul de capturi e doar citit. STEP 2
// sigilează folderul convertit.
//
// Usage: node convert_capture_folder.mjs <config.yaml>

import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";
import { pathExists, readJson } from "./lib/common.mjs";
import {
  loadConfig,
  instancePaths,
  webpConversionEnabled,
} from "./lib/mkt.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const CONVERTER = path.resolve(
  here,
  "../../evidence-release/scripts/convert_to_webp.mjs",
);

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node convert_capture_folder.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  if (!webpConversionEnabled(config)) {
    console.log(
      "SKIP: webp_conversion.enabled este false — rulare sigilată înainte de AVL-200 2.0.0; se sigilează folderul original.",
    );
    return;
  }
  const P = instancePaths(config);
  // O rulare deja sigilată fără conversie nu se convertește retroactiv.
  if (
    (await pathExists(P.manifestPath)) &&
    !(await pathExists(P.webpSummaryPath))
  ) {
    const prev = await readJson(P.manifestPath);
    console.error(
      `FAIL: ${P.manifestPath} sigilează deja folderul neconvertit (${prev.capture_folder}). Rularea a început înainte de AVL-200 2.0.0: ` +
        "setează `webp_conversion.enabled: false` ca s-o continui în forma originală (AVL200-REQ-013) sau pornește o archive.version nouă.",
    );
    process.exit(1);
  }
  const args = [
    CONVERTER,
    "--input",
    path.resolve(config.capture_folder.path),
    "--out-dir",
    P.convertedDir,
    "--manifest",
    P.webpManifestPath,
    "--summary",
    P.webpSummaryPath,
    "--log",
    P.logPath,
  ];
  const code = await new Promise((resolve, reject) => {
    const child = spawn(process.execPath, args, { stdio: "inherit" });
    child.on("error", reject);
    child.on("close", resolve);
  });
  process.exit(code ?? 1);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
