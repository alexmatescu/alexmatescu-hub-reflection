import { Link } from "@/lib/router-compat";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Seo from "@/components/Seo";

type TimelineItem = { period: string; title: string; description: string };

const timeline: TimelineItem[] = [
  {
    period: "1994–2009",
    title: "Copilărie în Strâmba Jiu",
    description:
      "Copilărie în Strâmba Jiu, județul Gorj, într-o familie modestă, construită în jurul muncii, familiei, onestității și educației.",
  },
  {
    period: "2009–2013",
    title: "Liceu și primele joburi",
    description:
      "Ani de liceu, rezultate școlare bune, concursuri educative, primele experiențe de muncă și începutul independenței financiare.",
  },
  {
    period: "2013–2017",
    title: "Licență la Craiova",
    description:
      "Studii de licență la Automatică și Informatică Aplicată în Craiova, viață de cămin, joburi studențești, muncă în call-center și primul contact serios cu mediul corporatist.",
  },
  {
    period: "2017",
    title: "Prima încercare antreprenorială",
    description:
      "Magazin de haine în Craiova, experiență care s-a încheiat cu un eșec financiar și un credit important pentru posibilitățile de atunci.",
  },
  {
    period: "2017–2020",
    title: "Master și mutări profesionale",
    description:
      "Studii de master la Automatică, Calculatoare și Electronică din Craiova, în paralel cu începutul carierei profesionale și mutările către Timișoara și București.",
  },
  {
    period: "2017–2018",
    title: "Timișoara și mutarea la București",
    description:
      "Mutare la Timișoara, job în fabrică, căutarea primului loc de muncă de inginer și ulterior mutarea la București.",
  },
  {
    period: "2018–2019",
    title: "Început de carieră la HaynesPro",
    description: "Începutul carierei de inginer la HaynesPro în București.",
  },
  {
    period: "2019–2020",
    title: "Bertrandt",
    description:
      "Trecerea la Bertrandt și contactul cu un mediu profesional mai matur, înainte de perioada COVID-19.",
  },
  {
    period: "2020–2021",
    title: "Întoarcerea acasă în pandemie",
    description:
      "Descoperirea educației online, a dezvoltării personale, a coachingului, mentoringului, investițiilor și productivității.",
  },
  {
    period: "2021",
    title: "Afacerea de familie",
    description:
      "Dezvoltarea unei afaceri de familie în mediul rural, un magazin mixt construit pentru a răspunde nevoilor reale ale comunității locale.",
  },
  {
    period: "2021–2024",
    title: "Vânzări și consultanță financiară",
    description:
      "Experiență în vânzări, consultanță financiară și asigurări prin OVB Allfinanz România.",
  },
  {
    period: "2021–2023",
    title: "Atracțiile României",
    description:
      "Pornirea și dezvoltarea proiectului dedicat promovării destinațiilor turistice din România.",
  },
  {
    period: "2022",
    title: "Mutarea la Sibiu",
    description:
      "Începutul unei perioade de așezare, reflecție și transformare interioară.",
  },
  {
    period: "2025",
    title: "Taste the Corn",
    description:
      "Lansarea unui concept de retail alimentar construit în Sibiu, operaționalizat în jumătate de an și închis după alte câteva luni.",
  },
  {
    period: "2025–2026",
    title: "CRANDIT — cartea",
    description:
      "Scrierea cărții CRANDIT – Mitul succesului peste noapte și transformarea experiențelor acumulate într-un proiect editorial și de idei.",
  },
  {
    period: "2026",
    title: "Hub personal și direcție nouă",
    description:
      "Dezvoltarea hubului personal Alex Matescu și începutul unei direcții noi în jurul GEO, AEO, inteligenței artificiale, scrisului și leadershipului.",
  },
];

type Chapter = { period: string; title: string; paragraphs: string[] };

