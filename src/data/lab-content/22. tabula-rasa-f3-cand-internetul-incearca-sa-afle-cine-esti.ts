import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const tabulaRasaF3Meta: LabArticleMeta = {
  title:
    "Când internetul încearcă să afle cine ești: ce arată a patra măsurare Tabula Rasa",
  seoTitle: "Când internetul încearcă să afle cine ești: Tabula Rasa F3",
  description:
    "F3, al patrulea punct de măsurare al studiului longitudinal Tabula Rasa, a rulat aceleași 14 interogări despre Alex Matescu pe 9 suprafețe de căutare și răspuns AI, între 18 și 21 octombrie 2026. Arhiva publică are 293 de capturi, 129 de execuții și jurnalul rulării. Articolul descrie ce s-a măsurat, ce fenomene au apărut și ce arată adjudecarea celor 126 de execuții: căutarea clasică identifică persoana la 11 din 14 interogări, mai mulți asistenți o identifică fără ancoră, iar la interogarea de dezambiguizare patru sisteme declară că subiectul și un avocat cu nume apropiat sunt aceeași persoană.",
  canonical:
    "https://delamatescu.ro/lab/articole/tabula-rasa-f3-cand-internetul-incearca-sa-afle-cine-esti",
  category: "Entities & Citations",
  articleType: "Analiză de caz",
  datePublished: "2026-10-23T16:17:00+03:00",
  dateModified: "2026-10-23",
  lastReviewed: "2026-10-23",
  about: [
    { name: "Tabula Rasa" },
    { name: "Alex Matescu" },
    { name: "Entity resolution" },
    { name: "Anchor Dependence" },
    { name: "Pachet de dovezi F3" },
  ],
  keywords: [
    "Tabula Rasa",
    "entity resolution",
    "rezoluția entității",
    "identitate digitală",
    "Anchor Dependence",
    "studiu longitudinal",
    "punct de măsurare F3",
    "pachet de dovezi",
    "Google AI Overviews",
    "Google AI Mode",
    "ChatGPT",
    "Claude",
    "Copilot",
    "Gemini",
    "Perplexity",
    "AI Visibility",
  ],
  citations: [
    {
      name: "AI Visibility Lab — Alex Matescu, F3 Evidence Archive v1.0",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0",
    },
    {
      name: "AI Visibility Lab — Alex Matescu, T0 Evidence Archive v1.0 (T0)",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v1.0",
    },
    {
      name: "AI Visibility Lab — Alex Matescu, T0 Evidence Archive v2.0 (F1)",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v2.0",
    },
    {
      name: "AI Visibility Lab — Alex Matescu, T0 Evidence Archive v3.0 (F2)",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v3.0",
    },
    {
      name: "AI Visibility Lab — Când internetul nu știe cine ești: un studiu longitudinal despre identitate în Search și AI Search",
      url: "https://delamatescu.ro/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz",
    },
    {
      name: "AI Visibility Lab — AVL-200, Standardul de dovezi, măsurare și trasabilitate",
      url: "https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate",
    },
    {
      name: "AI Visibility Lab — Alex Matescu, F3 Evidence Archive v1.0 (metadata v1.2, adjudecare)",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0-m1.2",
    },
    {
      name: "AI Visibility Lab — AVL-201, Tabula Rasa F0: Baseline Measurement Specification",
      url: "https://delamatescu.ro/lab/metodologie/tabula-rasa-f0",
    },
  ],
  faq: [],
};

const RELEASE_BASE =
  "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag";
