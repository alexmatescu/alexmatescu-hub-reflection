import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const marketDiscoveryPilot4BolognaMeta: LabArticleMeta = {
  title:
    "Pilotul 4 Market Discovery: de ce rularea din Bologna nu intră în reuniunea de candidați",
  seoTitle: "Pilotul 4 Market Discovery: rularea din Bologna, invalidă",
  description:
    "Rularea MKT-RO-AIV-2026Q4-PILOT-4, făcută la 10 octombrie 2026 din aeroportul din Bologna cu 4 expresii scurte, a fost procesată și publicată ca pachet de dovezi, dar exclusă din reuniunea de candidați: expresiile scurte, fără ancoră geografică, au produs din Italia răspunsuri orientate spre piața italiană, iar rularea nu atinge pragul minim al condițiilor de rulare. Ce s-a rulat, ce lipsește și ce se poate folosi din ea.",
  canonical:
    "https://delamatescu.ro/lab/articole/market-discovery-pilot-4-bologna-rulare-invalida",
  category: "Search & Retrieval",
  articleType: "Analiză de caz",
  datePublished: "2026-10-21T13:19:00+03:00",
  dateModified: "2026-10-21",
  lastReviewed: "2026-10-21",
  about: [
    { name: "Market Discovery" },
    { name: "MKT-RO-AIV" },
    { name: "Condiții de rulare" },
    { name: "Pachet de dovezi" },
    { name: "Candidate Set" },
  ],
  keywords: [
    "Market Discovery",
    "MKT-RO-AIV",
    "USER-SHORT",
    "condiții de rulare",
    "ancoră geografică",
    "pachet de dovezi",
    "Candidate Set",
    "AI Visibility",
    "localizare rezultate",
    "Google AI Mode",
    "ChatGPT",
    "Claude",
    "Gemini",
  ],
  citations: [
    {
      name: "AI Visibility Lab — MKT-RO-AIV-2026Q4-PILOT-4 Discovery Evidence Package v1.0",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/mkt-evidence-mkt-ro-aiv-2026q4-pilot-4-v1.0",
    },
    {
      name: "AI Visibility Lab — Pilotul 1 Market Discovery",
      url: "https://delamatescu.ro/lab/market-discovery/2026q4-pilot-1",
    },
    {
      name: "AI Visibility Lab — Pilotul 2 Market Discovery",
      url: "https://delamatescu.ro/lab/market-discovery/2026q4-pilot-2",
    },
    {
      name: "AI Visibility Lab — AVL-MKT-001, Market Scope & Eligibility Protocol",
      url: "https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate",
    },
  ],
  faq: [],
};

