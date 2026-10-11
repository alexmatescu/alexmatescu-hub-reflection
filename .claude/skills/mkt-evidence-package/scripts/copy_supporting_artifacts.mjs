#!/usr/bin/env node
// mkt-evidence-package / scripts/copy_supporting_artifacts.mjs
//
// STEP 11 (partea a doua). Copiază în directorul de output, sub numele din
// naming-convention.md §5, artefactele de suport ale pachetului: manifestul
// de sigilare, setul de query-uri derivat, fișa rulării (dacă există) și
// contextul de sesiune. Copiile sunt byte-identice cu sursele din work/;
// nimic nu se rescrie sau normalizează.
//
// Usage: node copy_supporting_artifacts.mjs <config.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import { pathExists, sha256File, appendLog, assertNotFrozen, parseCsv } from "./lib/common.mjs";
import { loadConfig, instancePaths, packageFiles } from "./lib/mkt.mjs";
import { SESSION_COLUMNS } from "./lib/schema.mjs";

const SCRIPT = "copy_supporting_artifacts.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node copy_supporting_artifacts.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const F = packageFiles(config);

  // Contextul de sesiune trebuie să fie complet (fără celule goale, în afară de notes).
  const session = parseCsv(await fs.readFile(P.sessionContextPath, "utf8"));
  const blanks = [];
  for (const r of session) {
    for (const c of SESSION_COLUMNS) if (!c.optional && (r[c.name] ?? "").trim() === "") blanks.push(`${r.evidence_id}:${c.name}`);
  }
  if (blanks.length) {
    console.error(`FAIL: session-context.csv are ${blanks.length} celule necompletate (ex. ${blanks.slice(0, 3).join(", ")}).`);
    process.exit(1);
  }

  const pairs = [
    [P.manifestPath, F.manifest],
    [P.querySetPath, F.querySet],
    [P.sessionContextPath, F.sessionContext],
  ];
  if (F.runSheet) pairs.push([path.resolve(config.run_sheet.path), F.runSheet]);

  await fs.mkdir(P.outputDir, { recursive: true });
  const copied = [];
  for (const [src, name] of pairs) {
    if (!(await pathExists(src))) {
      console.error(`FAIL: lipsește sursa ${src}`);
      process.exit(1);
    }
    const dest = path.join(P.outputDir, name);
    await assertNotFrozen(dest);
    await fs.copyFile(src, dest);
    const [a, b] = [await sha256File(src), await sha256File(dest)];
    if (a !== b) {
      console.error(`FAIL: copia diferă de sursă: ${name}`);
      process.exit(1);
    }
    copied.push(name);
    console.log(`  copiat → ${name}`);
  }
  await appendLog(P.logPath, { operation: "copy_supporting_artifacts", status: "PASS", script: SCRIPT, output: copied });
  console.log(`ARTEFACTE DE SUPORT OK — ${copied.length} fișiere în ${P.outputDir}`);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
