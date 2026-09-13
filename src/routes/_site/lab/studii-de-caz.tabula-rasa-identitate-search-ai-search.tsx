import { createFileRoute, redirect } from "@tanstack/react-router";

// Slug vechi al primului studiu de caz (CS-001), înlocuit 2026-09-07 cu
// `tabula-rasa-entity-resolution-studiu-de-caz` (actualizare tehnică de
// metadate — canonical/slug). Rută statică, are prioritate peste ruta
// dinamică `$parent.$slug.tsx`, ca vechiul URL să nu cadă pe fallback-ul
// generic "pagină necunoscută" al LabDetail (redirect spre /lab) și să
// păstreze în schimb orice link extern/indexare spre articolul corect.
export const Route = createFileRoute(
  "/_site/lab/studii-de-caz/tabula-rasa-identitate-search-ai-search",
)({
  beforeLoad: () => {
    throw redirect({
      to: "/lab/$parent/$slug",
      params: {
        parent: "studii-de-caz",
        slug: "tabula-rasa-entity-resolution-studiu-de-caz",
      },
      replace: true,
      statusCode: 301,
    });
  },
});
