import { createFileRoute } from "@tanstack/react-router";
import Book from "@/pages/Book";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/carte")({
  component: Book,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/carte` }],
    links: [{ rel: "canonical", href: `${BASE}/carte` }],
  }),
});
