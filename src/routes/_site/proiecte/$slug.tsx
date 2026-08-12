import { createFileRoute } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/proiecte/$slug")({
  component: ProjectDetail,
  head: ({ params }) => ({
    meta: [{ property: "og:url", content: `${BASE}/proiecte/${params.slug}` }],
    links: [{ rel: "canonical", href: `${BASE}/proiecte/${params.slug}` }],
  }),
});