const chapters: Chapter[] = [
  {
    period: "1994–2009",
    title: "Rădăcinile",
    paragraphs: [
      "M-am născut și am crescut în Strâmba Jiu, un sat modest din județul Gorj, într-o familie de oameni simpli pentru care munca a reprezentat întotdeauna una dintre valorile centrale ale vieții.",
      "Pentru părinții mei, munca însemna mai mult decât locul de muncă. Însemna grija pentru casă, gospodărie, familie și responsabilitățile de zi cu zi care nu se terminau niciodată odată cu încheierea programului.",
      "Am fost singurul copil al familiei și, într-un fel, singura lor speranță către o viață mai bună și către povestea de succes pe care și-o doreau pentru copilul lor. M-au crescut pe valori simple și solide: familie, muncă, onestitate și educație.",
      "Nu am realizat atunci cât de importante erau aceste lucruri. Le-am înțeles mult mai târziu, după ce am început să văd lumea dincolo de satul în care am copilărit.",
      "Copilăria mea a semănat în multe privințe cu universul descris în poveștile și amintirile satului românesc. Am crescut printre grădini de legume, animale, pomi fructiferi și câmpuri cultivate. Am învățat să particip la treburile gospodăriei, să ajut la muncile agricole, să îngrijesc animalele și să înțeleg că aproape orice lucru pe care îl folosești are în spate timpul și efortul cuiva.",
      "Dar frumusețea acelei perioade nu a stat doar în muncă. A stat și în libertate.",
      "Am copilărit într-o lume în care timpul părea să curgă mai încet. Cutreieram dealurile și pădurile din jurul satului, exploram pajiștile verzi care păreau nesfârșite, inventam jocuri și petreceam zile întregi afară.",
      "Fotbalul era ocupația principală a vacanțelor și a după-amiezilor petrecute cu prietenii. De dimineața până seara, lumea noastră exista între terenurile improvizate, ulițele satului și locurile pe care le descopeream împreună.",
      "Privind în urmă, realizez că acea libertate a fost unul dintre cele mai valoroase daruri ale copilăriei mele. Mi-a oferit spațiu să experimentez, să greșesc, să învăț și să-mi dezvolt curiozitatea într-o perioadă în care internetul și rețelele sociale nu ocupau încă centrul atenției.",
      "Tot în acei ani am făcut primii pași într-o lume pe care aveam să o înțeleg mult mai bine mai târziu: lumea comunității și a mentoratului. Alături de colegi și prieteni, am participat la activitățile organizate de preotul satului prin intermediul unei asociații de tineret pe care o construise pentru copiii și adolescenții din comunitate.",
      "A fost pentru prima dată când am intrat în contact cu ideea că un om poate avea un impact profund asupra dezvoltării altor oameni și că educația se întâmplă și dincolo de școală. Fără să-mi dau seama atunci, acolo aveam să întâlnesc pentru prima dată concepte pe care astăzi le-aș numi mentorat, leadership, comunitate și dezvoltare personală.",
    ],
  },
  {
    period: "2009–2018",
    title: "Între două lumi",
    paragraphs: [
      "Împins de familie către educație, am fost până la finalul liceului unul dintre elevii care se regăseau constant în partea superioară a clasamentelor. Participam la concursuri și olimpiade școlare, iar pentru părinții mei școala reprezenta drumul firesc către o viață mai bună decât cea pe care o cunoscuseră ei.",
      "În același timp, făceam deja primii pași către independență. Ospătăria a fost primul meu loc de muncă și una dintre primele lecții despre responsabilitate. Banii câștigați nu reprezentau doar bani de buzunar. Reprezentau posibilitatea de a contribui la bugetul familiei și de a-mi reduce dependența de părinți.",
      "La acel moment, familia vedea pentru mine un drum clar: o carieră în Poliție. Respect, stabilitate și siguranță. Am urmat acel drum până aproape de capăt. După ce trecusem probele inițiale pentru admiterea la Academia de Poliție „Alexandru Ioan Cuza”, în ultima zi disponibilă pentru înscriere am descoperit că nu aveam toate documentele necesare pentru finalizarea dosarului.",
      "Atunci nu am privit acel moment ca pe o oportunitate. L-am privit ca pe o lovitură de ghinion. Privind în urmă, a fost unul dintre momentele care mi-au schimbat complet viața.",
      "În locul Bucureștiului și al uniformei, drumul meu s-a mutat către Craiova. În 2013 am fost admis la specializarea Automatică și Informatică Aplicată din cadrul Facultății de Automatică, Calculatoare și Electronică.",
      "Pentru un tânăr crescut într-un sat din Gorj, Craiova a reprezentat primul contact real cu lumea marilor orașe. Era o lume care se mișca repede, o lume în care nimeni nu părea să cunoască pe nimeni și, totuși, fiecare persoană părea să aibă propria poveste, propriul grup și propria direcție.",
      "Aproape trei ani am locuit în cămin. Am descoperit ce înseamnă să trăiești alături de oameni complet diferiți, să împarți același spațiu, aceleași griji, aceleași bucurii și aceleași dificultăți. Pentru prima dată eram departe de casă și, în același timp, făceam parte dintr-o altă familie construită spontan în jurul vieții de student.",
      "Totuși, chiar și atunci trăiam între două lumi. Orașul mă fascina. Satul mă chema înapoi. Mă întorceam aproape săptămânal acasă, atras de familie, de prieteni și de stilul de viață cu care crescusem.",
      "În primăvara anului 2016, printr-un lanț improbabil de recomandări, am ajuns la interviul pentru un job într-un call center care gestiona recuperarea de creanțe pentru piața americană. La un moment dat am fost rugat să-mi spun numărul de telefon în limba engleză și aproape că m-am blocat complet. Cu toate acestea, am fost acceptat.",
      "Pentru prima dată lucram într-un mediu internațional. Primele luni au fost dificile. Căutam răspunsuri în scripturi pentru aproape orice întrebare, convins că orice greșeală de pronunție îi va face pe clienți să realizeze imediat că vorbesc cu un român. În același timp, programul se întindea până târziu în noapte, iar diminețile începeau din nou la facultate.",
      "În primăvara anului 2017, atras de lumea afacerilor și de promisiunea libertății financiare, am decis să devin investitor pentru prima dată. Alături de un coleg de la call center, am pornit ceea ce ni se părea o oportunitate excelentă. Planul era simplu: un magazin de haine.",
      "Am făcut un credit. La momentul respectiv nu îl percepeam ca pe un risc. Îl percepeam ca pe o investiție în viitor. Doar că viitorul avea alte planuri. Business-ul nu a funcționat. La scurt timp după lansare, asociatul meu a decis să plece din țară.",
      "Am rămas cu o oglindă, o plapumă și un credit de peste 20.000 de lei. Pentru posibilitățile mele din acel moment, suma era uriașă. Pentru prima dată înțelegeam că optimismul nu elimină riscul și că entuziasmul nu înlocuiește experiența.",
      "Aveam să descopăr mai târziu că acel eșec nu reprezenta sfârșitul unei povești. Reprezenta începutul unei lecții: succesul nu apare atunci când găsești oportunitatea perfectă, ci atunci când supraviețuiești suficient de mult propriilor greșeli pentru a învăța din ele.",
      "În 2017 am obținut diploma de inginer. Tot atunci am decis să continui studiile în Craiova, printr-un program de master. Între 2017 și 2020, masterul a mers în paralel cu primele mele mutări profesionale.",
      "Convins că viitorul meu este în inginerie, am plecat la Timișoara. Jobul de inginer nu a apărut. Pentru a rămâne pe linia de plutire am acceptat un loc de muncă într-o fabrică, în timp ce continuam să aplic la orice poziție inginerească. După aproximativ șase luni am decis că lupta trebuie purtată în altă parte. Mi-am făcut bagajele și am plecat la București. În aprilie 2018 mi-am schimbat din nou adresa și angajatorul.",
    ],
  },
  {
    period: "2018–2021",
    title: "Descoperirea unui alt mod de a crește",
    paragraphs: [
      "La aniversarea din 2017, chiar înainte să obțin permisul de conducere, părinții mi-au cumpărat prima mașină. Pentru prima dată aveam senzația că sunt echipat pentru drumul pe care mi-l imaginasem.",
      "Realitatea era ceva mai complicată. Salariul de început în inginerie era modest, iar costurile vieții din București păreau mereu mai mari decât planificasem. Faptul că împărțeam chiria și cheltuielile cu alți colegi m-a ajutat să rămân aproape de linia de plutire.",
      "În aprilie 2018 am început primul meu job ca inginer la HaynesPro. Colectivul era tânăr, cu preocupări similare și aceeași dorință de a demonstra că merităm locul pe care îl ocupam. Acolo am făcut primii pași serioși în cariera de inginer.",
      "În decembrie 2019 am intrat în Bertrandt. Pentru prima dată mă aflam într-un colectiv format din oameni cu mai multă experiență, mai multă încredere în sine și o perspectivă diferită asupra carierei. Managerul care m-a angajat și-a asumat dezvoltarea mea profesională într-un mod pe care nu îl mai întâlnisem până atunci.",
      "Au fost trei luni excelente. Apoi a venit martie 2020. COVID-19. Pentru prima dată în viața mea eram martor conștient la un eveniment global care afecta simultan milioane de oameni.",
      "În vara lui 2020 am luat o decizie care avea să schimbe mai mult decât anticipam. M-am întors acasă. Inițial, motivația era simplă: voiam să reduc cheltuielile și să-mi plătesc datoriile. Nu aveam de unde să știu că acea mutare avea să deschidă una dintre cele mai importante perioade de dezvoltare din viața mea.",
      "Pentru prima dată aveam timp. Mult timp. Și am decis să-l investesc. A fost perioada în care am descoperit cu adevărat internetul ca instrument de învățare. Webinarii, podcasturi, cursuri online, mastermind-uri, comunități, autori, idei.",
      "Tot atunci am descoperit că lectura nu se rezumă la literatura din școală. Existau cărți despre afaceri, investiții, psihologie, productivitate, comportament uman, leadership, succes, eșec. Și fiecare dintre ele părea să-mi deschidă o nouă ușă.",
      "Tot atunci am descoperit conceptele de coaching și mentoring. Pentru prima dată înțelegeam că experiența altor oameni poate deveni o scurtătură legitimă pentru propria dezvoltare.",
      "Acea perioadă mi-a oferit ceva ce nu mai avusesem până atunci: sentimentul că îmi pot construi viața în mod intenționat. Fără să realizez atunci, puneam bazele multor idei despre care aveam să scriu ani mai târziu.",
    ],
  },
  {
    period: "2020–2022",
    title: "Vânzări, mentoring și afacerea de familie",
    paragraphs: [
      "În toamna lui 2020 mă vizitase din nou o idee care avea să revină de multe ori în anii următori. Poate că locul meu nu era în România. Doar că, înainte să iau o astfel de decizie, viața avea să-mi ofere o altă direcție.",
      "A urmat intrarea în vânzări. Construisem în mintea mea imaginea idealizată a profesionistului din vânzări — omul sigur pe el, capabil să influențeze, să comunice, să construiască relații. Am intrat astfel în industria asigurărilor și a consultanței financiare, unul dintre cele mai dificile domenii de vânzări din România.",
      "Ani la rând am studiat domeniul aproape obsesiv. Am participat la traininguri, am citit, am învățat, am aplicat, am greșit, am luat-o de la capăt. Doar că rezultatele nu au venit în ritmul în care mi le imaginasem.",
      "Experiența din vânzări mi-a oferit ceva mult mai valoros decât banii. Mi-a oferit întâlnirea directă cu propriile limite — frica de respingere, nevoia de validare și diferența dintre ceea ce credeam că sunt și ceea ce eram în realitate.",
      "Într-o discuție cu tata am decis să rămânem în România și să construim ceva împreună. Așa a luat naștere ideea afacerii de familie — un magazin mixt rural construit pentru a răspunde nevoilor reale ale comunității locale.",
      "Nu era un business spectaculos. Dar era un business real. Cu clienți, furnizori, angajați și probleme reale. Și tocmai de aceea, a devenit una dintre cele mai importante experiențe antreprenoriale ale mele.",
      "În paralel, descoperisem John Maxwell Team. Pentru prima dată găseam oameni care discutau despre idei, despre dezvoltare, despre caracter, despre leadership. Și mi-am dorit să fac parte din acea lume.",
      "Disciplina pe care începusem să o construiesc devenise aproape un stil de viață. Mă trezeam devreme, făceam sport, citeam, învățam, lucram, participam la cursuri, ascultam podcasturi. Încercam să recuperez în câteva luni tot ceea ce credeam că nu învățasem în anii anteriori.",
      "În același timp, afacerea de familie începea să prindă tracțiune. Am început să învăț ce înseamnă administrarea unei afaceri reale: angajați, furnizori, facturi, stocuri, program, logistică, probleme, soluții. Pentru prima dată vedeam cum teoria și realitatea se întâlnesc.",
      "La un moment dat am realizat că următorul pas era inevitabil. Dacă voiam să continui să cresc, trebuia să ies din nou din zona de confort. M-am mutat înapoi la Craiova. Nu aveam de unde să știu atunci că după doar câteva luni urma să primesc o ofertă care avea să mă aducă în Sibiu.",
    ],
  },
  {
    period: "2022–2024",
    title: "Sibiul și începutul așezării",
    paragraphs: [
      "Aventura mea în Sibiu a început tragi-comic. Am plecat spre noua viață într-o zi de vineri, cu gândul că luni urma să semnez contractul. Ajuns în Sibiu, nu aveam încă locuință.",
      "Prima proprietate pe care am văzut-o mi-a plăcut enorm și părea aproape rezolvată. La a doua vizionare, când am vrut să plec, mașina nu a mai pornit. După ore întregi de încercări, am renunțat. Era deja noapte. Eram într-un oraș nou, fără locuință stabilă, cu mașina stricată și cu o ofertă de job care urma să înceapă luni.",
      "În mintea mea, semnele deveniseră clare. Poate că nu trebuia să rămân în Sibiu. Doar că weekendul acela a făcut ceva ciudat cu mine. În loc să fug, am început să merg. Am bătut străzile Sibiului aproape fără scop. Și orașul mi-a plăcut enorm. Avea un ritm diferit. Un fel de calm pe care nu-l mai întâlnisem până atunci.",
      "În primele luni, mutarea mea în Sibiu era mai mult administrativă decât reală. Aveam jobul corporate, activitatea paralelă din asigurări, clienți care mă trăgeau înapoi spre Craiova și spre Gorj, familia, afacerea de familie, proiectele personale. Îmi împărțeam lunile în două.",
      "Pe moment, mi se părea normal. Eram mereu în mișcare. Doar că, încet, începeam să observ și costul acelui ritm. Viața nu avea timp să se așeze. Nici relațiile. Nici munca. Nici eu.",
      "Tot în acea perioadă, la îndrumarea unui mentor, am început procesul terapeutic. A fost una dintre cele mai bune decizii pe care le-am luat. Terapia nu m-a dus către mai multă eficiență, ci către mai multă înțelegere. Pentru prima dată am început să privesc mai atent nu doar ce făceam, ci și de ce făceam.",
      "În iarna anului 2021 pornisem și proiectul Atracțiile României. Era un proiect frumos, dar și unul consumator. După aproape doi ani de muncă, am realizat că nu prinsese tracțiunea pe care o sperasem. Pentru prima dată am avut maturitatea să accept că un proiect poate fi valoros chiar și atunci când trebuie oprit.",
      "La câteva luni distanță, aveam să iau o decizie similară și în zona vânzărilor. A fost o lecție grea — pentru că renunțarea, atunci când ai muncit mult, seamănă uneori cu eșecul. Dar nu era eșec. Era discernământ.",
      "Sibiul a avut un rol discret, dar profund. Nu m-a împins. Nu m-a alergat. M-a așezat. Mi-a oferit spațiu, ritm, calm, distanță. Și contextul în care să încep să mă întâlnesc cu mine fără să mai fug constant în următorul proiect.",
      "Adevărata mutare în Sibiu nu s-a întâmplat în ziua în care am semnat contractul. S-a întâmplat mult mai târziu. Atunci când am început, în sfârșit, să mă opresc suficient cât să înțeleg ce trăiam.",
    ],
  },
  {
    period: "2024–2026",
    title: "Când tot ce am acumulat devine material de construcție",
    paragraphs: [
      "Odată ce viața începea să se așeze, apărea o altă întrebare. Ce fac cu tot ce am acumulat până acum? Era o întrebare care nu-mi dădea pace. Simțeam că pot mai mult decât un trai liniar în care merg la muncă, îmi fac treaba, mă întorc acasă și ard timpul.",
      "Inspirat de o afacere a cuiva din familie, mi-am propus la un moment dat să o preiau. Am început serios: plan de afaceri, consultanță, firmă, furnizori, documentare, proiect tehnic, proces tehnologic. Doar că, în realitate, proiectul depindea de ceva ce nu puteam controla — actele terenului. Un proces greoi, blocat în ritmul birocratic.",
      "A fost o nouă întâlnire cu o lecție pe care o tot primeam: poți avea energie, plan, dorință, competență. Dar uneori nu poți accelera realitatea.",
      "În același timp, viața personală începea să capete o direcție nouă. Începusem relația cu Ștefana, femeia care avea să-mi devină soție. Sibiul începea să devină locul în care viața mea se putea construi mai departe.",
      "Călătorind împreună și fascinați de produse precum Mr. Corny, am început să ne întrebăm dacă nu cumva am putea construi ceva local, simplu, vizibil și al nostru. Așa a apărut, în ianuarie 2025, ideea Taste the Corn — un concept simplu: porumb fiert, transformat într-un produs modern, rapid, atractiv pentru retail.",
      "În jumătate de an, business-ul era operațional. Stand, firmă, furnizori, brand, produse, angajate, clienți, program, realitate. Apoi, încă o jumătate de an mai târziu, business-ul era închis. Timingul, piața, contextul economic, consumul în scădere, marketingul haotic, fluctuația personalului, presiunea financiară, lipsa de experiență într-un business fizic de retail — toate au contribuit.",
      "Taste the Corn nu a fost doar un business închis. A fost o oglindă. Mi-a arătat diferența dintre idee și execuție. Dintre entuziasm și sistem. Dintre plan și piață. Dintre energie și sustenabilitate.",
      "În paralel, relația cu Ștefana trecea la următorul nivel. Ne-am logodit. Am decis că în 2026 ne vom căsători. Într-un an care trebuia să fie despre familie, așezare și consolidare, viața părea să-mi spună din nou: oprește-te suficient cât să înțelegi ce s-a întâmplat.",
      "Doar că eu nu am știut niciodată să mă opresc pur și simplu. Așa că am făcut singurul lucru care mi-a fost la îndemână. Am început să scriu. La început, nu scriam o carte. Scriam ca să înțeleg. Scriam ca să pun ordine. Scriam ca să dau sens anilor în care alergasem după succes, libertate, bani, validare.",
      "Încet, acele gânduri au început să capete formă. Apoi structură. Apoi direcție. Apoi nume. CRANDIT – Mitul succesului peste noapte.",
      "Această carte nu a apărut dintr-o idee editorială. A apărut dintr-o nevoie. Nevoia de a nu lăsa tot ce trăisem să rămână risipit. Nevoia de a transforma experiența în înțelegere.",
      "Poate că toate drumurile acelea nu duceau spre un singur business. Nici spre un singur job. Nici măcar spre o singură definiție a succesului. Poate că duceau spre ceva mai profund. Spre omul care, după ani întregi de încercări, începea să înțeleagă că succesul real nu este momentul în care viața se rezolvă peste noapte. Este momentul în care tot ce ai trăit începe, în sfârșit, să capete sens.",
    ],
  },
];

