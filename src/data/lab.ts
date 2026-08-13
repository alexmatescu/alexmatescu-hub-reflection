export type LabPage = {
  to: string;
  label: string;
  lead: string;
  children?: LabPage[];
};

export const labNav: LabPage[] = [
  {
    to: "/lab/introducere",
    label: "Introducere",
    lead: "De ce contează AI Visibility, cui i se adresează acest laborator și cum e organizat conținutul de mai jos.",
  },
  {
    to: "/lab/cercetare",
    label: "Cercetare",
    lead: "Studiile, observațiile și sursele pe care se bazează metodologia — de la definiții la modul în care motoarele AI selectează ce citează.",
    children: [
      {
        to: "/lab/cercetare/ce-este-geo-aeo",
        label: "Ce este GEO/AEO (AI Visibility)",
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
    lead: "Articole, analize și note de lucru despre GEO, AEO și vizibilitatea în motoarele generative.",
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
    ],
  },
  {
    to: "/lab/audit-ai-visibility",
    label: "Audit AI Visibility",
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
