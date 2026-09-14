import { alexMatescuPerson, alexMatescuWebSite } from "@/components/Seo";
import { aiOglindaAmplificatorMeta } from "@/data/lab-content/14. ai-oglinda-amplificator-intentie-context-anthropic";
import { auditSiteFaraAccesCodMeta } from "@/data/lab-content/7. audit-site-fara-acces-cod";
import { catDureazaIndexareCitareAiMeta } from "@/data/lab-content/4. cat-dureaza-indexare-citare-ai";
import { ceEsteEntitateAiStudiuDeCazMeta } from "@/data/lab-content/10. ce-este-entitate-ai-studiu-de-caz";
import { cuvantCheieVsFrazaTokenizareMeta } from "@/data/lab-content/8. cuvant-cheie-vs-fraza-tokenizare";
import { decalajVitezaAiAdoptie2026Meta } from "@/data/lab-content/12. decalaj-viteza-ai-adoptie-2026";
import { etichetaAbonatRelatiaPrezentareAiSearchMeta } from "@/data/lab-content/13. eticheta-abonat-relatia-prezentare-ai-search";
import { hartaDeCitareMentiuniExterneRomaniaMeta } from "@/data/lab-content/11. harta-de-citare-mentiuni-externe-romania";
import { paradoxulSpecificitatiiContinutGenericMeta } from "@/data/lab-content/9. paradoxul-specificitatii-continut-generic";
import { istoriaCautariiMeta } from "@/data/lab-content/1. istoria-cautarii-internet-evolutia-seo";
import { metadataCitareAiStudiuDeCazMeta } from "@/data/lab-content/6. metadata-citare-ai-studiu-de-caz";
import { motoareCautareMeta } from "@/data/lab-content/2. motoare-cautare-comparatie-2026";
import { paradoxulSiteuluiTerminatMeta } from "@/data/lab-content/5. paradoxul-site-ului-terminat";
import { socialMediaVizibilitateAiMeta } from "@/data/lab-content/3. social-media-vizibilitate-ai";
import { tabulaRasaEntityResolutionStudiuDeCazMeta } from "@/data/lab-content/tabula-rasa-entity-resolution-studiu-de-caz";
import { findLabPage } from "@/data/lab";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

/**
 * Clasificarea editorială principală (index + filtre pe /lab/articole). Valorile
 * sunt EXACT cele patru din taxonomia controlată — nu inventa altele automat;
 * un articol care nu se potrivește rezonabil în niciuna dintre ele semnalează
 * o decizie editorială (SKILL.md §19), nu o extindere silențioasă a acestui union.
 */
export type LabArticleCategory =
  | "Search & Retrieval"
  | "Technical Visibility"
  | "Entities & Citations"
  | "AI Ecosystem";

/** Ordinea canonică de afișare a categoriilor în filtrele din /lab/articole. */
export const LAB_ARTICLE_CATEGORIES: readonly LabArticleCategory[] = [
  "Search & Retrieval",
  "Technical Visibility",
  "Entities & Citations",
  "AI Ecosystem",
];

/**
 * Tipul editorial al materialului — distinct de `category` (clasificare tematică)
 * și de `keywords` (metadata SEO, fără rol în filtrare). Valorile editoriale
 * existente în corpus; extinde doar cu decizie editorială explicită.
 *
 * „Analiză de caz" (nu „Studiu de caz") — redenumit 2026-09-04, audit
 * metodologic: de la introducerea secțiunii /lab/studii-de-caz (Nivelul D2,
 * AVL-001 §17), substantivul propriu „Studiu de caz" e rezervat exclusiv
 * acelei secțiuni (documentare longitudinală a unei entități reale). Un
 * articol din /lab/articole ancorat într-un caz concret, dar fără caracterul
 * longitudinal/multi-fază al unui Case Study, e „Analiză de caz" — păstrează
 * sensul editorial, elimină coliziunea de nume. Nu redenumește retroactiv
 * conceptul, doar eticheta afișată (vezi cele 2 articole din corpus).
 */
export type LabArticleType =
  "Analiză" | "Analiză de caz" | "Ghid" | "Ghid / Analiză metodologică";

