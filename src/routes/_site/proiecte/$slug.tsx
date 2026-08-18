import { createFileRoute } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail";
import { buildProjectHead } from "@/lib/project-seo";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/proiecte/$slug")({
  component: ProjectDetail,
  head: ({ params }) =>
    buildProjectHead(params.slug) ?? {
      meta: [
        { property: "og:url", content: `${BASE}/proiecte/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${BASE}/proiecte/${params.slug}` }],
    },
});
