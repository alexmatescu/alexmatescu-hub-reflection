import { createFileRoute } from "@tanstack/react-router";
import Calatoria from "@/pages/Calatoria";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/calatoria")({
  component: Calatoria,
  head: () =>
    buildSeoHead({
      title: "Călătoria lui Alex Matescu — De la Gorj la CRANDIT",
      description:
        "Povestea lui Alex Matescu, de la Strâmba Jiu și Gorj la Craiova, Timișoara, București și Sibiu, prin studii tehnice, inginerie, antreprenoriat, CRANDIT și AI Visibility Lab.",
      canonical: `${BASE}/calatoria`,
      imageUrl: `${BASE}/images/AlexMatescu-profile-picture.jpg`,
      imageAlt: "Alex Matescu",
    }),
});
