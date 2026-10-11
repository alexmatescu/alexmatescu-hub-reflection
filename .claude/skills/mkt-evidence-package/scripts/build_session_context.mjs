#!/usr/bin/env node
// mkt-evidence-package / scripts/build_session_context.mjs
//
// STEP 5 (partea deterministă) — validează session-context.csv completat de
// Claude/user, agregă pe suprafață (și pe execuție, dacă STEP 7 a legat deja
// capturile de query-uri), compară cu fișa rulării dacă există și scrie
// session-context-review.csv + session-context-summary.json pentru REVIEW (0).
// Nu modifică session-context.csv.
//
// Usage: node build_session_context.mjs <config.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import { pathExists, parseCsv, toCsv, writeText, writeJson, appendLog, readConfig } from "./lib/common.mjs";
import { loadConfig, instancePaths, SURFACES, executionId } from "./lib/mkt.mjs";
import {
  SESSION_COLUMNS,
  CONTAMINATION_TYPES,
  CONTAMINATION_SEVERITY,
  AGGREGATED_STATE_FIELDS,
  sessionColumnApplies,
} from "./lib/schema.mjs";

const SCRIPT = "build_session_context.mjs";
const ABSENT = new Set(["", "NOT_VISIBLE", "NOT_APPLICABLE", "UNKNOWN"]);

function validateRow(row, issues) {
  const id = row.evidence_id;
  const type = SURFACES[row.mapped_surface];
  const add = (field, issue, detail = "") => issues.push({ scope: "CAPTURE", id, field, issue, detail });
  for (const col of SESSION_COLUMNS) {
    if (col.source === "PREFILL") continue;
    const v = (row[col.name] ?? "").trim();
    const applies = sessionColumnApplies(col, type);
    if (!applies) {
      if (v !== "NOT_APPLICABLE") add(col.name, "INVALID_FOR_SURFACE", `valoare „${v}” pe o coloană care nu se aplică (${type})`);
      continue;
    }
    if (col.optional) continue;
    if (v === "") {
      add(col.name, "UNCLASSIFIED");
      continue;
    }
    if (col.applies === "BROWSER" && type === "AI" && v === "NOT_APPLICABLE") continue;
    if (col.basisFor) {
      const base = (row[col.basisFor] ?? "").trim();
      const needs = !["NOT_VISIBLE", "NOT_APPLICABLE", ""].includes(base);
      if (needs && v === "NOT_APPLICABLE") add(col.name, "BASIS_REQUIRED", `${col.basisFor}=${base}`);
      if (!needs && v !== "NOT_APPLICABLE") add(col.name, "BASIS_WITHOUT_VALUE", `${col.basisFor}=${base}`);
      continue;
    }
    if (col.enum && !col.enum.includes(v)) add(col.name, "INVALID_ENUM", v);
  }

  const status = row.contamination_status;
  const flagged = status === "SUSPECTED" || status === "CONTAMINATED";
  const types = (row.contamination_types ?? "").trim();
  const basis = (row.contamination_basis ?? "").trim();
  if (flagged) {
    if (!types || types === "NOT_APPLICABLE") add("contamination_types", "REQUIRED_FOR_STATUS", status);
    else for (const t of types.split(";").map((x) => x.trim())) if (!CONTAMINATION_TYPES.includes(t)) add("contamination_types", "INVALID_ENUM", t);
    if (!basis || basis === "NOT_APPLICABLE") add("contamination_basis", "REQUIRED_FOR_STATUS", status);
  } else if (status) {
    if (types && types !== "NOT_APPLICABLE") add("contamination_types", "MUST_BE_NOT_APPLICABLE", status);
    if (basis && basis !== "NOT_APPLICABLE") add("contamination_basis", "MUST_BE_NOT_APPLICABLE", status);
  }
  if (row.account_identity_visible === "YES" && row.privacy_flag === "NONE_OBSERVED") {
    add("privacy_flag", "PRIVACY_FLAG_REQUIRED", "account_identity_visible=YES");
  }
  const threadSignal = row.conversation_mode_observed === "EXISTING_CONVERSATION" || row.prior_turns_visible === "YES";
  if (threadSignal && status !== "CONTAMINATED") add("contamination_status", "THREAD_SIGNAL_NOT_CONTAMINATED", `status=${status}`);
}

