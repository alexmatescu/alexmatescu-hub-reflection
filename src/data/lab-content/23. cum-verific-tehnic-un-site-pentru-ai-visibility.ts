import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const cumVerificTehnicUnSiteMeta: LabArticleMeta = {
  title:
    "Cum verific tehnic un site pentru AI Visibility? Protocolul minim folosit în AI Visibility Lab",
  seoTitle: "Cum verific tehnic un site pentru AI Visibility?",
  description:
    "Ce verifică protocolul tehnic AVL-203 înainte de orice măsurare a vizibilității în AI, de ce dovada se separă de interpretare, cum devin observațiile diagnostic după grila AVL-204 și ce primește clientul. Cu exemple reale din prima rulare T0 pe delamatescu.ro: 6 pagini, 56 de cereri, 12 crawlere, 109 constatări.",
  canonical:
    "https://delamatescu.ro/lab/articole/cum-verific-tehnic-un-site-pentru-ai-visibility",
  category: "Technical Visibility",
  articleType: "Ghid / Analiză metodologică",
  datePublished: "2026-10-28T14:23:00+02:00",
  dateModified: "2026-10-28",
  lastReviewed: "2026-10-28",
  about: [
    { name: "AI Visibility" },
    { name: "AVL-203" },
    { name: "AVL-204" },
    { name: "robots.txt" },
    { name: "User-Agent Response Parity" },
    { name: "delamatescu.ro" },
  ],
  keywords: [
    "verificare tehnică",
    "AI Visibility",
    "GEO",
    "AEO",
    "robots.txt",
    "sitemap",
    "canonical",
    "User-Agent Response Parity",
    "crawlere AI",
    "OAI-SearchBot",
    "Claude-SearchBot",
    "PerplexityBot",
    "AVL-203",
    "AVL-204",
    "T0",
  ],
  citations: [
    {
      name: "AI Visibility Lab — AVL-203, Protocolul minim de verificare tehnică a unui site pentru AI Visibility",
      url: "https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica",
    },
    {
      name: "AI Visibility Lab — AVL-204, Grila de interpretare a verificării tehnice",
      url: "https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica",
    },
    {
      name: "AI Visibility Lab — CS-002, Verificarea AVL-203 a delamatescu.ro, punctul T0",
      url: "https://delamatescu.ro/lab/studii-de-caz/verificare-tehnica-delamatescu-ro",
    },
    {
      name: "AI Visibility Lab — AVL203-delamatescu-ro, T0 Technical Evidence Package v1.0",
      url: "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-avl203-delamatescu-ro-t0-v1.0",
    },
    {
      name: "IETF RFC 9309 — Robots Exclusion Protocol",
      url: "https://www.rfc-editor.org/rfc/rfc9309",
    },
    {
      name: "IETF RFC 9110 — HTTP Semantics",
      url: "https://www.rfc-editor.org/rfc/rfc9110",
    },
    {
      name: "Google Search Central — Introduction to robots.txt",
      url: "https://developers.google.com/search/docs/crawling-indexing/robots/intro",
    },
    {
      name: "Google Search Central — What is canonicalization",
      url: "https://developers.google.com/search/docs/crawling-indexing/canonicalization",
    },
    {
      name: "Google Search Central — AI features and your website",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
    },
    {
      name: "OpenAI — Overview of OpenAI Crawlers",
      url: "https://developers.openai.com/api/docs/bots",
    },
  ],
  faq: [],
};

const RELEASE_URL =
  "https://github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-avl203-delamatescu-ro-t0-v1.0";
