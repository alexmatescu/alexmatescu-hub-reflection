import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const deLaWebVisibilityLaMachineAccessibilityMeta: LabArticleMeta = {
  title:
    "De la web visibility la machine accessibility: ce se schimbă când AI-ul nu doar citește internetul, ci acționează în el?",
  description:
    "Vizibilitatea în AI se extinde de la citare și recomandare la acces și acțiune. Pornind de la anunțurile Meta, Anthropic, OpenAI și Cloudflare din 2026, analiza propune termenul machine accessibility și un cadru de lucru în șapte niveluri pentru a evalua dacă un agent AI poate descoperi, accesa, verifica și folosi informația despre un business.",
  canonical:
    "https://delamatescu.ro/lab/articole/de-la-web-visibility-la-machine-accessibility",
  category: "AI Ecosystem",
  articleType: "Analiză",
  datePublished: "2026-09-30T20:59:00+03:00",
  dateModified: "2026-10-02",
  lastReviewed: "2026-09-30",
  about: [
    { name: "Machine accessibility" },
    { name: "AI agents" },
    { name: "Agentic commerce" },
    { name: "Meta Enterprise Platform" },
    { name: "Claude Marketplace" },
    { name: "Agentic Commerce Protocol" },
    { name: "Cloudflare AI crawler controls" },
  ],
  keywords: [
    "AI Visibility",
    "machine accessibility",
    "agentic AI",
    "AI agents",
    "GEO",
    "AEO",
    "agentic commerce",
    "Meta Enterprise Platform",
    "Muse",
    "Claude Marketplace",
    "Agentic Commerce Protocol",
    "AI crawlers",
    "AI retrieval",
    "machine-readable web",
  ],
  citations: [
    {
      name: "Meta — Launching Meta Enterprise Platform",
      url: "https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/",
    },
    {
      name: "Meta — Introducing Muse: The World’s First Personal AI Agent Built for Everyone",
      url: "https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/",
    },
    {
      name: "Meta — The Future Is for Everyone: Muse for Small Business",
      url: "https://about.fb.com/news/2026/09/introducing-muse-small-business/",
    },
    {
      name: "Meta — Be There for Every Customer With Meta Business Agent",
      url: "https://about.fb.com/news/2026/06/meta-business-agent/",
    },
    {
      name: "Cloudflare — Block AI Bots",
      url: "https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/",
    },
    {
      name: "Cloudflare — Have it both ways: stay discoverable in search while disallowing AI training",
      url: "https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/",
    },
    {
      name: "Anthropic — Claude Marketplace: one place to discover plugins, agents, and services from our partners",
      url: "https://claude.com/blog/claude-marketplace",
    },
    {
      name: "OpenAI — Powering Product Discovery in ChatGPT",
      url: "https://openai.com/index/powering-product-discovery-in-chatgpt/",
    },
    {
      name: "OpenAI Help Center — Using shopping research in ChatGPT",
      url: "https://help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt",
    },
  ],
  faq: [
    {
      q: "Este machine accessibility un standard sau un termen consacrat?",
      a: "Nu. În acest articol, machine accessibility este o etichetă descriptivă folosită de AI Visibility Lab pentru a numi traseul dintre informația despre o entitate și acțiunea pe care un sistem AI o poate face cu ea. Nu este un standard al industriei și nici un termen definit de Meta, Anthropic, OpenAI sau Cloudflare.",
    },
    {
      q: "Dacă activez în Cloudflare opțiunea de a refuza AI training, dispar din rezultatele de căutare?",
      a: "Nu ar trebui, potrivit Cloudflare. Setarea „Disallow AI Training” a fost gândită tocmai pentru a separa search-ul de training la crawlerele cu utilizare mixtă, iar Cloudflare afirmă că Apple, Google și Microsoft s-au angajat să o respecte fără efect asupra ranking-ului în search. Pentru operatorii care nu și-au asumat acest angajament, comportamentul trebuie verificat separat.",
    },
    {
      q: "Înlocuiește machine accessibility SEO, GEO sau AEO?",
      a: "Nu. Articolul susține că problema se extinde, nu că disciplinele existente devin inutile. Indexarea, înțelegerea conținutului și prezența în răspunsurile generative rămân condiții ale traseului; machine accessibility adaugă întrebările despre acces autorizat, verificare și acțiune.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const deLaWebVisibilityLaMachineAccessibilityHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-09-30T20:59:00+03:00">30 septembrie 2026</time> · Actualizat: <time datetime="2026-10-02">2 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-09-30">30 septembrie 2026</time></p>

      <p><strong>Vizibilitatea în AI începe să însemne mai mult decât să fii găsit, citat sau recomandat. Pe măsură ce agenții AI capătă acces la aplicații, date, instrumente și acțiuni, devine relevant dacă un sistem poate descoperi o entitate, accesa informația potrivită, o înțelege, o verifică și apoi poate face ceva util cu ea.</strong></p>
      <p>În ultimii ani, discuția despre vizibilitate digitală a fost dominată de o întrebare familiară: poate un motor de căutare să găsească și să indexeze pagina mea?</p>
      <p>Odată cu apariția sistemelor generative, întrebarea s-a schimbat: poate un model AI să găsească informația despre mine, să o înțeleagă și să mă includă într-un răspuns?</p>
      <p>Dar în 2026 începe să apară o a treia întrebare, mai largă:</p>
      <blockquote><p>Poate un agent AI să interacționeze cu entitatea mea și să execute o acțiune în numele utilizatorului?</p></blockquote>
      <p>Această schimbare este importantă deoarece mută problema de la <strong>web visibility</strong> la ceea ce voi numi în acest articol <strong>machine accessibility</strong>. Termenul este folosit aici ca etichetă descriptivă a AI Visibility Lab, nu ca standard consacrat al industriei.</p>
      <p>Nu este vorba despre înlocuirea SEO, GEO sau AEO. Este vorba despre extinderea problemei pe care acestea încearcă să o rezolve.</p>
      <hr />
      <h2>1. Ce înseamnă machine accessibility?</h2>
      <p><strong>Machine accessibility descrie măsura în care un sistem AI poate descoperi, accesa, interpreta, verifica și utiliza informația despre o entitate pentru a răspunde sau a executa o acțiune.</strong></p>
      <p>În modelul web clasic, traseul era relativ simplu:</p>
      <pre><code>Business
   ↓
Website
   ↓
Search engine
   ↓
Human</code></pre>
      <p>Într-un sistem de răspunsuri AI, traseul devine:</p>
      <pre><code>Business
   ↓
Website / web sources
   ↓
Retrieval / model
   ↓
AI answer
   ↓
Human</code></pre>
      <p>Într-un ecosistem agentic, arhitectura devine mai complexă:</p>
      <pre><code>Business
   ↓
Website / social / documentation / product feeds / APIs / business systems
   ↓
Access layer
(crawl / search / API / connector / plugin / authorization / protocol)
   ↓
AI agent
   ↓
Discovery / comparison / recommendation / transaction / action
   ↓
Human</code></pre>
      <p>Diferența nu este doar terminologică.</p>
      <p>Un agent AI nu trebuie doar să știe că un hotel există. Poate avea nevoie să îi verifice disponibilitatea.</p>
      <p>Nu trebuie doar să identifice un produs. Poate avea nevoie să afle prețul actual, variantele disponibile și condițiile de livrare.</p>
      <p>Nu trebuie doar să găsească o firmă. Poate avea nevoie să îi contacteze sistemul de programări, să completeze un formular sau să inițieze o tranzacție.</p>
      <p>În aceste situații, simpla existență a informației pe web nu mai este suficientă.</p>
      <hr />
      <h2>2. De ce Meta Enterprise Platform este un semnal important?</h2>
      <p><strong>Meta arată explicit că agenții AI sunt gândiți nu doar ca interfețe conversaționale, ci ca infrastructură pentru operațiuni de business.</strong></p>
      <p>Pe 28 septembrie 2026, Meta a anunțat <strong>Meta Enterprise Platform</strong>, prezentată ca un nou pilon major al business-ului companiei. Potrivit Meta, platforma se adresează companiilor și dezvoltatorilor și va include inițial agentul Muse, Meta Business Agent, Muse API și Muse Code, alături de alte instrumente.<sup><a href="#fn-1">1</a></sup></p>
      <p>Cu trei săptămâni înainte, pe 8 septembrie, Meta lansase <strong>Muse</strong>, un agent personal care rulează într-o mașină virtuală dedicată și poate lucra în numele utilizatorului printr-un browser integrat și prin aplicațiile conectate. Meta descrie Muse ca pe un sistem care nu doar răspunde la întrebări, ci poate executa sarcini precum trimiterea unui email sau rezervarea unei călătorii, cerând aprobarea utilizatorului înaintea unor acțiuni precum trimiterea de emailuri sau achizițiile. La lansare, Muse era disponibil în SUA.<sup><a href="#fn-2">2</a></sup></p>
      <p>Pe 29 septembrie, Meta a extins această direcție către small business. Compania a anunțat că Muse poate fi conectat, printre altele, la Shopify, Stripe, Intuit QuickBooks, Canva, Notion, Slack, precum și la conturile de business Facebook și Instagram. Meta precizează că nimic nu este publicat, trimis sau plătit fără aprobarea proprietarului.<sup><a href="#fn-3">3</a></sup></p>
      <p>În paralel, potrivit anunțului Meta din iunie 2026, Meta Business Agent era deja folosit de peste un milion de business-uri pe WhatsApp și Messenger și poate răspunde la întrebări specifice business-ului, face recomandări de produse din catalog, programa întâlniri, califica lead-uri și închide vânzări.<sup><a href="#fn-4">4</a></sup> Cifra este raportată de companie, nu măsurată independent.</p>
      <p>Interpretarea mea: aceste produse sugerează o schimbare importantă:</p>
      <pre><code>AI answer
      ↓
AI action</code></pre>
      <p>Un business nu mai trebuie doar să fie reprezentat corect în răspunsul unui model. Trebuie să devină și <strong>interoperabil</strong> cu sistemele care acționează în numele clienților sau al propriilor angajați.</p>
      <hr />
      <h2>3. De ce un website public nu este automat accesibil tuturor sistemelor AI?</h2>
      <p><strong>Pentru că „public”, „crawlable”, „retrievable”, „authorized” și „actionable” sunt proprietăți diferite.</strong></p>
      <p>În web-ul tradițional, era tentant să tratăm publicarea unei pagini și accesibilitatea ei ca fiind aproape același lucru.</p>
      <p>În ecosistemul AI, această presupunere devine tot mai fragilă.</p>
      <p>Cloudflare oferă deja instrumente prin care proprietarii de site-uri pot vedea și controla accesul serviciilor AI la conținut. Documentația sa separă explicit comportamente precum <strong>Search</strong>, <strong>Training</strong> și <strong>Agent</strong>, unde „Agent” înseamnă activitate automatizată realizată în timp real în numele unei persoane, inclusiv chat fetch bots și browser-use agents.<sup><a href="#fn-5">5</a></sup></p>
      <p>Pe 15 septembrie 2026, Cloudflare a introdus și setarea „Disallow AI Training”, prin care un site poate rămâne accesibil pentru search, dar poate refuza folosirea conținutului pentru AI training. Mecanismul vizează crawlerele cu utilizare mixtă (același crawler folosit și pentru search, și pentru training), iar Cloudflare afirmă că Apple, Google și Microsoft s-au angajat să respecte această preferință; nu este un blocaj universal valabil pentru orice operator.<sup><a href="#fn-6">6</a></sup></p>
      <p>Așadar, putem avea situații ipotetice precum:</p>
      <pre><code>Publicly available      = DA
Search indexed          = DA
AI training allowed     = NU
AI agent access         = DEPINDE
API access              = NU
Actionable              = NU</code></pre>
      <p>De aceea, o formulă mai corectă este:</p>
      <blockquote><p><strong>Published ≠ Crawlable ≠ Retrievable ≠ Authorized ≠ Actionable</strong></p></blockquote>
      <p>Această diferență va deveni tot mai importantă pe măsură ce agenții vor opera pe web în numele utilizatorilor.</p>
      <hr />
      <h2>4. De ce conectorii și API-urile devin la fel de importante ca paginile web?</h2>
      <p><strong>Pentru că un sistem AI poate primi informația printr-un canal direct și structurat, fără să depindă exclusiv de crawling-ul web.</strong></p>
      <p>Pe 23 septembrie 2026, Anthropic a lansat <strong>Claude Marketplace</strong>, cu peste 2.000 de plugins și connectors disponibile, inclusiv de la Atlassian, Google, Microsoft, Notion și Salesforce. Anthropic dă ca exemplu conectorul Atlassian, care aduce în Claude contextul din Confluence, Jira și alte aplicații ale echipei.<sup><a href="#fn-7">7</a></sup></p>
      <p>Din punct de vedere informațional, acest lucru este semnificativ.</p>
      <p>Claude nu mai depinde doar de informația pe care o poate găsi pe web. Prin conectorii configurați de utilizator sau de organizație, poate lucra direct cu date din aplicațiile la care i s-a dat acces.</p>
      <p>Aceeași logică apare în ecosistemul Meta (conectorii Muse descriși mai sus) și, după cum arată secțiunea următoare, la OpenAI:</p>
      <pre><code>Website → crawl → retrieval</code></pre>
      <p>nu mai este singurul traseu posibil.</p>
      <p>Mai apar:</p>
      <pre><code>API → AI
Connector → AI
Plugin → AI
Authorized business data → AI
Product feed → AI
Internal system → AI</code></pre>
      <p>Din perspectiva AI Visibility, această schimbare înseamnă că trebuie măsurată nu doar <strong>prezența informației</strong>, ci și <strong>calea prin care un sistem o poate accesa</strong>.</p>
      <hr />
      <h2>5. Ce schimbă agentic commerce?</h2>
      <p><strong>Transformă recomandarea într-un posibil punct intermediar, nu într-un rezultat final.</strong></p>
      <p>Într-un motor de căutare clasic, obiectivul unei companii putea fi obținerea clickului.</p>
      <p>Într-un răspuns AI, obiectivul poate deveni menționarea, citarea sau recomandarea.</p>
      <p>În agentic commerce, următorul pas poate fi tranzacția însăși.</p>
      <p>Pe 24 martie 2026, OpenAI a anunțat experiențe de product discovery în ChatGPT alimentate de <strong>Agentic Commerce Protocol (ACP)</strong>, protocolul deschis dezvoltat împreună cu Stripe.<sup><a href="#fn-8">8</a></sup> Documentația OpenAI precizează că shopping research în ChatGPT poate folosi date de produs furnizate de comercianți prin ACP.<sup><a href="#fn-9">9</a></sup></p>
      <p>Același anunț conține și o nuanță importantă: OpenAI a constatat că prima versiune a Instant Checkout nu oferea flexibilitatea urmărită și a permis comercianților să folosească propriile experiențe de checkout, concentrându-se pe discovery.<sup><a href="#fn-8">8</a></sup> Cu alte cuvinte, nici în agentic commerce tranzacția nu trece automat în interfața agentului; ea depinde de ce acceptă comerciantul și de ce infrastructură expune.</p>
      <p>Asta creează o succesiune nouă:</p>
      <pre><code>Find me
   ↓
Understand me
   ↓
Mention me
   ↓
Recommend me
   ↓
Interact with me
   ↓
Transact with me</code></pre>
      <p>Ultimele două etape nu mai țin doar de vizibilitate în sensul tradițional.</p>
      <p>Ele țin de capacitatea entității de a fi <strong>accesată operațional</strong> de un sistem AI.</p>
      <hr />
      <h2>6. Cum poate fi măsurată această schimbare?</h2>
      <p><strong>Machine accessibility poate fi transformată din concept într-un set de teste observabile.</strong></p>
      <p>Pentru AI Visibility Lab, o primă schemă de lucru poate fi următoarea. Este un cadru propus de laborator, încă nevalidat experimental, nu un standard al industriei:</p>
      <h3>1. Presence</h3>
      <p>Există o urmă digitală clară a entității?</p>
      <h3>2. Discoverability</h3>
      <p>Poate sistemul să găsească entitatea și sursele relevante?</p>
      <h3>3. Accessibility</h3>
      <p>Poate accesa efectiv informația prin web, API, connector, plugin sau alt mecanism autorizat?</p>
      <h3>4. Understanding</h3>
      <p>Poate identifica corect entitatea, ofertele, relațiile și atributele ei?</p>
      <h3>5. Verifiability</h3>
      <p>Poate valida informația prin surse actuale și suficient de autoritative?</p>
      <h3>6. Recommendability</h3>
      <p>Poate include entitatea într-un răspuns de comparație sau recomandare relevant?</p>
      <h3>7. Actionability</h3>
      <p>Poate executa următorul pas: contact, programare, comandă, rezervare, achiziție sau altă acțiune permisă?</p>
      <p>Rezumatul poate fi exprimat astfel:</p>
      <pre><code>Presence
   ↓
Discoverability
   ↓
Accessibility
   ↓
Understanding
   ↓
Verifiability
   ↓
Recommendability
   ↓
Actionability</code></pre>
      <p>Acest model nu presupune că toate business-urile trebuie să atingă toate nivelurile.</p>
      <p>Un site editorial poate avea nevoie în primul rând de accesibilitate și verificabilitate.</p>
      <p>Un magazin online poate avea nevoie și de actionability.</p>
      <p>Un cabinet medical poate avea cerințe suplimentare de autorizare, confidențialitate și control.</p>
      <p>Primele niveluri sunt deja teme ale laboratorului: diferența dintre ce vede un om și ce vede un crawler la același URL (analizată în <a href="/lab/articole/paradoxul-site-ului-terminat">Paradoxul site-ului terminat</a>), identificarea corectă a unei entități (<a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz">Ce este o entitate pentru AI</a>) și măsurarea longitudinală a felului în care Search și AI Search rezolvă o identitate (<a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul de caz Tabula Rasa</a>). Nivelurile Accessibility prin canale autorizate și Actionability nu au fost încă măsurate în AI Visibility Lab.</p>
      <p>Important este că vizibilitatea nu mai poate fi tratată ca o proprietate binară.</p>
      <hr />
      <h2>7. Ce înseamnă asta pentru GEO, AEO și AI Visibility?</h2>
      <p><strong>Înseamnă că problema se extinde de la „poate AI-ul să vorbească despre mine?” la „poate AI-ul să lucreze corect cu informația și sistemele mele?”</strong></p>
      <p>SEO a optimizat relația dintre website și motorul de căutare.</p>
      <p>AEO a pus accent pe capacitatea conținutului de a răspunde direct unei întrebări.</p>
      <p>GEO analizează tot mai mult condițiile în care o entitate, o sursă sau un brand poate fi reprezentat, citat sau recomandat în răspunsurile generative.</p>
      <p>Era agenților adaugă o dimensiune nouă:</p>
      <blockquote><p><strong>machine accessibility</strong></p></blockquote>
      <p>Nu este suficient ca informația să existe.</p>
      <p>Trebuie să știm:</p>
      <ul>
        <li>unde există;</li>
        <li>dacă poate fi accesată;</li>
        <li>prin ce mecanism;</li>
        <li>de ce sistem;</li>
        <li>cu ce restricții;</li>
        <li>cât de actuală este;</li>
        <li>dacă poate fi verificată;</li>
        <li>dacă poate fi folosită într-o acțiune.</li>
      </ul>
      <p>De aici rezultă și o problemă metodologică importantă:</p>
      <p><strong>fiecare sistem AI poate vedea un internet diferit.</strong></p>
      <p>Un model poate avea acces prin web search.</p>
      <p>Altul poate avea un connector dedicat.</p>
      <p>Un agent poate avea acces autorizat la date private.</p>
      <p>Alt agent poate fi blocat de site.</p>
      <p>Un provider poate primi date structurate direct de la comerciant.</p>
      <p>Altul poate depinde doar de informația publică disponibilă.</p>
      <p>Prin urmare, întrebarea relevantă nu mai este doar:</p>
      <blockquote><p>Este informația mea online?</p></blockquote>
      <p>Ci:</p>
      <blockquote><p><strong>Pentru ce sistem este accesibilă, prin ce mecanism și ce poate face acel sistem cu ea?</strong></p></blockquote>
      <hr />
      <h2>Concluzie</h2>
      <p>Internetul nu încetează să fie format din website-uri, documentație, baze de date, platforme sociale și aplicații.</p>
      <p>Ceea ce se schimbă este <strong>interfața prin care aceste resurse sunt descoperite și utilizate</strong>.</p>
      <p>Motorul de căutare a fost mult timp intermediarul dominant dintre informație și om.</p>
      <p>Modelele generative au devenit un nou intermediar între sursă și răspuns.</p>
      <p>Agenții AI introduc un al treilea rol: intermediarul care poate și <strong>acționa</strong>.</p>
      <p>De aceea, AI Visibility trebuie privită dincolo de simpla prezență într-un răspuns generativ.</p>
      <p>O entitate poate fi vizibilă, dar inaccesibilă operațional.</p>
      <p>Poate fi accesibilă, dar greu de identificat.</p>
      <p>Poate fi identificată, dar informația despre ea poate fi imposibil de verificat.</p>
      <p>Poate fi recomandată, dar agentul să nu poată realiza următorul pas.</p>
      <p>Într-un internet construit tot mai mult pentru interacțiunea dintre oameni și agenți, <strong>vizibilitatea devine o proprietate a întregului traseu dintre informație și acțiune</strong>.</p>
      <p>Iar acesta este motivul pentru care următoarea întrebare pentru un business nu va fi doar „mă găsește AI-ul?”, ci:</p>
      <blockquote><p><strong>Cât de accesibil sunt pentru sistemele care caută, interpretează, recomandă și acționează în numele oamenilor?</strong></p></blockquote>
      <hr />
      <h2>Întrebări frecvente</h2>
      <h3>Este machine accessibility un standard sau un termen consacrat?</h3>
      <p>Nu. În acest articol, machine accessibility este o etichetă descriptivă folosită de AI Visibility Lab pentru a numi traseul dintre informația despre o entitate și acțiunea pe care un sistem AI o poate face cu ea. Nu este un standard al industriei și nici un termen definit de Meta, Anthropic, OpenAI sau Cloudflare.</p>
      <h3>Dacă activez în Cloudflare opțiunea de a refuza AI training, dispar din rezultatele de căutare?</h3>
      <p>Nu ar trebui, potrivit Cloudflare. Setarea „Disallow AI Training” a fost gândită tocmai pentru a separa search-ul de training la crawlerele cu utilizare mixtă, iar Cloudflare afirmă că Apple, Google și Microsoft s-au angajat să o respecte fără efect asupra ranking-ului în search. Pentru operatorii care nu și-au asumat acest angajament, comportamentul trebuie verificat separat.</p>
      <h3>Înlocuiește machine accessibility SEO, GEO sau AEO?</h3>
      <p>Nu. Articolul susține că problema se extinde, nu că disciplinele existente devin inutile. Indexarea, înțelegerea conținutului și prezența în răspunsurile generative rămân condiții ale traseului; machine accessibility adaugă întrebările despre acces autorizat, verificare și acțiune.</p>

      <hr />

      <h2>Seria „Machine accessibility și agentic web”</h2>
      <ol>
        <li><strong>De la web visibility la machine accessibility</strong> (acest articol)</li>
        <li><a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">Public nu mai înseamnă accesibil: de ce fiecare sistem AI vede un internet diferit</a></li>
        <li><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">Site-ul nu dispare. Își schimbă clientul</a></li>
        <li><a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">De la menționare la tranzacție: ce înseamnă Agentic Visibility</a></li>
        <li><a href="/lab/articole/social-media-devine-strat-informational-pentru-ai">Social media devine strat informațional pentru AI</a></li>
      </ol>

      <hr />

      <h2>Surse și metodologie</h2>

      <p>Acest articol tratează anunțurile și documentațiile citate ca <strong>evidence inputs</strong>, nu ca validare independentă a afirmațiilor comerciale ale furnizorilor. Cifrele (peste un milion de business-uri, peste 2.000 de plugins și connectors) sunt raportate de companii. Pe 30 septembrie 2026 au fost reverificate existența și data fiecărei surse, formularea capabilităților descrise și disponibilitatea anunțată (de exemplu, Muse lansat în SUA). Cele două pagini OpenAI blochează accesul automat și au fost confirmate prin indexul de căutare, nu prin citire directă. Termenul „machine accessibility” și modelul în șapte niveluri sunt propuneri ale AI Visibility Lab, nu standarde ale industriei, iar ultimele niveluri ale modelului nu au fost încă testate empiric.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">Meta, <strong>Launching Meta Enterprise Platform</strong>, 28 septembrie 2026. <a href="https://about.fb.com/news/2026/09/launching-meta-enterprise-platform/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/09/launching-meta-enterprise-platform/</a></li>
        <li id="fn-2">Meta, <strong>Introducing Muse: The World’s First Personal AI Agent Built for Everyone</strong>, 8 septembrie 2026. <a href="https://about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/09/introducing-muse-personal-ai-agent/</a></li>
        <li id="fn-3">Meta, <strong>The Future Is for Everyone: Muse for Small Business</strong>, 29 septembrie 2026. <a href="https://about.fb.com/news/2026/09/introducing-muse-small-business/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/09/introducing-muse-small-business/</a></li>
        <li id="fn-4">Meta, <strong>Be There for Every Customer With Meta Business Agent</strong>, 3 iunie 2026. <a href="https://about.fb.com/news/2026/06/meta-business-agent/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/06/meta-business-agent/</a></li>
        <li id="fn-5">Cloudflare, <strong>Block AI Bots</strong>, documentație actualizată la 1 iulie 2026. <a href="https://developers.cloudflare.com/bots/additional-configurations/block-ai-bots/" target="_blank" rel="noopener noreferrer">developers.cloudflare.com/bots/additional-configurations/block-ai-bots/</a></li>
        <li id="fn-6">Cloudflare, <strong>Have it both ways: stay discoverable in search while disallowing AI training</strong>, 15 septembrie 2026. <a href="https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/" target="_blank" rel="noopener noreferrer">blog.cloudflare.com/accountable-mixed-use-ai-crawlers/</a></li>
        <li id="fn-7">Anthropic, <strong>Claude Marketplace: one place to discover plugins, agents, and services from our partners</strong>, 23 septembrie 2026. <a href="https://claude.com/blog/claude-marketplace" target="_blank" rel="noopener noreferrer">claude.com/blog/claude-marketplace</a></li>
        <li id="fn-8">OpenAI, <strong>Powering Product Discovery in ChatGPT</strong>, 24 martie 2026 (pagina blochează accesul automat; conținutul a fost confirmat la 30 septembrie 2026 prin indexul de căutare și prin relatări de presă din ziua anunțului). <a href="https://openai.com/index/powering-product-discovery-in-chatgpt/" target="_blank" rel="noopener noreferrer">openai.com/index/powering-product-discovery-in-chatgpt/</a></li>
        <li id="fn-9">OpenAI Help Center, <strong>Using shopping research in ChatGPT</strong>, consultat prin indexul de căutare la 30 septembrie 2026 (pagina blochează accesul automat). <a href="https://help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt" target="_blank" rel="noopener noreferrer">help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Produsele agentice, conectorii, protocoalele de commerce și politicile de acces pentru crawlere se schimbă rapid. Disponibilitatea regională, lista integrărilor și angajamentele operatorilor pot fi diferite la data lecturii. Afirmațiile despre produse au fost verificate la 30 septembrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 30 septembrie 2026.</em></p>
`;
