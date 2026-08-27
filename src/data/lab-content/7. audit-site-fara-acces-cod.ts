/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const auditSiteFaraAccesCodMeta = {
  title:
    "Ce poți citi și ce poți schimba la un site fără acces la cod: ghid de audit din exterior",
  description:
    "Ce poți observa din exteriorul unui site, ce poți modifica fără acces la repository și unde se termină dovada tehnică și începe inferența. Ghid AI Visibility Lab bazat pe documentație oficială și teste reproductibile.",
  canonical: "https://delamatescu.ro/lab/articole/audit-site-fara-acces-cod",
  datePublished: "2026-08-18",
  dateModified: "2026-08-18",
  lastReviewed: "2026-08-18",
  about: [
    { name: "Technical website audit" },
    { name: "Crawler access" },
    { name: "HTTP" },
    { name: "Structured data" },
  ],
  keywords: [
    "audit tehnic site",
    "HTTP headers SEO",
    "robots.txt",
    "llms.txt",
    "IndexNow",
    "structured data JSON-LD",
  ],
  citations: [
    {
      name: "Chrome for Developers — Changes: Track your HTML, CSS, and JavaScript changes",
      url: "https://developer.chrome.com/docs/devtools/changes/",
    },
    {
      name: "Chrome for Developers — Override web content and HTTP response headers locally",
      url: "https://developer.chrome.com/docs/devtools/overrides",
    },
    {
      name: "WordPress Developer Resources — Posts, REST API Handbook",
      url: "https://developer.wordpress.org/rest-api/reference/posts/",
    },
    {
      name: "WordPress Developer Resources — Users, REST API Handbook",
      url: "https://developer.wordpress.org/rest-api/reference/users/",
    },
    {
      name: "HTTP Archive — Web Almanac 2025, SEO",
      url: "https://almanac.httparchive.org/en/2025/seo",
    },
    {
      name: "SE Ranking — LLMs.txt: Why Brands Rely On It and Why It Doesn't Work",
      url: "https://seranking.com/blog/llms-txt/",
    },
    {
      name: "Limy — LLMs.txt in 2026: The Full Guide",
      url: "https://limy.ai/blog/llms.txt-in-2026-the-full-guide",
    },
    {
      name: "Search Engine Land — Does llms.txt matter? We tracked 10 sites to find out",
      url: "https://searchengineland.com/does-llms-txt-matter-467740",
    },
    {
      name: "Google Search Central — Google's Guide to Optimizing for Generative AI Features on Google Search",
      url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    },
    {
      name: "Google Search Central — Robots meta tag, data-nosnippet, and X-Robots-Tag specifications",
      url: "https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag",
    },
    {
      name: "Google Search Central — How to specify a canonical URL",
      url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
    },
    {
      name: "Google Search Central — Generate Structured Data with JavaScript",
      url: "https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript",
    },
    {
      name: "IndexNow.org — Documentation",
      url: "https://www.indexnow.org/documentation",
    },
    {
      name: "IndexNow.org — Documentation for search engines",
      url: "https://www.indexnow.org/searchengines",
    },
    {
      name: "Chrome for Developers — Disable JavaScript",
      url: "https://developer.chrome.com/docs/devtools/javascript/disable",
    },
    {
      name: "OpenAI Help Center — Publishers and Developers FAQ",
      url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
    },
    {
      name: "Perplexity Documentation — Perplexity Crawlers",
      url: "https://docs.perplexity.ai/docs/resources/perplexity-crawlers",
    },
    {
      name: "Portal Legislativ — Codul penal, art. 360",
      url: "https://legislatie.just.ro/Public/FormaPrintabila/00000G03EG7Y4L5928N2UO7QQFID3V0X",
    },
  ],
  faq: [
    {
      q: "Pot modifica un site din DevTools?",
      a: "Nu în mod public. Modificările obișnuite din DevTools sunt locale. Local Overrides poate păstra o versiune modificată între reload-uri, dar aceasta rămâne în mediul local al browserului și nu schimbă resursa publicată pe server.",
    },
    {
      q: "Ce resurse pot inspecta fără acces la repository?",
      a: "Poți inspecta resursele pe care serverul le expune public, precum HTML, headere HTTP, robots.txt, sitemapuri, feeduri, unele fișiere .well-known, manifesturi sau endpointuri API, dacă există. Existența și conținutul lor variază de la site la site.",
    },
    {
      q: "Merită să adaug llms.txt?",
      a: "În august 2026 nu există dovezi solide că simpla prezență a llms.txt crește citările organice în principalele motoare AI. Poate avea utilitate în fluxuri în care un agent sau un utilizator îl solicită explicit, dar nu trebuie tratat ca un factor GEO demonstrat.",
    },
    {
      q: "Cum verific dependența unei pagini de JavaScript?",
      a: "Compară HTML-ul primit de un request simplu cu DOM-ul randat și poți folosi Disable JavaScript în Chrome DevTools pentru a vedea cum se comportă pagina fără JavaScript. Acest lucru testează dependența de JS, nu simulează fidel un crawler AI.",
    },
    {
      q: "Pot adăuga structured data prin Google Tag Manager?",
      a: "Da. Google documentează explicit generarea dinamică de JSON-LD prin Google Tag Manager. Pentru alte crawlere și sisteme AI, suportul pentru JavaScript și rendering trebuie verificat separat.",
    },
    {
      q: "IndexNow garantează indexarea rapidă?",
      a: "Nu. IndexNow notifică motoarele participante despre URL-uri adăugate, modificate sau șterse. Fiecare motor decide independent dacă și când procesează URL-ul pentru crawling și indexare.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const auditSiteFaraAccesCodHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-08-18">18 august 2026</time> · Actualizat: <time datetime="2026-08-18">18 august 2026</time> · Ultima verificare factuală: <time datetime="2026-08-18">18 august 2026</time></p>

      <p><strong>Fără acces administrativ poți inspecta o parte importantă din suprafața publică a unui site: răspunsurile HTTP, HTML-ul livrat requestului tău, <code>robots.txt</code>, sitemapurile publice, datele structurate, unele endpointuri publice, DNS și certificate. Nu poți vedea însă configurația internă a serverului, codul privat, baza de date, secretele, regulile complete ale infrastructurii sau setările care nu sunt expuse public. Iar DevTools nu publică modificările pe care le faci local: este un instrument de diagnostic și prototipare, nu un substitut pentru accesul la site.</strong><sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <p>Această distincție este esențială într-un audit tehnic: trebuie separat <strong>ce ai observat</strong> de <strong>ce ai dedus</strong> și, mai ales, de <strong>ce poți modifica efectiv</strong>.</p>

      <h2>Corectarea unei premise frecvente</h2>

      <p>DevTools nu modifică în mod public site-ul.</p>

      <p>Când editezi un element în panoul Elements sau schimbi CSS/JavaScript local, modifici reprezentarea încărcată în browserul tău. Chrome documentează separat funcția Local Overrides, care poate păstra anumite modificări între reload-uri, dar fișierul modificat rămâne local și este servit browserului tău în locul resursei din rețea.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <p>Consecința:</p>

      <blockquote><p><strong>o modificare locală din DevTools nu schimbă răspunsul public al serverului și nu devine vizibilă automat altor vizitatori sau crawlere.</strong></p></blockquote>

      <p>Asta nu face DevTools inutil. Îl poziționează corect: îl poți folosi pentru diagnostic, testarea unei ipoteze și prototiparea unei reparații înainte ca modificarea să fie implementată pe site.</p>

      <h2>Suprafața publică pe care merită să o verifici</h2>

      <p>Nu există un „inventar universal” de fișiere pe care orice site este obligat să le publice. Unele resurse sunt standardizate, altele sunt opționale, iar altele există numai pe anumite platforme.</p>

      <table>
        <thead>
          <tr>
            <th>Resursă</th>
            <th>Ce poate indica</th>
            <th>Limită</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>/robots.txt</code></td><td>reguli declarate pentru crawlere și uneori locația sitemapurilor</td><td>poate lipsi; nu este mecanism de securitate</td></tr>
          <tr><td><code>/sitemap.xml</code></td><td>URL-uri declarate de publisher și, dacă sunt furnizate, metadate precum <code>lastmod</code></td><td>poate avea alt URL sau poate exista un sitemap index</td></tr>
          <tr><td><code>/llms.txt</code>, <code>/llms-full.txt</code></td><td>documente voluntare, în format text/Markdown, propuse pentru consum de către sisteme și agenți AI</td><td>nu sunt un standard universal de crawling sau ranking</td></tr>
          <tr><td><code>/manifest.json</code>, <code>/site.webmanifest</code></td><td>metadata pentru aplicații web/PWA</td><td>opțional</td></tr>
          <tr><td><code>/.well-known/security.txt</code></td><td>canal public de raportare a problemelor de securitate</td><td>opțional</td></tr>
          <tr><td>alte resurse <code>/.well-known/...</code></td><td>asocieri și configurații definite de standarde sau platforme</td><td><code>/.well-known/</code> este un namespace; serverul nu este obligat să listeze directorul</td></tr>
          <tr><td><code>/ads.txt</code>, <code>/app-ads.txt</code></td><td>relații declarate în ecosistemul publicitar</td><td>relevante doar unde sunt implementate</td></tr>
          <tr><td><code>/humans.txt</code></td><td>informații editoriale sau despre echipă, dacă publisherul a ales să le publice</td><td>convenție, nu standard obligatoriu</td></tr>
          <tr><td><code>/rss.xml</code>, <code>/feed</code>, <code>/atom.xml</code></td><td>feeduri publice de conținut</td><td>pot lipsi sau pot conține doar rezumate</td></tr>
          <tr><td><code>/opensearch.xml</code></td><td>configurația OpenSearch, dacă este implementată</td><td>opțional</td></tr>
          <tr><td><code>/wp-json/wp/v2/posts</code></td><td>endpoint public pentru postări pe site-uri WordPress care expun REST API standard</td><td>comportamentul poate fi restricționat sau modificat</td></tr>
          <tr><td><code>/wp-json/wp/v2/users</code></td><td>poate expune profiluri publice de utilizatori/autori în WordPress</td><td>câmpurile și accesul depind de context și configurare</td></tr>
        </tbody>
      </table>

      <p>WordPress documentează oficial endpointurile <code>GET /wp/v2/posts</code> și <code>GET /wp/v2/users</code>; faptul că ele există în API nu înseamnă că fiecare instalare le va expune identic.<sup><a href="#fn-3">3</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <h3><code>robots.txt</code>: util pentru audit, inutil ca mecanism de secretizare</h3>

      <p><code>robots.txt</code> descrie politici de crawling. Nu protejează resurse private și nu trebuie tratat ca un control de acces.</p>

      <p>Web Almanac 2025 a raportat că <strong>84,9%</strong> dintre requesturile testate către <code>robots.txt</code> au primit status <code>200</code> atât pe desktop, cât și pe mobil. Asta confirmă doar că fișierul exista și răspundea cu succes în acel dataset; nu confirmă că regulile lui erau corecte.<sup><a href="#fn-5">5</a></sup></p>

      <p>Directivele <code>Disallow</code> pot oferi indicii despre structura site-ului, dar o cale listată acolo nu trebuie interpretată ca resursă „secretă” și nici ca autorizație pentru testare suplimentară.</p>

      <h3>RSS și REST API</h3>

      <p>Feedurile RSS/Atom pot fi foarte utile într-un audit editorial deoarece oferă o reprezentare structurată a conținutului public. Conținutul exact depinde însă de configurația site-ului: unele feeduri publică text integral, altele doar rezumate.</p>

      <p>Pe WordPress, REST API poate oferi o reprezentare JSON a conținutului public. Din nou, acesta este un endpoint documentat, nu o „breșă”.<sup><a href="#fn-3">3</a></sup></p>

      <h2><code>llms.txt</code>: ce se poate afirma în august 2026</h2>

      <p><code>llms.txt</code> este o propunere, nu un standard universal adoptat de principalele motoare AI.</p>

      <p>Datele publice disponibile trebuie citite separat, fără a amesteca studiile:</p>

      <ul>
        <li><strong>SE Ranking</strong>, într-un studiu comercial pe aproape 300.000 de domenii publicat la 7 noiembrie 2025, a raportat o adopție de <strong>10,13%</strong> în propriul dataset și nu a găsit o relație măsurabilă între prezența fișierului și frecvența citărilor AI în modelul analizat.<sup><a href="#fn-6">6</a></sup></li>
        <li><strong>Limy</strong>, într-o analiză comercială publicată la 12 mai 2026, spune că a analizat <strong>515.382.577</strong> evenimente de trafic ale boților AI într-o fereastră de 90 de zile și că <strong>408</strong> requesturi au vizat direct <code>/llms.txt</code>.<sup><a href="#fn-7">7</a></sup></li>
        <li><strong>Search Engine Land</strong>, într-un test pe <strong>10 site-uri</strong>, a raportat că opt nu au avut schimbări măsurabile după implementarea <code>llms.txt</code>; două au avut creșteri, dar acestea au coincis cu alte intervenții, astfel încât autorii nu le-au atribuit fișierului.<sup><a href="#fn-8">8</a></sup></li>
      </ul>

      <p>Acestea sunt <strong>studii comerciale/industriale</strong>, nu specificații ale motoarelor. Rezultatele descriu dataseturile lor și nu trebuie transformate în reguli universale.</p>

      <h3>Ce spune Google</h3>

      <p>La data verificării din <strong>18 august 2026</strong>, Google Search Central spune explicit că Google Search <strong>nu folosește <code>llms.txt</code></strong> pentru vizibilitate sau ranking, inclusiv în funcțiile sale generative; menținerea fișierului pentru alte servicii nu ajută și nu afectează Google Search.<sup><a href="#fn-9">9</a></sup></p>

      <p>Aceasta este o afirmație despre Google Search, nu despre toate sistemele AI.</p>

      <h3>Concluzia de audit</h3>

      <p>Formularea defensabilă este:</p>

      <blockquote><p><strong>absența <code>llms.txt</code> nu trebuie tratată, în august 2026, ca defect SEO/GEO demonstrat. Prezența lui poate avea valoare în fluxuri agentice sau în situații în care un instrument este configurat explicit să-l consume, dar nu există dovadă solidă că simpla publicare a fișierului produce un plus de citare organică în principalele motoare AI.</strong></p></blockquote>

      <p>Această concluzie trebuie reverificată pe măsură ce providerii își schimbă documentația.</p>

      <h2>Antetele HTTP: configurație observabilă în răspuns</h2>

      <p>O parte importantă a auditului nu se află într-un fișier separat, ci în răspunsul HTTP.</p>

      <pre><code>curl -sI https://exemplu.ro</code></pre>

      <h3><code>X-Robots-Tag</code></h3>

      <p>Google documentează <code>X-Robots-Tag</code> ca modalitate de a transmite prin header aceleași tipuri de reguli care pot apărea în robots meta tag, inclusiv <code>noindex</code> și <code>nosnippet</code>.<sup><a href="#fn-10">10</a></sup></p>

      <p>Un exemplu:</p>

      <pre><code>X-Robots-Tag: noindex</code></pre>

      <p>poate împiedica afișarea resursei în Google Search atunci când Google poate accesa și procesa regula.<sup><a href="#fn-10">10</a></sup></p>

      <p><strong><code>noai</code> nu este o directivă Google documentată.</strong> Dacă întâlnești directive proprietare sau ne-standard, trebuie verificată documentația providerului căruia îi sunt destinate.</p>

      <p><code>X-Robots-Tag: noindex</code> este una dintre cauzele tehnice care merită verificate când o resursă nu apare în index; nu există bază pentru a o numi „cea mai frecventă cauză”.</p>

      <h3><code>Link: rel="canonical"</code></h3>

      <p>Google permite declararea canonicalului atât prin element HTML, cât și prin header HTTP <code>Link</code>. Documentația recomandă evitarea semnalelor contradictorii între metode.<sup><a href="#fn-11">11</a></sup></p>

      <p>Dacă HTML-ul indică un canonical iar headerul indică altul, ai o configurație inconsistentă care trebuie investigată. Metadatele care pot ajunge într-un răspuns AI — inclusiv canonicalul — sunt tratate separat, cu un studiu de caz complet, în <a href="/lab/articole/metadata-citare-ai-studiu-de-caz">metadata și citarea AI</a>.</p>

      <h3><code>Content-Type</code> și <code>charset</code></h3>

      <p>Un tip MIME sau un charset incorect poate determina interpretarea greșită a răspunsului. Consecința exactă depinde de client și de conținut; nu trebuie presupus automat un anumit efect asupra indexării.</p>

      <h3>Cache</h3>

      <p><code>Cache-Control</code>, <code>Age</code>, <code>ETag</code>, <code>Last-Modified</code> sau headeruri specifice unui CDN pot ajuta la explicarea faptului că vezi o versiune cached în locul celei recent publicate.</p>

      <h3><code>Server</code> și <code>X-Powered-By</code></h3>

      <p>Pot oferi indicii despre server sau runtime, dar pot lipsi, pot fi eliminate de CDN sau pot fi configurate arbitrar. Nu sunt o metodă sigură de identificare a stivei.</p>

      <h3>Codul de stare și redirecturile</h3>

      <p>Pentru lanțul observabil de redirecționări:</p>

      <pre><code>curl -sIL https://exemplu.ro/pagina</code></pre>

      <p>Rezultatul arată statusurile și locațiile comunicate acelui request. El trebuie interpretat în contextul URL-ului și al agentului folosit.</p>

      <h2>HTML primit versus DOM randat</h2>

      <p>Această distincție rămâne una dintre cele mai utile într-un audit extern.</p>

      <p><code>View Source</code> / răspunsul obținut cu <code>curl</code> arată HTML-ul primit de request. Panoul Elements din DevTools arată DOM-ul după ce browserul a procesat documentul și, eventual, a executat JavaScript.</p>

      <pre><code>curl -s https://exemplu.ro &gt; servit.html

# Există un text distinct din pagină în răspuns?
grep -F "un text distinct din articol" servit.html

# Există JSON-LD în răspunsul primit?
grep -o 'application/ld+json' servit.html | wc -l

# Compară două rute
curl -s https://exemplu.ro/pagina-a &gt; a.html
curl -s https://exemplu.ro/pagina-b &gt; b.html
diff a.html b.html</code></pre>

      <p>Dacă textul vizibil în browser lipsește din <code>servit.html</code>, concluzia corectă este:</p>

      <blockquote><p><strong>textul nu există în HTML-ul primit de requestul respectiv și depinde de un alt pas — de exemplu rendering client-side, un request ulterior sau o reprezentare diferențiată.</strong></p></blockquote>

      <p>Nu înseamnă automat că „AI-ul nu îl vede”.</p>

      <p>La fel, două răspunsuri identice nu demonstrează singure client-side routing. Pot indica un shell SPA, un fallback comun, un rewrite, o configurație de cache sau alt comportament. Formularea corectă este:</p>

      <blockquote><p><strong>HTML identic pe rute diferite → posibil shell/fallback comun; verifică routingul, renderingul și metadata per rută.</strong></p></blockquote>

      <p>Această interpretare este în concordanță cu studiul AI Visibility Lab despre <a href="/lab/articole/paradoxul-site-ului-terminat">paradoxul site-ului terminat</a>: un request generic nu trebuie confundat cu reprezentarea servită unui crawler verificat.</p>

      <h2>Instrumente externe care nu necesită acces la repository</h2>

      <h3>Wayback Machine</h3>

      <p>Poate ajuta la compararea versiunilor istorice ale unei pagini sau ale unor fișiere publice. Arhiva este incompletă: lipsa unei capturi nu dovedește că resursa nu exista.</p>

      <h3>Certificate Transparency</h3>

      <p>Registrele de certificate pot indica hostname-uri pentru care au fost emise certificate TLS. Ele nu garantează că un subdomeniu este activ în prezent și nu constituie autorizație pentru testarea lui.</p>

      <h3>DNS</h3>

      <p><code>dig</code> și alte instrumente DNS permit citirea înregistrărilor publice. Ele pot oferi indicii despre mail, verificări de servicii, CDN sau infrastructură, dar nu identifică întotdeauna furnizorul real aflat în spatele unui reverse proxy/CDN.</p>

      <h3>Validatoare publice</h3>

      <p>Google Rich Results Test și validatorul Schema.org sunt utile pentru verificarea markupului.</p>

      <p>Google documentează explicit că poate procesa structured data generată cu JavaScript, inclusiv JSON-LD introdus prin Google Tag Manager.<sup><a href="#fn-12">12</a></sup></p>

      <p>Acest lucru nu trebuie extrapolat la toate crawlerele sau sistemele AI. Suportul de rendering trebuie verificat per provider și, când este posibil, pe outputul real.</p>

      <h2>Ce poți schimba efectiv fără acces la repository</h2>

      <p>„Fără acces la cod” nu înseamnă neapărat „fără niciun acces”. Pârghiile depind de permisiunile pe care le ai în alte straturi.</p>

      <h3>CMS sau platformă</h3>

      <p>Dacă ai cont cu drepturi suficiente într-un CMS/site builder, poți modifica titluri, descrieri, conținut și uneori structured data sau setări SEO fără a modifica repository-ul.</p>

      <h3>Google Search Console</h3>

      <p>Search Console poate fi folosit pentru submission de sitemap, URL Inspection, request indexing și temporary removals. Aceste acțiuni trimit informații sau cereri către Google; nu garantează indexarea, canonicalizarea sau rankingul.</p>

      <h3>Bing Webmaster Tools și IndexNow</h3>

      <p>IndexNow este un protocol de <strong>notificare</strong>: un site poate informa motoarele participante că un URL a fost adăugat, modificat sau șters. Documentația protocolului confirmă că URL-urile primite de un motor participant sunt partajate cu ceilalți participanți.<sup><a href="#fn-13">13</a></sup><sup><a href="#fn-14">14</a></sup></p>

      <p>Notificarea nu este echivalentă cu indexarea.</p>

      <blockquote><p><strong>IndexNow poate accelera descoperirea schimbării de către motoarele participante, dar fiecare motor decide dacă și când recrawlează, indexează sau afișează URL-ul.</strong></p></blockquote>

      <p>Afirmațiile despre participanți și comportament sunt volatile și trebuie reverificate. Termenele de descoperire, crawl, indexare și citare — și de ce nu există un SLA universal pentru niciunul dintre ele — sunt tratate separat în <a href="/lab/articole/cat-dureaza-indexare-citare-ai">cât durează până apari în Google și cât până te citează AI-ul</a>.</p>

      <h3>Google Business Profile</h3>

      <p>Dacă ai drepturi asupra profilului, poți actualiza informațiile business fără acces la site. Aceasta este o suprafață separată de repository.</p>

      <h3>Google Tag Manager</h3>

      <p>Google documentează explicit folosirea GTM pentru generarea dinamică de JSON-LD.<sup><a href="#fn-12">12</a></sup></p>

      <p>Formularea corectă este:</p>

      <blockquote><p><strong>Google poate procesa structured data generată prin JavaScript. Pentru alte crawlere și sisteme AI, suportul pentru rendering diferă și trebuie verificat separat.</strong></p></blockquote>

      <p>GTM nu trebuie prezentat ca înlocuitor universal pentru structured data disponibilă direct în HTML.</p>

      <h3>CDN, edge layer sau reverse proxy</h3>

      <p>Dacă ai acces la infrastructura de edge/CDN, unele produse permit:</p>

      <ul>
        <li>modificarea headerurilor;</li>
        <li>redirecturi;</li>
        <li>rescrierea răspunsurilor;</li>
        <li>transformarea HTML-ului;</li>
        <li>logică la edge.</li>
      </ul>

      <p>Aceasta poate fi <strong>una dintre puținele pârghii</strong> prin care poți schimba răspunsul public fără a modifica repository-ul. Nu este singura: hostingul, CMS-ul, middleware-ul, reverse proxy-ul sau funcțiile native ale platformei pot permite intervenții similare.</p>

      <h3>Surse externe</h3>

      <p>Wikidata, profilurile profesionale, directoarele și publicațiile terțe sunt suprafețe externe site-ului. Pentru corroborarea unei entități, sursele independente pot furniza informații pe care site-ul propriu nu le poate furniza singur.</p>

      <p>Nu există însă un multiplicator universal care să permită afirmația că „off-site cântărește mai mult decât on-site”.</p>

      <h2>DevTools folosit corect</h2>

      <h3>Disable JavaScript</h3>

      <p>Chrome DevTools permite dezactivarea JavaScriptului pentru a vedea cum arată și cum se comportă pagina fără execuție JS.<sup><a href="#fn-15">15</a></sup></p>

      <p>Acesta este un test al <strong>dependenței paginii de JavaScript</strong>, nu o simulare fidelă a unui crawler AI.</p>

      <p>Dacă pagina devine goală cu JavaScript dezactivat, ai demonstrat că browserul are nevoie de JavaScript pentru reprezentarea pe care o vezi în mod normal. Nu ai demonstrat ce primește un anumit crawler, deoarece unele platforme pot servi HTML pre-randat sau alte reprezentări agenților verificați.</p>

      <h3>Network</h3>

      <p>Panoul Network arată requesturile efectuate de browser, ordinea lor, statusurile și răspunsurile primite. Este util pentru a vedea dacă textul sau datele sunt livrate în documentul inițial sau într-un request ulterior.</p>

      <h3>Local Overrides</h3>

      <p>Chrome documentează Local Overrides ca funcție pentru înlocuirea locală a conținutului sau a headerurilor și păstrarea modificărilor între page loads.<sup><a href="#fn-2">2</a></sup></p>

      <p>Este potrivit pentru prototipare și validarea unei propuneri, nu pentru publicare.</p>

      <h3>User-Agent override</h3>

      <p>Schimbarea user-agentului este utilă pentru a vedea dacă serverul reacționează la acel header, dar nu garantează că reproduci identitatea crawlerului real.</p>

      <p>OpenAI publică user-agentul <code>OAI-SearchBot</code> pentru Search și documentează controlul accesului prin <code>robots.txt</code>.<sup><a href="#fn-16">16</a></sup> Perplexity publică user-agenturi și intervale IP pentru crawlerele sale și recomandă verificarea lor în configurațiile WAF.<sup><a href="#fn-17">17</a></sup></p>

      <p>Prin urmare:</p>

      <blockquote><p><strong>unele servicii folosesc user-agentul împreună cu IP-uri publicate sau alte mecanisme de verificare. Un user-agent falsificat, singur, nu demonstrează ce răspuns primește crawlerul autentic.</strong></p></blockquote>

      <p>Nu există bază pentru o regulă universală conform căreia toate platformele folosesc „IP + reverse DNS”.</p>

      <h2>Livrabilul unui audit extern: specificația</h2>

      <p>Un audit fără acces de implementare se termină cu o specificație verificabilă.</p>

      <h3>1. Constatarea</h3>

      <p>Include:</p>

      <ul>
        <li>URL-ul;</li>
        <li>data și ora;</li>
        <li>comanda sau instrumentul;</li>
        <li>requestul relevant;</li>
        <li>outputul brut sau captura;</li>
        <li>condițiile testului.</li>
      </ul>

      <h3>2. Impactul</h3>

      <p>Explică mecanismul, nu doar eticheta.</p>

      <p>În loc de:</p>

      <blockquote><p>„afectează SEO”</p></blockquote>

      <p>scrie:</p>

      <blockquote><p>„răspunsul conține <code>X-Robots-Tag: noindex</code>, ceea ce Google documentează ca directivă de excludere din rezultatele Search.”</p></blockquote>

      <h3>3. Reparația</h3>

      <p>Descrie schimbarea la nivelul stratului asupra căruia trebuie intervenit:</p>

      <ul>
        <li>HTML;</li>
        <li>header;</li>
        <li>CMS;</li>
        <li>CDN;</li>
        <li>sitemap;</li>
        <li>robots;</li>
        <li>routing;</li>
        <li>canonicalizare etc.</li>
      </ul>

      <h3>4. Testul de acceptanță</h3>

      <p>Definește exact ce trebuie să returneze sistemul după implementare.</p>

      <h3>5. Prioritatea</h3>

      <p>Prioritizează după:</p>

      <ul>
        <li>impact observabil;</li>
        <li>probabilitatea cauzei;</li>
        <li>efort;</li>
        <li>risc;</li>
        <li>reversibilitate.</li>
      </ul>

      <p>Un audit cu dovezi și teste de acceptanță poate fi implementat și reverificat. Un audit fără ele rămâne o listă de opinii.</p>

      <h2>Limite profesionale, de autorizare și securitate</h2>

      <p>Această secțiune nu este consultanță juridică.</p>

      <p>Faptul că un URL răspunde public nu trebuie interpretat ca autorizație pentru:</p>

      <ul>
        <li>ocolirea autentificării;</li>
        <li>exploatarea vulnerabilităților;</li>
        <li>enumerare agresivă;</li>
        <li>accesarea unor date pe care nu ai dreptul să le accesezi;</li>
        <li>testarea activă a sistemelor în afara unui mandat explicit.</li>
      </ul>

      <p>În România, articolul 360 din Codul penal incriminează accesul <strong>fără drept</strong> la un sistem informatic.<sup><a href="#fn-18">18</a></sup></p>

      <p>Pentru teste de securitate, stabilește în scris scopul, domeniile/hosturile permise, metodele și limitele autorizării.</p>

      <p>Dacă, în timpul unei verificări pasive și autorizate, întâlnești accidental informații sensibile expuse, abordarea profesională este să limitezi accesul la minimum necesar, să nu redistribui datele și să raportezi privat proprietarului prin canalul său de securitate, dacă există.</p>

      <h2>Verificarea de bază</h2>

      <p>Următoarele comenzi sunt exemple de verificări pasive asupra unor resurse publice și trebuie folosite numai pe site-uri pe care ai dreptul să le auditezi:</p>

      <pre><code>S=https://exemplu.ro

curl -sI "$S"                           # headerele răspunsului
curl -s "$S/robots.txt"                 # robots.txt, dacă există
curl -s "$S/sitemap.xml" | head         # sitemap, dacă este la această adresă
curl -sI "$S/llms.txt"                  # verifică doar dacă resursa răspunde
curl -s "$S" &gt; /tmp/page.html           # HTML-ul primit de request
grep -i 'rel="canonical"' /tmp/page.html
grep -i 'application/ld+json' /tmp/page.html
curl -sIL "$S/pagina"                   # statusuri și redirecturi observabile</code></pre>

      <h3>Ce NU trebuie dedus</h3>

      <p>Dimensiunea HTML-ului nu identifică arhitectura site-ului.</p>

      <p>Nu există un prag de tip „sub 5 KB = aplicație client-side”.</p>

      <p>Un document server-rendered poate fi foarte mic, iar un SPA shell poate fi mare. Testul relevant este <strong>prezența conținutului important în răspuns</strong>, nu numărul de octeți.</p>

      <p>La fel, un canonical identic pe rute distincte indică o <strong>posibilă problemă de canonicalizare sau metadata per rută</strong>, nu demonstrează o problemă de routing.</p>

      <h2>Întrebări frecvente</h2>

      <h3>Pot modifica un site din DevTools?</h3>

      <p>Nu în mod public. Modificările obișnuite din DevTools sunt locale. Local Overrides poate păstra o versiune modificată între reload-uri, dar aceasta rămâne în mediul local al browserului și nu schimbă resursa publicată pe server.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <h3>Ce resurse pot inspecta fără acces la repository?</h3>

      <p>Poți inspecta resursele pe care serverul le expune public: HTML, headere, <code>robots.txt</code>, sitemapuri, feeduri, unele fișiere <code>/.well-known</code>, manifesturi sau endpointuri API, dacă există. Existența și conținutul lor variază de la site la site.</p>

      <h3>Merită să adaug <code>llms.txt</code>?</h3>

      <p>În august 2026, nu există dovezi solide că simpla sa prezență crește citările organice în principalele motoare AI. Studiile SE Ranking, Limy și Search Engine Land descrise mai sus nu susțin un efect general de citare. Fișierul poate avea utilitate în fluxuri în care un agent sau un utilizator îl solicită explicit, dar nu trebuie tratat ca un factor GEO demonstrat.<sup><a href="#fn-6">6</a></sup><sup><a href="#fn-7">7</a></sup><sup><a href="#fn-8">8</a></sup></p>

      <h3>Cum verific dependența unei pagini de JavaScript?</h3>

      <p>Compară HTML-ul primit de un request simplu cu DOM-ul randat și poți folosi Disable JavaScript în Chrome DevTools pentru a vedea cum se comportă pagina fără JavaScript. Acest lucru testează dependența de JS, nu simulează fidel un crawler AI.<sup><a href="#fn-15">15</a></sup></p>

      <h3>Pot adăuga structured data prin Google Tag Manager?</h3>

      <p>Da. Google documentează explicit generarea dinamică de JSON-LD prin Google Tag Manager. Pentru alte crawlere și sisteme AI, suportul pentru JavaScript/rendering trebuie verificat separat.<sup><a href="#fn-12">12</a></sup></p>

      <h3>IndexNow garantează indexarea rapidă?</h3>

      <p>Nu. IndexNow notifică motoarele participante despre URL-uri adăugate, schimbate sau șterse. Fiecare motor decide independent dacă și când procesează URL-ul pentru crawling și indexare.<sup><a href="#fn-13">13</a></sup></p>

      <h2>Metodologie și niveluri de certitudine</h2>

      <h3>Observații proprii</h3>

      <p>Comenzile din articol sunt exemple de verificări reproductibile asupra răspunsului public primit de un request. Rezultatul lor descrie numai requestul respectiv și momentul în care a fost efectuat.</p>

      <h3>Surse primare</h3>

      <p>Afirmațiile tehnice despre platforme sunt ancorate, când există, în documentații primare: Chrome DevTools, Google Search Central, WordPress Developer Resources, IndexNow, OpenAI, Perplexity, Portalul Legislativ din România.</p>

      <h3>Studii comerciale</h3>

      <p>Cifrele despre <code>llms.txt</code> provin din SE Ranking, Limy și Search Engine Land. Sunt marcate explicit ca rezultate ale dataseturilor lor și nu sunt tratate ca reguli generale.</p>

      <h3>Regula de interpretare</h3>

      <p>În acest articol:</p>

      <ul>
        <li><strong>observație</strong> = ceea ce poate fi văzut în request/output;</li>
        <li><strong>fapt documentat</strong> = ceea ce providerul sau standardul confirmă;</li>
        <li><strong>inferență</strong> = explicație posibilă, care necesită verificări suplimentare;</li>
        <li><strong>recomandare</strong> = practică propusă pentru audit, nu mecanism algoritmic.</li>
      </ul>

      <h2>Surse</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">Chrome for Developers — „Changes: Track your HTML, CSS, and JavaScript changes", documentație oficială DevTools. Panoul Changes arată doar modificările făcute în DevTools; la reload dispar dacă nu sunt păstrate prin Local Overrides sau Workspaces: <a href="https://developer.chrome.com/docs/devtools/changes/" target="_blank" rel="noopener noreferrer">developer.chrome.com/docs/devtools/changes</a></li>
        <li id="fn-2">Chrome for Developers — „Override web content and HTTP response headers locally", documentație oficială Local Overrides. Fișierul modificat e salvat local și servit browserului în locul resursei din rețea, inclusiv la reload: <a href="https://developer.chrome.com/docs/devtools/overrides" target="_blank" rel="noopener noreferrer">developer.chrome.com/docs/devtools/overrides</a></li>
        <li id="fn-3">WordPress Developer Resources — „Posts", REST API Handbook. Endpoint documentat: <code>GET /wp/v2/posts</code>: <a href="https://developer.wordpress.org/rest-api/reference/posts/" target="_blank" rel="noopener noreferrer">developer.wordpress.org/rest-api/reference/posts</a></li>
        <li id="fn-4">WordPress Developer Resources — „Users", REST API Handbook. Endpoint documentat: <code>GET /wp/v2/users</code>: <a href="https://developer.wordpress.org/rest-api/reference/users/" target="_blank" rel="noopener noreferrer">developer.wordpress.org/rest-api/reference/users</a></li>
        <li id="fn-5">HTTP Archive — „Web Almanac 2025", secțiunea SEO. Datasetul raportează status <code>200</code> pentru 84,9% dintre requesturile către <code>robots.txt</code>, atât pe desktop, cât și pe mobil: <a href="https://almanac.httparchive.org/en/2025/seo" target="_blank" rel="noopener noreferrer">almanac.httparchive.org/en/2025/seo</a></li>
        <li id="fn-6">SE Ranking, Yulia Deda — „LLMs.txt: Why Brands Rely On It and Why It Doesn't Work", publicat 7 noiembrie 2025. Studiu comercial pe aproape 300.000 de domenii; 10,13% adopție în dataset și nicio relație măsurabilă cu citarea în modelul analizat: <a href="https://seranking.com/blog/llms-txt/" target="_blank" rel="noopener noreferrer">seranking.com/blog/llms-txt</a></li>
        <li id="fn-7">Limy, Yahel Oren — „LLMs.txt in 2026: The Full Guide", publicat 12 mai 2026. Furnizorul declară 515.382.577 evenimente de trafic bot analizate și 408 requesturi directe către <code>/llms.txt</code> într-o fereastră de 90 de zile. Date comerciale, nereplicate independent în acest articol: <a href="https://limy.ai/blog/llms.txt-in-2026-the-full-guide" target="_blank" rel="noopener noreferrer">limy.ai/blog/llms.txt-in-2026-the-full-guide</a></li>
        <li id="fn-8">Search Engine Land — „Does llms.txt matter? We tracked 10 sites to find out", 2026. Test industrial pe 10 site-uri: opt fără schimbare măsurabilă; creșterile de pe celelalte două au coincis cu alte modificări: <a href="https://searchengineland.com/does-llms-txt-matter-467740" target="_blank" rel="noopener noreferrer">searchengineland.com/does-llms-txt-matter-467740</a></li>
        <li id="fn-9">Google Search Central — „Google's Guide to Optimizing for Generative AI Features on Google Search", actualizat în 2026. Google spune explicit că Google Search nu folosește <code>llms.txt</code> și că fișierul nu ajută și nu afectează vizibilitatea sau rankingul în Google Search: <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">developers.google.com/…/ai-optimization-guide</a></li>
        <li id="fn-10">Google Search Central — „Robots meta tag, data-nosnippet, and X-Robots-Tag specifications". Documentează directive precum <code>noindex</code> și <code>nosnippet</code> și utilizarea lor prin header HTTP: <a href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag" target="_blank" rel="noopener noreferrer">developers.google.com/…/robots-meta-tag</a></li>
        <li id="fn-11">Google Search Central — „How to specify a canonical URL". Google acceptă canonical prin HTML sau header HTTP <code>Link</code> și recomandă evitarea semnalelor contradictorii între metode: <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer">developers.google.com/…/consolidate-duplicate-urls</a></li>
        <li id="fn-12">Google Search Central — „Generate Structured Data with JavaScript". Google documentează generarea JSON-LD prin JavaScript și Google Tag Manager: <a href="https://developers.google.com/search/docs/appearance/structured-data/generate-structured-data-with-javascript" target="_blank" rel="noopener noreferrer">developers.google.com/…/generate-structured-data-with-javascript</a></li>
        <li id="fn-13">IndexNow.org — „Documentation". Documentează submiterea URL-urilor și partajarea notificărilor între motoarele participante: <a href="https://www.indexnow.org/documentation" target="_blank" rel="noopener noreferrer">indexnow.org/documentation</a></li>
        <li id="fn-14">IndexNow.org — „Documentation for search engines". Documentează mecanismul de participare și propagare a notificărilor: <a href="https://www.indexnow.org/searchengines" target="_blank" rel="noopener noreferrer">indexnow.org/searchengines</a></li>
        <li id="fn-15">Chrome for Developers — „Disable JavaScript", documentație oficială DevTools: <a href="https://developer.chrome.com/docs/devtools/javascript/disable" target="_blank" rel="noopener noreferrer">developer.chrome.com/docs/devtools/javascript/disable</a></li>
        <li id="fn-16">OpenAI Help Center — „Publishers and Developers – FAQ", verificat 18 august 2026. OpenAI spune că <code>OAI-SearchBot</code> trebuie permis pentru includerea conținutului în summaries/snippets din ChatGPT Search: <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">help.openai.com/…/publishers-and-developers-faq</a></li>
        <li id="fn-17">Perplexity Documentation — „Perplexity Crawlers". Documentează user-agenturile și intervalele IP folosite pentru crawlerele Perplexity: <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">docs.perplexity.ai/docs/resources/perplexity-crawlers</a></li>
        <li id="fn-18">Portal Legislativ — „Codul penal, art. 360 – Accesul ilegal la un sistem informatic". Alin. (1): accesul, fără drept, la un sistem informatic se pedepsește cu închisoare de la 3 luni la 3 ani sau cu amendă: <a href="https://legislatie.just.ro/Public/FormaPrintabila/00000G03EG7Y4L5928N2UO7QQFID3V0X" target="_blank" rel="noopener noreferrer">legislatie.just.ro</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Comportamentul crawlerelor AI, documentația OpenAI/Perplexity, lista participanților IndexNow și poziția providerilor față de <code>llms.txt</code> se pot modifica. Afirmațiile despre aceste produse și protocoale descriu <strong>starea verificată la 18 august 2026</strong> și trebuie reverificate înaintea unei actualizări viitoare.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 18 august 2026.</em></p>
`;
