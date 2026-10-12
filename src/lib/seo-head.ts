/**
 * Contrapartea server-side a `useSeo` (@/components/Seo): construiește exact
 * aceleași meta tags/link/JSON-LD, dar ca obiect `head()` de rută TanStack
 * Start, randat în HTML-ul inițial — vizibil pentru un `curl`/crawler fără JS,
 * nu doar injectat ulterior client-side. Orice pagină publică nouă ar trebui
 * să-și construiască head-ul din această funcție, ca cele două căi (server la
 * încărcarea inițială, client la navigare SPA ulterioară via `<Seo>`) să nu
 * diveargă. Vezi `buildLabArticleHead` (@/data/lab-seo) și `buildPresaHead`
 * (@/lib/presa) pentru variantele existente, mai vechi, ale aceluiași tipar.
 */
/**
 * Lungimea maximă a `<title>`, după convenția Google (~60 de caractere afișate
 * în rezultate). Titlul de bază al paginii nu se taie niciodată: se adaugă
 * cel mai lung sufix de brand care încape în limită, iar dacă niciunul nu
 * încape, `<title>` e doar titlul de bază (numele site-ului apare oricum separat
 * în rezultatele Google). Dacă titlul de bază singur depășește limita,
 * pagina are nevoie de un `seoTitle` scurtat, scris editorial.
 */
export const SEO_TITLE_MAX_LENGTH = 60;

export const fitSeoTitle = (base: string, suffixes: readonly string[]) => {
  for (const suffix of suffixes) {
    const candidate = `${base}${suffix}`;
    if (candidate.length <= SEO_TITLE_MAX_LENGTH) return candidate;
  }
  return base;
};

export type SeoHeadProps = {
  title: string;
  description: string;
  /** URL absolut, canonic, al paginii. */
  canonical: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogSiteName?: string;
  ogLocale?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  imageUrl?: string;
  imageAlt?: string;
  robots?: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
};

export const buildSeoHead = ({
  title,
  description,
  canonical,
  ogType,
  ogTitle,
  ogDescription,
  ogSiteName,
  ogLocale,
  twitterTitle,
  twitterDescription,
  imageUrl,
  imageAlt,
  robots,
  noIndex,
  jsonLd,
}: SeoHeadProps) => {
  const meta: Record<string, string>[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: ogTitle ?? title },
    { property: "og:description", content: ogDescription ?? description },
    { property: "og:url", content: canonical },
    { name: "twitter:title", content: twitterTitle ?? ogTitle ?? title },
    {
      name: "twitter:description",
      content: twitterDescription ?? ogDescription ?? description,
    },
  ];

  if (ogType) meta.push({ property: "og:type", content: ogType });
  if (ogSiteName) meta.push({ property: "og:site_name", content: ogSiteName });
  if (ogLocale) meta.push({ property: "og:locale", content: ogLocale });
  if (imageUrl) {
    meta.push({ property: "og:image", content: imageUrl });
    meta.push({ name: "twitter:image", content: imageUrl });
  }
  if (imageAlt) {
    meta.push({ property: "og:image:alt", content: imageAlt });
    meta.push({ name: "twitter:image:alt", content: imageAlt });
  }
  if (robots) meta.push({ name: "robots", content: robots });
  else if (noIndex) meta.push({ name: "robots", content: "noindex, nofollow" });

  return {
    meta,
    links: [{ rel: "canonical", href: canonical }],
    ...(jsonLd
      ? {
          scripts: [
            { type: "application/ld+json", children: JSON.stringify(jsonLd) },
          ],
        }
      : {}),
  };
};
