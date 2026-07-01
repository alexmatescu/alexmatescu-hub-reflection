import tasteTheCornLogo from "@/assets/taste-the-corn-logo.png.asset.json";
import ovbLogo from "@/assets/ovb-logo.png.asset.json";

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
    tagline: "Vânzări, educație financiară și dezvoltare personală",
    status: "închis",
    description:
      "OVB a fost una dintre cele mai importante experiențe de dezvoltare personală și profesională din parcursul meu. Am intrat în zona vânzărilor în decembrie 2022 și am finalizat etapa în decembrie 2024, după doi ani de creștere intensă în domeniul asigurărilor de viață, consultanței financiare și educației financiare.",
    metadata: {
      perioada: "Decembrie 2022 – Decembrie 2024",
      categorie: "Vânzări • Consultanță financiară • Educație financiară • Dezvoltare personală",
      locatie: "România",
    },
    logo: ovbLogo.url,
    sections: [
      {
        eyebrow: "Despre proiect",
        content:
          "OVB a fost una dintre cele mai importante experiențe de dezvoltare personală și profesională din parcursul meu.\n\nAm intrat în zona vânzărilor în decembrie 2022, într-o perioadă în care locuiam din nou acasă, la părinți, și în care descoperisem intens educația financiară, investițiile, cursurile online, productivitatea și ideea de creștere accelerată.\n\nParcursesem cursuri basic de educație financiară și investiții, citeam materiale despre bursă și aveam senzația că descoperisem un drum posibil spre libertate financiară. Totul era încă vag, dar suficient de puternic încât să-mi aprindă imaginația.\n\nSimțeam că investițiile ar putea fi șansa mea. Dar, în același timp, aveam nevoie de venituri mai mari ca să pot investi. Așa a apărut ideea de a intra în vânzări.",
      },
      {
        eyebrow: "Întrebarea de la care a pornit",
        content:
          "Întrebarea din spatele acestei etape a fost simplă: Cum pot să-mi suplimentez veniturile și să intru într-un domeniu care mă obligă să cresc?\n\nCăutam mai mult decât bani. Căutam un mediu care să mă scoată din zona tehnică, liniară și previzibilă a jobului corporate. Căutam oameni dinamici, conversații despre creștere, educație financiară, dezvoltare personală și posibilitatea de a construi ceva în paralel cu profesia mea de inginer.\n\nDomeniul vânzărilor mă atrăgea pentru că părea locul în care teoria despre comunicare, influență, disciplină, încredere și dezvoltare personală era testată direct în realitate.",
      },
      {
        eyebrow: "Cum a început",
        content:
          "Am început să caut oportunități în vânzări. Am aplicat la mai multe joburi și colaborări, dar unul singur urma să conteze cu adevărat.\n\nAșa l-am cunoscut pe Andrei. Era craiovean, locuia în București și ținea interviul cu mine din Timișoara, unde ajunsese pentru întâlniri cu colaboratorii. M-a cucerit încă din primele minute prin energie, naturalețe și felul în care vorbea despre oameni, creștere și oportunitate.\n\nI-am povestit despre mine, despre jobul meu tehnic, despre motivațiile din spatele dorinței de a intra în vânzări și despre faptul că voiam să înțeleg mai bine banii, oamenii și posibilitățile din afara traseului clasic de carieră.\n\nProbabil că și eu am adus ceva în acel interviu. Probabil eram omul potrivit într-un moment în care el își creștea echipa. Ulterior mi-am dat seama că a fost o combinație între cele două: disponibilitatea lui de a construi și energia mea de a începe.\n\nFără să-mi dau seama, ajunsesem într-unul dintre cele mai grele domenii de vânzări din România: asigurările de viață și consultanța financiară.",
      },
      {
        eyebrow: "De ce a fost dificil",
        content:
          "Piața de asigurări de viață din România este dificilă. Scepticismul românilor față de acest domeniu este alimentat de mai multe lucruri: lipsă de educație financiară, neîncredere în sistem, experiențe negative, confuzie între consultanță reală și scheme piramidale, plus o moștenire culturală în care încrederea în instituții și în oameni care „vând ceva\" este adesea fragilă.\n\nDar tocmai acest context dificil a făcut experiența valoroasă. A fost locul în care a trebuit să învăț să explic, să ascult, să accept refuzuri, să gestionez scepticismul, să-mi formulez mai clar ideile, să înțeleg diferența dintre a avea dreptate și a câștiga încrederea unui om. Să vorbesc despre bani, risc, familie, viitor și responsabilitate într-un mod care să nu pară teoretic sau agresiv.",
      },
      {
        eyebrow: "Intrarea în activitate",
        content:
          "Luna ianuarie 2023 am dedicat-o pregătirii pentru examenul de brokeraj din februarie. Examenul a fost simplu pentru mine, dar procesul a contat mai mult decât rezultatul. Era primul pas formal într-un domeniu complet diferit de inginerie.\n\nAu urmat demersurile administrative pentru colaborare, în paralel cu primele cursuri, seminarii și traininguri. Această parte m-a fascinat. Simțeam că intrasem într-un mediu în care teoria era imediat conectată la practică.\n\nSe vorbea despre vânzări, bani, carieră și obiective, dar și despre creștere personală, obiceiuri, lectură, comunicare, disciplină, prezentare și încredere. Pentru mine, a fost o gură de aer. În locul unei lumi în care oamenii discutau doar despre taskuri, deadline-uri și probleme tehnice, descopeream o comunitate în care oamenii vorbeau despre cum să crească — profesional, financiar și, de multe ori, personal.",
      },
      {
        eyebrow: "Ce am descoperit acolo",
        content:
          "OVB a fost primul mediu în care am văzut aplicate multe dintre conceptele pe care le citeam în cărți și le întâlneam în cursuri.\n\nAm descoperit: educația financiară aplicată, vânzările consultative, networkingul, storytellingul personal, importanța prezentării, lucrul cu obiecțiile, motivația de echipă, trainingurile de vânzări, sistemele de incluziune, importanța energiei într-un grup, diferența dintre cunoaștere și aplicare.\n\nFiecare om de acolo avea propria poveste. Unii citeau. Unii urmau cursuri. Unii aveau joburi în paralel. Unii construiau alte proiecte. Unii căutau libertate financiară. Unii căutau validare. Unii căutau o ieșire dintr-o viață care nu îi mai reprezenta. Iar eu eram, într-un fel, unul dintre ei.",
      },
      {
        eyebrow: "Povestea personală și felul în care înveți să te prezinți",
        content:
          "Unul dintre lucrurile importante pe care le-am învățat în OVB a fost felul în care îți construiești și îți spui propria poveste.\n\nAm început să înțeleg că oamenii nu reacționează doar la informații. Reacționează la sens, la context, la emoție, la încredere, la felul în care un om își poate explica drumul, motivațiile și direcția.\n\nÎn OVB am învățat să-mi formulez povestea mai clar, să vorbesc despre motivațiile mele, despre obiectivele mele și despre motivele pentru care făceam ceea ce făceam. Asta avea să devină important mult mai târziu, în scris, în brand personal, în CRANDIT și în felul în care îmi construiesc astăzi proiectele.",
      },
      {
        eyebrow: "Ce a fost valoros",
        content:
          "Cei doi ani petrecuți în acest mediu au fost una dintre cele mai intense perioade de creștere din viața mea.\n\nAm învățat să lucrez cu oamenii. Am învățat că energia contează. Am învățat că încrederea nu se cere, ci se construiește. Am învățat că vânzarea nu este doar despre produs, ci despre relația dintre oameni. Am învățat că fiecare conversație are în spate frici, speranțe, nevoi și așteptări. Am învățat cât de greu este să construiești consecvent într-un domeniu în care rezultatele depind atât de mult de încredere, recomandări, disciplină și reziliență emoțională.\n\nAm învățat și cât de important este mediul în care te afli. Pentru că, în OVB, m-am simțit mult timp într-un mediu în care oamenii veneau cu zâmbetul pe buze, vorbeau despre creștere și aveau sentimentul că fac parte din ceva mai mare decât activitatea lor zilnică. Pentru mine, asta a contat enorm.",
      },
      {
        eyebrow: "Ce nu a mers așa cum îmi imaginam",
        content:
          "Am intrat în vânzări atras de mirajul banilor și de imaginea omului care poate construi venituri mari prin comunicare, influență și muncă. Realitatea a fost mai complexă.\n\nRezultatele financiare nu au venit în ritmul și la nivelul pe care mi le imaginam. Domeniul a fost mult mai greu decât părea din exterior. Scepticismul pieței, dificultatea produsului, nevoia permanentă de prospectare, presiunea obiectivelor și dependența de încrederea oamenilor au făcut ca drumul să fie mai dificil decât planul inițial.\n\nDar tocmai acest lucru a făcut experiența importantă. Dacă rezultatele ar fi venit ușor, probabil nu aș fi învățat atât de mult despre mine.",
      },
      {
        eyebrow: "De ce am finalizat această etapă",
        content:
          "În decembrie 2024 am decis să închei colaborarea și să finalizez această etapă. Nu pentru că experiența nu a contat. Dimpotrivă. A contat enorm. Dar simțeam că își oferise lecțiile principale și că era timpul să fac loc pentru următoarea etapă.\n\nDupă ani în care crescusem mai mult decât în multe dintre joburile pe care le avusesem până atunci, am simțit că trebuia să duc mai departe ceea ce învățasem, dar într-o altă formă. OVB devenise o parte importantă din fundația mea. Dar fundația nu este casa. La un moment dat, trebuie să construiești mai departe.",
      },
      {
        eyebrow: "Ce am învățat",
        items: [
          "Că vânzările sunt, în primul rând, despre încredere.",
          "Că educația financiară este încă slab înțeleasă în România.",
          "Că oamenii au nevoie de claritate înainte să ia decizii bune.",
          "Că storytellingul personal contează enorm.",
          "Că mediul în care te afli îți poate accelera dezvoltarea.",
          "Că dezvoltarea personală devine reală doar când este testată în conversații, refuzuri și responsabilitate.",
          "Că motivația ajută, dar nu poate înlocui sistemul.",
          "Că rezultatele nu apar doar pentru că îți dorești mult.",
          "Că un om poate crește enorm chiar și într-o etapă care nu îi aduce rezultatele financiare sperate.",
        ],
      },
      {
        eyebrow: "Ce a rămas după OVB",
        content:
          "OVB a rămas una dintre cele mai importante fundații ale dezvoltării mele ulterioare. De acolo am luat mai departe interesul pentru educație financiară, vânzări, comunicare, storytelling, leadership, dezvoltare personală și lucrul cu oamenii.\n\nMulte dintre lucrurile care astăzi apar în scrisul meu, în CRANDIT, în proiectele de brand personal și în interesul pentru coaching și mentoring au fost influențate de acea perioadă.\n\nOVB nu a fost doar o colaborare în vânzări. A fost un laborator de dezvoltare personală, încredere, comunicare și confruntare cu realitatea. A fost locul în care am învățat că, uneori, un proiect nu trebuie să fie destinația finală ca să devină o parte esențială din cine ești.",
      },
    ],
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
    tagline: "Un business local construit pe nevoi reale și pe încredere",
    status: "activ",
    description:
      "Afacerea de familie este un proiect antreprenorial pornit în aprilie 2021, într-un sat din România, construit în curtea părinților mei. A crescut de la an la an și funcționează și astăzi, administrată în proporție de aproximativ 95% de părinții mei. Este proiectul meu care a atins independența operațională reală: gândit să meargă fără implicarea mea zilnică, și care confirmă acest lucru în prezent.",
    metadata: {
      perioada: "Aprilie 2021 – prezent · Business activ și autonom",
      categorie: "Antreprenoriat de familie · Retail rural · Business local",
      locatie: "Sat din România · Curtea familiei",
    },
    sections: [
      {
        eyebrow: "Despre proiect",
        content: `Afacerea de familie este un proiect antreprenorial pornit în aprilie 2021, în curtea părinților mei, într-un sat din România. A pornit în plină pandemie de COVID-19, când m-am întors acasă și am început o reconstrucție personală — la propriu și la figurat.

În perioada premergătoare am evaluat toate posibilitățile și nevoile pieței. Din rațiuni operaționale, am decis că cel mai bun lucru pe care îl puteam face era ceva pentru părinții mei: o activitate la îndemână, chiar acasă, în curtea în care trăiau zi de zi. Ușor de pus în mișcare — mai ales pentru mama, care lucra deja în domeniu, și pentru tata, care printre oameni este ca peștele în apă — și ușor de administrat de mine de la distanță mai târziu, când nu aveam să mă mai pot implica direct.

Afacerea răspunde nevoilor dinamice ale pieței locale, formată din oamenii din sat, și oferă, pe lângă produsele propriu-zise, și transportul la domiciliu.`,
      },
      {
        eyebrow: "Întrebarea de la care a pornit",
        content: `Întrebarea de la care a pornit acest proiect a fost: cum pot construi un business stabil pentru părinții mei, care să folosească resursele pe care le avem deja, să răspundă unei nevoi reale din sat și să poată funcționa și fără implicarea mea zilnică?

Nu căutam un concept spectaculos. Căutam ceva potrivit: ușor de început, cu costuri fixe mici, într-un domeniu pe care mama îl cunoștea, într-un loc pe care îl dețineam, cu clienți pe care îi puteam ajunge natural.`,
      },
      {
        eyebrow: "Ce am construit",
        content: `Am renovat casa bătrânească pe care o foloseam pentru depozitare și am parcurs toți pașii formali: înființarea societății, obținerea autorizațiilor, crearea stocului de produse și stabilirea relației cu furnizorii.

Un avantaj decisiv a fost structura costurilor: spațiul ne aparținea, vânzarea o făceam noi, aprovizionarea o făceam în mare parte tot noi, iar pe alocuri lucram cu furnizori care livrau direct la adresă. Aceste costuri fixe minimaliste ne-au permis să acceptăm o perioadă de germinare mai lungă. Această perioadă s-a dovedit productivă: afacerea a crescut de la an la an, până în prezent.`,
      },
      {
        eyebrow: "Cum funcționează afacerea",
        items: [
          "Pornită în aprilie 2021, în plină pandemie de COVID-19.",
          "Sediul este în curtea familiei, într-un sat din România.",
          "Costuri fixe minimaliste: spațiu propriu, distribuție proprie, livrare de la furnizori.",
          "Clienții sunt în principal oamenii din sat și din zona locală.",
          "Oferă produse de bază și transport la domiciliu.",
          "A crescut de la an la an, de la lansare până în prezent.",
        ],
      },
      {
        eyebrow: "Rolul părinților",
        content: `Mama și tata sunt pilonii operaționali ai afacerii. Mama lucra deja în domeniu, așa că partea tehnică și executivă a venit natural. Tata este omul care se simte bine printre oameni, așa că relația cu clienții și comunicarea zilnică îi sunt apropiate.

De la început, am vrut ca afacerea să fie a lor, nu doar a mea. Am construit-o astfel încât să le ofere activitate, venit și independență, nu doar să devină un al doilea job pe care eu să-l controlez de la distanță.`,
      },
      {
        eyebrow: "De ce a funcționat",
        content: `Afacerea a funcționat pentru că a fost construită cu realism, nu cu ambiție forțată. Am plecat de la nevoile reale ale comunității locale, de la resursele pe care le aveam deja și de la capacitatea părinților mei de a o duce mai departe.

Am acceptat o perioadă de germinare mai lungă pentru că structura costurilor ne-a permis acest lucru. Nu am forțat scalare rapidă. Nu am presat afacerea să arate într-un fel anume. Am lăsat-o să se așeze și să crească organic, în ritmul pieței locale.`,
      },
      {
        eyebrow: "Stadiul actual",
        content: `Proiectul este în continuare activ, însă acum este administrat în proporție de aproximativ 95% de către părinții mei. Este, dintre proiectele mele, cel care a atins independența operațională reală — construit deliberat ca să funcționeze fără implicarea mea zilnică, iar astăzi confirmă acest lucru: merge mai departe în mâinile lor, exact așa cum a fost gândit.`,
      },
      {
        eyebrow: "Ce am învățat",
        items: [
          "Un business de familie reușit pleacă de la potrivirea reală dintre oameni, abilități și loc.",
          "Costurile fixe mici permit răbdare și creștere organică.",
          "Cel mai bun proiect pentru cineva drag nu este neapărat cel mai ambițios, ci cel mai sustenabil.",
          "Construiești pentru independență atunci când proiectezi sistemul să funcționeze și fără tine.",
          "Perioada de germinare este o investiție, nu un semn de eșec.",
          "Încrederea și rolurile clare sunt mai importante decât planurile perfecte în businessul de familie.",
        ],
      },
      {
        eyebrow: "Legătura cu celelalte proiecte",
        content: `Afacerea de familie face parte din același traseu de învățare care include Taste the Corn, Atracțiile României și CRANDIT. Dacă Taste the Corn a fost un test în retailul alimentar urban, afacerea de familie a fost lecția despre businessul local construit pe resurse reale, pe relații de încredere și pe răbdare.

A fost un laborator practic pentru ideile despre muncă, construcție pe termen lung și succes real pe care le explorez în scris și în alte proiecte.`,
      },
    ],
    related: [],
  },
  {
    slug: "afacerea-cu-haine",
    title: "Afacerea cu haine",
    tagline: "Primul magazin, primul eșec, prima lecție reală de antreprenoriat",
    status: "închis",
    description:
      "Primul meu proiect antreprenorial: un magazin de haine pornit în primăvara lui 2017, împreună cu un coleg de la call center. Finanțat printr-un credit, închis la scurt timp după lansare. Mi-a rămas o oglindă, o plapumă și un credit de peste 20.000 de lei — și prima lecție serioasă despre risc, parteneriat și supraviețuire în antreprenoriat.",
    metadata: {
      perioada: "Primăvara 2017 · Primul proiect antreprenorial",
      categorie: "Retail · Modă · Primul business · Eșec formator",
      locatie: "România",
    },
    sections: [
      {
        eyebrow: "Despre proiect",
        content: `În primăvara lui 2017, atras de lumea afacerilor și de promisiunea libertății financiare, am devenit investitor pentru prima dată. Alături de un coleg de la call center, am pornit ceea ce ni se părea o oportunitate excelentă: un magazin de haine. Planul era simplu — și tocmai simplitatea lui aparentă ar fi trebuit să-mi dea de gândit.

Am făcut un credit ca să-l pornim. La momentul respectiv nu îl percepeam ca pe un risc, ci ca pe o investiție în viitor. Doar că viitorul avea alte planuri. Business-ul nu a funcționat, iar la scurt timp după lansare asociatul meu a decis să plece din țară. Am rămas cu o oglindă, o plapumă și un credit de peste 20.000 de lei — o sumă uriașă pentru posibilitățile mele de atunci.`,
      },
      {
        eyebrow: "Întrebarea de la care a pornit",
        content: `Pot transforma entuziasmul pentru lumea afacerilor și dorința de libertate financiară într-un business real, alături de un partener, fără experiență prealabilă?

Răspunsul, descoperit pe pielea mea, a fost că entuziasmul și un partener nu sunt suficiente. Un business cere ceva ce nu aveam încă: experiență, evaluare lucidă a riscului și un cadru clar pentru ce se întâmplă atunci când lucrurile merg prost.`,
      },
      {
        eyebrow: "Ce s-a întâmplat",
        content: `Am pornit magazinul cu un credit, fără rezerve și cu un partener cu care nu definisem clar ce facem dacă proiectul nu funcționează. Vânzările n-au confirmat planul. La scurt timp după lansare, asociatul meu a plecat din țară, iar întreaga povară financiară și operațională a rămas pe mine.

Am închis magazinul. Mi-au rămas câteva obiecte — o oglindă, o plapumă — și un credit de peste 20.000 de lei pe care a trebuit să-l duc singur până la capăt.`,
      },
      {
        eyebrow: "De ce nu a funcționat",
        items: [
          "Lipsă de experiență în retail și în construcția unui business.",
          "Risc de partener subestimat: nicio structură care să protejeze proiectul de decizia unilaterală a asociatului.",
          "Credit perceput ca investiție sigură, nu ca expunere reală.",
          "Plan „simplu” pe hârtie, dar fără înțelegerea complexității reale din spate.",
          "Lipsa unei rezerve financiare și a unui plan B la momentul lansării.",
        ],
      },
      {
        eyebrow: "Ce am învățat",
        items: [
          "Optimismul nu elimină riscul. Entuziasmul de la început nu ține loc de evaluare lucidă a ce se poate strica.",
          "Entuziasmul nu înlocuiește experiența. Tragerea de a începe nu îți dă instrumentele de a citi piața.",
          "Riscul de partener e un risc real, nu o notă de subsol. Toată construcția depindea de doi oameni — iar când unul a plecat, povara a rămas pe celălalt.",
          "„Simplu” nu înseamnă „ușor”. Un plan care pare simplu pe hârtie ascunde de obicei tot ce nu știi încă să vezi.",
          "Supraviețuirea e prima formă de succes. Înainte să câștigi, trebuie să rămâi în joc.",
        ],
      },
      {
        eyebrow: "Ce a rămas după acest proiect",
        content: `A fost primul meu eșec în antreprenoriat și, retrospectiv, unul dintre cele mai formatoare. N-a fost sfârșitul unei povești, ci începutul unei lecții pe care aveam s-o duc mai departe în toate proiectele care au urmat: succesul nu apare când găsești oportunitatea perfectă, ci când supraviețuiești suficient de mult propriilor greșeli încât să înveți din ele.

Creditul a fost plătit până la capăt. Lecția a rămas mai valoroasă decât pierderea.`,
      },
      {
        eyebrow: "Legătura cu celelalte proiecte",
        content: `Acest prim magazin este punctul zero al traseului meu antreprenorial. Toate proiectele care au urmat — afacerea de familie, Taste the Corn, Atracțiile României — au fost construite pe lecțiile învățate aici: atenție la structura costurilor, prudență în alegerea partenerilor, importanța unei perioade de germinare și diferența dintre o idee bună și un sistem sustenabil.

Multe dintre ideile despre risc, supraviețuire și succes lent care apar în CRANDIT – Mitul succesului peste noapte au rădăcina în această experiență.`,
      },
    ],
    related: [],
  },
];
