#!/usr/bin/env node
// mkt-evidence-package / scripts/build_register.mjs
//
// STEP 10 (staging) / STEP 11 (--finalize). Construiește Observation Register
// (references/observation-register-schema.md) din observation-staging.csv
// completat de Claude/user: validează enum-urile și referințele (execuție,
// Evidence ID, părinte SERP_SNIPPET), derivă ID-urile, benzile de adâncime,
// stratul, contaminarea execuției și candidate_union_inclusion.
//
// Usage: node build_register.mjs <config.yaml> [--finalize]

import path from "node:path";
import { promises as fs } from "node:fs";
import { parseCsv, toCsv, writeText, writeJson, appendLog, assertNotFrozen } from "./lib/common.mjs";
import { loadConfig, instancePaths, artifactName, SURFACES } from "./lib/mkt.mjs";
import { OBSERVATION_STAGING_HEADER } from "./lib/schema.mjs";

const SCRIPT = "build_register.mjs";

export const STAGING_HEADER = OBSERVATION_STAGING_HEADER;

export const REGISTER_HEADER = [
  "observation_id",
  "execution_id",
  "instance_id",
  "surface",
  "query_id",
  "query_set_id",
  "query_layer",
  "evidence_ids",
  "provenance",
  "serp_block",
  "result_layer",
  "organic_position",
  "observed_order",
  "depth_band",
  "beyond_declared_depth",
  "parent_observation_order",
  "observed_name",
  "title_displayed",
  "url_displayed",
  "url_truncated",
  "snippet_or_description_observed",
  "entity_kind_observed",
  "named_as_recommendation",
  "query_relevance",
  "relevance_basis",
  "execution_contamination_status",
  "candidate_union_inclusion",
  "review_status",
  "notes",
];

const ENUMS = {
  provenance: ["SERP_RESULT", "SERP_SNIPPET", "AI_RESPONSE", "AI_CITATION", "AI_IMAGE_TEXT"],
  serp_block: ["ORGANIC", "ADS", "LOCAL", "PAA", "AI_OVERVIEW", "GENERATED_ANSWER", "OTHER", "NOT_APPLICABLE"],
  url_truncated: ["YES", "NO", "UNKNOWN", "NOT_APPLICABLE"],
  entity_kind_observed: [
    "PROVIDER_PAGE", "PROVIDER_NAMED", "ARTICLE_GUIDE", "DIRECTORY_LIST", "SOFTWARE_TOOL",
    "PUBLISHER", "PERSON_PROFILE", "PERSON_ASSOCIATED", "FORUM_SOCIAL", "OTHER", "UNCERTAIN",
  ],
  named_as_recommendation: ["YES", "NO", "UNCERTAIN", "NOT_APPLICABLE"],
  query_relevance: ["RELEVANT", "IRRELEVANT", "UNCERTAIN"],
  review_status: ["REVIEWED", "REVIEW_REQUIRED"],
};
const OPTIONAL = new Set(["relevance_basis", "notes"]);
// Blocurile SERP generate de AI: rândurile lor au proveniență AI_*, pe o suprafață SEARCH.
const SERP_AI_BLOCKS = ["AI_OVERVIEW", "GENERATED_ANSWER"];
const AI_PROVENANCE = ["AI_RESPONSE", "AI_CITATION", "AI_IMAGE_TEXT"];

/** Rezultatul execuției, separat de prezența rândurilor (observation-register-schema.md §Execuții). */
function executionOutcome(status, rows) {
  if (status !== "COMPLETED") return status || "UNKNOWN";
  if (rows.length === 0) return "COMPLETED_NO_NAMED_ENTITIES";
  if (!rows.some((r) => r.candidate_union_inclusion === "INCLUDE")) return "COMPLETED_NO_UNION_CANDIDATES";
  return "COMPLETED_WITH_CANDIDATES";
}

function inclusion(r) {
  if (r.query_relevance === "IRRELEVANT") return "EXCLUDE_IRRELEVANT";
  if (r.query_relevance === "UNCERTAIN") return r.review_status === "REVIEWED" ? "EXCLUDE_UNCERTAIN" : "REVIEW";
  if (["PROVIDER_PAGE", "PROVIDER_NAMED", "SOFTWARE_TOOL"].includes(r.entity_kind_observed)) return "INCLUDE";
  if (r.entity_kind_observed === "UNCERTAIN") return r.review_status === "REVIEWED" ? "EXCLUDE_UNCERTAIN" : "REVIEW";
  return "EXCLUDE_NOT_PROVIDER";
}

