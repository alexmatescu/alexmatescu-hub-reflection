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
        "Despre Alex Matescu — Inginer, antreprenor și autor",
      description:
        "„Cine este Alex Matescu: inginer în automotive, antreprenor, autor al CRANDIT și fondator și coordonator AI Visibility Lab, unde documentează cercetare aplicată în AI Visibility, GEO și AEO.",
      canonical: `${BASE}/despre`,
      // Suprascrie placeholder-ul generic din __root.tsx server-side, ca share-urile
      // pe social media să afișeze poza lui Alex Matescu, nu imaginea implicită a hub-ului.
      imageUrl: `${BASE}/images/AlexMatescu-profile-picture.jpg`,
      imageAlt: "Alex Matescu",
      // Person (alexMatescuPerson) e deja injectat global în __root.tsx pe
      // fiecare pagină — aici randăm doar ProfilePage-ul specific /despre,
      // referind Person-ul canonic prin @id ca să nu ducem la un al doilea
      // nod Person în graf.
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        "@id": `${BASE}/despre#profilepage`,
        url: `${BASE}/despre`,
        name: "Despre Alex Matescu",
        mainEntity: { "@id": alexMatescuPerson["@id"] },
      },
    }),
});
