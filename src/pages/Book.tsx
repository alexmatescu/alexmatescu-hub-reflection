import NewsletterForm from "@/components/NewsletterForm";

const chapters = [
  { n: "I", title: "Iluzia ascensiunii rapide", note: "De ce poveștile de succes par mereu mai scurte decât sunt." },
  { n: "II", title: "Identitate înainte de strategie", note: "Cine ești înainte de ce faci." },
  { n: "III", title: "Disciplina ca infrastructură", note: "Sistemele care fac efortul repetabil." },
  { n: "IV", title: "Timpul ca singura resursă reală", note: "Cum decizi pe ce ardere de timp ești dispus să semnezi." },
  { n: "V", title: "Succesul după succes", note: "Ce se întâmplă când obții ce ai vrut." },
];

const Book = () => {
  return (
    <>
      {/* HERO */}
      <section className="bg-primary text-primary-foreground">
        <div className="container-editorial pt-20 md:pt-32 pb-20 md:pb-28 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/60 mb-8">
              Carte · În lucru · 2026
            </p>
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.02] tracking-tight text-balance">
              CRANDIT
            </h1>
            <p className="mt-4 font-serif italic text-2xl md:text-3xl text-primary-foreground/75">
              Mitul succesului peste noapte
            </p>
            <p className="mt-8 text-lg text-primary-foreground/80 max-w-xl leading-relaxed">
              O carte despre disciplină, identitate, timp și iluzia ascensiunii rapide. Despre ce se află, cu adevărat, sub poveștile de succes pe care le admirăm.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-[3/4] bg-primary-foreground/5 border border-primary-foreground/15 flex flex-col items-center justify-center p-10 text-center">
              <p className="text-xs uppercase tracking-[0.22em] text-primary-foreground/50 mb-8">Manuscris</p>
              <p className="font-serif text-6xl leading-none">CRANDIT</p>
              <div className="my-8 h-px w-12 bg-primary-foreground/30" />
              <p className="font-serif italic text-primary-foreground/70 text-balance">
                Mitul succesului peste noapte
              </p>
              <p className="mt-auto pt-12 text-xs text-primary-foreground/40">Alex Matescu · 2026</p>
            </div>
          </div>
        </div>
      </section>

      {/* DESPRE */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Despre carte</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            CRANDIT pornește de la o observație simplă: aproape toate poveștile de succes pe care le admirăm sunt deja editate. Au început, mijloc, final. În realitate, drumul original este mai lung, mai dezordonat, mai puțin spectaculos.
          </p>
          <p>
            Cartea nu promite o rețetă. Își propune să dezarmeze, capitol cu capitol, narativul „peste noapte” și să propună, în loc, o gândire mai onestă despre timp, identitate, disciplină și ceea ce numim, generic, succes.
          </p>
          <blockquote>
            „Cele mai multe povești pe care le invidiem sunt versiuni scurtate ale unor vieți pe care nu le-am vrea integral.”
          </blockquote>
        </div>
      </section>

      {/* PENTRU CINE */}
      <section className="bg-surface/60 border-y border-foreground/10">
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="eyebrow">Pentru cine</p>
          </div>
          <div className="md:col-span-8 grid sm:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
            {[
              { t: "Profesioniștii la mijlocul drumului", d: "Cei care au obținut deja ceva și încep să se întrebe ce urmează." },
              { t: "Antreprenorii care nu se mint", d: "Oameni care vor o oglindă, nu un coach motivațional." },
              { t: "Tinerii cu așteptări mari", d: "Cei care vor să-și calibreze realist primii zece ani." },
              { t: "Cititorii de nonfiction serios", d: "Pentru cei care preferă claritatea în defavoarea entuziasmului." },
            ].map((b) => (
              <div key={b.t} className="bg-background p-8">
                <p className="font-serif text-xl">{b.t}</p>
                <p className="mt-3 text-muted-foreground">{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">Schiță de capitole</p>
          <p className="mt-4 text-sm text-muted-foreground">Structură provizorie. Se poate schimba până la final.</p>
        </div>
        <div className="md:col-span-8">
          <ul className="divide-y divide-foreground/10 border-y border-foreground/10">
            {chapters.map((c) => (
              <li key={c.n} className="py-6 grid grid-cols-[3rem_1fr] gap-6 items-baseline">
                <span className="font-serif text-2xl text-muted-foreground">{c.n}</span>
                <div>
                  <p className="font-serif text-2xl text-balance">{c.title}</p>
                  <p className="mt-1 text-muted-foreground">{c.note}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* WAITLIST */}
      <section className="container-editorial pb-24">
        <NewsletterForm
          title="Intră pe lista de așteptare."
          description="Primii cititori vor primi un fragment înainte de lansare și actualizări despre evoluția manuscrisului. Doar conținut despre carte — nimic altceva."
        />
      </section>
    </>
  );
};

export default Book;
