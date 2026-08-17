import { alexMatescuPerson } from "@/components/Seo";
import { catDureazaIndexareCitareAiMeta } from "@/data/lab-content/cat-dureaza-indexare-citare-ai";
import { istoriaCautariiMeta } from "@/data/lab-content/istoria-cautarii-internet-evolutia-seo";
import { motoareCautareMeta } from "@/data/lab-content/motoare-cautare-comparatie-2026";
import { paradoxulSiteuluiTerminatMeta } from "@/data/lab-content/paradoxul-site-ului-terminat";
import { socialMediaVizibilitateAiMeta } from "@/data/lab-content/social-media-vizibilitate-ai";

export type LabArticleMeta = {
  title: string;
  description: string;
  canonical: string;
  datePublished: string;
  dateModified: string;
  faq: { q: string; a: string }[];
  /** Entități tematice opționale (schema.org `about`), pentru articolele care le definesc. */
  about?: { name: string }[];
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
];

const findArticleMetaBySlug = (slug: string) =>
  labArticleMeta.find((meta) => meta.canonical.endsWith(`/lab/articole/${slug}`));

export const buildArticleJsonLd = (meta: LabArticleMeta) => [
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
    publisher: {
      "@type": "Organization",
      name: "AI Visibility Lab",
      url: "https://delamatescu.ro/lab",
    },
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
      { type: "application/ld+json", children: JSON.stringify(buildArticleJsonLd(meta)) },
    ],
  };
};