export type LabArticleMeta = {
  title: string;
  description: string;
  canonical: string;
  /**
   * Momentul primei publicări publice — NU data creării draftului, a
   * research-ului sau a ultimei modificări (SKILL.md §6.2). Acceptă două
   * formate, ambele parsabile de `Date`:
   *  - legacy: `"YYYY-MM-DD"` (articolele publicate înainte de acest contract);
   *  - nou, pentru orice articol publicat de acum înainte: ISO complet cu
   *    oră și offset, `"YYYY-MM-DDTHH:mm:ss±HH:mm"` (ex. `"2026-08-27T20:00:00+03:00"`).
   * Sursa unică pentru sortarea și pentru Featured-ul din /lab/articole —
   * vezi `sortedLabArticles`/`latestLabArticle` mai jos. Nu folosi `dateModified`
   * sau `lastReviewed` pentru asta.
   */
  datePublished: string;
  dateModified: string;
  /** Clasificarea editorială principală — sursă unică pentru index și filtre (nu duplica în alt registry). */
  category: LabArticleCategory;
  /** Tipul editorial al materialului — sursă unică pentru index (nu duplica în alt registry). */
  articleType: LabArticleType;
  faq: { q: string; a: string }[];
  /** Entități tematice opționale (schema.org `about`), pentru articolele care le definesc. */
  about?: { name: string }[];

  // --- Câmpuri opționale — pipeline-ul GEO/AEO/E-E-A-T upgradat (SKILL.md, 2026-08).
  // Articolele publicate înainte de upgrade nu le au și rămân pe JSON-LD "legacy"
  // (vezi `buildArticleJsonLd` mai jos). `lastReviewed` e semnalul de opt-in către
  // formatul nou (@graph) — orice articol publicat prin pipeline-ul upgradat îl are.
  /** Data ultimei verificări factuale reale (poate diferi de `dateModified`). */
  lastReviewed?: string;
  /** Termeni descriptivi ai conținutului — NU keyword stuffing. */
  keywords?: string[];
  /** Surse citate efectiv în articol, pentru schema.org `citation`. */
  citations?: { name: string; url: string }[];
  /** Imaginea principală a articolului, dacă există. */
  image?: { url: string; alt: string };
};

/**
 * Metadatele articolelor individuale din /lab/articole (nu documente AVL) — sursă
 * unică, folosită atât pentru JSON-LD Article/FAQPage client-side (Lab.tsx), cât
 * și pentru head()-ul server-side al rutei /lab/articole/$slug
 * (src/routes/_site/lab/$parent.$slug.tsx), ca titlul, descrierea, OG/Twitter și
 * JSON-LD specifice articolului să fie deja prezente în HTML-ul servit de server,
 * nu doar injectate ulterior de JS la hidratare.
 */
export const labArticleMeta: LabArticleMeta[] = [
  istoriaCautariiMeta,
  motoareCautareMeta,
  socialMediaVizibilitateAiMeta,
  catDureazaIndexareCitareAiMeta,
  paradoxulSiteuluiTerminatMeta,
  metadataCitareAiStudiuDeCazMeta,
  auditSiteFaraAccesCodMeta,
  cuvantCheieVsFrazaTokenizareMeta,
  paradoxulSpecificitatiiContinutGenericMeta,
  ceEsteEntitateAiStudiuDeCazMeta,
  hartaDeCitareMentiuniExterneRomaniaMeta,
  decalajVitezaAiAdoptie2026Meta,
  etichetaAbonatRelatiaPrezentareAiSearchMeta,
  aiOglindaAmplificatorMeta,
];

const findArticleMetaBySlug = (slug: string) =>
  labArticleMeta.find((meta) =>
    meta.canonical.endsWith(`/lab/articole/${slug}`),
  );

/**
 * Metadatele studiilor de caz din /lab/studii-de-caz — array separat de
 * `labArticleMeta`, intenționat: studiile de caz nu fac parte din indexul
 * „Featured + Article index” al /lab/articole (`sortedLabArticles`/
 * `LabArticleIndex`, vezi Lab.tsx) și nu trebuie să apară acolo. Reutilizează
 * însă același tip `LabArticleMeta` și același `buildArticleJsonLd` — un
 * studiu de caz publicat prin acest pipeline capătă exact același rigoare de
 * structured data (Article/@graph, entity consistency) ca un articol.
 *
 * Primul studiu de caz (#001 — Alex Matescu, CS-001, experiment Tabula Rasa)
 * publicat 2026-09-04 prin skill-ul `.claude/skills/publica-studiu-de-caz`.
 */
export const labCaseStudyMeta: LabArticleMeta[] = [
  tabulaRasaEntityResolutionStudiuDeCazMeta,
];

const findCaseStudyMetaBySlug = (slug: string) =>
  labCaseStudyMeta.find((meta) =>
    meta.canonical.endsWith(`/lab/studii-de-caz/${slug}`),
  );

