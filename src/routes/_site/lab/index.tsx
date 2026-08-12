import { createFileRoute } from "@tanstack/react-router";
import Lab from "@/pages/Lab";

export const Route = createFileRoute("/_site/lab/")({
  component: Lab,
});
