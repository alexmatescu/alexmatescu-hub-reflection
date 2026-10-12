#!/usr/bin/env node
// mkt-evidence-package / scripts/apply_review_decisions.mjs
//
// STEP 10 — aplică deciziile REVIEW (2) confirmate de user pe
// observation-staging.csv. Fiecare decizie țintește EXACT un rând, prin cheia
// (execution_id, observed_order), iar observed_name e verificat ca protecție.
// O decizie care nu găsește rândul, găsește mai multe sau găsește alt nume
// oprește scriptul fără să scrie nimic. (Motivul: în pilot, deciziile indexate
// pe nume au atins și al doilea rând cu același nume din execuție.)
//
// Intrare: evidence/work/mkt/<slug>/review-decisions.csv, coloanele:
//   execution_id      — complet sau fără prefixul instanței (ex. GSEARCH-Q-DISC-011)
//   observed_order    — întreg, din observation-staging.csv
//   observed_name     — verbatim, trebuie să coincidă cu rândul
//   field             — query_relevance | entity_kind_observed | named_as_recommendation | KEEP
//   value             — valoarea nouă (gol pentru KEEP)
//   relevance_basis   — obligatoriu pentru query_relevance IRRELEVANT / UNCERTAIN
//   decision_label    — eticheta deciziei (ex. „A”), trecută în notes
//
// Prima rulare păstrează o copie: observation-staging.pre-review.csv.
// Re-rularea cu aceleași decizii nu schimbă nimic (idempotentă).
//
// Usage: node apply_review_decisions.mjs <config.yaml> [--date YYYY-MM-DD]

import path from "node:path";
import { promises as fs } from "node:fs";
import { parseCsv, toCsv, writeText, appendLog, pathExists } from "./lib/common.mjs";
import { loadConfig, instancePaths } from "./lib/mkt.mjs";
import { OBSERVATION_STAGING_HEADER as STAGING_HEADER } from "./lib/schema.mjs";

const SCRIPT = "apply_review_decisions.mjs";
const FIELDS = {
  query_relevance: ["RELEVANT", "IRRELEVANT", "UNCERTAIN"],
  entity_kind_observed: [
    "PROVIDER_PAGE", "PROVIDER_NAMED", "ARTICLE_GUIDE", "DIRECTORY_LIST", "SOFTWARE_TOOL",
    "PUBLISHER", "PERSON_PROFILE", "PERSON_ASSOCIATED", "FORUM_SOCIAL", "OTHER", "UNCERTAIN",
  ],
  named_as_recommendation: ["YES", "NO", "UNCERTAIN", "NOT_APPLICABLE"],
  KEEP: [""],
};
const nfc = (s) => String(s ?? "").normalize("NFC").trim();

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node apply_review_decisions.mjs <config.yaml> [--date YYYY-MM-DD]");
    process.exit(2);
  }
  const dateArg = process.argv.indexOf("--date");
  const date = dateArg > 0 ? process.argv[dateArg + 1] : new Date().toISOString().slice(0, 10);
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const stagingPath = path.join(P.workDir, "observation-staging.csv");
  const decisionsPath = path.join(P.workDir, "review-decisions.csv");
  const backupPath = path.join(P.workDir, "observation-staging.pre-review.csv");
  for (const f of [stagingPath, decisionsPath]) {
    if (!(await pathExists(f))) {
      console.error(`FAIL: lipsește ${f}`);
      process.exit(1);
    }
  }

  const rows = parseCsv(await fs.readFile(stagingPath, "utf8"));
  const decisions = parseCsv(await fs.readFile(decisionsPath, "utf8"));
  const prefix = `${config.instance_id}-`;
  const full = (e) => (nfc(e).startsWith(prefix) ? nfc(e) : prefix + nfc(e));
  const tag = `Decizie REVIEW (2), confirmată de operator la ${date}`;

  // 1. Validare completă înainte de orice scriere.
  const problems = [];
  const plan = [];
  decisions.forEach((d, i) => {
    const line = `decizia ${i + 1} (${nfc(d.execution_id)} #${nfc(d.observed_order)} «${nfc(d.observed_name)}»)`;
    const field = nfc(d.field);
    const value = nfc(d.value);
    if (!(field in FIELDS)) return problems.push(`${line}: câmp necunoscut „${field}”`);
    if (field !== "KEEP" && !FIELDS[field].includes(value)) return problems.push(`${line}: valoare invalidă „${value}” pentru ${field}`);
    if (field === "query_relevance" && value !== "RELEVANT" && !nfc(d.relevance_basis)) {
      return problems.push(`${line}: ${value} cere relevance_basis`);
    }
    const hits = rows.filter((r) => nfc(r.execution_id) === full(d.execution_id) && nfc(r.observed_order) === nfc(d.observed_order));
    if (hits.length !== 1) return problems.push(`${line}: potriviri = ${hits.length} (trebuie exact 1)`);
    if (nfc(hits[0].observed_name) !== nfc(d.observed_name)) {
      return problems.push(`${line}: numele din rând e «${nfc(hits[0].observed_name)}»`);
    }
    plan.push({ row: hits[0], field, value, basis: nfc(d.relevance_basis), label: nfc(d.decision_label) });
  });
  const targets = plan.map((p) => p.row);
  const dupTargets = targets.filter((r, i) => targets.indexOf(r) !== i && plan[i].field === plan[targets.indexOf(r)].field);
  if (dupTargets.length) problems.push(`${dupTargets.length} rânduri primesc două decizii pe același câmp`);
  if (problems.length) {
    console.error(`FAIL: ${problems.length} decizii nu pot fi aplicate; nu s-a scris nimic.`);
    for (const p of problems) console.error(`  - ${p}`);
    await appendLog(P.logPath, { operation: "apply_review_decisions", status: "FAIL", script: SCRIPT, warnings: problems });
    process.exit(1);
  }

  // 2. Aplicare.
  if (!(await pathExists(backupPath))) await fs.copyFile(stagingPath, backupPath);
  let changed = 0;
  for (const { row, field, value, basis, label } of plan) {
    const before = JSON.stringify(row);
    if (field === "query_relevance") {
      row.query_relevance = value;
      row.relevance_basis = value === "RELEVANT" ? "" : basis;
    } else if (field !== "KEEP") {
      row[field] = value;
    }
    row.review_status = "REVIEWED";
    const note = `${tag}${label ? ` (${label})` : ""}`;
    if (!nfc(row.notes).includes(note)) row.notes = [nfc(row.notes), note].filter(Boolean).join("; ");
    if (JSON.stringify(row) !== before) changed += 1;
  }
  await writeText(stagingPath, toCsv(STAGING_HEADER, rows));

  const left = rows.filter((r) => r.review_status === "REVIEW_REQUIRED");
  await appendLog(P.logPath, {
    operation: "apply_review_decisions",
    status: left.length ? "INCOMPLETE" : "OK",
    script: SCRIPT,
    input: decisionsPath,
    output: { decisions: plan.length, rows_changed: changed, review_required_left: left.length },
  });
  console.log(`REVIEW (2) — ${plan.length} decizii, ${changed} rânduri modificate; rămase REVIEW_REQUIRED: ${left.length}`);
  for (const r of left) console.log(`  ${r.execution_id} #${r.observed_order} «${r.observed_name}»`);
  console.log(`  → ${stagingPath}\n  copie înainte de review: ${backupPath}`);
  if (left.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
