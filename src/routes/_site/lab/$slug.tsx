import { createFileRoute } from "@tanstack/react-router";
import LabPage from "@/pages/LabPage";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/$slug")({
  component: LabPage,
  head: ({ params }) => ({
    meta: [{ property: "og:url", content: `${BASE}/lab/${params.slug}` }],
    links: [{ rel: "canonical", href: `${BASE}/lab/${params.slug}` }],
  }),
});
