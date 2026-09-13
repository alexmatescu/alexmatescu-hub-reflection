#!/usr/bin/env node
// evidence-release / scripts/validate_evidence.mjs
//
// STEP 8 — "validate structure/content". Runs right after STEP 7 (generate
// artifacts) and right before STEP 9 (freeze). Checks the Evidence Index/
// README/archive for correctness on their own terms — schema, referential
// integrity, naming, end-to-end archive fidelity — with no awareness of
// GitHub at all and no dependency on the checksum manifest, which does not
// exist yet at this point in the pipeline (that's STEP 10, after freeze).
// gh CLI / release-conflict checks live in github_release.mjs (STEP 14,
// "package/release") instead, right where they're actually needed.
//
// A FAIL here must stop the pipeline before STEP 9 (freeze) — freezing
// content that failed validation just locks in the mistake.
//
// Usage: node validate_evidence.mjs <evidence-package.yaml>

import path from "node:path";
import { promises as fsp } from "node:fs";
import {
  readConfig,
  run,
  pathExists,
  parseCsv,
  readJson,
  writeText,
  appendLog,
  sha256File,
  SLUG_RE,
  MEASUREMENT_POINT_RE,
  artifactFileName,
} from "./lib/common.mjs";

const results = []; // { level: 'PASS'|'WARNING'|'FAIL', check, detail }
function record(level, check, detail) {
  results.push({ level, check, detail });
}

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node validate_evidence.mjs <evidence-package.yaml>");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const { entity_slug, measurement_point, metadata_version, archive } = config;

  if (!SLUG_RE.test(entity_slug || "")) {
    record("FAIL", "entity_slug format", `"${entity_slug}" is not lowercase-kebab-case`);
  } else {
    record("PASS", "entity_slug format", entity_slug);
  }
  if (!MEASUREMENT_POINT_RE.test(measurement_point || "")) {
    record(
      "FAIL",
      "measurement_point format",
      `"${measurement_point}" must be Tn or window-YYYY-MM-DD_YYYY-MM-DD`,
    );
  } else {
    record("PASS", "measurement_point format", measurement_point);
  }

  // --- Archive ---
  const archivePath = archive?.path ? path.resolve(archive.path) : null;
  if (!archivePath || !(await pathExists(archivePath))) {
    record("FAIL", "archive exists", `${archivePath ?? "(missing archive.path)"} not found`);
  } else {
    record("PASS", "archive exists", archivePath);
    const test = await run("unzip", ["-t", archivePath]);
    record(test.code === 0 ? "PASS" : "FAIL", "archive integrity (unzip -t)", test.code === 0 ? "OK" : test.stderr);
  }

  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const outputDir = path.resolve("evidence/output", entity_slug, measurement_point, metadata_version);
  const inventoryPath = path.join(workDir, "inventory.json");

  let inventory = null;
  if (await pathExists(inventoryPath)) {
    inventory = await readJson(inventoryPath);
  } else {
    record("FAIL", "inventory.json exists", "run inventory_evidence.mjs + hash_evidence.mjs first");
  }

  // --- Archive integrity end-to-end: the file analyzed at STEP 2 must be
  // byte-identical to the file about to be frozen/checksummed/released.
  // Catches an accidental overwrite/replacement of archive.path, or config
  // pointing at the wrong file, between inventory time and this point.
  let archiveSha256Now = null;
  if (archivePath && (await pathExists(archivePath))) {
    archiveSha256Now = await sha256File(archivePath);
  }
  if (!inventory?.archive_sha256) {
    record(
      "WARNING",
      "archive SHA-256 unchanged since inventory",
      "inventory.json has no archive_sha256 (re-run inventory_evidence.mjs to record one) — cannot confirm the archive hasn't changed since it was analyzed",
    );
  } else if (!archiveSha256Now) {
    record("FAIL", "archive SHA-256 unchanged since inventory", "archive not found — cannot recompute for comparison");
  } else if (archiveSha256Now !== inventory.archive_sha256) {
    record(
      "FAIL",
      "archive SHA-256 unchanged since inventory",
      `archive.path has changed since STEP 2 — inventoried ${inventory.archive_sha256}, now ${archiveSha256Now}. The evidence that was inventoried/classified/analyzed is not the file about to be released. Re-run the pipeline from STEP 2 on the current archive.`,
    );
  } else {
    record("PASS", "archive SHA-256 unchanged since inventory", archiveSha256Now);
  }

  // --- Generated artifacts present (checksum manifest does not exist yet — that's STEP 10) ---
  const indexFile = artifactFileName(entity_slug, measurement_point, "evidence-index", metadata_version, "csv");
  const readmeFile = artifactFileName(entity_slug, measurement_point, "readme", metadata_version, "md");
  const indexPath = path.join(outputDir, indexFile);
  const readmePath = path.join(outputDir, readmeFile);

  const indexExists = await pathExists(indexPath);
  record(indexExists ? "PASS" : "FAIL", "evidence index present", indexPath);
  const readmeExists = await pathExists(readmePath);
  record(readmeExists ? "PASS" : "FAIL", "README present", readmePath);

  let indexRows = [];
  if (indexExists) {
    try {
      const text = await fsp.readFile(indexPath, "utf8");
      indexRows = parseCsv(text);
      record("PASS", "CSV readable", `${indexRows.length} rows`);
    } catch (e) {
      record("FAIL", "CSV readable", e.message);
    }
  }

  if (indexRows.length > 0) {
    // Evidence ID duplicates
    const idCounts = new Map();
    for (const r of indexRows) idCounts.set(r["Evidence ID"], (idCounts.get(r["Evidence ID"]) ?? 0) + 1);
    const dupIds = [...idCounts.entries()].filter(([, n]) => n > 1);
    record(dupIds.length === 0 ? "PASS" : "FAIL", "Evidence ID uniqueness", dupIds.map(([id, n]) => `${id} x${n}`).join(", ") || "no duplicates");

    // SHA-256 present for every row
    const missingSha = indexRows.filter((r) => !r["SHA-256"] || r["SHA-256"].length !== 64);
    record(missingSha.length === 0 ? "PASS" : "FAIL", "SHA-256 present for every row", `${missingSha.length} row(s) missing/invalid SHA-256`);

    // continuation_of_evidence_id resolves
    const idSet = new Set(indexRows.map((r) => r["Evidence ID"]));
    const badContinuations = indexRows.filter((r) => {
      const v = r["Continuation of Evidence ID"];
      return v && v !== "NOT_APPLICABLE" && !idSet.has(v);
    });
    record(
      badContinuations.length === 0 ? "PASS" : "FAIL",
      "continuation references resolve",
      badContinuations.map((r) => `${r["Evidence ID"]} -> ${r["Continuation of Evidence ID"]}`).join(", ") || "all resolve",
    );

    // Duplicate of Evidence ID resolves
    const badDupRefs = indexRows.filter((r) => {
      const v = r["Duplicate of Evidence ID"];
      return v && v !== "NOT_APPLICABLE" && v !== "UNKNOWN" && !idSet.has(v);
    });
    record(badDupRefs.length === 0 ? "PASS" : "FAIL", "duplicate references resolve", badDupRefs.length === 0 ? "all resolve" : `${badDupRefs.length} unresolved`);

    // No UNCLASSIFIED / UNRESOLVED left
    const unclassifiedCells = indexRows.filter((r) =>
      Object.values(r).some((v) => v === "UNCLASSIFIED" || String(v).startsWith("UNRESOLVED:")),
    );
    record(
      unclassifiedCells.length === 0 ? "PASS" : "FAIL",
      "no UNCLASSIFIED/UNRESOLVED cells",
      `${unclassifiedCells.length} row(s) still have an unfilled or unresolved field`,
    );

    // filenames in index exist in archive inventory
    if (inventory) {
      const inventoryPaths = new Set(inventory.files.map((f) => f.original_relative_path));
      const missingInArchive = indexRows.filter((r) => !inventoryPaths.has(r["Original relative path"]));
      record(
        missingInArchive.length === 0 ? "PASS" : "FAIL",
        "index filenames exist in archive",
        missingInArchive.length === 0
          ? "all present"
          : missingInArchive.map((r) => r["Original relative path"]).join(", "),
      );

      // count of evidence records vs screenshot count in archive
      if (indexRows.length !== inventory.files.length) {
        record(
          "WARNING",
          "row count matches archive file count",
          `index has ${indexRows.length} rows, archive extraction has ${inventory.files.length} files — confirm this difference is justified (e.g. non-evidence files excluded) and documented`,
        );
      } else {
        record("PASS", "row count matches archive file count", `${indexRows.length}`);
      }
    }

    // query_set cross-check, only if required
    if (config.query_set?.path && config.query_set?.required) {
      if (await pathExists(config.query_set.path)) {
        const qsRows = parseCsv(await fsp.readFile(config.query_set.path, "utf8"));
        const qsIds = new Set(qsRows.map((r) => r["Query ID"] ?? r["query_id"] ?? r["id"]).filter(Boolean));
        const unknownQueryIds = indexRows.filter(
          (r) =>
            r["Query ID"] &&
            !["UNKNOWN", "NOT_APPLICABLE", "UNCLASSIFIED"].includes(r["Query ID"]) &&
            !qsIds.has(r["Query ID"]) &&
            !r["Query ID"].startsWith("SUPPLEMENTAL-"),
        );
        record(
          unknownQueryIds.length === 0 ? "PASS" : "FAIL",
          "Query IDs found in canonical query set (required)",
          unknownQueryIds.length === 0
            ? "all resolve"
            : unknownQueryIds.map((r) => `${r["Evidence ID"]}: ${r["Query ID"]}`).join(", "),
        );
      } else {
        record("FAIL", "query_set.path exists", config.query_set.path);
      }
    }
  }

  // --- naming convention on generated filenames ---
  record(
    indexExists && readmeExists ? "PASS" : "WARNING",
    "artifact filenames follow naming convention",
    [indexFile, readmeFile].join(", "),
  );

  // --- metadata version consistency ---
  const versionsInNames = [indexFile, readmeFile].map((f) => /_v([^.]+)\./.exec(f)?.[1]).filter(Boolean);
  const allSameVersion = new Set(versionsInNames).size <= 1;
  record(allSameVersion ? "PASS" : "FAIL", "metadata version consistent across artifacts", versionsInNames.join(", "));

  // --- report ---
  const fails = results.filter((r) => r.level === "FAIL");
  const warnings = results.filter((r) => r.level === "WARNING");
  const status = fails.length > 0 ? "VALIDATION_FAILED" : warnings.length > 0 ? "HUMAN_REVIEW_REQUIRED" : "CONTENT_VALID";

  const lines = [];
  lines.push(`# Validation report (structure/content) — ${entity_slug} ${measurement_point} v${metadata_version}`);
  lines.push("");
  lines.push(`Generated: ${new Date().toISOString()}`);
  lines.push("");
  lines.push(`Archive: ${archivePath ?? "N/A"}`);
  lines.push(`Archive SHA-256: ${archiveSha256Now ?? inventory?.archive_sha256 ?? "N/A"}`);
  lines.push(`Screenshot count (archive): ${inventory?.files.length ?? "N/A"}`);
  lines.push(`Evidence rows: ${indexRows.length}`);
  lines.push("");
  lines.push("## Checks");
  lines.push("");
  lines.push("| Level | Check | Detail |");
  lines.push("|---|---|---|");
  for (const r of results) {
    lines.push(`| ${r.level} | ${r.check} | ${String(r.detail).replace(/\|/g, "\\|")} |`);
  }
  lines.push("");
  lines.push(`## Final status: ${status}`);
  lines.push("");
  if (fails.length > 0) {
    lines.push("**FAILs must be resolved before STEP 9 (freeze_artifacts.mjs) runs.** Regenerate the affected artifact (STEP 7) and re-validate.");
  } else if (warnings.length > 0) {
    lines.push("**WARNINGs are documented above; confirm with the user before freezing (STEP 9).**");
  } else {
    lines.push("Content is valid — proceed to STEP 9 (freeze_artifacts.mjs). Once frozen and checksummed, this content is not revised in place.");
  }

  await fsp.mkdir(outputDir, { recursive: true });
  const reportPath = path.join(outputDir, "validation-report.md");
  await writeText(reportPath, lines.join("\n") + "\n");

  console.log(lines.join("\n"));
  console.log(`\nWrote ${reportPath}`);

  await appendLog(path.join(workDir, "processing-log.jsonl"), {
    operation: "validate_evidence",
    status,
    input: outputDir,
    output: reportPath,
    script: "validate_evidence.mjs",
    warnings: warnings.map((w) => w.check),
  });

  if (status === "VALIDATION_FAILED") process.exit(1);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
