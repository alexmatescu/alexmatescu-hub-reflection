#!/usr/bin/env node
// evidence-release / scripts/build_readme.mjs
//
// STEP 7 ("generate artifacts", second half): assemble the README mechanically
// from config + the finalized Evidence Index + index-stats.json. Structure
// and fixed boilerplate per references/readme-template.md. No free-text
// narration invented here — every sentence is either fixed boilerplate or
// filled from computed data / explicit config fields (notes, query_set
// description). Refuses to overwrite a README that was already frozen
// (STEP 9) — see assertNotFrozen below.
//
// Usage: node build_readme.mjs <evidence-package.yaml>

import path from "node:path";
import { promises as fsp } from "node:fs";
import {
  readConfig,
  pathExists,
  parseCsv,
  readJson,
  writeText,
  appendLog,
  artifactFileName,
  assertNotFrozen,
} from "./lib/common.mjs";

const SENTINELS = new Set(["UNKNOWN", "NOT_APPLICABLE", "NOT_VISIBLE", "UNCLASSIFIED", ""]);
const isKnown = (v) => !SENTINELS.has(v);

function distinctKnown(rows, col) {
  const set = new Set();
  for (const r of rows) if (isKnown(r[col])) set.add(r[col]);
  return [...set].sort();
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node build_readme.mjs <evidence-package.yaml>");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const {
    entity_slug,
    entity_name,
    study_name,
    measurement_point,
    metadata_version,
    archive,
    project = "AI Visibility Lab",
  } = config;
  const extraColumns = Array.isArray(config.extra_columns) ? config.extra_columns : [];

  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const outputDir = path.resolve("evidence/output", entity_slug, measurement_point, metadata_version);

  const indexFile = artifactFileName(entity_slug, measurement_point, "evidence-index", metadata_version, "csv");
  const readmeFile = artifactFileName(entity_slug, measurement_point, "readme", metadata_version, "md");
  const shaFile = artifactFileName(entity_slug, measurement_point, "sha256sums", metadata_version, "txt");
  const archiveFile = artifactFileName(entity_slug, measurement_point, "evidence-archive", archive.version, "zip");

  const indexPath = path.join(outputDir, indexFile);
  if (!(await pathExists(indexPath))) {
    console.error(`FAIL: ${indexPath} not found — run build_index.mjs --finalize first.`);
    process.exit(1);
  }
  const rows = parseCsv(await fsp.readFile(indexPath, "utf8"));

  const statsPath = path.join(workDir, "index-stats.json");
  const stats = (await pathExists(statsPath)) ? await readJson(statsPath) : null;

  const platforms = distinctKnown(rows, "Observed platform");
  const evidenceTypes = distinctKnown(rows, "Evidence type");
  const sessions = distinctKnown(rows, "Session ID");
  const hasContamination = rows.some(
    (r) => isKnown(r["Contamination status"]) && r["Contamination status"] !== "NONE_OBSERVED",
  );
  const hasAnomalies = rows.some((r) => isKnown(r["Archive anomaly"]) && r["Archive anomaly"] !== "NONE");
  const hasQuerySet = Boolean(config.query_set?.path);
  const multiPart = rows.filter((r) => isKnown(r["Capture parts total"]) && parseInt(r["Capture parts total"], 10) > 1);
  const reviewRequired = rows.filter(
    (r) => r["Mapping status"] === "REVIEW_REQUIRED" || r["Review status"] === "REVIEW_REQUIRED",
  );
  const excluded = rows.filter((r) =>
    ["EXCLUDE_FROM_CLEAN_BASELINE", "EXCLUDE_CONTROL_STEP", "ARCHIVE_ONLY_NOT_PRIMARY_ANALYSIS"].includes(
      r["Analysis inclusion status"],
    ),
  );
  const controlSteps = rows.filter((r) => r["Contamination status"] === "CONTROL_STEP");

  const presentExtraColumns = extraColumns.filter((c) => rows.some((r) => isKnown(r[c])));

  const today = new Date().toISOString().slice(0, 10);

  const lines = [];
  lines.push(`# ${entity_name} — ${measurement_point} Evidence Archive`);
  lines.push("");
  lines.push(`Project: ${project}`);
  lines.push(`Case study: ${study_name ?? "N/A"}`);
  lines.push(`Measurement point: ${measurement_point}`);
  lines.push(`Evidence package version: archive v${archive.version} / metadata v${metadata_version}`);
  lines.push(`Evidence type(s): ${evidenceTypes.join(", ") || "UNKNOWN"}`);
  lines.push(`Evidence count: ${rows.length}`);
  lines.push(`Publication date: ${today}`);
  lines.push("");

  lines.push("## 1. Purpose");
  lines.push("");
  lines.push(
    "This package preserves the observations used in the analysis. It documents what was captured, not a claim that AI outputs are deterministically reproducible.",
  );
  lines.push("");

  lines.push("## 2. Subject");
  lines.push("");
  lines.push(`**${entity_name}**${study_name ? `, evaluated as part of the "${study_name}" study.` : "."}`);
  lines.push("");

  lines.push("## 3. Evidence sources");
  lines.push("");
  lines.push(platforms.length > 0 ? `Platforms observed in this package: ${platforms.join(", ")}.` : "No platform could be determined from the classified evidence.");
  lines.push(`Total screenshots/evidence items: ${rows.length}.`);
  lines.push("");

  lines.push("## 4. Raw evidence and provenance");
  lines.push("");
  lines.push(
    "Original files, filenames, and archive paths are preserved unchanged from the raw evidence archive. All derived metadata (classification, grouping, checksums) is recorded separately in the Evidence Index — it does not alter the raw files in any way. Every row's SHA-256 is computed on the original bytes, with no re-encoding.",
  );
  lines.push("");

  lines.push("## 5. Evidence Index");
  lines.push("");
  lines.push(
    `The full schema is documented in \`references/evidence-schema.md\` of the evidence-release skill. The index for this package is \`${indexFile}\` (${rows.length} rows, UTF-8 with BOM, one row per evidence item).`,
  );
  lines.push("");

  lines.push("## 6. Multi-screenshot responses");
  lines.push("");
  lines.push(
    "A single query execution can produce more than one screenshot when a result continues across multiple captures. All screenshots belonging to the same query execution share the same Query group ID; `Capture part number`/`Capture parts total` record their position, and `Continuation of Evidence ID` links each continuation back to the first screenshot of that result.",
  );
  if (multiPart.length > 0) {
    const groups = new Set(multiPart.map((r) => r["Query group ID"]));
    lines.push(`This package includes ${groups.size} multi-part query execution(s), covering ${multiPart.length} screenshots.`);
  } else {
    lines.push("No multi-part query executions were identified in this package — each query execution is a single screenshot.");
  }
  lines.push("");

  lines.push("## 7. Query Set and supplemental evidence");
  lines.push("");
  if (hasQuerySet) {
    lines.push(`Canonical Query Set: \`${config.query_set.path}\`.`);
  } else {
    lines.push("No canonical query set was provided for this package.");
  }
  const roleCounts = {};
  for (const r of rows) if (isKnown(r["Query role"])) roleCounts[r["Query role"]] = (roleCounts[r["Query role"]] ?? 0) + 1;
  const roleLines = Object.entries(roleCounts).map(([role, n]) => `- \`${role}\`: ${n}`);
  if (roleLines.length > 0) {
    lines.push("");
    lines.push("Evidence by query role:");
    lines.push(...roleLines);
  }
  lines.push("");

  lines.push("## 8. Experimental conditions");
  lines.push("");
  if (presentExtraColumns.length > 0) {
    lines.push("Conditions tracked for this package:");
    lines.push("");
    for (const col of presentExtraColumns) {
      const values = distinctKnown(rows, col);
      lines.push(`- **${col}**: ${values.join(", ") || "UNKNOWN"}`);
    }
  } else {
    lines.push("No structured experimental-condition columns were declared for this package.");
  }
  lines.push("");

  if (hasContamination) {
    lines.push("## 9. Session/context contamination");
    lines.push("");
    const contamCounts = {};
    for (const r of rows) {
      if (isKnown(r["Contamination status"]) && r["Contamination status"] !== "NONE_OBSERVED") {
        contamCounts[r["Contamination status"]] = (contamCounts[r["Contamination status"]] ?? 0) + 1;
      }
    }
    for (const [status, n] of Object.entries(contamCounts)) {
      lines.push(`- \`${status}\`: ${n} evidence item(s).`);
    }
    if (controlSteps.length > 0) {
      lines.push(`- Of these, ${controlSteps.length} are documented control steps (\`CONTROL_STEP\`), not contamination of the primary analysis.`);
    }
    lines.push("");
    lines.push(
      "Contaminated and suspected evidence is retained in this package, not removed — see `Analysis inclusion status` in the Evidence Index for what is included in the clean baseline.",
    );
    lines.push("");
  }

  if (hasAnomalies) {
    lines.push("## 10. Archive anomalies");
    lines.push("");
    const anomalyCounts = {};
    for (const r of rows) {
      if (isKnown(r["Archive anomaly"]) && r["Archive anomaly"] !== "NONE") {
        anomalyCounts[r["Archive anomaly"]] = (anomalyCounts[r["Archive anomaly"]] ?? 0) + 1;
      }
    }
    for (const [anomaly, n] of Object.entries(anomalyCounts)) {
      lines.push(`- \`${anomaly}\`: ${n} evidence item(s) — see \`Archive platform folder\` vs. \`Observed platform\` and \`Notes\` per row in the index.`);
    }
    lines.push("");
    lines.push("The archive itself was not reorganized or corrected — only documented.");
    lines.push("");
  }

  lines.push("## 11. Evidence integrity");
  lines.push("");
  lines.push(
    `Every artifact in this package (raw archive, evidence index, README) has a SHA-256 checksum recorded in \`${shaFile}\`, verifiable with \`shasum -a 256 -c ${shaFile}\` once all files are in the same directory. Each row of the Evidence Index also carries the SHA-256 of its individual source file, computed on the original archive bytes.`,
  );
  lines.push("");

  lines.push("## 12. Interpretation limits");
  lines.push("");
  lines.push(
    "AI outputs are time-dependent and can be affected by model version, retrieval/search index state, session/account state, personalization, and platform changes between captures. This package supports **auditability**, **traceability**, and **verification of recorded observations** — and **reproducibility of the documented protocol** — not reproducibility of identical AI output.",
  );
  lines.push("");

  lines.push("## 13. Experimental limitations");
  lines.push("");
  const limitLines = [];
  if (reviewRequired.length > 0) limitLines.push(`- ${reviewRequired.length} evidence item(s) remain marked \`REVIEW_REQUIRED\` for mapping or review status.`);
  if (excluded.length > 0) limitLines.push(`- ${excluded.length} evidence item(s) are excluded from the clean analysis baseline (control steps, non-primary, or archive-only) — see \`Analysis inclusion status\`.`);
  const dupCount = rows.filter((r) => r["Duplicate status"] === "DUPLICATE").length;
  if (dupCount > 0) limitLines.push(`- ${dupCount} byte-identical duplicate file(s) were found and retained (not removed) — see \`Duplicate status\`.`);
  if (!hasQuerySet) limitLines.push("- No canonical query set was available to cross-check Query IDs against.");
  if (limitLines.length === 0) limitLines.push("- No unresolved review items, exclusions, or duplicates were identified at the time this package was finalized.");
  lines.push(...limitLines);
  lines.push("");

  lines.push("## 14. Relationship to study");
  lines.push("");
  lines.push("```");
  lines.push("Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation");
  lines.push("```");
  lines.push("");
  lines.push(
    "This package covers **Raw Evidence** and **Indexed Evidence** only. Observation, Measurement, and Interpretation belong to the case study that cites this package, not to this package itself.",
  );
  lines.push("");

  lines.push("## 15. Versioning");
  lines.push("");
  lines.push(
    `Raw archive version and metadata version are independent. This package is archive v${archive.version} / metadata v${metadata_version}: the raw evidence archive is immutable once published — a revised index, README, or checksum manifest gets a new metadata version without touching the raw archive; a changed raw archive gets a new archive version and a new release.`,
  );
  lines.push("");

  lines.push("## 16. Files");
  lines.push("");
  lines.push(`- \`${archiveFile}\` (raw evidence archive, immutable)`);
  lines.push(`- \`${indexFile}\``);
  lines.push(`- \`${readmeFile}\` (this file)`);
  lines.push(`- \`${shaFile}\``);
  lines.push("");

  lines.push("## 17. Publisher");
  lines.push("");
  lines.push(project === "AI Visibility Lab" ? "AI Visibility Lab\ndelamatescu.ro/lab" : project);
  lines.push("");

  const readmePath = path.join(outputDir, readmeFile);
  await assertNotFrozen(
    readmePath,
    `This README (metadata v${metadata_version}) was already frozen and checksummed. ` +
      `Bump metadata_version in the config to publish a correction, or run ` +
      `freeze_artifacts.mjs --unfreeze first if this exact version was never checksummed/uploaded.`,
  );
  await writeText(readmePath, lines.join("\n"));
  console.log(`Wrote ${readmePath}`);

  await appendLog(path.join(workDir, "processing-log.jsonl"), {
    operation: "build_readme",
    status: "PASS",
    input: indexPath,
    output: readmePath,
    script: "build_readme.mjs",
    warnings: [],
  });
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
