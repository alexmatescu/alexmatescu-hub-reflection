import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";
import { buildBlogPostHead } from "@/lib/blog-seo";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/blog/$slug")({
  component: BlogPost,
  head: ({ params }) =>
    buildBlogPostHead(params.slug) ?? {
      meta: [{ property: "og:url", content: `${BASE}/blog/${params.slug}` }],
      links: [{ rel: "canonical", href: `${BASE}/blog/${params.slug}` }],
    },
});
