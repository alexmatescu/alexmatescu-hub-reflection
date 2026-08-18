import { createFileRoute } from "@tanstack/react-router";
import Book from "@/pages/Book";
import { alexMatescuPerson } from "@/components/Seo";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/carte")({
  component: Book,
  head: () =>
    buildSeoHead({
      title: "CRANDIT — Mitul succesului peste noapte | Alex Matescu",
      description:
        "CRANDIT — Mitul succesului peste noapte este cartea lui Alex Matescu despre succes durabil, scrisă din experiențe trăite, lecții teoretice și practice, disciplină, claritate și costuri asumate.",
      canonical: `${BASE}/carte`,
      jsonLd: {
        "@context": "https://schema.org",
        "@type": "Book",
        name: "CRANDIT — Mitul succesului peste noapte",
        description:
          "CRANDIT — Mitul succesului peste noapte este cartea lui Alex Matescu despre succes durabil, scrisă din experiențe trăite, lecții teoretice și practice, disciplină, claritate și costuri asumate.",
        url: `${BASE}/carte`,
        author: alexMatescuPerson,
      },
    }),
});
