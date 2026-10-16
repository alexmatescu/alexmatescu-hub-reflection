#!/usr/bin/env node
/**
 * Generator al datelor publice Market Discovery — `src/data/market-discovery/*.json`.
 *
 * Pagina /lab/market-discovery nu citește CSV-uri la rulare. Datele se
 * derivă aici, o singură dată per rulare, din pachetul de dovezi înghețat și
 * din raportul pilotului, ambele doar citite:
 *
 *   evidence/output/mkt/<slug>/<package_version>/   capture index, run-sheet, query set
 *   evidence/output/mkt/<slug>/raport-pilot-v0.1/    entity register, tables/, raport-pilot.md
 *
 * Înainte de calcul, SHA-256 al fiecărui fișier din pachet folosit aici se
 * compară cu `sha256sums` din pachet; o nepotrivire oprește generarea. Hash-urile
 * verificate intră în JSON, ca pagina să poată cita exact versiunea din care
 * provin cifrele.
 *
 * `evidence/output` e în .gitignore: scriptul rulează local, iar JSON-ul
 * rezultat se comite.
 *
 * Utilizare:  node scripts/build-market-discovery-data.mjs
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import yaml from "js-yaml";

const ROOT = path.resolve(import.meta.dirname, "..");
const EVIDENCE = path.join(ROOT, "evidence", "output", "mkt");
const OUT_DIR = path.join(ROOT, "src", "data", "market-discovery");

/**
 * Rulările publicate. Ordinea e cea cronologică. `summaryOverrides` înlocuiește
 * puncte din „Pe scurt” care au fost depășite de decizii ulterioare raportului
 * (index → text nou; `null` elimină punctul).
 */
const RUNS = [
  {
    slug: "mkt-ro-aiv-2026q4-pilot",
    pathSlug: "2026q4-pilot-1",
    label: "Pilotul 1",
    packageVersion: "1.0",
    releaseTag: "mkt-evidence-mkt-ro-aiv-2026q4-pilot-v1.0",
    errata: [
      {
        id: "ERR-01",
        file: "mkt-ro-aiv-2026q4-pilot_errata-01_v1.0.md",
        summary:
          "Două decizii REVIEW (2) au fost aplicate și unui al doilea rând cu același nume (Brand24 pe Google și eduweb.ro pe Bing, Q-DISC-011). Pachetul înghețat nu se modifică; corecția e declarată în anexa errata-01. Totalul de entități nu se schimbă.",
      },
    ],
    summaryOverrides: { 6: null },
    // errata-01 §2.3: rândul devine INCLUDE; se adaugă la proveniența entității.
    errataIncludes: [
      {
        observation: "GSEARCH-Q-DISC-011-O030",
        entityLabel: "Brand24",
        erratum: "ERR-01",
      },
    ],
  },
  {
    slug: "mkt-ro-aiv-2026q4-pilot-2",
    pathSlug: "2026q4-pilot-2",
    label: "Pilotul 2",
    packageVersion: "1.0",
    releaseTag: "mkt-evidence-mkt-ro-aiv-2026q4-pilot-2-v1.0",
    errata: [],
    summaryOverrides: {},
  },
  {
    slug: "mkt-ro-aiv-2026q4-pilot-3",
    pathSlug: "2026q4-pilot-3",
    label: "Pilotul 3",
    packageVersion: "1.1",
    releaseTag: "mkt-evidence-mkt-ro-aiv-2026q4-pilot-3-v1.1",
    errata: [],
    summaryOverrides: {},
  },
];

const SURFACES = [
  "GSEARCH",
  "BSEARCH",
  "GAIMODE",
  "CHATGPT",
  "CLAUDE",
  "GEMINI",
  "PERPLEXITY",
  "COPILOT",
];

// ───────────────────────────── utilitare ─────────────────────────────

