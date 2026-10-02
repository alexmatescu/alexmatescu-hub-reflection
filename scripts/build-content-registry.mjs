#!/usr/bin/env node
/**
 * Generator al registrului de conținut — `docs/REGISTRU-CONTINUT.md` + `.json`.
 *
 * Registrul NU se scrie de mână. Se regenerează din sursele de adevăr reale,
 * ca să nu poată devia de la cod:
 *
 *   - blog (arhivă)      src/data/blogger-posts.json      — 131 articole migrate, înghețate
 *   - blog (nou)         src/data/blog-content/*.ts       — prin `posts.ts`
 *   - lab/articole       src/data/lab-content/{n}. *.ts   — prin `labArticleMeta`
 *   - lab/studii-de-caz  src/data/lab-content/*.ts        — prin `labCaseStudyMeta`
 *   - documente AVL      src/data/lab-content/avl-*.ts    — metadata din `<table class="avl-meta-table">`
 *   - data creării       git (primul commit care a adăugat fișierul sursă)
 *   - wiring + sitemap   lab-seo.ts / Lab.tsx / lab.ts / posts.ts / public/sitemap.xml
 *
 * Metadatele `.ts` sunt citite prin bundle esbuild, nu prin regex: toate
 * fișierele din `lab-content`/`blog-content` au exclusiv `import type`, deci
 * se pot bundle-ui fără React și fără efecte secundare.
 *
 * Utilizare:
 *   node scripts/build-content-registry.mjs            regenerează registrul
 *   node scripts/build-content-registry.mjs --strict    exit 1 dacă există anomalii
 *   node scripts/build-content-registry.mjs --check     nu scrie; doar raportează
 */

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { execFileSync } from "node:child_process";
import * as esbuild from "esbuild";

const ROOT = path.resolve(import.meta.dirname, "..");
const OUT_MD = path.join(ROOT, "docs", "REGISTRU-CONTINUT.md");
const OUT_JSON = path.join(ROOT, "docs", "registru-continut.json");
const STRICT = process.argv.includes("--strict");
const CHECK_ONLY = process.argv.includes("--check");
const argVal = (nume) => {
  const i = process.argv.indexOf(nume);
  return i !== -1 ? process.argv[i + 1] : null;
};
/** `--snapshot <cale>`: salvează o copie a stării, pentru comparație ulterioară. */
const SNAPSHOT = argVal("--snapshot");
/** `--diff <cale>`: compară starea curentă cu un snapshot salvat mai devreme. */
const DIFF = argVal("--diff");
const TODAY = new Date().toISOString().slice(0, 10);

/** Taxonomiile controlate, identice cu union types din `src/data/lab-seo.ts`. */
const CATEGORII_LAB = [
  "Search & Retrieval",
  "Technical Visibility",
  "Entities & Citations",
  "AI Ecosystem",
];
const TIPURI_LAB = [
  "Analiză",
  "Analiză de caz",
  "Ghid",
  "Ghid / Analiză metodologică",
];
/** Peste acest prag, un material din Lab intră în lista de reverificare. */
const PRAG_REVERIFICARE_ZILE = 180;

const LUNI_RO = {
  ianuarie: "01", februarie: "02", martie: "03", aprilie: "04",
  mai: "05", iunie: "06", iulie: "07", august: "08",
  septembrie: "09", octombrie: "10", noiembrie: "11", decembrie: "12",
};

// ───────────────────────────── utilitare ─────────────────────────────

const rd = (p) => fs.readFileSync(path.join(ROOT, p), "utf8");
const exists = (p) => fs.existsSync(path.join(ROOT, p));
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

/** „30 septembrie 2026” → „2026-09-30”; „iulie 2026” → „2026-07” (precizie lună). */
function dataRoLaIso(text) {
  if (!text) return null;
  const t = text.trim();
  if (/^\d{4}-\d{2}(-\d{2})?/.test(t)) return t.slice(0, 10);
  let m = t.match(/^(\d{1,2})\s+([a-zăâîșț]+)\s+(\d{4})$/i);
  if (m && LUNI_RO[m[2].toLowerCase()])
    return `${m[3]}-${LUNI_RO[m[2].toLowerCase()]}-${m[1].padStart(2, "0")}`;
  m = t.match(/^([a-zăâîșț]+)\s+(\d{4})$/i);
  if (m && LUNI_RO[m[1].toLowerCase()]) return `${m[2]}-${LUNI_RO[m[1].toLowerCase()]}`;
  return t;
}

/** Doar partea de dată dintr-un timestamp ISO complet. */
const zi = (v) => (v ? String(v).slice(0, 10) : null);

function zileDe(iso) {
  const d = zi(iso);
  if (!d || d.length !== 10) return null;
  const ms = Date.parse(`${d}T00:00:00Z`) ;
  if (Number.isNaN(ms)) return null;
  return Math.round((Date.parse(`${TODAY}T00:00:00Z`) - ms) / 86400000);
}

/** Data primului commit care a adăugat fișierul (urmărind redenumirile). */
function dataCreareGit(...cai) {
  for (const relPath of cai.filter(Boolean)) {
    const d = primulCommit(relPath);
    if (d) return d;
  }
  return null;
}

/** Prima apariție a unui singur fișier în istoricul git. */
function primulCommit(relPath) {
  if (!relPath || !exists(relPath)) return null;
  try {
    const out = execFileSync(
      "git",
      ["log", "--diff-filter=A", "--follow", "--format=%as", "--", relPath],
      { cwd: ROOT, encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] },
    ).trim();
    const linii = out.split("\n").filter(Boolean);
    return linii.length ? linii[linii.length - 1] : null;
  } catch {
    return null;
  }
}

