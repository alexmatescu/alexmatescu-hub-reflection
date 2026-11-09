/**
 * Entitățile proiectelor lui Alex Matescu, cu `@id` stabil, într-un singur loc.
 * Person (`alexMatescuPerson`) și WebSite rămân în `@/components/Seo`, iar
 * AI Visibility Lab (`labOrganization`) în `@/data/lab-seo`. Orice pagină care
 * vorbește despre unul dintre proiecte trimite la `@id`-ul de aici, nu
 * construiește un nod nou, ca relațiile Person → proiect să aibă o singură formă.
 */
import { alexMatescuPerson } from "@/components/Seo";
import { labOrganization } from "@/data/lab-seo";

const BASE = "https://delamatescu.ro";

/** Cartea CRANDIT — pagina canonică e /carte; proiectul e descris la /proiecte/crandit. */
export const cranditBook = {
  "@type": "Book",
  "@id": `${BASE}/carte#book`,
  name: "CRANDIT — Mitul succesului peste noapte",
  url: `${BASE}/carte`,
  inLanguage: "ro-RO",
  author: { "@id": alexMatescuPerson["@id"] },
  description:
    "CRANDIT — Mitul succesului peste noapte este cartea lui Alex Matescu despre succes durabil, scrisă din experiențe trăite, lecții teoretice și practice, disciplină, claritate și costuri asumate.",
} as const;

/** Taste the Corn — afacere fondată de Alex Matescu (iulie 2025, Shopping City Sibiu). */
export const tasteTheCornOrganization = {
  "@type": "Organization",
  "@id": `${BASE}/proiecte#taste-the-corn`,
  name: "Taste the Corn",
  foundingDate: "2025-07",
  founder: { "@id": alexMatescuPerson["@id"] },
  location: "Shopping City Sibiu",
} as const;

/**
 * Proiect (slug din `@/data/projects`) → entitatea lui, dacă are una proprie.
 * Proiectele fără entitate (experiențe profesionale, blogging) nu primesc nod.
 */
export const projectEntities: Record<
  string,
  { "@id": string; [k: string]: unknown }
> = {
  crandit: cranditBook,
  "taste-the-corn": tasteTheCornOrganization,
  "geo-ai-visibility": labOrganization,
};