const CS = "/lab/studii-de-caz/verificare-tehnica-delamatescu-ro";

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const cumVerificTehnicUnSiteHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-28T14:23:00+02:00">28 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-28">28 octombrie 2026</time></p>

      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#care-sunt-cele-7-idei-principale-ale-protocolului">Care sunt cele 7 idei principale ale protocolului?</a></li>
          <li><a href="#de-ce-este-necesara-o-verificare-tehnica-inainte-sa-masuram-ai-visibility">De ce este necesară o verificare tehnică înainte să măsurăm AI Visibility?</a></li>
          <li><a href="#cum-separa-ai-visibility-lab-dovada-de-interpretare">Cum separă AI Visibility Lab dovada de interpretare?</a></li>
          <li><a href="#ce-verifica-protocolul-despre-accesibilitatea-si-identitatea-tehnica-a-unei-pagini">Ce verifică protocolul despre accesibilitatea și identitatea tehnică a unei pagini?</a></li>
          <li><a href="#cum-verificam-daca-motoarele-de-cautare-si-sistemele-ai-pot-descoperi-si-procesa-continutul">Cum verificăm dacă motoarele de căutare și sistemele AI pot descoperi și procesa conținutul?</a></li>
          <li><a href="#ce-inseamna-user-agent-response-parity-si-de-ce-este-relevanta-pentru-ai">Ce înseamnă User-Agent Response Parity și de ce este relevantă pentru AI?</a></li>
          <li><a href="#de-ce-sunt-pastrate-html-ul-brut-headerele-si-hash-urile">De ce sunt păstrate HTML-ul brut, headerele și hash-urile?</a></li>
          <li><a href="#cum-devin-observatiile-diagnostic">Cum devin observațiile diagnostic?</a></li>
          <li><a href="#ce-primeste-clientul">Ce primește clientul?</a></li>
          <li><a href="#cum-ajuta-repetarea-protocolului-la-masurarea-geo-aeo-in-timp">Cum ajută repetarea protocolului la măsurarea GEO/AEO în timp?</a></li>
          <li><a href="#in-ce-stadiu-de-maturitate-este-protocolul">În ce stadiu de maturitate este protocolul?</a></li>
          <li><a href="#poate-acest-protocol-demonstra-ca-un-site-va-fi-citat-mentionat-sau-recomandat-de-ai">Poate acest protocol demonstra că un site va fi citat, menționat sau recomandat de AI?</a></li>
          <li><a href="#care-este-rolul-instrumentului-in-metodologia-ai-visibility-lab">Care este rolul instrumentului în metodologia AI Visibility Lab?</a></li>
          <li><a href="#ce-incearca-in-final-sa-masoare-acest-protocol">Ce încearcă, în final, să măsoare acest protocol?</a></li>
          <li><a href="#surse-si-metodologie">Surse și metodologie</a>
            <ol>
              <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
            </ol>
          </li>
          <li><a href="#istoricul-versiunilor">Istoricul versiunilor</a></li>
        </ol>
      </nav>

      <p>Un site nu poate fi evaluat corect pentru vizibilitate în motoare de căutare și sisteme AI doar verificând dacă apare în ChatGPT, Claude, Perplexity, Google sau Bing. Înainte de citare, menționare sau recomandare există un strat tehnic care trebuie măsurat separat: dacă site-ul poate fi accesat, ce livrează serverul, ce reguli impune crawlerelor, cum își declară URL-urile și dacă diferite sisteme primesc același conținut.</p>
      <p>În AI Visibility Lab folosesc un protocol tehnic minim și repetabil pentru a documenta această stare înainte de interpretarea rezultatelor: <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203</a>.<sup><a href="#fn-1">1</a></sup> Observațiile lui devin diagnostic după o grilă publică separată, <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204</a>.<sup><a href="#fn-2">2</a></sup> Amândouă sunt la început: drafturi 0.x, construite din primele rulări pe propriul site și revizuite pe măsură ce apar situații pe care nu le-au prevăzut (secțiunea „În ce stadiu de maturitate este protocolul?”).</p>
      <p>Protocolul nu este un audit SEO complet și nici nu pretinde că poate prezice dacă un sistem AI va cita sau recomanda o sursă.</p>
      <p>Rolul lui este mai precis: <strong>să creeze o evidență tehnică reproductibilă asupra condițiilor în care un site poate fi descoperit, accesat și procesat de sisteme automate.</strong></p>
      <p>Exemplele din acest articol sunt reale. Provin din prima rulare <code>T0</code> a protocolului, pe site-ul meu, delamatescu.ro, la 26 octombrie 2026: 6 pagini, 56 de cereri, 12 crawlere declarate. Rularea e documentată integral în <a href="${CS}">studiul de caz CS-002</a>, iar dovezile brute sunt publicate, cu checksum-uri.<sup><a href="#fn-3">3</a></sup></p>

      <h2 id="care-sunt-cele-7-idei-principale-ale-protocolului">Care sunt cele 7 idei principale ale protocolului?</h2>
      <p><strong>Protocolul pornește de la șapte principii: măsurăm accesibilitatea înaintea vizibilității, separăm dovada de interpretare, verificăm regulile de crawling și indexare, documentăm identitatea URL-urilor, comparăm răspunsurile oferite crawlerelor, păstrăm artefactele brute și repetăm aceleași verificări între T0 și Fn.</strong></p>
      <ol>
        <li><strong>Accesibilitatea tehnică precede vizibilitatea.</strong> Mai întâi verificăm dacă resursa poate fi obținută și ce răspuns livrează serverul.</li>
        <li><strong>Dovada trebuie separată de interpretare.</strong> Un <code>200</code>, <code>403</code>, canonical sau <code>robots.txt</code> este o observație, nu o concluzie despre vizibilitatea AI.</li>
        <li><strong>Crawlingul, indexarea, citarea și recomandarea sunt fenomene diferite.</strong> Protocolul evită să le trateze ca sinonime.</li>
        <li><strong>Identitatea tehnică a documentului trebuie să fie observabilă.</strong> Redirecturile, canonical-ul, sitemap-ul și directivele robots oferă context despre ce resursă este expusă sistemelor automate.</li>
        <li><strong>Răspunsurile pentru crawlere pot fi comparate.</strong> Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot și PerplexityBot pot fi folosite în teste de User-Agent Response Parity.</li>
        <li><strong>Evidența brută trebuie păstrată.</strong> Headers, HTML, <code>robots.txt</code>, sitemap-uri, răspunsuri și hash-uri trebuie să poată fi verificate ulterior.</li>
        <li><strong>Metoda trebuie repetată identic.</strong> Valoarea principală apare când aceeași verificare este executată la baseline T0 și apoi la F1, F2, F3 sau Fn.</li>
      </ol>

      <h2 id="de-ce-este-necesara-o-verificare-tehnica-inainte-sa-masuram-ai-visibility">De ce este necesară o verificare tehnică înainte să măsurăm AI Visibility?</h2>
      <p><strong>Verificarea tehnică este necesară pentru că o schimbare observată într-un răspuns AI nu poate fi interpretată riguros dacă nu știm în ce condiții tehnice era disponibilă sursa în momentul măsurării.</strong></p>
      <p>Dacă un brand nu apare într-un răspuns ChatGPT, Claude sau Perplexity, există multe explicații posibile.</p>
      <p>Sistemul poate să nu cunoască sursa. Sursa poate să nu fi fost descoperită. Crawlerul relevant poate fi blocat. Pagina poate declara <code>noindex</code>. URL-ul poate redirecționa. Canonical-ul poate indica o altă resursă. Serverul poate răspunde diferit crawlerelor. Sau toate aceste condiții tehnice pot fi corecte, iar sistemul să aleagă pur și simplu alte surse.</p>
      <p>De aceea, AI Visibility trebuie tratată ca un lanț de condiții și observații, nu ca o singură variabilă.</p>
      <p>Pentru GEO și AEO această distincție este esențială. Optimizarea pentru motoare generative sau motoare de răspuns nu începe cu întrebarea „Cum fac să mă citeze ChatGPT?”, ci cu una anterioară: <strong>Ce informație despre această entitate este disponibilă sistemelor automate, în ce formă și prin ce mecanisme poate fi descoperită?</strong></p>

      <h2 id="cum-separa-ai-visibility-lab-dovada-de-interpretare">Cum separă AI Visibility Lab dovada de interpretare?</h2>
      <p><strong>AI Visibility Lab folosește un lanț explicit în care captura dovezii, artefactul brut, indexarea dovezii, observația, măsurarea și interpretarea sunt tratate ca etape diferite.</strong></p>
      <pre><code>Evidence Capture Process
          ↓