/**
 * Parser de frontmatter suficient pentru cheile scalare de care are nevoie
 * registrul. Acceptă valori pe linia cheii sau continuate pe linii indentate
 * (stilul produs de conversiile din .docx). Listele YAML sunt ignorate.
 */
function frontmatter(absPath) {
  const text = fs.readFileSync(absPath, "utf8");
  if (!text.startsWith("---")) return {};
  const sfarsit = text.indexOf("\n---", 3);
  if (sfarsit === -1) return {};
  const linii = text.slice(4, sfarsit).split("\n");
  const out = {};
  let cheie = null;
  for (const linie of linii) {
    const m = linie.match(/^([A-Za-z_][A-Za-z0-9_]*):\s*(.*)$/);
    if (m) {
      cheie = m[1];
      out[cheie] = m[2];
    } else if (cheie && /^\s+\S/.test(linie) && !/^\s*-\s/.test(linie)) {
      out[cheie] += " " + linie.trim();
    } else if (/^\s*-\s/.test(linie)) {
      cheie = null;
    }
  }
  for (const k of Object.keys(out)) {
    const v = out[k].trim().replace(/^["']|["']$/g, "").trim();
    // `cheie: null` / `cheie: ~` în YAML sunt valoarea nulă, nu textul „null”.
    out[k] = !v || v === "null" || v === "~" ? null : v;
  }
  return out;
}

function walkMd(dir, acc = []) {
  for (const nume of fs.readdirSync(dir)) {
    const p = path.join(dir, nume);
    const st = fs.statSync(p);
    if (st.isDirectory()) walkMd(p, acc);
    else if (nume.endsWith(".md")) acc.push(p);
  }
  return acc;
}

// ───────────────── încărcarea metadatelor .ts prin esbuild ─────────────────

async function incarcaModule() {
  const labDir = path.join(ROOT, "src/data/lab-content");
  const blogDir = path.join(ROOT, "src/data/blog-content");
  const labFisiere = fs.readdirSync(labDir).filter((f) => f.endsWith(".ts"));
  const blogFisiere = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir).filter((f) => f.endsWith(".ts"))
    : [];

  const linii = [];
  labFisiere.forEach((f, i) =>
    linii.push(`import * as lab${i} from ${JSON.stringify("./src/data/lab-content/" + f)};`),
  );
  blogFisiere.forEach((f, i) =>
    linii.push(`import * as blog${i} from ${JSON.stringify("./src/data/blog-content/" + f)};`),
  );
  linii.push(`import bloggerData from "./src/data/blogger-posts.json";`);
  linii.push(
    `export const lab = {${labFisiere.map((f, i) => `${JSON.stringify(f)}: lab${i}`).join(",")}};`,
    `export const blog = {${blogFisiere.map((f, i) => `${JSON.stringify(f)}: blog${i}`).join(",")}};`,
    `export const blogger = bloggerData;`,
  );

  const tmp = path.join(
    fs.mkdtempSync(path.join(os.tmpdir(), "registru-")),
    "bundle.mjs",
  );
  await esbuild.build({
    stdin: { contents: linii.join("\n"), resolveDir: ROOT, loader: "ts" },
    bundle: true,
    format: "esm",
    platform: "node",
    outfile: tmp,
    alias: { "@": path.join(ROOT, "src") },
    logLevel: "silent",
  });
  const mod = await import(`file://${tmp}`);
  fs.rmSync(path.dirname(tmp), { recursive: true, force: true });
  return mod;
}

// ───────────────── index: fișiere .md sursă, după canonical ─────────────────

/**
 * Directoare din src/content care țin documentație internă de tooling, nu
 * conținut al site-ului — nu intră în corpus (ex. auditul agentului
 * evidence-release din `arhitectura/`).
 */
const EXCLUSE_DIN_CORPUS = ["src/content/arhitectura/"];

function indexeazaSurseMd() {
  const dir = path.join(ROOT, "src/content");
  const dupaCanonical = new Map();
  const dupaSlug = new Map();
  const toate = [];
  for (const abs of walkMd(dir)) {
    if (EXCLUSE_DIN_CORPUS.some((p) => rel(abs).startsWith(p))) continue;
    const fm = frontmatter(abs);
    const canonical = (fm.canonical || "").replace(/^<|>$/g, "");
    const numeFisier = path.basename(abs, ".md");
    const slugFisier = numeFisier.replace(/^\d+[.\s]*/, "");
    const inregistrare = { abs, rel: rel(abs), fm, canonical, slugFisier, numeFisier };
    toate.push(inregistrare);
    if (canonical) dupaCanonical.set(canonical.replace(/\/$/, ""), inregistrare);
    if (!dupaSlug.has(slugFisier)) dupaSlug.set(slugFisier, inregistrare);
  }
  return { dupaCanonical, dupaSlug, toate };
}

// ───────────────── wiring: verificări pe textul fișierelor ─────────────────

const SRC = {
  labSeo: rd("src/data/lab-seo.ts"),
  labTsx: rd("src/pages/Lab.tsx"),
  labNav: rd("src/data/lab.ts"),
  posts: rd("src/data/posts.ts"),
  sitemap: rd("public/sitemap.xml"),
};

/** route → numele exportului de HTML, citit din `labPageContent` (Lab.tsx). */
function hartaLabPageContent() {
  const start = SRC.labTsx.indexOf("const labPageContent");
  const bloc = SRC.labTsx.slice(start, SRC.labTsx.indexOf("\n};", start));
  const harta = new Map();
  for (const m of bloc.matchAll(/"(\/[^"]+)":\s*([A-Za-z0-9_]+)/g))
    harta.set(m[1], m[2]);
  return harta;
}

/** numele exportului de HTML → fișierul din lab-content care îl declară. */
function hartaExportFisier() {
  const dir = path.join(ROOT, "src/data/lab-content");
  const harta = new Map();
  for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".ts"))) {
    const txt = fs.readFileSync(path.join(dir, f), "utf8");
    for (const m of txt.matchAll(/^export const ([A-Za-z0-9_]+)/gm))
      harta.set(m[1], `src/data/lab-content/${f}`);
  }
  return harta;
}

