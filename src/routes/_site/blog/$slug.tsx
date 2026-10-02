import { createFileRoute, notFound } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";
import { buildBlogPostHead } from "@/lib/blog-seo";
import { posts } from "@/data/posts";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/blog/$slug")({
  // Un slug necunoscut întoarce 404 real, nu o pagină 200 „Articolul nu există”.
  loader: ({ params }) => {
    if (!posts.some((p) => p.slug === params.slug)) throw notFound();
  },
  component: BlogPost,
  head: ({ params }) =>
    buildBlogPostHead(params.slug) ?? {
      meta: [{ property: "og:url", content: `${BASE}/blog/${params.slug}` }],
      links: [{ rel: "canonical", href: `${BASE}/blog/${params.slug}` }],
    },
});
