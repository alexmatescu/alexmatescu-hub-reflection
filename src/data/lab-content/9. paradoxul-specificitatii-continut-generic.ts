/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const paradoxulSpecificitatiiContinutGenericMeta = {
  title:
    "Paradoxul specificității: când contextul schimbă răspunsul și când doar fragmentează conținutul",
  description:
    "Specificitatea ajută când adaugă informație care schimbă răspunsul. Devine contraproductivă când multiplică pagini sau introduce constrângeri fără valoare. Analiză AI Visibility Lab despre relevance, query fan-out și doorway pages.",
  canonical: "https://delamatescu.ro/lab/articole/paradoxul-specificitatii-continut-generic",
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  lastReviewed: "2026-08-19",
  about: [
    { name: "Content specificity" },
    { name: "Query fan-out" },
    { name: "Doorway abuse" },
    { name: "Search relevance" },
  ],
  keywords: [
    "specificitate conținut",
    "doorway abuse",
    "scaled content abuse",
    "query fan-out",
    "Google AI Mode",
    "long-tail AI Search",
    "relevanță contextuală",
  ],
  citations: [
    {
      name: "Google — How people are using AI Mode in the U.S.",
      url: "https://blog.google/products-and-platforms/products/search/ai-mode-us-insights/",
    },
    {
      name: "Google Search Central — AI features and your website",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
    },
    {
      name: "Google Search Central — Optimizing your website for generative AI features on Google Search",
      url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    },
    {
      name: "Semrush — Google AI Mode's Early Adoption and SEO Impact",
      url: "https://www.semrush.com/blog/google-ai-mode-seo-impact/",
    },
    {
      name: "Semrush — ChatGPT traffic analysis: Insights from 17 months of clickstream data",
      url: "https://www.semrush.com/blog/chatgpt-search-insights/",
    },
    {
      name: "OpenAI Help Center — ChatGPT Search",
      url: "https://help.openai.com/en/articles/9237897-chatgpt-search",
    },
    {
      name: "Google Search Central — A guide to Google Search ranking systems",
      url: "https://developers.google.com/search/docs/appearance/ranking-systems-guide",
    },
    {
      name: "Google Search Central — Spam policies for Google web search",
      url: "https://developers.google.com/search/docs/essentials/spam-policies",
    },
  ],
  faq: [
    {
      q: "Conținutul generic nu poate ranka?",
      a: "Poate. Un articol general poate fi foarte relevant pentru o interogare generală. Problema apare când pagina este atât de largă încât nu răspunde suficient de bine unei nevoi concrete. Specificitatea poate crește relevanța atunci când adaugă context care schimbă răspunsul.",
    },
    {
      q: "Ce înseamnă „specificitate utilă”?",
      a: "Înseamnă informație care schimbă efectiv recomandarea: locație, industrie, situație, buget, rol sau altă constrângere relevantă. Dacă detaliul nu schimbă răspunsul, nu justifică neapărat o pagină separată.",
    },
    {
      q: "Trebuie să creez pagini separate pentru fiecare oraș?",
      a: "Nu dacă paginile ar fi aproape identice. Google documentează doorway abuse pentru pagini foarte similare targetate pe variații geografice și scaled content abuse pentru volume de pagini create în principal pentru manipularea rankingului.",
    },
    {
      q: "Cum știu cât de specific trebuie să fiu?",
      a: "Folosește regula AI Visibility Lab: coboară până la nivelul la care diferențele dintre utilizatori schimbă răspunsul și oprește-te înainte ca segmentarea să devină decorativă sau redundantă.",
    },
    {
      q: "Prompturile AI sunt mai lungi decât interogările tradiționale?",
      a: "În anumite suprafețe, da. Google spune că interogările AI Mode sunt în medie aproximativ de trei ori mai lungi decât căutările tradiționale, iar Semrush a raportat separat 7,22 cuvinte pentru AI Mode versus aproximativ 4 pentru Search în propriul dataset.",
    },
    {
      q: "Dacă multe prompturi ChatGPT nu au keyword match, keyword research-ul nu mai este util?",
      a: "Nu. În datasetul Semrush, 65–85% dintre prompturi nu au avut exact match în baza lor de keywords. Asta arată că formulările conversaționale depășesc adesea vocabularul stocat în bazele tradiționale, nu că research-ul de keywords devine inutil.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const paradoxulSpecificitatiiContinutGenericHtml = `
      <p><strong>Specificitatea este utilă atunci când adaugă informație care schimbă răspunsul. Devine contraproductivă când doar multiplică pagini sau introduce constrângeri care nu schimbă nimic pentru utilizator.</strong></p>

      <p>Aceasta este miza articolului.</p>

      <p>Nu orice text general este slab și nu orice text foarte specific este automat mai ușor de regăsit. Un articol general poate fi excelent pentru o intenție generală. Un articol specific poate deveni artificial dacă doar schimbă orașul, industria sau avatarul fără să schimbe informația oferită.</p>

      <p>Problema reală este <strong>relevanța contextuală</strong>: ce detalii din situația utilizatorului schimbă efectiv răspunsul și merită reflectate în conținut?</p>

      <h2>Întrebările devin mai conversaționale</h2>

      <p>Căutarea tradițională și suprafețele AI nu sunt identice, dar datele recente arată o tendință clară: în suprafețele conversaționale, utilizatorii formulează întrebări mai lungi și cu mai mult context.</p>

      <h3>Google AI Mode</h3>

      <p>Google a publicat pe 19 mai 2026 că interogările din AI Mode au, în medie, <strong>aproximativ de trei ori lungimea</strong> unei interogări tradiționale în Google Search.<sup><a href="#fn-1">1</a></sup></p>

      <p>Google documentează și folosirea <strong>query fan-out</strong> în AI Mode și AI Overviews: sistemul poate genera mai multe căutări relaționate pentru a obține informații suplimentare înainte de compunerea răspunsului.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup></p>

      <h3>Semrush</h3>

      <p>Într-un studiu comercial despre Google AI Mode, Semrush a raportat în propriul dataset:</p>

      <ul>
        <li><strong>7,22 cuvinte</strong> pentru interogările AI Mode;</li>
        <li>aproximativ <strong>4 cuvinte</strong> pentru căutarea Google tradițională.<sup><a href="#fn-4">4</a></sup></li>
      </ul>

      <p>Aceste valori nu sunt telemetrie oficială Google. Sunt observații Semrush asupra unui eșantion propriu.</p>

      <h3>ChatGPT și bazele de keywords</h3>

      <p>Într-o analiză comercială publicată în aprilie 2026, Semrush a raportat că, pentru o mare parte din perioada analizată, între <strong>65% și 85% dintre prompturile ChatGPT</strong> din datasetul lor nu au putut fi potrivite cu niciun keyword din baza Semrush de peste 27 de miliarde de keywords.<sup><a href="#fn-5">5</a></sup></p>

      <p>Asta nu înseamnă că acele subiecte „nu au fost căutate niciodată”.</p>

      <p>Înseamnă ceva mai modest și mai util:</p>

      <blockquote><p><strong>keyword research-ul tradițional surprinde incomplet formulările conversaționale și situaționale folosite în sistemele AI.</strong></p></blockquote>

      <h2>Specificitate nu înseamnă „mai multe adjective”</h2>

      <p>Specificitatea utilă apare doar când contextul schimbă răspunsul.</p>

      <p>Exemplu:</p>

      <blockquote><p>„consultant marketing industrial”</p></blockquote>

      <p>este o categorie.</p>

      <p>Dar:</p>

      <blockquote><p>„avem o firmă de producție din România, vindem în Germania și vrem să înțelegem de ce clienții noi nu ne găsesc online”</p></blockquote>

      <p>introduce context care poate schimba analiza:</p>

      <ul>
        <li>tipul companiei;</li>
        <li>piața;</li>
        <li>obiectivul;</li>
        <li>problema;</li>
        <li>canalul comercial.</li>
      </ul>

      <p>Dacă răspunsul ar fi identic indiferent de aceste detalii, ele nu justifică un articol separat.</p>

      <p>Dacă răspunsul se schimbă material, contextul merită reflectat.</p>

      <h2>Ce se întâmplă în retrieval</h2>

      <p>Versiunea inițială a acestui articol descria specificitatea ca pe un mecanism determinist: fiecare constrângere ar deveni o sub-interogare separată, iar lipsa ei ar elimina documentul din candidate set.</p>

      <p>Această explicație este prea puternică.</p>

      <p>OpenAI documentează că ChatGPT Search poate rescrie promptul în <strong>una sau mai multe interogări țintite</strong>.<sup><a href="#fn-6">6</a></sup> Google documentează query fan-out pentru AI Mode și AI Overviews.<sup><a href="#fn-2">2</a></sup></p>

      <p>Dar providerii nu publică o regulă conform căreia fiecare detaliu din prompt devine automat query separat.</p>

      <p>Mai corect:</p>

      <blockquote><p><strong>o cerere bogată în context poate genera una sau mai multe căutări auxiliare care păstrează anumite constrângeri relevante, dar nu putem deduce din exterior exact ce informații devin queries separate sau cum este construit setul final de candidați.</strong></p></blockquote>

      <p>Specificitatea poate crește relevanța atunci când pagina conține informație care răspunde acelui context. Nu este însă singurul factor de retrieval, ranking sau citare. Mecanismele de query rewriting și query fan-out sunt tratate pe larg, cu surse separate pentru ChatGPT Search și Google, în <a href="/lab/articole/cuvant-cheie-vs-fraza-tokenizare">cuvânt-cheie vs frază în AI Search</a>.</p>

      <h2>Model mental AI Visibility Lab: vecinătatea semantică</h2>

      <p>Ca model explicativ, AI Visibility Lab folosește următoarea metaforă:</p>

      <ul>
        <li>un text foarte generic acoperă o zonă semantică largă;</li>
        <li>un text specific acoperă o zonă mai restrânsă;</li>
        <li>dacă interogarea este foarte contextuală, un text care include acel context poate avea o potrivire mai bună.</li>
      </ul>

      <p>Aceasta este o <strong>metaforă de lucru</strong>, nu o metrică publică folosită de Google, OpenAI sau alt provider.</p>

      <p>Nu trebuie interpretată astfel:</p>

      <blockquote><p>„genericul este apropiat de toate și relevant pentru nimic.”</p></blockquote>

      <p>Un document general poate fi extrem de relevant pentru o interogare generală.</p>

      <p>Mai corect:</p>

      <blockquote><p><strong>specificitatea poate reduce ambiguitatea atunci când problema utilizatorului conține constrângeri care chiar schimbă soluția.</strong></p></blockquote>

      <h2>Extractibil versus recuperabil</h2>

      <p>Un text poate fi ușor de procesat și totuși să nu fie cel mai relevant pentru o nevoie concretă.</p>

      <p>AI Visibility Lab folosește două concepte separate:</p>

      <ul>
        <li><strong>extractibil</strong> — informația poate fi identificată și procesată din pagină;</li>
        <li><strong>recuperabil</strong> — informația este suficient de relevantă pentru o anumită nevoie încât să intre în procesul de retrieval.</li>
      </ul>

      <p>Specificitatea nu „rezolvă selecția” singură.</p>

      <p>Ea poate:</p>

      <ul>
        <li>clarifica pentru cine este pagina;</li>
        <li>clarifica situația;</li>
        <li>reduce ambiguitatea;</li>
        <li>face informația mai relevantă pentru anumite cereri.</li>
      </ul>

      <p>Dar rankingul și retrieval-ul depind de mai multe sisteme și semnale.</p>

      <p>Google documentează explicit utilizarea mai multor sisteme de ranking și a mecanismelor precum neural matching și RankBrain pentru a lega concepte și intenții, inclusiv atunci când nu există exact match lexical.<sup><a href="#fn-7">7</a></sup></p>

      <h2>Cele patru axe de specificitate</h2>

      <p>AI Visibility Lab folosește patru axe practice pentru a evalua dacă un text este suficient de contextualizat:</p>

      <ol>
        <li>locație;</li>
        <li>avatar/situație organizațională;</li>
        <li>subiect;</li>
        <li>situația concretă în care apare problema.</li>
      </ol>

      <p>Acestea sunt o <strong>taxonomie proprie de lucru</strong>, nu o terminologie standardizată în industrie.</p>

      <h2>1. Locația</h2>

      <p><strong>Generic:</strong></p>

      <blockquote><p>servicii de consultanță în transformare digitală</p></blockquote>

      <p><strong>Contextualizat:</strong></p>

      <blockquote><p>consultanță în vizibilitate AI pentru furnizori auto din zona Sibiu–Brașov</p></blockquote>

      <p>Locația este utilă numai dacă schimbă răspunsul.</p>

      <p>Poate conta prin:</p>

      <ul>
        <li>piață locală;</li>
        <li>legislație;</li>
        <li>disponibilitate;</li>
        <li>distanțe;</li>
        <li>infrastructură;</li>
        <li>furnizori;</li>
        <li>instituții;</li>
        <li>specificul unei industrii locale.</li>
      </ul>

      <p>Dacă schimbarea orașului nu schimbă informația oferită, numele orașului nu justifică o pagină separată.</p>

      <h3>Test de audit</h3>

      <p>Întreabă:</p>

      <blockquote><p><strong>dacă schimb locația, trebuie să schimb și conținutul?</strong></p></blockquote>

      <p>Dacă nu, localizarea poate fi doar decorativă.</p>

      <h2>2. Avatarul</h2>

      <p><strong>Generic:</strong></p>

      <blockquote><p>pentru companii care vor să crească</p></blockquote>

      <p><strong>Contextualizat:</strong></p>

      <blockquote><p>pentru firme de producție în care marketingul este gestionat de o singură persoană cu responsabilități multiple</p></blockquote>

      <p>Avatarul util nu înseamnă neapărat:</p>

      <ul>
        <li>vârstă;</li>
        <li>sex;</li>
        <li>venit;</li>
        <li>demografie.</li>
      </ul>

      <p>În B2B, poate fi mai relevant:</p>

      <ul>
        <li>cine ia decizia;</li>
        <li>ce resurse are;</li>
        <li>ce a încercat deja;</li>
        <li>ce constrângeri are;</li>
        <li>ce obiective urmărește;</li>
        <li>ce risc încearcă să evite.</li>
      </ul>

      <h3>Test euristic</h3>

      <p>Dacă cititorul nu poate înțelege rapid pentru cine este pagina, verifică dacă textul este prea vag.</p>

      <p>„Rapid” este aici un criteriu editorial, nu un benchmark algoritmic.</p>

      <h2>3. Subiectul</h2>

      <p><strong>Generic:</strong></p>

      <blockquote><p>ghid complet de marketing digital</p></blockquote>

      <p><strong>Contextualizat:</strong></p>

      <blockquote><p>de ce paginile de produs cu descrieri preluate de la furnizor sunt greu de diferențiat în search și ce informație originală merită adăugată</p></blockquote>

      <p>Problema nu este că un subiect larg este automat rău.</p>

      <p>Un articol evergreen și general poate fi foarte valoros.</p>

      <p>Problema apare când titlul promite o arie atât de largă încât conținutul rămâne superficial.</p>

      <h3>Test de audit</h3>

      <p>Întreabă:</p>

      <blockquote><p><strong>ce problemă concretă rezolvă articolul și ce rămâne în afara lui?</strong></p></blockquote>

      <p>Dacă răspunsul este neclar, aria poate fi prea largă.</p>

      <h2>4. Situația</h2>

      <p>În sistemele conversaționale, utilizatorul poate furniza direct context precum:</p>

      <ul>
        <li>tocmai am lansat;</li>
        <li>am schimbat platforma;</li>
        <li>mi-a scăzut traficul;</li>
        <li>am buget limitat;</li>
        <li>fac singur implementarea;</li>
        <li>trebuie să aleg între două variante.</li>
      </ul>

      <p>Nu avem o bază suficientă pentru a afirma că „situația este cea mai frecventă constrângere” în toate prompturile.</p>

      <p>Dar este o axă importantă deoarece același subiect poate necesita răspunsuri diferite în funcție de moment.</p>

      <p>Exemplu:</p>

      <blockquote><p>„Cum aleg un CMS?”</p></blockquote>

      <p>nu este aceeași problemă cu:</p>

      <blockquote><p>„Am migrat deja la un CMS nou și Google nu mai indexează paginile.”</p></blockquote>

      <p>Subiectul este apropiat. Situația schimbă răspunsul.</p>

      <h2>Specificitate reală versus specificitate falsă</h2>

      <p>Una dintre cele mai frecvente erori este să confunzi specificitatea cu multiplicarea paginilor.</p>

      <p>Exemplu:</p>

      <ul>
        <li>consultant GEO Sibiu;</li>
        <li>consultant GEO Cluj;</li>
        <li>consultant GEO Timișoara;</li>
      </ul>

      <p>cu același corp de text și numai orașul schimbat.</p>

      <p>Google definește <strong>doorway abuse</strong> ca practici în care pagini sau site-uri foarte similare sunt create pentru a ranka la interogări similare și pentru a direcționa utilizatorii către aceeași destinație. Documentația Google oferă explicit ca exemplu pagini targetate pe regiuni sau orașe care conduc utilizatorul către aceeași pagină/destinație.<sup><a href="#fn-8">8</a></sup></p>

      <p>Google documentează separat și <strong>scaled content abuse</strong> pentru volume mari de pagini create în principal pentru manipularea rankingului, indiferent dacă sunt generate automat sau manual.<sup><a href="#fn-8">8</a></sup></p>

      <p>De aceea, formularea corectă este:</p>

      <blockquote><p><strong>zece pagini aproape identice cu orașul schimbat nu creează automat zece oportunități de relevanță. Dacă paginile nu oferă valoare unică și există în principal pentru a targeta variații similare de query, pot intra în zona doorway/scaled content abuse.</strong></p></blockquote>

      <p>Nu există o bază pentru afirmația că aceste pagini produc „un singur semnal slab” sau că Google calculează efectul în această formă.</p>

      <h2>Testul specificității false</h2>

      <p>Întreabă:</p>

      <blockquote><p><strong>dacă schimb orașul, industria sau avatarul prin find-and-replace, textul rămâne la fel de adevărat și util?</strong></p></blockquote>

      <p>Dacă da, probabil că nu ai creat specificitate reală.</p>

      <p>Ai creat variație superficială.</p>

      <h2>Unde se oprește specificitatea</h2>

      <p>Specificitatea are costuri.</p>

      <p>Fiecare segmentare suplimentară poate:</p>

      <ul>
        <li>reduce audiența;</li>
        <li>fragmenta autoritatea internă;</li>
        <li>crește mentenanța;</li>
        <li>crea conținut redundant;</li>
        <li>produce pagini prea asemănătoare;</li>
        <li>complica internal linking-ul.</li>
      </ul>

      <p>De aceea, specificitatea nu trebuie maximizată.</p>

      <h3>Regula de calibrare AI Visibility Lab</h3>

      <blockquote><p><strong>specificitatea trebuie să coboare până la nivelul la care diferențele dintre utilizatori schimbă răspunsul — și nu mai jos.</strong></p></blockquote>

      <p>Exemplu:</p>

      <p>Dacă recomandarea ta este identică pentru:</p>

      <ul>
        <li>producător auto;</li>
        <li>cabinet stomatologic;</li>
      </ul>

      <p>atunci industria poate să nu fie o axă relevantă pentru acel subiect.</p>

      <p>Dacă:</p>

      <ul>
        <li>regulile;</li>
        <li>procesul;</li>
        <li>exemplele;</li>
        <li>riscurile;</li>
        <li>tehnologia;</li>
      </ul>

      <p>se schimbă radical între industrii, atunci industria poate deveni o axă justificată.</p>

      <h2>Specificitatea într-o piață lingvistică mai mică</h2>

      <p>Este rezonabil să presupunem că hipersegmentarea poate reduce mai repede audiența într-o piață lingvistică mai mică.</p>

      <p>Dar articolul nu are un dataset care să permită afirmația:</p>

      <blockquote><p>„în română pragul de zero este X sau apare sigur mai devreme.”</p></blockquote>

      <p>Prin urmare:</p>

      <blockquote><p><strong>pentru piața românească, gradul optim de specificitate trebuie verificat din datele proprii — impresii, Search Console, CRM, lead-uri și conversații reale — nu dedus doar din mărimea limbii.</strong></p></blockquote>

      <h2>Cum găsești axele care chiar contează</h2>

      <p>Una dintre cele mai utile surse nu este un keyword tool.</p>

      <p>Sunt conversațiile reale.</p>

      <p>Ia:</p>

      <ul>
        <li>lead-uri;</li>
        <li>emailuri;</li>
        <li>call notes;</li>
        <li>întrebări din vânzări;</li>
        <li>întrebări de suport;</li>
        <li>conversații cu clienții.</li>
      </ul>

      <p>Caută detaliile pe care oamenii le menționează spontan:</p>

      <ul>
        <li>industrie;</li>
        <li>buget;</li>
        <li>locație;</li>
        <li>maturitate;</li>
        <li>platformă;</li>
        <li>problemă;</li>
        <li>timing;</li>
        <li>risc.</li>
      </ul>

      <p>Dacă aceleași constrângeri apar repetat și schimbă recomandarea, ele sunt candidate bune pentru structurarea conținutului.</p>

      <h2>Trei teste practice</h2>

      <h3>1. Testul înlocuirii</h3>

      <p>Înlocuiește numele firmei tale cu numele unui competitor.</p>

      <p>Dacă articolul rămâne complet valabil și nimic din el nu reflectă:</p>

      <ul>
        <li>experiența;</li>
        <li>metodologia;</li>
        <li>datele;</li>
        <li>exemplele;</li>
        <li>poziționarea;</li>
      </ul>

      <p>atunci textul poate fi prea generic.</p>

      <p>Acest test măsoară diferențierea, nu rankingul.</p>

      <h3>2. Testul promptului real</h3>

      <p>Formulează întrebarea așa cum ar face-o un client real:</p>

      <ul>
        <li>cu problema;</li>
        <li>contextul;</li>
        <li>constrângerile;</li>
        <li>obiectivul.</li>
      </ul>

      <p>Nu există un număr „corect” de cuvinte.</p>

      <p>Rulează întrebarea pe mai multe sisteme relevante și repetă testul, deoarece răspunsurile generative pot varia.</p>

      <p>Compară:</p>

      <ul>
        <li>ce surse apar;</li>
        <li>ce informații au sursele respective;</li>
        <li>ce context lipsește din pagina ta;</li>
        <li>dacă diferența este factuală sau doar de formulare.</li>
      </ul>

      <h3>3. Testul axei relevante</h3>

      <p>Pentru fiecare axă:</p>

      <ul>
        <li>locație;</li>
        <li>avatar;</li>
        <li>industrie;</li>
        <li>situație;</li>
      </ul>

      <p>întreabă:</p>

      <blockquote><p><strong>dacă elimin această informație, răspunsul devine mai puțin corect sau mai puțin util?</strong></p></blockquote>

      <p>Dacă nu, axa poate fi inutilă pentru pagina respectivă.</p>

      <h2>Ce înseamnă asta pentru Google</h2>

      <p>Versiunea veche afirma că interogările generale sunt dominate de „autoritate acumulată în ani” și că un site nou nu poate concura acolo.</p>

      <p>Google nu documentează o astfel de regulă.</p>

      <p>Google spune că Search folosește numeroase sisteme și semnale, inclusiv relevanță, calitate, context, page-level signals, unele site-wide signals, neural matching, RankBrain și alte sisteme de ranking.<sup><a href="#fn-7">7</a></sup> Semnalele care influențează selecția surselor citate de sistemele AI sunt tratate separat în <a href="/lab/cercetare/cum-aleg-motoarele-ai">cum aleg motoarele AI ce citează</a>.</p>

      <p>O formulare mai defensabilă este:</p>

      <blockquote><p><strong>interogările largi pot avea mai multe pagini candidate și o intenție mai puțin delimitată, în timp ce interogările specifice permit unui publisher să răspundă unei nevoi mai clar definite.</strong></p></blockquote>

      <p>Aceasta nu garantează rankingul.</p>

      <p>Specificitatea este un instrument de relevanță, nu o scurtătură în jurul celorlalte sisteme Google.</p>

      <h2>Long-tail și intenție comercială</h2>

      <p>Interogările mai specifice pot exprima o intenție mai clară.</p>

      <p>De exemplu:</p>

      <blockquote><p>„CRM”</p></blockquote>

      <p>versus:</p>

      <blockquote><p>„CRM pentru firmă de distribuție cu 20 de agenți de vânzări și integrare cu SAP”.</p></blockquote>

      <p>A doua spune mai multe despre nevoie.</p>

      <p>Dar din asta nu rezultă automat:</p>

      <ul>
        <li>conversion rate mai mare;</li>
        <li>profitabilitate mai mare;</li>
        <li>CAC mai mic;</li>
        <li>ranking mai ușor.</li>
      </ul>

      <p>Acestea trebuie măsurate în analytics, CRM, pipeline și revenue attribution.</p>

      <p>Formularea corectă:</p>

      <blockquote><p><strong>specificitatea poate crește claritatea intenției, iar valoarea comercială trebuie validată din conversiile proprii.</strong></p></blockquote>

      <h2>Ce faci concret</h2>

      <h3>Scrie general când răspunsul este general</h3>

      <p>Nu forța segmentarea.</p>

      <p>Dacă aceeași explicație este utilă tuturor, o pagină generală poate fi cea mai bună alegere.</p>

      <h3>Segmentează când contextul schimbă informația</h3>

      <p>Creează pagini sau secțiuni separate când există diferențe reale în:</p>

      <ul>
        <li>proces;</li>
        <li>recomandare;</li>
        <li>legislație;</li>
        <li>exemple;</li>
        <li>preț;</li>
        <li>risc;</li>
        <li>implementare.</li>
      </ul>

      <h3>Evită paginile-clonă</h3>

      <p>Nu crea pagini locale/verticale doar prin schimbarea unui token în titlu și câteva propoziții.</p>

      <p>Google documentează explicit doorway abuse și scaled content abuse.<sup><a href="#fn-8">8</a></sup></p>

      <h3>Folosește context real</h3>

      <p>Include:</p>

      <ul>
        <li>exemple;</li>
        <li>date;</li>
        <li>situații;</li>
        <li>decizii;</li>
        <li>trade-off-uri;</li>
        <li>limitări.</li>
      </ul>

      <p>Specificitatea bună vine din informație, nu din adjective. Distincția dintre ce rămâne valabil din SEO clasic și ce se schimbă complet în abordarea GEO este tratată separat în <a href="/lab/cercetare/seo-vs-geo">SEO vs GEO</a>.</p>

      <h2>Întrebări frecvente</h2>

      <h3>Conținutul generic nu poate ranka?</h3>

      <p>Poate. Un articol general poate fi foarte relevant pentru o interogare generală. Problema apare când pagina este atât de largă încât nu răspunde suficient de bine unei nevoi concrete. Specificitatea poate crește relevanța atunci când adaugă context care schimbă răspunsul.</p>

      <h3>Ce înseamnă „specificitate utilă”?</h3>

      <p>Înseamnă informație care schimbă efectiv recomandarea: locație, industrie, situație, buget, rol sau altă constrângere relevantă. Dacă detaliul nu schimbă răspunsul, nu justifică neapărat o pagină separată.</p>

      <h3>Trebuie să creez pagini separate pentru fiecare oraș?</h3>

      <p>Nu dacă paginile ar fi aproape identice. Google documentează doorway abuse pentru pagini foarte similare targetate pe variații geografice și scaled content abuse pentru volume de pagini create în principal pentru manipularea rankingului.<sup><a href="#fn-8">8</a></sup></p>

      <h3>Cum știu cât de specific trebuie să fiu?</h3>

      <p>Folosește regula AI Visibility Lab: coboară până la nivelul la care diferențele dintre utilizatori schimbă răspunsul și oprește-te înainte ca segmentarea să devină decorativă sau redundantă.</p>

      <h3>Prompturile AI sunt mai lungi decât interogările tradiționale?</h3>

      <p>În anumite suprafețe, da. Google spune că interogările AI Mode sunt în medie aproximativ de trei ori mai lungi decât căutările tradiționale. Semrush a raportat separat 7,22 cuvinte pentru AI Mode versus aproximativ 4 pentru Search în propriul dataset.<sup><a href="#fn-1">1</a></sup><sup><a href="#fn-4">4</a></sup></p>

      <h3>Dacă 65–85% dintre prompturile ChatGPT nu au keyword match, keyword research-ul nu mai este util?</h3>

      <p>Nu. În datasetul Semrush, 65–85% dintre prompturi nu au avut exact match în baza lor de keywords. Asta arată că formulările conversaționale depășesc adesea vocabularul stocat în bazele tradiționale, nu că research-ul de keywords devine inutil.<sup><a href="#fn-5">5</a></sup></p>

      <h2>Metodologie și niveluri de certitudine</h2>

      <h3>Surse primare</h3>

      <p>Afirmațiile despre produsele și politicile providerilor sunt ancorate în Google Search Central, Google Blog și OpenAI Help Center.</p>

      <h3>Studii comerciale</h3>

      <p>Cifrele privind lungimea interogărilor și keyword matching provin din Semrush. Aceste cifre descriu dataseturile furnizorului și nu sunt tratate drept constante ale produselor.</p>

      <h3>Concepte AI Visibility Lab</h3>

      <p>Următoarele sunt modele proprii de lucru:</p>

      <ul>
        <li>cele patru axe de specificitate;</li>
        <li>regula de calibrare;</li>
        <li>testul înlocuirii;</li>
        <li>noțiunea de „vecinătate semantică” ca metaforă;</li>
        <li>distincția practică extractibil / recuperabil în contextul acestui corpus.</li>
      </ul>

      <p>Ele nu sunt prezentate ca terminologie oficială Google/OpenAI.</p>

      <h2>Surse</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">Google — „How people are using AI Mode in the U.S.", publicat 19 mai 2026, verificat la 19 august 2026. Google spune că interogările AI Mode sunt, în medie, aproximativ de trei ori mai lungi decât căutările tradiționale: <a href="https://blog.google/products-and-platforms/products/search/ai-mode-us-insights/" target="_blank" rel="noopener noreferrer">blog.google/…/ai-mode-us-insights</a></li>
        <li id="fn-2">Google Search Central — „AI features and your website", verificat la 19 august 2026. Documentează query fan-out în AI Overviews și AI Mode: <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">developers.google.com/…/ai-features</a></li>
        <li id="fn-3">Google Search Central — „Optimizing your website for generative AI features on Google Search", 2026, verificat la 19 august 2026. Definește query fan-out, recomandă people-first content și avertizează împotriva producerii de pagini pentru variații de query doar pentru manipularea rankingului: <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">developers.google.com/…/ai-optimization-guide</a></li>
        <li id="fn-4">Semrush — „Google AI Mode's Early Adoption and SEO Impact", publicat 30 iulie 2025, verificat la 19 august 2026. Studiu comercial pe aproape 69 de milioane de sesiuni Google Search din SUA, desktop, 1 mai–5 iulie 2025; raportează 7,22 cuvinte medie pentru query-urile AI Mode față de 4,0 cuvinte pentru căutarea tradițională în datasetul analizat: <a href="https://www.semrush.com/blog/google-ai-mode-seo-impact/" target="_blank" rel="noopener noreferrer">semrush.com/blog/google-ai-mode-seo-impact</a></li>
        <li id="fn-5">Semrush — „ChatGPT traffic analysis: Insights from 17 months of clickstream data", 7 aprilie 2026, verificat la 19 august 2026. Studiu comercial pe peste un miliard de linii de clickstream din SUA, octombrie 2024–februarie 2026; pentru o mare parte din perioada analizată, 65–85% dintre prompturi nu au avut exact match în baza Semrush de peste 27 de miliarde de keywords: <a href="https://www.semrush.com/blog/chatgpt-search-insights/" target="_blank" rel="noopener noreferrer">semrush.com/blog/chatgpt-search-insights</a></li>
        <li id="fn-6">OpenAI Help Center — „ChatGPT Search", verificat la 19 august 2026. OpenAI documentează că, atunci când Search folosește furnizori de căutare, sistemul rescrie de regulă promptul în una sau mai multe interogări țintite: <a href="https://help.openai.com/en/articles/9237897-chatgpt-search" target="_blank" rel="noopener noreferrer">help.openai.com/…/chatgpt-search</a></li>
        <li id="fn-7">Google Search Central — „A guide to Google Search ranking systems", verificat la 19 august 2026. Documentează sisteme precum BERT, neural matching și RankBrain și utilizarea mai multor semnale la nivel de pagină și site: <a href="https://developers.google.com/search/docs/appearance/ranking-systems-guide" target="_blank" rel="noopener noreferrer">developers.google.com/…/ranking-systems-guide</a></li>
        <li id="fn-8">Google Search Central — „Spam policies for Google web search", verificat la 19 august 2026. Documentează doorway abuse (inclusiv pagini targetate pe regiuni/orașe care conduc utilizatorul către aceeași destinație) și scaled content abuse (volume mari de pagini create în principal pentru manipularea rankingului, generate automat sau manual): <a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">developers.google.com/…/spam-policies</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>AI Mode, ChatGPT Search, query fan-out și comportamentele de search se pot modifica. Afirmațiile despre produse descriu <strong>starea documentată la 19 august 2026</strong>, dată la care sursele de mai sus au fost verificate live, inclusiv o corecție: citarea Semrush despre AI Mode se referă la studiul publicat la 30 iulie 2025 (nu 2026, cum indica o versiune anterioară a acestei surse), pe un eșantion din perioada mai–iulie 2025.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Ultima verificare factuală și a surselor: 19 august 2026.</em></p>
`;