function sitemapLastmod(url) {
  const re = new RegExp(
    `<loc>${url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}</loc>\\s*<lastmod>([^<]+)</lastmod>`,
  );
  const m = SRC.sitemap.match(re);
  return m ? m[1].trim() : null;
}

// ─────────────────────────── construirea intrărilor ───────────────────────────

const intrari = [];
const mod = await incarcaModule();
const surseMd = indexeazaSurseMd();
const pageContent = hartaLabPageContent();
const exportFisier = hartaExportFisier();
const mdFolosite = new Set();

/** Găsește fișierul .md sursă: mai întâi după canonical, apoi după slug. */
function gasesteMd(canonical, slug) {
  const cheie = (canonical || "").replace(/\/$/, "");
  let hit = surseMd.dupaCanonical.get(cheie) || null;
  if (!hit && slug) hit = surseMd.dupaSlug.get(slug) || null;
  if (hit) mdFolosite.add(hit.abs);
  return hit;
}

/**
 * Sursa `.md` a unui document AVL. Documentele astea nu respecta convenția
 * `{slug}.md` a articolelor — sunt numite după `document_id` și versiune, iar
 * Nivelul B e un corpus unic ce acoperă un interval (`AVL-101-105`). Când
 * există mai multe versiuni ale aceluiași document, câștigă cea mai mare.
 */
function gasesteMdAvl(docId) {
  const n = Number(docId.replace(/^AVL-/, ""));
  const candidati = surseMd.toate.filter((x) => {
    if (x.fm.document_id === docId) return true;
    if (x.numeFisier.includes(docId)) return true;
    const interval = x.numeFisier.match(/AVL-(\d+)-(\d+)/);
    return interval && n >= Number(interval[1]) && n <= Number(interval[2]);
  });
  if (!candidati.length) return null;
  const versiune = (x) =>
    (x.numeFisier.match(/v(\d+)\.(\d+)\.(\d+)/) || [0, 0, 0, 0])
      .slice(1)
      .map(Number)
      .reduce((a, v) => a * 1000 + v, 0);
  return candidati.sort((a, b) => versiune(b) - versiune(a))[0];
}

// ---- 1+2. Articole de blog (arhivă migrată + articole noi) ----
{
  const legacy = mod.blogger.posts || [];
  const slugLegacy = new Set(legacy.map((p) => p.slug));
  const noi = Object.values(mod.blog).flatMap((m) =>
    Object.values(m).filter((v) => v && typeof v === "object" && v.slug),
  );
  const fisierBlog = new Map();
  const blogDir = path.join(ROOT, "src/data/blog-content");
  if (fs.existsSync(blogDir))
    for (const f of fs.readdirSync(blogDir).filter((x) => x.endsWith(".ts"))) {
      const txt = fs.readFileSync(path.join(blogDir, f), "utf8");
      const m = txt.match(/slug:\s*"([^"]+)"/);
      if (m) fisierBlog.set(m[1], `src/data/blog-content/${f}`);
    }

  for (const p of [...noi, ...legacy]) {
    const eNou = !slugLegacy.has(p.slug);
    const url = `https://delamatescu.ro/blog/${p.slug}`;
    const fisierTs = eNou ? fisierBlog.get(p.slug) || null : null;
    const md = eNou ? gasesteMd(url, p.slug) : null;
    intrari.push({
      id: p.slug,
      titlu: p.title,
      suprafata: eNou ? "blog" : "blog (arhivă)",
      ruta: `/blog/${p.slug}`,
      slug: p.slug,
      categorie: p.category || null,
      tip: p.articleType || null,
      status: "publicat",
      statusNormativ: null,
      versiune: null,
      dataCreare: eNou ? dataCreareGit(md?.rel, fisierTs) : null,
      dataPublicare: p.date || null,
      dataModificare: p.dateModified || null,
      ultimaVerificare: p.lastReviewed || null,
      fisierMd: md?.rel || (eNou ? null : "src/data/blogger-posts.json"),
      fisierTs,
      wiring: {
        registru: eNou
          ? SRC.posts.includes(fisierBlog.get(p.slug)?.split("/").pop()?.replace(/\.ts$/, "") || "\u0000")
          : true,
        pagina: true,
        nav: null,
        sitemap: SRC.sitemap.includes(`<loc>${url}</loc>`),
      },
      sitemapLastmod: sitemapLastmod(url),
      imagine: p.heroImage?.src || null,
      md: md || null,
    });
  }
}