Raw Evidence
          ↓
Indexed Evidence
          ↓
Observation
          ↓
Measurement
          ↓
Interpretation</code></pre>
      <p>Un exemplu din rularea T0. <em>Evidence Capture Process</em>: o cerere <code>curl</code> către <code>https://delamatescu.ro/robots.txt</code>. <em>Raw Evidence</em>: fișierul salvat, <code>robots/delamatescu.ro.try1.body</code>, cu headerele și metricile cererii. <em>Indexed Evidence</em>: același fișier, înregistrat cu identificator, URL, oră și hash SHA-256 în indexul de dovezi al rulării.<sup><a href="#fn-4">4</a></sup></p>
      <p>Din el se extrage o observație:</p>
      <pre><code>26  User-agent: OAI-SearchBot
27  Allow: /</code></pre>
      <p>După aplicarea regulilor RFC 9309 pentru fiecare pereche pagină–crawler, observația devine măsurare:</p>
      <pre><code>P01 https://delamatescu.ro/ · OAI-SearchBot · ALLOW · metoda PARSER · regula câștigătoare: linia 27</code></pre>
      <p>Abia după aceea apare interpretarea: pentru această pagină și acest crawler, regulile din robots.txt corespund politicii de acces declarate.</p>
      <p>Această ordine previne salturile logice. Un <code>403</code> nu înseamnă automat că site-ul este invizibil în AI. Un <code>200</code> nu înseamnă că pagina este indexată. Un sitemap nu demonstrează că URL-urile sale au fost procesate. Un canonical declarat nu demonstrează că un motor de căutare a selectat acel canonical. Iar prezența datelor structurate nu demonstrează că un sistem AI a înțeles sau folosit entitatea descrisă.</p>
      <p>Pentru GEO/AEO, valoarea acestei separări este că permite diferențierea între:</p>
      <pre><code>availability
discovery
crawlability
indexability
retrieval
citation
mention
recommendation</code></pre>
      <p>Acestea sunt fenomene legate între ele, dar nu identice.</p>

      <h2 id="ce-verifica-protocolul-despre-accesibilitatea-si-identitatea-tehnica-a-unei-pagini">Ce verifică protocolul despre accesibilitatea și identitatea tehnică a unei pagini?</h2>
      <p><strong>Protocolul verifică dacă pagina răspunde, unde ajunge requestul după redirecturi, ce tip de conținut livrează serverul și dacă variantele HTTP/HTTPS și www/non-www converg spre aceeași identitate tehnică.</strong></p>
      <p>Comenzile exacte și cerințele sunt în <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 §5</a>. Pentru pagina principală a delamatescu.ro, metricile cererii arată așa:</p>
      <pre><code>http_code=200
