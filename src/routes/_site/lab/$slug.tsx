import { createFileRoute } from "@tanstack/react-router";
import LabPage from "@/pages/LabPage";

export const Route = createFileRoute("/_site/lab/$slug")({
  component: LabPage,
});