// ---- 3+4. Articole Lab și studii de caz ----
{
  const numarFisier = new Map(); // export name -> prefix numeric din numele fișierului
  for (const [exp, fisier] of exportFisier) {
    const m = path.basename(fisier).match(/^(\d+)\./);
    if (m) numarFisier.set(exp, m[1]);
  }
  let indiceCaz = 0;
  for (const [numeFisier, m] of Object.entries(mod.lab)) {
    for (const [numeExport, val] of Object.entries(m)) {
      if (!numeExport.endsWith("Meta") || !val?.canonical) continue;
      const ruta = new URL(val.canonical).pathname;
      const slug = ruta.split("/").pop();
      const eStudiu = ruta.startsWith("/lab/studii-de-caz/");
      const nr = numeFisier.match(/^(\d+)\./)?.[1];
      const md = gasesteMd(val.canonical, slug);
      if (eStudiu) indiceCaz += 1;
      intrari.push({
        id: eStudiu
          ? `CS-${String(indiceCaz).padStart(3, "0")}`
          : nr
            ? `LAB-${String(nr).padStart(2, "0")}`
            : slug,
        titlu: val.title,
        suprafata: eStudiu ? "lab/studii-de-caz" : "lab/articole",
        ruta,
        slug,
        categorie: val.category || null,
        tip: val.articleType || null,
        status: "publicat",
        statusNormativ: null,
        versiune: null,
        dataCreare: dataCreareGit(md?.rel, `src/data/lab-content/${numeFisier}`),
        dataPublicare: val.datePublished || null,
        dataModificare: val.dateModified || null,
        ultimaVerificare: val.lastReviewed || null,
        fisierMd: md?.rel || null,
        fisierTs: `src/data/lab-content/${numeFisier}`,
        wiring: {
          registru: eStudiu
            ? SRC.labSeo.includes(numeExport)
            : SRC.labSeo.includes(numeExport),
          pagina: pageContent.has(ruta),
          nav: SRC.labNav.includes(`"${ruta}"`),
          sitemap: SRC.sitemap.includes(`<loc>https://delamatescu.ro${ruta}</loc>`),
        },
        sitemapLastmod: sitemapLastmod(`https://delamatescu.ro${ruta}`),
        imagine: val.image?.url || null,
        jsonLd: val.lastReviewed ? "@graph" : "legacy",
        nrCitari: val.citations?.length ?? 0,
        md: md || null,
      });
    }
  }
}

