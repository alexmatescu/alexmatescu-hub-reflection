import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import heroImage from "@/assets/ai-visibility-hero.png.asset.json";

const sections = [
  {
    id: "ce-este",
    eyebrow: "01",
    title: "Ce este AI Visibility",
    lead: "Cum devii vizibil, citat și recomandat de modelele generative — ChatGPT, Gemini, Perplexity, Claude, Copilot.",
  },
  {
    id: "metodologie",
    eyebrow: "02",
    title: "Metodologie GEO/AEO",
    lead: "Cadru de lucru pentru Generative Engine Optimization și Answer Engine Optimization: entități, surse, structură, autoritate.",
  },
  {
    id: "audit",
    eyebrow: "03",
    title: "Audit AI Visibility",
    lead: "Evaluare a prezenței tale în răspunsurile modelelor generative: ce spun despre tine, ce lipsește, ce trebuie corectat.",
  },
  {
    id: "studii-de-caz",
    eyebrow: "04",
    title: "Studii de caz",
    lead: "Exemple concrete de proiecte optimizate pentru vizibilitate în AI — cu date, ipoteze, intervenții și rezultate.",
  },
  {
    id: "resurse",
    eyebrow: "05",
    title: "Resurse",
    lead: "Ghiduri, articole, checklists și instrumente pentru cei care vor să înțeleagă și să aplice GEO/AEO.",
  },
];

const AiVisibility = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.slice(1));
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    }
  }, [location.hash, location.key]);

  return (
    <div>
      <section className="relative border-b border-foreground/10 bg-[#0b0f0e] text-[#e8e0cf] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage.url}
            alt="AI Visibility Lab — ochiul care vede și este văzut de modelele generative"
            className="w-full h-full object-cover object-right opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f0e] via-[#0b0f0e]/85 to-transparent" />
        </div>
        <div className="relative container-editorial py-24 md:py-36 max-w-4xl">
          <p className="text-xs uppercase tracking-[0.28em] text-[#c9b98a] mb-6">AI Visibility Lab</p>
          <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-[#f0e8d6]">
            Fi văzut. Fi înțeles. Fi citat.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-[#e8e0cf]/80 leading-relaxed max-w-2xl">
            Un spațiu de lucru dedicat GEO și AEO — metodologie, audit, studii de caz și resurse pentru cei
            care vor să fie găsiți, citați și recomandați de ChatGPT, Gemini, Perplexity, Claude și Copilot.
          </p>
        </div>
      </section>

      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="border-b border-foreground/10 scroll-mt-24"
        >
          <div className="container-editorial py-20 md:py-28 max-w-4xl">
            <p className="eyebrow mb-6">{s.eyebrow}</p>
            <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-balance">
              {s.title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              {s.lead}
            </p>
            <div className="mt-10 p-6 md:p-8 border border-dashed border-foreground/15 rounded-sm bg-surface/40">
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground mb-3">
                Secțiune în lucru
              </p>
              <p className="text-base text-foreground/80 leading-relaxed">
                Conținutul acestei secțiuni urmează să fie completat. Reprezintă un cadru editorial
                pregătit pentru textul final.
              </p>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default AiVisibility;