url_effective=https://delamatescu.ro/
num_redirects=0
content_type=text/html; charset=utf-8
curl_exit=0</code></pre>
      <p>Toate cele 6 pagini din plan au răspuns la fel: <code>200</code>, fără redirecturi. Asta arată că cererea a reușit (RFC 9110 §15.3.1), nu că pagina e indexată.<sup><a href="#fn-6">6</a></sup></p>
      <p>Variantele adresei au convers toate spre <code>https://delamatescu.ro/</code>, dar nu în același fel: <code>http://delamatescu.ro/</code> cu <code>301</code> (redirecționare permanentă, RFC 9110 §15.4.2), iar variantele cu <code>www</code> cu <code>302</code> (temporară, RFC 9110 §15.4.3).<sup><a href="#fn-6">6</a></sup> Destinația e aceeași, deci identitatea tehnică e convergentă. Tipul redirectului e o observație separată, pe care o urmăresc la remăsurare.</p>
      <p>Dacă aceeași informație este expusă prin mai multe URL-uri contradictorii, redirecturi inconsistente sau canonical-uri diferite, apare o problemă de identitate tehnică înainte să apară problema de interpretare semantică.</p>

      <h2 id="cum-verificam-daca-motoarele-de-cautare-si-sistemele-ai-pot-descoperi-si-procesa-continutul">Cum verificăm dacă motoarele de căutare și sistemele AI pot descoperi și procesa conținutul?</h2>
      <p><strong>Protocolul verifică <code>robots.txt</code>, sitemap-ul, directivele de indexare, canonical-ul, datele structurate de bază și prezența textelor importante în HTML-ul livrat de server, pentru a documenta semnalele machine-readable expuse de site.</strong></p>
      <p>Detaliile sunt în <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 §6–§8</a>. Pe scurt, la delamatescu.ro:</p>
      <ul>
        <li><strong>robots.txt</strong> are 24 de grupuri <code>User-agent</code> și o declarație <code>Sitemap</code>. Aplicate după RFC 9309, regulile permit accesul tuturor celor 12 crawlere declarate, pe toate paginile. Un <code>grep</code> nu ajunge: RFC 9309 cere combinarea grupurilor care corespund aceluiași crawler și alegerea celei mai specifice reguli (§2.2.1, §2.2.2).<sup><a href="#fn-5">5</a></sup></li>
        <li><strong>Sitemap-ul</strong> e declarat în robots.txt și răspunde <code>200</code>, cu un document XML de 200 de adrese.</li>
        <li><strong>Semnalele paginilor</strong>: fiecare pagină are <code>&lt;title&gt;</code>, canonical spre propria adresă și <code>lang="ro"</code>, fără <code>noindex</code>; toate cele 10 blocuri JSON-LD au sintaxă JSON validă.</li>
        <li><strong>Textele-cheie</strong> declarate în plan (de exemplu „audit AI Visibility” pe pagina serviciului) apar în corpul HTML-ului brut, nu doar în scripturi.</li>
      </ul>
      <p>Trebuie însă păstrată o distincție importantă: <strong><code>robots.txt</code> controlează crawlingul, nu demonstrează indexarea.</strong> Google spune explicit că robots.txt nu e un mecanism prin care o pagină e ținută în afara Google și că o pagină blocată poate fi totuși indexată dacă alte site-uri trimit la ea.<sup><a href="#fn-7">7</a></sup> RFC 9309 precizează că regulile nu sunt o formă de autorizare a accesului (§1).<sup><a href="#fn-5">5</a></sup> Un crawler permis nu înseamnă automat că pagina a fost accesată. Un crawler care a accesat pagina nu înseamnă automat că pagina a fost indexată. Iar indexarea nu garantează citarea într-un răspuns generativ.</p>
      <p>Canonical-ul indică URL-ul preferat declarat de site, dar Google îl tratează ca indiciu, nu ca regulă, și poate alege alt canonical.<sup><a href="#fn-8">8</a></sup> Pentru AI Overviews și AI Mode, Google spune că nu e nevoie de fișiere noi, fișiere text pentru AI sau markup special: pagina trebuie să fie indexată și eligibilă să apară în Search cu snippet.<sup><a href="#fn-9">9</a></sup></p>
      <p>Pentru GEO/AEO, aceste elemente contează deoarece contribuie la stratul machine-readable al site-ului. Dar protocolul păstrează aceeași limită: <strong>semnalul declarat nu trebuie confundat cu modul în care un sistem extern îl interpretează sau îl folosește.</strong></p>

      <h2 id="ce-inseamna-user-agent-response-parity-si-de-ce-este-relevanta-pentru-ai">Ce înseamnă User-Agent Response Parity și de ce este relevantă pentru AI?</h2>
      <p><strong>User-Agent Response Parity verifică dacă același server livrează răspunsuri diferite atunci când requestul se identifică drept client generic, Googlebot, bingbot sau crawler de search asociat unui sistem AI.</strong></p>
      <p>Același URL e cerut cu clientul de referință (de două ori, cu aceiași parametri) și cu fiecare User-Agent declarat. Se compară statusul, URL-ul final, headerele, dimensiunea și hash-ul conținutului. Regulile complete sunt în <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 §9</a>.</p>
      <p>La delamatescu.ro, statusul, URL-ul final și headerele au fost identice pentru toți cei 5 crawleri de căutare, pe toate paginile. Conținutul însă a diferit chiar între cele două capturi ale clientului de referință, făcute la câteva secunde distanță:</p>
      <pre><code>referință 1   10.109 octeți   sha256 fa04f81aa515368e…
referință 2   10.119 octeți   sha256 7343888b289daaea…</code></pre>
      <p>Când pagina se schimbă singură de la o cerere la alta, o diferență față de un crawler nu poate fi atribuită User-Agent-ului. Comparația de conținut rămâne „nu poate fi stabilit”.</p>
      <p>Testul demonstrează doar cum a răspuns serverul unui request care s-a identificat drept un anumit crawler. User-Agent-ul poate fi falsificat, iar furnizorii pot folosi și verificarea adreselor IP; OpenAI, de exemplu, publică intervalele de IP ale crawlerelor sale.<sup><a href="#fn-10">10</a></sup> Cererile mele au plecat de pe IP-ul meu, nu din infrastructura lor.</p>
      <p>Din acest motiv, numele testului este intenționat precis: <strong>User-Agent Response Parity</strong>, nu <em>crawler accessibility proof</em>.</p>
      <p>Pentru GEO/AEO, testul este util deoarece poate identifica bariere tehnice evidente care merită investigate înainte de a formula ipoteze despre vizibilitatea efectivă.</p>

      <h2 id="de-ce-sunt-pastrate-html-ul-brut-headerele-si-hash-urile">De ce sunt păstrate HTML-ul brut, headerele și hash-urile?</h2>
      <p><strong>Artefactele brute sunt păstrate pentru ca orice observație sau concluzie ulterioară să poată fi urmărită înapoi până la dovada originală.</strong></p>
      <p>Dacă un raport afirmă că OAI-SearchBot are acces la pagina principală, ar trebui să existe posibilitatea de a inspecta:</p>
      <pre><code>request context
