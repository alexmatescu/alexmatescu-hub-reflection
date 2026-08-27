export type LabPage = {
  to: string;
  label: string;
  lead: string;
  children?: LabPage[];
  /** Titlu SEO dedicat, dacă diferă de `label` (folosit doar pentru <title>). */
  seoTitle?: string;
  /** H1 dedicat, dacă diferă de `label` (folosit doar pentru titlul vizibil al paginii). */
  pageTitle?: string;
};

export const labNav: LabPage[] = [
  {
    to: "/lab/introducere",
    label: "Introducere",
    lead: "De ce contează AI Visibility Lab, cui i se adresează acest laborator și cum e organizat conținutul de mai jos.",
  },
  {
    to: "/lab/cercetare",
    label: "Cercetare",
    lead: "Studiile, observațiile și sursele pe care se bazează metodologia — de la definiții la modul în care motoarele AI selectează ce citează.",
    children: [
      {
        to: "/lab/cercetare/ce-este-geo-aeo",
        label: "Ce este GEO/AEO (AI Visibility Lab)",
        lead: "Definiții, termeni și diferența dintre a fi indexat și a fi citat de un model generativ.",
      },
      {
        to: "/lab/cercetare/cum-aleg-motoarele-ai",
        label: "Cum aleg motoarele AI ce citează",
        lead: "Semnalele de încredere, structură și autoritate care influențează selecția surselor în răspunsurile generate de AI.",
      },
      {
        to: "/lab/cercetare/seo-vs-geo",
        label: "SEO vs GEO",
        lead: "Ce rămâne valabil din SEO clasic, ce se schimbă complet și unde apar cele mai mari confuzii.",
      },
      {
        to: "/lab/cercetare/cum-se-masoara-ai-visibility",
        label: "Cum se măsoară AI Visibility",
        lead: "Indicatori, metode de tracking și limitele actuale ale măsurării prezenței într-un răspuns generat de AI.",
      },
      {
        to: "/lab/cercetare/glosar-geo-aeo",
        label: "Glosar GEO/AEO",
        lead: "Termenii esențiali — GEO, AEO, citare, entitate, sursă de încredere — explicați pe scurt și fără jargon inutil.",
      },
    ],
  },
  {
    to: "/lab/metodologie",
    label: "Metodologie",
    lead: "Cadrul de lucru aplicat în acest laborator: ipoteze, experimente și modul în care sunt validate rezultatele.",
    children: [
      {
        to: "/lab/metodologie/tabula-rasa-f0",
        label: "Tabula Rasa F0",
        lead: "Punctul de plecare al metodologiei: un site sau brand pornit de la zero, fără istoric, folosit ca teren de experimentare controlată.",
      },
    ],
  },
  {
    to: "/lab/experimente-publice",
    label: "Experimente publice",
    lead: "Teste publice, cu ipoteze declarate dinainte și rezultate publicate indiferent dacă confirmă sau infirmă ipoteza.",
  },
  {
    to: "/lab/articole",
    label: "Articole",
    seoTitle: "Articole GEO, AEO și AI Visibility Lan",
    pageTitle: "Articole GEO, AEO și AI Visibility Lab",
    lead: "Analize, cercetări și studii de caz despre GEO, AEO, SEO, AI Search, citarea surselor și vizibilitatea în ChatGPT, Google AI, Perplexity și alte sisteme generative.",
    children: [
      {
        to: "/lab/articole/istoria-cautarii-internet-evolutia-seo",
        label:
          "Istoria căutării pe internet: cum fiecare eră a creat un punct orb pe care optimizarea a încercat să-l exploateze",
        lead: "De la Archie și primele indexuri ale internetului la răspunsurile generative din 2026: momentele-cheie din evoluția căutării, originea disputată a termenului SEO și o ipoteză despre tiparul care se repetă.",
      },
      {
        to: "/lab/articole/motoare-cautare-comparatie-2026",
        label:
          "Motoarele de căutare comparate în 2026: cifrele care se contrazic, deciziile care au schimbat clasamentul și oamenii din spatele lor",
        lead: "Cotele de piață reale, de ce studiile diferă cu două ordine de mărime, și deciziile de distribuție care au decis fiecare schimbare de clasament din istoria căutării. Analiză AI Visibility Lab.",
      },
      {
        to: "/lab/articole/social-media-vizibilitate-ai",
        label: "De ce 10.000 de urmăritori pe LinkedIn nu te fac automat vizibil pentru AI",
        lead: "Cum diferă vizibilitatea umană de vizibilitatea AI în social media. Analiză bazată pe surse publice, studii comerciale tratate separat după metodologie și reguli operaționale pentru artefacte persistente, entity resolution și distribuție.",
      },
      {
        to: "/lab/articole/cat-dureaza-indexare-citare-ai",
        label:
          "Cât durează până apari în Google și cât până te citează AI-ul? Ce știm, ce nu știm și ce poți măsura",
        lead: "Ce documentează sursele oficiale despre crawl, indexare și apariția în răspunsurile AI, ce termene nu sunt publice și cum separi descoperirea, indexarea, clasarea și citarea. Analiză AI Visibility Lab.",
      },
      {
        to: "/lab/articole/paradoxul-site-ului-terminat",
        label:
          "Paradoxul site-ului terminat: același URL poate arăta diferit pentru om, crawler și instrumentul de audit",
        lead: "Studiu de caz pe un site React construit cu Lovable: un request generic primește SPA shell-ul, în timp ce documentația Lovable spune că crawlerele verificate primesc HTML pre-randat. Ce demonstrează testul, ce nu demonstrează și cum verifici corect metadata, canonicalizarea și crawlabilitatea.",
      },
      {
        to: "/lab/articole/metadata-citare-ai-studiu-de-caz",
        label:
          "Metadata și citarea AI: ce poate demonstra o citare identică și unde începe inferența",
        lead: "Studiu de caz AI Visibility Lab: după actualizarea metadata, un sistem AI a citat textual formularea publicată pe delamatescu.ro. Ce demonstrează exact match-ul, ce nu demonstrează și cum transformi observația într-un experiment reproductibil.",
      },
      {
        to: "/lab/articole/audit-site-fara-acces-cod",
        label:
          "Ce poți citi și ce poți schimba la un site fără acces la cod: ghid de audit din exterior",
        lead: "Ce poți observa din exteriorul unui site, ce poți modifica fără acces la repository și unde se termină dovada tehnică și începe inferența. Ghid AI Visibility Lab bazat pe documentație oficială și teste reproductibile.",
      },
      {
        to: "/lab/articole/cuvant-cheie-vs-fraza-tokenizare",
        label:
          "Cuvânt-cheie vs frază în AI Search: query rewriting, tokenizare și ce putem spune corect despre limba română",
        lead: "Cum rescriu ChatGPT Search și Google AI Search interogările, ce este query fan-out, cum funcționează tokenizarea și de ce diferențele dintre limbi trebuie măsurate cu tokenizerul real, nu estimate din octeți.",
      },
      {
        to: "/lab/articole/paradoxul-specificitatii-continut-generic",
        label:
          "Paradoxul specificității: când contextul schimbă răspunsul și când doar fragmentează conținutul",
        lead: "Specificitatea ajută când adaugă informație care schimbă răspunsul. Devine contraproductivă când multiplică pagini sau introduce constrângeri fără valoare. Analiză AI Visibility Lab despre relevance, query fan-out și doorway pages.",
      },
      {
        to: "/lab/articole/ce-este-entitate-ai-studiu-de-caz",
        label:
          "Ce este o entitate pentru AI și motoarele de căutare. Studiu de caz: de ce internetul mă asociază cu porumbul",
        lead: "Ce înseamnă entity resolution, cum apar coliziunea, fragmentarea și contaminarea identității și ce poate demonstra un studiu de caz real fără a inventa mecanisme interne ale Google sau sistemelor AI.",
      },
      {
        to: "/lab/articole/harta-de-citare-mentiuni-externe-romania",
        label:
          "Harta de citare: cum afli empiric ce surse contează pentru vizibilitatea AI în România",
        lead: "Cum construiești o hartă de citare pentru nișa ta, cum separi mențiunile de citări, ce arată studiile Muck Rack, AirOps și Ahrefs și de ce prezența externă trebuie măsurată, nu presupusă.",
      },
      {
        to: "/lab/articole/decalaj-viteza-ai-adoptie-2026",
        label:
          "407 lansări AI urmărite în șapte luni, 17,8% utilizare: decalajul dintre viteza AI și viteza societății în 2026",
        lead: "Analiză verificată a ritmului lansărilor AI și a adopției în 2026: 407 lansări urmărite editorial, 17,8% utilizare GenAI globală în Q1 2026, diferențe de metodologie între Microsoft, Eurostat, OECD, McKinsey și PwC, plus date pentru România.",
      },
    ],
  },
  {
    to: "/lab/audit-ai-visibility",
    label: "Audit AI Visibility Lab",
    lead: "Evaluare a prezenței tale în răspunsurile modelelor generative: ce spun despre tine, ce lipsește, ce trebuie corectat.",
  },
  {
    to: "/lab/despre-laborator",
    label: "Despre laborator",
    lead: "Cine construiește acest laborator, de ce există și ce înseamnă rigoare într-un domeniu încă tânăr.",
  },
];

export const labPagesFlat: LabPage[] = labNav.flatMap((item) =>
  item.children ? [item, ...item.children] : [item],
);

export const findLabPage = (pathname: string): LabPage | undefined => {
  const clean = pathname.replace(/\/+$/, "");
  return labPagesFlat.find((p) => p.to === clean);
};

export const findLabParent = (childTo: string): LabPage | undefined =>
  labNav.find((p) => p.children?.some((c) => c.to === childTo));
