import NewsletterForm from "@/components/NewsletterForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const cranditCover = "/images/blog/crandit-cover.png";
const gold = "#c9a86c";
const ink = "#151515";
const inkLift = "#1a1a1a";
const parchment = "#f5f0e8";

const acronym = [
  { letter: "C", law: "Costurile", tool: "Claritatea", desc: "Orice lucru care contează are un preț, iar claritatea te ajută să alegi conștient ce merită acel preț." },
  { letter: "R", law: "Răbdarea", tool: "Repetiția", desc: "Lucrurile reale durează, iar repetiția transformă așteptarea în construcție." },
  { letter: "A", law: "Asimetria", tool: "Acțiunea", desc: "La început dai mult și primești puțin, iar acțiunea este răspunsul matur la acest dezechilibru." },
  { letter: "N", law: "Norocul", tool: "Navigarea", desc: "Norocul există, dar poate fi întâlnit mai des de cei care rămân în mișcare și în contact cu realitatea." },
  { letter: "D", law: "Direcția", tool: "Disciplina", desc: "Direcția arată ce merită continuat, iar disciplina ține omul pe traseu când entuziasmul dispare." },
  { letter: "I", law: "Identitatea", tool: "Integritatea", desc: "Succesul obligă omul să devină altcineva, iar integritatea îl ajută să crească fără să se piardă." },
  { letter: "T", law: "Timpul", tool: "Toposul", desc: "Orice construcție are nevoie de durată, loc, context și mediu potrivit pentru a se forma și a rezista." },
];

const chapters = [
  { n: "1", letter: "C", title: "Costurile + Claritatea", note: "Orice lucru important are un cost. Problema nu este că succesul cere preț, ci că mulți oameni intră pe drum fără să înțeleagă ce sunt dispuși să plătească." },
  { n: "2", letter: "R", title: "Răbdarea + Repetiția", note: "Intervalul dintre efort și confirmare. Răbdarea ține omul în proces, iar repetiția transformă așteptarea în progres." },
  { n: "3", letter: "A", title: "Asimetria + Acțiunea", note: "Dezechilibrul începutului. La început, omul oferă mai mult decât primește, iar acțiunea devine singurul răspuns matur." },
  { n: "4", letter: "N", title: "Norocul + Navigarea", note: "Norocul există, dar nu poate fi controlat direct. Navigarea înseamnă să rămâi în mișcare și să-ți crești șansele de întâlnire cu oportunitățile." },
  { n: "5", letter: "D", title: "Direcția + Disciplina", note: "Separă efortul util de agitație. Direcția arată ce merită continuat, iar disciplina susține drumul când entuziasmul dispare." },
  { n: "6", letter: "I", title: "Identitatea + Integritatea", note: "Succesul testează identitatea, iar integritatea păstrează coerența dintre cine spui că ești și cine dovedești că ești." },
  { n: "7", letter: "T", title: "Timpul + Toposul", note: "Rolul timpului, al spațiului, al contextului și al tribului. Orice lucru solid are nevoie de durată și de un loc potrivit." },
];

