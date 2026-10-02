import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const socialMediaStratInformationalPentruAiMeta: LabArticleMeta = {
  title:
    "Social media devine strat informațional pentru AI: când postările, comentariile și comunitățile intră în răspunsuri",
  description:
    "Cum intră conținutul din Facebook, Instagram, Threads, X, Reddit și LinkedIn în ecosistemele AI? Separăm training, retrieval, native platform context, citation și recommendation și propunem un cadru verificabil pentru Social Source Accessibility în AI Visibility Lab.",
  canonical:
    "https://delamatescu.ro/lab/articole/social-media-devine-strat-informational-pentru-ai",
  category: "AI Ecosystem",
  articleType: "Analiză",
  datePublished: "2026-10-02T09:10:00+03:00",
  dateModified: "2026-10-02",
  lastReviewed: "2026-10-02",
  about: [
    { name: "Machine Accessibility" },
    { name: "Source Accessibility" },
    { name: "Social Search" },
    { name: "AI Retrieval" },
    { name: "Training Data" },
    { name: "Native Platform Context" },
    { name: "Entity Representation" },
    { name: "Recommendation Visibility" },
  ],
  keywords: [
    "AI Visibility",
    "social media AI",
    "social search",
    "social content retrieval",
    "AI training data",
    "Facebook Meta AI",
    "Instagram Meta AI",
    "Threads Meta AI",
    "X Grok",
    "Reddit ChatGPT",
    "LinkedIn AI",
    "Social Source Accessibility",
    "source accessibility",
    "AI citations",
    "AI recommendations",
    "GEO",
    "AEO",
  ],
  citations: [
    {
      name: "Meta — Making AI Work Harder for Europeans",
      url: "https://about.fb.com/news/2025/04/making-ai-work-harder-for-europeans/",
    },
    {
      name: "LinkedIn Help — Update to our Terms and data use",
      url: "https://www.linkedin.com/help/linkedin/answer/a8059228",
    },
    {
      name: "X Help Center — About Grok",
      url: "https://help.x.com/en/using-x/about-grok",
    },
    {
      name: "xAI — Grok Bot now works with X",
      url: "https://x.ai/news/grok-bot-and-x",
    },
    {
      name: "OpenAI — OpenAI and Reddit Partnership",
      url: "https://openai.com/index/openai-and-reddit-partnership/",
    },
    {
      name: "Google — An expanded partnership with Reddit",
      url: "https://blog.google/company-news/inside-google/company-announcements/expanded-reddit-partnership/",
    },
    {
      name: "Meta — Introducing Muse Spark: Meta's Most Powerful Model Yet",
      url: "https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/",
    },
    {
      name: "Meta — Meta AI Doesn’t Just Think, It Acts",
      url: "https://about.fb.com/news/2026/07/meta-ai-muse-spark-doesnt-just-think-it-acts/",
    },
    {
      name: "Meta — New AI Tools to Help You Make Things Happen on Facebook",
      url: "https://about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook/",
    },
    {
      name: "Meta — Privacy Matters: Meta’s Generative AI Features",
      url: "https://about.fb.com/news/2023/09/privacy-matters-metas-generative-ai-features/",
    },
    {
      name: "LinkedIn Help — LinkedIn and generative AI (GAI) FAQs",
      url: "https://www.linkedin.com/help/linkedin/answer/a5538339",
    },
    {
      name: "CNBC — Reddit stock sinks on report it may not renew Google AI content deal",
      url: "https://www.cnbc.com/2026/07/22/reddit-stock-google-ai-content-deal.html",
    },
    {
      name: "MediaPost — Reddit Ending Data-Scraping, Will Keep Existing Agreements",
      url: "https://www.mediapost.com/publications/article/418430/reddit-ending-data-scraping-will-keep-existing-ag.html",
    },
  ],
  faq: [],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const socialMediaStratInformationalPentruAiHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-02T09:10:00+03:00">2 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-02">2 octombrie 2026</time></p>

      <p><strong>Social media nu mai poate fi tratată doar ca un canal prin care informația ajunge la oameni. În anumite ecosisteme, postările, comentariile, profilurile, Reels-urile și conversațiile publice sunt deja folosite pentru antrenarea modelelor, pentru retrieval în timp real, pentru context nativ și pentru răspunsuri generate de AI. Dar aceste mecanisme sunt diferite și nu trebuie confundate.</strong></p>
      <p>Aceasta este problema centrală a ultimului articol din această serie.</p>
      <p>În <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a> am extins discuția de la web visibility la <em>machine accessibility</em>. În <a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">al doilea</a> am arătat de ce informația publică nu este automat accesibilă tuturor sistemelor AI. În <a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">al treilea</a> am analizat site-ul ca infrastructură pentru oameni și agenți. În <a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">al patrulea</a> am urmărit traseul de la menționare la acțiune și tranzacție.</p>
      <p>Acum trebuie să includem în model o categorie care, în practica utilizatorilor, este deja una dintre principalele interfețe de consum al informației:</p>
      <blockquote><strong>social media.</strong></blockquote>
      <p>Întrebarea nu este dacă oamenii folosesc Facebook, Instagram, TikTok, LinkedIn, X sau Reddit pentru informare. Întrebarea metodologică pentru AI Visibility Lab este alta:</p>
      <blockquote><strong>În ce condiții poate conținutul social deveni sursă pentru un sistem AI și ce înseamnă asta pentru reprezentarea digitală a unui business?</strong></blockquote>
      <p>Tema a mai fost abordată în AI Visibility Lab din perspectiva profilului personal: în <a href="/lab/articole/social-media-vizibilitate-ai">De ce 10.000 de urmăritori pe LinkedIn nu te fac automat vizibil pentru AI</a> am comparat platformele sociale și am formulat „legea artefactului”. Acolo întrebarea era ce rămâne în urmă după ce publici. Aici urmărim prin ce mecanisme ajunge acel conținut la un sistem AI și cum poate fi măsurat fiecare traseu.</p>
      <p><strong>Unde se încadrează în serie:</strong> din modelul în șapte niveluri propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a> (Presence → Discoverability → Accessibility → Understanding → Verifiability → Recommendability → Actionability), acest articol tratează nivelurile 1–5, de la <strong>Presence</strong> la <strong>Verifiability</strong>, pentru o categorie de surse pe care business-ul nu o controlează complet: conținutul social. Întrebarea nu este doar dacă urma socială există, ci dacă poate fi accesată, atribuită corect și confirmată de o sursă primară.</p>
      <h2>Articolul în 7 idei</h2>
      <ol>
        <li><strong>Social media este sursă pentru AI?</strong> Uneori da, dar prin mecanisme diferite: training, retrieval, acces nativ al platformei sau integrare prin API.</li>
        <li><strong>Training înseamnă că o postare va fi citată?</strong> Nu. Folosirea conținutului la antrenare nu dovedește retrieval, citare sau recomandare.</li>
        <li><strong>Există exemple de acces în timp real la social content?</strong> Da. Grok poate căuta postări publice de pe X, iar OpenAI și Google au anunțat în 2024 acorduri de acces la conținut Reddit prin Data API; reînnoirea acordului cu Google a fost raportată ca incertă în iulie 2026.</li>
        <li><strong>Ce se întâmplă în ecosistemele Meta?</strong> Meta AI poate folosi conținut public și recomandări din Facebook, Instagram și Threads în propriile experiențe AI, iar Meta folosește și anumit conținut public pentru training.</li>
        <li><strong>Toate platformele sunt la fel de accesibile?</strong> Nu. Fiecare platformă are propriile politici, integrări, permisiuni și relații comerciale.</li>
        <li><strong>Cum poate fi măsurată Social Source Accessibility?</strong> Separând existența conținutului de acces, retrieval, attribution, citation și recommendation.</li>
        <li><strong>Ce înseamnă pentru business-uri?</strong> Prezența socială poate deveni parte din reprezentarea machine-readable a entității, dar numai acolo unde există dovezi că sistemul țintă poate ajunge la acea sursă.</li>
      </ol>
      <h2>1. Social media este sursă pentru AI?</h2>
      <p><strong>Da, în anumite ecosisteme și prin mecanisme documentate. Dar expresia „AI-ul vede social media” este prea vagă pentru a fi utilă metodologic.</strong></p>
      <p>Trebuie să separăm cel puțin cinci mecanisme:</p>
      <pre><code>Social content
   ↓
Training
Retrieval
Native platform context
API / licensed access
Citation / attribution</code></pre>
      <p>Acestea nu sunt echivalente.</p>
      <p>Un model poate fi antrenat pe conținut public fără să poată recupera o postare actuală la momentul întrebării.</p>
      <p>Un sistem poate avea acces prin API la conținut recent fără ca fiecare răspuns să îl folosească.</p>
      <p>Un AI integrat nativ într-o platformă poate vedea anumite tipuri de conținut pe care un AI extern nu le poate accesa.</p>
      <p>Iar faptul că o sursă este folosită pentru retrieval nu garantează că va fi afișată, citată sau că entitatea menționată acolo va fi recomandată.</p>
      <p>De aceea, pentru AI Visibility este mai utilă următoarea separare:</p>
      <blockquote><strong>Training ≠ Retrieval ≠ Citation ≠ Recommendation.</strong></blockquote>
      <p>Această propoziție este probabil cea mai importantă distincție a întregului articol.</p>
      <h2>2. De ce training-ul nu demonstrează citarea sau vizibilitatea într-un răspuns?</h2>
      <p><strong>Pentru că training-ul modifică modelul, în timp ce retrieval-ul presupune accesarea unei surse la momentul formulării răspunsului sau într-un proces asociat acelui răspuns.</strong></p>
      <p>Meta spune explicit că, în Uniunea Europeană, folosește conținut public — inclusiv postări și comentarii publice ale adulților — pentru antrenarea modelelor sale generative, cu posibilitatea de opoziție pentru utilizatori. Compania precizează și că mesajele private dintre persoane nu sunt folosite în acest scop decât atunci când un utilizator alege să le distribuie unei funcții AI.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-10">10</a></sup></p>
      <p>LinkedIn spune la rândul său că, din 3 noiembrie 2025, poate folosi în UE, SEE, Elveția, Regatul Unit, Canada și Hong Kong anumite date ale membrilor, inclusiv detalii de profil și conținut public publicat pe LinkedIn, pentru antrenarea modelelor generative folosite pentru funcții de creare de conținut. Platforma oferă și mecanism de opt-out.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-11">11</a></sup></p>
      <p>Aceste afirmații dovedesc utilizarea anumitor categorii de conținut pentru <strong>model training</strong>.</p>
      <p>Nu dovedesc însă că:</p>
      <ul>
        <li>o postare anume este memorată;</li>
        <li>o postare anume poate fi recuperată ulterior;</li>
        <li>un răspuns va cita autorul;</li>
        <li>informația va fi afișată actualizat;</li>
        <li>un business va fi recomandat pentru că a publicat acel conținut.</li>
      </ul>
      <p>Aceasta este una dintre cele mai frecvente erori de interpretare în discuțiile despre AI visibility.</p>
      <p>Dacă o platformă spune:</p>
      <blockquote>„folosim conținut public pentru training”</blockquote>
      <p>concluzia corectă este limitată:</p>
      <blockquote><strong>acel tip de conținut poate intra în procesul de dezvoltare sau îmbunătățire a modelului, conform condițiilor declarate de platformă.</strong></blockquote>
      <p>Nu putem transforma automat această propoziție în:</p>
      <blockquote>„postarea mea va apărea în ChatGPT / Meta AI / Copilot.”</blockquote>
      <h2>3. Există acces în timp real la conținut social?</h2>
      <p><strong>Da. Există exemple documentate în care un sistem AI poate căuta sau primi conținut social actual prin acces nativ ori prin API.</strong></p>
      <h3>X și Grok</h3>
      <p>X documentează explicit că Grok poate decide să caute postări publice de pe X și să facă web search în timp real atunci când răspunde unui utilizator. Help Center-ul X spune că accesul la postări publice în timp real îi permite lui Grok să răspundă cu informații actuale.<sup><a href="#fn-3">3</a></sup></p>
      <p>Separat, xAI a anunțat în august 2026 o integrare Grok Bot cu X prin care agentul poate, după conectarea contului, să caute postări, să citească timeline-ul, să verifice mentions și să urmărească trenduri.<sup><a href="#fn-4">4</a></sup></p>
      <p>Acesta este un caz clar de <strong>platform-native retrieval</strong>.</p>
      <h3>Reddit, OpenAI și Google</h3>
      <p>În mai 2024, OpenAI și Reddit au anunțat un parteneriat prin care OpenAI primește acces la Reddit Data API, descris de companii ca furnizând conținut Reddit structurat și în timp real. Scopul declarat este ca produsele OpenAI să poată înțelege și afișa mai bine conținut Reddit, în special pentru subiecte recente.<sup><a href="#fn-5">5</a></sup></p>
      <p>Reddit are o relație similară cu Google. În februarie 2024, Google a anunțat extinderea parteneriatului cu Reddit: acces la Reddit Data API, descris ca furnizând conținut structurat și în timp real, folosit inclusiv pentru afișarea conținutului Reddit în produsele Google și pentru antrenarea modelelor.<sup><a href="#fn-6">6</a></sup></p>
      <p>Acordul nu este însă static. În iulie 2026, presa a raportat dificultăți în negocierile de reînnoire, Reddit discutând inclusiv oprirea accesului Google la conținutul său pentru utilizări AI.<sup><a href="#fn-12">12</a></sup> La 1 octombrie 2026, Reddit a anunțat că retrage feed-urile RSS (13 noiembrie 2026) și elimină treptat accesul public la vechiul Data API (închidere completă în martie 2027), invocând scraping-ul la scară largă; potrivit relatărilor, acordurile existente de conținut cu Google și OpenAI nu sunt afectate de aceste schimbări.<sup><a href="#fn-13">13</a></sup> La ultima verificare AI Visibility Lab (2 octombrie 2026), reînnoirea acordului cu Google nu era confirmată public; statutul lui trebuie tratat ca fluid, nu ca fapt stabilit.</p>
      <p>O interpretare posibilă, nu o concluzie confirmată de Reddit: în cazul Reddit, accesul public și automatizat la date se îngustează, în timp ce accesul licențiat, negociat bilateral, rămâne în vigoare — exact distincția dintre crawling și acces prin API pe care o descrie secțiunea de mai jos.</p>
      <p>Aceste exemple arată o diferență fundamentală față de simplul crawling:</p>
      <pre><code>Public webpage
   ↓
crawler discovers content</code></pre>
      <p>versus:</p>
      <pre><code>Platform database
   ↓
authorized / licensed API
   ↓
AI system</code></pre>
      <p>În al doilea caz, accesul poate fi mai structurat, mai proaspăt și poate conține contexte pe care un crawler web obișnuit nu le vede în același mod.</p>
      <h2>4. Ce se întâmplă în ecosistemul Meta?</h2>
      <p><strong>Meta oferă unul dintre cele mai clare exemple de convergență dintre social platform și answer engine, pentru că aceeași companie controlează platformele sociale, modelele și suprafețele AI.</strong></p>
      <p>În aprilie 2026, Meta a anunțat Muse Spark și a spus că modelul va alimenta o versiune Meta AI care, în timp, va debloca funcții ce citează recomandări și conținut distribuit în Instagram, Facebook și Threads.<sup><a href="#fn-7">7</a></sup> În același anunț, Meta descrie un Meta AI care:</p>
      <ul>
        <li>afișează postări publice de la localnici atunci când utilizatorul caută un loc;</li>
        <li>arată ce discută oamenii despre un subiect în trend, pe baza conținutului și a postărilor din comunități;</li>
        <li>urmează să integreze în răspunsuri Reels, fotografii și postări, cu credit către creatorii conținutului — formulat de Meta ca direcție de extindere, nu ca funcție disponibilă la lansare.<sup><a href="#fn-7">7</a></sup></li>
      </ul>
      <p>În actualizarea din 12 mai 2026 a aceluiași anunț, Meta adaugă că Meta AI poate:</p>
      <ul>
        <li>aduce recomandări din Reels în conversațiile vocale;</li>
        <li>căuta listări din Facebook Marketplace în modul de shopping;</li>
        <li>permite navigarea prin conținutul public al unui brand sau creator menționat explicit.<sup><a href="#fn-7">7</a></sup></li>
      </ul>
      <p>În iulie 2026, Meta a mers mai departe și a descris funcția de research a Meta AI ca sintetizând informații „across the web” împreună cu ceea ce creatorii și comunitățile publică în aplicațiile Meta.<sup><a href="#fn-8">8</a></sup></p>
      <p>Facebook a primit și un <strong>AI Mode</strong> în search, pe care Meta îl descrie ca furnizând răspunsuri bazate nu doar pe linkuri, ci și pe cultura, opiniile și recomandările distribuite public în aplicațiile companiei.<sup><a href="#fn-9">9</a></sup></p>
      <p>Acestea sunt exemple de <strong>native platform context + retrieval</strong>.</p>
      <p>Ele nu demonstrează că:</p>
      <ul>
        <li>toate postările publice sunt indexate;</li>
        <li>toate postările au șanse egale să apară;</li>
        <li>engagement-ul determină direct selecția;</li>
        <li>apariția într-un răspuns poate fi garantată prin optimizare.</li>
      </ul>
      <p>Dar demonstrează că, în ecosistemul Meta, social content poate deveni parte directă din infrastructura răspunsurilor AI.</p>
      <h2>5. Toate platformele sociale sunt la fel de accesibile sistemelor AI?</h2>
      <p><strong>Nu. Tocmai diferențele dintre platforme fac necesară o măsurare separată, provider cu provider și sursă cu sursă.</strong></p>
      <p>Putem avea cel puțin patru situații:</p>
      <table>
        <thead>
          <tr><th>Situație</th><th>Exemplu documentat</th><th>Ce putem afirma</th></tr>
        </thead>
        <tbody>
          <tr><td>AI și platforma socială aparțin aceluiași ecosistem</td><td>Meta AI + Facebook/Instagram/Threads; Grok + X</td><td>există acces nativ documentat la anumite tipuri de conținut</td></tr>
          <tr><td>AI are acces prin parteneriat/API</td><td>OpenAI + Reddit; Google + Reddit</td><td>există acces programatic documentat (acordul Google–Reddit din 2024 are reînnoirea incertă din iulie 2026)</td></tr>
          <tr><td>Platforma folosește propriul conținut pentru training</td><td>Meta; LinkedIn</td><td>conținutul poate fi folosit pentru dezvoltarea modelelor, conform politicilor platformei</td></tr>
          <tr><td>Nu există documentație publică suficientă pentru relația analizată</td><td>multiple combinații provider-platformă</td><td>nu trebuie presupus accesul</td></tr>
        </tbody>
      </table>
      <p>Ultima categorie este la fel de importantă ca primele trei.</p>
      <p>Dacă nu există dovadă că un anumit sistem poate accesa conținut TikTok, LinkedIn, Facebook sau Instagram într-un anumit mod, AI Visibility Lab nu ar trebui să completeze golul prin presupunere.</p>
      <p>De aceea, o matrice serioasă trebuie să conțină și valoarea:</p>
      <p><strong>Unknown / Not verified</strong></p>
      <p>nu doar:</p>
      <p><strong>Yes / No</strong></p>
      <p>Aceasta este o diferență între documentarea infrastructurii și marketingul construit pe impresii.</p>
      <h2>6. Cum poate fi măsurată Social Source Accessibility?</h2>
      <p><strong>Prin separarea etapelor de la existența unei postări până la utilizarea ei observabilă într-un răspuns AI.</strong></p>
      <p>În cadrul exploratoriu AI Visibility Lab, putem folosi termenul:</p>
      <h3>Social Source Accessibility</h3>
      <p>pentru a descrie <strong>măsura în care conținutul publicat pe o platformă socială poate fi accesat, recuperat, atribuit sau folosit de un sistem AI țintă, în condiții documentate și reproductibile</strong>.</p>
      <p>Nu este un standard oficial și nu trebuie transformat încă într-un scor unic.</p>
      <p>Un model mai util ar fi:</p>
      <pre><code>Published
   ↓
Platform-visible
   ↓
Machine-accessible
   ↓
Retrievable
   ↓
Attributable
   ↓
Citable
   ↓
Recommendation-relevant</code></pre>
      <p>Fiecare treaptă trebuie demonstrată separat.</p>
      <p>Treptele <em>Machine-accessible</em> și <em>Retrievable</em> operaționalizează „legea artefactului” din <a href="/lab/articole/social-media-vizibilitate-ai">articolul despre urmăritori și vizibilitate AI</a>: un conținut persistent, adresabil, accesibil și ușor de extras are mai multe șanse să treacă de ele, dar trecerea trebuie demonstrată pentru fiecare sistem țintă, nu presupusă.</p>
      <h3>Exemplu de matrice</h3>
      <table>
        <thead>
          <tr><th>Nivel</th><th>Întrebare</th><th>Dovadă posibilă</th><th>Ce NU demonstrează</th></tr>
        </thead>
        <tbody>
          <tr><td>Published</td><td>Postarea există public?</td><td>URL + timestamp + screenshot</td><td>acces AI</td></tr>
          <tr><td>Platform-visible</td><td>Este vizibilă fără permisiuni speciale?</td><td>test logged-out / logged-in</td><td>indexare</td></tr>
          <tr><td>Machine-accessible</td><td>Sistemul țintă are mecanism documentat de acces?</td><td>documentație, API, integrare</td><td>retrieval într-un query</td></tr>
          <tr><td>Retrievable</td><td>Postarea este recuperată într-un test?</td><td>răspuns arhivat / log / citare</td><td>consistență</td></tr>
          <tr><td>Attributable</td><td>Sistemul identifică sursa și autorul corect?</td><td>comparație cu originalul</td><td>recomandare</td></tr>
          <tr><td>Citable</td><td>Sistemul oferă trimitere explicită către sursă?</td><td>URL/citation în răspuns</td><td>autoritate universală</td></tr>
          <tr><td>Recommendation-relevant</td><td>Conținutul contribuie observabil într-un query de recomandare?</td><td>panel de query-uri repetate</td><td>cauzalitate simplă</td></tr>
        </tbody>
      </table>
      <p>Treptele descriu conținutul social, nu entitatea, de aceea au denumiri proprii. Ele alimentează nivelurile modelului propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a>: Published și Platform-visible susțin Presence, Machine-accessible și Retrievable susțin Accessibility, Attributable susține Understanding, iar Citable susține Verifiability. Ultima treaptă, Recommendation-relevant, atinge nivelul Recommendability doar ca limită a măsurării: arată dacă un conținut contribuie observabil la un răspuns, nu dacă entitatea este recomandabilă.</p>
      <p>Această structură respectă convenția AVL prezentată în <a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">al doilea articol al seriei</a>: <strong>Raw Evidence → Indexed Evidence → Observation → Measurement</strong>, iar dincolo de granița metodologică, <strong>Interpretation</strong>.</p>
      <h3>Exemplu ipotetic</h3>
      <p>Să presupunem că un restaurant publică pe Instagram:</p>
      <blockquote>„Începând de astăzi avem brunch sâmbăta și duminica între 10:00 și 14:00.”</blockquote>
      <p>Putem documenta (cifrele sunt ilustrative, nu rezultate măsurate de AI Visibility Lab):</p>
      <ul>
        <li><strong>Raw Evidence:</strong> postarea publică;</li>
        <li><strong>Indexed Evidence:</strong> URL, captură, dată, cont, text, timestamp;</li>
        <li><strong>Observation:</strong> Meta AI menționează programul de brunch într-un răspuns și arată postarea;</li>
        <li><strong>Measurement:</strong> informația apare în 7 din 10 rulări pentru același query panel;</li>
        <li><strong>Interpretation:</strong> în condițiile testului, Meta AI a recuperat relativ consistent informația publicată pe platformă.</li>
      </ul>
      <p>Nu putem concluziona automat:</p>
      <blockquote>„Dacă postezi pe Instagram, Meta AI te va recomanda.”</blockquote>
      <p>Aceasta ar fi o extrapolare nejustificată.</p>
      <h2>7. Ce înseamnă această schimbare pentru un business?</h2>
      <p><strong>Înseamnă că social media poate deveni parte din infrastructura informațională a entității, nu doar infrastructură de reach.</strong></p>
      <p>Până acum, o companie putea privi canalele astfel:</p>
      <pre><code>Website
= source of truth

Social media
= distribution</code></pre>
      <p>Realitatea emergentă este mai complexă:</p>
      <pre><code>Website
= controlled primary source

Social media
= distribution
+ community signal
+ current context
+ potential retrieval source
+ platform-native AI context</code></pre>
      <p>Asta nu înseamnă că site-ul trebuie abandonat în favoarea social media.</p>
      <p>Dimpotrivă, exact pentru că social content poate ajunge în sisteme AI, <strong>consistența dintre site, social profiles și alte surse devine mai importantă</strong>.</p>
      <p>Dacă:</p>
      <ul>
        <li>website-ul spune că programul este 09:00–18:00;</li>
        <li>Facebook spune 10:00–19:00;</li>
        <li>Google Business Profile spune 09:00–17:00;</li>
        <li>Instagram anunță temporar un program special;</li>
        <li>un review recent spune că locația era închisă;</li>
      </ul>
      <p>atunci un sistem AI are mai multe urme care trebuie reconciliate.</p>
      <p>Problema nu mai este doar „să existe conținut”.</p>
      <p>Problema devine:</p>
      <blockquote><strong>care sursă este actuală, autoritativă și relevantă pentru întrebarea utilizatorului?</strong></blockquote>
      <h3>Pentru business-uri, rezultă cinci obligații practice</h3>
      <ol>
        <li><strong>Păstrează o sursă primară clară.</strong><br />Informațiile structurale despre companie — identitate, servicii, politici, locații, date de contact — trebuie să aibă o sursă oficială controlată.</li>
        <li><strong>Folosește social media pentru informație temporală fără a crea contradicții.</strong><br />O ofertă sau modificare temporară trebuie marcată clar ca temporară și sincronizată cu sursele relevante.</li>
        <li><strong>Separă reach-ul de authority.</strong><br />O postare virală poate fi foarte vizibilă și totuși slabă ca dovadă pentru o afirmație factuală.</li>
        <li><strong>Testează provider cu provider.</strong><br />Nu presupune că vizibilitatea în Meta AI implică vizibilitate în ChatGPT, Claude, Gemini sau Grok.</li>
        <li><strong>Arhivează dovezile.</strong><br />Social content se modifică, dispare și se schimbă rapid. Pentru măsurare sunt necesare timestamp-uri, URL-uri, capturi și context.</li>
      </ol>
      <h2>Reach, authority și truth nu sunt același lucru</h2>
      <blockquote><strong>Reach ≠ Authority ≠ Truth.</strong></blockquote>
      <p>Că reach-ul și numărul de urmăritori nu produc automat vizibilitate AI am argumentat deja în <a href="/lab/articole/social-media-vizibilitate-ai">articolul despre urmăritori și vizibilitate AI</a>. Aici contează a doua parte a formulei: o postare cu milioane de vizualizări poate conține o afirmație imprecisă, iar un document oficial cu câteva sute de accesări poate fi sursa primară. Un sistem AI le poate recupera pe amândouă și trebuie să decidă — prin mecanisme pe care nu le controlăm complet — ce folosește în răspuns.</p>
      <p>Pentru AI Visibility Lab, aici apare o direcție importantă: nu este suficient să măsurăm dacă o entitate „apare”.</p>
      <p>Trebuie să măsurăm și:</p>
      <ul>
        <li><strong>din ce strat informațional apare;</strong></li>
        <li><strong>prin ce mecanism a fost accesat acel strat;</strong></li>
        <li><strong>ce sursă este atribuită;</strong></li>
        <li><strong>cât de actuală este;</strong></li>
        <li><strong>dacă sursa primară confirmă afirmația;</strong></li>
        <li><strong>dacă aceeași informație este consistentă între platforme.</strong></li>
      </ul>
      <p>Acesta este punctul în care social media intră natural în metodologia AI Visibility fără să fie confundată cu SEO și fără să fie tratată ca o lume separată de web.</p>
      <h2>Social media nu înlocuiește open web-ul. Îl completează și îl complică.</h2>
      <p>Este tentant să vedem fenomenul ca pe o tranziție simplă:</p>
      <pre><code>Google → TikTok → AI</code></pre>
      <p>Realitatea este mai puțin liniară.</p>
      <p>Oamenii caută informație pe motoare de căutare, pe social media, în marketplace-uri, în comunități și direct în aplicații AI. Sistemele AI, la rândul lor, pot avea acces la:</p>
      <ul>
        <li>open web;</li>
        <li>indexuri de search;</li>
        <li>API-uri;</li>
        <li>baze de date licențiate;</li>
        <li>conținut social nativ;</li>
        <li>conectori;</li>
        <li>date autorizate de utilizator.</li>
      </ul>
      <p>Prin urmare, „adevărul digital” despre o entitate este tot mai distribuit.</p>
      <p>Pentru o companie, asta înseamnă că reputația și reprezentarea sa pot fi reconstruite din:</p>
      <pre><code>Owned content
+
Institutional records
+
Editorial coverage
+
Reviews
+
Community discussions
+
Social posts
+
Platform-native data
+
Operational data</code></pre>
      <p>Nu toate sistemele au acces la toate aceste straturi.</p>
      <p>Aceasta este exact problema pe care seria de cinci articole a încercat să o definească.</p>
      <h2>De la machine accessibility la information topology</h2>
      <p>Dacă punem împreună cele cinci articole, traseul urmează modelul în șapte niveluri propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a>, iar fiecare articol al seriei a privit o parte a lui:</p>
      <table>
        <thead>
          <tr><th>Nivel</th><th>Întrebare</th><th>Articolele seriei care îl tratează</th></tr>
        </thead>
        <tbody>
          <tr><td>1. Presence</td><td>Există o urmă digitală clară a entității?</td><td><strong>5. acest articol</strong></td></tr>
          <tr><td>2. Discoverability</td><td>Poate sistemul găsi entitatea și sursele?</td><td><a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">2. Public nu mai înseamnă accesibil</a>, <a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">3. Site-ul nu dispare</a>, <strong>5. acest articol</strong></td></tr>
          <tr><td>3. Accessibility</td><td>Poate accesa efectiv informația?</td><td><a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">2. Public nu mai înseamnă accesibil</a>, <a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">3. Site-ul nu dispare</a>, <strong>5. acest articol</strong></td></tr>
          <tr><td>4. Understanding</td><td>O identifică și o interpretează corect?</td><td><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">3. Site-ul nu dispare</a>, <strong>5. acest articol</strong></td></tr>
          <tr><td>5. Verifiability</td><td>O poate confirma prin surse actuale?</td><td><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">3. Site-ul nu dispare</a>, <strong>5. acest articol</strong></td></tr>
          <tr><td>6. Recommendability</td><td>O poate include într-o recomandare relevantă?</td><td><a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">4. De la menționare la tranzacție</a></td></tr>
          <tr><td>7. Actionability</td><td>Poate executa următorul pas permis?</td><td><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">3. Site-ul nu dispare</a>, <a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">4. De la menționare la tranzacție</a></td></tr>
        </tbody>
      </table>
      <p>Peste aceste niveluri trece o întrebare care nu este un nivel în plus, ci o dimensiune a fiecăruia: <strong>din ce strat informațional provine răspunsul?</strong> Site propriu, social media, feed de produse, API sau conector — la fiecare nivel, rezultatul poate depinde de stratul la care sistemul are acces.</p>
      <p>Social media adaugă o dimensiune importantă pentru că introduce:</p>
      <ul>
        <li>viteză;</li>
        <li>actualitate;</li>
        <li>opinii;</li>
        <li>experiențe;</li>
        <li>context comunitar;</li>
        <li>informație distribuită în afara site-ului oficial.</li>
      </ul>
      <p>Aici apare o idee care merită explorată ulterior în AI Visibility Lab:</p>
      <h3>Information Topology</h3>
      <p>Nu ca protocol validat, ci ca întrebare metodologică:</p>
      <blockquote><strong>Cum este distribuită informația despre o entitate între surse, platforme și mecanisme de acces diferite și ce trasee poate folosi fiecare sistem AI pentru a o reconstrui?</strong></blockquote>
      <p>Această perspectivă mută analiza de la „optimizarea unei pagini” la <strong>cartografierea unui ecosistem informațional</strong>.</p>
      <h2>Concluzie: social media devine parte din infrastructura de răspuns</h2>
      <p>Meta documentează folosirea conținutului public pentru training și integrarea postărilor, Reels-urilor și recomandărilor comunităților în experiențele Meta AI.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-7">7</a></sup><sup><a href="#fn-8">8</a></sup><sup><a href="#fn-9">9</a></sup> X documentează accesul Grok la postări publice în timp real.<sup><a href="#fn-3">3</a></sup> OpenAI și Google au anunțat în 2024 acces programatic la Reddit prin parteneriate oficiale, iar continuitatea acordului cu Google era incertă în iulie 2026.<sup><a href="#fn-5">5</a></sup><sup><a href="#fn-6">6</a></sup><sup><a href="#fn-12">12</a></sup> LinkedIn folosește anumite categorii de conținut public pentru propriile modele generative, conform setărilor și regiunilor aplicabile.<sup><a href="#fn-2">2</a></sup></p>
      <p>Aceste exemple nu permit concluzia că:</p>
      <blockquote>„toate sistemele AI citesc toate rețelele sociale.”</blockquote>
      <p>Permit însă o concluzie mai precisă:</p>
      <blockquote><strong>social media a început deja să funcționeze, în anumite ecosisteme, ca strat informațional pentru AI.</strong></blockquote>
      <p>Pentru business-uri, consecința nu este „postează mai mult”.</p>
      <p>Consecința este:</p>
      <blockquote><strong>tratează fiecare urmă digitală ca pe o potențială componentă a reprezentării machine-readable a entității și măsoară separat cine o poate accesa, cum o poate recupera și în ce condiții o poate folosi.</strong></blockquote>
      <p>Aici se închide seria.</p>
      <p>Nu cu ideea că site-ul a murit, că social media a câștigat sau că agenții vor înlocui toate interfețele existente.</p>
      <p>Ci cu o concluzie mai utilă pentru AI Visibility:</p>
      <p><strong>o entitate nu mai este reprezentată digital într-un singur loc, iar fiecare sistem AI poate reconstrui o versiune diferită a aceleiași realități în funcție de sursele la care are acces.</strong></p>
      <hr />
      <h2>Seria „Machine accessibility și agentic web”</h2>
      <ol>
        <li><a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">De la web visibility la machine accessibility</a></li>
        <li><a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">Public nu mai înseamnă accesibil: de ce fiecare sistem AI vede un internet diferit</a></li>
        <li><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">Site-ul nu dispare. Își schimbă clientul</a></li>
        <li><a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility">De la menționare la tranzacție: ce înseamnă Agentic Visibility</a></li>
        <li><strong>Social media devine strat informațional pentru AI</strong> (acest articol)</li>
      </ol>
      <hr />
      <h2>Surse și metodologie</h2>
      <ol class="avl-footnotes">
        <li id="fn-1">Meta, <strong>Making AI Work Harder for Europeans</strong>, publicat 14 aprilie 2025 și actualizat 27 martie 2026. Meta spune că în UE folosește interacțiunile cu Meta AI și conținutul public distribuit de adulți pe produsele Meta pentru training, oferind mecanism de opoziție. <a href="https://about.fb.com/news/2025/04/making-ai-work-harder-for-europeans/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2025/04/making-ai-work-harder-for-europeans/</a></li>
        <li id="fn-2">LinkedIn Help, <strong>Update to our Terms and data use</strong>, consultat la 1 octombrie 2026. LinkedIn precizează că, în UE, SEE, Elveția, Regatul Unit, Canada și Hong Kong, poate utiliza detalii de profil și conținut public pentru antrenarea modelelor generative de creare de conținut, cu posibilitate de opt-out. <a href="https://www.linkedin.com/help/linkedin/answer/a8059228" target="_blank" rel="noopener noreferrer">linkedin.com/help/linkedin/answer/a8059228</a></li>
        <li id="fn-3">X Help Center, <strong>About Grok</strong>, consultat la 1 octombrie 2026. X documentează că Grok poate căuta postări publice X și poate efectua real-time web search în funcție de interogarea utilizatorului. <a href="https://help.x.com/en/using-x/about-grok" target="_blank" rel="noopener noreferrer">help.x.com/en/using-x/about-grok</a></li>
        <li id="fn-4">xAI, <strong>Grok Bot now works with X</strong>, 29 august 2026. xAI descrie integrarea prin care Grok Bot poate căuta postări, citi timeline-uri, verifica mentions și urmări trenduri după conectarea contului X. <a href="https://x.ai/news/grok-bot-and-x" target="_blank" rel="noopener noreferrer">x.ai/news/grok-bot-and-x</a></li>
        <li id="fn-5">OpenAI, <strong>OpenAI and Reddit Partnership</strong>, 16 mai 2024. OpenAI și Reddit anunță accesul OpenAI la Reddit Data API pentru conținut structurat și în timp real, cu scopul de a înțelege și afișa mai bine conținut Reddit în produsele OpenAI. <a href="https://openai.com/index/openai-and-reddit-partnership/" target="_blank" rel="noopener noreferrer">openai.com/index/openai-and-reddit-partnership/</a></li>
        <li id="fn-6">Google, <strong>An expanded partnership with Reddit</strong>, 22 februarie 2024. Google descrie accesul la Reddit Data API („real-time, structured, unique content”) și utilizarea conținutului pentru a-l „display, train on, and otherwise use”. <a href="https://blog.google/company-news/inside-google/company-announcements/expanded-reddit-partnership/" target="_blank" rel="noopener noreferrer">blog.google/company-news/inside-google/company-announcements/expanded-reddit-partnership/</a></li>
        <li id="fn-7">Meta, <strong>Introducing Muse Spark: Meta's Most Powerful Model Yet</strong>, 8 aprilie 2026, actualizat 12 mai 2026. Anunțul inițial descrie funcții Meta AI bazate pe postări publice și conținut din comunități și, ca direcție viitoare, integrarea Reels-urilor, fotografiilor și postărilor în răspunsuri; actualizarea din mai adaugă recomandări din Reels, căutare în Facebook Marketplace și navigarea conținutului public al unui brand sau creator. <a href="https://about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/04/introducing-muse-spark-meta-superintelligence-labs/</a></li>
        <li id="fn-8">Meta, <strong>Meta AI Doesn’t Just Think, It Acts</strong>, 24 iulie 2026. Meta spune că funcția de research poate sintetiza informații din web împreună cu ceea ce creatorii și comunitățile distribuie în aplicațiile Meta. <a href="https://about.fb.com/news/2026/07/meta-ai-muse-spark-doesnt-just-think-it-acts/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/07/meta-ai-muse-spark-doesnt-just-think-it-acts/</a></li>
        <li id="fn-9">Meta, <strong>New AI Tools to Help You Make Things Happen on Facebook</strong>, 15 iunie 2026. Meta descrie Facebook AI Mode ca furnizând răspunsuri bazate pe cultura, opiniile și recomandările distribuite public în aplicațiile companiei. <a href="https://about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/06/new-ai-tools-to-help-you-make-things-happen-on-facebook/</a></li>
        <li id="fn-10">Meta, <strong>Privacy Matters: Meta’s Generative AI Features</strong>, septembrie 2023, actualizat la 21 noiembrie 2025. Meta precizează că postările publice de pe Instagram și Facebook au făcut parte din datele folosite pentru antrenarea unor modele generative și separă explicit conținutul public de postările private. <a href="https://about.fb.com/news/2023/09/privacy-matters-metas-generative-ai-features/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2023/09/privacy-matters-metas-generative-ai-features/</a></li>
        <li id="fn-11">LinkedIn Help, <strong>LinkedIn and generative AI (GAI) FAQs</strong>, consultat la 1 octombrie 2026. LinkedIn enumeră member content precum postări, articole, poll responses, contribuții și comentarii ca tipuri de conținut care pot intra în anumite procese de antrenare unde legea și setările utilizatorului permit. <a href="https://www.linkedin.com/help/linkedin/answer/a5538339" target="_blank" rel="noopener noreferrer">linkedin.com/help/linkedin/answer/a5538339</a></li>
        <li id="fn-12">CNBC, <strong>Reddit stock sinks on report it may not renew Google AI content deal</strong>, 22 iulie 2026. Articolul relatează o știre Wall Street Journal potrivit căreia Reddit a discutat oprirea accesului Google la conținutul său pentru utilizări AI, în contextul reînnoirii acordului din 2024; nu confirmă încetarea acordului. <a href="https://www.cnbc.com/2026/07/22/reddit-stock-google-ai-content-deal.html" target="_blank" rel="noopener noreferrer">cnbc.com/2026/07/22/reddit-stock-google-ai-content-deal.html</a></li>
        <li id="fn-13">MediaPost, <strong>Reddit Ending Data-Scraping, Will Keep Existing Agreements</strong>, 1 octombrie 2026. Relatează anunțurile Reddit din r/modnews: retragerea feed-urilor RSS la 13 noiembrie 2026, eliminarea treptată a accesului public la vechiul Data API până în martie 2027 și faptul că acordurile existente cu Google și OpenAI nu sunt afectate. Publicație secundară; anunțul primar Reddit nu a putut fi accesat direct. <a href="https://www.mediapost.com/publications/article/418430/reddit-ending-data-scraping-will-keep-existing-ag.html" target="_blank" rel="noopener noreferrer">mediapost.com/publications/article/418430/reddit-ending-data-scraping-will-keep-existing-ag.html</a></li>
      </ol>
      <hr />
      <h2>Notă metodologică AI Visibility Lab</h2>
      <p>Acest articol separă explicit următoarele concepte:</p>
      <ul>
        <li><strong>training data</strong> — conținut folosit în dezvoltarea sau îmbunătățirea unui model;</li>
        <li><strong>retrieval</strong> — recuperarea unei surse sau informații la momentul răspunsului;</li>
        <li><strong>native platform context</strong> — acces oferit unui sistem AI de platforma în care este integrat;</li>
        <li><strong>API / licensed access</strong> — acces programatic sau contractual la date;</li>
        <li><strong>attribution</strong> — identificarea sursei sau autorului;</li>
        <li><strong>citation</strong> — oferirea unei trimiteri explicite către sursă;</li>
        <li><strong>recommendation</strong> — includerea entității într-un context de recomandare.</li>
      </ul>
      <p>Niciuna dintre aceste etape nu este tratată ca dovadă automată pentru următoarea.</p>
      <p>Termenul <strong>Social Source Accessibility</strong> este folosit ca un cadru exploratoriu AI Visibility Lab. Nu este prezentat ca standard industrial, metrică oficială sau disciplină validată. Rolul său este să permită o măsurare mai precisă a relației dintre platformele sociale și sistemele AI.</p>
      <p>Articolul nu afirmă că toate sistemele AI pot accesa toate rețelele sociale și nu deduce accesul acolo unde documentația publică nu îl confirmă.</p>
      <p>În special:</p>
      <ul>
        <li>faptul că Meta folosește conținut public pentru training nu demonstrează că fiecare postare poate fi recuperată într-un răspuns;</li>
        <li>faptul că LinkedIn folosește anumite date publice pentru propriile modele nu demonstrează accesul sistemelor AI externe la LinkedIn;</li>
        <li>parteneriatul OpenAI–Reddit nu demonstrează că fiecare răspuns ChatGPT folosește Reddit;</li>
        <li>accesul Grok la X nu trebuie generalizat la alte sisteme AI;</li>
        <li>accesul nativ Meta AI la conținut Meta nu trebuie generalizat la ChatGPT, Claude, Gemini, Copilot sau alte modele;</li>
        <li>o citare observată într-o rulare nu demonstrează consistență, ranking stabil sau recomandare;</li>
        <li>o postare cu engagement ridicat nu este automat mai autoritativă factual decât o sursă primară.</li>
      </ul>
      <h2>Notă de volatilitate</h2>
      <p>Politicile platformelor sociale privind antrenarea modelelor, funcțiile Meta AI și Facebook AI Mode, accesul Grok la X, acordurile Reddit cu Google și OpenAI și accesul public la API-ul Reddit se schimbă rapid și pot diferi în funcție de regiune. Afirmațiile despre produse, politici și acorduri au fost verificate la 2 octombrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 2 octombrie 2026.</em></p>
`;
