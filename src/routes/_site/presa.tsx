import { createFileRoute } from "@tanstack/react-router";
import Press from "@/pages/Press";
import { buildPresaHead } from "@/lib/presa";

export const Route = createFileRoute("/_site/presa")({
  component: Press,
  head: () => buildPresaHead(),
});