async function main() {
  const configPath = process.argv[2];
  const finalize = process.argv.includes("--finalize");
  if (!configPath) {
    console.error("Usage: node build_register.mjs <config.yaml> [--finalize]");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const stagingIn = path.join(P.workDir, "observation-staging.csv");
  const capIndex = parseCsv(await fs.readFile(path.join(P.workDir, "capture-index.staging.csv"), "utf8"));
  const querySet = new Map(parseCsv(await fs.readFile(P.querySetPath, "utf8")).map((q) => [q.query_id, q]));
  const staged = parseCsv(await fs.readFile(stagingIn, "utf8"));

  const execs = new Map();
  for (const c of capIndex) {
    if (c.execution_id === "NOT_APPLICABLE") continue;
    if (!execs.has(c.execution_id)) execs.set(c.execution_id, { surface: c.mapped_surface, query_id: c.query_id, contamination: c.execution_contamination_status, status: c.execution_status, aiOverview: new Set(), evidence: new Set() });
    execs.get(c.execution_id).evidence.add(c.evidence_id);
    if (c.ai_overview_evidence_id && c.ai_overview_evidence_id !== "NOT_APPLICABLE") execs.get(c.execution_id).evidence.add(c.ai_overview_evidence_id);
    execs.get(c.execution_id).aiOverview.add(c.ai_overview_status);
  }

  const depth = Number(config.search?.declared_depth ?? NaN);
  const band = Number(config.search?.depth_band_size ?? 10);
  const issues = [];
  const add = (id, field, issue, detail = "") => issues.push({ scope: "OBSERVATION", id, field, issue, detail });

  // Ordinea în execuție: observed_order (stabil), apoi ordinea din fișier.
  const byExec = new Map();
  staged.forEach((s, idx) => {
    if (!byExec.has(s.execution_id)) byExec.set(s.execution_id, []);
    byExec.get(s.execution_id).push({ s, idx });
  });

  const rows = [];
  for (const [execId, list] of byExec) {
    const ex = execs.get(execId);
    list.sort((a, b) => Number(a.s.observed_order) - Number(b.s.observed_order) || a.idx - b.idx);
    list.forEach(({ s }, n) => {
      const id = `${execId}-O${String(n + 1).padStart(3, "0")}`;
      const r = {};
      for (const h of REGISTER_HEADER) r[h] = "";
      for (const h of STAGING_HEADER) {
        const v = (s[h] ?? "").trim();
        r[h] = v === "" && !OPTIONAL.has(h) ? "UNCLASSIFIED" : v;
        if (r[h] === "UNCLASSIFIED") add(id, h, "UNCLASSIFIED");
      }
      r.observation_id = id;
      r.instance_id = config.instance_id;
      if (!ex) {
        add(id, "execution_id", "UNKNOWN_EXECUTION", execId);
      } else {
        r.surface = ex.surface;
        r.query_id = ex.query_id;
        r.execution_contamination_status = ex.contamination;
        for (const e of r.evidence_ids.split(";").map((x) => x.trim()).filter(Boolean)) {
          if (!ex.evidence.has(e)) add(id, "evidence_ids", "EVIDENCE_NOT_IN_EXECUTION", e);
        }
      }
      const q = querySet.get(r.query_id);
      r.query_set_id = config.query_set.query_set_id;
      r.query_layer = q?.layer ?? "UNKNOWN";
      for (const [h, allowed] of Object.entries(ENUMS)) {
        if (r[h] !== "UNCLASSIFIED" && !allowed.includes(r[h])) add(id, h, "INVALID_ENUM", r[h]);
      }
      // PRIMARY: rezultatele organice, AI Overview (bloc integrat în SERP-ul Google, RV-05) și
      // răspunsurile suprafețelor AI. Orice alt modul SERP e SUPPLEMENTAL.
      r.result_layer = ["ORGANIC", "AI_OVERVIEW", "NOT_APPLICABLE"].includes(r.serp_block) ? "PRIMARY" : "SUPPLEMENTAL";
      // Rândurile AI Overview citează ID-urile de evidență ale blocului (<Evidence ID>-AIO); celelalte nu.
      const evs = r.evidence_ids.split(";").map((x) => x.trim()).filter(Boolean);
      const aioEv = evs.filter((e) => e.endsWith("-AIO"));
      if (r.serp_block === "AI_OVERVIEW" && aioEv.length !== evs.length) {
        add(id, "evidence_ids", "AI_OVERVIEW_EVIDENCE_MISMATCH", "rândurile AI_OVERVIEW citează doar <Evidence ID>-AIO");
      } else if (r.serp_block !== "AI_OVERVIEW" && aioEv.length) {
        add(id, "evidence_ids", "AI_OVERVIEW_EVIDENCE_MISMATCH", `${aioEv.join(";")} pe un rând ${r.serp_block}`);
      }
      const stype = SURFACES[r.surface];
      if (stype === "AI") {
        if (r.serp_block !== "NOT_APPLICABLE") add(id, "serp_block", "PROVENANCE_SURFACE_MISMATCH", `${r.serp_block} pe suprafața AI ${r.surface}`);
        if (!AI_PROVENANCE.includes(r.provenance)) add(id, "provenance", "PROVENANCE_SURFACE_MISMATCH", `${r.provenance} pe suprafața AI ${r.surface}`);
      } else if (stype === "SEARCH") {
        if (AI_PROVENANCE.includes(r.provenance) && !SERP_AI_BLOCKS.includes(r.serp_block)) {
          add(id, "serp_block", "PROVENANCE_SURFACE_MISMATCH", `${r.provenance} pe Search cere serp_block ${SERP_AI_BLOCKS.join("/")}`);
        }
        if (r.provenance === "AI_IMAGE_TEXT") add(id, "provenance", "PROVENANCE_SURFACE_MISMATCH", "AI_IMAGE_TEXT doar pe suprafețele AI");
        if (r.serp_block === "NOT_APPLICABLE") add(id, "serp_block", "PROVENANCE_SURFACE_MISMATCH", "rândurile Search au un bloc SERP");
      }
      if (r.serp_block === "AI_OVERVIEW" && ex && !ex.aiOverview.has("CAPTURED")) {
        add(id, "serp_block", "AI_OVERVIEW_STATUS_MISMATCH", `ai_overview_status=${[...ex.aiOverview].join(";")}`);
      }
      if (r.entity_kind_observed === "PERSON_ASSOCIATED" && !r.notes) {
        add(id, "notes", "ASSOCIATION_NOTE_REQUIRED", "numește organizația și rolul (ex. «fondator gr.AI»)");
      }
      const pos = Number(r.organic_position);
      if (Number.isInteger(pos) && pos > 0) {
        const lo = Math.floor((pos - 1) / band) * band + 1;
        r.depth_band = `${lo}-${lo + band - 1}`;
        r.beyond_declared_depth = Number.isFinite(depth) ? (pos > depth ? "YES" : "NO") : "NOT_APPLICABLE";
      } else {
        r.depth_band = "NOT_APPLICABLE";
        r.beyond_declared_depth = "NOT_APPLICABLE";
        if (r.provenance === "SERP_RESULT" && r.serp_block === "ORGANIC") add(id, "organic_position", "POSITION_REQUIRED", r.organic_position);
      }
      if (r.provenance === "SERP_SNIPPET" && !/^\d+$/.test(r.parent_observation_order)) add(id, "parent_observation_order", "PARENT_REQUIRED");
      if (["IRRELEVANT", "UNCERTAIN"].includes(r.query_relevance) && !r.relevance_basis) add(id, "relevance_basis", "BASIS_REQUIRED", r.query_relevance);
      r.candidate_union_inclusion = inclusion(r);
      if (r.candidate_union_inclusion === "REVIEW") add(id, "candidate_union_inclusion", "REVIEW", `${r.observed_name} — ${r.relevance_basis}`);
      if (r.review_status === "REVIEW_REQUIRED") add(id, "review_status", "REVIEW_REQUIRED", r.notes);
      rows.push(r);
    });
    // observed_order unic pe execuție: e cheia deciziilor de review (apply_review_decisions.mjs).
    const seenOrder = new Map();
    for (const { s } of list) seenOrder.set(s.observed_order, (seenOrder.get(s.observed_order) ?? 0) + 1);
    for (const [o, n] of seenOrder) {
      if (n > 1) issues.push({ scope: "EXECUTION", id: execId, field: "observed_order", issue: "DUPLICATE_OBSERVED_ORDER", detail: `${o} ×${n}` });
    }
    // SERP_SNIPPET → părintele trebuie să existe în aceeași execuție.
    const orders = new Set(list.filter(({ s }) => s.provenance === "SERP_RESULT").map(({ s }) => s.observed_order));
    for (const { s } of list) {
      if (s.provenance === "SERP_SNIPPET" && !orders.has(s.parent_observation_order)) {
        add(`${execId}`, "parent_observation_order", "PARENT_NOT_FOUND", `${s.observed_name} → ${s.parent_observation_order}`);
      }
    }
    // Poziții organice unice și continue pe execuție (SERP_RESULT organic).
    const positions = list
      .filter(({ s }) => s.provenance === "SERP_RESULT" && s.serp_block === "ORGANIC")
      .map(({ s }) => Number(s.organic_position))
      .sort((a, b) => a - b);
    if (positions.length) {
      const dup = positions.filter((p, i) => i > 0 && p === positions[i - 1]);
      const gaps = positions.filter((p, i) => i > 0 && p !== positions[i - 1] + 1 && p !== positions[i - 1]);
      if (dup.length || gaps.length || positions[0] !== 1) {
        issues.push({ scope: "EXECUTION", id: execId, field: "organic_position", issue: "POSITIONS_NOT_CONTIGUOUS", detail: `duplicate=${dup.join(",")}; după gol=${gaps.join(",")}; prima=${positions[0]}` });
      }
    }
  }

  // Rezultatul fiecărei execuții. Execuțiile fără observații nu sunt lipsă: se confirmă la REVIEW (2).
  const noObs = [...execs.keys()].filter((e) => !byExec.has(e));
  const outcomes = {};
  for (const [e, ex] of execs) {
    outcomes[e] = executionOutcome(ex.status, rows.filter((r) => r.execution_id === e));
    if (outcomes[e] !== "COMPLETED_WITH_CANDIDATES") {
      issues.push({ scope: "EXECUTION", id: e, field: "execution_outcome", issue: outcomes[e], detail: "de confirmat la REVIEW (2): rezultatul răspunsului, nu absență a furnizorilor" });
    }
  }

  const blockingKinds = ["UNCLASSIFIED", "INVALID_ENUM", "UNKNOWN_EXECUTION", "EVIDENCE_NOT_IN_EXECUTION", "POSITION_REQUIRED", "PARENT_REQUIRED", "PARENT_NOT_FOUND", "BASIS_REQUIRED", "POSITIONS_NOT_CONTIGUOUS", "PROVENANCE_SURFACE_MISMATCH", "AI_OVERVIEW_STATUS_MISMATCH", "AI_OVERVIEW_EVIDENCE_MISMATCH", "ASSOCIATION_NOTE_REQUIRED", "DUPLICATE_OBSERVED_ORDER"];
  const blocking = issues.filter((i) => blockingKinds.includes(i.issue));
  const stagingOut = path.join(P.workDir, "observation-register.staging.csv");
  const reviewOut = path.join(P.workDir, "observation-review.csv");
  await writeText(stagingOut, toCsv(REGISTER_HEADER, rows));
  await writeText(reviewOut, toCsv(["scope", "id", "field", "issue", "detail"], issues));

  const count = (f) => rows.reduce((m, r) => ((m[r[f]] = (m[r[f]] ?? 0) + 1), m), {});
  const stats = {
    generated_at: new Date().toISOString(),
    observations: rows.length,
    by_provenance: count("provenance"),
    by_serp_block: count("serp_block"),
    by_surface: count("surface"),
    by_query: count("query_id"),
    by_depth_band: count("depth_band"),
    by_query_relevance: count("query_relevance"),
    by_inclusion: count("candidate_union_inclusion"),
    by_entity_kind: count("entity_kind_observed"),
    without_url: rows.filter((r) => r.url_displayed === "NOT_VISIBLE").length,
    executions_without_observations: noObs,
    execution_outcomes: outcomes,
    by_execution_outcome: Object.values(outcomes).reduce((m, o) => ((m[o] = (m[o] ?? 0) + 1), m), {}),
    blocking_issue_count: blocking.length,
    review_item_count: issues.length - blocking.length,
  };
  await writeJson(path.join(P.workDir, "register-stats.json"), stats);

  if (finalize) {
    if (blocking.length) {
      console.error(`FAIL: --finalize refuzat: ${blocking.length} probleme blocante (vezi ${reviewOut}).`);
      process.exit(1);
    }
    const outPath = path.join(P.outputDir, artifactName(config.instance_slug, "observation-register", config.metadata_version, "csv"));
    await assertNotFrozen(outPath);
    await fs.mkdir(P.outputDir, { recursive: true });
    await writeText(outPath, toCsv(REGISTER_HEADER, rows));
    console.log(`FINALIZAT → ${outPath}`);
  }
  await appendLog(P.logPath, { operation: finalize ? "register_finalize" : "register_staging", status: blocking.length ? "INCOMPLETE" : "OK", script: SCRIPT, output: { observations: rows.length, issues: issues.length } });

  console.log(`OBSERVATION REGISTER — ${rows.length} observații; ${blocking.length} probleme blocante; ${issues.length - blocking.length} elemente de review`);
  for (const k of ["by_provenance", "by_serp_block", "by_query_relevance", "by_inclusion", "by_depth_band", "by_execution_outcome"]) console.log(`  ${k}: ${JSON.stringify(stats[k])}`);
  console.log(`  fără URL: ${stats.without_url}; execuții fără observații: ${noObs.length}`);
  console.log(`  → ${stagingOut}\n  → ${reviewOut}`);
  if (blocking.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