/**
 * Ruta articolului (`/lab/articole/{slug}`), derivată din `canonical` — nu
 * există un câmp `slug` separat în `LabArticleMeta` (ar duplica aceeași
 * informație, vezi SKILL.md Faza 0/§2). Folosită de indexul din Lab.tsx pentru
 * link-ul fiecărui rând.
 */
export const labArticlePathname = (meta: LabArticleMeta) =>
  new URL(meta.canonical).pathname;

/**
 * Parsează `datePublished` la un timestamp real (`Date`), acceptând deopotrivă
 * formatul legacy `YYYY-MM-DD` și formatul nou ISO complet cu oră/offset —
 * ambele sunt parsabile nativ de `Date`. Nu face sortare lexicografică pe
 * string: string-ul `"YYYY-MM-DD"` sortează corect lexicografic, dar
 * `"YYYY-MM-DDTHH:mm:ss±HH:mm"` nu garantează asta odată ce intră offset-uri
 * diferite de UTC, deci parserul real e obligatoriu.
 */
const parsePublishedTimestamp = (datePublished: string): number => {
  const t = new Date(datePublished).getTime();
  return Number.isNaN(t) ? 0 : t;
};

/**
 * Sursa unică de ordonare pentru /lab/articole: toate articolele, sortate
 * descrescător exclusiv după `datePublished` (nu `dateModified`, nu
 * `lastReviewed`, nu ordinea din `labNav.children`, nu ordinea importurilor
 * de mai sus, nu un flag `featured`). Cel mai nou articol e mereu primul —
 * vezi `latestLabArticle`.
 *
 * Tie-breaker: articole legacy publicate în aceeași zi, fără oră verificabilă,
 * compară egal pe timestamp; ordinea dintre ele e decisă determinist prin
 * `canonical` (string stabil, independent de import/fișier/poziție manuală).
 * Acest tie-breaker NU e și nu reprezintă ora reală de publicare — doar
 * garantează un rezultat identic la fiecare build.
 */
export const sortedLabArticles: LabArticleMeta[] = [...labArticleMeta].sort(
  (a, b) => {
    const diff =
      parsePublishedTimestamp(b.datePublished) -
      parsePublishedTimestamp(a.datePublished);
    if (diff !== 0) return diff;
    return a.canonical < b.canonical ? 1 : a.canonical > b.canonical ? -1 : 0;
  },
);

/**
 * "CEL MAI NOU" — mereu cel mai nou articol din ÎNTREG corpusul, calculat
 * automat din `sortedLabArticles[0]`. Nu există flag manual `featured`/
 * `isFeatured` nicăieri în proiect: când un articol nou primește un
 * `datePublished` mai recent, devine automat acesta, fără nicio modificare
 * de cod (Lab.tsx compară fiecare rând cu `latestLabArticle.canonical`).
 */
export const latestLabArticle: LabArticleMeta | undefined =
  sortedLabArticles[0];

/**
 * Echivalentul `sortedLabArticles` pentru /lab/studii-de-caz — sursa unică
 * de ordonare a listei de pe pagina index a secțiunii: toate studiile de caz,
 * sortate descrescător exclusiv după `datePublished`, cu același
 * tie-breaker determinist pe `canonical`. Array separat de `sortedLabArticles`
 * în mod intenționat (§ `labCaseStudyMeta` mai sus) — studiile de caz nu se
 * amestecă niciodată cu articolele într-o singură listă.
 */
export const sortedLabCaseStudies: LabArticleMeta[] = [
  ...labCaseStudyMeta,
].sort((a, b) => {
  const diff =
    parsePublishedTimestamp(b.datePublished) -
    parsePublishedTimestamp(a.datePublished);
  if (diff !== 0) return diff;
  return a.canonical < b.canonical ? 1 : a.canonical > b.canonical ? -1 : 0;
});

/**
 * "CEL MAI NOU" pentru /lab/studii-de-caz — cel mai nou studiu de caz din
 * întreg corpusul secțiunii, calculat automat din `sortedLabCaseStudies[0]`.
 * Când un studiu de caz nou (sau o fază nouă cu `datePublished` mai recent —
 * n.b. o fază nouă nu schimbă `datePublished`, vezi `publica-studiu-de-caz`
 * §0.3) devine cel mai recent, preia automat locul întâi și eticheta, fără
 * nicio modificare de cod.
 */
export const latestLabCaseStudy: LabArticleMeta | undefined =
  sortedLabCaseStudies[0];

