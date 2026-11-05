import { createFileRoute } from "@tanstack/react-router";
import { LabIndex } from "@/pages/Lab";
import { alexMatescuPerson, alexMatescuWebSite } from "@/components/Seo";
import { LAB_DESCRIPTION, labOrganization } from "@/data/lab-seo";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/")({
  component: LabIndex,
  head: () =>
    buildSeoHead({
      title: "AI Visibility Lab — GEO și AEO pentru branduri | Alex Matescu",
      description: LAB_DESCRIPTION,
      canonical: `${BASE}/lab`,
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          alexMatescuPerson,
          alexMatescuWebSite,
          labOrganization,
          {
            "@type": "WebPage",
            "@id": `${BASE}/lab#webpage`,
            url: `${BASE}/lab`,
            name: "AI Visibility Lab",
            description: LAB_DESCRIPTION,
            inLanguage: "ro-RO",
            isPartOf: { "@id": alexMatescuWebSite["@id"] },
            about: { "@id": labOrganization["@id"] },
            mainEntity: { "@id": labOrganization["@id"] },
            author: { "@id": alexMatescuPerson["@id"] },
          },
        ],
      },
    }),
});
