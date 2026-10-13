/**
 * Conținutul paginii de serviciu /lab/audit-ai-visibility — sursă editorială:
 * src/pages/pagina-audit-ai-visibility.md (2026-10-13). Pagina comercială de
 * audit, realizată de Alex Matescu pe baza metodologiei publice AVL; nu este
 * un document normativ AVL-xxx și nu are identificator propriu (AVL-001).
 * H1-ul și lead-ul sunt randate de LabDetail din `labNav` (@/data/lab).
 */
export const auditAiVisibilityHtml = `
<p>Poate o persoană să îți descopere compania, serviciile sau expertiza atunci când întreabă ChatGPT, Google AI Mode, Google AI Overviews, Perplexity, Claude ori Microsoft Copilot? Dacă sistemul îți menționează brandul, îl descrie corect? Dacă îți citează site-ul, sursa afișată susține răspunsul? Iar atunci când utilizatorul cere o recomandare, intri în lista de opțiuni relevante?</p>

<p><strong>Un audit AI Visibility este evaluarea documentată a modului în care o entitate — companie, brand, persoană, produs sau serviciu — poate fi accesată, identificată și reprezentată în Search și AI Search.</strong> Combină verificarea tehnică a informațiilor publice cu un set declarat de interogări și analiza răspunsurilor observate. Scopul său este să identifice probleme verificabile și să prioritizeze ce merită investigat sau corectat, nu să promită o anumită citare sau recomandare.</p>

<p>Auditul este realizat de <a href="/despre">Alex Matescu</a>, fondatorul și coordonatorul <a href="/lab">AI Visibility Lab</a>, folosind cadrul public de cercetare și măsurare al laboratorului.</p>

<div class="avl-audit-actions">
  <a class="avl-audit-cta" href="/contact">Discută despre un audit AI Visibility</a>
  <a href="/lab/metodologie">Vezi metodologia publică</a>
</div>
<p class="avl-audit-note"><em>Rezultatul este un diagnostic datat, nu o promisiune de poziționare în răspunsurile AI.</em></p>

<h2 id="de-ce">De ce ai nevoie de un audit AI Visibility?</h2>

<p>Un site poate funcționa corect pentru oameni și totuși să prezinte blocaje tehnice sau informaționale pentru diferite sisteme de căutare. Un brand poate exista în Google, dar să nu fie recuperat în anumite răspunsuri AI. Sau poate fi menționat fără sursa corectă, confundat cu o companie omonimă ori recomandat pe baza unei descrieri depășite.</p>

<p>Aceste situații sunt diferite. Fără măsurare, riști să investești în conținut, date structurate sau distribuție fără să știi ce problemă încerci să rezolvi.</p>

<p>Auditul urmărește patru întrebări practice:</p>

<ol class="avl-audit-grid">
  <li><span class="avl-audit-index">01</span><strong>Poate fi accesată informația?</strong> Ce livrează efectiv site-ul prin HTTP, HTML, robots.txt, sitemap și politicile de acces relevante?</li>
  <li><span class="avl-audit-index">02</span><strong>Este entitatea identificată corect?</strong> Numele, activitatea, locația, produsele și relațiile cu alte surse sunt coerente?</li>
  <li><span class="avl-audit-index">03</span><strong>Ce apare în răspunsuri?</strong> Pentru interogări declarate, brandul este absent, menționat, citat, descris eronat sau recomandat?</li>
  <li><span class="avl-audit-index">04</span><strong>Ce se poate îmbunătăți cu dovezi?</strong> Care sunt problemele observate, ce intervenții depind de tine și ce rezultate rămân incerte?</li>
</ol>

<h2 id="ce-masoara">Ce măsoară auditul: menționare, citare și recomandare</h2>

<ul class="avl-audit-grid avl-audit-grid-3">
  <li><strong>Menționarea</strong> este apariția numelui ori a brandului într-un răspuns AI. O mențiune nu înseamnă automat că sistemul a folosit sau a citat site-ul oficial.</li>
  <li><strong>Citarea</strong> este afișarea unei surse ori a unui link asociat unui răspuns. Analizăm nu doar existența citării, ci și sursa exactă, pagina indicată și măsura în care aceasta susține afirmația.</li>
  <li><strong>Recomandarea</strong> apare când sistemul propune entitatea ca posibilă soluție la nevoia utilizatorului: de exemplu, într-o listă de furnizori, într-o comparație de servicii sau într-un răspuns la întrebarea „pe cine recomanzi?”. Analizăm dacă recomandarea este corectă, relevantă și susținută; nu confundăm ordinea afișării cu un clasament oficial.</li>
</ul>

<p>Separat evaluăm <strong>corectitudinea identității</strong>, actualitatea informației și riscul de <strong>coliziune între entități</strong>. O mențiune despre compania greșită sau o recomandare bazată pe informații inventate nu este un succes de vizibilitate.</p>

<h2 id="ce-verificam">Ce verificăm concret</h2>

<h3 id="accesibilitate-tehnica">1. Accesibilitatea tehnică și fundația SEO</h3>

<p>Verificăm, pentru un eșantion de URL-uri declarat înaintea analizei, răspunsurile HTTP, redirecturile, URL-urile canonice, meta-directivele, robots.txt, sitemap-urile, existența conținutului important în HTML și eventualele diferențe observabile între răspunsurile pentru diferite User-Agent-uri. Când există acces autorizat, putem completa observațiile externe cu date din instrumente pentru webmasteri sau loguri de server.</p>

<p><strong>Limita verificării:</strong> un răspuns HTTP corect și permisiunea din robots.txt nu demonstrează că o pagină este indexată, recuperată, utilizată sau citată de un sistem AI. Verificările tehnice sunt o condiție de diagnostic, nu un test direct de citare.</p>

<p>Acest strat se inspiră și din <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică</a>, publicat în prezent ca draft metodologic, nu ca standard activ.</p>

<h3 id="identitate-digitala">2. Identitatea digitală și coerența surselor</h3>

<p>Examinăm cum este descrisă entitatea în propriul site și în surse publice relevante: nume, variante de nume, servicii, profil profesional, zonă geografică, date de contact publice, proiecte, publicații și asocieri cu alte entități. Căutăm contradicții, informații învechite, duplicări și omonimii.</p>

<p>Datele structurate pot ajuta la descrierea explicită a entităților, dar nu garantează indexare, menționare sau citare.</p>

<h3 id="continut">3. Conținutul și capacitatea de a răspunde întrebărilor reale</h3>

<p>Verificăm dacă paginile răspund clar întrebărilor utilizatorilor: ce oferi, pentru cine, unde, în ce condiții, cu ce diferențiatori și pe baza căror dovezi. Urmărim titluri inteligibile, structură semantică, surse, atribuire, autor, actualitate și pagini canonice. Nu producem pagini artificiale pentru fiecare variantă minoră de prompt.</p>

<h3 id="query-universe">4. Query Universe și testarea pe platforme</h3>

<p>Construim un <strong>set documentat de interogări</strong>, adaptat pieței și entității evaluate, care poate include:</p>

<ul>
  <li><strong>Identitate:</strong> „Ce este [brand] și cu ce se ocupă?”</li>
  <li><strong>Serviciu:</strong> „Cine oferă [serviciu] în [piață]?”</li>
  <li><strong>Comparație:</strong> „Care este diferența dintre [brand] și alternative?”</li>
  <li><strong>Recomandare:</strong> „Ce furnizori de [serviciu] ai recomanda pentru [nevoie]?”</li>
  <li><strong>Dezambiguizare:</strong> „Este [nume] aceeași entitate cu [nume asemănător]?”</li>
  <li><strong>Citare:</strong> „Ce surse confirmă [informație despre entitate]?”</li>
</ul>

<p>Întrebările nu sunt alese retroactiv doar pentru a obține rezultate favorabile. Pentru fiecare rulare consemnăm, în măsura în care interfața permite, platforma, modul de căutare, data, limba, contextul și răspunsul observat. Platformele efectiv testate și limitele accesului sunt declarate în planul auditului; disponibilitatea funcțiilor diferă în timp și între regiuni.</p>

<h3 id="citari-surse">5. Citările, sursele concurente și reprezentarea pieței</h3>

<p>Identificăm sursele efectiv afișate la interogările testate și distingem sursa oficială de agregatoare, publicații, directoare sau alte pagini. Atunci când auditul include comparație competitivă, definim separat cine intră în categoria de furnizori relevanți, înainte să interpretăm recomandările AI. <strong>Faptul că un nume apare într-un răspuns AI nu dovedește că este un furnizor real ori eligibil.</strong></p>

<p>Pentru această delimitare folosim principiile publice ale <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001</a>, aflat încă în revizuire; nu prezentăm acest draft ca protocol comercial certificat.</p>

<h3 id="diagnostic">6. Diagnostic și prioritizarea intervențiilor</h3>

<p>Grupăm constatările după tipul problemei: acces, descoperire, identitate, conținut, sursă, reprezentare incorectă sau lipsă de dovezi. Pentru fiecare recomandare explicăm observația care o susține, gradul de certitudine, elementul asupra căruia poți interveni și modul propus de verificare ulterioară.</p>

<h2 id="cum-decurge">Cum decurge un audit AI Visibility</h2>

<ol class="avl-audit-steps">
  <li><strong>Delimitare și obiective.</strong> Stabilim entitatea, piețele, limbile, platformele, tipurile de întrebări și paginile relevante. Un audit pentru un magazin online diferă de unul pentru o firmă locală sau un specialist.</li>
  <li><strong>Inventar și baseline T0.</strong> Documentăm starea inițială înainte de schimbările pe care dorim ulterior să le evaluăm. Păstrăm data și condițiile verificărilor, nu doar concluziile.</li>
  <li><strong>Colectare și clasificare.</strong> Executăm verificările și interogările stabilite. Separăm capturile și răspunsurile brute de observații, măsurători și interpretări. Notăm explicit răspunsurile absente, ambigue și eronate.</li>
  <li><strong>Raport și prioritizare.</strong> Corelăm constatările tehnice, informaționale și rezultatele observate în AI Search. Identificăm problemele care au dovezi și intervențiile care merită testate mai întâi.</li>
  <li><strong>Discuție asupra concluziilor.</strong> Prezentăm rezultatele, incertitudinile, recomandările și posibilele etape ulterioare. Implementarea schimbărilor și remăsurarea sunt activități separate, care se stabilesc explicit.</li>
</ol>

<p>Metodologia de bază este explicată în <a href="/lab/metodologie">AVL-202 — Cadrul metodologic</a>, iar regulile de trasabilitate sunt detaliate în <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standard dovezi, măsurare și trasabilitate</a>.</p>

<h2 id="livrabile">Ce primești în urma auditului</h2>

<p>Livrabilele exacte sunt stabilite la delimitarea proiectului, în funcție de scop. Un audit complet poate include:</p>

<ul>
  <li><strong>Fișă de scop:</strong> entitatea, piața, domeniul, platformele și eșantionul de URL-uri și interogări.</li>
  <li><strong>Baseline datat:</strong> starea observată și condițiile de măsurare.</li>
  <li><strong>Matrice query × platformă:</strong> răspunsuri clasificate pentru identitate, menționare, citare, recomandare și corectitudine, cu denominatorii declarați.</li>
  <li><strong>Inventar de citări și surse:</strong> linkurile afișate efectiv și problemele de atribuire constatate.</li>
  <li><strong>Diagnostic tehnic și semantic:</strong> probleme confirmate, probleme posibile și elemente care nu pot fi stabilite din datele disponibile.</li>
  <li><strong>Raport de constatări:</strong> ce știm, ce inferăm și ce rămâne necunoscut, cu trimiteri la dovezile relevante.</li>
  <li><strong>Plan de acțiuni prioritizate:</strong> recomandări grupate după impact potențial, efort, dependențe și posibilitatea verificării ulterioare.</li>
</ul>

<div class="my-8 overflow-x-auto">
<table>
  <caption class="avl-audit-caption">Structura matricei query × platformă — exemplu de format, fără date</caption>
  <thead>
    <tr><th scope="col">Interogare</th><th scope="col">Platformă și mod</th><th scope="col">Identitate</th><th scope="col">Menționare</th><th scope="col">Citare</th><th scope="col">Recomandare</th><th scope="col">Corectitudine</th></tr>
  </thead>
  <tbody>
    <tr><td>[interogare declarată]</td><td>[platformă, mod, dată]</td><td>[clasificare]</td><td>[clasificare]</td><td>[sursa afișată]</td><td>[clasificare]</td><td>[observație]</td></tr>
  </tbody>
</table>
</div>

<p><strong>Nu primești un „scor AI” universal.</strong> Platformele, interogările și modurile de răspuns diferă; orice rată sau comparație trebuie să arate clar ce a fost numărat și care este setul de referință. Dovezile complete și datele brute sunt gestionate potrivit scopului, condițiilor de acces și acordurilor proiectului.</p>

<h2 id="exemplu">Un exemplu de ce contează metoda</h2>

<aside class="avl-doc-card" aria-label="Studiu de caz propriu">
  <p class="avl-doc-overline">Studiu de caz propriu · nu este un rezultat de client</p>
  <p>În <a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul public Tabula Rasa despre identitatea Alex Matescu</a>, aceeași persoană a fost identificată diferit în funcție de platformă și de contextul interogării. Unele răspunsuri au avut nevoie de ancore precum domeniul web ori organizația asociată; în alte situații au apărut confuzii de identitate.</p>
  <p>Exemplul arată de ce o singură căutare de tipul „Știe AI cine sunt?” nu este suficientă pentru diagnostic. <strong>Este un studiu de caz asupra unei entități proprii, nu o dovadă că aceleași rezultate se vor reproduce pentru orice client.</strong></p>
  <p><a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">Consultă studiul, taxonomia și limitele observațiilor</a></p>
</aside>

<h2 id="cui-se-adreseaza">Cui i se potrivește acest audit?</h2>

<ul>
  <li><strong>Companii și branduri:</strong> pentru a înțelege cum sunt descrise, găsite și comparate în răspunsurile AI.</li>
  <li><strong>Furnizori de servicii și afaceri locale:</strong> pentru întrebări cu intenție de alegere și recomandare în piețele relevante.</li>
  <li><strong>Specialiști și profesioniști:</strong> pentru dezambiguizarea numelui, expertizei și profilului public.</li>
  <li><strong>Echipe de marketing, SEO și conținut:</strong> pentru a separa problemele tehnice de cele editoriale și de cele de măsurare.</li>
</ul>

<p>Nu toate situațiile justifică un audit extins. Uneori, o verificare limitată la accesibilitate sau identitate poate fi punctul de pornire potrivit. Dimensiunea evaluării se decide după delimitarea obiectivului.</p>

<h2 id="intrebari-frecvente">Întrebări frecvente</h2>

<h3>Ce este un audit GEO/AEO sau AI Visibility?</h3>
<p>Este o evaluare documentată a vizibilității și reprezentării unei entități în sisteme de căutare și răspuns AI. Combină fundamente SEO, verificări tehnice, examinarea identității digitale și testarea unor interogări declarate pentru a observa menționări, citări, recomandări și erori.</p>

<h3>Care este diferența dintre un audit SEO și unul AI Visibility?</h3>
<p>Auditul SEO investighează, în mod obișnuit, accesul motoarelor de căutare, indexarea, structura, conținutul și performanța în Search. Auditul AI Visibility păstrează această fundație, dar adaugă evaluarea răspunsurilor AI, a identificării entității, a citărilor și a recomandărilor. Niciunul nu îl înlocuiește automat pe celălalt. Diferențele sunt detaliate în <a href="/lab/cercetare/seo-vs-geo">SEO vs GEO</a>.</p>

<h3>Dacă sunt pe prima pagină în Google, voi apărea și în ChatGPT?</h3>
<p>Nu există o asemenea garanție. Platformele pot folosi procese, surse, moduri de căutare și criterii de afișare diferite. O poziție bună în căutarea clasică nu demonstrează o citare ori o recomandare în AI Search.</p>

<h3>Poți face auditul fără acces la codul sau conturile mele?</h3>
<p>Da, un diagnostic extern limitat poate analiza informații publice, răspunsuri HTTP, conținut și interogări AI. Verificări precum indexarea confirmată, logurile serverului, datele din Search Console sau Bing Webmaster Tools necesită acces autorizat și se includ numai când sunt relevante și disponibile.</p>

<h3>Verifici toate modelele AI și toate întrebările posibile?</h3>
<p>Nu. Auditul folosește un eșantion declarat de platforme, interfețe, limbi și întrebări. Rezultatele descriu acele condiții și acea perioadă. Nu reprezintă toate răspunsurile posibile și nu sunt un recensământ al întregii piețe.</p>

<h3>Fișierele llms.txt sau datele Schema.org garantează citări AI?</h3>
<p>Nu. Datele structurate pot clarifica informația, dar nu garantează citarea. <a href="https://developers.google.com/search/docs/appearance/ai-features" rel="noopener">Google precizează</a> că pentru AI Overviews și AI Mode nu sunt necesare fișiere speciale pentru AI ori markup suplimentar față de bunele practici SEO. Evaluăm aceste elemente în funcție de scop și de comportamentul documentat al platformei, nu ca trucuri universale.</p>

<h3>Poți garanta că voi fi menționat, citat sau recomandat?</h3>
<p>Nu. Nimeni din afara platformelor nu controlează integral selecția surselor sau generarea răspunsurilor. Un audit documentează starea observată, limitele și oportunitățile de îmbunătățire. Rezultatele unei intervenții trebuie remăsurate și interpretate cu prudență.</p>

<h3>Cât durează și cât costă?</h3>
<p>Durata și costul depind de numărul de entități, țări, limbi, platforme, URL-uri, interogări și nivelul de dovezi solicitat. Acestea se stabilesc după definirea scopului; această pagină nu prezintă un tarif sau un termen standard care s-ar putea să nu se aplice proiectului tău.</p>

<h3>Ce se întâmplă cu datele mele și cu rezultatele auditului?</h3>
<p>Înainte de o evaluare care implică date nepublice, stabilim ce acces este necesar, cum sunt folosite și păstrate dovezile, cine primește raportul și ce — dacă este cazul — poate fi publicat. Un audit privat nu este transformat automat într-un studiu de caz public.</p>

<h2 id="solicita-audit">Solicită un audit AI Visibility</h2>

<p>Dacă vrei să înțelegi ce poate fi observat astăzi despre compania, brandul sau activitatea ta în Search și AI Search, trimite-mi domeniul web, entitatea analizată, piața relevantă și întrebările la care ai vrea să răspundă auditul. Îți pot spune ce tip de evaluare ar avea sens și ce informații ar fi necesare pentru delimitarea ei.</p>

<div class="avl-audit-actions">
  <a class="avl-audit-cta" href="/contact">Solicită o discuție despre audit</a>
</div>
<p class="avl-audit-note"><em>În formularul de contact, alege motivul „AI Visibility Lab/GEO/AEO” și menționează „Audit AI Visibility” în mesaj.</em></p>

<hr />

<h2 id="metodologie-surse">Metodologie și surse pentru verificare</h2>

<ul>
  <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a></li>
  <li><a href="/lab/cercetare/ce-este-geo-aeo">AVL-101 — Ce este GEO/AEO și AI Visibility</a></li>
  <li><a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104 — Cum se măsoară AI Visibility</a></li>
  <li><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standard dovezi, măsurare și trasabilitate</a></li>
  <li><a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa</a></li>
  <li><a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a></li>
  <li><a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică (draft)</a></li>
  <li><a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility (draft)</a></li>
  <li><a href="https://developers.google.com/search/docs/appearance/ai-features" rel="noopener">Google Search Central — AI features and your website</a></li>
  <li><a href="https://developers.openai.com/api/docs/bots" rel="noopener">OpenAI — Overview of OpenAI Crawlers</a></li>
  <li><a href="https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/" rel="noopener">Microsoft Bing — AI Performance</a></li>
</ul>

<p class="avl-audit-note"><em>Conținut informativ și prezentare a unui serviciu de diagnostic. Metodologia poate evolua odată cu documentația furnizorilor și cu revizuirile protocoalelor publice.</em></p>
`;
