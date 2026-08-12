import { createFileRoute } from "@tanstack/react-router";
import AdminMesaje from "@/pages/AdminMesaje";

export const Route = createFileRoute("/_site/admin/mesaje")({
  component: AdminMesaje,
});
