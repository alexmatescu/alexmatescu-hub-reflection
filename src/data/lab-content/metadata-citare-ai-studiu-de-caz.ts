/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const metadataCitareAiStudiuDeCazMeta = {
  title:
    "Metadata și citarea AI: ce poate demonstra o citare identică și unde începe inferența",
  description:
    "Studiu de caz AI Visibility Lab: după actualizarea metadata, un sistem AI a citat textual formularea publicată pe delamatescu.ro. Ce demonstrează exact match-ul, ce nu demonstrează și cum transformi observația într-un experiment reproductibil.",
  canonical:
    "https://delamatescu.ro/lab/articole/metadata-citare-ai-studiu-de-caz",
  datePublished: "2026-08-05",
  dateModified: "2026-08-10",
  lastReviewed: "2026-08-17",
  about: [
    { name: "Metadata" },
    { name: "AI citation" },
    { name: "Structured data" },
    { name: "Generative Engine Optimization" },
  ],
  keywords: [
    "metadata SEO",
    "citare AI",
    "exact match citare",
    "JSON-LD structured data",
    "meta description",
    "Generative Engine Optimization",
  ],
  citations: [
    {
      name: "OpenAI Help Center — Publishers and Developers FAQ",
      url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
    },
    {
      name: "Lovable Documentation — Optimize your app for SEO and AI search",
      url: "https://docs.lovable.dev/features/seo-aeo",
    },
    {
      name: "Google Search Central — Influencing your title links in search results",
      url: "https://developers.google.com/search/docs/appearance/title-link",
    },
    {
      name: "Google Search Central — Control your snippets in search results",
      url: "https://developers.google.com/search/docs/appearance/snippet",
    },
    {
      name: "Google Search Central — Intro to How Structured Data Markup Works",
      url: "https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data",
    },
    {
      name: "Google Search Central — How to specify a canonical URL",
      url: "https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls",
    },
    {
      name: "Google Search Central — Meta tags and attributes that Google supports",
      url: "https://developers.google.com/search/docs/crawling-indexing/special-tags",
    },
    {
      name: "Google Search Central — General Structured Data Guidelines",
      url: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies",
    },
  ],
  faq: [
    {
      q: "Metadatele pot apărea în răspunsuri AI?",
      a: "Da. Studiul de caz documentează o reproducere textuală a unei formulări publicate pe delamatescu.ro. Totuși, acest lucru nu demonstrează că meta description este un factor direct de citare sau că toate motoarele procesează metadata în același mod.",
    },
    {
      q: "Ce este o frază-trasor?",
      a: "Este un marker experimental: o formulare distinctivă publicată într-o locație controlată pentru a testa dacă reapare ulterior într-un răspuns. Un exact match oferă evidență mai puternică decât o parafrază, dar nu identifică singur ruta tehnică prin care sistemul a obținut textul.",
    },
    {
      q: "Există o limită de 60 de caractere pentru title și 155 pentru meta description?",
      a: "Nu. Google spune că nu există limite fixe pentru aceste câmpuri. Title link-urile și snippets sunt trunchiate după nevoie în rezultatele Search.",
    },
    {
      q: "JSON-LD ajută AI-ul să înțeleagă o persoană sau un articol?",
      a: "JSON-LD oferă informații machine-readable despre entități și relații și poate ajuta Google să înțeleagă pagina. Nu există însă o garanție publică că Person sau Article JSON-LD determină citarea într-un sistem AI.",
    },
    {
      q: "Dacă curl vede doar metadata, înseamnă că ChatGPT vede doar metadata?",
      a: "Nu. curl arată HTML-ul primit de requestul respectiv. Pentru proiectele Lovable React + Vite mai vechi, documentația Lovable spune că URL-urile publice sunt pre-randate pentru search engines și AI crawlers.",
    },
    {
      q: "OpenAI recomandă un anumit câmp metadata pentru citarea în ChatGPT?",
      a: "Nu, în documentația publică verificată la 17 august 2026. OpenAI recomandă accesul OAI-SearchBot pentru ca site-ul să poată fi descoperit, afișat și citat clar în ChatGPT Search, dar nu publică un ranking al câmpurilor metadata.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const metadataCitareAiStudiuDeCazHtml = `
      <p><strong>În cazul documentat aici, un sistem AI a citat textual o formulare publicată în metadata de pe delamatescu.ro. Acest exact match este o evidență puternică că textul respectiv a intrat în lanțul de regăsire sau de generare folosit pentru răspuns. Nu demonstrează însă, de unul singur, că modificarea metadata a cauzat apariția citării, că sistemul a extras textul direct din câmpul <code>meta description</code> în acel moment sau că aceeași tehnică va produce același rezultat pe alte motoare. Studiul este util tocmai pentru această diferență: putem observa sursa textuală, dar trebuie să fim mai prudenți când descriem mecanismul și cauzalitatea.</strong></p>

      <p>Aceasta este miza corectă a documentului.</p>

      <p>Nu este un „hack de metadata”. Este un studiu despre <strong>atribuirea sursei într-un sistem AI</strong> și despre cât de ușor poate fi confundată o observație reală cu o explicație algoritmică nedemonstrată.</p>

      <h2>Ce s-a întâmplat</h2>

      <p>Înainte de modificarea metadata, întrebările folosite în test nu produceau o descriere echivalentă a identității profesionale.</p>

      <p>După modificare, un răspuns AI a folosit <strong>textual</strong> formularea publicată pe delamatescu.ro.</p>

      <p>În versiunea inițială a acestui articol, această observație a fost interpretată greșit ca o parafrază. Cazul real este mai puternic: a existat <strong>reproducere cuvânt cu cuvânt</strong> a textului publicat.</p>

      <p>Această corecție schimbă nivelul de evidență.</p>

      <p>Un exact match suficient de distinctiv este mult mai puternic decât o asemănare semantică. El susține că textul respectiv a fost disponibil sistemului printr-un mecanism de retrieval, indexare, caching, integrare sau altă sursă care conținea acea formulare.</p>

      <p>Totuși, există trei afirmații diferite și ele nu trebuie confundate:</p>

      <ol>
        <li><strong>Textul a apărut identic în răspuns.</strong> — observație directă.</li>
        <li><strong>Textul publicat pe site a fost una dintre sursele disponibile sistemului.</strong> — inferență puternică, dacă formularea este suficient de distinctivă și nu apare în alte surse.</li>
        <li><strong>Modificarea metadata a cauzat apariția răspunsului și sistemul a citit direct câmpul respectiv.</strong> — nu poate fi demonstrat dintr-un singur before/after.</li>
      </ol>

      <p>Această separare este esențială pentru un studiu GEO/AEO credibil.</p>

      <h2>Ce poate demonstra un exact match</h2>

      <p>O citare textuală identică poate funcționa ca <strong>marker de atribuire</strong>.</p>

      <p>Forța dovezii crește dacă:</p>

      <ul>
        <li>formularea este suficient de distinctivă;</li>
        <li>înainte de publicare nu apare în alte rezultate web cunoscute;</li>
        <li>este publicată într-o singură locație controlată;</li>
        <li>există un timestamp;</li>
        <li>răspunsul AI apare după publicare;</li>
        <li>răspunsul citează sau linkuiește explicit URL-ul controlat;</li>
        <li>experimentul este repetat pe același set de interogări.</li>
      </ul>

      <p>În aceste condiții, reproducerea exactă este evidență puternică pentru faptul că textul a fost disponibil sistemului.</p>

      <p>Dar exact match-ul <strong>nu identifică automat ruta tehnică</strong>. OpenAI documentează că, dacă o pagină este blocată, poate totuși cunoaște URL-ul și titlul acesteia printr-un furnizor terț de search sau prin alte pagini deja accesate, și poate afișa doar linkul și titlul dacă are semnale că pagina e relevantă — cu excepția cazului în care publisherul folosește <code>noindex</code>.<sup><a href="#fn-1">1</a></sup></p>

      <p>De aceea, chiar atunci când sursa textuală este foarte probabil identificată, traseul exact „site → crawler → index → răspuns” nu trebuie inventat dacă nu este observabil.</p>

      <h2>Fraza-trasor: marker experimental, nu probă absolută</h2>

      <p>Din cazul de mai sus rezultă o tehnică utilă, dar trebuie definită riguros.</p>

      <p>O <strong>frază-trasor</strong> este o formulare distinctivă introdusă deliberat într-o locație controlată pentru a testa dacă textul reapare ulterior într-un răspuns.</p>

      <p>Nu este o „dovadă matematică” de retrieval.</p>

      <p>Este un <strong>marker experimental de atribuire</strong>.</p>

      <h3>Condiții recomandate</h3>

      <p>Pentru un test riguros:</p>

      <ol>
        <li>verifică înainte de publicare că formularea nu apare deja pe web;</li>
        <li>publică-o într-o singură locație controlată;</li>
        <li>păstrează data și ora publicării;</li>
        <li>nu modifica alte elemente în același timp dacă testezi efectul unui singur câmp;</li>
        <li>folosește un set fix de interogări;</li>
        <li>rulează fiecare interogare de mai multe ori;</li>
        <li>notează motorul, modul de search și sursele afișate;</li>
        <li>separă <code>exact match</code>, <code>partial match</code>, <code>parafrază</code> și <code>citare explicită a URL-ului</code>;</li>
        <li>folosește cel puțin un control negativ;</li>
        <li>repetă testul după ce pagina a fost recrawlată sau reindexată, dacă acest lucru poate fi observat.</li>
      </ol>

      <p>O reproducere exactă are o valoare probatorie mai mare decât o parafrază. O parafrază, singură, nu trebuie tratată ca identificare a sursei.</p>

      <h2>Ce spune studiul despre metadata — și ce nu spune</h2>

      <p>Studiul arată că textul din metadata poate ajunge într-un răspuns AI.</p>

      <p>Nu demonstrează că:</p>

      <ul>
        <li>meta description este un factor direct de ranking sau citare AI;</li>
        <li><code>&lt;title&gt;</code> este „cel mai puternic semnal” pentru un motor AI;</li>
        <li>JSON-LD <code>Person</code> determină citarea unei persoane;</li>
        <li>ordinea cuvintelor din meta description este un factor algoritmic;</li>
        <li>un crawler care vede body-ul va prefera metadata;</li>
        <li>toate sistemele AI procesează metadata în același mod.</li>
      </ul>

      <p>OpenAI publică recomandări despre accesul <code>OAI-SearchBot</code> și despre includerea conținutului în summaries și snippets, dar nu publică o regulă care să declare <code>meta description</code> drept factor de citare.<sup><a href="#fn-1">1</a></sup></p>

      <p>Prin urmare, afirmația corectă este:</p>

      <blockquote><p><strong>Metadata este o parte accesibilă și descriptivă a documentului HTML și poate fi folosită de sisteme de search sau retrieval, dar efectul fiecărui câmp asupra citării AI nu este public documentat ca factor individual.</strong></p></blockquote>

      <h2>Corecția tehnică față de studiul despre Lovable</h2>

      <p>Versiunea inițială a acestui articol presupunea că requestul generic care primea doar shell-ul React reproducea condiția în care operează „majoritatea crawlerelor AI”. Această presupunere nu mai este susținută — problema de reprezentare tehnică este tratată separat, cu testul complet, în studiul de caz <a href="/lab/articole/paradoxul-site-ului-terminat">paradoxul site-ului terminat</a>.</p>

      <p>Documentația Lovable verificată la <strong>17 august 2026</strong> spune că proiectele Lovable rulează pe două stive:<sup><a href="#fn-2">2</a></sup></p>

      <ul>
        <li>aplicațiile noi create după <strong>13 mai 2026</strong> folosesc TanStack Start cu server-side rendering;</li>
        <li>proiectele mai vechi React + Vite folosesc prerendering la cerere pe URL-urile publice, servit crawlerelor verificate — Google, Bing, boți de preview social și motoare AI precum ChatGPT, Perplexity, Claude și Gemini;</li>
        <li>agenții neverificați și scanerele SEO terțe continuă să primească SPA-ul obișnuit pe proiectele vechi;</li>
        <li>vizitatorii umani continuă să primească experiența SPA pe proiectele vechi.</li>
      </ul>

      <p>Important: documentația Lovable curentă spune că proiectele React + Vite existente <strong>pot fi upgradate</strong> la TanStack Start pentru server-side rendering complet; până la acel upgrade, ele beneficiază de prerendering automat pentru crawlerele verificate.<sup><a href="#fn-2">2</a></sup></p>

      <p>Această informație este volatilă și trebuie reverificată înaintea unei actualizări viitoare a articolului.</p>

      <h3>Ce demonstrează testul curl</h3>

      <p>Dacă un request generic primește numai shell-ul și metadata, putem afirma doar:</p>

      <blockquote><p><strong>acel request a primit numai acea reprezentare.</strong></p></blockquote>

      <p>Nu putem deduce automat că OAI-SearchBot, PerplexityBot, Googlebot sau un crawler pe care Lovable îl tratează separat primește același HTML.</p>

      <p>Prin urmare, faptul că exact match-ul a apărut într-un răspuns AI <strong>nu poate fi folosit ca dovadă că restul site-ului era inaccesibil</strong>.</p>

      <p>Este posibil ca sistemul să fi avut acces la o versiune pre-randată și să fi preferat textul concis din metadata. Este posibil și ca textul să fi ajuns printr-un alt mecanism de retrieval. Cazul observat nu permite separarea acestor variante.</p>

      <h2>Ce face, verificabil, fiecare element</h2>

      <p>Nu există o ierarhie publică universală a „greutății metadata pentru AI”. Tabelul de mai jos descrie numai roluri documentate sau tehnice verificabile.</p>

      <table>
        <thead>
          <tr>
            <th>Element</th>
            <th>Ce se poate afirma verificabil</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><code>&lt;title&gt;</code></td><td>Descrie pagina. Google îl folosește ca una dintre mai multe surse pentru generarea title link-ului.<sup><a href="#fn-3">3</a></sup></td></tr>
          <tr><td><code>meta description</code></td><td>Google o poate folosi pentru snippet atunci când consideră că descrie pagina mai bine decât textul extras din conținut.<sup><a href="#fn-4">4</a></sup></td></tr>
          <tr><td>JSON-LD</td><td>Oferă o reprezentare structurată, machine-readable, a informațiilor despre pagină și entități.<sup><a href="#fn-5">5</a></sup></td></tr>
          <tr><td><code>og:title</code></td><td>Este folosit pentru social previews și este una dintre sursele pe care Google le poate folosi la generarea title link-urilor.<sup><a href="#fn-3">3</a></sup></td></tr>
          <tr><td><code>&lt;h1&gt;</code> și alte heading-uri</td><td>Google le poate folosi, împreună cu alte elemente vizibile, la generarea title link-ului.<sup><a href="#fn-3">3</a></sup></td></tr>
          <tr><td><code>canonical</code></td><td>Este un semnal puternic pentru alegerea URL-ului canonical între pagini duplicate sau foarte similare.<sup><a href="#fn-6">6</a></sup></td></tr>
          <tr><td><code>lang</code></td><td>Declară limba documentului pentru browsere, tehnologii asistive și alte procesoare HTML; Google Search spune explicit că detectează limba din text și nu se bazează pe atributul <code>lang</code>.<sup><a href="#fn-7">7</a></sup></td></tr>
        </tbody>
      </table>

      <h3>Nu există limite fixe de 60 și 155 de caractere</h3>

      <p>Versiunea inițială folosea drept limite aproximativ 60 de caractere pentru <code>&lt;title&gt;</code> și aproximativ 155 de caractere pentru <code>meta description</code>.</p>

      <p>Google spune explicit că <strong>nu există o limită fixă</strong> pentru niciunul dintre aceste câmpuri. Title link-urile și snippets sunt trunchiate după nevoie, de obicei în funcție de spațiul disponibil pe dispozitiv.<sup><a href="#fn-3">3</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <p>Prin urmare, nu există nici o limită tehnică justificată de „aproximativ 30 de cuvinte utile”.</p>

      <p>Recomandarea defensabilă este mai simplă:</p>

      <blockquote><p>scrie title și meta description concise, descriptive și specifice paginii, fără a trata 60/155 drept praguri algoritmice.</p></blockquote>

      <h2>Structured data: utilă, dar nu „fără ambiguitate”</h2>

      <p>JSON-LD poate ajuta un sistem să proceseze informații structurate despre pagină și entități.</p>

      <p>Google spune că structured data îi oferă indicii explicite despre sensul unei pagini și recomandă JSON-LD ca format atunci când implementarea îl permite.<sup><a href="#fn-5">5</a></sup></p>

      <p>Dar structured data:</p>

      <ul>
        <li>nu este singurul loc în care trebuie declarată identitatea;</li>
        <li>nu garantează afișarea sau rankingul;</li>
        <li>nu trebuie să descrie informații inexistente sau ascunse față de utilizator;</li>
        <li>trebuie să fie reprezentativă pentru conținutul paginii.<sup><a href="#fn-8">8</a></sup></li>
      </ul>

      <p>Formulare corectă:</p>

      <blockquote><p><strong>JSON-LD este un strat machine-readable suplimentar care poate clarifica entități și relații deja susținute de conținutul real al paginii.</strong></p></blockquote>

      <p>Nu există o sursă oficială care să confirme că <code>Person</code> JSON-LD produce direct citări în ChatGPT, Perplexity sau alte sisteme AI.</p>

      <h2>Cum scrii metadata clară pentru oameni, Search și sisteme de retrieval</h2>

      <p>Secțiunea nu trebuie prezentată ca rețetă pentru „a obține citări”.</p>

      <h3>Folosește un title descriptiv și specific</h3>

      <p>Google recomandă <code>&lt;title&gt;</code> distinct și descriptiv pentru fiecare pagină și evitarea textului vag sau repetitiv.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Scrie o meta description relevantă pentru pagina respectivă</h3>

      <p>Google poate folosi meta description ca snippet atunci când consideră că oferă un rezumat mai bun decât alte fragmente ale paginii. Meta description trebuie să fie specifică paginii și nu trebuie tratată ca text obligatoriu afișat.<sup><a href="#fn-4">4</a></sup></p>

      <h3>Pune informația principală devreme pentru claritate, nu pentru un presupus algoritm</h3>

      <p>Versiunea inițială afirma că „primul substantiv devine statistic atributul dominant”. Nu există o sursă care să susțină această afirmație.</p>

      <p>O recomandare editorială rezonabilă este doar:</p>

      <blockquote><p><strong>pune identitatea sau tema principală suficient de devreme încât descrierea să fie clară chiar dacă este scanată rapid sau trunchiată vizual.</strong></p></blockquote>

      <p>Aceasta este o recomandare de scriere, nu un factor AI demonstrat.</p>

      <h3>Evită keyword stuffing</h3>

      <p>Google recomandă titluri concise, descriptive și fără repetarea inutilă a acelorași termeni.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Folosește structured data numai pentru informații reale</h3>

      <p>Structured data trebuie să corespundă informației vizibile și să nu inducă în eroare.<sup><a href="#fn-8">8</a></sup></p>

      <h3>Păstrează metadata specifică fiecărei rute</h3>

      <p>Lovable recomandă metadata unică per pagină și include verificări SEO/AEO pentru metadata, canonicalizare și crawlabilitate.<sup><a href="#fn-2">2</a></sup></p>

      <h2>Cum verifici ce HTML primește requestul</h2>

      <p><code>curl</code> este util pentru inspectarea răspunsului HTTP brut.</p>

      <pre><code>curl -s https://exemplu.ro &gt; /tmp/page.html
grep -i '&lt;title' /tmp/page.html
grep -i 'meta name="description"' /tmp/page.html
grep -i 'application/ld+json' /tmp/page.html</code></pre>

      <p>Acest test răspunde la:</p>

      <blockquote><p><strong>„Ce conține HTML-ul primit de acest request?”</strong></p></blockquote>

      <p>Nu răspunde automat la:</p>

      <blockquote><p><strong>„Ce primește fiecare crawler AI?”</strong></p></blockquote>

      <p>Pentru un proiect Lovable vechi, documentația platformei spune că crawlerele de search și AI verificate primesc conținut pre-randat pe URL-urile publice, în timp ce experiența SPA rămâne pentru utilizator și pentru agenții neverificați.<sup><a href="#fn-2">2</a></sup> Metodologia completă de testare a reprezentării — inclusiv comparația între rute și verificarea canonicalului din HTML-ul brut — este descrisă separat în <a href="/lab/articole/paradoxul-site-ului-terminat">paradoxul site-ului terminat</a>.</p>

      <h2>Cum măsori efectul fără să inventezi cauzalitatea</h2>

      <p>Un singur before/after nu demonstrează că schimbarea metadata a cauzat apariția citării.</p>

      <p>Pentru un experiment mai bun:</p>

      <ul>
        <li>definește înainte setul de interogări;</li>
        <li>salvează răspunsurile și sursele;</li>
        <li>rulează fiecare interogare repetat;</li>
        <li>modifică un singur element;</li>
        <li>verifică dacă schimbarea a fost recrawlată/reindexată atunci când instrumentele permit;</li>
        <li>repetă testele;</li>
        <li>separă exact match-ul de parafrază;</li>
        <li>notează dacă există citare explicită a URL-ului;</li>
        <li>folosește control negativ.</li>
      </ul>

      <p>Google recomandă aceeași logică generală pentru măsurarea efectului structured data: test înainte/după pe pagini comparabile, validarea implementării și urmărirea performanței în timp.<sup><a href="#fn-5">5</a></sup></p>

      <p>Pentru sisteme generative, această disciplină este și mai importantă deoarece răspunsurile pot varia între rulări. Termenele publice de descoperire, crawl, indexare și citare — și de ce nu există un SLA universal pentru niciunul dintre ele — sunt tratate separat în <a href="/lab/articole/cat-dureaza-indexare-citare-ai">cât durează până apari în Google și cât până te citează AI-ul</a>.</p>

      <h2>Ce poate fi concluzionat din cazul delamatescu.ro</h2>

      <h3>Observație confirmată în studiul de caz</h3>

      <p>După publicarea textului, un răspuns AI a reprodus <strong>cuvânt cu cuvânt</strong> formularea de pe delamatescu.ro.</p>

      <h3>Inferență rezonabilă</h3>

      <p>Dacă formularea era suficient de distinctivă și nu era prezentă în alte surse, exact match-ul constituie o evidență puternică că textul publicat a fost disponibil sistemului.</p>

      <h3>Ce nu poate fi demonstrat numai din observație</h3>

      <p>Nu se poate demonstra că:</p>

      <ul>
        <li>meta description a fost singura sursă;</li>
        <li>crawlerul a extras direct acel câmp în momentul răspunsului;</li>
        <li>restul paginii era inaccesibil;</li>
        <li>modificarea metadata a fost singura cauză;</li>
        <li>aceeași schimbare ar produce același efect pe alt motor sau alt site.</li>
      </ul>

      <p>Această distincție este rezultatul principal al studiului.</p>

      <h2>Concluzia</h2>

      <p>Cazul nu demonstrează că „30 de cuvinte de metadata produc citări”.</p>

      <p>Demonstrează ceva mai util:</p>

      <blockquote><p><strong>un exact match poate oferi evidență puternică pentru atribuirea textuală, dar observația sursei și demonstrarea mecanismului sunt două lucruri diferite.</strong></p></blockquote>

      <p>Metadata merită scrisă corect pentru că face parte din document, descrie pagina și este folosită de search engines și alte sisteme. Dar optimizarea serioasă pentru AI nu trebuie construită pe presupunerea că există o formulă publică prin care un anumit câmp produce automat citarea.</p>

      <p>Pentru AI Visibility Lab, valoarea studiului este metodologică: <strong>măsoară ceea ce se vede, etichetează inferența și nu transforma o corelație într-un mecanism algoritmic.</strong></p>

      <h2>Întrebări frecvente</h2>

      <h3>Metadatele pot apărea în răspunsuri AI?</h3>

      <p>Da. Studiul de caz documentează o reproducere textuală a unei formulări publicate pe delamatescu.ro. Totuși, acest lucru nu demonstrează că meta description este un factor direct de citare sau că toate motoarele procesează metadata în același mod.</p>

      <h3>Ce este o frază-trasor?</h3>

      <p>Este un marker experimental: o formulare distinctivă publicată într-o locație controlată pentru a testa dacă reapare ulterior într-un răspuns. Un exact match oferă evidență mai puternică decât o parafrază, dar nu identifică singur ruta tehnică prin care sistemul a obținut textul.</p>

      <h3>Există o limită de 60 de caractere pentru title și 155 pentru meta description?</h3>

      <p>Nu. Google spune că nu există limite fixe pentru aceste câmpuri. Title link-urile și snippets sunt trunchiate după nevoie în rezultatele Search.<sup><a href="#fn-3">3</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <h3>JSON-LD ajută AI-ul să înțeleagă o persoană sau un articol?</h3>

      <p>JSON-LD oferă informații machine-readable despre entități și relații și poate ajuta Google să înțeleagă pagina. Nu există însă o garanție publică că <code>Person</code> sau <code>Article</code> JSON-LD determină citarea într-un sistem AI.<sup><a href="#fn-5">5</a></sup><sup><a href="#fn-8">8</a></sup></p>

      <h3>Dacă curl vede doar metadata, înseamnă că ChatGPT vede doar metadata?</h3>

      <p>Nu. <code>curl</code> arată HTML-ul primit de requestul respectiv. Pentru proiectele Lovable React + Vite vechi, documentația Lovable spune că URL-urile publice sunt pre-randate pentru crawlerele verificate, inclusiv search engines și AI crawlers.<sup><a href="#fn-2">2</a></sup></p>

      <h3>OpenAI recomandă un anumit câmp metadata pentru citarea în ChatGPT?</h3>

      <p>Nu, în documentația publică verificată la 17 august 2026. OpenAI recomandă accesul <code>OAI-SearchBot</code> pentru ca site-ul să poată fi descoperit, afișat și citat clar în ChatGPT Search, dar nu publică un ranking al câmpurilor metadata.<sup><a href="#fn-1">1</a></sup></p>

      <h2>Metodologie și niveluri de certitudine</h2>

      <h3>Observația proprie</h3>

      <p>Cazul delamatescu.ro este un studiu pe un singur subiect și nu are grup de control suficient pentru a demonstra cauzalitatea.</p>

      <p>Faptul relevant furnizat de observația originală este exact match-ul dintre textul publicat și textul citat de sistemul AI.</p>

      <h3>Sursele externe</h3>

      <p>Pentru verificarea din <strong>17 august 2026</strong> au fost folosite cu prioritate surse primare: Google Search Central, Lovable Documentation și OpenAI Help Center.</p>

      <h3>Nivelurile folosite în articol</h3>

      <p><strong>Observație directă</strong> — ceea ce a fost măsurat sau capturat în cazul propriu.</p>

      <p><strong>Fapt documentat extern</strong> — afirmație susținută de documentația oficială a providerului.</p>

      <p><strong>Inferență</strong> — concluzie rezonabilă din observații, dar care nu este prezentată ca mecanism confirmat.</p>

      <p><strong>Ipoteză experimentală</strong> — afirmație care trebuie testată înainte de a fi generalizată.</p>

      <h2>Surse</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">OpenAI Help Center — „Publishers and Developers - FAQ", verificat 17 august 2026. Orice site public poate apărea în ChatGPT Search; OpenAI recomandă permiterea <code>OAI-SearchBot</code> pentru ca informația să poată fi descoperită, afișată și citată/linkuită clar, și documentează că unele URL-uri pot fi cunoscute prin furnizori terți de search chiar dacă pagina e blocată: <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">help.openai.com/…/publishers-and-developers-faq</a></li>
        <li id="fn-2">Lovable Documentation — „Optimize your app for SEO and AI search", verificat 17 august 2026. Documentația spune că aplicațiile noi create după 13 mai 2026 folosesc TanStack Start cu SSR, iar aplicațiile React + Vite mai vechi folosesc pre-randare la cerere, servită crawlerelor verificate (Google, Bing, boți de preview social, motoare AI precum ChatGPT, Perplexity, Claude și Gemini); proiectele React + Vite existente pot fi upgradate la TanStack Start: <a href="https://docs.lovable.dev/features/seo-aeo" target="_blank" rel="noopener noreferrer">docs.lovable.dev/features/seo-aeo</a></li>
        <li id="fn-3">Google Search Central — „Influencing your title links in search results". Google folosește multiple surse pentru title links, inclusiv <code>&lt;title&gt;</code>, heading-uri, <code>og:title</code>, text vizibil și linkuri; nu există limită fixă de lungime: <a href="https://developers.google.com/search/docs/appearance/title-link" target="_blank" rel="noopener noreferrer">developers.google.com/…/title-link</a></li>
        <li id="fn-4">Google Search Central — „Control your snippets in search results". Google generează snippets în principal din conținutul paginii și poate folosi meta description atunci când aceasta descrie mai bine pagina; nu există limită fixă de lungime: <a href="https://developers.google.com/search/docs/appearance/snippet" target="_blank" rel="noopener noreferrer">developers.google.com/…/snippet</a></li>
        <li id="fn-5">Google Search Central — „Intro to How Structured Data Markup Works". Google descrie structured data ca informație explicită despre pagină și entitățile ei și recomandă JSON-LD ca format ușor de implementat și întreținut, fără a garanta afișarea sau rankingul: <a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">developers.google.com/…/intro-structured-data</a></li>
        <li id="fn-6">Google Search Central — „How to specify a canonical URL". <code>rel="canonical"</code> este descris ca semnal puternic pentru alegerea canonicalului între URL-uri duplicate sau foarte similare, nu ca directivă absolută: <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer">developers.google.com/…/consolidate-duplicate-urls</a></li>
        <li id="fn-7">Google Search Central — „Meta tags and attributes that Google supports". Google spune explicit că detectează limba paginii pe baza conținutului textual și nu se bazează pe atributul HTML <code>lang</code>: <a href="https://developers.google.com/search/docs/crawling-indexing/special-tags" target="_blank" rel="noopener noreferrer">developers.google.com/…/special-tags</a></li>
        <li id="fn-8">Google Search Central — „General Structured Data Guidelines". Structured data trebuie să fie reprezentativă pentru conținutul paginii, să nu descrie informație ascunsă cititorului și să nu inducă în eroare: <a href="https://developers.google.com/search/docs/appearance/structured-data/sd-policies" target="_blank" rel="noopener noreferrer">developers.google.com/…/sd-policies</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Documentația Lovable și OpenAI se poate modifica rapid. Afirmațiile despre stivele Lovable, prerendering, migrarea la TanStack Start și <code>OAI-SearchBot</code> descriu <strong>starea documentată la 17 august 2026</strong> și trebuie reverificate înaintea unei republicări ulterioare.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiectul de cercetare în vizibilitate AI al lui Alex Matescu. Ultima verificare factuală și a surselor: 17 august 2026.</em></p>
`;
