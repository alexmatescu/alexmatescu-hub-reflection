import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  noIndex?: boolean;
  jsonLd?: object | object[];
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

export const useSeo = ({ title, description, noIndex = false, jsonLd }: SeoProps) => {
  const jsonLdString = jsonLd ? JSON.stringify(jsonLd) : undefined;

  useEffect(() => {
    document.title = title;
    setMetaContent('meta[name="description"]', description);
    setMetaContent('meta[property="og:title"]', title);
    setMetaContent('meta[name="twitter:title"]', title);
    setMetaContent('meta[property="og:description"]', description);
    setMetaContent('meta[name="twitter:description"]', description);

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
