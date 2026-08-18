import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/contact")({
  component: Contact,
  head: () =>
    buildSeoHead({
      title: "Contact — Alex Matescu",
      description:
        "Scrie-i lui Alex Matescu pentru colaborări, media sau proiecte.",
      canonical: `${BASE}/contact`,
      imageUrl: `${BASE}/images/AlexMatescu-profile-picture.jpg`,
      imageAlt: "Alex Matescu",
    }),
});
