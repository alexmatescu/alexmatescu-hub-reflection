import { createFileRoute } from "@tanstack/react-router";
import { MarketDiscoveryHub } from "@/pages/MarketDiscovery";
import { alexMatescuPerson, alexMatescuWebSite } from "@/components/Seo";
import {
  labBreadcrumbList,
  labBreadcrumbTrail,
  labOrganization,
} from "@/data/lab-seo";
import { buildSeoHead } from "@/lib/seo-head";
import {
  mdRunHeads,
  MD_HUB_DESCRIPTION,
  MD_HUB_TITLE,
} from "@/data/market-discovery/meta";
import {
  MV_PILOT_DATE_PUBLISHED,
  MV_PILOT_PATH,
  MV_PILOT_TITLE,
} from "@/data/market-verification/meta";

const BASE = "https://delamatescu.ro";
const HUB = `${BASE}/lab/market-discovery`;

// Rută statică: are prioritate peste `$slug.tsx`, deci /lab/market-discovery
// nu trece prin LabDetail (pagina are layout propriu, cu date).
export const Route = createFileRoute("/_site/lab/market-discovery/")({
  component: MarketDiscoveryHub,
  head: () =>
    buildSeoHead({
      title: "Market Discovery — seria MKT-RO-AIV | AI Visibility Lab",
      description: MD_HUB_DESCRIPTION,
      canonical: HUB,
      jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
          alexMatescuPerson,
          alexMatescuWebSite,
          labOrganization,
          {
            "@type": "CollectionPage",
            "@id": `${HUB}#webpage`,
            name: MD_HUB_TITLE,
            description: MD_HUB_DESCRIPTION,
            url: HUB,
            inLanguage: "ro-RO",
            isPartOf: { "@id": alexMatescuWebSite["@id"] },
            publisher: { "@id": labOrganization["@id"] },
            creator: { "@id": alexMatescuPerson["@id"] },
            breadcrumb: { "@id": `${HUB}#breadcrumb` },
            hasPart: [
              {
                "@type": "Dataset",
                "@id": `${BASE}${MV_PILOT_PATH}#dataset`,
                name: MV_PILOT_TITLE,
                url: `${BASE}${MV_PILOT_PATH}`,
              },
              ...mdRunHeads.map((r) => ({
                "@type": "Dataset",
                "@id": `${BASE}${r.path}#dataset`,
                name: r.title,
                url: `${BASE}${r.path}`,
              })),
            ],
            dateModified: MV_PILOT_DATE_PUBLISHED,
          },
          labBreadcrumbList(
            HUB,
            labBreadcrumbTrail("/lab/market-discovery", "Market Discovery"),
          ),
        ],
      },
    }),
});
