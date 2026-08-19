/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const istoriaCautariiMeta = {
  title:
    "Istoria căutării pe internet: cum fiecare eră a creat un punct orb pe care optimizarea a încercat să-l exploateze",
  description:
    "De la Archie și primele indexuri ale internetului la răspunsurile generative din 2026: momentele-cheie din evoluția căutării, originea disputată a termenului SEO și o ipoteză despre tiparul care se repetă.",
  canonical: "https://delamatescu.ro/lab/articole/istoria-cautarii-internet-evolutia-seo",
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  faq: [
    {
      q: "Care a fost primul motor de căutare de pe internet?",
      a: "Archie este considerat în mod obișnuit primul motor de căutare de pe internet. Alan Emtage l-a creat la Universitatea McGill, care datează creația inițială în 1989. Archie indexa liste de fișiere de pe servere FTP, nu pagini web.",
    },
    {
      q: "Cine a inventat termenul SEO?",
      a: "Nu există un inventator unic demonstrat. Istoria disponibilă indică mai multe apariții și revendicări independente în perioada 1995-1997, asociate cu nume precum Bruce Clay, John Audette, Bob Heyman, Leland Harden și Viktor Grant.",
    },
    {
      q: "Ce a schimbat PageRank?",
      a: "PageRank a folosit structura de linkuri a webului ca semnal pentru evaluarea paginilor, mutând o parte importantă a analizei din interiorul documentului spre relațiile dintre documente.",
    },
    {
      q: "De ce nu mai contează meta keywords pentru Google?",
      a: "Google spune explicit că meta keywords nu este folosit pentru ranking în Google Search.",
    },
    {
      q: "Există un markup special pentru AI Overviews sau AI Mode?",
      a: "Nu. Google spune că nu este necesar un markup special, un fișier AI precum llms.txt sau alt format separat pentru a apărea în funcțiile generative Google Search.",
    },
    {
      q: "Este coroborarea factorul de ranking al GEO?",
      a: "Nu există dovezi publice suficiente pentru a afirma că există un singur factor de ranking numit coroborare. Motoarele generative folosesc pipeline-uri complexe, iar coroborarea este tratată în acest articol ca ipoteză de cercetare, nu ca mecanism algoritmic demonstrat.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const istoriaCautariiHtml = `
      <p><strong>Istoria căutării pe internet poate fi citită ca o succesiune de mecanisme prin care motoarele au încercat să aproximeze relevanța, autoritatea și utilitatea. În această analiză împart evoluția căutării web în șase ere, precedate de o etapă pre-web. Teza AI Visibility Lab este că fiecare mecanism de aproximare creează inevitabil o distanță între semnal și realitatea pe care încearcă să o măsoare, iar optimizarea tinde să se mute exact în acea distanță. Uneori o reduce legitim, alteori o exploatează. Când semnalul devine prea ușor de manipulat, sistemele de căutare îl devalorizează, îl combină cu altele sau îl înlocuiesc.</strong></p>

      <p>Aceasta este o <strong>interpretare a istoriei</strong>, nu o descriere oficială a modului în care funcționează fiecare motor de căutare și nici afirmația că există un singur „indicator” dominant în fiecare perioadă. Motoarele de căutare au folosit întotdeauna mai multe semnale simultan, iar mecanismele exacte de ranking sunt în mare parte proprietare. Modelul de mai jos este o lentilă analitică: simplifică istoria pentru a face vizibil un tipar.</p>

      <h2>Teza: arbitrajul punctului orb</h2>

      <p>Un motor de căutare vrea să răspundă la întrebări pe care nu le poate măsura direct: <strong>cât de relevantă este o pagină pentru o interogare, câtă autoritate are sursa, cât de util este răspunsul și câtă încredere merită</strong>.</p>

      <p>Pentru asta folosește semnale observabile: cuvinte și relații dintre cuvinte, linkuri, structura documentului, informații despre entități, caracteristici tehnice ale paginii și numeroase alte semnale. Google spune explicit că sistemele sale de ranking folosesc mai multe sisteme și semnale, iar pentru experiențele generative actuale recomandă în continuare fundamentele SEO, nu existența unui „hack” separat pentru AI.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <p>Între semnal și proprietatea pe care semnalul încearcă să o aproximeze rămâne însă o distanță. În această analiză numesc acea distanță <strong>punctul orb</strong>.</p>

      <p>Când un semnal poate fi produs fără a produce și realitatea pe care ar trebui să o indice, apare posibilitatea arbitrajului: repetiție fără relevanță, linkuri fără autoritate reală, formă editorială fără substanță, mențiuni fără recunoaștere autentică.</p>

      <p>Istoria SEO poate fi citită, din această perspectivă, ca o competiție continuă între două forțe: creatorii și specialiștii încearcă să înțeleagă ce recompensează sistemul, iar motoarele încearcă să distingă semnalul autentic de semnalul fabricat.</p>

      <p>Utilitatea acestui model nu este doar istorică. El oferă o întrebare practică pentru orice epocă: <strong>ce încearcă sistemul să aproximeze, prin ce semnale o face și cât de ușor pot fi acele semnale produse artificial?</strong></p>

      <h2>Etapa 0: înainte de web (1989-1993)</h2>

      <p><strong>1989.</strong> Alan Emtage, student și administrator de sistem la Universitatea McGill din Montreal, creează <strong>Archie</strong>, considerat în mod obișnuit primul motor de căutare de pe internet. Archie indexa liste de fișiere disponibile pe servere FTP, nu conținutul paginilor web, pentru că World Wide Web-ul încă nu devenise mediul dominant pe care îl cunoaștem astăzi. Unele relatări istorice plasează dezvoltarea/publicarea sa în 1990, dar McGill datează creația inițială în 1989.<sup><a href="#fn-3">3</a></sup></p>

      <p><strong>1992-1993.</strong> În ecosistemul Gopher apar sisteme de căutare precum <strong>Veronica</strong> și <strong>Jughead</strong>, construite pentru a găsi resurse în meniurile și serverele Gopher.<sup><a href="#fn-4">4</a></sup></p>

      <p><strong>1993.</strong> Matthew Gray dezvoltă la MIT <strong>World Wide Web Wanderer</strong>, unul dintre primii roboți autonomi ai webului, folosit inițial pentru a măsura creșterea webului. Datele colectate au alimentat un index cunoscut sub numele de <strong>Wandex</strong>.<sup><a href="#fn-5">5</a></sup></p>

      <p>În această etapă, optimizarea comercială a vizibilității în căutare nu devenise încă o industrie. Asta nu înseamnă că internetul era lipsit de abuzuri sau că sistemele nu puteau fi manipulate, ci doar că stimulentul economic pentru manipularea sistematică a clasamentelor era încă redus.</p>

      <p><strong>Ipoteza acestei analize:</strong> spamul de căutare devine o problemă structurală atunci când vizibilitatea dobândește suficientă valoare economică încât merită fabricată.</p>

      <h2>Era 1: directoare, autodescriere și curatoriat uman (1993-1998)</h2>

      <p><strong>1994.</strong> Jerry Yang și David Filo transformă ceea ce începuse ca o listă de site-uri favorite într-un director cunoscut drept <strong>Yahoo!</strong>, organizat pe categorii și întreținut editorial. În primele sale forme, descoperirea site-urilor depindea mult mai mult de clasificare și curatoriat uman decât de rankingul algoritmic modern.</p>

      <p>În aceeași perioadă, Martijn Koster dezvoltă <strong>ALIWEB</strong>. Sistemul nu funcționa ca un crawler modern care descoperea automat întregul web; proprietarii de site-uri puteau furniza fișiere de index și descrieri pentru a fi incluse în serviciu.<sup><a href="#fn-6">6</a></sup></p>

      <p>Tot Koster este asociat cu apariția <strong>Robots Exclusion Protocol</strong>. Documentul original „A Standard for Robot Exclusion” datează din 1994; protocolul a fost standardizat formal mult mai târziu, prin RFC 9309, publicat în 2022.<sup><a href="#fn-7">7</a></sup><sup><a href="#fn-8">8</a></sup></p>

      <p>În 2026, <code>robots.txt</code> rămâne un mecanism important prin care operatorii de site-uri comunică instrucțiuni crawlerelor. Este însă esențială o precizare: <code>robots.txt</code> <strong>nu este un mecanism de autorizare sau securitate</strong>. RFC 9309 spune explicit că regulile sale nu reprezintă control de acces, iar respectarea lor depinde de crawler.<sup><a href="#fn-8">8</a></sup></p>

      <p><strong>Semnalul dominant în modelul acestei analize:</strong> clasificarea editorială sau autodescrierea furnizată sistemului.</p>

      <p><strong>Punctul orb:</strong> curatoriatul uman nu poate scala la ritmul de creștere al webului, iar autodescrierea poate fi părtinitoare sau manipulată.</p>

      <p><strong>Cum s-a schimbat sistemul:</strong> motoarele au trecut progresiv spre crawling și indexare automată, pentru că webul a crescut mai repede decât putea fi catalogat manual.</p>

      <h2>Era 2: textul paginii și nașterea optimizării pentru motoare (1994-1998)</h2>

      <p><strong>1994.</strong> Brian Pinkerton lansează <strong>WebCrawler</strong>, unul dintre primele motoare web capabile să caute în textul integral al paginilor, nu doar în titluri sau liste de URL-uri. În același an apare și <strong>Lycos</strong>.<sup><a href="#fn-9">9</a></sup></p>

      <p><strong>15 decembrie 1995.</strong> Digital Equipment Corporation lansează public <strong>AltaVista</strong>, care devine rapid unul dintre cele mai importante motoare ale perioadei, remarcat pentru indexul mare, viteza de căutare și capabilitățile avansate de interogare.<sup><a href="#fn-10">10</a></sup></p>

      <p>Motoarele timpurii se bazau într-o măsură mult mai mare decât sistemele moderne pe termeni prezenți în document, frecvență, titluri, metadate și alte semnale relativ ușor de controlat de proprietarul paginii.</p>

      <p><strong>Semnalul dominant în modelul acestei analize:</strong> indicii textuale din pagină și metadatele.</p>

      <p><strong>Ce încerca motorul să afle:</strong> despre ce este documentul și cât de bine corespunde interogării.</p>

      <p><strong>Punctul orb:</strong> simpla prezență sau repetare a unui termen nu demonstrează relevanță reală.</p>

      <p>Aici apar tactici devenite clasice: <strong>keyword stuffing</strong>, text ascuns, liste de termeni fără valoare pentru cititor și folosirea abuzivă a metadatelor.</p>

      <h3>Prima deturnare: câmpul pe care îl controlezi singur</h3>

      <p>Tag-ul <code>meta keywords</code> este unul dintre cele mai cunoscute exemple ale problemei autodescrierii: proprietarul paginii poate declara ce cuvinte consideră relevante fără ca acea declarație să fie, prin ea însăși, o dovadă.</p>

      <p>Google spune explicit că <strong>nu folosește meta keywords în rankingul Google Search</strong>.<sup><a href="#fn-11">11</a></sup> Din acest episod nu rezultă că orice informație declarată de proprietarul site-ului este inutilă; structured data, de exemplu, poate ajuta motoarele să înțeleagă conținutul și să activeze anumite funcții de afișare. Lecția mai precisă este alta: <strong>un semnal controlat integral de sursă devine vulnerabil dacă sistemul nu îl poate valida prin context sau prin alte semnale.</strong></p>

      <h2>Originea disputată a termenului SEO</h2>

      <p>Originea expresiei <strong>„search engine optimization”</strong> este mai puțin clară decât sugerează multe istorii retrospective.</p>

      <p>Nu există o dovadă unanim acceptată care să permită atribuirea termenului unei singure persoane. O investigație publicată de Search Engine Land în 2025 documentează cinci nume asociate independent cu apariția formulării în intervalul aproximativ 1995-1997: <strong>Bruce Clay, John Audette, Bob Heyman, Leland Harden și Viktor Grant</strong>. Danny Sullivan este creditat mai degrabă pentru rolul major în popularizarea terminologiei și în documentarea industriei.<sup><a href="#fn-12">12</a></sup></p>

      <p>Există și binecunoscuta relatare a lui Bob Heyman și Leland Harden despre un proiect pentru Jefferson Starship, în care problema vizibilității site-ului în motoarele de căutare i-ar fi împins spre ideea de „optimizare”. Datarea exactă a episodului diferă între relatări, de aceea este mai sigur tratat ca <strong>mărturie retrospectivă</strong>, nu ca punct cronologic definitiv.</p>

      <p>În cercetările istorice atribuite lui Danny Sullivan apare o referință arhivată la expresia „search engine optimization” într-un mesaj publicitar de pe Usenet din <strong>26 iulie 1997</strong>. Aceasta este o dovadă documentară timpurie, nu neapărat momentul în care termenul a fost rostit pentru prima dată.<sup><a href="#fn-12">12</a></sup></p>

      <p>În 1997, Danny Sullivan lansează <strong>Search Engine Watch</strong>, una dintre publicațiile timpurii dedicate urmăririi motoarelor de căutare și practicilor de optimizare. În 2001, el propune și popularizează expresia <strong>„search engine marketing”</strong> ca termen-umbrelă pentru ecosistemul în care coexistau optimizarea organică și publicitatea în căutare.</p>

      <p>Mai târziu, Jason Gambert a încercat să obțină protecție de marcă pentru „SEO” în Statele Unite, o încercare contestată de membri ai industriei. Episodul este relevant tocmai pentru că arată cât de dificil este să atribui proprietatea unui termen care circulase deja în industrie.<sup><a href="#fn-12">12</a></sup></p>

      <p><strong>Concluzia defensabilă:</strong> termenul SEO nu are un „inventator” unic demonstrat. Avem mai multe revendicări timpurii, apariții independente și dovezi documentare fragmentare.</p>

      <h2>Era 3: graful de linkuri și autoritatea externă (1998-2011)</h2>

      <p><strong>1998.</strong> Sergey Brin și Larry Page publică lucrarea <em>The Anatomy of a Large-Scale Hypertextual Web Search Engine</em>, care descrie arhitectura timpurie Google și rolul analizei structurii de linkuri. În același an este fondată compania Google.<sup><a href="#fn-13">13</a></sup></p>

      <p>Inovația esențială a PageRank a fost folosirea structurii de linkuri a webului ca semnal: un link putea funcționa ca o formă de recomandare, iar recomandările provenite de la pagini importante puteau avea o greutate mai mare.</p>

      <p>Asta a mutat o parte importantă a evaluării din interiorul documentului — unde proprietarul paginii controlează aproape tot — în relațiile dintre documente.</p>

      <p><strong>Semnalul dominant în modelul acestei analize:</strong> structura și calitatea linkurilor.</p>

      <p><strong>Punctul orb:</strong> linkurile pot fi cumpărate, schimbate, fabricate sau produse în rețele artificiale.</p>

      <p>De aici apar tactici precum fermele de linkuri, directoarele construite doar pentru SEO, spamul în comentarii, schemele de link exchange, rețelele de site-uri și manipularea agresivă a textului de ancoră.</p>

      <p><strong>2005.</strong> Google și alte motoare importante introduc <code>rel="nofollow"</code> în contextul luptei împotriva spamului din comentarii. Google confirmă retrospectiv că atributul a fost introdus în 2005 pentru a ajuta la combaterea comment spamului și a evoluat ulterior spre un mecanism mai general de caracterizare a relației dintre pagini.<sup><a href="#fn-14">14</a></sup></p>

      <h3>A doua deturnare: căutarea devine și piață publicitară</h3>

      <p>La sfârșitul anilor 1990, <strong>GoTo.com</strong> — companie care va deveni ulterior Overture — popularizează modelul de paid search bazat pe licitație și plată pentru trafic. Nu a fost prima tentativă de monetizare a căutării, iar forme de paid placement existaseră anterior; importanța GoTo a fost transformarea licitației PPC într-un model comercial scalabil.</p>

      <p><strong>23 octombrie 2000.</strong> Google anunță disponibilitatea AdWords ca sistem self-service de publicitate pe cuvinte-cheie. Versiunea inițială era tarifată în principal pe baza impresiilor, prin CPM.<sup><a href="#fn-15">15</a></sup></p>

      <p><strong>20 februarie 2002.</strong> Google lansează <strong>AdWords Select</strong>, cu tarifare cost-per-click. Google preciza atunci că ordonarea reclamelor era determinată printr-o combinație între performanța anunțului — click-through rate — și suma pe care advertiserul era dispus să o plătească per clic.<sup><a href="#fn-16">16</a></sup></p>

      <p>Din acel moment, pagina de rezultate este tot mai clar două sisteme în același spațiu: rezultate organice și rezultate plătite. Este importantă însă distincția pe care Google o făcea explicit încă din 2002: plata pentru reclame nu cumpăra poziții în rezultatele organice.<sup><a href="#fn-16">16</a></sup></p>

      <h2>Era 4: calitate, spam și înțelegerea entităților (2011-2015)</h2>

      <p>În această perioadă, Google își intensifică eforturile împotriva unor tipare de conținut și linkuri care produceau rezultate slabe în ciuda faptului că bifau semnale utile algoritmilor mai vechi.</p>

      <p><strong>Februarie 2011 — Panda.</strong> Actualizarea vizează îmbunătățirea calității rezultatelor și lovește puternic site-uri cu conținut slab, duplicat sau produs la scară mare pentru trafic.</p>

      <p><strong>Aprilie 2012 — Penguin.</strong> Google anunță o schimbare algoritmică orientată împotriva webspamului, inclusiv a unor tehnici de manipulare prin linkuri.<sup><a href="#fn-17">17</a></sup></p>

      <p><strong>Mai 2012 — Knowledge Graph.</strong> Google introduce Knowledge Graph și formulează explicit trecerea de la simpla potrivire de șiruri de caractere spre înțelegerea „lucrurilor” — persoane, locuri și entități și relațiile dintre ele.</p>

      <p><strong>2013 — Hummingbird.</strong> Google introduce o schimbare majoră în infrastructura algoritmică, asociată cu o înțelegere mai bună a interogărilor și a relațiilor semantice dintre termeni.</p>

      <p><strong>7 august 2014 — HTTPS</strong> devine un semnal de ranking, inițial unul foarte ușor, afectând conform Google mai puțin de 1% dintre interogările globale la momentul anunțului.<sup><a href="#fn-18">18</a></sup></p>

      <p><strong>21 aprilie 2015 — mobile-friendly update.</strong> Google începe să favorizeze paginile mobile-friendly în <strong>rezultatele căutărilor de pe dispozitive mobile</strong>; actualizarea nu afecta rankingul desktop.<sup><a href="#fn-19">19</a></sup></p>

      <p><strong>Semnalul dominant în modelul acestei analize:</strong> o combinație tot mai complexă de semnale prin care motorul încearcă să estimeze relevanța, calitatea, încrederea și experiența oferită.</p>

      <p><strong>Punctul orb:</strong> forma poate imita calitatea. Un document poate fi lung, bine structurat și „optimizat” fără să aducă informație originală sau utilitate reală.</p>

      <p>În acest context apare o versiune mai sofisticată a conținutului produs pentru algoritm: pagini construite să arate complet, cu multe subtitluri, liste și variații de cuvinte-cheie, dar fără o diferență reală de valoare față de ceea ce exista deja.</p>

      <h2>Era 5: machine learning, context și intenție (2015-2022)</h2>

      <p><strong>2015 — RankBrain.</strong> Google introduce RankBrain, un sistem de machine learning folosit pentru a ajuta Search să înțeleagă mai bine relația dintre cuvinte, concepte și interogări.</p>

      <p><strong>2019 — BERT.</strong> Google începe să folosească BERT în Search pentru a înțelege mai bine contextul cuvintelor într-o interogare și nuanțele limbajului natural.</p>

      <p><strong>2021 — MUM.</strong> Google prezintă Multitask Unified Model, un model multimodal și multilingv conceput pentru sarcini complexe de înțelegere și procesare a informației. MUM nu trebuie tratat simplist ca „un nou algoritm de ranking general”; Google l-a descris ca tehnologie folosită pentru anumite capabilități și experiențe de căutare.</p>

      <p><strong>2021 — Page Experience și Core Web Vitals.</strong> Google începe rollout-ul semnalelor Page Experience în Search; implementarea a început în iunie 2021 și a fost finalizată spre sfârșitul lunii august.<sup><a href="#fn-20">20</a></sup></p>

      <p><strong>August 2022 — Helpful Content Update.</strong> Google lansează sistemul conceput pentru a favoriza conținutul creat în primul rând pentru oameni și pentru a reduce avantajul conținutului făcut în principal pentru a atrage trafic din motoarele de căutare.<sup><a href="#fn-21">21</a></sup></p>

      <p><strong>Semnalul dominant în modelul acestei analize:</strong> estimări din ce în ce mai sofisticate ale relevanței și utilității, construite din multe semnale și modele, nu dintr-un singur factor.</p>

      <p><strong>Punctul orb:</strong> un sistem poate învăța ce seamănă cu un răspuns util fără ca „util” să fie identic cu „adevărat”. Corectitudinea factuală, satisfacția utilizatorului, autoritatea și relevanța sunt dimensiuni care se suprapun doar parțial.</p>

      <h3>A treia deturnare: motorul începe să răspundă, nu doar să trimită</h3>

      <p>Transformarea nu începe cu AI generativ.</p>

      <p>Universal Search, Knowledge Panels, featured snippets și alte formate au redus treptat necesitatea clicului pentru anumite interogări. Motorul nu mai este doar un catalog de linkuri; pentru multe întrebări devine și suprafață de răspuns.</p>

      <p>Apare astfel un paradox pentru publisheri: poți fi sursa din care motorul extrage sau sintetizează informația, în timp ce utilizatorul primește suficient context direct în pagina de rezultate încât să nu mai viziteze sursa.</p>

      <p>Acest fenomen este unul dintre antecedentele directe ale tensiunii actuale dintre vizibilitate și trafic în căutarea generativă.</p>

      <h2>Era 6: căutarea generativă (2022-prezent)</h2>

      <p><strong>30 noiembrie 2022.</strong> OpenAI lansează public ChatGPT.</p>

      <p><strong>Februarie 2023.</strong> Microsoft prezintă noul Bing cu o experiență conversațională bazată pe modele AI.</p>

      <p><strong>Martie 2023.</strong> Google deschide accesul la Bard.</p>

      <p><strong>Mai 2023.</strong> Google prezintă <strong>Search Generative Experience (SGE)</strong>.</p>

      <p><strong>16 noiembrie 2023.</strong> Este încărcată pe arXiv prima versiune a lucrării <em>GEO: Generative Engine Optimization</em>, de Pranjal Aggarwal și colaboratorii săi. Lucrarea formalizează termenul „Generative Engine Optimization” ca problemă de optimizare a vizibilității surselor în răspunsurile generate și raportează, în cadrul benchmarkului și configurațiilor testate de autori, creșteri de vizibilitate de până la 40% pentru anumite tehnici.<sup><a href="#fn-22">22</a></sup></p>

      <p><strong>Mai 2024.</strong> Google lansează <strong>AI Overviews</strong> în Statele Unite.</p>

      <p><strong>2025-2026.</strong> Google extinde AI Mode și alte experiențe generative, iar căutarea conversațională devine o componentă tot mai vizibilă a produselor de search.</p>

      <p><strong>21 mai 2025.</strong> Google publică recomandări oficiale pentru publisheri privind performanța conținutului în AI Overviews și AI Mode. Mesajul central este că fundamentele SEO și conținutul util rămân valabile.<sup><a href="#fn-23">23</a></sup></p>

      <p><strong>15 mai 2026.</strong> Google publică un ghid dedicat optimizării pentru funcțiile generative din Search. Ghidul spune explicit că, pentru Google Search, proprietarii de site-uri nu au nevoie de fișiere AI speciale precum <code>llms.txt</code>, de markup special pentru AI sau de tactici precum urmărirea mențiunilor neautentice; recomandarea este continuarea practicilor SEO solide și producerea de conținut unic, util și de încredere.<sup><a href="#fn-2">2</a></sup></p>

      <p><strong>3 iunie 2026.</strong> Google anunță rapoarte dedicate de performanță pentru funcțiile generative în Search Console, cu date precum impresii, pagini, țări, dispozitive și evoluție în timp.<sup><a href="#fn-24">24</a></sup></p>

      <h3>Ce putem spune, în mod verificabil, despre „semnalul” erei generative</h3>

      <p>Aici este nevoie de mai multă prudență decât în istoria SEO clasic.</p>

      <p>Nu există dovezi publice că motoarele generative ar folosi un singur „indicator actual” echivalent cu frecvența cuvintelor sau PageRank. Sistemele actuale combină etape de crawling, indexare, retrieval, ranking/reranking, selecție de surse, context și generare. Configurația diferă între produse și poate fi modificată fără ca toate detaliile să fie publicate.</p>

      <p>Lucrarea GEO din 2023/2024 arată că modul în care este prezentată și susținută informația poate influența vizibilitatea în configurațiile testate, iar cercetări ulterioare arată că optimizarea trebuie analizată pe mai multe etape ale pipeline-ului, nu ca un singur truc aplicat textului.<sup><a href="#fn-22">22</a></sup><sup><a href="#fn-25">25</a></sup></p>

      <p>Prin urmare, afirmația <strong>„coroborarea este indicatorul actual al motoarelor generative”</strong> ar fi prea puternică. Nu există bază publică suficientă pentru a o trata ca fapt.</p>

      <h3>Ipoteza AI Visibility Lab: coroborarea ca unul dintre semnalele posibile ale credibilității</h3>

      <p>Ipoteza pe care o propun este mai îngustă:</p>

      <p><strong>În sistemele care recuperează și sintetizează informații din mai multe surse, concordanța dintre surse independente poate contribui la robustețea sau credibilitatea unei afirmații, dar nu există dovezi publice că numărul mențiunilor sau simpla repetare a unei asocieri reprezintă un semnal unic, direct sau dominant de ranking/citare.</strong></p>

      <p>Această distincție contează.</p>

      <p>Dacă o industrie transformă ipoteza „sistemele caută dovezi convergente” în tactica „repetă același lucru pe cât mai multe domenii”, apare exact problema pe care istoria SEO a produs-o de multe ori: semnalul aparent este separat de fenomenul real.</p>

      <p>Google avertizează deja împotriva <strong>inauthentic mentions</strong> ca tactică pentru funcțiile sale generative și recomandă explicit creatorilor să nu urmărească astfel de „GEO hacks”.<sup><a href="#fn-2">2</a></sup></p>

      <p>Asta nu demonstrează că există un algoritm anti-mențiuni echivalent cu Penguin și nici că o penalizare viitoare este inevitabilă. Demonstrează doar că Google spune public, în 2026, că această tactică nu reprezintă o cale recomandată spre vizibilitate.</p>

      <h2>Ce urmează, dacă tiparul se repetă</h2>

      <p>De aici înainte intrăm deliberat în <strong>predicție</strong>, nu în fapt verificat.</p>

      <p>Dacă sistemele generative ajung să folosească tot mai multe forme de validare între surse, o problemă logică devine inevitabilă: cum diferențiezi consensul autentic de consensul fabricat?</p>

      <p>Mențiunile pot fi cumpărate. Comunicatele pot fi republicate automat. Rețelele de site-uri pot repeta aceeași afirmație. Conținutul generat automat poate crea impresia unei asocieri larg răspândite fără ca în spate să existe recunoaștere independentă.</p>

      <p>Prin urmare, <strong>predicția AI Visibility Lab</strong> este că maturizarea căutării generative va necesita mecanisme mai bune pentru distingerea independenței, provenienței și autenticității surselor.</p>

      <p>Nu știm dacă această evoluție va lua forma unei penalizări, a unei ponderări mai sofisticate a provenienței sau a unor sisteme complet diferite. Ar fi nejustificat să afirmăm că „următorul Penguin” va viza mențiunile.</p>

      <p>Putem spune însă ceva mai modest și mai solid: <strong>pe măsură ce o tactică devine ușor de fabricat, valoarea ei ca semnal tinde să scadă.</strong></p>

      <h2>Ce nu s-a schimbat</h2>

      <p>Din toate aceste perioade se pot extrage trei observații care rezistă mai bine decât orice listă de tactici.</p>

      <p><strong>1. Semnalele controlate integral de aceeași parte sunt mai vulnerabile la manipulare.</strong><br />Meta keywords este exemplul clasic. Asta nu înseamnă că informația first-party este lipsită de valoare, ci că sistemele au motive să o interpreteze împreună cu alte dovezi.</p>

      <p><strong>2. Semnalele externe nu sunt automat autentice.</strong><br />Linkurile au mutat autoritatea în afara paginii, dar au creat imediat piața linkurilor. Mențiunile, citările și referințele pot suferi aceeași problemă. Proveniența și independența contează mai mult decât simplul număr.</p>

      <p><strong>3. Optimizarea nu dispare când se schimbă interfața.</strong><br />Directoarele, rezultatele clasice, featured snippets și răspunsurile generative reprezintă suprafețe diferite, dar problema rămâne aceeași: cum faci informația ușor de descoperit, înțeles, selectat și atribuit fără să sacrifici valoarea reală pentru utilizator?</p>

      <p>Asta este partea durabilă a SEO și GEO. Nu „trucul” unei epoci, ci disciplina de a înțelege cum circulă informația între creator, sistem și utilizator.</p>

      <h2>Întrebări frecvente</h2>

      <h3>Care a fost primul motor de căutare de pe internet?</h3>
      <p><strong>Archie</strong> este considerat în mod obișnuit primul motor de căutare de pe internet. Alan Emtage l-a creat la McGill; universitatea datează creația în <strong>1989</strong>, deși unele istorii folosesc 1990 pentru etapele ulterioare ale dezvoltării și răspândirii. Archie indexa liste de fișiere de pe servere FTP, nu pagini web.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Care a fost primul crawler al webului?</h3>
      <p>Matthew Gray descrie <strong>World Wide Web Wanderer</strong>, dezvoltat în 1993, drept primul agent autonom al webului, iar resursele MIT îl descriu drept primul web spider. Era folosit inițial pentru măsurarea dimensiunii webului.<sup><a href="#fn-5">5</a></sup></p>

      <h3>Cine a inventat termenul SEO?</h3>
      <p>Nu există un inventator unic demonstrat. Istoria disponibilă indică mai multe persoane care au folosit sau revendicat independent formulări apropiate în perioada 1995-1997. O investigație Search Engine Land din 2025 discută cinci nume: Bruce Clay, John Audette, Bob Heyman, Leland Harden și Viktor Grant. Danny Sullivan a avut un rol important în popularizarea și documentarea terminologiei.<sup><a href="#fn-12">12</a></sup></p>

      <h3>Ce a schimbat PageRank?</h3>
      <p>PageRank a făcut din structura de linkuri a webului un semnal important pentru evaluarea paginilor. În loc să se bazeze doar pe ce declara documentul despre el însuși, motorul putea analiza și relațiile dintre documente.<sup><a href="#fn-13">13</a></sup></p>

      <h3>Când a devenit căutarea o piață publicitară?</h3>
      <p>Monetizarea căutării a evoluat în mai multe etape. GoTo.com a popularizat licitațiile PPC la sfârșitul anilor 1990. Google a lansat AdWords self-service în octombrie 2000, inițial cu tarifare CPM, iar în februarie 2002 a lansat AdWords Select, cu CPC și ordonare bazată pe combinația dintre bid și performanța anunțului.<sup><a href="#fn-15">15</a></sup><sup><a href="#fn-16">16</a></sup></p>

      <h3>De ce nu mai contează meta keywords pentru Google?</h3>
      <p>Google spune explicit că <strong>meta keywords nu este folosit pentru ranking în Google Search</strong>. Motivul practic pentru care astfel de semnale sunt slabe este evident: proprietarul paginii le poate completa fără ca ele să demonstreze relevanța reală a conținutului.<sup><a href="#fn-11">11</a></sup></p>

      <h3>Există un markup special pentru AI Overviews sau AI Mode?</h3>
      <p>Nu. Ghidul Google din 2026 spune explicit că nu este necesar un markup special, un fișier AI precum <code>llms.txt</code> sau alt format separat pentru a apărea în funcțiile generative Google Search. Fundamentele SEO existente rămân baza recomandată.<sup><a href="#fn-2">2</a></sup></p>

      <h3>Este coroborarea „factorul de ranking” al GEO?</h3>
      <p>Nu există dovezi publice suficiente pentru o asemenea afirmație. Coroborarea între surse este o <strong>ipoteză relevantă</strong> pentru credibilitate și sinteză, dar motoarele generative folosesc pipeline-uri complexe, iar factorii și ponderile exacte nu sunt publice. În acest articol, coroborarea este tratată ca ipoteză de cercetare, nu ca fapt algoritmic demonstrat.</p>

      <h3>Ce ar putea urma după GEO?</h3>
      <p>Predicția AI Visibility Lab este că, dacă mențiunile și referințele externe devin o zonă importantă de optimizare, sistemele vor avea nevoie de metode mai bune pentru a distinge semnalele autentice de cele fabricate. Este o extrapolare din istoria SEO, nu o schimbare algoritmică anunțată.</p>

      <h2>Metodologie și limite</h2>

      <p>Acest articol combină două categorii de afirmații:</p>

      <ol>
        <li><strong>fapte istorice verificabile</strong>, pentru care sunt indicate surse;</li>
        <li><strong>interpretări și predicții AI Visibility Lab</strong>, marcate explicit ca ipoteze sau concluzii ale analizei.</li>
      </ol>

      <p>Pentru evenimentele Google au fost preferate, acolo unde sunt disponibile, documentele și anunțurile oficiale Google. Pentru originile internetului au fost preferate surse instituționale precum McGill, MIT, RFC Editor și documentația istorică a Robots Exclusion Protocol. Pentru originea termenului SEO nu există o sursă primară unică și definitivă, de aceea secțiunea folosește o investigație istorică recentă și formulează concluzia în termeni de probabilitate și dovezi disponibile.</p>

      <p>Cronologiile foarte timpurii ale internetului conțin uneori date diferite în funcție de momentul considerat „creare”, „anunț”, „lansare” sau „distribuire publică”. Acolo unde există asemenea diferențe, articolul evită să transforme o dată disputată într-o certitudine falsă.</p>

      <h2>Surse și note</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">Google Search, informații despre sistemele de ranking și modul în care Google combină sisteme și semnale: <a href="https://www.google.com/search/howsearchworks/how-search-works/ranking-results/" target="_blank" rel="noopener noreferrer">google.com/search/howsearchworks</a></li>
        <li id="fn-2">Google Search Central — „Google's Guide to Optimizing for Generative AI Features on Google Search”, publicat în mai 2026: <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/fundamentals/ai-optimization-guide</a></li>
        <li id="fn-3">McGill University — „The first internet search engine” și materiale instituționale despre Alan Emtage. McGill datează creația Archie în 1989 și îl descrie drept primul motor de căutare pe internet: <a href="https://200.mcgill.ca/history/creation-of-the-first-internet-search-engine/" target="_blank" rel="noopener noreferrer">200.mcgill.ca</a> · <a href="https://reporter.mcgill.ca/mcgill-announces-hon-docs-for-fall-2022-convocation/" target="_blank" rel="noopener noreferrer">reporter.mcgill.ca</a></li>
        <li id="fn-4">Veronica a fost lansat în 1992 pentru Gopher; cronologiile istorice ale Gopher plasează Jughead în 1993. Sinteză și referințe: <a href="https://en.wikipedia.org/wiki/Veronica_(search_engine)" target="_blank" rel="noopener noreferrer">Wikipedia — Veronica (search engine)</a></li>
        <li id="fn-5">Matthew Gray, MIT — biografie și resurse istorice privind World Wide Web Wanderer: <a href="https://www.mit.edu/~mkgray/bio.html" target="_blank" rel="noopener noreferrer">mit.edu/~mkgray/bio.html</a> · <a href="https://stuff.mit.edu/wwwservices.html" target="_blank" rel="noopener noreferrer">stuff.mit.edu/wwwservices.html</a></li>
        <li id="fn-6">Martijn Koster, ALIWEB — anunțat în 1993 și prezentat la conferința WWW din 1994. Sinteză cu trimiteri la documentele originale: <a href="https://en.wikipedia.org/wiki/ALIWEB" target="_blank" rel="noopener noreferrer">Wikipedia — ALIWEB</a></li>
        <li id="fn-7">Martijn Koster — „A Standard for Robot Exclusion”, consens datat 30 iunie 1994: <a href="https://www.robotstxt.org/orig.html" target="_blank" rel="noopener noreferrer">robotstxt.org/orig.html</a></li>
        <li id="fn-8">IETF / RFC Editor — RFC 9309, Robots Exclusion Protocol, 2022: <a href="https://www.rfc-editor.org/rfc/rfc9309.html" target="_blank" rel="noopener noreferrer">rfc-editor.org/rfc/rfc9309</a></li>
        <li id="fn-9">WebCrawler, lansat în 1994 de Brian Pinkerton, este documentat ca unul dintre primele motoare cu căutare full-text: <a href="https://en.wikipedia.org/wiki/WebCrawler" target="_blank" rel="noopener noreferrer">Wikipedia — WebCrawler</a></li>
        <li id="fn-10">AltaVista a fost lansat public de Digital Equipment Corporation la 15 decembrie 1995 și a devenit unul dintre motoarele dominante ale perioadei. Sinteză cu referințe istorice: <a href="https://en.wikipedia.org/wiki/AltaVista" target="_blank" rel="noopener noreferrer">Wikipedia — AltaVista</a></li>
        <li id="fn-11">Google Search Central — „Google does not use the keywords meta tag in web ranking”, 21 septembrie 2009: <a href="https://developers.google.com/search/blog/2009/09/google-does-not-use-keywords-meta-tag" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2009/09/…</a></li>
        <li id="fn-12">Search Engine Land — „The origins of SEO and what they mean for GEO and AIO”, 24 septembrie 2025: <a href="https://searchengineland.com/origins-seo-geo-aio-462480" target="_blank" rel="noopener noreferrer">searchengineland.com/origins-seo-geo-aio-462480</a></li>
        <li id="fn-13">Sergey Brin &amp; Lawrence Page — <em>The Anatomy of a Large-Scale Hypertextual Web Search Engine</em>, 1998: <a href="http://infolab.stanford.edu/~backrub/google.html" target="_blank" rel="noopener noreferrer">infolab.stanford.edu/~backrub/google.html</a></li>
        <li id="fn-14">Google Search Central — „Evolving nofollow — new ways to identify the nature of links”, 10 septembrie 2019, cu retrospectiva introducerii atributului în 2005: <a href="https://developers.google.com/search/blog/2019/09/evolving-nofollow-new-ways-to-identify" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2019/09/…</a></li>
        <li id="fn-15">Google — „Google Launches Self-Service Advertising Program”, 23 octombrie 2000. Comunicatul precizează inclusiv tarifele CPM ale versiunii inițiale AdWords: <a href="https://googlepress.blogspot.com/2000/10/google-launches-self-service.html" target="_blank" rel="noopener noreferrer">googlepress.blogspot.com/2000/10/…</a></li>
        <li id="fn-16">Google — „Google Introduces New Pricing For Popular Self-Service Online Advertising Program”, 20 februarie 2002. Comunicatul descrie AdWords Select, CPC și ordonarea prin combinația dintre CTR și bid: <a href="https://googlepress.blogspot.com/2002/02/google-introduces-new-pricing-for.html" target="_blank" rel="noopener noreferrer">googlepress.blogspot.com/2002/02/…</a></li>
        <li id="fn-17">Google Search Central — „Another step to reward high-quality sites”, aprilie 2012, anunț privind schimbarea algoritmică împotriva webspamului: <a href="https://developers.google.com/search/blog/2012/04/another-step-to-reward-high-quality" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2012/04/…</a></li>
        <li id="fn-18">Google Search Central — „HTTPS as a ranking signal”, 7 august 2014: <a href="https://developers.google.com/search/blog/2014/08/https-as-ranking-signal" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2014/08/…</a></li>
        <li id="fn-19">Google Search Central — „Rolling out the mobile-friendly update”, 21 aprilie 2015: <a href="https://developers.google.com/search/blog/2015/04/rolling-out-mobile-friendly-update" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2015/04/…</a></li>
        <li id="fn-20">Google Search Central — „Timing for bringing page experience to Google Search”, cu actualizările privind rollout-ul din 2021: <a href="https://developers.google.com/search/blog/2020/11/timing-for-page-experience" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2020/11/…</a></li>
        <li id="fn-21">Google Search Central — „What creators should know about Google's August 2022 helpful content update”: <a href="https://developers.google.com/search/blog/2022/08/helpful-content-update" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2022/08/…</a></li>
        <li id="fn-22">Pranjal Aggarwal et al. — <em>GEO: Generative Engine Optimization</em>, arXiv:2311.09735, prima versiune 16 noiembrie 2023; ulterior acceptată la KDD 2024: <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2311.09735</a></li>
        <li id="fn-23">Google Search Central — „Top ways to ensure your content performs well in Google's AI experiences on Search”, 21 mai 2025: <a href="https://developers.google.com/search/blog/2025/05/succeeding-in-ai-search" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2025/05/…</a></li>
        <li id="fn-24">Google Search Central — „Introducing Search Generative AI performance reports in Search Console”, 3 iunie 2026: <a href="https://developers.google.com/search/blog/2026/06/gen-ai-performance-reports" target="_blank" rel="noopener noreferrer">developers.google.com/search/blog/2026/06/…</a></li>
        <li id="fn-25">Sunghwan Kim et al. — <em>SAGEO Arena: A Realistic Environment for Evaluating Search-Augmented Generative Engine Optimization</em>, 2026: <a href="https://arxiv.org/abs/2602.12187" target="_blank" rel="noopener noreferrer">arxiv.org/abs/2602.12187</a></li>
      </ol>

      <p><em>Articol publicat de AI Visibility Lab, proiectul de cercetare în vizibilitatea în motoare de căutare și sisteme generative al lui Alex Matescu. Ultima verificare factuală: 14 august 2026.</em></p>
`;
