import { createFileRoute } from "@tanstack/react-router";
import AdminAbonati from "@/pages/AdminAbonati";

export const Route = createFileRoute("/_site/admin/abonati")({
  component: AdminAbonati,
  // Pagină internă, protejată prin autentificare — nu se indexează.
  head: () => ({
    meta: [
      { title: "Admin — Abonați | Alex Matescu" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});
