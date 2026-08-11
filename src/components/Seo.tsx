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
  twitterTitle?: string;
  twitterDescription?: string;
  imageUrl?: string;
  imageAlt?: string;
};

const JSONLD_SCRIPT_ID = "route-jsonld";

export const alexMatescuPerson = {
  "@type": "Person",
  "@id": "https://delamatescu.ro/#alex-matescu",
  name: "Alex Matescu",
  alternateName: ["Alexandru Matescu", "Alexandru-Costi Matescu"],
  url: "https://delamatescu.ro",
  sameAs: [
    "https://www.linkedin.com/in/alex-matescu-8b2b8813b/",
    "https://x.com/MatescuAlex",
    "https://www.facebook.com/alexmatescu",
    "https://www.instagram.com/alexmatescu.c",
  ],
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
  twitterTitle,
  twitterDescription,
  imageUrl,
  imageAlt,
}: SeoProps) => {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', ogTitle ?? title);
    setMetaContent('meta[name="twitter:title"]', twitterTitle ?? ogTitle ?? title);
    setMetaContent('meta[property="og:description"]', ogDescription ?? description);
    setMetaContent('meta[name="twitter:description"]', twitterDescription ?? ogDescription ?? description);

    if (canonicalUrl) {
      const link = document.querySelector('link[rel="canonical"]');
      if (link) link.setAttribute("href", canonicalUrl);
      setMetaProperty("og:url", canonicalUrl);
    }
    if (ogType) setMetaProperty("og:type", ogType);
    if (imageUrl) {
      setMetaProperty("og:image", imageUrl);
      setMetaName("twitter:image", imageUrl);
    }
    if (imageAlt) {
      setMetaProperty("og:image:alt", imageAlt);
      setMetaName("twitter:image:alt", imageAlt);
    }

    if (noIndex) {
      setMetaContent('meta[name="robots"]', "noindex, nofollow");
    }


    if (jsonLdString) {
      let script = document.getElementById(JSONLD_SCRIPT_ID) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.type = "application/ld+json";
        script.id = JSONLD_SCRIPT_ID;
        document.head.appendChild(script);
      }
      script.textContent = jsonLdString;
    }

    return () => {
      if (noIndex) setMetaContent('meta[name="robots"]', "index, follow");
      if (jsonLdString) document.getElementById(JSONLD_SCRIPT_ID)?.remove();
    };
  }, [title, description, noIndex, jsonLdString]);
};

const Seo = (props: SeoProps) => {
  useSeo(props);
  return null;
};

export default Seo;
