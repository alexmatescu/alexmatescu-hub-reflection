import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/despre")({
  component: About,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/despre` }],
    links: [{ rel: "canonical", href: `${BASE}/despre` }],
  }),
});
