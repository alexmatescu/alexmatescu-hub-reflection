import { createFileRoute, notFound } from "@tanstack/react-router";
import { LabDetail } from "@/pages/Lab";
import {
  buildLabArticleHead,
  buildLabCaseStudyHead,
  buildLabPageHead,
} from "@/data/lab-seo";
import { findLabPage } from "@/data/lab";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/$parent/$slug")({
  // Vezi $slug.tsx: căutarea se face pe calea completă, deci și un slug valid
  // sub un părinte greșit (ex. /lab/cercetare/{slug-articol}) întoarce 404.
  loader: ({ params }) => {
    if (!findLabPage(`/lab/${params.parent}/${params.slug}`)) throw notFound();
  },
  component: RouteComponent,
  head: ({ params }) =>
    // Articolele din /lab/articole/:slug și studiile de caz din
    // /lab/studii-de-caz/:slug au meta dedicată (title, description,
    // OG/Twitter, JSON-LD Article+FAQPage) randată aici server-side. Restul
    // paginilor /lab/:parent/:slug (ex. /lab/cercetare/*, /lab/metodologie/*)
    // cad pe head-ul generic de pagină Lab (CreativeWork), și doar dacă nici
    // acela nu găsește pagina, pe fallback-ul minim (og:url + canonical).
    buildLabArticleHead(params.slug) ??
    buildLabCaseStudyHead(params.slug) ??
    buildLabPageHead(`/lab/${params.parent}/${params.slug}`) ?? {
      meta: [
        {
          property: "og:url",
          content: `${BASE}/lab/${params.parent}/${params.slug}`,
        },
      ],
      links: [
        {
          rel: "canonical",
          href: `${BASE}/lab/${params.parent}/${params.slug}`,
        },
      ],
    },
});

// See $slug.tsx for why this reads Route.useParams() (match-scoped) instead
// of the global location.
function RouteComponent() {
  const { parent, slug } = Route.useParams();
  return <LabDetail pathname={`/lab/${parent}/${slug}`} />;
}
