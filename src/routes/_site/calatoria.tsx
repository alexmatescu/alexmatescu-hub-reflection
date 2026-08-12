import { createFileRoute } from "@tanstack/react-router";
import Calatoria from "@/pages/Calatoria";

export const Route = createFileRoute("/_site/calatoria")({
  component: Calatoria,
});
