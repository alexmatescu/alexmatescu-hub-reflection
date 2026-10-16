import { createFileRoute } from "@tanstack/react-router";
import { MarketDiscoveryHub } from "@/pages/MarketDiscovery";
import { alexMatescuPerson } from "@/components/Seo";
import { buildSeoHead } from "@/lib/seo-head";
import {
  mdRunHeads,
  MD_HUB_DESCRIPTION,
  MD_HUB_TITLE,
} from "@/data/market-discovery/meta";

const BASE = "https://delamatescu.ro";

// Rută statică: are prioritate peste `$slug.tsx`, deci /lab/market-discovery
// nu trece prin LabDetail (pagina are layout propriu, cu date).
export const Route = createFileRoute("/_site/lab/market-discovery/")({
  component: MarketDiscoveryHub,
  head: () =>
    buildSeoHead({
      title: "Market Discovery — seria MKT-RO-AIV | AI Visibility Lab",
      description: MD_HUB_DESCRIPTION,
      canonical: `${BASE}/lab/market-discovery`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: MD_HUB_TITLE,
        description: MD_HUB_DESCRIPTION,
        url: `${BASE}/lab/market-discovery`,
        inLanguage: "ro-RO",
        isPartOf: {
          "@type": "WebSite",
          url: `${BASE}/lab`,
          name: "AI Visibility Lab",
        },
        creator: alexMatescuPerson,
        hasPart: mdRunHeads.map((r) => ({
          "@type": "Dataset",
          name: r.title,
          url: `${BASE}${r.path}`,
        })),
      },
    }),
});
