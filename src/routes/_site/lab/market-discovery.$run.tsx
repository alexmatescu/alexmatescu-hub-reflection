import { createFileRoute, notFound } from "@tanstack/react-router";
import { MarketDiscoveryRun } from "@/pages/MarketDiscovery";
import { alexMatescuPerson } from "@/components/Seo";
import { buildSeoHead } from "@/lib/seo-head";
import { findMdRunHead, MD_SURFACE_LABELS } from "@/data/market-discovery/meta";

const BASE = "https://delamatescu.ro";

// Rută statică pe segmentul `market-discovery`: are prioritate peste
// `$parent.$slug.tsx`. O rulare necunoscută întoarce 404 server-side.
export const Route = createFileRoute("/_site/lab/market-discovery/$run")({
  loader: ({ params }) => {
    if (!findMdRunHead(params.run)) throw notFound();
  },
  component: RouteComponent,
  head: ({ params }) => {
    const run = findMdRunHead(params.run);
    if (!run) return {};
    const url = `${BASE}${run.path}`;
    const dates = run.sessionDates;
    return buildSeoHead({
      title: `${run.seoTitle} | AI Visibility Lab`,
      description: run.description,
      canonical: url,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Dataset",
        name: run.title,
        alternateName: run.instanceId,
        description: run.description,
        url,
        inLanguage: "ro-RO",
        datePublished: run.datePublished,
        ...(dates.length
          ? {
              temporalCoverage:
                dates.length > 1 ? `${dates[0]}/${dates.at(-1)}` : dates[0],
            }
          : {}),
        spatialCoverage: { "@type": "Place", name: "România" },
        creator: alexMatescuPerson,
        isAccessibleForFree: true,
        isPartOf: {
          "@type": "CollectionPage",
          name: "Market Discovery — seria MKT-RO-AIV",
          url: `${BASE}/lab/market-discovery`,
        },
        measurementTechnique:
          "Capturi integrale ale rezultatelor pentru un set fix de întrebări, pe Google Search, Bing Search, Google AI Mode, ChatGPT, Claude, Gemini, Perplexity și Copilot; registru de observații și deduplicare pe reguli declarate (AVL-MKT-001).",
        variableMeasured: [
          "Entități candidate distincte pe întrebare și suprafață",
          "Entități exclusive pe întrebare și suprafață",
          ...Object.values(MD_SURFACE_LABELS).map(
            (s) => `Entități numite de ${s}`,
          ),
        ],
      },
    });
  },
});

function RouteComponent() {
  const { run } = Route.useParams();
  return <MarketDiscoveryRun slug={run} />;
}
