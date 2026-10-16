#!/usr/bin/env node
// mkt-evidence-package / scripts/build_capture_index.mjs
//
// STEP 8 (staging) / STEP 11 (--finalize). Combină manifestul, inventarul,
// session-context.csv și capture-classification.csv în capture index-ul
// definit în references/capture-index-schema.md. Validează enum-urile,
// derivă execution_id, potrivirea cu textul din set, statusul de context și
// contaminarea pe execuție, apoi raportează execuțiile reconstituite față de
// queries_executed × suprafețele detectate.
//
// Usage: node build_capture_index.mjs <config.yaml> [--finalize]

import path from "node:path";
import { promises as fs } from "node:fs";
import {
  pathExists,
  parseCsv,
  toCsv,
  writeText,
  writeJson,
  readJson,
  appendLog,
  assertNotFrozen,
} from "./lib/common.mjs";
import {
  loadConfig,
  instancePaths,
  executionId,
  SURFACES,
  artifactName,
} from "./lib/mkt.mjs";
import {
  CONTAMINATION_SEVERITY,
  AGGREGATED_STATE_FIELDS,
} from "./lib/schema.mjs";

const SCRIPT = "build_capture_index.mjs";

export const CAPTURE_INDEX_HEADER = [
  "evidence_id",
  "instance_id",
  "instance_type",
  "original_relative_path",
  "original_filename",
  "archive_surface_folder",
  "mapped_surface",
  "observed_surface",
  "query_id",
  "query_text_visible",
  "query_text_matches_set",
  "attempt",
  "execution_id",
  "capture_role",
  "part_number",
  "parts_total",
  "serp_page",
  "organic_positions_visible",
  "blocks_visible",
  "execution_status",
  "response_relevance",
  "relevance_basis",
  "ai_overview_status",
  "ai_overview_evidence_id",
  "ai_overview_part",
  "capture_time_on_screen",
  "filename_timestamp_raw",
  "filename_timestamp_parsed",
  "mapping_basis",
  "mapping_status",
  "archive_anomaly",
  "session_context_status",
  "execution_contamination_status",
  "privacy_flag",
  "review_status",
  "file_size_bytes",
  "image_dimensions_pixels",
  "sha256",
  "duplicate_status",
  "duplicate_of_evidence_id",
  "reviewer_comment",
  "notes",
];

const ENUMS = {
  capture_role: [
    "query_input",
    "main_response",
    "clarification_response",
    "serp_supplemental",
    "setup",
    "incident",
  ],
  execution_status: [
    "COMPLETED",
    "CLARIFICATION_REQUESTED",
    "UNAVAILABLE",
    "TECHNICAL_ERROR",
    "UNKNOWN",
  ],
  response_relevance: [
    "RELEVANT",
    "PARTIALLY_RELEVANT",
    "IRRELEVANT",
    "UNCERTAIN",
    "NOT_APPLICABLE",
  ],
  ai_overview_status: [
    "CAPTURED",
    "NOT_CAPTURED",
    "NOT_SHOWN",
    "UNKNOWN",
    "NOT_APPLICABLE",
  ],
  mapping_status: ["CONFIRMED", "REVIEW_REQUIRED"],
  archive_anomaly: [
    "NONE",
    "MISFILED_SURFACE",
    "UNEXPECTED_FILE",
    "ORDER_CONFLICT",
    "OTHER",
  ],
  review_status: ["REVIEWED", "REVIEW_REQUIRED"],
};
const BLOCKS = [
  "ORGANIC",
  "ADS",
  "LOCAL",
  "PAA",
  "AI_OVERVIEW",
  "GENERATED_ANSWER",
  "REMOVAL_NOTICE",
  "OTHER",
  "NOT_APPLICABLE",
];
const OPTIONAL = new Set(["relevance_basis", "reviewer_comment", "notes"]);
const INT_OR_NA = ["serp_page"];
const INT = ["attempt", "part_number", "parts_total"];

