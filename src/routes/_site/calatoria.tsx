import { createFileRoute } from "@tanstack/react-router";
import Calatoria from "@/pages/Calatoria";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/calatoria")({
  component: Calatoria,
  head: () => ({
    meta: [{ property: "og:url", content: `${BASE}/calatoria` }],
    links: [{ rel: "canonical", href: `${BASE}/calatoria` }],
  }),
});