// ---- 5+6+7. Documente AVL (Nivel A–F) ----
{
  const NIVEL_SUPRAFATA = {
    A: "lab/foundation",
    B: "lab/cercetare",
    C: "lab/metodologie",
  };
  for (const [numeFisier, m] of Object.entries(mod.lab)) {
    if (!/^avl-/.test(numeFisier)) continue;
    for (const [numeExport, html] of Object.entries(m)) {
      if (typeof html !== "string") continue;
      const meta = {};
      for (const t of html.matchAll(
        /<tr><th scope="row">([^<]*)<\/th><td>([\s\S]*?)<\/td><\/tr>/g,
      ))
        meta[t[1].trim()] = t[2].replace(/<[^>]*>/g, "").trim() || null;
      const docId = meta["Document ID"];
      if (!docId) continue;
      const titlu =
        html.match(/avl-doc-title">([^<]*)/)?.[1]?.trim() || docId;
      const ruta = [...pageContent].find(([, exp]) => exp === numeExport)?.[0] || null;
      const nivel = (meta["Nivel"] || "").trim();
      const litera = nivel.charAt(0);
      const canonicalMeta = meta["URL canonic"] || meta["URL canonic propus"] || null;
      const canonical = ruta ? `https://delamatescu.ro${ruta}` : canonicalMeta;
      const md = gasesteMd(canonicalMeta, null) || gasesteMdAvl(docId);
      if (md) mdFolosite.add(md.abs);
      const statut = meta["Statut"] || meta["Status"] || null;
      intrari.push({
        id: docId,
        titlu,
        suprafata: NIVEL_SUPRAFATA[litera] || "lab/secțiuni",
        nivel: nivel || null,
        ruta,
        slug: ruta ? ruta.split("/").pop() : null,
        categorie: nivel || null,
        tip: "Document normativ",
        // `Statut` din tabelul AVL descrie maturitatea normativă a documentului
        // („Activ”, „În derulare”, „În pregătire”), NU dacă pagina e publicată.
        // Starea de publicare se citește din wiring-ul real.
        status: ruta && SRC.labNav.includes(`"${ruta}"`) ? "publicat" : "nepublicat",
        statusNormativ: statut,
        versiune: meta["Versiune"] || null,
        dataCreare: dataCreareGit(md?.rel, `src/data/lab-content/${numeFisier}`),
        dataPublicare: dataRoLaIso(meta["Data publicării"]),
        dataModificare: dataRoLaIso(meta["Ultima actualizare"]),
        ultimaVerificare: dataRoLaIso(meta["Ultima verificare"]),
        fisierMd: md?.rel || null,
        fisierTs: `src/data/lab-content/${numeFisier}`,
        wiring: {
          registru: null,
          pagina: Boolean(ruta),
          nav: ruta ? SRC.labNav.includes(`"${ruta}"`) : false,
          sitemap: canonical
            ? SRC.sitemap.includes(`<loc>${canonical}</loc>`)
            : false,
        },
        sitemapLastmod: canonical ? sitemapLastmod(canonical) : null,
        imagine: null,
        md: md || null,
      });
    }
  }
}

// ---- 8. Drafturi: fișiere .md sursă fără nicio intrare publicată ----
const idInregistrate = new Set(intrari.map((e) => e.id));
for (const s of surseMd.toate) {
  if (mdFolosite.has(s.abs)) continue;
  // Un `.md` nefolosit din `/AVL/` e fie o variantă de versiune a unui document
  // deja înregistrat (se ignoră), fie un document NOU, încă nepublicat, care
  // trebuie să apară în registru ca draft.
  if (s.rel.includes("/AVL/")) {
    const idFm = s.fm.document_id;
    const idNume = s.numeFisier.match(/AVL-(?:[A-Z]+-)?\d+/)?.[0];
    const id = idFm || idNume;
    if (!id || idInregistrate.has(id)) continue;
    idInregistrate.add(id);
    intrari.push({
      id,
      titlu: s.fm.title || s.numeFisier,
      suprafata: "lab/metodologie",
      nivel: s.fm.level || s.fm.document_level || null,
      ruta: null,
      slug: null,
      categorie: s.fm.level || s.fm.document_level || null,
      tip: "Document normativ",
      status: "nepublicat",
      statusNormativ: s.fm.status || null,
      versiune: s.fm.version || null,
      dataCreare: s.fm.date_created || dataCreareGit(s.rel),
      dataPublicare: s.fm.date_published || null,
      dataModificare: s.fm.date_modified || null,
      ultimaVerificare: s.fm.last_reviewed || null,
      fisierMd: s.rel,
      fisierTs: null,
      wiring: { registru: null, pagina: false, nav: false, sitemap: false },
      sitemapLastmod: null,
      imagine: null,
      md: s,
    });
    continue;
  }
  const canonical = s.canonical || null;
  const ruta = canonical ? new URL(canonical).pathname : null;
  const statusFm = (s.fm.status || "").toLowerCase();
  intrari.push({
    id: s.slugFisier,
    titlu: s.fm.title || s.numeFisier,
    suprafata: ruta?.startsWith("/lab/articole")
      ? "lab/articole"
      : ruta?.startsWith("/lab/studii-de-caz")
        ? "lab/studii-de-caz"
        : ruta?.startsWith("/blog")
          ? "blog"
          : "nealocat",
    ruta,
    slug: ruta ? ruta.split("/").pop() : s.slugFisier,
    categorie: s.fm.category || null,
    tip: s.fm.article_type || null,
    status: statusFm === "draft" ? "draft" : "nepublicat",
    statusNormativ: null,
    versiune: s.fm.version || null,
    dataCreare: s.fm.date_created || dataCreareGit(s.rel),
    dataPublicare: s.fm.date_published && !/^TO_BE/.test(s.fm.date_published)
      ? s.fm.date_published
      : null,
    dataModificare: s.fm.date_modified || null,
    ultimaVerificare: s.fm.last_reviewed || null,
    fisierMd: s.rel,
    fisierTs: null,
    wiring: { registru: false, pagina: false, nav: false, sitemap: false },
    sitemapLastmod: null,
    imagine: s.fm.image || null,
    md: s,
  });
}

// ─────────────────────────────── anomalii ───────────────────────────────

for (const e of intrari) {
  const a = [];
  const fm = e.md?.fm || {};

  // Date placeholder / lipsă
  if (/TO_BE|TBD|XXXX/i.test(String(fm.date_published || "")))
    a.push("`date_published` placeholder nerezolvat în `.md`");
  if (e.status === "publicat" && !e.dataPublicare && e.suprafata !== "lab/secțiuni")
    a.push("publicat fără dată de publicare");

  // Canonical
  if (e.md && /^</.test(String(fm.canonical || "")))
    a.push("`canonical` cu paranteze unghiulare în `.md`");
  if (e.md && e.ruta && e.md.canonical && new URL(e.md.canonical).pathname !== e.ruta)
    a.push(`canonical din \`.md\` (${new URL(e.md.canonical).pathname}) ≠ ruta reală`);

  // Divergență .md ↔ .ts
  if (e.md && e.fisierTs) {
    if (fm.category && e.categorie && fm.category !== e.categorie)
      a.push(`\`category\` diferă: .md «${fm.category}» ≠ .ts «${e.categorie}»`);
    // Excepție deliberată, documentată în `publica-studiu-de-caz` §7.1: un studiu
    // de caz păstrează `"Studiu de caz"` în `.md` (corect editorial) și
    // `"Analiză de caz"` în `.ts`, pentru că `LabArticleType` nu conține prima
    // valoare. Divergența e intenționată acolo — nu e o anomalie de reparat.
    const divergentaIntentionata =
      e.suprafata === "lab/studii-de-caz" &&
      fm.article_type === "Studiu de caz" &&
      e.tip === "Analiză de caz";
    if (
      fm.article_type &&
      e.tip &&
      fm.article_type !== e.tip &&
      !divergentaIntentionata
    )
      a.push(`\`article_type\` diferă: .md «${fm.article_type}» ≠ .ts «${e.tip}»`);
    if (fm.date_published && e.dataPublicare && zi(fm.date_published) !== zi(e.dataPublicare))
      a.push("`date_published` diferă între `.md` și `.ts`");
    if (fm.date_modified && e.dataModificare && zi(fm.date_modified) !== zi(e.dataModificare))
      a.push("`date_modified` diferă între `.md` și `.ts`");
    if (fm.last_reviewed && e.ultimaVerificare && zi(fm.last_reviewed) !== zi(e.ultimaVerificare))
      a.push("`last_reviewed` diferă între `.md` și `.ts`");
  }

  // Sursa .md: prezență, folder, nume
  if (!e.md && e.suprafata.startsWith("lab/") && e.suprafata !== "lab/secțiuni")
    a.push("fără fișier `.md` sursă identificabil");
  if (e.md && e.md.rel.includes("/AVL/") && !e.md.rel.includes(e.id))
    e.notaSursa = "corpus comun (mai multe documente în același fișier)";
  if (e.md && e.suprafata === "lab/articole" && !e.md.rel.startsWith("src/content/lab/articles/"))
    a.push(`\`.md\` în folderul greșit: \`${e.md.rel}\``);
  if (e.md && e.suprafata === "blog" && !e.md.rel.startsWith("src/content/blog/"))
    a.push(`\`.md\` în folderul greșit: \`${e.md.rel}\``);
  const eAvlDoc = /^AVL-(?:[A-Z]+-)?\d+$/.test(e.id);
  if (eAvlDoc) {
    // Nivelul B e un corpus unic (`AVL-101-105`): un interval din nume acoperă
    // legitim toate documentele din el, nu doar pe cel al cărui id apare literal.
    const n = Number(e.id.replace(/^AVL-/, ""));
    const interval = e.md?.numeFisier.match(/AVL-(\d+)-(\d+)/);
    const acoperitDeInterval =
      interval && n >= Number(interval[1]) && n <= Number(interval[2]);
    if (
      e.md &&
      !e.md.numeFisier.includes(e.id) &&
      e.md.fm.document_id !== e.id &&
      !acoperitDeInterval
    )
      a.push(`fișierul \`.md\` nu conține \`${e.id}\` în nume: \`${e.md.rel}\``);
  } else if (e.md && e.slug && e.md.slugFisier !== e.slug) {
    a.push(`numele fișierului \`.md\` (${e.md.slugFisier}) ≠ slug (${e.slug})`);
  }

  // Taxonomie controlată
  if (e.suprafata === "lab/articole" && e.categorie && !CATEGORII_LAB.includes(e.categorie))
    a.push(`\`category\` în afara taxonomiei: «${e.categorie}»`);
  if (e.suprafata === "lab/articole" && e.tip && !TIPURI_LAB.includes(e.tip))
    a.push(`\`articleType\` în afara taxonomiei: «${e.tip}»`);

  // Wiring
  if (e.status === "publicat") {
    const lipsa = Object.entries(e.wiring)
      .filter(([, v]) => v === false)
      .map(([k]) => k);
    if (lipsa.length) a.push(`wiring incomplet: ${lipsa.join(", ")}`);
  }

  // Sitemap
  if (e.wiring.sitemap && e.sitemapLastmod) {
    const asteptat = zi(e.dataModificare || e.dataPublicare);
    if (asteptat && asteptat.length === 10 && e.sitemapLastmod !== asteptat)
      a.push(`\`lastmod\` din sitemap (${e.sitemapLastmod}) ≠ ultima modificare (${asteptat})`);
  }

  // Imagine
  if (e.imagine) {
    const relImg = e.imagine.replace(/^https?:\/\/delamatescu\.ro/, "");
    if (relImg.startsWith("/") && !exists(path.join("public", relImg)))
      a.push(`imaginea nu există pe disc: \`${relImg}\``);
    else if (e.suprafata === "lab/articole" && !relImg.startsWith("/images/lab/"))
      a.push(`imagine în afara \`/images/lab/\`: \`${relImg}\``);
  }

  // Reverificare
  e.zileDeLaVerificare = zileDe(e.ultimaVerificare);
  if (
    e.suprafata.startsWith("lab/") &&
    e.status === "publicat" &&
    e.zileDeLaVerificare !== null &&
    e.zileDeLaVerificare > PRAG_REVERIFICARE_ZILE
  )
    a.push(`neverificat de ${e.zileDeLaVerificare} zile (prag ${PRAG_REVERIFICARE_ZILE})`);

  e.anomalii = a;
}

// Prefixe numerice duplicate între fișierele .md (coliziune de numerotare)
{
  const prefixe = new Map();
  for (const s of surseMd.toate) {
    const m = s.numeFisier.match(/^(\d+)[.\s]/);
    if (!m) continue;
    const dir = path.dirname(s.rel);
    const cheie = `${dir}#${m[1]}`;
    if (!prefixe.has(cheie)) prefixe.set(cheie, []);
    prefixe.get(cheie).push(s.rel);
  }
  for (const [cheie, fisiere] of prefixe) {
    if (fisiere.length < 2) continue;
    for (const f of fisiere) {
      const e = intrari.find((x) => x.fisierMd === f);
      if (e)
        e.anomalii.push(
          `prefix numeric duplicat (${cheie.split("#")[1]}) cu: ${fisiere.filter((x) => x !== f).join(", ")}`,
        );
    }
  }
}

// URL-uri din sitemap fără sursă: nici intrare în registru, nici rută statică,
// nici proiect. Un astfel de URL e servit ca 404 (sau, înainte de loader-ele
// notFound, ca pagină goală cu 200) — precedent: articolul de blog șters
// accidental pe 2026-08-27, rămas în sitemap.
const anomaliiGlobale = [];
{
  const BASE_URL = "https://delamatescu.ro";
  const cunoscute = new Set(intrari.map((e) => e.ruta).filter(Boolean));
  // Rute statice: fișierele din src/routes/_site fără segmente dinamice ($).
  const radacinaRute = path.join(ROOT, "src/routes/_site");
  const parcurge = (dir) =>
    fs
      .readdirSync(dir, { withFileTypes: true })
      .flatMap((d) =>
        d.isDirectory()
          ? parcurge(path.join(dir, d.name))
          : [path.join(dir, d.name)],
      );
  for (const f of parcurge(radacinaRute)) {
    if (!f.endsWith(".tsx") || f.includes("$")) continue;
    const r = path
      .relative(radacinaRute, f)
      .replace(/\.tsx$/, "")
      .split(path.sep)
      .flatMap((seg) => seg.split("."))
      .filter((seg) => seg !== "index")
      .join("/");
    cunoscute.add("/" + r);
  }
  // Pagini Lab din navigare (labNav), inclusiv secțiunile fără document AVL propriu.
  for (const m of SRC.labNav.matchAll(/\bto: "(\/lab[^"]*)"/g))
    cunoscute.add(m[1]);
  // Proiecte: /proiecte/$slug se rezolvă din src/data/projects.ts.
  for (const m of rd("src/data/projects.ts").matchAll(
    /^\s{4}slug: "([^"]+)"/gm,
  ))
    cunoscute.add(`/proiecte/${m[1]}`);
  for (const m of SRC.sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const ruta = m[1].replace(BASE_URL, "").replace(/\/$/, "") || "/";
    if (!cunoscute.has(ruta))
      anomaliiGlobale.push(
        `URL în sitemap fără sursă (va răspunde 404): ${ruta}`,
      );
  }
}

