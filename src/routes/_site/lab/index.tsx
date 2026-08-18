import { createFileRoute } from "@tanstack/react-router";
import { LabIndex } from "@/pages/Lab";
import { alexMatescuPerson } from "@/components/Seo";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/lab/")({
  component: LabIndex,
  head: () =>
    buildSeoHead({
      title: "AI Visibility Lab — GEO și AEO pentru branduri | Alex Matescu",
      description:
        "AI Visibility Lab este proiectul lui Alex Matescu despre GEO, AEO și vizibilitatea brandurilor în ChatGPT, Google AI Overviews și motoarele de căutare generative.",
      canonical: `${BASE}/lab`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: "AI Visibility Lab",
        description:
          "AI Visibility Lab este proiectul lui Alex Matescu despre GEO, AEO și vizibilitatea brandurilor în ChatGPT, Google AI Overviews și motoarele de căutare generative.",
        url: `${BASE}/lab`,
        creator: alexMatescuPerson,
        author: alexMatescuPerson,
      },
    }),
});
