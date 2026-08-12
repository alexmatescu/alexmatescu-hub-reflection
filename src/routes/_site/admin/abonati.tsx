import { createFileRoute } from "@tanstack/react-router";
import AdminAbonati from "@/pages/AdminAbonati";

export const Route = createFileRoute("/_site/admin/abonati")({
  component: AdminAbonati,
});
