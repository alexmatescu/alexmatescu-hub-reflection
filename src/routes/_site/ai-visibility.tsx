import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/ai-visibility")({
  beforeLoad: () => {
    throw redirect({ to: "/lab", replace: true });
  },
});
