export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string[];
};

export const categories = [
  "Claritate",
  "Disciplină",
  "Succes",
  "Muncă",
  "Tehnologie",
  "Leadership",
  "Viață personală",
  "Antreprenoriat",
] as const;

export const posts: Post[] = [
  {
    slug: "mitul-succesului-peste-noapte",
    title: "Mitul succesului peste noapte",
    subtitle: "De ce poveștile pe care le admirăm sunt aproape întotdeauna mai lungi decât par.",
    category: "Succes",
    date: "2026-05-12",
    readingTime: "9 min",
    excerpt:
      "Succesul vizibil este vârful unui aisberg de decizii mici, repetate, neglamoroase. Iar acest aisberg începe cu mult înainte ca cineva să se uite.",
    content: [
      "Cele mai multe povești de succes pe care le citim sunt deja editate. Au un început clar, un punct de cotitură și un final care pare inevitabil. În realitate, povestea originală e mai dezordonată, mai lentă și aproape niciodată liniară.",
      "Ceea ce numim „succes peste noapte” este, în cele mai multe cazuri, rezultatul unei perioade lungi în care nimeni nu a privit. Anii în care omul a construit fără audiență sunt anii în care s-a format de fapt.",
      "Iar întrebarea reală nu este „cum să reușesc repede?”, ci „ce sunt dispus să fac în mod constant, chiar și când nimeni nu observă?”.",
    ],
  },
  {
    slug: "de-ce-claritatea-costa",
    title: "De ce claritatea costă",
    subtitle: "Claritatea nu e un dar. Este o decizie repetată de a renunța la confortul ambiguității.",
    category: "Claritate",
    date: "2026-04-28",
    readingTime: "7 min",
    excerpt:
      "Ambiguitatea ne protejează de responsabilitate. Claritatea ne obligă să alegem — și să suportăm consecințele alegerii.",
    content: [
      "Suntem antrenați să credem că lipsa de claritate vine din lipsă de informație. De cele mai multe ori, vine din exces de opțiuni și din frica de a alege greșit.",
      "Claritatea are un preț: îți cere să renunți la variantele paralele de viață pe care le țineai deschise „pentru orice eventualitate”.",
    ],
  },
  {
    slug: "munca-in-era-inteligentei-artificiale",
    title: "Munca în era inteligenței artificiale",
    subtitle: "Ce rămâne uman când o parte tot mai mare din execuție devine automată.",
    category: "Tehnologie",
    date: "2026-04-10",
    readingTime: "11 min",
    excerpt:
      "AI-ul nu înlocuiește munca. Schimbă natura ei. Întrebarea nu e dacă ne va lua locul, ci ce vom face cu timpul recuperat.",
    content: [
      "Tehnologia a mutat mereu frontiera muncii. Diferența astăzi este viteza cu care o face și faptul că atinge inclusiv zone considerate, până ieri, exclusiv umane: scris, gândire, decizie.",
      "Răspunsul nu este să concurăm cu mașina pe terenul ei, ci să ne mutăm pe un teren pe care încă îl putem cultiva: claritatea intenției, judecata, responsabilitatea.",
    ],
  },
  {
    slug: "disciplina-ca-mecanism",
    title: "Disciplina ca mecanism, nu ca spectacol",
    subtitle: "Cea mai mare parte din disciplina reală este invizibilă și plictisitoare.",
    category: "Disciplină",
    date: "2026-03-22",
    readingTime: "6 min",
    excerpt:
      "Disciplina pe care o vedem online este, de obicei, performance. Disciplina care construiește ceva durabil este rutina banală pe care nu o postează nimeni.",
    content: [
      "Disciplina nu e o trăsătură eroică. Este un mecanism: un set de decizii pe care le iei o singură dată și pe care apoi le aperi de excepții.",
      "Spectacolul disciplinei consumă exact resursa pe care disciplina ar trebui să o conserve: atenția.",
    ],
  },
];
