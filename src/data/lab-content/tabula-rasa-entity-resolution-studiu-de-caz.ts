import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 * Sursă: src/content/studii de caz/01. Alex Matescu/tabula-rasa-entity-resolution-studiu-de-caz.md
 */
export const tabulaRasaEntityResolutionStudiuDeCazMeta: LabArticleMeta = {
  title:
    "Când internetul nu știe cine ești: un studiu longitudinal despre identitate în Search și AI Search",
  description:
    "Studiu longitudinal Tabula Rasa despre modul în care ChatGPT, Claude, Gemini, Perplexity, Google Search, Bing și Google AI Mode rezolvă identitatea Alex Matescu în patru puncte de măsurare (T0/F0, F1, F2, F3), cu dovezi publicate, matricea F3 adjudecată pe nouă suprafețe, coliziuni de entitate, Anchor Dependence și limite metodologice.",
  canonical:
    "https://delamatescu.ro/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz",
  category: "Entities & Citations",
  // "Analiză de caz" e valoarea cea mai apropiată din LabArticleType — câmp
  // inert pentru un Case Study (nu se afișează nicăieri; LabArticleIndex,
  // singurul consumator vizual al lui `articleType`, ia datele exclusiv din
  // `labArticleMeta`, niciodată din `labCaseStudyMeta`). LabArticleMeta e
  // reutilizat aici doar pentru `buildArticleJsonLd`, nu pentru taxonomia de
  // articol.
  articleType: "Analiză de caz",
  datePublished: "2026-09-04T09:06:00+03:00",
  dateModified: "2026-10-23",
  lastReviewed: "2026-10-23",
  about: [
    { name: "Alex Matescu" },
    { name: "Entity resolution" },
    { name: "AI Visibility" },
    { name: "ChatGPT" },
    { name: "Claude" },
    { name: "Gemini" },
    { name: "Perplexity" },
    { name: "Google" },
    { name: "Bing" },
    { name: "Google AI Overviews" },
    { name: "Google AI Mode" },
  ],
  keywords: [
    "AI Visibility",
    "Tabula Rasa",
    "entity resolution",
    "AI Search",
    "identitate digitală",
    "dezambiguizare entități",
    "Anchor Dependence",
    "ChatGPT",
    "Claude",
    "Gemini",
    "Perplexity",
    "Google",
    "Bing",
    "Google AI Overviews",
    "Google AI Mode",
    "Microsoft Copilot",
    "Alex Matescu",
  ],
  citations: [
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
      name: "AI Visibility Lab — Alex Matescu, F3 Evidence Archive v1.0",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0",
    },
    {
      name: "AI Visibility Lab — Alex Matescu, F3 Evidence Archive v1.0 (metadata v1.2, adjudecare)",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0-m1.2",
    },
    {
      name: "AI Visibility Lab — AVL-201, Tabula Rasa F0: Baseline Measurement Specification",
      url: "https://delamatescu.ro/lab/metodologie/tabula-rasa-f0",
    },
    {
      name: "AI Visibility Lab — Când internetul încearcă să afle cine ești: ce arată a patra măsurare Tabula Rasa",
      url: "https://delamatescu.ro/lab/articole/tabula-rasa-f3-cand-internetul-incearca-sa-afle-cine-esti",
    },
  ],
  faq: [],
};