const questions = [
  { chapter: "Capitolul 1: Costurile + Claritatea", items: [
    "Ce vreau exact?",
    "De ce vreau acest lucru?",
    "Ce costuri reale sunt inevitabile?",
    "Ce refuz să sacrific, chiar dacă rezultatul mă atrage?",
    "Am claritate sau doar speranță bine formulată?",
  ]},
  { chapter: "Capitolul 2: Răbdarea + Repetiția", items: [
    "Pot continua fără confirmare rapidă?",
    "Interpretez tăcerea realității ca verdict sau ca etapă a procesului?",
    "Ce pot repeta suficient de mult fără să mă distrug?",
    "Unde confund lipsa rezultatului imediat cu eșecul?",
    "Care este repetiția minimă viabilă pe care o pot duce constant?",
  ]},
  { chapter: "Capitolul 3: Asimetria + Acțiunea", items: [
    "Accept că la început voi da mai mult decât primesc?",
    "Ce fac atunci când efortul meu nu este încă recompensat?",
    "Acționez sau doar explic de ce nu se poate?",
    "Unde confund dezechilibrul temporar cu nedreptatea definitivă?",
    "Ce acțiune concretă pot face înainte să cer validare?",
  ]},
  { chapter: "Capitolul 4: Norocul + Navigarea", items: [
    "Unde aștept norocul în loc să navighez realitatea?",
    "Cum îmi pot crește expunerea la oportunități?",
    "Sunt suficient de prezent în lume pentru ca șansa să mă poată găsi?",
    "Confund norocul cu meritul sau meritul cu controlul total?",
    "Ce hartă de navigație am pentru perioada următoare?",
  ]},
  { chapter: "Capitolul 5: Direcția + Disciplina", items: [
    "Direcția mea este a mea sau este împrumutată de la alții?",
    "Muncesc într-o direcție reală sau doar mă țin ocupat?",
    "Ce disciplină pot susține fără să devină rigiditate?",
    "Ce verific periodic ca să nu mă pierd pe drum?",
    "Ce trebuie să opresc ca să pot continua ce contează?",
  ]},
  { chapter: "Capitolul 6: Identitatea + Integritatea", items: [
    "Cine trebuie să devin pentru a susține ceea ce vreau?",
    "Ce parte din mine conduce: copilul, părintele, adultul sau rebelul?",
    "Unde există diferență între cine spun că sunt și cine dovedesc că sunt?",
    "Ce compromis îmi atacă respectul de sine?",
    "Ce alegere ar întări integritatea mea chiar dacă ar costa?",
  ]},
  { chapter: "Capitolul 7: Timpul + Toposul", items: [
    "Accept timpul real de formare al lucrurilor solide?",
    "Mediul meu susține sau deformează ceea ce vreau să construiesc?",
    "Ce spațiu fizic, mental și social îmi influențează rezultatele?",
    "Ce trib confirmă, folosește și multiplică ceea ce construiesc?",
    "Unde trebuie să-mi așez viața ca să nu o mai pierd?",
  ]},
];

const concepts = [
  { t: "Succesul durabil", d: "Efectul unei construcții lente, repetate și asumate. Cere timp, claritate, acțiune, integritate și context potrivit." },
  { t: "Costurile", d: "Prețul real al lucrurilor importante: financiare, temporale, emoționale, relaționale, identitare sau psihice." },
  { t: "Claritatea", d: "Capacitatea de a vedea ce vrei, de ce vrei, ce costuri implică și ce refuzi să sacrifici." },
  { t: "Răbdarea", d: "Capacitatea de a rămâne în proces atunci când rezultatul nu apare încă și realitatea nu oferă confirmare rapidă." },
  { t: "Repetiția", d: "Mecanismul prin care omul transformă intenția în structură, iar efortul izolat în progres acumulat." },
  { t: "Asimetria", d: "Dezechilibrul inevitabil dintre ce dai și ce primești, mai ales la începutul unui drum important." },
  { t: "Acțiunea", d: "Răspunsul matur la incertitudine, dezechilibru și lipsa validării. Te mută din explicație în contact cu realitatea." },
  { t: "Norocul", d: "Partea realității care nu poate fi comandată, dar care poate fi întâlnită mai des de oamenii aflați în mișcare." },
  { t: "Navigarea", d: "Capacitatea de a te mișca lucid prin incertitudine, oportunități, contexte și schimbări." },
  { t: "Direcția", d: "Criteriul care separă efortul util de agitație. Fără direcție, disciplina poate deveni consum fără sens." },
  { t: "Disciplina", d: "Capacitatea de a continua ceea ce contează și atunci când entuziasmul dispare." },
  { t: "Identitatea", d: "Structura interioară a omului care trebuie să poată susține rezultatele pe care le caută." },
  { t: "Integritatea", d: "Coerența dintre cine spui că ești, ce alegi și ce dovedești prin comportament." },
  { t: "Timpul", d: "Condiția maturizării. Orice lucru solid are nevoie de timp pentru a se forma, a se așeza și a căpăta greutate." },
  { t: "Toposul", d: "Locul, mediul și contextul în care omul trăiește și construiește. Poate accelera, încetini sau deforma procesul." },
  { t: "Tribul", d: "Forma socială a toposului. Poate confirma, folosi, critica, transmite și multiplica ceea ce omul construiește." },
];

