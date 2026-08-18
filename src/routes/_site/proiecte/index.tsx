import { createFileRoute } from "@tanstack/react-router";
import Projects from "@/pages/Projects";
import { buildSeoHead } from "@/lib/seo-head";

const BASE = "https://delamatescu.ro";

export const Route = createFileRoute("/_site/proiecte/")({
  component: Projects,
  head: () =>
    buildSeoHead({
      title: "Proiecte — Alex Matescu",
      description:
        "Portofoliul lui Alex Matescu: CRANDIT, AI Visibility Lab, afaceri de familie și experimente antreprenoriale, active sau închise, construite în timp.",
      canonical: `${BASE}/proiecte`,
    }),
});
