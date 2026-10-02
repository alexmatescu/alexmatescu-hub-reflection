import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const siteulNuDispareIsiSchimbaClientulMeta: LabArticleMeta = {
  title:
    "Site-ul nu dispare. Își schimbă clientul: cum se pregătește web-ul pentru agenți AI",
  description:
    "Ce înseamnă un site pregătit pentru agenți AI și ce nu înseamnă. Analizăm crawling, browser use, WebMCP, MCP, API-uri, structured data, autentificare și o metodă de măsurare bazată pe dovezi, fără a confunda accesibilitatea tehnică cu vizibilitatea sau recomandarea AI.",
  canonical:
    "https://delamatescu.ro/lab/articole/site-ul-nu-dispare-isi-schimba-clientul",
  category: "AI Ecosystem",
  articleType: "Analiză",
  datePublished: "2026-10-02T09:08:00+03:00",
  dateModified: "2026-10-02",
  lastReviewed: "2026-10-01",
  about: [
    { name: "Machine Accessibility" },
    { name: "Source Accessibility" },
    { name: "Agent Readiness" },
    { name: "WebMCP" },
    { name: "Model Context Protocol" },
    { name: "AI Retrieval" },
    { name: "Agentic Web" },
  ],
  keywords: [
    "AI Visibility",
    "agent-ready website",
    "AI agents",
    "machine accessibility",
    "WebMCP",
    "Model Context Protocol",
    "MCP",
    "AI crawlers",
    "ChatGPT-User",
    "structured data",
    "llms.txt",
    "API catalog",
    "agentic web",
    "agent readiness",
    "GEO",
    "AEO",
  ],
  citations: [
    {
      name: "Cloudflare — The Internet has a second audience",
      url: "https://blog.cloudflare.com/agentic-web/",
    },
    {
      name: "OpenAI — Overview of OpenAI Crawlers",
      url: "https://developers.openai.com/api/docs/bots",
    },
    {
      name: "OpenAI Help Center — Using site tools in the ChatGPT desktop app",
      url: "https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app",
    },
    {
      name: "Model Context Protocol — The 2026-07-28 Specification",
      url: "https://blog.modelcontextprotocol.io/posts/2026-07-28/",
    },
    {
      name: "Google Search Central — AI Features and Your Website",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
    },
    {
      name: "Cloudflare — Bot reference — AI Crawl Control",
      url: "https://developers.cloudflare.com/ai-crawl-control/reference/bots/",
    },
    {
      name: "Google Search Central — Optimizing your website for generative AI features on Google Search",
      url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    },
    {
      name: "Google Search Central — General Structured Data Guidelines",
      url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    },
    {
      name: "Cloudflare — Introducing the Agent Readiness score. Check to see if your site is agent-ready",
      url: "https://blog.cloudflare.com/agent-readiness/",
    },
    {
      name: "OpenAI — Keeping your data safe when an AI agent clicks a link",
      url: "https://openai.com/index/ai-agent-link-safety/",
    },
  ],
  faq: [],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const siteulNuDispareIsiSchimbaClientulHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-02T09:08:00+03:00">2 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-01">1 octombrie 2026</time></p>

      <p><strong>Site-ul nu devine irelevant în era agenților AI. Dimpotrivă, începe să deservească o categorie suplimentară de utilizatori: software care poate descoperi informație, o poate interpreta și, în anumite condiții, poate executa acțiuni în numele unui om.</strong> Problema nu mai este doar dacă o pagină poate fi citită, ci și ce poate face un sistem AI după ce ajunge la ea.</p>
      <p>Pe 30 septembrie 2026, Cloudflare a publicat o analiză cu un titlu care surprinde foarte bine schimbarea: <em>The Internet has a second audience</em>. Compania spune că, în propria rețea, solicitările zilnice provenite de la agenți AI au crescut cu peste 1.700% într-un an și argumentează că agenții reprezintă o categorie distinctă față de oamenii care navighează și față de boții tradiționali.<sup><a href="#fn-1">1</a></sup></p>
      <p>Cifrele provin din infrastructura Cloudflare și nu trebuie generalizate automat la întregul internet. Dar fenomenul pe care îl descriu este verificabil și din alte direcții: OpenAI documentează user agents care accesează pagini la cererea utilizatorului, oferă site tools bazate pe WebMCP, iar Model Context Protocol continuă să evolueze ca infrastructură prin care agenții pot descoperi și folosi date și instrumente externe.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup><sup><a href="#fn-4">4</a></sup></p>
      <p>În <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol al seriei</a> am introdus problema <em>machine accessibility</em>. În <a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">al doilea</a> am arătat de ce o informație publică nu este automat accesibilă fiecărui sistem AI. Acum mutăm analiza asupra site-ului propriu.</p>
      <p>Întrebarea nu mai este doar:</p>
      <blockquote>Poate fi găsit site-ul meu?</blockquote>
      <p>Ci și:</p>
      <blockquote><strong>Ce poate înțelege și ce poate face un sistem AI atunci când ajunge la el?</strong></blockquote>
      <p><strong>Unde se încadrează în serie:</strong> din modelul în șapte niveluri propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a> (Presence → Discoverability → Accessibility → Understanding → Verifiability → Recommendability → Actionability), acest articol privește nivelurile 2–5 și nivelul 7 din perspectiva site-ului propriu. Cele trei tipuri de readiness propuse aici le grupează: Information Readiness acoperă nivelurile 2–5, de la <strong>Discoverability</strong> la <strong>Verifiability</strong>, iar Interaction și Transaction Readiness detaliază nivelul 7, <strong>Actionability</strong>. Nivelul 6, <strong>Recommendability</strong>, rămâne în afara articolului: pregătirea site-ului nu garantează recomandarea.</p>
      <h2>Articolul în 7 idei</h2>
      <ol>
        <li><strong>De ce site-ul nu dispare în era AI?</strong> Pentru că rămâne una dintre puținele surse digitale pe care o organizație le controlează direct și care poate servi atât oamenilor, cât și sistemelor automate.</li>
        <li><strong>Cine este noul „client” al site-ului?</strong> Nu un model abstract, ci crawlere, sisteme de căutare, browser agents și agenți care folosesc instrumente oferite de site.</li>
        <li><strong>Este suficient ca site-ul să fie crawlable?</strong> Nu. Accesul, interpretarea și posibilitatea de acțiune sunt capacități diferite.</li>
        <li><strong>Trebuie refăcut site-ul pentru AI?</strong> Nu există o regulă universală. Google spune explicit că nu este nevoie de un markup special pentru generative AI search, iar <code>llms.txt</code> nu influențează vizibilitatea în Google Search.</li>
        <li><strong>Ce aduc WebMCP, MCP și API-urile?</strong> O cale prin care un agent poate folosi funcții și date fără să depindă exclusiv de interpretarea interfeței vizuale.</li>
        <li><strong>Ce înseamnă un site „agent-ready”?</strong> Este mai util să separăm pregătirea informațională, interacțională și tranzacțională decât să tratăm agent readiness ca pe o singură bifă.</li>
        <li><strong>Cum măsurăm dacă un site este pregătit pentru agenți AI?</strong> Verificând separat documentația, accesul tehnic, comportamentul observat și acțiunile efectiv executabile.</li>
      </ol>
      <h2>1. De ce site-ul nu dispare în era agenților AI?</h2>
      <p><strong>Pentru că site-ul rămâne un punct de publicare, control și interacțiune aflat direct sub responsabilitatea organizației.</strong> Intermediarii se schimbă, dar nevoia unei surse primare nu dispare.</p>
      <p>Traseele clasice, de la site prin motorul de căutare la om și, mai nou, prin răspunsul generat de AI, au fost descrise în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol al seriei</a>. Agenții adaugă un traseu în care site-ul nu mai este doar citit, ci și folosit:</p>
      <pre><code>Business
   ↓
Website / API / tool / business system
   ↓
AI agent
   ↓
Read / compare / update / book / buy / submit
   ↓
Human outcome</code></pre>
      <p>Aceste trasee coexistă. Nu există dovadă că website-ul este pe cale să fie înlocuit în bloc de agenți. Dimpotrivă, documentațiile actuale ale Google, OpenAI și Cloudflare tratează în continuare site-ul ca infrastructură relevantă: Google cere ca o pagină să fie indexată în Search pentru a putea apărea în AI Overviews și AI Mode; OpenAI documentează crawlere și acces la pagini; Cloudflare dezvoltă instrumente pentru controlul accesului agenților la site-uri.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-5">5</a></sup><sup><a href="#fn-6">6</a></sup></p>
      <p>Așadar, afirmația „site-urile nu vor mai conta” confundă schimbarea interfeței cu dispariția sursei.</p>
      <p>Un utilizator poate să nu mai deschidă direct zece pagini înainte de a lua o decizie. Agentul său poate face acest lucru în locul lui. Dar dacă informația de bază provine de pe site-ul business-ului, calitatea, actualitatea și accesibilitatea acelui site continuă să conteze.</p>
      <h2>2. Cine este noul „client” al site-ului?</h2>
      <p><strong>Nu există un singur vizitator AI. Există mai multe clase de software care pot interacționa cu site-ul în moduri diferite.</strong> Tocmai de aceea expresia „optimizat pentru AI” este prea vagă pentru o măsurare serioasă.</p>
      <p>OpenAI, de exemplu, separă în documentația sa mai multe roluri. <strong>OAI-SearchBot</strong> este folosit pentru search, <strong>GPTBot</strong> pentru crawling asociat potențialei utilizări în antrenarea modelelor, iar <strong>ChatGPT-User</strong> poate vizita pagini în urma unor acțiuni inițiate de utilizator. OpenAI precizează că aceste roluri sunt independente și că <code>ChatGPT-User</code> nu este un crawler automat pentru web.<sup><a href="#fn-2">2</a></sup></p>
      <p>Cloudflare folosește la rândul său categorii distincte precum <strong>AI Crawler</strong>, <strong>AI Search</strong> și <strong>AI Assistant</strong> în documentația AI Crawl Control.<sup><a href="#fn-6">6</a></sup></p>
      <p>Mai nou, există și o altă categorie: agentul care nu doar încarcă o pagină, ci folosește funcții oferite direct de ea. OpenAI descrie <strong>site tools</strong> în aplicația desktop ChatGPT ca instrumente pe care un website le poate pune la dispoziția ChatGPT pentru a găsi informație, actualiza conținut sau utiliza funcții interactive. Implementarea folosește <strong>WebMCP</strong>, descris de OpenAI ca un standard web propus. Funcția este disponibilă doar în anumite condiții de cont și model, nu tuturor utilizatorilor ChatGPT.<sup><a href="#fn-3">3</a></sup></p>
      <p>Prin urmare, „clientul” site-ului poate fi:</p>
      <pre><code>Human browser
Search crawler
AI search crawler
User-triggered fetcher
Browser agent
Tool-using agent
API / MCP client</code></pre>
      <p>Aceste categorii nu sunt interschimbabile. Faptul că una funcționează nu demonstrează că toate celelalte funcționează.</p>
      <h2>3. Este suficient ca site-ul să fie crawlable?</h2>
      <p><strong>Nu. Crawlability rezolvă o problemă de acces, nu întreaga problemă de reprezentare și nici problema acțiunii.</strong> Un agent poate ajunge la o pagină și totuși să nu poată identifica informația relevantă, să nu aibă acces la datele actuale sau să nu poată executa funcția dorită.</p>
      <p>Pentru o pagină informațională, un traseu minimal poate fi:</p>
      <pre><code>Reachable
   ↓
Crawlable
   ↓
Discoverable
   ↓
Retrievable
   ↓
Interpretable</code></pre>
      <p>Pentru o acțiune, însă, traseul poate continua:</p>
      <pre><code>Interpretable
   ↓
Authorized
   ↓
Interactive
   ↓
Actionable</code></pre>
      <p>Un hotel poate avea o pagină perfect indexabilă care explică tipurile de camere, dar disponibilitatea pe 17 octombrie poate exista doar în motorul de rezervări. Un magazin poate publica un produs și prețul său, dar cumpărarea presupune stoc actual, autentificare, adresă, plată și confirmare. Un cabinet poate avea pagina serviciului, dar programarea poate depinde de un sistem separat.</p>
      <p>De aceea, pentru AI Visibility Lab, este util să nu reducem site readiness la <code>robots.txt</code>, sitemap sau accesul unui crawler. Acestea sunt importante, dar reprezintă doar o parte din traseu.</p>
      <h2>4. Trebuie refăcut site-ul „pentru AI”?</h2>
      <p><strong>Nu există astăzi o rețetă universală și nici un set magic de fișiere care garantează vizibilitatea în răspunsurile AI.</strong> Unele practici clasice rămân fundamentale, iar standardele agentice trebuie evaluate separat de SEO.</p>
      <p>Google afirmă explicit în ghidul său pentru generative AI features din Search că practicile SEO fundamentale rămân relevante. Pentru apariția în AI Overviews sau AI Mode, pagina trebuie să îndeplinească cerințele tehnice pentru Google Search, să fie indexată și eligibilă pentru afișare cu snippet. Google spune că nu există cerințe tehnice suplimentare speciale pentru aceste funcții.<sup><a href="#fn-5">5</a></sup></p>
      <p>Același ghid contrazice două idei care apar frecvent în discuțiile GEO/AEO:</p>
      <ul>
        <li>Google Search <strong>nu cere un schema.org special pentru generative AI</strong>;</li>
        <li>Google Search <strong>ignoră <code>llms.txt</code></strong>, astfel încât existența lui nu ajută și nu afectează vizibilitatea sau ranking-ul în Google Search.<sup><a href="#fn-7">7</a></sup></li>
      </ul>
      <p>Asta nu înseamnă că structured data este inutilă. Google o folosește pentru a înțelege și clasifica informații despre pagini și pentru eligibilitatea anumitor rich results, iar documentația recomandă ca markup-ul să fie corect, actualizat și reprezentativ pentru conținutul vizibil.<sup><a href="#fn-8">8</a></sup></p>
      <p>Distincția importantă este:</p>
      <blockquote><strong>Structured data poate avea valoare pentru anumite sisteme și funcții, dar nu trebuie prezentată ca o garanție universală de înțelegere, citare sau recomandare AI.</strong></blockquote>
      <p>La fel, un fișier sau protocol nou poate fi util unui anumit agent și complet ignorat de altul.</p>
      <p>Prin urmare, înainte de implementare trebuie identificat sistemul țintă și mecanismul documentat pe care vrem să îl servim.</p>
      <h2>5. Ce aduc WebMCP, MCP și API-urile?</h2>
      <p><strong>Ele schimbă relația dintre agent și website de la „interpretează interfața” la „folosește o capacitate declarată”.</strong> Aceasta este una dintre cele mai importante diferențe dintre simplul browser automation și un web proiectat explicit pentru agenți.</p>
      <p>În cazul browser automation, agentul poate încerca să opereze site-ul aproximativ cum ar face-o un om:</p>
      <pre><code>open page
   ↓
read interface
   ↓
find button
   ↓
click
   ↓
fill form</code></pre>
      <p>Acest traseu poate funcționa, dar este sensibil la modificări de layout, formulare, autentificare și mecanisme anti-abuz.</p>
      <p>Prin <strong>WebMCP</strong>, un site poate expune instrumente direct agentului în contextul paginii deschise. OpenAI spune că site tools permit ChatGPT să descopere și să folosească aceste instrumente atunci când site-ul le oferă și utilizatorul are acces la funcție.<sup><a href="#fn-3">3</a></sup></p>
      <p>La un nivel mai general, <strong>Model Context Protocol (MCP)</strong> oferă un protocol deschis prin care clienții AI pot interacționa cu resurse și instrumente externe. Specificația publicată la 28 iulie 2026 a mutat nucleul protocolului către un model stateless și a continuat dezvoltarea componentelor de autorizare și extensibilitate.<sup><a href="#fn-4">4</a></sup></p>
      <p>Există și mecanisme web mai tradiționale. API-urile pot oferi acces structurat la produse, disponibilitate, documentație sau funcții. Cloudflare include în propriul său cadru de <em>Agent Readiness</em> elemente precum API Catalog, MCP, WebMCP, OAuth discovery și alte mecanisme de descoperire a capabilităților.<sup><a href="#fn-9">9</a></sup></p>
      <p>Aici este însă esențială o delimitare E-E-A-T:</p>
      <p><strong>Cloudflare Agent Readiness este un cadru și un instrument creat de Cloudflare, nu un standard universal acceptat al web-ului.</strong> Unele componente pe care le testează sunt standarde consacrate, altele sunt propuneri sau tehnologii emergente. Articolul de față îl folosește ca dovadă că industria construiește infrastructură pentru agenți, nu ca autoritate finală asupra modului în care toate site-urile trebuie proiectate.</p>
      <h2>6. Ce înseamnă, concret, un site pregătit pentru agenți AI?</h2>
      <p><strong>Nu este util să tratăm „agent-ready” ca pe o singură stare. Un site poate fi foarte bun ca sursă de informație și să nu aibă niciun motiv să permită tranzacții automatizate.</strong> Pentru măsurare, propunem trei dimensiuni distincte.</p>
      <h3>6.1 Information Readiness</h3>
      <p>Întrebarea este:</p>
      <blockquote>Poate sistemul relevant să găsească, accesa și interpreta corect informația pe care business-ul intenționează să o publice?</blockquote>
      <p>Aici intră, în funcție de obiectiv:</p>
      <ul>
        <li>accesul HTTP și randarea conținutului;</li>
        <li><code>robots.txt</code> și sitemap;</li>
        <li>canonicalizarea;</li>
        <li>structurarea coerentă a paginii;</li>
        <li>metadata și structured data acolo unde sunt suportate;</li>
        <li>identitatea clară a organizației și entităților;</li>
        <li>data actualizării;</li>
        <li>evitarea contradicțiilor dintre pagini;</li>
        <li>documentația și sursele primare.</li>
      </ul>
      <p>Pentru un articol, un laborator de cercetare sau un site de prezentare, acesta poate fi nivelul relevant și suficient.</p>
      <h3>6.2 Interaction Readiness</h3>
      <p>Întrebarea devine:</p>
      <blockquote>Poate un agent autorizat să solicite informație sau să folosească o funcție într-un mod mai robust decât simpla interpretare vizuală a paginii?</blockquote>
      <p>Aici pot intra:</p>
      <ul>
        <li>API-uri;</li>
        <li>WebMCP/site tools;</li>
        <li>MCP servers;</li>
        <li>formulare și endpoint-uri bine definite;</li>
        <li>mecanisme de autentificare și autorizare;</li>
        <li>documentație machine-readable pentru funcții.</li>
      </ul>
      <p>Nu toate site-urile au nevoie de aceste componente.</p>
      <h3>6.3 Transaction Readiness</h3>
      <p>Întrebarea este:</p>
      <blockquote>Poate un agent, cu autorizarea necesară, să finalizeze o operațiune cu efect real?</blockquote>
      <p>Exemplele pot include:</p>
      <ul>
        <li>rezervare;</li>
        <li>cumpărare;</li>
        <li>programare;</li>
        <li>modificarea unui document;</li>
        <li>emiterea unei solicitări;</li>
        <li>actualizarea unui cont.</li>
      </ul>
      <p>Acest nivel implică un risc și o responsabilitate mult mai mare. OpenAI descrie, de exemplu, riscul ca instrucțiuni ascunse în conținutul web (<em>prompt injection</em>) să încerce să determine un agent să transmită date sensibile printr-un URL, precum și măsurile prin care limitează acest risc.<sup><a href="#fn-10">10</a></sup> Dacă un simplu link poate deveni vector de exfiltrare, o operațiune cu efect real cere, în interpretarea noastră, cu atât mai mult confirmări explicite și controale de acces.</p>
      <p>Prin urmare:</p>
      <pre><code>Information Readiness
        ↓
Interaction Readiness
        ↓
Transaction Readiness</code></pre>
      <p>nu trebuie citit ca un „maturity ladder” în care orice business trebuie să ajungă la nivelul trei.</p>
      <p>Un site editorial poate avea nevoie doar de primul. Un serviciu de rezervări poate avea nevoie de toate trei. <strong>Pregătirea corectă este cea potrivită scopului și riscului.</strong></p>
      <p>Termenii de mai sus sunt folosiți aici ca <strong>un cadru exploratoriu AI Visibility Lab</strong>, nu ca standard industrial validat.</p>
      <h2>7. Cum măsurăm dacă un site este pregătit pentru agenți AI?</h2>
      <p><strong>Separând dovada de interpretare și testând fiecare capacitate printr-un mecanism observabil.</strong> Nu marcăm un site drept „agent-ready” doar pentru că are <code>llms.txt</code>, structured data sau un MCP endpoint.</p>
      <p>O matrice minimală de test poate arăta astfel:</p>
      <table>
        <thead>
          <tr><th>Dimensiune</th><th>Întrebare</th><th>Dovadă posibilă</th><th>Ce nu putem concluziona automat</th></tr>
        </thead>
        <tbody>
          <tr><td>Reachability</td><td>URL-ul răspunde tehnic?</td><td>HTTP response, status, headers</td><td>Că este indexat sau folosit de AI</td></tr>
          <tr><td>Discoverability</td><td>Poate fi descoperit prin mecanismul țintă?</td><td>sitemap, link, crawler logs, documentație</td><td>Că va fi selectat într-un răspuns</td></tr>
          <tr><td>Retrieval</td><td>Poate sistemul recupera informația într-un test datat?</td><td>răspuns + citare + timestamp</td><td>Că o va recupera mereu</td></tr>
          <tr><td>Understanding</td><td>Extrage corect entitatea și afirmațiile esențiale?</td><td>test repetat și comparat cu sursa</td><td>Că „înțelege” toate paginile site-ului</td></tr>
          <tr><td>Tool discovery</td><td>Descoperă instrumentele oferite?</td><td>WebMCP/MCP/API test</td><td>Că le va folosi în orice context</td></tr>
          <tr><td>Authorization</td><td>Poate obține accesul permis fără bypass?</td><td>flow autorizat, logs</td><td>Că poate accesa date nepermise</td></tr>
          <tr><td>Actionability</td><td>Poate finaliza operațiunea testată?</td><td>rezultat verificabil și audit trail</td><td>Că toate acțiunile similare vor funcționa</td></tr>
        </tbody>
      </table>
      <p>Discoverability, Understanding și Actionability corespund nivelurilor cu același nume din modelul propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a>. Reachability și Retrieval detaliază nivelul Accessibility, iar Tool discovery și Authorization sunt etape premergătoare nivelului Actionability, specifice site-ului.</p>
      <p>Lanțul metodologic rămâne cel prezentat în <a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">al doilea articol al seriei</a>: <strong>Raw Evidence → Indexed Evidence → Observation → Measurement</strong>, iar dincolo de granița metodologică, <strong>Interpretation</strong>.</p>
      <p>Exemplu:</p>
      <p>Dacă <code>robots.txt</code> permite OAI-SearchBot, aceasta este <strong>o configurație tehnică observabilă</strong>. Nu este dovada că pagina este indexată, citată sau recomandată în ChatGPT.<sup><a href="#fn-2">2</a></sup></p>
      <p>Dacă site-ul expune un instrument WebMCP, avem <strong>dovada existenței unei capabilități</strong>. Nu este dovada că fiecare utilizator ChatGPT are acces la site tools, că instrumentul va fi ales automat într-un anumit task sau că alte sisteme AI îl pot folosi.<sup><a href="#fn-3">3</a></sup></p>
      <p>Dacă structured data validează corect, avem <strong>dovada conformității markup-ului cu un set de reguli</strong>. Google precizează chiar pentru propriile rich results că implementarea corectă nu garantează afișarea rezultatului îmbogățit.<sup><a href="#fn-8">8</a></sup></p>
      <p>Această disciplină este importantă deoarece piața „AI optimization” are tendința de a transforma rapid suportul tehnic într-o promisiune de vizibilitate.</p>
      <h2>Ce poate verifica astăzi un business fără să reconstruiască site-ul?</h2>
      <p><strong>Mai întâi trebuie măsurat ce există deja.</strong> Înainte de API-uri noi, MCP servers sau redesign-uri, un business poate verifica dacă infrastructura actuală își îndeplinește rolul.</p>
      <p>Un audit minimal poate porni de la lista de mai jos; o parte din verificări se pot face și fără acces la cod, cum am arătat în <a href="/lab/articole/audit-site-fara-acces-cod">ghidul de audit din exterior</a>:</p>
      <ol>
        <li>paginile esențiale răspund corect și conținutul principal este disponibil fără erori majore;</li>
        <li>sitemap-ul și canonicalele descriu coerent structura site-ului;</li>
        <li>regulile pentru crawlerele relevante sunt intenționate, nu moștenite accidental;</li>
        <li>numele, adresa, serviciile, prețurile, disponibilitatea și celelalte date critice nu se contrazic între pagini;</li>
        <li>structured data, dacă este folosită, reflectă conținutul vizibil și actual;</li>
        <li>funcțiile care necesită autentificare rămân protejate;</li>
        <li>testele cu sisteme AI sunt datate și arhivate separat de configurația tehnică;</li>
        <li>eventualele instrumente pentru agenți sunt introduse numai dacă există un use case real.</li>
      </ol>
      <p>Google recomandă în continuare conținut util, fiabil, people-first și o experiență bună a paginii pentru generative AI features în Search. Acest lucru este important deoarece apariția agenților <strong>nu justifică degradarea experienței umane pentru a servi un presupus „AI format” universal</strong>.<sup><a href="#fn-5">5</a></sup><sup><a href="#fn-7">7</a></sup></p>
      <h2>Site-ul are acum două audiențe, dar nu doi stăpâni</h2>
      <p>Metafora din titlu trebuie citită cu o limită importantă.</p>
      <p>Site-ul nu „își schimbă clientul” în sensul că omul încetează să conteze. <strong>Își extinde audiența tehnică.</strong> Oamenii rămân cei pentru care există business-ul, produsul, informația și tranzacția. Agenții sunt intermediari software care pot reprezenta intenția lor.</p>
      <p>Cloudflare numește acest fenomen „a second audience”: software care acționează în numele oamenilor și care se situează undeva între oameni și boții tradiționali.<sup><a href="#fn-1">1</a></sup> OpenAI descrie deja site-uri care oferă agenților instrumente directe prin WebMCP.<sup><a href="#fn-3">3</a></sup> MCP continuă să transforme datele și instrumentele externe într-un substrat reutilizabil pentru fluxuri agentice.<sup><a href="#fn-4">4</a></sup></p>
      <p>Asta schimbă designul întrebării, nu doar designul paginii.</p>
      <p>În loc de:</p>
      <blockquote>Cum fac site-ul mai „AI friendly”?</blockquote>
      <p>întrebarea mai precisă este:</p>
      <blockquote><strong>Ce informație și ce acțiuni vreau să fie accesibile fiecărui tip de sistem, prin ce mecanism și cu ce dovezi că funcționează?</strong></blockquote>
      <p>Aceasta este diferența dintre optimizare generică și <em>machine accessibility</em> măsurabilă.</p>
      <h2>Concluzie: înainte să construim pentru agenți, trebuie să măsurăm ce pot face deja</h2>
      <p>Site-urile au trecut deja printr-o transformare asemănătoare. Au fost construite pentru oameni, apoi au învățat să servească motoare de căutare, screen readers, aplicații mobile, API clients și nenumărate alte tipuri de software.</p>
      <p>Agenții AI adaugă o categorie nouă, dar nu șterg infrastructura precedentă.</p>
      <p>De aceea, cel mai bun punct de plecare pentru un business nu este instalarea tuturor standardelor emergente. Este identificarea traseelor care contează pentru propriul model operațional:</p>
      <pre><code>Information
    ↓
Can it be found?
    ↓
Can it be accessed?
    ↓
Can it be interpreted correctly?
    ↓
Does the user need an action?
    ↓
If yes: can the authorized agent execute it safely?</code></pre>
      <p><strong>Înainte să construim site-uri pentru agenți AI, trebuie să demonstrăm ce pot face agenții cu site-urile pe care le avem deja.</strong></p>
      <p>Pentru AI Visibility Lab, acesta este pasul următor: să transformăm ideea de <em>agent readiness</em> dintr-un concept general într-un set de observații și măsurători reproductibile, fără să confundăm accesibilitatea tehnică cu citarea, recomandarea sau performanța comercială.</p>
      <p>În articolul următor vom urmări ce se întâmplă după ce un sistem AI găsește și înțelege un business: <strong><a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">„De la menționare la tranzacție: ce înseamnă Agentic Visibility pentru un business.”</a></strong></p>
      <hr />
      <h2>Seria „Machine accessibility și agentic web”</h2>
      <ol>
        <li><a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">De la web visibility la machine accessibility</a></li>
        <li><a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">Public nu mai înseamnă accesibil: de ce fiecare sistem AI vede un internet diferit</a></li>
        <li><strong>Site-ul nu dispare. Își schimbă clientul</strong> (acest articol)</li>
        <li><a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">De la menționare la tranzacție: ce înseamnă Agentic Visibility</a></li>
        <li><a href="/lab/articole/social-media-devine-strat-informational-pentru-ai">Social media devine strat informațional pentru AI</a></li>
      </ol>
      <hr />
      <h2>Surse și metodologie</h2>
      <ol class="avl-footnotes">
        <li id="fn-1">Cloudflare, <strong>The Internet has a second audience</strong>, 30 septembrie 2026. Sursa raportează date observate în rețeaua Cloudflare; acestea nu sunt tratate în articol ca măsurătoare exhaustivă a întregului internet. <a href="https://blog.cloudflare.com/agentic-web/" target="_blank" rel="noopener noreferrer">blog.cloudflare.com/agentic-web/</a></li>
        <li id="fn-2">OpenAI, <strong>Overview of OpenAI Crawlers</strong>, documentație oficială, consultată la 1 octombrie 2026. Documentația diferențiază OAI-SearchBot, GPTBot și ChatGPT-User și precizează rolurile lor distincte. <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">developers.openai.com/api/docs/bots</a></li>
        <li id="fn-3">OpenAI Help Center, <strong>Using site tools in the ChatGPT desktop app</strong>, consultat prin indexul de căutare la 1 octombrie 2026 (pagina blochează accesul automat). Pagina descrie site tools și WebMCP ca standard web propus. <a href="https://help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app" target="_blank" rel="noopener noreferrer">help.openai.com/en/articles/20001423-using-site-tools-in-the-chatgpt-desktop-app</a></li>
        <li id="fn-4">Model Context Protocol, <strong>The 2026-07-28 Specification</strong>, 28 iulie 2026. Sursă oficială a proiectului MCP. <a href="https://blog.modelcontextprotocol.io/posts/2026-07-28/" target="_blank" rel="noopener noreferrer">blog.modelcontextprotocol.io/posts/2026-07-28/</a></li>
        <li id="fn-5">Google Search Central, <strong>AI Features and Your Website</strong>, documentație oficială, consultată la 1 octombrie 2026. Pagina precizează că pentru AI Overviews și AI Mode se aplică aceleași cerințe fundamentale Search și că îndeplinirea lor nu garantează crawling, indexare sau afișare. <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/appearance/ai-features</a></li>
        <li id="fn-6">Cloudflare, <strong>Bot reference — AI Crawl Control</strong>, documentație oficială, consultată la 1 octombrie 2026. Documentația clasifică roboți precum GPTBot, ChatGPT-User, OAI-SearchBot, ClaudeBot și alții în categorii funcționale distincte. <a href="https://developers.cloudflare.com/ai-crawl-control/reference/bots/" target="_blank" rel="noopener noreferrer">developers.cloudflare.com/ai-crawl-control/reference/bots/</a></li>
        <li id="fn-7">Google Search Central, <strong>Optimizing your website for generative AI features on Google Search</strong>, documentație oficială, consultată la 1 octombrie 2026. Google precizează că <code>llms.txt</code> nu influențează vizibilitatea sau ranking-ul în Google Search și că nu este necesar un markup schema.org special pentru generative AI search. <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/fundamentals/ai-optimization-guide</a></li>
        <li id="fn-8">Google Search Central, <strong>General Structured Data Guidelines</strong>, documentație oficială, consultată la 1 octombrie 2026. Google precizează că structured data trebuie să fie reprezentativă pentru conținutul vizibil și că implementarea corectă nu garantează apariția unui rich result. <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/appearance/structured-data/sd-policies</a></li>
        <li id="fn-9">Cloudflare, <strong>Introducing the Agent Readiness score. Check to see if your site is agent-ready</strong>, 17 aprilie 2026, actualizat la 15 iulie 2026. Instrumentul este un cadru Cloudflare; articolul de față nu îl tratează ca standard universal. <a href="https://blog.cloudflare.com/agent-readiness/" target="_blank" rel="noopener noreferrer">blog.cloudflare.com/agent-readiness/</a></li>
        <li id="fn-10">OpenAI, <strong>Keeping your data safe when an AI agent clicks a link</strong>, 28 ianuarie 2026 (pagina blochează accesul automat; conținutul a fost confirmat la 1 octombrie 2026 prin indexul de căutare). Pagina descrie riscuri asociate agenților care accesează conținut web, inclusiv exfiltrarea datelor și necesitatea măsurilor de siguranță. <a href="https://openai.com/index/ai-agent-link-safety/" target="_blank" rel="noopener noreferrer">openai.com/index/ai-agent-link-safety/</a></li>
      </ol>
      <hr />
      <h2>Notă metodologică AI Visibility Lab</h2>
      <p>Acest articol distinge între <strong>capabilități documentate</strong>, <strong>configurații tehnice observabile</strong>, <strong>teste efectuate</strong> și <strong>interpretări</strong>. Nicio setare izolată — <code>robots.txt</code>, sitemap, structured data, <code>llms.txt</code>, WebMCP, MCP sau API — nu este prezentată ca dovadă suficientă că un business va fi citat, menționat, recomandat sau preferat de un sistem AI.</p>
      <p>Termenii <strong>Information Readiness</strong>, <strong>Interaction Readiness</strong> și <strong>Transaction Readiness</strong> sunt utilizați aici ca un cadru exploratoriu AI Visibility Lab pentru separarea tipurilor de acces. Nu sunt prezentați ca standarde oficiale, niveluri de maturitate recunoscute sau cerințe obligatorii pentru toate site-urile.</p>
      <p>Expresia <strong>agent-ready</strong> este deja folosită public de Cloudflare și de alte proiecte din ecosistemul agentic; AI Visibility Lab nu revendică originea termenului. Cadrul propriu introdus în acest articol constă în delimitarea operațională a celor trei tipuri de readiness și în integrarea lor în lanțul metodologic <code>Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation</code>.</p>
      <h2>Notă de volatilitate</h2>
      <p>WebMCP este un standard propus, MCP își schimbă specificația periodic, iar disponibilitatea site tools în ChatGPT, categoriile de boți din Cloudflare și criteriile Agent Readiness pot fi diferite la data lecturii. Afirmațiile despre produse și specificații au fost verificate la 1 octombrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 1 octombrie 2026.</em></p>
`;
