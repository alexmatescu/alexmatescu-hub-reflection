/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const etichetaAbonatRelatiaPrezentareAiSearchMeta = {
  title:
    "Eticheta „Abonat”: cum folosește Google relația cu publicul pentru a evidenția surse în AI Search",
  description:
    "Google evidențiază în AI Overviews și AI Mode linkurile din publicațiile la care utilizatorul are un abonament legat de contul Google. Ce demonstrează funcția, ce nu dovedește despre ranking și ce pot face publisherii, creatorii și firmele.",
  canonical:
    "https://delamatescu.ro/lab/articole/eticheta-abonat-relatia-prezentare-ai-search",
  datePublished: "2026-08-14",
  dateModified: "2026-08-26",
  lastReviewed: "2026-08-27",
  image: {
    url: "https://delamatescu.ro/images/blog/Subscription_highlights_Ir7y0f1.width-2000.format-webp.webp",
    alt: "Captură de ecran din anunțul oficial Google (mai 2026, „5 new ways to explore the web with generative AI in Search”): un răspuns AI Mode pentru interogarea „I'm looking for free kid-friendly events in Nashville this summer”, în care sursa The Local Tribune apare marcată cu eticheta „Subscribed”, alături de un panou cu surse conexe recomandate de Google AI Search.",
  },
  about: [
    { name: "Google AI Mode" },
    { name: "Google AI Overviews" },
    { name: "Subscription Linking" },
    { name: "Audience relationship" },
    { name: "AI visibility" },
  ],
  keywords: [
    "Subscription Linking",
    "eticheta Abonat Google",
    "AI Overviews",
    "Google AI Mode",
    "query fan-out",
    "relație cu publicul AI Search",
    "vizibilitate AI",
  ],
  citations: [
    {
      name: "Google, Hema Budaraju — 5 new ways to explore the web with generative AI in Search",
      url: "https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/",
    },
    {
      name: "Google for Developers — What is Subscription Linking?",
      url: "https://developers.google.com/news/subscription-linking/getting-started/overview",
    },
    {
      name: "Google for Developers — Subscription Linking, Troubleshooting",
      url: "https://developers.google.com/news/subscription-linking/implementation/troubleshooting",
    },
    {
      name: "Google for Developers — The flow of information (Subscription Linking)",
      url: "https://developers.google.com/news/subscription-linking/getting-started/flow",
    },
    {
      name: "Google for Developers — Implementation Overview (Subscription Linking)",
      url: "https://developers.google.com/news/subscription-linking/implementation/overview",
    },
    {
      name: "Google for Developers — Subscription Linking, Best practices",
      url: "https://developers.google.com/news/subscription-linking/implementation/best-practices",
    },
    {
      name: "Andrew Deck, Nieman Journalism Lab — Google highlights links from subscribed publications in new AI Overviews update",
      url: "https://www.niemanlab.org/2026/05/google-highlights-links-from-subscribed-publications-in-new-ai-overviews-update/",
    },
    {
      name: "Chartbeat — Pageviews are down, but AI's impact is complicated",
      url: "https://chartbeat.com/resources/articles/pageviews-down-ai-impact/",
    },
    {
      name: "Google Search Central — Optimizing your website for generative AI features on Google Search",
      url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    },
    {
      name: "Hanaa' Tameez, Nieman Journalism Lab — The Athletic teams up with sports creators to reach new (and younger) audiences",
      url: "https://www.niemanlab.org/2026/08/the-athletic-teams-up-with-sports-creators-to-reach-new-and-younger-audiences/",
    },
  ],
  faq: [
    {
      q: "Ce este eticheta „Abonat” din AI Overviews și AI Mode?",
      a: "Este o etichetă prin care Google evidențiază linkurile provenite din abonamentele utilizatorului legate de contul Google. Google a anunțat funcția pe 6 mai 2026 și spune că, în testele sale timpurii, oamenii au fost semnificativ mai predispuși să dea clic pe aceste linkuri.",
    },
    {
      q: "Este abonamentul un factor de ranking pentru AI Search?",
      a: "Google nu a documentat abonamentul ca factor general de ranking. Documentația susține că relația poate produce highlighted content și vizibilitate personalizată pentru cititorii conectați, ceea ce este diferit de a afirma că subscription count crește rankingul general al unui domeniu.",
    },
    {
      q: "Subscription Linking este doar pentru publicațiile de știri?",
      a: "Nu conform documentației actuale. Google spune că este disponibil publisherilor news sau non-news, dacă au paying readers sau contributions care oferă entitlement la conținut.",
    },
    {
      q: "Se aplică unui newsletter gratuit?",
      a: "Nu automat. Subscription Linking este documentat pentru relații cu paying readers sau contributors și presupune integrarea entitlement-urilor. O adresă dintr-o listă gratuită de e-mail nu este echivalentă cu mecanismul documentat.",
    },
    {
      q: "Ce poate măsura un publisher după implementare?",
      a: "Google spune că Search Console poate fi folosit pentru a urmări clicks, impressions și CTR prin search appearance-ul Subscribed Content.",
    },
    {
      q: "Social media devine mai puțin importantă?",
      a: "Nu rezultă asta din anunț. Google evidențiază simultan abonamentele legate și perspective din social media, forumuri și alte surse de primă mână. Rolurile canalelor sunt diferite.",
    },
    {
      q: "Ce este query fan-out?",
      a: "Google îl definește ca un set de interogări concurente și relaționate generate de model pentru a recupera informații suplimentare și rezultate relevante. Nu există o regulă publică potrivit căreia fiecare constrângere din prompt devine automat o sub-interogare.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const etichetaAbonatRelatiaPrezentareAiSearchHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-08-14">14 august 2026</time> · Actualizat: <time datetime="2026-08-26">26 august 2026</time> · Ultima verificare factuală: <time datetime="2026-08-27">27 august 2026</time></p>

      <figure>
        <img src="/images/blog/Subscription_highlights_Ir7y0f1.width-2000.format-webp.webp" alt="Captură de ecran din anunțul oficial Google (mai 2026, „5 new ways to explore the web with generative AI in Search”): un răspuns AI Mode pentru interogarea „I'm looking for free kid-friendly events in Nashville this summer”, în care sursa The Local Tribune apare marcată cu eticheta „Subscribed”, alături de un panou cu surse conexe recomandate de Google AI Search." width="2000" height="1088" loading="lazy" />
        <figcaption>Exemplu publicat de Google în mai 2026: linkurile provenite din abonamentele utilizatorului sunt marcate cu eticheta „Subscribed” în AI Search. Sursa imaginii: <a href="https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/" target="_blank" rel="noopener noreferrer">Google</a>. Google and the Google logo are trademarks of Google LLC.</figcaption>
      </figure>

      <p><strong>Pe 6 mai 2026, Google a anunțat că AI Mode și AI Overviews pot evidenția linkurile provenite din publicațiile la care utilizatorul are un abonament legat de contul Google. În testele timpurii ale companiei, oamenii au fost „semnificativ mai predispuși” să dea clic pe linkurile marcate drept abonamente. Funcția este importantă pentru că introduce în mod vizibil relația preexistentă dintre utilizator și sursă în prezentarea răspunsului. Nu demonstrează însă că „abonamentul” este un nou factor general de ranking și nici că orice newsletter, comunitate sau listă de e-mail produce un semnal pentru AI Search.</strong><sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <p>Aceasta este distincția centrală:</p>

      <blockquote><p><strong>Google documentează o relație utilizator–publisher care poate modifica vizibilitatea și prezentarea unor linkuri pentru acel utilizator. Nu documentează un multiplicator general de ranking aplicat sursei.</strong></p></blockquote>

      <h2>Ce a anunțat Google pe 6 mai 2026</h2>

      <p>Anunțul a fost publicat de Hema Budaraju, Vice President, Product Management, Search, sub titlul „5 new ways to explore the web with generative AI in Search”.<sup><a href="#fn-1">1</a></sup></p>

      <h3>1. Sugestii pentru explorare suplimentară</h3>

      <p>La finalul unor răspunsuri apar recomandări către articole sau analize care tratează alte fațete ale subiectului. Titlul și conținutul secțiunii sunt dinamice, în funcție de query și răspuns.<sup><a href="#fn-1">1</a></sup></p>

      <h3>2. Evidențierea abonamentelor</h3>

      <p>Google spune că evidențiază linkurile din <strong>news subscriptions</strong> ale utilizatorului în AI Mode și AI Overviews. În testele timpurii, compania afirmă că oamenii au fost <strong>„significantly more likely to click”</strong> linkurile marcate ca provenind din abonamentele lor.<sup><a href="#fn-1">1</a></sup></p>

      <p>Google nu publică în acel anunț procentul creșterii, dimensiunea eșantionului, metodologia sau un studiu independent. Afirmația trebuie tratată ca <strong>rezultat intern raportat de Google</strong>, nu ca benchmark universal de CTR.</p>

      <h3>3. Perspective din discuții publice și surse de primă mână</h3>

      <p>AI responses pot include previzualizări din discuții publice, social media, comunități și alte surse firsthand, cu informații precum numele creatorului, handle-ul sau comunitatea.<sup><a href="#fn-1">1</a></sup></p>

      <p>Aceasta este o schimbare de prezentare și explorare, nu dovada că toate tipurile de UGC primesc aceeași greutate algoritmică.</p>

      <h3>4. Mai multe linkuri lângă textul relevant</h3>

      <p>Google spune că afișează mai multe linkuri direct lângă pasajele din AI response pe care le susțin.<sup><a href="#fn-1">1</a></sup></p>

      <p>Asta face atribuirea mai vizibilă pentru utilizator, dar nu demonstrează că fiecare paragraf al unei pagini este o unitate independentă de ranking sau citare.</p>

      <h3>5. Preview pentru linkuri pe desktop</h3>

      <p>La hover, un link poate afișa numele site-ului sau titlul paginii. Google explică faptul că utilizatorii pot ezita să dea clic dacă nu știu unde ajung.<sup><a href="#fn-1">1</a></sup></p>

      <p>Concluzia editorială sănătoasă este: <strong>folosește titluri descriptive și o identitate de sursă clară</strong>. Nu avem însă o formulă publică pentru efectul titlului asupra CTR.</p>

      <h2>Etichetă de prezentare, nu dovadă de „ranking factor”</h2>

      <p>Titlul inițial al articolului vorbea despre relație ca despre un <strong>„semnal de clasare”</strong>. Formularea este prea puternică.</p>

      <p>Ce documentează Google este că:</p>

      <ol>
        <li>utilizatorul are o relație de abonament legată de contul Google;</li>
        <li>conținutul publisherului poate fi evidențiat pentru acel utilizator;</li>
        <li>în AI Mode și AI Overviews, unele linkuri pot primi marcajul „Subscribed”;</li>
        <li>Google a observat intern mai multe clickuri pe linkurile etichetate.<sup><a href="#fn-1">1</a></sup></li>
      </ol>

      <p>Documentația Subscription Linking spune separat că publisherii pot obține <strong>increased visibility</strong> pentru conținutul abonamentelor plătite în produse Google precum Search și Discover.<sup><a href="#fn-2">2</a></sup></p>

      <p>Asta este suficient pentru a spune:</p>

      <blockquote><p><strong>relația poate influența prezentarea și vizibilitatea personalizată a conținutului.</strong></p></blockquote>

      <p>Nu este suficient pentru a spune:</p>

      <blockquote><p><strong>abonamentul este un factor general de ranking în AI Search.</strong></p></blockquote>

      <p>Documentația de troubleshooting precizează că există factori de ranking atunci când Google afișează funcția „From Your Subscriptions”, dar asta nu transformă relația de abonament într-un factor general al rankingului web.<sup><a href="#fn-3">3</a></sup></p>

      <h2>Ce s-a schimbat în documentația Google după anunțul din mai</h2>

      <p>Pe 6 mai, comunicarea de produs vorbea despre <strong>news subscriptions</strong>.<sup><a href="#fn-1">1</a></sup></p>

      <p>Documentația tehnică Google actualizată ulterior spune însă că <strong>Subscription Linking este disponibil pentru publisheri news sau non-news</strong>, cu condiția să aibă cititori plătitori sau contribuții care oferă entitlement la conținut.<sup><a href="#fn-2">2</a></sup></p>

      <p>Google precizează că serviciul poate fi folosit de publisheri news sau non-news, că trebuie să existe paying readers și că relația este legată de contul Google al cititorului.<sup><a href="#fn-2">2</a></sup></p>

      <p>Prin urmare, propoziția „funcția este destinată exclusiv publicațiilor de presă” nu mai este corectă conform documentației actuale.</p>

      <h3>Ce NU înseamnă această extindere</h3>

      <p>Nu înseamnă că orice newsletter gratuit este eligibil, că o listă de e-mail produce automat un semnal, că followerii devin subscriptions pentru Google sau că relația este folosită în toate sistemele de ranking.</p>

      <p>Mecanismul documentat este legat de <strong>abonamente sau contribuții plătite și entitlements</strong>.</p>

      <h2>Cum funcționează Subscription Linking, tehnic</h2>

      <p>Google documentează un proces mai concret decât simpla existență a unei adrese de e-mail.<sup><a href="#fn-4">4</a></sup><sup><a href="#fn-5">5</a></sup></p>

      <p>În linii mari:</p>

      <ol>
        <li>publisherul are un sistem de conturi;</li>
        <li>cititorul are un abonament sau entitlement plătit;</li>
        <li>cititorul își poate lega contul publisherului de contul Google;</li>
        <li>publisherul creează un identificator stabil pentru cititor, numit PPID;</li>
        <li>publisherul sincronizează entitlement-ul cu Google;</li>
        <li>Google poate evidenția conținutul publisherului pentru cititorul respectiv în produse eligibile.</li>
      </ol>

      <p>Implementarea presupune Publisher Center, Google Cloud, domeniu verificat în Search Console, JavaScript client-side pentru legare și integrare server-side pentru sincronizarea entitlement-urilor.<sup><a href="#fn-5">5</a></sup></p>

      <p>Asta schimbă interpretarea: nu discutăm despre „Google vede că cineva îmi urmărește newsletterul”, ci despre <strong>o relație explicită și tehnic legată între un cititor plătitor, publisher și contul Google</strong>.</p>

      <h2>Poți măsura efectul Subscription Linking</h2>

      <p>Google spune că performanța poate fi urmărită în Search Console prin search appearance-ul <strong>Subscribed Content</strong>, inclusiv:</p>

      <ul>
        <li>clicks;</li>
        <li>impressions;</li>
        <li>click-through rate.<sup><a href="#fn-4">4</a></sup><sup><a href="#fn-6">6</a></sup></li>
      </ul>

      <p>Asta permite publisherului să măsoare performanța propriei implementări în loc să extrapoleze din afirmația generală a Google.</p>

      <h2>Context: traficul de search către publisheri este în scădere</h2>

      <p>Nieman Journalism Lab a analizat anunțul Google în contextul presiunii crescute asupra traficului de referral către publisheri.<sup><a href="#fn-7">7</a></sup></p>

      <p>Datele Chartbeat oferă un context cuantificat. Chartbeat spune că, în rețeaua sa de mii de site-uri:</p>

      <ul>
        <li>Google Search pageviews au scăzut cu aproximativ <strong>34%</strong> între decembrie 2024 și decembrie 2025;</li>
        <li>publisherii mari au înregistrat aproximativ <strong>-22%</strong> la search referral;</li>
        <li>publisherii medii aproximativ <strong>-47%</strong>;</li>
        <li>publisherii mici aproximativ <strong>-60%</strong>.<sup><a href="#fn-8">8</a></sup></li>
      </ul>

      <p>Chartbeat mai spune că referral-urile din ChatGPT au crescut puternic procentual, dar reprezentau încă <strong>sub 1% din totalul pageviews</strong> în analiza respectivă.<sup><a href="#fn-8">8</a></sup></p>

      <p>Aceste cifre nu demonstrează că AI Overviews au cauzat singure declinul. Ele arată că publisherii operează într-un mediu în care dependența exclusivă de search referral devine mai riscantă.</p>

      <h2>De ce contează relația cu publicul dincolo de presă</h2>

      <p>Anunțul Google oferă un exemplu clar în care relația dintre utilizator și publisher este cunoscută de produs și schimbă felul în care conținutul este prezentat.</p>

      <p>Asta justifică o întrebare strategică:</p>

      <blockquote><p><strong>cât din audiența mea este doar mediată de un intermediar și cât este legată direct de mine printr-o relație pe care o pot administra?</strong></p></blockquote>

      <p>Dar trebuie păstrată o diferență importantă. Pentru cine vrea să măsoare empiric, nu doar să presupună, ce surse externe contează deja pentru propria nișă, am descris metoda în <a href="/lab/articole/harta-de-citare-mentiuni-externe-romania">harta de citare</a> — un exercițiu diferit de Subscription Linking, dar cu aceeași miză: relația reală cu publicul, măsurată, nu presupusă.</p>

      <h3>Relație directă cu valoare comercială</h3>

      <p>Poate include newsletter, CRM, abonament, comunitate proprie, cont de client sau membership. Acestea pot fi utile pentru retenție, revenire, comunicare și venit, în limitele consimțământului și legislației aplicabile.</p>

      <h3>Relație vizibilă tehnic pentru Google Subscription Linking</h3>

      <p>În documentația actuală, aceasta este mult mai restrânsă:</p>

      <blockquote><p><strong>abonament/contribuție plătită + entitlement + legare la contul Google + integrare tehnică.</strong></p></blockquote>

      <p>Cele două categorii se suprapun doar parțial.</p>

      <h2>Framework AI Visibility Lab: public descoperit versus public legat direct</h2>

      <p>Ca model de lucru, AI Visibility Lab separă două stări ale relației cu publicul. Aceasta este o taxonomie proprie, nu terminologie Google.</p>

      <h3>Public descoperit</h3>

      <p>Persoana ajunge prin Google Search, AI Mode, ChatGPT, Perplexity, social media, recomandare sau un link extern. Relația poate fi de moment.</p>

      <h3>Public legat direct</h3>

      <p>Persoana a făcut un pas suplimentar: s-a înscris, a creat cont, s-a abonat, a cumpărat, a cerut contact sau revine direct.</p>

      <p>Această relație poate fi mai ușor de menținut în timp. Dar nu toate formele de „public legat direct” sunt vizibile pentru Google. Subscription Linking este doar <strong>un caz tehnic specific</strong>.</p>

      <h2>Ce putem deduce și ce nu putem deduce</h2>

      <h3>Putem deduce</h3>

      <p>Google consideră suficient de valoroasă relația de subscription încât să o folosească pentru evidențiere personalizată în propriile produse.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <p>Google a observat intern mai multe clickuri pe linkurile marcate „Subscribed”.<sup><a href="#fn-1">1</a></sup></p>

      <p>Publisherii eligibili pot măsura în Search Console performanța conținutului de tip Subscribed Content.<sup><a href="#fn-6">6</a></sup></p>

      <h3>Nu putem deduce</h3>

      <p>Nu putem spune că:</p>

      <ul>
        <li>un subscriber crește autoritatea domeniului;</li>
        <li>subscriber count este factor de ranking;</li>
        <li>o listă de e-mail influențează AI Overview ranking;</li>
        <li>follower count influențează sau nu influențează direct un LLM;</li>
        <li>relațiile directe vor deveni obligatoriu un factor GEO;</li>
        <li>Google va extinde mecanismul la newslettere gratuite.</li>
      </ul>

      <p>Acestea ar fi ipoteze.</p>

      <h2>Actualizările Google nu împing toate către același tip de sursă</h2>

      <p>Anunțul din mai este interesant pentru că Google evidențiază simultan două forme diferite de relație cu informația.</p>

      <h3>Relația cu publisherul</h3>

      <p>Subscription highlighting favorizează sursele pentru care utilizatorul are deja un abonament legat.</p>

      <h3>Experiența first-hand din comunități</h3>

      <p>Secțiunile cu perspective publice evidențiază creatori, comunități, discuții și experiențe personale.<sup><a href="#fn-1">1</a></sup></p>

      <p>Aceste două mecanisme nu trebuie interpretate ca două strategii de ranking opuse. Mai curând, Google încearcă să faciliteze accesul la tipuri diferite de surse: unele deja cunoscute utilizatorului și altele firsthand pe care utilizatorul nu le cunoaște încă.</p>

      <p>Aceasta este interpretarea AI Visibility Lab, nu poziția oficială Google.</p>

      <h2>Social media: nu dispare totul când te oprești din postat</h2>

      <p>Versiunea inițială a articolului spunea că o postare „produce câteva zile de atenție și dispare” și că followerii „nu produc niciun semnal în afara platformei”.</p>

      <p>Aceste formulări sunt prea absolute.</p>

      <p>Conținutul social poate rămâne public, poate fi indexat, poate primi linkuri, poate genera branded search, poate fi citat sau preluat în alte surse și poate continua să circule după publicare — teme pe care le-am tratat pe larg în <a href="/lab/articole/social-media-vizibilitate-ai">analiza despre social media și vizibilitatea AI</a>.</p>

      <p>Google însuși spune că AI responses pot include perspective din <strong>social media și public online discussions</strong>.<sup><a href="#fn-1">1</a></sup></p>

      <p>Problema strategică a platformelor sociale este alta:</p>

      <blockquote><p><strong>creatorul nu controlează integral distribuția, accesibilitatea crawlerelor, feed rankingul sau continuitatea reach-ului.</strong></p></blockquote>

      <p>De aceea este rezonabil să construiești și canale directe. Dar nu este corect să spui că social media are „zero acumulare” sau „zero semnal”.</p>

      <h2>Ce înseamnă pentru creatori</h2>

      <p>Recomandarea sănătoasă nu este „renunță la social și construiește newsletter”.</p>

      <p>Este:</p>

      <blockquote><p><strong>nu depinde de un singur intermediar pentru întreaga relație cu publicul.</strong></p></blockquote>

      <p>Un creator poate folosi social media pentru discovery, distribuție, comunitate, colaborări și feedback. În paralel, poate construi site propriu, newsletter, conturi proprii de utilizator, memberships și contacte directe.</p>

      <p>Dacă există o ofertă plătită și publisherul îndeplinește cerințele Google, Subscription Linking devine o opțiune tehnică separată.</p>

      <h2>Ce înseamnă pentru firme</h2>

      <p>Pentru o firmă, AI visibility poate produce discovery. Dar discovery și retenția sunt două probleme diferite.</p>

      <p>Un utilizator poate descoperi o firmă prin AI Search, Google, review, forum sau recomandare. După primul contact, valoarea pe termen lung depinde de alte lucruri: calitatea produsului, experiență, CRM, suport, reputație, comunicare și motivele de revenire.</p>

      <p>De aceea este mai corect să spunem:</p>

      <blockquote><p><strong>AI visibility poate contribui la achiziție; nu garantează retenția.</strong></p></blockquote>

      <p>Afirmația inițială „o recomandare AI transferă atenție, nu încredere” poate rămâne ca metaforă strategică, dar nu ca regulă comportamentală universală.</p>

      <h2>Linkurile inline nu demonstrează „granular ranking”</h2>

      <p>Google spune că adaugă mai multe linkuri lângă textul relevant din AI responses.<sup><a href="#fn-1">1</a></sup></p>

      <p>Este tentant să concluzionăm că fiecare paragraf cu o singură idee primește mai multe șanse de citare. Nu avem dovada unui asemenea mecanism.</p>

      <p>Totuși, organizarea clară a conținutului rămâne o recomandare bună. Ghidul oficial Google pentru generative AI Search recomandă pagini bine organizate în paragrafe, secțiuni și headings clare.<sup><a href="#fn-9">9</a></sup></p>

      <blockquote><p><strong>structurează conținutul clar pentru utilizator și pentru înțelegerea paginii; nu pretinde că fiecare paragraf creează un „citation slot”.</strong></p></blockquote>

      <h2>Query fan-out: ce este confirmat</h2>

      <p>Google confirmă explicit query fan-out.</p>

      <p>În ghidul său actual, îl definește ca un set de <strong>interogări concurente și relaționate generate de model</strong>, folosite pentru a solicita informație suplimentară și rezultate relevante.<sup><a href="#fn-9">9</a></sup></p>

      <p>Ce nu putem spune este că fiecare constrângere din prompt devine automat un query separat. Providerul nu documentează această regulă — am detaliat mecanismele de rescriere a interogărilor și query fan-out, inclusiv diferențele dintre limbi, în <a href="/lab/articole/cuvant-cheie-vs-fraza-tokenizare">analiza despre cuvânt-cheie vs frază în AI Search</a>.</p>

      <h2>Titlul paginii și identitatea sursei contează pentru click — dar fără formulă</h2>

      <p>Google spune că preview-ul linkului poate arăta website name și page title și explică faptul că utilizatorii pot ezita să dea clic atunci când nu știu destinația.<sup><a href="#fn-1">1</a></sup></p>

      <p>Asta justifică un nume de site coerent, un titlu descriptiv și branding recognoscibil. Nu justifică afirmația că titlul descriptiv este un nou ranking signal în AI Mode.</p>

      <h2>Ce este rezonabil să faci, ordonat după certitudine</h2>

      <h3>Nivel 1 — util indiferent de funcția Google</h3>

      <p>Construiește o relație directă cu publicul prin canale pe care le poți administra: site, newsletter, CRM, conturi de client, memberships și contact direct.</p>

      <h3>Nivel 2 — confirmat pentru Search și AI Search</h3>

      <p>Menține pagini publice și crawlable, titluri descriptive, conținut original, structură clară, information hierarchy bună și experiență firsthand acolo unde este relevantă.</p>

      <p>Google spune explicit că aceleași principii SEO de bază rămân valabile pentru AI Overviews și AI Mode.<sup><a href="#fn-9">9</a></sup></p>

      <h3>Nivel 3 — relevant pentru publisherii cu paying readers</h3>

      <p>Dacă ai conținut plătit, user accounts, subscribers/contributors, Publisher Center și Search Console, evaluează Subscription Linking.</p>

      <h3>Nivel 4 — măsoară în loc să presupui</h3>

      <p>Dacă implementezi Subscription Linking, folosește Search Console și filtrul <strong>Subscribed Content</strong> pentru a compara impressions, clicks și CTR.<sup><a href="#fn-6">6</a></sup></p>

      <h3>Nivel 5 — ipoteză, nu recomandare actuală</h3>

      <p>Nu construi strategie pe presupunerea că un newsletter gratuit va deveni ranking signal, că followerii vor fi importați în AI ranking sau că Google va extinde exact același mecanism la alte tipuri de relație.</p>

      <h2>Un context util: instituții și creatori</h2>

      <p>În august 2026, Nieman Lab a documentat programul The Athletic cu creatori sportivi. După aproape un an, The Athletic raporta aproximativ 50 de milioane de video views și 100.000 de followers noi pe platformele sale.<sup><a href="#fn-10">10</a></sup></p>

      <p>Acest exemplu nu demonstrează nimic despre rankingul AI. Este însă relevant strategic: publisherii instituționali încearcă să combine infrastructura editorială proprie cu distribuția și relația creatorilor.</p>

      <h2>Întrebări frecvente</h2>

      <h3>Ce este eticheta „Abonat” din AI Overviews și AI Mode?</h3>

      <p>Este o etichetă prin care Google evidențiază linkurile provenite din abonamentele utilizatorului legate de contul Google. Google a anunțat funcția pe 6 mai 2026 și spune că, în testele sale timpurii, oamenii au fost semnificativ mai predispuși să dea clic pe aceste linkuri.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Este abonamentul un factor de ranking pentru AI Search?</h3>

      <p>Google nu a documentat abonamentul ca factor general de ranking. Documentația susține că relația poate produce highlighted content și vizibilitate personalizată pentru cititorii conectați. Asta este diferit de a afirma că subscription count crește rankingul general al unui domeniu.<sup><a href="#fn-2">2</a></sup></p>

      <h3>Subscription Linking este doar pentru publicațiile de știri?</h3>

      <p>Nu conform documentației actuale. Google spune că este disponibil publisherilor news sau non-news, dacă au paying readers sau contributions care oferă entitlement la conținut.<sup><a href="#fn-2">2</a></sup></p>

      <h3>Se aplică unui newsletter gratuit?</h3>

      <p>Nu automat. Subscription Linking este documentat pentru relații cu paying readers/contributors și presupune integrarea entitlement-urilor. O simplă adresă dintr-o listă gratuită de e-mail nu este echivalentă cu mecanismul documentat.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-5">5</a></sup></p>

      <h3>Ce poate măsura un publisher după implementare?</h3>

      <p>Google spune că Search Console poate fi folosit pentru a urmări clicks, impressions și CTR prin search appearance-ul <strong>Subscribed Content</strong>.<sup><a href="#fn-6">6</a></sup></p>

      <h3>Social media devine mai puțin importantă?</h3>

      <p>Nu rezultă asta din anunț. Google evidențiază simultan abonamentele legate și perspective din social media, forumuri și alte surse de primă mână. Rolurile canalelor sunt diferite.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Ce este query fan-out?</h3>

      <p>Google îl definește ca un set de interogări concurente și relaționate generate de model pentru a recupera informații suplimentare și rezultate relevante. Nu există o regulă publică potrivit căreia fiecare constrângere din prompt devine automat o sub-interogare.<sup><a href="#fn-9">9</a></sup></p>

      <h2>Metodologie și niveluri de certitudine</h2>

      <h3>Surse primare</h3>

      <p>Afirmațiile despre funcțiile Google sunt bazate în primul rând pe Google Blog, Google Search Central și documentația Google Subscription Linking.</p>

      <h3>Surse secundare</h3>

      <p>Nieman Journalism Lab este folosit pentru contextul jurnalistic și pentru exemplul The Athletic.</p>

      <h3>Date comerciale / first-party analytics</h3>

      <p>Chartbeat este folosit numai pentru propriul dataset privind evoluția referral traffic. Cifrele nu sunt extrapolate la întregul web.</p>

      <h3>Analiză AI Visibility Lab</h3>

      <p>Următoarele sunt interpretări proprii:</p>

      <ul>
        <li>public descoperit versus public legat direct;</li>
        <li>relația directă ca activ strategic;</li>
        <li>separarea discovery de retention;</li>
        <li>implicațiile pentru creatori și firme.</li>
      </ul>

      <p>Ele nu sunt prezentate drept mecanisme oficiale Google.</p>

      <h3>Surse și metodologie</h3>

      <table>
        <thead>
          <tr><th scope="col">Sursă</th><th scope="col">Tip</th><th scope="col">Ce validează</th><th scope="col">Limită</th></tr>
        </thead>
        <tbody>
          <tr><td><a href="https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/" target="_blank" rel="noopener noreferrer">Google Blog — anunțul din 6 mai 2026</a></td><td>documentație oficială</td><td>eticheta „Subscribed”, perspective, linkuri inline, preview, query fan-out</td><td>anunț de produs; fără procente, eșantion sau studiu independent</td></tr>
          <tr><td><a href="https://developers.google.com/news/subscription-linking/getting-started/overview" target="_blank" rel="noopener noreferrer">Google for Developers — What is Subscription Linking?</a></td><td>documentație tehnică oficială</td><td>disponibilitate news/non-news, paying readers, „increased visibility”</td><td>descrie condițiile de eligibilitate, nu impactul de ranking</td></tr>
          <tr><td><a href="https://developers.google.com/news/subscription-linking/implementation/troubleshooting" target="_blank" rel="noopener noreferrer">Google for Developers — Troubleshooting</a></td><td>documentație tehnică oficială</td><td>existența unor „ranking factors” pentru afișare, fără garanție per query</td><td>nu detaliază ce anume sunt factorii de ranking</td></tr>
          <tr><td><a href="https://developers.google.com/news/subscription-linking/getting-started/flow" target="_blank" rel="noopener noreferrer">Google for Developers — The flow of information</a></td><td>documentație tehnică oficială</td><td>legarea conturilor, PPID, entitlements</td><td>descriere de proces, nu de algoritm de ranking</td></tr>
          <tr><td><a href="https://developers.google.com/news/subscription-linking/implementation/overview" target="_blank" rel="noopener noreferrer">Google for Developers — Implementation Overview</a></td><td>documentație tehnică oficială</td><td>cerințele de infrastructură (Publisher Center, Cloud, Search Console)</td><td>ghid de implementare, nu SLA de vizibilitate</td></tr>
          <tr><td><a href="https://developers.google.com/news/subscription-linking/implementation/best-practices" target="_blank" rel="noopener noreferrer">Google for Developers — Best practices</a></td><td>documentație tehnică oficială</td><td>măsurarea în Search Console (Subscribed Content)</td><td>indică ce se poate măsura, nu ce rezultat garantează</td></tr>
          <tr><td><a href="https://www.niemanlab.org/2026/05/google-highlights-links-from-subscribed-publications-in-new-ai-overviews-update/" target="_blank" rel="noopener noreferrer">Nieman Journalism Lab — context publisheri</a></td><td>publicație secundară reputabilă</td><td>interpretarea jurnalistică a anunțului Google</td><td>sursă secundară; nu documentație de produs</td></tr>
          <tr><td><a href="https://chartbeat.com/resources/articles/pageviews-down-ai-impact/" target="_blank" rel="noopener noreferrer">Chartbeat — Pageviews are down</a></td><td>date comerciale first-party</td><td>evoluția search referral pe rețeaua proprie de site-uri</td><td>dataset propriu Chartbeat; nu reprezintă întregul web</td></tr>
          <tr><td><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Google Search Central — AI optimization guide</a></td><td>documentație oficială</td><td>definiția query fan-out, principii SEO valabile și pentru AI Search</td><td>ghid general; nu un algoritm dezvăluit</td></tr>
          <tr><td><a href="https://www.niemanlab.org/2026/08/the-athletic-teams-up-with-sports-creators-to-reach-new-and-younger-audiences/" target="_blank" rel="noopener noreferrer">Nieman Journalism Lab — The Athletic</a></td><td>publicație secundară reputabilă</td><td>exemplu de creator program instituțional</td><td>studiu de caz punctual, nu generalizabil</td></tr>
        </tbody>
      </table>

      <p><strong>Data ultimei verificări a linkurilor și afirmațiilor: 27 august 2026</strong> (verificare inițială la redactare: 26 august 2026). Toate citatele exacte din documentația Google și cifrele Chartbeat au fost reverificate live la data reviziei, fără nicio schimbare față de starea consemnată inițial.</p>

      <h3>Notă de volatilitate</h3>

      <p>Subscription Linking, AI Mode, AI Overviews și documentația Reader Revenue Manager se pot modifica rapid. Afirmațiile despre produsele Google descriu <strong>starea documentată și reverificată la 27 august 2026</strong>.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">Google, Hema Budaraju — „5 new ways to explore the web with generative AI in Search", 6 mai 2026. Sursa primară pentru eticheta „Subscribed”, perspectives, inline links, previews și mențiunea query fan-out: <a href="https://blog.google/products-and-platforms/products/search/explore-web-generative-ai-search/" target="_blank" rel="noopener noreferrer">blog.google/…/explore-web-generative-ai-search</a></li>
        <li id="fn-2">Google for Developers — „What is Subscription Linking?", actualizat 3 iunie 2026. Documentează disponibilitatea pentru publisheri news și non-news cu paying readers și „increased visibility” pentru conținutul din abonamente: <a href="https://developers.google.com/news/subscription-linking/getting-started/overview" target="_blank" rel="noopener noreferrer">developers.google.com/…/getting-started/overview</a></li>
        <li id="fn-3">Google for Developers — „Subscription Linking — Troubleshooting", verificat în august 2026. Precizează explicit că există „ranking factors” pentru afișarea „From Your Subscriptions” și că apariția nu e garantată pentru orice interogare: <a href="https://developers.google.com/news/subscription-linking/implementation/troubleshooting" target="_blank" rel="noopener noreferrer">developers.google.com/…/troubleshooting</a></li>
        <li id="fn-4">Google for Developers — „The flow of information — Subscription Linking", 2026. Explică legarea contului publisherului cu contul Google, PPID-urile și sincronizarea entitlement-urilor: <a href="https://developers.google.com/news/subscription-linking/getting-started/flow" target="_blank" rel="noopener noreferrer">developers.google.com/…/getting-started/flow</a></li>
        <li id="fn-5">Google for Developers — „Implementation Overview — Subscription Linking", actualizat 13 iulie 2026. Documentează Publisher Center, Google Cloud, verificarea în Search Console, integrarea client-side și sincronizarea server-side a entitlement-urilor: <a href="https://developers.google.com/news/subscription-linking/implementation/overview" target="_blank" rel="noopener noreferrer">developers.google.com/…/implementation/overview</a></li>
        <li id="fn-6">Google for Developers — „Subscription Linking — Best practices", actualizat 13 iulie 2026. Documentează măsurarea în Search Console prin search appearance-ul „Subscribed Content", inclusiv clicks, impressions și CTR: <a href="https://developers.google.com/news/subscription-linking/implementation/best-practices" target="_blank" rel="noopener noreferrer">developers.google.com/…/best-practices</a></li>
        <li id="fn-7">Andrew Deck, Nieman Journalism Lab — „Google highlights links from subscribed publications in new AI Overviews update", 6 mai 2026. Context editorial despre presiunea pe traficul de referral al publisherilor: <a href="https://www.niemanlab.org/2026/05/google-highlights-links-from-subscribed-publications-in-new-ai-overviews-update/" target="_blank" rel="noopener noreferrer">niemanlab.org/2026/05/google-highlights-links-from-subscribed-publications-in-new-ai-overviews-update</a></li>
        <li id="fn-8">Chartbeat — „Pageviews are down, but AI's impact is complicated", 2026. Raportează -34% Google Search pageviews (decembrie 2024 – decembrie 2025) și -22%/-47%/-60% search referral pentru publisherii mari/medii/mici; ChatGPT sub 1% din pageviews: <a href="https://chartbeat.com/resources/articles/pageviews-down-ai-impact/" target="_blank" rel="noopener noreferrer">chartbeat.com/resources/articles/pageviews-down-ai-impact</a></li>
        <li id="fn-9">Google Search Central — „Optimizing your website for generative AI features on Google Search", verificat în august 2026. Definește query fan-out și recomandă conținut people-first, original și bine structurat: <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">developers.google.com/…/ai-optimization-guide</a></li>
        <li id="fn-10">Hanaa' Tameez, Nieman Journalism Lab — „The Athletic teams up with sports creators to reach new (and younger) audiences", 18 august 2026. The Athletic raporta aproape 50 de milioane de video views și 100.000 de followers noi după aproape un an de Creator Program: <a href="https://www.niemanlab.org/2026/08/the-athletic-teams-up-with-sports-creators-to-reach-new-and-younger-audiences/" target="_blank" rel="noopener noreferrer">niemanlab.org/2026/08/the-athletic-teams-up-with-sports-creators-to-reach-new-and-younger-audiences</a></li>
      </ol>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 27 august 2026.</em></p>
`;