// ─────────────────────────────── randare ───────────────────────────────

const ORDINE_SUPRAFETE = [
  "lab/articole",
  "lab/studii-de-caz",
  "lab/metodologie",
  "lab/foundation",
  "lab/cercetare",
  "lab/secțiuni",
  "blog",
  "blog (arhivă)",
  "nealocat",
];

const cheieData = (e) => zi(e.dataPublicare) || zi(e.dataCreare) || "0000-00-00";
intrari.sort((a, b) => {
  const da = ORDINE_SUPRAFETE.indexOf(a.suprafata);
  const db = ORDINE_SUPRAFETE.indexOf(b.suprafata);
  if (da !== db) return da - db;
  return cheieData(b).localeCompare(cheieData(a));
});

const esc = (v) =>
  v === null || v === undefined || v === "" ? "—" : String(v).replace(/\|/g, "\\|");
const bif = (v) => (v === null ? "·" : v ? "✓" : "✗");
const wiringText = (w) =>
  `${bif(w.registru)}${bif(w.pagina)}${bif(w.nav)}${bif(w.sitemap)}`;

const totalAnomalii =
  intrari.reduce((n, e) => n + e.anomalii.length, 0) + anomaliiGlobale.length;
const cuAnomalii = intrari.filter((e) => e.anomalii.length);

