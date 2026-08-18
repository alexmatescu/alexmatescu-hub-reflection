import { Link, Navigate } from "@/lib/router-compat";
import { ArrowLeft } from "lucide-react";
import Seo from "@/components/Seo";
import { findLabPage, findLabParent, labNav } from "@/data/lab";
import { buildArticleJsonLd, labArticleMeta } from "@/data/lab-seo";
import { avl001IntroductionHtml } from "@/data/lab-content/avl-001";
import { avl101GeoAeoHtml } from "@/data/lab-content/avl-101";
import { avl102CumAlegHtml } from "@/data/lab-content/avl-102";
import { avl103SeoVsGeoHtml } from "@/data/lab-content/avl-103";
import { avl104MasurareHtml } from "@/data/lab-content/avl-104";
import { avl105GlosarHtml } from "@/data/lab-content/avl-105";
import { avl201TabulaRasaF0Html } from "@/data/lab-content/avl-201";
import { avl301ExperimentePubliceHtml } from "@/data/lab-content/avl-301";
import { avl401ArticoleHtml } from "@/data/lab-content/avl-401";
import { avl501DespreLaboratorHtml } from "@/data/lab-content/avl-501";
import { auditSiteFaraAccesCodHtml } from "@/data/lab-content/audit-site-fara-acces-cod";
import { catDureazaIndexareCitareAiHtml } from "@/data/lab-content/cat-dureaza-indexare-citare-ai";
import { istoriaCautariiHtml } from "@/data/lab-content/istoria-cautarii-internet-evolutia-seo";
import { metadataCitareAiStudiuDeCazHtml } from "@/data/lab-content/metadata-citare-ai-studiu-de-caz";
import { motoareCautareHtml } from "@/data/lab-content/motoare-cautare-comparatie-2026";
import { paradoxulSiteuluiTerminatHtml } from "@/data/lab-content/paradoxul-site-ului-terminat";
import { socialMediaVizibilitateAiHtml } from "@/data/lab-content/social-media-vizibilitate-ai";

const heroImage = "/images/blog/ai-visibility-hero.webp";

const labPageContent: Record<string, string> = {
  "/lab/introducere": avl001IntroductionHtml,
  "/lab/cercetare/ce-este-geo-aeo": avl101GeoAeoHtml,
  "/lab/cercetare/cum-aleg-motoarele-ai": avl102CumAlegHtml,
  "/lab/cercetare/seo-vs-geo": avl103SeoVsGeoHtml,
  "/lab/cercetare/cum-se-masoara-ai-visibility": avl104MasurareHtml,
  "/lab/cercetare/glosar-geo-aeo": avl105GlosarHtml,
  "/lab/metodologie/tabula-rasa-f0": avl201TabulaRasaF0Html,
  "/lab/experimente-publice": avl301ExperimentePubliceHtml,
  "/lab/articole": avl401ArticoleHtml,
  "/lab/articole/istoria-cautarii-internet-evolutia-seo": istoriaCautariiHtml,
  "/lab/articole/motoare-cautare-comparatie-2026": motoareCautareHtml,
  "/lab/articole/social-media-vizibilitate-ai": socialMediaVizibilitateAiHtml,
  "/lab/articole/cat-dureaza-indexare-citare-ai": catDureazaIndexareCitareAiHtml,
  "/lab/articole/paradoxul-site-ului-terminat": paradoxulSiteuluiTerminatHtml,
  "/lab/articole/metadata-citare-ai-studiu-de-caz": metadataCitareAiStudiuDeCazHtml,
  "/lab/articole/audit-site-fara-acces-cod": auditSiteFaraAccesCodHtml,
  "/lab/despre-laborator": avl501DespreLaboratorHtml,
};

/**
 * JSON-LD per articol, derivat din aceeași sursă (@/data/lab-seo) folosită și de
 * head()-ul server-side al rutei /lab/articole/$slug — o singură definiție, ca
 * structured data-ul din HTML-ul inițial și cel injectat client-side la hidratare
 * să nu diveargă niciodată. Valorile nu sunt randate direct de aici (doar cheile,
 * via `in`, mai jos) — forma exactă (array legacy vs @graph) diferă pe articol.
 */
