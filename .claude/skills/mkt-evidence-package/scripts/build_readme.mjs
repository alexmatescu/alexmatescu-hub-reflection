#!/usr/bin/env node
// mkt-evidence-package / scripts/build_readme.mjs
//
// STEP 11 (partea a treia). Construiește README-ul pachetului mecanic, după
// references/readme-template.md: numerele se calculează din artefactele
// finalizate, paragrafele narative sunt texte fixe, iar textul liber vine doar
// din config.notes și din fișa rulării. Refuză să rescrie un README înghețat.
//
// Usage: node build_readme.mjs <config.yaml>

import path from "node:path";
import { promises as fs } from "node:fs";
import { parseCsv, readJson, readConfig, writeText, appendLog, assertNotFrozen, pathExists } from "./lib/common.mjs";
import { loadConfig, instancePaths, packageFiles } from "./lib/mkt.mjs";

const SCRIPT = "build_readme.mjs";

const FIXED = {
  scope:
    "Acest pachet conservă capturile și observațiile brute ale unei rulări Discovery. Documentează ce au afișat suprafețele la momentul capturii. Nu constituie Candidate Set, Market Reference Set sau o evaluare a furnizorilor.",
  asReturned:
    "Au fost înregistrate exclusiv rezultatele afișate direct de suprafață ca răspuns la interogare: rezultate SERP (poziție, titlu, URL afișat, fragment) și textul răspunsurilor AI cu sursele afișate. Paginile rezultatelor și sursele citate nu au fost deschise. Entitățile din interiorul directoarelor sau articolelor nu au fost extrase, cu excepția numelor vizibile în fragmentul SERP.",
  session:
    "Contextul de sesiune a fost stabilit din indicatorii vizibili în capturi. NOT_VISIBLE înseamnă că indicatorul nu apare pe ecran, nu că starea respectivă lipsea. Fereastra privată și conversația nouă nu garantează absența personalizării sau a localizării.",
  relevance:
    "Calificarea IRRELEVANT descrie lipsa de legătură a rezultatului cu intenția interogării, pe baza conținutului afișat. Nu este o evaluare a furnizorului, a calității sau a eligibilității lui.",
  limits:
    "Rezultatele motoarelor de căutare și răspunsurile AI depind de momentul rulării, de versiunea modelului, de starea indexului, de cont, personalizare și localizare. O singură execuție pe pereche query–suprafață descrie o observație punctuală, nu o probabilitate stabilă de apariție. Pachetul susține auditabilitatea, trasabilitatea și verificarea observațiilor înregistrate, precum și reproductibilitatea protocolului documentat. Nu susține reproductibilitatea unor rezultate identice. Prezența într-un rezultat nu este o recomandare editorială a motorului. Absența nu dovedește inexistența sau ieșirea de pe piață.",
  notIncluded:
    "Deduplicarea entităților, Verification (identitate, serviciu, relevanță pentru România, eligibilitate), clasamente sau concluzii despre piață.",
};

const count = (rows, f) => rows.reduce((m, r) => ((m[r[f]] = (m[r[f]] ?? 0) + 1), m), {});
const esc = (s) => String(s ?? "").replace(/\|/g, "\\|").replace(/\r?\n/g, " ");
function table(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `|${headers.map(() => "---").join("|")}|`,
    ...rows.map((r) => `| ${r.map(esc).join(" | ")} |`),
  ].join("\n");
}
const countTable = (label, obj) =>
  table([label, "Rânduri"], Object.entries(obj).sort((a, b) => b[1] - a[1]).map(([k, v]) => [k, String(v)]));

