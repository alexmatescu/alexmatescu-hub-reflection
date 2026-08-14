import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_site/proiecte/geo-ai-visibility")({
  beforeLoad: () => {
    throw redirect({
      to: "/lab/$slug",
      params: { slug: "introducere" },
      replace: true,
      statusCode: 301,
    });
  },
});
