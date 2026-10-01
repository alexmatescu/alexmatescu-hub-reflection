# AI Visibility Lab — Publication input for Claude Code

> **Status:** draft for repository inspection, factual validation, and publication preparation.  
> **Target article:** `Cum verific tehnic un site pentru AI Visibility? Protocolul minim folosit în AI Visibility Lab`  
> **Language:** Romanian (`ro-RO`)  
> **Destination:** existing AI Visibility Lab articles section of `delamatescu.ro`, **not** the personal blog.  
> **Publication date:** assign the actual date when published; do not backdate.  
> **Document type:** editorial article explaining the AVL Core technical checking protocol; not the executable protocol itself.

## Instructions to Claude Code — do not publish until checks pass

1. Read the repository's current instructions, publication agent, content schemas, and the **most recently published AI Visibility Lab articles**. Reuse their actual metadata fields, values, filename conventions, frontmatter order, link patterns, canonical logic, image handling, and publication workflow. Do not invent a parallel schema. If required metadata cannot be determined, flag the gap rather than guessing.
2. Check the existing AVL methodological documents and terminology. Preserve the methodological sequence **Evidence Capture Process → Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation**. Preserve **Tabula Rasa T0** as baseline and **F1…Fn** as follow-up measurements. Do not silently change the published methodology or the numbering of technical checks.
3. Verify potentially time-sensitive or normative claims against current **primary documentation** (Google Search Central, Bing Webmaster, OpenAI crawler documentation, Anthropic crawler documentation, Perplexity crawler documentation, IETF RFC 9309/9110, Sitemaps.org, and Schema.org). Cite only sources actually checked and add source links using the existing publication convention. Do not insert fabricated quotations, unsupported causal claims, or unverifiable claims that the protocol guarantees AI visibility.
4. Technical precision review: `curl -A` **impersonates a declared User-Agent** and cannot verify actual vendor-crawler access. `robots.txt` is a crawling-control mechanism, not proof of indexing. Declared canonical is not necessarily selected canonical. JSON-LD presence is not semantic validity. `curl`'s raw response is not a JavaScript-rendered DOM. Clarify that the example `OAI-SearchBot` rule is **illustrative**, and a `Disallow: /` determination must come from parsing the applicable robots group and URL; avoid suggesting that merely spotting those two lines proves the effective policy in all cases. Different SHA-256 values imply byte-level differences, not necessarily a meaningful content change.
5. The article is **explanatory** and distinct from the executable shell script and from any formal versioned protocol. If the repository already has a public technical checks file, link to it using its real path; do not invent a URL. If it is unpublished, omit the link and report this in the pre-publication review.
6. Preserve the author's first-person voice, Q&A headings, immediate answers under headings, and the **seven-idea summary**. Improve only demonstrable grammar/clarity issues needed for publication. Keep the conceptual caveats and substantive structure. Add a table of contents or FAQ structured data **only if** supported by existing repository conventions and visible content; never treat markup as a citation guarantee.
7. **Images:** The author will produce the AI Visibility Lab canvas images manually later. Do not create, invent, or publish placeholder graphics. Identify suitable insertion points in the publishing report, but do not render visible placeholder text in the article unless that is the repository's established draft convention. Existing approved site visuals may be used only under existing content rules.
8. Before editing, show a concise checklist of findings about repo conventions, source verification, metadata consistency, proposed slug, planned internal links, and any substantive corrections. Prepare publication through the existing article agent. Avoid committing or deploying unless the existing workflow and user's authorization permit it. Report changed files and any unresolved issues afterward.

<!-- ARTICLE_START: only the following article body is intended as public editorial content. -->

# Cum verific tehnic un site pentru AI Visibility? Protocolul minim folosit în AI Visibility Lab

Un site nu poate fi evaluat corect pentru vizibilitate în motoare de căutare și sisteme AI doar verificând dacă apare în ChatGPT, Claude, Perplexity, Google sau Bing. Înainte de citare, menționare sau recomandare există un strat tehnic care trebuie măsurat separat: dacă site-ul poate fi accesat, ce livrează serverul, ce reguli impune crawlerelor, cum își declară URL-urile și dacă diferite sisteme primesc același conținut.