const labPageJsonLdOverrides: Record<string, unknown> = Object.fromEntries(
  labArticleMeta.map((meta) => [new URL(meta.canonical).pathname, buildArticleJsonLd(meta)]),
);

export const LabIndex = () => (
  <div>
    <Seo
      title="AI Visibility Lab — GEO și AEO pentru branduri | Alex Matescu"
      description="AI Visibility Lab este proiectul lui Alex Matescu despre GEO, AEO și vizibilitatea brandurilor în ChatGPT, Google AI Overviews și motoarele de căutare generative."
      // JSON-LD e deja randat server-side de head()-ul rutei (@/routes/_site/lab/index.tsx),
      // ca să fie vizibil și pentru crawlere fără JS — nu-l mai duplicăm aici.
    />

    <section className="relative border-b border-foreground/10 bg-[#0b0f0e] text-[#e8e0cf] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="AI Visibility Lab — ochiul care vede și este văzut de modelele generative"
          className="w-full h-full object-cover object-right opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f0e] via-[#0b0f0e]/85 to-transparent" />
      </div>
      <div className="relative container-editorial py-24 md:py-36 max-w-4xl">
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-[#f0e8d6]">
          AI Visibility Lab
        </h1>
        <p className="mt-6 text-xs uppercase tracking-[0.28em] text-[#c9b98a]">
          Fi văzut. Fi înțeles. Fi citat.
        </p>
        <p className="mt-8 text-lg md:text-xl text-[#e8e0cf]/80 leading-relaxed max-w-2xl">
          Un spațiu de lucru dedicat GEO și AEO — cercetare, metodologie, experimente publice, articole
          și audit pentru cei care vor să fie găsiți, citați și recomandați de ChatGPT, Gemini,
          Perplexity, Claude și Copilot.
        </p>
      </div>
    </section>

    <section className="container-editorial py-16 md:py-24">
      <div className="grid gap-px bg-foreground/10 border border-foreground/10 sm:grid-cols-2">
        {labNav.map((item, i) => (
          <Link
            key={item.to}
            to={item.to}
            className="group bg-background p-8 md:p-10 flex flex-col hover:bg-surface/60 transition-colors"
          >
            <p className="eyebrow mb-4">{String(i + 1).padStart(2, "0")}</p>
            <h2 className="font-serif text-2xl leading-tight tracking-tight text-balance group-hover:text-foreground">
              {item.label}
            </h2>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.lead}</p>
            {item.children && (
              <ul className="mt-6 space-y-2 border-t border-foreground/10 pt-4">
                {item.children.map((child) => (
                  <li key={child.to} className="text-sm text-muted-foreground/80">
                    {child.label}
                  </li>
                ))}
              </ul>
            )}
          </Link>
        ))}
      </div>
    </section>
  </div>
);

export const LabDetail = ({ pathname }: { pathname: string }) => {
  const page = findLabPage(pathname);

  if (!page) {
    return <Navigate to="/lab" replace />;
  }

  const parent = findLabParent(page.to);
  const content = labPageContent[page.to];
  const isArticle = page.to in labPageJsonLdOverrides;

  return (
    <div>
      {/*
        Titlu/descriere/OG rămân utile pentru actualizarea client-side la
        navigare SPA. JSON-LD (Article+FAQPage pentru articole, CreativeWork
        pentru restul paginilor /lab) e deja randat server-side de head()-ul
        rutei (@/data/lab-seo: buildLabArticleHead / buildLabPageHead), deci
        nu-l mai duplicăm aici.
      */}
      <Seo
        title={`${page.seoTitle ?? page.label} — AI Visibility Lab | Alex Matescu`}
        description={page.lead}
        {...(isArticle ? { ogType: "article" } : {})}
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
            {page.pageTitle ?? page.label}
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
