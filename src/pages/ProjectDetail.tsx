import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import NewsletterForm from "@/components/NewsletterForm";

const statusTone: Record<string, string> = {
  "activ": "text-emerald-800 bg-emerald-100/60",
  "în lucru": "text-amber-900 bg-amber-100/60",
  "închis": "text-stone-700 bg-stone-200/70",
  "concept": "text-foreground/70 bg-foreground/5",
};

const Section = ({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) => (
  <section className="grid md:grid-cols-12 gap-10 py-14 border-t border-foreground/10">
    <div className="md:col-span-4">
      <p className="eyebrow">{eyebrow}</p>
    </div>
    <div className="md:col-span-8 prose-editorial">{children}</div>
  </section>
);

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="container-editorial py-32 text-center">
        <h1 className="font-serif text-4xl">Proiectul nu există</h1>
        <Link to="/proiecte" className="mt-8 inline-flex items-center gap-2 link-underline">
          <ArrowLeft className="h-4 w-4" /> Înapoi la proiecte
        </Link>
      </section>
    );
  }

  const relatedPosts = posts.filter((p) => project.related.includes(p.slug));

  return (
    <>
      <header className="container-editorial pt-20 md:pt-28 pb-12">
        <Link to="/proiecte" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12">
          <ArrowLeft className="h-4 w-4" /> Toate proiectele
        </Link>
        <div className="flex items-center gap-3 mb-6">
          <span className={`text-[10px] uppercase tracking-[0.22em] px-2.5 py-1 ${statusTone[project.status]}`}>
            {project.status}
          </span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight">{project.title}</h1>
        <p className="mt-4 font-serif italic text-xl md:text-2xl text-muted-foreground">{project.tagline}</p>
        <p className="mt-8 text-lg text-foreground/80 max-w-2xl leading-relaxed">{project.description}</p>
      </header>

      <div className="container-editorial">
        <Section eyebrow="De ce a pornit">
          <p>{project.why}</p>
        </Section>
        <Section eyebrow="Problema explorată">
          <p>{project.problem}</p>
        </Section>
        <Section eyebrow="Ce s-a întâmplat">
          <p>{project.story}</p>
        </Section>
        <Section eyebrow="Lecții">
          <ul className="space-y-4 list-none p-0">
            {project.lessons.map((l, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-serif text-muted-foreground tabular-nums">0{i + 1}</span>
                <span>{l}</span>
              </li>
            ))}
          </ul>
        </Section>
        <Section eyebrow="Status actual">
          <p>{project.currentStatus}</p>
        </Section>
      </div>

      {relatedPosts.length > 0 && (
        <section className="border-y border-foreground/10 bg-surface/60 mt-10">
          <div className="container-editorial py-16">
            <p className="eyebrow mb-8">Articole legate</p>
            <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
              {relatedPosts.map((p) => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="group bg-background p-8 hover:bg-surface transition-colors">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4">{p.category}</p>
                  <h3 className="font-serif text-2xl leading-snug group-hover:text-primary transition-colors">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm">
                    Citește <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="container-editorial py-20">
        <NewsletterForm
          title="Urmărește evoluția proiectelor."
          description="Actualizări concrete, fără hype. Lansări, decizii, ce a mers și ce nu."
        />
      </section>
    </>
  );
};

export default ProjectDetail;
