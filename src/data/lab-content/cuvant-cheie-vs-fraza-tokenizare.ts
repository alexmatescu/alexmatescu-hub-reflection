/**
 * Metadate tehnice ale documentului sursă (frontmatter + JSON-LD din markdown).
 * Folosite doar pentru SEO/structured data — nu sunt afișate în conținutul paginii.
 */
export const cuvantCheieVsFrazaTokenizareMeta = {
  title:
    "Cuvânt-cheie vs frază în AI Search: query rewriting, tokenizare și ce putem spune corect despre limba română",
  description:
    "Cum rescriu ChatGPT Search și Google AI Search interogările, ce este query fan-out, cum funcționează tokenizarea și de ce diferențele dintre limbi trebuie măsurate cu tokenizerul real, nu estimate din octeți.",
  canonical: "https://delamatescu.ro/lab/articole/cuvant-cheie-vs-fraza-tokenizare",
  datePublished: "2026-08-19",
  dateModified: "2026-08-19",
  lastReviewed: "2026-08-19",
  about: [
    { name: "Query rewriting" },
    { name: "Query fan-out" },
    { name: "Tokenization" },
    { name: "Romanian language" },
  ],
  keywords: [
    "query rewriting",
    "query fan-out",
    "tokenizare BPE",
    "tiktoken",
    "ChatGPT Search",
    "Google AI Overviews",
    "limba română tokenizare",
  ],
  citations: [
    {
      name: "OpenAI Help Center — ChatGPT Search",
      url: "https://help.openai.com/en/articles/9237897-chatgpt-search",
    },
    {
      name: "OpenAI Platform — Tokenizer",
      url: "https://platform.openai.com/tokenizer",
    },
    {
      name: "OpenAI — tiktoken (repository oficial GitHub)",
      url: "https://github.com/openai/tiktoken",
    },
    {
      name: "OpenAI tiktoken — model.py",
      url: "https://github.com/openai/tiktoken/blob/main/tiktoken/model.py",
    },
    {
      name: "Google Search Central — AI Features and Your Website",
      url: "https://developers.google.com/search/docs/appearance/ai-features",
    },
    {
      name: "Google Search Central — Optimizing your website for generative AI features on Google Search",
      url: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide",
    },
    {
      name: "Google Search Central — A Guide to Google Search Ranking Systems",
      url: "https://developers.google.com/search/docs/appearance/ranking-systems-guide",
    },
    {
      name: "Semrush — New Semrush Study Reveals ChatGPT Search Trends: Insights from 80 Million Clickstream Records",
      url: "https://www.semrush.com/news/379285-new-semrush-study-reveals-chatgpt-search-trends-insights-from-80-million-clickstream-records/",
    },
    {
      name: "Semrush — ChatGPT traffic analysis: Insights from 17 months of clickstream data",
      url: "https://www.semrush.com/blog/chatgpt-search-insights/",
    },
    {
      name: "Search Engine Land — ChatGPT performs a search in 31% of prompts, new data reveals (Nectiv)",
      url: "https://searchengineland.com/chatgpt-search-prompts-data-463407",
    },
    {
      name: "Unicode Standard, Chapter 7 — European Alphabetic Scripts",
      url: "https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/",
    },
    {
      name: "A Lite Romanian BERT: ALR-BERT, Computers 2022",
      url: "https://www.mdpi.com/2073-431X/11/4/57",
    },
  ],
  faq: [
    {
      q: "ChatGPT Search caută exact promptul pe care îl scriu?",
      a: "Nu neapărat. OpenAI spune că ChatGPT Search poate rescrie promptul într-una sau mai multe interogări țintite atunci când lucrează cu furnizori de search.",
    },
    {
      q: "Google AI Mode folosește mai multe căutări pentru aceeași întrebare?",
      a: "Poate. Google documentează query fan-out pentru AI Mode și AI Overviews: modelul poate genera multiple interogări relaționate pentru a recupera informații suplimentare.",
    },
    {
      q: "Trebuie să optimizez pagina pentru query-urile generate intern?",
      a: "Nu ca listă de keywords sau pagini separate. Google recomandă conținut util și people-first și avertizează împotriva producerii de pagini pentru fiecare variație posibilă de query fan-out.",
    },
    {
      q: "Româna folosește mai mulți tokeni decât engleza?",
      a: "Nu există o cifră universală. Rezultatul depinde de tokenizer, model, text și traducere. Pentru OpenAI, comparația trebuie măsurată cu encodingul relevant, de exemplu o200k_base pentru familiile mapate oficial la el.",
    },
    {
      q: "Mai mulți bytes în UTF-8 înseamnă mai mulți tokeni?",
      a: "Nu. Tokenizarea BPE combină secvențe de bytes în tokeni. Byte count și token count sunt măsuri diferite.",
    },
    {
      q: "Este greșit să folosesc ş și ţ în loc de ș și ț?",
      a: "Pentru româna modernă, Unicode preferă ș și ț, cu virgulă dedesubt. Formele cu sedilă apar în date legacy și sunt codepoint-uri distincte, dar Unicode recomandă echivalarea lor în procesarea datelor românești.",
    },
  ],
};

