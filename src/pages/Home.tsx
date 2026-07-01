import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import cranditCover from "@/assets/crandit-cover.png.asset.json";
import tasteTheCornLogo from "@/assets/taste-the-corn-logo.png.asset.json";
import ovbLogo from "@/assets/ovb-logo.png.asset.json";
import { posts } from "@/data/posts";
import { projects } from "@/data/projects";

const statusTone: Record<string, string> = {
  "activ": "text-emerald-800 bg-emerald-100/60",
  "în lucru": "text-amber-900 bg-amber-100/60",
  "închis": "text-stone-700 bg-stone-200/70",
  "concept": "text-foreground/70 bg-foreground/5",
};

const Home = () => {
  const latest = posts.slice(0, 3);
  const crandit = projects.find((p) => p.slug === "crandit")!;

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-grain opacity-70 pointer-events-none" />
        <div className="container-editorial relative pt-20 md:pt-32 pb-20 md:pb-32">
          <div className="grid md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-8">
              <p className="eyebrow mb-8 animate-fade-in">Alex Matescu — hub personal</p>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[64px] leading-[1.05] tracking-tight text-balance animate-fade-up">
                Construiesc idei, proiecte și texte despre{" "}
                <em className="not-italic text-primary">claritate, disciplină, muncă</em> și sens.
              </h1>
              <p className="mt-8 md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up [animation-delay:120ms]">
                Un hub personal pentru scris, reflecții, proiecte antreprenoriale și direcția în care încerc să leg munca, tehnologia și omul.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 animate-fade-up [animation-delay:220ms]">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  Citește blogul <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/proiecte"
                  className="inline-flex items-center gap-2 h-12 px-6 border border-foreground/20 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
                >
                  Vezi proiectele
                </Link>
                <Link
                  to="/despre"
                  className="inline-flex items-center gap-2 h-12 px-6 text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                >
                  Despre mine <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="md:col-span-4 md:pl-8 md:border-l border-foreground/10 animate-fade-up [animation-delay:300ms]">
              <p className="font-serif italic text-xl leading-snug text-foreground/80">
                „Nu pretind răspunsuri finale. Documentez procesul de a deveni mai clar, mai disciplinat și mai onest cu realitatea.”
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">— A.M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SHORT INTRO */}
      <section className="border-y border-foreground/10 bg-surface/60">
        <div className="container-editorial py-16 md:py-20 grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <p className="eyebrow">Pe scurt</p>
          </div>
          <div className="md:col-span-8">
            <p className="font-serif text-2xl md:text-3xl leading-relaxed text-balance">
              Sunt Alex Matescu: inginer prin formație, scriitor prin practică, antreprenor prin experiment. Construiesc proiecte personale precum cartea CRANDIT, Taste the Corn, Atracțiile României, afacerea de familie, OVB, afacerea cu haine și direcția GEO / AI Visibility. Scriu despre ce văd la întâlnirea dintre tehnologie, muncă și om.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED ARTICLES */}
      <section className="container-editorial py-20 md:py-28">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="eyebrow mb-4">Ultimele articole</p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight">De pe blog</h2>
          </div>
          <Link to="/blog" className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Toate articolele <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
          {latest.map((p) => (
            <Link
              key={p.slug}
              to={`/blog/${p.slug}`}
              className="group bg-background p-8 flex flex-col hover:bg-surface transition-colors duration-500"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-6">
                <span className="uppercase tracking-[0.22em]">{p.category}</span>
                <span>{p.readingTime}</span>
              </div>
              <h3 className="font-serif text-2xl leading-snug text-balance group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed flex-1">{p.excerpt}</p>
              <span className="mt-8 inline-flex items-center gap-2 text-sm">
                Citește <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PROJECT — CRANDIT */}
      <section className="bg-[#151515] text-[#f5f0e8]">
        <div className="container-editorial py-20 md:py-32 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-[#c9a86c]/70 mb-6">
              Proiect principal · Carte în lucru
            </p>
            <h2 className="font-trajan text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance text-[#c9a86c]">
              CRANDIT
              <span className="block text-[#c9a86c]/80 text-2xl md:text-3xl mt-3 italic font-serif">
                Mitul succesului peste noapte
              </span>
            </h2>
            <p className="mt-8 text-[#f5f0e8]/80 text-lg leading-relaxed max-w-xl">
              O carte despre ce se află, de fapt, sub poveștile de succes pe care le admirăm. Despre disciplină, identitate, timp și iluzia ascensiunii rapide.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/carte"
                className="inline-flex items-center gap-2 h-12 px-6 bg-[#c9a86c] text-[#151515] text-sm tracking-wide hover:bg-[#c9a86c]/90 transition-colors"
              >
                Despre carte <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/proiecte/crandit"
                className="inline-flex items-center gap-2 h-12 px-6 border border-[#c9a86c]/40 text-[#c9a86c] text-sm tracking-wide hover:bg-[#c9a86c]/10 transition-colors"
              >
                Pagina proiectului
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <Link to="/carte" className="block group">
              <img
                src={cranditCover.url}
                alt="Coperta cărții CRANDIT — Mitul succesului peste noapte de Alexandru Matescu"
                className="w-full aspect-[3/4] object-cover border border-[#c9a86c]/15 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* PROJECT HIGHLIGHTS */}
      <section className="container-editorial py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <p className="eyebrow mb-4">Proiecte</p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-balance">
            Proiecte personale: ce construiesc, ce testez, ce las să se aşeze.
          </h2>
          <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
            Fiecare proiect este un răspuns la o întrebare reală. Unele sunt active, altele au fost duse până la capăt și închise cu lecții clare.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          {[
            projects.find((p) => p.slug === "geo-ai-visibility"),
            projects.find((p) => p.slug === "taste-the-corn"),
            projects.find((p) => p.slug === "ovb"),
            projects.find((p) => p.slug === "atractiile-romaniei"),
            projects.find((p) => p.slug === "afacerea-de-familie"),
            projects.find((p) => p.slug === "afacerea-cu-haine"),
          ]
            .filter(Boolean)
            .map((p, i) => (
              <Link
                key={p!.slug}
                to={`/proiecte/${p!.slug}`}
                className="group bg-background p-8 md:p-10 flex flex-col gap-5 hover:bg-surface transition-colors duration-500"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs text-muted-foreground tabular-nums">0{i + 1}</span>
                  <span className={`text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${statusTone[p!.status]}`}>
                    {p!.status}
                  </span>
                </div>
                {(p!.slug === "taste-the-corn" || p!.slug === "ovb") && (
                  <div className="w-24 h-24 rounded-2xl overflow-hidden border border-foreground/10 shadow-sm bg-white">
                    <img
                      src={p!.slug === "ovb" ? ovbLogo.url : tasteTheCornLogo.url}
                      alt={`Logo ${p!.title}${p!.slug === "taste-the-corn" ? " — N-ai cum să-i spui nu" : ""}`}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors">
                    {p!.title}
                  </h3>
                  <p className="mt-2 font-serif italic text-muted-foreground">{p!.tagline}</p>
                </div>
                <p className="text-muted-foreground text-[15px] leading-relaxed">{p!.description}</p>

                {p!.metadata && (
                  <div className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground/70">Fapte: </span>
                    {[
                      p!.metadata.perioada,
                      p!.metadata.locatie,
                      p!.metadata.categorie,
                    ]
                      .filter(Boolean)
                      .join(" · ")}
                  </div>
                )}

                <p className="text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4">
                  {p!.slug === "geo-ai-visibility" &&
                    "Răspuns: cum optimizezi prezența unui brand când răspunsul nu mai este o listă de linkuri."}
                  {p!.slug === "taste-the-corn" &&
                    "Lecție: o idee bună are nevoie de un sistem clar în spate; marketingul și oamenii fac diferența."}
                {p!.slug === "ovb" &&
                  "Lecție: încrederea se câștigă în ani și conversații, nu în pitch-uri; iar mediul potrivit accelerează dezvoltarea."}
                  {p!.slug === "atractiile-romaniei" &&
                    "Lecție: ritmul constant bate volumul. Scalabilitatea cere un sistem, nu doar efort individual."}
                  {p!.slug === "afacerea-de-familie" &&
                    "Lecție: cel mai bun proiect pentru cineva drag este cel mai sustenabil, nu cel mai ambițios."}
                  {p!.slug === "afacerea-cu-haine" &&
                    "Lecție: supraviețuirea e prima formă de succes; riscul de partener și creditul subestimat te învață mai repede decât orice plan."}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 text-sm">
                  Explorează proiectul <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}

          {/* Blogging card */}
          <Link
            to="/blog"
            className="group bg-background p-8 md:p-10 flex flex-col gap-5 hover:bg-surface transition-colors duration-500"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="text-xs text-muted-foreground tabular-nums">07</span>
              <span className="text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 text-foreground/70 bg-foreground/5">
                publicație continuă
              </span>
            </div>
            <div>
              <h3 className="font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors">
                Blogging
              </h3>
              <p className="mt-2 font-serif italic text-muted-foreground">
                Scriu despre claritate, muncă, sens și omul de lângă tehnologie
              </p>
            </div>
            <p className="text-muted-foreground text-[15px] leading-relaxed">
              Blog personal cu articole despre tehnologie, antreprenoriat, decizii, identitate și viața de zi cu zi. Conținut migrat din Blogger și publicat continuu.
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed border-l-2 border-primary/30 pl-4">
              Răspuns: cum poți rămâne clar și util într-un mediu inundat de zgomot.
            </p>
            <span className="mt-auto inline-flex items-center gap-2 text-sm">
              Citește articolele <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="container-editorial pb-20 md:pb-28">
        <NewsletterForm
          title="Rămâi aproape de proces."
          description="Actualizări despre articole noi, evoluția cărții CRANDIT și proiecte viitoare. Trimit rar și doar când am ceva real de spus."
        />
      </section>

      {/* CLOSING */}
      <section className="border-t border-foreground/10">
        <div className="container-editorial py-24 md:py-32 text-center max-w-3xl mx-auto">
          <p className="eyebrow justify-center mb-8">Punct</p>
          <p className="font-serif text-3xl md:text-5xl leading-[1.15] text-balance">
            Nu construiesc o platformă. Construiesc o practică — în timp, cu răbdare, fără grabă.
          </p>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-2 h-12 px-6 border border-foreground/20 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors"
          >
            Hai să vorbim <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
