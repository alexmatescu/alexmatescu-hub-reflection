import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Seo, { alexMatescuPerson } from "@/components/Seo";
import { findLabPage, findLabParent } from "@/data/lab";
import { avl001IntroductionHtml } from "@/data/lab-content/avl-001";
import { avl101GeoAeoHtml } from "@/data/lab-content/avl-101";
import { avl102CumAlegHtml } from "@/data/lab-content/avl-102";
import { avl103SeoVsGeoHtml } from "@/data/lab-content/avl-103";
import { avl104MasurareHtml } from "@/data/lab-content/avl-104";
import { avl105GlosarHtml } from "@/data/lab-content/avl-105";

const labPageContent: Record<string, string> = {
  "/lab/introducere": avl001IntroductionHtml,
  "/lab/cercetare/ce-este-geo-aeo": avl101GeoAeoHtml,
  "/lab/cercetare/cum-aleg-motoarele-ai": avl102CumAlegHtml,
  "/lab/cercetare/seo-vs-geo": avl103SeoVsGeoHtml,
  "/lab/cercetare/cum-se-masoara-ai-visibility": avl104MasurareHtml,
  "/lab/cercetare/glosar-geo-aeo": avl105GlosarHtml,
};

const LabPage = () => {
  const location = useLocation();
  const page = findLabPage(location.pathname);

  if (!page) {
    return <Navigate to="/lab" replace />;
  }

  const parent = findLabParent(page.to);
  const content = labPageContent[page.to];

  return (
    <div>
      <Seo
        title={`${page.label} — AI Visibility Lab | Alex Matescu`}
        description={page.lead}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: page.label,
          description: page.lead,
          url: `https://delamatescu.ro${page.to}`,
          isPartOf: {
            "@type": "CreativeWork",
            name: "AI Visibility Lab",
            url: "https://delamatescu.ro/lab",
          },
          creator: alexMatescuPerson,
          author: alexMatescuPerson,
        }}
      />

      <section className="border-b border-foreground/10">
        <div className="container-editorial py-20 md:py-28 max-w-4xl">
          <Link
            to={parent ? parent.to : "/lab"}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            {parent ? parent.label : "AI Visibility Lab"}
          </Link>

          <p className="eyebrow mb-6">AI Visibility Lab{parent ? ` · ${parent.label}` : ""}</p>
          <h1 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-balance">
            {page.label}
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">{page.lead}</p>

          {content ? (
            <div
              className="prose-editorial mt-14 max-w-2xl"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <div className="mt-10 p-6 md:p-8 border border-dashed border-foreground/15 rounded-sm bg-surface/40">
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Pagină în lucru
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Conținutul acestei pagini urmează să fie completat. Reprezintă un cadru editorial
                pregătit pentru textul final.
              </p>
            </div>
          )}

          {page.children && (
            <div className="mt-16">
              <p className="eyebrow mb-6">În această secțiune</p>
              <ul className="grid gap-px bg-foreground/10 border border-foreground/10 sm:grid-cols-2">
                {page.children.map((child) => (
                  <li key={child.to} className="bg-background">
                    <Link
                      to={child.to}
                      className="group flex flex-col p-6 hover:bg-surface/60 transition-colors h-full"
                    >
                      <span className="font-serif text-lg leading-tight text-balance group-hover:text-foreground">
                        {child.label}
                      </span>
                      <span className="mt-2 text-sm text-muted-foreground leading-relaxed">
                        {child.lead}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default LabPage;
