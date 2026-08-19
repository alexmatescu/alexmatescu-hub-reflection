import { alexMatescuPerson, alexMatescuWebSite } from "@/components/Seo";
import { auditSiteFaraAccesCodMeta } from "@/data/lab-content/7. audit-site-fara-acces-cod";
import { catDureazaIndexareCitareAiMeta } from "@/data/lab-content/4. cat-dureaza-indexare-citare-ai";
import { ceEsteEntitateAiStudiuDeCazMeta } from "@/data/lab-content/10. ce-este-entitate-ai-studiu-de-caz";
import { cuvantCheieVsFrazaTokenizareMeta } from "@/data/lab-content/8. cuvant-cheie-vs-fraza-tokenizare";
import { decalajVitezaAiAdoptie2026Meta } from "@/data/lab-content/12. decalaj-viteza-ai-adoptie-2026";
import { hartaDeCitareMentiuniExterneRomaniaMeta } from "@/data/lab-content/11. harta-de-citare-mentiuni-externe-romania";
import { paradoxulSpecificitatiiContinutGenericMeta } from "@/data/lab-content/9. paradoxul-specificitatii-continut-generic";
import { istoriaCautariiMeta } from "@/data/lab-content/1. istoria-cautarii-internet-evolutia-seo";
import { metadataCitareAiStudiuDeCazMeta } from "@/data/lab-content/6. metadata-citare-ai-studiu-de-caz";
import { motoareCautareMeta } from "@/data/lab-content/2. motoare-cautare-comparatie-2026";
import { paradoxulSiteuluiTerminatMeta } from "@/data/lab-content/5. paradoxul-site-ului-terminat";
import { socialMediaVizibilitateAiMeta } from "@/data/lab-content/3. social-media-vizibilitate-ai";
import { findLabPage } from "@/data/lab";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export type LabArticleMeta = {
  title: string;
  description: string;
  canonical: string;
  datePublished: string;
  dateModified: string;
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
];

const findArticleMetaBySlug = (slug: string) =>
  labArticleMeta.find((meta) =>
    meta.canonical.endsWith(`/lab/articole/${slug}`),
  );

const labPublisher = {
  "@type": "Organization",
  name: "AI Visibility Lab",
  url: "https://delamatescu.ro/lab",
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
      // Sitewide, identic pentru orice articol din secțiune — nu se cere per-articol.
      articleSection: "AI Visibility Lab",
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
