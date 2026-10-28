#!/usr/bin/env node
/**
 * Verificarea lui `public/llms.txt` — pasul final al skill-urilor de publicare.
 *
 * `llms.txt` e un index scris de mână (nu se generează): o linie
 * `- [Titlu](URL canonic): descriere` pentru fiecare material public al
 * laboratorului. Scriptul nu îl modifică; verifică doar că:
 *
 *   - fiecare link spre delamatescu.ro există în `public/sitemap.xml`
 *     (în afară de robots.txt și sitemap.xml);
 *   - fiecare URL cerut cu `--require` apare ca țintă a unei linii de listă;
 *   - (raport) ce materiale publicate din registru lipsesc din llms.txt,
 *     pe suprafețele laboratorului; blogul nu e listat articol cu articol.
 *
 * Utilizare:
 *   node scripts/check-llms.mjs
 *   node scripts/check-llms.mjs --require https://delamatescu.ro/lab/articole/{slug}
 *
 * Exit 1 dacă un link lipsește din sitemap sau un URL cerut lipsește din llms.txt.
 */

import fs from "node:fs";

const LLMS = "public/llms.txt";
const SITEMAP = "public/sitemap.xml";
const REGISTRY = "docs/registru-continut.json";
const ORIGIN = "https://delamatescu.ro";
const LAB_SURFACES = new Set([
  "lab/articole",
  "lab/studii-de-caz",
  "lab/metodologie",
  "lab/cercetare",
  "lab/secțiuni",
  "lab/foundation",
]);

const args = process.argv.slice(2);
const required = args.flatMap((a, i) => (a === "--require" ? [args[i + 1]] : []));
const norm = (u) => (u.length > ORIGIN.length + 1 ? u.replace(/\/$/, "") : u);

const llms = fs.readFileSync(LLMS, "utf8");
const locs = new Set(
  [...fs.readFileSync(SITEMAP, "utf8").matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => norm(m[1])),
);
const links = [...llms.matchAll(/\]\((https:\/\/delamatescu\.ro[^)\s]*)\)/g)].map((m) => norm(m[1]));
const listTargets = new Set(
  llms
    .split("\n")
    .filter((l) => l.startsWith("- ["))
    .map((l) => l.match(/^- \[[^\]]+\]\((https:\/\/delamatescu\.ro[^)\s]*)\)/)?.[1])
    .filter(Boolean)
    .map(norm),
);

let failed = false;
const notInSitemap = [...new Set(links)].filter((u) => !locs.has(u) && !/\/(robots\.txt|sitemap\.xml)$/.test(u));
if (notInSitemap.length) {
  failed = true;
  console.log("Linkuri din llms.txt care nu sunt în sitemap:");
  for (const u of notInSitemap) console.log(`  - ${u}`);
}
for (const u of required) {
  if (listTargets.has(norm(u))) console.log(`ok: ${u}`);
  else {
    failed = true;
    console.log(`LIPSEȘTE din llms.txt: ${u}`);
  }
}

if (fs.existsSync(REGISTRY)) {
  const reg = JSON.parse(fs.readFileSync(REGISTRY, "utf8"));
  const missing = reg.intrari.filter(
    (e) => LAB_SURFACES.has(e.suprafata) && e.status === "publicat" && e.ruta && !listTargets.has(norm(ORIGIN + e.ruta)),
  );
  if (missing.length) {
    console.log("Materiale publicate ale laboratorului care nu au linie în llms.txt (de verificat):");
    for (const e of missing) console.log(`  - ${e.id} ${e.ruta}`);
  }
}

console.log(failed ? "llms.txt: PROBLEME" : `llms.txt: ok (${listTargets.size} linii de listă)`);
process.exit(failed ? 1 : 0);
