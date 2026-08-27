/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const hartaDeCitareMentiuniExterneRomaniaMeta = {
  title:
    "Harta de citare: cum afli empiric ce surse contează pentru vizibilitatea AI în România",
  description:
    "Cum construiești o hartă de citare pentru nișa ta, cum separi mențiunile de citări, ce arată studiile Muck Rack, AirOps și Ahrefs și de ce prezența externă trebuie măsurată, nu presupusă.",
  canonical:
    "https://delamatescu.ro/lab/articole/harta-de-citare-mentiuni-externe-romania",
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  lastReviewed: "2026-08-19",
  about: [
    { name: "AI citations" },
    { name: "Brand mentions" },
    { name: "Earned media" },
    { name: "AI visibility measurement" },
  ],
  keywords: [
    "hartă de citare AI",
    "citation map",
    "mention map",
    "presence gap",
    "earned media AI citations",
    "brand mentions AI search",
    "măsurare AI visibility",
  ],
  citations: [
    {
      name: "Muck Rack, Linda Zebian — Earned media still drives 84% of AI citations. Here's what that means for PR",
      url: "https://muckrack.com/blog/what-is-ai-reading-may-2026",
    },
    {
      name: 'Muck Rack — How we built "What Is AI Reading?" and what the data keeps telling us',
      url: "https://muckrack.com/blog/how-we-built-what-is-ai-reading",
    },
    {
      name: 'Muck Rack — 7 FAQs about the May 2026 update of "What Is AI Reading?"',
      url: "https://muckrack.com/blog/what-is-ai-reading-new-insights-may-faqs",
    },
    {
      name: "AirOps, Oshen Davidson — The 2026 State of AI Search: How Modern Brands Stay Visible",
      url: "https://www.airops.com/report/the-2026-state-of-ai-search",
    },
    {
      name: "Ahrefs, Louise Linehan — An Analysis of AI Overview Brand Visibility Factors (75K Brands Studied)",
      url: "https://ahrefs.com/blog/ai-overview-brand-correlation/",
    },
    {
      name: "Ahrefs — AI Overviews Tracker",
      url: "https://ahrefs.com/ai-overviews-tracker",
    },
    {
      name: "OpenAI Help Center — Publishers and Developers – FAQ",
      url: "https://help.openai.com/en/articles/12627856-publishers-and-developers-faq",
    },
  ],
  faq: [
    {
      q: "Ce este o hartă de citare?",
      a: "Este inventarul domeniilor și URL-urilor citate repetat de sistemele AI pentru un set definit de întrebări relevante unei nișe, într-un interval de timp documentat. Este un instrument metodologic AI Visibility Lab.",
    },
    {
      q: "Ce procent din citările AI vine din earned media?",
      a: "Nu există un procent universal. În studiul comercial Muck Rack din mai 2026, 84% dintre linkurile analizate au fost clasificate drept earned media, în propriul lor query set și sistem de clasificare.",
    },
    {
      q: "Mențiunile contează mai mult decât backlinkurile?",
      a: "Ahrefs a găsit o corelație mai puternică între branded web mentions și AI Overview brand visibility decât între backlinks și aceeași metrică. Corelația nu este însă cauzalitate și valorile nu pot fi interpretate ca raport de impact.",
    },
    {
      q: "Cum aflu unde ar trebui să fie prezent brandul meu?",
      a: "Construiește un query set relevant, rulează-l repetat pe sistemele importante pentru audiența ta, colectează citation domains și brand mentions, apoi compară acea hartă cu prezența actuală a brandului.",
    },
    {
      q: "Trebuie să apar în listicles și comparative?",
      a: "Nu automat. AirOps raportează că listicles, comparison pages și review roundups au reprezentat aproape 90% dintre third-party mentions în analiza lor asupra early commercial discovery. Verifică dacă același pattern apare în harta propriei nișe.",
    },
    {
      q: "Social media este inutilă pentru AI visibility?",
      a: "Nu. Platformele diferă mult în crawlability și citation behavior. Social media poate contribui la distribuție, comunitate, branded search și external mentions. Nu trebuie însă presupus că un feed social este echivalent cu un corpus web persistent și controlat.",
    },
    {
      q: "Poate propriul meu site să fie citat de ChatGPT?",
      a: "Da. OpenAI spune că orice site public poate apărea în ChatGPT Search; pentru includerea conținutului în summaries/snippets, OAI-SearchBot nu trebuie blocat.",
    },
    {
      q: "Paid media produce citări AI?",
      a: "Nu există o concluzie cauzală. În datasetul Muck Rack din mai 2026, paid/advertorial a reprezentat aproximativ 0,3% dintre linkurile citate, dar această distribuție nu demonstrează efectul unei investiții paid asupra AI visibility.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const hartaDeCitareMentiuniExterneRomaniaHtml = `
      <p><a href="/despre">Alex Matescu</a> · AI Visibility Lab</p>
      <p>Publicat: 19 august 2026 · Actualizat: 19 august 2026 · Ultima verificare factuală: 19 august 2026</p>

      <p><strong>Sursele externe apar frecvent în citările și mențiunile observate în studiile comerciale de AI visibility, dar nu există un multiplicator universal între earned media și conținutul propriu. Metoda robustă este să măsori direct ce domenii apar pentru întrebările relevante nișei tale și să construiești o hartă de citare actualizabilă.</strong></p>

      <p>Aceasta este teza articolului.</p>

      <p>Nu pornesc de la presupunerea că „presa bate site-ul propriu”, că „un backlink valorează mai puțin decât o mențiune” sau că există un algoritm universal de consens între surse.</p>

      <p>Pornesc de la ceva mai simplu și verificabil:</p>

      <blockquote><p><strong>pentru un set de întrebări relevante comercial, ce domenii apar efectiv în răspunsurile sistemelor AI?</strong></p></blockquote>

      <p>Răspunsul poate fi măsurat.</p>

      <h2>Mai întâi: mențiune, citare și sursă externă nu sunt același lucru</h2>

      <p>În discuțiile despre AI visibility, trei concepte sunt amestecate frecvent.</p>

      <h3>Mențiune</h3>

      <p>Brandul apare în textul răspunsului.</p>

      <p>Exemplu:</p>

      <blockquote><p>„Compania X este una dintre opțiunile disponibile.”</p></blockquote>

      <p>Brandul este menționat chiar dacă propriul lui site nu este citat.</p>

      <h3>Citare</h3>

      <p>Răspunsul atribuie o informație unui URL sau unei surse.</p>

      <p>Un brand poate fi:</p>

      <ul>
        <li>menționat fără ca propriul site să fie citat;</li>
        <li>menționat într-o publicație terță care este citată;</li>
        <li>citat prin propriul domeniu;</li>
        <li>absent din text, deși o pagină a lui este utilizată ca sursă pentru altă afirmație.</li>
      </ul>

      <h3>Sursă externă</h3>

      <p>Un domeniu pe care brandul nu îl controlează.</p>

      <p>Aici pot intra:</p>

      <ul>
        <li>publicații;</li>
        <li>forumuri;</li>
        <li>Reddit;</li>
        <li>Wikipedia;</li>
        <li>marketplace-uri;</li>
        <li>directoare;</li>
        <li>review sites;</li>
        <li>site-uri academice;</li>
        <li>government sources;</li>
        <li>comunități tehnice.</li>
      </ul>

      <p><strong>External domain ≠ earned media ≠ brand mention.</strong></p>

      <p>Această diferență este esențială pentru interpretarea studiilor.</p>

      <h2>Ce arată Muck Rack</h2>

      <p>Muck Rack a publicat în mai 2026 a treia ediție a studiului comercial <strong>What Is AI Reading?</strong>.</p>

      <p>Compania spune că a analizat peste <strong>25 de milioane de linkuri</strong> provenite din răspunsuri ChatGPT, Claude și Gemini, în 17 industrii.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup></p>

      <p>În metodologia Muck Rack:</p>

      <ul>
        <li><strong>84%</strong> dintre linkurile analizate au fost clasificate drept earned media;</li>
        <li><strong>27%</strong> au fost clasificate drept journalism;</li>
        <li>aproximativ <strong>0,3%</strong> au fost clasificate ca paid/advertorial.<sup><a href="#fn-1">1</a></sup></li>
      </ul>

      <p>Muck Rack spune că ponderea earned media s-a menținut între aproximativ <strong>82% și 89%</strong> în cele trei ediții ale studiului, începând din iulie 2025.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Ce putem spune</h3>

      <p>În datasetul și taxonomia Muck Rack, sursele clasificate drept earned media domină puternic linkurile citate.</p>

      <h3>Ce nu putem spune</h3>

      <p>Nu putem transforma rezultatul în:</p>

      <blockquote><p>„84% dintre toate citările AI de pe internet provin din presă independentă.”</p></blockquote>

      <p>Muck Rack:</p>

      <ul>
        <li>construiește propriul query set;</li>
        <li>clasifică sursele prin propria bază de publicații;</li>
        <li>analizează anumite platforme și industrii;</li>
        <li>are un interes comercial direct în PR și earned media.</li>
      </ul>

      <p>Compania publică explicații despre metodologie, dar studiul nu este o măsurătoare neutră a întregului web.<sup><a href="#fn-2">2</a></sup></p>

      <p>Prin urmare, cifra trebuie citată astfel:</p>

      <blockquote><p><strong>„În ediția mai 2026 a studiului comercial Muck Rack, 84% dintre linkurile analizate au fost clasificate drept earned media.”</strong></p></blockquote>

      <p>Nu ca regulă universală.</p>

      <h2>Ce arată AirOps</h2>

      <p>Raportul comercial AirOps <strong>The 2026 State of AI Search</strong> analizează mai multe tipuri de vizibilitate în AI search.<sup><a href="#fn-3">3</a></sup></p>

      <p>Pentru <strong>early brand discovery in commercial search</strong>, AirOps raportează:</p>

      <ul>
        <li>aproximativ <strong>85%</strong> dintre brand mentions proveneau de pe external domains;</li>
        <li>brandurile erau de aproximativ <strong>6,5 ori</strong> mai likely să fie cited prin third-party sources decât prin propriile domenii;</li>
        <li>aproape <strong>90%</strong> dintre third-party mentions proveneau din listicles, comparison pages și review roundups;</li>
        <li>aproximativ <strong>80%</strong> dintre brandurile menționate apăreau în primele trei poziții ale paginii terțe;</li>
        <li>first-party mentions apăreau în aproximativ <strong>25%</strong> dintre generated answers, în special mai târziu în journey, la verification.<sup><a href="#fn-3">3</a></sup></li>
      </ul>

      <h3>Limita importantă</h3>

      <p>Aceste cifre descriu <strong>early commercial discovery</strong> în datasetul AirOps.</p>

      <p>Nu descriu automat:</p>

      <ul>
        <li>toate query-urile AI;</li>
        <li>toate industriile;</li>
        <li>răspunsurile informaționale;</li>
        <li>piața românească;</li>
        <li>toate motoarele;</li>
        <li>toate etapele customer journey.</li>
      </ul>

      <p>De aceea, concluzia corectă este:</p>

      <blockquote><p><strong>în acel dataset comercial, external sources au avut un rol important în descoperirea inițială a brandurilor, iar owned content a apărut și în faze de verificare.</strong></p></blockquote>

      <p>Asta este mai util decât formula simplistă „third-party bate owned”.</p>

      <h2>Ce arată Ahrefs</h2>

      <p>Ahrefs a analizat aproximativ <strong>75.000 de branduri</strong> pentru a vedea ce factori se corelează cu apariția brandurilor în Google AI Overviews.<sup><a href="#fn-4">4</a></sup></p>

      <p>Valorile raportate includ:</p>

      <table>
        <thead>
          <tr>
            <th>Semnal</th>
            <th>Corelație raportată</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Branded web mentions</td><td>0,664</td></tr>
          <tr><td>Branded anchors</td><td>0,527</td></tr>
          <tr><td>Branded search volume</td><td>0,392</td></tr>
          <tr><td>Domain Rating</td><td>0,326</td></tr>
          <tr><td>Referring domains</td><td>0,295</td></tr>
          <tr><td>Backlinks</td><td>0,218</td></tr>
        </tbody>
      </table>

      <p>Ahrefs subliniază explicit:</p>

      <blockquote><p><strong>correlation ≠ causation.</strong><sup><a href="#fn-4">4</a></sup></p></blockquote>

      <h3>Ce putem spune</h3>

      <p>În datasetul Ahrefs, branded web mentions au avut cea mai puternică corelație observată dintre factorii analizați.</p>

      <h3>Ce nu putem spune</h3>

      <p>Nu putem calcula:</p>

      <p><code>0,664 / 0,218 ≈ 3</code></p>

      <p>și concluziona:</p>

      <blockquote><p>„mențiunile sunt de trei ori mai importante decât backlinkurile.”</p></blockquote>

      <p>Coeficienții de corelație nu sunt multiplicatori de efect.</p>

      <p>Formularea corectă este:</p>

      <blockquote><p><strong>În analiza Ahrefs, web mentions au avut o corelație considerabil mai puternică cu AI Overview brand visibility decât backlinks, dar studiul nu demonstrează că mențiunile cauzează vizibilitatea și nu oferă un raport de impact între cele două.</strong></p></blockquote>

      <h2>Ce rezultă din cele trei studii</h2>

      <p>Muck Rack, AirOps și Ahrefs folosesc:</p>

      <ul>
        <li>metrici diferite;</li>
        <li>categorii diferite;</li>
        <li>query sets diferite;</li>
        <li>platforme diferite.</li>
      </ul>

      <p>Dar toate raportează o relație relevantă între <strong>prezența brandului dincolo de propriul domeniu</strong> și vizibilitatea observată în anumite suprafețe AI.</p>

      <p>Această convergență este interesantă.</p>

      <p>Nu dovedește însă un algoritm universal.</p>

      <p>Nu există documentație publică Google, OpenAI, Anthropic sau Perplexity care să spună:</p>

      <blockquote><p>„numărăm sursele independente și aplicăm un filtru de consens.”</p></blockquote>

      <p>Mai corect:</p>

      <blockquote><p><strong>sursele externe pot oferi coroborare și pot constitui locuri din care sistemele recuperează informație; studiile comerciale arată că această prezență externă este asociată cu vizibilitatea AI în mai multe dataseturi.</strong></p></blockquote>

      <p>Aceasta este observația defensabilă.</p>

      <h2>Harta de citare</h2>

      <p>De aici vine instrumentul util.</p>

      <p>În loc să întrebi:</p>

      <blockquote><p>„În ce publicații ar trebui să apar?”</p></blockquote>

      <p>întrebi:</p>

      <blockquote><p><strong>„Ce publicații și domenii apar deja în răspunsurile AI pentru întrebările pe care le pun clienții mei?”</strong></p></blockquote>

      <p>Rezultatul este <strong>harta de citare</strong>.</p>

      <p>AI Visibility Lab definește harta de citare ca:</p>

      <blockquote><p><strong>inventarul domeniilor și URL-urilor citate repetat de sistemele AI pentru un set definit de întrebări relevante unei nișe, într-un interval de timp documentat.</strong></p></blockquote>

      <p>Aceasta este o metodă proprie AI Visibility Lab, nu un standard oficial.</p>

      <h2>Citation Map și Mention Map</h2>

      <p>Pentru un audit mai bun, merită separate două hărți.</p>

      <h3>Citation Map</h3>

      <p>Domeniile și URL-urile efectiv citate de sistem.</p>

      <h3>Mention Map</h3>

      <p>Sursele și paginile pe care apar brandurile recomandate, indiferent dacă propriul lor domeniu este citat.</p>

      <p>Exemplu:</p>

      <p>Un răspuns poate spune:</p>

      <blockquote><p>„Compania X este una dintre opțiunile recomandate.”</p></blockquote>

      <p>dar citarea poate fi:</p>

      <blockquote><p><code>publicatie.ro/top-furnizori</code></p></blockquote>

      <p>Atunci:</p>

      <ul>
        <li>brandul X intră în Mention Map;</li>
        <li><code>publicatie.ro</code> intră în Citation Map.</li>
      </ul>

      <p>Această distincție arată <strong>unde trebuie să existe brandul</strong> și <strong>de unde sistemul își justifică răspunsul</strong>.</p>

      <h2>Presence Gap</h2>

      <p>AI Visibility Lab definește și un al treilea instrument:</p>

      <blockquote><p><strong>Presence Gap = sursele recurente din Citation/Mention Map minus sursele în care brandul este prezent în mod relevant.</strong></p></blockquote>

      <p>Nu orice gap trebuie „închis”.</p>

      <p>Unele domenii:</p>

      <ul>
        <li>nu acceptă contribuții;</li>
        <li>nu sunt relevante pentru brand;</li>
        <li>nu permit reprezentare comercială;</li>
        <li>sunt imposibil de influențat legitim.</li>
      </ul>

      <p>Dar diferența te ajută să vezi unde ai:</p>

      <ul>
        <li>oportunitate editorială;</li>
        <li>oportunitate PR;</li>
        <li>directory/profile gap;</li>
        <li>review gap;</li>
        <li>community gap;</li>
        <li>informație proprie insuficientă.</li>
      </ul>

      <h2>Cum construiești harta</h2>

      <p>Nu există un număr magic de prompts, motoare sau repetări.</p>

      <p>Important este ca protocolul să fie stabil și documentat.</p>

      <h2>Pasul 1 — Definește tipurile de întrebări</h2>

      <p>Nu folosi doar variante ale aceleiași întrebări.</p>

      <p>Acoperă cel puțin câteva intenții diferite:</p>

      <h3>Discovery</h3>

      <blockquote><p>Ce firme din România oferă X?</p></blockquote>

      <h3>Comparison</h3>

      <blockquote><p>Care sunt diferențele dintre furnizorii X și Y?</p></blockquote>

      <h3>Problem solving</h3>

      <blockquote><p>Ce soluție este potrivită pentru situația Z?</p></blockquote>

      <h3>Verification</h3>

      <blockquote><p>Compania X oferă serviciul Y?</p></blockquote>

      <h3>Local</h3>

      <blockquote><p>Cine oferă X în Sibiu/Transilvania?</p></blockquote>

      <p>doar dacă locația schimbă răspunsul.</p>

      <h3>Branded și unbranded</h3>

      <p>Separă întrebările care:</p>

      <ul>
        <li>conțin brandul;</li>
        <li>nu conțin brandul.</li>
      </ul>

      <p>Acestea testează două lucruri diferite.</p>

      <h2>Pasul 2 — Alege sistemele relevante</h2>

      <p>Poți include, în funcție de piață și acces:</p>

      <ul>
        <li>ChatGPT Search;</li>
        <li>Google AI Mode;</li>
        <li>Google AI Overviews;</li>
        <li>Perplexity;</li>
        <li>Gemini;</li>
        <li>Claude cu web search.</li>
      </ul>

      <p>Nu este obligatoriu să folosești „exact patru”.</p>

      <p>Alege suprafețele pe care publicul tău le folosește și documentează versiunea/modul activ.</p>

      <h2>Pasul 3 — Repetă</h2>

      <p>Sistemele generative pot returna rezultate diferite între rulări.</p>

      <p>O singură execuție este o fotografie.</p>

      <p>Mai multe execuții permit observarea frecvenței.</p>

      <p>Important este să înregistrezi:</p>

      <ul>
        <li>promptul exact;</li>
        <li>data;</li>
        <li>sistemul;</li>
        <li>modul de search;</li>
        <li>răspunsul;</li>
        <li>citările;</li>
        <li>eventual locația dacă influențează răspunsul.</li>
      </ul>

      <h2>Pasul 4 — Separă mențiunea de citare</h2>

      <p>Pentru fiecare brand și sursă, notează separat:</p>

      <ul>
        <li>brand mentioned?;</li>
        <li>own domain cited?;</li>
        <li>third-party domain cited?;</li>
        <li>sursa conține brandul?;</li>
        <li>ce afirmație susține citarea?</li>
      </ul>

      <h2>Pasul 5 — Construiește matricea</h2>

      <p>Un format util:</p>

      <table>
        <thead>
          <tr>
            <th>Query</th>
            <th>Sistem</th>
            <th>Domeniu citat</th>
            <th>URL</th>
            <th>Tip sursă</th>
            <th>Brand menționat</th>
            <th>Brand citat direct</th>
            <th>Poziție/ordine</th>
            <th>Dată</th>
          </tr>
        </thead>
        <tbody>
          <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>

      <p>Opțional poți adăuga:</p>

      <ul>
        <li>competitor;</li>
        <li>query class;</li>
        <li>country/language;</li>
        <li>freshness;</li>
        <li>first-party / third-party;</li>
        <li>commercial / editorial / community / government / academic.</li>
      </ul>

      <h2>Pasul 6 — Calculează frecvențele</h2>

      <p>Poți măsura:</p>

      <h3>Citation frequency</h3>

      <p>De câte ori este citat un domeniu.</p>

      <h3>Cross-system presence</h3>

      <p>Pe câte sisteme diferite apare.</p>

      <h3>Query coverage</h3>

      <p>Pentru câte tipuri de întrebări apare.</p>

      <h3>Source-type distribution</h3>

      <p>Cât din hartă este:</p>

      <ul>
        <li>journalism;</li>
        <li>community;</li>
        <li>official;</li>
        <li>review;</li>
        <li>directory;</li>
        <li>academic;</li>
        <li>owned.</li>
      </ul>

      <h3>Competitor coverage</h3>

      <p>Pe ce surse apar competitorii și tu nu.</p>

      <h2>Pasul 7 — Interpretează, nu doar număra</h2>

      <p>Un domeniu care apare de 20 de ori poate fi:</p>

      <ul>
        <li>foarte important;</li>
        <li>rezultat al unui singur query repetitiv;</li>
        <li>sursa unei informații foarte specifice;</li>
        <li>citat doar de un singur motor.</li>
      </ul>

      <p>Frecvența fără context poate induce în eroare.</p>

      <h2>România: ce știm și ce nu știm</h2>

      <p>Nu am identificat un studiu reprezentativ care să măsoare sistematic harta surselor citate pentru piața românească B2B.</p>

      <p>Prin urmare, nu este justificat să spun:</p>

      <blockquote><p>„România nu are comparative B2B.”</p></blockquote>

      <p>sau:</p>

      <blockquote><p>„publicația X este citată constant în toate nișele.”</p></blockquote>

      <p>Acestea trebuie măsurate.</p>

      <h3>Observație exploratorie AI Visibility Lab</h3>

      <p>În rulări limitate pe anumite întrebări românești, pot apărea:</p>

      <ul>
        <li>publicații economice;</li>
        <li>site-uri de specialitate;</li>
        <li>directoare;</li>
        <li>site-uri oficiale;</li>
        <li>comunități;</li>
        <li>surse internaționale.</li>
      </ul>

      <p>Dar un set limitat de rulări nu poate fi extrapolat la întreaga piață.</p>

      <p>Formularea corectă este:</p>

      <blockquote><p><strong>Dacă harta de citare pentru nișa ta arată că lipsesc surse locale verticale sau comparative de calitate, acesta poate fi un content gap real. Validarea se face prin query set și date, nu prin presupunerea că piața românească este goală.</strong></p></blockquote>

      <h2>Ce fel de pagini merită urmărite</h2>

      <p>Raportul AirOps spune că, în analiza lor asupra early commercial discovery:</p>

      <ul>
        <li>aproape 90% dintre third-party mentions proveneau din listicles, comparison pages și review roundups;</li>
        <li>aproximativ 80% dintre brandurile menționate apăreau în primele trei poziții ale paginii.<sup><a href="#fn-3">3</a></sup></li>
      </ul>

      <p>Asta justifică includerea acestor formate în audit.</p>

      <p>Nu înseamnă însă:</p>

      <blockquote><p>„ai nevoie obligatoriu să fii în top 3 într-un listicle.”</p></blockquote>

      <p>Este un rezultat al datasetului AirOps.</p>

      <p>Harta proprie trebuie să confirme dacă aceeași structură apare în nișa ta.</p>

      <h2>Cât de stabilă este harta</h2>

      <p>Nu trebuie presupus că harta este permanentă.</p>

      <p>Sistemele:</p>

      <ul>
        <li>își schimbă retrieval-ul;</li>
        <li>își schimbă search providers;</li>
        <li>își schimbă rankingul;</li>
        <li>își schimbă outputul;</li>
        <li>pot cita alte surse în funcție de query.</li>
      </ul>

      <p>Ahrefs observă chiar că AI Overviews se schimbă frecvent între observații, ceea ce susține ideea că one-off measurements au valoare limitată.<sup><a href="#fn-5">5</a></sup></p>

      <p>Muck Rack arată, de asemenea, că tipul întrebării schimbă frecvența cu care apar anumite tipuri de surse: press release-urile apar în aproximativ 1% dintre răspunsurile la întrebări de tip industry-trend, de aproximativ 3,5 ori mai des decât în răspunsurile de tip best-of.<sup><a href="#fn-6">6</a></sup></p>

      <h3>Cadență</h3>

      <p>AI Visibility Lab recomandă ca punct de pornire:</p>

      <ul>
        <li>lunar pentru nișe foarte volatile;</li>
        <li>trimestrial pentru majoritatea auditurilor;</li>
        <li>mai rar doar dacă datele sunt stabile și deciziile comerciale nu depind de ele.</li>
      </ul>

      <p>Aceasta este o <strong>recomandare metodologică</strong>, nu o regulă algoritmică.</p>

      <h2>Prospețimea</h2>

      <p>Muck Rack raportează că, în datasetul lor, journalism citations sunt orientate semnificativ către conținut recent, cu o concentrație mai mare în prima lună de la publicare, un declin până în luna a șasea și apoi un long tail.<sup><a href="#fn-6">6</a></sup></p>

      <p>Asta susține ideea de a include în hartă:</p>

      <ul>
        <li>data publicației;</li>
        <li>data ultimei actualizări;</li>
      </ul>

      <p>dar nu permite afirmația:</p>

      <blockquote><p>„o mențiune de doi ani valorează mai puțin decât una nouă.”</p></blockquote>

      <p>Nu avem o unitate publică de „greutate”.</p>

      <h2>Crawlability și accesul</h2>

      <p>Pentru ChatGPT Search, OpenAI spune explicit că orice site public poate apărea în search și că, pentru ca textul să fie inclus în summaries/snippets, publisherul trebuie să permită <code>OAI-SearchBot</code>.<sup><a href="#fn-7">7</a></sup></p>

      <p>OpenAI mai spune că un URL blocat poate totuși fi cunoscut printr-un third-party search provider sau prin crawlingul altor pagini și, în anumite situații, poate fi afișat doar ca link/titlu.<sup><a href="#fn-7">7</a></sup> Aceleași principii de accesibilitate tehnică — descoperire, crawl, indexare, citare — sunt tratate pe larg în analiza AI Visibility Lab despre <a href="/lab/articole/cat-dureaza-indexare-citare-ai">cât durează până apari în Google și cât până te citează AI-ul</a>.</p>

      <p>Prin urmare:</p>

      <blockquote><p><strong>blocarea crawlerului poate limita accesul direct și utilizarea conținutului, dar nu justifică regula universală „blocat = dispare din orice rezultat AI”.</strong></p></blockquote>

      <h2>Social media: rol diferit, nu „zero valoare”</h2>

      <p>Titlul „de ce social media nu produce venit” este prea categoric.</p>

      <p>Social media poate produce:</p>

      <ul>
        <li>awareness;</li>
        <li>lead-uri;</li>
        <li>comunitate;</li>
        <li>referral;</li>
        <li>vânzări;</li>
        <li>PR;</li>
        <li>branded search;</li>
        <li>surse care ulterior devin citabile.</li>
      </ul>

      <p>Întrebarea relevantă pentru AI Visibility este alta:</p>

      <blockquote><p><strong>Este suficientă o strategie bazată exclusiv pe social media pentru a construi un corpus public, stabil și ușor de recuperat?</strong></p></blockquote>

      <p>De multe ori, nu. Diferența dintre vizibilitatea umană și vizibilitatea AI pe platformele sociale este tratată separat, cu reguli operaționale proprii, în articolul AI Visibility Lab despre <a href="/lab/articole/social-media-vizibilitate-ai">de ce 10.000 de urmăritori pe LinkedIn nu te fac automat vizibil pentru AI</a>.</p>

      <h3>Platformele sunt diferite</h3>

      <p>Nu trebuie puse în aceeași categorie:</p>

      <ul>
        <li>Reddit;</li>
        <li>YouTube;</li>
        <li>LinkedIn;</li>
        <li>Facebook;</li>
        <li>X;</li>
        <li>TikTok.</li>
      </ul>

      <p>Unele pagini sunt publice și indexabile.</p>

      <p>Unele platforme apar chiar frecvent în anumite studii de citation behavior.</p>

      <p>AirOps, de exemplu, raportează un rol important pentru community/UGC domains în propriul dataset.<sup><a href="#fn-3">3</a></sup></p>

      <p>Așadar:</p>

      <blockquote><p><strong>social media nu este invizibilă prin definiție. Crawlability, persistența URL-ului și citation behavior trebuie măsurate per platformă.</strong></p></blockquote>

      <h2>Followers și engagement</h2>

      <p>Nu există o documentație publică care să permită afirmația:</p>

      <blockquote><p>„10.000 de followers și 0 followers dau exact același semnal pentru AI.”</p></blockquote>

      <p>Followers pot conta indirect prin:</p>

      <ul>
        <li>distribuție;</li>
        <li>branded search;</li>
        <li>earned mentions;</li>
        <li>platform ranking;</li>
        <li>secondary coverage.</li>
      </ul>

      <p>Nu știm dacă un motor extern folosește direct aceste metrici.</p>

      <p>De aceea nu trebuie inventat un efect zero.</p>

      <h2>Owned content versus third-party content</h2>

      <p>OpenAI spune clar că <strong>orice site public poate apărea în ChatGPT Search</strong>.<sup><a href="#fn-7">7</a></sup></p>

      <p>AirOps raportează că first-party mentions apar în aproximativ un sfert dintre generated answers în datasetul lor și tind să fie mai importante la verification.<sup><a href="#fn-3">3</a></sup></p>

      <p>Prin urmare:</p>

      <blockquote><p><strong>owned content nu este o clasă inferioară de sursă. Poate avea un rol diferit față de external content, în funcție de query și customer journey.</strong></p></blockquote>

      <p>O strategie sănătoasă are nevoie de:</p>

      <ul>
        <li>informație proprie corectă;</li>
        <li>pagini tehnic accesibile;</li>
        <li>surse externe relevante;</li>
        <li>monitorizare.</li>
      </ul>

      <h2>Paid și advertorial</h2>

      <p>Muck Rack raportează aproximativ <strong>0,3%</strong> paid/advertorial în linkurile analizate.<sup><a href="#fn-1">1</a></sup></p>

      <p>Această cifră nu demonstrează:</p>

      <blockquote><p>„mențiunile cumpărate nu funcționează.”</p></blockquote>

      <p>Poate reflecta:</p>

      <ul>
        <li>volum mai mic de paid content;</li>
        <li>query mix;</li>
        <li>clasificarea PESO;</li>
        <li>preferințele platformelor;</li>
        <li>tipul de intenție;</li>
        <li>alte variabile.</li>
      </ul>

      <p>Formularea corectă este:</p>

      <blockquote><p><strong>În datasetul Muck Rack, paid/advertorial a reprezentat o fracțiune foarte mică din linkurile citate. Studiul nu demonstrează că achiziția de distribuție produce sau nu produce cauzal citări AI.</strong></p></blockquote>

      <p>Separat, orice strategie de link acquisition trebuie să respecte politicile Google privind paid links și spam.</p>

      <h2>Ce nu spun aceste studii</h2>

      <p>Nu spun:</p>

      <ul>
        <li>că third-party content este întotdeauna superior;</li>
        <li>că presa are un multiplicator fix;</li>
        <li>că mentions cauzează AI visibility;</li>
        <li>că backlinks nu mai contează;</li>
        <li>că social media este inutilă;</li>
        <li>că paid media nu poate avea valoare comercială;</li>
        <li>că lista de publicații dintr-o industrie se aplică alteia;</li>
        <li>că România urmează aceleași distribuții ca SUA.</li>
      </ul>

      <p>Spun doar că, în mai multe dataseturi comerciale diferite, <strong>prezența externă este asociată frecvent cu vizibilitatea observată în AI search</strong>.</p>

      <h2>EEAT: cum tratezi sursele externe fără să transformi GEO în PR mecanic</h2>

      <p>O strategie de mențiuni externe poate deveni rapid artificială dacă obiectivul este doar:</p>

      <blockquote><p>„să apar pe cât mai multe domenii.”</p></blockquote>

      <p>Pentru E-E-A-T, o prezență externă este mai valoroasă când: (regulile de mai jos completează observațiile despre dezambiguizarea unei entități din studiul de caz AI Visibility Lab <a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz">ce este o entitate pentru AI și motoarele de căutare</a>.)</p>

      <h3>Este relevantă</h3>

      <p>Sursa are legătură reală cu domeniul.</p>

      <h3>Este verificabilă</h3>

      <p>Afirmațiile pot fi controlate și susținute.</p>

      <h3>Este independentă</h3>

      <p>Publisherul are propria responsabilitate editorială.</p>

      <h3>Este specifică</h3>

      <p>Mențiunea spune ceva real despre:</p>

      <ul>
        <li>experiență;</li>
        <li>competență;</li>
        <li>produs;</li>
        <li>metodologie;</li>
        <li>rezultate.</li>
      </ul>

      <h3>Este coerentă cu owned content</h3>

      <p>Dacă publicația spune că brandul oferă serviciul X, site-ul propriu trebuie să confirme clar acest lucru. Coerența dintre ce spun sursele externe și ce spune site-ul propriu este exact tipul de consistență analizat, pentru o singură entitate, în studiul de caz AI Visibility Lab despre <a href="/lab/articole/metadata-citare-ai-studiu-de-caz">metadata și citarea AI</a>.</p>

      <h3>Nu este fabricată pentru ranking</h3>

      <p>Mențiunile cumpărate, paginile clonă și articolele create doar pentru a simula consensul pot produce risc reputațional și SEO.</p>

      <h2>Metoda AI Visibility Lab: un scor descriptiv, nu algoritmic</h2>

      <p>Pentru a prioritiza sursele, poți construi un scor intern.</p>

      <p>Exemplu:</p>

      <p><strong>Citation Opportunity Score</strong></p>

      <p>cu componente precum:</p>

      <ul>
        <li>frecvență în Citation Map;</li>
        <li>număr de sisteme unde apare;</li>
        <li>relevanță comercială a query-urilor;</li>
        <li>prezența competitorilor;</li>
        <li>accesibilitatea realistă a sursei;</li>
        <li>calitatea editorială;</li>
        <li>actualitatea.</li>
      </ul>

      <p>Important:</p>

      <blockquote><p><strong>acesta este un instrument intern de prioritizare, nu o estimare a scoringului Google/OpenAI.</strong></p></blockquote>

      <h2>Precauție metodologică</h2>

      <p>Majoritatea cifrelor din acest articol provin de la companii cu interes comercial direct:</p>

      <ul>
        <li>Muck Rack vinde PR intelligence și Generative Pulse;</li>
        <li>AirOps vinde soluții de AI Search/SEO;</li>
        <li>Ahrefs vinde SEO și AI visibility tooling.</li>
      </ul>

      <p>Acest lucru nu invalidează studiile.</p>

      <p>Dar înseamnă că:</p>

      <ul>
        <li>query sets sunt definite de furnizor;</li>
        <li>metricile sunt definite de furnizor;</li>
        <li>metodologia poate fi incomplet publicată;</li>
        <li>rezultatele pot reflecta segmentul lor de clienți și use cases;</li>
        <li>cifrele nu sunt replicări academice independente.</li>
      </ul>

      <h3>Ce este relativ robust</h3>

      <p>Trei furnizori diferiți raportează, prin metodologii diferite, o asociere între external/web presence și AI visibility.</p>

      <h3>Ce nu este robust</h3>

      <p>Un multiplicator universal de tip:</p>

      <blockquote><p>third-party = X ori owned</p></blockquote>

      <p>sau:</p>

      <blockquote><p>mention = Y ori backlink.</p></blockquote>

      <p>Articolul nu folosește astfel de formule.</p>

      <h2>Întrebări frecvente</h2>

      <h3>Ce este o hartă de citare?</h3>

      <p>Este inventarul domeniilor și URL-urilor citate repetat de sistemele AI pentru un set definit de întrebări relevante unei nișe, într-un interval de timp documentat. Este un instrument metodologic AI Visibility Lab.</p>

      <h3>Ce procent din citările AI vine din earned media?</h3>

      <p>Nu există un procent universal. În studiul comercial Muck Rack din mai 2026, 84% dintre linkurile analizate au fost clasificate drept earned media, în propriul lor query set și sistem de clasificare.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Mențiunile contează mai mult decât backlinkurile?</h3>

      <p>Ahrefs a găsit o corelație mai puternică între branded web mentions și AI Overview brand visibility decât între backlinks și aceeași metrică. Corelația nu este însă cauzalitate și valorile nu pot fi interpretate ca raport de impact.<sup><a href="#fn-4">4</a></sup></p>

      <h3>Cum aflu unde ar trebui să fie prezent brandul meu?</h3>

      <p>Construiește un query set relevant, rulează-l repetat pe sistemele importante pentru audiența ta, colectează citation domains și brand mentions, apoi compară acea hartă cu prezența actuală a brandului.</p>

      <h3>Trebuie să apar în listicles și comparative?</h3>

      <p>Nu automat. AirOps raportează că listicles, comparison pages și review roundups au reprezentat aproape 90% dintre third-party mentions în analiza lor asupra early commercial discovery. Verifică dacă același pattern apare în harta propriei nișe.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Social media este inutilă pentru AI visibility?</h3>

      <p>Nu. Platformele diferă mult în crawlability și citation behavior. Social media poate contribui la distribuție, comunitate, branded search și external mentions. Nu trebuie însă presupus că un feed social este echivalent cu un corpus web persistent și controlat.</p>

      <h3>Poate propriul meu site să fie citat de ChatGPT?</h3>

      <p>Da. OpenAI spune că orice site public poate apărea în ChatGPT Search; pentru includerea conținutului în summaries/snippets, OAI-SearchBot nu trebuie blocat.<sup><a href="#fn-7">7</a></sup></p>

      <h3>Paid media produce citări AI?</h3>

      <p>Nu există o concluzie cauzală. În datasetul Muck Rack din mai 2026, paid/advertorial a reprezentat aproximativ 0,3% dintre linkurile citate, dar această distribuție nu demonstrează efectul unei investiții paid asupra AI visibility.<sup><a href="#fn-1">1</a></sup></p>

      <h2>Metodologie și surse</h2>

      <h3>Surse comerciale</h3>

      <p>Cifrele principale provin din:</p>

      <ul>
        <li>Muck Rack;</li>
        <li>AirOps;</li>
        <li>Ahrefs.</li>
      </ul>

      <p>Sunt păstrate numai cu:</p>

      <ul>
        <li>datasetul;</li>
        <li>contextul;</li>
        <li>limita de generalizare;</li>
        <li>precizarea explicită că sunt studii comerciale.</li>
      </ul>

      <h3>Surse primare de provider</h3>

      <p>Pentru comportamentul ChatGPT Search este folosită documentația oficială OpenAI.</p>

      <h3>Observații România</h3>

      <p>Afirmațiile despre România sunt prezentate doar ca:</p>

      <ul>
        <li>ipoteze;</li>
        <li>observații exploratorii;</li>
        <li>metode de verificare.</li>
      </ul>

      <p>Nu este publicată nicio cifră națională fără un studiu reprezentativ.</p>

      <ol class="avl-footnotes">
        <li id="fn-1">Muck Rack, Linda Zebian — „Earned media still drives 84% of AI citations. Here's what that means for PR", 7 mai 2026, verificat la 19 august 2026. Muck Rack declară peste 25 de milioane de linkuri analizate din răspunsuri ChatGPT, Claude și Gemini, în 17 industrii: 84% earned media, 27% journalism și 0,3% paid/advertorial, cu o pondere de earned media între aproximativ 82% și 89% în cele trei ediții ale studiului începute în iulie 2025: <a href="https://muckrack.com/blog/what-is-ai-reading-may-2026" target="_blank" rel="noopener noreferrer">muckrack.com/blog/what-is-ai-reading-may-2026</a></li>
        <li id="fn-2">Muck Rack — „How we built 'What Is AI Reading?' and what the data keeps telling us", 12 mai 2026, verificat la 19 august 2026. Explică selecția prompturilor (întrebări unbranded, top-of-funnel, mii de prompturi per tip de query și industrie), clasificarea prin modelul PESO și atribuirea sursei prin baza proprie de publicații Muck Rack: <a href="https://muckrack.com/blog/how-we-built-what-is-ai-reading" target="_blank" rel="noopener noreferrer">muckrack.com/blog/how-we-built-what-is-ai-reading</a></li>
        <li id="fn-3">AirOps, Oshen Davidson — „The 2026 State of AI Search: How Modern Brands Stay Visible", publicat 2 decembrie 2025 pentru anul 2026, verificat la 19 august 2026. Raport comercial care raportează, pentru early commercial discovery: aproximativ 85% dintre brand mentions provenite din external domains, branduri de aproximativ 6,5 ori mai likely să fie citate prin third-party sources, aproape 90% dintre third-party mentions provenite din listicles/comparison pages/review roundups, aproximativ 80% dintre brandurile menționate în primele trei poziții ale paginii și aproximativ 25% first-party mentions în generated answers: <a href="https://www.airops.com/report/the-2026-state-of-ai-search" target="_blank" rel="noopener noreferrer">airops.com/report/the-2026-state-of-ai-search</a></li>
        <li id="fn-4">Ahrefs, Louise Linehan — „An Analysis of AI Overview Brand Visibility Factors (75K Brands Studied)", verificat la 19 august 2026. Studiu comercial pe aproximativ 75.000 de branduri; branded web mentions au avut corelația (Spearman) 0,664 cu AI Overview brand visibility, branded anchors 0,527, branded search volume 0,392, Domain Rating 0,326, referring domains 0,295 și backlinks 0,218. Autorii precizează explicit că correlation ≠ causation: <a href="https://ahrefs.com/blog/ai-overview-brand-correlation/" target="_blank" rel="noopener noreferrer">ahrefs.com/blog/ai-overview-brand-correlation</a></li>
        <li id="fn-5">Ahrefs — „AI Overviews Tracker", verificat la 19 august 2026. Ahrefs raportează o probabilitate de aproximativ 70% ca AI Overviews să se schimbe între observații consecutive, o durată medie de conținut de aproximativ 2,15 zile și aproape jumătate (45,5%) din sursele citate complet noi de la o observație la alta; metricile precum AI Share of Voice sunt descrise explicit ca semnale de vizibilitate modelate, nu măsurători directe de audiență: <a href="https://ahrefs.com/ai-overviews-tracker" target="_blank" rel="noopener noreferrer">ahrefs.com/ai-overviews-tracker</a></li>
        <li id="fn-6">Muck Rack — „7 FAQs about the May 2026 update of 'What Is AI Reading?'", 4 iunie 2026, verificat la 19 august 2026. Raportează că peste jumătate din journalism citations provin din ultimul an, cu un vârf în prima lună de la publicare, urmat de un declin până în luna a șasea și apoi un long tail; documentează și diferențe pe tip de întrebare — press release-urile apar în aproximativ 1% dintre răspunsurile industry-trend, de aproximativ 3,5 ori mai des decât în răspunsurile best-of: <a href="https://muckrack.com/blog/what-is-ai-reading-new-insights-may-faqs" target="_blank" rel="noopener noreferrer">muckrack.com/blog/what-is-ai-reading-new-insights-may-faqs</a></li>
        <li id="fn-7">OpenAI Help Center — „Publishers and Developers – FAQ", verificare inițială 11 august 2026, reverificat la 19 august 2026. OpenAI spune că orice site public poate apărea în ChatGPT Search, iar pentru includerea conținutului în summaries/snippets OAI-SearchBot nu trebuie blocat; documentează și situația unui URL blocat care poate fi totuși cunoscut printr-un furnizor terț de search sau prin crawlingul altor pagini, caz în care poate fi afișat doar ca link/titlu: <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">help.openai.com/en/articles/12627856-publishers-and-developers-faq</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Citation behavior, modelele, search providers și documentațiile se schimbă rapid. Toate sursele de mai sus au fost reverificate live la <strong>19 august 2026</strong>, fără schimbări față de starea consemnată inițial la 11 august 2026. Afirmațiile despre produse și studiile de piață descriu starea verificată la această dată.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 19 august 2026.</em></p>
`;
