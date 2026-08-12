import { createFileRoute } from "@tanstack/react-router";
import Lab from "@/pages/Lab";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/")({
  component: Lab,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/lab` }],
    links: [{ rel: "canonical", href: `${BASE}/lab` }],
  }),
});