/** Parser CSV RFC 4180 (ghilimele, virgule și linii noi în câmpuri, BOM). */
function parseCsv(text) {
  const src = text.replace(/^﻿/, "");
  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;
  for (let i = 0; i < src.length; i++) {
    const c = src[i];
    if (quoted) {
      if (c === '"' && src[i + 1] === '"') {
        field += '"';
        i++;
      } else if (c === '"') quoted = false;
      else field += c;
    } else if (c === '"') quoted = true;
    else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\n" || c === "\r") {
      if (c === "\r" && src[i + 1] === "\n") i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = "";
    } else field += c;
  }
  if (field !== "" || row.length) {
    row.push(field);
    rows.push(row);
  }
  const [header, ...body] = rows.filter((r) => r.some((v) => v !== ""));
  return body.map((r) =>
    Object.fromEntries(header.map((h, i) => [h, r[i] ?? ""])),
  );
}

const readCsv = (p) => parseCsv(fs.readFileSync(p, "utf8"));
const sha256 = (p) =>
  crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");
const findFile = (dir, re) => {
  const f = fs.readdirSync(dir).find((n) => re.test(n));
  if (!f) throw new Error(`Lipsește în ${dir}: ${re}`);
  return path.join(dir, f);
};
const splitList = (v) =>
  v
    ? v
        .split(";")
        .map((s) => s.trim())
        .filter(Boolean)
    : [];
const int = (v) => (v === "" || v == null ? 0 : Number.parseInt(v, 10));

/** Verifică fișierele folosite față de sha256sums din pachet. */
function verifyPackage(pkgDir, files) {
  const sums = fs.readFileSync(
    findFile(pkgDir, /_sha256sums_.*\.txt$/),
    "utf8",
  );
  const expected = new Map(
    sums
      .split("\n")
      .filter(Boolean)
      .map((l) => {
        const [h, name] = l.trim().split(/\s+/);
        return [name, h];
      }),
  );
  const out = {};
  for (const f of files) {
    const name = path.basename(f);
    const want = expected.get(name);
    const got = sha256(f);
    if (!want) throw new Error(`${name} nu apare în sha256sums`);
    if (want !== got)
      throw new Error(`SHA-256 diferit pentru ${name}: ${got} ≠ ${want}`);
    out[name] = got;
  }
  return out;
}