În AI Visibility Lab folosesc un protocol tehnic minim și repetabil pentru a documenta această stare înainte de interpretarea rezultatelor.

Protocolul nu este un audit SEO complet și nici nu pretinde că poate prezice dacă un sistem AI va cita sau recomanda o sursă.

Rolul lui este mai precis: **să creeze o evidență tehnică reproductibilă asupra condițiilor în care un site poate fi descoperit, accesat și procesat de sisteme automate.**

## Care sunt cele 7 idei principale ale protocolului?

**Protocolul pornește de la șapte principii: măsurăm accesibilitatea înaintea vizibilității, separăm dovada de interpretare, verificăm regulile de crawling și indexare, documentăm identitatea URL-urilor, comparăm răspunsurile oferite crawlerelor, păstrăm artefactele brute și repetăm aceleași verificări între T0 și Fn.**

1. **Accesibilitatea tehnică precede vizibilitatea.** Mai întâi verificăm dacă resursa poate fi obținută și ce răspuns livrează serverul.
2. **Dovada trebuie separată de interpretare.** Un `200`, `403`, canonical sau `robots.txt` este o observație, nu o concluzie despre vizibilitatea AI.
3. **Crawlingul, indexarea, citarea și recomandarea sunt fenomene diferite.** Protocolul evită să le trateze ca sinonime.
4. **Identitatea tehnică a documentului trebuie să fie observabilă.** Redirecturile, canonical-ul, sitemap-ul și directivele robots oferă context despre ce resursă este expusă sistemelor automate.
5. **Răspunsurile pentru crawlere pot fi comparate.** Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot și PerplexityBot pot fi folosite în teste de User-Agent Response Parity.
6. **Evidența brută trebuie păstrată.** Headers, HTML, `robots.txt`, sitemap-uri, răspunsuri și hash-uri trebuie să poată fi verificate ulterior.
7. **Metoda trebuie repetată identic.** Valoarea principală apare când aceeași verificare este executată la baseline T0 și apoi la F1, F2, F3 sau Fn.

## De ce este necesară o verificare tehnică înainte să măsurăm AI Visibility?

**Verificarea tehnică este necesară pentru că o schimbare observată într-un răspuns AI nu poate fi interpretată riguros dacă nu știm în ce condiții tehnice era disponibilă sursa în momentul măsurării.**

Dacă un brand nu apare într-un răspuns ChatGPT, Claude sau Perplexity, există multe explicații posibile.

Sistemul poate să nu cunoască sursa. Sursa poate să nu fi fost descoperită. Crawlerul relevant poate fi blocat. Pagina poate declara `noindex`. URL-ul poate redirecționa. Canonical-ul poate indica o altă resursă. Serverul poate răspunde diferit crawlerelor. Sau toate aceste condiții tehnice pot fi corecte, iar sistemul să aleagă pur și simplu alte surse.

De aceea, AI Visibility trebuie tratată ca un lanț de condiții și observații, nu ca o singură variabilă.

Pentru GEO și AEO această distincție este esențială. Optimizarea pentru motoare generative sau motoare de răspuns nu începe cu întrebarea „Cum fac să mă citeze ChatGPT?”, ci cu una anterioară: **Ce informație despre această entitate este disponibilă sistemelor automate, în ce formă și prin ce mecanisme poate fi descoperită?**

## Cum separă AI Visibility Lab dovada de interpretare?

**AI Visibility Lab folosește un lanț explicit în care captura dovezii, artefactul brut, indexarea dovezii, observația, măsurarea și interpretarea sunt tratate ca etape diferite.**

```text
Evidence Capture Process
          ↓
Raw Evidence
          ↓
Indexed Evidence
          ↓
Observation
          ↓
Measurement
          ↓
Interpretation
```

*Evidence Capture Process* reprezintă modul controlat prin care obținem artefactul. De exemplu, putem trimite un request HTTP către `https://example.com/robots.txt`. Rezultatul salvat reprezintă *Raw Evidence*. După ce artefactul este identificat prin metadate precum URL, timestamp, tip de test și hash, acesta poate fi înregistrat ca *Indexed Evidence*.

Din el putem extrage o observație ilustrativă:

```text
User-agent: OAI-SearchBot
Disallow: /
```

