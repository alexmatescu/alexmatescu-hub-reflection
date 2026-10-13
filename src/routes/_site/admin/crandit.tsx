import { createFileRoute } from "@tanstack/react-router";
import AdminCrandit from "@/pages/AdminCrandit";

export const Route = createFileRoute("/_site/admin/crandit")({
  component: AdminCrandit,
  // Pagină internă, protejată prin autentificare — nu se indexează.
  head: () => ({
    meta: [
      { title: "Admin — CRANDIT | Alex Matescu" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});