const L = [];
L.push("# Registru de conținut — delamatescu.ro");
L.push("");
L.push(
  "> **Fișier generat. Nu-l edita de mână.** Se regenerează cu",
  "> `node scripts/build-content-registry.mjs`, din sursele de adevăr reale",
  "> (`blogger-posts.json`, `posts.ts`, `labArticleMeta`, `labCaseStudyMeta`,",
  "> tabelele `avl-meta-table` din `avl-*.ts`) plus istoricul git și",
  "> `public/sitemap.xml`. O modificare făcută aici se pierde la următoarea rulare;",
  "> corectează sursa, nu registrul.",
);
L.push("");
L.push(`Generat: ${TODAY} · ${intrari.length} intrări · **${totalAnomalii} anomalii** în ${cuAnomalii.length} intrări`);
L.push("");

L.push("## Sinteză");
L.push("");
L.push("| Suprafață | Publicat | Draft / nepublicat | Total | Anomalii |");
L.push("|---|--:|--:|--:|--:|");
for (const s of ORDINE_SUPRAFETE) {
  const g = intrari.filter((e) => e.suprafata === s);
  if (!g.length) continue;
  L.push(
    `| \`${s}\` | ${g.filter((e) => e.status === "publicat").length} | ${
      g.filter((e) => e.status !== "publicat").length
    } | ${g.length} | ${g.reduce((n, e) => n + e.anomalii.length, 0)} |`,
  );
}
L.push(`| **Total** | **${intrari.filter((e) => e.status === "publicat").length}** | **${intrari.filter((e) => e.status !== "publicat").length}** | **${intrari.length}** | **${totalAnomalii}** |`);
L.push("");

L.push("## Legendă");
L.push("");
L.push("- **Wiring** — patru poziții, în ordine: `registru` · `pagină` · `navigație` · `sitemap`.");
L.push("  `✓` prezent, `✗` lipsă, `·` neaplicabil pentru suprafața respectivă.");
L.push("  Registru = array-ul sursă (`labArticleMeta`, `labCaseStudyMeta`, `posts.ts`);");
L.push("  pagină = `labPageContent` din `Lab.tsx`; navigație = `labNav` din `lab.ts`.");
L.push("- **Creat** — primul commit care a adăugat fișierul sursă (git). `—` pentru articolele");
L.push("  migrate din Blogger, care nu au fișier sursă propriu și a căror dată de creare nu e recuperabilă.");
L.push("- **Verificat** — `last_reviewed`, cu numărul de zile scurse. Peste");
L.push(`  ${PRAG_REVERIFICARE_ZILE} de zile, materialele din Lab intră în lista de reverificare.`);
L.push("");

for (const s of ORDINE_SUPRAFETE) {
  const grup = intrari.filter((e) => e.suprafata === s);
  if (!grup.length) continue;
  const eAvl = ["lab/metodologie", "lab/foundation", "lab/cercetare", "lab/secțiuni"].includes(s);
  const eArhiva = s === "blog (arhivă)";

  L.push(`## \`${s}\` — ${grup.length} ${grup.length === 1 ? "intrare" : "intrări"}`);
  L.push("");
  if (eAvl) {
    L.push("| ID | Titlu | Nivel | Ver. | Statut | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |");
    L.push("|---|---|---|---|---|---|---|---|---|---|---|---|");
    for (const e of grup)
      L.push(
        `| \`${e.id}\` | ${esc(e.titlu)} | ${esc(e.nivel)} | ${esc(e.versiune)} | ${esc(e.statusNormativ)} | ${esc(e.dataCreare)} | ${esc(zi(e.dataPublicare))} | ${esc(zi(e.dataModificare))} | ${esc(zi(e.ultimaVerificare))} | \`${wiringText(e.wiring)}\` | ${e.fisierMd ? `\`${e.fisierMd}\`` : "—"} | \`${esc(e.fisierTs)}\` |`,
      );
  } else if (eArhiva) {
    L.push("| Slug | Titlu | Categorie | Status | Publicat | Modificat | Wiring | Anomalii |");
    L.push("|---|---|---|---|---|---|---|--:|");
    for (const e of grup)
      L.push(
        `| \`${e.slug}\` | ${esc(e.titlu)} | ${esc(e.categorie)} | ${e.status} | ${esc(zi(e.dataPublicare))} | ${esc(zi(e.dataModificare))} | \`${wiringText(e.wiring)}\` | ${e.anomalii.length || "—"} |`,
      );
  } else {
    L.push("| ID | Titlu | Categorie | Tip | Status | Creat | Publicat | Modificat | Verificat | Wiring | Sursă `.md` | Wiring `.ts` |");
    L.push("|---|---|---|---|---|---|---|---|---|---|---|---|");
    for (const e of grup) {
      const ver =
        e.ultimaVerificare
          ? `${zi(e.ultimaVerificare)}${e.zileDeLaVerificare !== null ? ` (${e.zileDeLaVerificare}z)` : ""}`
          : "—";
      L.push(
        `| \`${e.id}\` | [${esc(e.titlu)}](${e.ruta || "#"}) | ${esc(e.categorie)} | ${esc(e.tip)} | ${e.status} | ${esc(e.dataCreare)} | ${esc(zi(e.dataPublicare))} | ${esc(zi(e.dataModificare))} | ${ver} | \`${wiringText(e.wiring)}\` | ${e.fisierMd ? `\`${e.fisierMd}\`` : "—"} | ${e.fisierTs ? `\`${e.fisierTs}\`` : "—"} |`,
      );
    }
  }
  L.push("");
}

L.push("## Anomalii");
L.push("");
if (!cuAnomalii.length && !anomaliiGlobale.length) {
  L.push("Niciuna.");
} else {
  if (anomaliiGlobale.length) {
    L.push("### Sitemap și rute");
    L.push("");
    for (const a of anomaliiGlobale) L.push(`- ${a}`);
    L.push("");
  }
  for (const e of cuAnomalii) {
    L.push(`### \`${e.id}\` — ${e.titlu}`);
    L.push("");
    L.push(`\`${e.suprafata}\` · ${e.ruta || "fără rută"}`);
    L.push("");
    for (const a of e.anomalii) L.push(`- ${a}`);
    L.push("");
  }
}

