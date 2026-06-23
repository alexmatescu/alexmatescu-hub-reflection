import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const values = [
  { word: "Claritate", note: "A vedea ce este, nu ce vrem să fie." },
  { word: "Responsabilitate", note: "Rezultatele sunt consecința deciziilor și acțiunilor noastre." },
  { word: "Muncă", note: "Progresul apare prin execuție constantă." },
  { word: "Răbdare", note: "Majoritatea lucrurilor valoroase au nevoie de timp." },
  { word: "Luciditate", note: "A separa emoțiile momentului de realitatea obiectivă." },
  { word: "Învățare continuă", note: "Fiecare proiect este o oportunitate de a înțelege ceva nou." },
];

const mainProjects = [
  { name: "CRANDIT", desc: "Mitul succesului peste noapte" },
  { name: "GEO / AI Visibility", desc: "Vizibilitate în era căutării generative" },
  { name: "Taste the Corn", desc: "Proiect antreprenorial în zona retailului alimentar" },
  { name: "Atracțiile României", desc: "Proiect digital despre locurile din România" },
  { name: "Leadership Artificial", desc: "Cercetare în curs despre AI, leadership și viitorul muncii" },
];

const domains = [
  "Inteligență Artificială (AI)",
  "Generative Engine Optimization (GEO)",
  "Answer Engine Optimization (AEO)",
  "Leadership",
  "Sisteme autonome și tehnologie automotive",
  "Productivitate",
  "Disciplină",
  "Psihologie",
  "Dezvoltare personală",
  "Antreprenoriat",
  "Filosofie practică",
  "Educație și învățare continuă",
];

