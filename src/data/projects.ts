import tasteTheCornLogo from "@/assets/taste-the-corn-logo.png.asset.json";

export type ProjectStatus = "activ" | "în lucru" | "închis" | "concept";

export type ProjectSection = {
  eyebrow: string;
  content?: string;
  items?: string[];
};

export type ProjectMetadata = {
  perioada?: string;
  categorie?: string;
  locatie?: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  status: ProjectStatus;
  description: string;
  // Classic short-form fields (kept for legacy projects).
  why?: string;
  problem?: string;
  story?: string;
  lessons?: string[];
  currentStatus?: string;
  // Rich case-study layout (used by Taste the Corn and future projects).
  metadata?: ProjectMetadata;
  sections?: ProjectSection[];
  logo?: string;
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
    tagline: "N-ai cum să-i spui nu",
    status: "închis",
    description:
      "Taste the Corn a fost un concept de retail alimentar construit în jurul unei idei simple: aducerea pe piața din Sibiu a unei gustări rapide, sănătoase, hrănitoare, puțin calorice și delicioase. A fost un business construit, lansat, operat și testat în condiții reale — și o lecție directă despre idee, execuție și maturitate antreprenorială.",
    metadata: {
      perioada: "Implementare Ianuarie – Mai 2025 · Funcționare Mai – Decembrie 2025",
      categorie: "Antreprenoriat · Retail alimentar · Business local · Testare concept",
      locatie: "Sibiu, România",
    },
    logo: tasteTheCornLogo.url,
    sections: [
      {
        eyebrow: "Despre proiect",
        content:
          "Taste the Corn a fost un concept de retail alimentar construit în jurul unei idei simple: aducerea pe piața din Sibiu a unei gustări rapide, sănătoase, hrănitoare, puțin calorice și delicioase.\n\nProiectul a pornit dintr-o nevoie personală. Eu și Ștefana eram mereu în căutarea unor gustări care să susțină un stil alimentar mai atent, mai curat și mai echilibrat. Într-o piață locală saturată de produse congelate, produse de patiserie, covrigi, merdenele, simigerii, fast-food și junk food, simțeam că lipsește o variantă simplă, caldă, gustoasă și mai prietenoasă cu alegerile alimentare de zi cu zi.\n\nTaste the Corn a fost încercarea noastră de a transforma porumbul fiert, un produs familiar și iubit de mulți oameni, într-o experiență modernă de consum rapid, potrivită pentru un centru comercial.\n\nNu a fost doar o idee pe hârtie. A fost un business construit, lansat, operat și testat în condiții reale.",
      },
      {
        eyebrow: "Întrebarea de la care a pornit",
        content:
          "Întrebarea de la care a pornit Taste the Corn a fost simplă: Putem găsi un produs pe care să-l iubim noi și pe care să-l putem mânca oricând?\n\nCăutam o gustare care să fie rapidă, dar nu grea. Gustoasă, dar nu încărcată inutil. Sățioasă, dar nu exagerat de calorică. Potrivită pentru o pauză scurtă, pentru o zi aglomerată, pentru cineva care vrea să mănânce ceva bun fără să simtă că face un compromis major în alimentație.\n\nPorumbul fiert avea toate aceste calități. Era simplu. Era cunoscut. Era accesibil. Era hrănitor. Era ușor de personalizat. Și, mai ales, era un produs pe care noi îl consumam cu plăcere.\n\nDe aici a pornit ideea: dacă noi îl căutam, poate îl căutau și alții. Dacă nouă ne lipsea o astfel de opțiune în Sibiu, poate exista un loc real pentru ea într-un centru comercial. Taste the Corn a fost răspunsul nostru la această întrebare.",
      },
      {
        eyebrow: "Ce am construit",
        content:
          "În perioada mai – decembrie 2025, Taste the Corn a trecut de la idee la business operațional. Proiectul a inclus: dezvoltarea conceptului, definirea poziționării, crearea brandului, identitatea vizuală, înființarea firmei, alegerea locației, amenajarea punctului de vânzare, selectarea furnizorilor, definirea produselor și a toppingurilor, organizarea fluxului operațional, recrutarea și coordonarea personalului, administrarea activității zilnice, comunicarea pe social media, colaborări cu creatori locali de conținut din Sibiu, relația cu clienții, relația cu autoritățile și instituțiile implicate în funcționarea afacerii.\n\nPentru mine, Taste the Corn a fost una dintre cele mai clare întâlniri cu diferența dintre idee și execuție. Pe hârtie, multe lucruri par simple. În realitate, un business fizic este un mecanism viu, în care fiecare detaliu contează: produsul, oamenii, costurile, programul, comunicarea, traficul, energia echipei, autorizațiile, procedurile și capacitatea de a lua decizii rapide.",
      },
      {
        eyebrow: "Poziționarea produsului",
        content:
          "Taste the Corn a fost construit ca alternativă la gustările rapide dominante în spațiile comerciale: produse de patiserie, covrigi, foietaje, produse congelate, fast-food și alte opțiuni grele sau puternic procesate.\n\nNu am vrut să construim doar un produs gustos. Am vrut să construim un produs pe care să-l putem consuma și noi cu încredere. Porumbul fiert avea pentru noi o combinație rară: era rapid, era cald, era gustos, era familiar, era hrănitor, era relativ puțin caloric, era ușor de înțeles, putea fi adaptat prin toppinguri și putea fi servit într-un format modern.\n\nAceastă poziționare a fost importantă pentru felul în care am gândit businessul. Nu încercam să concurăm direct cu fast-food-ul clasic. Încercam să oferim o alternativă mai simplă și mai curată pentru oamenii care voiau ceva rapid, dar nu neapărat greu.",
      },
      {
        eyebrow: "Promovare și colaborări locale",
        content:
          "O parte importantă a proiectului a fost promovarea locală. Am lucrat cu creatori locali de conținut din Sibiu pentru a prezenta produsul, conceptul și experiența Taste the Corn către publicul local. Aceste colaborări ne-au ajutat să ducem brandul în fața unor comunități deja formate și să testăm modul în care produsul era perceput în afara comunicării făcute direct de noi.\n\nPentru un business local, astfel de colaborări au o valoare aparte. Nu este vorba doar despre vizibilitate. Este vorba despre încredere transferată. Atunci când un creator local vorbește despre un produs, el nu transmite doar informația că produsul există. Transmite și o formă de validare socială. Pentru un brand nou, aflat la început, acest lucru poate conta enorm.\n\nÎn același timp, am învățat că promovarea nu poate fi făcută doar prin impulsuri punctuale. Colaborările ajută, dar ele trebuie integrate într-o strategie mai clară de comunicare, cu mesaje consecvente, obiective definite și continuitate. Taste the Corn m-a învățat că marketingul local nu înseamnă doar să fii văzut. Înseamnă să fii înțeles, reținut și asociat constant cu o nevoie clară.",
      },
      {
        eyebrow: "Relația cu autoritățile și instituțiile",
        content:
          "Taste the Corn a fost și prima mea întâlnire reală cu toate straturile administrative ale unui business fizic din zona alimentară. Funcționarea unei astfel de afaceri nu depinde doar de produs, locație și clienți. Depinde și de relația cu instituțiile care reglementează, verifică și aprobă activitatea.\n\nÎn proces au existat interacțiuni cu instituții precum Registrul Comerțului, ANAF, DSP, DSV, ITM și alte autorități și structuri implicate în funcționarea legală a businessului.\n\nAceastă parte a proiectului a fost una dintre cele mai importante lecții. Am înțeles că, într-un business real, nu este suficient să ai energie, idee, produs și dorință de muncă. Trebuie să înțelegi cadrul legal, procedurile, autorizațiile, documentele, obligațiile și așteptările fiecărei instituții cu care intri în contact.\n\nUn lucru care m-a marcat a fost presiunea implicită ca antreprenorul să cunoască aproape perfect legislația și pașii necesari, chiar și atunci când legislația este generală, interpretabilă sau aplicabilă diferit în funcție de particularitățile fiecărui business. Pe hârtie, regulile par clare. În practică, fiecare afacere are particularități. Locația contează. Produsul contează. Fluxul contează. Echipamentele contează. Angajații contează. Tipul de servire contează. Spațiul contează. Iar multe lucruri le înțelegi cu adevărat abia atunci când treci prin ele.\n\nAm simțit diferența dintre cum se fac lucrurile într-un oraș precum Sibiu și cum eram obișnuit să văd lucrurile în Gorj. În Sibiu am întâlnit un nivel mai ridicat de profesionalism, exigență și presiune administrativă. Asta nu a fost neapărat confortabil, dar a fost formator. M-a obligat să privesc businessul mai matur. Nu ca pe o simplă inițiativă personală. Ci ca pe un mecanism care trebuie să respecte reguli, oameni, proceduri și responsabilități.",
      },
      {
        eyebrow: "Relația cu angajații",
        content:
          "Una dintre cele mai importante lecții ale proiectului a fost relația cu angajații. Înainte să ai angajați, este ușor să privești businessul doar prin ochii fondatorului: idee, costuri, vânzări, chirie, produs, promovare, profit, pierdere. Dar în momentul în care alți oameni depind de tine, lucrurile se schimbă.\n\nApar așteptări. Apar responsabilități. Apar programări. Apar nevoi personale. Apar probleme. Apar zile bune și zile grele. Apar diferențe între ce ai vrea să se întâmple și ce se întâmplă efectiv într-o zi normală de lucru.\n\nTaste the Corn m-a învățat că angajații nu sunt doar „resursă umană”. Sunt oameni care vin cu propriile așteptări, propriile ritmuri, propriile dificultăți și propria nevoie de stabilitate. Pentru un antreprenor aflat la început, această responsabilitate este mai mare decât pare.\n\nNu administrezi doar un produs. Administrezi și încrederea unor oameni. Administrezi programul lor. Venitul lor. Energia lor. Modul în care înțeleg munca. Modul în care reprezintă brandul în fața clientului. Această parte a fost dificilă, dar extrem de importantă. M-a făcut să înțeleg că un business fizic nu funcționează doar prin ideea fondatorului, ci prin calitatea sistemului pe care îl construiești în jurul oamenilor care îl duc zilnic mai departe.",
      },
      {
        eyebrow: "Ce s-a întâmplat",
        content:
          "Businessul a devenit operațional în 2025 și a fost testat în condiții reale de piață. În timpul derulării proiectului, am întâlnit mai mulți factori care au influențat rezultatul final: timing dificil, context economic și socio-politic instabil, consum în scădere, trafic și conversie sub așteptări, marketing insuficient de structurat, dificultăți legate de personal, presiune operațională, costuri fixe, complexitate administrativă, lipsa de experiență într-un business fizic de retail alimentar și dificultatea de a transforma o idee bună într-un sistem sustenabil.\n\nFiecare dintre acești factori a contribuit la concluzia că modelul, în forma testată atunci, nu era suficient de sustenabil. Proiectul a fost finalizat în decembrie 2025, după perioada de testare în piață.",
      },
      {
        eyebrow: "De ce a fost finalizat",
        content:
          "Taste the Corn a fost finalizat după ce am înțeles că modelul de business nu avea, în forma respectivă, suficientă stabilitate pentru a continua fără un consum disproporționat de resurse.\n\nDecizia nu a fost una ușoară, dar a fost una necesară. Uneori, maturitatea antreprenorială nu înseamnă să continui cu orice preț. Înseamnă să înțelegi când un proiect și-a oferit lecțiile, când datele sunt suficient de clare și când continuarea lui ar însemna mai mult atașament decât strategie.",
      },
      {
        eyebrow: "Ce am învățat",
        items: [
          "Am înțeles că o idee bună nu este suficientă.",
          "Am înțeles că un produs simplu are nevoie de un sistem foarte clar în spate.",
          "Am înțeles că traficul nu înseamnă automat vânzări.",
          "Am înțeles că marketingul nu poate fi făcut haotic și nici lăsat doar în seama entuziasmului de început.",
          "Am înțeles că oamenii sunt una dintre cele mai importante și mai dificile componente ale unui business fizic.",
          "Am înțeles că relația cu angajații presupune responsabilitate reală, nu doar coordonare.",
          "Am înțeles că fiecare instituție, autorizație și procedură face parte din realitatea businessului, chiar dacă antreprenorul aflat la început nu știe mereu ce nu știe.",
          "Am înțeles că legislația poate fi generală, dar aplicarea ei este plină de particularități.",
          "Am înțeles că un business alimentar presupune mult mai mult decât produsul pe care îl vinzi.",
          "Am înțeles că un brand nu trăiește doar prin logo, culori și postări, ci prin experiența completă pe care o oferă clientului.",
          "Am înțeles că retailul alimentar este mult mai greu decât pare din exterior.",
          "Și, poate cel mai important, am înțeles că un proiect poate fi valoros chiar și atunci când nu continuă.",
        ],
      },
      {
        eyebrow: "Ce a rămas după Taste the Corn",
        content:
          "Taste the Corn a rămas una dintre cele mai importante experiențe antreprenoriale ale mele. A fost o întâlnire directă cu realitatea businessului fizic, cu presiunea costurilor fixe, cu fragilitatea planurilor, cu responsabilitatea față de angajați, cu exigențele autorităților și cu diferența dintre construcția imaginată și construcția reală.\n\nProiectul a contribuit direct la felul în care privesc astăzi munca, execuția, riscul, disciplina și succesul. Multe dintre ideile pe care le-am explorat ulterior în CRANDIT – Mitul succesului peste noapte au fost confirmate sau clarificate prin această experiență.\n\nTaste the Corn nu a fost doar un business finalizat. A fost o lecție aplicată despre ce înseamnă să construiești ceva în realitate.",
      },
      {
        eyebrow: "Legătura cu celelalte proiecte",
        content:
          "Taste the Corn face parte din traseul mai larg prin care am încercat să înțeleg cum se construiesc rezultatele durabile. Dacă afacerea de familie m-a învățat ce înseamnă un business local construit pe nevoi reale, Taste the Corn m-a învățat ce înseamnă să duci un concept nou într-un mediu competitiv, cu presiune operațională ridicată și cu așteptări care trebuie validate rapid de piață.\n\nAceastă experiență a devenit parte din materialul real pe care se sprijină proiectele mele de scris, antreprenoriat și strategie.",
      },
    ],
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
    tagline: "O hartă turistică a României, documentată pe teren",
    status: "închis",
    description:
      "Atracțiile României a fost un proiect de documentare turistică a țării, construit între 2021 și 2023. Un site și un sistem de publicare constantă pe social media, organizate administrativ — pe județe, orașe și localități — cu obiective turistice fotografiate personal, pe teren.",
    metadata: {
      perioada: "2021 – 2023 · Doi ani de publicare constantă",
      categorie: "Turism · Content · Documentare · Patrimoniu",
      locatie: "România",
    },
    sections: [
      {
        eyebrow: "Despre proiect",
        content:
          "Atracțiile României a fost un proiect personal de documentare turistică a României, construit între 2021 și 2023. A pornit dintr-o observație simplă: România are un patrimoniu turistic remarcabil, dar prost documentat și greu de explorat metodic pentru cineva care vrea să-l descopere cap-coadă.\n\nMi-am propus să construiesc o hartă coerentă a țării, organizată administrativ — pe județe, apoi pe orașe și localități — iar în fiecare loc să documentez obiectivele turistice cu fotografii făcute de mine.",
      },
      {
        eyebrow: "Întrebarea de la care a pornit",
        content:
          "Putem construi un loc unic în care un turist român sau străin să găsească, organizat pe județe și localități, toate obiectivele turistice ale României, documentate vizual și descrise clar?\n\nÎn 2021, răspunsul la această întrebare nu exista într-o formă unitară. Informația era fragmentată între bloguri de călătorie, pagini instituționale incomplete și recenzii dispersate. Atracțiile României a fost încercarea mea de a oferi acest răspuns.",
      },
      {
        eyebrow: "Ce am construit",
        content:
          "În spatele proiectului au stat un site pe care l-am creat și administrat singur, început în 2021, și paginile de social media asociate. Am publicat constant, în fiecare luni, miercuri și vineri, câte o locație nouă. Ritmul acesta a fost coloana vertebrală a proiectului timp de doi ani.\n\nFiecare locație publicată a presupus deplasare, fotografie pe teren, selecție, editare, documentare a contextului istoric și cultural, redactarea descrierii și publicare în două canale paralele — site și social media.",
      },
      {
        eyebrow: "Cum era organizat conținutul",
        items: [
          "Structură administrativă: județ → oraș/localitate → obiectiv turistic.",
          "Fotografii originale, făcute personal pe teren, nu preluate din surse externe.",
          "Descrieri scurte, factuale, fără limbaj promoțional.",
          "Publicare ritmică: luni, miercuri, vineri — o locație nouă în fiecare zi de publicare.",
          "Distribuție dublă: site propriu + pagini de social media.",
        ],
      },
      {
        eyebrow: "Viziunea pe termen lung",
        content:
          "Pe termen lung îmi doream să depășesc limita efortului individual și să colaborez cu alte entități — autorități locale, fotografi, oameni pasionați de turism — pentru o acoperire mai amplă și mai rapidă a tuturor punctelor de interes din țară. Proiectul era gândit ca o platformă deschisă, nu ca un blog personal.",
      },
      {
        eyebrow: "De ce a fost finalizat",
        content:
          "Am finalizat proiectul după doi ani. Creșterea în online a rămas modestă, efortul de a documenta de unul singur o țară întreagă s-a dovedit copleșitor pentru o singură persoană, iar prioritățile mele s-au schimbat între timp.\n\nL-am dus până la capătul pe care mi l-am putut permite ca om care lucra solo. Nu a fost o închidere din eșec, ci o închidere din luciditate: scara proiectului depășea capacitatea unui singur om, iar trecerea la modelul colaborativ ar fi cerut un alt tip de angajament — financiar, organizațional și de timp — pe care nu mi-l puteam asuma în acel moment.",
      },
      {
        eyebrow: "Ce am învățat",
        items: [
          "Documentarea unei țări întregi nu este o muncă de o singură persoană.",
          "Ritmul constant de publicare este mai important decât volumul publicat într-o singură rafală.",
          "Un proiect de content are nevoie de un model de creștere clar, nu doar de pasiune.",
          "Diferența dintre o idee bună și o idee sustenabilă este modelul operațional din spate.",
          "Scalabilitatea nu se rezolvă cu mai mult efort individual, ci cu un sistem care permite contribuția mai multor oameni.",
          "A închide la timp un proiect este o formă de respect față de el și față de tine.",
        ],
      },
      {
        eyebrow: "Ce a rămas după Atracțiile României",
        content:
          "Atracțiile României a rămas una dintre experiențele mele formative în zona de content, documentare și publicare constantă. M-a învățat ce înseamnă să duci un proiect editorial pe termen lung, ce înseamnă disciplina de publicare și unde se află limita reală a efortului individual.\n\nMulte dintre lecțiile despre scalabilitate, despre diferența dintre idee și sistem, și despre construcția lentă a rezultatelor durabile — lecții care apar și în CRANDIT — au fost confirmate prin acest proiect.",
      },
    ],
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
