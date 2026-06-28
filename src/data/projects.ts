export type ProjectStatus = "activ" | "în lucru" | "închis" | "concept";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  description: string;
  why: string;
  problem: string;
  story: string;
  lessons: string[];
  currentStatus: string;
  related: string[]; // post slugs
};

export const projects: Project[] = [
  {
    slug: "crandit",
    title: "CRANDIT",
    tagline: "Mitul succesului peste noapte",
    status: "în lucru",
    description:
      "Un proiect de carte despre succes, disciplină, identitate și iluzia ascensiunii rapide. O privire onestă asupra a ceea ce se întâmplă, de fapt, în spatele poveștilor pe care le admirăm.",
    why: "Am vrut să scriu cartea pe care aș fi avut nevoie să o citesc la 25 de ani — fără promisiuni, fără rețete, doar o hartă realistă a drumului.",
    problem:
      "Cultura succesului peste noapte deformează așteptările unei întregi generații. Crează presiune, nu claritate.",
    story:
      "Cartea s-a născut din note acumulate ani la rând: observații din corporație, antreprenoriat, scris și conversații cu oameni care construiseră ceva real. Structura a apărut abia după ce am acceptat că nu vreau să scriu o carte motivațională.",
    lessons: [
      "O carte bună nu se scrie din ambiție, ci din onestitate.",
      "Cititorul simte imediat când autorul se preface.",
      "Disciplina de a scrie zilnic contează mai mult decât inspirația.",
    ],
    currentStatus: "Manuscris în lucru. Lista de așteptare deschisă pentru primii cititori.",
    related: ["mitul-succesului-peste-noapte", "disciplina-ca-mecanism"],
  },
  {
    slug: "taste-the-corn",
    title: "Taste the Corn",
    tagline: "Un experiment antreprenorial în lumea reală",
    status: "închis",
    description:
      "Concept food testat într-un mall — o lecție directă despre operațiuni, oameni, costuri și diferența dintre o idee bună pe hârtie și o idee care funcționează în piață.",
    why: "Voiam să înțeleg antreprenoriatul nu din cărți, ci din contact direct cu clientul, cu furnizorii și cu propriile limite.",
    problem: "Cum construiești un produs simplu, repetabil, profitabil, într-un mediu cu chirie mare și flux variabil de clienți?",
    story:
      "Am învățat mai mult în câteva luni de operare decât în ani de teorie. Proiectul a fost închis intenționat după ce a livrat lecțiile pe care le căutam.",
    lessons: [
      "Marja se câștigă în detalii operaționale, nu în concept.",
      "Locația rezolvă sau distruge un business mic.",
      "A închide la timp este o decizie de business, nu un eșec.",
    ],
    currentStatus: "Închis. Lecțiile au intrat în următoarele proiecte.",
    related: [],
  },
  {
    slug: "geo-ai-visibility",
    title: "GEO / AI Visibility",
    tagline: "Vizibilitate în era căutării generative",
    status: "concept",
    description:
      "O direcție de lucru dedicată Generative Engine Optimization: cum sunt selectate, citate și expuse brandurile în răspunsurile generate de AI.",
    why: "SEO clasic se transformă. Cine înțelege primul cum funcționează vizibilitatea în LLM-uri are un avantaj real.",
    problem: "Cum optimizezi prezența unui brand sau autor într-un ecosistem în care răspunsul nu mai este o listă de linkuri?",
    story:
      "Pornește de la observații din propriul proces de scris și publicare. Va deveni un serviciu și un set de materiale publice.",
    lessons: [
      "Conținutul structurat și citabil bate conținutul scris pentru click.",
      "Autoritatea de domeniu se redefinește în jurul faptelor verificabile.",
    ],
    currentStatus: "Concept în dezvoltare. Primele studii de caz în pregătire.",
    related: ["munca-in-era-inteligentei-artificiale"],
  },
  {
    slug: "coaching-mentoring",
    title: "Coaching & Mentoring",
    tagline: "Lucrul direct, 1 la 1, cu oameni serioși",
    status: "concept",
    description:
      "O direcție viitoare de coaching și mentoring construită pe experiența de inginerie, antreprenoriat și scris. Pentru oameni care vor claritate, nu motivație.",
    why: "Cele mai utile conversații pe care le-am avut nu au fost cu coach-i, ci cu oameni care construiseră ceva real și vorbeau drept.",
    problem: "Cum oferi un cadru de lucru serios, fără să intri în clișeele industriei de dezvoltare personală?",
    story: "Modelul se conturează în timp, dintr-o practică selectivă cu un număr mic de oameni.",
    lessons: ["Mai puțini clienți, dar potriviți, schimbă natura muncii."],
    currentStatus: "În definire. Disponibilitate limitată.",
    related: ["de-ce-claritatea-costa"],
  },
  {
    slug: "leadership-artificial",
    title: "Leadership Artificial",
    tagline: "Cum conducem fără să devenim sintetici",
    status: "concept",
    description:
      "Concept pentru o carte și un proiect despre leadership în era AI. Despre ce înseamnă să fii lider când o parte din decizie este delegată mașinii.",
    why: "Discuția despre AI s-a polarizat între panică și hype. Lipsește mijlocul: ce facem, concret, ca lideri.",
    problem: "Cum păstrezi judecata umană în organizații care optimizează tot mai mult cu modele?",
    story: "Notele cresc în paralel cu CRANDIT. Va fi un proiect mai lung, mai dens, mai tehnic.",
    lessons: ["Întrebările bune devin mai valoroase decât răspunsurile rapide."],
    currentStatus: "Concept timpuriu. Note și schițe în acumulare.",
    related: ["munca-in-era-inteligentei-artificiale"],
  },
  {
    slug: "ovb",
    title: "OVB",
    tagline: "Educație financiară și distribuție de soluții de protecție",
    status: "închis",
    description:
      "O etapă de lucru în domeniul financiar, unde am învățat cum se construiesc relații de încredere cu clienții, cum se comunică riscul și cum funcționează distribuția de soluții financiare în piața românească.",
    why: "Voiam să înțeleg mecanismele financiare reale, nu doar teoria, și să lucrez direct cu oameni și decizii cu impact pe termen lung.",
    problem: "Cum educi oamenii să ia decizii financiare informate într-un mediu cu mult zgomot și oferte agresive?",
    story: "A fost o experiență de teren despre vânzare consultativă, planificare și relații pe termen lung. Proiectul s-a închis, dar lecțiile rămân în felul în care privesc riscul și încrederea.",
    lessons: [
      "Încrederea se câștigă în ani, nu în pitch-uri.",
      "Oamenii cumpără claritate, nu produse.",
      "A spune nu la o vânzare greșită este o strategie pe termen lung.",
    ],
    currentStatus: "Închis. Experiență integrată în modul de a privi businessul și finanțele personale.",
    related: [],
  },
  {
    slug: "atractiile-romaniei",
    title: "Atracțiile României",
    tagline: "Conținut despre locurile care formează identitatea românească",
    status: "concept",
    description:
      "Un proiect de content și storytelling despre atracțiile, tradițiile și locurile care definesc România. O direcție de lucru la intersecția dintre turism, cultură și identitate.",
    why: "Cred că România are o poveste prea fragmentată. Vreau să o adun în forme de conținut clare, utile și frumoase.",
    problem: "Cum prezinti locurile și tradițiile românești fără clișeu și fără kitsch?",
    story: "Concept în formare, pornit din observații personale și din experiența de a vedea ce funcționează în conținutul online.",
    lessons: [
      "Autenticitatea bate perfectul estetic.",
      "Conținutul local are nevoie de structură ca să fie descoperit.",
    ],
    currentStatus: "Concept în dezvoltare. Primele direcții de conținut în testare.",
    related: [],
  },
  {
    slug: "afacerea-de-familie",
    title: "Afacerea de familie",
    tagline: "Construit împreună, gestionat cu limite clare",
    status: "activ",
    description:
      "Un proiect antreprenorial dezvoltat în familie, despre cum se construiește un business care îmbină resurse comune, încredere și reguli clare între oameni apropiați.",
    why: "Familia este cea mai naturală alianță, dar și cel mai sensibil teren pentru decizii de business. Vreau să înțeleg cum funcționează limitele sănătoase.",
    problem: "Cum separi emoția de decizie într-un business în care partenerii sunt și rude?",
    story: "În desfășurare. Lecțiile apar din gestionarea zilnică, din roluri și din felul în care comunicăm așteptările.",
    lessons: [
      "Rolurile clare salvează relațiile.",
      "Transparența financiară este obligatorie.",
      "A face business în familie înseamnă să înveți să ieși din conversații fără să le personalizezi.",
    ],
    currentStatus: "Activ. În evoluție continuă.",
    related: [],
  },
  {
    slug: "afacerea-cu-haine",
    title: "Afacerea cu haine",
    tagline: "Produs fizic, decizii reale, lecții de retail",
    status: "închis",
    description:
      "Un experiment antreprenorial în lumea produselor fizice — haine și accesorii. O lecție despre stocuri, sezonalitate, gustul clienților și diferența dintre a vrea un produs și a-l vinde sustenabil.",
    why: "Voiam să înțeleg retailul din interior: aprovizionare, marjă, rotirea stocului și relația cu clientul final.",
    problem: "Cum construiești un brand de produse fizice fără capital uriaș și fără a rămâne cu stocuri blocate?",
    story: "Proiectul a funcționat o perioadă, a livrat lecții și a fost închis intenționat înainte să devină o capcană de cash-flow.",
    lessons: [
      "Stocul este un risc, nu un activ.",
      "Sezonalitatea poate distruge un business cu marjă bună.",
      "A închise la timp este parte din strategie.",
    ],
    currentStatus: "Închis. Lecțiile au fost integrate în alte proiecte.",
    related: [],
  },
];
