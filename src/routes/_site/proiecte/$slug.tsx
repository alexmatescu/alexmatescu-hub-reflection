import { createFileRoute } from "@tanstack/react-router";
import ProjectDetail from "@/pages/ProjectDetail";

export const Route = createFileRoute("/_site/proiecte/$slug")({
  component: ProjectDetail,
});