/** Conținutul propriu-zis al articolului — fără metadate tehnice. */
export const cuvantCheieVsFrazaTokenizareHtml = `
      <p><strong>În AI Search, formularea tastată de utilizator nu este neapărat interogarea trimisă mai departe către un motor de căutare. OpenAI documentează că ChatGPT Search poate rescrie promptul într-una sau mai multe interogări țintite, iar Google documentează pentru AI Overviews și AI Mode tehnica de query fan-out, prin care modelul poate genera mai multe căutări conexe. Asta nu înseamnă însă că există o nouă regulă de tip „optimizează pentru query-ul intern". Din perspectiva publisherului, strategia robustă rămâne să acoperi intenția utilizatorului, să folosești terminologia clară și canonică atunci când este relevantă și să construiești conținut suficient de explicit pentru a putea fi regăsit prin mai multe formulări.</strong><sup><a href="#fn-1">1</a></sup><sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup></p>

      <p>Acest articol separă trei lucruri care sunt ușor de confundat:</p>

      <ol>
        <li><strong>cum este formulată cererea de utilizator;</strong></li>
        <li><strong>cum poate fi rescrisă sau descompusă pentru retrieval;</strong></li>
        <li><strong>cum este tokenizat textul de model.</strong></li>
      </ol>

      <p>Sunt mecanisme diferite și nu trebuie folosite unul ca dovadă pentru altul.</p>

      <h2>Cuvânt-cheie, frază și sens</h2>

      <p>Un index inversat este un mecanism fundamental al regăsirii lexicale: pentru termeni sau unități indexate, sistemul poate identifica documentele în care apar.</p>

      <p>Dar motoarele moderne nu sunt doar motoare de exact matching.</p>

      <p>Google documentează sisteme precum <strong>BERT</strong>, <strong>neural matching</strong> și <strong>RankBrain</strong>, folosite pentru înțelegerea relației dintre cuvinte, concepte și intenția interogării. RankBrain permite Google să returneze conținut relevant chiar și atunci când pagina nu conține toate cuvintele exacte introduse în căutare.<sup><a href="#fn-4">4</a></sup></p>

      <p>Așadar, opoziția corectă nu este:</p>

      <blockquote><p>„SEO clasic = cuvinte exacte; AI = sens."</p></blockquote>

      <p>Mai corect este:</p>

      <blockquote><p><strong>sistemele moderne combină mai multe forme de reprezentare și regăsire, iar exact matching-ul rămâne util în anumite contexte fără să fie singurul mecanism.</strong></p></blockquote>

      <p>Această distincție dintre ce rămâne valabil din SEO clasic și ce se schimbă complet este tratată separat, în detaliu, în <a href="/lab/cercetare/seo-vs-geo">SEO vs GEO</a>.</p>

      <h3>Când contează termenul exact</h3>

      <p>Termenii exacți sunt deosebit de utili pentru:</p>

      <ul>
        <li>nume proprii;</li>
        <li>modele de produs;</li>
        <li>coduri;</li>
        <li>acronime;</li>
        <li>denumiri tehnice;</li>
        <li>entități a căror formulare trebuie dezambiguizată.</li>
      </ul>

      <p>Dar „termen exact util" nu înseamnă „termen exact obligatoriu pentru ranking".</p>

      <h2>Ce face ChatGPT Search cu interogarea</h2>

      <p>OpenAI publică astăzi o informație care înainte trebuia doar presupusă.</p>

      <p>În documentația ChatGPT Search, OpenAI spune că atunci când Search lucrează cu furnizori de căutare, sistemul <strong>rescrie de regulă promptul într-una sau mai multe interogări țintite</strong>. OpenAI oferă inclusiv exemple în care o întrebare conversațională mai lungă este transformată într-un query mai focalizat, după care pot urma alte interogări mai specifice.<sup><a href="#fn-1">1</a></sup></p>

      <p>Asta confirmă <strong>query rewriting</strong>.</p>

      <p>Nu confirmă însă că:</p>

      <ul>
        <li>fiecare prompt este rescris;</li>
        <li>query-ul intern este întotdeauna mai scurt;</li>
        <li>query-ul este întotdeauna mai tehnic;</li>
        <li>publisherul poate cunoaște din exterior formularea exactă;</li>
        <li>există o formulă stabilă după care ChatGPT rescrie orice prompt.</li>
      </ul>

      <h2>Ce face Google: query fan-out</h2>

      <p>Google documentează explicit pentru AI Overviews și AI Mode o tehnică numită <strong>query fan-out</strong>.</p>

      <p>În ghidul său pentru AI features, Google spune că sistemele pot emite mai multe căutări relaționate pe subiecte și surse de date diferite pentru a construi răspunsul.<sup><a href="#fn-2">2</a></sup></p>

      <p>În ghidul publicat în 2026 pentru optimizarea în Search cu AI generativ, Google definește query fan-out drept un set de interogări concurente și relaționate, generate de model pentru a obține informații suplimentare.<sup><a href="#fn-3">3</a></sup></p>

      <p>Google <strong>nu publică un număr universal de sub-interogări</strong>.</p>

      <p>Prin urmare, afirmații precum „AI Mode generează între 8 și 16 subqueries" nu trebuie tratate drept specificație Google dacă nu există o sursă oficială pentru interval.</p>

      <h2>Un model conceptual al traseului</h2>

      <p>Pentru a înțelege fenomenul, putem folosi un model conceptual, fără a pretinde că descrie codul intern al tuturor providerilor.</p>

      <h3>1. Cererea utilizatorului</h3>

      <p>Utilizatorul formulează o problemă în limbaj natural.</p>

      <h3>2. Interpretarea</h3>

      <p>Sistemul identifică intenția, constrângerile și contextul relevant.</p>

      <h3>3. Query rewriting / fan-out, dacă este necesar</h3>

      <p>În produsele care folosesc search, sistemul poate genera una sau mai multe interogări auxiliare.</p>

      <h3>4. Retrieval</h3>

      <p>Sunt recuperate documente sau fragmente candidate.</p>

      <h3>5. Selecție și ranking/reranking</h3>

      <p>Sistemul poate ordona și filtra candidații folosind mecanisme proprii. Semnalele de încredere, structură și autoritate care influențează această selecție sunt tratate separat în <a href="/lab/cercetare/cum-aleg-motoarele-ai">cum aleg motoarele AI ce citează</a>.</p>

      <h3>6. Generare</h3>

      <p>Modelul compune răspunsul pe baza contextului disponibil și, în suprafețele care oferă citări, poate afișa sursele relevante.</p>

      <p><strong>Important:</strong> pașii de mai sus sunt o schemă explicativă. Implementările exacte ale ChatGPT Search, Google AI Mode, Perplexity, Claude sau Gemini nu sunt publicate integral.</p>

      <h2>Promptul utilizatorului și query-ul de search nu au o lungime fixă</h2>

      <p>Două studii comerciale sunt utile pentru a arăta că există diferențe între tipurile de interacțiune, dar cifrele lor nu trebuie transformate în constante ale produsului.</p>

      <h3>Semrush — clickstream, 2025</h3>

      <p>Semrush a publicat în februarie 2025 o analiză bazată pe peste <strong>80 de milioane de înregistrări clickstream</strong> din a doua jumătate a lui 2024.<sup><a href="#fn-8">8</a></sup></p>

      <p>În acel dataset:</p>

      <ul>
        <li>prompturile fără SearchGPT aveau în medie <strong>23 de cuvinte</strong>;</li>
        <li>interacțiunile cu SearchGPT aveau în medie <strong>4,2 cuvinte</strong>.</li>
      </ul>

      <p>Aceste valori descriu comportamentul utilizatorilor observat de Semrush în perioada respectivă, nu query-urile interne generate de OpenAI.</p>

      <p>Mai mult, un studiu Semrush mai nou, publicat în aprilie 2026, arată că lungimea prompturilor s-a schimbat substanțial în timp: pentru ianuarie-februarie 2026, prompturile care declanșau search aveau în medie <strong>8,7 cuvinte</strong>, iar cele fără search <strong>13,5 cuvinte</strong> în datasetul lor din SUA.<sup><a href="#fn-9">9</a></sup></p>

      <p>Asta arată de ce nu trebuie construită o regulă GEO pe o medie dintr-un singur moment.</p>

      <h3>Nectiv — queries observate, 2025</h3>

      <p>Nectiv a publicat un studiu comercial pe peste <strong>8.500 de prompturi</strong> din nouă industrii.<sup><a href="#fn-10">10</a></sup></p>

      <p>În datasetul lor:</p>

      <ul>
        <li>31% dintre prompturi au declanșat cel puțin o căutare;</li>
        <li>media a fost 2,17 căutări pentru prompturile care au declanșat search;</li>
        <li>query-urile observate aveau în medie <strong>5,48 cuvinte</strong>;</li>
        <li>77% aveau cel puțin cinci cuvinte.</li>
      </ul>

      <p>Aceste cifre sunt utile ca observație industrială, nu ca documentație oficială a arhitecturii ChatGPT.</p>

      <h2>Concluzia pentru conținut: nu optimiza pentru un query intern pe care nu îl vezi</h2>

      <p>Versiunea inițială a acestui articol spunea:</p>

      <blockquote><p>„optimizezi pentru interogarea generată, nu pentru cea tastată."</p></blockquote>

      <p>Formularea este prea puternică.</p>

      <p>Google avertizează explicit împotriva producerii de pagini separate pentru fiecare posibilă variație de search sau fan-out query doar pentru a manipula rankingul sau răspunsurile generative.<sup><a href="#fn-3">3</a></sup></p>

      <p>O recomandare mai robustă este:</p>

      <blockquote><p><strong>nu optimiza exclusiv pentru formularea literală a promptului. Acoperă intenția, termenii canonici ai subiectului, entitățile relevante și formulările naturale prin care aceeași problemă poate fi descrisă.</strong></p></blockquote>

      <p>Astfel, documentul are șanse să rămână relevant indiferent dacă retrieval-ul pornește de la query-ul original, de la o rescriere sau de la mai multe fan-out queries.</p>

      <h2>Ce este un token</h2>

      <p>Un token nu este sinonim cu „un cuvânt" și nici cu „un caracter".</p>

      <p>OpenAI descrie tokenii drept secvențe comune de caractere, iar pentru numărare programatică publică biblioteca open-source <code>tiktoken</code>.<sup><a href="#fn-5">5</a></sup><sup><a href="#fn-6">6</a></sup></p>

      <p><code>tiktoken</code> folosește Byte Pair Encoding (BPE). Pentru encodingul <code>o200k_base</code>, textul este pre-segmentat prin reguli Unicode-aware, apoi secvențele de bytes sunt combinate conform vocabularului și rangurilor BPE.<sup><a href="#fn-6">6</a></sup></p>

      <p>Aceasta are două consecințe:</p>

      <ol>
        <li>aceeași lungime în caractere nu garantează același număr de tokeni;</li>
        <li>același text poate avea un număr diferit de tokeni în encodings diferite.</li>
      </ol>

      <p>În repository-ul oficial <code>tiktoken</code>, OpenAI mapează în prezent <code>gpt-5</code>, <code>gpt-4.1</code>, <code>gpt-4o</code>, <code>o1</code>, <code>o3</code> și alte familii moderne la <code>o200k_base</code>, în timp ce modele GPT-4/GPT-3.5 mai vechi folosesc <code>cl100k_base</code>.<sup><a href="#fn-7">7</a></sup></p>

      <h2>Experimentul de tokenizare: metoda corectă</h2>

      <p>Versiunea inițială a articolului folosea octeții UTF-8 drept proxy pentru costul în tokeni și concluziona că româna ar „costa" aproximativ 19% mai mult decât engleza.</p>

      <p>Acea concluzie este retrasă.</p>

      <p><strong>Numărul de bytes nu este numărul de tokeni și nu reprezintă o limită inferioară a numărului de tokeni.</strong> BPE poate combina mai mulți bytes într-un singur token. OpenAI oferă tocmai <code>tiktoken</code> pentru numărarea efectivă a tokenilor.<sup><a href="#fn-6">6</a></sup><sup><a href="#fn-5">5</a></sup></p>

      <h3>Corpusul de test</h3>

      <p>Pentru ca experimentul să fie reproductibil, trebuie publicate textele efective, nu doar rezultatul agregat.</p>

      <p>Setul propus pentru această revizie este:</p>

      <p><strong>Perechea 1 — local search</strong></p>

      <p>Română:</p>

      <blockquote><p>Caut un service auto în Sibiu care poate verifica astăzi martorul de motor aprins la un Volkswagen Golf.</p></blockquote>

      <p>Engleză:</p>

      <blockquote><p>I am looking for a car service in Sibiu that can check the illuminated engine warning light on a Volkswagen Golf today.</p></blockquote>

      <p><strong>Perechea 2 — business</strong></p>

      <p>Română:</p>

      <blockquote><p>Compania noastră produce componente industriale în România și caută clienți noi în Germania prin canale digitale.</p></blockquote>

      <p>Engleză:</p>

      <blockquote><p>Our company manufactures industrial components in Romania and is looking for new customers in Germany through digital channels.</p></blockquote>

      <p><strong>Perechea 3 — AI Visibility</strong></p>

      <p>Română:</p>

      <blockquote><p>Vreau să aflu de ce site-ul companiei apare în Google, dar este citat rar în răspunsurile sistemelor de inteligență artificială.</p></blockquote>

      <p>Engleză:</p>

      <blockquote><p>I want to understand why the company website appears in Google but is rarely cited in artificial intelligence system responses.</p></blockquote>

      <p>Traducerile sunt <strong>semantic echivalente</strong>, nu identice ca structură. Asta este o limită inevitabilă a comparației între limbi.</p>

      <h3>Scriptul reproductibil</h3>

      <pre><code>import tiktoken

samples = {
    "ro_1": "Caut un service auto în Sibiu care poate verifica astăzi martorul de motor aprins la un Volkswagen Golf.",
    "en_1": "I am looking for a car service in Sibiu that can check the illuminated engine warning light on a Volkswagen Golf today.",
    "ro_2": "Compania noastră produce componente industriale în România și caută clienți noi în Germania prin canale digitale.",
    "en_2": "Our company manufactures industrial components in Romania and is looking for new customers in Germany through digital channels.",
    "ro_3": "Vreau să aflu de ce site-ul companiei apare în Google, dar este citat rar în răspunsurile sistemelor de inteligență artificială.",
    "en_3": "I want to understand why the company website appears in Google but is rarely cited in artificial intelligence system responses."
}

for encoding_name in ("o200k_base", "cl100k_base"):
    enc = tiktoken.get_encoding(encoding_name)
    print(f"\\n{encoding_name}")
    for name, text in samples.items():
        print(
            name,
            "tokens=", len(enc.encode(text)),
            "chars=", len(text),
            "bytes=", len(text.encode("utf-8"))
        )</code></pre>

      <h3>De ce nu public aici o cifră neverificată</h3>

      <p>În mediul în care a fost făcută această revizie nu a fost disponibil local pachetul <code>tiktoken</code> împreună cu assetul <code>o200k_base</code>, iar accesul de rețea necesar descărcării lui nu a fost disponibil.</p>

      <p>Prin urmare, <strong>nu introduc în articol rezultate de tokenizare pe care nu le-am executat și verificat efectiv</strong>.</p>

      <p>Aceasta este o schimbare deliberată față de versiunea precedentă: mai bine un experiment complet reproductibil fără o cifră inventată decât un procent precis obținut dintr-un proxy greșit.</p>

      <p>Pentru publicarea unei versiuni cu rezultate numerice, scriptul de mai sus trebuie rulat cu versiunea <code>tiktoken</code> notată în metodologie, iar outputul brut trebuie păstrat alături de articol.</p>

      <h2>Ce putem spune deja despre tokenizarea multilingvă</h2>

      <p>Fără să inventăm o cifră pentru română în <code>o200k_base</code>, există câteva concluzii mai generale bine susținute.</p>

      <p>OpenAI spune că encodings diferite pot tokeniza diferit același text și oferă <code>o200k_base</code> ca encoding modern pentru mai multe familii recente.<sup><a href="#fn-5">5</a></sup><sup><a href="#fn-7">7</a></sup></p>

      <p>Cercetarea multilingvă arată de asemenea că eficiența tokenizării poate varia semnificativ între limbi și între tokenizatoare. Aceasta nu este o proprietate simplă de tipul „non-engleza costă întotdeauna mai mult", ci depinde de tokenizer, vocabular, script și textul concret.</p>

      <p>Pentru română există cercetări care arată că tokenizatoarele specializate pot reduce fragmentarea față de unele modele multilingve, dar aceste rezultate nu pot fi transferate automat către <code>o200k_base</code>.<sup><a href="#fn-11">11</a></sup></p>

      <p>Concluzia corectă este:</p>

      <blockquote><p><strong>dacă vrei să afli dacă româna folosește mai mulți tokeni decât engleza într-un anumit model, măsoară texte paralele cu tokenizerul exact al acelui model.</strong></p></blockquote>

      <h2>Octeții UTF-8 și diacriticele</h2>

      <p>Măsurarea octeților poate fi păstrată doar ca observație despre encodingul UTF-8.</p>

      <p>Caractere ASCII precum <code>a</code> folosesc un byte în UTF-8, în timp ce multe caractere românești precum <code>ă</code>, <code>â</code>, <code>î</code>, <code>ș</code>, <code>ț</code> sunt reprezentate prin mai mulți bytes.</p>

      <p>Asta poate face versiunea română a unui text mai mare în bytes.</p>

      <p>Dar:</p>

      <blockquote><p><strong>mai mulți bytes nu implică automat mai mulți tokeni în aceeași proporție.</strong></p></blockquote>

      <p>Un token BPE poate reprezenta mai mulți bytes.</p>

      <p>Prin urmare, formulările „diacriticele adaugă X% cost" sau „româna are X% cost suplimentar" nu trebuie folosite fără măsurătoare directă de tokens și, dacă discutăm bani, fără pricingul efectiv al modelului.</p>

      <h2>Ș versus ş: problema reală este consistența Unicode</h2>

      <p>În româna modernă, forma corectă este:</p>

      <ul>
        <li><code>ș</code> — U+0219, LATIN SMALL LETTER S WITH COMMA BELOW;</li>
        <li><code>ț</code> — U+021B, LATIN SMALL LETTER T WITH COMMA BELOW.</li>
      </ul>

      <p>Formele legacy sunt:</p>

      <ul>
        <li><code>ş</code> — U+015F, LATIN SMALL LETTER S WITH CEDILLA;</li>
        <li><code>ţ</code> — U+0163, LATIN SMALL LETTER T WITH CEDILLA.</li>
      </ul>

      <p>Unicode explică explicit că variantele cu virgulă dedesubt sunt reprezentările preferate pentru limba română și că formele cu sedilă apar în multe date legacy.<sup><a href="#fn-12">12</a></sup></p>

      <p>La nivel de codepoint și bytes, ele sunt diferite.</p>

      <p>Dar de aici <strong>nu rezultă</strong> că Google sau un sistem AI creează două „jumătăți de semnal" sau două indexuri SEO independente.</p>

      <p>Mai mult, Unicode recomandă ca implementările care procesează date românești să trateze variantele legacy și moderne ca echivalente în contextul procesării limbii române.<sup><a href="#fn-12">12</a></sup></p>

      <h3>Recomandarea practică</h3>

      <p>Normalizează conținutul către:</p>

      <ul>
        <li><code>ș</code>;</li>
        <li><code>ț</code>.</li>
      </ul>

      <p>Motivul este:</p>

      <ul>
        <li>consistența datelor;</li>
        <li>search intern;</li>
        <li>deduplicare;</li>
        <li>procesare downstream;</li>
        <li>copiere/lipire;</li>
        <li>calitatea editorială.</li>
      </ul>

      <p>Nu pentru că există o penalizare Google documentată pentru sedilă.</p>

      <h2>Flexiunea românească</h2>

      <p>Româna are mai multe forme de suprafață pentru același lexem:</p>

      <ul>
        <li>consultant;</li>
        <li>consultantul;</li>
        <li>consultantului;</li>
        <li>consultanți;</li>
        <li>consultanții;</li>
        <li>consultanților.</li>
      </ul>

      <p>Aceasta este o proprietate lingvistică relevantă pentru search, dar nu trebuie transformată într-o regulă de keyword stuffing.</p>

      <p>Google spune că RankBrain și neural matching pot relaționa cuvintele cu concepte și pot returna pagini relevante chiar fără toate cuvintele exacte.<sup><a href="#fn-4">4</a></sup></p>

      <p>De aceea:</p>

      <blockquote><p><strong>nu este necesar să introduci mecanic toate formele unui substantiv într-o pagină.</strong></p></blockquote>

      <p>Mai util este să scrii natural și complet. Într-un text bun, variația morfologică apare firesc atunci când contextul o cere.</p>

      <p>Nu există în acest articol o bază pentru afirmația că lematizarea Google este „mai slabă în română decât în engleză", așa că această afirmație a fost eliminată.</p>

      <h2>Exemple practice</h2>

      <h3>Service auto</h3>

      <p>Query scurt:</p>

      <blockquote><p>service auto Sibiu</p></blockquote>

      <p>Cerere conversațională:</p>

      <blockquote><p>Mi s-a aprins martorul de motor la un Golf și sunt în Sibiu. Unde îl pot verifica astăzi?</p></blockquote>

      <p>Un sistem de AI Search <strong>poate</strong> rescrie sau descompune această cerere în una sau mai multe căutări despre:</p>

      <ul>
        <li>service auto;</li>
        <li>locație;</li>
        <li>model;</li>
        <li>simptom;</li>
        <li>disponibilitate.</li>
      </ul>

      <p>Nu știm însă din exterior exact ce query va genera pentru fiecare execuție.</p>

      <h3>Contabilitate</h3>

      <p>Query scurt:</p>

      <blockquote><p>contabil SRL Sibiu</p></blockquote>

      <p>Cerere conversațională:</p>

      <blockquote><p>Am un SRL cu angajați și vreau să înțeleg ce obligații fiscale se schimbă anul acesta și când am nevoie de ajutorul unui contabil.</p></blockquote>

      <h3>Consultanță B2B</h3>

      <p>Query scurt:</p>

      <blockquote><p>consultant marketing industrial</p></blockquote>

      <p>Cerere conversațională:</p>

      <blockquote><p>Avem o firmă de producție din România, vindem în Germania și vrem să înțelegem de ce clienții noi nu ne găsesc online.</p></blockquote>

      <p>Diferența utilă nu este „keyword versus sentence" ca două lumi separate.</p>

      <p>Este:</p>

      <blockquote><p><strong>categorie versus situație contextualizată.</strong></p></blockquote>

      <p>Un document bun poate acoperi ambele fără să creeze câte o pagină pentru fiecare posibil fan-out query.</p>

      <h2>Ce faci concret</h2>

      <h3>Folosește terminologia canonică atunci când este relevantă</h3>

      <p>Dacă explici un concept cu un nume consacrat, folosește numele explicit.</p>

      <p>Nu pentru că exact match-ul este obligatoriu, ci pentru claritate și dezambiguizare.</p>

      <h3>Explică situațiile în care conceptul devine relevant</h3>

      <p>Un articol despre „canonical URL" poate conține și întrebarea reală:</p>

      <blockquote><p>„De ce Google indexează homepage-ul în locul paginii mele interioare?"</p></blockquote>

      <p>Asta leagă termenul tehnic de problema utilizatorului.</p>

      <h3>Nu construi pagini pentru fiecare query imaginabil</h3>

      <p>Google recomandă people-first content și avertizează împotriva producerii de volume de pagini pentru variații de query sau fan-out doar pentru manipularea rankingului.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Folosește heading-uri descriptive</h3>

      <p>Un heading bun spune ce problemă rezolvă secțiunea.</p>

      <p>De exemplu:</p>

      <blockquote><p>„Cum verific dacă pagina mea are canonical greșit?"</p></blockquote>

      <p>este mai informativ decât:</p>

      <blockquote><p>„Canonical".</p></blockquote>

      <p>Asta îmbunătățește structura pentru utilizator și face secțiunea mai ușor de identificat.</p>

      <p>Nu garantează citarea AI.</p>

      <h3>Normalizează Unicode</h3>

      <p>Folosește formele românești moderne <code>ș</code> și <code>ț</code> în conținut și în datele pe care le controlezi.</p>

      <h3>Măsoară tokenii cu tokenizerul exact</h3>

      <p>Nu folosi:</p>

      <ul>
        <li>bytes;</li>
        <li>caractere;</li>
        <li>cuvinte;</li>
      </ul>

      <p>ca substitut pentru token count atunci când costul sau context window-ul depind de tokeni. Termenii folosiți în acest articol (query rewriting, query fan-out, tokenizare, entitate) sunt explicați și în <a href="/lab/cercetare/glosar-geo-aeo">glosarul GEO/AEO</a>.</p>

      <h2>Întrebări frecvente</h2>

      <h3>ChatGPT Search caută exact promptul pe care îl scriu?</h3>

      <p>Nu neapărat. OpenAI spune că ChatGPT Search poate rescrie promptul într-una sau mai multe interogări țintite atunci când lucrează cu furnizori de search.<sup><a href="#fn-1">1</a></sup></p>

      <h3>Google AI Mode folosește mai multe căutări pentru aceeași întrebare?</h3>

      <p>Poate. Google documentează query fan-out pentru AI Mode și AI Overviews: modelul poate genera multiple interogări relaționate pentru a recupera informații suplimentare.<sup><a href="#fn-2">2</a></sup><sup><a href="#fn-3">3</a></sup></p>

      <h3>Trebuie să optimizez pagina pentru query-urile generate intern?</h3>

      <p>Nu ca listă de keywords sau pagini separate. Google recomandă conținut util și people-first și avertizează împotriva producerii de pagini pentru fiecare variație posibilă de query fan-out.<sup><a href="#fn-3">3</a></sup></p>

      <h3>Româna folosește mai mulți tokeni decât engleza?</h3>

      <p>Nu există o cifră universală. Rezultatul depinde de tokenizer, model, text și traducere. Pentru OpenAI, comparația trebuie măsurată cu encodingul relevant, de exemplu <code>o200k_base</code> pentru familiile mapate oficial la el.<sup><a href="#fn-7">7</a></sup></p>

      <h3>Mai mulți bytes în UTF-8 înseamnă mai mulți tokeni?</h3>

      <p>Nu. Tokenizarea BPE combină secvențe de bytes în tokeni. Byte count și token count sunt măsuri diferite.<sup><a href="#fn-6">6</a></sup></p>

      <h3>Este greșit să folosesc ş și ţ în loc de ș și ț?</h3>

      <p>Pentru româna modernă, Unicode preferă <code>ș</code> și <code>ț</code>, cu virgulă dedesubt. Formele cu sedilă apar în date legacy și sunt codepoint-uri distincte, dar Unicode recomandă echivalarea lor în procesarea datelor românești.<sup><a href="#fn-12">12</a></sup></p>

      <h2>Surse și metodologie</h2>

      <h3>Surse primare</h3>

      <p>Pentru mecanismele produselor au fost folosite cu prioritate:</p>

      <ul>
        <li>OpenAI Help Center pentru ChatGPT Search;</li>
        <li>repository-ul oficial OpenAI <code>tiktoken</code>;</li>
        <li>OpenAI Tokenizer;</li>
        <li>Google Search Central pentru query fan-out și ranking systems;</li>
        <li>Unicode Standard pentru caracterele românești.</li>
      </ul>

      <h3>Studii comerciale</h3>

      <p>Semrush și Nectiv sunt folosite numai pentru observații asupra propriilor dataseturi.</p>

      <p>Cifrele lor nu sunt prezentate drept specificații OpenAI.</p>

      <h3>Experimentul de tokenizare</h3>

      <p>Versiunea veche bazată pe UTF-8 bytes este retrasă ca măsurătoare de cost în tokeni.</p>

      <p>Noua metodă:</p>

      <ul>
        <li>publică textele efective;</li>
        <li>folosește <code>o200k_base</code> și <code>cl100k_base</code>;</li>
        <li>păstrează outputul brut;</li>
        <li>compară perechi semantic echivalente;</li>
        <li>raportează separat caractere, bytes, words și tokens;</li>
        <li>nu extrapolează rezultatul din trei perechi la întreaga limbă română.</li>
      </ul>

      <p><strong>În această revizie nu sunt publicate token counts neexecutate.</strong> Mediul de revizie nu a avut disponibil local assetul <code>o200k_base</code> necesar pentru rularea <code>tiktoken</code>, iar accesul necesar descărcării lui a fost indisponibil. Scriptul de reproducere este inclus tocmai pentru ca rezultatul numeric să poată fi adăugat numai după o rulare reală, nu estimat.</p>

      <h2>Surse</h2>

      <ol class="avl-footnotes">
        <li id="fn-1">OpenAI Help Center — „ChatGPT Search", verificat la 19 august 2026. OpenAI documentează că, atunci când folosește furnizori de search, ChatGPT Search rescrie de regulă promptul în una sau mai multe interogări țintite și poate trimite queries suplimentare: <a href="https://help.openai.com/en/articles/9237897-chatgpt-search" target="_blank" rel="noopener noreferrer">help.openai.com/…/chatgpt-search</a></li>
        <li id="fn-2">Google Search Central — „AI Features and Your Website", verificat la 19 august 2026. Google documentează folosirea query fan-out în AI Overviews și AI Mode — interogări multiple, relaționate, pe subiecte și surse de date diferite: <a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">developers.google.com/…/ai-features</a></li>
        <li id="fn-3">Google Search Central — „Optimizing your website for generative AI features on Google Search", 2026, verificat la 19 august 2026. Definește query fan-out ca set de interogări concurente și relaționate, generate de model; avertizează că producerea de pagini pentru fiecare variație posibilă de query, doar pentru manipularea rankingului sau a răspunsurilor generative, încalcă politica anti-abuz de conținut la scară a Google: <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">developers.google.com/…/ai-optimization-guide</a></li>
        <li id="fn-4">Google Search Central — „A Guide to Google Search Ranking Systems", verificat la 19 august 2026. Documentează BERT, neural matching și RankBrain; Google spune explicit că RankBrain ajută la găsirea conținutului relevant chiar când nu conține toate cuvintele exacte ale query-ului: <a href="https://developers.google.com/search/docs/appearance/ranking-systems-guide" target="_blank" rel="noopener noreferrer">developers.google.com/…/ranking-systems-guide</a></li>
        <li id="fn-5">OpenAI Platform — „Tokenizer", verificat la 19 august 2026. Descrie tokenii drept secvențe comune de caractere și trimite spre <code>tiktoken</code> pentru numărare programatică: <a href="https://platform.openai.com/tokenizer" target="_blank" rel="noopener noreferrer">platform.openai.com/tokenizer</a></li>
        <li id="fn-6">OpenAI — „tiktoken", repository oficial GitHub, verificat la 19 august 2026. Biblioteca open-source BPE folosită pentru tokenizarea modelelor OpenAI; pentru <code>o200k_base</code>, pattern-ul de pre-tokenizare folosește clase Unicode (<code>\\p{L}</code>, <code>\\p{N}</code>, <code>\\p{M}</code>) înainte de aplicarea merge-urilor BPE: <a href="https://github.com/openai/tiktoken" target="_blank" rel="noopener noreferrer">github.com/openai/tiktoken</a></li>
        <li id="fn-7">OpenAI <code>tiktoken</code> — „model.py", verificat la 19 august 2026. Mappingul curent asociază familii precum <code>gpt-5</code>, <code>gpt-4.1</code>, <code>gpt-4o</code>, <code>o1</code> și <code>o3</code> cu <code>o200k_base</code>, iar familiile <code>gpt-4</code>/<code>gpt-3.5-turbo</code> mai vechi cu <code>cl100k_base</code>: <a href="https://github.com/openai/tiktoken/blob/main/tiktoken/model.py" target="_blank" rel="noopener noreferrer">github.com/openai/tiktoken/…/model.py</a></li>
        <li id="fn-8">Semrush — „New Semrush Study Reveals ChatGPT Search Trends: Insights from 80 Million Clickstream Records", 3 februarie 2025. Studiu comercial pe peste 80 de milioane de linii clickstream din a doua jumătate a lui 2024; 23 cuvinte medie fără SearchGPT și 4,2 cuvinte cu SearchGPT în datasetul analizat: <a href="https://www.semrush.com/news/379285-new-semrush-study-reveals-chatgpt-search-trends-insights-from-80-million-clickstream-records/" target="_blank" rel="noopener noreferrer">semrush.com/news/…/80-million-clickstream-records</a></li>
        <li id="fn-9">Semrush — „ChatGPT traffic analysis: Insights from 17 months of clickstream data", 7 aprilie 2026. Studiu comercial pe peste un miliard de linii de clickstream din SUA, octombrie 2024–februarie 2026. Pentru ianuarie-februarie 2026 raportează 8,7 cuvinte pentru prompts care au declanșat search și 13,5 pentru cele fără search: <a href="https://www.semrush.com/blog/chatgpt-search-insights/" target="_blank" rel="noopener noreferrer">semrush.com/blog/chatgpt-search-insights</a></li>
        <li id="fn-10">Nectiv / date relatate de Search Engine Land — „ChatGPT performs a search in 31% of prompts, new data reveals", octombrie 2025. Studiu comercial pe 8.500+ prompts din nouă industrii; 31% dintre prompturi au declanșat cel puțin o căutare, 2,17 căutări medie pentru cele care au declanșat search, 5,48 cuvinte/query și 77% cu minimum cinci cuvinte în datasetul analizat: <a href="https://searchengineland.com/chatgpt-search-prompts-data-463407" target="_blank" rel="noopener noreferrer">searchengineland.com/chatgpt-search-prompts-data-463407</a></li>
        <li id="fn-11">Dumitrescu et al. / literatura Romanian BERT, discutată și în „A Lite Romanian BERT: ALR-BERT", Computers 2022. Raportează diferențe de fertility între tokenizatoare românești și multilingve pe corpusurile evaluate; nu este o măsurătoare <code>o200k_base</code>: <a href="https://www.mdpi.com/2073-431X/11/4/57" target="_blank" rel="noopener noreferrer">mdpi.com/2073-431X/11/4/57</a></li>
        <li id="fn-12">Unicode Standard, Chapter 7 — „European Alphabetic Scripts", verificat la 19 august 2026. Documentează U+0219/U+021B pentru română, formele legacy U+015F/U+0163 și recomandarea de a le trata echivalent la procesarea datelor românești: <a href="https://www.unicode.org/versions/Unicode17.0.0/core-spec/chapter-7/" target="_blank" rel="noopener noreferrer">unicode.org/…/chapter-7</a></li>
      </ol>

      <h3>Notă de volatilitate</h3>

      <p>Query rewriting, query fan-out, mappingul modelelor către encodings și comportamentul produselor AI se pot modifica. Afirmațiile despre OpenAI și Google descriu <strong>starea documentată la 19 august 2026</strong> — dată la care sursele de mai sus au fost reverificate live, fără schimbări față de starea consemnată inițial la 11 august 2026.</p>

      <p><em>Articol publicat de AI Visibility Lab, proiectul de cercetare în vizibilitate AI al lui Alex Matescu. Ultima verificare factuală și a surselor: 19 august 2026.</em></p>
`;