const faqs = [
  {
    q: "Unde s-a născut și unde a crescut Alex Matescu?",
    a: "Alex Matescu s-a născut și a crescut în Strâmba Jiu, un sat din județul Gorj, România.",
  },
  {
    q: "Ce a studiat Alex Matescu?",
    a: "Alex Matescu a studiat Automatică și Informatică Aplicată la Facultatea de Automatică, Calculatoare și Electronică din Craiova. A urmat studiile de licență între 2013 și 2017, iar apoi studiile de master în perioada 2017–2020, în cadrul aceleiași facultăți.",
  },
  {
    q: "Când a început Alex Matescu cariera de inginer?",
    a: "Alex Matescu a început primul capitol al carierei sale de inginer în aprilie 2018, după mutarea la București.",
  },
  {
    q: "Ce experiențe antreprenoriale a avut Alex Matescu?",
    a: "Alex Matescu a avut mai multe experiențe antreprenoriale, printre care o primă încercare cu un magazin de haine în Craiova, dezvoltarea unei afaceri de familie în mediul rural, proiectul Atracțiile României și business-ul Taste the Corn.",
  },
  {
    q: "Ce este afacerea de familie dezvoltată de Alex Matescu?",
    a: "Afacerea de familie este un magazin mixt din mediul rural, dezvoltat începând cu anul 2021 pentru a răspunde nevoilor reale ale comunității locale. Proiectul a oferit experiență practică în administrarea unei afaceri, relația cu clienții, furnizorii, angajații, stocurile și problemele operaționale ale unui business real.",
  },
  {
    q: "Ce este Taste the Corn?",
    a: "Taste the Corn a fost un concept antreprenorial de retail alimentar lansat în Sibiu în 2025, construit în jurul porumbului fiert transformat într-un produs modern și atractiv pentru consumatori.",
  },
  {
    q: "Ce este Atracțiile României?",
    a: "Atracțiile României a fost un proiect de conținut dedicat promovării destinațiilor turistice, istoriei, geografiei și experiențelor locale din România.",
  },
  {
    q: "Ce rol a avut Sibiul în călătoria lui Alex Matescu?",
    a: "Sibiul a reprezentat pentru Alex Matescu un loc de așezare, reflecție și transformare interioară, după ani în care viața sa fusese împărțită între mai multe orașe, proiecte și direcții.",
  },
  {
    q: "Cum a apărut CRANDIT?",
    a: "CRANDIT – Mitul succesului peste noapte a apărut din nevoia lui Alex Matescu de a transforma experiențele, eșecurile, proiectele și lecțiile acumulate în ani de muncă într-o formă coerentă de înțelegere și scris.",
  },
  {
    q: "Despre ce este călătoria lui Alex Matescu?",
    a: "Călătoria lui Alex Matescu este despre trecerea de la muncă fizică, educație, joburi studențești și inginerie către antreprenoriat, dezvoltare personală, scris și proiecte dedicate înțelegerii succesului, disciplinei, tehnologiei și sensului.",
  },
];

