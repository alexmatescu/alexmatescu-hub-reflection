import { createFileRoute } from "@tanstack/react-router";
import Projects from "@/pages/Projects";

export const Route = createFileRoute("/_site/proiecte/")({
  component: Projects,
});
