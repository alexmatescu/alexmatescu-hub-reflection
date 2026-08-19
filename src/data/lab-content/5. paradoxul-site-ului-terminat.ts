/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const paradoxulSiteuluiTerminatMeta = {
  title:
    "Paradoxul site-ului terminat: același URL poate arăta diferit pentru om, crawler și instrumentul de audit",
  description:
    "Studiu de caz pe un site React construit cu Lovable: un request generic primește SPA shell-ul, în timp ce documentația Lovable spune că crawlerele verificate primesc HTML pre-randat. Ce demonstrează testul, ce nu demonstrează și cum verifici corect metadata, canonicalizarea și crawlabilitatea.",
  canonical: "https://delamatescu.ro/lab/articole/paradoxul-site-ului-terminat",
  datePublished: "2026-08-05",
  dateModified: "2026-08-10",
  about: [
    { name: "JavaScript SEO" },
    { name: "Server-side rendering" },
    { name: "Canonical URL" },
    { name: "AI crawler" },
  ],
  faq: [
    {
      q: "Dacă curl nu vede textul, înseamnă că ChatGPT nu îl vede?",
      a: "Nu. curl arată răspunsul primit de requestul respectiv. În cazul proiectelor Lovable React + Vite mai vechi, documentația Lovable spune că agenții neverificați primesc SPA-ul obișnuit, iar crawlerii AI verificați precum ChatGPT și Perplexity primesc HTML pre-randat.",
    },
    {
      q: "Ce înseamnă dacă o pagină interioară are canonical către homepage?",
      a: "Pagina trimite un semnal puternic că homepage-ul este URL-ul preferat pentru canonicalizare. Google poate accepta sau ignora semnalul în funcție de celelalte indicii. Pentru pagini distincte care trebuie indexate separat, canonicalul către homepage este de regulă o configurație greșită.",
    },
    {
      q: "Site-urile făcute cu Lovable sunt invizibile pentru AI?",
      a: "Nu. Documentația Lovable verificată la 10 august 2026 spune că noile aplicații TanStack Start folosesc SSR, iar aplicațiile React + Vite mai vechi folosesc pre-randare pentru crawlere verificate, inclusiv ChatGPT, Perplexity, Claude și Gemini.",
    },
    {
      q: "Proiectele Lovable React + Vite vechi pot fi migrate la SSR?",
      a: "Da. Conform documentației Lovable verificate la 10 august 2026, un proiect React + Vite existent poate fi upgradat la TanStack Start pentru server-side rendering complet.",
    },
    {
      q: "Site-urile moderne au un risc mai mare de invizibilitate AI?",
      a: "Nu există bază pentru această regulă. Riscul relevant este ca informația esențială să nu fie disponibilă în reprezentarea pe care o primește crawlerul relevant.",
    },
    {
      q: "Cum verific corect un site?",
      a: "Combină răspunsul HTTP brut cu instrumentele specifice motorului și platformei. curl verifică HTML-ul primit de acel request, Search Console verifică perspectiva Google, iar Lovable oferă propriul SEO & AI search review pentru proiectele sale.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const paradoxulSiteuluiTerminatHtml = `
      <p><strong>Un site poate părea complet în browser și, în același timp, poate furniza reprezentări diferite în funcție de agentul care îl accesează. În testul documentat aici, un request HTTP generic către două rute ale propriului meu site a primit același shell HTML: metadate în <code>&lt;head&gt;</code>, fără textul principal pe care îl vede utilizatorul după executarea aplicației în browser. Asta nu demonstrează că ChatGPT, Perplexity, Google sau alte crawlere verificate primesc același răspuns. Documentația Lovable verificată la 10 august 2026 spune explicit că proiectele mai vechi React + Vite folosesc pre-randare la cerere pentru crawlere verificate, în timp ce agenții neverificați și scanerele SEO terțe primesc aplicația SPA obișnuită. Studiul de caz arată, prin urmare, altceva: același URL poate avea mai multe reprezentări tehnice, iar un simplu <code>curl</code> nu trebuie confundat cu ceea ce vede un crawler verificat.</strong><sup><a href="#fn-1">1</a></sup></p>

      <p>Această distincție schimbă teza articolului.</p>

      <p>Problema nu este „un site modern nu există pentru AI”. Problema este că <strong>o verificare făcută cu agentul greșit poate descrie o reprezentare diferită de cea servită motorului pe care încerci să-l optimizezi</strong>.</p>

      <h2>Ce am măsurat</h2>

      <p>În august 2026 am făcut o extragere HTTP simplă pe două adrese ale propriului site, folosind un agent generic care nu execută aplicația JavaScript în browser.</p>

      <p><strong>Adresa 1: pagina principală.</strong> Răspunsul brut conținea elemente din <code>&lt;head&gt;</code> și shell-ul aplicației, dar nu textul principal vizibil după încărcarea paginii în browser.</p>

      <p><strong>Adresa 2: <code>/lab/articole</code>.</strong> Răspunsul brut primit de agentul generic era, în testul efectuat, identic cu cel al paginii principale la nivelul HTML-ului servit înainte de rularea aplicației.</p>

      <p>În răspunsurile testate au apărut și valori precum:</p>

      <pre><code>canonical: /
meta-og:url: /</code></pre>

      <p>Acest rezultat demonstrează trei lucruri precise:</p>

      <ol>
        <li>agentul generic testat nu a primit conținutul final pe care îl vede utilizatorul în browser;</li>
        <li>cele două rute testate au primit același shell HTML în acel tip de request;</li>
        <li>în shell-ul primit, canonicalul și metadatele nu erau specifice rutei interioare.</li>
      </ol>

      <p><strong>Nu demonstrează</strong> că toate rutele site-ului au același canonical și nici că Google, ChatGPT, Perplexity, Claude sau Gemini primesc aceeași reprezentare.</p>

      <p>Această limită trebuie păstrată în centrul studiului.</p>

      <h2>Descoperirea importantă: nu există o singură versiune a paginii</h2>

      <p>La momentul primei măsurători am interpretat shell-ul returnat de <code>curl</code> ca pe ceea ce ar putea primi un crawler AI fără rendering. Documentația Lovable actuală permite o interpretare mai precisă.</p>

      <p>Conform documentației Lovable verificate la <strong>10 august 2026</strong>, proiectele Lovable sunt împărțite în două stive tehnice:<sup><a href="#fn-1">1</a></sup></p>

      <ul>
        <li>aplicațiile noi create după <strong>13 mai 2026</strong> folosesc TanStack Start cu server-side rendering;</li>
        <li>proiectele mai vechi React + Vite folosesc <strong>on-request pre-rendering</strong> pe URL-urile publicate;</li>
        <li>în vechea stivă, pre-randarea este servită crawlerelor verificate, între care Lovable enumeră Google, Bing, boți de preview social și motoare AI precum ChatGPT, Perplexity, Claude și Gemini;</li>
        <li>scanerele SEO terțe și alți agenți neverificați primesc SPA-ul obișnuit.</li>
      </ul>

      <p>Asta înseamnă că rezultatul generic <code>curl</code> observat în acest studiu este compatibil cu comportamentul documentat al platformei.</p>

      <p><strong>Măsurătoarea nu dovedește invizibilitate pentru AI; dovedește diferențierea răspunsului în funcție de agent.</strong></p>

      <p>Acesta este paradoxul mai interesant: un proprietar poate vedea o pagină completă, un scanner generic poate vedea shell-ul, iar un crawler recunoscut de platformă poate primi HTML pre-randat.</p>

      <h2>Canonicalul: problemă reală, dar nu comandă absolută</h2>

      <p>Un <code>rel="canonical"</code> indică motorului ce URL preferă publisherul ca reprezentant pentru pagini duplicate sau foarte similare.</p>

      <p>Google descrie <code>rel="canonical"</code> drept un <strong>semnal puternic</strong> pentru canonicalizare, nu drept o comandă absolută. Google combină această indicație cu alte semnale și poate selecta un alt URL canonical decât cel declarat de publisher.<sup><a href="#fn-2">2</a></sup></p>

      <p>Prin urmare, dacă o pagină interioară distinctă declară homepage-ul drept canonical, formularea corectă nu este:</p>

      <blockquote><p>„motorul este instruit să nu indexeze pagina.”</p></blockquote>

      <p>Formularea corectă este:</p>

      <blockquote><p><strong>pagina transmite un semnal puternic că homepage-ul ar trebui tratat drept URL reprezentativ. Dacă motorul acceptă semnalul, URL-ul interior poate fi consolidat sub canonicalul ales; dacă paginile sunt suficient de diferite sau alte semnale contrazic declarația, motorul poate alege alt canonical.</strong></p></blockquote>

      <p>Google avertizează explicit împotriva canonicalurilor incorecte între pagini care nu sunt duplicate și recomandă canonicaluri self-referential pentru paginile care trebuie tratate separat.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup></p>

      <h3>Ce știm din testul meu</h3>

      <p>În cele două răspunsuri generice testate, canonicalul era <code>/</code>.</p>

      <h3>Ce nu știm doar din acel test</h3>

      <p>Nu știm dacă HTML-ul pre-randat servit fiecărui crawler verificat păstra același canonical sau genera unul specific rutei. În aplicațiile JavaScript, canonicalul poate fi stabilit sau modificat de cod, iar Google recomandă ca semnalul să fie cât mai clar și consecvent între HTML-ul inițial și starea randată.<sup><a href="#fn-4">4</a></sup></p>

      <p>De aceea, problema canonicalizării trebuie verificată <strong>în reprezentarea relevantă pentru motor</strong>, nu dedusă exclusiv din shell-ul primit de un agent generic.</p>

      <p>Pentru Google, verificarea corectă include URL Inspection în Search Console, unde poate fi văzut inclusiv canonicalul selectat de Google.<sup><a href="#fn-5">5</a></sup></p>

      <h2>De ce se întâmplă în aplicațiile client-side</h2>

      <p>Multe aplicații client-side folosesc un shell HTML comun și construiesc interfața după ce JavaScript rulează în browser. Aceasta este o arhitectură posibilă pentru un SPA, nu definiția tuturor aplicațiilor moderne.</p>

      <p>Într-o astfel de implementare:</p>

      <ul>
        <li>serverul poate returna un shell comun pentru mai multe rute;</li>
        <li>routerul din browser decide ce componentă trebuie afișată;</li>
        <li>JavaScript poate încărca sau construi conținutul;</li>
        <li>metadata poate rămâne generică dacă aplicația nu o gestionează per rută.</li>
      </ul>

      <p>Aceste probleme nu sunt inevitabile. Framework-urile moderne pot folosi server-side rendering, static generation, streaming sau arhitecturi hibride.</p>

      <p>Prin urmare, riscul nu crește pentru că „stiva este modernă”. Riscul apare atunci când <strong>HTML-ul servit înainte de rularea clientului nu conține informația importantă, iar publisherul nu verifică reprezentarea folosită de crawlerele relevante</strong>.</p>

      <h2>Paradoxul site-ului terminat</h2>

      <p>Miezul problemei rămâne util, dar trebuie formulat precis.</p>

      <h3>Verificarea vizuală nu verifică reprezentarea crawlerului</h3>

      <p>Site-ul poate arăta bine, navigarea poate funcționa și conținutul poate fi complet în browser. Aceste lucruri nu arată ce se află în răspunsul HTML inițial și nici dacă platforma servește altă reprezentare crawlerelor.</p>

      <p>Un audit vizual și un audit al crawlabilității verifică lucruri diferite.</p>

      <h3>Faptul că Google poate randa JavaScript nu rezolvă automat tot</h3>

      <p>Google Search execută JavaScript și folosește Web Rendering Service. Tot Google documentează însă diferențe și limitări în procesarea aplicațiilor JavaScript și recomandă implementări robuste pentru Search.<sup><a href="#fn-6">6</a></sup><sup><a href="#fn-7">7</a></sup></p>

      <p>Așadar, formularea „Googlebot vede întotdeauna site-ul complet” este prea tare.</p>

      <p>Mai corect:</p>

      <blockquote><p><strong>Google poate executa JavaScript și indexa conținut randat client-side, dar rezultatul trebuie verificat, iar existența JavaScriptului funcțional în browser nu garantează singură indexarea corectă.</strong></p></blockquote>

      <h3>Nu toate crawlerele trebuie presupuse identice</h3>

      <p>Nu există o bază solidă pentru afirmația că „majoritatea crawlerelor AI nu execută JavaScript”.</p>

      <p>OpenAI documentează <code>OAI-SearchBot</code> și spune că permiterea accesului ajută conținutul să fie descoperit, afișat și citat în ChatGPT Search, dar documentația publică consultată nu publică un model universal al capabilităților sale de rendering.<sup><a href="#fn-8">8</a></sup></p>

      <p>Perplexity documentează <code>PerplexityBot</code> ca agent folosit pentru descoperirea și indexarea informației pentru search și recomandă permiterea lui în <code>robots.txt</code>, fără să ofere în pagina respectivă o regulă generală despre execuția JavaScript.<sup><a href="#fn-9">9</a></sup></p>

      <p>Prin urmare:</p>

      <blockquote><p><strong>capabilitățile de rendering și acces diferă între crawlere și nu sunt documentate integral. HTML-ul care conține direct informația esențială rămâne cea mai interoperabilă bază.</strong></p></blockquote>

      <h2>Ce vede fiecare tip de vizitator în cazul Lovable documentat</h2>

      <p>Tabelul de mai jos descrie <strong>comportamentul documentat de Lovable la 10 august 2026</strong>, nu o regulă universală a webului.</p>

      <table>
        <thead>
          <tr>
            <th>Tip de request</th>
            <th>Comportament documentat pentru Lovable</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Om, proiect React + Vite vechi</td><td>Primește experiența SPA</td></tr>
          <tr><td>Crawler verificat pe proiect React + Vite vechi</td><td>Primește HTML pre-randat la cerere</td></tr>
          <tr><td>Scanner SEO / agent neverificat pe proiect React + Vite vechi</td><td>Primește SPA-ul obișnuit</td></tr>
          <tr><td>Proiect nou TanStack Start cu SSR</td><td>Requesturile primesc HTML randat pe server</td></tr>
          <tr><td>Googlebot</td><td>Este inclus de Lovable între crawlerii pentru care stiva veche oferă pre-randare</td></tr>
          <tr><td>ChatGPT / Perplexity / Claude / Gemini</td><td>Sunt enumerate de Lovable între motoarele AI cărora stiva veche le oferă pre-randare</td></tr>
        </tbody>
      </table>

      <p>Sursa acestui tabel este documentația Lovable, nu o măsurătoare independentă a fiecărui crawler.<sup><a href="#fn-1">1</a></sup></p>

      <p>Această informație este <strong>volatilă</strong> și trebuie reverificată dacă Lovable își schimbă infrastructura.</p>

      <h2>Nuanța onestă despre Lovable</h2>

      <p>Studiul nu trebuie prezentat ca acuzație la adresa Lovable.</p>

      <p>Documentația verificată la 10 august 2026 spune că:<sup><a href="#fn-1">1</a></sup></p>

      <ul>
        <li>aplicațiile noi create după 13 mai 2026 folosesc TanStack Start cu SSR;</li>
        <li>proiectele mai vechi React + Vite primesc pre-randare automat pentru crawlere verificate;</li>
        <li>proiectele React + Vite existente pot fi upgradate la TanStack Start;</li>
        <li>Lovable are o funcție de <strong>SEO &amp; AI search review</strong>;</li>
        <li>pentru site-urile publicate există inclusiv un check pozitiv „AI assistants can see your site as Markdown”;</li>
        <li>review-ul poate semnala probleme precum duplicate titles, canonicaluri către homepage, <code>robots.txt</code>, sitemap și metadata.</li>
      </ul>

      <p>Asta corectează una dintre afirmațiile inițiale ale articolului: nu mai este adevărat, în starea documentată la 10 august 2026, că „niciun instrument obișnuit nu semnalează problema”. Lovable oferă explicit un audit destinat acestor situații.</p>

      <h3>O limită importantă</h3>

      <p>Un <code>curl</code> generic nu reproduce automat răspunsul servit unui crawler pe care Lovable îl consideră verificat.</p>

      <p>Documentația publică consultată spune că există crawlerii „verified”, dar pasajul folosit în acest articol nu este suficient pentru a afirma metoda tehnică exactă prin care Lovable îi verifică. De aceea, afirmațiile anterioare despre verificare prin „IP și reverse DNS” au fost eliminate.</p>

      <h2>Cum verifici fără să tragi concluzia greșită</h2>

      <p>Comenzile <code>curl</code> rămân utile, dar răspund unei întrebări precise:</p>

      <blockquote><p><strong>Ce HTML primește acest request?</strong></p></blockquote>

      <p>Nu răspund automat la:</p>

      <blockquote><p><strong>Ce HTML primește Googlebot sau ChatGPT?</strong></p></blockquote>

      <h3>1. Verifică răspunsul generic</h3>

      <pre><code>curl -s https://site-ul-tau.ro &gt; /tmp/home.html
curl -s https://site-ul-tau.ro/o-alta-pagina &gt; /tmp/page.html</code></pre>

      <h3>2. Compară shell-urile</h3>

      <pre><code>diff /tmp/home.html /tmp/page.html</code></pre>

      <p>Dacă sunt identice, concluzia corectă este:</p>

      <blockquote><p><strong>cele două requesturi generice au primit același HTML; este posibil să existe un SPA shell sau un fallback comun și trebuie verificată arhitectura.</strong></p></blockquote>

      <p>Nu înseamnă automat că toate crawlerele primesc același răspuns.</p>

      <h3>3. Verifică canonicalul din răspunsul primit</h3>

      <pre><code>curl -s https://site-ul-tau.ro/o-alta-pagina | grep -i canonical</code></pre>

      <p>Asta îți spune ce canonical există în <strong>acea reprezentare</strong>.</p>

      <h3>4. Caută textul paginii în HTML</h3>

      <pre><code>curl -s https://site-ul-tau.ro/o-alta-pagina | grep -F "un text distinct din pagină"</code></pre>

      <p>Dacă textul nu apare, concluzia este:</p>

      <blockquote><p><strong>textul nu există în HTML-ul primit de requestul respectiv.</strong></p></blockquote>

      <p>Nu:</p>

      <blockquote><p>„textul nu există pentru AI”.</p></blockquote>

      <h3>5. Verifică Google separat</h3>

      <p>Folosește URL Inspection în Google Search Console pentru:</p>

      <ul>
        <li>crawl/index status;</li>
        <li>Google-selected canonical;</li>
        <li>informațiile pe care Google le are despre URL.<sup><a href="#fn-5">5</a></sup></li>
      </ul>

      <h3>6. Pentru Lovable, folosește și review-ul propriu al platformei</h3>

      <p>Documentația curentă indică <code>More → SEO &amp; AI search</code> și review-ul pentru crawlability, metadata, canonical, indexing și AI Markdown rendering.<sup><a href="#fn-1">1</a></sup></p>

      <p>Un test corect combină deci <strong>raw HTTP</strong>, <strong>instrumentul motorului</strong> și <strong>auditul platformei</strong>.</p>

      <h2>Ce se rezolvă, în ce ordine</h2>

      <p>Ordinea revizuită este:</p>

      <p><strong>1. Măsoară outputul real pe rutele importante.</strong><br />Nu presupune problema înainte de test.</p>

      <p><strong>2. Verifică canonicalurile.</strong><br />Fiecare pagină distinctă care trebuie indexată separat ar trebui, în mod normal, să aibă un canonical coerent cu URL-ul preferat al acelei pagini. Google recomandă self-referential canonical pentru URL-ul canonical.<sup><a href="#fn-2">2</a></sup></p>

      <p><strong>3. Asigură metadata distinctă per rută.</strong><br />Titlurile, descrierile și Open Graph metadata trebuie să descrie pagina respectivă. Lovable recomandă explicit metadata unică per rută pentru social previews și auditul SEO/AEO.<sup><a href="#fn-1">1</a></sup></p>

      <p><strong>4. Asigură o reprezentare crawlabilă a conținutului.</strong><br />SSR, static generation sau pre-randarea corectă reduc dependența de execuția client-side. Pentru proiectele Lovable vechi, platforma declară că oferă deja pre-randare crawlerelor verificate; upgrade-ul la TanStack Start oferă SSR complet.<sup><a href="#fn-1">1</a></sup></p>

      <p><strong>5. Verifică motorul concret.</strong><br />Pentru Google: Search Console. Pentru ChatGPT: nu bloca <code>OAI-SearchBot</code> dacă dorești includerea în search summaries/snippets.<sup><a href="#fn-8">8</a></sup> Pentru Perplexity: permite <code>PerplexityBot</code> dacă dorești apariția în search.<sup><a href="#fn-9">9</a></sup></p>

      <p><strong>6. Repetă testele după publicare.</strong><br />Reparația nu se presupune din cod; se verifică în răspunsul public și în instrumentele relevante.</p>

      <h2>De ce am publicat propriul diagnostic</h2>

      <p>Valoarea studiului nu este că „am demonstrat că site-ul meu era invizibil pentru AI”.</p>

      <p>Nu am demonstrat asta.</p>

      <p>Am demonstrat că <strong>un agent generic primea o reprezentare foarte săracă față de browser</strong>, iar documentația platformei explică astăzi de ce: pe vechea stivă Lovable, răspunsul poate fi diferențiat între agentul neverificat și crawlerul verificat.</p>

      <p>Publicarea diagnosticului rămâne utilă tocmai pentru că arată cum o concluzie tehnică se poate schimba după verificarea infrastructurii.</p>

      <p>Prima ipoteză a fost:</p>

      <blockquote><p>„crawlerul vede shell-ul, deci AI-ul vede shell-ul.”</p></blockquote>

      <p>După verificarea documentației, concluzia devine:</p>

      <blockquote><p><strong>„crawlerul generic vede shell-ul; nu pot extrapola acel rezultat către un crawler verificat fără să verific reprezentarea servită acelui crawler.”</strong></p></blockquote>

      <p>Aceasta este o corecție importantă și face studiul mai valoros ca demonstrație de metodă.</p>

      <p>În vizibilitatea AI, scopul nu este să confirmi ipoteza inițială, ci să separi ceea ce ai măsurat de ceea ce ai presupus.</p>

      <h2>Întrebări frecvente</h2>

      <h3>De ce <code>curl</code> nu vede același lucru ca browserul pe unele aplicații React?</h3>

      <p>Pentru că o aplicație client-side poate returna un shell HTML și poate construi conținutul după executarea JavaScript. În plus, unele platforme pot servi reprezentări diferite unor categorii diferite de agenți.</p>

      <h3>Dacă <code>curl</code> nu vede textul, înseamnă că ChatGPT nu îl vede?</h3>

      <p>Nu. <code>curl</code> arată răspunsul primit de requestul respectiv. În cazul proiectelor Lovable React + Vite vechi, documentația Lovable spune că agenții neverificați primesc SPA-ul obișnuit, iar crawlerii AI verificați precum ChatGPT și Perplexity primesc HTML pre-randat.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Dacă Google îmi indexează site-ul, înseamnă că totul este corect?</h3>

      <p>Nu. Google poate executa JavaScript, dar canonicalizarea, metadata, structura și alte probleme pot exista independent. URL Inspection poate fi folosit pentru a verifica inclusiv canonicalul selectat de Google.<sup><a href="#fn-6">6</a></sup><sup><a href="#fn-5">5</a></sup></p>

      <h3>Ce înseamnă dacă o pagină interioară are canonical către homepage?</h3>

      <p>Înseamnă că pagina trimite un semnal puternic că homepage-ul este URL-ul preferat pentru canonicalizare. Google poate accepta sau poate ignora acel semnal în funcție de celelalte indicii. Pentru pagini distincte care trebuie indexate separat, canonicalul către homepage este de regulă o configurație greșită.<sup><a href="#fn-2">2</a></sup></p>

      <h3>Site-urile făcute cu Lovable sunt invizibile pentru AI?</h3>

      <p>Nu. Documentația Lovable verificată la 10 august 2026 spune că noile aplicații TanStack Start folosesc SSR, iar aplicațiile React + Vite mai vechi folosesc pre-randare pentru crawlere verificate, inclusiv ChatGPT, Perplexity, Claude și Gemini.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Proiectele Lovable React + Vite vechi pot fi migrate la SSR?</h3>

      <p>Da, conform documentației Lovable verificate la 10 august 2026, proiectele existente pot fi upgradate la TanStack Start. Această capabilitate este specifică produsului și trebuie reverificată dacă documentația se schimbă.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Site-urile moderne au un risc mai mare de invizibilitate AI?</h3>

      <p>Nu există bază pentru această regulă. Multe framework-uri moderne folosesc SSR sau static generation. Riscul relevant este ca informația esențială să nu fie disponibilă în reprezentarea pe care o primește crawlerul relevant.</p>

      <h3>Cum verific corect un site?</h3>

      <p>Combină răspunsul HTTP brut cu instrumentele specifice motorului și platformei. <code>curl</code> verifică raw HTML; Search Console verifică perspectiva Google; iar Lovable oferă propriul SEO &amp; AI search review pentru proiectele sale.</p>

      <h2>Metodologie și limite</h2>

      <h3>Măsurătoarea proprie</h3>

      <p>Testul inițial a fost efectuat în august 2026 pe două rute ale <code>delamatescu.ro</code>, folosind un request generic care nu a executat aplicația în browser.</p>

      <p>Rezultatul susține doar afirmațiile despre HTML-ul primit de acel request.</p>

      <p>Nu este folosit în această versiune pentru a deduce direct ce primește un crawler AI verificat.</p>

      <h3>Verificarea externă</h3>

      <p>Pentru revizia din <strong>10 august 2026</strong> au fost folosite cu prioritate surse primare:</p>

      <ul>
        <li>documentația Lovable pentru stivele React + Vite și TanStack Start;</li>
        <li>Google Search Central pentru canonicalizare, JavaScript și URL Inspection;</li>
        <li>documentația OpenAI pentru <code>OAI-SearchBot</code>;</li>
        <li>documentația Perplexity pentru <code>PerplexityBot</code>.</li>
      </ul>

      <p>Afirmațiile despre comportamentul Lovable, OpenAI și Perplexity sunt <strong>volatile</strong> și descriu starea documentației la data verificării. Ele trebuie reverificate periodic.</p>

      <h3>Nivelurile de certitudine</h3>

      <p>În articol sunt separate explicit:</p>

      <ul>
        <li><strong>observația măsurată</strong> — ce a returnat requestul generic;</li>
        <li><strong>comportamentul documentat de platformă</strong> — ce declară Lovable că servește diferitelor categorii de agenți;</li>
        <li><strong>comportamentul documentat de motor</strong> — de exemplu, Google JavaScript rendering sau accesul OAI-SearchBot;</li>
        <li><strong>interpretarea AI Visibility Lab</strong> — concluzii de metodă care nu sunt prezentate ca mecanisme algoritmice.</li>
      </ul>

      <h2>Surse</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">Lovable Documentation — „Optimize your app for SEO and AI search", verificat 10 august 2026. Documentația precizează că aplicațiile noi create după 13 mai 2026 folosesc TanStack Start cu SSR; proiectele React + Vite mai vechi folosesc on-request pre-rendering pentru crawlerii verificați; agenții neverificați primesc SPA-ul normal; proiectele vechi pot fi upgradate la TanStack Start; iar SEO & AI search review verifică inclusiv canonicaluri, metadata și AI Markdown rendering: <a href="https://docs.lovable.dev/features/seo-aeo" target="_blank" rel="noopener noreferrer">docs.lovable.dev/features/seo-aeo</a></li>
        <li id="fn-2">Google Search Central — „How to specify a canonical URL with rel="canonical" and other methods". Google descrie rel="canonical" ca semnal puternic și recomandă canonical self-referential pentru URL-ul canonical: <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer">developers.google.com/…/consolidate-duplicate-urls</a></li>
        <li id="fn-3">Google Search Central — „5 common mistakes with rel=canonical". Documentează riscurile canonicalizării unor pagini distincte către o singură pagină și faptul că motoarele pot ignora un canonical nepotrivit: <a href="https://developers.google.com/search/blog/2013/04/5-common-mistakes-with-relcanonical" target="_blank" rel="noopener noreferrer">developers.google.com/…/5-common-mistakes-with-relcanonical</a></li>
        <li id="fn-4">Google Search Central — „Understand JavaScript SEO Basics". Google documentează folosirea JavaScript pentru title, meta description și canonical și recomandă consistență între HTML și modificările JavaScript: <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noopener noreferrer">developers.google.com/…/javascript-seo-basics</a></li>
        <li id="fn-5">Google Search Central — documentația URL Inspection / Google-selected canonical. Instrumentul oferă informații de crawl, indexare și canonical pentru URL-urile inspectate: <a href="https://developers.google.com/search/blog/2019/03/how-to-discover-suggest-google-selected" target="_blank" rel="noopener noreferrer">developers.google.com/…/how-to-discover-suggest-google-selected</a></li>
        <li id="fn-6">Google Search Central — „Understand JavaScript SEO Basics". Google Search procesează JavaScript în etapa de rendering: <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noopener noreferrer">developers.google.com/…/javascript-seo-basics</a></li>
        <li id="fn-7">Google Search Central — „Fix Search-related JavaScript problems". Google confirmă că rulează JavaScript, dar documentează diferențe și limitări care trebuie luate în calcul: <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/fix-search-javascript" target="_blank" rel="noopener noreferrer">developers.google.com/…/fix-search-javascript</a></li>
        <li id="fn-8">OpenAI Help Center — „Publishers and Developers - FAQ", verificat în august 2026. Orice site public poate apărea în ChatGPT Search; pentru includerea conținutului în summaries/snippets, publisherii nu trebuie să blocheze OAI-SearchBot: <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">help.openai.com/…/publishers-and-developers-faq</a></li>
        <li id="fn-9">Perplexity Documentation — „Perplexity Crawlers", verificat în august 2026. PerplexityBot este folosit pentru descoperirea și indexarea informațiilor pentru rezultatele Perplexity: <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">docs.perplexity.ai/docs/resources/perplexity-crawlers</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Infrastructura Lovable și politicile crawlerelor AI se pot schimba rapid. Afirmațiile despre stiva implicită, pre-randare, upgrade-ul TanStack Start, lista crawlerelor verificate, <code>OAI-SearchBot</code> și <code>PerplexityBot</code> descriu <strong>starea documentată la 10 august 2026</strong>.</p>

      <p>Dacă acest articol este actualizat ulterior, aceste afirmații trebuie reverificate din sursele primare înainte de republicare.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiectul de cercetare în vizibilitate AI al lui Alex Matescu. Ultima verificare factuală și a surselor: 10 august 2026.</em></p>
`;