const RELEASE_URL = `${RELEASE_BASE}/evidence-alex-matescu-f3-v1.0`;

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const tabulaRasaF3Html = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-23T16:17:00+03:00">23 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-23">23 octombrie 2026</time></p>

      <p><strong>Tabula Rasa · Studiul de caz #001 · Alex Matescu · F3 — 18–21 octombrie 2026</strong></p>
      <p><em>Un experiment longitudinal despre identitate digitală, căutare și inteligență artificială. De la primele confuzii de identitate la un protocol de măsurare mai riguros, care documentează nu numai răspunsurile platformelor, ci și condițiile în care acestea au fost obținute.</em></p>


      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#rezumat">Rezumat</a></li>
          <li><a href="#1-de-la-nume-la-identitate">1. De la nume la identitate</a></li>
          <li><a href="#2-ce-stim-din-masuratorile-anterioare">2. Ce știm din măsurătorile anterioare</a></li>
          <li><a href="#3-f3-extinderea-si-standardizarea-masurarii">3. F3: extinderea și standardizarea măsurării</a></li>
          <li><a href="#4-ce-am-observat-despre-google-si-bing">4. Ce am observat despre Google și Bing</a></li>
          <li><a href="#5-conversatiile-temporare-si-problema-conditiilor-de-sesiune">5. Conversațiile temporare și problema condițiilor de sesiune</a></li>
          <li><a href="#6-cand-sistemul-raspunde-in-alta-limba">6. Când sistemul răspunde în altă limbă</a></li>
          <li><a href="#7-google-ai-overviews-un-rezultat-absent-nu-inseamna-o-entitate-necunoscuta">7. Google AI Overviews: un rezultat absent nu înseamnă o entitate necunoscută</a></li>
          <li><a href="#8-identitatea-textuala-si-identitatea-vizuala">8. Identitatea textuală și identitatea vizuală</a></li>
          <li><a href="#9-de-ce-293-de-capturi-nu-reprezinta-293-de-raspunsuri">9. De ce 293 de capturi nu reprezintă 293 de răspunsuri</a></li>
          <li><a href="#10-ce-putem-compara-intre-t0-f1-f2-si-f3">10. Ce putem compara între T0, F1, F2 și F3</a></li>
          <li><a href="#11-ce-inseamna-progresul-intr-un-experiment-de-ai-visibility">11. Ce înseamnă progresul într-un experiment de AI Visibility</a></li>
          <li><a href="#12-ce-nu-demonstreaza-f3">12. Ce nu demonstrează F3</a></li>
          <li><a href="#13-ce-arata-adjudecarea-f3">13. Ce arată adjudecarea F3</a></li>
          <li><a href="#concluzie">Concluzie</a></li>
          <li><a href="#arhiva-de-dovezi-si-cum-o-verifici">Arhiva de dovezi și cum o verifici</a></li>
          <li><a href="#surse-si-metodologie">Surse și metodologie</a>
            <ol>
              <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
            </ol>
          </li>
        </ol>
      </nav>
      <h2 id="rezumat">Rezumat</h2>
      <p>În iulie 2026 am început un experiment simplu în aparență: am întrebat mai multe motoare de căutare și sisteme de inteligență artificială cine este Alex Matescu.</p>
      <p>Subiectul experimentului eram chiar eu.</p>
      <p>Nu urmăream doar dacă numele meu apare într-un răspuns. Voiam să aflu dacă sistemele pot identifica persoana corectă, o pot diferenția de alte persoane cu nume asemănătoare și pot recupera informații autentice despre activitatea ei.</p>
      <p>Primele măsurători au arătat că simpla prezență a informațiilor pe internet nu garantează identificarea corectă a unei persoane. Unele sisteme mă identificau corect, altele aveau nevoie de indicii suplimentare, iar altele confundau persoane diferite sau evitau să răspundă.</p>
      <p>Au urmat noi ferestre de măsurare, documentarea evidențelor și formalizarea metodologiei AI Visibility Lab.</p>
      <p>În perioada 18–21 octombrie 2026 am efectuat F3, al patrulea punct al studiului longitudinal, după T0, F1 și F2.</p>
      <p>Noua măsurare acoperă nouă suprafețe de căutare și răspuns AI, utilizând același set de 14 interogări. Arhiva conține 293 de capturi, organizate pe platformă și interogare, alături de jurnalul rulării. Este publicată integral ca <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">pachet de dovezi pe GitHub</a>, cu checksum-uri SHA-256 pentru fiecare fișier, ca oricine să poată verifica ce scriu mai jos.<sup><a href="#fn-1">1</a></sup></p>
      <p>Acest articol documentează ce a fost măsurat, cum a evoluat procesul experimental și ce limite trebuie respectate în interpretarea răspunsurilor. Toate cele 126 de execuții au fost adjudecate la 23 octombrie 2026. Rezultatele principale sunt în secțiunea 13, iar analiza completă, cu comparația față de punctele anterioare, în <a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul de caz Tabula Rasa</a>.</p>

      <h2 id="1-de-la-nume-la-identitate">1. De la nume la identitate</h2>
      <p>Există o diferență fundamentală între a găsi numele unei persoane și a identifica persoana respectivă.</p>
      <p>Un motor de căutare poate găsi douăzeci de pagini care conțin același nume, fără ca toate să vorbească despre aceeași persoană. Un asistent AI poate recupera informații reale despre două persoane diferite și le poate combina într-o singură biografie. Poate, de asemenea, să identifice persoana corectă numai după ce utilizatorul adaugă orașul, profesia, compania sau domeniul web.</p>
      <p>Acesta este fenomenul pe care îl urmăresc în Tabula Rasa: rezoluția entității, sau <em>entity resolution</em>. Ce înseamnă o entitate pentru un motor de căutare sau pentru un sistem AI am explicat separat, în articolul <a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz">Ce este o entitate pentru AI și motoarele de căutare</a>.</p>
      <p>În cazul meu, variantele Alex Matescu, Alexandru Matescu și Alex Mateescu nu sunt echivalente operațional. Unele pot conduce către persoana urmărită, altele către persoane reale cu identități diferite.</p>
      <p>Din această cauză, întrebarea experimentală a devenit mai precisă:</p>
      <p><strong>Cât context este necesar pentru ca un sistem să identifice corect aceeași persoană?</strong></p>

      <h2 id="2-ce-stim-din-masuratorile-anterioare">2. Ce știm din măsurătorile anterioare</h2>
      <p>În prima remăsurare sistematică, F1, au fost adjudecate integral patru sisteme AI pe câte 14 interogări.<sup><a href="#fn-5">5</a></sup></p>
      <table>
        <thead>
          <tr><th>Sistem</th><th>HIT</th><th>HIT parțial</th><th>Coliziune</th><th>Confabulare</th><th>NULL</th></tr>
        </thead>
        <tbody>
          <tr><td>ChatGPT</td><td>13</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>Perplexity</td><td>12</td><td>0</td><td>2</td><td>0</td><td>0</td></tr>
          <tr><td>Claude</td><td>5</td><td>1</td><td>2</td><td>0</td><td>6</td></tr>
          <tr><td>Gemini</td><td>5</td><td>0</td><td>6</td><td>2</td><td>1</td></tr>
        </tbody>
      </table>
      <p>Aceste valori nu reprezintă un clasament general al platformelor.</p>
      <p>Ele descriu comportamentul observat pentru aceeași entitate, în condițiile și perioada respectivă.</p>
      <p>Din comparație a apărut un fenomen important, denumit în studiu <em>Anchor Dependence</em>: un sistem poate să nu identifice persoana la o interogare generică, dar să o identifice după introducerea unei ancore precum AUMOVIO, inginer sau delamatescu.ro.</p>
      <p>În septembrie, analiza s-a extins către Google Search, Bing și Google AI Mode, pe capturi făcute între 2 și 7 septembrie 2026.<sup><a href="#fn-4">4</a></sup> Au fost identificate și limitări ale procesului experimental, inclusiv formulări diferite ale unor interogări și situații în care anumite capturi nu puteau fi adjudecate cu suficientă încredere.</p>
      <p>O altă lecție a venit chiar din verificarea identității. Unele răspunsuri care asociau numele meu cu un proiect antreprenorial au fost considerate inițial suspecte, deși asocierea era reală.</p>
      <p>Această eroare a arătat că evaluatorul poate greși la fel ca sistemul evaluat.</p>
      <p>O informație neobișnuită nu este, prin acest simplu fapt, falsă. Ea trebuie verificată.</p>
      <p>Toate aceste rezultate, cu dovezile lor, sunt în <a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul de caz Tabula Rasa</a>.</p>

      <h2 id="3-f3-extinderea-si-standardizarea-masurarii">3. F3: extinderea și standardizarea măsurării</h2>
      <p>F3 s-a desfășurat între 18 și 21 octombrie 2026.</p>
      <p>Cele nouă suprafețe urmărite au fost Google Search, Bing Search, Google AI Mode, ChatGPT, Claude, Microsoft Copilot, Gemini, Perplexity și Google AI Overviews.</p>
      <p>Am păstrat cele 14 interogări canonice (Q01–Q14), grupate în întrebări de identitate, de locație, de dezambiguizare și interogări care conțin ancore de identitate.</p>
      <p>Acest lucru este necesar deoarece răspunsul la întrebarea „Cine este Alex Matescu?” nu măsoară exact același comportament ca răspunsul la „Alex Matescu AUMOVIO” sau „Cine este în spatele delamatescu.ro?”.</p>
      <p>În F3, protocolul a prevăzut o fereastră incognito nouă pentru fiecare interogare, cu cookie-urile neesențiale refuzate. La asistenții la care am rulat autentificat, fiecare interogare a pornit într-o conversație temporară nouă. Starea de autentificare și modelul afișat au fost consemnate pentru fiecare captură.<sup><a href="#fn-1">1</a></sup></p>
      <table>
        <thead>
          <tr><th>Suprafață</th><th>Data capturilor</th><th>Autentificare</th><th>Model consemnat</th><th>Execuții</th><th>Capturi</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Search</td><td>18 oct. 2026</td><td>nelogat</td><td>nu se aplică</td><td>14</td><td>77</td></tr>
          <tr><td>Bing Search</td><td>18 oct. 2026</td><td>nelogat</td><td>nu se aplică</td><td>14</td><td>93</td></tr>
          <tr><td>Google AI Mode</td><td>19 oct. 2026</td><td>nelogat</td><td>neafișat</td><td>14</td><td>19</td></tr>
          <tr><td>ChatGPT</td><td>19 oct. 2026</td><td>nelogat</td><td>neafișat</td><td>14</td><td>17</td></tr>
          <tr><td>Claude</td><td>19 oct. 2026</td><td>logat, chat temporar</td><td>Claude Sonnet 5.5 (Medium)</td><td>14</td><td>14</td></tr>
          <tr><td>Copilot</td><td>20 oct. 2026</td><td>logat, chat temporar</td><td>Copilot Auto</td><td>15</td><td>15</td></tr>
          <tr><td>Gemini</td><td>21 oct. 2026</td><td>logat, conversație temporară</td><td>Gemini Automat</td><td>16</td><td>16</td></tr>
          <tr><td>Perplexity</td><td>21 oct. 2026</td><td>mixt: nelogat la Q01–Q04, Q07, Q08; logat în rest</td><td>neafișat</td><td>14</td><td>27</td></tr>
          <tr><td>Google AI Overviews</td><td>21 oct. 2026</td><td>nelogat</td><td>neafișat</td><td>14</td><td>15</td></tr>
        </tbody>
      </table>
      <p>Contul folosit la autentificare a fost Ichnometria.</p>
      <p>Aceste condiții nu sunt perfect echivalente. Ele reprezintă o limită explicită a comparației între platforme și trebuie analizate separat atunci când comparăm F3 cu măsurătorile anterioare.</p>

      <h2 id="4-ce-am-observat-despre-google-si-bing">4. Ce am observat despre Google și Bing</h2>
      <p>Unul dintre cele mai interesante fenomene consemnate în F3 nu privește răspunsul final, ci comportamentul interfeței de căutare.</p>
      <p>În Google Search, mai multe interogări au fost reformulate automat către varianta „Alex Mateescu”. Pentru a păstra numele urmărit, a fost necesară selectarea manuală a formulării originale. Indexul de dovezi marchează reformularea la 9 din cele 14 interogări (Q01–Q06 și Q09–Q11), pe baza jurnalului rulării, coroborat în majoritatea capturilor de parametrul <code>nfpr=1</code> din URL. Ecranul cu rezultatele reformulate nu a fost capturat.</p>
      <p>Prin urmare, două comportamente trebuie separate: interpretarea inițială a interogării de către motor și rezultatele obținute după corectarea manuală.</p>
      <p>Fără această distincție, o analiză ulterioară poate confunda rezultatele căutării pentru două forme diferite ale numelui.</p>
      <p>Pentru Q12, „delamatescu.ro”, interogarea a fost introdusă pe google.ro, nu în bara de adrese, pentru că browserul ar fi deschis direct site-ul.</p>
      <p>În Bing au fost consemnate reformulări și utilizarea prefixului „+” în două interogări: Q07, Alexandru Matescu, și Q14, Alex Matescu LinkedIn. În ambele cazuri Bing a propus inițial forma „Mateescu”, iar după selectarea manuală a formei originale a refăcut căutarea ca „+Alexandru Matescu” și „+Alex Matescu LinkedIn”.</p>
      <p>Au apărut și anomalii ale paginării, la Q09 și Q14. Trecerea de la prima la a doua pagină nu a produs întotdeauna continuarea logică a rezultatelor afișate anterior.</p>
      <p>Acest comportament contează dacă dorim să măsurăm prezența unei entități în primele zece, douăzeci sau treizeci de rezultate.</p>
      <p>Într-o astfel de situație, nu putem presupune că rezultatele paginii a doua aparțin aceleiași ordonări stabile ca cele de pe prima pagină.</p>
      <p><strong>Concluzia metodologică:</strong> trebuie să înregistrăm separat interogarea introdusă, interogarea efectiv executată și eventualele intervenții de corectare.</p>

      <h2 id="5-conversatiile-temporare-si-problema-conditiilor-de-sesiune">5. Conversațiile temporare și problema condițiilor de sesiune</h2>
      <p>Rularea într-o fereastră incognito nu înseamnă automat o sesiune complet lipsită de context.</p>
      <p>În cazul Claude, Copilot și Gemini, protocolul F3 a folosit autentificarea în contul Ichnometria, împreună cu conversații temporare.</p>
      <p>În Perplexity, situația a fost mai complexă.</p>
      <p>Primele interogări au fost executate fără autentificare, dar platforma a solicitat ulterior conectarea. Au fost consemnate închideri de sesiune, reluări și schimbări ale stării de autentificare. La Q13, Perplexity a început să genereze răspunsul, s-a blocat temporar și și-a revenit singur.</p>
      <p>În Copilot, una dintre interogări (Q12) a fost introdusă accidental într-o conversație persistentă. Incidentul a fost observat, iar interogarea a fost reluată.</p>
      <p>În Gemini, prima interogare a necesitat trei încercări după probleme legate de funcționarea conversațiilor temporare și de istoricul sesiunii.</p>
      <p>Aceste incidente nu trebuie șterse din istoria experimentului. Ele sunt relevante pentru evaluarea validității evidențelor. Cele trei încercări afectate (Copilot Q12 și primele două încercări Gemini Q01) sunt păstrate în pachet, marcate ca suspecte de contaminare și excluse din baza curată de analiză. Reluările lor sunt cele care intră în analiză.</p>
      <p>Totuși, documentarea incidentului nu garantează automat că rezultatul final este perfect comparabil. Fiecare caz trebuie evaluat în funcție de configurația efectivă în care a fost produs răspunsul păstrat.</p>

      <h2 id="6-cand-sistemul-raspunde-in-alta-limba">6. Când sistemul răspunde în altă limbă</h2>
      <p>În mai multe platforme, interogările redactate în română au produs răspunsuri integral sau parțial în engleză.</p>
      <p>Fenomenul a fost consemnat în ChatGPT, Claude, Copilot, Gemini și Perplexity. La adjudecare, din câte 14 răspunsuri, au fost în engleză: 7 la Claude, 6 la Perplexity, 5 la ChatGPT (plus unul parțial), 3 la Gemini (plus unul parțial) și 2 la Copilot. Google Search, Bing și Google AI Mode au răspuns în română la toate interogările.</p>
      <p>Acest rezultat introduce o nouă dimensiune de analiză.</p>
      <p>Un sistem poate identifica persoana corectă, dar poate răspunde într-o limbă diferită de cea a interogării. Identificarea entității și adecvarea lingvistică nu reprezintă același lucru.</p>
      <p>Din perspectiva utilizatorului, cele două influențează experiența finală. Din perspectiva măsurării, trebuie clasificate separat.</p>
      <p>Un răspuns corect în engleză nu ar trebui transformat într-un eșec de entity resolution doar pentru că întrebarea a fost în română.</p>
      <p>În același timp, schimbarea limbii poate deveni un indicator secundar pentru studiul modului în care un sistem selectează și prezintă informația.</p>

      <h2 id="7-google-ai-overviews-un-rezultat-absent-nu-inseamna-o-entitate-necunoscuta">7. Google AI Overviews: un rezultat absent nu înseamnă o entitate necunoscută</h2>
      <p>În fereastra F3, protocolul consemnează afișarea Google AI Overviews pentru două interogări: Q12, „delamatescu.ro”, și Q13, „Cine este în spatele delamatescu.ro?”.</p>
      <p>Pentru celelalte interogări, protocolul notează că nu a fost afișat un astfel de rezumat.</p>
      <p>Această constatare trebuie interpretată cu atenție.</p>
      <p>Absența unei prezentări AI Overviews nu demonstrează că Google nu deține informații relevante despre persoana căutată. Nu demonstrează nici că entitatea nu este indexată.</p>
      <p>Ea arată numai că, pentru interogarea și condițiile respective, funcția nu a fost afișată în capturile documentate.</p>
      <p>Este o diferență importantă între disponibilitatea informației, recuperarea ei și alegerea platformei de a genera un anumit tip de răspuns.</p>

      <p>Din acest motiv, la adjudecare, cele 12 execuții fără rezumat nu sunt NULL, ci primesc statutul <strong>NEAFIȘAT</strong>: suprafața nu a afișat elementul de răspuns măsurat. Statutul nu primește punctaj și nu intră la numitorul niciunei rate. L-am introdus în taxonomia normativă, în <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 §13</a>, de la versiunea 1.4.0. Cele două rezumate afișate (Q12 și Q13) identifică persoana și citează delamatescu.ro.</p>

      <h2 id="8-identitatea-textuala-si-identitatea-vizuala">8. Identitatea textuală și identitatea vizuală</h2>
      <p>Una dintre problemele documentate anterior în Tabula Rasa privește nepotrivirea dintre informația textuală și imaginile prezentate de un sistem AI.</p>
      <p>Fenomenul a reapărut în observațiile de protocol pentru Perplexity F3.</p>
      <p>La interogarea Q06, „Alex Matescu”, au fost consemnate imagini reprezentând persoane diferite, niciuna identificată de operator ca fiind persoana urmărită.</p>
      <p>La adjudecare am verificat fotografiile: niciuna nu mă reprezintă. Aceeași eroare apare la Perplexity Q11 și la ChatGPT Q09, unde o fotografie a altei persoane e pusă chiar lângă numele „Alex Matescu”. În toate trei cazurile, textul identifică persoana corect.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-f3-cand-internetul-incearca-sa-afle-cine-esti/fig_f3_perplexity_imagini_alte_persoane.jpg" alt="Perplexity F3 Alex Matescu imagini" loading="lazy" />
        <figcaption>Fig. 1 — Perplexity, F3, <code>Alex Matescu</code> (AM-F3-E261). Textul identifică persoana corect, iar sursa principală e delamatescu.ro. Niciuna dintre fotografiile afișate nu îl reprezintă pe subiect (confirmat de el). Verdict pe text: HIT-C; asocierea vizuală e greșită.</figcaption>
      </figure>
      <p>Ea ridică însă o întrebare de cercetare importantă:</p>
      <p><strong>Poate un sistem să construiască o descriere textuală corectă și, în același răspuns, să prezinte imagini care aparțin altor persoane?</strong></p>
      <p>O evaluare care verifică exclusiv textul poate rata acest tip de eroare.</p>
      <p>Din acest motiv, studiul trebuie să urmărească separat corectitudinea textuală, sursele citate și asocierea vizuală a entității.</p>

      <h2 id="9-de-ce-293-de-capturi-nu-reprezinta-293-de-raspunsuri">9. De ce 293 de capturi nu reprezintă 293 de răspunsuri</h2>
      <p>Arhiva F3 include 293 de capturi.</p>
      <p>Acestea nu sunt însă 293 de răspunsuri independente.</p>
      <p>În Google Search și Bing, mai multe capturi pot documenta o singură interogare, mai multe poziții din aceeași pagină sau continuarea rezultatelor. Cele 93 de capturi din Bing, de exemplu, documentează doar 14 execuții.</p>
      <p>În alte platforme, o conversație poate necesita mai multe imagini pentru a documenta integral răspunsul.</p>
      <p>În total, cele 293 de capturi corespund la 129 de execuții. 47 dintre ele au nevoie de mai multe capturi și acoperă împreună 211 imagini. Baza curată de analiză are 126 de execuții, adică exact 14 interogări pe 9 suprafețe. Celelalte 3 sunt încercările afectate de incidentele de sesiune.<sup><a href="#fn-1">1</a></sup></p>
      <p>Pentru a evita o interpretare statistică greșită, unitatea de analiză trebuie să fie definită înainte de calculul rezultatelor agregate.</p>
      <p>Captura este o dovadă. Interogarea executată într-o anumită sesiune este o unitate experimentală. Observația este interpretarea documentată a informației vizibile în acele capturi, iar măsurarea agregă observațiile eligibile conform unei reguli declarate.</p>
      <p>Această separare este esențială pentru a nu confunda volumul documentației cu numărul efectiv de măsurători.</p>

      <h2 id="10-ce-putem-compara-intre-t0-f1-f2-si-f3">10. Ce putem compara între T0, F1, F2 și F3</h2>
      <p>Experimentul urmărește patru puncte de măsurare:</p>
      <ul>
        <li>T0, între 2 și 17 iulie 2026;<sup><a href="#fn-2">2</a></sup></li>
        <li>F1, între 4 și 6 august 2026;<sup><a href="#fn-3">3</a></sup></li>
        <li>F2, între 2 și 7 septembrie 2026;<sup><a href="#fn-4">4</a></sup></li>
        <li>F3, între 18 și 21 octombrie 2026.<sup><a href="#fn-1">1</a></sup></li>
      </ul>
      <p>Comparația longitudinală trebuie să urmărească identificarea corectă a persoanei, dependența de ancore, coliziunile, confabulările, lipsa răspunsului, calitatea surselor și validitatea condițiilor de execuție.</p>
      <p>Nu toate observațiile istorice sunt însă direct comparabile.</p>
      <p>În timpul dezvoltării studiului au fost identificate diferențe între formulările interogărilor, stările de autentificare, modurile de conversație și modalitățile de capturare.</p>
      <p>Aceste diferențe trebuie păstrate în analiză.</p>
      <p>O schimbare observată între două ferestre poate reflecta evoluția informațiilor disponibile public, schimbarea comportamentului platformei, condiții diferite de sesiune sau o combinație a acestora.</p>
      <p>Nu putem atribui automat o eventuală îmbunătățire unei optimizări efectuate pe site.</p>

      <h2 id="11-ce-inseamna-progresul-intr-un-experiment-de-ai-visibility">11. Ce înseamnă progresul într-un experiment de AI Visibility</h2>
      <p>Este tentant să considerăm că un experiment a avut succes dacă o persoană apare mai des în răspunsurile AI.</p>
      <p>Dar apariția frecventă nu este suficientă.</p>
      <p>O persoană poate fi menționată des și identificată greșit. Poate fi recunoscută doar atunci când utilizatorul cunoaște deja domeniul personal sau compania la care lucrează. Poate fi descrisă corect în text și reprezentată greșit vizual.</p>
      <p>Prin urmare, progresul trebuie analizat în mai multe dimensiuni.</p>
      <p>Ne interesează dacă sistemele identifică persoana fără ancore, dacă diferențiază identitățile apropiate, dacă asociază corect sursele și dacă rezultatele sunt suficient de consistente pentru a susține o observație longitudinală.</p>
      <p>La fel de important, ne interesează dacă putem verifica fiecare concluzie.</p>
      <p>Un proces de măsurare mai bine documentat reprezintă un progres metodologic real. Nu reprezintă, prin el însuși, dovada că entitatea a devenit mai vizibilă.</p>

      <h2 id="12-ce-nu-demonstreaza-f3">12. Ce nu demonstrează F3</h2>
      <p>Această fereastră nu permite, prin simpla existență a arhivei, concluzia că toate platformele au devenit mai bune la identificarea entității.</p>
      <p>Nu demonstrează că sistemele AI au învățat permanent cine este Alex Matescu.</p>
      <p>Nu demonstrează că informațiile de pe delamatescu.ro au fost utilizate la antrenarea modelelor și nici că o intervenție specifică a determinat apariția unui anumit răspuns.</p>
      <p>Arhivele surprind comportamente observabile în condiții documentate.</p>
      <p>Explicațiile despre cauze rămân ipoteze până când pot fi susținute prin dovezi suplimentare sau printr-un design experimental adecvat.</p>

      <h2 id="13-ce-arata-adjudecarea-f3">13. Ce arată adjudecarea F3</h2>

      <p>Fiecare dintre cele 126 de execuții a primit un verdict din taxonomia Tabula Rasa, pe baza capturilor, după reguli scrise înainte de citirea lor.<sup><a href="#fn-8">8</a></sup> Faptele biografice neobișnuite și verdictele de graniță le-am confirmat eu, ca să nu repet eroarea „Taste the Corn” din septembrie.</p>

      <table>
        <thead>
          <tr><th>Suprafață</th><th>HIT</th><th>HIT-C</th><th>HIT parțial</th><th>COLIZIUNE (dezambiguizată corect)</th><th>COLIZIUNE</th><th>NULL</th><th>NEAFIȘAT</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Search</td><td>11</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td>Bing</td><td>11</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td>Google AI Mode</td><td>0</td><td>3</td><td>1</td><td>2</td><td>5</td><td>3</td><td>0</td></tr>
          <tr><td>Google AI Overviews</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>0</td><td>12</td></tr>
          <tr><td>ChatGPT</td><td>2</td><td>10</td><td>0</td><td>0</td><td>0</td><td>2</td><td>0</td></tr>
          <tr><td>Claude</td><td>0</td><td>2</td><td>0</td><td>0</td><td>0</td><td>12</td><td>0</td></tr>
          <tr><td>Copilot</td><td>0</td><td>8</td><td>2</td><td>0</td><td>1</td><td>3</td><td>0</td></tr>
          <tr><td>Gemini</td><td>0</td><td>10</td><td>1</td><td>1</td><td>1</td><td>1</td><td>0</td></tr>
          <tr><td>Perplexity</td><td>0</td><td>7</td><td>5</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
        </tbody>
      </table>

      <p>HIT-C înseamnă o identificare care citează explicit delamatescu.ro. F3 nu are nicio confabulare. Tabelul descrie o singură entitate, un singur set de interogări și o singură fereastră; nu este un clasament al platformelor.</p>

      <p>Ce reiese din matrice:</p>

      <ul>
        <li><strong>Căutarea clasică identifică persoana la 11 din 14 interogări</strong>, atât pe Google, cât și pe Bing. Pe Google, verdictele sunt date pe rezultatele pentru „Matescu”, după ce operatorul a refuzat corectura spre „Mateescu”.</li>
        <li><strong>Mai mulți asistenți identifică persoana fără ancoră.</strong> ChatGPT, Copilot, Gemini și Perplexity răspund corect la „Cine este Alex Matescu?”. Claude nu identifică persoana decât la interogările cu domeniul, iar la 5 interogări n-a căutat deloc pe web.</li>
        <li><strong>Interogarea de dezambiguizare produce o coliziune nouă.</strong> La „Alex Matescu vs Alexandru Mateescu avocat”, Copilot, Gemini, Google AI Mode și Perplexity afirmă că cele două nume desemnează aceeași persoană. Doar ChatGPT le separă corect.</li>
        <li><strong>Ancora AUMOVIO a slăbit.</strong> Google AI Mode răspunde că nu există o legătură publică între Alex Matescu și AUMOVIO, iar Copilot și Perplexity spun că nu o pot confirma.</li>
        <li><strong>Interogările pe domeniu sunt cele mai stabile.</strong> „Cine este în spatele delamatescu.ro?” e identificată pe toate cele nouă suprafețe.</li>
      </ul>

      <figure>
        <img src="/images/lab/tabula-rasa-f3-cand-internetul-incearca-sa-afle-cine-esti/fig_f3_ai_mode_fuziune_avocat.jpg" alt="Google AI Mode F3 Alex Matescu vs Alexandru Mateescu avocat" loading="lazy" />
        <figcaption>Fig. 2 — Google AI Mode, F3, <code>Alex Matescu vs Alexandru Mateescu avocat</code> (AM-F3-E180). Sistemul afirmă că cele două nume „se referă la aceeași persoană” și descrie doar avocatul. Copilot, Gemini și Perplexity fac aceeași afirmație la această interogare. Verdict: COLIZIUNE.</figcaption>
      </figure>

      <p>La Q12, pe cei cinci asistenți AI, interogarea introdusă a fost „http://delamatescu.ro/”, nu „delamatescu.ro”. Abaterea e notată în matrice; ChatGPT n-a identificat persoana la această formulare.</p>

      <p>Matricea, cu identificatorul fiecărei execuții și Evidence ID-urile capturilor, și regulile de adjudecare sunt publicate în pachetul de dovezi (secțiunea „Arhiva de dovezi”). Comparația cu F1 și F2, suprafață cu suprafață, și limitele ei sunt în <a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul de caz</a>, secțiunile 28–32. Pe scurt: ChatGPT rămâne stabil față de F1, Gemini se îmbunătățește cel mai mult, Google AI Mode are un recul față de F2, iar Copilot e măsurat acum pentru prima dată.</p>

      <h2 id="concluzie">Concluzie</h2>
      <p>Tabula Rasa a început cu o întrebare personală: cine sunt eu pentru internet?</p>
      <p>Pe parcurs, întrebarea a devenit mai interesantă.</p>
      <p>Am descoperit că există diferențe între a avea informații publice, a fi găsit, a fi identificat corect și a fi reprezentat fidel de un sistem AI.</p>
      <p>Am descoperit și că instrumentele de măsurare pot produce propriile erori: interogări reformulate, sesiuni contaminate, capturi incomplete, asocieri interpretate greșit și comparații aparent precise, dar metodologic inegale.</p>
      <p>La F3, cel mai important câștig nu e doar un rezultat numeric, ci capacitatea mai bună de a identifica și declara aceste limite.</p>

      <p>Cu observațiile F3 adjudecate, pot arăta nu doar ce răspunsuri au fost generate, ci și ce s-a schimbat față de punctele anterioare, în ce condiții și cu ce nivel de încredere. Unele schimbări sunt bune: mai multe sisteme mă identifică fără indicii suplimentare. Altele nu: patru sisteme declară acum că eu și un avocat cu nume apropiat suntem aceeași persoană.</p>
      <p>Aceasta este diferența dintre a colecționa capturi despre propria identitate și a construi un studiu longitudinal care poate fi verificat de altcineva.</p>

      <h2 id="arhiva-de-dovezi-si-cum-o-verifici">Arhiva de dovezi și cum o verifici</h2>
      <p>Pachetul <strong>Alex Matescu — F3 Evidence Archive v1.0</strong> este publicat ca <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">release pe GitHub</a>, la 22 octombrie 2026. Conține arhiva capturilor, indexul de dovezi (un rând pentru fiecare captură, cu interogarea, suprafața, sesiunea, starea de autentificare, reformularea observată și statutul în analiză), manifestul conversiei PNG → WebP, un README și manifestul SHA-256. Jurnalul rulării este inclus în arhivă.<sup><a href="#fn-1">1</a></sup></p>
      <p>Capturile au fost convertite în WebP la calitate 80 înainte de calculul hash-urilor, conform <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">standardului de dovezi AVL-200</a>.<sup><a href="#fn-6">6</a></sup> De aceea pachetul are 294 de elemente: 293 de capturi și jurnalul rulării. Integritatea se verifică din directorul pachetului descărcat:</p>
      <pre><code>shasum -a 256 -c alex-matescu_F3_sha256sums_v1.0.txt</code></pre>
      <p>SHA-256 al arhivei: <code>73aaa8a74b9cdab5cf03c2e8a95471b2b451ada756f9b70db16035db3d2fc952</code>.</p>
      <p>F3 este primul pachet al acestei entități publicat sub convenția T0 / F1 … Fn. Pachetele anterioare au fost publicate înainte de formalizarea convenției și își păstrează etichetele originale:</p>
      <table>
        <thead>
          <tr><th>Release pe GitHub</th><th>Punct de măsurare</th><th>Fereastra capturilor</th></tr>
        </thead>
        <tbody>
          <tr><td><a href="${RELEASE_BASE}/evidence-alex-matescu-t0-v1.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-t0-v1.0</code></a></td><td>T0 (baseline)</td><td>2–17 iulie 2026</td></tr>
          <tr><td><a href="${RELEASE_BASE}/evidence-alex-matescu-t0-v2.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-t0-v2.0</code></a></td><td>F1</td><td>4–6 august 2026</td></tr>
          <tr><td><a href="${RELEASE_BASE}/evidence-alex-matescu-t0-v3.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-t0-v3.0</code></a></td><td>F2</td><td>2–7 septembrie 2026</td></tr>
          <tr><td><a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-f3-v1.0</code></a></td><td>F3</td><td>18–21 octombrie 2026</td></tr>
        </tbody>
      </table>
      <p>Identificatorii capturilor F3 încep de la <code>AM-F3-E001</code> și nu continuă secvența <code>AM-T0-E###</code> a pachetelor anterioare.</p>

      <p>Adjudecarea e publicată separat, ca versiune de metadate v1.2 a aceluiași pachet: <a href="${RELEASE_BASE}/evidence-alex-matescu-f3-v1.0-m1.2" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-f3-v1.0-m1.2</code></a>. Conține aceeași arhivă (același SHA-256), plus matricea de adjudecare (<code>alex-matescu_F3_adjudication_v1.2.csv</code>) și regulile ei (<code>alex-matescu_F3_adjudication-rules_v1.2.md</code>). Release-ul v1.0 nu a fost modificat.<sup><a href="#fn-8">8</a></sup></p>

      <h2 id="surse-si-metodologie">Surse și metodologie</h2>
      <p>Studiul este realizat în cadrul AI Visibility Lab, folosind principiile <a href="/lab/introducere">AVL-001</a>, cadrul <a href="/lab/metodologie">AVL-202</a>, standardul de dovezi <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200</a> și specificația Tabula Rasa <a href="/lab/metodologie/tabula-rasa-f0">AVL-201</a>.<sup><a href="#fn-7">7</a></sup></p>
      <p>Cifrele despre F3 provin din pachetul de dovezi F3 v1.0, verificat la 23 octombrie 2026: README, indexul de dovezi și jurnalul rulării. Verdictele, limba răspunsurilor și verificarea fotografiilor provin din matricea de adjudecare publicată în metadata v1.2 a pachetului. Condițiile de rulare și incidentele de sesiune sunt consemnate de operator în jurnalul rulării. Cifrele despre F1 și despre adjudecarea Google, Bing și Google AI Mode provin din studiul de caz Tabula Rasa. Sunt păstrate distinct data capturilor, versiunea arhivei și data publicării. Fereastra incognito și conversația temporară nu garantează absența personalizării sau a localizării.</p>
      <ol class="avl-footnotes">
        <li id="fn-1">AI Visibility Lab, <strong>Alex Matescu — F3 Evidence Archive v1.0</strong>, release GitHub, publicat la 22 octombrie 2026. <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0</a></li>
        <li id="fn-2">AI Visibility Lab, <strong>Alex Matescu — T0 Evidence Archive v1.0</strong> (T0), release GitHub. <a href="${RELEASE_BASE}/evidence-alex-matescu-t0-v1.0" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v1.0</a></li>
        <li id="fn-3">AI Visibility Lab, <strong>Alex Matescu — T0 Evidence Archive v2.0</strong> (F1), release GitHub. <a href="${RELEASE_BASE}/evidence-alex-matescu-t0-v2.0" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v2.0</a></li>
        <li id="fn-4">AI Visibility Lab, <strong>Alex Matescu — T0 Evidence Archive v3.0</strong> (F2), release GitHub. <a href="${RELEASE_BASE}/evidence-alex-matescu-t0-v3.0" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v3.0</a></li>
        <li id="fn-5">AI Visibility Lab, <strong>Când internetul nu știe cine ești: un studiu longitudinal despre identitate în Search și AI Search</strong>, studiul de caz #001. <a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz</a></li>
        <li id="fn-6">AI Visibility Lab, <strong>AVL-200 — Standardul de dovezi, măsurare și trasabilitate</strong>, v2.0.0. <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">/lab/metodologie/standard-dovezi-masurare-trasabilitate</a></li>
        <li id="fn-7">AI Visibility Lab, <strong>AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</strong>, v1.4.0. <a href="/lab/metodologie/tabula-rasa-f0">/lab/metodologie/tabula-rasa-f0</a></li>
        <li id="fn-8">AI Visibility Lab, <strong>Alex Matescu — F3 Evidence Archive v1.0 (metadata v1.2)</strong>, release GitHub cu matricea de adjudecare. <a href="${RELEASE_BASE}/evidence-alex-matescu-f3-v1.0-m1.2" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0-m1.2</a></li>
      </ol>
      <h3 id="nota-de-volatilitate">Notă de volatilitate</h3>
      <p>Rezultatele motoarelor de căutare și răspunsurile AI depind de momentul rulării, de versiunea modelului, de cont, de personalizare și de localizare. Observațiile din F3 descriu ce au afișat suprafețele între 18 și 21 octombrie 2026 și nu se pot reproduce identic.</p>

      <p><em>Statutul acestei ediții: raport de etapă F3, cu adjudecarea integrală a celor 126 de execuții. Comparația longitudinală completă e în studiul de caz Tabula Rasa.</em></p>
      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 23 octombrie 2026.</em></p>
`;