const md = L.join("\n") + "\n";
const json = JSON.stringify(
  {
    generat: TODAY,
    pragReverificareZile: PRAG_REVERIFICARE_ZILE,
    totalIntrari: intrari.length,
    totalAnomalii,
    anomaliiGlobale,
    intrari: intrari.map(({ md: _md, ...rest }) => rest),
  },
  null,
  2,
) + "\n";

if (!CHECK_ONLY) {
  fs.writeFileSync(OUT_MD, md);
  fs.writeFileSync(OUT_JSON, json);
}
if (SNAPSHOT) {
  fs.mkdirSync(path.dirname(path.resolve(ROOT, SNAPSHOT)), { recursive: true });
  fs.writeFileSync(path.resolve(ROOT, SNAPSHOT), json);
  console.log(`snapshot: ${SNAPSHOT}`);
}

if (DIFF) {
  const caleSnap = path.resolve(ROOT, DIFF);
  if (!fs.existsSync(caleSnap)) {
    console.log(`\n--diff: snapshot inexistent (${DIFF}) — nimic de comparat.`);
  } else {
    const inainte = JSON.parse(fs.readFileSync(caleSnap, "utf8"));
    const cheie = (e) => `${e.suprafata}|${e.id}`;
    const hartaI = new Map(inainte.intrari.map((e) => [cheie(e), e]));
    const hartaA = new Map(intrari.map((e) => [cheie(e), e]));
    const CAMPURI = [
      "titlu", "categorie", "tip", "status", "statusNormativ", "versiune",
      "ruta", "dataPublicare", "dataModificare", "ultimaVerificare",
      "fisierMd", "fisierTs", "sitemapLastmod",
    ];
    const noi = [...hartaA.keys()].filter((k) => !hartaI.has(k));
    const dispărute = [...hartaI.keys()].filter((k) => !hartaA.has(k));
    const schimbate = [];
    for (const [k, a] of hartaA) {
      const i = hartaI.get(k);
      if (!i) continue;
      const dif = CAMPURI.filter((c) => JSON.stringify(i[c]) !== JSON.stringify(a[c]))
        .map((c) => `${c}: ${JSON.stringify(i[c])} → ${JSON.stringify(a[c])}`);
      const wi = JSON.stringify(i.wiring), wa = JSON.stringify(a.wiring);
      if (wi !== wa) dif.push(`wiring: ${wi} → ${wa}`);
      const ai = (i.anomalii || []).join("¦"), aa = (a.anomalii || []).join("¦");
      if (ai !== aa)
        dif.push(`anomalii: ${(i.anomalii || []).length} → ${(a.anomalii || []).length}`);
      if (dif.length) schimbate.push([k, dif]);
    }
    console.log(`\n=== diff față de ${DIFF} (${inainte.generat}) ===`);
    if (!noi.length && !dispărute.length && !schimbate.length)
      console.log("  REGISTRUL NU S-A SCHIMBAT — nicio intrare adăugată, eliminată sau modificată.");
    for (const k of noi) console.log(`  + INTRARE NOUĂ   ${k}`);
    for (const k of dispărute) console.log(`  - INTRARE DISPĂRUTĂ ${k}`);
    for (const [k, dif] of schimbate) {
      console.log(`  ~ MODIFICAT      ${k}`);
      for (const d of dif) console.log(`      ${d}`);
    }
    const deltaAnomalii = totalAnomalii - inainte.totalAnomalii;
    console.log(
      `\n  anomalii: ${inainte.totalAnomalii} → ${totalAnomalii}` +
        (deltaAnomalii > 0
          ? `  ⚠ ${deltaAnomalii} ANOMALII NOI`
          : deltaAnomalii < 0
            ? `  ✓ ${-deltaAnomalii} rezolvate`
            : "  (neschimbat)"),
    );
  }
}

console.log(
  `${CHECK_ONLY ? "verificat" : "scris"}: ${rel(OUT_MD)} + ${rel(OUT_JSON)}\n` +
    `${intrari.length} intrări · ${intrari.filter((e) => e.status === "publicat").length} publicate · ` +
    `${intrari.filter((e) => e.status !== "publicat").length} draft/nepublicate · ${totalAnomalii} anomalii`,
);
if (totalAnomalii) {
  console.log("\nanomalii:");
  for (const a of anomaliiGlobale)
    console.log(`  ${"sitemap".padEnd(12)} ${a}`);
  for (const e of cuAnomalii)
    for (const a of e.anomalii)
      console.log(`  ${e.id.padEnd(12)} ${a.replace(/`/g, "")}`);
}
if (STRICT && totalAnomalii) process.exit(1);