const entities = [
  "Alex Matescu",
  "Alexandru Matescu",
  "Strâmba Jiu",
  "Gorj",
  "Craiova",
  "Sibiu",
  "București",
  "Timișoara",
  "HaynesPro",
  "Bertrandt",
  "OVB Allfinanz România",
  "Afacerea de familie",
  "Magazin mixt rural",
  "CRANDIT – Mitul succesului peste noapte",
  "Taste the Corn",
  "Atracțiile României",
  "GEO / AI Visibility",
  "Leadership Artificial",
  "Automatică și Informatică Aplicată",
  "Facultatea de Automatică, Calculatoare și Electronică din Craiova",
  "John Maxwell Team",
];

const Calatoria = () => {
  return (
    <div>
      <Seo
        title="Călătoria lui Alex Matescu — De la Gorj la CRANDIT"
        description="Povestea lui Alex Matescu, de la Strâmba Jiu și Gorj la Craiova, Timișoara, București și Sibiu, prin studii tehnice, inginerie, antreprenoriat, CRANDIT și AI Visibility Lab."
      />

      {/* Hero */}
      <section className="container-editorial pt-16 md:pt-24 pb-12">
        <p className="eyebrow mb-6">Călătoria</p>
        <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-balance leading-[1.05]">
          Călătoria lui Alex Matescu
        </h1>
        <div className="mt-8 max-w-2xl space-y-5 text-lg text-muted-foreground leading-relaxed">
          <p>
            Aceasta este povestea drumului meu de la copilăria într-un sat din Gorj
            până la inginerie, antreprenoriat, scris și proiectele pe care le construiesc
            astăzi.
          </p>
          <p>Nu este o poveste despre un traseu liniar.</p>
          <p>
            Este o poveste despre încercări, muncă, mutări, eșecuri, disciplină, oameni,
            locuri, proiecte și lecțiile care au început, în timp, să capete sens.
          </p>
        </div>
      </section>

      {/* Pe scurt */}
      <section className="container-editorial py-12 md:py-16 border-t border-foreground/10">
        <p className="eyebrow mb-6">Pe scurt</p>
        <div className="max-w-3xl space-y-5 text-base md:text-lg leading-relaxed">
          <p>
            Alexandru (Alex) Matescu este inginer, autor și antreprenor român, născut și
            crescut în Strâmba Jiu, județul Gorj.
          </p>
          <p className="text-muted-foreground">
            Parcursul său include experiențe în mediul rural, educație tehnică, muncă în
            restaurante, call-center, fabrică, inginerie automotive, vânzări, consultanță
            financiară, antreprenoriat, scris și dezvoltare personală.
          </p>
          <p className="text-muted-foreground">
            A studiat Automatică și Informatică Aplicată la Facultatea de Automatică,
            Calculatoare și Electronică din Craiova, unde a urmat studiile de licență în
            perioada 2013–2017 și studiile de master în perioada 2017–2020.
          </p>
          <p className="text-muted-foreground">
            După ce a lucrat în domenii diferite și a construit proiecte care au avut
            rezultate diferite, Alex Matescu a început să documenteze public lecțiile
            învățate despre muncă, disciplină, succes, tehnologie, antreprenoriat și sens.
          </p>
          <p className="text-muted-foreground">
            Printre proiectele sale se numără CRANDIT – Mitul succesului peste noapte,
            afacerea de familie din mediul rural, Taste the Corn, Atracțiile României,
            GEO / AI Visibility și Leadership Artificial.
          </p>
        </div>
      </section>

      {/* Cronologie */}
      <section className="container-editorial py-16 md:py-20 border-t border-foreground/10">
        <p className="eyebrow mb-6">Cronologie pe scurt</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-12">
          De la Strâmba Jiu la astăzi
        </h2>
        <ol className="relative border-l border-foreground/15 pl-8 md:pl-12 space-y-12">
          {timeline.map((m, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden
                className="absolute -left-[37px] md:-left-[49px] top-2 h-3 w-3 rounded-full bg-foreground"
              />
              <p className="eyebrow mb-3">{m.period}</p>
              <h3 className="font-serif text-xl md:text-2xl tracking-tight leading-snug">
                {m.title}
              </h3>
              <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
                {m.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Capitole narative */}
      {chapters.map((c, i) => (
        <section
          key={i}
          className="container-editorial py-16 md:py-20 border-t border-foreground/10"
        >
          <p className="eyebrow mb-6">{c.period}</p>
          <h2 className="font-serif text-3xl md:text-5xl tracking-tight text-balance leading-tight mb-10">
            {c.title}
          </h2>
          <div className="max-w-2xl space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground">
            {c.paragraphs.map((p, j) => (
              <p key={j}>{p}</p>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className="container-editorial py-16 md:py-20 border-t border-foreground/10">
        <p className="eyebrow mb-6">Întrebări frecvente</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-10">
          Despre călătoria lui Alex Matescu
        </h2>
        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="font-serif text-lg md:text-xl text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-base text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Entități */}
      <section className="container-editorial py-16 md:py-20 border-t border-foreground/10">
        <p className="eyebrow mb-6">Entități principale menționate</p>
        <ul className="flex flex-wrap gap-2 max-w-4xl">
          {entities.map((e) => (
            <li
              key={e}
              className="text-sm px-3 py-1.5 border border-foreground/15 rounded-full text-muted-foreground"
            >
              {e}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="border-t border-foreground/10 bg-surface/60">
        <div className="container-editorial py-16 md:py-20 grid gap-10 md:grid-cols-2">
          <Link
            to="/proiecte"
            className="group flex items-start justify-between gap-6 border border-foreground/10 rounded-lg p-8 hover:border-foreground/30 transition-colors"
          >
            <div>
              <p className="eyebrow mb-3">Continuă</p>
              <p className="font-serif text-2xl leading-snug">Vezi proiectele</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Ce construiesc acum și ce am închis pe drum.
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>

          <Link
            to="/carte"
            className="group flex items-start justify-between gap-6 border border-foreground/10 rounded-lg p-8 hover:border-foreground/30 transition-colors"
          >
            <div>
              <p className="eyebrow mb-3">Citește</p>
              <p className="font-serif text-2xl leading-snug">CRANDIT — cartea</p>
              <p className="mt-3 text-sm text-muted-foreground">
                Distilarea acestui drum într-un singur volum.
              </p>
            </div>
            <ArrowUpRight className="h-5 w-5 mt-1 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Calatoria;
