#!/usr/bin/env node
// evidence-release / scripts/build_index.mjs
//
// STEP 5/7: merge deterministic inventory facts (inventory.json, after
// hash_evidence.mjs) with the human/Claude classification (classification.csv)
// into the full Evidence Index. Never invents a value — anything missing
// becomes UNCLASSIFIED (not yet reviewed) and is written to
// evidence-review.csv for STEP 6 human-in-the-loop.
//
// Two modes:
//   node build_index.mjs <config>              -> staging only (evidence/work/.../evidence-index.staging.csv + evidence-review.csv)
//   node build_index.mjs <config> --finalize    -> "generate artifacts" (STEP 7): also writes the final
//                                                   versioned CSV to evidence/output/, and FAILs if any
//                                                   UNCLASSIFIED cell remains. Refuses to overwrite a
//                                                   finalized CSV that has already been frozen (STEP 9) —
//                                                   see assertNotFrozen below.

import path from "node:path";
import { promises as fsp } from "node:fs";
import {
  readConfig,
  readJson,
  writeText,
  pathExists,
  parseCsv,
  toCsv,
  appendLog,
  assertNotFrozen,
} from "./lib/common.mjs";
import {
  FULL_HEADER,
  CLASSIFICATION_COLUMNS,
  OPTIONAL_BLANK_COLUMNS,
  ENUMS,
  CONTINUATION_REF_COLUMN,
} from "./lib/schema.mjs";

const SENTINEL_LIKE = new Set(["UNKNOWN", "NOT_APPLICABLE", "NOT_VISIBLE", "UNCLASSIFIED", ""]);

function normalizeToken(value) {
  return String(value ?? "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, "");
}

async function loadPreviousEvidenceIds(outputRoot, slug, mp) {
  const map = new Map(); // `${path}::${sha256}` -> Evidence ID
  const maxByPrefix = new Map(); // prefix (ENTITYCODE-Tn) -> highest N used
  if (!(await pathExists(outputRoot))) return { map, maxByPrefix };
  const versionDirs = await fsp.readdir(outputRoot, { withFileTypes: true });
  for (const versionDir of versionDirs) {
    if (!versionDir.isDirectory()) continue;
    const dirPath = path.join(outputRoot, versionDir.name);
    const files = await fsp.readdir(dirPath);
    for (const fname of files) {
      if (!fname.startsWith(`${slug}_${mp}_evidence-index_v`) || !fname.endsWith(".csv")) continue;
      const text = await fsp.readFile(path.join(dirPath, fname), "utf8");
      const rows = parseCsv(text);
      for (const row of rows) {
        const id = row["Evidence ID"];
        const key = `${row["Original relative path"]}::${row["SHA-256"]}`;
        if (id && !map.has(key)) map.set(key, id);
        const m = /^(.+)-E(\d+)$/.exec(id || "");
        if (m) {
          const prefix = m[1];
          const n = parseInt(m[2], 10);
          maxByPrefix.set(prefix, Math.max(maxByPrefix.get(prefix) ?? 0, n));
        }
      }
    }
  }
  return { map, maxByPrefix };
}

function classificationValue(row, col) {
  const raw = (row?.[col] ?? "").trim();
  if (raw !== "") return raw;
  return OPTIONAL_BLANK_COLUMNS.has(col) ? "" : "UNCLASSIFIED";
}

function isKnown(value) {
  return !SENTINEL_LIKE.has(value);
}

function deriveQueryGroupId(entityCode, mp, platform, session, queryId, attempt) {
  if (![platform, session, queryId].every(isKnown)) return "REVIEW_REQUIRED";
  const base = `${entityCode}-${mp}-${normalizeToken(platform)}-${normalizeToken(session)}-${queryId}`;
  const attemptNum = parseInt(attempt, 10);
  if (Number.isFinite(attemptNum) && attemptNum > 1) return `${base}-A${attemptNum}`;
  return base;
}

function deriveContinuationFlag(partNumber) {
  if (!isKnown(partNumber)) return "NOT_APPLICABLE";
  const n = parseInt(partNumber, 10);
  if (!Number.isFinite(n)) return "UNKNOWN";
  return n > 1 ? "YES" : "NO";
}

function deriveCapturedAtIso(date, time, timezone) {
  if (![date, time, timezone].every(isKnown)) return "UNKNOWN";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) return "UNKNOWN";
  if (!/^[+-]\d{2}:\d{2}$/.test(timezone)) return "UNKNOWN";
  return `${date}T${time}:00${timezone}`;
}

