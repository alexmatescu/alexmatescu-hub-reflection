import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const marketDiscoveryPilot5SibiuMeta: LabArticleMeta = {
  title:
    "Pilotul 5 Market Discovery: ce arată expresiile scurte și de ce am retras prea devreme „consultant AI”",
  seoTitle: "Pilotul 5 Market Discovery: expresii scurte și o eroare",
  description:
    "Rularea MKT-RO-AIV-2026Q4-PILOT-5, făcută din Sibiu între 15 și 18 octombrie 2026, este prima rulare completă a celor 12 expresii scurte USER-SHORT pe 8 suprafețe. A adus 69 de entități candidate, dintre care 37 noi, și ridică reuniunea de candidați la 278. Analiza pe expresii arată că doar câteva funcționează ca interogări de piață și că retragerea expresiei „consultant AI”, decisă după o singură rulare parțială, a fost o eroare de metodă: „marketing AI” și „specialist ChatGPT” au aceeași slăbiciune lingvistică și au rămas în set.",
  canonical:
    "https://delamatescu.ro/lab/articole/market-discovery-pilot-5-sibiu-expresii-scurte",
  category: "Search & Retrieval",
  articleType: "Analiză de caz",
  datePublished: "2026-10-22T07:16:00+03:00",
  dateModified: "2026-10-22",
  lastReviewed: "2026-10-22",
  about: [
    { name: "Market Discovery" },
    { name: "MKT-RO-AIV" },
    { name: "Expresii scurte USER-SHORT" },
    { name: "Ambiguitate lingvistică" },
    { name: "Candidate Set" },
  ],
  keywords: [
    "Market Discovery",
    "MKT-RO-AIV",
    "USER-SHORT",
    "expresii scurte",
    "ambiguitate lingvistică",
    "ancoră de limbă",
    "consultant AI",
    "marketing AI",
    "specialist ChatGPT",
    "Candidate Set",
    "pachet de dovezi",
    "AI Visibility",
  ],
  citations: [
    {
      name: "AI Visibility Lab — MKT-RO-AIV-2026Q4-PILOT-5 Discovery Evidence Package v1.0",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/mkt-evidence-mkt-ro-aiv-2026q4-pilot-5-v1.0",
    },
    {
      name: "AI Visibility Lab — Pilotul 4 Market Discovery: de ce rularea din Bologna nu intră în reuniunea de candidați",
      url: "https://delamatescu.ro/lab/articole/market-discovery-pilot-4-bologna-rulare-invalida",
    },
    {
      name: "AI Visibility Lab — Pilotul 3 Market Discovery",
      url: "https://delamatescu.ro/lab/market-discovery/2026q4-pilot-3",
    },
    {
      name: "AI Visibility Lab — Pilotul 5 Market Discovery",
      url: "https://delamatescu.ro/lab/market-discovery/2026q4-pilot-5",
    },
    {
      name: "AI Visibility Lab — AVL-MKT-001, Market Scope & Eligibility Protocol",
      url: "https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate",
    },
  ],
  faq: [],
};

