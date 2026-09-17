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
    "Studiu longitudinal Tabula Rasa despre modul în care ChatGPT, Claude, Gemini și Perplexity rezolvă identitatea Alex Matescu între T0/F0 și F1, cu dovezi vizuale, coliziuni de entitate, Anchor Dependence și limite metodologice.",
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
  dateModified: "2026-09-17",
  lastReviewed: "2026-09-17",
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
    "Alex Matescu",
  ],
  faq: [],
};

/** Conținutul propriu-zis al studiului de caz — fără metadate tehnice. */
export const tabulaRasaEntityResolutionStudiuDeCazHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-09-04T09:06:00+03:00">4 septembrie 2026</time> · Actualizat: <time datetime="2026-09-17">17 septembrie 2026</time> · Ultima verificare factuală: <time datetime="2026-09-17">17 septembrie 2026</time></p>

      <table>
        <tbody>
        <tr><th scope="row">Studiu de caz</th><td>#001 — Alex Matescu</td></tr>
        <tr><th scope="row">Experiment</th><td>Tabula Rasa</td></tr>
        <tr><th scope="row">Status</th><td>În desfășurare</td></tr>
        <tr><th scope="row">Faze analizate</th><td>T0/F0 → F1</td></tr>
        <tr><th scope="row">Obiect de studiu</th><td>Rezoluția unei entități personale în motoare de căutare și sisteme AI</td></tr>
        </tbody>
      </table>

      <blockquote>
        <p><strong>Evidence-backed case study.</strong> Rezultatele experimentale prezentate în această pagină sunt susținute, acolo unde evidence set-ul permite, prin capturi originale din ferestrele Tabula Rasa. Capturile au fost decupate doar pentru lizibilitate; query-ul și răspunsul relevant au fost păstrate.</p>
      </blockquote>

      <h2>Rezumat</h2>

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

      <h2>1. De la vizibilitate la identitate</h2>

      <p>Un motor poate găsi un nume fără să înțeleagă corect persoana din spatele lui, poate găsi mai multe persoane, poate favoriza una dintre ele, poate combina informații aparținând unor persoane diferite, poate evita complet răspunsul, sau poate identifica persoana corectă numai atunci când primește un indiciu suplimentar precum orașul, compania, profesia sau domeniul personal.</p>

      <p>Aceste situații nu sunt echivalente, iar din acest motiv, în Tabula Rasa nu mă interesează doar dacă șirul de caractere <strong>„Alex Matescu”</strong> apare într-un rezultat, ci mă interesează dacă sistemul rezolvă entitatea corectă. În cazul experimentului, entitatea urmărită poate fi aproximată printr-un set de relații:</p>

      <p><strong>Alex Matescu → Sibiu → engineering → AUMOVIO → delamatescu.ro</strong></p>

      <p>Aceste relații pot funcționa și ca <strong>ancore de dezambiguizare</strong>.</p>

      <p>Un sistem care recunoaște persoana doar după <code>Alex Matescu AUMOVIO</code> se află într-o situație diferită de unul care ajunge la aceeași persoană după simplul <code>Alex Matescu</code>.</p>

      <h2>2. Ipoteza Tabula Rasa</h2>

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

      <h2>3. Query Set-ul</h2>

      <p>Setul inițial conține 14 interogări care testează patru niveluri diferite ale identității.</p>

      <h3>Identitate</h3>

      <ol>
        <li>Cine este Alex Matescu?</li>
        <li>Ce știi despre Alex Matescu?</li>
        <li>Cu ce se ocupă Alex Matescu?</li>
      </ol>

      <h3>Locație</h3>

      <ol start="4">
        <li>Alex Matescu Sibiu</li>
        <li>Cine este Alex Matescu din Sibiu?</li>
      </ol>

      <h3>Dezambiguizare</h3>

      <ol start="6">
        <li>Alex Matescu</li>
        <li>Alexandru Matescu</li>
        <li>Alex Mateescu</li>
        <li>Alex Matescu vs Alexandru Mateescu avocat</li>
      </ol>

      <h3>Ancore</h3>

      <ol start="10">
        <li>Alex Matescu AUMOVIO</li>
        <li>Alex Matescu inginer / engineer</li>
        <li>delamatescu.ro</li>
        <li>Cine este în spatele delamatescu.ro?</li>
        <li>Alex Matescu LinkedIn</li>
      </ol>

      <p>Diferența dintre aceste query-uri este esențială. Dacă un sistem identifică persoana numai după domeniul personal, aceasta demonstrează că există o cale de retrieval, însă dacă o identifică fără alt context, avem un semnal mai puternic de entity resolution.</p>

      <h2>4. Taxonomia rezultatelor</h2>

      <p>Pentru fiecare combinație dintre query și sistem am folosit o taxonomie care evită reducerea rezultatelor la un simplu da/nu.</p>

      <p><strong>HIT</strong> înseamnă că sistemul identifică entitatea urmărită.</p>

      <p><strong>HIT PARȚIAL</strong> înseamnă că identificarea există, dar este incompletă, fragilă sau insuficient susținută.</p>

      <p><strong>COLIZIUNE</strong> apare atunci când altă entitate devine dominantă sau când mai multe persoane cu nume apropiate intră în același spațiu de răspuns.</p>

      <p><strong>CONFABULARE</strong> este folosit atunci când informația este atribuită greșit entității urmărite sau când sistemul construiește o identitate incorectă.</p>

      <p><strong>NULL</strong> înseamnă că sistemul nu poate identifica suficient entitatea.</p>

      <p><strong>INSTABIL</strong> este rezervat situațiilor în care aceeași interogare produce rezultate suficient de diferite în interiorul aceleiași ferestre.</p>

      <p><strong>NEDETERMINAT</strong> înseamnă că dovezile disponibile nu permit o clasificare suficient de sigură.</p>

      <h2>5. T0/F0 — punctul de pornire</h2>

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

      <h3>Pachetul de dovezi T0, publicat ulterior</h3>

      <p>Acest studiu a fost publicat inițial pe 4 septembrie 2026, pe baza observațiilor descrise mai sus. La acel moment, arhiva brută de capturi pentru T0 exista, dar nu era încă structurată într-un pachet de dovezi versionat, verificabil independent de mine.</p>

      <p>Pe 13 septembrie 2026 am formalizat și publicat acest pachet: 152 de capturi/dovezi din T0, acoperind ChatGPT, Claude, Gemini, Perplexity, Google Search, Google AI Mode, Bing și Microsoft Copilot, însoțite de un Evidence Index, un README și un manifest de checksum-uri SHA-256 pentru fiecare fișier. Pachetul este disponibil ca <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v1.0" target="_blank" rel="noopener noreferrer">GitHub Release — Alex Matescu T0 Evidence Archive v1.0</a> (arhivă v1.0 / metadate v1.0).</p>

      <p>Între cele două momente nu s-a schimbat doar starea entității observate, ci și rigoarea procesului prin care documentez dovezile. La publicarea inițială a acestui studiu nu exista încă un proces determinist de inventariere, clasificare, checksum și verificare a arhivelor brute — acest pachet T0 este primul aplicat retroactiv peste dovezile deja folosite pentru secțiunea de mai sus. Formalizarea nu schimbă verdictele deja descrise pentru T0 mai sus; schimbă doar modul în care dovada din spatele lor poate fi verificată independent. Contaminarea de sesiune și anomaliile de arhivare identificate în acest set sunt documentate explicit în pachet, nu ascunse — consecvent cu motivul pentru care public și erorile (secțiunea 21).</p>

      <p>Aceeași regulă se va aplica oricărei formalizări similare pentru fazele următoare: momentul în care un pachet de dovezi este publicat nu coincide neapărat cu momentul în care fereastra de măsurare a avut loc efectiv, iar acest decalaj va fi mereu documentat explicit, nu tăcut.</p>

      <h2>6. F1 — prima fereastră în care diferențele dintre sisteme devin foarte clare</h2>

      <p>Pentru F1 am putut adjudeca integral setul de 14 query-uri în patru sisteme AI:</p>

      <p><strong>ChatGPT, Claude, Gemini și Perplexity.</strong></p>

      <p>Rezultatele lor nu descriu aceeași realitate.</p>

      <h3>Pachetul de dovezi F1, publicat ulterior</h3>

      <p>Rezultatele F1 descrise în această secțiune și în secțiunile 7–15 au fost capturate în perioada 4–6 august 2026. Ca și în cazul T0, arhiva brută a existat înainte de a fi structurată într-un pachet de dovezi versionat, verificabil independent de mine.</p>

      <p>Pe 17 septembrie 2026 am publicat acest pachet: 492 de capturi/dovezi, acoperind cele patru sisteme adjudecate integral în matricea din secțiunea 14 (ChatGPT, Claude, Gemini, Perplexity), precum și Google Search, Google AI Mode, Bing și Microsoft Copilot — sistemele NEADJUDICAT din secțiunea 15 — însoțite de un Evidence Index, un README și un manifest de checksum-uri SHA-256 pentru fiecare fișier. Pachetul este disponibil ca <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-alex-matescu-t0-v2.0" target="_blank" rel="noopener noreferrer">GitHub Release — Alex Matescu T0 Evidence Archive v2.0</a> (arhivă v2.0 / metadate v2.0).</p>

      <p>La fel ca la T0, formalizarea nu schimbă niciun verdict deja descris pentru F1 — schimbă doar modul în care dovada din spatele lor poate fi verificată independent. Query Drift-ul descris în secțiunea 12 este documentat direct în acest pachet: reformularea „PRO TV” în locul „avocat” apare consecvent în ChatGPT, Claude și Perplexity. Pachetul mai documentează explicit o anomalie de arhivare — un set de capturi din Google Search plasat inițial în folderul de interogare greșit, corectată doar în documentația indexului, nu prin modificarea fișierelor brute — și o sesiune Perplexity în care contul autentificat purta chiar numele entității urmărite, un risc rezidual de personalizare marcat explicit ca atare în index, nu ascuns.</p>

      <h2>7. ChatGPT — rezoluție puternică inclusiv fără ancoră</h2>

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

      <h2>8. Claude — informația există, dar query-ul trebuie să o activeze</h2>

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

      <h3>Anchor Dependence</h3>

      <p>Cu cât un sistem are nevoie de mai multe informații auxiliare pentru a ajunge la persoana corectă, cu atât rezoluția entității este mai dependentă de context.</p>

      <p>Tabula Rasa va urmări dacă această dependență scade în fazele următoare.</p>

      <h2>9. Gemini — de la identitate greșită la identificare corectă printr-un singur cuvânt</h2>

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

      <h2>10. Coliziunea poate deveni mai gravă decât simpla absență</h2>

      <p>Există o diferență importantă între un sistem care spune <strong>„Nu găsesc suficiente informații.”</strong> și unul care spune cu încredere <strong>„Aceasta este persoana”</strong> despre persoana greșită. În primul caz avem un <code>NULL</code>. În al doilea putem avea <code>COLIZIUNE</code> sau <code>CONFABULARE</code>. Din perspectiva identității digitale, al doilea scenariu este potențial mai problematic.</p>

      <p>O absență nu produce neapărat o informație falsă despre subiect, dar o fuziune de entități poate produce una. Gemini oferă și un exemplu foarte clar pentru această problemă în query-ul de dezambiguizare referitor la avocat. Sistemul afirmă că Alex Matescu și Alexandru Mateescu sunt aceeași persoană. Aceasta nu este doar o lipsă de informație ci este o eroare de entity resolution.</p>

      <h2>11. Perplexity — textul poate fi corect, iar imaginea greșită</h2>

      <p>Perplexity prezintă un alt tip de problemă. Textual, sistemul identifică foarte frecvent entitatea urmărită, dar în aceeași interogare poate afișa imagini ale altor persoane.</p>

      <figure>
        <img src="/images/lab/tabula-rasa-entity-resolution-studiu-de-caz/fig_perplexity_image_mismatch.jpg" alt="Perplexity image entity mismatch" loading="lazy" />
        <figcaption>Fig. 5 — Perplexity, F1, <code>Cine este Alex Matescu?</code>. Query-ul și rezultatul textual se referă la entitatea urmărită, dar modulul vizual prezintă persoane care nu reprezintă subiectul. Fenomen clasificat aici drept image–entity mismatch.</figcaption>
      </figure>

      <p>Acest lucru ridică o problemă care nu apare dacă evaluăm numai textul. Pentru un utilizator, răspunsul AI este experiența completă, iar dacă textul descrie o persoană, iar imaginile sugerează alta, reprezentarea rezultată este contradictorie. Din acest motiv, vizibilitatea AI nu ar trebui măsurată exclusiv prin:</p>

      <p><strong>mențiune</strong>, <strong>citare</strong>, sau <strong>corectitudinea textului</strong>.</p>

      <p>Trebuie observată și coerența multimodală.</p>

      <p>Profilul textual Perplexity în F1 este <strong>12 HIT / 2 COLIZIUNI.</strong>, dar acest scor nu surprinde complet problema imaginilor.</p>

      <h2>12. Query Drift — o eroare a experimentului, nu a motorului</h2>

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

      <h2>13. Primul pattern major: Anchor Dependence</h2>

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

      <h3>Anchor Dependence</h3>

      <p>O entitate cu dependență ridicată de ancore poate fi recuperabilă dar încă slab stabilizată semantic, in timp ce o entitate cu dependență redusă ar trebui să poată fi identificată corect chiar și atunci când query-ul conține foarte puține informații.</p>

      <p>Tabula Rasa va urmări dacă această dependență scade în fazele următoare.</p>

      <h2>14. Rezultatele F1 nu reprezintă un clasament al modelelor</h2>

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

      <h2>15. Google, Bing, Google AI Search și Copilot</h2>

      <p>Evidence set-ul conține și rulări pentru Google Search, Bing, Google AI Search și Copilot, dar aceste sisteme nu sunt incluse încă în agregarea cantitativă prezentată mai sus dintr-un motiv metodologic:</p>

      <p>Numărul mare de capturi, paginile succesive și mapping-ul query → screenshot nu permit încă aceeași adjudecare sigură pe care am realizat-o pentru cele patru sisteme incluse.</p>

      <p>Prin urmare, în această versiune prefer <strong>NEADJUDICAT</strong> în locul unui rezultat aproximativ. Datele există, dar verdictul nu este încă suficient de sigur.</p>

      <h2>16. Ce s-a schimbat între T0 și F1?</h2>

      <p>Între cele două ferestre, ecosistemul digital al entității s-a schimbat. Website-ul delamatescu.ro a fost dezvoltat, informațiile despre identitate au devenit mai coerente, iar structura publică asociată persoanei a evoluat. Totuși, istoricul complet al intervențiilor dintre T0 și F1 nu este încă reconstruit cu suficiente dovezi cronologice din cod, motiv pentru care studiul nu formulează afirmații de forma:</p>

      <p><strong>„implementarea X a determinat răspunsul Y”.</strong></p>

      <p>Aceasta ar depăși ceea ce datele disponibile demonstrează.</p>

      <p>Formularea corectă este:</p>

      <p><strong>între T0 și F1 observăm o schimbare a stării rezultatelor; cauza exactă și contribuția fiecărei intervenții nu pot fi izolate din datele disponibile în această versiune.</strong></p>

      <p>Intervention Log-ul poate fi adăugat ulterior, fără rescrierea rezultatelor deja publicate.</p>

      <h2>17. De ce T0 imperfect nu trebuie eliminat</h2>

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

      <h2>18. Ce NU demonstrează acest studiu</h2>

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

      <h2>19. AI Visibility nu este o variabilă binară</h2>

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

      <h2>20. Un model provizoriu al maturității entității</h2>

      <p>Datele de până acum sugerează o posibilă succesiune:</p>

      <ul>
        <li><strong>Absent</strong> → sistemul nu recuperează entitatea;</li>
        <li><strong>Recoverable</strong> → entitatea poate fi găsită dacă primește suficiente indicii;</li>
        <li><strong>Anchor-dependent</strong> → identificarea corectă depinde încă de companie, oraș, profesie, domeniu sau alt descriptor;</li>
        <li><strong>Disambiguated</strong> → sistemul începe să separe corect entitatea de persoane cu nume similare;</li>
        <li><strong>Stable</strong> → query-uri generale și rulări repetate produc aceeași entitate cu puține coliziuni.</li>
      </ul>

      <p>Aceasta este una dintre ipotezele rezultate din observarea F0 și F1 și trebuie testată în fazele următoare, nefiind încă un model validat.</p>

      <h2>21. De ce public și erorile</h2>

      <ul>
        <li>Query Drift-ul putea fi eliminat din articol.</li>
        <li>T0 putea fi „curățat”.</li>
        <li>Capturile în care sistemele greșesc puteau fi omise.</li>
        <li>Gemini putea fi prezentat numai prin query-ul AUMOVIO.</li>
        <li>Perplexity putea fi evaluat doar textual, fără imaginile incorecte.</li>
      </ul>

      <p>Toate acestea ar fi produs un studiu de caz mai frumos, dar ar fi produs un experiment mai slab.</p>

      <p>Tabula Rasa urmărește să documenteze ce se întâmplă, nu urmărește să demonstreze retrospectiv că o strategie a funcționat. Astfel, dacă metodologia se schimbă, atunci schimbarea trebuie documentată, dacă motorul greșește, atunci eroarea rămâne, iar dacă experimentatorul greșește, eroarea trebuie să rămână și ea.</p>

      <h2>22. Ce urmărim în următoarele faze</h2>

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

      <h2>23. Concluzie provizorie</h2>

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

      <h2>Transparență metodologică</h2>

      <p>Acest studiu folosește identitatea autorului AI Visibility Lab drept subiect experimental. Autorul controlează delamatescu.ro și o parte dintre sursele primare asociate entității, ceea ce trebuie considerat explicit un potențial conflict de interes.</p>

      <p>În același timp, această situație permite documentarea directă a surselor, intervențiilor și identității reale care trebuie evaluată.</p>

      <p>Capturile originale sunt păstrate în evidence set. Pentru T0, acestea sunt publicate integral, verificabil prin checksum SHA-256, ca pachet de dovezi separat (secțiunea 5) — proces care nu exista în această formă la publicarea inițială a studiului și care a fost aplicat retroactiv, fără a modifica verdictele deja descrise.</p>

      <p>T0/F0 conține limitări metodologice și nu a fost reconstruit retrospectiv pentru a respecta standardele dezvoltate ulterior. Maturizarea procesului de documentare a dovezilor, descrisă în secțiunea 5, este distinctă de maturizarea entității observate — prima privește rigoarea mea ca experimentator, a doua privește obiectul studiului.</p>

      <p>Query Drift-ul identificat în F1 este păstrat în studiu.</p>

      <p>Motoarele insuficient adjudecate nu sunt incluse în agregările cantitative.</p>

      <p>Corelația temporală dintre intervențiile digitale și schimbarea răspunsurilor nu este prezentată drept cauzalitate.</p>

      <p><strong>Status: studiu longitudinal în desfășurare.</strong></p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală: 17 septembrie 2026.</em></p>
`;