function normalizeText(s) {
  return (s ?? "").normalize("NFC").replace(/\s+/g, " ").trim();
}

async function main() {
  const configPath = process.argv[2];
  const finalize = process.argv.includes("--finalize");
  if (!configPath) {
    console.error(
      "Usage: node build_capture_index.mjs <config.yaml> [--finalize]",
    );
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const inventory = await readJson(P.inventoryPath);
  const querySet = new Map(
    parseCsv(await fs.readFile(P.querySetPath, "utf8")).map((q) => [
      q.query_id,
      q,
    ]),
  );
  const session = new Map(
    parseCsv(await fs.readFile(P.sessionContextPath, "utf8")).map((r) => [
      r.evidence_id,
      r,
    ]),
  );
  const cls = new Map(
    parseCsv(await fs.readFile(P.captureClassificationPath, "utf8")).map(
      (r) => [r.evidence_id, r],
    ),
  );

  const issues = [];
  const add = (id, field, issue, detail = "") =>
    issues.push({ scope: "CAPTURE", id, field, issue, detail });

  const rows = inventory.files.map((f) => {
    const c = cls.get(f.evidence_id) ?? {};
    const s = session.get(f.evidence_id) ?? {};
    const row = {};
    for (const h of CAPTURE_INDEX_HEADER) row[h] = "";
    Object.assign(row, {
      evidence_id: f.evidence_id,
      instance_id: config.instance_id,
      instance_type: config.instance_type,
      original_relative_path: f.relative_path_nfc,
      original_filename: f.original_filename.normalize("NFC"),
      archive_surface_folder: f.archive_surface_folder.normalize("NFC"),
      mapped_surface: f.mapped_surface,
      observed_surface: s.observed_surface || "UNCLASSIFIED",
      filename_timestamp_raw: f.filename_timestamp_raw,
      filename_timestamp_parsed: f.filename_timestamp_parsed,
      privacy_flag: s.privacy_flag || "UNCLASSIFIED",
      file_size_bytes: String(f.file_size_bytes),
      image_dimensions_pixels: f.image_dimensions_pixels,
      sha256: f.sha256,
      duplicate_status: f.duplicate_status,
      duplicate_of_evidence_id: f.duplicate_of_evidence_id,
    });
    for (const h of [
      "query_id",
      "query_text_visible",
      "attempt",
      "capture_role",
      "part_number",
      "parts_total",
      "serp_page",
      "organic_positions_visible",
      "blocks_visible",
      "execution_status",
      "response_relevance",
      "relevance_basis",
      "ai_overview_status",
      "capture_time_on_screen",
      "mapping_basis",
      "mapping_status",
      "archive_anomaly",
      "review_status",
      "reviewer_comment",
      "notes",
    ]) {
      const v = (c[h] ?? "").trim();
      row[h] = v === "" && !OPTIONAL.has(h) ? "UNCLASSIFIED" : v;
      if (row[h] === "UNCLASSIFIED") add(f.evidence_id, h, "UNCLASSIFIED");
    }
    for (const [h, allowed] of Object.entries(ENUMS)) {
      if (row[h] !== "UNCLASSIFIED" && !allowed.includes(row[h]))
        add(f.evidence_id, h, "INVALID_ENUM", row[h]);
    }
    for (const h of INT)
      if (row[h] !== "UNCLASSIFIED" && !/^[1-9]\d*$/.test(row[h]))
        add(f.evidence_id, h, "NOT_INTEGER", row[h]);
    for (const h of INT_OR_NA)
      if (
        row[h] !== "UNCLASSIFIED" &&
        row[h] !== "NOT_APPLICABLE" &&
        !/^[1-9]\d*$/.test(row[h])
      )
        add(f.evidence_id, h, "NOT_INTEGER", row[h]);
    if (
      row.organic_positions_visible !== "UNCLASSIFIED" &&
      !/^(\d+-\d+|NONE|NOT_APPLICABLE)$/.test(row.organic_positions_visible)
    ) {
      add(
        f.evidence_id,
        "organic_positions_visible",
        "INVALID_FORMAT",
        row.organic_positions_visible,
      );
    }
    if (row.blocks_visible !== "UNCLASSIFIED") {
      for (const b of row.blocks_visible
        .split(";")
        .map((x) => x.trim())
        .filter(Boolean))
        if (!BLOCKS.includes(b))
          add(f.evidence_id, "blocks_visible", "INVALID_ENUM", b);
    }
    if (
      !["RELEVANT", "NOT_APPLICABLE", "UNCLASSIFIED"].includes(
        row.response_relevance,
      ) &&
      !row.relevance_basis
    ) {
      add(
        f.evidence_id,
        "relevance_basis",
        "BASIS_REQUIRED",
        row.response_relevance,
      );
    }
    if (row.mapping_basis === "UNCLASSIFIED")
      add(f.evidence_id, "mapping_basis", "BASIS_REQUIRED");
    if (
      row.query_id !== "UNCLASSIFIED" &&
      row.query_id !== "NOT_APPLICABLE" &&
      !querySet.has(row.query_id)
    ) {
      add(f.evidence_id, "query_id", "NOT_IN_QUERY_SET", row.query_id);
    }
    // Derivate.
    const q = querySet.get(row.query_id);
    if (!q) row.query_text_matches_set = "NOT_APPLICABLE";
    else if (["NOT_VISIBLE", "UNCLASSIFIED"].includes(row.query_text_visible))
      row.query_text_matches_set = "NOT_APPLICABLE";
    else
      row.query_text_matches_set =
        normalizeText(row.query_text_visible) === normalizeText(q.query_exact)
          ? "YES"
          : "NO";
    if (row.query_text_matches_set === "NO")
      add(
        f.evidence_id,
        "query_text_visible",
        "QUERY_TEXT_MISMATCH",
        row.query_text_visible,
      );
    row.execution_id = q
      ? executionId(
          config.instance_id,
          f.mapped_surface,
          row.query_id,
          row.attempt,
        )
      : "NOT_APPLICABLE";
    if (row.mapping_status === "REVIEW_REQUIRED")
      add(
        f.evidence_id,
        "mapping_status",
        "REVIEW_REQUIRED",
        row.mapping_basis,
      );
    if (
      ["PARTIALLY_RELEVANT", "IRRELEVANT", "UNCERTAIN"].includes(
        row.response_relevance,
      )
    ) {
      add(
        f.evidence_id,
        "response_relevance",
        row.response_relevance,
        row.relevance_basis,
      );
    }
    if (
      row.archive_anomaly !== "NONE" &&
      row.archive_anomaly !== "UNCLASSIFIED"
    )
      add(f.evidence_id, "archive_anomaly", row.archive_anomaly, row.notes);
    if (row.review_status === "REVIEW_REQUIRED")
      add(f.evidence_id, "review_status", "REVIEW_REQUIRED", row.notes);
    return row;
  });

  // Agregare pe execuție.
  const execs = new Map();
  for (const r of rows) {
    if (r.execution_id === "NOT_APPLICABLE") continue;
    if (!execs.has(r.execution_id)) execs.set(r.execution_id, []);
    execs.get(r.execution_id).push(r);
  }
  const execSummary = {};
  for (const [id, list] of execs) {
    const sess = list.map((r) => session.get(r.evidence_id));
    const present = new Set(sess.map((s) => s.contamination_status));
    const contamination =
      CONTAMINATION_SEVERITY.find((x) => present.has(x)) ?? "UNCLASSIFIED";
    let ctx = "NOT_VISIBLE";
    for (const fld of AGGREGATED_STATE_FIELDS) {
      const vals = new Set(
        sess
          .map((s) => s[fld])
          .filter(
            (v) =>
              v && !["NOT_VISIBLE", "NOT_APPLICABLE", "UNKNOWN"].includes(v),
          ),
      );
      if (vals.size > 1) ctx = "CONFLICT";
      else if (vals.size === 1 && ctx !== "CONFLICT") ctx = "CONSISTENT";
    }
    for (const r of list) {
      r.execution_contamination_status = contamination;
      r.session_context_status = ctx;
    }
    const parts = list.map((r) => Number(r.part_number)).sort((a, b) => a - b);
    const totals = new Set(list.map((r) => r.parts_total));
    const statuses = new Set(list.map((r) => r.execution_status));
    const relevances = new Set(list.map((r) => r.response_relevance));
    const contiguous = parts.every((p, i) => p === i + 1);
    if (
      !contiguous ||
      totals.size !== 1 ||
      Number([...totals][0]) !== list.length
    ) {
      issues.push({
        scope: "EXECUTION",
        id,
        field: "part_number",
        issue: "PARTS_INCONSISTENT",
        detail: `părți=${parts.join(",")}; total=${[...totals].join("|")}; capturi=${list.length}`,
      });
    }
    if (statuses.size > 1)
      issues.push({
        scope: "EXECUTION",
        id,
        field: "execution_status",
        issue: "CONFLICT",
        detail: [...statuses].join("|"),
      });
    if (relevances.size > 1)
      issues.push({
        scope: "EXECUTION",
        id,
        field: "response_relevance",
        issue: "CONFLICT",
        detail: [...relevances].join("|"),
      });
    // AI Overview (RV-05, 2026-10-12): bloc integrat în SERP-ul Google, cu ID de evidență propriu
    // pe fiecare captură în care se vede (naming-convention.md §3.2). Nu e un fișier separat.
    const aio = list
      .filter((r) =>
        r.blocks_visible
          .split(";")
          .map((x) => x.trim())
          .includes("AI_OVERVIEW"),
      )
      .sort((a, b) => Number(a.part_number) - Number(b.part_number));
    const aioStatus = new Set(list.map((r) => r.ai_overview_status));
    if (aio.length && list[0].mapped_surface !== "GSEARCH") {
      issues.push({
        scope: "EXECUTION",
        id,
        field: "blocks_visible",
        issue: "AI_OVERVIEW_STATUS_MISMATCH",
        detail: `AI_OVERVIEW pe ${list[0].mapped_surface}`,
      });
    } else if (
      list[0].mapped_surface === "GSEARCH" &&
      aio.length > 0 !== aioStatus.has("CAPTURED")
    ) {
      issues.push({
        scope: "EXECUTION",
        id,
        field: "ai_overview_status",
        issue: "AI_OVERVIEW_STATUS_MISMATCH",
        detail: `ai_overview_status=${[...aioStatus].join("|")}; capturi cu blocul AI_OVERVIEW=${aio.length}`,
      });
    }
    aio.forEach((r, i) => {
      r.ai_overview_evidence_id = `${r.evidence_id}-AIO`;
      r.ai_overview_part = `${i + 1}/${aio.length}`;
    });
    execSummary[id] = {
      surface: list[0].mapped_surface,
      query_id: list[0].query_id,
      captures: list.length,
      evidence_ids: list.map((r) => r.evidence_id),
      ai_overview_evidence_ids: aio.map((r) => r.ai_overview_evidence_id),
      execution_status: [...statuses].join("|"),
      response_relevance: [...relevances].join("|"),
      session_context_status: ctx,
      contamination,
    };
  }
  for (const r of rows) {
    if (!r.ai_overview_evidence_id) {
      r.ai_overview_evidence_id = "NOT_APPLICABLE";
      r.ai_overview_part = "NOT_APPLICABLE";
    }
    if (r.execution_id === "NOT_APPLICABLE") {
      r.session_context_status = "NOT_APPLICABLE";
      r.execution_contamination_status = "NOT_APPLICABLE";
    }
  }

  // Execuții așteptate vs. reconstituite.
  const surfaces = [
    ...new Set(inventory.files.map((f) => f.mapped_surface)),
  ].filter((s) => SURFACES[s]);
  const missing = [];
  for (const s of surfaces)
    for (const q of config.queries_executed) {
      const id = executionId(config.instance_id, s, q, 1);
      if (!execs.has(id)) missing.push(id);
    }
  for (const m of missing)
    issues.push({
      scope: "EXECUTION",
      id: m,
      field: "execution_id",
      issue: "EXPECTED_EXECUTION_MISSING",
      detail: "",
    });

  const blocking = issues.filter((i) =>
    [
      "UNCLASSIFIED",
      "INVALID_ENUM",
      "NOT_INTEGER",
      "INVALID_FORMAT",
      "BASIS_REQUIRED",
      "NOT_IN_QUERY_SET",
      "PARTS_INCONSISTENT",
      "AI_OVERVIEW_STATUS_MISMATCH",
    ].includes(i.issue),
  );
  const stagingPath = path.join(P.workDir, "capture-index.staging.csv");
  const reviewPath = path.join(P.workDir, "capture-review.csv");
  await writeText(stagingPath, toCsv(CAPTURE_INDEX_HEADER, rows));
  await writeText(
    reviewPath,
    toCsv(["scope", "id", "field", "issue", "detail"], issues),
  );
  await writeJson(path.join(P.workDir, "capture-index-stats.json"), {
    generated_at: new Date().toISOString(),
    captures: rows.length,
    executions_expected: surfaces.length * config.queries_executed.length,
    executions_reconstructed: execs.size,
    executions_missing: missing,
    blocking_issue_count: blocking.length,
    review_item_count: issues.length - blocking.length,
    executions: execSummary,
  });

  if (finalize) {
    if (blocking.length) {
      console.error(
        `FAIL: --finalize refuzat: ${blocking.length} probleme blocante (vezi ${reviewPath}).`,
      );
      process.exit(1);
    }
    const outPath = path.join(
      P.outputDir,
      artifactName(
        config.instance_slug,
        "capture-index",
        config.metadata_version,
        "csv",
      ),
    );
    await assertNotFrozen(outPath);
    await fs.mkdir(P.outputDir, { recursive: true });
    await writeText(outPath, toCsv(CAPTURE_INDEX_HEADER, rows));
    console.log(`FINALIZAT → ${outPath}`);
  }

  await appendLog(P.logPath, {
    operation: finalize ? "capture_index_finalize" : "capture_index_staging",
    status: blocking.length ? "INCOMPLETE" : "OK",
    script: SCRIPT,
    output: {
      executions: execs.size,
      missing: missing.length,
      issues: issues.length,
    },
  });

  console.log(
    `CAPTURE INDEX — ${rows.length} capturi; ${execs.size}/${surfaces.length * config.queries_executed.length} execuții reconstituite; ${blocking.length} probleme blocante; ${issues.length - blocking.length} elemente de review`,
  );
  const qs = config.queries_executed;
  console.log(
    `  ${"suprafață".padEnd(11)} ${qs.map((q) => q.replace("Q-DISC-", "").padEnd(22)).join("")}`,
  );
  for (const s of surfaces) {
    const cells = qs.map((q) => {
      const e = execSummary[executionId(config.instance_id, s, q, 1)];
      if (!e) return "LIPSĂ".padEnd(22);
      return `${e.captures}c ${e.execution_status.slice(0, 9)} ${e.response_relevance.slice(0, 8)}`.padEnd(
        22,
      );
    });
    console.log(`  ${s.padEnd(11)} ${cells.join("")}`);
  }
  console.log(`  → ${stagingPath}\n  → ${reviewPath}`);
  if (blocking.length) process.exitCode = 1;
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
