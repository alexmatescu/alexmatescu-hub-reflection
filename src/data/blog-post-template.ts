/**
 * TEMPLATE — articol nou de blog personal.
 *
 * Acest fișier NU e importat nicăieri în aplicație — e doar un ȘABLON de lucru,
 * type-checked împotriva `Post` (@/data/posts.ts) ca să prinzi devreme câmpuri
 * lipsă/greșite. Structura și ordinea câmpurilor oglindesc `LabArticleMeta`
 * (@/data/lab-seo.ts) — vezi comentariile din `Post` pentru echivalența exactă.
 *
 * Cum publici un articol nou (de la 2026-08-30 încolo — NU mai intră în
 * blogger-posts.json, care rămâne arhiva neatinsă a articolelor mai vechi):
 * 1. Copiază tot conținutul acestui fișier într-un fișier nou
 *    `@/data/blog-content/<slug-articol>.ts` (mirror exact al modelului Lab,
 *    unde fiecare articol are propriul fișier în `@/data/lab-content/`).
 * 2. În fișierul nou, redenumește exportul (`newPostTemplate` →
 *    `<numeInCamelCase>Post`, ex. `slugArticolNouPost`) și completează
 *    valorile. Păstrează `satisfies Post` — verifică la compilare că nu lipsesc
 *    câmpuri obligatorii.
 * 3. Importă exportul nou în array-ul `newPosts` din @/data/posts.ts (vezi
 *    comentariul de acolo) — asta îl face să apară pe /blog. Ordinea
 *    cronologică (index, „ultimele articole" din Home) se calculează automat
 *    după `date`, nu contează unde-l pui în array.
 * 4. Șirul `html` e conținutul propriu-zis al articolului (paragrafe, h2/h3,
 *    figure/figcaption, blockquote — vezi orice articol Lab pentru sintaxa
 *    HTML acceptată de `.prose-editorial`, sau orice post existent din
 *    blogger-posts.json pentru tonul/formatul folosit deja pe blog).
 * 5. Dacă articolul are o secțiune „Întrebări frecvente" în `html`, scrie
 *    aceleași întrebări/răspunsuri și în `faq` — alimentează FAQPage-ul din
 *    JSON-LD (schema-only, nu se randează separat).
 *
 * Câmpuri OBLIGATORII (fără `?` în `Post`): slug, title, subtitle, excerpt,
 * date, category, readingTime.
 * Tot restul e opțional — completează-l acolo unde are sens pentru articol.
 */

import type { Post } from "@/data/posts";

export const newPostTemplate = {
  // --- Identitate & conținut ---
  slug: "slug-articol-nou",
  title: "Titlul articolului",
  subtitle: "O propoziție care rezumă unghiul/promisiunea articolului.",
  excerpt:
    "2-3 propoziții folosite ca preview pe /blog și ca fallback pentru metaDescription.",
  metaDescription:
    "Descrierea pentru motoarele de căutare (150-160 caractere) — dacă lipsește, se folosește `excerpt`.",
  canonicalPath: "/blog/slug-articol-nou",

  // --- Date ---
  date: "2026-08-29", // prima publicare publică — format YYYY-MM-DD
  dateModified: "2026-08-29",
  lastReviewed: "2026-08-29", // dacă articolul citează fapte/surse verificabile

  // --- Clasificare editorială ---
  category: "Reflecții", // vezi `categories` în blogger-posts.json pentru valorile existente
  articleType: "Reflecție", // etichetă liberă (ex. "Reflecție", "Poveste", "Ghid") — doar metadată
  tags: ["tag-1", "tag-2", "tag-3"],

  // --- Structured data suplimentar ---
  about: ["Entitate/temă 1", "Entitate/temă 2"],
  faq: [
    { q: "Prima întrebare frecventă?", a: "Răspunsul, scris și în `html`." },
  ],
  citations: [
    { name: "Numele sursei citate", url: "https://sursa.example.com" },
  ],
  mentions: ["Persoană menționată în articol"],
  schemaKeywords: ["termen descriptiv 1", "termen descriptiv 2"],
  focusKeyword: "termenul principal al articolului",

  // --- Imagine ---
  heroImage: {
    src: "/images/blog/nume-imagine.webp",
    alt: "Descriere accesibilă a imaginii principale.",
    width: 2000,
    height: 1125,
  },
  // imageAlt: "Override opțional pentru alt text-ul din OG/Twitter.",

  // --- SEO / social override-uri ---
  seoTitle: "Titlu optimizat pentru <title> (dacă diferă de `title`)",
  // ogTitle: "Override opțional pentru Open Graph.",
  // ogDescription: "Override opțional pentru Open Graph.",
  // twitterTitle: "Override opțional pentru Twitter Card.",
  // twitterDescription: "Override opțional pentru Twitter Card.",

  // --- Prezentare & autor ---
  readingTime: "6 min",
  author: { name: "Alex Matescu", slug: "alex-matescu", url: "/despre" },
  featured: false,

  // --- Conținut ---
  html: `
    <p>Primul paragraf al articolului.</p>
    <h2>Un subtitlu</h2>
    <p>Conținutul continuă aici...</p>
  `,
} satisfies Post;