function aggregateField(rows, field) {
  const values = [...new Set(rows.map((r) => (r[field] ?? "").trim()).filter((v) => !ABSENT.has(v)))];
  if (values.length === 0) return { status: "NOT_VISIBLE", value: "NOT_VISIBLE" };
  if (values.length === 1) return { status: "CONSISTENT", value: values[0] };
  return { status: "CONFLICT", value: values.join(" | ") };
}

function aggregateContamination(rows) {
  const present = new Set(rows.map((r) => r.contamination_status));
  for (const s of CONTAMINATION_SEVERITY) if (present.has(s)) return s;
  return "UNCLASSIFIED";
}

function aggregate(rows) {
  const out = { captures: rows.length, fields: {} };
  for (const f of AGGREGATED_STATE_FIELDS) out.fields[f] = aggregateField(rows, f);
  out.contamination_status = aggregateContamination(rows);
  out.contamination_types = [...new Set(rows.flatMap((r) => (r.contamination_types ?? "").split(";").map((x) => x.trim()).filter((x) => x && x !== "NOT_APPLICABLE")))];
  out.privacy_review_required = rows.filter((r) => r.privacy_flag === "PRIVACY_REVIEW_REQUIRED").map((r) => r.evidence_id);
  out.capture_contamination_counts = Object.fromEntries(CONTAMINATION_SEVERITY.map((s) => [s, rows.filter((r) => r.contamination_status === s).length]));
  return out;
}