async function main() {
  const configPath = process.argv[2];
  const finalize = process.argv.includes("--finalize");
  if (!configPath) {
    console.error("Usage: node build_index.mjs <evidence-package.yaml> [--finalize]");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const { entity_slug, entity_name, entity_code, measurement_point, metadata_version } = config;
  const extraColumns = Array.isArray(config.extra_columns) ? config.extra_columns : [];

  for (const [k, v] of Object.entries({ entity_slug, entity_name, entity_code, measurement_point, metadata_version })) {
    if (!v) {
      console.error(`FAIL: config is missing required field "${k}".`);
      process.exit(1);
    }
  }

  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const outputRoot = path.resolve("evidence/output", entity_slug, measurement_point);
  const logPath = path.join(workDir, "processing-log.jsonl");

  const inventoryPath = path.join(workDir, "inventory.json");
  const classificationPath = path.join(workDir, "classification.csv");
  if (!(await pathExists(inventoryPath)) || !(await pathExists(classificationPath))) {
    console.error("FAIL: run inventory_evidence.mjs and hash_evidence.mjs first.");
    process.exit(1);
  }

  const inventory = await readJson(inventoryPath);
  if (!inventory.files.every((f) => f.sha256)) {
    console.error("FAIL: inventory.json has files without SHA-256 — run hash_evidence.mjs first.");
    process.exit(1);
  }
  const classificationRows = parseCsv(await fsp.readFile(classificationPath, "utf8"));
  const classByPath = new Map(classificationRows.map((r) => [r["Original relative path"], r]));

  const { map: prevIds, maxByPrefix } = await loadPreviousEvidenceIds(
    outputRoot,
    entity_slug,
    measurement_point,
  );

  const sortedFiles = [...inventory.files].sort((a, b) =>
    a.original_relative_path.localeCompare(b.original_relative_path),
  );

  const idPrefix = `${entity_code}-${measurement_point}`;
  let nextN = (maxByPrefix.get(idPrefix) ?? 0) + 1;
  const pathToEvidenceId = new Map();
  for (const f of sortedFiles) {
    const key = `${f.original_relative_path}::${f.sha256}`;
    let id = prevIds.get(key);
    if (!id) {
      id = `${idPrefix}-E${String(nextN).padStart(3, "0")}`;
      nextN++;
    }
    pathToEvidenceId.set(f.original_relative_path, id);
  }

  const issues = []; // { evidence_id, original_relative_path, reason }
  const rows = [];

  for (const f of sortedFiles) {
    const evidenceId = pathToEvidenceId.get(f.original_relative_path);
    const cls = classByPath.get(f.original_relative_path);
    if (!cls) {
      issues.push({
        evidence_id: evidenceId,
        original_relative_path: f.original_relative_path,
        reason: "NO_CLASSIFICATION_ROW",
      });
    }

    const row = {};
    row["Evidence ID"] = evidenceId;
    row["Entity name"] = entity_name;
    row["Measurement point"] = measurement_point;
    row["Dataset version"] = metadata_version;
    row["Archive platform folder"] = f.archive_platform_folder;
    row["Original session folder"] = f.original_session_folder;

    for (const col of CLASSIFICATION_COLUMNS) {
      row[col] = classificationValue(cls, col);
    }

    row["Query group ID"] = deriveQueryGroupId(
      entity_code,
      measurement_point,
      row["Observed platform"],
      row["Session ID"],
      row["Query ID"],
      row["Query attempt number"],
    );
    row["Continuation flag"] = deriveContinuationFlag(row["Capture part number"]);

    const contRef = row[CONTINUATION_REF_COLUMN];
    delete row[CONTINUATION_REF_COLUMN];
    if (!isKnown(contRef)) {
      row["Continuation of Evidence ID"] = "NOT_APPLICABLE";
    } else {
      const targetId = pathToEvidenceId.get(contRef);
      row["Continuation of Evidence ID"] = targetId || `UNRESOLVED:${contRef}`;
      if (!targetId) {
        issues.push({
          evidence_id: evidenceId,
          original_relative_path: f.original_relative_path,
          reason: `continuation reference not found: ${contRef}`,
        });
      }
    }

    row["Captured at ISO 8601"] = deriveCapturedAtIso(
      row["Capture date"],
      row["Capture time"],
      row["Capture timezone"],
    );

    row["Original filename"] = f.original_filename;
    row["Original relative path"] = f.original_relative_path;
    row["File size bytes"] = f.file_size_bytes;
    row["Image dimensions pixels"] = f.image_dimensions_pixels;
    row["SHA-256"] = f.sha256;
    row["Source file preserved"] = "YES";
    row["Duplicate status"] = f.duplicate_status;
    row["Duplicate of Evidence ID"] =
      f.duplicate_status === "DUPLICATE"
        ? pathToEvidenceId.get(f.duplicate_of_original_relative_path) || "UNKNOWN"
        : "NOT_APPLICABLE";

    for (const extra of extraColumns) {
      row[extra] = classificationValue(cls, extra);
    }

    // Enum + cross-field checks -> evidence-review.csv candidates.
    for (const [col, allowed] of Object.entries(ENUMS)) {
      const v = row[col];
      if (isKnown(v) && !allowed.includes(v) && v !== "REVIEW_REQUIRED") {
        issues.push({
          evidence_id: evidenceId,
          original_relative_path: f.original_relative_path,
          reason: `"${col}" = "${v}" is not one of the declared values`,
        });
      }
    }
    if (row["Mapping status"] === "CONFIRMED" && !isKnown(row["Mapping basis"])) {
      issues.push({
        evidence_id: evidenceId,
        original_relative_path: f.original_relative_path,
        reason: "Mapping status = CONFIRMED but Mapping basis is empty",
      });
    }
    if (
      isKnown(row["Contamination status"]) &&
      !["NONE_OBSERVED"].includes(row["Contamination status"]) &&
      !isKnown(row["Contamination reason"])
    ) {
      issues.push({
        evidence_id: evidenceId,
        original_relative_path: f.original_relative_path,
        reason: `Contamination status = ${row["Contamination status"]} but Contamination reason is empty`,
      });
    }
    if (row["Query rewrite observed"] === "YES" && !isKnown(row["Query rewrite text"])) {
      issues.push({
        evidence_id: evidenceId,
        original_relative_path: f.original_relative_path,
        reason: "Query rewrite observed = YES but Query rewrite text is empty",
      });
    }
    for (const col of [...CLASSIFICATION_COLUMNS, ...extraColumns]) {
      if (row[col] === "UNCLASSIFIED") {
        issues.push({
          evidence_id: evidenceId,
          original_relative_path: f.original_relative_path,
          reason: `"${col}" not yet classified`,
        });
      }
    }
    if (f.duplicate_status === "DUPLICATE") {
      issues.push({
        evidence_id: evidenceId,
        original_relative_path: f.original_relative_path,
        reason: `byte-identical duplicate of ${f.duplicate_of_original_relative_path} — not removed, review only`,
      });
    }

    rows.push(row);
  }

  const header = [...FULL_HEADER];
  for (const extra of extraColumns) if (!header.includes(extra)) header.push(extra);

  const stagingPath = path.join(workDir, "evidence-index.staging.csv");
  await writeText(stagingPath, toCsv(header, rows));

  const reviewHeader = ["Evidence ID", "Original relative path", "Reason"];
  const reviewRows = issues.map((i) => ({
    "Evidence ID": i.evidence_id,
    "Original relative path": i.original_relative_path,
    Reason: i.reason,
  }));
  const reviewPath = path.join(workDir, "evidence-review.csv");
  await writeText(reviewPath, toCsv(reviewHeader, reviewRows));

  const stats = computeStats(rows, extraColumns);
  const statsPath = path.join(workDir, "index-stats.json");
  await writeText(statsPath, JSON.stringify(stats, null, 2) + "\n");

  console.log(`Wrote ${stagingPath} (${rows.length} rows).`);
  console.log(`Wrote ${reviewPath} (${issues.length} items needing attention).`);
  console.log(`Wrote ${statsPath}.`);
  console.log("\nSummary:");
  console.log(`  Total screenshots: ${stats.total}`);
  console.log(`  Mapped (Mapping status = CONFIRMED): ${stats.mappingConfirmed}`);
  console.log(`  Review required: ${stats.reviewRequired}`);
  console.log(`  Contaminated: ${stats.contaminated}`);
  console.log(`  Control steps: ${stats.controlSteps}`);
  console.log(`  Supplemental: ${stats.supplemental}`);
  console.log(`  Anomalies: ${stats.anomalies}`);
  console.log(`  Possible duplicates: ${stats.duplicates}`);

  const blockingUnclassified = issues.filter((i) => i.reason.includes("not yet classified"));

  if (finalize) {
    if (blockingUnclassified.length > 0) {
      console.error(
        `FAIL: ${blockingUnclassified.length} field(s) still UNCLASSIFIED — cannot finalize. Resolve evidence-review.csv first.`,
      );
      process.exit(1);
    }
    const finalDir = path.join(outputRoot, metadata_version);
    const finalPath = path.join(
      finalDir,
      `${entity_slug}_${measurement_point}_evidence-index_v${metadata_version}.csv`,
    );
    await assertNotFrozen(
      finalPath,
      `This evidence index (metadata v${metadata_version}) was already frozen and checksummed. ` +
        `Bump metadata_version in the config to publish a correction, or run ` +
        `freeze_artifacts.mjs --unfreeze first if this exact version was never checksummed/uploaded.`,
    );
    await writeText(finalPath, toCsv(header, rows));
    console.log(`\nFinalized: ${finalPath}`);
    await appendLog(logPath, {
      operation: "build_index",
      status: "PASS",
      input: classificationPath,
      output: finalPath,
      script: "build_index.mjs",
      warnings: issues.length > 0 ? [`${issues.length} review items remain (non-blocking)`] : [],
    });
  } else {
    await appendLog(logPath, {
      operation: "build_index",
      status: blockingUnclassified.length > 0 ? "WARNING" : "PASS",
      input: classificationPath,
      output: stagingPath,
      script: "build_index.mjs",
      warnings: issues.length > 0 ? [`${issues.length} review items`] : [],
    });
  }
}

function computeStats(rows, extraColumns) {
  const total = rows.length;
  const byPlatform = {};
  const bySession = {};
  const byContamination = {};
  const byAnomaly = {};
  const queryGroups = new Set();
  const multiPartGroups = new Set();
  for (const r of rows) {
    byPlatform[r["Observed platform"]] = (byPlatform[r["Observed platform"]] ?? 0) + 1;
    bySession[r["Session ID"]] = (bySession[r["Session ID"]] ?? 0) + 1;
    byContamination[r["Contamination status"]] = (byContamination[r["Contamination status"]] ?? 0) + 1;
    byAnomaly[r["Archive anomaly"]] = (byAnomaly[r["Archive anomaly"]] ?? 0) + 1;
    if (isKnown(r["Query group ID"])) queryGroups.add(r["Query group ID"]);
    if (isKnown(r["Capture parts total"]) && parseInt(r["Capture parts total"], 10) > 1) {
      multiPartGroups.add(r["Query group ID"]);
    }
  }
  return {
    total,
    platforms: Object.keys(byPlatform).filter((p) => isKnown(p)),
    platformCounts: byPlatform,
    sessionCounts: bySession,
    contaminationCounts: byContamination,
    anomalyCounts: byAnomaly,
    queryGroupCount: queryGroups.size,
    multiPartQueryGroupCount: multiPartGroups.size,
    mappingConfirmed: rows.filter((r) => r["Mapping status"] === "CONFIRMED").length,
    reviewRequired: rows.filter(
      (r) => r["Mapping status"] === "REVIEW_REQUIRED" || r["Review status"] === "REVIEW_REQUIRED",
    ).length,
    contaminated: rows.filter((r) => r["Contamination status"] === "CONTAMINATED").length,
    controlSteps: rows.filter((r) => r["Contamination status"] === "CONTROL_STEP").length,
    supplemental: rows.filter((r) => r["Query role"] === "supplemental").length,
    anomalies: rows.filter((r) => isKnown(r["Archive anomaly"]) && r["Archive anomaly"] !== "NONE").length,
    duplicates: rows.filter((r) => r["Duplicate status"] === "DUPLICATE").length,
    excluded: rows.filter((r) =>
      ["EXCLUDE_FROM_CLEAN_BASELINE", "EXCLUDE_CONTROL_STEP", "ARCHIVE_ONLY_NOT_PRIMARY_ANALYSIS"].includes(
        r["Analysis inclusion status"],
      ),
    ).length,
    extraColumns,
  };
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