const quotes = [
  "Succesul nu se întâmplă. Nu se primește. Nu se promite. Se construiește.",
  "CRANDIT nu este o promisiune de succes. Este o hartă a realității.",
  "Nu orice efort construiește ceva; unele drumuri doar te țin ocupat.",
  "Direcția îți arată ce merită continuat, iar disciplina te ține pe traseu când entuziasmul dispare.",
  "Succesul nu doar îți adaugă ceva, ci te obligă să devii alt om.",
  "Tot ce este solid are nevoie de timp ca să se așeze, să se întărească și să capete greutate.",
  "Uneori nu valoarea lipsește, ci lumea umană prin care valoarea poate deveni vizibilă.",
];

const faqs = [
  { q: "Ce este cartea CRANDIT — Mitul succesului peste noapte?", a: "O carte de nonficțiune practică despre succesul durabil, construcția personală și profesională, maturizare, disciplină și procesul lung din spatele rezultatelor importante." },
  { q: "Cine este autorul?", a: "Alexandru Matescu." },
  { q: "Ce înseamnă CRANDIT?", a: "Un sistem format din șapte legi și șapte instrumente: Costurile + Claritatea, Răbdarea + Repetiția, Asimetria + Acțiunea, Norocul + Navigarea, Direcția + Disciplina, Identitatea + Integritatea și Timpul + Toposul." },
  { q: "Care este mesajul principal?", a: "Succesul real nu se întâmplă peste noapte. Se construiește în timp, prin proces, repetiție, costuri asumate, disciplină, integritate și context potrivit." },
  { q: "Este CRANDIT o carte motivațională?", a: "Nu în sensul clasic. Nu promite succes rapid și nu oferă formule simple. Este o carte de dezvoltare personală matură, construită în jurul lucidității, procesului și formării interioare." },
  { q: "Cui se adresează?", a: "Oamenilor interesați de dezvoltare personală matură, carieră, antreprenoriat, disciplină, leadership personal, reconstrucție interioară și rezultate durabile." },
  { q: "Ce problemă rezolvă?", a: "Ajută cititorul să înțeleagă de ce rezultatele importante nu apar imediat și ce trebuie să clarifice, să suporte, să repete, să ajusteze și să devină pentru a construi ceva durabil." },
  { q: "De ce este importantă claritatea?", a: "Pentru că îl ajută pe om să înțeleagă ce vrea, de ce vrea acel lucru, ce costuri implică și ce limite nu este dispus să sacrifice." },
  { q: "De ce este importantă repetiția?", a: "Pentru că transformă intenția în structură. Fără repetiție, dorința rămâne fragilă și dependentă de starea de moment." },
  { q: "De ce sunt importante timpul și toposul?", a: "Timpul oferă maturizare, iar toposul oferă loc, context și mediu. Niciun rezultat solid nu se construiește în vid." },
];

const quickFacts = [
  { k: "Titlu", v: "CRANDIT — Mitul succesului peste noapte" },
  { k: "Autor", v: "Alexandru Matescu" },
  { k: "Gen", v: "Nonficțiune practică, dezvoltare personală matură, eseu aplicat" },
  { k: "Temă centrală", v: "Succesul durabil și procesul real din spatele rezultatelor" },
  { k: "Structură", v: "7 legi și 7 instrumente" },
  { k: "Public", v: "Cititori interesați de dezvoltare personală, carieră, antreprenoriat, disciplină și leadership personal" },
  { k: "Mesaj central", v: "Succesul nu se întâmplă peste noapte; succesul se construiește" },
];

const GoldEyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-[#c9a86c] font-medium">
    <span className="inline-block h-px w-8 bg-[#c9a86c]/40" />
    {children}
  </p>
);

const Section = ({
  children,
  lifted = false,
}: {
  children: React.ReactNode;
  lifted?: boolean;
}) => (
  <section className={`${lifted ? inkLift : ink} text-[#f5f0e8]`}>
    {children}
  </section>
);

