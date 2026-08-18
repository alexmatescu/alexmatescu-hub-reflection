import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/blog/")({
  component: Blog,
  head: () =>
    buildSeoHead({
      title: "Blog — Alex Matescu",
      description:
        "Articole de Alex Matescu despre claritate, disciplină, muncă, succes, tehnologie și antreprenoriat, scrise rar și deliberat.",
      canonical: `${BASE}/blog`,
    }),
});