response headers
response body
timestamp
URL
hash</code></pre>
      <p>Fără aceste artefacte, rămâne doar afirmația celui care a făcut analiza. În AI Visibility Lab încerc să păstrez traseul:</p>
      <pre><code>claim
↑
measurement
↑
observation
↑
indexed evidence
↑
raw evidence</code></pre>
      <p>Hash-ul SHA-256 ajută la acest proces. El funcționează ca o amprentă digitală a fișierului: dacă fișierul se modifică, hash-ul se modifică, cu probabilitate covârșitoare. Rularea T0 are 234 de artefacte cu checksum, publicate ca <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">pachet de dovezi pe GitHub</a>.<sup><a href="#fn-4">4</a></sup> În pachetul public am înlocuit un singur lucru, numele mașinii din fișierul care descrie mediul rulării. Verificarea o arată imediat:</p>
      <pre><code>integritate: PARTIAL {'OK': 233, 'MODIFICAT': 1}</code></pre>
      <p>Hash-urile sunt utile și în User-Agent Response Parity. Dacă două body-uri au exact același SHA-256, ele pot fi considerate, în practică, identice la nivel de bytes. Dacă hash-urile diferă, știm că există o diferență, dar nu știm încă dacă este relevantă.</p>
      <p>Ea poate proveni din timestamp-uri, identificatori dinamici, cookies, teste A/B, personalizare, token-uri generate, protecții anti-bot sau conținut diferit. La delamatescu.ro am găsit două surse: un token semnat, injectat de platforma pe care e construit site-ul, cu dată de expirare proprie la fiecare cerere, și marcajele de timp ale randării pe server. Cu ele mascate, toate cele 42 de corpuri comparate au devenit identice. Grila nu permite însă mascarea, deci rezultatul oficial a rămas „nu poate fi stabilit”, iar mascarea e doar o observație suplimentară.<sup><a href="#fn-3">3</a></sup></p>
      <p>Prin urmare: <strong>hash diferit = diferență detectată</strong>, nu <strong>hash diferit = problemă de AI Visibility</strong>.</p>

      <h2 id="cum-devin-observatiile-diagnostic">Cum devin observațiile diagnostic?</h2>
      <p><strong>Observațiile devin diagnostic numai prin regulile publice ale grilei AVL-204: fiecare regulă are o condiție, o zonă și o stare, iar aceleași reguli se aplică oricărei entități evaluate.</strong></p>
      <p>Grila grupează verificările în șase zone (Z1 răspunsul site-ului și adresa oficială, Z2 regulile pentru crawlere, Z3 sitemap-ul, Z4 semnalele paginilor, Z5 conținutul livrat în HTML, Z6 răspunsurile pentru crawlere) și folosește patru stări: „problemă confirmată”, „problemă posibilă”, „nu poate fi stabilit” și „nicio problemă observată”. Regulile și criteriile de prioritizare sunt în <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204</a>.<sup><a href="#fn-2">2</a></sup></p>
      <p>Pentru delamatescu.ro, grila 0.3.0 a produs 109 constatări:</p>
      <table>
        <thead><tr><th>Zonă</th><th>Constatări</th><th>Stare</th></tr></thead>
        <tbody>
          <tr><td>Z1</td><td>6</td><td>nicio problemă observată</td></tr>
          <tr><td>Z2</td><td>54 (9 crawlere × 6 pagini)</td><td>nicio problemă observată</td></tr>
          <tr><td>Z3</td><td>1</td><td>nicio problemă observată</td></tr>
          <tr><td>Z4</td><td>6</td><td>nicio problemă observată</td></tr>
          <tr><td>Z5</td><td>6</td><td>nicio problemă observată</td></tr>
          <tr><td>Z6</td><td>36</td><td>nu poate fi stabilit (conținutul); nicio problemă observată (status, URL, headere)</td></tr>
        </tbody>
      </table>
      <p>Diagnosticul a produs o singură recomandare, de tip „verificare suplimentară”: comparația de conținut de la Z6 se reia la o rulare nouă. Grila nu îi dă clasă de prioritate, pentru că o constatare „nu poate fi stabilit” nu e o problemă.</p>
      <p>Separarea grilei de protocol are un motiv practic. Dacă regula de interpretare e scrisă înainte de rulare și e publică, nu o pot ajusta după rezultat, nici pentru site-ul meu, nici pentru al unui client. „Nicio problemă observată” descrie condițiile testate, nu certifică site-ul.</p>

      <h2 id="ce-primeste-clientul">Ce primește clientul?</h2>
      <p><strong>Clientul primește un raport pe zone, de trei pagini: o întrebare pe înțelesul lui pentru fiecare zonă, starea și explicația ei, recomandările cu prioritate și limitele verificării. Nu primește anexa tehnică.</strong></p>
      <p>Raportul tehnic al rulării T0 are 109 constatări, identificatorii regulilor și trimiteri la dovezi. E necesar pentru trasabilitate, dar clientul nu îl poate folosi. Raportul pentru client se generează din același diagnostic, cu formulări fixe, aceleași pentru orice client, și trece prin aceeași verificare automată a afirmațiilor excluse de grilă (de exemplu „pagina e indexată” sau „site-ul face cloaking”).</p>
      <p>Exemplul pentru delamatescu.ro e public: <a href="/files/lab/verificare-tehnica-delamatescu-ro/raport-client-exemplu-delamatescu-ro-T0.pdf">raportul pentru client, T0 (PDF)</a>. Concluzia lui, pentru un site fără probleme tehnice, e una pe care o consider utilă tocmai pentru că e modestă: în condițiile testate nu există blocaje de acces, deci dacă site-ul are probleme de vizibilitate, cauza trebuie căutată în celelalte etape ale <a href="/lab/audit-ai-visibility">auditului AI Visibility</a>: identitatea entității, conținutul și sursele.</p>

      <h2 id="cum-ajuta-repetarea-protocolului-la-masurarea-geo-aeo-in-timp">Cum ajută repetarea protocolului la măsurarea GEO/AEO în timp?</h2>
      <p><strong>Repetarea acelorași verificări la T0 și Fn permite documentarea schimbărilor tehnice ale site-ului și analizarea lor în paralel cu schimbările observate în menționări, citări și recomandări AI.</strong></p>
      <p>La baseline <strong>T0</strong> capturăm starea inițială. Ulterior, la <strong>F1, F2, F3…Fn</strong>, repetăm aceeași procedură, cu aceleași pagini și aceleași texte-cheie, declarate dinainte într-un plan înghețat.</p>
      <p>Putem observa dacă între două momente s-a schimbat statusul HTTP sau un redirect, a apărut sau a dispărut o regulă în <code>robots.txt</code>, sitemap-ul ori canonical-ul s-au modificat, a apărut JSON-LD, directivele de indexare sunt diferite, un User-Agent primește alt răspuns sau conținutul brut al paginii s-a modificat. Pentru delamatescu.ro, primele lucruri pe care le urmăresc la F1 sunt tipul redirectului <code>www</code> și variabilitatea de la Z6.</p>
      <p>Un plan înghețat ține de versiunea protocolului pentru care a fost înghețat. Planul T0 al delamatescu.ro a fost înghețat sub AVL-203 0.5.0, iar instrumentul actual îl refuză. Pentru F1 se îngheață un plan nou, cu aceleași pagini, iar schimbarea de versiune se declară la comparație.</p>
      <p>Aceste observații pot fi puse alături de măsurătorile efective de AI Visibility:</p>
      <pre><code>citation
