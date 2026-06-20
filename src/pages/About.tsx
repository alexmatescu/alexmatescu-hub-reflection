import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const values = [
  { word: "Claritate", note: "A vedea ce este, nu ce vrem să fie." },
  { word: "Muncă", note: "Practica zilnică, peste talentul sporadic." },
  { word: "Răbdare", note: "Timp investit într-o singură direcție." },
  { word: "Responsabilitate", note: "A duce decizia până la consecință." },
  { word: "Luciditate", note: "A rămâne treaz în fața propriilor povești." },
  { word: "Sens", note: "Ce rămâne după ce trec urgențele." },
];

const About = () => {
  return (
    <>
      <section className="container-editorial pt-20 md:pt-32 pb-16">
        <p className="eyebrow mb-8">Despre mine</p>
        <h1 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-4xl">
          Inginer prin formație, scriitor prin practică, antreprenor prin experiment.
        </h1>
        <p className="mt-8 text-lg text-muted-foreground max-w-2xl">
          Nu mă consider un om cu răspunsuri finale. Mă consider cineva care încearcă, public, să devină mai clar, mai disciplinat și mai onest cu realitatea.
        </p>
      </section>

      <div className="rule container-editorial" />

      {/* CINE SUNT */}
      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">01 · Cine sunt</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            Mă numesc Alex Matescu. Lucrez în zona de tehnologie și produs, scriu despre ceea ce văd la întâlnirea dintre muncă, oameni și sisteme și construiesc, în paralel, proiecte care îmi testează ipotezele.
          </p>
          <p>
            Nu cred în brandul personal ca spectacol. Cred în brandul personal ca traseu vizibil: o sumă de decizii, texte și proiecte pe care le poți citi în ordine și care încep să spună ceva coerent în timp.
          </p>
        </div>
      </section>

      <div className="rule container-editorial" />

      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">02 · De unde a pornit totul</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            Am început cu inginerie. Mi-a oferit primul lucru pe care îl recomand oricui: o disciplină a gândirii. M-a învățat să descompun probleme, să verific ipoteze, să respect detaliul.
          </p>
          <p>
            Apoi a venit antreprenoriatul — întâi ca experiment, apoi ca școală reală. Restul a urmat: scrisul, lectura sistematică, conversațiile lungi cu oameni care construiseră ceva și nu mai aveau nevoie să demonstreze nimic.
          </p>
        </div>
      </section>

      <div className="rule container-editorial" />

      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">03 · Ce am învățat</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            <strong>Din corporații</strong> — că procesul, când e bun, multiplică oamenii și că oamenii buni, fără proces, ard mai repede decât ar trebui.
          </p>
          <p>
            <strong>Din antreprenoriat</strong> — că marja se câștigă în detalii operaționale, nu în powerpoint, și că a închide la timp este, uneori, decizia cea mai matură.
          </p>
          <p>
            <strong>Din scris</strong> — că nu poți scrie onest mai mult timp decât ești dispus să trăiești onest.
          </p>
        </div>
      </section>

      <div className="rule container-editorial" />

      <section className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <p className="eyebrow">04 · Ce construiesc acum</p>
        </div>
        <div className="md:col-span-8 prose-editorial">
          <p>
            <strong>CRANDIT</strong> — o carte despre mitul succesului peste noapte și ce se află, de fapt, sub poveștile pe care le admirăm.
          </p>
          <p>
            <strong>GEO / AI Visibility</strong> — o direcție profesională în jurul vizibilității brandurilor și autorilor în era căutării generative.
          </p>
          <p>
            <strong>Coaching & mentoring</strong> — un cadru de lucru 1 la 1, deliberat selectiv, pentru oameni care caută claritate, nu motivație.
          </p>
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
              Șase cuvinte care decid, de fapt, ce fac și ce refuz.
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
