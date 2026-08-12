import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/contact")({
  component: Contact,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/contact` }],
    links: [{ rel: "canonical", href: `${BASE}/contact` }],
  }),
});