mention
recommendation
entity resolution
source selection
answer composition</code></pre>
      <p>Aici apare valoarea reală a protocolului. Dacă la T0 o entitate nu este identificată, iar la F3 începe să fie menționată corect, putem analiza în paralel ce s-a schimbat în ecosistemul informațional.</p>
      <p>Nu înseamnă că orice schimbare tehnică a cauzat schimbarea răspunsului AI. Dar avem mai multă informație pentru a formula și testa ipoteze.</p>
      <p>În loc să spunem „am optimizat pagina și ChatGPT a început să mă citeze”, putem ajunge la o afirmație mai riguroasă: „între T0 și F3 au fost documentate aceste schimbări; în aceeași perioadă a apărut acest comportament în sistemele măsurate; datele permit sau nu permit atribuirea unei relații între ele”.</p>
      <p>Această diferență este centrală pentru modul în care vreau să tratez GEO și AEO în AI Visibility Lab.</p>

      <h2 id="in-ce-stadiu-de-maturitate-este-protocolul">În ce stadiu de maturitate este protocolul?</h2>
      <p><strong>Protocolul și grila sunt într-un stadiu incipient: drafturi 0.x, construite din trei rulări de test și o rulare T0, toate pe delamatescu.ro. Vor fi revizuite pe măsură ce apar situații pe care nu le-au prevăzut, după o procedură scrisă dinainte.</strong></p>
      <p>Nu e o limită ascunsă, ci una declarată. Versiunile 0.x și lista deciziilor deschise înainte de 1.0.0 sunt publice în <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203</a> și <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204</a>. Un caz pe care regulile nu îl acoperă nu se interpretează din mers: nu poate primi „problemă confirmată”, e declarat ca abatere în raport și devine propunere pentru versiunea următoare.</p>
      <p>Secvența, de la draft la pașii care urmează:</p>
      <pre><code>1. Draft
   AVL-203 0.1.0 (1 oct.), AVL-204 0.1.0 (22 oct.)
        ↓
2. Rulări TEST pe delamatescu.ro (2 și 25 oct.)
   revizii: AVL-203 0.2.0 și 0.5.0, AVL-204 0.2.0
        ↓
3. Rularea T0 pe delamatescu.ro (26 oct.)
   decizii: AVL-203 0.6.0, AVL-204 0.3.0
        ↓
4. Publicare (28 oct.)
   CS-002, pachetul de dovezi, raportul-exemplu
        ↓
──── de aici, pașii prevăzuți de protocol ────
5. Rulări pe proiecte și clienți
   (fișa entității completată de reprezentant)
        ↓