const RUN_SHEET_MAP = {
  account_state: "account_state_observed",
  private_window: "private_window_observed",
  displayed_location: "location_displayed",
  model_displayed: "model_displayed",
  account_tier: "account_tier_observed",
  language_interface: "ui_language_observed",
};

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node build_session_context.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  if (!(await pathExists(P.sessionContextPath))) {
    console.error("FAIL: lipsește session-context.csv — rulează inventory_archive.mjs.");
    process.exit(1);
  }
  const rows = parseCsv(await fs.readFile(P.sessionContextPath, "utf8"));
  const issues = [];
  for (const r of rows) validateRow(r, issues);
  for (const r of rows) {
    const obs = (r.observed_surface ?? "").trim();
    if (obs && obs !== "UNKNOWN" && obs !== r.mapped_surface) {
      issues.push({ scope: "CAPTURE", id: r.evidence_id, field: "observed_surface", issue: "MISFILED_SURFACE", detail: `${r.mapped_surface} → ${obs}` });
    }
  }

  for (const r of rows) {
    if (r.privacy_flag === "PRIVACY_REVIEW_REQUIRED") {
      issues.push({ scope: "CAPTURE", id: r.evidence_id, field: "privacy_flag", issue: "PRIVACY_REVIEW_REQUIRED", detail: r.mapped_surface });
    }
    if (r.review_status === "REVIEW_REQUIRED") {
      issues.push({ scope: "CAPTURE", id: r.evidence_id, field: "review_status", issue: "REVIEW_REQUIRED", detail: r.notes ?? "" });
    }
  }

  // Agregare pe suprafață.
  const bySurface = {};
  for (const s of [...new Set(rows.map((r) => r.mapped_surface))]) {
    bySurface[s] = aggregate(rows.filter((r) => r.mapped_surface === s));
  }

  // Agregare pe execuție — doar dacă STEP 7 a completat query_id.
  const byExecution = {};
  if (await pathExists(P.captureClassificationPath)) {
    const cls = new Map(parseCsv(await fs.readFile(P.captureClassificationPath, "utf8")).map((r) => [r.evidence_id, r]));
    const groups = new Map();
    for (const r of rows) {
      const c = cls.get(r.evidence_id);
      const q = (c?.query_id ?? "").trim();
      if (!q || q === "NOT_APPLICABLE") continue;
      const exec = executionId(config.instance_id, r.mapped_surface, q, c.attempt || 1);
      if (!groups.has(exec)) groups.set(exec, []);
      groups.get(exec).push(r);
    }
    for (const [exec, list] of groups) byExecution[exec] = aggregate(list);
  }

  for (const [scope, table] of [["SURFACE", bySurface], ["EXECUTION", byExecution]]) {
    for (const [id, agg] of Object.entries(table)) {
      for (const [f, a] of Object.entries(agg.fields)) {
        if (a.status === "CONFLICT") issues.push({ scope, id, field: f, issue: "CONFLICT", detail: a.value });
      }
      if (agg.contamination_status === "SUSPECTED" || agg.contamination_status === "CONTAMINATED") {
        issues.push({ scope, id, field: "contamination_status", issue: agg.contamination_status, detail: agg.contamination_types.join(";") });
      }
    }
  }

  // Reconciliere cu fișa rulării (opțională).
  const reconciliation = {};
  const runSheetPath = config.run_sheet?.path ? path.resolve(config.run_sheet.path) : null;
  if (runSheetPath && (await pathExists(runSheetPath))) {
    const sheet = await readConfig(runSheetPath);
    for (const [surface, decl] of Object.entries(sheet.surfaces ?? {})) {
      reconciliation[surface] = {};
      for (const [declField, obsField] of Object.entries(RUN_SHEET_MAP)) {
        const declared = decl?.[declField];
        const observed = bySurface[surface]?.fields?.[obsField]?.value ?? "NOT_VISIBLE";
        const hasDecl = declared !== undefined && declared !== null && String(declared).trim() !== "";
        let result;
        if (!hasDecl) result = observed === "NOT_VISIBLE" ? null : "NOT_DECLARED";
        else if (observed === "NOT_VISIBLE") result = "NOT_OBSERVABLE";
        else result = String(declared).trim().toLowerCase() === observed.trim().toLowerCase() ? "MATCH" : "MISMATCH";
        if (!result) continue;
        reconciliation[surface][obsField] = { declared: hasDecl ? String(declared) : null, observed, result };
        if (result === "MISMATCH") issues.push({ scope: "SURFACE", id: surface, field: obsField, issue: "RUN_SHEET_MISMATCH", detail: `declarat=${declared}; observat=${observed}` });
      }
    }
  }

  const blocking = issues.filter((i) => ["UNCLASSIFIED", "INVALID_ENUM", "INVALID_FOR_SURFACE", "BASIS_REQUIRED", "BASIS_WITHOUT_VALUE", "REQUIRED_FOR_STATUS", "MUST_BE_NOT_APPLICABLE", "PRIVACY_FLAG_REQUIRED"].includes(i.issue));
  const status = blocking.length ? "INCOMPLETE" : "READY_FOR_REVIEW_0";

  await writeText(P.sessionReviewPath, toCsv(["scope", "id", "field", "issue", "detail"], issues));
  await writeJson(P.sessionSummaryPath, {
    generated_at: new Date().toISOString(),
    status,
    captures: rows.length,
    blocking_issue_count: blocking.length,
    review_item_count: issues.length - blocking.length,
    by_surface: bySurface,
    by_execution: byExecution,
    run_sheet_reconciliation: runSheetPath ? reconciliation : "NO_RUN_SHEET",
  });
  await appendLog(P.logPath, { operation: "session_context", status, script: SCRIPT, output: { issues: issues.length, blocking: blocking.length } });

  console.log(`SESSION CONTEXT — status: ${status} (${rows.length} capturi; ${blocking.length} probleme blocante; ${issues.length - blocking.length} elemente de review)`);
  const cols = ["private_window_observed", "account_state_observed", "conversation_mode_observed", "location_displayed"];
  console.log(`  ${"suprafață".padEnd(11)} ${"incognito".padEnd(12)} ${"cont".padEnd(12)} ${"conversație".padEnd(22)} contaminare`);
  for (const [s, a] of Object.entries(bySurface)) {
    const v = cols.map((c) => a.fields[c]);
    const fmt = (x) => (x.status === "CONFLICT" ? `CONFLICT` : x.value);
    console.log(`  ${s.padEnd(11)} ${fmt(v[0]).padEnd(12)} ${fmt(v[1]).padEnd(12)} ${fmt(v[2]).padEnd(22)} ${a.contamination_status}`);
  }
  console.log(`  → ${P.sessionReviewPath}\n  → ${P.sessionSummaryPath}`);
  if (blocking.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
