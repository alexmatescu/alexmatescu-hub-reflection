import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const deUndeIsiIauInformatiileAiMeta: LabArticleMeta = {
  title:
    "De unde își iau informațiile sistemele AI? Ce citează ChatGPT, Gemini, Perplexity, Claude și Copilot — și ce arată datele din România",
  seoTitle: "De unde își iau informațiile sistemele AI și ce citează",
  description:
    "Analiză AI Visibility Lab despre antrenare, căutare și citare în sistemele AI: studii internaționale 2025–2026, statistici despre România, limite metodologice și implicații pentru vizibilitatea companiilor.",
  canonical:
    "https://delamatescu.ro/lab/articole/de-unde-isi-iau-informatiile-ai-surse-citari-romania",
  category: "Search & Retrieval",
  articleType: "Analiză",
  datePublished: "2026-11-07T09:12:00+02:00",
  dateModified: "2026-11-12",
  lastReviewed: "2026-11-07",
  image: {
    url: "https://delamatescu.ro/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/00-traseul-informatiei.webp",
    alt: "Diagramă: întrebarea utilizatorului duce la decizia dacă e necesară căutarea externă; ambele ramuri, parametrii modelului sau rezultatele recuperate din web, index, API, fișiere ori conectori, duc la sinteza răspunsului, din care rezultă răspunsul afișat, eventuale citări și eventuale mențiuni sau recomandări.",
  },
  about: [
    { name: "Selecția surselor în răspunsurile AI" },
    { name: "Citări AI" },
    { name: "Retrieval-Augmented Generation" },
    { name: "Utilizarea AI în România" },
  ],
  keywords: [
    "de unde își iau informațiile sistemele AI",
    "surse citate de AI",
    "citări ChatGPT Perplexity Gemini",
    "AI Search România",
    "antrenare vs recuperare",
    "mențiuni de brand în AI",
    "utilizarea AI în România",
  ],
  citations: [
    {
      name: "OpenAI — How ChatGPT and our foundation models are developed",
      url: "https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-foundation-models-are-developed",
    },
    {
      name: "OpenAI — Overview of OpenAI Crawlers",
      url: "https://developers.openai.com/api/docs/bots",
    },
    {
      name: "Google Search Central — AI features and your website",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
    },
    {
      name: "Perplexity Help Center — What is Pro Search?",
      url: "https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search",
    },
    {
      name: "Microsoft Support — How web search works in Copilot Chat and agents",
      url: "https://support.microsoft.com/en-us/microsoft-365-copilot/how-web-search-works-in-microsoft-365-copilot-chat-and-agents",
    },
    {
      name: "Prefer — How AI engines search and cite: 960 answers measured",
      url: "https://tryprefer.com/data/ai-answer-study/",
    },
    {
      name: "Searlo — ChatGPT, Perplexity, Copilot and Gemini Cite Different Sources: A 120-Answer Study",
      url: "https://searlo.tech/blog/ai-search-citation-study-2026",
    },
    {
      name: "BrightEdge — ChatGPT vs Google AI: 62% Brand Recommendation Disagreement",
      url: "https://www.brightedge.com/resources/weekly-ai-search-insights/chatgpt-vs-google-ai-62-brand-recommendation-disagreement",
    },
    {
      name: "Eurostat — 32.7% of EU people used generative AI tools in 2025",
      url: "https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20251216-3",
    },
    {
      name: "Eurostat — 64% of 16-24-year-olds used AI in 2025",
      url: "https://ec.europa.eu/eurostat/web/products-eurostat-news/w/edn-20260210-1",
    },
    {
      name: "Eurostat — Use of artificial intelligence in enterprises",
      url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises",
    },
    {
      name: "Reveal Marketing Research — Integrare accelerată a AI în rutina românilor (studiul nr. 206)",
      url: "https://reveal.ro/media/integrare-accelerata-a-ai-in-rutina-romanilor/",
    },
    {
      name: "Media and Journalism Research Center — AI Information Map: Romania",
      url: "https://journalismresearch.org/9824-2/",
    },
    {
      name: "AI Visibility Lab — AVL-102 — Cum aleg sistemele AI sursele și citările",
      url: "https://delamatescu.ro/lab/cercetare/cum-aleg-motoarele-ai",
    },
    {
      name: "GEOflux — State of AI Search — România",
      url: "https://www.geoflux.ai/ro/state-of-ai",
    },
    {
      name: "GEOflux — Bănci în România: Stadiul căutării AI",
      url: "https://www.geoflux.ai/ro/state-of-ai/romania/banking",
    },
    {
      name: "Websem — Cine vinde cărți când clientul întreabă un AI?",
      url: "https://websem.ro/resurse/aeo/studiu-piata-carte-romania",
    },
    {
      name: "OpenAI — Introducing Businesses in ChatGPT",
      url: "https://openai.com/index/introducing-businesses-chatgpt/",
    },
    {
      name: "OpenAI Help Center — Setting up your business on ChatGPT",
      url: "https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt",
    },
  ],
  faq: [
    {
      q: "De unde își ia ChatGPT informațiile?",
      a: "Din tipare învățate în etapa de antrenare și, când produsul și contextul permit, din informații recuperate prin instrumente precum căutarea web sau documente și conectori. Cele două mecanisme nu trebuie confundate.",
    },
    {
      q: "Care AI citează cele mai multe surse?",
      a: "În studiul Prefer din septembrie 2026, Perplexity a citat în medie 19,48 surse per răspuns, față de 8,64 Gemini, 4,58 Claude și 3,05 ChatGPT. Sunt rezultate ale acelui experiment, nu un clasament universal.",
    },
    {
      q: "Dacă un website este accesibil crawlerelor AI, va fi citat?",
      a: "Nu. Accesul este doar una dintre condițiile posibile ale descoperirii și utilizării informației. Citarea depinde și de interogare, de recuperare, de sinteză și de selecția surselor afișate.",
    },
    {
      q: "Este același lucru să fii citat și să fii recomandat?",
      a: "Nu. Un răspuns poate cita un URL fără să recomande brandul asociat și poate menționa un brand fără să citeze website-ul propriu.",
    },
    {
      q: "Ce procent dintre români folosesc AI?",
      a: "Răspunsul depinde de populație și definiție. Eurostat raportează 17,8% pentru utilizarea AI generativ în ultimele trei luni de către persoanele de 16–74 de ani din România, în 2025. Sondajul Reveal din ianuarie 2026 raportează 68% utilizare a AI în activitățile cotidiene în eșantionul său de adulți utilizatori de internet din mediul urban. Indicatorii nu sunt direct comparabili.",
    },
    {
      q: "Contează limba în care întreb un AI despre România?",
      a: "Poate conta. Studiul MJRC a observat distribuții diferite ale surselor despre România în răspunsuri la întrebări formulate în română versus engleză. Aceasta este o observație a corpusului studiat, nu o regulă fără excepții.",
    },
    {
      q: "Ce pot face dacă nu am garanția unei recomandări?",
      a: "Să construiesc o identitate publică clară, surse accesibile și actualizate, informații verificabile și un proces de măsurare repetată. Aceste acțiuni nu garantează un rezultat, dar reduc problemele observabile pe care o companie le poate controla.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const deUndeIsiIauInformatiileAiHtml = `
<p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
<p>Publicat: <time datetime="2026-11-07T09:12:00+02:00">7 noiembrie 2026</time> · Actualizat: <time datetime="2026-11-12">12 noiembrie 2026</time> · Ultima verificare factuală: <time datetime="2026-11-07">7 noiembrie 2026</time></p>

<nav class="article-toc" aria-labelledby="cuprins">
  <p id="cuprins" class="article-toc-title">Cuprins</p>
  <ol>
    <li><a href="#de-ce-avem-nevoie-de-aceasta-comparatie">De ce avem nevoie de această comparație?</a>
      <ol>
        <li><a href="#patru-fenomene-pe-care-nu-trebuie-sa-le-confundam">Patru fenomene pe care nu trebuie să le confundăm</a></li>
      </ol>
    </li>
    <li><a href="#1-ce-inseamna-de-fapt-antrenarea-unui-ai">1. Ce înseamnă, de fapt, antrenarea unui AI?</a></li>
    <li><a href="#2-cum-ajunge-informatia-actuala-intr-un-raspuns">2. Cum ajunge informația actuală într-un răspuns?</a>
      <ol>
        <li><a href="#traseul-simplificat-al-unei-informatii">Traseul simplificat al unei informații</a></li>
        <li><a href="#ce-stim-din-documentatia-oficiala-a-produselor">Ce știm din documentația oficială a produselor?</a></li>
      </ol>
    </li>
    <li><a href="#3-cate-surse-citeaza-fiecare-ai-rezultatele-unui-experiment-cu-960-de-raspunsuri">3. Câte surse citează fiecare AI? Rezultatele unui experiment cu 960 de răspunsuri</a>
      <ol>
        <li><a href="#dar-ce-se-intampla-cand-includem-si-copilot">Dar ce se întâmplă când includem și Copilot?</a></li>
      </ol>
    </li>
    <li><a href="#4-de-ce-aceleasi-intrebari-nu-duc-la-aceleasi-surse">4. De ce aceleași întrebări nu duc la aceleași surse?</a></li>
    <li><a href="#5-sursa-citata-nu-este-acelasi-lucru-cu-brandul-recomandat">5. Sursa citată nu este același lucru cu brandul recomandat</a></li>
    <li><a href="#6-romania-cat-de-mult-folosesc-oamenii-ai-si-pentru-ce">6. România: cât de mult folosesc oamenii AI și pentru ce?</a>
      <ol>
        <li><a href="#cand-ai-intra-in-decizia-de-cumparare">Când AI intră în decizia de cumpărare</a></li>
      </ol>
    </li>
    <li><a href="#7-ce-citeaza-sistemele-ai-cand-raspund-despre-romania">7. Ce citează sistemele AI când răspund despre România?</a>
      <ol>
        <li><a href="#7-1-studiul-mjrc-zece-sisteme-doua-limbi-si-aproximativ-360-000-de-raspunsuri">7.1. Studiul MJRC: zece sisteme, două limbi și aproximativ 360.000 de răspunsuri</a></li>
        <li><a href="#7-2-monitorizarea-geoflux-diferente-intre-chatgpt-gemini-si-perplexity">7.2. Monitorizarea GEOflux: diferențe între ChatGPT, Gemini și Perplexity</a></li>
        <li><a href="#7-3-piata-de-carte-a-avea-un-site-citat-nu-inseamna-a-primi-recomandarea">7.3. Piața de carte: a avea un site citat nu înseamnă a primi recomandarea</a></li>
      </ol>
    </li>
    <li><a href="#8-ce-ne-spun-toate-acestea-despre-piata-romaneasca">8. Ce ne spun toate acestea despre piața românească?</a></li>
    <li><a href="#9-cum-ar-trebui-testata-vizibilitatea-unei-entitati">9. Cum ar trebui testată vizibilitatea unei entități?</a>
      <ol>
        <li><a href="#indicatorii-din-business-hub-alta-populatie-alte-reguli-de-numarare">Indicatorii din Business Hub: altă populație, alte reguli de numărare</a></li>
      </ol>
    </li>
    <li><a href="#10-ce-poate-face-o-companie-fara-sa-controleze-ai-ul">10. Ce poate face o companie fără să controleze AI-ul?</a></li>
    <li><a href="#11-limita-fundamentala-a-studiilor-masuram-sisteme-care-se-schimba-in-timp-ce-le-studiem">11. Limita fundamentală a studiilor: măsurăm sisteme care se schimbă în timp ce le studiem</a></li>
    <li><a href="#concluzie-sa-fim-pregatiti-sa-fim-gasiti-nu-sa-pretindem-ca-vom-fi-alesi">Concluzie: să fim pregătiți să fim găsiți, nu să pretindem că vom fi aleși</a></li>
    <li><a href="#intrebari-frecvente">Întrebări frecvente</a>
      <ol>
        <li><a href="#de-unde-isi-ia-chatgpt-informatiile">De unde își ia ChatGPT informațiile?</a></li>
        <li><a href="#care-ai-citeaza-cele-mai-multe-surse">Care AI citează cele mai multe surse?</a></li>
        <li><a href="#daca-un-website-este-accesibil-crawlerelor-ai-va-fi-citat">Dacă un website este accesibil crawlerelor AI, va fi citat?</a></li>
        <li><a href="#este-acelasi-lucru-sa-fii-citat-si-sa-fii-recomandat">Este același lucru să fii citat și să fii recomandat?</a></li>
        <li><a href="#ce-procent-dintre-romani-folosesc-ai">Ce procent dintre români folosesc AI?</a></li>
        <li><a href="#conteaza-limba-in-care-intreb-un-ai-despre-romania">Contează limba în care întreb un AI despre România?</a></li>
        <li><a href="#ce-pot-face-daca-nu-am-garantia-unei-recomandari">Ce pot face dacă nu am garanția unei recomandări?</a></li>
      </ol>
    </li>
    <li><a href="#note-metodologice-si-limitari">Note metodologice și limitări</a></li>
    <li><a href="#surse-si-metodologie">Surse și metodologie</a>
      <ol>
        <li><a href="#lecturi-conexe-din-ai-visibility-lab">Lecturi conexe din AI Visibility Lab</a></li>
        <li><a href="#nota-de-volatilitate">Notă de volatilitate</a></li>
      </ol>
    </li>
    <li><a href="#istoricul-versiunilor">Istoricul versiunilor</a></li>
  </ol>
</nav>

<p><strong>Răspunsul scurt:</strong> sistemele AI nu funcționează toate pe baza acelorași surse și nu afișează aceleași citări. Unele informații sunt reflectate în parametrii modelelor în urma antrenării; altele sunt recuperate la momentul răspunsului din web, fișiere, baze de date sau instrumente conectate. Nici sursa recuperată, nici cea citată și nici brandul recomandat nu sunt sinonime. Studiile din 2025–2026 măsoară diferențe considerabile între platforme, iar cercetările realizate în România confirmă relevanța subiectului. Dar ele descriu <strong>intervale, configurații și eșantioane</strong>, nu reguli permanente sau garanții pentru următoarea interogare.</p>
<h2 id="de-ce-avem-nevoie-de-aceasta-comparatie">De ce avem nevoie de această comparație?</h2>
<p>Un utilizator întreabă ChatGPT care sunt cele mai potrivite servicii pentru o anumită nevoie. Altul adresează aceeași întrebare lui Gemini. Un al treilea consultă Perplexity, iar un antreprenor folosește Microsoft Copilot. Întrebarea este aproape identică. Răspunsurile, însă, pot conține branduri diferite, explicații diferite și liste de surse care nu se suprapun.</p>
<p>Pentru utilizator, aceasta poate părea doar o diferență de stil: un produs afișează trei linkuri, altul zece, altul niciunul. Pentru o companie, diferența poate însemna apariția sau absența într-un moment în care un potențial client caută o soluție.</p>
<p>O asemenea observație ne invită la o întrebare mai dificilă decât „care AI citează mai mult?”: <strong>din ce informație este construit răspunsul, ce parte din acel proces putem observa și ce putem face pentru ca informațiile despre o entitate să fie descoperite, înțelese și verificate?</strong></p>
<p>Articolul de față pune împreună documentația oficială a furnizorilor, cercetări comparative internaționale și date dedicate României. Nu tratează platformele drept sisteme cu preferințe permanente și nici statisticile drept promisiuni comerciale.</p>
<h3 id="patru-fenomene-pe-care-nu-trebuie-sa-le-confundam">Patru fenomene pe care nu trebuie să le confundăm</h3>
<table>
  <thead><tr><th scope="col">Concept</th><th scope="col">Ce înseamnă</th><th scope="col">Ce <strong>nu</strong> demonstrează, luat separat</th></tr></thead>
  <tbody>
    <tr><th scope="row"><strong>Antrenare (training)</strong></th><td>Modelul își ajustează parametrii pornind de la date și obiective de învățare.</td><td>Că un anumit website va fi căutat sau citat într-un răspuns viitor.</td></tr>
    <tr><th scope="row"><strong>Recuperare (retrieval)</strong></th><td>Sistemul găsește informații suplimentare prin căutare, indexuri, documente, API-uri sau conectori.</td><td>Că fiecare rezultat recuperat este folosit ori afișat.</td></tr>
    <tr><th scope="row"><strong>Citare (citation)</strong></th><td>Produsul afișează un link sau o referință asociată răspunsului.</td><td>Că acea sursă explică integral toate afirmațiile sau că brandul este recomandat.</td></tr>
    <tr><th scope="row"><strong>Mențiune / recomandare</strong></th><td>O entitate apare în text sau este prezentată ca opțiune potrivită.</td><td>Că website-ul propriu a fost citat ori că recomandarea conduce la o tranzacție.</td></tr>
  </tbody>
</table>
<p><strong>Sursa de antrenare ≠ sursa recuperată ≠ sursa citată ≠ brandul recomandat.</strong> Aceasta este distincția de la care pornește întreaga analiză.</p>
<h2 id="1-ce-inseamna-de-fapt-antrenarea-unui-ai">1. Ce înseamnă, de fapt, antrenarea unui AI?</h2>
<p>Când spunem că un model a fost <em>antrenat</em>, nu afirmăm că a fost conectat permanent la toate paginile de pe internet. În etapa de pre-antrenare, modelul învață regularități, structuri și relații din cantități mari de date, modificându-și parametrii. Etapele ulterioare de post-antrenare urmăresc, prin proceduri variate, îmbunătățirea utilității, comportamentului, fiabilității și siguranței.</p>
<p>OpenAI descrie trei categorii principale de informații folosite la dezvoltarea modelelor sale: informații publice de pe internet, informații accesate prin parteneriate și materiale furnizate sau generate de utilizatori, cercetători și antrenori. Documentația menționează și folosirea datelor sintetice în unele procese. Acesta este un exemplu documentat, <strong>nu o afirmație că toți furnizorii utilizează aceeași compoziție a datelor</strong>. <sup><a href="#fn-1">1</a></sup></p>
<p>Imaginează-ți un om care studiază ani la rând pentru a deveni specialist. Poate explica un concept fără să deschidă manualul în care l-a întâlnit. Când i se cere un detaliu nou, poate consulta documentație actualizată. Modelul AI nu învață și nu raționează identic cu omul, iar analogia are limite, dar ea arată diferența dintre <strong>ce a fost învățat</strong> și <strong>ce este consultat la momentul răspunsului</strong>.</p>
<p>Există și o nuanță importantă: modelele pot reproduce uneori secvențe memorate ori pot genera afirmații incorecte. Nu trebuie să descriem antrenarea nici ca pe o arhivare literală a fiecărei pagini, nici ca pe o garanție că modelul nu poate reține vreodată fragmente din date. Din exterior, compoziția exactă a datelor de antrenare și contribuția fiecărei surse la un răspuns concret nu sunt, de regulă, observabile integral.</p>
<p>Prin urmare, întrebarea „A fost site-ul meu folosit la antrenarea AI?” este diferită de întrebarea „De ce apare sau nu apare site-ul meu în citările de astăzi?”.</p>
<h2 id="2-cum-ajunge-informatia-actuala-intr-un-raspuns">2. Cum ajunge informația actuală într-un răspuns?</h2>
<p>Un produs AI poate răspunde pe baza parametrilor modelului sau poate folosi instrumente pentru recuperarea informațiilor. Într-un sistem de tip <em>Retrieval-Augmented Generation</em> (RAG), documentele relevante sunt recuperate și introduse în contextul pe baza căruia este generat răspunsul. Alte arhitecturi pot utiliza căutări web succesive, interogări în baze de date, conectori ori agenți software.</p>
<p>Nu există obligația ca toate aceste mecanisme să fie folosite la fiecare întrebare. Diferențele de produs, versiune, licență, localizare și configurație pot schimba răspunsul.</p>
<h3 id="traseul-simplificat-al-unei-informatii">Traseul simplificat al unei informații</h3>
<figure>
  <img src="/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/00-traseul-informatiei.svg" alt="Diagramă: întrebarea utilizatorului duce la decizia dacă e necesară căutarea externă. Fără căutare, răspunsul se bazează pe contextul și parametrii modelului; cu căutare, pe web, index, API, fișiere sau conectori, din care rezultă rezultate recuperate și selectate. Ambele ramuri duc la sinteza răspunsului, din care rezultă răspunsul afișat, eventuale citări și eventuale mențiuni sau recomandări." width="960" height="650" loading="lazy" />
  <figcaption>Schema este conceptuală. Nu reprezintă arhitectura internă completă a vreunui furnizor și nu implică faptul că fiecare produs execută întotdeauna aceiași pași.</figcaption>
</figure>
<p>În documentul AI Visibility Lab <a href="/lab/cercetare/cum-aleg-motoarele-ai">„Cum aleg sistemele AI sursele și citările”</a> (AVL-102), procesul este analizat prin patru filtre: acces, recuperare, sinteză și selecția citării. Aceste filtre sunt utile ca model de investigație, nu ca descriere exhaustivă, verificată, a codului intern al fiecărei platforme. <sup><a href="#fn-14">14</a></sup></p>
<p>O sursă poate fi tehnic accesibilă, dar să nu fie recuperată pentru întrebarea respectivă. Poate fi recuperată, dar nefolosită. Poate contribui la un răspuns fără să apară în lista de citări. Iar o companie poate fi menționată chiar și atunci când propriul website nu este citat.</p>
<h3 id="ce-stim-din-documentatia-oficiala-a-produselor">Ce știm din documentația oficială a produselor?</h3>
<table>
  <thead><tr><th scope="col">Sistem sau produs</th><th scope="col">Mecanism public relevant</th><th scope="col">Limită de interpretare</th></tr></thead>
  <tbody>
    <tr><th scope="row"><strong>ChatGPT / ChatGPT Search</strong></th><td>OpenAI documentează căutarea web și separă în controlul crawlerelor OAI-SearchBot (căutare) de GPTBot (antrenare). <sup><a href="#fn-2">2</a></sup></td><td>Accesul crawlerului nu garantează includerea unui URL sau recomandarea unei entități.</td></tr>
    <tr><th scope="row"><strong>Google AI Overviews / AI Mode</strong></th><td>Google descrie posibilitatea unor căutări conexe de tip <em>query fan-out</em>; cele două produse pot folosi modele și tehnici diferite. <sup><a href="#fn-3">3</a></sup></td><td>O pagină eligibilă pentru Google Search nu este obligatoriu inclusă în răspunsul AI.</td></tr>
    <tr><th scope="row"><strong>Perplexity</strong></th><td>Documentația Pro Search descrie căutări multiple și sinteze cu linkuri către articole, studii, forumuri și alte tipuri de resurse. <sup><a href="#fn-4">4</a></sup></td><td>Numărul citărilor depinde de modul folosit și de întrebare.</td></tr>
    <tr><th scope="row"><strong>Microsoft Copilot Chat</strong></th><td>Microsoft precizează că poate transforma cererea într-o interogare trimisă către Bing, pentru a recupera informații de pe web. <sup><a href="#fn-5">5</a></sup></td><td>Experiențele Copilot diferă între produse și configurații, inclusiv cele pentru organizații.</td></tr>
    <tr><th scope="row"><strong>Claude</strong></th><td>Accesul la căutare și la alte instrumente depinde de mediul de utilizare și de configurație.</td><td>Nu putem descrie o listă fixă de surse valabilă pentru toate sesiunile Claude.</td></tr>
  </tbody>
</table>
<p>Nu este vorba, așadar, doar despre „ce știe modelul”. Este vorba și despre <strong>ce poate accesa produsul prin care utilizatorul vorbește cu modelul</strong>.</p>
<h2 id="3-cate-surse-citeaza-fiecare-ai-rezultatele-unui-experiment-cu-960-de-raspunsuri">3. Câte surse citează fiecare AI? Rezultatele unui experiment cu 960 de răspunsuri</h2>
<p>Un studiu publicat de Prefer în septembrie 2026 a comparat 960 de răspunsuri: 80 de întrebări despre AI Search, GEO și AEO, adresate de trei ori fiecăruia dintre ChatGPT, Perplexity, Gemini și Claude. Măsurătorile au fost realizate la 13 septembrie 2026, prin API, solicitând căutare web la fiecare apel. <sup><a href="#fn-6">6</a></sup></p>
<figure>
  <img src="/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/01-surse-citate-prefer.svg" alt="Grafic cu bare orizontale: Perplexity 19,48 surse citate în medie pe răspuns, Gemini 8,64, Claude 4,58, ChatGPT 3,05, în studiul Prefer din septembrie 2026." width="960" height="396" loading="lazy" />
  <figcaption>Grafic 1 — Media surselor citate pe răspuns. Redesenat de AI Visibility Lab din cifrele publicate de Prefer în <a href="https://tryprefer.com/data/ai-answer-study/" target="_blank" rel="noopener noreferrer">„How AI engines search and cite: 960 answers measured”</a> (19 septembrie 2026). <sup><a href="#fn-6">6</a></sup></figcaption>
</figure>
<table>
  <thead><tr><th scope="col">Sistem AI</th><th scope="col">Răspunsuri testate</th><th scope="col">Medie surse citate / răspuns</th><th scope="col">Răspunsuri cu căutare web</th><th scope="col">Domenii distincte citate</th></tr></thead>
  <tbody>
    <tr><th scope="row">Perplexity</th><td>240</td><td><strong>19,48</strong></td><td>240 / 240 (100%)</td><td>748</td></tr>
    <tr><th scope="row">Gemini</th><td>240</td><td><strong>8,64</strong></td><td>213 / 240 (88,8%)</td><td>580</td></tr>
    <tr><th scope="row">Claude</th><td>240</td><td><strong>4,58</strong></td><td>192 / 240 (80,0%)</td><td>333</td></tr>
    <tr><th scope="row">ChatGPT</th><td>240</td><td><strong>3,05</strong></td><td>216 / 240 (90,0%)</td><td>218</td></tr>
  </tbody>
</table>
<p><strong>Interpretare.</strong> În acest set de întrebări, Perplexity a citat în medie de aproximativ 6,4 ori mai multe surse decât ChatGPT. Nu rezultă de aici că răspunsurile Perplexity au fost automat de 6,4 ori mai corecte, mai complete sau mai bune. Numărul de citări este un indicator al formei răspunsului și al surselor afișate, nu un test suficient de acuratețe.</p>
<p>Mai mult, studiul acoperă o tematică specializată. O distribuție similară nu este garantată pentru întrebări medicale, educaționale, locale, istorice sau strict comerciale. Utilizarea prin API, modelele configurate și momentul colectării sunt esențiale pentru reproductibilitate.</p>
<h3 id="dar-ce-se-intampla-cand-includem-si-copilot">Dar ce se întâmplă când includem și Copilot?</h3>
<p>Searlo a publicat un experiment separat, tot în septembrie 2026: 30 de întrebări — 22 despre produse și software („care este cel mai bun…”) și 8 de tip „cum fac…” —, formulate în engleză (setări pentru SUA) și adresate o singură dată fiecăruia dintre patru sisteme, prin API-ul propriu de colectare a răspunsurilor. <sup><a href="#fn-7">7</a></sup></p>
<table>
  <thead><tr><th scope="col">Sistem AI</th><th scope="col"><strong>Mediana</strong> surselor / răspuns</th><th scope="col">Răspunsuri fără surse</th><th scope="col">Domenii distincte în întregul test</th></tr></thead>
  <tbody>
    <tr><th scope="row">Perplexity</th><td>10</td><td>0 din 30</td><td>216</td></tr>
    <tr><th scope="row">Microsoft Copilot</th><td>10</td><td>0 din 30</td><td>233</td></tr>
    <tr><th scope="row">Gemini</th><td>7</td><td>8 din 30</td><td>66</td></tr>
    <tr><th scope="row">ChatGPT</th><td>5</td><td>6 din 30</td><td>77</td></tr>
  </tbody>
</table>
<p>Acest tabel nu poate fi combinat matematic cu cel anterior. <strong>Prefer raportează o medie a surselor citate; Searlo raportează mediana surselor pe răspuns.</strong> Studiile au întrebări, instrumente, metode și dimensiuni diferite. Tocmai de aceea este util să le privim ca două observații complementare, nu ca un singur clasament.</p>
<p>În testul Searlo, Perplexity a citat Reddit în 10 dintre cele 30 de răspunsuri, Gemini în patru, iar ChatGPT și Copilot în niciunul. Copilot a citat YouTube în șapte răspunsuri. Aceste frecvențe nu înseamnă că o platformă acceptă ori respinge prin definiție Reddit sau YouTube. Înseamnă numai că <strong>așa s-au distribuit citările în acel experiment</strong>. <sup><a href="#fn-7">7</a></sup></p>
<h2 id="4-de-ce-aceleasi-intrebari-nu-duc-la-aceleasi-surse">4. De ce aceleași întrebări nu duc la aceleași surse?</h2>
<p>Numărul linkurilor afișate este doar prima diferență. A doua privește <strong>identitatea domeniilor</strong>.</p>
<p>În studiul Prefer, cele 960 de răspunsuri au citat 1.329 de domenii distincte. Dintre acestea, 966 — adică 72,7% — au apărut în citările unui singur sistem. Numai 29 de domenii au fost citate de toate cele patru sisteme. <sup><a href="#fn-6">6</a></sup></p>
<figure>
  <img src="/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/02-suprapunere-domenii-prefer.svg" alt="Grafic cu bare orizontale: 966 de domenii (72,7%) citate de un singur sistem, 205 (15,4%) de două, 129 (9,7%) de trei și 29 (2,2%) de toate patru." width="960" height="396" loading="lazy" />
  <figcaption>Grafic 2 — De câte sisteme a fost citat fiecare domeniu. Redesenat de AI Visibility Lab din cifrele publicate de Prefer în <a href="https://tryprefer.com/data/ai-answer-study/" target="_blank" rel="noopener noreferrer">„How AI engines search and cite: 960 answers measured”</a>. <sup><a href="#fn-6">6</a></sup></figcaption>
</figure>
<table>
  <thead><tr><th scope="col">Același domeniu a fost citat de…</th><th scope="col">Număr domenii</th><th scope="col">Pondere din total</th></tr></thead>
  <tbody>
    <tr><th scope="row">Un singur sistem</th><td>966</td><td>72,7%</td></tr>
    <tr><th scope="row">Două sisteme</th><td>205</td><td>15,4%</td></tr>
    <tr><th scope="row">Trei sisteme</th><td>129</td><td>9,7%</td></tr>
    <tr><th scope="row">Toate patru sistemele</th><td>29</td><td>2,2%</td></tr>
  </tbody>
</table>
<p>Totuși, există o nuanță care schimbă interpretarea: <strong>23 dintre cele 25 de domenii cel mai des citate au apărut în cel puțin trei sisteme.</strong> Sursele rare sunt puternic fragmentate, dar multe dintre sursele dominante traversează mai multe ecosisteme. Afirmația „fiecare AI folosește un internet complet diferit” ar fi, prin urmare, excesivă.</p>
<p>Și stabilitatea diferă. Conform indicatorului de suprapunere între rulările aceleiași întrebări definit de Prefer, rezultatul a fost de 96% pentru Perplexity, 68% pentru Claude, 37% pentru ChatGPT și 35% pentru Gemini. În acest experiment, anumite produse au repetat mai frecvent aceleași domenii, altele au variat mai mult. Aceste procentaje nu sunt cote de acuratețe și nu trebuie tratate drept proprietăți permanente ale sistemelor. <sup><a href="#fn-6">6</a></sup></p>
<p>Diferența poate fi produsă de numeroși factori: indexurile disponibile, formularea căutărilor intermediare, selecția documentelor, configurarea modelelor, personalizare, localizare, starea webului și regulile produsului pentru afișarea citărilor. Din observațiile externe nu putem deduce, cu certitudine, contribuția fiecărei cauze în fiecare răspuns.</p>
<h2 id="5-sursa-citata-nu-este-acelasi-lucru-cu-brandul-recomandat">5. Sursa citată nu este același lucru cu brandul recomandat</h2>
<p>Un studiu BrightEdge din august 2025 a comparat zeci de mii de interogări identice pe ChatGPT, Google AI Overviews și Google AI Mode. A identificat diferențe în seturile de branduri menționate pentru 61,9% dintre interogările analizate. Numai 17% au produs aceleași branduri în toate cele trei produse. <sup><a href="#fn-8">8</a></sup></p>
<figure>
  <img src="/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/03-branduri-mentionate-brightedge.svg" alt="Grafic cu bare orizontale: Google AI Overviews 6,02 branduri menționate în medie pe interogare, ChatGPT 2,37, Google AI Mode 1,59." width="960" height="348" loading="lazy" />
  <figcaption>Grafic 3 — Numărul mediu de branduri menționate pe interogare. Redesenat de AI Visibility Lab din cifrele publicate de BrightEdge în <a href="https://www.brightedge.com/resources/weekly-ai-search-insights/chatgpt-vs-google-ai-62-brand-recommendation-disagreement" target="_blank" rel="noopener noreferrer">„ChatGPT vs Google AI: 62% Brand Recommendation Disagreement”</a> (27 august 2025). <sup><a href="#fn-8">8</a></sup></figcaption>
</figure>
<table>
  <thead><tr><th scope="col">Produs</th><th scope="col">Număr mediu de branduri menționate / interogare</th></tr></thead>
  <tbody>
    <tr><th scope="row">Google AI Overviews</th><td><strong>6,02</strong></td></tr>
    <tr><th scope="row">ChatGPT</th><td><strong>2,37</strong></td></tr>
    <tr><th scope="row">Google AI Mode</th><td><strong>1,59</strong></td></tr>
  </tbody>
</table>
<p>Aici este important un detaliu metodologic frecvent pierdut în preluările comerciale: <strong>2,37 și 6,02 nu sunt procente, nu sunt „rate de citare” și nu exprimă probabilitatea ca o firmă să fie recomandată.</strong> Ele sunt numere medii de branduri menționate per interogare, în eșantionul BrightEdge. <sup><a href="#fn-8">8</a></sup></p>
<p>Să luăm un exemplu ipotetic. Cineva întreabă: „Ce firmă oferă servicii de audit pentru vizibilitatea în AI?” Un sistem poate răspunde cu un paragraf explicativ și două surse, fără să recomande vreun furnizor. Alt sistem poate enumera cinci furnizori și poate cita doar directoare sau publicații terțe. Un al treilea poate menționa un brand fără să citeze site-ul acelui brand.</p>
<p>Din perspectiva unei firme, rezultatele nu sunt echivalente:</p>
<ol>
  <li><strong>Descoperire:</strong> informația despre companie este accesibilă și identificabilă.</li>
  <li><strong>Mențiune:</strong> numele companiei apare efectiv în răspuns.</li>
  <li><strong>Citare:</strong> propriul domeniu sau o sursă despre companie este afișată ca referință.</li>
  <li><strong>Recomandare:</strong> compania este propusă ca opțiune pentru nevoia utilizatorului.</li>
  <li><strong>Acțiune:</strong> utilizatorul intră pe site, solicită ofertă sau contactează firma.</li>
</ol>
<p>Fiecare nivel poate fi observat și măsurat separat. Saltul de la unul la altul nu este garantat.</p>
<h2 id="6-romania-cat-de-mult-folosesc-oamenii-ai-si-pentru-ce">6. România: cât de mult folosesc oamenii AI și pentru ce?</h2>
<p>Pentru România există două tipuri de dovezi care trebuie citite separat: statisticile oficiale despre adopția tehnologiei și sondajele care întreabă utilizatorii ce fac efectiv cu aceste instrumente.</p>
<p>Conform Eurostat, <strong>17,8% dintre persoanele de 16–74 de ani din România</strong> au folosit instrumente de AI generativ în cele trei luni anterioare cercetării din 2025, față de <strong>32,7% la nivelul Uniunii Europene</strong>. În grupa de vârstă 16–24 de ani, ponderea a fost de <strong>44,1% în România</strong>, comparativ cu <strong>63,8% în UE</strong>. <sup><a href="#fn-9">9</a></sup><sup><a href="#fn-10">10</a></sup></p>
<p>Într-un alt indicator Eurostat, <strong>5,2% dintre întreprinderile românești</strong> cu cel puțin 10 angajați utilizau tehnologii AI în 2025, față de <strong>20,0% în UE</strong>. Este un indicator despre întreprinderi și tehnologii AI, nu despre procentul tuturor firmelor care apar în răspunsurile ChatGPT. <sup><a href="#fn-11">11</a></sup></p>
<figure>
  <img src="/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/04-eurostat-romania-ue.svg" alt="Grafic cu bare grupate, Eurostat 2025: AI generativ 16–74 ani România 17,8%, UE 32,7%; AI generativ 16–24 ani România 44,1%, UE 63,8%; întreprinderi care folosesc AI România 5,2%, UE 20,0%." width="960" height="460" loading="lazy" />
  <figcaption>Grafic 4 — Utilizarea AI în România și în UE, 2025. Redesenat de AI Visibility Lab din cifrele publicate de Eurostat în <a href="https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20251216-3" target="_blank" rel="noopener noreferrer">știrea din 16 decembrie 2025</a>, <a href="https://ec.europa.eu/eurostat/web/products-eurostat-news/w/edn-20260210-1" target="_blank" rel="noopener noreferrer">știrea din 10 februarie 2026</a> și <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises" target="_blank" rel="noopener noreferrer">Statistics Explained</a>. <sup><a href="#fn-9">9</a></sup><sup><a href="#fn-10">10</a></sup><sup><a href="#fn-11">11</a></sup></figcaption>
</figure>
<table>
  <thead><tr><th scope="col">Indicator Eurostat, 2025</th><th scope="col">România</th><th scope="col">UE</th><th scope="col">Populația măsurată</th></tr></thead>
  <tbody>
    <tr><th scope="row">Utilizare AI generativ</th><td>17,8%</td><td>32,7%</td><td>Persoane 16–74 ani, ultimele trei luni</td></tr>
    <tr><th scope="row">Utilizare AI generativ în rândul tinerilor</th><td>44,1%</td><td>63,8%</td><td>Persoane 16–24 ani, ultimele trei luni</td></tr>
    <tr><th scope="row">Utilizare tehnologii AI în întreprinderi</th><td>5,2%</td><td>20,0%</td><td>Întreprinderi cu minimum 10 angajați</td></tr>
  </tbody>
</table>
<p>Datele nu justifică să spunem că „numai 17,8% dintre români folosesc vreodată AI” ori că „doar 5,2% dintre firme pot fi găsite de AI”. Sunt definiții statistice și universuri distincte. Pentru alți indicatori de adopție, măsurați diferit, vezi și <a href="/lab/articole/decalaj-viteza-ai-adoptie-2026">„AI aleargă, adopția merge pe jos: decalajul din 2026”</a>.</p>
<h3 id="cand-ai-intra-in-decizia-de-cumparare">Când AI intră în decizia de cumpărare</h3>
<p>Studiul Reveal Market Resources nr. 206, realizat online între 14 și 20 ianuarie 2026 pe 1.000 de adulți utilizatori de internet din mediul urban, raportează că <strong>68%</strong> dintre respondenți folosesc AI în activitățile cotidiene, față de <strong>47%</strong> în studiul anterior. În rândul utilizatorilor AI din eșantion, <strong>91%</strong> declară că folosesc tehnologia pentru informații despre branduri și produse, iar <strong>65%</strong> spun că le influențează decizia de cumpărare. <sup><a href="#fn-12">12</a></sup></p>
<figure>
  <img src="/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/05-utilizari-ai-romania-reveal.svg" alt="Grafic cu bare orizontale, sondaj Reveal 2026: 91% caută informații despre branduri și produse, 65% compară produse și prețuri, 65% declară influență asupra deciziei de cumpărare, 55% citesc sau rezumă recenzii, 41% obțin recomandări personalizate." width="960" height="414" loading="lazy" />
  <figcaption>Grafic 5 — Utilizări AI relevante pentru cumpărare în România. Redesenat de AI Visibility Lab din cifrele publicate de Reveal Marketing Research în <a href="https://reveal.ro/media/integrare-accelerata-a-ai-in-rutina-romanilor/" target="_blank" rel="noopener noreferrer">„Integrare accelerată a AI în rutina românilor”</a> (studiul nr. 206). <sup><a href="#fn-12">12</a></sup></figcaption>
</figure>
<table>
  <thead><tr><th scope="col">Comportament declarat de utilizatorii AI</th><th scope="col">Procent raportat</th></tr></thead>
  <tbody>
    <tr><th scope="row">Caută informații despre branduri și produse</th><td><strong>91%</strong></td></tr>
    <tr><th scope="row">Compară produse și prețuri</th><td><strong>65%</strong></td></tr>
    <tr><th scope="row">Declară influență asupra deciziei de cumpărare</th><td><strong>65%</strong></td></tr>
    <tr><th scope="row">Citesc sau rezumă recenzii cu AI</th><td><strong>55%</strong></td></tr>
    <tr><th scope="row">Obțin recomandări personalizate</th><td><strong>41%</strong></td></tr>
  </tbody>
</table>
<p>Același studiu a indicat ChatGPT drept platforma utilizată cel mai des dintre cele raportate: <strong>83%</strong> dintre utilizatorii AI, urmat de Gemini (<strong>35%</strong>) și Microsoft Copilot (<strong>15%</strong>). Respondenții pot folosi mai multe platforme, astfel încât procentele nu se însumează la 100% și nu reprezintă cote de piață în sensul traficului sau veniturilor. <sup><a href="#fn-12">12</a></sup></p>
<p>Diferența dintre Eurostat și Reveal nu este, în sine, o contradicție. Eurostat urmărește indicatori armonizați pentru populații și perioade definite; Reveal este un sondaj online în mediul urban, cu întrebări diferite și alte baze de calcul. <strong>Nu este corect să transformăm 17,8% și 68% într-o curbă a creșterii adopției AI</strong>, ca și cum ar reprezenta aceeași măsurătoare la un an distanță.</p>
<p>Ce putem spune, cu mai multă siguranță, este că în segmentul de utilizatori investigați de Reveal, AI participă deja la descoperirea produselor, comparație și documentarea deciziei de cumpărare.</p>
<h2 id="7-ce-citeaza-sistemele-ai-cand-raspund-despre-romania">7. Ce citează sistemele AI când răspund despre România?</h2>
<p>Aici trecem de la intențiile declarate ale utilizatorilor la <strong>comportamentul observat al răspunsurilor</strong>.</p>
<h3 id="7-1-studiul-mjrc-zece-sisteme-doua-limbi-si-aproximativ-360-000-de-raspunsuri">7.1. Studiul MJRC: zece sisteme, două limbi și aproximativ 360.000 de răspunsuri</h3>
<p>Proiectul <em>AI Information Map: Romania</em>, publicat de Media and Journalism Research Center (MJRC), analizează aproximativ 360.000 de răspunsuri arhivate, obținute de la zece sisteme AI cu întrebări despre România în română și engleză. Intervalul documentat este ianuarie 2025–martie 2026; cercetarea este prezentată ca fiind în desfășurare, iar anumite procente se pot actualiza. <sup><a href="#fn-13">13</a></sup></p>
<p>În distribuția generală a surselor folosite sau citate, raportul evidențiază:</p>
<table>
  <thead><tr><th scope="col">Sursă</th><th scope="col">Pondere în sursele analizate de MJRC</th></tr></thead>
  <tbody>
    <tr><th scope="row">Comisia Europeană</th><td>4,0%</td></tr>
    <tr><th scope="row">OECD</th><td>3,9%</td></tr>
    <tr><th scope="row">Romania Insider</th><td>3,4%</td></tr>
    <tr><th scope="row">Radio România Internațional</th><td>3,2%</td></tr>
    <tr><th scope="row">Wikipedia</th><td>3,0%</td></tr>
    <tr><th scope="row">Digi24</th><td>2,2%</td></tr>
    <tr><th scope="row">Agerpres</th><td>1,7%</td></tr>
    <tr><th scope="row">YouTube</th><td>1,6%</td></tr>
    <tr><th scope="row">Reuters</th><td>1,3%</td></tr>
    <tr><th scope="row">HotNews</th><td>1,2%</td></tr>
    <tr><th scope="row">Libertatea</th><td>1,1%</td></tr>
    <tr><th scope="row">Știrile ProTV</th><td>1,1%</td></tr>
    <tr><th scope="row">Toate celelalte surse</th><td>72,4%</td></tr>
  </tbody>
</table>
<p><em>Procentele reprezintă ponderea surselor în corpusul MJRC, nu probabilitatea ca unul dintre aceste site-uri să fie citat la următoarea întrebare. Totalul poate diferi cu 0,1 puncte procentuale din cauza rotunjirilor.</em></p>
<p>Studiul semnalează și o diferență între limbile folosite: întrebările formulate în română au adus mai vizibil în răspuns publicații locale, în timp ce cele formulate în engleză au favorizat mai mult instituții și surse internaționale. Digi24 a avut, spre exemplu, o pondere de 4,1% între sursele aferente întrebărilor în română. <sup><a href="#fn-13">13</a></sup></p>
<p>Interpretarea practică nu este „scrie totul exclusiv în română” sau „publică totul în engleză”. Mai util este să verificăm <strong>în ce limbă, cu ce formulare și pentru ce nevoie reală</strong> încearcă utilizatorii să identifice entitatea.</p>
<h3 id="7-2-monitorizarea-geoflux-diferente-intre-chatgpt-gemini-si-perplexity">7.2. Monitorizarea GEOflux: diferențe între ChatGPT, Gemini și Perplexity</h3>
<p>GEOflux publică un raport actualizat pe ferestre mobile de 30 de zile pentru România, bazat pe întrebări comerciale puse zilnic în cinci domenii — bănci, asigurări, modă, e-commerce și turism — sistemelor ChatGPT, Gemini și Perplexity. Raportul pentru bănci, de exemplu, folosește aceleași 25 de întrebări în fiecare zi. <sup><a href="#fn-15">15</a></sup><sup><a href="#fn-16">16</a></sup></p>
<p>La consultarea raportului agregat din 7 noiembrie 2026, valorile afișate pentru numărul mediu de linkuri-sursă per răspuns erau următoarele:</p>
<figure>
  <img src="/images/lab/de-unde-isi-iau-informatiile-ai-surse-citari-romania/06-linkuri-sursa-geoflux-romania.svg" alt="Grafic cu bare orizontale: în raportul GEOflux pentru România, consultat la 7 noiembrie 2026, Perplexity a afișat în medie 11,7 linkuri-sursă pe răspuns, ChatGPT 7,0 și Gemini 4,7." width="960" height="348" loading="lazy" />
  <figcaption>Grafic 6 — Linkuri-sursă medii pe răspuns în raportul GEOflux despre România. Redesenat de AI Visibility Lab din valorile afișate în <a href="https://www.geoflux.ai/ro/state-of-ai" target="_blank" rel="noopener noreferrer">„State of AI Search — România”</a>, consultat la 7 noiembrie 2026. <sup><a href="#fn-15">15</a></sup></figcaption>
</figure>
<table>
  <thead><tr><th scope="col">Sistem</th><th scope="col">Linkuri-sursă medii / răspuns, în fereastra observată</th></tr></thead>
  <tbody>
    <tr><th scope="row">Perplexity</th><td><strong>11,7</strong></td></tr>
    <tr><th scope="row">ChatGPT</th><td><strong>7,0</strong></td></tr>
    <tr><th scope="row">Gemini</th><td><strong>4,7</strong></td></tr>
  </tbody>
</table>
<p>Aici avem o ilustrare foarte bună a caracterului contextual al statisticilor: rezultatele din România nu reproduc automat ordinea și proporțiile studiului Prefer. Raportul GEOflux este comercial, privește industrii definite și se actualizează; nu reprezintă un recensământ al tuturor răspunsurilor în limba română. Valorile afișate pot fi deja diferite când cititorul accesează pagina. <sup><a href="#fn-15">15</a></sup></p>
<p>Monitorizarea arată și că sistemele pot plasa branduri diferite pe primul loc chiar în cadrul aceleiași industrii. În raportul pentru sectorul bancar din România, de exemplu, primul brand după frecvența mențiunilor diferă între ChatGPT, Gemini și Perplexity. Un clasament al vizibilității are sens <strong>numai împreună cu sistemul, industria, perioada și întrebările care l-au produs</strong>. <sup><a href="#fn-16">16</a></sup></p>
<h3 id="7-3-piata-de-carte-a-avea-un-site-citat-nu-inseamna-a-primi-recomandarea">7.3. Piața de carte: a avea un site citat nu înseamnă a primi recomandarea</h3>
<p>Websem a analizat 180 de răspunsuri în limba română despre cumpărarea de cărți, provenite din 18 întrebări, cinci sisteme și două rulări din iulie 2026. Cercetarea a monitorizat 21 de branduri și a identificat 422 de domenii distincte în răspunsurile care conțineau surse. <sup><a href="#fn-17">17</a></sup></p>
<p>În <strong>105 din cele 180 de răspunsuri (58%)</strong>, niciunul dintre cele <strong>21 de branduri mari monitorizate</strong> nu a fost menționat. Nu înseamnă că răspunsurile nu conțineau <em>niciun brand posibil</em>, ci că nu includeau branduri din grupul urmărit. Această delimitare este esențială.</p>
<p>Experimentul arată cât de greșită poate fi echivalența dintre notorietatea unui brand în piață și vizibilitatea sa într-un set de răspunsuri AI. În plus, un domeniu poate apărea ca sursă chiar dacă brandul asociat nu este recomandat explicit.</p>
<p>Raportul provine de la un furnizor comercial de servicii AEO/GEO și trebuie citit cu aceeași exigență metodologică pe care o aplicăm tuturor studiilor: interogări, perioadă, selecția brandurilor, mod de numărare și accesibilitatea datelor.</p>
<h2 id="8-ce-ne-spun-toate-acestea-despre-piata-romaneasca">8. Ce ne spun toate acestea despre piața românească?</h2>
<p>Cele trei tipuri de măsurători nu trebuie amestecate:</p>
<table>
  <thead><tr><th scope="col">Întrebarea cercetării</th><th scope="col">Exemplu de studiu</th><th scope="col">Ce putem concluziona</th><th scope="col">Ce nu putem concluziona</th></tr></thead>
  <tbody>
    <tr><th scope="row"><strong>Cine folosește AI?</strong></th><td>Eurostat, Reveal</td><td>Adopție și comportamente declarate în populațiile măsurate.</td><td>Ce branduri sunt citate în răspunsuri.</td></tr>
    <tr><th scope="row"><strong>Ce surse sunt afișate?</strong></th><td>Prefer, Searlo, MJRC, GEOflux</td><td>Domeniile și linkurile observate în răspunsuri concrete.</td><td>Compoziția integrală a datelor de antrenare.</td></tr>
    <tr><th scope="row"><strong>Ce branduri sunt menționate?</strong></th><td>BrightEdge, GEOflux, Websem</td><td>Frecvența mențiunilor în interogări definite.</td><td>Că mențiunea produce automat încredere, contact sau achiziție.</td></tr>
    <tr><th scope="row"><strong>Cât de stabil este fenomenul?</strong></th><td>Rulări repetate Prefer, GEOflux, Websem</td><td>Variație între sisteme și momente măsurate.</td><td>O regulă universală sau o garanție pe termen lung.</td></tr>
  </tbody>
</table>
<p>Privite împreună, datele arată o piață în care utilizarea AI pentru informare și alegere comercială există deja, iar rezultatele afișate pot varia între platforme, limbi și nișe. Nu demonstrează însă că toate firmele trebuie să urmărească aceeași platformă, că numărul mai mare de citări este echivalent cu o recomandare mai bună sau că există o combinație de tactici care asigură includerea într-un răspuns.</p>
<p>În special pentru serviciile locale, rămâne o întrebare insuficient explorată: <strong>cum se comportă aceste sisteme atunci când un utilizator caută un prestator dintr-un oraș românesc, într-o categorie în care informația publică este incompletă, fragmentată sau contradictorie?</strong></p>
<p>Această întrebare poate fi investigată prin aceleași principii pe care AI Visibility Lab le utilizează deja în <a href="/lab/market-discovery">Market Discovery</a>: delimitarea universului de interogări, capturi și observații datate, diferențierea entităților, măsurare și interpretare. Datele despre adoptarea AI nu pot înlocui un astfel de experiment.</p>
<h2 id="9-cum-ar-trebui-testata-vizibilitatea-unei-entitati">9. Cum ar trebui testată vizibilitatea unei entități?</h2>
<p>Un audit punctual răspunde la întrebarea „ce s-a întâmplat în această sesiune?”. Pentru a evalua o tendință este nevoie de o metodă repetabilă.</p>
<p>Un protocol exploratoriu pentru România ar putea include:</p>
<ol>
  <li><strong>Un univers fix de întrebări</strong>, separat pe intenții: informare, comparație, recomandare, verificare, achiziție.</li>
  <li><strong>Sisteme și configurații documentate:</strong> produsul folosit, modelul când este disponibil, țara, limba, tipul de cont, instrumentele și modul de căutare.</li>
  <li><strong>Rulări repetate</strong>, în zile diferite, fără a interpreta diferența dintre două răspunsuri ca dovadă automată a unei modificări de algoritm.</li>
  <li><strong>Capturi complete și datate:</strong> text, surse, URL-uri, entități, versiuni și erori observate.</li>
  <li><strong>Codificare separată:</strong> apariția brandului, poziția mențiunii, mențiune neutră, recomandare, citarea propriului domeniu, citarea unei surse terțe.</li>
  <li><strong>Clasificarea surselor:</strong> pagini oficiale, site-uri comerciale, directoare, publicații, comunități, documente instituționale și altele.</li>
  <li><strong>Re-măsurare și comparabilitate:</strong> aceleași întrebări și reguli, cu schimbările de model și produs consemnate explicit.</li>
</ol>
<p>Indicatorii utili nu se reduc la „câte linkuri am obținut?”. Pot fi calculați, între altele, ponderea răspunsurilor în care entitatea este menționată, frecvența recomandărilor, ponderea citărilor directe, diversitatea surselor, suprapunerea între platforme și variația rezultatelor între rulări.</p>
<p>În raportare trebuie păstrată distincția dintre <strong>observație</strong>, <strong>măsurare</strong> și <strong>interpretare</strong>. Dacă un brand apare în trei răspunsuri din zece, aceasta este o măsurare. Dacă presupunem că apariția este cauzată de un articol nou, aceea este o ipoteză care cere dovezi suplimentare.</p>
<h3 id="indicatorii-din-business-hub-alta-populatie-alte-reguli-de-numarare">Indicatorii din Business Hub: altă populație, alte reguli de numărare</h3>
<p>Din 10 noiembrie 2026, firmele eligibile care își revendică profilul în Business Hub, spațiul lansat de OpenAI pentru afaceri în ChatGPT, primesc și indicatori nativi ai platformei.<sup><a href="#fn-18">18</a></sup> Ei trebuie citiți după propriile definiții. Pentru o firmă online, „mentions” numără referințele la website, nu simpla apariție a numelui. Pentru o afacere locală, definiția urmărește afișarea rezultatului locației. Documentația descrie o fereastră de 28 de zile, iar valorile lipsă pot reflecta praguri de raportare sau date încă indisponibile, nu neapărat activitate zero.<sup><a href="#fn-19">19</a></sup></p>
<p>Un astfel de indicator nu se combină direct cu ponderea mențiunilor dintr-un set controlat de întrebări, ca în protocolul de mai sus. Cele două observații provin din populații, contexte și reguli de numărare diferite: platforma raportează ce a înregistrat în propriul trafic, după definițiile ei, iar un experiment AVL numără ce apare într-un univers fix de întrebări, în condiții documentate. O raportare utilă le prezintă separat și spune la ce întrebare răspunde fiecare. Diferența dintre profil, agentul firmei și răspunsul independent al ChatGPT e explicată în <a href="/lab/articole/de-la-mentionare-la-tranzactie-ce-inseamna-agentic-visibility#business-hub-si-business-agents-in-chatgpt">articolul despre Agentic Visibility</a>.</p>
<h2 id="10-ce-poate-face-o-companie-fara-sa-controleze-ai-ul">10. Ce poate face o companie fără să controleze AI-ul?</h2>
<p>Documentația publică nu oferă o formulă pentru obținerea garantată a unei citări. Ea oferă, totuși, indicii despre condițiile care merită verificate.</p>
<p><strong>Mai întâi, identitatea.</strong> O companie trebuie să poată fi identificată fără ambiguitate: cine este, unde activează, ce oferă, cui se adresează și prin ce canale poate fi contactată. Numele inconsistent, lipsa datelor elementare și contradicțiile între website și profiluri fac verificarea dificilă atât pentru oameni, cât și pentru sisteme automate.</p>
<p><strong>Apoi, accesibilitatea.</strong> Informația importantă trebuie să poată fi descoperită și interpretată tehnic: pagini accesibile, conținut relevant în HTML, structură clară, date actualizate și lipsa blocajelor accidentale. OpenAI documentează separarea controlului crawlerelor pentru căutare și antrenare; Google precizează că eligibilitatea în AI Overviews și AI Mode nu necesită „optimizări speciale” față de bunele practici fundamentale Search, dar nici nu garantează afișarea. <sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup></p>
<p><strong>Urmează consistența și verificabilitatea.</strong> Un website propriu este o sursă primară controlabilă, dar informațiile externe pot contribui la descoperire, contextualizare și verificare: documentație publică, surse instituționale, publicații independente, directoare relevante, parteneriate și recenzii autentice. Nu toate sunt necesare pentru orice firmă. Nu toate sunt accesibile oricărui AI.</p>
<p><strong>În sfârșit, măsurarea.</strong> Nu evaluăm o strategie pe baza unei singure capturi favorabile și nici nu alegem intervențiile doar pentru că un studiu a raportat multe citări de pe o anumită platformă. Comparăm comportamente repetate, căutăm explicații plauzibile și delimităm ce am observat de ce presupunem.</p>
<p>Această abordare nu promite vizibilitate. Ea creează condiții mai bune pentru ca o entitate să poată fi descoperită și înțeleasă atunci când un sistem AI ajunge la informațiile despre ea.</p>
<h2 id="11-limita-fundamentala-a-studiilor-masuram-sisteme-care-se-schimba-in-timp-ce-le-studiem">11. Limita fundamentală a studiilor: măsurăm sisteme care se schimbă în timp ce le studiem</h2>
<p>Toate studiile prezentate aici sunt fotografii ale unor comportamente observate în intervale definite. Chiar și monitorizările care publică ferestre mobile de 30 de zile reprezintă <strong>măsurători aproape curente pentru un set limitat de interogări</strong>, nu o perspectivă completă, în timp real, asupra tuturor răspunsurilor generate de sistemele AI.</p>
<p>Între data colectării și data publicării unui studiu pot apărea modele noi, actualizări ale instrumentelor de căutare, modificări ale indexurilor, ajustări ale mecanismelor de selecție a surselor și schimbări ale interfețelor. La rândul lor, site-urile și informațiile publice se actualizează.</p>
<p>Să afirmăm că Perplexity a citat în medie 19,48 surse într-un experiment din septembrie 2026 este o afirmație verificabilă. Să spunem că „Perplexity citează întotdeauna aproximativ 19,5 surse” ar fi o generalizare nejustificată. Să observăm că un brand ocupă primul loc într-o fereastră de 30 de zile este util. Să promitem că îl va ocupa și luna următoare, pe baza acelei observații, ar depăși dovezile.</p>
<p>Aceste limitări <strong>nu invalidează studiile</strong>. Ele stabilesc domeniul în care concluziile lor sunt valabile. O cercetare bună nu devine inutilă atunci când sistemul studiat evoluează; devine un reper datat care poate fi comparat cu măsurători ulterioare.</p>
<p>Tocmai de aceea, o analiză AI Visibility matură are nevoie de dată, univers de întrebări, configurație, definițiile indicatorilor și arhivă de dovezi. Fără aceste elemente, o statistică poate fi reprodusă vizual foarte convingător și interpretată complet greșit.</p>
<p><strong>Studiile ne spun ce s-a observat. Nu ne pot garanta ce va apărea la următoarea interogare.</strong></p>
<h2 id="concluzie-sa-fim-pregatiti-sa-fim-gasiti-nu-sa-pretindem-ca-vom-fi-alesi">Concluzie: să fim pregătiți să fim găsiți, nu să pretindem că vom fi aleși</h2>
<p>Datele internaționale și cele despre România converg către o realitate: AI poate participa la modul în care oamenii află despre servicii, compară opțiuni și formulează decizii. Dar sistemele diferă prin sursele afișate, numărul citărilor, brandurile menționate și gradul de stabilitate de la o rulare la alta.</p>
<p>O companie nu controlează modelul, indexul, criteriile de sinteză și nici selecția citărilor. Nu poate obține o garanție că va fi menționată, citată sau recomandată prin simpla respectare a unei liste de „reguli GEO”.</p>
<p>Dar nici incertitudinea nu justifică pasivitatea.</p>
<p>Putem publica informații clare despre cine suntem și ce facem. Putem face aceste informații accesibile tehnic. Putem demonstra competență prin conținut și dovezi, construi relații cu surse independente, corecta inconsecvențele și observa periodic cum suntem reprezentați în răspunsurile AI.</p>
<p>Nu știm câtă greutate acordă fiecare sistem fiecăruia dintre acești factori în orice situație. Știm însă că o prezență publică incompletă, contradictorie sau inaccesibilă limitează inclusiv posibilitatea de a fi descoperit și verificat.</p>
<p><strong>Obiectivul nu este să găsim formula prin care să obligăm AI-ul să ne recomande. Obiectivul este să facem tot ceea ce ține de noi pentru ca, atunci când un sistem AI ajunge să caute informații relevante despre domeniul, serviciile sau compania noastră, să aibă ce găsi, să înțeleagă ce găsește și să poată verifica informațiile.</strong></p>
<p>Nu putem controla dacă vom fi aleși. Dar putem influența cât de pregătiți suntem să fim găsiți.</p>
<h2 id="intrebari-frecvente">Întrebări frecvente</h2>
<h3 id="de-unde-isi-ia-chatgpt-informatiile">De unde își ia ChatGPT informațiile?</h3>
<p>Din tipare învățate în etapa de antrenare și, când produsul și contextul permit, din informații recuperate prin instrumente precum căutarea web sau documente și conectori. Cele două mecanisme nu trebuie confundate. <sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>
<h3 id="care-ai-citeaza-cele-mai-multe-surse">Care AI citează cele mai multe surse?</h3>
<p>În studiul Prefer din septembrie 2026, Perplexity a citat în medie 19,48 surse per răspuns, față de 8,64 Gemini, 4,58 Claude și 3,05 ChatGPT. Sunt rezultate ale acelui experiment, nu un clasament universal. <sup><a href="#fn-6">6</a></sup></p>
<h3 id="daca-un-website-este-accesibil-crawlerelor-ai-va-fi-citat">Dacă un website este accesibil crawlerelor AI, va fi citat?</h3>
<p>Nu. Accesul este doar una dintre condițiile posibile ale descoperirii și utilizării informației. Citarea depinde și de interogare, de recuperare, de sinteză și de selecția surselor afișate. <sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup><sup><a href="#fn-14">14</a></sup></p>
<h3 id="este-acelasi-lucru-sa-fii-citat-si-sa-fii-recomandat">Este același lucru să fii citat și să fii recomandat?</h3>
<p>Nu. Un răspuns poate cita un URL fără să recomande brandul asociat și poate menționa un brand fără să citeze website-ul propriu. <sup><a href="#fn-8">8</a></sup><sup><a href="#fn-17">17</a></sup></p>
<h3 id="ce-procent-dintre-romani-folosesc-ai">Ce procent dintre români folosesc AI?</h3>
<p>Răspunsul depinde de populație și definiție. Eurostat raportează 17,8% pentru utilizarea AI generativ în ultimele trei luni de către persoanele de 16–74 de ani din România, în 2025. Sondajul Reveal din ianuarie 2026 raportează 68% utilizare a AI în activitățile cotidiene în eșantionul său de adulți utilizatori de internet din mediul urban. Indicatorii nu sunt direct comparabili. <sup><a href="#fn-9">9</a></sup><sup><a href="#fn-12">12</a></sup></p>
<h3 id="conteaza-limba-in-care-intreb-un-ai-despre-romania">Contează limba în care întreb un AI despre România?</h3>
<p>Poate conta. Studiul MJRC a observat distribuții diferite ale surselor despre România în răspunsuri la întrebări formulate în română versus engleză. Aceasta este o observație a corpusului studiat, nu o regulă fără excepții. <sup><a href="#fn-13">13</a></sup></p>
<h3 id="ce-pot-face-daca-nu-am-garantia-unei-recomandari">Ce pot face dacă nu am garanția unei recomandări?</h3>
<p>Să construiesc o identitate publică clară, surse accesibile și actualizate, informații verificabile și un proces de măsurare repetată. Aceste acțiuni nu garantează un rezultat, dar reduc problemele observabile pe care o companie le poate controla.</p>
<h2 id="note-metodologice-si-limitari">Note metodologice și limitări</h2>
<ul>
  <li><strong>Tipul datelor:</strong> documentație oficială a furnizorilor, statistici publice, sondaje comerciale și cercetări externe asupra răspunsurilor AI. Nu sunt rezultate ale unui experiment nou realizat pentru acest articol.</li>
  <li><strong>Grafice:</strong> cele șase grafice sunt redesenate de AI Visibility Lab din cifrele publicate de fiecare sursă, numită și legată sub fiecare grafic. Nu adaugă date proprii și nu recalculează indicatorii surselor.</li>
  <li><strong>Perioadă:</strong> studiile citate acoperă ferestre distincte din 2025–2026. Ultima verificare a informațiilor folosite aici: <strong>7 noiembrie 2026</strong>.</li>
  <li><strong>Comparații:</strong> o medie a surselor, o mediană a surselor, o pondere a mențiunilor și o rată de utilizare a tehnologiei sunt indicatori diferiți. Nu se agregă într-un singur scor.</li>
  <li><strong>Reprezentativitate:</strong> studiile internaționale au adesea întrebări în engleză ori domenii specializate; studiile românești au populații-țintă, industrii și proceduri proprii.</li>
  <li><strong>Caracter dinamic:</strong> raportul GEOflux utilizează ferestre mobile; cifrele observate la redactare se pot modifica ulterior. Cercetarea MJRC menționează de asemenea actualizări periodice.</li>
  <li><strong>Conflict de interese:</strong> BrightEdge, Prefer, Searlo, GEOflux și Websem operează în piețe conexe serviciilor SEO/AEO/GEO sau măsurării performanței. Studiile sunt folosite ca observații externe cu metodologie declarată, nu ca validare independentă a ofertelor lor comerciale. AI Visibility Lab cercetează aceeași piață.</li>
  <li><strong>Calitatea citărilor:</strong> numărul de URL-uri nu este o măsură suficientă pentru acuratețe, originalitate, autoritate sau eficiență comercială.</li>
</ul>
<h2 id="surse-si-metodologie">Surse și metodologie</h2>
<p><strong>Documentație oficială</strong></p>
<ol class="avl-footnotes">
  <li id="fn-1"><strong>OpenAI</strong>, <a href="https://help.openai.com/en/articles/7842364-how-chatgpt-and-our-foundation-models-are-developed" target="_blank" rel="noopener noreferrer">How ChatGPT and our foundation models are developed</a> — categorii de date, pre-training, post-training, date sintetice.</li>
  <li id="fn-2"><strong>OpenAI</strong>, <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">Overview of OpenAI Crawlers</a> — OAI-SearchBot, GPTBot, separarea rolurilor și controlul accesului.</li>
  <li id="fn-3"><strong>Google Search Central</strong>, <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">AI features and your website</a> — AI Overviews, AI Mode, query fan-out, eligibilitate și limite.</li>
  <li id="fn-4"><strong>Perplexity Help Center</strong>, <a href="https://www.perplexity.ai/help-center/en/articles/10352903-what-is-pro-search" target="_blank" rel="noopener noreferrer">What is Pro Search?</a> — procesul public de căutare și afișare a surselor.</li>
  <li id="fn-5"><strong>Microsoft Support</strong>, <a href="https://support.microsoft.com/en-us/microsoft-365-copilot/how-web-search-works-in-microsoft-365-copilot-chat-and-agents" target="_blank" rel="noopener noreferrer">How web search works in Copilot Chat and agents</a> — folosirea căutării Bing.</li>
</ol>
<p><strong>Studii de comportament al sistemelor AI</strong></p>
<ol class="avl-footnotes" start="6">
  <li id="fn-6"><strong>Prefer</strong>, <a href="https://tryprefer.com/data/ai-answer-study/" target="_blank" rel="noopener noreferrer">How AI engines search and cite: 960 answers measured</a>, publicat la 19 septembrie 2026; colectare la 13 septembrie 2026.</li>
  <li id="fn-7"><strong>Searlo</strong>, <a href="https://searlo.tech/blog/ai-search-citation-study-2026" target="_blank" rel="noopener noreferrer">ChatGPT, Perplexity, Copilot and Gemini Cite Different Sources: A 120-Answer Study</a>, 29 septembrie 2026; actualizat la 5 octombrie 2026.</li>
  <li id="fn-8"><strong>BrightEdge</strong>, <a href="https://www.brightedge.com/resources/weekly-ai-search-insights/chatgpt-vs-google-ai-62-brand-recommendation-disagreement" target="_blank" rel="noopener noreferrer">ChatGPT vs Google AI: 62% Brand Recommendation Disagreement</a>, 27 august 2025.</li>
</ol>
<p><strong>România: adopție, utilizare și surse citate</strong></p>
<ol class="avl-footnotes" start="9">
  <li id="fn-9"><strong>Eurostat</strong>, <a href="https://ec.europa.eu/eurostat/en/web/products-eurostat-news/w/ddn-20251216-3" target="_blank" rel="noopener noreferrer">32.7% of EU people used generative AI tools in 2025</a>, 16 decembrie 2025.</li>
  <li id="fn-10"><strong>Eurostat</strong>, <a href="https://ec.europa.eu/eurostat/web/products-eurostat-news/w/edn-20260210-1" target="_blank" rel="noopener noreferrer">64% of 16–24-year-olds used AI in 2025</a>, 10 februarie 2026.</li>
  <li id="fn-11"><strong>Eurostat</strong>, <a href="https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises" target="_blank" rel="noopener noreferrer">Use of artificial intelligence in enterprises — Statistics Explained</a> — date 2025.</li>
  <li id="fn-12"><strong>Reveal Marketing Research</strong>, <a href="https://reveal.ro/media/integrare-accelerata-a-ai-in-rutina-romanilor/" target="_blank" rel="noopener noreferrer">Integrare accelerată a AI în rutina românilor</a>, studiul nr. 206, 14–20 ianuarie 2026.</li>
  <li id="fn-13"><strong>Media and Journalism Research Center</strong>, <a href="https://journalismresearch.org/9824-2/" target="_blank" rel="noopener noreferrer">AI Information Map: Romania</a> — 10 sisteme, 2 limbi, cercetare 2025–2026.</li>
  <li id="fn-14"><strong>AI Visibility Lab</strong>, <a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102 — Cum aleg sistemele AI sursele și citările</a> — modelul celor patru filtre.</li>
  <li id="fn-15"><strong>GEOflux</strong>, <a href="https://www.geoflux.ai/ro/state-of-ai" target="_blank" rel="noopener noreferrer">State of AI Search — România</a> — monitorizare comercială, fereastră mobilă, consultare 7 noiembrie 2026.</li>
  <li id="fn-16"><strong>GEOflux</strong>, <a href="https://www.geoflux.ai/ro/state-of-ai/romania/banking" target="_blank" rel="noopener noreferrer">Bănci în România: Stadiul căutării AI</a> — monitorizare sectorială a mențiunilor și citărilor.</li>
  <li id="fn-17"><strong>Websem</strong>, <a href="https://websem.ro/resurse/aeo/studiu-piata-carte-romania" target="_blank" rel="noopener noreferrer">Cine vinde cărți când clientul întreabă un AI?</a>, experiment iulie 2026.</li>
  <li id="fn-18"><strong>OpenAI</strong>, <a href="https://openai.com/index/introducing-businesses-chatgpt/" target="_blank" rel="noopener noreferrer">Introducing Businesses in ChatGPT</a>, 10 noiembrie 2026 — lansarea Business Hub și Business Agents, în versiune beta; consultată la 11 noiembrie 2026.</li>
  <li id="fn-19"><strong>OpenAI Help Center</strong>, <a href="https://help.openai.com/en/articles/20001635-setting-up-your-business-on-chatgpt" target="_blank" rel="noopener noreferrer">Setting up your business on ChatGPT</a> — eligibilitate, verificare și definițiile indicatorilor din Insights; documentație curentă, consultată la 11 noiembrie 2026.</li>
</ol>
<h3 id="lecturi-conexe-din-ai-visibility-lab">Lecturi conexe din AI Visibility Lab</h3>
<ul>
  <li><a href="/lab/articole/public-nu-inseamna-accesibil-de-ce-fiecare-ai-vede-un-internet-diferit">Public nu mai înseamnă accesibil: de ce fiecare sistem AI vede un internet diferit</a></li>
  <li><a href="/lab/articole/harta-de-citare-mentiuni-externe-romania">Harta de citare: cum afli empiric ce surse contează pentru vizibilitatea AI în România</a></li>
  <li><a href="/lab/articole/social-media-devine-strat-informational-pentru-ai">Social media devine strat informațional pentru AI</a></li>
  <li><a href="/lab/market-discovery">Market Discovery — AI Visibility Lab</a></li>
</ul>
<h3 id="nota-de-volatilitate">Notă de volatilitate</h3>
<p>Documentația furnizorilor, comportamentul produselor AI și rapoartele pe ferestre mobile (GEOflux, MJRC) se pot schimba după data verificării. Valorile GEOflux din Graficul 6 sunt cele afișate la 7 noiembrie 2026. Toate sursele au fost verificate la 7 noiembrie 2026. Subsecțiunea despre indicatorii Business Hub și sursele 18–19 au fost adăugate la 12 noiembrie 2026, pe baza documentației OpenAI consultate la 11 noiembrie 2026; restul articolului nu a fost reverificat în această rundă.</p>
<h2 id="istoricul-versiunilor">Istoricul versiunilor</h2>
<table>
  <thead>
    <tr><th>Versiune</th><th>Dată</th><th>Modificări</th></tr>
  </thead>
  <tbody>
    <tr><td>1.0</td><td>7 noiembrie 2026</td><td>Publicare inițială.</td></tr>
    <tr><td>1.1</td><td>12 noiembrie 2026</td><td>Subsecțiune nouă în secțiunea 9, „Indicatorii din Business Hub: altă populație, alte reguli de numărare”, despre indicatorii nativi lansați de OpenAI la 10 noiembrie 2026 (definiția „mentions”, fereastra de 28 de zile, valorile lipsă) și despre separarea lor de măsurătorile AVL. Sursele 18–19 adăugate.</td></tr>
  </tbody>
</table>

<p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 7 noiembrie 2026.</em></p>
`;
