import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/despre")({
  component: About,
  head: () => ({
    meta: [
      { property: "og:url", content: `${BASE}/despre` },
      // Suprascrie placeholder-ul generic din __root.tsx server-side, ca share-urile
      // pe social media să afișeze poza lui Alex Matescu, nu imaginea implicită a hub-ului.
      { property: "og:image", content: `${BASE}/images/AlexMatescu-profile-picture.jpg` },
      { name: "twitter:image", content: `${BASE}/images/AlexMatescu-profile-picture.jpg` },
      { property: "og:image:alt", content: "Alex Matescu" },
    ],
    links: [{ rel: "canonical", href: `${BASE}/despre` }],
  }),
});
