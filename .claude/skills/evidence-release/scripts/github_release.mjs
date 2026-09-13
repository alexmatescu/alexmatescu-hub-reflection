#!/usr/bin/env node
// evidence-release / scripts/github_release.mjs
//
// STEP 14 — "package/release": find-or-create a DRAFT release, upload
// missing assets, verify, print the draft URL. Never publishes (`gh release
// edit --draft=false` is never called), never `--clobber`s an existing
// asset, and refuses to touch a release that is already published
// (non-draft) — that's immutable.
//
// Before touching `gh` at all, this re-verifies the checksum manifest
// (STEP 11 already did this once, right after generation — this is the
// second, later-in-time confirmation, since some delay for STEP 12/13
// human confirmation may have passed) and confirms the Evidence Index/
// README are still frozen (STEP 9). Any drift here means something wrote to
// the output directory after checksumming — the pipeline must not upload
// evidence that no longer matches its own manifest.
//
// Dry-run by default: prints the exact plan without calling any mutating
// `gh` command. Only runs for real with `--execute`, which SKILL.md must
// only pass after the user has explicitly confirmed the upload (STEP 13).
//
// Usage:
//   node github_release.mjs <evidence-package.yaml>            # dry-run / plan
//   node github_release.mjs <evidence-package.yaml> --execute   # actually create/upload

import path from "node:path";
import {
  readConfig,
  run,
  pathExists,
  isFrozen,
  readJson,
  writeText,
  appendLog,
  verifyChecksumManifest,
  artifactFileName,
} from "./lib/common.mjs";

function buildReleaseNotes(config, stats) {
  const { project = "AI Visibility Lab", study_name, entity_name, measurement_point, archive, metadata_version } = config;
  const lines = [];
  lines.push(`**Project:** ${project}`);
  if (study_name) lines.push(`**Study:** ${study_name}`);
  lines.push(`**Entity:** ${entity_name}`);
  lines.push(`**Measurement point:** ${measurement_point}`);
  lines.push(`**Raw archive version:** ${archive.version}`);
  lines.push(`**Metadata version:** ${metadata_version}`);
  if (stats) {
    lines.push(`**Evidence count:** ${stats.total}`);
    lines.push(`**Platforms:** ${(stats.platforms || []).join(", ") || "UNKNOWN"} (${(stats.platforms || []).length})`);
    if (stats.sessionCounts) lines.push(`**Sessions:** ${Object.keys(stats.sessionCounts).length}`);
    if (Array.isArray(config.extra_columns) && config.extra_columns.length > 0) {
      lines.push(`**Experimental conditions tracked:** ${config.extra_columns.join(", ")}`);
    }
  }
  lines.push("");
  lines.push(
    "**Integrity statement:** every asset in this release has a SHA-256 checksum recorded in the `sha256sums` manifest. The raw evidence archive is immutable — this and all releases produced by evidence-release are never overwritten in place; revisions get a new archive or metadata version.",
  );
  lines.push("");
  lines.push(
    "**Methodological note:** this package documents recorded observations. It supports auditability, traceability, and verification of recorded observations, and reproducibility of the documented protocol — not reproducibility of identical AI output (AI outputs are time-dependent).",
  );
  lines.push("");
  lines.push("**Assets:**");
  return lines;
}

