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
 * Ichnometria — servicii GEO, AEO și AI Visibility, fondată de Alex Matescu.
 * Folosește `@id`-ul declarat chiar pe ichnometria.ro, ca cele două site-uri să
 * descrie aceeași entitate. Relația cu AI Visibility Lab: laboratorul e mediul
 * de cercetare, Ichnometria e metodologia aplicată și sistemul comercial;
 * sunt entități distincte (ichnometria.ro, secțiunea „Proveniența cercetării”).
 */
export const ichnometriaOrganization = {
  "@type": "ProfessionalService",
  "@id": "https://ichnometria.ro/#organization",
  name: "Ichnometria",
  url: "https://ichnometria.ro/",
  logo: `${BASE}/images/proiecte/ichnometria-logo.webp`,
  description:
    "Furnizor de servicii GEO (Generative Engine Optimization), AEO (Answer Engine Optimization) și AI Visibility din Sibiu, România. Măsurare, cartografiere, intervenții bazate pe dovezi și monitorizare informațională.",
  founder: { "@id": alexMatescuPerson["@id"] },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sibiu",
    addressCountry: "RO",
  },
  areaServed: [
    { "@type": "City", name: "Sibiu" },
    { "@type": "Country", name: "România" },
  ],
  sameAs: ["https://ichnometria.ro/"],
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
  ichnometria: ichnometriaOrganization,
};