const Book = () => {
  return (
    <div className="bg-[#151515] text-[#f5f0e8]">
      {/* HERO */}
      <section className="bg-[#151515] text-[#c9a86c]">
        <div className="container-editorial pt-20 md:pt-32 pb-20 md:pb-28 flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c9a86c] mb-8 font-sans">
            Carte · În lucru · 2026
          </p>
          <div className="w-full max-w-md">
            <img
              src={cranditCover}
              alt="Coperta cărții CRANDIT — Mitul succesului peste noapte de Alexandru Matescu"
              className="w-full aspect-[3/4] object-cover border border-[#c9a86c]/15 shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* PE SCURT */}
      <Section>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Pe scurt</GoldEyebrow>
          </div>
          <div className="md:col-span-8 md:text-[1.0625rem] leading-[1.8] text-[#f5f0e8]/85">
            <p>
              <strong className="text-[#c9a86c]">CRANDIT — Mitul succesului peste noapte</strong> este o carte de nonficțiune practică despre realitatea din spatele succesului durabil. Cartea demontează ideea succesului rapid și arată că rezultatele reale apar prin proces, repetiție, costuri asumate, acțiune, direcție, integritate, timp și context.
            </p>
            <p>
              Cartea nu este o promisiune motivațională și nu oferă o rețetă rapidă. Este o hartă de maturizare pentru oamenii care vor să construiască ceva real în carieră, antreprenoriat, viață personală sau creație.
            </p>
          </div>
        </div>
      </Section>

      {/* CE ESTE CRANDIT */}
      <Section lifted>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Ce este CRANDIT?</GoldEyebrow>
            <p className="mt-4 text-sm text-[#f5f0e8]/60">
              Un sistem de reflecție și construcție personală format din șapte legi și șapte instrumente. Fiecare literă descrie o etapă importantă din procesul prin care omul construiește rezultate durabile.
            </p>
          </div>
          <div className="md:col-span-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="border-b border-[#c9a86c]/15">
                    <th className="py-3 pr-4 font-trajan text-[#c9a86c]">Literă</th>
                    <th className="py-3 pr-4 font-trajan text-[#c9a86c]">Lege + Instrument</th>
                    <th className="py-3 font-trajan text-[#c9a86c]">Explicație</th>
                  </tr>
                </thead>
                <tbody>
                  {acronym.map((row) => (
                    <tr key={row.letter} className="border-b border-[#c9a86c]/10">
                      <td className="py-4 pr-4 align-top">
                        <span className="font-trajan text-2xl text-[#c9a86c]">{row.letter}</span>
                      </td>
                      <td className="py-4 pr-4 align-top">
                        <span className="font-medium text-[#f5f0e8]">{row.law}</span>
                        <span className="text-[#c9a86c]/60"> + </span>
                        <span className="font-medium text-[#f5f0e8]">{row.tool}</span>
                      </td>
                      <td className="py-4 align-top text-[#f5f0e8]/65">{row.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* DESPRE CARTE */}
      <Section>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Despre carte</GoldEyebrow>
          </div>
          <div className="md:col-span-8 md:text-[1.0625rem] leading-[1.8] text-[#f5f0e8]/85">
            <p>
              CRANDIT — Mitul succesului peste noapte critică felul în care cultura modernă simplifică succesul. De multe ori, oamenii văd doar rezultatul final și îl numesc talent, noroc sau moment potrivit, fără să vadă anii de muncă, costurile invizibile, eșecurile, repetițiile și transformările interioare care au făcut acel rezultat posibil.
            </p>
            <p>
              Cartea arată că succesul real nu este un eveniment izolat, ci efectul unui proces. Înainte ca rezultatul să devină vizibil în exterior, omul trebuie să devină suficient de clar, răbdător, disciplinat și integru pentru a putea susține ceea ce spune că își dorește.
            </p>
            <p>
              Volumul este construit ca un sistem în șapte capitole principale, fiecare având o lege și un instrument. Legea descrie o realitate inevitabilă a construcției, iar instrumentul oferă o cale practică prin care cititorul poate lucra cu acea realitate.
            </p>
            <blockquote className="my-10 border-l-2 border-[#c9a86c]/60 pl-6 italic font-trajan text-xl text-[#f5f0e8]/80">
              „Cele mai multe povești pe care le invidiem sunt versiuni scurtate ale unor vieți pe care nu le-am vrea integral."
            </blockquote>
          </div>
        </div>
      </Section>

      {/* IDEEA PRINCIPALĂ */}
      <Section lifted>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Ideea principală</GoldEyebrow>
          </div>
          <div className="md:col-span-8 md:text-[1.0625rem] leading-[1.8] text-[#f5f0e8]/85">
            <p>
              Ideea principală a cărții este că succesul nu apare brusc, ci se construiește printr-un proces lung, repetitiv și formator. Ceea ce lumea numește succes peste noapte este, de obicei, doar momentul în care un proces nevăzut devine vizibil.
            </p>
            <p>
              Cartea susține că omul nu obține ceva mare doar pentru că își dorește suficient de mult. Omul obține ceva mare atunci când devine suficient de solid încât să construiască, să suporte și să păstreze acel rezultat.
            </p>
          </div>
        </div>
      </Section>

      {/* PENTRU CINE */}
      <Section>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Cui se adresează?</GoldEyebrow>
          </div>
          <div className="md:col-span-8">
            <p className="md:text-[1.0625rem] leading-[1.8] text-[#f5f0e8]/85 mb-8">
              CRANDIT se adresează oamenilor interesați de dezvoltare personală matură, carieră, antreprenoriat, disciplină, leadership personal, reconstrucție interioară și sens. Cartea este potrivită pentru:
            </p>
            <div className="grid sm:grid-cols-2 gap-px bg-[#c9a86c]/10 border border-[#c9a86c]/10">
              {[
                "Oameni care vor să construiască ceva pe termen lung",
                "Antreprenori, creatori, profesioniști și lideri",
                "Oameni care muncesc mult, dar nu văd încă rezultate",
                "Oameni care se confruntă cu lipsa de validare, comparația sau îndoiala",
                "Cititori interesați de succes, disciplină, identitate, claritate și maturizare personală",
              ].map((item) => (
                <div key={item} className="bg-[#151515] p-6 text-sm text-[#f5f0e8]/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CE FACE DIFERIT */}
      <Section lifted>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Ce face cartea diferită?</GoldEyebrow>
          </div>
          <div className="md:col-span-8 md:text-[1.0625rem] leading-[1.8] text-[#f5f0e8]/85">
            <p>
              CRANDIT este diferită de cărțile motivaționale clasice pentru că nu promite succes rapid și nu oferă formule simple. Cartea nu încearcă să producă entuziasm de moment, ci luciditate, structură și maturizare.
            </p>
            <p>Volumul combină:</p>
            <ul className="list-disc pl-6 space-y-2 marker:text-[#c9a86c]">
              <li>eseu personal;</li>
              <li>analiză practică;</li>
              <li>sistem conceptual;</li>
              <li>exerciții de autoevaluare;</li>
              <li>întrebări aplicabile în viața cititorului.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* STRUCTURA */}
      <Section>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Structura cărții</GoldEyebrow>
            <p className="mt-4 text-sm text-[#f5f0e8]/60">Cartea este construită în jurul a șapte capitole principale, plus un manifest, o introducere și un capitol de încheiere.</p>
          </div>
          <div className="md:col-span-8">
            <ul className="divide-y divide-[#c9a86c]/10 border-y border-[#c9a86c]/10">
              {chapters.map((c) => (
                <li key={c.n} className="py-6 grid grid-cols-[3rem_1fr] gap-6 items-baseline">
                  <span className="font-trajan text-2xl text-[#c9a86c]/60">{c.n}.</span>
                  <div>
                    <p className="font-trajan text-2xl text-balance text-[#c9a86c]">
                      <span className="text-[#c9a86c]/60">{c.letter}.</span> {c.title}
                    </p>
                    <p className="mt-1 text-[#f5f0e8]/65">{c.note}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-[#f5f0e8]/60">
              Cartea include și un manifest, o introducere a celor șapte legi și șapte instrumente, exerciții de autoevaluare și un capitol final intitulat <em>După noapte, rămâne omul</em>.
            </p>
          </div>
        </div>
      </Section>

      {/* CUPRINSUL DETALIAT */}
      <Section lifted>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Cuprinsul cărții</GoldEyebrow>
          </div>
          <div className="md:col-span-8 md:text-[1.0625rem] leading-[1.8] text-[#f5f0e8]/85">
            <p><strong className="text-[#c9a86c]">Manifest</strong> — Cartea începe cu un manifest despre construcția reală a succesului. Manifestul afirmă că succesul nu se întâmplă, nu se primește și nu se promite, ci se construiește.</p>
            <p><strong className="text-[#c9a86c]">Cele 7 legi și cele 7 instrumente</strong> — Această secțiune prezintă sistemul CRANDIT și explică cele șapte perechi conceptuale pe care se bazează cartea.</p>
            {chapters.map((c) => (
              <p key={c.n}>
                <strong className="text-[#c9a86c]">Capitolul {c.n}: {c.letter}. {c.title}</strong> — {c.note}
              </p>
            ))}
            <p><strong className="text-[#c9a86c]">Capitol de încheiere: După noapte, rămâne omul</strong> — Cartea se închide cu ideea că, dincolo de rezultat, ceea ce rămâne este omul format prin drum. După succes, întrebarea esențială nu este doar ce ai obținut, ci cine ai devenit.</p>
          </div>
        </div>
      </Section>

      {/* 5 ÎNTREBĂRI */}
      <Section>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Cele 5 întrebări esențiale</GoldEyebrow>
            <p className="mt-4 text-sm text-[#f5f0e8]/60">Fiecare capitol termină cu cinci întrebări aplicabile în viața cititorului.</p>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-10">
              {questions.map((q) => (
                <div key={q.chapter}>
                  <p className="font-trajan text-xl text-[#c9a86c] mb-4">{q.chapter}</p>
                  <ol className="list-decimal list-inside space-y-2 text-sm text-[#f5f0e8]/70 marker:text-[#c9a86c]">
                    {q.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CONCEPTE-CHEIE */}
      <Section lifted>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Concepte-cheie</GoldEyebrow>
          </div>
          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-2 gap-px bg-[#c9a86c]/10 border border-[#c9a86c]/10">
              {concepts.map((c) => (
                <div key={c.t} className="bg-[#151515] p-6">
                  <p className="font-trajan text-lg text-[#c9a86c]">{c.t}</p>
                  <p className="mt-2 text-sm text-[#f5f0e8]/70">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CITATE */}
      <Section>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Citate reprezentative</GoldEyebrow>
          </div>
          <div className="md:col-span-8">
            <div className="space-y-6">
              {quotes.map((q, i) => (
                <blockquote key={i} className="font-trajan italic text-2xl leading-snug text-balance text-[#c9a86c]">
                  „{q}”
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* REZUMAT */}
      <Section lifted>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.22em] text-[#c9a86c]/60">Rezumatul cărții</p>
          </div>
          <div className="md:col-span-8 md:text-[1.0625rem] leading-[1.8] text-[#f5f0e8]/85">
            <p>
              CRANDIT — Mitul succesului peste noapte este o carte despre procesul nevăzut din spatele succesului durabil. Cartea arată că rezultatele importante nu apar brusc, ci sunt construite în timp, prin costuri asumate, claritate, răbdare, repetiție, acțiune, direcție, identitate, integritate, context și maturizare.
            </p>
            <p>
              Volumul propune un sistem format din șapte legi și șapte instrumente, fiecare capitol ajutând cititorul să înțeleagă mai bine ce presupune să construiască ceva real. Cartea nu oferă o rețetă rapidă, ci o hartă lucidă a drumului lung dintre dorință și rezultat.
            </p>
            <p>
              Mesajul central este că succesul real nu începe cu validarea exterioară, ci cu formarea interioară a omului care poate duce, susține și păstra ceea ce construiește.
            </p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Întrebări și răspunsuri</GoldEyebrow>
          </div>
          <div className="md:col-span-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-b border-[#c9a86c]/10">
                  <AccordionTrigger className="text-left font-trajan text-lg text-[#c9a86c] hover:no-underline">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-[#f5f0e8]/70">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Section>

      {/* DATE RAPIDE */}
      <Section lifted>
        <div className="container-editorial py-20 md:py-28 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <GoldEyebrow>Date rapide</GoldEyebrow>
          </div>
          <div className="md:col-span-8">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-sm">
                <tbody>
                  {quickFacts.map((fact, i) => (
                    <tr key={i} className="border-b border-[#c9a86c]/10">
                      <td className="py-4 pr-6 font-medium align-top w-1/3 text-[#c9a86c]">{fact.k}</td>
                      <td className="py-4 text-[#f5f0e8]/70 align-top">{fact.v}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Section>

      {/* WAITLIST */}
      <section className="bg-[#151515] container-editorial pb-24 pt-20">
        <NewsletterForm
          theme="crandit"
          list="crandit"
          title="Intră pe lista de așteptare."
          description="Primii cititori vor primi un fragment înainte de lansare și actualizări despre evoluția manuscrisului. Doar conținut despre carte — nimic altceva."
        />
      </section>
    </div>
  );
};

export default Book;