async function main() {
  const configPath = process.argv[2];
  const execute = process.argv.includes("--execute");
  if (!configPath) {
    console.error("Usage: node github_release.mjs <evidence-package.yaml> [--execute]");
    process.exit(2);
  }
  const config = await readConfig(configPath);
  const { entity_slug, entity_name, measurement_point, metadata_version, archive } = config;
  const repo = config.github?.repository;
  if (!repo) {
    console.error("FAIL: config.github.repository is required (owner/repo).");
    process.exit(1);
  }
  if (config.github?.draft === false) {
    console.error("FAIL: config.github.draft must not be false — evidence-release only ever creates draft releases.");
    process.exit(1);
  }

  const tag =
    config.github?.release_tag ||
    `evidence-${entity_slug}-${measurement_point.toLowerCase()}-v${archive.version}`;
  const title = `${entity_name} — ${measurement_point} Evidence Archive v${archive.version}`;

  const workDir = path.resolve("evidence/work", entity_slug, measurement_point);
  const outputDir = path.resolve("evidence/output", entity_slug, measurement_point, metadata_version);
  const logPath = path.join(workDir, "processing-log.jsonl");

  const archiveCanonicalName = artifactFileName(entity_slug, measurement_point, "evidence-archive", archive.version, "zip");
  const indexFile = artifactFileName(entity_slug, measurement_point, "evidence-index", metadata_version, "csv");
  const readmeFile = artifactFileName(entity_slug, measurement_point, "readme", metadata_version, "md");
  const shaFile = artifactFileName(entity_slug, measurement_point, "sha256sums", metadata_version, "txt");

  // The archive's canonical-named symlink lives in outputDir — created by
  // build_checksums.mjs (STEP 10), not here. github_release.mjs only ever
  // reads from the already-finalized/frozen/checksummed output directory.
  const assets = [
    { name: archiveCanonicalName, path: path.join(outputDir, archiveCanonicalName) },
    { name: indexFile, path: path.join(outputDir, indexFile) },
    { name: readmeFile, path: path.join(outputDir, readmeFile) },
    { name: shaFile, path: path.join(outputDir, shaFile) },
  ];
  for (const a of assets) {
    if (!(await pathExists(a.path))) {
      console.error(
        `FAIL: expected asset not found: ${a.path}. Run STEP 7-11 first (build_index --finalize, build_readme, ` +
          `freeze_artifacts, build_checksums, verify_checksums).`,
      );
      process.exit(1);
    }
  }
  for (const [label, file] of [["evidence index", indexFile], ["README", readmeFile]]) {
    if (!(await isFrozen(path.join(outputDir, file)))) {
      console.error(
        `FAIL: ${label} (${file}) is not frozen. Something wrote to the output directory after STEP 9 — ` +
          `re-run STEP 8-11 rather than uploading unfrozen content.`,
      );
      process.exit(1);
    }
  }

  console.log("Re-verifying checksum manifest before touching GitHub...");
  const verify = await verifyChecksumManifest(outputDir, shaFile);
  for (const line of verify.lines) console.log(`  ${line}`);
  if (!verify.ok) {
    console.error(
      "FAIL: checksum manifest no longer matches the files in the output directory. Do not upload. " +
        "Re-run STEP 7-11 rather than uploading a package whose own integrity check fails.",
    );
    process.exit(1);
  }
  console.log("Checksums verified — safe to package/release.\n");

  const ghv = await run("gh", ["--version"]);
  if (ghv.code !== 0) {
    console.error("FAIL: gh CLI not found. Install it before running this step: https://cli.github.com/");
    process.exit(1);
  }
  const gha = await run("gh", ["auth", "status"]);
  if (gha.code !== 0) {
    console.error("FAIL: gh CLI is not authenticated. Run `gh auth login` and re-run.");
    console.error(gha.stderr);
    process.exit(1);
  }

  const statsPath = path.join(workDir, "index-stats.json");
  const stats = (await pathExists(statsPath)) ? await readJson(statsPath) : null;
  const notesLines = buildReleaseNotes(config, stats);
  for (const a of assets) notesLines.push(`- \`${a.name}\``);
  const notesPath = path.join(workDir, "release-notes.md");
  await writeText(notesPath, notesLines.join("\n") + "\n");

  console.log(`Tag: ${tag}`);
  console.log(`Title: ${title}`);
  console.log(`Repository: ${repo}`);
  console.log(`Notes file: ${notesPath}`);
  console.log(`Assets:\n${assets.map((a) => `  - ${a.name}  (${a.path})`).join("\n")}`);

  const view = await run("gh", ["release", "view", tag, "--repo", repo, "--json", "isDraft,assets,url"]);
  let releaseExists = view.code === 0;
  let existingInfo = null;
  if (releaseExists) {
    existingInfo = JSON.parse(view.stdout);
    if (existingInfo.isDraft === false) {
      console.error(
        `FAIL: release ${tag} already exists and is PUBLISHED (not draft). Published evidence is immutable — do not modify. Create a new archive/metadata version instead.`,
      );
      process.exit(1);
    }
    console.log(`\nDraft release ${tag} already exists (${existingInfo.url}).`);
    const existingNames = new Set((existingInfo.assets || []).map((a) => a.name));
    const missing = assets.filter((a) => !existingNames.has(a.name));
    const already = assets.filter((a) => existingNames.has(a.name));
    if (already.length > 0) {
      console.log(`Already uploaded (skipped, never overwritten): ${already.map((a) => a.name).join(", ")}`);
    }
    console.log(`To upload: ${missing.length > 0 ? missing.map((a) => a.name).join(", ") : "(nothing — all assets already present)"}`);

    if (!execute) {
      console.log("\nDry-run only. Re-run with --execute after explicit user confirmation to actually upload.");
      return;
    }
    for (const a of missing) {
      const up = await run("gh", ["release", "upload", tag, a.path, "--repo", repo]);
      if (up.code !== 0) {
        console.error(`FAIL: upload failed for ${a.name}: ${up.stderr}`);
        process.exit(1);
      }
      console.log(`Uploaded: ${a.name}`);
    }
  } else {
    if (!execute) {
      console.log(`\nDry-run only. Would create DRAFT release ${tag} with the assets listed above.`);
      console.log("Re-run with --execute after explicit user confirmation to actually create it.");
      return;
    }
    const createArgs = [
      "release",
      "create",
      tag,
      "--repo",
      repo,
      "--title",
      title,
      "--notes-file",
      notesPath,
      "--draft",
      ...assets.map((a) => a.path),
    ];
    const create = await run("gh", createArgs);
    if (create.code !== 0) {
      console.error(`FAIL: gh release create failed: ${create.stderr}`);
      process.exit(1);
    }
    console.log(create.stdout.trim());
  }

  const postUploadView = await run("gh", ["release", "view", tag, "--repo", repo, "--json", "isDraft,assets,url"]);
  if (postUploadView.code !== 0) {
    console.error("WARNING: could not verify release after upload.");
  } else {
    const info = JSON.parse(postUploadView.stdout);
    const names = (info.assets || []).map((a) => a.name);
    const expectedNames = assets.map((a) => a.name);
    const missingAfter = expectedNames.filter((n) => !names.includes(n));
    console.log(`\nDraft release URL: ${info.url}`);
    console.log(`Assets present: ${names.join(", ")}`);
    if (missingAfter.length > 0) {
      console.error(`WARNING: expected assets missing after upload: ${missingAfter.join(", ")}`);
    }
    console.log("\nThe release remains a DRAFT. Publishing it is a separate, explicit action for you to take.");
  }

  await appendLog(logPath, {
    operation: "github_release",
    status: "PASS",
    input: tag,
    output: { repo, tag },
    script: "github_release.mjs",
    warnings: [],
  });
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
