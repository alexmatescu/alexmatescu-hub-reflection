import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const deLaMentionareLaTranzactieAgenticVisibilityMeta: LabArticleMeta = {
  title:
    "De la menționare la tranzacție: ce înseamnă Agentic Visibility pentru un business",
  description:
    "Ce înseamnă Agentic Visibility și cum extinde problema GEO/AEO dincolo de citare și menționare, către descoperire, recomandare, interacțiune și tranzacție. Analizăm OpenAI Agentic Commerce Protocol, Google Universal Commerce Protocol, Meta Business Agent, Cloudflare Agentic Commerce și protocoalele de plăți pentru agenți.",
  canonical:
    "https://delamatescu.ro/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility",
  category: "AI Ecosystem",
  articleType: "Analiză",
  datePublished: "2026-10-02T09:09:00+03:00",
  dateModified: "2026-10-02",
  lastReviewed: "2026-10-01",
  about: [
    { name: "Machine Accessibility" },
    { name: "Agent Readiness" },
    { name: "Agentic Commerce" },
    { name: "Product Discovery" },
    { name: "Recommendation" },
    { name: "Transaction Readiness" },
    { name: "AI Retrieval" },
    { name: "Machine Payments" },
  ],
  keywords: [
    "AI Visibility",
    "Agentic Visibility",
    "agentic commerce",
    "AI agents",
    "Agentic Commerce Protocol",
    "ACP",
    "Universal Commerce Protocol",
    "UCP",
    "Meta Business Agent",
    "machine accessibility",
    "agent readiness",
    "AI recommendations",
    "AI product discovery",
    "AI transactions",
    "GEO",
    "AEO",
  ],
  citations: [
    {
      name: "OpenAI Developers — Agentic Commerce Protocol",
      url: "https://developers.openai.com/commerce",
    },
    {
      name: "OpenAI — Powering Product Discovery in ChatGPT",
      url: "https://openai.com/index/powering-product-discovery-in-chatgpt/",
    },
    {
      name: "OpenAI Developers — Get Started — Agentic Commerce",
      url: "https://developers.openai.com/commerce/guides/get-started",
    },
    {
      name: "Google for Developers — Universal Commerce Protocol (UCP)",
      url: "https://developers.google.com/universal-commerce-protocol",
    },
    {
      name: "Meta — Be There for Every Customer With Meta Business Agent",
      url: "https://about.fb.com/news/2026/06/meta-business-agent/",
    },
    {
      name: "OpenAI Developers — Overview — Agentic Commerce Product Feeds",
      url: "https://developers.openai.com/commerce/specs/file-upload/overview",
    },
    {
      name: "Cloudflare — Cloudflare Gives AI Agents an Identity and a Wallet",
      url: "https://www.cloudflare.com/en-ca/press/press-releases/2026/cloudflare-gives-ai-agents-an-identity-and-a-wallet/",
    },
    {
      name: "Stripe — Introducing the Machine Payments Protocol",
      url: "https://stripe.com/blog/machine-payments-protocol",
    },
    {
      name: "Cloudflare Developers — Agentic Payments",
      url: "https://developers.cloudflare.com/agents/tools/payments/",
    },
    {
      name: "OpenAI Help Center — Using shopping research in ChatGPT",
      url: "https://help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt",
    },
  ],
  faq: [],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const deLaMentionareLaTranzactieAgenticVisibilityHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-10-02T09:09:00+03:00">2 octombrie 2026</time> · Ultima verificare factuală: <time datetime="2026-10-01">1 octombrie 2026</time></p>

      <p><strong>Într-un sistem AI clasic, vizibilitatea poate însemna că un business este găsit, menționat, citat sau recomandat într-un răspuns. Într-un sistem agentic, traseul poate continua: agentul poate compara oferta, verifica prețul sau disponibilitatea, folosi un instrument oferit de business și, în anumite condiții, poate iniția sau finaliza o acțiune în numele utilizatorului.</strong></p>
      <p>Această extensie nu anulează SEO, GEO sau AEO. Le adaugă o problemă nouă: ce se întâmplă după ce sistemul AI a găsit și a înțeles entitatea?</p>
      <p>În <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol al seriei</a> am introdus ideea de <em>machine accessibility</em>. În <a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">al doilea</a> am separat informația publică de informația efectiv accesibilă unui anumit sistem. În <a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">al treilea</a> am analizat site-ul ca infrastructură pentru oameni, crawlere și agenți.</p>
      <p>Acum apare pasul următor:</p>
      <blockquote><strong>Ce înseamnă vizibilitatea atunci când AI-ul nu doar răspunde, ci poate acționa?</strong></blockquote>
      <p>În acest articol folosesc termenul <strong>Agentic Visibility</strong> ca un cadru exploratoriu AI Visibility Lab. Nu îl prezint ca standard industrial, metrică universală sau termen cu definiție unanim acceptată. Îl folosesc pentru a separa o realitate tehnică tot mai vizibilă: descoperirea, recomandarea, interacțiunea și tranzacția nu mai sunt neapărat etape administrate exclusiv de om.</p>
      <p>Agentic Visibility nu este un concept concurent cu <em>machine accessibility</em>. Machine accessibility, așa cum a fost definită în primul articol, descrie întregul traseu, de la prezența informației până la acțiune. Agentic Visibility numește perspectiva unui business asupra porțiunii finale a acestui traseu: recomandarea și acțiunea.</p>
      <p><strong>Unde se încadrează în serie:</strong> din modelul în șapte niveluri propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a> (Presence → Discoverability → Accessibility → Understanding → Verifiability → Recommendability → Actionability), acest articol tratează ultimele două niveluri, <strong>Recommendability</strong> și <strong>Actionability</strong>, din perspectiva unui business: ce se întâmplă după ce un sistem AI a găsit, accesat și înțeles entitatea.</p>
      <h2>Articolul în 7 idei</h2>
      <ol>
        <li><strong>Ce este Agentic Visibility?</strong> Capacitatea unei entități deja descoperite și înțelese de a fi recomandată și, acolo unde este permis, accesată operațional de un sistem AI care acționează pentru un utilizator.</li>
        <li><strong>De ce citarea nu mai este capătul traseului?</strong> Pentru că produse precum ChatGPT, Google AI surfaces și Meta Business Agent conectează deja conversația cu cataloage, sisteme și acțiuni comerciale.</li>
        <li><strong>Cum trecem de la recomandare la acțiune?</strong> Prin feed-uri structurate, API-uri, protocoale, tool-uri, autentificare și sisteme de plată — nu printr-un singur markup „pentru AI”.</li>
        <li><strong>Ce înseamnă agentic commerce în practică?</strong> Descoperire, comparație, coș, checkout, rezervare sau alte acțiuni executate cu ajutorul unui agent, în limitele infrastructurii și permisiunilor disponibile.</li>
        <li><strong>Trebuie toate business-urile să devină tranzacționabile de agenți?</strong> Nu. Actionability trebuie să corespundă modelului de business, riscului și nevoii utilizatorului.</li>
        <li><strong>Cum măsurăm Agentic Visibility etapă cu etapă?</strong> Separând etapele și dovezile: presence, accessibility, retrieval, understanding, recommendability, interaction și transaction.</li>
        <li><strong>Ce ar trebui să facă un business acum?</strong> Să inventarieze traseul dintre informație și acțiune și să testeze mecanismele care au relevanță reală pentru propriul model operațional.</li>
      </ol>
      <h2>1. Ce este Agentic Visibility?</h2>
      <p><strong>Agentic Visibility descrie, în cadrul exploratoriu propus aici, măsura în care o entitate, odată descoperită și reprezentată corect, poate fi recomandată și accesată operațional de un sistem AI care nu doar formulează un răspuns, ci poate folosi instrumente sau executa acțiuni autorizate în numele unui utilizator.</strong></p>
      <p>În web-ul clasic, obiectivul unui business era adesea clickul și vizita pe site. Într-un answer engine, traseul se comprimă până la menționare, citare sau recomandare, iar decizia rămâne la om. Ambele trasee au fost descrise în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol al seriei</a>.</p>
      <p>Într-un sistem agentic, răspunsul poate deveni doar o etapă intermediară:</p>
      <pre><code>Business / sources / feeds / tools
   ↓
AI discovery and retrieval
   ↓
Entity understanding
   ↓
Comparison / recommendation
   ↓
Authorized interaction
   ↓
Transaction / booking / submission / update
   ↓
Human outcome</code></pre>
      <p>Asta schimbă natura problemei.</p>
      <p>Un restaurant poate fi menționat într-un răspuns și totuși agentul să nu poată verifica meniul actual sau rezerva o masă. Un magazin poate fi recomandat, dar catalogul său să nu furnizeze stocul și prețurile într-o formă utilizabilă de sistemul respectiv. Un organizator de evenimente poate apărea în rezultate, dar vânzarea biletelor să depindă de o platformă separată pe care agentul nu o poate accesa.</p>
      <p>Prin urmare:</p>
      <blockquote><strong>Visibility nu este același lucru cu accessibility, iar accessibility nu este același lucru cu actionability.</strong></blockquote>
      <p>Aceasta este delimitarea centrală a articolului.</p>
      <h2>2. De ce citarea și menționarea nu mai sunt capătul traseului?</h2>
      <p><strong>Pentru că infrastructura AI începe să conecteze descoperirea informației cu date structurate și acțiuni comerciale.</strong> Această schimbare este documentată în mai multe ecosisteme, nu doar într-un singur produs.</p>
      <p>OpenAI descrie <strong>Agentic Commerce Protocol (ACP)</strong> drept infrastructura dintre comercianți și utilizatorii ChatGPT. Documentația precizează că ACP permite ChatGPT să primească date structurate de catalog, să înțeleagă inventarul comercianților și să afișeze produse relevante în context.<sup><a href="#fn-1">1</a></sup></p>
      <p>În martie 2026, OpenAI a extins ACP pentru <strong>product discovery</strong>, astfel încât comercianții să poată furniza informații mai complete și mai actualizate pentru experiențele de shopping din ChatGPT.<sup><a href="#fn-2">2</a></sup> Documentația actuală pentru onboarding spune că feed-urile pot transmite titluri, descrieri, imagini, preț și disponibilitate și că onboarding-ul este, la data consultării, disponibil pentru parteneri aprobați.<sup><a href="#fn-3">3</a></sup></p>
      <p>Google dezvoltă în paralel <strong>Universal Commerce Protocol (UCP)</strong>, prezentat ca un standard deschis pentru agentic commerce. Documentația oficială îl leagă de experiențe din AI Mode și Gemini și descrie funcții precum cart, checkout, order management și, pentru anumite verticale, booking cu prețuri și disponibilitate în timp real. La data consultării, accesul comercianților pentru Shopping și Lodging se face pe bază de waitlist.<sup><a href="#fn-4">4</a></sup></p>
      <p>Meta Business Agent, ale cărui capabilități au fost descrise în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol al seriei</a>, oferă o altă arhitectură: un agent al business-ului, prezent pe WhatsApp, Messenger și Instagram. Pentru tema de față contează că, potrivit Meta, platforma poate conecta agenții la sisteme precum Shopify sau Zendesk pentru a executa acțiuni în numele business-ului.<sup><a href="#fn-5">5</a></sup></p>
      <p>Aceste exemple nu demonstrează că orice utilizator, orice comerciant și orice agent pot executa deja orice tranzacție. Unele funcții au acces limitat, onboarding, waitlist sau cerințe specifice.</p>
      <p>Dar demonstrează ceva suficient de important pentru metodologia AI Visibility:</p>
      <blockquote><strong>Relația dintre business și sistemul AI începe să includă o infrastructură operațională, nu doar una informațională.</strong></blockquote>
      <h2>3. Cum se trece de la recomandare la acțiune?</h2>
      <p><strong>Nu printr-un singur semnal SEO sau GEO, ci printr-un lanț de mecanisme care trebuie să funcționeze împreună.</strong></p>
      <p>Pentru un produs fizic, de exemplu, traseul poate presupune:</p>
      <pre><code>Entity identified
      ↓
Product catalog available
      ↓
Attributes understood
      ↓
Price and availability current
      ↓
Merchant selected
      ↓
Checkout capability available
      ↓
Identity / authorization
      ↓
Payment
      ↓
Order confirmation</code></pre>
      <p>Fiecare etapă poate folosi infrastructură diferită.</p>
      <h3>Feed-uri și cataloage</h3>
      <p>OpenAI permite comercianților eligibili să transmită date structurate prin feed-uri. Documentația feed-urilor recomandă publicarea unui snapshot complet al catalogului, tratat ca sursă de adevăr, cel puțin o dată pe zi.<sup><a href="#fn-3">3</a></sup><sup><a href="#fn-6">6</a></sup></p>
      <p>Google folosește de asemenea Merchant Center și UCP pentru experiențe de agentic shopping, iar documentația UCP spune că integrarea poate folosi feed-urile comerciale existente pentru discovery și apoi operații suplimentare pentru checkout sau alte acțiuni.<sup><a href="#fn-4">4</a></sup></p>
      <h3>API-uri și tool-uri</h3>
      <p>Un agent nu trebuie să extragă totul din HTML. API-urile, MCP, WebMCP și alte mecanisme pot oferi acces structurat la date și funcții. Acest lucru a fost analizat în <a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">articolul precedent al seriei</a>.</p>
      <h3>Identitate și autorizare</h3>
      <p>Când agentul trebuie să facă ceva cu efect real, apare întrebarea: <strong>cine este agentul și în numele cui acționează?</strong></p>
      <p>Cloudflare a anunțat în august 2026 instrumente pentru identitatea și portofelele agenților, cu obiectivul de a permite business-urilor să distingă agenți legitimi și de a permite agenților să efectueze plăți în limite stabilite de utilizator.<sup><a href="#fn-7">7</a></sup></p>
      <h3>Plăți</h3>
      <p>Stripe și Tempo au lansat în martie 2026 <strong>Machine Payments Protocol (MPP)</strong>, descris drept un standard deschis pentru plăți internet-native între agenți și servicii.<sup><a href="#fn-8">8</a></sup> Cloudflare documentează la rândul său suport pentru plăți agentice prin protocoale bazate pe HTTP <code>402 Payment Required</code>, inclusiv x402 și MPP.<sup><a href="#fn-9">9</a></sup></p>
      <p>Important: existența acestor mecanisme nu înseamnă că ele sunt universal adoptate sau interoperabile în toate combinațiile de platforme. Ele sunt dovezi ale unei direcții de infrastructură, nu dovada că „web-ul agentic” este deja un sistem unificat.</p>
      <h2>4. Ce înseamnă agentic commerce în practică?</h2>
      <p><strong>Agentic commerce descrie situații în care un sistem AI participă activ la traseul comercial al utilizatorului — de la descoperire și comparație până la cumpărare, rezervare sau post-purchase — folosind date și funcții oferite de comercianți și platforme.</strong></p>
      <p>Pentru un utilizator, experiența poate arăta simplu:</p>
      <blockquote>„Găsește-mi un laptop de 14 inci, sub 6.000 lei, bun pentru programare și cu autonomie mare.”</blockquote>
      <p>Dar în spatele răspunsului pot exista mai multe etape:</p>
      <ol>
        <li>interpretarea criteriilor;</li>
        <li>identificarea produselor relevante;</li>
        <li>accesarea datelor comercianților;</li>
        <li>comparația atributelor;</li>
        <li>filtrarea disponibilității și prețurilor;</li>
        <li>recomandarea unor opțiuni;</li>
        <li>eventual inițierea unei achiziții.</li>
      </ol>
      <p>OpenAI spune că shopping research poate utiliza atât date comerciale furnizate prin ACP, cât și informații publice despre produse și alte surse retail relevante.<sup><a href="#fn-10">10</a></sup></p>
      <p>Google descrie UCP ca infrastructură pentru experiențe care pot include descoperire, cart, checkout și order management, iar pentru lodging include explicit verificări de preț și disponibilitate în timp real.<sup><a href="#fn-4">4</a></sup></p>
      <p>Meta Business Agent operează din cealaltă direcție: agentul reprezintă business-ul în conversație, nu utilizatorul.<sup><a href="#fn-5">5</a></sup></p>
      <p>Așadar, putem avea două arhitecturi complementare:</p>
      <pre><code>User Agent → Business</code></pre>
      <p>și</p>
      <pre><code>User → Business Agent</code></pre>
      <p>Într-un ecosistem mai matur, pot apărea și interacțiuni agent-to-agent. Dar acestea trebuie demonstrate concret pentru fiecare implementare; nu trebuie presupus că toate produsele enumerate aici comunică direct între ele.</p>
      <h2>5. Trebuie toate business-urile să devină tranzacționabile pentru agenți?</h2>
      <p><strong>Nu. Agentic Visibility nu trebuie transformată într-un maturity ladder în care „mai multă automatizare” înseamnă automat „mai bine”.</strong></p>
      <p>Un publisher poate avea nevoie să fie:</p>
      <ul>
        <li>identificabil;</li>
        <li>accesibil;</li>
        <li>citabil;</li>
        <li>corect atribuit.</li>
      </ul>
      <p>Nu are neapărat nevoie ca un agent să execute o tranzacție.</p>
      <p>Un cabinet medical poate avea nevoie ca serviciile, locația și programul să fie corect reprezentate, iar programările să fie posibile doar printr-un sistem controlat și cu confirmare umană.</p>
      <p>Un retailer poate avea motive economice pentru un traseu mult mai adânc:</p>
      <pre><code>Discover
   ↓
Compare
   ↓
Recommend
   ↓
Add to cart
   ↓
Checkout
   ↓
Order management</code></pre>
      <p>Un business B2B poate avea un traseu diferit:</p>
      <pre><code>Discover
   ↓
Qualify
   ↓
Retrieve technical information
   ↓
Request quote
   ↓
Book meeting</code></pre>
      <p>De aceea, <em>actionability</em> trebuie evaluată în raport cu scopul.</p>
      <p>Pentru AI Visibility Lab, un principiu util este:</p>
      <blockquote><strong>Nu optimizăm pentru cea mai mare autonomie posibilă. Optimizăm pentru nivelul de acces și acțiune pe care business-ul îl poate susține corect, sigur și măsurabil.</strong></blockquote>
      <p>Această delimitare este importantă și pentru E-E-A-T. Un sistem care poate executa acțiuni pe baza unor date incorecte amplifică problema, nu o rezolvă. Prețurile, stocurile, disponibilitatea, condițiile comerciale și politicile trebuie să aibă surse actuale și responsabile.</p>
      <h2>6. Cum măsurăm Agentic Visibility etapă cu etapă?</h2>
      <p><strong>Separând etapele și măsurând fiecare etapă prin dovezi observabile.</strong> Nu este nevoie de un „Agentic Visibility Score” opac pentru a începe analiza.</p>
      <p>Un cadru exploratoriu poate arăta astfel:</p>
      <table>
        <thead>
          <tr><th>Etapă</th><th>Întrebare</th><th>Exemplu de dovadă</th><th>Ce nu demonstrează automat</th></tr>
        </thead>
        <tbody>
          <tr><td>Presence</td><td>Entitatea și oferta există în sursele relevante?</td><td>pagină, profil, catalog, feed</td><td>Că un AI le va găsi</td></tr>
          <tr><td>Accessibility</td><td>Sistemul țintă poate ajunge la sursă?</td><td>request, crawler logs, API access</td><td>Că o va selecta</td></tr>
          <tr><td>Retrieval</td><td>Informația este recuperată într-un test datat?</td><td>răspuns, citare, request log</td><td>Că va fi recuperată constant</td></tr>
          <tr><td>Understanding</td><td>Entitatea, produsul și atributele sunt interpretate corect?</td><td>comparație cu sursa primară</td><td>Că va fi recomandată</td></tr>
          <tr><td>Recommendability</td><td>Entitatea apare într-un context relevant de recomandare?</td><td>query panel + răspuns arhivat</td><td>Că există o preferință stabilă</td></tr>
          <tr><td>Interaction</td><td>Agentul poate folosi un tool sau mecanism autorizat?</td><td>tool call / API log / confirmation</td><td>Că poate tranzacționa</td></tr>
          <tr><td>Transaction</td><td>Operațiunea poate fi finalizată în condițiile testului?</td><td>receipt, booking ID, order ID</td><td>Că toate tranzacțiile vor reuși</td></tr>
        </tbody>
      </table>
      <p>Presence, Accessibility, Understanding și Recommendability corespund nivelurilor cu același nume din modelul propus în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol</a>. Retrieval detaliază nivelul Accessibility, iar Interaction și Transaction împart nivelul Actionability în două trepte care se măsoară separat.</p>
      <p>Această separare este importantă deoarece piața poate comprima ușor tot traseul într-o singură afirmație: „suntem optimizați pentru AI”.</p>
      <p>Dar două business-uri pot avea profiluri complet diferite:</p>
      <pre><code>Business A
High recommendation visibility
Low transaction accessibility</code></pre>
      <pre><code>Business B
Low open-web visibility
High platform-native transaction capability</code></pre>
      <p>Niciunul dintre aceste profile nu poate fi interpretat corect fără context.</p>
      <h3>Un posibil traseu de măsurare AVL</h3>
      <p>Fără a-l transforma încă într-un protocol validat, AI Visibility Lab poate documenta experimental folosind lanțul prezentat în <a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">al doilea articol al seriei</a>: <strong>Raw Evidence → Indexed Evidence → Observation → Measurement</strong>, iar dincolo de granița metodologică, <strong>Interpretation</strong>.</p>
      <p>Exemplu ipotetic (cifrele sunt ilustrative, nu rezultate măsurate de AI Visibility Lab):</p>
      <ul>
        <li><strong>Raw Evidence:</strong> feed-ul comerciantului conține prețul și disponibilitatea produsului.</li>
        <li><strong>Indexed Evidence:</strong> snapshot-ul feed-ului este arhivat cu timestamp și hash.</li>
        <li><strong>Observation:</strong> ChatGPT afișează produsul cu prețul corect într-o rulare documentată.</li>
        <li><strong>Measurement:</strong> 8 din 10 rulări din același panel au recuperat produsul; 6 au afișat prețul corect.</li>
        <li><strong>Interpretation:</strong> integrarea pare să susțină recuperarea relativ consistentă în condițiile testate.</li>
      </ul>
      <p>Interpretarea nu trebuie să devină:</p>
      <blockquote>„ACP garantează recomandarea produsului.”</blockquote>
      <p>Aceasta ar depăși dovezile.</p>
      <h2>7. Ce ar trebui să facă un business acum?</h2>
      <p><strong>Să cartografieze drumul dintre informație și acțiune înainte să implementeze infrastructură nouă.</strong></p>
      <p>Un audit practic poate începe cu șapte întrebări:</p>
      <ol>
        <li><strong>Ce trebuie să poată găsi un sistem AI despre noi?</strong></li>
        <li><strong>Care este sursa primară pentru fiecare informație importantă?</strong></li>
        <li><strong>Ce informații trebuie să fie actualizate aproape în timp real?</strong></li>
        <li><strong>Prin ce mecanisme poate ajunge sistemul relevant la ele: web, feed, API, connector, tool?</strong></li>
        <li><strong>Ce acțiuni merită automatizate și ce acțiuni trebuie să rămână confirmate de om?</strong></li>
        <li><strong>Cum demonstrăm că datele și acțiunile sunt corecte?</strong></li>
        <li><strong>Ce măsurăm separat: citare, recomandare, interacțiune sau conversie?</strong></li>
      </ol>
      <p>Pentru un magazin, acest audit poate scoate la iveală că principala problemă nu este pagina de categorie, ci sincronizarea stocului.</p>
      <p>Pentru un organizator de evenimente, poate fi disponibilitatea biletelor în timp real.</p>
      <p>Pentru un furnizor B2B, poate fi documentația tehnică și traseul către request-for-quote.</p>
      <p>Pentru un business local, poate fi mult mai importantă consistența numelui, adresei, programului, serviciilor și sistemului de programări decât implementarea imediată a unui protocol de agentic commerce.</p>
      <p><strong>Agentic Visibility începe cu acuratețea informației, nu cu tranzacția.</strong></p>
      <h2>De la SEO la AI Visibility și mai departe: ce se schimbă și ce rămâne</h2>
      <p>Un protocol nou nu îl înlocuiește pe cel precedent. Relația dintre SEO, AEO, GEO și machine accessibility a fost descrisă în <a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">primul articol al seriei</a>. Machine accessibility cuprinde întregul traseu, de la accesul sistemului țintă la informație până la acțiune. Agentic Visibility se concentrează pe capătul acestui traseu: <strong>poate sistemul să facă următorul pas?</strong></p>
      <p>Pe acest traseu, recomandarea trebuie tratată cu atenție deosebită. Un business nu poate controla legitim dacă un sistem AI îl recomandă într-o situație concretă. Poate însă îmbunătăți calitatea, consistența, accesibilitatea și actualitatea informației pe care sistemele o pot utiliza, poate furniza date structurate acolo unde există mecanisme documentate și poate măsura rezultatele fără a atribui cauzalitate acolo unde nu există dovadă.</p>
      <p>Această disciplină este una dintre diferențele importante dintre optimizarea verificabilă și promisiunile de marketing.</p>
      <h2>Ce schimbă această perspectivă pentru AI Visibility Lab?</h2>
      <p>Până acum, un audit de vizibilitate AI se poate concentra firesc asupra întrebărilor:</p>
      <ul>
        <li>apare entitatea?</li>
        <li>este identificată corect?</li>
        <li>este citată?</li>
        <li>este menționată?</li>
        <li>este recomandată într-un anumit query panel?</li>
        <li>care sunt sursele folosite?</li>
      </ul>
      <p>Într-un ecosistem agentic, apar întrebări suplimentare:</p>
      <ul>
        <li>informația critică este suficient de actuală pentru acțiune?</li>
        <li>sistemul poate verifica disponibilitatea sau starea curentă?</li>
        <li>există un mecanism autorizat pentru interacțiune?</li>
        <li>poate agentul demonstra identitatea sau mandatul său?</li>
        <li>poate tranzacția fi confirmată și auditată?</li>
        <li>ce se întâmplă când datele publice și datele operaționale se contrazic?</li>
      </ul>
      <p>Aici apare o frontieră metodologică importantă.</p>
      <p><strong>Citation visibility</strong> și <strong>transaction capability</strong> nu trebuie amestecate în aceeași metrică doar pentru că ambele implică AI.</p>
      <p>Un business poate fi bine reprezentat informațional și deloc tranzacționabil prin agenți. Altul poate avea integrare comercială excelentă într-o platformă, dar vizibilitate slabă în open web.</p>
      <p>AI Visibility Lab trebuie să poată descrie ambele situații fără să le reducă la un singur scor.</p>
      <h2>Concluzie: vizibilitatea nu se termină când business-ul apare în răspuns</h2>
      <p>În web-ul clasic, drumul către conversie era în mare parte parcurs de om. Motorul de căutare îl ajuta să găsească pagina, dar comparația, selectarea, formularul, coșul și plata îi reveneau de regulă utilizatorului.</p>
      <p>Agenții AI comprimă acest traseu.</p>
      <p>OpenAI construiește infrastructură pentru product discovery și commerce prin ACP.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup> Google dezvoltă UCP pentru discovery, checkout și alte operații pe suprafețe AI.<sup><a href="#fn-4">4</a></sup> Meta Business Agent conectează conversațiile cu acțiuni ale business-ului.<sup><a href="#fn-5">5</a></sup> Stripe și Cloudflare construiesc mecanisme pentru identitatea și plățile agenților.<sup><a href="#fn-7">7</a></sup><sup><a href="#fn-8">8</a></sup><sup><a href="#fn-9">9</a></sup></p>
      <p>Niciuna dintre aceste evoluții nu demonstrează că toate business-urile trebuie să implementeze imediat agentic commerce.</p>
      <p>Dar împreună arată o schimbare suficient de clară pentru a fi măsurată:</p>
      <pre><code>Can AI find the business?
        ↓
Can AI understand the business?
        ↓
Can AI represent it correctly?
        ↓
Can AI recommend it in the relevant context?
        ↓
Can AI interact with it?
        ↓
Can an authorized AI agent complete the relevant action?</code></pre>
      <p><strong>De la menționare la tranzacție nu este o singură optimizare. Este un lanț de capabilități diferite, fiecare cu propriile dovezi, limite și riscuri.</strong></p>
      <p>Pentru AI Visibility Lab, acesta este sensul util al termenului <em>Agentic Visibility</em>: nu promisiunea că un business va fi „ales de AI”, ci capacitatea de a măsura cât din porțiunea finală a traseului, de la recomandare la acțiune, este realmente accesibilă, corectă și verificabilă pentru sistemele relevante.</p>
      <p>În ultimul articol al seriei vom privi un strat informațional pe care business-ul nu îl controlează direct: <strong><a href="/lab/articole/social-media-devine-strat-informational-pentru-ai">„Social media devine strat informațional pentru AI.”</a></strong></p>
      <hr />
      <h2>Seria „Machine accessibility și agentic web”</h2>
      <ol>
        <li><a href="/lab/articole/de-la-web-visibility-la-machine-accessibility">De la web visibility la machine accessibility</a></li>
        <li><a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">Public nu mai înseamnă accesibil: de ce fiecare sistem AI vede un internet diferit</a></li>
        <li><a href="/lab/articole/site-ul-nu-dispare-isi-schimba-clientul">Site-ul nu dispare. Își schimbă clientul</a></li>
        <li><strong>De la menționare la tranzacție: ce înseamnă Agentic Visibility</strong> (acest articol)</li>
        <li><a href="/lab/articole/social-media-devine-strat-informational-pentru-ai">Social media devine strat informațional pentru AI</a></li>
      </ol>
      <hr />
      <h2>Surse și metodologie</h2>
      <ol class="avl-footnotes">
        <li id="fn-1">OpenAI Developers, <strong>Agentic Commerce Protocol</strong>, documentație oficială, consultată la 1 octombrie 2026 (descrierea ACP confirmată prin indexul de căutare; pagina își încarcă dinamic o parte din conținut). OpenAI descrie ACP drept stratul de conexiune dintre comercianți și utilizatorii ChatGPT, pentru ingestia datelor structurate de catalog și afișarea produselor relevante. <a href="https://developers.openai.com/commerce" target="_blank" rel="noopener noreferrer">developers.openai.com/commerce</a></li>
        <li id="fn-2">OpenAI, <strong>Powering Product Discovery in ChatGPT</strong>, 24 martie 2026 (pagina blochează accesul automat; conținutul a fost confirmat la 1 octombrie 2026 prin indexul de căutare și relatări de presă). Articolul anunță extinderea ACP pentru product discovery și experiențe de shopping mai bogate în ChatGPT. <a href="https://openai.com/index/powering-product-discovery-in-chatgpt/" target="_blank" rel="noopener noreferrer">openai.com/index/powering-product-discovery-in-chatgpt/</a></li>
        <li id="fn-3">OpenAI Developers, <strong>Get Started — Agentic Commerce</strong>, documentație oficială, consultată la 1 octombrie 2026. Pagina descrie onboarding-ul prin product feeds și precizează că accesul pentru onboarding este disponibil partenerilor aprobați la data consultării. <a href="https://developers.openai.com/commerce/guides/get-started" target="_blank" rel="noopener noreferrer">developers.openai.com/commerce/guides/get-started</a></li>
        <li id="fn-4">Google for Developers, <strong>Universal Commerce Protocol (UCP)</strong>, documentație oficială, consultată la 1 octombrie 2026. Pagina descrie UCP ca standard deschis pentru agentic commerce și enumeră funcții precum cart, checkout, order management și booking pe anumite suprafețe Google AI; accesul pentru Shopping și Lodging era pe bază de waitlist la data consultării. <a href="https://developers.google.com/universal-commerce-protocol" target="_blank" rel="noopener noreferrer">developers.google.com/universal-commerce-protocol</a></li>
        <li id="fn-5">Meta, <strong>Be There for Every Customer With Meta Business Agent</strong>, 3 iunie 2026. Meta descrie funcții precum recomandări de produse, programări, calificarea lead-urilor și vânzări și afirmă că Business Agent Platform se poate conecta la sisteme externe. <a href="https://about.fb.com/news/2026/06/meta-business-agent/" target="_blank" rel="noopener noreferrer">about.fb.com/news/2026/06/meta-business-agent/</a></li>
        <li id="fn-6">OpenAI Developers, <strong>Overview — Agentic Commerce Product Feeds</strong>, documentație oficială, consultată la 1 octombrie 2026. Pagina descrie livrarea de snapshot-uri complete de catalog, tratate ca sursă de adevăr, cu o cadență recomandată de cel puțin o dată pe zi. <a href="https://developers.openai.com/commerce/specs/file-upload/overview" target="_blank" rel="noopener noreferrer">developers.openai.com/commerce/specs/file-upload/overview</a></li>
        <li id="fn-7">Cloudflare, <strong>Cloudflare Gives AI Agents an Identity and a Wallet</strong>, 4 august 2026. Comunicatul descrie Cloudflare Wallets și cloudflare.pay pentru identitatea și plățile agenților; afirmațiile despre beneficii sunt tratate în articol drept poziția furnizorului, nu drept validare independentă. <a href="https://www.cloudflare.com/en-ca/press/press-releases/2026/cloudflare-gives-ai-agents-an-identity-and-a-wallet/" target="_blank" rel="noopener noreferrer">cloudflare.com/en-ca/press/press-releases/2026/cloudflare-gives-ai-agents-an-identity-and-a-wallet/</a></li>
        <li id="fn-8">Stripe, <strong>Introducing the Machine Payments Protocol</strong>, 18 martie 2026. Stripe și Tempo prezintă MPP ca standard deschis pentru plăți internet-native destinate agenților și serviciilor. <a href="https://stripe.com/blog/machine-payments-protocol" target="_blank" rel="noopener noreferrer">stripe.com/blog/machine-payments-protocol</a></li>
        <li id="fn-9">Cloudflare Developers, <strong>Agentic Payments</strong>, documentație oficială, actualizată 5 august 2026 și consultată la 1 octombrie 2026. Pagina documentează fluxuri de plată bazate pe HTTP 402 și suport pentru x402 și MPP în Agents SDK. <a href="https://developers.cloudflare.com/agents/tools/payments/" target="_blank" rel="noopener noreferrer">developers.cloudflare.com/agents/tools/payments/</a></li>
        <li id="fn-10">OpenAI Help Center, <strong>Using shopping research in ChatGPT</strong>, documentație oficială, consultată prin indexul de căutare la 1 octombrie 2026 (pagina blochează accesul automat). Pagina precizează că shopping research poate utiliza merchant product data furnizată prin ACP, informații publice despre produse și alte surse retail relevante. <a href="https://help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt" target="_blank" rel="noopener noreferrer">help.openai.com/en/articles/12911370-using-shopping-research-in-chatgpt</a></li>
      </ol>
      <hr />
      <h2>Notă metodologică AI Visibility Lab</h2>
      <p>Acest articol separă <strong>descoperirea</strong>, <strong>recuperarea</strong>, <strong>reprezentarea</strong>, <strong>recomandarea</strong>, <strong>interacțiunea</strong> și <strong>tranzacția</strong>. Niciuna dintre etape nu este tratată ca dovadă automată pentru următoarea.</p>
      <p>Termenul <strong>Agentic Visibility</strong> este utilizat ca un cadru exploratoriu AI Visibility Lab. Articolul nu afirmă că termenul este un standard oficial, o disciplină matură sau o metrică recunoscută de industrie. Definiția propusă aici este operațională și trebuie validată prin măsurători și studii de caz.</p>
      <p>Existența unui product feed, API, ACP integration, UCP integration, MCP server, business agent sau protocol de plată nu este prezentată ca garanție de:</p>
      <ul>
        <li>indexare;</li>
        <li>ranking;</li>
        <li>citare;</li>
        <li>menționare;</li>
        <li>recomandare;</li>
        <li>preferință a sistemului AI;</li>
        <li>conversie;</li>
        <li>succes tranzacțional.</li>
      </ul>
      <p>Afirmațiile furnizorilor despre propriile produse sunt atribuite explicit și nu sunt tratate ca validări independente. Unde o funcție este limitată la parteneri aprobați, waitlist, anumite suprafețe sau configurații, această limitare trebuie păstrată.</p>
      <h2>Notă de volatilitate</h2>
      <p>Protocoalele de agentic commerce (ACP, UCP, MPP, x402), condițiile de acces pentru comercianți (parteneri aprobați, waitlist) și disponibilitatea funcțiilor pe suprafețele OpenAI, Google, Meta și Cloudflare se schimbă rapid și pot fi diferite la data lecturii. Afirmațiile despre produse și protocoale au fost verificate la 1 octombrie 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 1 octombrie 2026.</em></p>
`;
