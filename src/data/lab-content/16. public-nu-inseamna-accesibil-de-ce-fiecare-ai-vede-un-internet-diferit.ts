import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const publicNuInseamnaAccesibilMeta: LabArticleMeta = {
  title:
    "Public nu mai înseamnă accesibil: de ce fiecare sistem AI vede un internet diferit",
  description:
    "De ce ChatGPT, Claude, Gemini, Grok și alte sisteme AI pot recupera informații diferite din același internet. Explicăm crawling, training, retrieval, acces nativ, conectori și o metodă exploratorie de Source Accessibility Mapping.",
  canonical:
    "https://delamatescu.ro/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit",
  category: "AI Ecosystem",
  articleType: "Analiză",
  datePublished: "2026-10-02T09:07:00+03:00",
  dateModified: "2026-10-02",
  lastReviewed: "2026-10-01",
  about: [
    { name: "Machine accessibility" },
    { name: "Source Accessibility Mapping" },
    { name: "AI crawlers" },
    { name: "AI retrieval" },
    { name: "robots.txt" },
    { name: "Model Context Protocol" },
  ],
  keywords: [
    "AI Visibility",
    "machine accessibility",
    "source accessibility mapping",
    "AI retrieval",
    "AI crawlers",
    "GEO",
    "AEO",
    "robots.txt",
    "ChatGPT Search",
    "Claude Search",
    "Google-Extended",
    "social media și AI",
    "conectori AI",
  ],
  citations: [
    {
      name: "OpenAI — Overview of OpenAI Crawlers",
      url: "https://developers.openai.com/api/docs/bots",
    },
    {
      name: "Anthropic — Does Anthropic crawl data from the web, and how can site owners block the crawler?",
      url: "https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler",
    },
    {
      name: "Google — Google's common crawlers",
      url: "https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers",
    },
    {
      name: "X — About Grok",
      url: "https://help.x.com/en/using-x/about-grok",
    },
    {
      name: "OpenAI — OpenAI and Reddit Partnership",
      url: "https://openai.com/index/openai-and-reddit-partnership/",
    },
    {
      name: "Meta — Making AI Work Harder for Europeans",
      url: "https://about.fb.com/news/2025/04/making-ai-work-harder-for-europeans/",
    },
    {
      name: "IETF — RFC 9309: Robots Exclusion Protocol",
      url: "https://www.rfc-editor.org/rfc/rfc9309.html",
    },
    {
      name: "Cloudflare — Have it both ways: stay discoverable in search while disallowing AI training",
      url: "https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/",
    },
    {
      name: "OpenAI — Introducing apps in ChatGPT and the new Apps SDK",
      url: "https://openai.com/index/introducing-apps-in-chatgpt/",
    },
    {
      name: "Microsoft — AI Performance in Bing Webmaster Tools",
      url: "https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c",
    },
  ],
  faq: [],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const publicNuInseamnaAccesibilHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-02T09:07:00+03:00">2 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-01">1 octombrie 2026</time></p>

      <p><strong>Faptul că o informație este publică nu garantează că fiecare sistem AI o poate găsi, recupera sau folosi într-un răspuns.</strong> ChatGPT, Claude, Gemini, Grok sau un agent conectat la aplicațiile unei companii pot ajunge la surse diferite, pe căi diferite, în momente diferite. Diferența nu este doar între modele; este și între infrastructurile prin care informația ajunge la ele.</p>
      <p>În <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol al seriei</a>, am introdus <em>machine accessibility</em>: capacitatea sistemelor AI de a descoperi, accesa, interpreta, verifica și utiliza informația despre o entitate. Acum restrângem problema la o întrebare esențială: <strong>accesibilă pentru cine, prin ce mecanism și în ce condiții?</strong></p>
      <p><strong>Unde se încadrează în serie:</strong> din modelul în șapte niveluri propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a> (Presence → Discoverability → Accessibility → Understanding → Verifiability → Recommendability → Actionability), acest articol tratează nivelurile 2 și 3, <strong>Discoverability</strong> și <strong>Accessibility</strong>: dacă și prin ce mecanism poate ajunge un anumit sistem AI la o sursă. Nivelurile următoare depind de acestea, dar nu sunt garantate de ele.</p>

      <h2>Articolul în 7 idei</h2>
      <ol>
        <li><strong>Public înseamnă accesibil pentru AI?</strong> Nu. Publicarea, permisiunea de crawling, recuperarea la cerere și citarea sunt etape diferite.</li>
        <li><strong>De ce sisteme AI diferite pot recupera surse diferite?</strong> Pentru că folosesc infrastructuri de căutare, crawlere, acorduri de date, instrumente și permisiuni diferite.</li>
        <li><strong>Cum ajung postările sociale în AI?</strong> Prin căi care trebuie separate: antrenare, căutare la cerere, acces nativ sau furnizare prin API; una nu o dovedește pe cealaltă.</li>
        <li><strong>Cine decide dacă un agent are voie să acceseze informația?</strong> Proprietarii surselor, platformele, operatorii infrastructurii și utilizatorii, în limitele mecanismelor tehnice și contractuale aplicabile.</li>
        <li><strong>De ce contează conectorii și API-urile?</strong> Permit acces autorizat la informații care nu trebuie să fie publice sau indexate.</li>
        <li><strong>Cum măsurăm accesibilitatea unei surse fără să inventăm certitudini?</strong> Prin <em>Source Accessibility Mapping</em>, separând documentația, testul de acces și utilizarea observată în răspuns.</li>
        <li><strong>Ce poate face concret un business?</strong> Să își inventarieze sursele, să testeze căile relevante și să documenteze limitele, fără să confunde o setare tehnică cu promisiunea unei recomandări AI.</li>
      </ol>
      <hr />
      <h2>1. Public înseamnă accesibil pentru AI?</h2>
      <p><strong>Nu. O informație poate fi vizibilă pentru un om și totuși indisponibilă unui crawler, absentă dintr-un index sau inaccesibilă unui agent care nu are autorizația necesară.</strong></p>
      <p>Să presupunem că o companie publică pe site o nouă ofertă. Un utilizator îi poate deschide pagina în browser. De aici însă nu rezultă că pagina a fost descoperită sau indexată de toate motoarele de căutare, că un anumit sistem AI o poate recupera în timp real ori că o va utiliza în răspuns. Fiecare etapă are propriile condiții. Chiar și același URL poate arăta diferit pentru un om, pentru un crawler și pentru un instrument de audit, cum am documentat în <a href="/lab/articole/paradoxul-site-ului-terminat">Paradoxul site-ului terminat</a>.</p>
      <p>O reprezentare utilă, <strong>nu o succesiune obligatorie pentru toate arhitecturile</strong>, este:</p>
      <pre><code>Published
   ↓
Technically reachable
   ↓
Permitted / authorized
   ↓
Discoverable or directly addressable
   ↓
Retrievable in a specific context
   ↓
Selected and interpreted
   ↓
Possibly cited or used</code></pre>
      <p>Unele sisteme sar peste indexarea web: primesc date prin API sau accesează direct un document conectat. Altele folosesc un index anterior, astfel încât sursa poate apărea într-un răspuns chiar dacă o nouă solicitare către site nu reușește. Ordinea și mecanismul trebuie identificate, nu presupuse.</p>
      <p>Distincția este documentată chiar de operatorii AI. OpenAI separă <strong>OAI-SearchBot</strong> pentru căutarea în ChatGPT, <strong>GPTBot</strong> pentru colectarea de conținut potențial utilizat la antrenare și <strong>ChatGPT-User</strong> pentru anumite solicitări inițiate de utilizator. Documentația precizează că aceste categorii au roluri diferite, că ChatGPT-User nu este folosit pentru crawling automat și că, fiind inițiate de utilizator, acestor acțiuni regulile <code>robots.txt</code> pot să nu li se aplice.<sup><a href="#fn-1">1</a></sup></p>
      <p>Și Anthropic documentează separat <strong>ClaudeBot</strong>, <strong>Claude-SearchBot</strong> și <strong>Claude-User</strong>. A permite sau a restricționa unul dintre aceste trasee nu este echivalent cu a decide toate modalitățile prin care un răspuns AI ar putea conține informații despre site.<sup><a href="#fn-2">2</a></sup></p>
      <p><strong>Prima regulă a măsurării:</strong> nu folosim „AI-ul are acces” ca propoziție completă. Numim sistemul, instrumentul, sursa, versiunea sau configurația testată și data observației.</p>
      <hr />
      <h2>2. De ce sisteme AI diferite pot recupera surse diferite?</h2>
      <p><strong>Pentru că „AI” nu este un browser universal: fiecare produs combină modele cu propriile instrumente, indecși, reguli și integrări.</strong> Chiar două sesiuni ale aceluiași asistent pot avea acces diferit atunci când una folosește căutarea web, iar cealaltă are acces la un conector autorizat.</p>
      <p>Exemplele documentate arată variația mecanismelor:</p>
      <table>
        <thead>
          <tr><th>Ecosistem sau produs</th><th>Mecanism documentat relevant</th><th>Ce demonstrează și ce nu demonstrează</th></tr>
        </thead>
        <tbody>
          <tr><td>OpenAI / ChatGPT</td><td>Crawlere separate pentru search, training și solicitări ale utilizatorilor.<sup><a href="#fn-1">1</a></sup></td><td>Demonstrează că există căi distincte; nu garantează că o pagină permisă va fi citată.</td></tr>
          <tr><td>Anthropic / Claude</td><td>ClaudeBot, Claude-SearchBot și Claude-User, cu funcții distincte.<sup><a href="#fn-2">2</a></sup></td><td>Documentează moduri de acces, nu vizibilitatea efectivă pentru fiecare întrebare.</td></tr>
          <tr><td>Google</td><td>Googlebot pentru Search și controlul Google-Extended pentru utilizări specificate ale conținutului în Gemini.<sup><a href="#fn-3">3</a></sup></td><td>Google-Extended nu elimină automat o pagină din Google Search; nici indexarea nu garantează recuperarea într-un răspuns Gemini.</td></tr>
          <tr><td>xAI / Grok pe X</td><td>Documentația X declară că Grok poate decide să caute postări publice X și pe web în timp real.<sup><a href="#fn-4">4</a></sup></td><td>Indică o cale de căutare în postările X, nu faptul că fiecare postare este consultată sau citată.</td></tr>
          <tr><td>OpenAI / Reddit</td><td>Parteneriatul anunțat în 2024 descrie acces la Reddit Data API pentru conținut structurat și actualizat.<sup><a href="#fn-5">5</a></sup></td><td>Demonstrează existența unei căi contractuale declarate; nu permite deducerea selecției fiecărui rezultat.</td></tr>
        </tbody>
      </table>
      <p>Aceste exemple nu formează o clasificare a produselor și nici un clasament al accesului. Ele arată că întrebarea „poate AI să vadă pagina?” nu are un singur răspuns fără a preciza produsul și calea de acces.</p>
      <p>Există și o problemă temporală. Sursa poate fi accesibilă astăzi, dar răspunsul poate utiliza o versiune mai veche, un index intermediar sau o sursă terță care a preluat informația. <strong>Accesul documentat la o sursă și proveniența efectivă a unei afirmații sunt două lucruri diferite.</strong></p>
      <hr />
      <h2>3. Cum ajung postările sociale în AI?</h2>
      <p><strong>Nu există un singur traseu. Antrenarea, căutarea la cerere și accesul contractual prin API sunt căi diferite, iar una nu o dovedește pe cealaltă.</strong></p>
      <p>Meta a anunțat în aprilie 2025 folosirea în UE a conținutului public distribuit de adulți pentru antrenarea modelelor, cu posibilitatea exprimării opoziției,<sup><a href="#fn-6">6</a></sup> documentația X spune că Grok poate căuta postări publice X în timp real,<sup><a href="#fn-4">4</a></sup> iar OpenAI și Reddit au anunțat în mai 2024 un parteneriat de acces la Reddit Data API.<sup><a href="#fn-5">5</a></sup> Niciuna dintre aceste căi nu transformă automat o postare de pe Facebook, X sau Reddit într-o „sursă AI”. Trebuie să întrebăm: <strong>pentru ce produs, prin ce traseu și cu ce dovadă de utilizare?</strong> Mecanismele sunt analizate în detaliu în <a href="/lab/articole/social-media-devine-strat-informational-pentru-ai">ultimul articol al seriei</a>.</p>
      <p>Mai este un aspect: o informație socială poate fi preluată de presă, de un blog ori de un site oficial. Un asistent poate cita articolul intermediar fără să fi accesat postarea originală. Pentru verificarea adevărului factual, traseul până la sursa primară contează adesea mai mult decât popularitatea canalului prin care informația a circulat.</p>
      <hr />
      <h2>4. Cine decide dacă un agent are voie să acceseze informația?</h2>
      <p><strong>Controlul este distribuit între proprietarul conținutului, platforma care îl găzduiește, infrastructura care gestionează traficul, operatorul sistemului AI și, când sunt implicate date personale sau private, utilizatorul care autorizează accesul.</strong> Niciun actor nu controlează singur întregul traseu.</p>
      <p>Pe web, <code>robots.txt</code> este un mecanism standardizat de comunicare a preferințelor pentru crawleri. RFC 9309 precizează însă o limită esențială: <strong>nu este un sistem de securitate și nu înlocuiește autentificarea sau alte controale de acces</strong>.<sup><a href="#fn-7">7</a></sup></p>
      <p>În septembrie 2026, Cloudflare a anunțat controale mai granulare, descriind trei comportamente: <strong>Search</strong>, <strong>Training</strong> și <strong>Agent</strong>. Un proprietar poate dori să rămână descoperibil în căutare, dar să exprime preferințe diferite pentru utilizarea conținutului la antrenare. Cloudflare explică și faptul că există crawleri cu utilizări mixte, astfel încât simpla blocare a unui bot poate produce efecte colaterale asupra vizibilității în căutare. Capacitățile și angajamentele diferă însă între operatori și trebuie verificate pentru fiecare implementare.<sup><a href="#fn-8">8</a></sup></p>
      <p>Separat de regulile crawlerelor apar autentificarea, permisiunile unui cont, limitele API, acordurile comerciale și restricțiile platformelor sociale. O pagină publică poate fi inaccesibilă unui anumit instrument automat, iar o bază de date privată poate fi perfect accesibilă unui agent autorizat de proprietarul ei.</p>
      <p>Aceasta este o distincție importantă pentru business: <strong>accesibilitatea maximă nu este întotdeauna obiectivul corect</strong>. Unele informații trebuie să fie publice, altele trebuie expuse controlat, iar datele confidențiale trebuie să rămână protejate.</p>
      <hr />
      <h2>5. De ce contează conectorii și API-urile?</h2>
      <p><strong>Pentru că oferă o altă cale de acces decât căutarea și crawling-ul web: sistemul AI poate interoga direct o aplicație sau un set de date, în limitele permisiunilor acordate.</strong> Această cale poate expune informații actualizate care nu există într-o pagină publică.</p>
      <p>În octombrie 2025, OpenAI a prezentat aplicații integrate în ChatGPT și un SDK construit pe Model Context Protocol (MCP), conceput pentru conectarea instrumentelor și datelor externe. Anunțul ilustrează diferența dintre a citi ce a publicat o companie pe web și a interacționa, cu autorizare, cu un serviciu al companiei.<sup><a href="#fn-9">9</a></sup></p>
      <p>Imaginează-ți un service auto. Site-ul public spune că face revizii și reparații pentru anumite mărci. Un sistem de programări poate furniza intervalele libere dintr-o anumită zi, durata estimată a lucrării și opțiunea concretă de programare. Primul traseu ține de publicare și recuperarea informației. Al doilea depinde de accesul operațional și de permisiunile serviciului respectiv.</p>
      <pre><code>Pagină publică ── crawl / index / search ─────┐
                                              ├──&gt; Asistent sau agent AI
Sistem de programări ── API / autorizare ─────┘</code></pre>
      <p>Aceasta nu înseamnă că fiecare companie are nevoie de propriul API sau de un agent. Înseamnă că <strong>evaluarea vizibilității trebuie adaptată obiectivului real</strong>, temă dezvoltată în <a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">al patrulea articol al seriei</a>.</p>
      <hr />
      <h2>6. Cum măsurăm accesibilitatea unei surse fără să inventăm certitudini?</h2>
      <p><strong>Separând ceea ce declară documentația, ceea ce reușim să testăm tehnic și ceea ce observăm în răspunsurile generate.</strong> Propunerea exploratorie pe care o numim aici <em>Source Accessibility Mapping</em> urmărește diferența dintre cele trei, fără să pretindă acces la infrastructura internă a furnizorilor AI.</p>
      <p>Un inventar minimal pentru fiecare sursă ar putea cuprinde:</p>
      <table>
        <thead>
          <tr><th>Câmp</th><th>Întrebare</th><th>Tip posibil de dovadă</th></tr>
        </thead>
        <tbody>
          <tr><td><code>source_id</code></td><td>Care este sursa exactă?</td><td>URL, identificator API sau document.</td></tr>
          <tr><td><code>source_type</code></td><td>Este site propriu, social, registru, presă sau sistem privat?</td><td>Clasificare documentată.</td></tr>
          <tr><td><code>target_system</code></td><td>Ce produs și configurație testăm?</td><td>Nume, instrumente active, stare autentificare, dată.</td></tr>
          <tr><td><code>access_path</code></td><td>Prin ce mecanism ar putea ajunge la sursă?</td><td>Crawler, web search, API, conector, acces nativ.</td></tr>
          <tr><td><code>declared_access</code></td><td>Ce permite sau descrie furnizorul?</td><td>Documentație oficială, arhivată și datată.</td></tr>
          <tr><td><code>technical_observation</code></td><td>Ce putem observa din exterior?</td><td>Răspunsuri HTTP, reguli publice, jurnale proprii, teste autorizate.</td></tr>
          <tr><td><code>answer_observation</code></td><td>A folosit efectiv sursa în răspuns?</td><td>Răspuns complet, citare, extras, timestamp și condițiile testului.</td></tr>
          <tr><td><code>limitations</code></td><td>Ce rămâne necunoscut?</td><td>Index intermediar, cache, integrare internă, selecție opacă.</td></tr>
        </tbody>
      </table>
      <p>Conform convenției de lucru AI Visibility Lab, lanțul probatoriu trebuie păstrat explicit:</p>
      <pre><code>Raw Evidence
     ↓
Indexed Evidence
     ↓
Observation
     ↓
Measurement
     ───────── graniță metodologică ─────────
     ↓
Interpretation</code></pre>
      <p>De exemplu, dacă documentația OpenAI descrie OAI-SearchBot, avem <strong>dovada unui mecanism declarat</strong>. Dacă observăm în propriile loguri o solicitare verificată de la acel crawler, avem <strong>o observație a accesării unui URL</strong>, nu dovada că URL-ul a fost inclus într-un index sau utilizat ulterior într-un răspuns. Dacă un test datat în ChatGPT arată o citare, avem <strong>o observație despre acel răspuns</strong>, nu o garanție pentru toate interogările viitoare.<sup><a href="#fn-1">1</a></sup></p>
      <p>În plus, instrumente precum <strong>AI Performance din Bing Webmaster Tools</strong> raportează citări agregate pentru experiențele suportate, inclusiv Microsoft Copilot, rezumatele AI din Bing și anumite integrări partenere. Microsoft precizează că datele nu sunt un jurnal complet al fiecărei situații în care conținutul a fost folosit și că nu indică ranking, autoritate sau rolul unei pagini într-un răspuns.<sup><a href="#fn-10">10</a></sup> Prin urmare, raportul este util pentru observații comparative, nu pentru atribuirea automată a cauzalității.</p>
      <p><em>Source Accessibility Mapping</em> nu este prezentat aici drept un standard consacrat sau un protocol AVL validat. Este o ipoteză de instrument metodologic care necesită definiții operaționale, experimente repetate și documentarea erorilor.</p>
      <hr />
      <h2>7. Ce poate face concret un business?</h2>
      <p><strong>Să trateze accesibilitatea ca pe o proprietate verificabilă a fiecărei surse și a fiecărui traseu relevant, nu ca pe o simplă bifă „suntem online”.</strong> Obiectivul nu este să ofere tuturor sistemelor acces la orice informație, ci să poată decide informat ce publică, cui permite accesul și cum verifică rezultatul.</p>
      <p>Un punct de pornire practic este inventarierea surselor care descriu compania: site propriu, pagini sociale, profiluri comerciale, documentații, informații despre produse, mențiuni în presă și eventual sisteme accesibile prin API. Pentru fiecare, merită notate sursa originală, data actualizării și orice neconcordanță importantă.</p>
      <p>Urmează separarea mecanismelor. Se verifică dacă paginile esențiale sunt accesibile utilizatorilor și crawlerelor relevante, dacă regulile de acces sunt intenționate și dacă informațiile care necesită autorizare sunt protejate. Nu recomandăm dezactivarea controalelor de securitate pentru a obține presupuse beneficii GEO.</p>
      <p>Abia apoi vin testele de răspuns: aceeași întrebare, aceeași entitate și aceleași condiții pe cât posibil, documentate separat pentru fiecare produs. O absență dintr-un singur răspuns nu dovedește inaccesibilitatea; o menționare fără citare nu dovedește recuperarea directă a sursei originale.</p>
      <p>Un business local poate descoperi astfel că programul de lucru este corect pe site, diferit într-un profil terț și absent din răspunsul unui anumit asistent. Acestea sunt <strong>trei observații diferite</strong>, care cer intervenții diferite. Mai mult conținut nu rezolvă automat problema unui traseu de acces blocat sau a unor date contradictorii.</p>
      <hr />
      <h2>Concluzie: nu există un singur „internet văzut de AI”</h2>
      <p><strong>Există o pluralitate de trasee prin care sistemele AI întâlnesc informația.</strong> Unele pornesc de la crawling și căutare, altele de la fluxuri de date negociate, conectori sau aplicații autorizate. Rețelele sociale adaugă mecanisme native și condiții de acces proprii. Rezultatul este că două sisteme pot construi răspunsuri diferite fără ca diferența să poată fi explicată exclusiv prin modelul lingvistic.</p>
      <p>Pentru AI Visibility Lab, consecința este metodologică: înainte de a interpreta o menționare sau absența ei, trebuie să înțelegem ce surse erau potențial accesibile, prin ce mecanisme și ce dovadă avem că au fost efectiv utilizate.</p>
      <p><strong>Publicarea produce o urmă. Accesul îi stabilește traseele posibile. Recuperarea și selecția determină dacă acea urmă participă la un răspuns.</strong> Între aceste etape se află diferența dintre a fi prezent pe internet și a fi reprezentat corect de un sistem AI.</p>
      <p>În articolul următor vom privi această schimbare din perspectiva site-ului propriu: <strong><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">„Site-ul nu dispare. Își schimbă clientul.”</a></strong></p>

      <hr />

      <h2>Seria „Machine accessibility și agentic web”</h2>
      <ol>
        <li><a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">De la web visibility la machine accessibility</a></li>
        <li><strong>Public nu mai înseamnă accesibil: de ce fiecare sistem AI vede un internet diferit</strong> (acest articol)</li>
        <li><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">Site-ul nu dispare. Își schimbă clientul</a></li>
        <li><a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">De la menționare la tranzacție: ce înseamnă Agentic Visibility</a></li>
        <li><a href="/lab/articole/social-media-devine-strat-informational-pentru-ai">Social media devine strat informațional pentru AI</a></li>
      </ol>

      <hr />

      <h2>Surse și metodologie</h2>

      <p>Sursele oficiale de produs documentează funcții și politici declarate, nu demonstrează independent performanța sau comportamentul fiecărei execuții. Exemplele comparative sunt descriptive, nu evaluări ale furnizorilor. Pe 1 octombrie 2026 au fost reverificate existența, data și formularea fiecărei surse. Paginile X, OpenAI (Reddit, Apps SDK) blochează accesul automat și au fost confirmate prin indexul de căutare și relatări de presă, nu prin citire directă; pagina Microsoft își încarcă dinamic conținutul, iar formularea limitărilor a fost confirmată tot prin indexul de căutare. Termenii <em>machine accessibility</em> și <em>Source Accessibility Mapping</em> sunt folosiți aici ca termeni de lucru AI Visibility Lab; nu sunt prezentați ca standarde industriale validate. Nu se introduc rezultate experimentale neefectuate și nu se transformă lipsa unei citări în dovadă a blocării accesului.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">OpenAI, <strong>Overview of OpenAI Crawlers</strong>, documentație oficială, consultată la 1 octombrie 2026. <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">developers.openai.com/api/docs/bots</a></li>
        <li id="fn-2">Anthropic, <strong>Does Anthropic crawl data from the web, and how can site owners block the crawler?</strong>, Claude Help Center, consultat la 1 octombrie 2026. <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">support.claude.com/en/articles/8896518</a></li>
        <li id="fn-3">Google, <strong>Google's common crawlers</strong> (<code>Googlebot</code>, <code>Google-Extended</code>), documentație oficială, consultată la 1 octombrie 2026. <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers" target="_blank" rel="noopener noreferrer">developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers</a></li>
        <li id="fn-4">X, <strong>About Grok</strong>, documentație oficială, consultată prin indexul de căutare la 1 octombrie 2026 (pagina blochează accesul automat). <a href="https://help.x.com/en/using-x/about-grok" target="_blank" rel="noopener noreferrer">help.x.com/en/using-x/about-grok</a></li>
        <li id="fn-5">OpenAI și Reddit, <strong>OpenAI and Reddit Partnership</strong>, 16 mai 2024 (pagina blochează accesul automat; conținutul a fost confirmat la 1 octombrie 2026 prin indexul de căutare și prin relatări de presă din ziua anunțului). <a href="https://openai.com/index/openai-and-reddit-partnership/" target="_blank" rel="noopener noreferrer">openai.com/index/openai-and-reddit-partnership/</a></li>
        <li id="fn-6">Meta, <strong>Making AI Work Harder for Europeans</strong>, 14 aprilie 2025; pagină actualizată la 27 martie 2026, conform paginii oficiale. <a href="https://about.fb.com/news/2025/04/making-ai-work-harder-for-europeans/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2025/04/making-ai-work-harder-for-europeans/</a></li>
        <li id="fn-7">IETF, <strong>RFC 9309: Robots Exclusion Protocol</strong>, septembrie 2022, secțiunea 3 (Security Considerations). <a href="https://www.rfc-editor.org/rfc/rfc9309.html" target="_blank" rel="noopener noreferrer">rfc-editor.org/rfc/rfc9309.html</a></li>
        <li id="fn-8">Cloudflare, <strong>Have it both ways: stay discoverable in search while disallowing AI training</strong>, 15 septembrie 2026. <a href="https://blog.cloudflare.com/accountable-mixed-use-ai-crawlers/" target="_blank" rel="noopener noreferrer">blog.cloudflare.com/accountable-mixed-use-ai-crawlers/</a></li>
        <li id="fn-9">OpenAI, <strong>Introducing apps in ChatGPT and the new Apps SDK</strong>, 6 octombrie 2025 (pagina blochează accesul automat; confirmată la 1 octombrie 2026 prin indexul de căutare și relatări de presă). Pagina descrie lansarea inițială; disponibilitatea actuală a integrărilor se verifică separat. <a href="https://openai.com/index/introducing-apps-in-chatgpt/" target="_blank" rel="noopener noreferrer">openai.com/index/introducing-apps-in-chatgpt/</a></li>
        <li id="fn-10">Microsoft, <strong>AI Performance in Bing Webmaster Tools</strong>, documentație oficială (conținut încărcat dinamic; existența paginii verificată direct, iar formularea limitărilor confirmată prin indexul de căutare la 1 octombrie 2026). <a href="https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c" target="_blank" rel="noopener noreferrer">bing.com/webmasters/help/ai-performance-9f8e7d6c</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Lista crawlerelor, rolurile lor, controalele de acces oferite de infrastructură, acordurile de date dintre platforme și disponibilitatea conectorilor se schimbă rapid. Numele user-agent-urilor, regulile de respectare a <code>robots.txt</code> și disponibilitatea regională pot fi diferite la data lecturii. Afirmațiile despre produse au fost verificate la 1 octombrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 1 octombrie 2026.</em></p>
`;
