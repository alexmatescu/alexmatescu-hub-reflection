import { createFileRoute } from "@tanstack/react-router";
import { LabDetail } from "@/pages/Lab";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/$parent/$slug")({
  component: RouteComponent,
  head: ({ params }) => ({
    meta: [
      {
        property: "og:url",
        content: `${BASE}/lab/${params.parent}/${params.slug}`,
      },
    ],
    links: [
      { rel: "canonical", href: `${BASE}/lab/${params.parent}/${params.slug}` },
    ],
  }),
});

// See $slug.tsx for why this reads Route.useParams() (match-scoped) instead
// of the global location.
function RouteComponent() {
  const { parent, slug } = Route.useParams();
  return <LabDetail pathname={`/lab/${parent}/${slug}`} />;
}