/** Verifică fișierele din raport față de sha256sums.txt al raportului. */
function verifyReport(repDir, files) {
  const expected = new Map(
    fs
      .readFileSync(path.join(repDir, "sha256sums.txt"), "utf8")
      .split("\n")
      .filter(Boolean)
      .map((l) => {
        const [h, name] = l.trim().split(/\s+/);
        return [name.replace(/^\.\//, ""), h];
      }),
  );
  for (const f of files) {
    const name = path.relative(repDir, f);
    const want = expected.get(name);
    const got = sha256(f);
    if (!want)
      throw new Error(`${name} nu apare în sha256sums.txt al raportului`);
    if (want !== got)
      throw new Error(`SHA-256 diferit pentru ${name}: ${got} ≠ ${want}`);
  }
}

/** Punctele din secțiunea „## 1. Pe scurt” a raportului pilotului. */
function readSummary(reportPath, overrides) {
  const md = fs.readFileSync(reportPath, "utf8");
  const section =
    md.split(/^## 1\. Pe scurt\s*$/m)[1]?.split(/^---\s*$/m)[0] ?? "";
  const items = section
    .split("\n")
    .filter((l) => l.startsWith("- "))
    .map((l) => l.slice(2).trim());
  if (!items.length)
    throw new Error(`Secțiunea „Pe scurt” lipsește în ${reportPath}`);
  return items
    .map((t, i) => (i in overrides ? overrides[i] : t))
    .filter((t) => t !== null);
}

// ───────────────────────────── o rulare ─────────────────────────────

function buildRun(cfg) {
  const runDir = path.join(EVIDENCE, cfg.slug);
  const pkgDir = path.join(runDir, cfg.packageVersion);
  const repDir = path.join(runDir, "raport-pilot-v0.1");

  const files = {
    captureIndex: findFile(pkgDir, /_capture-index_v[\d.]+\.csv$/),
    observationRegister: findFile(
      pkgDir,
      /_observation-register_v[\d.]+\.csv$/,
    ),
    querySet: findFile(pkgDir, /_query-set_.*\.csv$/),
    runSheet: findFile(pkgDir, /_run-sheet_v[\d.]+\.yaml$/),
    sessionContext: findFile(pkgDir, /_session-context_v[\d.]+\.csv$/),
    archive: findFile(pkgDir, /_capture-archive_v[\d.]+\.zip$/),
  };
  const hashes = verifyPackage(pkgDir, Object.values(files));

  const captures = readCsv(files.captureIndex);
  const observations = readCsv(files.observationRegister);
  const querySet = readCsv(files.querySet);
  const sessionCtx = readCsv(files.sessionContext);
  const runSheet = yaml.load(fs.readFileSync(files.runSheet, "utf8"));
  const reportFiles = {
    entityRegister: path.join(repDir, "entity-register.csv"),
    observationMap: path.join(repDir, "observation-entity-map.csv"),
    report: path.join(repDir, "raport-pilot.md"),
  };
  const tableFile = (name) =>
    findFile(path.join(repDir, "tables"), new RegExp(`^${name}_`));
  verifyReport(repDir, [
    ...Object.values(reportFiles),
    ...["T01", "T02a", "T03", "T04a", "T04b", "T05"].map(tableFile),
  ]);
  const entities = readCsv(reportFiles.entityRegister);
  const observationMap = readCsv(reportFiles.observationMap);
  const t = (name) => readCsv(tableFile(name));

  const instanceId = captures[0].instance_id;
  const queryIds = [...new Set(captures.map((c) => c.query_id))].sort();
  const queries = querySet
    .filter((q) => queryIds.includes(q.query_id))
    .map((q) => ({
      id: q.query_id,
      text: q.query_exact,
      class: q.class,
      layer: q.layer,
    }));

  // Execuțiile: T01 (reconcilierea din raport) + condițiile de sesiune din capture index.
  const sessionByEvidence = new Map(sessionCtx.map((s) => [s.evidence_id, s]));
  const executions = t("T01").map((e) => {
    const caps = captures.filter(
      (c) => c.mapped_surface === e.surface && c.query_id === e.query_id,
    );
    return {
      surface: e.surface,
      query: e.query_id,
      captures: int(e.captures),
      status: e.execution_status,
      relevance: e.response_relevance,
      observations: int(e.observations),
      include: int(e.include),
      excludeIrrelevant: int(e.exclude_irrelevant),
      excludeNotProvider: int(e.exclude_not_provider),
      excludeUncertain: int(e.exclude_uncertain),
      entitiesBase: int(e.entities_base),
      entitiesExtended: int(e.entities_extended),
      analysis: e.analysis_status,
      sessionConflicts: caps.filter(
        (c) => c.session_context_status === "CONFLICT",
      ).length,
      contamination: [
        ...new Set(caps.map((c) => c.execution_contamination_status)),
      ],
      aiOverview: caps.some((c) => c.ai_overview_status === "CAPTURED"),
    };
  });

  // Condițiile declarate pe suprafață (run-sheet) + ce s-a observat în capturi.
  const surfaces = SURFACES.map((s) => {
    const decl = runSheet.surfaces?.[s] ?? {};
    const ws = runSheet.work_sessions?.[decl.work_session] ?? {};
    const caps = captures.filter((c) => c.mapped_surface === s);
    const ctx = caps
      .map((c) => sessionByEvidence.get(c.evidence_id))
      .filter(Boolean);
    return {
      id: s,
      captures: caps.length,
      date: ws.date || null,
      accountState: decl.account_state ?? null,
      privateWindow: decl.private_window ?? null,
      newConversationPerQuery: decl.new_conversation_per_query ?? null,
      locationDisplayed: [
        ...new Set(
          ctx
            .map((c) => c.location_displayed)
            .filter((v) => v && !v.startsWith("NOT_")),
        ),
      ],
      sessionConflicts: caps.filter(
        (c) => c.session_context_status === "CONFLICT",
      ).length,
    };
  });

  const sessions = Object.entries(runSheet.work_sessions ?? {}).map(
    ([id, w]) => ({
      id,
      date: w.date || null,
      start: w.start || null,
      end: w.end || null,
      location: w.physical_location || null,
      reportedLocation: w.browser_reported_location || null,
      network: w.network || null,
    }),
  );

  const matrix = t("T02a")
    .filter((r) => r.query_id.startsWith("Q-"))
    .map((r) => ({
      query: r.query_id,
      cells: Object.fromEntries(SURFACES.map((s) => [s, int(r[s])])),
      union: int(r.UNION_QUERY),
    }));
  const exclusivity = (rows) =>
    rows.map((r) => ({
      group: r.group,
      entities: int(r.entities_base),
      exclusive: int(r.exclusive_base),
      entitiesExtended: int(r.entities_extended),
      exclusiveExtended: int(r.exclusive_extended),
    }));

  const breadth = t("T05").map((r) => ({
    dimension: r.dimension,
    n: int(r.n),
    entities: int(r.entities_base),
  }));

  // Proveniența fiecărei observații incluse (AVL-MKT-001 v0.10.0 REQ-024):
  // rularea, întrebarea, suprafața, blocul, poziția, URL-ul afișat și dovezile.
  const instancePrefix = `${instanceId}-`;
  const shortEvidence = (id) => id.replace(instancePrefix, "");
  const registerById = new Map(observations.map((o) => [o.observation_id, o]));
  const visible = (v) =>
    v && !["NOT_VISIBLE", "NOT_APPLICABLE", "UNKNOWN"].includes(v) ? v : null;
  const provenanceRow = (m, erratum = null) => {
    const o = registerById.get(instancePrefix + m.observation_id);
    if (!o)
      throw new Error(`Observația ${m.observation_id} lipsește din registru`);
    // Câmpurile goale (null / false) nu se scriu, ca JSON-ul să rămână mic.
    const row = {
      query: o.query_id,
      surface: o.surface,
      provenance: o.provenance,
      block: visible(o.serp_block),
      position: visible(o.organic_position),
      recommended: o.named_as_recommendation === "YES",
      url: visible(o.url_displayed),
      evidence: splitList(o.evidence_ids).map(shortEvidence),
      erratum,
    };
    return Object.fromEntries(
      Object.entries(row).filter(([, v]) => v !== null && v !== false),
    );
  };
  const provenanceByEntity = new Map();
  const addProvenance = (entityId, row) => {
    if (!provenanceByEntity.has(entityId)) provenanceByEntity.set(entityId, []);
    provenanceByEntity.get(entityId).push(row);
  };
  for (const m of observationMap) {
    if (
      m.candidate_union_inclusion === "INCLUDE" &&
      m.mapping_status === "MAPPED_UNION"
    )
      addProvenance(m.entity_id, provenanceRow(m));
  }
  for (const fix of cfg.errataIncludes ?? []) {
    const m = observationMap.find((x) => x.observation_id === fix.observation);
    const ent = entities.find((e) => e.label_lucru === fix.entityLabel);
    if (!m || !ent)
      throw new Error(`Errata ${fix.erratum}: rând sau entitate negăsită`);
    addProvenance(ent.entity_id, provenanceRow(m, fix.erratum));
  }
  const evidenceSha = Object.fromEntries(
    captures.map((c) => [shortEvidence(c.evidence_id), c.sha256]),
  );

  const publicEntities = entities
    .filter(
      (e) =>
        e.union_status === "IN_UNION_BASE" ||
        e.union_status === "IN_UNION_EXTENDED_ONLY",
    )
    .map((e) => ({
      id: e.entity_id,
      key: e.entity_key,
      name: e.label_lucru,
      type: e.entity_type,
      class: e.observed_class,
      base: e.union_status === "IN_UNION_BASE",
      queries: splitList(e.queries_base),
      surfaces: splitList(e.surfaces_base),
      surfacesExtended: splitList(e.surfaces_extended),
      cells: int(e.cells_base),
      observations: int(e.observations_union),
      recommendedOn: splitList(e.recommended_on_surfaces),
      identityFlags: e.identity_flags || null,
      relations: e.relations || null,
      status: "UNVERIFIED",
      provenance: provenanceByEntity.get(e.entity_id) ?? [],
    }));
  for (const e of publicEntities) {
    const expected =
      e.observations + e.provenance.filter((p) => p.erratum).length;
    if (e.provenance.length !== expected)
      throw new Error(
        `${e.id} ${e.name}: ${e.provenance.length} rânduri de proveniență ≠ ${expected}`,
      );
  }

  const count = (arr, key) =>
    arr.reduce((m, x) => ((m[x[key]] = (m[x[key]] ?? 0) + 1), m), {});

  return {
    slug: cfg.pathSlug,
    packageSlug: cfg.slug,
    instanceId,
    label: cfg.label,
    querySetId: querySet[0].query_set_id,
    packageVersion: cfg.packageVersion,
    reportVersion: "0.1",
    release: { tag: cfg.releaseTag, published: false },
    integrity: hashes,
    sessions,
    queries,
    surfaces,
    totals: {
      captures: captures.length,
      executions: executions.length,
      observations: observations.length,
      include: observations.filter(
        (o) => o.candidate_union_inclusion === "INCLUDE",
      ).length,
      entitiesBase: publicEntities.filter((e) => e.base).length,
      entitiesExtended: publicEntities.length,
      entitiesUncertainOnly: entities.filter(
        (e) => e.union_status === "NOT_IN_UNION_UNCERTAIN",
      ).length,
      executionsWithoutCandidates: executions.filter(
        (e) => e.analysis !== "COMPLETED_WITH_CANDIDATES",
      ).length,
      sessionConflicts: captures.filter(
        (c) => c.session_context_status === "CONFLICT",
      ).length,
      contamination: count(captures, "execution_contamination_status"),
    },
    summary: readSummary(
      path.join(repDir, "raport-pilot.md"),
      cfg.summaryOverrides,
    ),
    errata: cfg.errata,
    matrix,
    byQuery: exclusivity(t("T03")),
    bySurface: exclusivity(t("T04a")),
    byFamily: exclusivity(t("T04b")),
    breadth,
    executions,
    entities: publicEntities,
    evidenceSha,
  };
}

// ───────────────────────────── seria ─────────────────────────────

fs.mkdirSync(OUT_DIR, { recursive: true });
const built = RUNS.map(buildRun);
for (const run of built) {
  fs.writeFileSync(
    path.join(OUT_DIR, `${run.slug}.json`),
    JSON.stringify(run, null, 2) + "\n",
  );
  console.log(
    `${run.instanceId}: ${run.totals.captures} capturi, ${run.totals.executions} execuții, ` +
      `${run.totals.entitiesBase} entități în bază (${run.entities.length} publice)`,
  );
}

// Reuniunea cumulată: din tabelele de comparație ale ultimului pilot (T12a, T12d).
const last = RUNS.at(-1);
const lastTables = path.join(
  EVIDENCE,
  last.slug,
  "raport-pilot-v0.1",
  "tables",
);
const t12a = readCsv(findFile(lastTables, /^T12a_/));
const t12d = readCsv(findFile(lastTables, /^T12d_/));
const baseRow = t12a.find((r) => r.group.startsWith("BASE"));
const extRow = t12a.find((r) => r.group.startsWith("EXTINS"));
const series = {
  updatedFrom: last.slug,
  queriesCovered: [
    ...new Set(built.flatMap((r) => r.queries.map((q) => q.id))),
  ].sort(),
  cumulative: {
    unionBase: int(baseRow.union),
    unionExtended: int(extRow.union),
    newInLast: int(baseRow.only_pilot_3),
    seenBefore: int(baseRow.both),
    inAllPilots: t12d.length,
  },
  runs: built.map((r) => r.slug),
};
// Metadate ușoare pentru rute (head, loader): fără entități și proveniență,
// ca datele complete să nu intre în bundle-ul principal al site-ului.
fs.writeFileSync(
  path.join(OUT_DIR, "runs.json"),
  JSON.stringify(
    built.map((r) => ({
      slug: r.slug,
      instanceId: r.instanceId,
      sessionDates: r.sessions.map((x) => x.date).filter(Boolean),
    })),
    null,
    2,
  ) + "\n",
);

fs.writeFileSync(
  path.join(OUT_DIR, "series.json"),
  JSON.stringify(series, null, 2) + "\n",
);
console.log(`Seria: ${series.cumulative.unionBase} entități în bază, cumulat.`);
