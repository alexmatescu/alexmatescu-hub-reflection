import { createFileRoute, notFound } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail";
import { buildProjectHead } from "@/lib/project-seo";
import { projects } from "@/data/projects";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/proiecte/$slug")({
  // Un slug necunoscut întoarce 404 real, nu o pagină 200.
  loader: ({ params }) => {
    if (!projects.some((p) => p.slug === params.slug)) throw notFound();
  },
  component: ProjectDetail,
  head: ({ params }) =>
    buildProjectHead(params.slug) ?? {
      meta: [
        { property: "og:url", content: `${BASE}/proiecte/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `${BASE}/proiecte/${params.slug}` }],
    },
});