6. Situație neacoperită de reguli
   nu devine „problemă confirmată”;
   se declară ca abatere în raport
        ↓
7. Propunere de modificare
   versiune nouă, cu rând în istoric
        ↓
8. Remăsurare F1 … Fn, cu plan nou înghețat
   versiunile diferite se declară la comparație
        ↓
   pașii 5–8 se repetă
        ↓
9. Activare 1.0.0, după închiderea
   deciziilor deschise (AVL-203 §19, AVL-204 §15)</code></pre>
      <p>Pașii 1–4 s-au întâmplat. Pașii 5–9 sunt cei prevăzuți de reguli, nu un calendar: protocolul se îmbunătățește când apare un caz pe care nu l-a prevăzut, nu la o dată fixă. Rapoartele clienților nu se publică; ce se publică e modificarea regulilor, cu motivul ei, în istoricul versiunilor. Regulile citate sunt <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL204-REQ-003 și AVL204-REQ-012</a> (cazul neacoperit și abaterea declarată), <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL204-REQ-013 și AVL204-REQ-014</a> (versiunea nouă și comparația între versiuni).</p>
      <p>Declarația privește protocolul tehnic și grila lui. Cadrul metodologic (<a href="/lab/metodologie">AVL-202</a>) și standardul de dovezi (<a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200</a>) sunt documente active. Pentru un client, consecința practică e simplă: regulile după care e evaluat site-ul lui sunt publice și versionate, iar raportul spune cu ce versiune a fost produs.</p>

      <h2 id="poate-acest-protocol-demonstra-ca-un-site-va-fi-citat-mentionat-sau-recomandat-de-ai">Poate acest protocol demonstra că un site va fi citat, menționat sau recomandat de AI?</h2>
      <p><strong>Nu; protocolul tehnic poate documenta condițiile tehnice de acces, descoperire și machine-readability, dar nu poate demonstra singur indexarea, retrieval-ul, citarea, menționarea sau recomandarea într-un sistem AI.</strong></p>
      <p>Aceasta este limita metodologică cea mai importantă. Protocolul nu poate demonstra singur:</p>
      <pre><code>Google indexed the page
Bing indexed the page
ChatGPT knows the page
Claude knows the page
Perplexity indexed the page
an AI system understood the entity
the page will be retrieved
the page will be cited
the brand will be mentioned
the entity will be recommended</code></pre>
      <p>Aceste fenomene trebuie măsurate separat. Tocmai de aceea AI Visibility Lab nu tratează „optimizarea pentru AI” ca pe o colecție de trucuri tehnice.</p>
      <p>Putem distinge analitic mai multe straturi:</p>
      <pre><code>technical accessibility
↓
discovery
↓
machine readability
↓
entity understanding
↓
retrieval
↓
source selection
↓
citation / mention
↓
recommendation</code></pre>
      <p>Aceasta este o <strong>schemă conceptuală de analiză</strong>, nu o descriere verificată a unui pipeline comun tuturor sistemelor. Nu toate sistemele urmează aceleași etape, iar funcționarea lor internă nu este complet observabilă. Separarea straturilor ne ajută însă să evităm afirmațiile mai puternice decât dovezile de care dispunem. Verificarea tehnică acoperă primele trei straturi; restul se măsoară cu alte metode, de exemplu în <a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul Tabula Rasa</a> pentru rezolvarea entității.</p>
      <p>Acesta este și motivul pentru care protocolul tehnic rămâne intenționat restrâns. Nu încerc să includ în el fiecare posibil audit de DNS, TLS, Core Web Vitals, JavaScript rendering, internal linking, Schema.org validation, server logs, WAF, ARIA, cache sau performanță. Acestea pot deveni relevante într-o investigație particulară, ca extensii declarate, dar protocolul de bază trebuie să rămână suficient de mic încât să poată fi executat consecvent la fiecare măsurare.</p>

      <h2 id="care-este-rolul-instrumentului-in-metodologia-ai-visibility-lab">Care este rolul instrumentului în metodologia AI Visibility Lab?</h2>
      <p><strong>Instrumentul automatizează capturarea repetabilă a dovezilor tehnice și aplicarea grilei, dar metodologia stabilește ce se măsoară, de ce se măsoară și ce concluzii pot fi trase.</strong></p>
      <p>Instrumentul laboratorului e o linie de comandă cu câte un pas pentru fiecare etapă: planul se validează și se îngheață, se capturează, se verifică integritatea, se extrag observațiile, se aplică grila și se scriu rapoartele. Ieșirea fiecărei comenzi, la rularea T0, e în <a href="${CS}">studiul de caz CS-002</a>. Pasul de diagnostic, de exemplu, afișează doar starea zonelor:</p>
      <pre><code>Z1: nicio problemă observată
...
Z6: nu poate fi stabilit
109 constatări · 1 recomandări · 0 abateri</code></pre>
      <p>Dar instrumentul nu decide singur semnificația rezultatului. Aplică literal reguli scrise înainte, în AVL-204. Întrebarea „Ce înseamnă acest rezultat pentru experimentul analizat?” aparține unui nivel ulterior.</p>
      <pre><code>Methodology
      ↓
defines measurement
Automation
      ↓
executes measurement
Evidence
      ↓
records result
Analysis
      ↓
evaluates result
Interpretation
      ↓
