import { Link } from "@/lib/router-compat";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import Seo from "@/components/Seo";

const tasteTheCornLogo = "/images/blog/taste-the-corn-logo.webp";
const ovbLogo = "/images/blog/ovb-logo.webp";

const statusTone: Record<string, string> = {
  "activ": "text-emerald-800 bg-emerald-100/60",
  "în lucru": "text-amber-900 bg-amber-100/60",
  "închis": "text-stone-700 bg-stone-200/70",
  "finalizat": "text-stone-700 bg-stone-200/70",
  "concept": "text-foreground/70 bg-foreground/5",
};

const Projects = () => {
  return (
    <>
      <Seo
        title="Proiecte — Alex Matescu"
        description="Portofoliul lui Alex Matescu: CRANDIT, AI Visibility Lab, afaceri de familie și experimente antreprenoriale, active sau închise, construite în timp."
      />

      <section className="container-editorial pt-20 md:pt-32 pb-12">
        <p className="eyebrow mb-8">Proiecte</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl">
          Ce construiesc, ce testez, ce las să se așeze.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Un portofoliu viu: cărți, experimente antreprenoriale, direcții de lucru. Unele sunt active, altele s-au închis, câteva sunt încă în formare.
        </p>
      </section>

      <section className="container-editorial pb-24">
        <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link
                to={`/proiecte/${p.slug}`}
                className="group grid md:grid-cols-12 gap-6 py-12 md:py-16 items-start hover:bg-surface/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
              >
                <div className="md:col-span-2 text-xs text-muted-foreground tabular-nums">
                  0{i + 1}
                </div>
                <div className="md:col-span-7">
                  {(p.slug === "taste-the-corn" || p.slug === "ovb") && (
                    <div className="w-20 h-20 rounded-2xl overflow-hidden border border-foreground/10 shadow-xs bg-white mb-6">
                      <img
                        src={p.slug === "ovb" ? ovbLogo : tasteTheCornLogo}
                        alt={`Logo ${p.title}${p.slug === "taste-the-corn" ? " — N-ai cum să-i spui nu" : ""}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <h2 className="font-serif text-3xl md:text-5xl leading-tight tracking-tight text-balance group-hover:text-primary transition-colors">
                    {p.title}
                  </h2>
                  <p className="mt-2 font-serif italic text-lg text-muted-foreground">{p.tagline}</p>
                  <p className="mt-5 text-muted-foreground max-w-xl">{p.description}</p>
                </div>
                <div className="md:col-span-3 flex flex-col items-start md:items-end gap-4">
                  <span className={`text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${statusTone[p.status]}`}>
                    {p.status}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm">
                    Vezi proiectul
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Projects;
