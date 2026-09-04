import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const ceEsteEntitateAiStudiuDeCazMeta: LabArticleMeta = {
  title:
    "Ce este o entitate pentru AI și motoarele de căutare. Studiu de caz: de ce internetul mă asociază cu porumbul",
  description:
    "Ce înseamnă entity resolution, cum apar coliziunea, fragmentarea și contaminarea identității și ce poate demonstra un studiu de caz real fără a inventa mecanisme interne ale Google sau sistemelor AI.",
  canonical:
    "https://delamatescu.ro/lab/articole/ce-este-entitate-ai-studiu-de-caz",
  category: "Entities & Citations",
  articleType: "Analiză de caz",
  datePublished: "2026-08-05",
  dateModified: "2026-08-11",
  lastReviewed: "2026-08-19",
  about: [
    { name: "Entity resolution" },
    { name: "Entity disambiguation" },
    { name: "Structured data" },
    { name: "Digital identity" },
  ],
  keywords: [
    "entity resolution",
    "entitate SEO",
    "Knowledge Graph",
    "structured data Person",
    "sameAs",
    "Wikidata notability",
    "dezambiguizare identitate",
  ],
  citations: [
    {
      name: "Google, Amit Singhal — Introducing the Knowledge Graph: things, not strings",
      url: "https://blog.google/products-and-platforms/products/search/introducing-knowledge-graph-things-not/",
    },
    {
      name: "Google Search Central — Introduction to structured data markup in Google Search",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      name: "Google Search Central — Article structured data",
      url: "https://developers.google.com/search/docs/appearance/structured-data/article",
    },
    {
      name: "Google Search Central — General structured data guidelines",
      url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    },
    {
      name: "Wikidata — Wikidata:Notability",
      url: "https://www.wikidata.org/wiki/Wikidata:Notability",
    },
    {
      name: "Wikidata — Requests for comment/Notability policy reform",
      url: "https://www.wikidata.org/wiki/Wikidata:Requests_for_comment/Notability_policy_reform",
    },
  ],
  faq: [
    {
      q: "Ce este o entitate în SEO și AI Search?",
      a: "Este un lucru identificabil din lumea reală — de exemplu o persoană, o organizație sau un loc — distinct de textul folosit pentru a-l menționa. Google a descris Knowledge Graph ca un model al entităților reale și al relațiilor dintre ele, sub formula „things, not strings”.",
    },
    {
      q: "De ce apar alte persoane când îmi caut numele?",
      a: "Pentru că același nume sau nume apropiate pot indica mai multe persoane, iar rezultatele depind de context și de informațiile disponibile. AI Visibility Lab numește această situație „coliziune”. Nu există o regulă publică prin care sistemul alege automat persoana cu cele mai multe mențiuni.",
    },
    {
      q: "Ce este fragmentarea identității?",
      a: "Este situația în care informațiile despre aceeași persoană există în mai multe roluri, grafii sau surse, dar relațiile dintre ele nu sunt suficient de clare. Este un model practic AI Visibility Lab, nu o metrică oficială Google.",
    },
    {
      q: "Structured data Person rezolvă problema?",
      a: "Nu singură. Structured data oferă informație machine-readable și Google recomandă url sau sameAs pentru a ajuta la înțelegerea autorilor, dar markupul trebuie să reflecte conținutul real și nu garantează reprezentarea finală în Search.",
    },
    {
      q: "Contează sursele independente?",
      a: "Pot conta ca surse suplimentare de coroborare, pentru că nu sunt controlate de persoana descrisă. Nu există însă un raport public de tipul „un articol de presă valorează cât N postări proprii”.",
    },
    {
      q: "Wikidata rezolvă entity resolution?",
      a: "Nu automat. Un item Wikidata poate oferi un identificator public și relații structurate dacă subiectul îndeplinește politica platformei. Nu există dovadă că Wikidata este sursa primară pentru toate motoarele sau că un item garantează dezambiguizarea externă.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const ceEsteEntitateAiStudiuDeCazHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-08-05">5 august 2026</time> · Actualizat: <time datetime="2026-08-11">11 august 2026</time> · Ultima verificare factuală: <time datetime="2026-08-19">19 august 2026</time></p>

      <p><strong>O identitate digitală devine mai ușor de dezambiguizat atunci când aceeași persoană, aceleași variante legitime de nume, aceleași roluri și aceleași surse sunt legate coerent între ele. Structured data, paginile canonice de identitate și sursele independente pot contribui la această coerență, dar niciuna nu garantează singură felul în care Google sau un sistem AI va reprezenta persoana.</strong></p>

      <p>Aceasta este miza corectă a studiului.</p>

      <p>Nu pot vedea mecanismul intern prin care Google, ChatGPT sau alt sistem decide cine este „Alex Matescu”. Pot însă observa ce documente apar, ce informații sunt publice, cum sunt legate între ele și unde identitatea mea este coerentă sau fragmentată.</p>

      <p>Această diferență dintre <strong>observație</strong> și <strong>mecanism presupus</strong> este esențială pentru orice analiză serioasă de entity visibility.</p>

      <h2>Testul pe propriul meu nume</h2>

      <p>În august 2026 am căutat propriul nume împreună cu localitatea, pentru a vedea ce informație publică domină rezultatele observabile.</p>

      <p>Primele rezultate erau despre un stand de porumb cu arome pe care l-am deschis în Sibiu. Povestea fusese preluată de publicații locale și economice.</p>

      <p>În aceeași căutare apăreau și rezultate nerelevante sau doar aproximativ apropiate de numele meu:</p>

      <ul>
        <li>persoane cu nume similare;</li>
        <li>o pagină de dezambiguizare pentru un nume apropiat;</li>
        <li>rezultate influențate de termenul geografic din query.</li>
      </ul>

      <p>În schimb, în rezultatele observate atunci apăreau mult mai puține informații despre:</p>

      <ul>
        <li>inginerie de sisteme;</li>
        <li>activitatea de scriere;</li>
        <li>AI Visibility Lab;</li>
        <li>GEO/AEO.</li>
      </ul>

      <h3>Ce demonstrează această observație</h3>

      <p>Demonstrează că, pentru query-ul și momentul respectiv, episodul antreprenorial era <strong>mai bine reprezentat în rezultatele publice observabile</strong> decât alte părți ale identității mele.</p>

      <h3>Ce NU demonstrează</h3>

      <p>Nu demonstrează că:</p>

      <ul>
        <li>Google Knowledge Graph mă clasifică intern drept „vânzător de porumb”;</li>
        <li>Google are un singur nod despre mine;</li>
        <li>un LLM folosește exact aceeași reprezentare;</li>
        <li>presa „cântărește” de un anumit număr de ori mai mult decât site-ul propriu;</li>
        <li>numărul brut de mențiuni determină identitatea.</li>
      </ul>

      <p>SERP ranking, entity resolution și generarea unui răspuns AI sunt procese diferite și nu trebuie confundate.</p>

      <h2>De la „strings” la „things”</h2>

      <p>În 2012, Google a descris Knowledge Graph prin formula devenită celebră <strong>„things, not strings”</strong>.</p>

      <p>Google explica atunci că o interogare precum „Taj Mahal” nu este doar o secvență de caractere: poate indica monumentul, un muzician, un cazinou sau altă entitate. Knowledge Graph a fost prezentat ca un model al <strong>entităților din lumea reală și al relațiilor dintre ele</strong>.<sup><a href="#fn-1">1</a></sup></p>

      <p>Aici se află diferența esențială.</p>

      <h3>String</h3>

      <p>Un string este text:</p>

      <blockquote><p>Alex Matescu</p></blockquote>

      <h3>Entitate</h3>

      <p>Entitatea este persoana reală la care acel text se referă.</p>

      <p>Aceeași persoană poate apărea sub:</p>

      <ul>
        <li>nume complet;</li>
        <li>formă scurtă;</li>
        <li>variante istorice;</li>
        <li>username;</li>
        <li>profil social;</li>
        <li>roluri profesionale diferite.</li>
      </ul>

      <p>Un matching lexical simplu nu este suficient pentru a decide întotdeauna la care persoană se referă o mențiune ambiguă. Entity-aware systems folosesc context, relații, surse și alte semnale pentru dezambiguizare.</p>

      <h2>Entity resolution, entity linking și entity disambiguation</h2>

      <p>În literatura tehnică apar mai mulți termeni apropiați:</p>

      <ul>
        <li><strong>entity recognition</strong> — identificarea unei mențiuni de tip persoană, organizație, loc etc.;</li>
        <li><strong>entity linking</strong> — legarea mențiunii de o entitate cunoscută;</li>
        <li><strong>entity disambiguation</strong> — alegerea entității corecte dintre mai multe candidate;</li>
        <li><strong>entity resolution</strong> — termen mai larg folosit pentru reconcilierea înregistrărilor sau mențiunilor care descriu aceeași entitate reală.</li>
      </ul>

      <p>În acest articol folosesc <strong>rezolvarea entității</strong> ca termen umbrelă pentru problema practică:</p>

      <blockquote><p>„Aceste mențiuni, profiluri și roluri aparțin aceleiași persoane sau unor persoane diferite?”</p></blockquote>

      <p>Nu presupun că Google sau OpenAI folosesc exact această taxonomie internă. Definițiile termenilor de bază — entitate, sursă de încredere, citare — sunt reunite și în <a href="/lab/cercetare/glosar-geo-aeo">glosarul GEO/AEO</a>.</p>

      <h2>Framework AI Visibility Lab: trei tipuri de eșec</h2>

      <p>AI Visibility Lab folosește trei categorii practice pentru auditarea unei identități digitale:</p>

      <ol>
        <li><strong>coliziune</strong>;</li>
        <li><strong>fragmentare</strong>;</li>
        <li><strong>contaminare</strong>.</li>
      </ol>

      <p>Aceasta este o taxonomie proprie de lucru, nu terminologie oficială Google sau OpenAI.</p>

      <h2>1. Coliziunea</h2>

      <p>Coliziunea apare atunci când aceeași mențiune sau mențiuni foarte apropiate pot indica mai multe persoane reale.</p>

      <p>Exemple:</p>

      <ul>
        <li>două persoane cu același nume;</li>
        <li>forme ortografice apropiate;</li>
        <li>transliterări;</li>
        <li>inițiale;</li>
        <li>variații istorice ale numelui.</li>
      </ul>

      <p>În cazul meu, rezultatele observate includeau persoane cu nume apropiate și rezultate nerelevante.</p>

      <h3>Ce putem spune</h3>

      <p>Există ambiguitate în spațiul public al numelui.</p>

      <h3>Ce nu putem spune</h3>

      <p>Nu putem afirma că sistemul:</p>

      <ul>
        <li>„fuzionează obligatoriu” persoanele;</li>
        <li>„alege automat persoana cu cele mai multe mențiuni”;</li>
        <li>aplică o regulă simplă de popularitate.</li>
      </ul>

      <p>Sistemele pot păstra mai multe candidate, pot folosi contextul query-ului și pot ajunge la rezultate diferite în suprafețe diferite.</p>

      <h3>Obiectivul practic</h3>

      <p>Nu poți elimina existența omonimilor.</p>

      <p>Poți însă reduce ambiguitatea propriei identități prin:</p>

      <ul>
        <li>nume consecvent;</li>
        <li>pagină de profil;</li>
        <li>relații explicite între profiluri;</li>
        <li>roluri descrise clar;</li>
        <li>structured data corectă;</li>
        <li>surse externe care identifică neechivoc persoana.</li>
      </ul>

      <h2>2. Fragmentarea</h2>

      <p>Fragmentarea este cazul în care informațiile despre aceeași persoană există, dar relațiile dintre ele sunt insuficient de clare.</p>

      <p>De exemplu, aceeași persoană poate apărea public ca:</p>

      <ul>
        <li>inginer;</li>
        <li>antreprenor;</li>
        <li>autor;</li>
        <li>consultant;</li>
        <li>participant la un proiect.</li>
      </ul>

      <p>Faptul că aceste roluri există separat nu este o problemă în sine.</p>

      <p>O persoană poate avea multe roluri legitime.</p>

      <p>Problema apare atunci când paginile și profilurile nu oferă suficiente legături pentru a arăta că toate descriu <strong>aceeași persoană</strong>.</p>

      <h3>Formulare corectă</h3>

      <blockquote><p><strong>Dacă sursele prezintă roluri diferite fără legături suficiente între ele, unui sistem îi poate fi mai greu să stabilească faptul că toate mențiunile descriu aceeași persoană.</strong></p></blockquote>

      <p>Nu există o metrică publică de tip:</p>

      <blockquote><p>„cinci roluri separate valorează mai puțin decât un rol repetat de cinci ori”.</p></blockquote>

      <p>Acea formulare ar inventa o unitate de „entity authority” care nu este documentată.</p>

      <h2>3. Contaminarea</h2>

      <p>Contaminarea este situația în care un sistem atribuie unei persoane o informație aparținând altei persoane.</p>

      <p>Exemplu ipotetic:</p>

      <blockquote><p>un răspuns combină ocupația unei persoane cu compania sau biografia unui omonim.</p></blockquote>

      <p>Fenomenul poate apărea în sisteme de search, knowledge extraction sau generare atunci când dezambiguizarea eșuează.</p>

      <p>Important:</p>

      <blockquote><p><strong>contaminarea este un rezultat observabil; mecanismul exact care a produs-o nu poate fi dedus automat din răspuns.</strong></p></blockquote>

      <h2>De ce episodul cu porumbul apare atât de clar</h2>

      <p>În cazul observat, numele meu era asociat cu episodul antreprenorial în mai multe articole publice.</p>

      <p>Alte roluri aveau o prezență publică mai redusă sau mai fragmentată.</p>

      <p>Această diferență este <strong>compatibilă</strong> cu faptul că rezultatele despre afacerea respectivă dominau căutarea.</p>

      <p>Dar nu pot transforma observația într-o formulă de weighting.</p>

      <p>Nu pot afirma:</p>

      <blockquote><p>„un articol de presă valorează cât 50 de postări proprii.”</p></blockquote>

      <p>Nu există o astfel de regulă publică.</p>

      <h3>Ce aduce totuși o sursă independentă</h3>

      <p>O sursă independentă are o proprietate importantă:</p>

      <blockquote><p><strong>poate corobora extern o asociere pe care persoana o declară despre sine.</strong></p></blockquote>

      <p>Dacă propriul site spune:</p>

      <blockquote><p>„Alex Matescu lucrează în AI Visibility”</p></blockquote>

      <p>aceasta este auto-descriere.</p>

      <p>Dacă o publicație independentă îl descrie în același context, avem a doua sursă care confirmă asocierea.</p>

      <p>Asta este important epistemic.</p>

      <p>Nu înseamnă că putem calcula un multiplicator algoritmic.</p>

      <h2>Co-apariția: utilă ca semnal editorial, nu ca formulă</h2>

      <p>Co-apariția dintre:</p>

      <ul>
        <li>nume;</li>
        <li>rol;</li>
        <li>organizație;</li>
        <li>proiect;</li>
        <li>locație;</li>
      </ul>

      <p>poate face o propoziție mai puțin ambiguă.</p>

      <p>Exemplu:</p>

      <blockquote><p>„Alex Matescu, autorul AI Visibility Lab”</p></blockquote>

      <p>este mai explicit decât:</p>

      <blockquote><p>„Alex a spus că...”</p></blockquote>

      <p>Dar nu există o regulă publică de tip:</p>

      <blockquote><p>„dacă numele apare de N ori lângă termenul GEO, GEO devine atributul entității.”</p></blockquote>

      <p>Co-apariția trebuie tratată ca <strong>clarificare semantică</strong>, nu ca hack algoritmic.</p>

      <h2>Sistemele sintetizează — dar nu după o formulă publică</h2>

      <p>Când întrebi:</p>

      <blockquote><p>„Cine este X?”</p></blockquote>

      <p>un răspuns scurt nu poate enumera fiecare episod din viața unei persoane.</p>

      <p>Sistemul selectează o parte din informația disponibilă.</p>

      <p>Dar nu știm că selecția se face după:</p>

      <ul>
        <li>număr de mențiuni;</li>
        <li>„corroboration weight”;</li>
        <li>autoritatea domeniului;</li>
        <li>o formulă fixă de „rol primar”.</li>
      </ul>

      <p>Formularea defensabilă este:</p>

      <blockquote><p><strong>Dacă rolul pe care vrei să îl comunici este slab reprezentat sau dificil de legat de identitatea ta, el poate lipsi din sintezele produse de sisteme.</strong></p></blockquote>

      <p>De aceea consistența identității publice contează. Semnalele mai largi care influențează ce surse selectează sistemele generative — dincolo de identitatea unei persoane — sunt tratate separat în <a href="/lab/cercetare/cum-aleg-motoarele-ai">cum aleg motoarele AI ce citează</a>.</p>

      <h2>Ce poți controla</h2>

      <p>Nu poți controla complet reprezentarea pe care un motor extern o construiește despre tine.</p>

      <p>Poți controla însă o parte din dovezile publice.</p>

      <h2>1. Definește o descriere principală pentru comunicare</h2>

      <p>Aceasta este o decizie de branding, nu o cerință a entity resolution.</p>

      <p>O persoană poate avea simultan mai multe roluri.</p>

      <p>Dar o descriere principală consecventă poate face comunicarea mai clară.</p>

      <p>Exemplu:</p>

      <blockquote><p>rol principal → activitatea pe care vrei să o comunici acum<br />roluri secundare → experiența care explică traiectoria</p></blockquote>

      <p>Nu este nevoie să ștergi trecutul sau să ascunzi roluri reale.</p>

      <h2>2. Folosește o formă canonică a numelui</h2>

      <p>Alege forma principală folosită public și păstreaz-o consecvent.</p>

      <p>Variantele legitime pot fi declarate explicit.</p>

      <p>De exemplu:</p>

      <pre><code>{
  "@type": "Person",
  "name": "Alex Matescu",
  "alternateName": [
    "Alexandru Matescu",
    "Alexandru-Costi Matescu"
  ]
}</code></pre>

      <p><code>alternateName</code> trebuie folosit numai pentru variante reale ale identității, nu pentru grafii inventate în scop SEO.</p>

      <h2>3. Construiește o pagină canonică de identitate</h2>

      <p>În loc de „pagină de dezambiguizare”, termenul mai potrivit pentru site-ul propriu este:</p>

      <blockquote><p><strong>pagină canonică de identitate / pagină About</strong></p></blockquote>

      <p>Ea poate lega într-un singur loc:</p>

      <ul>
        <li>numele;</li>
        <li>variantele legitime;</li>
        <li>biografia;</li>
        <li>rolurile;</li>
        <li>proiectele;</li>
        <li>cronologia;</li>
        <li>profilurile externe;</li>
        <li>publicațiile;</li>
        <li>organizațiile relevante.</li>
      </ul>

      <p>Această pagină nu obligă Google sau un LLM să o folosească.</p>

      <p>Dar oferă o sursă centrală, coerentă și crawlabilă care explică explicit relațiile dintre informațiile de pe propriul domeniu.</p>

      <h2>4. Folosește structured data <code>Person</code> corect</h2>

      <p>Google spune că structured data oferă indicii explicite despre semnificația conținutului și că datele trebuie să descrie ceea ce este efectiv prezent pe pagină.<sup><a href="#fn-2">2</a></sup></p>

      <p>Pentru autorii articolelor, Google recomandă:</p>

      <ul>
        <li><code>@type: Person</code>;</li>
        <li><code>name</code>;</li>
        <li><code>url</code> sau <code>sameAs</code>;</li>
      </ul>

      <p>pentru a ajuta Google să înțeleagă mai bine cine este autorul.<sup><a href="#fn-3">3</a></sup></p>

      <p>Google spune explicit că poate înțelege atât <code>url</code>, cât și <code>sameAs</code> pentru dezambiguizarea autorilor.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Ce NU face structured data</h3>

      <p>Nu:</p>

      <ul>
        <li>garantează Knowledge Panel;</li>
        <li>garantează citarea AI;</li>
        <li>obligă Google să accepte toate afirmațiile;</li>
        <li>înlocuiește conținutul vizibil.</li>
      </ul>

      <p>Google cere ca structured data să descrie conținutul real al paginii și nu garantează apariția unui rezultat special chiar dacă markupul este valid.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <h2>5. Folosește <code>sameAs</code> numai pentru identități neechivoce</h2>

      <p><code>sameAs</code> nu este o listă de linkuri promoționale.</p>

      <p>Folosește-l pentru URL-uri care identifică aceeași persoană.</p>

      <p>Google recomandă URL-uri valide către pagini care oferă mai multe informații despre autor și poate utiliza <code>sameAs</code> în structured data.<sup><a href="#fn-3">3</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <p>Exemple potrivite pot include:</p>

      <ul>
        <li>profil profesional real;</li>
        <li>profil social public real;</li>
        <li>pagină de autor;</li>
        <li>profil într-o organizație;</li>
        <li>alte pagini care identifică neechivoc persoana.</li>
      </ul>

      <h2>6. Sursele externe pot corobora — fără garanții</h2>

      <p>Interviurile, articolele, paginile de speaker, profilele profesionale și mențiunile legitime pot face identitatea mai ușor de verificat din mai multe surse.</p>

      <p>Dar nu urmări artificial aceeași formulă peste tot.</p>

      <p>Obiectivul este:</p>

      <blockquote><p><strong>coerență factuală, nu repetare mecanică.</strong></p></blockquote>

      <p>O sursă externă valoroasă spune adevărul despre persoană în propriul context editorial.</p>

      <h2>7. Wikidata: identificator suplimentar, nu buton magic</h2>

      <p>Wikidata este un knowledge graph public.</p>

      <p>Un item Wikidata poate oferi:</p>

      <ul>
        <li>un identificator public;</li>
        <li>aliases;</li>
        <li>relații;</li>
        <li>afirmații structurate;</li>
        <li>referințe;</li>
        <li>legături către proiecte Wikimedia.</li>
      </ul>

      <p>Dar nu există o sursă care să permită afirmația:</p>

      <blockquote><p>„Wikidata este sursa primară de dezambiguizare pentru toate motoarele majore.”</p></blockquote>

      <p>Google nu a documentat o astfel de dependență. La lansarea Knowledge Graph, Google menționa mai multe surse, inclusiv Freebase, Wikipedia, CIA World Factbook și informații găsite pe web.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Notabilitatea Wikidata</h3>

      <p>Politica Wikidata nu se reduce la:</p>

      <blockquote><p>„trebuie să ai articole independente despre tine”.</p></blockquote>

      <p>Politica actuală permite mai multe căi de notabilitate și este formulată intenționat suficient de flexibil. În 2026 există și o discuție activă privind reformarea politicii.<sup><a href="#fn-5">5</a></sup><sup><a href="#fn-6">6</a></sup></p>

      <p>Prin urmare:</p>

      <blockquote><p><strong>creează sau editează un item numai dacă subiectul îndeplinește politica actuală Wikidata; nu trata Wikidata ca instrument de SEO care trebuie obținut cu orice preț.</strong></p></blockquote>

      <p>Chiar și atunci când există un item valid, el oferă o sursă suplimentară de identificare. Nu garantează ce va face Google, OpenAI sau alt sistem cu informația.</p>

      <h2>8. Măsoară în timp</h2>

      <p>Definește un set fix de întrebări:</p>

      <ul>
        <li>cine este [nume];</li>
        <li>ce face [nume];</li>
        <li>cu ce este cunoscut [nume];</li>
        <li>ce proiecte are [nume].</li>
      </ul>

      <p>Rulează-le periodic pe sistemele relevante.</p>

      <p>Salvează:</p>

      <ul>
        <li>data;</li>
        <li>produsul;</li>
        <li>modul de search;</li>
        <li>răspunsul;</li>
        <li>sursele/citările;</li>
        <li>ce rol apare;</li>
        <li>eventualele confuzii.</li>
      </ul>

      <p>Repetă rulările, deoarece sistemele generative sunt nedeterministe.</p>

      <p>Scopul nu este să descoperi un „entity score”.</p>

      <p>Scopul este să vezi dacă reprezentarea observabilă se schimbă.</p>

      <h2>Ce nu funcționează ca strategie</h2>

      <h3>Ștergerea trecutului</h3>

      <p>Dacă informația este reală și legitim publicată, încercarea de a rescrie identitatea prin negarea ei nu construiește coerență.</p>

      <p>Mai util este să oferi context.</p>

      <p>Un episod antreprenorial poate deveni:</p>

      <blockquote><p>parte din traiectorie,</p></blockquote>

      <p>nu neapărat:</p>

      <blockquote><p>identitatea principală.</p></blockquote>

      <h3>Volumul fără accesibilitate</h3>

      <p>O sută de postări nu au aceeași valoare dacă sistemul analizat nu poate accesa sau recupera conținutul respectiv.</p>

      <p>Dar afirmația:</p>

      <blockquote><p>„platformă cu login = zero semnal”</p></blockquote>

      <p>este prea absolută.</p>

      <p>Unele platforme au:</p>

      <ul>
        <li>profiluri publice;</li>
        <li>snippets;</li>
        <li>pagini indexabile;</li>
        <li>distribuție prin alte servicii.</li>
      </ul>

      <p>Trebuie verificat per platformă și per crawler.</p>

      <h3>Auto-declarația fără consistență</h3>

      <p>Poți declara pe propriul site un rol.</p>

      <p>Acea afirmație poate fi adevărată și utilă.</p>

      <p>Dar dacă restul informațiilor publice:</p>

      <ul>
        <li>folosesc alt nume;</li>
        <li>descriu alte roluri;</li>
        <li>nu leagă proiectele între ele;</li>
      </ul>

      <p>identitatea rămâne mai greu de interpretat.</p>

      <p>Sursele externe pot adăuga coroborare, dar nu există o formulă publică de weighting.</p>

      <h2>Ce schimb în propriul caz</h2>

      <p>Pentru studiul de caz, intervenția coerentă este:</p>

      <ol>
        <li>folosirea aceleiași entități <code>Alex Matescu</code>;</li>
        <li>declararea variantelor reale prin <code>alternateName</code>;</li>
        <li>folosirea aceluiași <code>@id</code> pe site;</li>
        <li>o pagină About care leagă rolurile și proiectele;</li>
        <li><code>sameAs</code> doar către profiluri reale;</li>
        <li>structured data care reflectă textul vizibil;</li>
        <li>surse externe obținute prin activitate reală, nu prin fabricarea de mențiuni;</li>
        <li>măsurarea periodică a rezultatelor.</li>
      </ol>

      <p>Aceasta nu garantează schimbarea răspunsurilor AI.</p>

      <p>Este însă o strategie coerentă de reducere a ambiguității. Un exemplu concret de măsurare periodică — după ce metadata unei pagini a fost actualizată — este documentat în <a href="/lab/articole/metadata-citare-ai-studiu-de-caz">metadata și citarea AI: studiu de caz</a>.</p>

      <h2>De ce public studiul</h2>

      <p>Partea interesantă a cazului nu este că un sistem „m-a înțeles greșit”.</p>

      <p>Mai precis:</p>

      <blockquote><p><strong>internetul public documenta disproporționat un episod al identității mele, iar rezultatele observabile reflectau acest dezechilibru.</strong></p></blockquote>

      <p>Asta poate fi urmărit în timp.</p>

      <p>Dacă peste luni:</p>

      <ul>
        <li>pagina About devine mai clară;</li>
        <li>rolurile sunt legate mai coerent;</li>
        <li>apar surse externe relevante;</li>
        <li>răspunsurile și rezultatele se schimbă;</li>
      </ul>

      <p>vom avea o evoluție observabilă.</p>

      <p>Tot nu vom putea spune că o singură intervenție a „cauzat” schimbarea fără un design experimental adecvat.</p>

      <p>Dar vom avea un studiu longitudinal mai bun decât o fotografie de moment.</p>

      <h2>Întrebări frecvente</h2>

      <h3>Ce este o entitate în SEO și AI Search?</h3>

      <p>Este un lucru identificabil din lumea reală — de exemplu o persoană, o organizație sau un loc — distinct de textul folosit pentru a-l menționa. Google a descris Knowledge Graph ca un model al entităților reale și al relațiilor dintre ele, sub formula „things, not strings”.<sup><a href="#fn-1">1</a></sup></p>

      <h3>De ce apar alte persoane când îmi caut numele?</h3>

      <p>Pentru că același nume sau nume apropiate pot indica mai multe persoane, iar rezultatele depind de context și de informațiile disponibile. AI Visibility Lab numește această situație „coliziune”. Nu există o regulă publică prin care sistemul alege automat persoana cu cele mai multe mențiuni.</p>

      <h3>Ce este fragmentarea identității?</h3>

      <p>Este situația în care informațiile despre aceeași persoană există în mai multe roluri, grafii sau surse, dar relațiile dintre ele nu sunt suficient de clare. Este un model practic AI Visibility Lab, nu o metrică oficială Google.</p>

      <h3>Structured data <code>Person</code> rezolvă problema?</h3>

      <p>Nu singură. Structured data oferă informație machine-readable și Google recomandă <code>url</code> sau <code>sameAs</code> pentru a ajuta la înțelegerea autorilor, dar markupul trebuie să reflecte conținutul real și nu garantează reprezentarea finală în Search.<sup><a href="#fn-3">3</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <h3>Contează sursele independente?</h3>

      <p>Pot conta ca surse suplimentare de coroborare, pentru că nu sunt controlate de persoana descrisă. Nu există însă un raport public de tipul „un articol de presă valorează cât N postări proprii”.</p>

      <h3>Wikidata rezolvă entity resolution?</h3>

      <p>Nu automat. Un item Wikidata poate oferi un identificator public și relații structurate dacă subiectul îndeplinește politica platformei. Nu există dovadă că Wikidata este sursa primară pentru toate motoarele sau că un item garantează dezambiguizarea externă.<sup><a href="#fn-5">5</a></sup></p>

      <h2>Metodologie și niveluri de certitudine</h2>

      <h3>Observație proprie</h3>

      <p>Cazul cu rezultatele despre standul de porumb este o observație efectuată în august 2026 asupra propriului nume.</p>

      <p>El descrie:</p>

      <ul>
        <li>query-ul;</li>
        <li>momentul;</li>
        <li>rezultatele observabile.</li>
      </ul>

      <p>Nu descrie direct:</p>

      <ul>
        <li>structura internă a Google Knowledge Graph;</li>
        <li>candidate scoring;</li>
        <li>entity confidence;</li>
        <li>weightingul surselor;</li>
        <li>mecanismul unui LLM.</li>
      </ul>

      <h3>Surse primare</h3>

      <p>Pentru afirmațiile generale au fost folosite:</p>

      <ul>
        <li>Google Blog pentru lansarea Knowledge Graph;</li>
        <li>Google Search Central pentru structured data și author markup;</li>
        <li>Schema.org ca vocabular;</li>
        <li>politica oficială Wikidata.</li>
      </ul>

      <h3>Framework propriu</h3>

      <p>Termenii:</p>

      <ul>
        <li>coliziune;</li>
        <li>fragmentare;</li>
        <li>contaminare;</li>
      </ul>

      <p>sunt folosiți în acest articol ca taxonomie practică AI Visibility Lab.</p>

      <p>Nu sunt prezentați drept taxonomie Google, OpenAI sau Wikidata.</p>

      <h2>Surse</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">Google, Amit Singhal — „Introducing the Knowledge Graph: things, not strings", 16 mai 2012, verificat la 19 august 2026. Google descrie Knowledge Graph ca un model care înțelege entități din lumea reală și relațiile dintre ele, cu surse inițiale precum Freebase, Wikipedia și CIA World Factbook: <a href="https://blog.google/products-and-platforms/products/search/introducing-knowledge-graph-things-not/" target="_blank" rel="noopener noreferrer">blog.google/…/introducing-knowledge-graph-things-not</a></li>
        <li id="fn-2">Google Search Central — „Introduction to structured data markup in Google Search", actualizat 10 decembrie 2025, verificat la 19 august 2026. Google spune că structured data oferă indicii explicite despre sensul unei pagini și că datele trebuie să descrie conținutul efectiv prezent pe pagină: <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">developers.google.com/…/intro-structured-data</a></li>
        <li id="fn-3">Google Search Central — „Article structured data", verificat la 19 august 2026. Google recomandă pentru autori <code>@type</code>, <code>url</code> sau <code>sameAs</code> și spune explicit că poate înțelege atât <code>url</code>, cât și <code>sameAs</code> la dezambiguizarea autorilor: <a href="https://developers.google.com/search/docs/appearance/structured-data/article" target="_blank" rel="noopener noreferrer">developers.google.com/…/structured-data/article</a></li>
        <li id="fn-4">Google Search Central — „General structured data guidelines", verificat la 19 august 2026. Google nu garantează afișarea unui rezultat special chiar dacă markupul e valid: „using structured data enables a feature to be present, it does not guarantee that it will be present": <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noopener noreferrer">developers.google.com/…/sd-policies</a></li>
        <li id="fn-5">Wikidata — „Wikidata:Notability", politica curentă, verificată la 19 august 2026. Politica definește trei căi independente de notabilitate (sitelink Wikimedia valid, entitate identificabilă descrisă de surse serioase și public disponibile, sau necesitate structurală) — un item trebuie să îndeplinească doar una dintre ele: <a href="https://www.wikidata.org/wiki/Wikidata:Notability" target="_blank" rel="noopener noreferrer">wikidata.org/wiki/Wikidata:Notability</a></li>
        <li id="fn-6">Wikidata — „Requests for comment/Notability policy reform", 2026, verificat la 19 august 2026. Documentează o discuție activă a comunității (comentarii recente din iulie 2026) privind reformarea criteriilor de notabilitate, formulate inițial în 2013: <a href="https://www.wikidata.org/wiki/Wikidata:Requests_for_comment/Notability_policy_reform" target="_blank" rel="noopener noreferrer">wikidata.org/wiki/…/Notability_policy_reform</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Politicile Wikidata și documentația Google pot fi actualizate. Afirmațiile despre acestea descriu <strong>starea verificată la 19 august 2026</strong>, dată la care sursele de mai sus au fost reverificate live, fără schimbări față de starea consemnată inițial la 11 august 2026. Observația despre propriul nume rămâne o fotografie a rezultatelor văzute în august 2026 și nu a fost repetată pentru această verificare — rezultatele de căutare personalizate se pot schimba de la o rulare la alta.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 19 august 2026.</em></p>
`;