După verificarea regulilor aplicabile, observația poate fi clasificată ca măsurare:

```text
OAI-SearchBot root access = DISALLOWED
```

Abia după aceea poate apărea interpretarea: această configurație poate limita crawlingul realizat de OAI-SearchBot.

Această ordine previne salturile logice. Un `403` nu înseamnă automat că site-ul este invizibil în AI. Un `200` nu înseamnă că pagina este indexată. Un sitemap nu demonstrează că URL-urile sale au fost procesate. Un canonical declarat nu demonstrează că un motor de căutare a selectat acel canonical. Iar prezența datelor structurate nu demonstrează că un sistem AI a înțeles sau folosit entitatea descrisă.

Pentru GEO/AEO, valoarea acestei separări este că permite diferențierea între:

```text
availability
discovery
crawlability
indexability
retrieval
citation
mention
recommendation
```

Acestea sunt fenomene legate între ele, dar nu identice.

## Ce verifică protocolul despre accesibilitatea și identitatea tehnică a unei pagini?

**Protocolul verifică dacă pagina răspunde, unde ajunge requestul după redirecturi, ce tip de conținut livrează serverul și dacă variantele HTTP/HTTPS și www/non-www converg spre aceeași identitate tehnică.**

Prima categorie de măsurători urmărește caracteristici elementare:

```text
HTTP status
effective URL
redirect count
Content-Type
response size
```

Un răspuns `200` arată că requestul respectiv a primit un răspuns HTTP de succes. `301` și `308` indică redirecționări permanente. `404` arată că resursa solicitată nu a fost găsită. `403` arată că accesul respectiv a fost refuzat.

Protocolul verifică și variante precum:

```text
http://example.com
https://example.com
http://www.example.com
https://www.example.com
```

Scopul este să observăm dacă ajung la aceeași destinație. Acest lucru este relevant pentru GEO/AEO deoarece sistemele automate trebuie să poată identifica o resursă relativ stabilă.

Dacă aceeași informație este expusă prin mai multe URL-uri contradictorii, redirecturi inconsistente sau canonical-uri diferite, apare o problemă de identitate tehnică înainte să apară problema de interpretare semantică.

## Cum verificăm dacă motoarele de căutare și sistemele AI pot descoperi și procesa conținutul?

**Protocolul verifică `robots.txt`, sitemap-ul, directivele de indexare, canonical-ul și datele structurate de bază pentru a documenta semnalele machine-readable expuse de site.**

În `robots.txt` sunt urmărite în primul rând:

```text
User-agent
Allow
Disallow
Sitemap
```

Pentru AI Visibility sunt relevante atât crawlerele tradiționale, cât și cele asociate sistemelor AI, printre care:

```text
Googlebot
bingbot
OAI-SearchBot
Claude-SearchBot
PerplexityBot
```

Trebuie însă păstrată o distincție importantă: **`robots.txt` controlează crawlingul, nu demonstrează indexarea.** Un crawler permis nu înseamnă automat că pagina a fost accesată. Un crawler care a accesat pagina nu înseamnă automat că pagina a fost indexată. Iar indexarea nu garantează citarea într-un răspuns generativ.

Protocolul verifică apoi dacă există un sitemap declarat și dacă acesta poate fi obținut. Sitemap-ul oferă un mecanism explicit prin care site-ul poate declara URL-uri relevante pentru descoperire.

Pentru fiecare document analizat sunt urmărite și semnale precum:

```text
<title>
rel="canonical"
meta robots
X-Robots-Tag
<html lang>
JSON-LD
```

Canonical-ul indică URL-ul preferat declarat de site. Meta robots și `X-Robots-Tag` pot transmite directive referitoare la indexare și afișare. Atributul `lang` declară limba documentului. JSON-LD poate furniza informație structurată despre entități și relațiile dintre ele.

Pentru GEO/AEO, aceste elemente contează deoarece contribuie la stratul machine-readable al site-ului. Dar protocolul păstrează aceeași limită: **semnalul declarat nu trebuie confundat cu modul în care un sistem extern îl interpretează sau îl folosește.**

## Ce înseamnă User-Agent Response Parity și de ce este relevantă pentru AI?

