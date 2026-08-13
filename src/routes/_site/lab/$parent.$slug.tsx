import { createFileRoute } from "@tanstack/react-router";
import Lab from "@/pages/Lab";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/$parent/$slug")({
  component: Lab,
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