/**
 * Formatează `datePublished` pentru afișare pe /lab/articole și în byline:
 * doar data, fără oră, în timezone `Europe/Bucharest` (fix — nu ora
 * browserului/serverului), ca un timestamp cu offset diferit de UTC să nu
 * "alunece" pe ziua alăturată. Ex.: `"2026-08-27T20:00:00+03:00"` → „27 august 2026”.
 */
export const formatLabArticleDate = (datePublished: string): string =>
  new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Bucharest",
  }).format(new Date(datePublished));

const labPublisher = {
  "@type": "Organization",
  name: "AI Visibility Lab",
  url: "https://delamatescu.ro/lab",
  founder: { "@id": alexMatescuPerson["@id"] },
};

/**
 * JSON-LD "legacy" — Article + FAQPage ca obiecte separate în array, fără @graph
 * și fără @id proprii. NU modifica acest builder: e folosit de articolele publicate
 * înainte de upgrade-ul GEO/AEO/E-E-A-T (2026-08) și trebuie să producă exact
 * același output ca înainte, ca să nu le schimbe structured data-ul retroactiv.
 */
const buildLegacyArticleJsonLd = (meta: LabArticleMeta) => [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    inLanguage: "ro-RO",
    datePublished: meta.datePublished,
    dateModified: meta.dateModified,
    url: meta.canonical,
    mainEntityOfPage: { "@type": "WebPage", "@id": meta.canonical },
    author: alexMatescuPerson,
    publisher: labPublisher,
    ...(meta.about
      ? { about: meta.about.map((a) => ({ "@type": "Thing", name: a.name })) }
      : {}),
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "ro-RO",
    mainEntity: meta.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

/**
 * JSON-LD "@graph" — pentru articole publicate prin pipeline-ul GEO/AEO/E-E-A-T
 * upgradat (opt-in prin `lastReviewed`). WebPage + Article (+ FAQPage dacă există
 * FAQ) cu @id proprii, cross-referențiate; Person și WebSite sunt referențiate
 * prin @id global, dar și embed-uite complet (`alexMatescuPerson`/`alexMatescuWebSite`
 * din @/components/Seo) — pagina rămâne self-contained, nu depinde de faptul că
 * scriptul JSON-LD global din __root.tsx e pe aceeași pagină, ca structured data-ul
 * să fie valid inclusiv pentru unelte care citesc un singur script/o singură pagină.
 * Schema completă: .claude/skills/publica-articol-lab/SKILL.md, FAZA 5.2.
 */
const buildGraphArticleJsonLd = (meta: LabArticleMeta) => {
  const webpageId = `${meta.canonical}#webpage`;
  const articleId = `${meta.canonical}#article`;

  const graph: object[] = [
    alexMatescuPerson,
    alexMatescuWebSite,
    {
      "@type": "WebPage",
      "@id": webpageId,
      url: meta.canonical,
      name: meta.title,
      inLanguage: "ro-RO",
      isPartOf: { "@id": alexMatescuWebSite["@id"] },
      ...(meta.about
        ? { about: meta.about.map((a) => ({ "@type": "Thing", name: a.name })) }
        : {}),
    },
    {
      "@type": "Article",
      "@id": articleId,
      mainEntityOfPage: { "@id": webpageId },
      headline: meta.title,
      description: meta.description,
      inLanguage: "ro-RO",
      datePublished: meta.datePublished,
      dateModified: meta.dateModified,
      // `category` e obligatoriu în tipul `LabArticleMeta` (folosit exclusiv de
      // articolele /lab/articole — vezi §12 SKILL.md), deci fiecare intrare din
      // `labArticleMeta` îl are garantat; nu e nevoie de un fallback runtime.
      articleSection: meta.category,
      author: { "@id": alexMatescuPerson["@id"] },
      publisher: labPublisher,
      ...(meta.keywords ? { keywords: meta.keywords.join(", ") } : {}),
      ...(meta.citations
        ? {
            citation: meta.citations.map((c) => ({
              "@type": "CreativeWork",
              name: c.name,
              url: c.url,
            })),
          }
        : {}),
      ...(meta.image
        ? {
            image: {
              "@type": "ImageObject",
              url: meta.image.url,
              caption: meta.image.alt,
            },
          }
        : {}),
    },
  ];

  if (meta.faq.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${meta.canonical}#faq`,
      inLanguage: "ro-RO",
      mainEntity: meta.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    });
  }

  return { "@context": "https://schema.org", "@graph": graph };
};

export const buildArticleJsonLd = (meta: LabArticleMeta) =>
  meta.lastReviewed
    ? buildGraphArticleJsonLd(meta)
    : buildLegacyArticleJsonLd(meta);

