import { createFileRoute } from "@tanstack/react-router";
import Home from "@/pages/Home";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/")({
  component: Home,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/` }],
    links: [{ rel: "canonical", href: `${BASE}/` }],
  }),
});
