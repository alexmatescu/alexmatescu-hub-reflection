import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";
import { alexMatescuPerson, alexMatescuWebSite } from "@/components/Seo";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/")({
  component: Home,
  head: () =>
    buildSeoHead({
      title:
        "Alex Matescu — Inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor",
      description:
        "Site-ul personal al lui Alex Matescu, inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor din Sibiu. Articole și proiecte despre muncă, tehnologie, AI Visibility, disciplină, antreprenoriat și sens.",
      canonical: `${BASE}/`,
      ogType: "website",
      ogSiteName: "Alex Matescu",
      ogLocale: "ro_RO",
      ogDescription:
        "Hubul personal al lui Alex Matescu: articole, proiecte și cercetare despre muncă, tehnologie, AI Visibility, disciplină, antreprenoriat și sens.",
      twitterDescription:
        "Articole, proiecte și cercetare despre muncă, tehnologie, AI Visibility, disciplină, antreprenoriat și sens.",
      robots:
        "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          alexMatescuPerson,
          alexMatescuWebSite,
          {
            "@type": "WebPage",
            "@id": `${BASE}/#webpage`,
            url: `${BASE}/`,
            name: "Alex Matescu — Inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor",
            isPartOf: { "@id": `${BASE}/#website` },
            about: { "@id": alexMatescuPerson["@id"] },
            mainEntity: { "@id": alexMatescuPerson["@id"] },
            inLanguage: "ro-RO",
          },
        ],
      },
    }),
});