**User-Agent Response Parity verifică dacă același server livrează răspunsuri diferite atunci când requestul se identifică drept client generic, Googlebot, bingbot sau crawler de search asociat unui sistem AI.**

Același URL poate fi solicitat folosind diferite User-Agent-uri:

```text
default client
Googlebot
bingbot
OAI-SearchBot
Claude-SearchBot
PerplexityBot
```

Pentru fiecare răspuns pot fi comparate:

```text
HTTP status
effective URL
headers
body size
content
hash
```

Să presupunem că requestul generic primește `HTTP 200` și `153 KB`, iar requestul declarat drept OAI-SearchBot primește `HTTP 403` și `5 KB`. Aceasta este o diferență importantă, dar protocolul nu o interpretează automat ca dovadă că OpenAI nu poate accesa site-ul.

Testul demonstrează doar că serverul a răspuns diferit unui request care s-a identificat drept OAI-SearchBot. User-Agent-ul poate fi falsificat, iar furnizorii pot folosi și verificarea adreselor IP, infrastructură proprie, mecanisme anti-abuz sau alte condiții.

Din acest motiv, numele testului este intenționat precis: **User-Agent Response Parity**, nu *crawler accessibility proof*.

Pentru GEO/AEO, testul este util deoarece poate identifica bariere tehnice evidente care merită investigate înainte de a formula ipoteze despre vizibilitatea efectivă.

## De ce sunt păstrate HTML-ul brut, headerele și hash-urile?

**Artefactele brute sunt păstrate pentru ca orice observație sau concluzie ulterioară să poată fi urmărită înapoi până la dovada originală.**

Dacă un raport afirmă `OAI-SearchBot response = 403`, ar trebui să existe posibilitatea de a inspecta:

```text
request context
response headers
response body
timestamp
URL
hash
```

Fără aceste artefacte, rămâne doar afirmația celui care a făcut analiza. În AI Visibility Lab încerc să păstrez traseul:

```text
claim
↑
measurement
↑
observation
↑
indexed evidence
↑
raw evidence
```

Hash-ul SHA-256 ajută la acest proces. El funcționează ca o amprentă digitală a fișierului: dacă fișierul se modifică, hash-ul se modifică, cu probabilitate covârșitoare. Astfel putem verifica dacă artefactul analizat ulterior este identic cu cel păstrat în momentul rulării.

Hash-urile sunt utile și în User-Agent Response Parity. Dacă două body-uri au exact același SHA-256, ele pot fi considerate, în practică, identice la nivel de bytes. Dacă hash-urile diferă, știm că există o diferență, dar nu știm încă dacă este relevantă.

Ea poate proveni din timestamp-uri, identificatori dinamici, cookies, teste A/B, personalizare, token-uri generate, protecții anti-bot sau conținut diferit.

Prin urmare: **hash diferit = diferență detectată**, nu **hash diferit = problemă de AI Visibility**.

## Cum ajută repetarea protocolului la măsurarea GEO/AEO în timp?

**Repetarea acelorași verificări la T0 și Fn permite documentarea schimbărilor tehnice ale site-ului și analizarea lor în paralel cu schimbările observate în menționări, citări și recomandări AI.**

La baseline **T0** capturăm starea inițială. Ulterior, la **F1, F2, F3…Fn**, repetăm aceeași procedură.

Putem observa dacă între două momente s-a schimbat statusul HTTP sau un redirect, a apărut sau a dispărut o regulă în `robots.txt`, sitemap-ul ori canonical-ul s-au modificat, a apărut JSON-LD, directivele de indexare sunt diferite, un User-Agent primește alt răspuns sau conținutul brut al paginii s-a modificat.

Aceste observații pot fi puse alături de măsurătorile efective de AI Visibility:

```text
citation
mention
recommendation
entity resolution
source selection
answer composition
```

Aici apare valoarea reală a protocolului. Dacă la T0 o entitate nu este identificată, iar la F3 începe să fie menționată corect, putem analiza în paralel ce s-a schimbat în ecosistemul informațional.

Nu înseamnă că orice schimbare tehnică a cauzat schimbarea răspunsului AI. Dar avem mai multă informație pentru a formula și testa ipoteze.

