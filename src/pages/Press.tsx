import Seo from "@/components/Seo";
import { getPresaGroupedByStory } from "@/lib/presa";

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("ro-RO", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const Press = () => {
  const groups = getPresaGroupedByStory();

  return (
    <>
      {/*
        Titlu/descriere/OG rămân utile pentru actualizarea client-side la
        navigare SPA; JSON-LD-ul (CollectionPage + NewsArticle + Organization)
        e deja randat server-side de head()-ul rutei (@/lib/presa), deci nu-l
        mai duplicăm aici — vezi același pattern la articolele din /lab/articole.
      */}
      <Seo
        title="Apariții în presă și mențiuni externe — Alex Matescu"
        description="Articole și mențiuni despre Alex Matescu și proiectele sale, apărute în publicații externe — cu link direct către sursa originală."
        ogType="website"
      />

      <section className="container-editorial pt-20 md:pt-32 pb-12">
        <p className="eyebrow mb-8">Presă</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl">
          Apariții în presă și mențiuni externe
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
          Articole din publicații externe despre Alex Matescu și proiectele
          sale, grupate pe eveniment. Fiecare titlu duce la sursa originală.
        </p>
      </section>

      <section className="container-editorial pb-24 space-y-20">
        {groups.map((group) => (
          <div key={group.story}>
            <p className="eyebrow mb-3">
              {group.meta.label} — {formatDate(group.meta.date)}
            </p>
            <p className="text-muted-foreground max-w-2xl mb-8">
              {group.meta.summary}
            </p>

            <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
              {group.entries.map((entry) => (
                <li key={entry.id} className="py-8">
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener"
                    className="link-underline font-serif text-xl md:text-2xl leading-snug text-balance"
                  >
                    {entry.title}
                  </a>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {entry.publication} · {entry.author} ·{" "}
                    {formatDate(entry.date)}
                  </p>
                  {entry.context && (
                    <p className="mt-2 text-sm text-muted-foreground/80 max-w-2xl">
                      {entry.context}
                    </p>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Press;
