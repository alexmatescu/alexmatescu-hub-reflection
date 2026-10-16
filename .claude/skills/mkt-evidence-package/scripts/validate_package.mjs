#!/usr/bin/env node
// mkt-evidence-package / scripts/validate_package.mjs
//
// STEP 12 — VALIDATION. Verifică artefactele pachetului înainte de freeze:
// prezența fișierelor, integritatea arhivei față de sigilare, consistența
// manifest ↔ capture index ↔ session context ↔ registru, enum-uri și
// sentinele, versiuni. Scrie validation-report.md (în output) și
// validation-result.json (în work). Nu modifică niciun artefact.
//
// Status: CONTENT_VALID / HUMAN_REVIEW_REQUIRED / VALIDATION_FAILED.
//
// Usage: node validate_package.mjs <config.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import {
  sha256File,
  pathExists,
  parseCsv,
  readJson,
  writeJson,
  writeText,
  appendLog,
  run,
} from "./lib/common.mjs";
import { loadConfig, instancePaths, packageFiles } from "./lib/mkt.mjs";

const SCRIPT = "validate_package.mjs";

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node validate_package.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const F = packageFiles(config);
  const checks = [];
  const check = (name, ok, detail = "", level = "FAIL") =>
    checks.push({ name, status: ok ? "PASS" : level, detail });
  const out = (k) => path.join(P.outputDir, F[k]);

  // 1. Fișiere prezente.
  for (const k of [
    "manifest",
    "querySet",
    "runSheet",
    "sessionContext",
    "captureIndex",
    "register",
    "readme",
  ]) {
    if (!F[k]) continue;
    check(`fișier prezent: ${F[k]}`, await pathExists(out(k)));
  }
  if (checks.some((c) => c.status === "FAIL")) return finish();

  // 2. Arhiva și manifestul.
  const manifest = await readJson(out("manifest"));
  const archSha = await sha256File(manifest.archive_path);
  check(
    "SHA-256 arhivă = valoarea de la sigilare",
    archSha === manifest.archive_sha256,
    archSha,
  );
  check(
    "unzip -t",
    (await run("unzip", ["-t", "-q", manifest.archive_path])).code === 0,
  );
  check(
    "manifest în pachet = manifest de lucru",
    (await sha256File(out("manifest"))) === (await sha256File(P.manifestPath)),
  );
  check(
    "verificările sigilării toate PASS",
    Object.values(manifest.verification).every((v) => v === "PASS"),
    JSON.stringify(manifest.verification),
  );
  check(
    "archive.version = versiunea manifestului",
    manifest.archive_version === String(config.archive.version),
  );

  // 3. Setul de query-uri.
  check(
    "SHA-256 sursă set de query-uri",
    (await sha256File(path.resolve(config.query_set.source_path))) ===
      config.query_set.source_sha256,
  );
  const qs = parseCsv(await fs.readFile(out("querySet"), "utf8"));
  const qids = new Set(qs.map((q) => q.query_id));
  check(
    "queries_executed ⊂ set",
    config.queries_executed.every((q) => qids.has(q)),
  );

  // 4. Capture index ↔ manifest.
  const cap = parseCsv(await fs.readFile(out("captureIndex"), "utf8"));
  const byId = new Map(manifest.files.map((f) => [f.evidence_id, f]));
  check(
    "capture index: un rând pe captură",
    cap.length === manifest.files.length,
    `${cap.length}/${manifest.files.length}`,
  );
  check(
    "capture index: Evidence ID unice",
    new Set(cap.map((c) => c.evidence_id)).size === cap.length,
  );
  const shaMismatch = cap
    .filter((c) => byId.get(c.evidence_id)?.sha256 !== c.sha256)
    .map((c) => c.evidence_id);
  check(
    "capture index: SHA-256 = manifest",
    shaMismatch.length === 0,
    shaMismatch.join(", "),
  );
  const unclassC = cap
    .filter((c) => Object.values(c).includes("UNCLASSIFIED"))
    .map((c) => c.evidence_id);
  check(
    "capture index: fără UNCLASSIFIED",
    unclassC.length === 0,
    unclassC.join(", "),
  );
  const badQ = cap
    .filter((c) => c.query_id !== "NOT_APPLICABLE" && !qids.has(c.query_id))
    .map((c) => c.evidence_id);
  check("capture index: query_id ∈ set", badQ.length === 0, badQ.join(", "));
  const pendingC = cap
    .filter(
      (c) =>
        c.review_status === "REVIEW_REQUIRED" ||
        c.mapping_status === "REVIEW_REQUIRED",
    )
    .map((c) => c.evidence_id);
  check(
    "capture index: nimic în REVIEW_REQUIRED",
    pendingC.length === 0,
    pendingC.join(", "),
    "REVIEW",
  );
  const privacyOpen = cap
    .filter((c) => c.privacy_flag === "PRIVACY_REVIEW_REQUIRED")
    .map((c) => c.evidence_id);
  check(
    "capture index: privacy confirmat",
    privacyOpen.length === 0,
    privacyOpen.join(", "),
    "REVIEW",
  );
  const execs = new Set(
    cap.map((c) => c.execution_id).filter((e) => e !== "NOT_APPLICABLE"),
  );

  // 5. Session context ↔ manifest.
  const sess = parseCsv(await fs.readFile(out("sessionContext"), "utf8"));
  check(
    "session context: un rând pe captură",
    sess.length === manifest.files.length &&
      sess.every((s) => byId.has(s.evidence_id)),
  );

  // 6. Registru.
  const reg = parseCsv(await fs.readFile(out("register"), "utf8"));
  check(
    "registru: Observation ID unice",
    new Set(reg.map((r) => r.observation_id)).size === reg.length,
  );
  const badExec = reg
    .filter((r) => !execs.has(r.execution_id))
    .map((r) => r.observation_id);
  check(
    "registru: execution_id există în capture index",
    badExec.length === 0,
    badExec.slice(0, 5).join(", "),
  );
  const capExec = new Map(cap.map((c) => [c.evidence_id, c.execution_id]));
  const aioIds = cap.filter(
    (c) =>
      c.ai_overview_evidence_id &&
      c.ai_overview_evidence_id !== "NOT_APPLICABLE",
  );
  for (const c of aioIds)
    capExec.set(c.ai_overview_evidence_id, c.execution_id);
  const badAioId = aioIds
    .filter(
      (c) =>
        c.ai_overview_evidence_id !== `${c.evidence_id}-AIO` ||
        c.mapped_surface !== "GSEARCH" ||
        c.ai_overview_status !== "CAPTURED",
    )
    .map((c) => c.evidence_id);
  check(
    "capture index: ID-urile AI Overview corespund capturilor GSEARCH cu blocul capturat",
    badAioId.length === 0,
    badAioId.join(", "),
  );
  const badAioObs = reg
    .filter((r) => {
      const evs = r.evidence_ids.split(";");
      const n = evs.filter((e) => e.endsWith("-AIO")).length;
      return r.serp_block === "AI_OVERVIEW" ? n !== evs.length : n > 0;
    })
    .map((r) => r.observation_id);
  check(
    "registru: rândurile AI Overview citează ID-urile -AIO, celelalte nu",
    badAioObs.length === 0,
    badAioObs.slice(0, 5).join(", "),
  );
  const badEv = reg
    .filter((r) =>
      r.evidence_ids.split(";").some((e) => capExec.get(e) !== r.execution_id),
    )
    .map((r) => r.observation_id);
  check(
    "registru: Evidence ID-urile aparțin execuției",
    badEv.length === 0,
    badEv.slice(0, 5).join(", "),
  );
  const unclassR = reg
    .filter((r) => Object.values(r).includes("UNCLASSIFIED"))
    .map((r) => r.observation_id);
  check(
    "registru: fără UNCLASSIFIED",
    unclassR.length === 0,
    unclassR.slice(0, 5).join(", "),
  );
  const noBasis = reg
    .filter(
      (r) =>
        ["IRRELEVANT", "UNCERTAIN"].includes(r.query_relevance) &&
        !r.relevance_basis,
    )
    .map((r) => r.observation_id);
  check(
    "registru: relevance_basis prezent unde e cerut",
    noBasis.length === 0,
    noBasis.slice(0, 5).join(", "),
  );
  const pendingR = reg
    .filter(
      (r) =>
        r.review_status === "REVIEW_REQUIRED" ||
        r.candidate_union_inclusion === "REVIEW",
    )
    .map((r) => r.observation_id);
  check(
    "registru: nimic în REVIEW",
    pendingR.length === 0,
    pendingR.slice(0, 5).join(", "),
    "REVIEW",
  );

  // 7. Versiuni și README.
  const readme = await fs.readFile(out("readme"), "utf8");
  check(
    "README: versiunile corespund config-ului",
    readme.includes(
      `archive v${config.archive.version} / metadata v${config.metadata_version}`,
    ),
  );
  check(
    "README: numărul de observații corespunde registrului",
    readme.includes(`Observations: ${reg.length}`),
  );
  check(
    "README: numărul de capturi corespunde indexului",
    readme.includes(`Captures: ${cap.length}`),
  );

  return finish();

  async function finish() {
    const fails = checks.filter((c) => c.status === "FAIL");
    const reviews = checks.filter((c) => c.status === "REVIEW");
    const status = fails.length
      ? "VALIDATION_FAILED"
      : reviews.length
        ? "HUMAN_REVIEW_REQUIRED"
        : "CONTENT_VALID";
    const report = [
      `# Validation report — ${config.instance_id}`,
      "",
      `Status: **${status}** · metadata v${config.metadata_version} · ${new Date().toISOString()}`,
      "",
      "| Verificare | Status | Detaliu |",
      "|---|---|---|",
      ...checks.map(
        (c) =>
          `| ${c.name} | ${c.status} | ${String(c.detail).replace(/\|/g, "\\|")} |`,
      ),
      "",
    ].join("\n");
    await fs.mkdir(P.outputDir, { recursive: true });
    await writeText(path.join(P.outputDir, "validation-report.md"), report);
    await writeJson(path.join(P.workDir, "validation-result.json"), {
      status,
      metadata_version: String(config.metadata_version),
      checks,
      generated_at: new Date().toISOString(),
    });
    await appendLog(P.logPath, {
      operation: "validate",
      status,
      script: SCRIPT,
      output: { fails: fails.length, reviews: reviews.length },
    });
    console.log(
      `VALIDATION — ${status} (${checks.length} verificări; ${fails.length} FAIL; ${reviews.length} REVIEW)`,
    );
    for (const c of [...fails, ...reviews])
      console.log(`  ${c.status}: ${c.name} ${c.detail}`);
    if (fails.length) process.exitCode = 1;
  }
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
