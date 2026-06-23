import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

type Milestone = {
  year: string;
  title: string;
  description: string;
};

const milestones: Milestone[] = [
  {
    year: "Început",
    title: "Primele întrebări",
    description:
      "Curiozitatea pentru claritate, disciplină și sens — primele caiete, primele lecturi care au schimbat felul în care privesc munca și viața.",
  },
  {
    year: "Formare",
    title: "Ani de căutare",
    description:
      "Experiențe profesionale și personale care au modelat o etică a muncii: răbdare, repetiție, respect pentru proces.",
  },
  {
    year: "Tranziție",
    title: "Primul proiect propriu",
    description:
      "Trecerea de la a executa pentru alții la a construi pentru mine. Lecții despre risc, eșec și ce înseamnă să duci ceva până la capăt.",
  },
  {
    year: "Maturizare",
    title: "Scris și documentare",
    description:
      "Începutul scrisului public — un mod de a gândi mai limpede și de a lăsa urmă a procesului, nu doar a rezultatului.",
  },
  {
    year: "Acum",
    title: "CRANDIT și hub-ul personal",
    description:
      "Cartea CRANDIT și acest spațiu propriu pentru articole, proiecte și idei. Un loc în care construiesc în timp, fără grabă.",
  },
];

const Calatoria = () => {
  return (
    <div>
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-6">Călătoria</p>
        <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-balance leading-[1.05]">
          Cum am ajuns aici
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          O cronologie a momentelor care m-au format — întrebări, decizii, proiecte și
          oameni. Nu o biografie, ci harta drumului: de unde am plecat, prin ce am trecut
          și de ce scriu și construiesc ce construiesc astăzi.
        </p>
      </section>

      <section className="container-editorial pb-24">
        <ol className="relative border-l border-foreground/15 pl-8 md:pl-12 space-y-14">
          {milestones.map((m, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden
                className="absolute -left-[37px] md:-left-[49px] top-2 h-3 w-3 rounded-full bg-foreground"
              />
              <p className="eyebrow mb-3">{m.year}</p>
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight leading-snug">
                {m.title}
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed">
                {m.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-foreground/10 bg-surface/60">
        <div className="container-editorial py-16 md:py-20 grid gap-10 md:grid-cols-2">
          <Link
            to="/proiecte"
            className="group flex items-start justify-between gap-6 border border-foreground/10 rounded-lg p-8 hover:border-foreground/30 transition-colors"
          >
            <div>
              <p className="eyebrow mb-3">Continuă</p>
              <p className="font-serif text-2xl leading-snug">Vezi proiectele</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Ce construiesc acum și ce am închis pe drum.
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>

          <Link
            to="/carte"
            className="group flex items-start justify-between gap-6 border border-foreground/10 rounded-lg p-8 hover:border-foreground/30 transition-colors"
          >
            <div>
              <p className="eyebrow mb-3">Citește</p>
              <p className="font-serif text-2xl leading-snug">CRANDIT — cartea</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Distilarea acestui drum într-un singur volum.
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Calatoria;
