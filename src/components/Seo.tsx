import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
  canonicalUrl?: string;
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
};

const JSONLD_SCRIPT_ID = "route-jsonld";

export const alexMatescuPerson = {
  "@type": "Person",
  "@id": "https://delamatescu.ro/#alex-matescu",
  name: "Alex Matescu",
  alternateName: ["Alexandru Matescu", "Alexandru-Costi Matescu"],
  url: "https://delamatescu.ro/",
  description:
    "Alex Matescu este inginer, antreprenor, consultant AI Visibility și autor din Sibiu, România. Scrie și construiește proiecte despre muncă, tehnologie, AI Visibility, disciplină, antreprenoriat și sens.",
  homeLocation: {
    "@type": "Place",
    name: "Sibiu, România",
  },
  knowsAbout: [
    "Inteligență artificială",
    "AI Visibility",
    "Generative Engine Optimization",
    "Answer Engine Optimization",
    "Inginerie de sistem",
    "Sisteme automotive",
    "Antreprenoriat",
    "Scris",
    "Leadership",
    "Disciplină",
  ],
  sameAs: [
    "https://www.linkedin.com/in/alex-matescu-8b2b8813b/",
    "https://x.com/MatescuAlex",
    "https://www.facebook.com/alexmatescu",
    "https://www.instagram.com/alexmatescu.c",
  ],
} as const;

/**
 * Nodul WebSite global — sursă unică, ca să nu diverg în text/`inLanguage` între
 * paginile care îl embed (Home.tsx randează nodul complet; alte pagini pot
 * referenția doar `{ "@id": alexMatescuWebSite["@id"] }` dacă embed-ul complet
 * al lui Person e deja suficient pentru pagina respectivă, sau pot embed nodul
 * complet dacă au nevoie de el self-contained — ex. articolele /lab/articole).
 */
export const alexMatescuWebSite = {
  "@type": "WebSite",
  "@id": "https://delamatescu.ro/#website",
  url: "https://delamatescu.ro/",
  name: "Alex Matescu",
  description:
    "Hubul personal al lui Alex Matescu pentru articole, proiecte, cercetare și scris.",
  inLanguage: "ro-RO",
  publisher: { "@id": alexMatescuPerson["@id"] },
} as const;

const setMetaContent = (selector: string, content: string) => {
  const el = document.querySelector(selector);
  if (el) el.setAttribute("content", content);
};

const setMetaProperty = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const setMetaName = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

export const useSeo = ({
  title,
  description,
  noIndex = false,
  jsonLd,
  canonicalUrl,
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
}: SeoProps) => {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', ogTitle ?? title);
    setMetaContent(
      'meta[name="twitter:title"]',
      twitterTitle ?? ogTitle ?? title,
    );
    setMetaContent(
      'meta[property="og:description"]',
      ogDescription ?? description,
    );
    setMetaContent(
      'meta[name="twitter:description"]',
      twitterDescription ?? ogDescription ?? description,
    );

    if (canonicalUrl) {
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute("href", canonicalUrl);
      setMetaProperty("og:url", canonicalUrl);
    }
    if (ogType) setMetaProperty("og:type", ogType);
    if (ogSiteName) setMetaProperty("og:site_name", ogSiteName);
    if (ogLocale) setMetaProperty("og:locale", ogLocale);
    if (imageUrl) {
      setMetaProperty("og:image", imageUrl);
      setMetaName("twitter:image", imageUrl);
    }
    if (imageAlt) {
      setMetaProperty("og:image:alt", imageAlt);
      setMetaName("twitter:image:alt", imageAlt);
    }

    if (robots) {
      setMetaName("robots", robots);
    } else if (noIndex) {
      setMetaName("robots", "noindex, nofollow");
    }

    if (jsonLdString) {
      let script = document.getElementById(
        JSONLD_SCRIPT_ID,
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = JSONLD_SCRIPT_ID;
        document.head.appendChild(script);
      }
      script.textContent = jsonLdString;
    }

    return () => {
      if (robots || noIndex) setMetaName("robots", "index, follow");
      if (jsonLdString) document.getElementById(JSONLD_SCRIPT_ID)?.remove();
    };
  }, [
    title,
    description,
    noIndex,
    jsonLdString,
    canonicalUrl,
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
  ]);
};

const Seo = (props: SeoProps) => {
  useSeo(props);
  return null;
};

export default Seo;
