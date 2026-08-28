import type { LabArticleMeta } from "@/data/lab-seo";

/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const catDureazaIndexareCitareAiMeta: LabArticleMeta = {
  title:
    "Cât durează până apari în Google și cât până te citează AI-ul? Ce știm, ce nu știm și ce poți măsura",
  description:
    "Ce documentează sursele oficiale despre crawl, indexare și apariția în răspunsurile AI, ce termene nu sunt publice și cum separi descoperirea, indexarea, clasarea și citarea. Analiză AI Visibility Lab.",
  canonical: "https://delamatescu.ro/lab/articole/cat-dureaza-indexare-citare-ai",
  category: "Search & Retrieval",
  articleType: "Analiză",
  datePublished: "2026-08-05",
  dateModified: "2026-08-10",
  about: [
    { name: "Google indexing" },
    { name: "AI citations" },
    { name: "ChatGPT Search" },
    { name: "IndexNow" },
  ],
  faq: [
    {
      q: "Cât durează până Google indexează o pagină nouă?",
      a: "Google nu publică o medie universală de indexare. Pentru recrawl, documentația oficială spune că procesul poate dura de la câteva zile la câteva săptămâni și că solicitarea nu garantează indexarea sau apariția în rezultate.",
    },
    {
      q: "Cât durează până ChatGPT citează un articol nou?",
      a: "OpenAI nu publică un termen sau SLA de la publicare la prima citare. Pentru includerea completă în ChatGPT Search, site-ul trebuie să permită accesul OAI-SearchBot, dar accesibilitatea nu garantează selectarea ca sursă.",
    },
    {
      q: "Cât durează până Perplexity citează o pagină?",
      a: "Perplexity nu publică un SLA de la publicare la prima citare. Documentația sa descrie PerplexityBot și condițiile tehnice de acces, nu un termen garantat de citare.",
    },
    {
      q: "Google AI Overviews necesită un anumit ranking organic?",
      a: "Google nu publică o cerință de tip top 10 sau top 30. Pentru eligibilitate ca supporting link în AI Overviews sau AI Mode, pagina trebuie să fie indexată și eligibilă să apară în Google Search cu un snippet.",
    },
    {
      q: "Google susține IndexNow?",
      a: "La verificarea din 10 august 2026, Google nu apare în lista oficială a motoarelor participante IndexNow. Lista se poate modifica în timp.",
    },
    {
      q: "IndexNow garantează indexarea imediată?",
      a: "Nu. IndexNow notifică imediat motoarele participante că un URL s-a schimbat și le permite să prioritizeze crawl-ul, dar indexarea și afișarea rămân decizii ale fiecărui motor.",
    },
    {
      q: "Dacă nu am fost citat după două luni, înseamnă că pagina nu va fi citată?",
      a: "Nu. Nu există un prag oficial universal de 60, 90 sau 180 de zile după care o pagină devine neeligibilă sau improbabilă pentru citare în toate sistemele AI.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const catDureazaIndexareCitareAiHtml = `
      <p><a href="/despre" rel="author">Alex Matescu</a> · Fondator și coordonator <a href="/lab">AI Visibility Lab</a></p>
      <p>Publicat: <time datetime="2026-08-05">5 august 2026</time> · Actualizat: <time datetime="2026-08-10">10 august 2026</time> · Ultima verificare factuală: <time datetime="2026-08-10">10 august 2026</time></p>

      <p><strong>Nu există un termen universal și verificabil care să spună după câte zile o pagină nouă va fi indexată de Google sau citată de ChatGPT, Perplexity, Copilot ori funcțiile AI din Google Search. Google spune oficial că recrawl-ul poate dura de la câteva zile la câteva săptămâni și că solicitarea de crawl nu garantează indexarea. OpenAI și Perplexity documentează condițiile tehnice prin care un site poate fi accesat de sistemele lor de căutare, dar nu publică un SLA pentru timpul de la publicare la prima citare. IndexNow notifică instant motoarele participante că un URL s-a schimbat, dar nici protocolul nu garantează că pagina va fi indexată sau afișată imediat.</strong><sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <p>Aceasta este limita factuală de la care trebuie pornit.</p>

      <p>Orice cifră mai precisă de tipul „Google indexează în X zile”, „ChatGPT citează în Y zile” sau „după Z zile pagina nu va mai fi citată” descrie cel mult un anumit experiment sau dataset. Nu poate fi tratată ca termen general al platformei fără o confirmare oficială sau un studiu suficient de robust și replicat.</p>

      <h2>Patru ceasuri, nu unul</h2>

      <p>În practică există cel puțin patru procese diferite, iar confundarea lor produce aproape toate afirmațiile exagerate despre „cât durează”.</p>

      <p><strong>1. Descoperirea</strong> este momentul în care sistemul află că URL-ul există. Un URL poate fi descoperit prin linkuri, sitemap, notificări precum IndexNow, feeduri sau alte surse.</p>

      <p><strong>2. Crawl-ul</strong> este momentul în care un crawler încearcă să acceseze pagina și conținutul ei.</p>

      <p><strong>3. Indexarea și eligibilitatea</strong> descriu procesul prin care un motor decide dacă și cum păstrează pagina în index și dacă ea poate fi afișată. Google precizează explicit că o solicitare de recrawl nu garantează includerea în rezultate.<sup><a href="#fn-1">1</a></sup></p>

      <p><strong>4. Citarea sau folosirea într-un răspuns AI</strong> este un proces ulterior și dependent de interogare. Faptul că o pagină este accesibilă sau indexată nu înseamnă că va fi selectată drept sursă pentru un anumit răspuns.</p>

      <p>Pentru Google AI Overviews și AI Mode, Google spune că pagina trebuie să fie indexată și eligibilă să apară în Google Search cu un snippet. Nu există cerințe tehnice suplimentare speciale pentru funcțiile AI, dar nici îndeplinirea cerințelor nu garantează că pagina va fi afișată.<sup><a href="#fn-5">5</a></sup></p>

      <p>Această separare este importantă pentru AEO/GEO: <strong>descoperirea rapidă nu este sinonimă cu indexarea rapidă, iar indexarea nu este sinonimă cu citarea.</strong></p>

      <h2>Criteriul 1: Motorul și suprafața</h2>

      <p>Motoarele și suprafețele AI nu publică un termen comun de la publicare la vizibilitate.</p>

      <table>
        <thead>
          <tr>
            <th>Suprafață</th>
            <th>Ce este documentat oficial</th>
            <th>Ce NU este documentat oficial</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Google Search</td><td>Recrawl-ul poate dura de la câteva zile la câteva săptămâni; cererea nu garantează indexarea</td><td>O medie universală de indexare</td></tr>
          <tr><td>Google AI Overviews / AI Mode</td><td>Pagina trebuie să fie indexată și eligibilă pentru Google Search cu snippet</td><td>Un timp de la publicare la apariția/citarea în AI</td></tr>
          <tr><td>ChatGPT Search</td><td>OAI-SearchBot trebuie să poată accesa site-ul pentru includerea completă în search summaries/snippets; rankingul folosește mai mulți factori</td><td>Un SLA public de la publicare la citare</td></tr>
          <tr><td>Perplexity</td><td>PerplexityBot este folosit pentru a descoperi și indexa informații pentru search; modificările de acces pot necesita până la 24 de ore pentru a se reflecta în sistemele Perplexity</td><td>Un termen public de la publicare la citare</td></tr>
          <tr><td>Microsoft Copilot cu web search</td><td>Unele suprafețe Copilot folosesc Bing Search pentru grounding în conținut public</td><td>Un termen universal de la publicare la folosirea într-un răspuns Copilot</td></tr>
          <tr><td>IndexNow</td><td>Motoarele participante sunt notificate imediat despre URL-uri noi, modificate sau șterse</td><td>Garanția că URL-ul va fi indexat sau afișat imediat</td></tr>
          <tr><td>Model fără acces la web/retrieval</td><td>Nu poate afla în timp real despre o pagină nouă doar pentru că aceasta a fost publicată</td><td>Un calendar public universal de introducere a acelei pagini în parametrii modelului</td></tr>
        </tbody>
      </table>

      <p>Surse oficiale: Google Search Central, OpenAI Help Center, Perplexity Docs, Microsoft Learn și IndexNow.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-5">5</a></sup><sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup><sup><a href="#fn-6">6</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <h3>Ce poate fi concluzionat</h3>

      <p>Un publisher poate controla dacă pagina este <strong>tehnic accesibilă și descoperibilă</strong>, dar nu poate controla sau prezice cu precizie când o platformă o va selecta pentru un răspuns.</p>

      <p>De aceea, orice strategie serioasă trebuie să măsoare separat fiecare suprafață. Un URL poate apărea în Google Search și să nu fie citat de ChatGPT; poate fi citat de Perplexity și să nu apară într-un AI Overview; sau poate fi cunoscut de Bing fără să fie folosit într-un anumit răspuns Copilot.</p>

      <h2>Criteriul 2: Domeniul și capacitatea de crawl</h2>

      <p>Nu există o formulă oficială de tipul „un domeniu nou durează de X ori mai mult”.</p>

      <p>Google explică faptul că programele de crawl și indexare depind de numeroase semnale și resurse. Pentru site-urile nou lansate, sitemapurile sunt recomandate tocmai pentru a ajuta Google să descopere URL-urile, dar Google nu publică o medie separată de indexare pentru „domeniu nou” versus „domeniu consacrat”.<sup><a href="#fn-1">1</a></sup></p>

      <p>Prin urmare, factori precum:</p>

      <ul>
        <li>existența unor linkuri crawlable către pagină;</li>
        <li>sitemapul;</li>
        <li>răspunsurile serverului;</li>
        <li>reguli <code>robots.txt</code>;</li>
        <li><code>noindex</code>;</li>
        <li>canonicalizarea;</li>
        <li>duplicatele;</li>
        <li>capacitatea serverului;</li>
        <li>calitatea și utilitatea conținutului;</li>
      </ul>

      <p>pot influența descoperirea, crawl-ul și indexarea, dar <strong>nu pot fi convertiți responsabil într-un multiplicator universal de timp</strong>.</p>

      <h3>Ce înseamnă pentru AI Search</h3>

      <p>OpenAI spune că pentru includerea completă a conținutului în ChatGPT Search este important ca OAI-SearchBot să poată accesa site-ul și ca hostul/CDN-ul să permită IP-urile publicate de OpenAI.<sup><a href="#fn-2">2</a></sup></p>

      <p>Perplexity recomandă în mod similar permiterea <code>PerplexityBot</code> și a intervalelor sale IP pentru apariția în rezultatele de căutare Perplexity.<sup><a href="#fn-3">3</a></sup></p>

      <p><strong>Concluzie operațională:</strong> înainte să fie discutată „autoritatea domeniului”, trebuie verificat dacă sistemul poate accesa efectiv pagina. Accesul este o condiție tehnică observabilă; timpul până la citare nu este.</p>

      <h2>Criteriul 3: Tipul de conținut</h2>

      <p>Nu există, în documentația oficială Google, o medie universală de indexare separată pentru articol, pagină de serviciu și pagină de produs.</p>

      <p>Afirmații de tipul „paginile de produs se indexează în X zile, iar serviciile în Y zile” depind de dataseturi private și nu trebuie transformate în benchmarkuri generale.</p>

      <p>În schimb, există recomandări oficiale care pot fi verificate:</p>

      <ul>
        <li>Google poate folosi structured data <code>Product</code> și informații din Merchant Center pentru experiențe de produs în Search și alte suprafețe Google.<sup><a href="#fn-7">7</a></sup></li>
        <li>Merchant Center oferă un canal structurat pentru informații de produs, dar <strong>nu constituie o garanție că URL-ul paginii va fi indexat mai repede în Google Search</strong>.<sup><a href="#fn-7">7</a></sup></li>
        <li>Pentru funcțiile AI din Google Search se aplică aceleași cerințe tehnice fundamentale ca pentru Search: pagina trebuie să fie indexată și eligibilă pentru snippet.<sup><a href="#fn-5">5</a></sup></li>
      </ul>

      <p>Pentru AEO/GEO, forma conținutului rămâne importantă din alt motiv: informația clară, explicită și ușor de extras reduce ambiguitatea pentru cititori și sisteme. Dar nu există un număr oficial care să spună că o definiție, un tabel sau o pagină de produs va fi citată într-un anumit interval.</p>

      <h2>Criteriul 4: Infrastructura de notificare și acces</h2>

      <p>Aceasta este zona în care există cele mai clare acțiuni tehnice controlabile.</p>

      <h3>IndexNow</h3>

      <p>IndexNow permite proprietarilor de site-uri să <strong>notifice imediat</strong> motoarele participante că un URL a fost adăugat, modificat sau șters. La data verificării, <strong>10 august 2026</strong>, pagina oficială IndexNow listează suport din partea Microsoft Bing, Naver, Seznam.cz, Yandex și Yep.<sup><a href="#fn-4">4</a></sup></p>

      <p>Important:</p>

      <blockquote><p>notificarea este instantanee; indexarea nu este garantată.</p></blockquote>

      <p>IndexNow spune că notificarea ajută motoarele să prioritizeze crawl-ul. Protocolul nu promite că un URL va fi indexat sau va apărea în rezultate într-un anumit număr de minute.</p>

      <p>Această informație este <strong>volatilă</strong>: lista motoarelor participante poate fi modificată în timp și trebuie reverificată înaintea fiecărei actualizări majore a articolului.</p>

      <h3>Google Search</h3>

      <p>Google nu este listat, la data verificării din 10 august 2026, între motoarele participante oficial IndexNow.<sup><a href="#fn-4">4</a></sup></p>

      <p>Pentru Google, documentația recomandă:</p>

      <ul>
        <li>URL Inspection / request indexing pentru un număr mic de URL-uri;</li>
        <li>sitemap pentru un număr mare de URL-uri.<sup><a href="#fn-1">1</a></sup></li>
      </ul>

      <p>Google precizează că repetarea cererilor pentru același URL nu îl face să fie crawlat mai repede.</p>

      <h3>Google Indexing API</h3>

      <p>Indexing API nu este un API general pentru orice pagină.</p>

      <p>Google spune că poate fi folosit pentru pagini cu <code>JobPosting</code> sau <code>BroadcastEvent</code> într-un <code>VideoObject</code>. La data verificării din august 2026, documentația oficială indică o <strong>cotă inițială implicită de 200 de solicitări <code>publish</code> pe zi per proiect</strong>, destinată onboardingului și testării; utilizarea și alocarea suplimentară necesită aprobare.<sup><a href="#fn-8">8</a></sup></p>

      <p>Aceasta este o cifră oficială și exactă, nu o estimare.</p>

      <h3>JavaScript și rendering</h3>

      <p>Afirmația „crawlerele AI nu execută JavaScript” nu poate fi susținută ca regulă generală.</p>

      <p>Google documentează explicit că Googlebot folosește un Chromium actual pentru a reda paginile și execută JavaScript în procesul de rendering.<sup><a href="#fn-9">9</a></sup></p>

      <p>În același timp, Google avertizează că nu toate motoarele sau roboții execută JavaScript în același mod și recomandă server-side rendering, static rendering sau hydration atunci când compatibilitatea cu crawlerele este importantă.<sup><a href="#fn-10">10</a></sup></p>

      <p>Formularea defensabilă este:</p>

      <p><strong>conținutul esențial disponibil direct în HTML reduce dependența de capabilitățile de rendering ale crawlerului și face pagina mai robustă pentru motoare și sisteme de retrieval diferite.</strong></p>

      <p>Nu există însă un „timp infinit de indexare” demonstrat pentru paginile client-side rendered.</p>

      <h2>Criteriul 5: Prospețimea</h2>

      <p>Prospețimea poate conta pentru relevanță, dar nu există un benchmark oficial universal de tipul „conținutul actualizat în ultimele 30 de zile primește X% mai multe citări”.</p>

      <p>Pentru Perplexity, documentația oficială consultată descrie crawlerul și controlul accesului, dar nu publică o rată de citare în funcție de vârsta conținutului și nu declară <code>dateModified</code> drept factor direct de ranking sau citare.<sup><a href="#fn-3">3</a></sup></p>

      <p>Pentru Google, structured data și datele afișate trebuie să fie corecte și coerente, însă simpla modificare artificială a <code>dateModified</code> nu transformă un conținut vechi într-unul nou și nu garantează recrawl, indexare sau vizibilitate.</p>

      <h3>Ce se poate recomanda fără extrapolare</h3>

      <p>Actualizează un articol atunci când:</p>

      <ul>
        <li>informația factuală s-a schimbat;</li>
        <li>sursele sau datele s-au actualizat;</li>
        <li>există informație nouă relevantă;</li>
        <li>instrucțiunile sau pașii nu mai corespund realității;</li>
        <li>pagina conține afirmații despre produse, politici sau sisteme care sunt volatile.</li>
      </ul>

      <p>Nu actualiza doar timestampul pentru a simula prospețimea.</p>

      <p><strong>Interpretare AI Visibility Lab:</strong> pentru conținutul despre AI, search, platforme și produse software, revizuirea periodică este în primul rând o măsură de acuratețe și E-E-A-T, nu o „tactică de ranking”.</p>

      <h2>Nu există o „fereastră de 60 de zile” demonstrată</h2>

      <p>Nu există o sursă oficială Google, OpenAI, Perplexity sau Microsoft care să stabilească o fereastră universală după care o pagină necitată devine improbabil de citat.</p>

      <p>Prin urmare, nu pot fi susținute ca reguli generale afirmații de tipul:</p>

      <ul>
        <li>„majoritatea citărilor apar în primele 60 de zile”;</li>
        <li>„după 90 de zile probabilitatea scade abrupt”;</li>
        <li>„după 180 de zile pagina nu va mai fi citată”;</li>
        <li>„dacă nu ai fost citat până la ziua X, problema este pagina”.</li>
      </ul>

      <p>Aceste praguri pot apărea în dataseturi comerciale, dar nu există bază suficientă pentru a le transforma în cronometru editorial universal.</p>

      <h3>Ce poți face în loc</h3>

      <p>Stabilește propriul benchmark.</p>

      <p>Pentru fiecare articol, înregistrează:</p>

      <ol>
        <li>data publicării;</li>
        <li>data primei apariții în Google Search, dacă apare;</li>
        <li>data primului crawl observabil, dacă ai loguri;</li>
        <li>data primei citări observate pe fiecare suprafață AI testată;</li>
        <li>interogarea exactă;</li>
        <li>motorul și modul de căutare folosit;</li>
        <li>sursele afișate;</li>
        <li>modificările făcute paginii între teste.</li>
      </ol>

      <p>În acest fel, după suficiente articole și suficiente rulări, vei avea un benchmark al propriului site, nu o medie importată dintr-un experiment cu altă nișă, alt domeniu și alt set de prompturi.</p>

      <h2>Ce înseamnă pentru un calendar de publicare</h2>

      <p>Un calendar GEO/AEO nu ar trebui construit pe presupunerea că „la ziua 7 vine prima citare” sau „la ziua 60 trebuie intervenit”.</p>

      <p>Ar trebui construit pe <strong>evenimente observabile</strong>:</p>

      <ul>
        <li>publicare;</li>
        <li>notificare / sitemap;</li>
        <li>verificare crawlabilitate;</li>
        <li>confirmare indexare în Search Console;</li>
        <li>verificarea periodică a interogărilor țintă;</li>
        <li>actualizare factuală atunci când sursele se schimbă.</li>
      </ul>

      <p>Pentru motoarele AI, testele trebuie repetate. Sistemele generative pot produce răspunsuri diferite la aceeași interogare, iar o singură rulare nu reprezintă o măsurătoare stabilă.</p>

      <p><strong>Recomandare AI Visibility Lab:</strong> folosește un set fix de interogări și aceeași metodologie de testare, păstrează istoricul și compară modificările în timp. Nu transforma o singură apariție sau absență într-o concluzie despre „ranking”.</p>

      <h2>Cum trebuie citite cifrele despre indexare și citare</h2>

      <p>Există trei niveluri de dovezi care nu trebuie amestecate.</p>

      <p><strong>Nivel 1 — documentație oficială.</strong><br />Poate confirma cerințe tehnice, politici, suport pentru crawlere, limite API și uneori intervale largi. Acesta este nivelul folosit pentru afirmațiile factuale din acest articol.</p>

      <p><strong>Nivel 2 — studii comerciale sau experimente independente.</strong><br />Pot descrie comportamentul observat într-un anumit eșantion, dar nu reprezintă SLA-ul platformei. Pentru a fi citate responsabil trebuie să specifice metodologia, perioada, eșantionul și definiția metricii.</p>

      <p><strong>Nivel 3 — interpretări și reguli de practică.</strong><br />Sunt utile pentru planificare, dar trebuie etichetate ca interpretări, nu ca mecanisme algoritmice demonstrate.</p>

      <p>În versiunea actuală a acestui articol nu sunt folosite benchmarkuri numerice comerciale drept „termene reale” generale. Au fost păstrate numai cifre care apar explicit în documentație oficială și care descriu exact ceea ce afirmă sursa.</p>

      <h2>Întrebări frecvente</h2>

      <h3>Cât durează până Google indexează o pagină nouă?</h3>

      <p>Google nu publică o medie universală de indexare. Pentru recrawl, documentația oficială spune că procesul poate dura de la câteva zile la câteva săptămâni și că solicitarea nu garantează indexarea sau apariția în rezultate.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Cât durează până ChatGPT citează un articol nou?</h3>

      <p>OpenAI nu publică un termen sau SLA de la publicare la prima citare. Pentru includerea completă în ChatGPT Search, site-ul trebuie să permită accesul OAI-SearchBot și traficul din IP-urile publicate de OpenAI. Faptul că pagina este accesibilă nu garantează că va fi selectată ca sursă pentru o anumită interogare.<sup><a href="#fn-2">2</a></sup></p>

      <h3>Cât durează până Perplexity citează o pagină?</h3>

      <p>Perplexity nu publică un SLA de la publicare la prima citare. Documentația sa spune că <code>PerplexityBot</code> este folosit pentru a descoperi și indexa informații pentru rezultatele Perplexity și recomandă permiterea crawlerului și a IP-urilor publicate.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Google AI Overviews necesită un anumit ranking organic?</h3>

      <p>Google nu publică o cerință de tip „top 10” sau „top 30”. Pentru eligibilitate ca supporting link în AI Overviews sau AI Mode, pagina trebuie să fie indexată și eligibilă să apară în Google Search cu un snippet. Îndeplinirea condițiilor nu garantează afișarea.<sup><a href="#fn-5">5</a></sup></p>

      <h3>Google susține IndexNow?</h3>

      <p>La data verificării din <strong>10 august 2026</strong>, Google nu apare în lista oficială a motoarelor participante IndexNow. Lista oficială poate fi modificată în timp și trebuie reverificată.<sup><a href="#fn-4">4</a></sup></p>

      <h3>IndexNow garantează indexarea imediată?</h3>

      <p>Nu. Protocolul notifică imediat motoarele participante că un URL a fost modificat și le permite să prioritizeze crawl-ul. Indexarea și afișarea rămân decizii ale fiecărui motor.<sup><a href="#fn-4">4</a></sup></p>

      <h3>Este necesară randarea pe server pentru AI?</h3>

      <p>Nu există o regulă universală că toate sistemele AI necesită SSR. Google execută JavaScript, iar capabilitățile altor roboți diferă. Totuși, furnizarea conținutului esențial direct în HTML reduce dependența de rendering și este o alegere mai robustă pentru interoperabilitate.<sup><a href="#fn-9">9</a></sup><sup><a href="#fn-10">10</a></sup></p>

      <h3>Dacă nu am fost citat după două luni, înseamnă că pagina nu va fi citată?</h3>

      <p>Nu. Nu există un prag oficial de 60, 90 sau 180 de zile după care o pagină devine neeligibilă sau improbabilă pentru citare în toate sistemele AI. Absența citării este un motiv de diagnosticare, nu dovada că fereastra s-a închis.</p>

      <h2>Surse și metodologie</h2>

      <p>Sursele principale sunt documentații oficiale, verificate la <strong>10 august 2026</strong>. Afirmațiile despre produse și politici sunt volatile și descriu starea documentată la această dată.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">Google Search Central — „Ask Google to Recrawl Your Website”. Google precizează că crawlingul poate dura de la câteva zile la câteva săptămâni și că solicitarea nu garantează indexarea: <a href="https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl" target="_blank" rel="noopener noreferrer">developers.google.com/…/ask-google-to-recrawl</a></li>
        <li id="fn-2">OpenAI Help Center — „ChatGPT Search” și „Publishers and Developers - FAQ”. Pentru includerea completă în search summaries/snippets este important accesul OAI-SearchBot; OpenAI nu publică un SLA de citare: <a href="https://help.openai.com/en/articles/9237897-chatgpt-search" target="_blank" rel="noopener noreferrer">help.openai.com/…/chatgpt-search</a> ; <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">help.openai.com/…/publishers-and-developers-faq</a></li>
        <li id="fn-3">Perplexity Docs — „Perplexity Crawlers”. <code>PerplexityBot</code> este folosit pentru a descoperi și indexa informații pentru search; documentația menționează că modificările setărilor de acces pot necesita până la 24 de ore pentru a se reflecta: <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">docs.perplexity.ai/docs/resources/perplexity-crawlers</a></li>
        <li id="fn-4">IndexNow.org — documentația oficială și pagina protocolului. La data verificării sunt enumerate Microsoft Bing, Naver, Seznam.cz, Yandex și Yep ca motoare care susțin IndexNow. Protocolul notifică imediat schimbarea URL-ului, fără a garanta indexarea: <a href="https://www.indexnow.org/ro_ro/index" target="_blank" rel="noopener noreferrer">indexnow.org/ro_ro/index</a> ; <a href="https://www.indexnow.org/searchengines" target="_blank" rel="noopener noreferrer">indexnow.org/searchengines</a></li>
        <li id="fn-5">Google Search Central — „AI Features and Your Website”. Pentru supporting links în AI Overviews și AI Mode, pagina trebuie să fie indexată și eligibilă pentru Google Search cu snippet; nu există cerințe tehnice suplimentare speciale: <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">developers.google.com/…/ai-features</a></li>
        <li id="fn-6">Microsoft Learn — documentația privind web search și grounding în Copilot. Anumite suprafețe Copilot folosesc Bing Search/Bing APIs pentru conținut public: <a href="https://learn.microsoft.com/en-us/microsoft-copilot-studio/data-privacy-security-web-search" target="_blank" rel="noopener noreferrer">learn.microsoft.com/…/data-privacy-security-web-search</a></li>
        <li id="fn-7">Google Search Central / Google for Developers — documentație despre product data și Merchant Center. Feedurile furnizează informații structurate despre produse pentru suprafețele Google, dar documentația nu oferă un SLA de indexare a URL-urilor: <a href="https://developers.google.com/search/docs/specialty/ecommerce/where-ecommerce-data-can-appear-on-google" target="_blank" rel="noopener noreferrer">developers.google.com/…/where-ecommerce-data-can-appear-on-google</a> ; <a href="https://developers.google.com/shopping-content/guides/products/overview" target="_blank" rel="noopener noreferrer">developers.google.com/shopping-content/guides/products/overview</a></li>
        <li id="fn-8">Google Search Central — „Requesting Approval and Quota — Indexing API”. Indexing API este limitat la <code>JobPosting</code> și <code>BroadcastEvent</code> în <code>VideoObject</code>; cota inițială implicită este 200 <code>publish</code> requests/day/project pentru onboarding și testare, iar utilizarea suplimentară necesită aprobare. Documentație actualizată în iulie 2026: <a href="https://developers.google.com/search/apis/indexing-api/v3/quota-pricing" target="_blank" rel="noopener noreferrer">developers.google.com/…/quota-pricing</a></li>
        <li id="fn-9">Google Search Central — „Understand JavaScript SEO Basics”. Google Search rulează JavaScript cu o versiune evergreen de Chromium și procesează crawling, rendering și indexing: <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics" target="_blank" rel="noopener noreferrer">developers.google.com/…/javascript-seo-basics</a></li>
        <li id="fn-10">Google Search Central — „Dynamic Rendering as a workaround”. Google recomandă server-side rendering, static rendering sau hydration ca soluții robuste și notează că alte motoare pot alege să nu execute JavaScript: <a href="https://developers.google.com/search/docs/crawling-indexing/javascript/dynamic-rendering" target="_blank" rel="noopener noreferrer">developers.google.com/…/dynamic-rendering</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Comportamentul crawlerelor, condițiile de eligibilitate, motoarele participante la IndexNow, limitele API și mecanismele de search/grounding se pot modifica. Toate afirmațiile de tip „platforma X suportă Y” din acest articol trebuie interpretate ca <strong>stare verificată la 10 august 2026</strong>, nu ca proprietăți permanente.</p>

      <p>În schimb, afirmațiile de tip „platforma nu publică un SLA” trebuie reverificate atunci când documentația platformei este actualizată.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 10 august 2026.</em></p>
`;