connects result with research question</code></pre>
      <p>Automatizarea nu înlocuiește metodologia. O face mai repetabilă.</p>

      <h2 id="ce-incearca-in-final-sa-masoare-acest-protocol">Ce încearcă, în final, să măsoare acest protocol?</h2>
      <p><strong>Protocolul încearcă să stabilească ce putea fi observat tehnic despre un site la momentul măsurării, înainte ca rezultatele de AI Visibility să fie interpretate.</strong></p>
      <p>Scopul nu este să strâng cât mai multe comenzi <code>curl</code> și nici să construiesc cel mai sofisticat scanner posibil.</p>
      <p>Întrebarea fundamentală este: <strong>În momentul în care am măsurat comportamentul unui sistem AI, care era starea tehnică observabilă a sursei?</strong></p>
      <p>Dacă această stare este capturată la T0 și apoi din nou la F1, F2 sau Fn, putem construi un istoric. Iar atunci când apar schimbări în entity resolution, menționări, citări, selecția surselor sau recomandări, avem un strat suplimentar de dovezi prin care putem încerca să înțelegem ce s-a întâmplat.</p>
      <p>Nu eliminăm incertitudinea. Dar o documentăm mai bine.</p>
      <p>Pentru mine, aceasta este diferența dintre a aplica câteva „best practices GEO” și a încerca să construiesc o metodă de măsurare a AI Visibility.</p>

      <h2 id="surse-si-metodologie">Surse și metodologie</h2>
      <p>Exemplele provin din rularea <code>AVL203-delamatescu-ro-T0-20261026T085234Z</code>, verificată pe dovezile brute la 28 octombrie 2026. Documentația externă a fost verificată live la aceeași dată.</p>
      <ol class="avl-footnotes">
        <li id="fn-1">AI Visibility Lab, <strong>AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</strong>, v0.6.1, draft pentru revizuire. <a href="/lab/metodologie/protocol-verificare-tehnica">/lab/metodologie/protocol-verificare-tehnica</a></li>
        <li id="fn-2">AI Visibility Lab, <strong>AVL-204 — Grila de interpretare a verificării tehnice</strong>, v0.3.1, draft pentru revizuire. <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">/lab/metodologie/grila-interpretare-verificare-tehnica</a></li>
        <li id="fn-3">AI Visibility Lab, <strong>Poate fi citit tehnic site-ul meu de crawlerele AI? Verificarea AVL-203 a delamatescu.ro, punctul T0</strong>, studiul de caz CS-002. <a href="${CS}">${CS}</a></li>
        <li id="fn-4">AI Visibility Lab, <strong>AVL203-delamatescu-ro — T0 Technical Evidence Package v1.0</strong>, release GitHub. <a href="${RELEASE_URL}" target="_blank" rel="noopener noreferrer">github.com/alexmatescu/alexmatescu-hub-reflection/releases/tag/evidence-avl203-delamatescu-ro-t0-v1.0</a></li>
        <li id="fn-5">IETF, <strong>RFC 9309 — Robots Exclusion Protocol</strong> (§1, §2.2.1, §2.2.2). <a href="https://www.rfc-editor.org/rfc/rfc9309" target="_blank" rel="noopener noreferrer">rfc-editor.org/rfc/rfc9309</a></li>
        <li id="fn-6">IETF, <strong>RFC 9110 — HTTP Semantics</strong> (§15.3.1, §15.4.2, §15.4.3). <a href="https://www.rfc-editor.org/rfc/rfc9110" target="_blank" rel="noopener noreferrer">rfc-editor.org/rfc/rfc9110</a></li>
        <li id="fn-7">Google Search Central, <strong>Introduction to robots.txt</strong>. <a href="https://developers.google.com/search/docs/crawling-indexing/robots/intro" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/crawling-indexing/robots/intro</a></li>
        <li id="fn-8">Google Search Central, <strong>What is canonicalization</strong>. <a href="https://developers.google.com/search/docs/crawling-indexing/canonicalization" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/crawling-indexing/canonicalization</a></li>
        <li id="fn-9">Google Search Central, <strong>AI features and your website</strong>. <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">developers.google.com/search/docs/appearance/ai-features</a></li>
        <li id="fn-10">OpenAI, <strong>Overview of OpenAI Crawlers</strong>. <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">developers.openai.com/api/docs/bots</a></li>
      </ol>
      <h3 id="nota-de-volatilitate">Notă de volatilitate</h3>
      <p>Documentația furnizorilor despre crawlere, rolul fiecărui User-Agent și intervalele de IP se schimbă. Afirmațiile despre Google și OpenAI au fost verificate la 28 octombrie 2026. Exemplele descriu delamatescu.ro la 26 octombrie 2026; site-ul s-a schimbat de atunci, iar starea actuală se măsoară la F1.</p>

      <h2 id="istoricul-versiunilor">Istoricul versiunilor</h2>
      <table>
        <thead><tr><th>Versiune</th><th>Dată</th><th>Modificări</th></tr></thead>
        <tbody>
          <tr><td>1.0</td><td>28 octombrie 2026</td><td>Publicare inițială.</td></tr>
          <tr><td>1.1</td><td>28 octombrie 2026</td><td>Secțiune nouă „În ce stadiu de maturitate este protocolul?”, cu secvența pașilor de la draft la publicare și pașii următori prevăzuți de protocol; o frază despre stadiul protocolului în introducere. Restul textului nu a fost modificat.</td></tr>
        </tbody>
      </table>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 28 octombrie 2026.</em></p>
`;
