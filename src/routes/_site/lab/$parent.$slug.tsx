import { createFileRoute } from "@tanstack/react-router";
import { LabDetail } from "@/pages/Lab";
import { buildLabArticleHead } from "@/data/lab-seo";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/$parent/$slug")({
  component: RouteComponent,
  head: ({ params }) =>
    // Articolele din /lab/articole/:slug au meta dedicată (title, description,
    // OG/Twitter, JSON-LD Article+FAQPage) randată aici server-side. Restul
    // paginilor /lab/:parent/:slug cad pe fallback-ul generic (og:url + canonical).
    buildLabArticleHead(params.slug) ?? {
      meta: [
        {
          property: "og:url",
          content: `${BASE}/lab/${params.parent}/${params.slug}`,
        },
      ],
      links: [
        { rel: "canonical", href: `${BASE}/lab/${params.parent}/${params.slug}` },
      ],
    },
});

// See $slug.tsx for why this reads Route.useParams() (match-scoped) instead
// of the global location.
function RouteComponent() {
  const { parent, slug } = Route.useParams();
  return <LabDetail pathname={`/lab/${parent}/${slug}`} />;
}
