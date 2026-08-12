import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/blog/")({
  component: Blog,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/blog` }],
    links: [{ rel: "canonical", href: `${BASE}/blog` }],
  }),
});
