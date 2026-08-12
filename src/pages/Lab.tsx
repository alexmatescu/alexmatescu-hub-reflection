import { Link } from "@/lib/router-compat";
import Seo, { alexMatescuPerson } from "@/components/Seo";
import { labNav } from "@/data/lab";

const heroImage = "/images/blog/ai-visibility-hero.webp";

const Lab = () => {
  return (
    <div>
      <Seo
        title="AI Visibility Lab — GEO și AEO pentru branduri | Alex Matescu"
        description="AI Visibility Lab este proiectul lui Alex Matescu despre GEO, AEO și vizibilitatea brandurilor în ChatGPT, Google AI Overviews și motoarele de căutare generative."
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: "AI Visibility Lab",
          description:
            "AI Visibility Lab este proiectul lui Alex Matescu despre GEO, AEO și vizibilitatea brandurilor în ChatGPT, Google AI Overviews și motoarele de căutare generative.",
          url: "https://delamatescu.ro/lab",
          creator: alexMatescuPerson,
          author: alexMatescuPerson,
        }}
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
};

export default Lab;