const About = () => {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial pt-20 md:pt-32 pb-16">
        <p className="eyebrow mb-8">Despre mine</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl">
          Alex Matescu
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-muted-foreground max-w-3xl text-balance">
          Inginer, autor și antreprenor din România.
        </p>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
          Construiesc proiecte, scriu despre ceea ce învăț și documentez procesul prin care încerc să înțeleg munca, succesul, tehnologia și omul.
        </p>
      </section>

      <div className="rule container-editorial" />

      {/* INTRO */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">În câteva cuvinte</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            De-a lungul timpului am lucrat în fabrici, restaurante, call-center-uri, consultanță financiară, inginerie și antreprenoriat. Am construit proiecte care au reușit, proiecte care au eșuat și proiecte care s-au transformat în altceva decât îmi imaginam la început.
          </p>
          <p>
            Toate au contribuit la aceeași întrebare care mă preocupă și astăzi: cum construiesc oamenii rezultate durabile într-o lume care caută succesul peste noapte?
          </p>
          <p>
            Acest website este locul în care documentez proiectele pe care le construiesc, ideile pe care le explorez și lecțiile pe care le învăț pe parcurs.
          </p>
        </div>
      </section>

      <div className="rule container-editorial" />

      {/* PE SCURT */}
      <section className="container-editorial py-20 md:py-28">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-4">Pe scurt</p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-balance">
            Cine sunt, ce fac și unde mă găsești.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 border border-foreground/10">
          <div className="bg-background p-8">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Nume</p>
            <p className="font-serif text-xl">Alexandru (Alex) Matescu</p>
          </div>
          <div className="bg-background p-8">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Locație</p>
            <p className="font-serif text-xl">Sibiu, România</p>
          </div>
          <div className="bg-background p-8">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Profesie</p>
            <p className="font-serif text-xl">System Lead Engineer în industria sistemelor autonome și automotive.</p>
          </div>
          <div className="bg-background p-8">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Activități</p>
            <p className="font-serif text-xl">Inginer • Autor • Antreprenor • Creator de conținut</p>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <p className="eyebrow mb-6">Proiecte principale</p>
            <div className="divide-y divide-foreground/10 border-t border-foreground/10">
              {mainProjects.map((p) => (
                <div key={p.name} className="py-5 flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                  <p className="font-medium">{p.name}</p>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-6 space-y-10">
            <div>
              <p className="eyebrow mb-4">Experiență antreprenorială</p>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Co-fondator și administrator al unui magazin mixt rural dezvoltat începând cu 2021</li>
                <li>Fondator Taste the Corn</li>
                <li>Inițiator al proiectului GEO / AI Visibility</li>
                <li>Dezvoltator al mai multor proiecte digitale și antreprenoriale</li>
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Experiență în vânzări</p>
              <p className="text-muted-foreground">
                Consultanță financiară și asigurări prin OVB Allfinanz România între 2021 și 2024.
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">Activitate editorială</p>
              <p className="text-muted-foreground">
                Autorul cărții CRANDIT – Mitul succesului peste noapte și al articolelor publicate pe acest website.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="rule container-editorial" />

      {/* CINE SUNT */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">01 · Cine sunt</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            Mă numesc Alexandru (Alex) Matescu și locuiesc în Sibiu, România.
          </p>
          <p>
            Profesional, activez în industria automotive și a sistemelor autonome, unde lucrez la dezvoltarea de produse și tehnologii pentru vehiculele moderne. De-a lungul carierei am trecut prin roluri de documentație tehnică, arhitectură de sistem, inginerie de sistem și coordonare tehnică, acumulând experiență în dezvoltarea sistemelor complexe și în colaborarea cu echipe internaționale.
          </p>
          <p>
            Drumul meu profesional nu a început însă în inginerie. Înainte de a ajunge în domeniul tehnic am lucrat ca ospătar, am coordonat echipe de ospătari, am lucrat într-un centru de copiere chei și chei auto, într-un call center de recuperare creanțe pentru piața americană și într-o fabrică pe un rol de operator. Aceste experiențe mi-au oferit primele lecții despre muncă, responsabilitate, relația cu oamenii și importanța disciplinei.
          </p>
          <p>
            În paralel cu cariera tehnică am explorat și alte domenii. Am activat în consultanță financiară și asigurări prin OVB Allfinanz România și am participat la dezvoltarea unei afaceri de familie în mediul rural, construită în jurul unei idei simple: să răspundă nevoilor reale ale comunității locale.
          </p>
          <p>
            Dincolo de profesie, sunt atras de întrebări care depășesc granițele tehnologiei. Ce înseamnă succesul în realitate? Cum construiesc oamenii rezultate durabile? De ce unele persoane perseverează iar altele renunță? Cum putem lua decizii mai bune într-o lume din ce în ce mai complexă?
          </p>
          <p>
            Aceste întrebări m-au condus către scris, antreprenoriat, studiu și proiecte personale prin care încerc să înțeleg mai bine relația dintre om, muncă, disciplină, tehnologie și progres.
          </p>
          <p>
            Nu mă consider un om care deține toate răspunsurile. Mă consider un om care documentează procesul de a le căuta.
          </p>
        </div>
      </section>

      <div className="rule container-editorial" />

      {/* CE FAC */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">02 · Ce fac</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <h3 className="font-serif text-2xl mb-4">Activitate profesională</h3>
          <p>
            Lucrez în domeniul sistemelor autonome și al dezvoltării de produse pentru industria automotive.
          </p>
          <p>Experiența mea include:</p>
          <ul>
            <li>dezvoltarea sistemelor ADAS (Advanced Driver Assistance Systems);</li>
            <li>managementul cerințelor și arhitectură de sistem;</li>
            <li>coordonarea activităților tehnice în proiecte complexe;</li>
            <li>procese de dezvoltare software și ASPICE;</li>
            <li>colaborarea cu echipe internaționale și multidisciplinare.</li>
          </ul>
          <p>
            Tehnologia reprezintă atât mediul în care îmi desfășor activitatea profesională, cât și unul dintre domeniile pe care le urmăresc și le studiez constant.
          </p>

          <h3 className="font-serif text-2xl mt-12 mb-4">Scris</h3>
          <p>
            Scrisul a început ca o formă de reflecție și a devenit în timp unul dintre principalele mele instrumente de învățare.
          </p>
          <p>Pe blog și în proiectele editoriale abordez teme precum:</p>
          <ul>
            <li>claritatea;</li>
            <li>disciplina;</li>
            <li>succesul;</li>
            <li>leadershipul;</li>
            <li>tehnologia;</li>
            <li>inteligența artificială;</li>
            <li>antreprenoriatul;</li>
            <li>dezvoltarea personală.</li>
          </ul>
          <p>
            În 2026 am finalizat manuscrisul cărții <strong>CRANDIT – Mitul succesului peste noapte</strong>, un proiect construit în jurul ideii că majoritatea rezultatelor valoroase apar prin răbdare, repetiție și construcție pe termen lung.
          </p>

          <h3 className="font-serif text-2xl mt-12 mb-4">Antreprenoriat</h3>
          <p>
            Antreprenoriatul reprezintă pentru mine un mod de a testa idei în lumea reală.
          </p>
          <p>
            Una dintre cele mai importante experiențe antreprenoriale a fost dezvoltarea unei afaceri de familie în mediul rural, un magazin mixt construit în jurul nevoilor reale ale comunității locale și aflat în funcțiune și astăzi.
          </p>
          <p>
            Ulterior am explorat și alte direcții antreprenoriale, de la proiecte digitale și promovare online până la concepte din zona de retail alimentar și servicii bazate pe inteligență artificială.
          </p>
          <p>
            Printre proiectele dezvoltate se numără Atracțiile României, Taste the Corn și inițiativa GEO / AI Visibility.
          </p>
          <p>
            Unele proiecte au avut succes comercial, altele au rămas experimente sau lecții importante. Toate au contribuit la dezvoltarea unei înțelegeri mai profunde asupra execuției, riscului, responsabilității și construcției pe termen lung.
          </p>

          <h3 className="font-serif text-2xl mt-12 mb-4">Vânzări și consultanță</h3>
          <p>
            Între 2021 și 2024 am colaborat cu OVB Allfinanz România, experiență care mi-a oferit contact direct cu domeniul vânzărilor, educației financiare și consultanței.
          </p>
          <p>
            Această perioadă m-a ajutat să înțeleg mai bine modul în care oamenii iau decizii, importanța încrederii în relațiile profesionale și diferența dintre teorie și aplicarea practică a conceptelor financiare.
          </p>
          <p>
            Experiența acumulată în vânzări completează astăzi perspectiva mea tehnică și antreprenorială.
          </p>
        </div>
      </section>

      <div className="rule container-editorial" />

      {/* DOMENII DE INTERES */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">03 · Domenii de interes</p>
        </div>
        <div className="md:col-span-8">
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
            În prezent studiez și scriu despre:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {domains.map((d) => (
              <div key={d} className="flex items-center gap-3 p-4 border border-foreground/10 bg-surface/40">
                <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="rule container-editorial" />

      {/* CE CONSTRUIESC ACUM */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">04 · Ce construiesc acum</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            În prezent îmi concentrez energia asupra mai multor direcții complementare:
          </p>
          <ul>
            <li>dezvoltarea platformei și comunității CRANDIT;</li>
            <li>construirea proiectului GEO / AI Visibility;</li>
            <li>publicarea de articole și eseuri pe blog;</li>
            <li>cercetarea și documentarea cărții Leadership Artificial;</li>
            <li>explorarea modului în care inteligența artificială va influența leadershipul, munca și dezvoltarea umană în următorii ani.</li>
          </ul>
          <p>
            <Link to="/proiecte" className="link-underline">Vezi toate proiectele</Link>.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-surface/60 border-y border-foreground/10">
        <div className="container-editorial py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="eyebrow mb-4">Valori</p>
            <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-balance">
              Valorile care mă ghidează
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-foreground/10 border border-foreground/10">
            {values.map((v, i) => (
              <div key={v.word} className="bg-background p-8">
                <p className="text-xs text-muted-foreground tabular-nums mb-4">0{i + 1}</p>
                <p className="font-serif text-3xl">{v.word}</p>
                <p className="mt-3 text-muted-foreground">{v.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-editorial py-24 md:py-32 text-center max-w-3xl mx-auto">
        <p className="font-serif text-3xl md:text-4xl leading-snug text-balance">
          Dacă vrei să urmărești ce scriu, începe cu blogul. Dacă vrei să discutăm direct, scrie-mi.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/blog" className="inline-flex items-center gap-2 h-12 px-6 bg-primary text-primary-foreground text-sm tracking-wide hover:bg-primary/90 transition-colors">
            Citește blogul <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 h-12 px-6 border border-foreground/20 text-sm tracking-wide hover:bg-foreground hover:text-background transition-colors">
            Contact
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
