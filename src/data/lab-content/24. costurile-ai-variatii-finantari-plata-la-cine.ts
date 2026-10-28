import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const costurileAiVariatiiFinantariMeta: LabArticleMeta = {
  title:
    "Cât costă, de fapt, inteligența artificială și cine plătește pentru ea?",
  seoTitle: "Cât costă AI-ul: energie, investiții și cine plătește",
  description:
    "Cât curent consumă AI-ul pentru text, imagini, video și cod, cât au costat modelele, de unde vin investițiile și cine plătește: repere din IEA, Google, cercetări, documentul S-1 al Anthropic și anunțurile OpenAI, cu limitele fiecărei cifre.",
  canonical:
    "https://delamatescu.ro/lab/articole/costurile-ai-variatii-finantari-plata-la-cine",
  category: "AI Ecosystem",
  articleType: "Analiză",
  datePublished: "2026-10-28T20:33:00+02:00",
  dateModified: "2026-10-28",
  lastReviewed: "2026-10-28",
  image: {
    url: "https://delamatescu.ro/images/lab/costurile-ai-variatii-finantari-plata-la-cine.webp",
    alt: "Ilustrație conceptuală: un complex de centre de date în mijlocul unui oraș, alimentat de linii electrice, panouri solare, turbine eoliene, o hidrocentrală și centrale termice, legat prin fluxuri de date de oameni care folosesc AI în fabrici, birouri, studiouri, laboratoare și hangare, în timp ce fluxuri de monede circulă între aceste activități și infrastructură.",
  },
  about: [
    { name: "Consumul energetic al inteligenței artificiale" },
    { name: "Centre de date" },
    { name: "Inferență AI" },
    { name: "Costul antrenării modelelor AI" },
    { name: "Finanțarea companiilor AI" },
    { name: "OpenAI" },
    { name: "Anthropic" },
  ],
  keywords: [
    "cost AI",
    "consum energetic AI",
    "energie per prompt",
    "centre de date",
    "costul antrenării modelelor",
    "finanțare OpenAI",
    "finanțare Anthropic",
    "Anthropic S-1",
    "preț API tokeni",
    "cine plătește AI",
  ],
  citations: [
    {
      name: "IEA — Key Questions on Energy and AI, executive summary (2026)",
      url: "https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary",
    },
    {
      name: "Google Cloud — How much energy does Google’s AI use? We did the math (2025)",
      url: "https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference",
    },
    {
      name: "Luccioni, Jernite, Strubell — Power Hungry Processing: Watts Driving the Cost of AI Deployment? (ACM FAccT 2024)",
      url: "https://arxiv.org/html/2311.16863v3",
    },
    {
      name: "Chung, Wu, Ma, Chowdhury — Where Do the Joules Go? Diagnosing Inference Energy Consumption (2026)",
      url: "https://arxiv.org/html/2601.22076v1",
    },
    {
      name: "Oviedo et al. — Energy Use of AI Inference, Efficiency Pathways, and Test-Time Scaling (v2, 2026)",
      url: "https://arxiv.org/abs/2509.20241v2",
    },
    {
      name: "Stanford HAI — AI Index Report 2025, Chapter 1",
      url: "https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter1_final.pdf",
    },
    {
      name: "Meta — Llama 3.1 Model Card",
      url: "https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md",
    },
    {
      name: "Anthropic, PBC — Form S-1, SEC (26 octombrie 2026)",
      url: "https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm",
    },
    {
      name: "IEA — Data centre electricity use surged in 2025 (16 aprilie 2026)",
      url: "https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions",
    },
    {
      name: "OpenAI — Scaling AI for everyone (27 februarie 2026)",
      url: "https://openai.com/index/scaling-ai-for-everyone/",
    },
    {
      name: "OpenAI — OpenAI raises $122 billion to accelerate the next phase of AI (31 martie 2026)",
      url: "https://openai.com/index/accelerating-the-next-phase-ai/",
    },
    {
      name: "Anthropic — Anthropic raises $65B in Series H funding (28 mai 2026)",
      url: "https://www.anthropic.com/news/series-h",
    },
    {
      name: "Anthropic — Anthropic and Amazon expand collaboration for up to 5 gigawatts of new compute (20 aprilie 2026)",
      url: "https://www.anthropic.com/news/anthropic-amazon-compute",
    },
    {
      name: "Claude — Pricing",
      url: "https://claude.com/pricing",
    },
    {
      name: "Reuters — OpenAI’s September annualized revenue nears $50 billion, less than previously indicated, source says (8 octombrie 2026)",
      url: "https://www.reuters.com/business/openais-annualized-revenue-20-billion-less-than-previously-signaled-ft-reports-2026-10-08/",
    },
    {
      name: "OpenAI — Announcing The Stargate Project (21 ianuarie 2025)",
      url: "https://openai.com/index/announcing-the-stargate-project/",
    },
  ],
  faq: [],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const costurileAiVariatiiFinantariHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-28T20:33:00+02:00">28 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-28">28 octombrie 2026</time></p>

      <p><em>Documentare încheiată la 28 octombrie 2026. Cifrele în dolari sunt exprimate în USD; perioadele și limitele estimărilor sunt precizate lângă informațiile relevante.</em></p>

      <figure>
        <img src="/images/lab/costurile-ai-variatii-finantari-plata-la-cine.webp" alt="Ilustrație conceptuală: un complex de centre de date în mijlocul unui oraș, alimentat de linii electrice, panouri solare, turbine eoliene, o hidrocentrală și centrale termice, legat prin fluxuri de date de oameni care folosesc AI în fabrici, birouri, studiouri, laboratoare și hangare, în timp ce fluxuri de monede circulă între aceste activități și infrastructură." width="1672" height="941" loading="lazy" />
        <figcaption>Ilustrație conceptuală: răspunsul care pare instantaneu pe ecran depinde de centre de date, de electricitate și de bani care circulă între utilizatori, companii, investitori și infrastructură.</figcaption>
      </figure>

      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#de-ce-consuma-energie-llm-urile">De ce consumă energie LLM-urile?</a></li>
          <li><a href="#cat-curent-consuma-o-intrebare-obisnuita">Cât curent consumă o întrebare obișnuită?</a></li>
          <li><a href="#de-ce-imaginile-videoclipurile-si-codul-pot-costa-mai-mult">De ce imaginile, videoclipurile și codul pot costa mai mult?</a></li>
          <li><a href="#cat-au-costat-pana-acum-aceste-modele">Cât au costat până acum aceste modele?</a></li>
          <li><a href="#de-unde-vin-investitiile-si-cat-contribuie-fiecare">De unde vin investițiile și cât contribuie fiecare?</a></li>
          <li><a href="#cine-plateste-ai-ul-pe-care-il-folosim-astazi">Cine plătește AI-ul pe care îl folosim astăzi?</a></li>
          <li><a href="#cum-fac-bani-companiile-din-folosirea-modelelor">Cum fac bani companiile din folosirea modelelor?</a></li>
          <li><a href="#cat-din-factura-ai-este-de-fapt-electricitate">Cât din factura AI este, de fapt, electricitate?</a></li>
          <li><a href="#surse-si-metodologie">Surse și metodologie</a>
            <ol>
              <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
            </ol>
          </li>
        </ol>
      </nav>

      <p><strong>Inteligența artificială este plătită astăzi din veniturile obținute de la clienți, din capitalul investitorilor și din finanțarea infrastructurii, iar costul ei depinde de mult mai mult decât electricitatea consumată pentru un răspuns. O întrebare simplă, o imagine, un videoclip și un agent care scrie și testează cod reprezintă sarcini diferite, pentru care nu există un consum universal „per prompt”.</strong></p>

      <p>Pe ecran, inteligența artificială pare lipsită de greutate: scriem o întrebare, așteptăm câteva secunde și primim un răspuns care nu ne arată nici serverele folosite, nici energia consumată, nici capitalul necesar pentru a face posibilă conversația. Această discreție a interfeței ascunde însă două întrebări distincte, pe care merită să le ținem împreună fără să le confundăm: cât costă producerea unui răspuns și cine finanțează sistemul capabil să producă miliarde de asemenea răspunsuri?</p>

      <h2 id="de-ce-consuma-energie-llm-urile">De ce consumă energie LLM-urile?</h2>

      <p><strong>Modelele lingvistice consumă electricitate atât în timpul antrenării, când le sunt ajustați parametrii, cât și în timpul utilizării, când procesează cererile și generează răspunsuri.</strong> A doua etapă se numește inferență, iar energia necesară ei nu dispare după terminarea antrenării: fiecare utilizare presupune calcule suplimentare, realizate pe o infrastructură care trebuie alimentată și răcită.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-5">5</a></sup></p>

      <p>Există și o precizare de vocabular care schimbă corectitudinea întregii discuții: un LLM este un model lingvistic, în timp ce generarea imaginilor și a videoclipurilor poate folosi arhitecturi diferite, inclusiv modele de difuzie; faptul că toate aceste funcții apar în aceeași aplicație nu înseamnă că sunt executate de același model sau prin același proces. De aceea, comparația dintre text, imagini și video este, mai exact, o comparație între sarcini de inteligență artificială generativă.<sup><a href="#fn-4">4</a></sup></p>

      <p>La scară mondială, Agenția Internațională a Energiei estimează că toate centrele de date au consumat aproximativ <strong>485 TWh în 2025</strong> și proiectează circa <strong>950 TWh în 2030</strong>, în scenariul central al raportului publicat în aprilie 2026; un TWh reprezintă un miliard de kWh, unitatea întâlnită pe factura de electricitate. Aceste valori includ și servicii care nu sunt AI, deci nu pot fi prezentate drept consumul exclusiv al LLM-urilor.<sup><a href="#fn-1">1</a></sup></p>

      <p>Miza este creșterea agregată: chiar dacă o operațiune devine mai eficientă, consumul total poate crește atunci când numărul utilizatorilor, frecvența cererilor și complexitatea sarcinilor cresc mai repede decât scade energia necesară fiecărei operațiuni. IEA identifică tocmai această combinație între eficiență, adopție și apariția unor utilizări mai intensive energetic.<sup><a href="#fn-1">1</a></sup> Decalajul dintre ritmul lansărilor și adopția reală, măsurată statistic, e analizat separat în <a href="/lab/articole/decalaj-viteza-ai-adoptie-2026">AI aleargă, adopția merge pe jos</a>.</p>

      <h2 id="cat-curent-consuma-o-intrebare-obisnuita">Cât curent consumă o întrebare obișnuită?</h2>

      <p><strong>Un reper public pentru un prompt text este 0,24 Wh, valoarea mediană raportată de Google pentru Gemini Apps pe baza datelor din mai 2025; cifra nu este o medie universală pentru toate modelele.</strong> Mediana descrie mijlocul distribuției observate, nu consumul fiecărei conversații, iar metodologia include și componente de infrastructură care ar lipsi dintr-o măsurare limitată la acceleratorul activ. Google precizează că datele și afirmațiile nu au fost verificate de un terț independent.<sup><a href="#fn-2">2</a></sup></p>

      <p>Pentru o comparație intuitivă, 0,24 Wh reprezintă energia necesară unui bec de 10 W pentru aproximativ 86 de secunde, calcul obținut din relația energie = putere × timp; comparația explică ordinul de mărime, fără să transforme becul într-o măsurătoare a infrastructurii AI.</p>

      <p>O cercetare semnată de Felipe Oviedo și colaboratorii săi estimează, în versiunea revizuită în iunie 2026, o mediană de <strong>0,31 Wh per cerere</strong> în anumite condiții de operare pentru modele mari pe hardware H100, în timp ce scenariile cu procesare prelungită ajung la <strong>3,91 Wh</strong>. Aceste valori sunt rezultate ale unui model de estimare, nu citiri ale contorului pentru conversația unui anumit utilizator.<sup><a href="#fn-5">5</a></sup></p>

      <h2 id="de-ce-imaginile-videoclipurile-si-codul-pot-costa-mai-mult">De ce imaginile, videoclipurile și codul pot costa mai mult?</h2>

      <p><strong>Consumul crește în funcție de cantitatea de calcul efectuată, iar eticheta sarcinii nu este suficientă pentru a-i determina costul.</strong> Pentru orientare, există repere publice utile, dar ele provin din metodologii și configurații diferite, ceea ce exclude folosirea lor ca un clasament perfect comparabil.</p>

      <table>
        <thead><tr><th>Sarcină</th><th>Reper energetic public</th><th>Ce descrie efectiv</th></tr></thead>
        <tbody>
          <tr><td>Prompt text în Gemini Apps</td><td>0,24 Wh</td><td>Mediană raportată de Google, date din mai 2025.<sup><a href="#fn-2">2</a></sup></td></tr>
          <tr><td>Generare de imagini</td><td>Aproximativ 2,91 Wh/imagine</td><td>Medie între modelele testate într-un studiu din 2024.<sup><a href="#fn-3">3</a></sup></td></tr>
          <tr><td>Generare de video</td><td>Aproximativ 7,2–322 Wh/clip</td><td>Energie GPU pentru modelele și setările dintr-un preprint din ianuarie 2026.<sup><a href="#fn-4">4</a></sup></td></tr>
          <tr><td>Procesare prelungită la inferență</td><td>3,91 Wh/cerere, mediană estimată</td><td>Scenariu de cercetare; nu reprezintă un tarif energetic pentru programare.<sup><a href="#fn-5">5</a></sup></td></tr>
          <tr><td>Agent care scrie și testează cod</td><td>Fără valoare universală verificabilă</td><td>Consumul trebuie atribuit întregii execuții, inclusiv apelurilor și instrumentelor utilizate.</td></tr>
        </tbody>
      </table>

      <p>Pentru imagini, studiul <em>Power Hungry Processing</em>, publicat la conferința ACM FAccT 2024 de Alexandra Sasha Luccioni, Yacine Jernite și Emma Strubell, raportează o medie de <strong>2,907 kWh pentru 1.000 de generări</strong>, echivalentă cu 2,907 Wh pentru o generare. Rezultatul aparține modelelor, hardware-ului și protocolului testat, cu variații mari între modele; nu măsoară automat generatoarele comerciale disponibile astăzi și nu justifică afirmația că orice imagine consumă exact de douăsprezece ori mai mult decât orice răspuns text.<sup><a href="#fn-3">3</a></sup></p>

      <p>Pentru video, cercetătorii de la University of Michigan și ML.ENERGY raportează <strong>26 kJ–1,16 MJ per clip</strong>, adică aproximativ <strong>7,2–322 Wh</strong>, în configurațiile evaluate. Studiul măsoară energia GPU, iar durata, rezoluția și setările diferă între modele; intervalul nu este o măsurătoare pentru Sora sau Veo și nici consumul complet al unui centru de date.<sup><a href="#fn-4">4</a></sup></p>

      <p>Pentru programare, diferența relevantă este între un răspuns scurt care conține cod și o execuție care citește fișiere, propune modificări, rulează teste și încearcă din nou. În al doilea caz, „un prompt” este doar începutul unui proces (diferența dintre un asistent care răspunde și un <a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">agent care execută acțiuni</a>), astfel încât o comparație utilă ar trebui să urmărească energia necesară unei sarcini finalizate, nu doar energia unui mesaj. Aceasta este o concluzie metodologică: fără informații despre model, lungimea procesării și instrumentele executate, atribuirea unei cifre fixe unei cereri de programare ar crea o precizie falsă.<sup><a href="#fn-5">5</a></sup></p>

      <h2 id="cat-au-costat-pana-acum-aceste-modele">Cât au costat până acum aceste modele?</h2>

      <p><strong>Nu există în sursele consultate un bilanț global complet și comparabil al tuturor costurilor LLM-urilor, iar adunarea finanțărilor, cheltuielilor și proiectelor anunțate ar produce un total înșelător.</strong> Costul antrenării unui model, bugetul unei companii și investiția într-un centru de date descriu niveluri economice diferite, care trebuie prezentate separat.</p>

      <p>Pentru antrenare, <em>AI Index 2025</em> al Stanford HAI prezintă estimări de aproximativ <strong>79 de milioane de dolari pentru GPT-4</strong>, <strong>192 de milioane pentru Gemini 1.0 Ultra</strong> și <strong>170 de milioane pentru Llama 3.1 405B</strong>, calculate folosind prețuri de închiriere a capacității de calcul și ajustate pentru inflație. Aceste valori nu sunt facturi publicate de dezvoltatori și nu reprezintă costul integral al cercetării, experimentelor, salariilor și funcționării ulterioare a produselor.<sup><a href="#fn-6">6</a></sup></p>

      <p>Dimensiunea fizică a antrenării apare mai clar într-o informație publicată de Meta: <strong>30,84 de milioane de ore GPU</strong> pentru Llama 3.1 405B. „Ore GPU” însumează timpul de lucru al procesoarelor, nu durata calendaristică a proiectului; de asemenea, înmulțirea acestora cu puterea nominală a unui accelerator nu trebuie prezentată ca o măsurare exactă a electricității consumate de întreaga infrastructură.<sup><a href="#fn-7">7</a></sup></p>

      <p>Pentru costurile unei companii, documentul S-1 depus de Anthropic la SEC în octombrie 2026 oferă un exemplu concret: în 2025, cheltuielile operaționale au fost de <strong>12,645 miliarde de dolari</strong>, dintre care <strong>7,326 miliarde</strong> pentru calcul și infrastructură; în primul semestru din 2026, valorile au fost de <strong>16,979 miliarde</strong>, respectiv <strong>8,945 miliarde</strong>. Datele semestriale sunt marcate drept neauditate, iar cheltuielile contabile nu sunt sinonime cu plățile efective din perioada respectivă.<sup><a href="#fn-8">8</a></sup></p>

      <p>Pentru infrastructură, IEA arată că investițiile de capital ale celor cinci mari companii tehnologice analizate au depășit <strong>400 de miliarde de dolari în 2025</strong>. Aceasta este o măsură a cheltuielilor de capital ale companiilor, nu un total al costurilor LLM-urilor și nici o factură globală de electricitate pentru AI.<sup><a href="#fn-9">9</a></sup></p>

      <p>Un exemplu al diferenței dintre promisiune și cheltuială este Stargate: anunțul inițial din ianuarie 2025 descria intenția de a investi <strong>500 de miliarde de dolari în patru ani</strong> pentru infrastructură AI în Statele Unite. O asemenea țintă multianuală nu poate fi trecută integral în coloana banilor deja cheltuiți.<sup><a href="#fn-16">16</a></sup></p>

      <h2 id="de-unde-vin-investitiile-si-cat-contribuie-fiecare">De unde vin investițiile și cât contribuie fiecare?</h2>

      <p><strong>Finanțarea AI vine dintr-un amestec de companii tehnologice, fonduri de investiții, capital suveran, investitori individuali și credit, iar unele organizații sunt simultan investitori și furnizori ai companiilor pe care le finanțează.</strong> Câteva runde documentate arată dimensiunea acestui mecanism, fără să constituie un inventar complet al industriei.</p>

      <p>La 27 februarie 2026, OpenAI anunța investiții de <strong>110 miliarde de dolari</strong>, cu o distribuție explicită între trei parteneri:</p>

      <table>
        <thead><tr><th>Investitor</th><th>Sumă anunțată</th><th>Pondere în cei 110 miliarde USD</th></tr></thead>
        <tbody>
          <tr><td>Amazon</td><td>50 miliarde USD</td><td>45,45%</td></tr>
          <tr><td>NVIDIA</td><td>30 miliarde USD</td><td>27,27%</td></tr>
          <tr><td>SoftBank</td><td>30 miliarde USD</td><td>27,27%</td></tr>
        </tbody>
      </table>

      <p>Procentele sunt calcule proprii și descriu distribuția sumei anunțate, nu participațiile deținute în companie; diferența de o sutime față de 100% provine din rotunjire.<sup><a href="#fn-10">10</a></sup></p>

      <p>La 31 martie 2026, OpenAI anunța închiderea rundei la <strong>122 de miliarde de dolari în capital angajat</strong>, odată cu participarea mai multor investitori. Cele 110 miliarde și cele 122 de miliarde nu sunt două runde care trebuie adunate, iar capitalul angajat nu trebuie confundat cu numerarul deja cheltuit. Separat, compania anunța o facilitate de credit de aproximativ <strong>4,7 miliarde de dolari</strong>, neutilizată la momentul închiderii rundei: disponibilitatea creditului nu este același lucru cu încasarea lui.<sup><a href="#fn-11">11</a></sup></p>

      <p>Anthropic anunța în mai 2026 o rundă Series H de <strong>65 de miliarde de dolari</strong>, condusă de Altimeter Capital, Dragoneer, Greenoaks și Sequoia Capital, alături de alți participanți. Comunicatul preciza că totalul include <strong>15 miliarde de dolari din angajamente anterioare ale marilor furnizori de infrastructură</strong>, dintre care <strong>5 miliarde de la Amazon</strong>; aceste sume sunt componente ale rundei, nu bani suplimentari care trebuie adăugați peste ea. Comunicatul nu publică o defalcare completă a contribuției fiecărui investitor.<sup><a href="#fn-12">12</a></sup></p>

      <p>Relația dintre finanțator și furnizor este vizibilă în acordul Anthropic–Amazon din aprilie 2026: Amazon anunța o investiție nouă de 5 miliarde de dolari și posibilitatea unor investiții viitoare suplimentare, în timp ce Anthropic se angaja să cheltuiască peste <strong>100 de miliarde de dolari în zece ani</strong> pentru tehnologii AWS. Fluxurile au sensuri și calendare diferite: investiția finanțează compania AI, iar contractul comercial finanțează veniturile furnizorului de infrastructură.<sup><a href="#fn-13">13</a></sup></p>

      <p>Interpretarea economică a acestor relații este că o parte a capitalului se poate întoarce spre ecosistemul investitorului prin achiziția de servicii; acest fapt nu demonstrează, singur, că veniturile sunt artificiale, dar arată de ce cererea clienților finali trebuie analizată separat de circulația banilor între parteneri.</p>

      <h2 id="cine-plateste-ai-ul-pe-care-il-folosim-astazi">Cine plătește AI-ul pe care îl folosim astăzi?</h2>

      <p><strong>Clienții plătitori contribuie prin abonamente și consum, investitorii finanțează dezvoltarea și extinderea, iar creditorii pot acoperi o parte a necesarului de capital.</strong> Faptul că utilizatorul vede un buton „gratuit” nu elimină costul serviciului; el arată doar că acel utilizator nu primește o factură directă pentru accesul respectiv.<sup><a href="#fn-11">11</a></sup><sup><a href="#fn-14">14</a></sup></p>

      <p>Ca interpretare economică, accesul gratuit poate fi susținut din bugetul general al companiei, alimentat prin vânzări și finanțare, însă datele publice consultate nu permit împărțirea fiecărui prompt gratuit între un abonat, un investitor și un creditor. A afirma că știm cine a plătit exact o anumită conversație ar depăși informațiile disponibile.</p>

      <p>Există și costuri ale infrastructurii electrice care trebuie repartizate: IEA avertizează că centrele de date pot necesita investiții noi în rețele și producție, dar precizează că efectul asupra accesibilității electricității depinde de politici și de modul în care sunt alocate aceste costuri. Prin urmare, nici afirmația că populația plătește inevitabil întreaga extindere a AI, nici afirmația că efectele asupra comunităților sunt inexistente nu este susținută ca regulă generală.<sup><a href="#fn-9">9</a></sup></p>

      <h2 id="cum-fac-bani-companiile-din-folosirea-modelelor">Cum fac bani companiile din folosirea modelelor?</h2>

      <p><strong>Companiile monetizează AI-ul prin abonamente, facturarea consumului, contracte pentru organizații și, în anumite produse, publicitate.</strong> În abonament, clientul cumpără acces în anumite limite; prin API, aplicația clientului plătește în funcție de utilizare, de regulă exprimată în tokeni, adică unități de text procesate de model.<sup><a href="#fn-11">11</a></sup><sup><a href="#fn-14">14</a></sup></p>

      <p>Un exemplu verificabil este tariful public pentru <strong>Claude Sonnet 4.6</strong>, model listat în secțiunea de modele anterioare: <strong>3 dolari pentru un milion de tokeni de intrare și 15 dolari pentru un milion de tokeni de ieșire</strong>. La aceste tarife, o cerere cu 10.000 de tokeni de intrare și 2.000 de ieșire ar costa <strong>0,06 dolari</strong>, înaintea eventualelor taxe și servicii suplimentare, fără reduceri sau cache; calculul arată prețul comercial al utilizării, nu costul electricității furnizorului.<sup><a href="#fn-14">14</a></sup></p>

      <p>OpenAI declara în martie 2026 că segmentul enterprise reprezenta peste <strong>40% din venituri</strong>, iar proiectul-pilot de publicitate ajunsese la un ritm anualizat de peste <strong>100 de milioane de dolari</strong>. Aceste cifre sunt declarații ale companiei pentru acel moment, nu rezultate anuale auditate și nici o defalcare completă a veniturilor curente.<sup><a href="#fn-11">11</a></sup></p>

      <p>Diferența dintre venit și profit rămâne esențială: Anthropic raporta pentru primul semestru din 2026 venituri de <strong>16,286 miliarde de dolari</strong> și o <strong>pierdere operațională de 693 de milioane de dolari</strong>, conform situației consolidate a rezultatelor din același document SEC. Pierderea operațională nu este pierderea netă și nici numerarul consumat, iar veniturile nu sunt automat încasări.<sup><a href="#fn-8">8</a></sup></p>

      <p>În cazul OpenAI, Reuters relata la 8 octombrie 2026, pe baza unei surse familiarizate cu situația, un ritm anualizat al veniturilor din septembrie de aproape <strong>50 de miliarde de dolari</strong>. Un asemenea indicator extrapolează activitatea recentă la un an și nu înseamnă că firma a realizat deja acea sumă într-un exercițiu financiar; relatarea menționa și diferențe de raportare care complică comparația cu Anthropic.<sup><a href="#fn-15">15</a></sup></p>

      <h2 id="cat-din-factura-ai-este-de-fapt-electricitate">Cât din factura AI este, de fapt, electricitate?</h2>

      <p><strong>Factura electrică este doar una dintre componentele economiei AI, iar prețul unui răspuns trebuie separat de costul energiei necesare pentru a-l produce.</strong> În datele Anthropic, costurile sunt împărțite între calcul și infrastructură, personal, vânzări și alte cheltuieli; categoria de calcul nu oferă, singură, o defalcare publică exactă a electricității per prompt.<sup><a href="#fn-8">8</a></sup></p>

      <p>Un calcul pur ilustrativ arată diferența: la un preț ipotetic de <strong>0,10 dolari/kWh</strong>, o operațiune de <strong>1 Wh</strong> ar implica <strong>0,0001 dolari</strong> pentru energia respectivă, dar acest rezultat nu include recuperarea investiției în echipamente, dezvoltarea modelului sau celelalte cheltuieli ale serviciului. Valoarea de 1 Wh este aleasă pentru exemplu, nu măsurată pentru un produs, iar prețul electricității nu este un tarif contractual verificat al vreunui furnizor AI.</p>

      <p>Din perspectivă economică, o infrastructură poate deveni mai eficientă și totuși să rămână dificil de finanțat dacă cererea nu produce venituri suficiente pentru a-i acoperi costurile totale; în sens invers, o aplicație poate justifica un consum mai mare dacă rezultatul ei economisește resurse într-un proces mai larg. A doua situație trebuie demonstrată prin comparații ale întregii activități înlocuite sau îmbunătățite, nu presupusă doar pentru că produsul folosește AI.</p>

      <p>Întrebarea utilă despre inteligența artificială nu se oprește, așadar, la cantitatea de curent consumată de un mesaj, ci urmărește valoarea rezultatului obținut, resursele necesare pentru a-l produce și cine își asumă riscul atunci când veniturile nu acoperă investiția. Interfața poate face răspunsul să pară gratuit și instantaneu; infrastructura din spatele lui rămâne o activitate industrială, cu costuri care trebuie măsurate și finanțate.</p>

      <h2 id="surse-si-metodologie">Surse și metodologie</h2>

      <p>Articolul este o sinteză documentară, nu un experiment propriu de măsurare a consumului. Au fost consultate surse instituționale, cercetări, documente financiare, pagini comerciale și Reuters; rezultatele experimentale, estimările, declarațiile companiilor și calculele ilustrative sunt identificate distinct. Sursele comerciale sunt folosite pentru ceea ce declară companiile, fără a transforma automat declarația într-o verificare independentă. Sursele de mai jos au fost consultate și reverificate la 28 octombrie 2026, inclusiv secțiunile relevante din studiile și documentele primare.</p>

      <ol class="avl-footnotes">
        <li id="fn-1"><strong>IEA</strong>, <em>Key Questions on Energy and AI</em>, aprilie 2026, <a href="https://www.iea.org/reports/key-questions-on-energy-and-ai/executive-summary" target="_blank" rel="noopener noreferrer">rezumat executiv</a>. Reper pentru consumul tuturor centrelor de date și scenariul 2030.</li>
        <li id="fn-2"><strong>Google Cloud</strong>, Amin Vahdat și Jeff Dean, <em>How much energy does Google’s AI use? We did the math</em>, 21 august 2025, <a href="https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference" target="_blank" rel="noopener noreferrer">articol și limite metodologice</a>. Date din mai 2025; raportare proprie, fără verificare independentă declarată.</li>
        <li id="fn-3"><strong>Luccioni, Jernite și Strubell</strong>, <em>Power Hungry Processing: Watts Driving the Cost of AI Deployment?</em>, ACM FAccT 2024, <a href="https://arxiv.org/html/2311.16863v3" target="_blank" rel="noopener noreferrer">text integral, versiunea 3</a>, <a href="https://doi.org/10.1145/3630106.3658542" target="_blank" rel="noopener noreferrer">DOI</a>. Tabelul 2 și secțiunea de metodologie.</li>
        <li id="fn-4"><strong>Chung, Wu, Ma și Chowdhury</strong>, <em>Where Do the Joules Go? Diagnosing Inference Energy Consumption</em>, 29 ianuarie 2026, <a href="https://arxiv.org/html/2601.22076v1" target="_blank" rel="noopener noreferrer">preprint, versiunea 1</a>. Secțiunile 2 și 3.3; consum GPU, configurații diferite.</li>
        <li id="fn-5"><strong>Oviedo și colaboratorii</strong>, <em>Energy Use of AI Inference, Efficiency Pathways, and Test-Time Scaling</em>, <a href="https://arxiv.org/abs/2509.20241v2" target="_blank" rel="noopener noreferrer">versiunea 2, revizuită la 9 iunie 2026</a>. Rezumatul actualizat; estimări, nu măsurători ale unei aplicații individuale.</li>
        <li id="fn-6"><strong>Stanford HAI</strong>, <em>AI Index Report 2025</em>, <a href="https://hai.stanford.edu/assets/files/hai_ai-index-report-2025_chapter1_final.pdf" target="_blank" rel="noopener noreferrer">capitolul 1</a>. Pagina 43, figura 1.3.24 și textul aferent; estimări Epoch AI, verificate în PDF-ul capitolului.</li>
        <li id="fn-7"><strong>Meta</strong>, <a href="https://github.com/meta-llama/llama-models/blob/main/models/llama3_1/MODEL_CARD.md" target="_blank" rel="noopener noreferrer">Llama 3.1 Model Card</a>, secțiunea <em>Hardware and Software</em>. Sursă primară pentru orele GPU.</li>
        <li id="fn-8"><strong>Anthropic</strong>, formular S-1 depus la SEC la 26 octombrie 2026, <a href="https://www.sec.gov/Archives/edgar/data/2130357/000162828026067168/anthropicpbc-sx1.htm" target="_blank" rel="noopener noreferrer">document primar</a>. <em>Consolidated Statements of Operations</em>, pagina F-8 a prospectului; date semestriale marcate „unaudited”.</li>
        <li id="fn-9"><strong>IEA</strong>, 16 aprilie 2026, <a href="https://www.iea.org/news/data-centre-electricity-use-surged-in-2025-even-with-tightening-bottlenecks-driving-a-scramble-for-solutions" target="_blank" rel="noopener noreferrer">comunicat despre creșterea consumului centrelor de date</a>. Investiții de capital și alocarea costurilor infrastructurii electrice.</li>
        <li id="fn-10"><strong>OpenAI</strong>, <em>Scaling AI for everyone</em>, 27 februarie 2026, <a href="https://openai.com/index/scaling-ai-for-everyone/" target="_blank" rel="noopener noreferrer">anunț</a>. Distribuția celor 110 miliarde USD.</li>
        <li id="fn-11"><strong>OpenAI</strong>, <em>OpenAI raises $122 billion to accelerate the next phase of AI</em>, 31 martie 2026, <a href="https://openai.com/index/accelerating-the-next-phase-ai/" target="_blank" rel="noopener noreferrer">anunț</a>. Capital angajat, credit, venituri enterprise și publicitate.</li>
        <li id="fn-12"><strong>Anthropic</strong>, <em>Anthropic raises $65B in Series H funding at $965B post-money valuation</em>, 28 mai 2026, <a href="https://www.anthropic.com/news/series-h" target="_blank" rel="noopener noreferrer">anunț</a>.</li>
        <li id="fn-13"><strong>Anthropic</strong>, <em>Anthropic and Amazon expand collaboration for up to 5 gigawatts of new compute</em>, 20 aprilie 2026, <a href="https://www.anthropic.com/news/anthropic-amazon-compute" target="_blank" rel="noopener noreferrer">acord și investiții</a>.</li>
        <li id="fn-14"><strong>Anthropic / Claude</strong>, <a href="https://claude.com/pricing" target="_blank" rel="noopener noreferrer">pagina de prețuri</a>, consultată la 28 octombrie 2026. Secțiunile abonamente și <em>Legacy models / Sonnet 4.6</em>; pagină dinamică.</li>
        <li id="fn-15"><strong>Reuters</strong>, Jaspreet Singh și Krystal Hu, <em>OpenAI’s September annualized revenue nears $50 billion, less than previously indicated, source says</em>, 8 octombrie 2026, <a href="https://www.reuters.com/business/openais-annualized-revenue-20-billion-less-than-previously-signaled-ft-reports-2026-10-08/" target="_blank" rel="noopener noreferrer">articol</a>. Relatare bazată pe o sursă anonimă; nu bilanț auditat.</li>
        <li id="fn-16"><strong>OpenAI</strong>, <em>Announcing The Stargate Project</em>, 21 ianuarie 2025, <a href="https://openai.com/index/announcing-the-stargate-project/" target="_blank" rel="noopener noreferrer">anunț inițial</a>. Țintă multianuală de investiții, nu dovada executării întregii sume.</li>
      </ol>

      <h3 id="nota-de-volatilitate">Notă de volatilitate</h3>

      <p>Prețurile API, rundele de finanțare, rezultatele financiare și prognozele energetice se schimbă. Cifrele au fost reverificate la 28 octombrie 2026; la o lectură ulterioară, data măsurării și data publicării fiecărei surse rămân separate. Pagina de prețuri Claude e dinamică, iar datele semestriale Anthropic sunt neauditate.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 28 octombrie 2026.</em></p>
`;