/**
 * Construiește head()-ul complet (title, description, OG, Twitter, JSON-LD) pentru
 * o pagină de articol din /lab/articole/:slug — randat server-side, ca bots/crawlere
 * fără execuție JS să vadă metadatele specifice articolului, nu pe cele generice ale
 * hub-ului. Returnează undefined pentru slug-uri fără meta dedicată (rutele apelante
 * cad pe fallback-ul generic existent: doar og:url + canonical).
 */
export const buildLabArticleHead = (slug: string) => {
  const meta = findArticleMetaBySlug(slug);
  if (!meta) return undefined;

  const title = `${meta.title} — AI Visibility Lab | Alex Matescu`;

  return {
    meta: [
      { title },
      { name: "description", content: meta.description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: meta.description },
      { property: "og:url", content: meta.canonical },
      { property: "article:published_time", content: meta.datePublished },
      { property: "article:modified_time", content: meta.dateModified },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: meta.description },
      // Suprascrie placeholder-ul global (__root.tsx) cu imaginea proprie a
      // articolului, dacă există una (`meta.image`, vezi SKILL.md §5.3) — altfel
      // rutele fără imagine dedicată cad pe fallback-ul global, nemodificat.
      ...(meta.image
        ? [
            { property: "og:image", content: meta.image.url },
            { property: "og:image:alt", content: meta.image.alt },
            { name: "twitter:image", content: meta.image.url },
            { name: "twitter:image:alt", content: meta.image.alt },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: meta.canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildArticleJsonLd(meta)),
      },
    ],
  };
};

/**
 * Echivalentul `buildLabArticleHead` pentru /lab/studii-de-caz/:slug — aceeași
 * logică (title, description, OG/Twitter, JSON-LD randate server-side), doar
 * căutând în `labCaseStudyMeta` în loc de `labArticleMeta`. Returnează
 * `undefined` pentru slug-uri fără meta dedicată (ex. articole normale),
 * caz în care ruta apelantă cade pe `buildLabPageHead`.
 */
export const buildLabCaseStudyHead = (slug: string) => {
  const meta = findCaseStudyMetaBySlug(slug);
  if (!meta) return undefined;

  const title = `${meta.title} — AI Visibility Lab | Alex Matescu`;

  return {
    meta: [
      { title },
      { name: "description", content: meta.description },
      { property: "og:type", content: "article" },
      { property: "og:title", content: title },
      { property: "og:description", content: meta.description },
      { property: "og:url", content: meta.canonical },
      { property: "article:published_time", content: meta.datePublished },
      { property: "article:modified_time", content: meta.dateModified },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: meta.description },
      ...(meta.image
        ? [
            { property: "og:image", content: meta.image.url },
            { property: "og:image:alt", content: meta.image.alt },
            { name: "twitter:image", content: meta.image.url },
            { name: "twitter:image:alt", content: meta.image.alt },
          ]
        : []),
    ],
    links: [{ rel: "canonical", href: meta.canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildArticleJsonLd(meta)),
      },
    ],
  };
};

/**
 * Head SSR pentru paginile /lab/:slug și /lab/:parent/:slug care NU sunt
 * articole (ex. /lab/introducere, /lab/cercetare/ce-este-geo-aeo) — folosit ca
 * fallback în rutele `_site/lab/$slug.tsx` și `_site/lab/$parent.$slug.tsx`
 * atunci când `buildLabArticleHead` nu găsește meta de articol pentru slug.
 * Randează același JSON-LD `CreativeWork` pe care LabDetail îl seta doar
 * client-side; <Seo> din Lab.tsx păstrează title/description pentru
 * actualizarea la navigare SPA, dar nu mai duplică JSON-LD-ul. Returnează
 * `undefined` pentru un pathname fără pagină corespunzătoare în `labNav`.
 */
export const buildLabPageHead = (pathname: string) => {
  const page = findLabPage(pathname);
  if (!page) return undefined;

  const canonical = `${BASE}${page.to}`;

  return buildSeoHead({
    title: `${page.seoTitle ?? page.label} — AI Visibility Lab | Alex Matescu`,
    description: page.lead,
    canonical,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: page.pageTitle ?? page.label,
      description: page.lead,
      url: canonical,
      isPartOf: {
        "@type": "CreativeWork",
        name: "AI Visibility Lab",
        url: `${BASE}/lab`,
      },
      creator: alexMatescuPerson,
      author: alexMatescuPerson,
    },
  });
};
