#!/usr/bin/env node
/**
 * Generator al datelor publice pentru pilotul de Market Verification —
 * `src/data/market-verification/2026q4-pilot.json` și `union-status.json`.
 *
 * Sursa e pachetul public, înghețat, al registrului pilotului
 * (release GitHub `mkt-verification-mkt-ro-aiv-2026q4-pilot-v1.1`), doar citit:
 *
 *   evidence/output/mkt/mkt-ro-aiv-2026q4-pilot-mvr/1.1/
 *
 * Înainte de calcul, SHA-256 al fiecărui fișier folosit se compară cu
 * `sha256sums` din pachet; o nepotrivire oprește generarea. Hash-urile verificate
 * intră în JSON, ca pagina să citeze exact versiunea din care provin datele.
 *
 * `evidence/output` e în .gitignore: scriptul rulează local, iar JSON-ul
 * rezultat se comite.
 *
 * Utilizare:  node scripts/build-market-verification-data.mjs
 */

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const ROOT = path.resolve(import.meta.dirname, "..");
const PKG = path.join(
  ROOT,
  "evidence",
  "output",
  "mkt",
  "mkt-ro-aiv-2026q4-pilot-mvr",
  "1.1",
);
const OUT_DIR = path.join(ROOT, "src", "data", "market-verification");
const P = "mkt-ro-aiv-2026q4-pilot-mvr";
const V = "v1.1";
const RELEASE_TAG = "mkt-verification-mkt-ro-aiv-2026q4-pilot-v1.1";
const STATUSES = [
  "ELIGIBLE",
  "OUT OF SCOPE",
  "INELIGIBLE",
  "UNVERIFIED",
  "AMBIGUOUS",
];

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

const sha256 = (p) =>
  crypto.createHash("sha256").update(fs.readFileSync(p)).digest("hex");

// ── verificarea pachetului ──
const sumsFile = `${P}_sha256sums_${V}.txt`;
const sums = Object.fromEntries(
  fs
    .readFileSync(path.join(PKG, sumsFile), "utf8")
    .trim()
    .split("\n")
    .map((l) => l.split(/\s+/))
    .map(([h, n]) => [n, h]),
);
const assets = Object.keys(sums).sort();
for (const name of assets) {
  const got = sha256(path.join(PKG, name));
  if (got !== sums[name])
    throw new Error(
      `SHA-256 nu se potrivește: ${name}\n  ${got}\n  ${sums[name]}`,
    );
}
const read = (kind) =>
  parseCsv(fs.readFileSync(path.join(PKG, `${P}_${kind}_${V}.csv`), "utf8"));

// ── registrul ──
const reg = read("register");
const trace = read("traceability");
if (reg.length !== 260 || trace.length !== 278)
  throw new Error(`registru ${reg.length}, trasabilitate ${trace.length}`);

const short = (id) => id.replace(/^MKT-RO-AIV-2026Q4-PILOT-/, "");
const entities = reg.map((r) => {
  const [http, ...fin] = (r["HTTP / URL final"] || "").split(" ");
  return {
    id: short(r.ID),
    name: r.Nume,
    persons: r["Persoane asociate"],
    site: r.Site,
    status: r["Status Market Eligibility"],
    geo: r["Clasă geografică"],
    providerClass: r["Clasă furnizor"],
    discovery: r["Status Market Discovery"].replace(/^BASE —\s*/, ""),
    evidenceUrl: r["Dovadă eligibilitate (URL)"],
    evidenceLevel: r["Nivel dovadă"],
    rationale: r["Justificare și entity resolution"],
    aliases: r["Aliasuri și rânduri unite"],
    evidenceFile: r["Dovadă salvată (fișier HTML brut)"],
    http,
    finalUrl: fin.join(" "),
    sha256: r["SHA-256"],
    savedUtc: r["Salvată la (UTC)"],
    terms: r["Termeni de serviciu în HTML brut"],
  };
});
for (const e of entities)
  if (!STATUSES.includes(e.status))
    throw new Error(`status ${e.id}: ${e.status}`);
const byId = new Map(entities.map((e) => [e.id, e]));

// Cheia Discovery → intrarea canonică (rândurile unite trimit la canonic).
const unionStatus = {};
const merged = [];
for (const t of trace) {
  const canon = short(t["ID canonic"]);
  const e = byId.get(canon);
  if (!e) throw new Error(`canonic lipsă: ${t["ID canonic"]}`);
  unionStatus[t.entity_key] = { id: canon, status: e.status };
  if (short(t.ID) !== canon)
    merged.push({ id: short(t.ID), name: t.Nume, canonical: canon });
}

const count = (arr, f) =>
  arr.reduce((m, x) => ((m[f(x)] = (m[f(x)] ?? 0) + 1), m), {});
const eligible = entities.filter((e) => e.status === "ELIGIBLE");

const data = {
  registerId: "MKT-RO-AIV-2026Q4-PILOT-MVR",
  version: "1.1",
  candidates: trace.length,
  entities,
  merged,
  totals: {
    entities: entities.length,
    merged: merged.length,
    byStatus: Object.fromEntries(
      STATUSES.map((s) => [s, entities.filter((e) => e.status === s).length]),
    ),
    eligibleByGeo: count(eligible, (e) => e.geo),
    eligibleByClass: count(eligible, (e) => e.providerClass),
    http: count(entities, (e) => e.http),
  },
  verificationDates: ["2026-10-27", "2026-11-08"],
  evidenceSavedOn: "2026-11-08",
  release: {
    tag: RELEASE_TAG,
    url: `https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/${RELEASE_TAG}`,
    assets: assets.map((name) => ({ name, sha256: sums[name] })),
    sha256sumsFile: sumsFile,
    sha256sumsSha256: sha256(path.join(PKG, sumsFile)),
  },
};

fs.mkdirSync(OUT_DIR, { recursive: true });
fs.writeFileSync(
  path.join(OUT_DIR, "2026q4-pilot.json"),
  JSON.stringify(data, null, 1) + "\n",
);
fs.writeFileSync(
  path.join(OUT_DIR, "union-status.json"),
  JSON.stringify(unionStatus) + "\n",
);
console.log(
  `${entities.length} entități, ${merged.length} unite, ${Object.keys(unionStatus).length} chei;`,
  data.totals.byStatus,
);
