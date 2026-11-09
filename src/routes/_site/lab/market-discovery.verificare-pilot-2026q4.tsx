import { createFileRoute } from "@tanstack/react-router";
import { MarketVerificationPilot } from "@/pages/MarketVerification";
import { alexMatescuPerson, alexMatescuWebSite } from "@/components/Seo";
import {
  labBreadcrumbList,
  labBreadcrumbTrail,
  labOrganization,
} from "@/data/lab-seo";
import { buildSeoHead } from "@/lib/seo-head";
import {
  MV_PILOT_DATE_PUBLISHED,
  MV_PILOT_DESCRIPTION,
  MV_PILOT_LABEL,
  MV_PILOT_PATH,
  MV_PILOT_REGISTER_ID,
  MV_PILOT_RELEASE_URL,
  MV_PILOT_SEO_TITLE,
  MV_PILOT_TITLE,
} from "@/data/market-verification/meta";

const BASE = "https://delamatescu.ro";
const URL_ = `${BASE}${MV_PILOT_PATH}`;

// Rută statică pe segmentul `market-discovery`: are prioritate peste
// `market-discovery.$run.tsx`.
export const Route = createFileRoute(
  "/_site/lab/market-discovery/verificare-pilot-2026q4",
)({
  component: MarketVerificationPilot,
  head: () =>
    buildSeoHead({
      title: `${MV_PILOT_SEO_TITLE} | AI Visibility Lab`,
      description: MV_PILOT_DESCRIPTION,
      canonical: URL_,
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          alexMatescuPerson,
          alexMatescuWebSite,
          labOrganization,
          {
            "@type": "WebPage",
            "@id": `${URL_}#webpage`,
            url: URL_,
            name: MV_PILOT_TITLE,
            inLanguage: "ro-RO",
            isPartOf: { "@id": alexMatescuWebSite["@id"] },
            publisher: { "@id": labOrganization["@id"] },
            mainEntity: { "@id": `${URL_}#dataset` },
            breadcrumb: { "@id": `${URL_}#breadcrumb` },
          },
          {
            "@type": "Dataset",
            "@id": `${URL_}#dataset`,
            mainEntityOfPage: { "@id": `${URL_}#webpage` },
            name: MV_PILOT_TITLE,
            alternateName: MV_PILOT_REGISTER_ID,
            description: MV_PILOT_DESCRIPTION,
            url: URL_,
            inLanguage: "ro-RO",
            datePublished: MV_PILOT_DATE_PUBLISHED,
            temporalCoverage: "2026-10-27/2026-11-08",
            spatialCoverage: { "@type": "Place", name: "România" },
            creator: { "@id": alexMatescuPerson["@id"] },
            publisher: { "@id": labOrganization["@id"] },
            isAccessibleForFree: true,
            isPartOf: {
              "@type": "CollectionPage",
              "@id": `${BASE}/lab/market-discovery#webpage`,
              name: "Market Discovery — seria MKT-RO-AIV",
              url: `${BASE}/lab/market-discovery`,
            },
            distribution: {
              "@type": "DataDownload",
              contentUrl: MV_PILOT_RELEASE_URL,
              encodingFormat: "text/csv",
              name: `${MV_PILOT_REGISTER_ID} v1.1 — release GitHub`,
            },
            measurementTechnique:
              "Verificarea individuală a fiecărui candidat Market Discovery după criteriile de eligibilitate din AVL-MKT-001 (identificarea entității, dovada serviciului, orientarea către România), cu dovada salvată ca răspuns HTTP brut și SHA-256.",
            variableMeasured: [
              "Status de eligibilitate (ELIGIBLE, OUT OF SCOPE, INELIGIBLE, UNVERIFIED, AMBIGUOUS)",
              "Clasă geografică",
              "Clasă de furnizor",
              "Nivelul dovezii (E1–E3)",
            ],
          },
          labBreadcrumbList(
            URL_,
            labBreadcrumbTrail(MV_PILOT_PATH, MV_PILOT_LABEL),
          ),
        ],
      },
    }),
});
