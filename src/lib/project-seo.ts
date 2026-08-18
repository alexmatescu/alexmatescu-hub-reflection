import { projects } from "@/data/projects";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

/**
 * Head SSR pentru /proiecte/:slug — sursă unică, folosită de head()-ul rutei
 * (@/routes/_site/proiecte/$slug.tsx); ProjectDetail.tsx păstrează <Seo> doar
 * pentru actualizarea client-side la navigare SPA. Întoarce `undefined` dacă
 * slug-ul nu are un proiect corespunzător.
 */
export const buildProjectHead = (slug: string) => {
  const project = projects.find((p) => p.slug === slug);
  if (!project) return undefined;

  return buildSeoHead({
    title: `${project.title} — Alex Matescu`,
    description: project.description,
    canonical: `${BASE}/proiecte/${project.slug}`,
  });
};