const RELEASE_URL =
  "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/mkt-evidence-mkt-ro-aiv-2026q4-pilot-4-v1.0";

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const marketDiscoveryPilot4BolognaHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-21T13:19:00+03:00">21 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-21">21 octombrie 2026</time></p>

      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#pe-scurt">Pe scurt</a></li>
          <li><a href="#ce-este-market-discovery-si-unde-se-afla-pilot-4">Ce este Market Discovery și unde se află PILOT-4</a></li>
          <li><a href="#ce-s-a-rulat-efectiv">Ce s-a rulat efectiv</a></li>
          <li><a href="#de-ce-rularea-e-invalida">De ce rularea e invalidă</a>
            <ol>
              <li><a href="#1-raspunsurile-nu-descriu-piata-din-romania">1. Răspunsurile nu descriu piața din România</a></li>
              <li><a href="#2-conditiile-de-rulare-nu-permit-comparatia">2. Condițiile de rulare nu permit comparația</a></li>
              <li><a href="#de-ce-pilotul-1-rulat-tot-din-italia-a-intrat-in-reuniune">De ce Pilotul 1, rulat tot din Italia, a intrat în reuniune</a></li>
            </ol>
          </li>
          <li><a href="#ce-a-aratat-totusi-rularea">Ce a arătat totuși rularea</a></li>
          <li><a href="#ce-inseamna-exclusa-din-reuniune">Ce înseamnă „exclusă din reuniune”</a></li>
          <li><a href="#ce-se-poate-folosi-din-pilot-4">Ce se poate folosi din PILOT-4</a></li>
          <li><a href="#pachetul-de-dovezi">Pachetul de dovezi</a></li>
          <li><a href="#surse-si-metodologie">Surse și metodologie</a>
            <ol>
              <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
            </ol>
          </li>
        </ol>
      </nav>

      <p><strong>Rularea <code>MKT-RO-AIV-2026Q4-PILOT-4</code> a fost procesată complet și publicată ca pachet de dovezi, dar nu intră în reuniunea de candidați a seriei MKT-RO-AIV.</strong> A fost rulată la 10 octombrie 2026, între 11:35 și 12:36 (ora Italiei), din aeroportul din Bologna, pe rețeaua publică a aeroportului, cu 4 expresii scurte de tip utilizator. Din 32 de execuții prevăzute (4 expresii × 8 suprafețe), pachetul conține 16. O parte din răspunsuri descriu piața din Italia, nu pe cea din România, iar rularea nu atinge pragul minim al condițiilor de rulare. Rezultatele ei sunt invalide pentru concluzii despre piață.<sup><a href="#fn-1">1</a></sup></p>
      <p>Publicăm totuși rularea, cu toate dovezile ei. O rulare eșuată, ascunsă, ar face seria să pară mai curată decât a fost. Documentată, arată unde se rupe procedura și de ce o regulă există.</p>

      <h2 id="pe-scurt">Pe scurt</h2>
      <ol>
        <li><strong>Ce este PILOT-4?</strong> Prima rulare a expresiilor scurte USER-SHORT din seria Market Discovery MKT-RO-AIV: 4 expresii din setul USER v0.2.0, rulate din Bologna la 10 octombrie 2026.</li>
        <li><strong>Ce conține pachetul?</strong> 56 de capturi, 16 execuții, 216 observații, sigilate cu SHA-256 și publicate pe GitHub.</li>
        <li><strong>De ce e invalidă rularea?</strong> Din două motive care se adună. Expresiile scurte nu numesc România, așa că locația din Italia a orientat o parte din răspunsuri spre piața italiană. Iar rularea acoperă doar jumătate din execuțiile prevăzute, cu rețeaua schimbată în timpul rulării și o conversație contaminată.</li>
        <li><strong>Ce înseamnă excluderea?</strong> Observațiile rămân în pachet, dar nu alimentează reuniunea de candidați din care se construiește Candidate Set.</li>
        <li><strong>Ce se poate folosi din ea?</strong> Ca exemplu documentat de efect al locației și al rețelei asupra rezultatelor și asupra pieței la care se raportează răspunsurile, nu ca măsurătoare a pieței.</li>
      </ol>

      <h2 id="ce-este-market-discovery-si-unde-se-afla-pilot-4">Ce este Market Discovery și unde se află PILOT-4</h2>
      <p><a href="/lab/market-discovery">Market Discovery</a> este etapa în care AI Visibility Lab caută furnizorii de servicii GEO, AEO și AI Visibility relevanți pentru clienți din România. Aceleași interogări sunt puse lui Google Search, Bing Search, Google AI Mode, ChatGPT, Claude, Copilot, Gemini și Perplexity. Fiecare rezultat este capturat, clasificat și înregistrat cu proveniența lui. Furnizorii găsiți în toate rulările unei instanțe formează <strong>reuniunea de candidați</strong>, din care se construiește Candidate Set. Abia apoi urmează verificarea fiecărui candidat, conform <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">protocolului AVL-MKT-001</a>.<sup><a href="#fn-3">3</a></sup></p>
      <p>Seria are două seturi de interogări:</p>
      <ul>
        <li><strong>DISCOVERY</strong>: întrebări formulate de specialist („Cine oferă servicii GEO pentru firme din România?”);</li>
        <li><strong>USER</strong>: expresii scurte, cum le-ar scrie cineva fără cunoștințe de specialitate („promovare ChatGPT”).</li>
      </ul>
      <p>Piloții 1–3, publicați în secțiunea Market Discovery, au rulat setul DISCOVERY. PILOT-4 este prima rulare a setului USER. Rularea s-a făcut cu setul în vigoare la acea dată, USER v0.2.0, și cu ID-urile lui. Nu a fost reetichetată retroactiv cu ID-urile din versiunile ulterioare.</p>
      <table>
        <thead>
          <tr><th>Expresie</th><th>ID în USER v0.2.0</th></tr>
        </thead>
        <tbody>
          <tr><td>consultant AI</td><td>Q-USER-001</td></tr>
          <tr><td>promovare ChatGPT</td><td>Q-USER-003</td></tr>
          <tr><td>optimizare site ChatGPT</td><td>Q-USER-008</td></tr>
          <tr><td>servicii promovare AI</td><td>Q-USER-012</td></tr>
        </tbody>
      </table>

      <h2 id="ce-s-a-rulat-efectiv">Ce s-a rulat efectiv</h2>
      <p>Protocolul cere fiecare expresie pe toate cele 8 suprafețe. În pachet au intrat 16 execuții:</p>
      <table>
        <thead>
          <tr><th>Suprafață</th><th>Q-USER-001</th><th>Q-USER-003</th><th>Q-USER-008</th><th>Q-USER-012</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Search</td><td>Da (prin hotspot)</td><td>Da</td><td>Da</td><td>Da</td></tr>
          <tr><td>Bing Search</td><td>Nerulat</td><td>Nerulat</td><td>Nerulat</td><td>Nerulat</td></tr>
          <tr><td>Google AI Mode</td><td>Rulat, necapturat</td><td>Da</td><td>Da</td><td>Da</td></tr>
          <tr><td>ChatGPT</td><td>Rulat, necapturat</td><td>Da (contaminat)</td><td>Da</td><td>Da</td></tr>
          <tr><td>Claude</td><td>Rulat, necapturat</td><td>Da</td><td>Da</td><td>Da</td></tr>
          <tr><td>Copilot</td><td>Nerulat</td><td>Nerulat</td><td>Nerulat</td><td>Nerulat</td></tr>
          <tr><td>Gemini</td><td>Rulat, necapturat</td><td>Da</td><td>Da</td><td>Da</td></tr>
          <tr><td>Perplexity</td><td>Nerulat</td><td>Nerulat</td><td>Nerulat</td><td>Nerulat</td></tr>
        </tbody>
      </table>
      <p>„Rulat, necapturat” înseamnă că interogarea a fost pusă, dar captura nu a fost salvată. Regula laboratorului este că <strong>o execuție fără captură nu există în pachet</strong>: se declară ca abatere și se tratează ca nerulată. Fără captură, nimic din ce a afișat suprafața nu mai poate fi verificat.</p>
      <p>Pachetul înregistrează 7 abateri (DEV-01…DEV-07). Cele care contează pentru decizie sunt descrise mai jos.</p>

      <h2 id="de-ce-rularea-e-invalida">De ce rularea e invalidă</h2>
      <p>Rularea e invalidă din două motive care se adună: ce au generat suprafețele și condițiile în care a fost rulată.</p>

      <h3 id="1-raspunsurile-nu-descriu-piata-din-romania">1. Răspunsurile nu descriu piața din România</h3>
      <p><strong>Expresiile USER-SHORT nu conțin o ancoră geografică.</strong> Se transmit exact, fără „România”, ca să imite felul în care caută un utilizator obișnuit. Când interogarea nu numește piața, suprafața o deduce din context, inclusiv din locația de la care vine cererea. Rulate din Bologna, o parte din răspunsuri au fost orientate spre Italia:</p>
      <ul>
        <li>pe Google Search, rezultatele pentru „promovare ChatGPT” au alternat între pagini românești despre promovarea prin ChatGPT Ads și ghiduri în italiană despre folosirea ChatGPT în marketing; la „optimizare site ChatGPT”, primele 10 rezultate au fost pagini românești, iar din pozițiile 11–29, 7 au fost pagini în italiană și 10 în engleză;</li>
        <li>Claude a răspuns în italiană la „promovare ChatGPT”;</li>
        <li>Gemini a afișat locația „Bologna, Italia · Pe baza adresei IP”;</li>
        <li>pentru „consultant AI”, rezultatele Google au fost majoritar în engleză, iar încercările din Google AI Mode au primit răspunsuri în italiană și în engleză (detaliate mai jos, la „Ce a arătat totuși rularea”).</li>
      </ul>
      <p>Seria MKT-RO-AIV caută furnizori relevanți pentru clienți din România. <strong>Un rezultat relevant pentru piața din Italia nu e relevant pentru această serie</strong>, chiar dacă răspunde corect la expresie. Nu există o regulă prin care rezultatele „italiene” să poată fi separate sigur de cele „românești” într-o rulare făcută din Italia, așa că rularea nu poate fi folosită parțial.</p>

      <h3 id="2-conditiile-de-rulare-nu-permit-comparatia">2. Condițiile de rulare nu permit comparația</h3>
      <p><strong>Pragul minim, așa cum l-am aplicat aici, cere ca o rulare să poată fi comparată cu celelalte rulări ale instanței.</strong> PILOT-4 nu îndeplinește patru dintre condițiile care fac comparația posibilă:</p>
      <table>
        <thead>
          <tr><th>Condiție</th><th>Ce cere</th><th>Ce s-a întâmplat în PILOT-4</th></tr>
        </thead>
        <tbody>
          <tr><td>Acoperirea suprafețelor</td><td>Fiecare expresie pe toate cele 8 suprafețe</td><td>Bing, Copilot și Perplexity nu au fost rulate deloc. 16 din 32 de execuții</td></tr>
          <tr><td>Acoperirea expresiilor</td><td>Fiecare expresie are execuții pe toate suprafețele rulate</td><td>„consultant AI” are o singură execuție, pe Google Search</td></tr>
          <tr><td>Aceeași condiție de rețea</td><td>Toate execuțiile din aceeași rețea</td><td>Google Search Q-USER-001 a rulat prin hotspotul telefonului (Google a afișat „România · Ploiești”), restul pe Wi-Fi-ul aeroportului („Italia · Bologna”)</td></tr>
          <tr><td>Un singur răspuns inițial</td><td>Fără mesaje de continuare în conversație</td><td>ChatGPT „promovare ChatGPT”: după primul răspuns, în același fir a fost trimis un mesaj din afara setului. Execuția e marcată contaminată</td></tr>
        </tbody>
      </table>

      <h3 id="de-ce-pilotul-1-rulat-tot-din-italia-a-intrat-in-reuniune">De ce Pilotul 1, rulat tot din Italia, a intrat în reuniune</h3>
      <p><strong>Pilotul 1 a fost rulat tot din Italia, la 9 octombrie 2026, și a intrat în reuniune.</strong><sup><a href="#fn-2">2</a></sup> Diferența vine din interogări. Pilotul 1 a rulat întrebări DISCOVERY, iar toate cele 4 conțin explicit „din România” (de exemplu „Cine oferă servicii GEO (Generative Engine Optimization) pentru firme din România?”). Ancora din întrebare a orientat răspunsurile spre piața din România, chiar dacă cererea venea din Italia.</p>
      <p>Locația nu a rămas fără efect nici acolo. Pe Google, întrebarea despre monitorizarea mențiunilor (Q-DISC-011) a avut 90% rezultate irelevante în rularea din Italia, față de 55% în rularea din România a pilotului 2.<sup><a href="#fn-4">4</a></sup> Dar rezultatele relevante descriau piața din România, deci puteau intra în reuniune. În plus, Pilotul 1 are toate cele 32 de execuții prevăzute, pe toate cele 8 suprafețe.</p>
      <p>Regula „rulare din România” a fost adoptată la 12 octombrie 2026, după ambele rulări din Italia. Excluderea PILOT-4 nu se sprijină retroactiv pe ea. Se sprijină pe ce au generat suprafețele și pe acoperirea incompletă.</p>
      <p><strong>Pragul nu a fost preînregistrat.</strong> Decizia de excludere a fost luată de operator după procesarea rulării, la 20 octombrie 2026. O declarăm așa cum s-a întâmplat. Ambele criterii vor fi scrise ca regulă în versiunea următoare a documentului de instanță Market Discovery, ca să se aplice înainte de rulare, nu după.</p>

      <h2 id="ce-a-aratat-totusi-rularea">Ce a arătat totuși rularea</h2>
      <p>Rezultatele de mai jos sunt observații punctuale, nu concluzii.</p>
      <p><strong>Setările manuale de limbă nu au fost suficiente.</strong> Notița operatorului, inclusă în pachet ca document D01, consemnează trei încercări succesive în Google AI Mode pentru „consultant AI”, în ferestre private: două răspunsuri în italiană și unul în engleză, inclusiv în încercările în care limba fusese setată manual pe română. Aceste încercări nu sunt execuții în pachet, pentru că nu au capturi în folderul suprafeței. Ele apar doar în notiță, ca incident documentat.</p>
      <p><strong>Expresiile scurte cer adesea clarificări.</strong> 4 din 16 execuții s-au încheiat cu o cerere de clarificare (ChatGPT și Claude). Setul USER tratează asta ca observație validă: o expresie ambiguă poate produce o întrebare înapoi, nu o listă de furnizori.</p>
      <table>
        <thead>
          <tr><th>Indicator</th><th>Valoare</th></tr>
        </thead>
        <tbody>
          <tr><td>Capturi</td><td>56</td></tr>
          <tr><td>Execuții în pachet</td><td>16 din 32 prevăzute</td></tr>
          <tr><td>Observații în registru</td><td>216</td></tr>
          <tr><td>Observații marcate pentru includere, înainte de excludere</td><td>79</td></tr>
          <tr><td>Execuții încheiate cu cerere de clarificare</td><td>4</td></tr>
          <tr><td>Execuții cu relevanță parțială față de expresie</td><td>10 din 16</td></tr>
        </tbody>
      </table>
      <p>Cele 79 de observații marcate pentru includere ar fi intrat în reuniune dacă rularea ar fi fost validă. Nu au fost deduplicate și nu reprezintă un număr de furnizori. Nu publicăm aici nume de furnizori din această rulare: numele apar în registrul din pachet, cu dovada lor, dar o rulare invalidă nu poate susține o listă.</p>

      <h2 id="ce-inseamna-exclusa-din-reuniune">Ce înseamnă „exclusă din reuniune”</h2>
      <p>Excluderea nu șterge nimic. Pachetul de dovezi rămâne înghețat, public și verificabil. Se schimbă un singur lucru: observațiile PILOT-4 nu intră în reuniunea de candidați a instanței 2026Q4. Prin urmare:</p>
      <ul>
        <li>nu cresc numărul de candidați;</li>
        <li>nu intră în comparațiile dintre rulări;</li>
        <li>nu intră în comparația dintre setul DISCOVERY și setul USER;</li>
        <li>nu pot fi citate ca dovadă că un furnizor „apare” sau „nu apare” în căutările unui utilizator.</li>
      </ul>
      <p>Cifrele cumulate publicate pentru piloții 1–3 rămân neschimbate.</p>

      <h2 id="ce-se-poate-folosi-din-pilot-4">Ce se poate folosi din PILOT-4</h2>
      <ul>
        <li><strong>Ca exemplu documentat de efect al condițiilor de rulare.</strong> Capturile arată, cu dovadă, cum o rețea străină schimbă limba, locația afișată și piața la care se raportează răspunsurile, atunci când interogarea nu o numește.</li>
        <li><strong>Ca test al procedurii.</strong> Rularea a impus două reguli noi, aplicate deja în procesare: execuția fără captură se tratează ca nerulată, iar o rulare se declară cu setul de interogări în vigoare la data ei.</li>
        <li><strong>Ca material de audit.</strong> Oricine poate verifica ce a fost capturat, ce lipsește și cum au fost clasificate observațiile.</li>
      </ul>
      <p>Ce nu se poate folosi: nicio concluzie despre piața din România, despre frecvența unui furnizor sau despre diferența dintre expresiile scurte și întrebările de specialist.</p>

      <h2 id="pachetul-de-dovezi">Pachetul de dovezi</h2>
      <p>Pachetul <strong>MKT-RO-AIV-2026Q4-PILOT-4 v1.0</strong> este publicat ca <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">release pe GitHub</a>. Conține arhiva capturilor, manifestul de sigilare, manifestul conversiei PNG → WebP, setul de interogări, fișa rulării cu cele 7 abateri, contextul de sesiune observat, indexul capturilor, registrul de observații, un README și manifestul SHA-256.<sup><a href="#fn-1">1</a></sup></p>
      <p>Capturile au fost convertite în WebP la calitate 80 înainte de calculul hash-urilor, conform <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">standardului de dovezi AVL-200</a>. Integritatea se verifică din directorul pachetului descărcat:</p>
      <pre><code>shasum -a 256 -c mkt-ro-aiv-2026q4-pilot-4_sha256sums_v1.0.txt</code></pre>
      <p>SHA-256 al arhivei: <code>7bfd278b419f1cc057dbd7b38349593527bd7c8361163b13656b2870bdd84aa3</code>.</p>

      <hr />

      <h2 id="surse-si-metodologie">Surse și metodologie</h2>
      <p>Toate cifrele din acest articol provin din pachetul de dovezi PILOT-4 v1.0, verificat la 21 octombrie 2026: README, fișa rulării, indexul capturilor și registrul de observații. Datele piloților 1–3 provin din paginile publice Market Discovery, inclusiv comparația 90% / 55% de pe pagina pilotului 2. Data adoptării regulii „rulare din România” (12 octombrie 2026) provine din documentul de instanță Market Discovery v0.2.0, document de lucru intern. Contextul de sesiune (locația și limba afișate) a fost stabilit din capturi, nu din declarații. Ce nu se vede în captură e marcat <code>NOT_VISIBLE</code>. Fereastra privată și conversația nouă nu garantează absența personalizării sau a localizării. Articolul nu evaluează furnizori și nu interpretează rezultatele ca reprezentative pentru piață.</p>
      <ol class="avl-footnotes">
        <li id="fn-1">AI Visibility Lab, <strong>MKT-RO-AIV-2026Q4-PILOT-4 — Discovery Evidence Package v1.0</strong>, release GitHub, publicat la 21 octombrie 2026. <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/mkt-evidence-mkt-ro-aiv-2026q4-pilot-4-v1.0</a></li>
        <li id="fn-2">AI Visibility Lab, <strong>Pilotul 1 Market Discovery</strong>, pagina rulării. <a href="/lab/market-discovery/2026q4-pilot-1">/lab/market-discovery/2026q4-pilot-1</a></li>
        <li id="fn-3">AI Visibility Lab, <strong>AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</strong>, draft v0.10.0. <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">/lab/metodologie/protocol-delimitare-piata-eligibilitate</a></li>
        <li id="fn-4">AI Visibility Lab, <strong>Pilotul 2 Market Discovery</strong>, pagina rulării. <a href="/lab/market-discovery/2026q4-pilot-2">/lab/market-discovery/2026q4-pilot-2</a></li>
      </ol>

      <h3 id="nota-de-volatilitate">Notă de volatilitate</h3>
      <p>Rezultatele motoarelor de căutare și răspunsurile AI depind de momentul rulării, de versiunea modelului, de cont, de personalizare și de localizare. Observațiile din PILOT-4 descriu ce au afișat suprafețele la 10 octombrie 2026, din Bologna, și nu se pot reproduce identic.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 21 octombrie 2026.</em></p>
`;
