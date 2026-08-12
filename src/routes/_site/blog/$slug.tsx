import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/blog/$slug")({
  component: BlogPost,
  head: ({ params }) => ({
    meta: [{ property: "og:url", content: `${BASE}/blog/${params.slug}` }],
    links: [{ rel: "canonical", href: `${BASE}/blog/${params.slug}` }],
  }),
});
