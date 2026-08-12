import { useMemo, useState } from "react";
import { Link } from "@/lib/router-compat";
import { Search, ArrowUpRight } from "lucide-react";
import { posts, categories } from "@/data/posts";
import Seo from "@/components/Seo";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ro-RO", { day: "numeric", month: "long", year: "numeric" });

const Blog = () => {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("Toate");

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchCat = cat === "Toate" || p.category === cat;
      const matchQ =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(q.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(q.toLowerCase());
      return matchCat && matchQ;
    });
  }, [q, cat]);

  return (
    <>
      <Seo
        title="Blog — Alex Matescu"
        description="Articole de Alex Matescu despre claritate, disciplină, muncă, succes, tehnologie și antreprenoriat, scrise rar și deliberat."
      />

      <section className="container-editorial pt-20 md:pt-32 pb-12">
        <p className="eyebrow mb-8">Blog</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl">
          Texte despre claritate, disciplină, muncă și sens.
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Scriu rar și deliberat. Fiecare articol este o încercare de a numi onest ceva ce văd.
        </p>
      </section>

      {/* FILTERS */}
      <section className="container-editorial">
        <div className="flex flex-col gap-6 border-y border-foreground/10 py-6">
          <div className="relative">
            <Search className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              value={q}
              aria-label="Caută în articole"
              onChange={(e) => setQ(e.target.value)}
              placeholder="Caută în articole..."
              className="w-full pl-7 h-10 bg-transparent border-b border-foreground/10 focus:border-foreground/40 outline-hidden text-sm transition-colors"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {["Toate", ...categories].map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`text-xs uppercase tracking-[0.18em] px-3 py-1.5 border transition-colors ${
                  cat === c
                    ? "bg-foreground text-background border-foreground"
                    : "border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/40"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIST */}
      <section className="container-editorial py-16">
        {filtered.length === 0 ? (
          <p className="text-muted-foreground py-20 text-center">Niciun articol pentru această căutare.</p>
        ) : (
          <ul className="divide-y divide-foreground/10 border-b border-foreground/10">
            {filtered.map((p) => (
              <li key={p.slug}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group grid md:grid-cols-12 gap-6 py-10 md:py-14 items-start hover:bg-surface/50 transition-colors px-2 md:px-4 -mx-2 md:-mx-4"
                >
                  <div className="md:col-span-3 flex flex-col gap-2 text-sm text-muted-foreground">
                    <span className="uppercase tracking-[0.22em] text-[11px]">{p.category}</span>
                    <span>{formatDate(p.date)}</span>
                    <span>{p.readingTime}</span>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="font-serif text-3xl md:text-4xl leading-tight text-balance group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    <p className="mt-3 font-serif italic text-muted-foreground text-lg">{p.subtitle}</p>
                    <p className="mt-5 text-muted-foreground max-w-2xl">{p.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm">
                      Citește articolul
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Blog;
