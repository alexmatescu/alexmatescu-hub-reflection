#!/usr/bin/env node
// mkt-evidence-package / scripts/build_query_set.mjs
//
// STEP 4 — QUERY SET. Verifică SHA-256 al fișierului .md declarat și extrage
// tabelele de query-uri în query-set.csv, fără a normaliza textul. Parsarea se
// oprește la prima secțiune „Anexa” (anexele reproduc istoric aceleași texte).
//
// Usage: node build_query_set.mjs <config.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import { sha256File, writeText, appendLog, toCsv } from "./lib/common.mjs";
import { loadConfig, instancePaths } from "./lib/mkt.mjs";

const SCRIPT = "build_query_set.mjs";
const ID_RE = /^Q-(DISC-(?:\d{3}|X\d{2})|USER-(?:CONV|SHORT)-\d{3})$/;
const QUERY_HEADER_RE = /^(interogare exactă|prompt complet|expresia exactă)/i;
const CLASS_HEADER_RE = /^(clasă principală|intenție)$/i;

function cells(line) {
  return line.trim().replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => c.trim());
}

function subgroupOf(id) {
  if (id.startsWith("Q-DISC-")) return "DISCOVERY";
  if (id.startsWith("Q-USER-CONV-")) return "USER-CONV";
  if (id.startsWith("Q-USER-SHORT-")) return "USER-SHORT";
  return "UNKNOWN";
}

function layerOf(id) {
  if (/^Q-DISC-X\d{2}$/.test(id)) return "EXPLORATORY";
  if (/^Q-DISC-\d{3}$/.test(id)) return "CORE-CANDIDATE";
  return "STANDARD";
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node build_query_set.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const src = path.resolve(config.query_set.source_path);
  const sha = await sha256File(src);
  if (sha !== config.query_set.source_sha256) {
    console.error(`FAIL: SHA-256 al setului diferă.\n  așteptat: ${config.query_set.source_sha256}\n  găsit:    ${sha}`);
    process.exit(1);
  }

  const lines = (await fs.readFile(src, "utf8")).split(/\r?\n/);
  const rows = new Map();
  const conflicts = [];
  let header = null;
  for (const line of lines) {
    if (/^#{1,6}\s+Anexa\b/i.test(line)) break;
    if (!line.trim().startsWith("|")) {
      header = null;
      continue;
    }
    const c = cells(line);
    if (c.every((x) => /^:?-+:?$/.test(x))) continue;
    if (!header) {
      header = c;
      continue;
    }
    const id = c[0];
    if (!ID_RE.test(id)) continue;
    const qIdx = header.findIndex((h) => QUERY_HEADER_RE.test(h));
    if (qIdx < 0) continue;
    const cIdx = header.findIndex((h) => CLASS_HEADER_RE.test(h));
    const row = {
      query_set_id: config.query_set.query_set_id,
      query_id: id,
      query_exact: c[qIdx],
      subgroup: subgroupOf(id),
      class: cIdx >= 0 ? c[cIdx] : "NOT_APPLICABLE",
      layer: layerOf(id),
      source_path: config.query_set.source_path,
      source_sha256: sha,
    };
    const prev = rows.get(id);
    if (prev && prev.query_exact !== row.query_exact) conflicts.push(id);
    if (!prev) rows.set(id, row);
  }

  if (conflicts.length) {
    console.error(`FAIL: ID-uri cu texte diferite în același document: ${conflicts.join(", ")}`);
    process.exit(1);
  }
  const executed = config.queries_executed;
  const missing = executed.filter((q) => !rows.has(q));
  if (missing.length) {
    console.error(`FAIL: queries_executed conține ID-uri absente din set: ${missing.join(", ")}`);
    process.exit(1);
  }

  const out = [...rows.values()].map((r) => ({ ...r, executed_in_instance: executed.includes(r.query_id) ? "YES" : "NO" }));
  const header2 = ["query_set_id", "query_id", "query_exact", "subgroup", "class", "layer", "executed_in_instance", "source_path", "source_sha256"];
  await writeText(P.querySetPath, toCsv(header2, out));
  await appendLog(P.logPath, { operation: "query_set", status: "PASS", script: SCRIPT, output: { queries: out.length, executed: executed.length } });

  console.log(`QUERY SET OK — ${out.length} query-uri extrase, ${executed.length} executate în instanță (SHA-256 verificat)`);
  for (const r of out.filter((x) => x.executed_in_instance === "YES")) console.log(`  ${r.query_id}  ${r.query_exact}`);
  console.log(`  → ${P.querySetPath}`);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
