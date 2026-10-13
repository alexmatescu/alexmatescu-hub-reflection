import { createFileRoute } from "@tanstack/react-router";
import AdminMesaje from "@/pages/AdminMesaje";

export const Route = createFileRoute("/_site/admin/mesaje")({
  component: AdminMesaje,
  // Pagină internă, protejată prin autentificare — nu se indexează.
  head: () => ({
    meta: [
      { title: "Admin — Mesaje | Alex Matescu" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});