async function main() {
  const configPath = process.argv[2];
  if (!configPath) {
    console.error("Usage: node build_readme.mjs <config.yaml>");
    process.exit(2);
  }
  const config = await loadConfig(configPath);
  const P = instancePaths(config);
  const F = packageFiles(config);
  const out = (k) => path.join(P.outputDir, F[k]);

  for (const k of ["captureIndex", "register"]) {
    if (!(await pathExists(out(k)))) {
      console.error(`FAIL: lipsește ${F[k]} — rulează întâi build_capture_index/build_register cu --finalize.`);
      process.exit(1);
    }
  }
  const readmePath = out("readme");
  await assertNotFrozen(readmePath);

  const manifest = await readJson(P.manifestPath);
  const detection = await readJson(P.detectionPath);
  const session = await readJson(P.sessionSummaryPath);
  const cap = parseCsv(await fs.readFile(out("captureIndex"), "utf8"));
  const reg = parseCsv(await fs.readFile(out("register"), "utf8"));
  const qs = parseCsv(await fs.readFile(P.querySetPath, "utf8"));
  const sheet = config.run_sheet?.path ? await readConfig(path.resolve(config.run_sheet.path)) : null;

  const execs = new Map();
  for (const c of cap) {
    if (c.execution_id === "NOT_APPLICABLE") continue;
    if (!execs.has(c.execution_id)) execs.set(c.execution_id, c);
  }
  const surfaces = detection.surfaces_detected;
  const expected = surfaces.length * config.queries_executed.length;
  const obsExecs = new Set(reg.map((r) => r.execution_id));
  const noObs = [...execs.keys()].filter((e) => !obsExecs.has(e));
  const today = new Date().toISOString().slice(0, 10);
  const L = [];

  L.push(`# ${config.instance_id} — Discovery Evidence Package`, "");
  L.push(`Series: ${config.series_id} · Quarter: ${config.quarter} · Instance type: ${config.instance_type}  `);
  L.push(`Query set: ${config.query_set.query_set_id} (source SHA-256 \`${config.query_set.source_sha256}\`)  `);
  L.push(`Package version: archive v${config.archive.version} / metadata v${config.metadata_version}  `);
  L.push(`Captures: ${cap.length} · Executions: ${execs.size} · Observations: ${reg.length}  `);
  L.push(`Generated: ${today}`, "");

  L.push("## 1. Scop", "", FIXED.scope, "");
  if (config.notes) L.push(String(config.notes), "");

  L.push("## 2. Instanța și setul de query-uri", "");
  L.push(`Setul de query-uri: \`${config.query_set.source_path}\` (${config.query_set.query_set_id}). Query-uri executate în instanță:`, "");
  L.push(table(["ID", "Strat", "Text exact"], qs.filter((q) => q.executed_in_instance === "YES").map((q) => [q.query_id, q.layer, q.query_exact])), "");
  L.push("Suprafețe detectate automat din subfolderele arhivei:", "");
  L.push(table(["Subfolder", "Suprafață", "Bază", "Capturi"], detection.subfolders.map((s) => [s.folder_nfc, s.mapped_surface, s.mapping_basis, String(s.file_count)])), "");
  L.push(`Execuții așteptate (query-uri × suprafețe): ${expected}. Execuții reconstituite din capturi: ${execs.size}.` + (expected === execs.size ? " Nu lipsește nicio execuție." : ` Lipsă: ${expected - execs.size}.`), "");

  L.push("## 3. Principiul as-returned", "", FIXED.asReturned, "");

  L.push("## 4. Context de sesiune", "", FIXED.session, "");
  const fv = (a, f) => a.fields[f]?.value ?? "NOT_VISIBLE";
  L.push(
    table(
      ["Suprafață", "Fereastră privată", "Cont", "Nivel cont", "Conversație", "Model afișat", "Limbă interfață", "Locație afișată", "Contaminare"],
      Object.entries(session.by_surface).map(([s, a]) => [
        s, fv(a, "private_window_observed"), fv(a, "account_state_observed"), fv(a, "account_tier_observed"),
        fv(a, "conversation_mode_observed"), fv(a, "model_displayed"), fv(a, "ui_language_observed"),
        fv(a, "location_displayed"), a.contamination_status,
      ]),
    ),
    "",
  );
  if (sheet) {
    const ws = Object.entries(sheet.work_sessions ?? {}).map(([id, w]) => `${id}: data ${w.date || "UNKNOWN"}, locație fizică ${w.physical_location || "UNKNOWN"}, dispozitiv ${w.device || "UNKNOWN"}, browser ${w.browser || "UNKNOWN"}`);
    L.push(`Declarat de operator (${sheet.operator ?? "UNKNOWN"}) în fișa rulării: ${ws.join("; ")}.`, "");
    const notes = Object.entries(sheet.surfaces ?? {}).filter(([, d]) => d?.notes).map(([s, d]) => [s, d.notes]);
    if (notes.length) L.push(table(["Suprafață", "Notă declarată"], notes), "");
  }
  const priv = cap.filter((c) => c.privacy_flag !== "NONE_OBSERVED").length;
  if (priv) L.push(`Capturi cu date de cont vizibile (${priv}): marcate \`${[...new Set(cap.filter((c) => c.privacy_flag !== "NONE_OBSERVED").map((c) => c.privacy_flag))].join(", ")}\`. Datele de cont nu au fost transcrise.`, "");

  L.push("## 5. Abateri și limite declarate", "");
  if (sheet?.deviations) {
    L.push(table(["ID", "Regulă", "Ce s-a întâmplat", "Motiv"], Object.entries(sheet.deviations).map(([id, d]) => [id, d.rule, d.actual, d.reason || "—"])), "");
  } else L.push("Nu au fost declarate abateri.", "");
  if (sheet?.limitations) {
    L.push(table(["ID", "Subiect", "Descriere"], Object.entries(sheet.limitations).map(([id, d]) => [id, d.topic, d.description])), "");
  }

  L.push("## 6. Sigilare și proveniență", "");
  L.push(`Folderul de capturi a fost sigilat la ${manifest.sealed_at}. Fiecare captură a primit un Evidence ID la sigilare, legat de calea relativă și de SHA-256-ul ei.`, "");
  L.push(table(["Element", "Valoare"], [
    ["Arhivă", F.archive],
    ["SHA-256 arhivă", `\`${manifest.archive_sha256}\``],
    ["Capturi", String(manifest.capture_count)],
    ["Evidence ID", `${manifest.files[0].evidence_id} … ${manifest.files[manifest.files.length - 1].evidence_id}`],
    ["Tipar nume fișiere", `${manifest.filename_timestamp.pattern_id ?? "per fișier"} (${manifest.filename_timestamp.matched}/${manifest.filename_timestamp.total}); sursa: OS_FILENAME`],
    ["Fișiere de sistem excluse", manifest.excluded_system_files.map((f) => f.path).join(", ") || "—"],
    ...Object.entries(manifest.verification).map(([k, v]) => [`Verificare: ${k}`, v]),
  ]), "");

  L.push("## 7. Capture Index", "");
  L.push(countTable("Suprafață", count(cap, "mapped_surface")), "");
  L.push(countTable("Rol captură", count(cap, "capture_role")), "");
  const execRows = [...execs.values()];
  L.push(countTable("Status execuție", count(execRows, "execution_status")), "");
  L.push(countTable("Relevanța răspunsului (pe execuție)", count(execRows, "response_relevance")), "");

  L.push("## 8. Observation Register", "");
  L.push(countTable("Proveniență", count(reg, "provenance")), "");
  const sp = {};
  for (const r of reg) sp[`${r.surface} · ${r.provenance}`] = (sp[`${r.surface} · ${r.provenance}`] ?? 0) + 1;
  L.push(countTable("Suprafață · proveniență", sp), "");
  L.push(countTable("Bandă de adâncime (doar Search)", count(reg.filter((r) => r.depth_band !== "NOT_APPLICABLE"), "depth_band")), "");
  L.push(countTable("Relevanță față de query", count(reg, "query_relevance")), "");
  L.push(countTable("Includere în reuniunea de candidați", count(reg, "candidate_union_inclusion")), "");
  L.push(`Observații fără URL vizibil: ${reg.filter((r) => r.url_displayed === "NOT_VISIBLE").length}. Execuții fără nicio observație: ${noObs.length ? noObs.join(", ") : "niciuna"}.`, "");

  L.push("## 9. Relevanța față de query", "", FIXED.relevance, "");
  const partial = execRows.filter((e) => e.response_relevance !== "RELEVANT");
  if (partial.length) L.push(table(["Execuție", "Relevanță", "Bază"], partial.map((e) => [e.execution_id, e.response_relevance, e.relevance_basis])), "");
  L.push(`Rânduri IRRELEVANT în registru: ${reg.filter((r) => r.query_relevance === "IRRELEVANT").length}. Fiecare are relevance_basis și rămâne în registru.`, "");

  const anomalies = cap.filter((c) => c.archive_anomaly !== "NONE");
  const incidents = Object.entries(sheet?.incidents ?? {}).filter(([, i]) => i && Object.values(i).some((v) => String(v ?? "").trim()));
  if (anomalies.length || incidents.length) {
    L.push("## 10. Incidente și anomalii", "");
    if (anomalies.length) L.push(table(["Evidence ID", "Anomalie", "Note"], anomalies.map((c) => [c.evidence_id, c.archive_anomaly, c.notes])), "");
    if (incidents.length) L.push(table(["ID", "Suprafață", "Query", "Descriere", "Reîncercare"], incidents.map(([id, i]) => [id, i.surface, i.query_id, i.description, i.retry])), "");
  }

  L.push("## 11. Integritate", "");
  L.push(`Manifestul \`${F.checksums}\` conține SHA-256 pentru arhivă și pentru toate artefactele de mai jos, înghețate (read-only) înainte de calcul. Verificare, din directorul pachetului:`, "");
  L.push("```", `shasum -a 256 -c ${F.checksums}`, "```", "");

  L.push("## 12. Limitele interpretării", "", FIXED.limits, "");
  L.push("## 13. Ce NU conține pachetul", "", FIXED.notIncluded, "");

  L.push("## 14. Versionare", "");
  L.push(`Arhivă v${config.archive.version} (se schimbă doar dacă se schimbă capturile). Metadate v${config.metadata_version} (se schimbă la orice corecție a indexului, registrului sau README-ului). Generat cu skill-ul \`mkt-evidence-package\`.`, "");

  L.push("## 15. Fișiere", "");
  const desc = {
    archive: "Arhiva capturilor (sigilată)",
    manifest: "Manifestul de sigilare: Evidence ID, cale, SHA-256, timestamp din numele fișierului",
    querySet: "Setul de query-uri derivat din documentul sursă",
    runSheet: "Fișa rulării (declarațiile operatorului)",
    sessionContext: "Contextul de sesiune observat, pe captură",
    captureIndex: "Capture Index: o captură pe rând",
    register: "Observation Register: o observație pe rând",
    readme: "Acest fișier",
    checksums: "Manifestul SHA-256",
  };
  L.push(table(["Fișier", "Conținut"], Object.entries(F).filter(([, v]) => v).map(([k, v]) => [v, desc[k]])), "");

  await writeText(readmePath, L.join("\n"));
  await appendLog(P.logPath, { operation: "build_readme", status: "PASS", script: SCRIPT, output: readmePath });
  console.log(`README → ${readmePath} (${L.length} linii)`);
}

main().catch((err) => {
  console.error("FAIL:", err.stack || err.message);
  process.exit(1);
});