În loc să spunem „am optimizat pagina și ChatGPT a început să mă citeze”, putem ajunge la o afirmație mai riguroasă: „între T0 și F3 au fost documentate aceste schimbări; în aceeași perioadă a apărut acest comportament în sistemele măsurate; datele permit sau nu permit atribuirea unei relații între ele”.

Această diferență este centrală pentru modul în care vreau să tratez GEO și AEO în AI Visibility Lab.

## Poate acest protocol demonstra că un site va fi citat, menționat sau recomandat de AI?

**Nu; protocolul tehnic poate documenta condițiile tehnice de acces, descoperire și machine-readability, dar nu poate demonstra singur indexarea, retrieval-ul, citarea, menționarea sau recomandarea într-un sistem AI.**

Aceasta este limita metodologică cea mai importantă. Protocolul nu poate demonstra singur:

```text
Google indexed the page
Bing indexed the page
ChatGPT knows the page
Claude knows the page
Perplexity indexed the page
an AI system understood the entity
the page will be retrieved
the page will be cited
the brand will be mentioned
the entity will be recommended
```

Aceste fenomene trebuie măsurate separat. Tocmai de aceea AI Visibility Lab nu tratează „optimizarea pentru AI” ca pe o colecție de trucuri tehnice.

Putem distinge analitic mai multe straturi:

```text
technical accessibility
↓
discovery
↓
machine readability
↓
entity understanding
↓
retrieval
↓
source selection
↓
citation / mention
↓
recommendation
```

Aceasta este o **schemă conceptuală de analiză**, nu o descriere verificată a unui pipeline comun tuturor sistemelor. Nu toate sistemele urmează aceleași etape, iar funcționarea lor internă nu este complet observabilă. Separarea straturilor ne ajută însă să evităm afirmațiile mai puternice decât dovezile de care dispunem.

Acesta este și motivul pentru care protocolul tehnic rămâne intenționat restrâns. Nu încerc să includ în el fiecare posibil audit de DNS, TLS, Core Web Vitals, JavaScript rendering, internal linking, Schema.org validation, server logs, WAF, ARIA, cache sau performanță. Acestea pot deveni relevante într-o investigație particulară, dar protocolul de bază trebuie să rămână suficient de mic încât să poată fi executat consecvent la fiecare măsurare.

## Care este rolul scriptului în metodologia AI Visibility Lab?

**Scriptul automatizează capturarea repetabilă a dovezilor tehnice, dar metodologia stabilește ce se măsoară, de ce se măsoară și ce concluzii pot fi trase.**

Scriptul poate executa requesturi, descărcări, capturi de headere, teste User-Agent, generare de hash-uri, denumirea fișierelor și stocarea evidențelor. Dar scriptul nu trebuie să decidă singur semnificația rezultatului.

De exemplu, `OAI-SearchBot → HTTP 403` poate fi capturat și clasificat automat. Întrebarea „Ce înseamnă acest rezultat pentru experimentul analizat?” aparține unui nivel ulterior.

```text
Methodology
      ↓
defines measurement
Automation
      ↓
executes measurement
Evidence
      ↓
records result
Analysis
      ↓
evaluates result
Interpretation
      ↓
connects result with research question
```

Automatizarea nu înlocuiește metodologia. O face mai repetabilă.

## Ce încearcă, în final, să măsoare acest protocol?

**Protocolul încearcă să stabilească ce putea fi observat tehnic despre un site la momentul măsurării, înainte ca rezultatele de AI Visibility să fie interpretate.**

Scopul nu este să strâng cât mai multe comenzi `curl` și nici să construiesc cel mai sofisticat scanner posibil.

Întrebarea fundamentală este: **În momentul în care am măsurat comportamentul unui sistem AI, care era starea tehnică observabilă a sursei?**

Dacă această stare este capturată la T0 și apoi din nou la F1, F2 sau Fn, putem construi un istoric. Iar atunci când apar schimbări în entity resolution, menționări, citări, selecția surselor sau recomandări, avem un strat suplimentar de dovezi prin care putem încerca să înțelegem ce s-a întâmplat.

Nu eliminăm incertitudinea. Dar o documentăm mai bine.

Pentru mine, aceasta este diferența dintre a aplica câteva „best practices GEO” și a încerca să construiesc o metodă de măsurare a AI Visibility.

<!-- ARTICLE_END -->
