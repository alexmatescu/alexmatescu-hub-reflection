import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";
import { alexMatescuPerson } from "@/components/Seo";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/despre")({
  component: About,
  head: () =>
    buildSeoHead({
      title:
        "Despre Alex Matescu — Inginer, antreprenor, fondator și coordonator AI Visibility Lab și autor",
      description:
        "Cine este Alex Matescu: inginer în automotive, antreprenor, fondator și coordonator AI Visibility Lab și autor al CRANDIT — creator de conținut despre muncă, tehnologie și sens.",
      canonical: `${BASE}/despre`,
      // Suprascrie placeholder-ul generic din __root.tsx server-side, ca share-urile
      // pe social media să afișeze poza lui Alex Matescu, nu imaginea implicită a hub-ului.
      imageUrl: `${BASE}/images/AlexMatescu-profile-picture.jpg`,
      imageAlt: "Alex Matescu",
      jsonLd: { "@context": "https://schema.org", ...alexMatescuPerson },
    }),
});