const RELEASE_URL =
  "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/mkt-evidence-mkt-ro-aiv-2026q4-pilot-5-v1.0";

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const marketDiscoveryPilot5SibiuHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-22T07:16:00+03:00">22 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-22">22 octombrie 2026</time></p>

      <p><strong>Rularea <code>MKT-RO-AIV-2026Q4-PILOT-5</code> este prima rulare completă a expresiilor scurte USER-SHORT din seria Market Discovery MKT-RO-AIV.</strong> Cele 12 expresii au fost puse, exact cum le-ar scrie un utilizator fără cunoștințe de specialitate, pe 8 suprafețe: Google Search, Bing Search, Google AI Mode, ChatGPT, Claude, Copilot, Gemini și Perplexity. Rularea s-a făcut din Sibiu, în 15, 16 și 18 octombrie 2026. Pachetul de dovezi conține 413 capturi, 98 de execuții și 1.238 de observații.<sup><a href="#fn-1">1</a></sup></p>
      <p>Rezultatul principal: <strong>expresiile scurte nu sunt echivalente între ele.</strong> Trei expresii au adus 60 din cele 69 de entități candidate, iar patru n-au adus niciuna. Analiza pe expresii arată și o eroare a noastră. Am retras expresia „consultant AI” pe motiv lingvistic, după o singură rulare parțială, fără să fi văzut cum se comportă restul setului. Două expresii care au rămas în set, „marketing AI” și „specialist ChatGPT”, au exact aceeași slăbiciune.</p>

      <h2>Pe scurt</h2>
      <ol>
        <li><strong>Ce este PILOT-5?</strong> Rularea celor 12 expresii USER-SHORT (Q-USER-SHORT-002…013, setul Market Discovery v0.2.0) pe 8 suprafețe, din Sibiu, în trei sesiuni de lucru.</li>
        <li><strong>Ce a adus?</strong> 69 de entități candidate în baza comparabilă. 32 apăruseră deja în piloții 1–3, iar 37 sunt noi. Reuniunea de candidați a instanței 2026Q4 crește de la 241 la 278 de entități.</li>
        <li><strong>Ce expresii funcționează?</strong> „vizibilitate AI” (29 de entități), „optimizare site ChatGPT” (21) și „promovare ChatGPT” (13). „recomandare ChatGPT”, „marketing AI”, „specialist ChatGPT” și „consultanță AI” n-au adus niciun candidat în bază.</li>
        <li><strong>Care e eroarea?</strong> „consultant AI” a fost retrasă la 12 octombrie 2026 pentru că e identică în română și în engleză. Același criteriu se aplică și la „marketing AI”, care a primit răspunsuri în engleză pe 7 din 8 suprafețe, și la „specialist ChatGPT”, în engleză la toți cei 5 asistenți AI. Criteriul a fost aplicat unei singure expresii, înainte de rularea setului.</li>
        <li><strong>Ce facem acum?</strong> Nu reactivăm expresia retroactiv. Observația intră în evaluarea finală a setului USER-SHORT, care se face după încheierea întregului proces Market Discovery, la fel ca pentru întrebările DISCOVERY.</li>
      </ol>

      <h2>Ce este PILOT-5 și unde se află în serie</h2>
      <p><a href="/lab/market-discovery">Market Discovery</a> este etapa în care AI Visibility Lab caută furnizorii de servicii GEO, AEO și AI Visibility relevanți pentru clienți din România. Furnizorii găsiți formează <strong>reuniunea de candidați</strong>, din care se construiește Candidate Set. Abia apoi urmează verificarea fiecărui candidat, conform <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">protocolului AVL-MKT-001</a>.<sup><a href="#fn-4">4</a></sup></p>
      <p>Seria are două seturi de interogări:</p>
      <ul>
        <li><strong>DISCOVERY</strong>: 12 întrebări formulate de specialist, toate cu „din România” în text;</li>
        <li><strong>USER-SHORT</strong>: 12 expresii scurte, fără ancoră geografică, transmise exact, fără preambul sau explicații.</li>
      </ul>
      <p>Piloții 1–3 au rulat toate cele 12 întrebări DISCOVERY. <a href="/lab/articole/market-discovery-pilot-4-bologna-rulare-invalida">Pilotul 4</a>, rulat din Bologna cu 4 expresii scurte, a fost exclus din reuniune.<sup><a href="#fn-2">2</a></sup> PILOT-5 este deci prima rulare a expresiilor scurte care intră în reuniune.</p>
      <table>
        <thead>
          <tr><th>Indicator</th><th>Valoare</th></tr>
        </thead>
        <tbody>
          <tr><td>Capturi</td><td>413</td></tr>
          <tr><td>Execuții</td><td>98 (96 prevăzute + 2 rulări repetate pe Gemini)</td></tr>
          <tr><td>Observații în registru</td><td>1.238</td></tr>
          <tr><td>Observații marcate pentru reuniune</td><td>169</td></tr>
          <tr><td>Execuții cu candidați</td><td>31</td></tr>
          <tr><td>Execuții încheiate cu cerere de clarificare</td><td>19</td></tr>
          <tr><td>Entități candidate în bază</td><td>69</td></tr>
        </tbody>
      </table>
      <h3>Condițiile rulării</h3>
      <p>Rularea a avut trei sesiuni de lucru: Google și Bing pe 15 octombrie, AI Mode, ChatGPT și Claude pe 16 octombrie, Copilot, Gemini și Perplexity pe 18 octombrie. Fiecare expresie a fost pusă într-o fereastră privată nouă sau într-o conversație temporară nouă.</p>
      <p>Pachetul declară 5 abateri (DEV-01…DEV-05) și 2 incidente pe Gemini. Cele mai importante: Gemini a fost rulat nelogat, prima expresie pe Perplexity a fost rulată nelogat, iar pe Copilot ultima expresie a rulat într-o conversație obișnuită, nu temporară. Locația afișată nu a fost Sibiu: Google a afișat Brașov, iar Gemini Constanța, ambele deduse din adresa IP. Toate execuțiile au intrat în analiză, cu abaterile notate pe ele.</p>

      <h2>Analiza pe expresii</h2>
      <p>Tabelul arată, pentru fiecare expresie, câte entități candidate a adus în bază, pe câte din cele 8 suprafețe a avut cel puțin o entitate în bază și cum au interpretat-o suprafețele.</p>
      <table>
        <thead>
          <tr><th>ID</th><th>Expresie</th><th>Entități în bază</th><th>Suprafețe cu entități în bază</th><th>Cum a fost interpretată</th></tr>
        </thead>
        <tbody>
          <tr><td>Q-USER-SHORT-002</td><td>recomandare ChatGPT</td><td>0</td><td>0</td><td>Programul de recomandare (referral) al ChatGPT, recomandarea unui chatbot, sfaturi de folosire a ChatGPT</td></tr>
          <tr><td>Q-USER-SHORT-003</td><td>promovare ChatGPT</td><td>13</td><td>5</td><td>Pe Google și Bing: reclame în ChatGPT (ChatGPT Ads) și pagini GEO. ChatGPT: promoții la abonamente</td></tr>
          <tr><td>Q-USER-SHORT-004</td><td>firma mea pe ChatGPT</td><td>5</td><td>3</td><td>Împărțită între apariția firmei în ChatGPT și folosirea ChatGPT în firmă</td></tr>
          <tr><td>Q-USER-SHORT-005</td><td>apariție în ChatGPT</td><td>1</td><td>2</td><td>Știri și ghiduri despre ChatGPT; asistenții AI cer clarificare</td></tr>
          <tr><td>Q-USER-SHORT-006</td><td>vizibilitate AI</td><td>29</td><td>6</td><td>Sensul căutat, pe aproape toate suprafețele</td></tr>
          <tr><td>Q-USER-SHORT-007</td><td>promovare firmă AI</td><td>3</td><td>3</td><td>Folosirea AI în marketing sau promovarea unei firme de AI</td></tr>
          <tr><td>Q-USER-SHORT-008</td><td>optimizare site ChatGPT</td><td>21</td><td>5</td><td>Optimizarea site-ului pentru ChatGPT (GEO/AEO), dar și folosirea ChatGPT ca unealtă SEO</td></tr>
          <tr><td>Q-USER-SHORT-009</td><td>marketing AI</td><td>0</td><td>0</td><td>Folosirea AI în marketing, în engleză pe 7 din 8 suprafețe</td></tr>
          <tr><td>Q-USER-SHORT-010</td><td>agenție AI România</td><td>1</td><td>1</td><td>Agenții generale de AI (implementare, automatizări, agenți vocali)</td></tr>
          <tr><td>Q-USER-SHORT-011</td><td>specialist ChatGPT</td><td>0</td><td>0</td><td>Rolul profesional de „ChatGPT Specialist” sau GPT-uri personalizate; în engleză la toți cei 5 asistenți AI</td></tr>
          <tr><td>Q-USER-SHORT-012</td><td>servicii promovare AI</td><td>10</td><td>5</td><td>Împărțită între promovarea cu ajutorul AI și promovarea în AI</td></tr>
          <tr><td>Q-USER-SHORT-013</td><td>consultanță AI</td><td>0</td><td>0</td><td>Consultanța pentru adoptarea AI în firme, în română</td></tr>
        </tbody>
      </table>
      <p>O entitate poate apărea la mai multe expresii, așa că suma coloanei nu este 69. A patra coloană numără suprafețele, nu execuțiile: la 004 și 005, Gemini are câte două rulări. La „consultanță AI”, singura entitate candidată a apărut doar în reclamele Google, adică în afara bazei.</p>
      <h3>Trei grupuri de expresii</h3>
      <p><strong>Expresiile care numesc rezultatul căutat.</strong> „vizibilitate AI” și „optimizare site ChatGPT” descriu direct ce vrea firma: să fie văzută în AI, să-și optimizeze site-ul pentru ChatGPT. Împreună au adus 48 din cele 69 de entități. „vizibilitate AI” a fost tratată în sensul căutat pe 7 din 8 suprafețe.</p>
      <p><strong>Expresiile cu două sensuri.</strong> „promovare ChatGPT”, „firma mea pe ChatGPT”, „promovare firmă AI” și „servicii promovare AI” pot însemna atât promovarea firmei <em>în</em> AI, cât și promovarea firmei <em>cu ajutorul</em> AI. Suprafețele au ales diferit. Rezultatele sunt amestecate, iar asistenții AI au cerut des clarificare. „promovare ChatGPT” a mai deschis un al treilea sens: reclamele plătite în ChatGPT.</p>
      <p><strong>Expresiile care numesc altceva.</strong> „recomandare ChatGPT”, „marketing AI”, „specialist ChatGPT”, „agenție AI România” și „consultanță AI” au fost înțelese, aproape peste tot, ca alt serviciu sau alt subiect. Răspunsurile sunt corecte pentru ce au înțeles suprafețele, dar nu descriu piața serviciilor GEO, AEO și AI Visibility.</p>
      <h3>Regula intermediară care contează la 010, 011 și 013</h3>
      <p>La „agenție AI România”, „specialist ChatGPT” și „consultanță AI”, majoritatea rezultatelor numesc firme generale de AI: implementare, automatizări, chatboți, strategie. Pentru ele am aplicat o <strong>regulă intermediară</strong>: o firmă de AI fără servicii GEO, AEO sau AI Visibility vizibile în captură e marcată incertă și nu intră în reuniune. Regula a schimbat 123 de rânduri din registru.</p>
      <p><strong>Regula a fost decisă în timpul procesării, după ce rezultatele erau vizibile.</strong> O declarăm ca atare. Fără ea, cele trei expresii ar fi adus zeci de firme de AI care nu oferă serviciul măsurat. Cu ea, rezultatul lor depinde de o decizie de clasificare, nu doar de ce au afișat suprafețele. Regula va fi scrisă în versiunea următoare a documentului de instanță, ca să se aplice înainte de rulare.</p>

      <h2>Eroarea: am retras „consultant AI” prea devreme</h2>
      <h3>Ce s-a întâmplat</h3>
      <p>„consultant AI” era prima expresie scurtă a setului (Q-USER-001 în setul USER v0.2.0). A fost rulată o singură dată, la 10 octombrie 2026, în rularea din Bologna. Acolo, Google a dat rezultate majoritar în engleză, iar trei încercări în Google AI Mode au primit răspunsuri în italiană și în engleză.<sup><a href="#fn-2">2</a></sup> Încercările din AI Mode nu au capturi în pachet și sunt documentate doar în notița operatorului.</p>
      <p>Două zile mai târziu, la 12 octombrie 2026, expresia a fost retrasă din setul Market Discovery v0.2.0, cu motivarea: textul „consultant AI” este identic în română și în engleză, nimic din el nu ancorează limba, iar sistemele tind să răspundă în engleză. În locul ei a intrat o expresie nouă, <code>consultanță AI</code> (Q-USER-SHORT-013), care ancorează limba prin diacritice.</p>
      <h3>De ce a fost o eroare</h3>
      <p><strong>Decizia s-a sprijinit pe prea puține dovezi.</strong> O singură execuție capturată, pe Google, într-o rulare parțială pe care am exclus-o ulterior din reuniune. Nicio altă expresie scurtă nu fusese încă rulată complet.</p>
      <p><strong>Criteriul a fost aplicat unei singure expresii.</strong> Dacă „identic în română și în engleză” e un motiv de retragere, atunci se aplică și altor expresii din set. PILOT-5 arată asta direct:</p>
      <table>
        <thead>
          <tr><th>Expresie</th><th>Identică în engleză?</th><th>Răspunsuri în engleză în PILOT-5</th><th>Entități în bază</th><th>Stare în set</th></tr>
        </thead>
        <tbody>
          <tr><td>consultant AI</td><td>Da</td><td>Nerulată (retrasă)</td><td>—</td><td>Retrasă la 12 octombrie 2026</td></tr>
          <tr><td>marketing AI</td><td>Da</td><td>7 din 8 suprafețe</td><td>0</td><td>Activă</td></tr>
          <tr><td>specialist ChatGPT</td><td>Da</td><td>Toți cei 5 asistenți AI</td><td>0</td><td>Activă</td></tr>
          <tr><td>consultanță AI</td><td>Nu (diacritice)</td><td>Niciuna consemnată</td><td>0</td><td>Activă, înlocuitoarea lui „consultant AI”</td></tr>
        </tbody>
      </table>
      <p>Datele despre limbă provin din fișa rulării și din clasificarea capturilor. Pentru Google AI Mode la „marketing AI”, limba răspunsului nu este consemnată. Google a afișat la „specialist ChatGPT” o prezentare AI Overview în română, alături de rezultate cu sugestia „Looking for results in English?”.</p>
      <p>„marketing AI” și „specialist ChatGPT” au exact proprietatea pentru care „consultant AI” a fost retrasă. Au rămas în set, au rulat și au dat răspunsuri în engleză. Setul a fost tratat inconsecvent.</p>
      <p><strong>Limba nu era problema principală.</strong> Înlocuitoarea, „consultanță AI”, a primit răspunsuri în română. A rezolvat deci limba, dar nu sensul: suprafețele au înțeles-o ca o consultanță pentru adoptarea AI în firme și n-a adus niciun candidat în bază. La fel, „recomandare ChatGPT”, în română, n-a adus niciun candidat. Interpretarea noastră, din datele acestei rulări: ce separă expresiile productive de cele neproductive este <strong>dacă expresia numește serviciul căutat</strong>, nu în ce limbă răspunde suprafața. Limba e un simptom al ambiguității, nu cauza ei.</p>
      <p><strong>Am pierdut o comparație.</strong> Pentru că „consultant AI” nu a mai fost rulată, PILOT-5 nu poate compara expresia veche cu înlocuitoarea ei în aceleași condiții. Nu știm dacă „consultant AI”, rulată din România, ar fi adus candidați.</p>
      <h3>Ce ar fi trebuit să facem</h3>
      <p>Să evaluăm expresiile după rularea completă a setului, pe toate suprafețele, cu aceleași criterii pentru toate. Pentru întrebările DISCOVERY am adoptat deja această regulă la 16 octombrie 2026: evaluarea întrebărilor (păstrare, reformulare, comasare, eliminare) se face după încheierea întregului proces Market Discovery, nu după o rulare. Retragerea „consultant AI” a precedat regula și nu a trecut prin ea.</p>
      <h3>Ce facem acum</h3>
      <ul>
        <li><strong>Nu reactivăm „consultant AI” retroactiv.</strong> Schimbările de set se versionează, iar rulările deja făcute rămân atribuite versiunii sub care au rulat (AVL-MKT-001, REQ-017).<sup><a href="#fn-4">4</a></sup> Q-USER-SHORT-001 rămâne atribuit textului vechi.</li>
        <li><strong>Observația intră în evaluarea finală a setului USER-SHORT.</strong> Acolo vor fi evaluate împreună „consultant AI”, „marketing AI”, „specialist ChatGPT” și „consultanță AI”, cu același criteriu.</li>
        <li><strong>Răspunsurile în engleză la expresiile fără ancoră de limbă</strong> sunt consemnate ca observație pentru versiunea următoare a documentului de instanță.</li>
      </ul>

      <h2>Ce adaugă PILOT-5 la reuniunea de candidați</h2>
      <p>Observațiile marcate pentru reuniune au fost deduplicate cu aceleași reguli ca în piloții 1–3 și cu aceleași chei de entitate, ca rulările să poată fi comparate.<sup><a href="#fn-3">3</a></sup></p>
      <table>
        <thead>
          <tr><th></th><th>Piloții 1–3</th><th>PILOT-5</th><th>În ambele</th><th>Noi din PILOT-5</th><th>Reuniune</th></tr>
        </thead>
        <tbody>
          <tr><td>Baza comparabilă</td><td>241</td><td>69</td><td>32</td><td>37</td><td><strong>278</strong></td></tr>
          <tr><td>Setul extins</td><td>256</td><td>74</td><td>35</td><td>39</td><td><strong>295</strong></td></tr>
        </tbody>
      </table>
      <p>Baza comparabilă cuprinde rezultatele organice Google până la adâncimea declarată, rezultatele organice Bing și răspunsurile AI. Setul extins adaugă rezultatele Google de dincolo de adâncimea declarată și modulele din pagina de rezultate: reclame, AI Overview, răspunsul generat de Bing.</p>
      <p>Trei observații despre aceste cifre:</p>
      <ul>
        <li><strong>Aproape jumătate din entitățile PILOT-5 (46%) erau deja cunoscute.</strong> Expresiile scurte găsesc o parte din aceeași piață ca întrebările de specialist, dar și 37 de entități noi.</li>
        <li><strong>Căutarea clasică a adus mai mult decât asistenții AI.</strong> Google Search a adus 34 de entități, Bing 20, Google AI Mode 16, iar asistenții AI între 3 și 10. Copilot n-a adus niciuna. 51 din cele 69 de entități apar pe o singură suprafață.</li>
        <li><strong>Cifrele nu măsoară performanța setului.</strong> Seturile diferă în lungime, vocabular, intenție și geografie. Un număr mai mic de candidați la expresiile scurte nu înseamnă că setul e mai slab: arată cum răspund suprafețele la felul în care caută un utilizator obișnuit.</li>
      </ul>
      <p>„Entitate candidată” înseamnă doar că un nume a fost afișat ca posibil furnizor sau instrument. Niciuna dintre cele 278 de entități nu a trecut încă prin verificare. Toate au statutul <code>UNVERIFIED</code>, iar includerea nu confirmă existența, activitatea comercială sau eligibilitatea. Nu publicăm aici nume de furnizori. Lista completă a entităților, cu proveniența fiecărei apariții, e pe <a href="/lab/market-discovery/2026q4-pilot-5">pagina Pilotului 5</a> din secțiunea Market Discovery, iar dovezile sunt în pachet.<sup><a href="#fn-5">5</a></sup></p>

      <h2>Ce urmează</h2>
      <ol>
        <li><strong>Verification.</strong> Reuniunea de 278 de entități este Candidate Set-ul pentru verificare, conform AVL-MKT-001. Înainte de verificarea completă, protocolul cere un pilot intern pe cazuri-limită.</li>
        <li><strong>Versiunea următoare a documentului de instanță Market Discovery.</strong> Va prelua regulile apărute în piloții 4 și 5: execuția fără captură se tratează ca nerulată, regula intermediară pentru firmele generale de AI, criteriile de excludere a unei rulări și observația despre expresiile fără ancoră de limbă.</li>
        <li><strong>Evaluarea finală a expresiilor.</strong> După încheierea Market Discovery, cu același criteriu pentru toate expresiile, inclusiv pentru „consultant AI”.</li>
      </ol>

      <h2>Pachetul de dovezi</h2>
      <p>Pachetul <strong>MKT-RO-AIV-2026Q4-PILOT-5 v1.0</strong> este publicat ca <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">release pe GitHub</a>. Conține arhiva capturilor, manifestul de sigilare, manifestul conversiei PNG → WebP, setul de interogări, fișa rulării cu abaterile, contextul de sesiune observat, indexul capturilor, registrul de observații, un README și manifestul SHA-256.</p>
      <p>Capturile au fost convertite în WebP la calitate 80 înainte de calculul hash-urilor, conform <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">standardului de dovezi AVL-200</a>. Integritatea se verifică din directorul pachetului descărcat:</p>
      <pre><code>shasum -a 256 -c mkt-ro-aiv-2026q4-pilot-5_sha256sums_v1.0.txt</code></pre>
      <p>SHA-256 al arhivei: <code>14ca71ef7521bf60c25b6c76260108b8bea26c190fbad5d901fc4681853579cc</code>.</p>

      <h2>Surse și metodologie</h2>
      <p>Cifrele despre PILOT-5 provin din pachetul de dovezi PILOT-5 v1.0, verificat la 22 octombrie 2026: README, fișa rulării, indexul capturilor și registrul de observații. Cifrele despre reuniune provin din deduplicarea internă a observațiilor PILOT-5 față de piloții 1–3, făcută la 21 octombrie 2026 cu regulile și cheile de entitate ale piloților anteriori. Data și motivarea retragerii „consultant AI” provin din documentul de instanță Market Discovery v0.2.0 (12 octombrie 2026), document de lucru intern. Regula de evaluare a întrebărilor după încheierea Market Discovery provine din versiunea 0.3.0 a aceluiași document (16 octombrie 2026). Limba răspunsurilor a fost stabilită din capturi și din fișa rulării, nu dedusă. Fereastra privată și conversația nouă nu garantează absența personalizării sau a localizării. Articolul nu evaluează furnizori și nu interpretează rezultatele ca reprezentative pentru piață.</p>
      <ol class="avl-footnotes">
        <li id="fn-1">AI Visibility Lab, <strong>MKT-RO-AIV-2026Q4-PILOT-5 — Discovery Evidence Package v1.0</strong>, release GitHub, publicat la 21 octombrie 2026. <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/mkt-evidence-mkt-ro-aiv-2026q4-pilot-5-v1.0</a></li>
        <li id="fn-2">AI Visibility Lab, <strong>Pilotul 4 Market Discovery: de ce rularea din Bologna nu intră în reuniunea de candidați</strong>, 21 octombrie 2026. <a href="/lab/articole/market-discovery-pilot-4-bologna-rulare-invalida">/lab/articole/market-discovery-pilot-4-bologna-rulare-invalida</a></li>
        <li id="fn-3">AI Visibility Lab, <strong>Pilotul 3 Market Discovery</strong>, pagina rulării. <a href="/lab/market-discovery/2026q4-pilot-3">/lab/market-discovery/2026q4-pilot-3</a></li>
        <li id="fn-4">AI Visibility Lab, <strong>AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</strong>, draft v0.10.0. <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">/lab/metodologie/protocol-delimitare-piata-eligibilitate</a></li>
        <li id="fn-5">AI Visibility Lab, <strong>Pilotul 5 Market Discovery</strong>, pagina rulării. <a href="/lab/market-discovery/2026q4-pilot-5">/lab/market-discovery/2026q4-pilot-5</a></li>
      </ol>
      <h3>Notă de volatilitate</h3>
      <p>Rezultatele motoarelor de căutare și răspunsurile AI depind de momentul rulării, de versiunea modelului, de cont, de personalizare și de localizare. Observațiile din PILOT-5 descriu ce au afișat suprafețele între 15 și 18 octombrie 2026, din Sibiu, și nu se pot reproduce identic.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 22 octombrie 2026.</em></p>
`;
