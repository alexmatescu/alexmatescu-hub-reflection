import { createFileRoute } from "@tanstack/react-router";
import Projects from "@/pages/Projects";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/proiecte/")({
  component: Projects,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/proiecte` }],
    links: [{ rel: "canonical", href: `${BASE}/proiecte` }],
  }),
});
