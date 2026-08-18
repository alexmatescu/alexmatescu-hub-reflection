import { posts } from "@/data/posts";
import { alexMatescuPerson } from "@/components/Seo";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

/**
 * Head SSR pentru /blog/:slug — sursă unică, folosită atât de head()-ul rutei
 * (@/routes/_site/blog/$slug.tsx) cât și, indirect, de <Seo> din BlogPost.tsx
 * (care păstrează doar title/description/OG pentru actualizarea client-side la
 * navigare SPA; JSON-LD e deja randat server-side de aici, nu mai e duplicat).
 * Întoarce `undefined` dacă slug-ul nu are un post corespunzător.
 */
export const buildBlogPostHead = (slug: string) => {
  const post = posts.find((p) => p.slug === slug);
  if (!post) return undefined;

  const title = post.seoTitle
    ? `${post.seoTitle} | Alex Matescu`
    : `${post.title} — Alex Matescu`;
  const description = post.metaDescription ?? post.excerpt;
  const canonical = `${BASE}/blog/${post.slug}`;
  const imageUrl = post.heroImage?.src
    ? post.heroImage.src.startsWith("http")
      ? post.heroImage.src
      : `${BASE}${post.heroImage.src}`
    : undefined;
  const imageAlt = imageUrl
    ? (post.imageAlt ?? post.heroImage?.alt)
    : undefined;

  return buildSeoHead({
    title,
    description,
    canonical,
    ogType: "article",
    ogTitle: post.ogTitle ?? post.seoTitle ?? post.title,
    ogDescription: post.ogDescription ?? post.metaDescription ?? post.excerpt,
    ogSiteName: "Alex Matescu",
    ogLocale: "ro_RO",
    robots: "index, follow",
    ...(post.twitterTitle ? { twitterTitle: post.twitterTitle } : {}),
    ...(post.twitterDescription
      ? { twitterDescription: post.twitterDescription }
      : {}),
    ...(imageUrl ? { imageUrl } : {}),
    ...(imageAlt ? { imageAlt } : {}),
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "@id": `${canonical}#article`,
        headline: post.title,
        name: post.title,
        description,
        datePublished: post.date,
        dateModified: post.dateModified ?? post.date,
        url: canonical,
        inLanguage: "ro-RO",
        mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
        articleSection: post.category,
        ...(post.schemaKeywords?.length
          ? { keywords: post.schemaKeywords }
          : post.tags?.length
            ? { keywords: post.tags }
            : {}),
        ...(post.about?.length
          ? { about: post.about.map((name) => ({ "@type": "Thing", name })) }
          : {}),
        ...(post.mentions?.length
          ? {
              mentions: post.mentions.map((name) => ({
                "@type": "Person",
                name,
              })),
            }
          : {}),
        ...(imageUrl ? { image: imageUrl } : {}),
        author: alexMatescuPerson,
        publisher: { "@id": alexMatescuPerson["@id"] },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: `${BASE}/` },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${BASE}/blog`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonical,
          },
        ],
      },
    ],
  });
};