/** Conținutul propriu-zis al studiului de caz — fără metadate tehnice. */
export const tabulaRasaEntityResolutionStudiuDeCazHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-09-04T09:06:00+03:00">4 septembrie 2026</time> · Actualizat: <time datetime="2026-10-23">23 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-23">23 octombrie 2026</time></p>

      <table>
        <tbody>
        <tr><th scope="row">Studiu de caz</th><td>#001 — Alex Matescu</td></tr>
        <tr><th scope="row">Experiment</th><td>Tabula Rasa</td></tr>
        <tr><th scope="row">Status</th><td>În desfășurare</td></tr>
        <tr><th scope="row">Faze analizate</th><td>T0/F0 → F1 → F2 → F3</td></tr>
        <tr><th scope="row">Obiect de studiu</th><td>Rezoluția unei entități personale în motoare de căutare și sisteme AI</td></tr>
        </tbody>
      </table>

      <blockquote>
        <p><strong>Evidence-backed case study.</strong> Rezultatele experimentale prezentate în această pagină sunt susținute, acolo unde evidence set-ul permite, prin capturi originale din ferestrele Tabula Rasa. Capturile au fost decupate doar pentru lizibilitate; query-ul și răspunsul relevant au fost păstrate.</p>
      </blockquote>


      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#punctele-de-masurare-pe-scurt">Punctele de măsurare pe scurt</a></li>
          <li><a href="#rezumat">Rezumat</a></li>
          <li><a href="#1-de-la-vizibilitate-la-identitate">1. De la vizibilitate la identitate</a></li>
          <li><a href="#2-ipoteza-tabula-rasa">2. Ipoteza Tabula Rasa</a></li>
          <li><a href="#3-query-set-ul">3. Query Set-ul</a></li>
          <li><a href="#4-taxonomia-rezultatelor">4. Taxonomia rezultatelor</a></li>
          <li><a href="#5-t0-f0-punctul-de-pornire">5. T0/F0 — punctul de pornire</a></li>
          <li><a href="#6-f1-prima-fereastra-in-care-diferentele-dintre-sisteme-devin-foarte-clare">6. F1 — prima fereastră în care diferențele dintre sisteme devin foarte clare</a></li>
          <li><a href="#7-chatgpt-rezolutie-puternica-inclusiv-fara-ancora">7. ChatGPT — rezoluție puternică inclusiv fără ancoră</a></li>
          <li><a href="#8-claude-informatia-exista-dar-query-ul-trebuie-sa-o-activeze">8. Claude — informația există, dar query-ul trebuie să o activeze</a></li>
          <li><a href="#9-gemini-de-la-identitate-gresita-la-identificare-corecta-printr-un-singur-cuvant">9. Gemini — de la identitate greșită la identificare corectă printr-un singur cuvânt</a></li>
          <li><a href="#10-coliziunea-poate-deveni-mai-grava-decat-simpla-absenta">10. Coliziunea poate deveni mai gravă decât simpla absență</a></li>
          <li><a href="#11-perplexity-textul-poate-fi-corect-iar-imaginea-gresita">11. Perplexity — textul poate fi corect, iar imaginea greșită</a></li>
          <li><a href="#12-query-drift-o-eroare-a-experimentului-nu-a-motorului">12. Query Drift — o eroare a experimentului, nu a motorului</a></li>
          <li><a href="#13-primul-pattern-major-anchor-dependence">13. Primul pattern major: Anchor Dependence</a></li>
          <li><a href="#14-rezultatele-f1-nu-reprezinta-un-clasament-al-modelelor">14. Rezultatele F1 nu reprezintă un clasament al modelelor</a></li>
          <li><a href="#15-pachetul-de-dovezi-v3-0-adjudecarea-google-bing-si-google-ai-mode">15. Pachetul de dovezi v3.0 — adjudecarea Google, Bing și Google AI Mode</a></li>
          <li><a href="#16-bing-rezolutie-puternica-pe-ancore-esec-pe-interogarea-propriului-domeniu">16. Bing — rezoluție puternică pe ancore, eșec pe interogarea propriului domeniu</a></li>
          <li><a href="#17-google-search-un-mecanism-nou-autocorectarea-silentioasa-a-numelui">17. Google Search — un mecanism nou: autocorectarea silențioasă a numelui</a></li>
          <li><a href="#18-google-ai-mode-coliziune-dar-cu-dezambiguizare-explicita-si-corecta">18. Google AI Mode — coliziune, dar cu dezambiguizare explicită și corectă</a></li>
          <li><a href="#19-matricea-extinsa-v3-0">19. Matricea extinsă v3.0</a></li>
          <li><a href="#20-ce-s-a-schimbat-intre-t0-si-f1">20. Ce s-a schimbat între T0 și F1?</a></li>
          <li><a href="#21-de-ce-t0-imperfect-nu-trebuie-eliminat">21. De ce T0 imperfect nu trebuie eliminat</a></li>
          <li><a href="#22-ce-nu-demonstreaza-acest-studiu">22. Ce NU demonstrează acest studiu</a></li>
          <li><a href="#23-ai-visibility-nu-este-o-variabila-binara">23. AI Visibility nu este o variabilă binară</a></li>
          <li><a href="#24-un-model-provizoriu-al-maturitatii-entitatii">24. Un model provizoriu al maturității entității</a></li>
          <li><a href="#25-de-ce-public-si-erorile">25. De ce public și erorile</a></li>
          <li><a href="#26-ce-urmarim-in-urmatoarele-faze">26. Ce urmărim în următoarele faze</a></li>
          <li><a href="#27-concluzie-provizorie">27. Concluzie provizorie</a></li>
          <li><a href="#28-f3-a-patra-masurare-prima-adjudecata-pe-toate-suprafetele">28. F3 — a patra măsurare, prima adjudecată pe toate suprafețele</a></li>
          <li><a href="#29-matricea-f3">29. Matricea F3</a></li>
          <li><a href="#30-ce-se-poate-compara-cu-f1-si-f2">30. Ce se poate compara cu F1 și F2</a></li>
          <li><a href="#31-ce-arata-f3-in-plus">31. Ce arată F3 în plus</a></li>
          <li><a href="#32-concluzie-provizorie-dupa-f3">32. Concluzie provizorie după F3</a></li>
          <li><a href="#33-ce-urmarim-in-f4">33. Ce urmărim în F4</a></li>
          <li><a href="#transparenta-metodologica">Transparență metodologică</a></li>
          <li><a href="#istoricul-versiunilor">Istoricul versiunilor</a></li>
        </ol>
      </nav>
      <h2 id="punctele-de-masurare-pe-scurt">Punctele de măsurare pe scurt</h2>
      <p>Tabula Rasa are, la 23 octombrie 2026, patru puncte de măsurare. Fiecare este o rulare independentă: aceleași 14 interogări, puse din nou, într-o fereastră proprie, cu propriile condiții de sesiune și cu propriul pachet de dovezi. Tabelul de mai jos se actualizează la fiecare fereastră nouă, înaintea oricărei interpretări.</p>
      <table>
        <thead>
          <tr><th></th><th>T0 (baseline)</th><th>F1</th><th>F2</th><th>F3</th></tr>
        </thead>
        <tbody>
          <tr><td>Fereastra capturilor</td><td>2–17 iulie 2026</td><td>4–6 august 2026</td><td>2–7 septembrie 2026</td><td>18–21 octombrie 2026</td></tr>
          <tr><td>Interogări</td><td>14 (Query Set-ul inițial, protocol încă în formare)</td><td>aceleași 14, cu Query Drift la Q09 (secțiunea 12)</td><td>aceleași 14</td><td>aceleași 14; abatere de formulare la Q12 pe asistenții AI (secțiunea 28)</td></tr>
          <tr><td>Suprafețe capturate</td><td>ChatGPT, Claude, Gemini, Perplexity, Google Search, Google AI Mode, Bing, Copilot</td><td>aceleași 8</td><td>aceleași 8</td><td>aceleași 8 + Google AI Overviews</td></tr>
          <tr><td>Dovezi în pachet</td><td>152</td><td>492</td><td>808</td><td>294 (293 de capturi + jurnalul rulării)</td></tr>
          <tr><td>Condiții de sesiune</td><td>consemnate parțial; rulări în zile diferite</td><td>consemnate pe suprafață (secțiunea 6)</td><td>consemnate pe fiecare captură; o parte din capturi, în conturi personale, excluse din baza curată</td><td>fereastră incognito nouă pe interogare; conversații temporare la asistenții logați; consemnate pe fiecare captură (secțiunea 28)</td></tr>
          <tr><td>Ce a fost adjudecat</td><td>descriere calitativă (secțiunea 5)</td><td>ChatGPT, Claude, Gemini, Perplexity (secțiunea 14)</td><td>Google Search, Bing, Google AI Mode (secțiunile 15–19)</td><td>toate cele 9 suprafețe: 126 de execuții (secțiunea 29)</td></tr>
          <tr><td>Pachet de dovezi</td><td><a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v1.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-t0-v1.0</code></a></td><td><a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v2.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-t0-v2.0</code></a></td><td><a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v3.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-t0-v3.0</code></a></td><td><a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-f3-v1.0</code></a> (capturi) și <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0-m1.2" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-f3-v1.0-m1.2</code></a> (capturi + matricea de adjudecare)</td></tr>
        </tbody>
      </table>
      <p>Etichetele pachetelor T0, F1 și F2 sunt cele cu care au fost publicate, înainte de convenția T0 / F1 … Fn; corespondența e în <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 §7.4</a>. Pentru fiecare fereastră nouă se completează aceleași rânduri: fereastra, interogările și abaterile, suprafețele, numărul de dovezi, condițiile de sesiune, ce s-a adjudecat și pachetul publicat.</p>

      <h2 id="rezumat">Rezumat</h2>

      <p>Ce se întâmplă atunci când cauți numele unei persoane pe internet, dar motoarele de căutare și sistemele AI nu au suficiente semnale pentru a stabili cu certitudine despre cine este vorba?</p>

      <p>În cazul experimentului <a href="/lab/metodologie/tabula-rasa-f0">Tabula Rasa</a>, răspunsul inițial a fost că internetul nu avea o reprezentare suficient de stabilă a entității <strong>Alex Matescu</strong>.</p>

      <p>În iulie 2026 am început să documentez longitudinal felul în care aceeași persoană este identificată, diferențiată de persoane cu nume asemănătoare, recuperată din surse și descrisă de sisteme precum ChatGPT, Claude, Gemini și Perplexity, împreună cu motoare de căutare clasice și experiențe AI Search.</p>

      <p>Subiectul experimentului sunt chiar eu.</p>

      <p>Alegerea îmi permite să cunosc identitatea reală care trebuie rezolvată, să controlez o parte dintre sursele primare și să urmăresc în timp cum se modifică ecosistemul informațional din jurul unei singure entități.</p>

      <p>Baseline-ul a arătat o problemă care nu putea fi redusă la simpla „lipsă de vizibilitate”.</p>

      <p>Problema era <a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz"><strong>entity resolution</strong></a>.</p>

      <p>Numele putea conduce către alte persoane, variantele <code>Matescu</code> și <code>Mateescu</code> concurau între ele, iar diferite sisteme puteau construi reprezentări complet diferite pornind de la aceeași întrebare.</p>

      <p>Prima remăsurare arată deja că întrebarea relevantă nu este doar:</p>

      <p><strong>„Apare Alex Matescu în AI?”</strong></p>

      <p>ci și:</p>

      <p><strong>„De cât context are nevoie sistemul pentru a înțelege despre cine vorbim?”</strong></p>

      <h2 id="1-de-la-vizibilitate-la-identitate">1. De la vizibilitate la identitate</h2>

      <p>Un motor poate găsi un nume fără să înțeleagă corect persoana din spatele lui, poate găsi mai multe persoane, poate favoriza una dintre ele, poate combina informații aparținând unor persoane diferite, poate evita complet răspunsul, sau poate identifica persoana corectă numai atunci când primește un indiciu suplimentar precum orașul, compania, profesia sau domeniul personal.</p>

      <p>Aceste situații nu sunt echivalente, iar din acest motiv, în Tabula Rasa nu mă interesează doar dacă șirul de caractere <strong>„Alex Matescu”</strong> apare într-un rezultat, ci mă interesează dacă sistemul rezolvă entitatea corectă. În cazul experimentului, entitatea urmărită poate fi aproximată printr-un set de relații:</p>

      <p><strong>Alex Matescu → Sibiu → engineering → AUMOVIO → delamatescu.ro</strong></p>

      <p>Aceste relații pot funcționa și ca <strong>ancore de dezambiguizare</strong>.</p>

      <p>Un sistem care recunoaște persoana doar după <code>Alex Matescu AUMOVIO</code> se află într-o situație diferită de unul care ajunge la aceeași persoană după simplul <code>Alex Matescu</code>.</p>

      <h2 id="2-ipoteza-tabula-rasa">2. Ipoteza Tabula Rasa</h2>

      <p>Întrebarea experimentală este:</p>

      <p><strong>Poate o identitate digitală slab definită să devină progresiv mai ușor de identificat de Search și AI Search atunci când ecosistemul informațional din jurul ei devine mai coerent?</strong></p>

      <p>Nu măsor doar prezența, ci urmăresc dacă se modifică:</p>

      <ul>
        <li>rezoluția entității,</li>
        <li>dependența de ancore,</li>
        <li>coliziunile de nume,</li>
        <li>sursele recuperate,</li>
        <li>consistența dintre sisteme,</li>
        <li>stabilitatea dintre rulări.</li>
      </ul>

      <p>O entitate maturizată ar trebui, în ipoteza pe care o testez, să poată fi identificată cu tot mai puțin context, dar aceasta este însă o ipoteză experimentală, nu o concluzie stabilită înainte de măsurare.</p>

      <h2 id="3-query-set-ul">3. Query Set-ul</h2>

      <p>Setul inițial conține 14 interogări care testează patru niveluri diferite ale identității.</p>

      <h3 id="identitate">Identitate</h3>

      <ol>
        <li>Cine este Alex Matescu?</li>
        <li>Ce știi despre Alex Matescu?</li>
        <li>Cu ce se ocupă Alex Matescu?</li>
      </ol>

      <h3 id="locatie">Locație</h3>

      <ol start="4">
        <li>Alex Matescu Sibiu</li>
        <li>Cine este Alex Matescu din Sibiu?</li>
      </ol>

      <h3 id="dezambiguizare">Dezambiguizare</h3>

      <ol start="6">
        <li>Alex Matescu</li>
        <li>Alexandru Matescu</li>
        <li>Alex Mateescu</li>
        <li>Alex Matescu vs Alexandru Mateescu avocat</li>
      </ol>

      <h3 id="ancore">Ancore</h3>

      <ol start="10">
        <li>Alex Matescu AUMOVIO</li>
        <li>Alex Matescu inginer / engineer</li>
        <li>delamatescu.ro</li>
        <li>Cine este în spatele delamatescu.ro?</li>
        <li>Alex Matescu LinkedIn</li>
      </ol>

      <p>Diferența dintre aceste query-uri este esențială. Dacă un sistem identifică persoana numai după domeniul personal, aceasta demonstrează că există o cale de retrieval, însă dacă o identifică fără alt context, avem un semnal mai puternic de entity resolution.</p>

      <h2 id="4-taxonomia-rezultatelor">4. Taxonomia rezultatelor</h2>

      <p>Pentru fiecare combinație dintre query și sistem am folosit o taxonomie care evită reducerea rezultatelor la un simplu da/nu.</p>

      <p><strong>HIT</strong> înseamnă că sistemul identifică entitatea urmărită.</p>

      <p><strong>HIT PARȚIAL</strong> înseamnă că identificarea există, dar este incompletă, fragilă sau insuficient susținută.</p>

      <p><strong>COLIZIUNE</strong> apare atunci când altă entitate devine dominantă sau când mai multe persoane cu nume apropiate intră în același spațiu de răspuns.</p>

      <p><strong>CONFABULARE</strong> este folosit atunci când informația este atribuită greșit entității urmărite sau când sistemul construiește o identitate incorectă.</p>

      <p><strong>NULL</strong> înseamnă că sistemul nu poate identifica suficient entitatea.</p>

      <p><strong>INSTABIL</strong> este rezervat situațiilor în care aceeași interogare produce rezultate suficient de diferite în interiorul aceleiași ferestre.</p>

      <p><strong>NEDETERMINAT</strong> înseamnă că dovezile disponibile nu permit o clasificare suficient de sigură.</p>

      <p><strong>NEADJUDICAT</strong> este folosit pentru un sistem sau un set de capturi pe care nu le pot încă încadra cu suficientă siguranță în taxonomia de mai sus — de obicei din motive de volum, mapping sau configurație de sesiune necontrolată — și pe care prefer să le las neadjudecate decât să public un verdict aproximativ.</p>

      <p><strong>HIT-C</strong> este un HIT însoțit de citarea explicită a sursei canonice (de regulă delamatescu.ro) de către sistem.</p>

      <p><strong>NEAFIȘAT</strong> nu este un verdict, ci un statut: suprafața nu a afișat elementul de răspuns măsurat, de exemplu un rezumat Google AI Overviews care nu apare pentru interogare. Interogarea a rulat, dar nu există un răspuns de clasificat. Execuția rămâne în tabel, nu primește punctaj și nu intră la numitorul niciunei rate. Statutul a fost introdus la adjudecarea F3 (23 octombrie 2026) și e definit normativ în <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 §13</a>, de la versiunea 1.4.0.</p>

      <p>O coliziune (<strong>COLIZIUNE</strong>) nu este un fenomen unic: în unele cazuri sistemul contopește greșit două persoane într-una singură sau alege cu încredere persoana greșită; în altele enumeră separat mai multe persoane reale cu nume apropiate, inclusiv pe cea urmărită, cu informații corecte pentru fiecare, fără să le confunde. A doua situație o marchez explicit ca <strong>coliziune dezambiguizată corect</strong> — nu este echivalentă cu o eroare de rezoluție, dar rămâne o coliziune pentru că mai multe entități ocupă același spațiu de răspuns și cea urmărită nu e singurul rezultat oferit.</p>

      <h2 id="5-t0-f0-punctul-de-pornire">5. T0/F0 — punctul de pornire</h2>

      <p>T0 este baseline-ul real al experimentului, dar nu este și nu trebuie prezentat ca o măsurătoare perfectă. La momentul respectiv, protocolul însuși era încă în formare. Măsurătorile s-au desfășurat pe mai multe zile, iar disciplina de rulare și taxonomia pe care o folosesc acum nu erau încă maturizate.</p>

      <p>Nu voi rescrie retrospectiv această fază pentru a o face să pară mai riguroasă decât a fost.</p>

      <p>Tocmai asta face T0 valoros: arată situația de la care a pornit experimentul.</p>

      <p>Unul dintre fenomenele observate încă din această etapă este <strong>instabilitatea în interiorul aceleiași ferestre de măsurare</strong>.</p>

      <p>Pentru query-ul <code>delamatescu.ro</code>, prima rulare ChatGPT a fost clasificată <code>NULL</code>, în timp ce o rulare ulterioară din aceeași fază a produs un <code>HIT</code>.</p>

      <p>Captura de mai jos este dovada celei de-a doua stări.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_f0_chatgpt_delamatescu_r2.jpg" alt="F0 ChatGPT delamatescu.ro" loading="lazy" />
        <figcaption>Fig. 1 — ChatGPT, F0, rulare ulterioară pentru <code>delamatescu.ro</code>. Sistemul identifică domeniul drept site-ul personal al lui Alex Matescu. Verdictul acestei rulări: HIT. Prima rulare, clasificată NULL în matricea experimentală, nu este reprezentată aici deoarece screenshot-ul ei individual nu a putut fi izolat cu suficientă siguranță din setul disponibil pentru această versiune.</figcaption>
      </figure>

      <p>Diferența este metodologic importantă: un screenshot individual poate demonstra că un rezultat <strong>a existat</strong>, dar nu poate demonstra singur că acel rezultat este <strong>stabil</strong>. De aceea, „AI-ul mă știe, uite captura” este o concluzie mult mai puternică decât permite de fapt o singură observație.</p>

      <h3 id="pachetul-de-dovezi-t0-publicat-ulterior">Pachetul de dovezi T0, publicat ulterior</h3>

      <p>Acest studiu a fost publicat inițial pe 4 septembrie 2026, pe baza observațiilor descrise mai sus. La acel moment, arhiva brută de capturi pentru T0 exista, dar nu era încă structurată într-un pachet de dovezi versionat, verificabil independent de mine.</p>

      <p>Pe 13 septembrie 2026 am formalizat și publicat acest pachet: 152 de capturi/dovezi din T0, acoperind ChatGPT, Claude, Gemini, Perplexity, Google Search, Google AI Mode, Bing și Microsoft Copilot, însoțite de un Evidence Index, un README și un manifest de checksum-uri SHA-256 pentru fiecare fișier. Pachetul este disponibil ca <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v1.0" target="_blank" rel="noopener noreferrer">GitHub Release — Alex Matescu T0 Evidence Archive v1.0</a> (arhivă v1.0 / metadate v1.0).</p>

      <p>Între cele două momente nu s-a schimbat doar starea entității observate, ci și rigoarea procesului prin care documentez dovezile. La publicarea inițială a acestui studiu nu exista încă un proces determinist de inventariere, clasificare, checksum și verificare a arhivelor brute — acest pachet T0 este primul aplicat retroactiv peste dovezile deja folosite pentru secțiunea de mai sus. Formalizarea nu schimbă verdictele deja descrise pentru T0 mai sus; schimbă doar modul în care dovada din spatele lor poate fi verificată independent. Contaminarea de sesiune și anomaliile de arhivare identificate în acest set sunt documentate explicit în pachet, nu ascunse — consecvent cu motivul pentru care public și erorile (secțiunea 25).</p>

      <p>Aceeași regulă se va aplica oricărei formalizări similare pentru fazele următoare: momentul în care un pachet de dovezi este publicat nu coincide neapărat cu momentul în care fereastra de măsurare a avut loc efectiv, iar acest decalaj va fi mereu documentat explicit, nu tăcut.</p>

      <h2 id="6-f1-prima-fereastra-in-care-diferentele-dintre-sisteme-devin-foarte-clare">6. F1 — prima fereastră în care diferențele dintre sisteme devin foarte clare</h2>

      <p>Pentru F1 am putut adjudeca integral setul de 14 query-uri în patru sisteme AI:</p>

      <p><strong>ChatGPT, Claude, Gemini și Perplexity.</strong></p>

      <p>Rezultatele lor nu descriu aceeași realitate.</p>

      <h3 id="pachetul-de-dovezi-f1-publicat-ulterior">Pachetul de dovezi F1, publicat ulterior</h3>

      <p>Rezultatele F1 descrise în această secțiune și în secțiunile 7–14 au fost capturate în perioada 4–6 august 2026. Ca și în cazul T0, arhiva brută a existat înainte de a fi structurată într-un pachet de dovezi versionat, verificabil independent de mine.</p>

      <p>Pe 17 septembrie 2026 am publicat acest pachet: 492 de capturi/dovezi, acoperind cele patru sisteme adjudecate integral în matricea din secțiunea 14 (ChatGPT, Claude, Gemini, Perplexity), precum și Google Search, Google AI Mode, Bing și Microsoft Copilot — sistemele lăsate atunci NEADJUDICAT (adjudecate ulterior, pentru Google/Bing/Google AI Mode, în secțiunile 15–19) — însoțite de un Evidence Index, un README și un manifest de checksum-uri SHA-256 pentru fiecare fișier. Pachetul este disponibil ca <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v2.0" target="_blank" rel="noopener noreferrer">GitHub Release — Alex Matescu T0 Evidence Archive v2.0</a> (arhivă v2.0 / metadate v2.0).</p>

      <p>La fel ca la T0, formalizarea nu schimbă niciun verdict deja descris pentru F1 — schimbă doar modul în care dovada din spatele lor poate fi verificată independent. Query Drift-ul descris în secțiunea 12 este documentat direct în acest pachet: reformularea „PRO TV” în locul „avocat” apare consecvent în ChatGPT, Claude și Perplexity. Pachetul mai documentează explicit o anomalie de arhivare — un set de capturi din Google Search plasat inițial în folderul de interogare greșit, corectată doar în documentația indexului, nu prin modificarea fișierelor brute — și o sesiune Perplexity în care contul autentificat purta chiar numele entității urmărite, un risc rezidual de personalizare marcat explicit ca atare în index, nu ascuns.</p>

      <h3 id="conditiile-de-sesiune-in-f1-adaugat-la-23-octombrie-2026">Condițiile de sesiune în F1 (adăugat la 23 octombrie 2026)</h3>
      <p>La publicarea inițială, condițiile de sesiune din F1 nu erau descrise în studiu. Le adaug din indexul pachetului v2.0, fără să schimb verdictele din secțiunile 7–14:</p>
      <table>
        <thead>
          <tr><th>Suprafață</th><th>Data capturilor</th><th>Autentificare</th><th>Model consemnat</th></tr>
        </thead>
        <tbody>
          <tr><td>ChatGPT</td><td>4 august 2026</td><td>nelogat</td><td>neafișat</td></tr>
          <tr><td>Claude</td><td>5 august 2026</td><td>nelogat</td><td>Claude Opus 4.8 (reasoning: High)</td></tr>
          <tr><td>Gemini</td><td>6 august 2026</td><td>logat</td><td>Gemini Flash</td></tr>
          <tr><td>Perplexity</td><td>6 august 2026</td><td>logat, cu un cont care purta numele entității</td><td>neafișat</td></tr>
          <tr><td>Copilot</td><td>6 august 2026</td><td>neconsemnată</td><td>Copilot Smart</td></tr>
          <tr><td>Google Search, Bing</td><td>4 august 2026</td><td>nelogat</td><td>nu se aplică</td></tr>
          <tr><td>Google AI Mode</td><td>5 august 2026</td><td>nelogat</td><td>nu se aplică</td></tr>
        </tbody>
      </table>
      <p>Indexul v2.0 nu consemnează separat fereastra privată sau conversația temporară. Sesiunea Perplexity e marcată în index ca suspectă de personalizare.</p>

      <h2 id="7-chatgpt-rezolutie-puternica-inclusiv-fara-ancora">7. ChatGPT — rezoluție puternică inclusiv fără ancoră</h2>

      <p>ChatGPT prezintă cel mai stabil profil dintre sistemele analizate în F1.</p>

      <p>Pentru query-ul generic <strong>„Cine este Alex Matescu?”</strong>, sistemul ajunge direct la entitatea urmărită și o leagă de Sibiu, engineering, activitatea profesională și delamatescu.ro. Rezultatul se schimbă atunci când numele este modificat în:</p>

      <p><strong>„Alex Mateescu”</strong>, cu dublu „e”.</p>

      <p>În acest caz, sistemul recunoaște că există persoane diferite și începe să trateze explicit coliziunea.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_chatgpt_hit_vs_collision.jpg" alt="ChatGPT HIT versus coliziune" loading="lazy" />
        <figcaption>Fig. 2 — ChatGPT, F1. În stânga, query-ul generic <code>Cine este Alex Matescu?</code> rezolvă direct entitatea urmărită. În dreapta, forma <code>Alex Mateescu</code> activează o coliziune de nume și sistemul separă explicit persoanele. Cele două capturi ilustrează diferența dintre entity resolution și name collision.</figcaption>
      </figure>

      <p>Profilul agregat ChatGPT în F1 este:</p>

      <p><strong>13 HIT / 1 COLIZIUNE.</strong></p>

      <p>Acest lucru nu înseamnă că ChatGPT „cunoaște” entitatea într-un sens uman și nici că informația provine direct dintr-o anumită pagină. Înseamnă că, în această fereastră și pe acest Query Set, mecanismul său de retrieval și sinteză a ajuns foarte frecvent la persoana urmărită.</p>

      <h2 id="8-claude-informatia-exista-dar-query-ul-trebuie-sa-o-activeze">8. Claude — informația există, dar query-ul trebuie să o activeze</h2>

      <p>Claude arată un comportament aproape opus. La query-ul generic:</p>

      <p><strong>„Cine este Alex Matescu?”</strong></p>

      <p>sistemul spune că nu găsește o persoană publică suficient de clar identificabilă cu acest nume.</p>

      <p>Când primește însă ancora:</p>

      <p><strong>„Alex Matescu AUMOVIO”</strong></p>

      <p>rezultatul se schimbă.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_claude_generic_vs_anchor.jpg" alt="Claude generic versus anchor" loading="lazy" />
        <figcaption>Fig. 3 — Claude, F1. În stânga, query fără ancoră: NULL. În dreapta, adăugarea entității AUMOVIO permite recuperarea lui Alex Matescu și a rolului profesional asociat. Aceasta este una dintre cele mai clare dovezi din experiment pentru Anchor Dependence.</figcaption>
      </figure>

      <p>Acesta este un rezultat important pentru că arată diferența dintre două întrebări:</p>

      <p><strong>Este informația accesibilă sistemului?</strong></p>

      <p>și</p>

      <p><strong>Poate sistemul identifica entitatea fără context suplimentar?</strong></p>

      <p>În cazul Claude, F1 sugerează că răspunsul la prima întrebare este deseori „da”, în timp ce răspunsul la a doua rămâne „nu”.</p>

      <p>Pentru primele șase query-uri generale, verdictul este <code>NULL</code>.</p>

      <p>Când apar ancore precum <code>AUMOVIO</code>, <code>engineer</code> sau <code>delamatescu.ro</code>, entitatea devine recuperabilă.</p>

      <p>Acest comportament îl descriu prin conceptul de:</p>

      <h3 id="anchor-dependence">Anchor Dependence</h3>

      <p>Cu cât un sistem are nevoie de mai multe informații auxiliare pentru a ajunge la persoana corectă, cu atât rezoluția entității este mai dependentă de context.</p>

      <p>Tabula Rasa va urmări dacă această dependență scade în fazele următoare.</p>

      <h2 id="9-gemini-de-la-identitate-gresita-la-identificare-corecta-printr-un-singur-cuvant">9. Gemini — de la identitate greșită la identificare corectă printr-un singur cuvânt</h2>

      <p>Gemini oferă cel mai spectaculos exemplu de Anchor Dependence din setul F1.</p>

      <p>Query-ul <strong>„Cine este Alex Matescu?”</strong> produce o identitate greșită. Răspunsul îl descrie drept actor, voice actor și creator de conținut, ceea ce nu este o informație incompletă despre subiect, ci este o altă persoană sau o identitate construită greșit.</p>

      <p>Verdict:</p>

      <p><strong>CONFABULARE.</strong></p>

      <p>Atunci când query-ul devine <strong>„Alex Matescu AUMOVIO”</strong>, Gemini identifică persoana urmărită și rolul profesional.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_gemini_generic_vs_anchor.jpg" alt="Gemini confabulation versus anchor" loading="lazy" />
        <figcaption>Fig. 4 — Gemini, F1. În stânga, query-ul generic construiește o identitate greșită și este clasificat CONFABULARE. În dreapta, ancora <code>AUMOVIO</code> conduce la entitatea corectă. Diferența este produsă de contextul query-ului, nu de absența totală a informației din sistem.</figcaption>
      </figure>

      <p>Acest rezultat este foarte important. Dacă aș fi testat numai:</p>

      <p><code>Alex Matescu AUMOVIO</code></p>

      <p>aș fi putut concluziona:</p>

      <p><strong>„Gemini mă identifică foarte bine.”</strong></p>

      <p>Dacă aș fi testat numai:</p>

      <p><code>Cine este Alex Matescu?</code></p>

      <p>aș fi putut concluziona:</p>

      <p><strong>„Gemini nu știe cine sunt.”</strong></p>

      <p>Ambele afirmații ar fi fost adevărate în raport cu captura aleasă, dar niciuna nu ar fi descris suficient fenomenul. Răspunsul mai corect este:</p>

      <p><strong>Gemini poate recupera entitatea, dar rezoluția ei este încă puternic dependentă de query.</strong></p>

      <h2 id="10-coliziunea-poate-deveni-mai-grava-decat-simpla-absenta">10. Coliziunea poate deveni mai gravă decât simpla absență</h2>

      <p>Există o diferență importantă între un sistem care spune <strong>„Nu găsesc suficiente informații.”</strong> și unul care spune cu încredere <strong>„Aceasta este persoana”</strong> despre persoana greșită. În primul caz avem un <code>NULL</code>. În al doilea putem avea <code>COLIZIUNE</code> sau <code>CONFABULARE</code>. Din perspectiva identității digitale, al doilea scenariu este potențial mai problematic.</p>

      <p>O absență nu produce neapărat o informație falsă despre subiect, dar o fuziune de entități poate produce una. Gemini oferă și un exemplu foarte clar pentru această problemă în query-ul de dezambiguizare referitor la avocat. Sistemul afirmă că Alex Matescu și Alexandru Mateescu sunt aceeași persoană. Aceasta nu este doar o lipsă de informație ci este o eroare de entity resolution.</p>

      <h2 id="11-perplexity-textul-poate-fi-corect-iar-imaginea-gresita">11. Perplexity — textul poate fi corect, iar imaginea greșită</h2>

      <p>Perplexity prezintă un alt tip de problemă. Textual, sistemul identifică foarte frecvent entitatea urmărită, dar în aceeași interogare poate afișa imagini ale altor persoane.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_perplexity_image_mismatch.jpg" alt="Perplexity image entity mismatch" loading="lazy" />
        <figcaption>Fig. 5 — Perplexity, F1, <code>Cine este Alex Matescu?</code>. Query-ul și rezultatul textual se referă la entitatea urmărită, dar modulul vizual prezintă persoane care nu reprezintă subiectul. Fenomen clasificat aici drept image–entity mismatch.</figcaption>
      </figure>

      <p>Acest lucru ridică o problemă care nu apare dacă evaluăm numai textul. Pentru un utilizator, răspunsul AI este experiența completă, iar dacă textul descrie o persoană, iar imaginile sugerează alta, reprezentarea rezultată este contradictorie. Din acest motiv, vizibilitatea AI nu ar trebui măsurată exclusiv prin:</p>

      <p><strong>mențiune</strong>, <strong>citare</strong>, sau <strong>corectitudinea textului</strong>.</p>

      <p>Trebuie observată și coerența multimodală.</p>

      <p>Profilul textual Perplexity în F1 este <strong>12 HIT / 2 COLIZIUNI.</strong>, dar acest scor nu surprinde complet problema imaginilor.</p>

      <h2 id="12-query-drift-o-eroare-a-experimentului-nu-a-motorului">12. Query Drift — o eroare a experimentului, nu a motorului</h2>

      <p>În timpul auditului nu am identificat doar erori ale sistemelor AI, ci am identificat și o eroare a propriului protocol.</p>

      <p>Query-ul canonic #9 era <strong>„Alex Matescu vs Alexandru Mateescu avocat”</strong>, dar nu toate motoarele au fost testate cu aceeași formulare.</p>

      <p>În Gemini apare comparația cu avocatul.</p>

      <p>În ChatGPT, Claude și Perplexity apar variante care introduc persoana asociată cu PRO TV.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_query_drift_chatgpt.jpg" alt="Query drift" loading="lazy" />
        <figcaption>Fig. 6 — Evidence pentru Query Drift. În stânga, Gemini este testat cu varianta <code>Alex Matescu vs Alexandru Mateescu avocat</code>. În dreapta, ChatGPT primește <code>Alex Matescu vs Ale Mateescu PRO TV</code>. Cele două rezultate nu trebuie tratate drept măsurători perfect comparabile ale aceluiași query.</figcaption>
      </figure>

      <p>Această diferență trebuie păstrată în studiu. Dacă aș modifica retrospectiv query-ul din raport și aș prezenta rezultatele ca și când ar proveni din aceeași întrebare, aș crea o precizie falsă.</p>

      <p>Prin urmare, query-ul #9 este marcat:</p>

      <p><strong>QUERY_DRIFT.</strong></p>

      <p>În fazele următoare, formularea va trebui înghețată și reprodusă identic. Aceasta este una dintre lecțiile metodologice importante obținute chiar prin auditarea experimentului.</p>

      <h2 id="13-primul-pattern-major-anchor-dependence">13. Primul pattern major: Anchor Dependence</h2>

      <p>Privite împreună, rezultatele Claude și Gemini arată un fenomen care merită urmărit separat de simpla „vizibilitate”.</p>

      <p>Putem avea:</p>

      <p><strong>Alex Matescu → NULL / CONFABULARE</strong></p>

      <p>dar:</p>

      <p><strong>Alex Matescu + AUMOVIO → HIT</strong></p>

      <p>sau:</p>

      <p><strong>Alex Matescu + engineer → HIT</strong></p>

      <p>sau:</p>

      <p><strong>Alex Matescu + delamatescu.ro → HIT</strong></p>

      <p>Informația nu este complet absentă ci devine accesibilă atunci când query-ul oferă sistemului o cale suficient de clară către entitate, ceea ce face această distanță dintre query-ul generic și query-ul ancorat să poată deveni o măsură în sine.</p>

      <p>O numesc aici:</p>

      <h3 id="anchor-dependence-2">Anchor Dependence</h3>

      <p>O entitate cu dependență ridicată de ancore poate fi recuperabilă dar încă slab stabilizată semantic, in timp ce o entitate cu dependență redusă ar trebui să poată fi identificată corect chiar și atunci când query-ul conține foarte puține informații.</p>

      <p>Tabula Rasa va urmări dacă această dependență scade în fazele următoare.</p>

      <h2 id="14-rezultatele-f1-nu-reprezinta-un-clasament-al-modelelor">14. Rezultatele F1 nu reprezintă un clasament al modelelor</h2>

      <p>Pentru cele patru sisteme adjudecate integral, matricea F1 arată astfel:</p>

      <table>
        <thead>
          <tr><th>Sistem</th><th>HIT</th><th>HIT parțial</th><th>COLIZIUNE</th><th>CONFABULARE</th><th>NULL</th></tr>
        </thead>
        <tbody>
          <tr><td>ChatGPT</td><td>13</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
          <tr><td>Perplexity</td><td>12</td><td>0</td><td>2</td><td>0</td><td>0</td></tr>
          <tr><td>Claude</td><td>5</td><td>1</td><td>2</td><td>0</td><td>6</td></tr>
          <tr><td>Gemini</td><td>5</td><td>0</td><td>6</td><td>2</td><td>1</td></tr>
        </tbody>
      </table>

      <p>Acest tabel <strong>nu este un benchmark general ChatGPT vs Claude vs Gemini vs Perplexity</strong>.</p>

      <p>Acest tabel nu spune că un model este „mai bun” decât altul, ci descrie numai felul în care aceste sisteme au răspuns la:</p>

      <ul>
        <li><strong>o singură entitate</strong>,</li>
        <li><strong>un singur Query Set</strong>,</li>
        <li><strong>într-o singură fereastră experimentală.</strong></li>
      </ul>

      <p>În plus, aceeași prudență trebuie aplicată și în interiorul fiecărui rezultat: un <code>NULL</code> Claude poate reflecta tocmai o politică mai prudentă de evitare a atribuirii informației unei persoane atunci când dovezile sunt insuficiente. Un răspuns mai „bogat” nu este automat un răspuns mai bun.</p>

      <h2 id="15-pachetul-de-dovezi-v3-0-adjudecarea-google-bing-si-google-ai-mode">15. Pachetul de dovezi v3.0 — adjudecarea Google, Bing și Google AI Mode</h2>

      <p>Secțiunea anterioară a acestui studiu lăsa patru sisteme drept <strong>NEADJUDICAT</strong>: Google Search, Bing, Google AI Mode și Microsoft Copilot. Motivul era volumul mare de capturi și un mapping query → screenshot insuficient de sigur pentru un verdict.</p>

      <p>Pe 16 septembrie 2026 am publicat un al treilea pachet de dovezi, distinct de T0 v1.0 și de F1 v2.0: 808 capturi/dovezi, cu condiții experimentale marcate explicit pe fiecare folder de captură — model, stare de autentificare, fereastră incognito sau normală — acoperind aceleași 14 interogări pe ChatGPT, Claude, Copilot, Gemini, Perplexity, Google AI Mode, Bing și Google Search. Pachetul este disponibil ca <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v3.0" target="_blank" rel="noopener noreferrer">GitHub Release — Alex Matescu T0 Evidence Archive v3.0</a> (arhivă v3.0 / metadate v3.0). La momentul publicării acestui studiu, eliberarea este încă în starea <code>draft</code> pe GitHub — devine public accesibilă abia când o marchez explicit ca atare, separat de actualizarea studiului. <em>Clarificare (23 octombrie 2026): pachetul v3.0 a fost publicat pe GitHub la 18 septembrie 2026 și e public accesibil. Fraza de mai sus descrie starea de la publicarea acestei secțiuni și rămâne neschimbată.</em></p>

      <p>Capturile relevante pentru Google Search, Bing și Google AI Mode au fost făcute în perioada 2–7 septembrie 2026, la peste o lună după fereastra F1 din august. Acest decalaj temporal este documentat explicit, nu ascuns: rezultatele de mai jos nu trebuie citite ca fiind din aceeași fereastră de măsurare cu ChatGPT/Claude/Gemini/Perplexity din secțiunile 7–14, ci ca o adjudecare separată, pe un eșantion mai mare și cu condiții experimentale mai bine documentate, a acelorași sisteme lăsate deschise în secțiunea anterioară.</p>

      <p>Din cele 808 de capturi, 346 (grupate în 41 de execuții distincte de query) au trecut pragul de includere în baza curată de analiză pentru Google Search, Bing și Google AI Mode. Restul — majoritatea din Google Search și Bing — sunt marcate <code>REVIEW_REQUIRED</code> sau <code>EXCLUDE_FROM_CLEAN_BASELINE</code> în Evidence Index și nu au fost folosite pentru verdicte.</p>

      <h3 id="copilot-ramane-neadjudicat">Copilot rămâne NEADJUDICAT</h3>

      <p>Toate cele 25 de capturi Copilot din acest pachet au fost făcute în modul „Temporary” al copilot.microsoft.com (<code>chats/temporary</code>), nu în modul standard autentificat folosit pentru celelalte sisteme. Diferența de configurație de sesiune înseamnă că aceste capturi nu sunt comparabile cu protocolul curat descris în metodologia laboratorului, iar Evidence Index le marchează explicit <code>REVIEW_REQUIRED</code>. Nu adjudec Copilot pe baza lor. Copilot rămâne <strong>NEADJUDICAT</strong> și pentru această versiune — nu din lipsă de date, ci pentru că datele disponibile nu respectă configurația de sesiune pe care o cer pentru un verdict.</p>

      <h3 id="o-eroare-de-verificare-corectata-inainte-de-publicare">O eroare de verificare, corectată înainte de publicare</h3>

      <p>În timpul adjudecării acestui pachet am comis o eroare pe care o public aici, integral, pentru că se leagă direct de standardul de dovezi al acestui studiu.</p>

      <p>Mai multe rezultate — pe Google AI Mode, Google Search și Bing — asociau numele urmărit cu „Taste the Corn”, un stand de street-food cu porumb aromat în Shopping City Sibiu. Pentru că detaliul nu se potrivea cu profilul deja documentat (System Lead Engineer la AUMOVIO), verificarea inițială a tratat asocierea drept confabulare — o identitate inventată de sisteme, nu una reală.</p>

      <p>Verdictul a fost greșit. „Taste the Corn” este un proiect real, al meu, documentat pe propriul domeniu (<a href="https://delamatescu.ro/proiecte/taste-the-corn" target="_blank" rel="noopener noreferrer">delamatescu.ro/proiecte/taste-the-corn</a>), activ ianuarie–decembrie 2025 în Sibiu, și acoperit de presă locală (Economedia, Turnul Sfatului, ampress.ro) în iulie 2025. Inclusiv un detaliu suplimentar pe care Google AI Mode l-a atribuit corect și pe care verificarea inițială l-a pus de asemenea la îndoială — studiile de Sisteme Automate Încorporate la Facultatea de Automatică, Calculatoare și Electronică din Craiova — s-a confirmat exact.</p>

      <p>Eroarea nu a fost a sistemelor AI evaluate, ci a procesului de verificare din spatele acestui studiu: rezultatele au fost adjudecate inițial pe bază de plauzibilitate („nu sună a profilul cunoscut, deci probabil e inventat”), nu pe bază de dovadă — exact ce principiul „dovada precede afirmația” interzice. Singura sursă autoritară pentru identitatea proprie a subiectului sunt eu, iar verificarea a ajuns la mine abia după ce un prim set de verdicte fusese deja formulat, nu înainte. Corectura a intervenit înainte de publicarea acestei versiuni a studiului — niciun verdict CONFABULARE greșit nu a fost publicat vreodată public pe acest subiect — dar consecința pentru verdictele de mai jos este reală: mai multe rezultate calificate inițial drept COLIZIUNE sau CONFABULARE sunt de fapt HIT.</p>

      <p>Păstrez acest incident vizibil în studiu din același motiv pentru care păstrez Query Drift-ul din secțiunea 12 sau instabilitatea din T0: un studiu care își ascunde propriile erori de proces e un experiment mai slab, nu unul mai curat (secțiunea 25).</p>

      <h2 id="16-bing-rezolutie-puternica-pe-ancore-esec-pe-interogarea-propriului-domeniu">16. Bing — rezoluție puternică pe ancore, eșec pe interogarea propriului domeniu</h2>

      <p>Bing rezolvă entitatea corect pe jumătate din cele 14 interogări, direct pe pagina 1, fără nicio ancoră explicită.</p>

      <p>Pentru <strong>„Cine este Alex Matescu?”</strong>, primele două rezultate organice sunt chiar delamatescu.ro. Pentru <strong>„Alex Matescu AUMOVIO”</strong>, <strong>„delamatescu.ro”</strong> și <strong>„Alex Matescu LinkedIn”</strong>, rezultatul corect apare pe poziția 1. Pentru <strong>„Alex Matescu Sibiu”</strong>, rezultatele combină corect profilurile profesionale (delamatescu.ro, LinkedIn) cu acoperirea de presă despre „Taste the Corn” — exact tipul de asociere pe care verificarea inițială a acestui pachet a tratat-o greșit drept coliziune cu o altă persoană (secțiunea 15). Corectată, aceasta e una dintre cele mai bogate rezoluții din tot pachetul v3.0: patru surse independente, toate despre aceeași persoană.</p>

      <p>Profilul se inversează la interogările de dezambiguizare. Pentru <strong>„Alexandru Matescu”</strong> și <strong>„Alex Mateescu”</strong>, Bing nu confundă subiectul cu alte persoane care poartă acele variante de nume, dar nici nu îl recuperează — rezultatele sunt exclusiv despre alte persoane reale (fotbalist, avocați, profesioniști LinkedIn fără legătură). Cel mai izbitor caz este însă <strong>„Cine este în spatele delamatescu.ro?”</strong> — o interogare care conține chiar domeniul subiectului — unde Bing nu returnează niciun rezultat relevant în primele opt capturi ale paginii, în contrast direct cu interogarea „delamatescu.ro” simplă, care rezolvă curat pe poziția 1.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_bing_null_delamatescu_domain.jpg" alt="Bing NULL pe interogarea despre propriul domeniu" loading="lazy" />
        <figcaption>Fig. 7 — Bing, v3.0, „Cine este în spatele delamatescu.ro?”. Din 29.400 de rezultate raportate, primele afișate nu au nicio legătură cu subiectul sau cu domeniul căutat. Aceeași interogare redusă la simplul „delamatescu.ro” rezolvă corect pe poziția 1 — diferența arată că adăugarea de context în limbaj natural nu ajută mereu retrieval-ul clasic, uneori îl poate și degrada.</figcaption>
      </figure>

      <h3 id="rezultate-pe-interogare">Rezultate pe interogare</h3>

      <table>
        <thead>
          <tr><th>Query</th><th>Verdict</th><th>Notă</th></tr>
        </thead>
        <tbody>
          <tr><td>Q01 Cine este Alex Matescu?</td><td>HIT</td><td>Primele 2 rezultate organice: delamatescu.ro.</td></tr>
          <tr><td>Q02 Ce știi despre Alex Matescu?</td><td>HIT PARȚIAL</td><td>Conținut corect (AI Visibility Lab) prezent, dar la poziția 11-20, diluat de omonime.</td></tr>
          <tr><td>Q03 Cu ce se ocupă Alex Matescu?</td><td>HIT PARȚIAL</td><td>Rezultat corect prezent, dar la poziția 31-40.</td></tr>
          <tr><td>Q04 Alex Matescu Sibiu</td><td>HIT</td><td>Corectat față de verificarea inițială (secțiunea 15) — delamatescu.ro/LinkedIn și presa despre Taste the Corn, aceeași persoană.</td></tr>
          <tr><td>Q05 Cine este Alex Matescu din Sibiu?</td><td>NEDETERMINAT</td><td>Anomalie de arhivă: un screenshot din secvența Q06 a fost găsit mapat greșit în grupul Q05. Verdict reținut până la o reverificare completă.</td></tr>
          <tr><td>Q06 Alex Matescu (simplu)</td><td>HIT PARȚIAL</td><td>Rezultat corect prezent la a doua pagină, alături de cel puțin 3 omonime distincte.</td></tr>
          <tr><td>Q07 Alexandru Matescu</td><td>NULL</td><td>Doar omonime reale (fotbalist, avocați); subiectul absent, dar și necontopit cu ei.</td></tr>
          <tr><td>Q08 Alex Mateescu</td><td>NULL</td><td>Doar profiluri ale altor persoane cu acest nume.</td></tr>
          <tr><td>Q09 Alex Matescu vs Alexandru Mateescu avocat</td><td>NULL</td><td>Fără drift de formulare pe Bing; rezultatele se rezolvă integral spre firma de avocatură, subiectul absent din comparație.</td></tr>
          <tr><td>Q10 Alex Matescu AUMOVIO</td><td>HIT</td><td>Rezultat LinkedIn pe poziția 1, cu apartenența istorică la Continental menționată corect.</td></tr>
          <tr><td>Q11 Alex Matescu inginer / engineer</td><td>HIT PARȚIAL</td><td>Conținut relevant confirmat, dar abia la pagina 6 din secvența disponibilă.</td></tr>
          <tr><td>Q12 delamatescu.ro</td><td>HIT</td><td>Primele 5 rezultate: exclusiv delamatescu.ro.</td></tr>
          <tr><td>Q13 Cine este în spatele delamatescu.ro?</td><td>NULL</td><td>Fig. 7 — nicio urmă a subiectului, deși domeniul e numit explicit în interogare.</td></tr>
          <tr><td>Q14 Alex Matescu LinkedIn</td><td>HIT</td><td>Profilul corect, poziția 1.</td></tr>
        </tbody>
      </table>

      <p><strong>Agregat Bing (v3.0):</strong> 5 HIT · 4 HIT PARȚIAL · 4 NULL · 1 NEDETERMINAT.</p>

      <p>O a doua constatare, distinctă de verdictele de mai sus: pentru mai multe grupuri de interogare (Q05, Q07, Q08), primul screenshot al secvenței s-a dovedit a fi, la verificare, o captură reziduală dintr-o interogare anterioară, nu o captură nouă a interogării proprii — câmpul „Mapping status: CONFIRMED” din Evidence Index nu a prins această eroare. Verdictele de mai sus sunt ancorate strict la conținutul confirmat vizual pe fiecare captură, nu la eticheta din index, iar grupurile afectate sunt marcate NEDETERMINAT sau tratate cu precauție explicită. Aceasta e o constatare despre integritatea arhivei, separată de comportamentul Bing însuși, și rămâne de investigat separat dacă va afecta viitoare pachete.</p>

      <h2 id="17-google-search-un-mecanism-nou-autocorectarea-silentioasa-a-numelui">17. Google Search — un mecanism nou: autocorectarea silențioasă a numelui</h2>

      <p>Google reproduce, la rândul lui, Anchor Dependence deja documentată pentru sistemele AI: interogările ancorate (<code>AUMOVIO</code>, <code>inginer</code>, <code>delamatescu.ro</code>) rezolvă curat, cele generice și de dezambiguizare se pierd în omonime.</p>

      <p>Dar Google Search introduce un mecanism absent din toate celelalte sisteme analizate până acum: <strong>autocorectarea silențioasă a numelui</strong>. Pentru interogările <strong>„Cine este Alex Matescu?”</strong> și <strong>„Alex Matescu AUMOVIO”</strong>, Google rescrie automat „Matescu” în „Mateescu” — afișând explicit „Ai căutat inițial... Vezi rezultate pentru...” — și înlocuiește complet setul de rezultate cu omonime, înainte ca orice competiție de retrieval sau ranking să mai conteze.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_google_autocorrect_matescu_vs_mateescu.jpg" alt="Autocorectarea Google: Matescu devine Mateescu" loading="lazy" />
        <figcaption>Fig. 8 — Google Search, v3.0, „Cine este Alex Matescu?”. Motorul rescrie silențios interogarea în „Alex Mateescu” și afișează rezultate exclusiv pentru omonimi. Spre deosebire de coliziunile observate la sistemele AI, aici entitatea corectă nu pierde o competiție de relevanță — e eliminată înainte ca aceasta să înceapă.</figcaption>
      </figure>

      <p>Această corectare ortografică nu e specifică unei interogări — apare consecvent la mai multe formulări cu „Matescu” (nu „Mateescu”), inclusiv la cea care conține ancora <code>AUMOVIO</code>, unde termenul e apoi raportat explicit ca „Lipsesc: aumovio” în rezultate.</p>

      <p>O a doua constatare, similară celei de la Bing: pentru o secvență de capturi Google Search (sesiunea S7, interogările Q03–Q08), eticheta „Query ID” din Evidence Index nu corespunde consecvent cu interogarea vizibilă pe ecran în fiecare captură — de exemplu, fișiere etichetate „Q03” arată de fapt continuarea paginării pentru Q04. Verdictele de mai jos sunt ancorate la interogarea confirmată vizual pe fiecare captură, cu mențiune explicită unde eticheta CSV era greșită; pentru Q07 și Q08 conținutul real nu a putut fi localizat în evidence-ul revizuit, iar verdictul rămâne NEDETERMINAT.</p>

      <h3 id="rezultate-pe-interogare-2">Rezultate pe interogare</h3>

      <table>
        <thead>
          <tr><th>Query (confirmată vizual)</th><th>Verdict</th><th>Notă</th></tr>
        </thead>
        <tbody>
          <tr><td>Q01 Cine este Alex Matescu?</td><td>COLIZIUNE</td><td>Autocorectat silențios spre „Mateescu” — Fig. 8.</td></tr>
          <tr><td>Q02 Ce știi despre Alex Matescu?</td><td>HIT PARȚIAL</td><td>Pagina 2: delamatescu.ro apare ca rezultat organic real.</td></tr>
          <tr><td>Q03 Cu ce se ocupă Alex Matescu?</td><td>HIT</td><td>Top 5 rezultate organice: delamatescu.ro. (Etichetă CSV inițial greșită — conținut confirmat vizual.)</td></tr>
          <tr><td>Q04 Alex Matescu Sibiu</td><td>COLIZIUNE</td><td>~5 pagini revizuite, 100% omonime reale, fără urmă a subiectului la această formulare.</td></tr>
          <tr><td>Q05 Cine este Alex Matescu din Sibiu?</td><td>HIT</td><td>delamatescu.ro apare organic, inclusiv pagina proprie „Apariții în presă” care documentează chiar povestea Taste the Corn.</td></tr>
          <tr><td>Q06 Alex Matescu (simplu)</td><td>HIT PARȚIAL</td><td>delamatescu.ro prezent pe pagina 1, diluat de omonime pe rețele sociale.</td></tr>
          <tr><td>Q07 Alexandru Matescu</td><td>NEDETERMINAT</td><td>Conținut real al acestei interogări nu a putut fi localizat în evidence-ul revizuit (anomalie de mapping).</td></tr>
          <tr><td>Q08 Alex Mateescu</td><td>NEDETERMINAT</td><td>Aceeași anomalie de mapping ca Q07.</td></tr>
          <tr><td>Q09 Alex Matescu vs Alexandru Mateescu avocat</td><td>—</td><td>Fără dovezi incluse în baza curată pentru această interogare pe Google Search.</td></tr>
          <tr><td>Q10 Alex Matescu AUMOVIO</td><td>COLIZIUNE</td><td>Același mecanism de autocorectare ca Q01; „aumovio” raportat ca termen lipsă din rezultate.</td></tr>
          <tr><td>Q11 Alex Matescu inginer / engineer</td><td>HIT</td><td>RocketReach și LinkedIn identifică corect rolul și compania.</td></tr>
          <tr><td>Q12 delamatescu.ro</td><td>HIT</td><td>Toate rezultatele organice: delamatescu.ro.</td></tr>
          <tr><td>Q13 Cine este în spatele delamatescu.ro?</td><td>HIT-C</td><td>AI Overview identifică și citează explicit delamatescu.ro drept sursă.</td></tr>
          <tr><td>Q14 Alex Matescu LinkedIn</td><td>COLIZIUNE</td><td>Pagina 1 dominată de profiluri „Alexandru Mateescu” fără legătură.</td></tr>
        </tbody>
      </table>

      <p><strong>Agregat Google Search (v3.0):</strong> 4 HIT · 1 HIT-C · 2 HIT PARȚIAL · 4 COLIZIUNE · 2 NEDETERMINAT · 1 fără dovadă.</p>

      <h2 id="18-google-ai-mode-coliziune-dar-cu-dezambiguizare-explicita-si-corecta">18. Google AI Mode — coliziune, dar cu dezambiguizare explicită și corectă</h2>

      <p>Google AI Mode se comportă ca un sistem de sinteză, nu ca o căutare clasică: generează text, citează surse inline și, la interogările generice, alege frecvent să enumere mai multe persoane reale cu numele „Alex/Alexandru (M)ateescu” în loc să aleagă una singură. Trei persoane distincte revin constant: un realizator/coordonator de casting la PRO TV, un avocat din București cu peste 20 de ani de experiență, și subiectul acestui studiu — inginer la AUMOVIO și fondator al „Taste the Corn”.</p>

      <p>La interogările generice (<code>Cine este Alex Matescu?</code>, <code>Ce știi despre Alex Matescu?</code>, <code>Cu ce se ocupă Alex Matescu?</code>), Google AI Mode alege consecvent să prezinte doar PRO TV și avocatul drept „cele mai căutate” profiluri — subiectul e absent din răspunsul principal la primele două, și menționat doar într-o notă de subsol la a doua („există și alte mențiuni mai puțin mediatizate, cum ar fi un tânăr inginer din Sibiu care a deschis o afacere stradală cu porumb”) — notă corectă, dar care nu ridică subiectul la statutul de răspuns principal.</p>

      <p>La interogările <code>Alex Matescu</code> (simplu), <code>Alexandru Matescu</code> și <code>Alex Mateescu</code>, comportamentul se schimbă: sistemul listează toate cele trei persoane separat, cu detalii complete și corecte pentru fiecare, inclusiv pentru subiect (AUMOVIO, Taste the Corn, delamatescu.ro). Aceasta e o <strong>coliziune dezambiguizată corect</strong> (secțiunea 4) — spre deosebire de fuziunea de identități observată la Gemini în F1 (secțiunea 9), aici sistemul nu amestecă persoanele și nu atribuie greșit fapte, doar nu alege una singură ca răspuns.</p>

      <p>La interogările ancorate (<code>AUMOVIO</code>, <code>inginer/engineer</code>, <code>delamatescu.ro</code>, „cine e în spate”, <code>LinkedIn</code>), rezoluția e curată și, verificat, complet corectă — inclusiv detalii fine precum studiile de Sisteme Automate Încorporate la Facultatea din Craiova sau vechimea blogului din decembrie 2014.</p>

      <p>O observație separată, minoră dar reală: în textul câtorva răspunsuri (Q04, Q05), Google AI Mode scrie numele subiectului „Alex Mateescu” (cu doi de e), deși interogarea introdusă folosea „Matescu” (un singur e) — un drift de scriere în interiorul unui răspuns altfel corect, distinct de Query Drift-ul din secțiunea 12 (acela privea formularea interogării, nu ortografia din răspuns).</p>

      <h3 id="rezultate-pe-interogare-3">Rezultate pe interogare</h3>

      <table>
        <thead>
          <tr><th>Query</th><th>Verdict</th><th>Notă</th></tr>
        </thead>
        <tbody>
          <tr><td>Q01 Cine este Alex Matescu?</td><td>COLIZIUNE</td><td>Doar PRO TV/avocat; subiectul absent.</td></tr>
          <tr><td>Q02 Ce știi despre Alex Matescu?</td><td>COLIZIUNE</td><td>PRO TV/avocat primari; subiectul menționat corect, dar doar într-o notă de subsol.</td></tr>
          <tr><td>Q03 Cu ce se ocupă Alex Matescu?</td><td>COLIZIUNE</td><td>Doar PRO TV/avocat; fără nicio mențiune a subiectului.</td></tr>
          <tr><td>Q04 Alex Matescu Sibiu</td><td>HIT</td><td>Taste the Corn, Shopping City Sibiu, blogul personal — toate corecte.</td></tr>
          <tr><td>Q05 Cine este Alex Matescu din Sibiu?</td><td>HIT</td><td>Idem, plus studiile din Craiova — confirmat corect. Drift de ortografie „Mateescu” în text.</td></tr>
          <tr><td>Q06 Alex Matescu (simplu)</td><td>COLIZIUNE (dezambiguizată corect)</td><td>3 persoane listate separat; subiectul primul, informații corecte.</td></tr>
          <tr><td>Q07 Alexandru Matescu</td><td>COLIZIUNE (dezambiguizată corect)</td><td>Aceleași 3 persoane, subiectul al treilea, informații corecte.</td></tr>
          <tr><td>Q08 Alex Mateescu</td><td>COLIZIUNE (dezambiguizată corect)</td><td>Aceleași 3 persoane, subiectul primul, informații corecte.</td></tr>
          <tr><td>Q09 Alex Matescu vs Alexandru Mateescu avocat</td><td>COLIZIUNE</td><td>Compară explicit 2 avocați; notă corectă că „tânărul inginer din Sibiu” nu are legătură cu dreptul.</td></tr>
          <tr><td>Q10 Alex Matescu AUMOVIO</td><td>HIT</td><td>Fuziune corectă AUMOVIO/Continental + Taste the Corn, aceeași persoană.</td></tr>
          <tr><td>Q11 Alex Matescu inginer / engineer</td><td>HIT</td><td>Carieră completă și corectă, inclusiv Craiova.</td></tr>
          <tr><td>Q12 delamatescu.ro</td><td>HIT-C</td><td>Citează domeniul direct; blog din 2014, CRANDIT, AI Visibility Lab — toate corecte.</td></tr>
          <tr><td>Q13 Cine este în spatele delamatescu.ro?</td><td>HIT</td><td>Descrie corect cele trei fațete ale activității subiectului.</td></tr>
          <tr><td>Q14 Alex Matescu LinkedIn</td><td>HIT</td><td>Profil curat, corect atribuit.</td></tr>
        </tbody>
      </table>

      <p><strong>Agregat Google AI Mode (v3.0):</strong> 6 HIT · 1 HIT-C · 3 COLIZIUNE (dezambiguizată corect) · 4 COLIZIUNE.</p>

      <h2 id="19-matricea-extinsa-v3-0">19. Matricea extinsă v3.0</h2>

      <table>
        <thead>
          <tr><th>Sistem</th><th>HIT</th><th>HIT-C</th><th>HIT parțial</th><th>COLIZIUNE</th><th>NULL</th><th>NEDETERMINAT</th><th>Fără dovadă</th></tr>
        </thead>
        <tbody>
          <tr><td>Bing</td><td>5</td><td>0</td><td>4</td><td>0</td><td>4</td><td>1</td><td>0</td></tr>
          <tr><td>Google Search</td><td>4</td><td>1</td><td>2</td><td>4</td><td>0</td><td>2</td><td>1</td></tr>
          <tr><td>Google AI Mode</td><td>6</td><td>1</td><td>0</td><td>7*</td><td>0</td><td>0</td><td>0</td></tr>
        </tbody>
      </table>

      <p><em>* Din cele 7 COLIZIUNE la Google AI Mode, 3 sunt dezambiguizate corect (secțiunea 4 și 18) — sistemul listează subiectul separat, cu informații corecte, alături de alte două persoane reale cu nume apropiate, fără să le confunde.</em></p>

      <p>Acest tabel nu se combină cu matricea din secțiunea 14: acoperă alte trei sisteme, capturate într-o fereastră diferită (2–7 septembrie 2026, față de 4–6 august pentru ChatGPT/Claude/Gemini/Perplexity), cu un protocol care documentează explicit condiții experimentale (model, autentificare, fereastră incognito/normală) pe care F1 nu le-a marcat separat. Rămâne, ca și matricea din secțiunea 14, o descriere a comportamentului pe o singură entitate și un singur Query Set — nu un benchmark general între motoare de căutare.</p>

      <p>Privite împreună, cele trei sisteme confirmă Anchor Dependence deja documentată pentru sistemele AI, dar adaugă două mecanisme noi, specifice căutării clasice și absente din sistemele conversaționale analizate în F1: <strong>autocorectarea silențioasă a numelui</strong> (Google Search, secțiunea 17), care elimină entitatea înainte ca retrieval-ul să înceapă, și <strong>coliziunea dezambiguizată corect</strong> (Google AI Mode, secțiunea 18), un mod de a gestiona nume apropiate mai transparent decât fuziunea de identități observată la Gemini în F1 — dar tot o formă de coliziune, pentru că subiectul nu e niciodată singurul răspuns.</p>

      <h2 id="20-ce-s-a-schimbat-intre-t0-si-f1">20. Ce s-a schimbat între T0 și F1?</h2>

      <p>Între cele două ferestre, ecosistemul digital al entității s-a schimbat. Website-ul delamatescu.ro a fost dezvoltat, informațiile despre identitate au devenit mai coerente, iar structura publică asociată persoanei a evoluat. Totuși, istoricul complet al intervențiilor dintre T0 și F1 nu este încă reconstruit cu suficiente dovezi cronologice din cod, motiv pentru care studiul nu formulează afirmații de forma:</p>

      <p><strong>„implementarea X a determinat răspunsul Y”.</strong></p>

      <p>Aceasta ar depăși ceea ce datele disponibile demonstrează.</p>

      <p>Formularea corectă este:</p>

      <p><strong>între T0 și F1 observăm o schimbare a stării rezultatelor; cauza exactă și contribuția fiecărei intervenții nu pot fi izolate din datele disponibile în această versiune.</strong></p>

      <p>Intervention Log-ul poate fi adăugat ulterior, fără rescrierea rezultatelor deja publicate.</p>

      <h2 id="21-de-ce-t0-imperfect-nu-trebuie-eliminat">21. De ce T0 imperfect nu trebuie eliminat</h2>

      <p>Ar fi tentant să declar că metodologia începe cu versiunea actuală și să ignor prima rundă de măsurători. Ar produce un experiment mai curat, dar ar elimina tocmai punctul de pornire real:</p>

      <p><strong>T0 este slab prin comparație cu protocolul actual</strong> din următoarele motive:</p>

      <ul>
        <li>unele query-uri nu au fost perfect standardizate,</li>
        <li>unele dintre rulări au fost făcute în zile diferite,</li>
        <li>documentarea nu era identică pentru fiecare motor,</li>
        <li>taxonomia a evoluat ulterior.</li>
      </ul>

      <p>Totuși, aceste probleme nu fac baseline-ul inutil ci îi schimbă nivelul de încredere.</p>

      <p>Într-un studiu longitudinal public, diferența dintre <strong>date imperfecte</strong> și <strong>date inexistente</strong> este importantă.</p>

      <p>Tabula Rasa pornește de la primele, de la <strong>date imperfecte</strong>.</p>

      <h2 id="22-ce-nu-demonstreaza-acest-studiu">22. Ce NU demonstrează acest studiu</h2>

      <p>Acest studiu nu demonstrează că modificarea unui JSON-LD, publicarea unui articol, introducerea unui <code>sameAs</code> sau orice altă intervenție individuală a determinat un model să producă un anumit răspuns.</p>

      <p>Nu demonstrează că modelele „au învățat” direct informația publicată pe delamatescu.ro.</p>

      <p>Și nu demonstrează că răspunsurile observate vor fi identice mâine.</p>

      <p>Sistemele analizate sunt externe experimentului și pot depinde de:</p>

      <ul>
        <li>indexare,</li>
        <li>retrieval,</li>
        <li>ranking,</li>
        <li>surse terțe,</li>
        <li>actualizări ale produsului,</li>
        <li>mecanisme de sinteză,</li>
        <li>politici de citare,</li>
        <li>cache,</li>
        <li>disponibilitatea web,</li>
        <li>variații între rulări.</li>
      </ul>

      <p>Experimentul poate observa rezultatul însă nu controlează întreaga infrastructură care îl produce.</p>

      <h2 id="23-ai-visibility-nu-este-o-variabila-binara">23. AI Visibility nu este o variabilă binară</h2>

      <p>Unul dintre cele mai importante lucruri pe care experimentul le arată deja este că <strong>„apare / nu apare”</strong> este o definiție prea slabă a vizibilității AI.</p>

      <p>O entitate poate fi:</p>

      <ul>
        <li>identificată fără ancoră;</li>
        <li>identificată numai cu ancoră;</li>
        <li>confundată cu alta;</li>
        <li>identificată corect în text, dar greșit în imagini;</li>
        <li>găsită într-o rulare și absentă în alta;</li>
        <li>recuperată din propria sursă;</li>
        <li>recuperată dintr-o sursă terță;</li>
        <li>prezentă în ecosistem, dar nerecunoscută drept aceeași persoană.</li>
      </ul>

      <p>Toate acestea sunt forme diferite de relație dintre sistem și entitate, iar reducerea lor la un procent unic pierde informație.</p>

      <h2 id="24-un-model-provizoriu-al-maturitatii-entitatii">24. Un model provizoriu al maturității entității</h2>

      <p>Datele de până acum sugerează o posibilă succesiune:</p>

      <ul>
        <li><strong>Absent</strong> → sistemul nu recuperează entitatea;</li>
        <li><strong>Recoverable</strong> → entitatea poate fi găsită dacă primește suficiente indicii;</li>
        <li><strong>Anchor-dependent</strong> → identificarea corectă depinde încă de companie, oraș, profesie, domeniu sau alt descriptor;</li>
        <li><strong>Disambiguated</strong> → sistemul începe să separe corect entitatea de persoane cu nume similare;</li>
        <li><strong>Stable</strong> → query-uri generale și rulări repetate produc aceeași entitate cu puține coliziuni.</li>
      </ul>

      <p>Aceasta este una dintre ipotezele rezultate din observarea F0 și F1 și trebuie testată în fazele următoare, nefiind încă un model validat.</p>

      <h2 id="25-de-ce-public-si-erorile">25. De ce public și erorile</h2>

      <ul>
        <li>Query Drift-ul putea fi eliminat din articol.</li>
        <li>T0 putea fi „curățat”.</li>
        <li>Capturile în care sistemele greșesc puteau fi omise.</li>
        <li>Gemini putea fi prezentat numai prin query-ul AUMOVIO.</li>
        <li>Perplexity putea fi evaluat doar textual, fără imaginile incorecte.</li>
      </ul>

      <p>Toate acestea ar fi produs un studiu de caz mai frumos, dar ar fi produs un experiment mai slab.</p>

      <p>Tabula Rasa urmărește să documenteze ce se întâmplă, nu urmărește să demonstreze retrospectiv că o strategie a funcționat. Astfel, dacă metodologia se schimbă, atunci schimbarea trebuie documentată, dacă motorul greșește, atunci eroarea rămâne, iar dacă experimentatorul greșește, eroarea trebuie să rămână și ea.</p>

      <h2 id="26-ce-urmarim-in-urmatoarele-faze">26. Ce urmărim în următoarele faze</h2>

      <p>Următoarele ferestre vor testa în primul rând dacă query-urile generale ajung să rezolve mai constant entitatea și dacă dependența de <code>AUMOVIO</code>, <code>Sibiu</code>, <code>engineer</code> sau <code>delamatescu.ro</code> scade.</p>

      <p>De asemenea, voi urmări dacă:</p>

      <ul>
        <li>coliziunile Matescu/Mateescu se reduc;</li>
        <li>sursele primare apar mai frecvent;</li>
        <li>diferențele dintre sisteme se reduc;</li>
        <li>rezultatele devin mai stabile între rulări;</li>
        <li>reprezentarea vizuală și textuală converg;</li>
        <li>query-urile de dezambiguizare separă corect entitățile concurente.</li>
      </ul>

      <p>Query Set-ul va fi înghețat pentru fazele comparabile, iar orice abatere va fi marcată explicit.</p>

      <h2 id="27-concluzie-provizorie">27. Concluzie provizorie</h2>

      <p>Prima concluzie Tabula Rasa nu este <strong>„Alex Matescu a devenit vizibil în AI.”</strong> Datele descriu ceva mai interesant:</p>

      <p>În F1, aceeași entitate poate fi:</p>

      <ul>
        <li><strong>aproape complet rezolvată de ChatGPT,</strong></li>
        <li><strong>bine recuperată textual de Perplexity,</strong></li>
        <li><strong>dependentă de ancore în Claude,</strong></li>
        <li><strong>puternic instabilă între query generic și query ancorat în Gemini.</strong></li>
      </ul>

      <p>Prin urmare, identitatea digitală nu pare să treacă simplu de la <strong>necunoscut</strong> la <strong>cunoscut</strong>. Datele sunt mai compatibile cu un proces de tipul:</p>

      <p><strong>absent → recuperabil → dependent de ancoră → dezambiguizat → stabil.</strong></p>

      <p>Dacă fazele următoare vor confirma aceeași direcție, una dintre contribuțiile utile ale Tabula Rasa poate fi tocmai definirea unui mod mai riguros de a măsura <strong>maturitatea unei entități în AI Search</strong>.</p>

      <p>Pentru moment, aceasta rămâne o ipoteză.</p>

      <p><strong>Experimentul continuă.</strong></p>

      <h2 id="28-f3-a-patra-masurare-prima-adjudecata-pe-toate-suprafetele">28. F3 — a patra măsurare, prima adjudecată pe toate suprafețele</h2>
      <p>F3 a rulat între 18 și 21 octombrie 2026, cu aceleași 14 interogări, pe nouă suprafețe: Google Search, Bing, Google AI Mode, Google AI Overviews, ChatGPT, Claude, Microsoft Copilot, Gemini și Perplexity. Ce s-a rulat, în ce condiții și ce incidente au apărut descriu separat, în articolul <a href="/lab/articole/tabula-rasa-f3-cand-internetul-incearca-sa-afle-cine-esti">Când internetul încearcă să afle cine ești: ce arată a patra măsurare Tabula Rasa</a>. Aici rămân rezultatele.</p>
      <p><strong>Protocolul.</strong> Fiecare interogare a pornit într-o fereastră incognito nouă, cu cookie-urile neesențiale refuzate. Google Search, Bing, Google AI Mode, Google AI Overviews și ChatGPT au rulat nelogat. Claude (Claude Sonnet 5.5, Medium), Copilot (Copilot Auto) și Gemini (Gemini Automat) au rulat logat în contul Ichnometria, câte o conversație temporară nouă pe interogare. Perplexity a rulat nelogat la Q01–Q04, Q07 și Q08 și logat în rest, pentru că platforma a cerut autentificarea. Starea de autentificare și modelul afișat sunt consemnate pe fiecare captură.</p>
      <p><strong>Pachetul de dovezi.</strong> Capturile sunt publicate în <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-f3-v1.0</code></a>. Matricea de adjudecare și regulile ei sunt publicate în versiunea de metadate v1.2 a aceluiași pachet, <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-f3-v1.0-m1.2" target="_blank" rel="noopener noreferrer"><code>evidence-alex-matescu-f3-v1.0-m1.2</code></a>, cu aceeași arhivă (același SHA-256). Fiecare verdict de mai jos are în matrice identificatorul execuției și Evidence ID-urile capturilor pe care se sprijină.</p>
      <p><strong>Unitatea de analiză.</strong> Cele 293 de capturi corespund la 129 de execuții. Baza curată are 126: 14 interogări pe 9 suprafețe. Celelalte trei sunt încercări afectate de incidente de sesiune (Copilot Q12, primele două încercări Gemini Q01), păstrate în pachet și excluse din analiză.</p>
      <p><strong>Abateri.</strong></p>
      <ul>
        <li>La Q12, pe ChatGPT, Claude, Copilot, Gemini și Perplexity, interogarea introdusă a fost „http://delamatescu.ro/”, nu „delamatescu.ro”. Le păstrez în analiză, cu abaterea notată, ca la Query Drift-ul din F1.</li>
        <li>Google a propus forma „Mateescu” la aproape toate interogările. În sesiunea Google Search, operatorul a selectat manual forma originală, așa că verdictele Google Search din F3 se dau pe rezultatele pentru „Matescu”. În F2, verdictele s-au dat pe rezultatele autocorectate (secțiunea 17). Diferența e de protocol, nu doar de comportament al motorului.</li>
        <li>Bing a refăcut căutarea cu prefixul „+” la Q07 și Q14, după selectarea formei originale.</li>
      </ul>
      <p><strong>Regulile.</strong> Adjudecarea folosește taxonomia din secțiunea 4. Regulile de departajare au fost fixate înainte de citirea capturilor; trei reguli au apărut pe parcurs și au fost aplicate tuturor execuțiilor. Toate sunt publicate în pachet. Două dintre ele contează pentru citirea matricei:</p>
      <ul>
        <li>o identificare corectă cu un atribut biografic greșit (proiecte contopite, o carte în lucru dată drept publicată) e <strong>HIT PARȚIAL</strong>, nu CONFABULARE;</li>
        <li>o interogare pe o variantă de nume care aparține altor persoane („Alexandru Matescu”, „Alex Mateescu”), cu rezultate doar despre acele persoane, e <strong>NULL</strong>, nu COLIZIUNE.</li>
      </ul>
      <p>Faptele biografice neobișnuite din răspunsuri au fost verificate cu mine înainte de verdict, ca să nu repet eroarea „Taste the Corn” din secțiunea 15.</p>
      <h2 id="29-matricea-f3">29. Matricea F3</h2>
      <table>
        <thead>
          <tr><th>Sistem</th><th>HIT</th><th>HIT-C</th><th>HIT parțial</th><th>COLIZIUNE (dezambiguizată corect)</th><th>COLIZIUNE</th><th>NULL</th><th>NEAFIȘAT</th></tr>
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
      <p>F3 nu are niciun verdict CONFABULARE și niciun NEDETERMINAT. Google AI Overviews a afișat un rezumat doar la Q12 și Q13; celelalte 12 execuții sunt NEAFIȘAT și nu intră în nicio rată. La Google Search și Bing, HIT-C nu se aplică: prezența delamatescu.ro în rezultate este chiar rezultatul căutării.</p>
      <p>Ca în secțiunea 14, tabelul descrie o singură entitate, un singur Query Set și o singură fereastră. Nu este un clasament al platformelor.</p>
      <h3 id="rezultate-pe-interogare-4">Rezultate pe interogare</h3>
      <table>
        <thead>
          <tr><th>Query</th><th>Google Search</th><th>Bing</th><th>AI Mode</th><th>AI Overviews</th><th>ChatGPT</th><th>Claude</th><th>Copilot</th><th>Gemini</th><th>Perplexity</th></tr>
        </thead>
        <tbody>
          <tr><td>Q01 Cine este Alex Matescu?</td><td>HIT</td><td>HIT</td><td>HIT-C</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td></tr>
          <tr><td>Q02 Ce știi despre Alex Matescu?</td><td>HIT</td><td>HIT</td><td>COLIZIUNE</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>HIT-C</td><td>COLIZIUNE (dez.)</td><td>HIT-C</td></tr>
          <tr><td>Q03 Cu ce se ocupă Alex Matescu?</td><td>HIT parțial</td><td>HIT</td><td>COLIZIUNE (dez.)</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>HIT-C</td><td>HIT-C</td><td>HIT parțial</td></tr>
          <tr><td>Q04 Alex Matescu Sibiu</td><td>HIT</td><td>HIT</td><td>COLIZIUNE</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>HIT-C</td><td>HIT-C</td><td>HIT parțial</td></tr>
          <tr><td>Q05 Cine este Alex Matescu din Sibiu?</td><td>HIT</td><td>HIT</td><td>COLIZIUNE (dez.)</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td></tr>
          <tr><td>Q06 Alex Matescu</td><td>HIT</td><td>HIT</td><td>COLIZIUNE</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td></tr>
          <tr><td>Q07 Alexandru Matescu</td><td>HIT</td><td>HIT parțial</td><td>NULL</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>NULL</td><td>HIT-C</td><td>HIT parțial</td></tr>
          <tr><td>Q08 Alex Mateescu</td><td>NULL</td><td>NULL</td><td>NULL</td><td>NEAFIȘAT</td><td>NULL</td><td>NULL</td><td>NULL</td><td>NULL</td><td>NULL</td></tr>
          <tr><td>Q09 Alex Matescu vs Alexandru Mateescu avocat</td><td>COLIZIUNE</td><td>COLIZIUNE</td><td>COLIZIUNE</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>COLIZIUNE</td><td>COLIZIUNE</td><td>COLIZIUNE</td></tr>
          <tr><td>Q10 Alex Matescu AUMOVIO</td><td>HIT</td><td>HIT</td><td>NULL</td><td>NEAFIȘAT</td><td>HIT</td><td>NULL</td><td>HIT parțial</td><td>HIT-C</td><td>HIT parțial</td></tr>
          <tr><td>Q11 Alex Matescu inginer / engineer</td><td>HIT</td><td>HIT</td><td>COLIZIUNE</td><td>NEAFIȘAT</td><td>HIT-C</td><td>NULL</td><td>NULL</td><td>HIT-C</td><td>HIT-C</td></tr>
          <tr><td>Q12 delamatescu.ro</td><td>HIT</td><td>HIT</td><td>HIT-C</td><td>HIT-C</td><td>NULL</td><td>HIT-C</td><td>HIT-C</td><td>HIT parțial</td><td>HIT-C</td></tr>
          <tr><td>Q13 Cine este în spatele delamatescu.ro?</td><td>HIT</td><td>HIT</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td><td>HIT-C</td></tr>
          <tr><td>Q14 Alex Matescu LinkedIn</td><td>HIT</td><td>HIT</td><td>HIT parțial</td><td>NEAFIȘAT</td><td>HIT</td><td>NULL</td><td>HIT parțial</td><td>HIT-C</td><td>HIT parțial</td></tr>
        </tbody>
      </table>
      <p>Câteva verdicte au nevoie de context:</p>
      <ul>
        <li><strong>ChatGPT Q12 — NULL.</strong> Interogarea introdusă a fost „http://delamatescu.ro/”. ChatGPT a spus că nu a putut verifica conținutul sau proprietarul domeniului.</li>
        <li><strong>Gemini Q12 și Perplexity Q03 — HIT parțial.</strong> Gemini prezintă afacerea de familie din 2021 drept „Taste the Corn”; sunt proiecte diferite. Perplexity spune că CRANDIT a fost publicată în 2025; cartea e în lucru.</li>
        <li><strong>Google AI Mode Q14 — HIT parțial.</strong> Informațiile sunt corecte, dar AI Mode prezintă inginerul și antreprenorul-scriitor ca două persoane diferite.</li>
        <li><strong>Google Search Q03 — HIT parțial.</strong> Pe poziția 1 e un articol de pe blogul delamatescu.ro, fără pagina de identitate; restul paginii nu are legătură cu subiectul.</li>
        <li><strong>Claude.</strong> La 5 dintre cele 12 NULL (Q04, Q06, Q07, Q08, Q11), Claude n-a căutat pe web: a tratat numele ca pe o autoprezentare a utilizatorului sau ca pe o cerere de formatare.</li>
      </ul>
      <h2 id="30-ce-se-poate-compara-cu-f1-si-f2">30. Ce se poate compara cu F1 și F2</h2>
      <p>Comparația e corectă doar acolo unde condițiile sunt apropiate. Pentru fiecare suprafață, separ ce s-a schimbat în rezultat de ce s-a schimbat în protocol.</p>
      <p><strong>ChatGPT (F1 → F3), cea mai comparabilă pereche: nelogat în ambele ferestre.</strong> F1: 13 HIT și o coliziune. F3: 12 identificări (2 HIT și 10 HIT-C) și 2 NULL. Cele două NULL sunt Q08, unde „Alex Mateescu” aparține altor persoane, și Q12, cu abaterea de formulare. Coliziunea de la Q09 din F1 nu mai apare: în F3, ChatGPT separă corect subiectul de avocat. Numărul de identificări e practic stabil. HIT-C nu exista ca categorie separată în matricea F1, deci creșterea citării sursei canonice nu poate fi măsurată față de F1.</p>
      <p><strong>Gemini (F1 → F3): logat în ambele ferestre, cu alt model și conversație temporară în F3.</strong> F1: 5 HIT, 6 coliziuni, 2 confabulări, 1 NULL. F3: 10 HIT-C, 1 HIT parțial, 1 coliziune dezambiguizată corect, 1 coliziune, 1 NULL. E cea mai mare schimbare din studiu și nu are nicio confabulare. Nu o pot atribui unei cauze anume: s-au schimbat în același timp modelul (Gemini Flash → Gemini Automat), modul de conversație și sursele publice despre entitate.</p>
      <p><strong>Perplexity (F1 → F3): logat cu un cont pe numele entității în F1, stare mixtă în F3.</strong> F1: 12 HIT, 2 coliziuni. F3: 12 identificări, dintre care 7 HIT-C și 5 HIT parțial, o coliziune și un NULL. Numărul de identificări e același, dar mai multe sunt parțiale: Perplexity găsește persoana, fără să confirme ancora din interogare (Sibiu la Q04, AUMOVIO la Q10, profilul LinkedIn la Q14).</p>
      <p><strong>Claude (F1 → F3): necomparabil direct.</strong> F1 a rulat nelogat, cu Claude Opus 4.8; F3 a rulat logat, cu Claude Sonnet 5.5, în chat temporar. F3: 2 HIT-C (doar pe interogările cu domeniul) și 12 NULL, față de 5 HIT, 1 HIT parțial, 2 coliziuni și 6 NULL în F1. Notez rezultatul, dar nu îl pot citi ca regres al entității: modelul și configurația s-au schimbat.</p>
      <p><strong>Google Search (F2 → F3): protocol diferit.</strong> F2: 4 HIT, 1 HIT-C, 2 HIT parțial, 4 coliziuni, 2 NEDETERMINAT, 1 fără dovadă. F3: 11 HIT, 1 HIT parțial, 1 coliziune, 1 NULL. În F2, coliziunile de la Q01 și Q10 au venit explicit din autocorectarea „Matescu” → „Mateescu”, iar la Q04 și Q14 rezultatele erau dominate de omonime. În F3, operatorul a reselectat forma originală, iar la toate patru rezultatele pentru „Matescu” au delamatescu.ro sau profilul LinkedIn pe primele poziții. Schimbarea arată că rezultatele pentru numele corect sunt acum bune; nu arată că Google a renunțat la autocorectare. În sesiunea AI Overviews, unde forma originală nu a fost reselectată, Google a afișat încă rezultate pentru „Mateescu” la 11 din 14 interogări.</p>
      <p><strong>Bing (F2 → F3).</strong> F2: 5 HIT, 4 HIT parțial, 4 NULL, 1 NEDETERMINAT. F3: 11 HIT, 1 HIT parțial, 1 coliziune, 1 NULL. Cea mai clară schimbare e la Q13 („Cine este în spatele delamatescu.ro?”): NULL în F2, iar în F3 Bing afișează o casetă de răspuns cu titlul „Alex Matescu”, extrasă din delamatescu.ro. Q02, Q03, Q06 și Q11 trec de la HIT parțial la HIT. Q09 nu se compară: rezultatele sunt de același tip în ambele ferestre (doar avocatul), dar F2 le-a clasificat NULL, iar regulile F3 le clasifică COLIZIUNE.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_f3_bing_caseta_delamatescu.jpg" alt="Bing F3 Cine este în spatele delamatescu.ro" loading="lazy" />
        <figcaption>Fig. 9 — Bing, F3, <code>Cine este în spatele delamatescu.ro?</code> (AM-F3-E158). Bing afișează o casetă de răspuns cu titlul „Alex Matescu”, extrasă din delamatescu.ro, și site-ul pe prima poziție organică. În F2, aceeași interogare era NULL (Fig. 7). Verdict: HIT.</figcaption>
      </figure>
      <p><strong>Google AI Mode (F2 → F3): nelogat în ambele ferestre.</strong> F2: 7 identificări (6 HIT, 1 HIT-C), 3 coliziuni dezambiguizate corect, 4 coliziuni. F3: 3 HIT-C, 1 HIT parțial, 2 coliziuni dezambiguizate corect, 5 coliziuni, 3 NULL. E singura suprafață cu un recul clar. Q04 și Q05 (Sibiu), Q10 (AUMOVIO) și Q11 (inginer) erau HIT în F2; în F3 devin coliziuni sau NULL. La Q10, AI Mode afirmă că „nu există nicio legătură publică” între Alex Matescu și AUMOVIO. Observ reculul, nu îl pot explica.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_f3_ai_mode_aumovio_null.jpg" alt="Google AI Mode F3 Alex Matescu AUMOVIO" loading="lazy" />
        <figcaption>Fig. 10 — Google AI Mode, F3, <code>Alex Matescu AUMOVIO</code> (AM-F3-E182). Sistemul răspunde că nu există „nicio legătură publică sau oficială cunoscută” între Alex Matescu și AUMOVIO și cere detalii. În F2, aceeași interogare era HIT. Verdict: NULL.</figcaption>
      </figure>
      <p><strong>Copilot și Google AI Overviews: primul moment de măsurare.</strong> Copilot a fost NEADJUDICAT în toate ferestrele anterioare. În F3: 8 HIT-C, 2 HIT parțial, 1 coliziune, 3 NULL. Rezultatul lui Copilot nu se compară cu nimic; e punctul de pornire pentru ferestrele următoare. Google AI Overviews: 2 HIT-C, 12 NEAFIȘAT.</p>
      <h2 id="31-ce-arata-f3-in-plus">31. Ce arată F3 în plus</h2>
      <p><strong>Anchor Dependence a scăzut la majoritatea asistenților.</strong> La interogările generice (Q01–Q03), ChatGPT și Copilot identifică persoana la toate trei, Perplexity la toate trei (Q03 parțial), Gemini la două, Bing la toate, Google Search la toate (Q03 parțial). În F1, Claude și Gemini aveau nevoie de ancoră. În F3, dependența persistă la Claude, care identifică persoana doar pe interogările cu domeniul, și la Google AI Mode.</p>
      <p><strong>Ancora AUMOVIO a slăbit în unele sisteme.</strong> La Q10, AI Mode răspunde NULL, iar Copilot și Perplexity spun explicit că nu pot confirma legătura cu AUMOVIO. Gemini o deduce din profil, fără sursă. Același sistem identifică însă persoana fără ancoră. O interpretare posibilă: legătura nume → site e mai bine coroborată public decât legătura nume → angajator. E o ipoteză, nu o concluzie.</p>
      <p><strong>Interogarea de dezambiguizare produce o coliziune nouă: fuziunea declarată.</strong> La Q09, Copilot, Gemini, Google AI Mode și Perplexity afirmă că „Alex Matescu” e o formă scurtă sau o greșeală de scriere a numelui avocatului Alexandru Mateescu. Nu e o confuzie implicită, ci o afirmație explicită despre identitate. Doar ChatGPT separă corect cele două persoane.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_f3_ai_mode_fuziune_avocat.jpg" alt="Google AI Mode F3 Alex Matescu vs Alexandru Mateescu avocat" loading="lazy" />
        <figcaption>Fig. 11 — Google AI Mode, F3, <code>Alex Matescu vs Alexandru Mateescu avocat</code> (AM-F3-E180). Sistemul afirmă că cele două nume „se referă la aceeași persoană” și descrie doar avocatul. Copilot, Gemini și Perplexity fac aceeași afirmație la această interogare. Verdict: COLIZIUNE.</figcaption>
      </figure>
      <p><strong>Varianta „Alex Mateescu” nu mai e contopită cu subiectul.</strong> La Q08, toate cele opt suprafețe care au răspuns dau NULL: descriu alte persoane reale cu acest nume, fără să le amestece cu subiectul. Acesta e rezultatul așteptat pentru un nume care aparține altor oameni.</p>
      <p><strong>Eroarea vizuală persistă.</strong> Perplexity (Q06, Q11) și ChatGPT (Q09) afișează fotografii ale altor persoane lângă un text corect. La ChatGPT Q09, fotografia e pusă chiar lângă numele „Alex Matescu”. Am confirmat că niciuna dintre aceste fotografii nu mă reprezintă. Textul și imaginea rămân adjudecate separat, ca în secțiunea 11.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_f3_perplexity_imagini_alte_persoane.jpg" alt="Perplexity F3 Alex Matescu imagini" loading="lazy" />
        <figcaption>Fig. 12 — Perplexity, F3, <code>Alex Matescu</code> (AM-F3-E261). Textul identifică persoana corect, iar sursa principală e delamatescu.ro. Niciuna dintre fotografiile afișate nu îl reprezintă pe subiect (confirmat de el). Verdict pe text: HIT-C; asocierea vizuală e greșită.</figcaption>
      </figure>
      <p><strong>Limba răspunsului.</strong> Interogările sunt în română, dar asistenții au răspuns în engleză la o parte dintre ele: Claude la 7 din 14, Perplexity la 6, ChatGPT la 5 (și parțial la încă una), Gemini la 3 (și parțial la încă una), Copilot la 2. Google Search, Bing și Google AI Mode au răspuns în română la toate. Limba nu schimbă verdictul de identificare.</p>
      <p><strong>Interogările pe domeniu sunt cele mai stabile.</strong> Q13 e identificată pe toate cele nouă suprafețe, iar Q12 pe opt (cu ChatGPT ca excepție, la abaterea de formulare). Tot aici a apărut singurul conținut Google AI Overviews din F3.</p>
      <h2 id="32-concluzie-provizorie-dupa-f3">32. Concluzie provizorie după F3</h2>
      <p>Concluzia din secțiunea 27 descria F1. După F3, datele arată altceva:</p>
      <ul>
        <li>căutarea clasică rezolvă acum persoana la 11 din 14 interogări, atât pe Google (cu forma originală a numelui reselectată), cât și pe Bing;</li>
        <li>ChatGPT rămâne stabil, iar Gemini trece de la cea mai instabilă suprafață din F1 la una dintre cele mai consecvente;</li>
        <li>Google AI Mode are un recul față de F2, iar Claude, într-o configurație nouă, aproape nu mai identifică persoana;</li>
        <li>coliziunile s-au mutat: nu mai apar la variantele de nume, ci la interogarea de dezambiguizare, unde patru sisteme declară că două persoane diferite sunt una singură.</li>
      </ul>
      <p>Succesiunea propusă în secțiunea 24 (absent → recuperabil → dependent de ancoră → dezambiguizat → stabil) rămâne o ipoteză. F3 o susține parțial: mai multe sisteme identifică persoana fără ancoră. O și complică: interogarea de dezambiguizare produce acum coliziuni mai puternice, iar o ancoră profesională (AUMOVIO) funcționează mai slab decât numele simplu. Nu pot atribui nicio schimbare unei intervenții anume (secțiunea 20).</p>
      <p><strong>Experimentul continuă.</strong></p>

      <h2 id="33-ce-urmarim-in-f4">33. Ce urmărim în F4</h2>

      <p>Secțiunea 26 a stabilit obiectivele după F1. F3 adaugă cinci obiective noi pentru următoarea fereastră:</p>

      <ul>
        <li><strong>Fuziunea declarată la Q09.</strong> Dacă Copilot, Gemini, Google AI Mode și Perplexity afirmă în continuare că „Alex Matescu” și avocatul Alexandru Mateescu sunt aceeași persoană.</li>
        <li><strong>Ancora AUMOVIO.</strong> Dacă sistemele care au identificat persoana fără ancoră ajung să confirme și legătura cu AUMOVIO (Q10).</li>
        <li><strong>Reculul Google AI Mode.</strong> Dacă AI Mode revine la identificările din F2 la Q04, Q05, Q10 și Q11 sau dacă reculul din F3 se menține.</li>
        <li><strong>Copilot față de punctul de pornire.</strong> Prima comparație reală pentru Copilot, față de rezultatele din F3 (secțiunea 30).</li>
        <li><strong>Q12 cu formularea canonică.</strong> Rularea lui „delamatescu.ro” exact cum e în Query Set, pe toate suprafețele, ca rezultatul ChatGPT de la Q12 să devină comparabil.</li>
      </ul>

      <p>Pentru comparabilitate, F4 păstrează condițiile din F3 sau declară explicit fiecare diferență: aceeași stare de autentificare pe fiecare suprafață, o singură regulă pentru reformularea Google și Bing (reselectarea formei originale în toate sesiunile) și aceeași regulă pentru Perplexity pe toate interogările.</p>

      <h2 id="transparenta-metodologica">Transparență metodologică</h2>

      <p>Acest studiu folosește identitatea autorului AI Visibility Lab drept subiect experimental. Autorul controlează delamatescu.ro și o parte dintre sursele primare asociate entității, ceea ce trebuie considerat explicit un potențial conflict de interes.</p>

      <p>În același timp, această situație permite documentarea directă a surselor, intervențiilor și identității reale care trebuie evaluată — și, așa cum arată incidentul din secțiunea 15, chiar o condiționează: verificarea rezultatelor despre „Taste the Corn” a putut fi corectată corect doar pentru că subiectul studiat și autorul lui sunt aceeași persoană, singura sursă autoritară pentru propria identitate. Pentru o entitate terță, o eroare similară de verificare ar fi putut rămâne needetectată.</p>

      <p>Capturile originale sunt păstrate în evidence set. Pentru T0, acestea sunt publicate integral, verificabil prin checksum SHA-256, ca pachet de dovezi separat (secțiunea 5) — proces care nu exista în această formă la publicarea inițială a studiului și care a fost aplicat retroactiv, fără a modifica verdictele deja descrise. Pachetul v3.0 (secțiunea 15) extinde aceeași disciplină de verificare la Google Search, Bing și Google AI Mode.</p>

      <p>T0/F0 conține limitări metodologice și nu a fost reconstruit retrospectiv pentru a respecta standardele dezvoltate ulterior. Maturizarea procesului de documentare a dovezilor, descrisă în secțiunea 5, este distinctă de maturizarea entității observate — prima privește rigoarea mea ca experimentator, a doua privește obiectul studiului.</p>

      <p>Query Drift-ul identificat în F1 este păstrat în studiu.</p>

      <p>Microsoft Copilot rămâne NEADJUDICAT (secțiunea 15) — nu din lipsă de date, ci pentru că datele disponibile din pachetul v3.0 au fost capturate într-o configurație de sesiune necomparabilă cu protocolul curat. Motoarele insuficient adjudecate nu sunt incluse în agregările cantitative.</p>

      <p>Corelația temporală dintre intervențiile digitale și schimbarea răspunsurilor nu este prezentată drept cauzalitate.</p>

      <p>F3 (adăugat la 23 octombrie 2026). Copilot, NEADJUDICAT în ferestrele anterioare, este adjudecat în F3 ca prim moment de măsurare (secțiunea 30), fără comparație cu ferestrele anterioare. Condițiile de sesiune diferă între ferestre și între suprafețe (secțiunile 6 și 28); comparațiile din secțiunea 30 le declară pentru fiecare suprafață.</p>
      <p>Adjudecarea F3 a fost pregătită cu asistența unui model AI (Claude), pe capturile din pachet, după reguli scrise înainte de citirea capturilor și publicate împreună cu matricea. Claude este și una dintre suprafețele măsurate; regulile au fost aplicate la fel pe toate suprafețele. Faptele biografice neobișnuite și verdictele de graniță le-am confirmat eu, înainte de publicare. O primă versiune a matricei (v1.1, nepublicată) afirma, neconfirmat, că o fotografie afișată de ChatGPT mă reprezintă; după verificare, am corectat-o în v1.2, fără să se schimbe vreun verdict.</p>

      <p><strong>Status: studiu longitudinal în desfășurare.</strong></p>

      <h2 id="istoricul-versiunilor">Istoricul versiunilor</h2>
      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr><td>1.0</td><td>4 septembrie 2026</td><td>Publicare inițială: T0/F0 și F1, cu matricea F1 pentru ChatGPT, Claude, Gemini și Perplexity.</td></tr>
          <tr><td>1.1</td><td>14 septembrie 2026</td><td>Pachetul de dovezi T0 publicat și descris în secțiunea 5.</td></tr>
          <tr><td>1.2</td><td>17 septembrie 2026</td><td>Pachetul de dovezi F1 (arhiva v2.0) publicat și descris în secțiunea 6.</td></tr>
          <tr><td>1.3</td><td>18 septembrie 2026</td><td>Pachetul v3.0 și adjudecarea Google Search, Bing și Google AI Mode (secțiunile 15–19), inclusiv eroarea de verificare „Taste the Corn”.</td></tr>
          <tr><td>1.4</td><td>23 octombrie 2026</td><td>Sumarul punctelor de măsurare la început; statutul NEAFIȘAT în taxonomie (secțiunea 4); condițiile de sesiune din F1 (secțiunea 6); F3 adjudecat pe 9 suprafețe (secțiunile 28–32), cu figurile 9–12; obiectivele pentru F4 (secțiunea 33); Copilot măsurat prima dată; transparența metodologică completată pentru F3; clarificare datată în secțiunea 15 despre publicarea pachetului v3.0. Secțiunile 1–27 nu au fost rescrise.</td></tr>
        </tbody>
      </table>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală: 23 octombrie 2026.</em></p>
`;
