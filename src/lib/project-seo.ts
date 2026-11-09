import { projects } from "@/data/projects";
import { alexMatescuPerson, alexMatescuWebSite } from "@/components/Seo";
import { projectEntities } from "@/lib/entities";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

/**
 * Head SSR pentru /proiecte/:slug — sursă unică, folosită de head()-ul rutei
 * (@/routes/_site/proiecte/$slug.tsx); ProjectDetail.tsx păstrează <Seo> doar
 * pentru actualizarea client-side la navigare SPA. Întoarce `undefined` dacă
 * slug-ul nu are un proiect corespunzător.
 *
 * JSON-LD: Person și WebSite (aceleași `@id` ca pe tot site-ul), WebPage-ul
 * proiectului, entitatea proiectului din `@/lib/entities` (carte, firmă,
 * laborator), dacă are una, și BreadcrumbList Acasă → Proiecte → proiect.
 */
export const buildProjectHead = (slug: string) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return undefined;
  const url = `${BASE}/proiecte/${project.slug}`;
  const entity = projectEntities[project.slug];

  return buildSeoHead({
    title: `${project.title} — Alex Matescu`,
    description: project.description,
    canonical: url,
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        alexMatescuPerson,
        alexMatescuWebSite,
        {
          "@type": "WebPage",
          "@id": `${url}#webpage`,
          url,
          name: project.title,
          description: project.description,
          inLanguage: "ro-RO",
          isPartOf: { "@id": alexMatescuWebSite["@id"] },
          author: { "@id": alexMatescuPerson["@id"] },
          about: entity
            ? [{ "@id": entity["@id"] }, { "@id": alexMatescuPerson["@id"] }]
            : { "@id": alexMatescuPerson["@id"] },
          breadcrumb: { "@id": `${url}#breadcrumb` },
        },
        ...(entity ? [entity] : []),
        {
          "@type": "BreadcrumbList",
          "@id": `${url}#breadcrumb`,
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Acasă",
              item: `${BASE}/`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Proiecte",
              item: `${BASE}/proiecte`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: project.title,
              item: url,
            },
          ],
        },
      ],
    },
  });
};
