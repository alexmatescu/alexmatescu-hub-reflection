import { createFileRoute } from "@tanstack/react-router";
import AdminCrandit from "@/pages/AdminCrandit";

export const Route = createFileRoute("/_site/admin/crandit")({
  component: AdminCrandit,
});
