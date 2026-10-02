import { createFileRoute, notFound } from "@tanstack/react-router";
import { LabDetail } from "@/pages/Lab";
import { buildLabPageHead } from "@/data/lab-seo";
import { findLabPage } from "@/data/lab";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/$slug")({
  // Un slug necunoscut întoarce 404 real (server-side), nu o pagină 200 care
  // abia apoi redirecționează client-side spre /lab.
  loader: ({ params }) => {
    if (!findLabPage(`/lab/${params.slug}`)) throw notFound();
  },
  component: RouteComponent,
  head: ({ params }) =>
    buildLabPageHead(`/lab/${params.slug}`) ?? {
      meta: [{ property: "og:url", content: `${BASE}/lab/${params.slug}` }],
      links: [{ rel: "canonical", href: `${BASE}/lab/${params.slug}` }],
    },
});

// Derives the page from this route's own matched params (Route.useParams is
// scoped to state.matches) instead of the router's global location — location
// updates to the pending target as soon as a navigation *elsewhere* starts,
// before this route unmounts, which previously made LabDetail fall through to
// its "unknown page" guard and self-redirect back to /lab, hijacking the
// outgoing navigation. See git history for the incident this fixed.
function RouteComponent() {
  const { slug } = Route.useParams();
  return <LabDetail pathname={`/lab/${slug}`} />;
}
