export const avl203ProtocolVerificareTehnicaHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă · Draft pentru revizuire</p>
        <p class="avl-doc-title">AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</p>
        <p class="avl-doc-lead">Core Technical Web Measurement Protocol</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-203</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>0.6.1</td></tr>
        <tr><th scope="row">Statut</th><td>Draft pentru revizuire</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data creării</th><td>1 octombrie 2026</td></tr>
        <tr><th scope="row">Data publicării</th><td>2 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>28 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>1 octombrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica">https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica</a></td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, <a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>, <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>, <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0</a> (fișa entității, §7)</td></tr>
        <tr><th scope="row">Relație cu AVL-201</th><td>componentă reutilizabilă la baseline și remăsurări; nu înlocuiește <a href="/lab/metodologie/tabula-rasa-f0">AVL-201</a>; preia din AVL-201 fișa entității</td></tr>
        <tr><th scope="row">Grilă de interpretare</th><td><a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204 — Grila de interpretare a verificării tehnice</a> (draft)</td></tr>
        </tbody>
        </table>
      </div>

      <blockquote><strong>Principiu:</strong> documentăm ceea ce livrează un server în condiții declarate; nu confundăm accesibilitatea tehnică cu indexarea, recuperarea informației, citarea, menționarea sau recomandarea de către un sistem AI. Diagnosticul și recomandările se formulează separat, după o grilă publică, și rămân trasabile până la observațiile pe care se sprijină.</blockquote>

      <h2>Controlul documentului</h2>

      <p>AVL-203 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation, propus ca protocol în ramura Core Methodology descrisă de AVL-202.</p>

      <p>Versiunea curentă, <strong>0.6.1</strong>, este un <strong>draft public pentru revizuire</strong> și nu este activă. Documentul este publicat pentru transparență, ca regula să fie vizibilă și datată înainte de activare. Cerințele de conformitate sunt formulate ca cerințe identificate <code>AVL203-REQ-*</code>; implementarea de referință nu este încă validată. Deciziile rămase deschise înainte de activare sunt enumerate în §19.</p>

      <p>Din versiunea 0.4.0, protocolul acoperă și trecerea de la observații la diagnostic și recomandări (§12), pentru că verificarea tehnică este folosită și în evaluări care livrează un diagnostic, de exemplu auditul AI Visibility. Regulile după care observațiile devin diagnostic sunt publicate separat, în grila AVL-204.</p>

      <blockquote>
        <p><strong>Exemplu aplicat.</strong> Prima rulare <code>T0</code> a protocolului, pe delamatescu.ro, e documentată pas cu pas, cu dovezile brute și ieșirea din terminal, în studiul de caz <a href="/lab/studii-de-caz/verificare-tehnica-delamatescu-ro">CS-002</a>.</p>
      </blockquote>

      <p>Identificatorul AVL-203 a fost alocat la 1 octombrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut și a corpusului, și confirmat de Alex Matescu. Eticheta de lucru folosită anterior pentru acest draft, „AVL-TECH-001”, nu este un identificator normativ și nu introduce o familie <code>AVL-TECH-*</code>.</p>

      <p>În acest document, termenii <strong>TREBUIE</strong>, <strong>NU TREBUIE</strong>, <strong>ESTE OBLIGATORIU</strong>, <strong>AR TREBUI</strong>, <strong>NU AR TREBUI</strong> și <strong>POATE</strong> sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:</p>

      <ul>
        <li><strong>TREBUIE / NU TREBUIE</strong> — condiție obligatorie pentru conformitate;</li>
        <li><strong>AR TREBUI / NU AR TREBUI</strong> — recomandare puternică; abaterea este permisă numai cu justificare documentată;</li>
        <li><strong>POATE</strong> — opțiune permisă.</li>
      </ul>

      <p>În afara propozițiilor normative și a cerințelor identificate <code>AVL203-REQ-*</code>, acești termeni nu trebuie interpretați automat ca cerințe de conformitate. Cât timp documentul are statutul „Draft pentru revizuire”, cerințele descriu regula propusă pentru versiunea 1.0.0; o rulare făcută acum le poate respecta, dar nu poate fi declarată „conformă AVL-203 1.0.0”.</p>

      <h2>1. Care este scopul protocolului?</h2>

      <p><strong>Protocolul definește un set tehnic minim, transversal și repetabil pentru documentarea condițiilor observabile de acces, descoperire și prezentare machine-readable a unui site web.</strong> El sprijină interpretarea ulterioară a măsurătorilor Search/AI Search, dar nu reprezintă un audit complet de performanță, securitate, SEO sau vizibilitate AI.</p>

      <p>Acest protocol se aplică site-urilor și paginilor selectate într-un plan de măsurare declarat. O singură pagină nu reprezintă automat întregul domeniu. Lista URL-urilor testate, motivele alegerii și limitele eșantionului se declară înaintea rulării, în fișa experimentului sau în documentul proiectului.</p>

      <p>Protocolul se aplică numai site-urilor entităților evaluate ca proiect sau client al laboratorului, inclusiv site-urilor proprii ale laboratorului, pentru care există o fișă a entității completată de reprezentantul ei (AVL-201 §7). Nu se aplică concurenților unei entități evaluate și nici entităților identificate în Market Discovery (AVL-MKT-001). O verificare făcută asupra unui site din afara acestui domeniu nu este o rulare a protocolului și nu se documentează ca atare.</p>

      <blockquote><strong>AVL203-REQ-043 — O rulare a protocolului TREBUIE să privească site-ul unei entități evaluate ca proiect sau client al laboratorului, pentru care există o fișă a entității completată de reprezentantul ei; o verificare din afara acestui domeniu NU TREBUIE documentată ca rulare AVL-203.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-001 — Lista URL-urilor testate, motivul alegerii fiecăruia și limitele eșantionului TREBUIE declarate înaintea primului request al unei rulări din seria de măsurare.</strong></blockquote>

      <p>Protocolul conservă și rezultate negative, erori, redirecturi neașteptate, date indisponibile și abateri. Absența unei dovezi nu se transformă într-un <code>NO</code> nejustificat (AVL-200 §6).</p>

      <blockquote><strong>AVL203-REQ-002 — Rezultatele negative, erorile, redirecturile neașteptate, datele indisponibile și abaterile TREBUIE conservate și raportate.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-003 — Absența unei dovezi NU TREBUIE raportată ca <code>NO</code>; o valoare care nu poate fi stabilită TREBUIE raportată ca <code>UNKNOWN</code>, <code>NOT_APPLICABLE</code> sau eroare, distinct de <code>NO</code>.</strong></blockquote>

      <h3>1.1. Compoziția planului de măsurare</h3>

      <p>Numărul URL-urilor testate depinde de scopul evaluării, de entitate și de activitatea ei; nu este fix. Compoziția eșantionului urmează însă reguli declarate, pentru ca selecția paginilor să nu poată fi ajustată după rezultate.</p>

      <p>Planul declară tipul entității (de exemplu organizație cu servicii, magazin online, afacere locală, profesionist independent) și include, pentru fiecare categorie de pagină de mai jos, URL-ul ales sau motivul pentru care categoria nu se aplică:</p>

      <ul>
        <li>pagina principală a originului;</li>
        <li>pagina canonică despre entitate (de exemplu „Despre”, „Despre noi” sau pagina de profil);</li>
        <li>pagina de contact sau o altă pagină care conține datele de identitate ale entității (categorie obligatorie, vezi mai jos);</li>
        <li>paginile principale de servicii, produse sau activitate, în număr declarat;</li>
        <li>paginile pe care entitatea le desemnează drept referință despre ea (de exemplu hub-uri sau pagini-pilon).</li>
      </ul>

      <p>Categoriile suplimentare pentru fiecare tip de entitate sunt definite în AVL-204. O categorie care nu există pe site se notează <code>NOT_APPLICABLE</code>, cu motiv; nu se omite.</p>

      <p>Pagina de contact sau de date de identitate face excepție: este obligatorie în orice plan și nu se notează <code>NOT_APPLICABLE</code>. Ea arată cine răspunde de site și cum poate fi identificată entitatea, deci este necesară pentru transparența evaluării. Dacă site-ul nu are nicio pagină cu datele de identitate ale entității, planul înregistrează absența ei, iar absența se raportează ca rezultat al evaluării, nu ca limită a eșantionului.</p>

      <p>Planul mai declară, înainte de rulare, textele-cheie căutate de TC-08 pentru fiecare URL (§8.1) și politica de acces pe care entitatea o intenționează pentru crawlere (de exemplu permiterea crawlerelor de căutare și blocarea celor de antrenare), necesară diagnosticului din §12. Politica se preia din fișa entității („Politica crawlere”, AVL-201 §7), completată de reprezentantul entității. AI Visibility Lab recomandă accesul total pentru toate crawlerele; dacă reprezentantul nu declară o politică diferită, planul înregistrează accesul total, cu sursa acestei valori (AVL-204 §3.1).</p>

      <p>Planul declară și limitele cererilor auxiliare pe care captura le poate face după primul request, de exemplu captura țintei canonicalului unei pagini: tipurile de cereri permise, hosturile permise și numărul maxim. O țintă din afara acestor limite nu se capturează și se raportează ca atare; cererile auxiliare se marchează separat și nu extind eșantionul.</p>

      <blockquote><strong>AVL203-REQ-029 — Planul de măsurare TREBUIE să declare tipul entității și să includă, pentru fiecare categorie obligatorie de pagină, fie URL-ul ales, fie motivul pentru care categoria nu se aplică.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-030 — Numărul URL-urilor POATE varia între evaluări, dar compoziția eșantionului, textele-cheie pentru TC-08 și politica de acces intenționată TREBUIE fixate înaintea primului request și NU TREBUIE modificate după observarea rezultatelor; o completare ulterioară a planului TREBUIE tratată ca rulare nouă sau ca abatere documentată.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-042 — Planul de măsurare TREBUIE să includă pagina de contact sau o altă pagină care conține datele de identitate ale entității; această categorie NU TREBUIE notată <code>NOT_APPLICABLE</code>, iar absența ei de pe site TREBUIE înregistrată în plan și raportată.</strong></blockquote>

      <h2>2. Unde se situează verificarea tehnică în metodologia AVL?</h2>

      <p><strong>Verificarea tehnică este un proces de captură și observație care furnizează evidență contextuală măsurătorilor, fără a pretinde că descrie mecanismele interne ale unui motor sau model.</strong></p>

      <p><code>Evidence Capture Process</code> este procesul controlat care produce artefacte. Nu este o a șasea categorie epistemică din AVL-200. Lanțul normativ rămâne intact:</p>

      <pre><code>Evidence Capture Process
          |
          v
Raw Evidence
     |
     v
Indexed Evidence
     |
     v
Observation
     |
     v
Measurement
     |
     v
Interpretation
     |
     v
Published Claim (unde este cazul)</code></pre>

      <p>Pentru fiecare măsurare publicată trebuie să existe trasabilitate de la concluzie la artefactul conservat, conform AVL-200 §4. Captura, indexarea, observația, măsurarea și interpretarea nu se contopesc într-o singură judecată automată.</p>

      <blockquote><strong>AVL203-REQ-004 — Captura, indexarea, observația, măsurarea și interpretarea NU TREBUIE contopite într-o singură judecată automată.</strong></blockquote>

      <h2>3. Ce intră în setul minim de verificări?</h2>

      <p><strong>Nucleul măsoară identitatea rulării, accesibilitatea HTTP, redirecturile, regulile robots, descoperirea sitemap-ului, semnalele documentului, paritatea răspunsurilor declarate pentru User-Agent-uri, integritatea artefactelor și prezența conținutului important în HTML-ul brut.</strong></p>

      <table>
        <thead>
          <tr><th>Check ID intern</th><th>Aspect</th><th>Artefact minim</th><th>Observație permisă</th></tr>
        </thead>
        <tbody>
          <tr><td><code>TC-00</code></td><td>Contextul rulării</td><td>run manifest</td><td>condițiile în care a fost efectuată captura</td></tr>
          <tr><td><code>TC-01</code></td><td>HTTP GET / URL final</td><td>response headers, body, metrics</td><td>cod HTTP, URL final, număr redirecturi, tip, dimensiune</td></tr>
          <tr><td><code>TC-02</code></td><td>Variante de host și protocol</td><td>responses pentru variante</td><td>convergența/divergența variantelor</td></tr>
          <tr><td><code>TC-03</code></td><td><code>robots.txt</code></td><td>headere + corp original</td><td>reguli declarate; politică aplicabilă numai după interpretare corectă</td></tr>
          <tr><td><code>TC-04</code></td><td>Sitemap</td><td>declarații + sitemap-uri capturate</td><td>declarație, accesibilitate, tip de document</td></tr>
          <tr><td><code>TC-05</code></td><td>Semnale raw HTML</td><td>HTML + headers</td><td>title, canonical, meta robots, X-Robots-Tag, lang, prezența JSON-LD</td></tr>
          <tr><td><code>TC-06</code></td><td>User-Agent Response Parity</td><td>dublă captură a clientului de referință + capturi per agent</td><td>variabilitatea intrinsecă a răspunsului; diferențe de status, URL, headers, conținut și hash</td></tr>
          <tr><td><code>TC-07</code></td><td>Integritate</td><td>evidence index + checksum manifest</td><td>identificarea și verificarea artefactelor</td></tr>
          <tr><td><code>TC-08</code></td><td>Conținut important în raw HTML</td><td>HTML-ul răspunsului final + textele-cheie declarate în plan</td><td>prezența fiecărui text-cheie în HTML-ul brut, pe zone, cu locația</td></tr>
        </tbody>
      </table>

      <p>Aceste ID-uri (<code>TC-*</code>) sunt identificatori <strong>interni ai verificărilor</strong>, nu identificatori <code>AVL-NNN</code> ai documentelor și nu identificatori de instanță. Orice modificare a definițiilor lor care afectează comparabilitatea impune versionarea protocolului (AVL-200 §19).</p>

      <blockquote><strong>AVL203-REQ-005 — O modificare a definiției unei verificări <code>TC-*</code> care afectează comparabilitatea rezultatelor TREBUIE să producă o versiune nouă a protocolului.</strong></blockquote>

      <h2>4. Cum identificăm o rulare reproductibilă?</h2>

      <p><strong>Înaintea oricărui request se înregistrează exact ținta, mediul, instrumentul și configurația, astfel încât alte rulări să poată reproduce procedeul, chiar dacă serverul răspunde diferit.</strong></p>

      <p>Câmpuri minime: run ID unic, entitate/domeniu, URL exact, origin, lista URL-urilor testate, data/ora UTC de început și de final, versiunea protocolului, versiunea scriptului, <code>curl --version</code>, mediul de executare, user-agent-urile efective și versiunea manifestului User-Agent (§9), timeouts, redirect policy, compresie, codul de ieșire <code>curl</code> al fiecărui request, eventuale erori și abateri. Dacă este relevant și disponibil, se înregistrează mediul de rețea/regiunea, fără a publica date personale.</p>

      <blockquote><strong>AVL203-REQ-006 — Înaintea primului request, rularea TREBUIE să înregistreze în manifest câmpurile minime de mai sus; câmpurile care nu pot fi stabilite TREBUIE marcate explicit.</strong></blockquote>

      <pre><code># Exemplu de captură a mediului; scriptul final trebuie să salveze automat outputul.
date -u +'%Y-%m-%dT%H:%M:%SZ'
curl --version</code></pre>

      <p>Tokenurile, cookie-urile, credențialele și datele sensibile nu trebuie publicate în evidența brută accesibilă publicului. Redactarea se face prin copii derivate; originalele se protejează în regimul prevăzut de AVL-200 §18.</p>

      <blockquote><strong>AVL203-REQ-007 — Tokenurile, cookie-urile, credențialele și alte date sensibile NU TREBUIE publicate în evidența brută accesibilă publicului; redactarea TREBUIE făcută prin copii derivate, cu originalele protejate conform AVL-200 §18.</strong></blockquote>

      <h2>5. Cum verificăm accesibilitatea HTTP, redirecturile și identitatea URL-ului?</h2>

      <p><strong>Folosim requesturi GET reproductibile, păstrăm separat headerele și conținutul și înregistrăm URL-ul final, statusul, redirecturile, tipul și dimensiunea răspunsului.</strong></p>

      <pre><code>TARGET='https://example.com/'
curl --silent --show-error --location --compressed \
  --connect-timeout 15 --max-time 45 \
  --dump-header page.headers --output page.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nnum_redirects=%{num_redirects}\ncontent_type=%{content_type}\nsize_download=%{size_download}\n' \
  "$TARGET" &gt; page.metrics
echo "curl_exit=$?" &gt;&gt; page.metrics</code></pre>

      <p>Codul de ieșire <code>curl</code> se înregistrează pentru fiecare request. Cu <code>--silent</code>, o eroare de rețea, DNS sau TLS nu produce un status HTTP (<code>http_code=000</code>), iar fără codul de ieșire eroarea nu rămâne identificabilă în dovezi.</p>

      <blockquote><strong>AVL203-REQ-008 — Pentru fiecare request, rularea TREBUIE să păstreze separat headerele și corpul răspunsului și să înregistreze statusul, URL-ul final, numărul de redirecturi, tipul, dimensiunea și codul de ieșire al clientului HTTP.</strong></blockquote>

      <p>Cu <code>--location</code>, fișierul <code>page.headers</code> conține headerele tuturor răspunsurilor din lanțul de redirecturi, în ordine, nu doar pe ale răspunsului final. Interpretarea trebuie să identifice explicit blocul răspunsului final.</p>

      <blockquote><strong>AVL203-REQ-009 — Când lanțul de redirecturi este urmărit, observațiile despre răspunsul final TREBUIE să se refere la blocul de headere al răspunsului final, identificat explicit.</strong></blockquote>

      <p>O matrice de patru variante (<code>http</code>/<code>https</code>, <code>www</code>/non-<code>www</code>) se aplică originului unde variantele sunt relevante, fără a presupune că fiecare domeniu folosește sau controlează ambele hostname-uri. Se păstrează destinația și eventualele erori (inclusiv TLS/DNS), fără a le ascunde prin <code>--insecure</code>.</p>

      <blockquote><strong>AVL203-REQ-010 — Erorile TLS sau DNS NU TREBUIE ascunse prin dezactivarea verificării certificatelor; ele TREBUIE păstrate ca observații.</strong></blockquote>

      <p>O eroare de rețea, DNS sau timeout poate fi trecătoare. De aceea, o captură care eșuează din aceste motive se repetă o singură dată, după o pauză declarată în manifest, iar ambele încercări se păstrează. O eroare TLS sau de certificat nu se repetă. Numai o eroare confirmată la captura repetată poate susține o constatare de diagnostic (AVL-204 <code>R-Z1-09</code>, <code>R-Z2-02</code>).</p>

      <blockquote><strong>AVL203-REQ-044 — O captură eșuată din cauza unei erori de rețea, DNS sau timeout TREBUIE repetată o singură dată, după o pauză declarată în manifest, iar ambele încercări TREBUIE păstrate.</strong></blockquote>

      <p><code>HEAD</code> poate fi folosit auxiliar, dar nu înlocuiește GET: RFC 9110 §9.3.2 permite serverului să omită în răspunsul la HEAD headerele a căror valoare se determină numai la generarea conținutului.</p>

      <blockquote><strong>AVL203-REQ-011 — Verificările TC-01, TC-02 și TC-06 TREBUIE făcute cu GET; HEAD POATE fi folosit doar auxiliar.</strong></blockquote>

      <p><code>HTTP 200</code> reprezintă un răspuns reușit al requestului, nu un diagnostic de indexare. <code>403</code> indică faptul că serverul a înțeles requestul, dar refuză să-l onoreze (RFC 9110 §15.5.4); nu dovedește singur că un furnizor AI nu poate accesa resursa.</p>

      <blockquote><strong>AVL203-REQ-012 — Un răspuns <code>200</code> NU TREBUIE prezentat drept indexare, iar un <code>403</code> pentru un User-Agent declarat NU TREBUIE prezentat drept dovadă că infrastructura furnizorului este blocată.</strong></blockquote>

      <h2>6. Ce verificăm în robots.txt și de ce?</h2>

      <p><strong>Capturăm fișierul robots de la originul exact și evaluăm separat regulile declarate pentru fiecare crawler relevant, fără a transforma un simplu <code>grep</code> într-o evaluare completă a accesului.</strong></p>

      <pre><code>ORIGIN='https://example.com'
curl --silent --show-error --location \
  --dump-header robots.headers --output robots.body \
  "$ORIGIN/robots.txt"</code></pre>

      <p>Se documentează statusul, URL-ul efectiv, redirecturile, corpul și grupurile <code>User-agent</code>, <code>Allow</code>, <code>Disallow</code>, precum și declarațiile <code>Sitemap</code>. Interpretarea unei reguli pentru un URL cere aplicarea corectă a RFC 9309 și a extensiilor furnizorului: selecția grupului specific produsului înaintea grupului <code>*</code>, combinarea grupurilor care corespund aceluiași token și regula celei mai specifice potriviri între <code>Allow</code> și <code>Disallow</code> (RFC 9309 §2.2). <code>grep</code> este doar inspecție preliminară, nu aplicare a RFC 9309.</p>

      <p>Regulile RFC 9309 se pot aplica în două moduri: cu un parser conform sau manual. Aplicarea manuală se documentează pas cu pas, pentru fiecare pereche URL–crawler: grupurile <code>User-agent</code> care corespund tokenului crawlerului (sau grupul <code>*</code>, dacă niciunul nu corespunde), regulile combinate din aceste grupuri, regula <code>Allow</code> sau <code>Disallow</code> cu potrivirea cea mai specifică și rezultatul. Documentarea face aplicarea verificabilă de altcineva pe baza aceluiași <code>robots.body</code>. Dacă politica nu este determinată în niciunul dintre cele două moduri, rezultatul rămâne <code>NEDETERMINAT</code>, nu <code>ALLOW</code> implicit.</p>

      <blockquote><strong>AVL203-REQ-013 — Retrasă în versiunea 0.4.0.</strong> Text anterior: „<del>Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309 (selecția grupului, combinarea grupurilor și cea mai specifică potrivire); în lipsa unui parser conform, rezultatul TREBUIE raportat <code>NEDETERMINAT</code>.</del>” Înlocuită de AVL203-REQ-041.</blockquote>

      <blockquote><strong>AVL203-REQ-041 — Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309 (selecția grupului, combinarea grupurilor și cea mai specifică potrivire), fie printr-un parser conform, fie prin aplicare manuală documentată pas cu pas pentru fiecare pereche URL–crawler; metoda folosită TREBUIE înregistrată în observații, iar o politică nedeterminată prin niciuna dintre cele două metode TREBUIE raportată <code>NEDETERMINAT</code>.</strong></blockquote>

      <p>Matricea Core urmărește politica relevantă pentru <code>*</code>, <code>Googlebot</code>, <code>bingbot</code>, <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code> și <code>PerplexityBot</code>. La data verificării acestui draft (1 octombrie 2026), documentația furnizorilor descrie <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code> și <code>PerplexityBot</code> drept crawlere asociate căutării sau afișării surselor, nu antrenării modelelor; rolul lor se reverifică la fiecare versiune a protocolului.</p>

      <p>Agenții pentru antrenarea modelelor (de exemplu <code>GPTBot</code>, <code>ClaudeBot</code>) și cei pentru fetch la cererea utilizatorului (de exemplu <code>ChatGPT-User</code>, <code>Claude-User</code>, <code>Perplexity-User</code>) sunt analize distincte, declanșate de întrebarea cercetării. Pentru agenții de tip user fetch, OpenAI și Perplexity declară că regulile robots.txt pot să nu se aplice sau sunt în general ignorate, iar Anthropic declară că și Claude-User respectă robots.txt; diferențele se documentează per furnizor, nu se generalizează. <code>Google-Extended</code> este token de control în robots.txt, nu User-Agent HTTP separat. Când fișa entității declară o politică pentru acești agenți, ei se includ în planul de măsurare: grila <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204</a> aplică regulile zonei Z2 crawlerelor de antrenare declarate și raportează agenții de fetch la cererea utilizatorului numai ca observație (AVL204-REQ-018).</p>

      <p>Robots Exclusion Protocol nu este o formă de autorizare a accesului (RFC 9309 §1.3) și nu dovedește indexarea.</p>

      <h2>7. Cum verificăm descoperirea sitemap-ului?</h2>

      <p><strong>Mai întâi colectăm directivele <code>Sitemap:</code> declarate în robots.txt și apoi încercăm obținerea fiecărui sitemap declarat; locațiile convenționale sunt doar probe suplimentare de descoperire.</strong></p>

      <pre><code># Inspecție inițială; pentru extragere robustă se folosește un parser.
grep -i '^[[:space:]]*sitemap[[:space:]]*:' robots.body
# Exemplu pentru un sitemap declarat:
SITEMAP='https://example.com/sitemap.xml'
curl --silent --show-error --location \
  --dump-header sitemap.headers --output sitemap.body "$SITEMAP"</code></pre>

      <p>Protocolul Sitemaps cere ca directiva <code>Sitemap:</code> din robots.txt să conțină URL-ul complet al sitemap-ului. RFC 9309 §2.2.4 permite interpretarea unor înregistrări suplimentare precum <code>Sitemap</code>, fără a interfera cu regulile definite explicit.</p>

      <p>Căile convenționale verificate sunt <code>/sitemap.xml</code> și <code>/sitemap_index.xml</code>, la originul exact. Ele se capturează și atunci când robots.txt declară sitemap-uri, ca probe suplimentare; nu înlocuiesc declarația.</p>

      <p>Statusul se atribuie după următoarea regulă:</p>

      <table>
        <thead>
          <tr><th>Status</th><th>Condiție</th></tr>
        </thead>
        <tbody>
          <tr><td><code>DECLARED</code></td><td>robots.txt declară cel puțin un <code>Sitemap:</code> și cel puțin unul dintre sitemap-urile declarate răspunde <code>2xx</code></td></tr>
          <tr><td><code>UNAVAILABLE</code></td><td>există sitemap declarat, toate declarațiile au fost capturate și niciuna nu răspunde <code>2xx</code>; sau, fără declarație, toate căile convenționale răspund cu erori de captură ori <code>5xx</code></td></tr>
          <tr><td><code>FOUND_AT_CONVENTIONAL_PATH</code></td><td>nicio declarație, dar <code>/sitemap.xml</code> sau <code>/sitemap_index.xml</code> răspunde <code>2xx</code> cu un document XML (sau XML comprimat)</td></tr>
          <tr><td><code>NOT_FOUND</code></td><td>nicio declarație și toate căile convenționale răspund <code>404</code> sau <code>410</code></td></tr>
          <tr><td><code>UNKNOWN</code></td><td>robots.txt nu a putut fi capturat (eroare de transport, <code>5xx</code> sau mai mult de cinci redirecturi), deci prezența sau absența declarației nu poate fi stabilită; sau orice altă combinație: căi convenționale cu alt <code>4xx</code> decât <code>404</code>/<code>410</code>, rezultate amestecate, răspuns <code>2xx</code> care nu e XML, declarații necapturate pentru că sunt în afara limitelor planului</td></tr>
        </tbody>
      </table>

      <p>Un <code>robots.txt</code> care răspunde <code>4xx</code> se tratează ca fișier capturat fără declarații <code>Sitemap:</code>; statusul se stabilește atunci după căile convenționale. Fiecare sitemap capturat se raportează separat, cu statusul și tipul de document observat, inclusiv când un alt sitemap a determinat statusul <code>DECLARED</code>.</p>

      <p>Statusul descrie declarația și accesibilitatea sitemap-ului, nu validitatea lui. Nu deducem că întregul site este descoperibil din prezența unui singur sitemap. Validarea XML completă, crawlingul integral al URL-urilor și identificarea paginilor orfane sunt excluse din Core, dacă planul de studiu nu le justifică.</p>

      <blockquote><strong>AVL203-REQ-014 — Statusul TC-04 TREBUIE atribuit după regula din tabelul de mai sus.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-015 — Prezența sau accesibilitatea unui sitemap NU TREBUIE prezentată drept dovadă că întregul site este descoperibil.</strong></blockquote>

      <h2>8. Ce semnale ale documentului extragem din răspunsul brut?</h2>

      <p><strong>Din HTML-ul și headerele capturate identificăm semnale declarative elementare, fără a le confunda cu interpretarea sau selecția pe care o face un motor extern.</strong></p>

      <p>Se urmăresc: <code>&lt;title&gt;</code>, <code>rel=canonical</code>, meta robots (inclusiv variantele adresate unui crawler, <code>name="googlebot"</code> și <code>name="bingbot"</code>), <code>X-Robots-Tag</code>, <code>&lt;html lang&gt;</code>, prezența JSON-LD și dacă fiecare bloc JSON-LD este JSON valid sintactic. Se păstrează valoarea și locația originală (linia din documentul capturat).</p>

      <p>Validitatea sintactică JSON a unui bloc este o observație despre octeții capturați; nu este o validare Schema.org și nu spune nimic despre utilizarea blocului de către un motor sau model.</p>

      <p>Un document poate conține <code>X-Robots-Tag</code> deși în HTML nu există meta robots; verificăm ambele. Google documentează că orice regulă care poate fi folosită într-un meta robots poate fi exprimată și ca <code>X-Robots-Tag</code>, și că aceste reguli sunt descoperite doar dacă URL-ul este accesat, nu și atunci când robots.txt blochează crawlingul.</p>

      <p>Canonicalul declarat nu este automat cel selectat de Google: Google descrie metodele de declarare a canonicalului drept preferințe, nu obligații. Prezența JSON-LD nu demonstrează validitatea vocabularului sau utilizarea lui de către un model. Raw HTML nu echivalează cu DOM-ul randat.</p>

      <blockquote><strong>AVL203-REQ-016 — Semnalele TC-05 TREBUIE extrase din raw HTML-ul și headerele răspunsului final, cu locația originală, și NU TREBUIE prezentate drept DOM randat, canonical selectat de un motor sau validare Schema.org.</strong></blockquote>

      <p>În implementare, parsingul robust trebuie să suporte schimbări de ordine ale atributelor, ghilimele diferite și taguri pe mai multe linii. Exemplele <code>grep</code> nu sunt validatori HTML. Dacă extracția nu este sigură, păstrăm valoarea <code>UNKNOWN</code> cu motiv, nu inventăm <code>ABSENT</code>.</p>

      <blockquote><strong>AVL203-REQ-017 — Un semnal TC-05 a cărui extracție nu este sigură TREBUIE raportat <code>UNKNOWN</code>, cu motiv, și NU TREBUIE raportat <code>ABSENT</code>.</strong></blockquote>

      <h3>8.1. Conținutul important în HTML-ul brut (TC-08)</h3>

      <p><strong>Verificăm dacă textele-cheie declarate în plan pentru fiecare URL se găsesc în HTML-ul brut al răspunsului final, adică fără executarea JavaScript.</strong></p>

      <p>Unele site-uri livrează conținutul principal numai după randarea paginii în browser. Un client care citește doar răspunsul HTTP nu vede acel conținut. TC-08 observă doar ce conțin octeții capturați la TC-01; nu face un request separat, nu randează pagina și nu afirmă ce vede un anumit crawler.</p>

      <p>Textele-cheie se aleg înainte de rulare (§1.1): de regulă numele entității, descrierea activității, serviciile sau produsele principale, localitatea și datele de identificare relevante pentru pagina respectivă. Căutarea folosește reguli de normalizare declarate în manifest (de exemplu decodarea entităților HTML, comprimarea spațiilor, comparația fără diferențe de majuscule) și se face separat pe zone: textul din corpul documentului, în afara scripturilor și a stilurilor; metadatele, adică atributele (de exemplu <code>alt</code>, <code>title</code>), blocurile JSON-LD, meta-tagurile și titlul documentului (<code>&lt;title&gt;</code>); și, separat, zonele care nu sunt conținut afișat: scripturile care nu sunt JSON-LD (de exemplu datele de hidratare ale unei aplicații JavaScript), comentariile HTML, <code>&lt;template&gt;</code> și <code>&lt;noscript&gt;</code>. Se păstrează locația fiecărei potriviri (linia din documentul capturat și zona). Textul din noduri adiacente se unește după reguli declarate în manifest, fără a lipi texte din blocuri diferite.</p>

      <p>Rezultatul pentru fiecare text-cheie este unul dintre:</p>

      <table>
        <thead>
          <tr><th>Status</th><th>Condiție</th></tr>
        </thead>
        <tbody>
          <tr><td><code>PRESENT_IN_BODY</code></td><td>textul apare în corpul documentului, în afara scripturilor și a stilurilor</td></tr>
          <tr><td><code>PRESENT_IN_METADATA_ONLY</code></td><td>textul nu apare în corp, dar apare în JSON-LD, în meta-taguri, în atribute sau în <code>&lt;title&gt;</code></td></tr>
          <tr><td><code>PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY</code></td><td>textul apare numai în scripturi care nu sunt JSON-LD, în comentarii, în <code>&lt;template&gt;</code> sau în <code>&lt;noscript&gt;</code></td></tr>
          <tr><td><code>ABSENT_FROM_RAW_HTML</code></td><td>textul nu apare în nicio zonă a HTML-ului brut, nici unind textul nodurilor adiacente</td></tr>
          <tr><td><code>UNKNOWN</code></td><td>răspunsul nu este HTML, corpul lipsește, captura a eșuat, extracția nu este sigură sau textul apare doar unind noduri fără separator între ele</td></tr>
        </tbody>
      </table>

      <p><code>ABSENT_FROM_RAW_HTML</code> descrie octeții capturați. Nu dovedește că textul lipsește din pagina randată și nici că un motor de căutare sau un sistem AI nu îl poate obține.</p>

      <blockquote><strong>AVL203-REQ-031 — Textele-cheie pentru TC-08 TREBUIE declarate în planul de măsurare înaintea rulării, iar căutarea lor TREBUIE să aplice regulile de normalizare înregistrate în manifestul rulării.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-032 — Rezultatul TC-08 TREBUIE raportat pentru fiecare text-cheie și fiecare zonă, cu locația potrivirii; un rezultat <code>ABSENT_FROM_RAW_HTML</code> NU TREBUIE prezentat drept absența textului din pagina randată sau drept imposibilitatea unui motor ori a unui sistem AI de a-l obține.</strong></blockquote>

      <h2>9. Ce înseamnă User-Agent Response Parity?</h2>

      <p><strong>Repetăm requestul GET cu același URL și aceiași parametri documentați, schimbând doar identitatea User-Agent declarată, apoi comparăm răspunsurile fără a pretinde că am autentificat crawlerul real.</strong></p>

      <p>Profilul de lucru cuprinde clientul implicit și reprezentanți pentru Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot și PerplexityBot. Șirurile User-Agent publicate de furnizori sunt șiruri complete care conțin tokenul produsului (de exemplu <code>… compatible; OAI-SearchBot/1.4; +https://openai.com/searchbot</code>), nu doar tokenul. Un test <code>curl --user-agent</code> nu poate simula infrastructura IP/WAF a furnizorului; exemplul de mai jos folosește doar tokenul și este orientativ.</p>

      <h3>Manifestul User-Agent</h3>

      <p>Șirurile folosite se îngheață într-un manifest versionat, separat de rulare, iar fiecare rulare înregistrează versiunea manifestului aplicat. Fiecare șir are un status:</p>

      <table>
        <thead>
          <tr><th>Status</th><th>Sens</th></tr>
        </thead>
        <tbody>
          <tr><td><code>OFICIAL</code></td><td>șir complet copiat din documentația furnizorului la data înghețării</td></tr>
          <tr><td><code>OFICIAL_CU_VERSIUNE_ALEASA</code></td><td>șir oficial care conține un placeholder de versiune (ex. versiunea Chrome din șirul Googlebot), înlocuit de operator și înregistrat în manifestul rulării</td></tr>
          <tr><td><code>DOAR_TOKEN</code></td><td>furnizorul nu publică un șir complet; se trimite doar tokenul</td></tr>
          <tr><td><code>NECONFIRMAT</code></td><td>șir complet care nu a putut fi citit dintr-o sursă oficială la data înghețării</td></tr>
        </tbody>
      </table>

      <p>La înghețarea manifestului v0.1.0 (2 octombrie 2026): OpenAI și Perplexity publică șiruri complete pentru <code>OAI-SearchBot</code> și <code>PerplexityBot</code>; Google publică șirul Googlebot cu placeholder de versiune Chrome; Anthropic descrie <code>Claude-SearchBot</code>, dar nu publică un șir complet; șirul complet <code>bingbot</code> nu a putut fi confirmat din pagina Bing (§19.6). O schimbare a manifestului înseamnă o versiune nouă a lui.</p>

      <blockquote><strong>AVL203-REQ-018 — Șirurile User-Agent folosite la TC-06 TREBUIE luate dintr-un manifest versionat, iar rularea TREBUIE să înregistreze versiunea manifestului aplicat.</strong></blockquote>

      <h3>Dubla captură a clientului de referință</h3>

      <p>Înaintea comparației între User-Agent-uri, același URL se capturează <strong>de cel puțin două ori cu clientul de referință</strong>, cu aceiași parametri. Comparația dintre aceste capturi stabilește <strong>variabilitatea intrinsecă</strong> a răspunsului:</p>

      <ul>
        <li>dacă capturile clientului de referință sunt identice (status, URL final, headere relevante, dimensiune și hash), diferențele observate pentru un User-Agent declarat pot fi raportate ca diferențe asociate acelei cereri;</li>
        <li>dacă diferă, răspunsul variază de la un request la altul (de exemplu prin conținut dinamic, timestampuri sau identificatori generați per request), iar diferențele de dimensiune sau hash dintre User-Agent-uri <strong>nu se atribuie User-Agent-ului</strong>. Se raportează doar diferențele de status, URL final și headere relevante.</li>
      </ul>

      <p>Dubla captură este obligatorie pentru TC-06. O rulare fără ea raportează comparația de conținut ca <code>UNKNOWN</code>.</p>

      <blockquote><strong>AVL203-REQ-019 — Pentru TC-06, fiecare URL TREBUIE capturat de cel puțin două ori cu clientul de referință, cu aceiași parametri; fără dubla captură, comparația de conținut TREBUIE raportată <code>UNKNOWN</code>.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-020 — Când capturile clientului de referință diferă, diferențele de dimensiune sau hash dintre User-Agent-uri NU TREBUIE atribuite User-Agent-ului.</strong></blockquote>

      <p>Variabilitatea poate afecta și statusul, URL-ul final sau headerele, de exemplu printr-o limitare a ratei de requesturi sau printr-un nod de CDN diferit. De aceea, comparația dintre cele două capturi de referință acoperă toate câmpurile comparate, nu doar dimensiunea și hash-ul.</p>

      <blockquote><strong>AVL203-REQ-045 — Când capturile clientului de referință diferă la status, URL final sau headere relevante, diferențele acestor câmpuri dintre User-Agent-uri NU TREBUIE atribuite User-Agent-ului.</strong></blockquote>

      <pre><code>curl --silent --show-error --location --compressed \
  --user-agent 'OAI-SearchBot' \
  --dump-header oai.headers --output oai.body \
  --write-out 'http_code=%{http_code}\nurl_effective=%{url_effective}\nsize_download=%{size_download}\n' \
  "$TARGET" &gt; oai.metrics</code></pre>

      <p>Se compară codurile, destinațiile, headerele relevante, dimensiunile și hash-urile, ținând cont de variabilitatea intrinsecă stabilită mai sus. O diferență de hash semnalează doar că octeții sunt diferiți. Ea poate proveni din timestampuri, din conținut dinamic sau din protecții anti-bot. Nu devine automat dovadă de cloaking și nici de inaccesibilitate efectivă pentru furnizor.</p>

      <blockquote><strong>AVL203-REQ-021 — O diferență între răspunsurile pentru User-Agent-uri declarate NU TREBUIE prezentată drept cloaking sau drept accesul efectiv al crawlerului furnizorului.</strong></blockquote>

      <h2>10. Cum conservăm și indexăm dovezile?</h2>

      <p><strong>Fiecare artefact brut se păstrează nealterat, este legat de un run ID și primește metadatele și controlul de integritate cerute de AVL-200.</strong></p>

      <p>Structură orientativă (schema AVL-200 are precedență):</p>

      <pre><code>run_&lt;ID&gt;/
  manifest/
  http/
  robots/
  sitemap/
  agents/
  evidence-index.*
  integrity/sha256sums.txt
  observations.*
  diagnostic.*          # numai când rularea stă la baza unui diagnostic (§12)
  exceptions.md</code></pre>

      <pre><code># Exemplu macOS; lista include manifestul rulării, dar nu și fișierul de checksum însuși.
find manifest http robots sitemap agents -type f -print0 | sort -z | xargs -0 shasum -a 256 &gt; integrity/sha256sums.txt
# Verificare ulterioară:
shasum -a 256 -c integrity/sha256sums.txt</code></pre>

      <p>Manifestul rulării (<code>manifest/</code>) intră în lista de checksum-uri, pentru că descrie condițiile capturii și trebuie protejat la fel ca artefactele. Fișierul <code>integrity/sha256sums.txt</code> nu se include în propria listă.</p>

      <blockquote><strong>AVL203-REQ-022 — Rularea TREBUIE să genereze un manifest de checksum SHA-256 care acoperă <code>manifest/</code> și artefactele brute, fără fișierul de checksum însuși, să îl verifice și să documenteze utilitarul folosit.</strong></blockquote>

      <p>Pe sisteme Linux, echivalentul uzual este <code>sha256sum</code>; scriptul trebuie să documenteze utilitarul efectiv folosit.</p>

      <p>Nu se rescrie un artefact brut pentru a obține un raport mai lizibil (AVL-200 §8.1). Câmpurile deterministe (dimensiune, hash, path) se calculează programatic; clasificările incerte sunt marcate ca atare și revizuite (AVL-200 §5, §16). Un hash verifică integritatea octeților <strong>după</strong> captură, nu autenticitatea sursei înaintea capturii (AVL-200 §10).</p>

      <blockquote><strong>AVL203-REQ-023 — Un artefact brut NU TREBUIE modificat după captură, iar fiecare artefact TREBUIE legat de run ID-ul rulării care l-a produs.</strong></blockquote>

      <h2>11. Cum se folosesc rezultatele între baseline și remăsurări?</h2>

      <p><strong>Aceeași versiune a protocolului și același set de URL-uri comparabile se folosesc la puncte de măsurare succesive, iar orice abatere se documentează explicit.</strong></p>

      <p>Manifestul identifică fiecare rulare prin poziția ei în seria de măsurare: <strong><code>T0</code></strong> este baseline-ul, iar rulările ulterioare sunt <strong><code>F1</code>, <code>F2</code> … <code>Fn</code></strong>, în ordinea executării. Eticheta unei rulări se atribuie la înregistrarea ei și nu se schimbă ulterior.</p>

      <blockquote><strong>AVL203-REQ-024 — Rulările aceleiași serii TREBUIE să folosească aceeași versiune a protocolului, același manifest User-Agent și același set de URL-uri; orice abatere TREBUIE documentată.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-025 — Eticheta unei rulări (<code>T0</code>, <code>F1</code> … <code>Fn</code> sau <code>TEST</code>) TREBUIE atribuită la înregistrare și NU TREBUIE schimbată ulterior.</strong></blockquote>

      <p>Rulările de probă (de exemplu, verificarea unei implementări sau a unui mediu nou) primesc eticheta <strong><code>TEST</code></strong>. Ele nu fac parte din nicio serie de măsurare, nu ocupă o poziție <code>T0</code>/<code>Fn</code> și nu se compară cu rulările unei serii. Dovezile lor se păstrează separat și nu susțin concluzii publicate. Când studii istorice folosesc altă nomenclatură, se păstrează numele istorice și se explică mapping-ul, fără redenumirea retroactivă a dovezilor (AVL-200 §7.3).</p>

      <blockquote><strong>AVL203-REQ-026 — O rulare <code>TEST</code> NU TREBUIE comparată cu rulările unei serii de măsurare și NU TREBUIE folosită pentru a susține o concluzie publicată.</strong></blockquote>

      <p>O schimbare a robots.txt, a canonicalului sau a răspunsului declarat pentru un agent reprezintă o observație tehnică. O schimbare concomitentă a mențiunilor ori a citărilor se măsoară separat. Succesiunea temporală singură nu demonstrează cauzalitatea.</p>

      <blockquote><strong>AVL203-REQ-027 — O schimbare tehnică observată NU TREBUIE prezentată drept cauză a unei schimbări de vizibilitate pe baza succesiunii temporale.</strong></blockquote>

      <h2>12. Cum trecem de la observații la diagnostic și recomandări?</h2>

      <p><strong>Diagnosticul și recomandările formează un strat separat de interpretare, construit peste observațiile <code>TC-*</code> după o grilă publică și versionată. Ele nu modifică observațiile și nu le înlocuiesc.</strong></p>

      <p>Protocolul este folosit și în evaluări care livrează un diagnostic și recomandări, de exemplu auditul AI Visibility. În acest caz, după captură și observație urmează interpretarea: ce problemă indică observațiile, cât de sigură este concluzia și ce poate face entitatea evaluată. Lanțul AVL-200 rămâne intact: interpretarea se sprijină pe observații, iar observațiile pe dovezi conservate (AVL-200 §3, §15).</p>

      <p>Grila care transformă observațiile în diagnostic este <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204</a>. Ea fixează dinainte, pentru fiecare zonă verificată, regulile de diagnostic, starea care rezultă și criteriile de prioritizare, și se aplică identic oricărei entități evaluate.</p>

      <h3>12.1. Stările diagnosticului</h3>

      <p>Fiecare constatare are una dintre următoarele stări:</p>

      <table>
        <thead>
          <tr><th>Stare</th><th>Sens</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Problemă confirmată</strong></td><td>observațiile arată direct problema, în condițiile testate</td></tr>
          <tr><td><strong>Problemă posibilă</strong></td><td>observațiile sunt compatibile cu o problemă, dar nu o pot confirma singure</td></tr>
          <tr><td><strong>Nu poate fi stabilit</strong></td><td>datele disponibile nu permit o concluzie</td></tr>
          <tr><td><strong>Nicio problemă observată</strong></td><td>în condițiile testate, observațiile nu indică o problemă după regulile grilei</td></tr>
        </tbody>
      </table>

      <p>„Nicio problemă observată” descrie condițiile testate. Nu certifică site-ul și nu garantează indexarea, citarea, menționarea sau recomandarea într-un răspuns AI.</p>

      <h3>12.2. Recomandările</h3>

      <p>Fiecare recomandare cuprinde patru elemente:</p>

      <ol>
        <li><strong>observația sau observațiile care o susțin</strong>, prin identificatorii lor din rulare;</li>
        <li><strong>gradul de certitudine</strong> al diagnosticului (starea din §12.1);</li>
        <li><strong>elementul asupra căruia poate interveni</strong> entitatea evaluată (de exemplu o regulă din <code>robots.txt</code>, un canonical, un redirect, conținutul livrat în HTML);</li>
        <li><strong>modul de verificare ulterioară</strong>, adică ce verificare <code>TC-*</code> ar arăta, la o remăsurare (<code>F1</code> … <code>Fn</code>), că intervenția a produs schimbarea tehnică urmărită.</li>
      </ol>

      <p>Recomandările se prioritizează după criteriile din AVL-204: impact potențial, efort, dependențe și posibilitatea verificării ulterioare. Prioritatea este o judecată de interpretare și se declară ca atare.</p>

      <p>O recomandare tehnică promite cel mult o schimbare tehnică verificabilă la remăsurare, nu un efect asupra vizibilității, citării sau recomandării într-un răspuns AI (§11).</p>

      <blockquote><strong>AVL203-REQ-033 — Diagnosticul și recomandările TREBUIE formulate într-un strat separat de observații, după o grilă de interpretare publicată și versionată, iar versiunea grilei TREBUIE înregistrată în manifestul rulării și în raport.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-034 — Fiecare constatare de diagnostic TREBUIE să aibă una dintre stările din §12.1 și TREBUIE să trimită la observațiile care o susțin.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-035 — Fiecare recomandare TREBUIE să cuprindă observația-suport, gradul de certitudine, elementul asupra căruia se poate interveni și modul de verificare ulterioară.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-036 — Grila de interpretare TREBUIE fixată înaintea rulării și aplicată identic tuturor entităților evaluate; o regulă modificată după observarea rezultatelor TREBUIE să producă o versiune nouă a grilei, iar rezultatele deja raportate NU TREBUIE reinterpretate fără declararea versiunii folosite.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-037 — Diagnosticul și recomandările NU TREBUIE să conțină afirmațiile excluse de AVL203-REQ-012, AVL203-REQ-015, AVL203-REQ-016, AVL203-REQ-021, AVL203-REQ-027 și AVL203-REQ-032 și NU TREBUIE să promită un efect asupra vizibilității, citării sau recomandării într-un răspuns AI.</strong></blockquote>

      <h2>13. Ce rămâne în afara protocolului minim?</h2>

      <p><strong>Core exclude implicit investigațiile de infrastructură și semantică profundă care nu sunt necesare fiecărei rulări AVL, dar permite extensii declarate când întrebarea de cercetare le cere.</strong></p>

      <p>Exemple de investigații separate: diagnostic DNS/TLS extins, Core Web Vitals și performanță, validare completă a sitemap-ului, crawlingul complet al site-ului și identificarea URL-urilor orfane, rendering JavaScript, validare integrală Schema.org și grafuri de entități, autentificarea efectivă a roboților prin loguri/IP, comportamentul avansat al WAF-urilor și accesibilitatea ARIA. <code>llms.txt</code> poate fi capturat experimental, dar nu este o condiție normativă de vizibilitate AI demonstrată.</p>

      <h3>13.1. Extensii declarate</h3>

      <p>Când entitatea evaluată oferă acces autorizat, evaluarea POATE fi completată cu date din afara protocolului minim: rapoarte din instrumente pentru webmasteri (de exemplu Google Search Console sau Bing Webmaster Tools), loguri de server sau configurații ale serviciilor CDN și WAF. Aceste date nu fac parte din Core și nu se compară cu rulări care nu le au.</p>

      <blockquote><strong>AVL203-REQ-038 — O extensie din afara protocolului minim TREBUIE declarată în planul de măsurare înaintea folosirii ei (sursa, perioada acoperită, modul de acces și cine a furnizat datele), iar dovezile ei TREBUIE marcate separat de artefactele <code>TC-*</code> și protejate conform AVL-200 §18 când nu sunt publice.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-039 — O constatare care se sprijină pe o extensie TREBUIE să indice extensia; absența unei extensii dintr-o rulare NU TREBUIE raportată drept absența problemei pe care extensia ar fi putut-o arăta.</strong></blockquote>

      <h2>14. Ce nu poate demonstra protocolul?</h2>

      <p><strong>Protocolul nu poate demonstra singur indexarea efectivă, selecția sursei, înțelegerea entității, citarea, menționarea sau recomandarea într-un răspuns AI.</strong></p>

      <p>Răspunsul <code>200</code> nu se prezintă drept indexare, iar un <code>403</code> pentru un User-Agent declarat nu se prezintă drept dovadă că întreaga infrastructură a furnizorului este blocată. Îmbunătățirile de vizibilitate nu se atribuie unei intervenții exclusiv pe baza co-ocurenței temporale. AVL-202 și AVL-200 (§15) determină limitele concluziilor, politica dovezilor și transparența incertitudinilor.</p>

      <h2>15. Ce trebuie să livreze o execuție conformă?</h2>

      <p><strong>O execuție trebuie să livreze dovezi brute, un index de artefacte, un set de observații tehnice verificabile și un manifest care permite repetarea procesului.</strong></p>

      <p>Livrabilele minime sunt: manifestul rulării (inclusiv versiunea manifestului User-Agent), răspunsurile și headerele colectate, codurile de ieșire <code>curl</code>, rezultatul verificărilor per element <code>TC-*</code> (inclusiv variabilitatea intrinsecă de la TC-06), clasificările <code>UNKNOWN</code>/<code>NOT_APPLICABLE</code>/erori păstrate distinct de <code>NO</code>, evidence index, hash-uri, excepții și versiunea protocolului/scriptului. Un rezumat interpretativ poate fi publicat separat doar dacă rămâne trasabil până la evidență. Schema exactă și identificatorii se validează față de AVL-200 și față de implementarea de referință.</p>

      <blockquote><strong>AVL203-REQ-028 — O execuție conformă TREBUIE să livreze toate livrabilele minime de mai sus.</strong></blockquote>

      <h3>15.1. Raportul unei evaluări cu diagnostic</h3>

      <p>Când rularea stă la baza unui diagnostic (§12), livrabilele de mai sus se completează cu un raport pentru entitatea evaluată. Raportul cuprinde: rezumatul constatărilor; planul de măsurare (URL-urile, motivul alegerii lor, textele-cheie și politica de acces intenționată); observațiile pe zone; diagnosticul pe zone, cu stările din §12.1; recomandările prioritizate; limitele evaluării (§14); trasabilitatea (run ID, eticheta rulării, versiunea protocolului, a grilei și a scriptului, hash-ul manifestului de checksum). Formatul raportului (document, PDF) nu este normat. Dovezile unei evaluări private nu devin publice prin acest protocol.</p>

      <blockquote><strong>AVL203-REQ-040 — Raportul unei evaluări cu diagnostic TREBUIE să separe vizibil observațiile, diagnosticul și recomandările, să includă limitele din §14 și să permită identificarea rulării, a versiunii protocolului, a versiunii grilei și a manifestului de checksum.</strong></blockquote>

      <h2>16. Checklist de conformitate</h2>

      <p>Fiecare rulare declarată conformă verifică explicit cerințele:</p>

      <ul>
        <li><strong>AVL203-REQ-001</strong> — Lista URL-urilor testate, motivul alegerii fiecăruia și limitele eșantionului TREBUIE declarate înaintea primului request al unei rulări din seria de măsurare.</li>
        <li><strong>AVL203-REQ-002</strong> — Rezultatele negative, erorile, redirecturile neașteptate, datele indisponibile și abaterile TREBUIE conservate și raportate.</li>
        <li><strong>AVL203-REQ-003</strong> — Absența unei dovezi NU TREBUIE raportată ca <code>NO</code>.</li>
        <li><strong>AVL203-REQ-004</strong> — Captura, indexarea, observația, măsurarea și interpretarea NU TREBUIE contopite într-o singură judecată automată.</li>
        <li><strong>AVL203-REQ-005</strong> — O modificare a definiției unei verificări <code>TC-*</code> care afectează comparabilitatea rezultatelor TREBUIE să producă o versiune nouă a protocolului.</li>
        <li><strong>AVL203-REQ-006</strong> — Înaintea primului request, rularea TREBUIE să înregistreze în manifest câmpurile minime de mai sus.</li>
        <li><strong>AVL203-REQ-007</strong> — Tokenurile, cookie-urile, credențialele și alte date sensibile NU TREBUIE publicate în evidența brută accesibilă publicului.</li>
        <li><strong>AVL203-REQ-008</strong> — Pentru fiecare request, rularea TREBUIE să păstreze separat headerele și corpul răspunsului și să înregistreze statusul, URL-ul final, numărul de redirecturi, tipul, dimensiunea și codul de ieșire al clientului HTTP.</li>
        <li><strong>AVL203-REQ-009</strong> — Când lanțul de redirecturi este urmărit, observațiile despre răspunsul final TREBUIE să se refere la blocul de headere al răspunsului final, identificat explicit.</li>
        <li><strong>AVL203-REQ-010</strong> — Erorile TLS sau DNS NU TREBUIE ascunse prin dezactivarea verificării certificatelor.</li>
        <li><strong>AVL203-REQ-011</strong> — Verificările TC-01, TC-02 și TC-06 TREBUIE făcute cu GET.</li>
        <li><strong>AVL203-REQ-012</strong> — Un răspuns <code>200</code> NU TREBUIE prezentat drept indexare, iar un <code>403</code> pentru un User-Agent declarat NU TREBUIE prezentat drept dovadă că infrastructura furnizorului este blocată.</li>
        <li><del><strong>AVL203-REQ-013</strong></del> — Retrasă în versiunea 0.4.0; înlocuită de AVL203-REQ-041.</li>
        <li><strong>AVL203-REQ-014</strong> — Statusul TC-04 TREBUIE atribuit după regula din tabelul de mai sus.</li>
        <li><strong>AVL203-REQ-015</strong> — Prezența sau accesibilitatea unui sitemap NU TREBUIE prezentată drept dovadă că întregul site este descoperibil.</li>
        <li><strong>AVL203-REQ-016</strong> — Semnalele TC-05 TREBUIE extrase din raw HTML-ul și headerele răspunsului final, cu locația originală, și NU TREBUIE prezentate drept DOM randat, canonical selectat de un motor sau validare Schema.org.</li>
        <li><strong>AVL203-REQ-017</strong> — Un semnal TC-05 a cărui extracție nu este sigură TREBUIE raportat <code>UNKNOWN</code>, cu motiv, și NU TREBUIE raportat <code>ABSENT</code>.</li>
        <li><strong>AVL203-REQ-018</strong> — Șirurile User-Agent folosite la TC-06 TREBUIE luate dintr-un manifest versionat, iar rularea TREBUIE să înregistreze versiunea manifestului aplicat.</li>
        <li><strong>AVL203-REQ-019</strong> — Pentru TC-06, fiecare URL TREBUIE capturat de cel puțin două ori cu clientul de referință, cu aceiași parametri.</li>
        <li><strong>AVL203-REQ-020</strong> — Când capturile clientului de referință diferă, diferențele de dimensiune sau hash dintre User-Agent-uri NU TREBUIE atribuite User-Agent-ului.</li>
        <li><strong>AVL203-REQ-021</strong> — O diferență între răspunsurile pentru User-Agent-uri declarate NU TREBUIE prezentată drept cloaking sau drept accesul efectiv al crawlerului furnizorului.</li>
        <li><strong>AVL203-REQ-022</strong> — Rularea TREBUIE să genereze un manifest de checksum SHA-256 care acoperă <code>manifest/</code> și artefactele brute, fără fișierul de checksum însuși, să îl verifice și să documenteze utilitarul folosit.</li>
        <li><strong>AVL203-REQ-023</strong> — Un artefact brut NU TREBUIE modificat după captură, iar fiecare artefact TREBUIE legat de run ID-ul rulării care l-a produs.</li>
        <li><strong>AVL203-REQ-024</strong> — Rulările aceleiași serii TREBUIE să folosească aceeași versiune a protocolului, același manifest User-Agent și același set de URL-uri.</li>
        <li><strong>AVL203-REQ-025</strong> — Eticheta unei rulări (<code>T0</code>, <code>F1</code> … <code>Fn</code> sau <code>TEST</code>) TREBUIE atribuită la înregistrare și NU TREBUIE schimbată ulterior.</li>
        <li><strong>AVL203-REQ-026</strong> — O rulare <code>TEST</code> NU TREBUIE comparată cu rulările unei serii de măsurare și NU TREBUIE folosită pentru a susține o concluzie publicată.</li>
        <li><strong>AVL203-REQ-027</strong> — O schimbare tehnică observată NU TREBUIE prezentată drept cauză a unei schimbări de vizibilitate pe baza succesiunii temporale.</li>
        <li><strong>AVL203-REQ-028</strong> — O execuție conformă TREBUIE să livreze toate livrabilele minime de mai sus.</li>
        <li><strong>AVL203-REQ-029</strong> — Planul de măsurare TREBUIE să declare tipul entității și să includă, pentru fiecare categorie obligatorie de pagină, fie URL-ul ales, fie motivul pentru care categoria nu se aplică.</li>
        <li><strong>AVL203-REQ-030</strong> — Compoziția eșantionului, textele-cheie pentru TC-08 și politica de acces intenționată TREBUIE fixate înaintea primului request și NU TREBUIE modificate după observarea rezultatelor.</li>
        <li><strong>AVL203-REQ-031</strong> — Textele-cheie pentru TC-08 TREBUIE declarate în plan înaintea rulării, iar căutarea TREBUIE să aplice regulile de normalizare înregistrate în manifest.</li>
        <li><strong>AVL203-REQ-032</strong> — Rezultatul TC-08 TREBUIE raportat pe text-cheie și pe zonă, cu locația; <code>ABSENT_FROM_RAW_HTML</code> NU TREBUIE prezentat drept absența din pagina randată sau imposibilitatea de a obține textul.</li>
        <li><strong>AVL203-REQ-033</strong> — Diagnosticul și recomandările TREBUIE formulate într-un strat separat, după o grilă publicată și versionată, cu versiunea grilei înregistrată.</li>
        <li><strong>AVL203-REQ-034</strong> — Fiecare constatare de diagnostic TREBUIE să aibă una dintre stările din §12.1 și să trimită la observațiile-suport.</li>
        <li><strong>AVL203-REQ-035</strong> — Fiecare recomandare TREBUIE să cuprindă observația-suport, gradul de certitudine, elementul de intervenție și modul de verificare ulterioară.</li>
        <li><strong>AVL203-REQ-036</strong> — Grila TREBUIE fixată înaintea rulării și aplicată identic tuturor entităților; o regulă modificată după rezultate TREBUIE să producă o versiune nouă.</li>
        <li><strong>AVL203-REQ-037</strong> — Diagnosticul și recomandările NU TREBUIE să conțină afirmațiile excluse de protocol și NU TREBUIE să promită un efect asupra vizibilității AI.</li>
        <li><strong>AVL203-REQ-038</strong> — O extensie din afara Core TREBUIE declarată în plan înaintea folosirii, cu dovezile marcate separat și protejate conform AVL-200 §18.</li>
        <li><strong>AVL203-REQ-039</strong> — O constatare bazată pe o extensie TREBUIE să o indice; absența extensiei NU TREBUIE raportată drept absența problemei.</li>
        <li><strong>AVL203-REQ-040</strong> — Raportul unei evaluări cu diagnostic TREBUIE să separe observațiile, diagnosticul și recomandările, să includă limitele și să permită identificarea rulării și a versiunilor.</li>
        <li><strong>AVL203-REQ-041</strong> — Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309, prin parser conform sau aplicare manuală documentată, cu metoda înregistrată; altfel <code>NEDETERMINAT</code>.</li>
        <li><strong>AVL203-REQ-042</strong> — Planul TREBUIE să includă pagina de contact sau de date de identitate, fără <code>NOT_APPLICABLE</code>; absența ei de pe site TREBUIE înregistrată și raportată.</li>
        <li><strong>AVL203-REQ-043</strong> — Rularea TREBUIE să privească o entitate evaluată ca proiect sau client, cu fișa entității completată de reprezentant; altfel nu se documentează ca rulare AVL-203.</li>
        <li><strong>AVL203-REQ-044</strong> — O captură eșuată din cauza unei erori de rețea, DNS sau timeout TREBUIE repetată o singură dată, cu ambele încercări păstrate.</li>
        <li><strong>AVL203-REQ-045</strong> — Diferențele de status, URL final sau headere NU TREBUIE atribuite User-Agent-ului când capturile clientului de referință diferă la aceste câmpuri.</li>
      </ul>

      <h2>17. Documente asociate</h2>

      <h3>Normative</h3>

      <ul>
        <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>.</li>
        <li><a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>.</li>
        <li><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>.</li>
        <li><a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</a> (fișa entității, §7).</li>
      </ul>

      <h3>Informative</h3>

      <ul>
        <li><a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204 — Grila de interpretare a verificării tehnice</a> (draft pentru revizuire).</li>
      </ul>

      <h3>Exemplu aplicat</h3>

      <ul>
        <li><a href="/lab/studii-de-caz/verificare-tehnica-delamatescu-ro">CS-002 — Verificarea AVL-203 a delamatescu.ro, punctul T0</a>: prima rulare <code>T0</code> pe un site real (26 octombrie 2026), cu exemple din dovezile brute pentru fiecare verificare <code>TC-00</code> … <code>TC-08</code>, ieșirea din terminal a instrumentului, diagnosticul după AVL-204 0.3.0, raportul pentru client și pachetul de dovezi. Studiul de caz ilustrează aplicarea protocolului; nu face parte din normă și nu modifică cerințele.</li>
      </ul>

      <h3>Standarde și referințe externe</h3>

      <p>Verificate la 1 octombrie 2026.</p>

      <ul>
        <li>IETF RFC 9309 — Robots Exclusion Protocol: <a href="https://www.rfc-editor.org/rfc/rfc9309" target="_blank" rel="noopener noreferrer">https://www.rfc-editor.org/rfc/rfc9309</a></li>
        <li>IETF RFC 9110 — HTTP Semantics: <a href="https://www.rfc-editor.org/rfc/rfc9110" target="_blank" rel="noopener noreferrer">https://www.rfc-editor.org/rfc/rfc9110</a></li>
        <li>Sitemaps XML Protocol: <a href="https://www.sitemaps.org/protocol.html" target="_blank" rel="noopener noreferrer">https://www.sitemaps.org/protocol.html</a></li>
        <li>Google — Consolidate duplicate URLs (canonicalizare): <a href="https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls" target="_blank" rel="noopener noreferrer">https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls</a></li>
        <li>Google — Robots meta tag și X-Robots-Tag: <a href="https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag" target="_blank" rel="noopener noreferrer">https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag</a></li>
        <li>Google — Common crawlers, inclusiv Google-Extended: <a href="https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers" target="_blank" rel="noopener noreferrer">https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers</a></li>
        <li>OpenAI — Overview of OpenAI crawlers: <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">https://developers.openai.com/api/docs/bots</a></li>
        <li>Anthropic — Does Anthropic crawl data from the web: <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler</a></li>
        <li>Perplexity — Perplexity crawlers: <a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">https://docs.perplexity.ai/docs/resources/perplexity-crawlers</a></li>
        <li>Bing — Which crawlers does Bing use: <a href="https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0" target="_blank" rel="noopener noreferrer">https://www.bing.com/webmasters/help/which-crawlers-does-bing-use-8c184ec0</a></li>
      </ul>

      <p>Referințele externe susțin terminologia tehnică și descrierea crawlerelor. Regulile protocolului rămân reguli proprii AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.</p>

      <h2>18. Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr><td>0.1.0</td><td>1 octombrie 2026</td><td>Draft pentru revizuire</td><td>Primul draft înregistrat. Definește setul minim de verificări <code>TC-00</code>–<code>TC-07</code>, poziționarea Evidence Capture Process înaintea lanțului AVL-200, convenția de etichetare a rulărilor (<code>T0</code> baseline, <code>F1</code> … <code>Fn</code> rulări ulterioare) și limitele protocolului. Identificator AVL-203 alocat din registru și confirmat de Alex Matescu; eticheta de lucru „AVL-TECH-001” retrasă. Slugul <code>/lab/metodologie/protocol-verificare-tehnica</code> confirmat. Afirmațiile despre RFC 9309, RFC 9110, Sitemaps, Google, OpenAI, Anthropic și Perplexity verificate la sursă la 1 octombrie 2026.</td></tr>
          <tr><td>0.2.0</td><td>2 octombrie 2026</td><td>Draft pentru revizuire</td><td>Revizie după prima implementare candidată și o rulare de test. TC-06: dubla captură a clientului de referință devine obligatorie, iar diferențele de dimensiune/hash nu se atribuie User-Agent-ului când răspunsul variază intrinsec (constatare din rularea de test: corpul paginii a diferit între două requesturi identice). Manifest User-Agent versionat, cu statusuri <code>OFICIAL</code> / <code>OFICIAL_CU_VERSIUNE_ALEASA</code> / <code>DOAR_TOKEN</code> / <code>NECONFIRMAT</code>, înghețat la v0.1.0 cu șiruri verificate la sursă la 2 octombrie 2026. TC-04: căile convenționale (<code>/sitemap.xml</code>, <code>/sitemap_index.xml</code>) și regula de atribuire a statusurilor. TC-05: variantele meta robots pentru <code>googlebot</code>/<code>bingbot</code> și validitatea sintactică JSON a blocurilor JSON-LD ca observații permise. Codul de ieșire <code>curl</code> înregistrat pentru fiecare request. Manifestul rulării inclus în checksum-uri. Eticheta <code>TEST</code> pentru rulări de probă din afara seriilor de măsurare. §18.4 și §18.6 actualizate. Publicat ca draft public la <code>/lab/metodologie/protocol-verificare-tehnica</code>; canonicalul devine definitiv; §17.2 actualizat.</td></tr>
          <tr><td>0.3.0</td><td>2 octombrie 2026</td><td>Draft pentru revizuire</td><td>Cerințele de conformitate formalizate: 28 de cerințe <code>AVL203-REQ-001</code> … <code>AVL203-REQ-028</code>, derivate din intenția normativă a versiunii 0.2.0, fără reguli noi. Declarația RFC 2119 / RFC 8174 din „Controlul documentului” înlocuiește nota despre intenția protocolului. Secțiune nouă „Checklist de conformitate” (§15); secțiunile următoare renumerotate (§16–§18). Decizia deschisă 3 actualizată.</td></tr>
          <tr><td>0.3.1</td><td>13 octombrie 2026</td><td>Draft pentru revizuire</td><td>PATCH: decizia deschisă 1 („Aliniarea corpusului la convenția T0/F1…Fn”) este închisă: AVL-200 §7 (v1.1.0) definește convenția și etapele denumite, iar AVL-001, AVL-202, AVL-101–105 și AVL-201 au fost aliniate la 13 octombrie 2026. Fără modificări ale cerințelor.</td></tr>
          <tr><td>0.4.0</td><td>23 octombrie 2026</td><td>Draft pentru revizuire</td><td>MINOR: protocolul acoperă și diagnosticul și recomandările, pentru că verificarea tehnică este folosită în evaluări care livrează recomandări. Secțiuni noi: §1.1 „Compoziția planului de măsurare” (număr variabil de URL-uri, categorii obligatorii de pagini, tipul entității, textele-cheie și politica de acces intenționată declarate dinainte); §8.1 verificarea nouă <code>TC-08</code> „Conținut important în HTML-ul brut”; §12 „Cum trecem de la observații la diagnostic și recomandări?” (stările diagnosticului, cele patru elemente ale unei recomandări, trimiterea la grila AVL-204); §13.1 „Extensii declarate” (instrumente pentru webmasteri, loguri, CDN/WAF cu acces autorizat); §15.1 „Raportul unei evaluări cu diagnostic”. Cerințe noi <code>AVL203-REQ-029</code> … <code>AVL203-REQ-040</code>. Decizii Alex Matescu, 23 octombrie 2026: (1) <code>AVL203-REQ-013</code> este retrasă — textul rămâne în §6 ca evidență a evoluției metodologiei, iar identificatorul nu se reutilizează; cerința nouă <code>AVL203-REQ-041</code> acceptă, pe lângă parserul conform, aplicarea manuală a RFC 9309 documentată pas cu pas, cu metoda înregistrată în observații (decizia deschisă 8 închisă); (2) pagina de contact sau o altă pagină cu datele de identitate ale entității devine obligatorie în planul de măsurare, fără <code>NOT_APPLICABLE</code> (<code>AVL203-REQ-042</code>). Celelalte cerințe 001–028 rămân neschimbate. Secțiunile 12–18 devin 13–19.</td></tr>
          <tr><td>0.5.0</td><td>25 octombrie 2026</td><td>Draft pentru revizuire</td><td>MINOR: revizie după prima implementare candidată completă (skill <code>verificare-tehnica-avl203</code>, v0.3.0) și o rulare <code>TEST</code>, cu propunerile aprobate de Alex Matescu la 25 octombrie 2026. §1: protocolul se aplică numai site-urilor entităților evaluate ca proiect sau client, cu fișa entității completată de reprezentant, nu concurenților și nici entităților din Market Discovery; o verificare din afara acestui domeniu nu se documentează ca rulare (<code>AVL203-REQ-043</code>). §1.1: politica de acces se preia din fișa entității („Politica crawlere”, AVL-201 §7), cu recomandarea laboratorului de acces total; planul declară limitele cererilor auxiliare. §5: repetarea unică a capturii la erori de rețea, DNS sau timeout (<code>AVL203-REQ-044</code>). §7: tabelul TC-04 completat (cazurile neacoperite trec la <code>UNKNOWN</code>; <code>FOUND_AT_CONVENTIONAL_PATH</code> cere un document XML; <code>robots.txt</code> cu <code>4xx</code> = fără declarații; fiecare sitemap raportat separat). §8.1: <code>&lt;title&gt;</code> intră la metadate; status nou <code>PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY</code> pentru textul aflat numai în scripturi non-JSON-LD, comentarii, <code>&lt;template&gt;</code> sau <code>&lt;noscript&gt;</code>; <code>ABSENT_FROM_RAW_HTML</code> exclude potrivirile din noduri unite. §9: variabilitatea referinței se aplică și statusului, URL-ului final și headerelor (<code>AVL203-REQ-045</code>). AVL-201 devine dependență normativă (fișa entității). Celelalte cerințe rămân neschimbate.</td></tr>
          <tr><td>0.6.0</td><td>26 octombrie 2026</td><td>Draft pentru revizuire</td><td>MINOR: deciziile Alex Matescu din 26 octombrie 2026, după prima rulare <code>T0</code>. §6: agenții de antrenare și de fetch pentru care fișa entității declară o politică intră în planul de măsurare; grila AVL-204 0.3.0 aplică zona Z2 crawlerelor de antrenare și raportează agenții de fetch numai ca observație (AVL204-REQ-018). §19.4: implementarea candidată v0.5.0 și prima rulare <code>T0</code>. §19.6: <code>Claude-SearchBot</code> rămâne <code>DOAR_TOKEN</code> (Anthropic nu publică șiruri complete, verificat la 26 octombrie 2026), iar regula pentru versiunea Chrome din șirul Googlebot e fixată; rămâne deschis doar șirul <code>bingbot</code>. Fără cerințe noi.</td></tr>
          <tr><td>0.6.1</td><td>28 octombrie 2026</td><td>Draft pentru revizuire</td><td>PATCH: §17 — subsecțiune nouă „Exemplu aplicat”, cu trimitere la studiul de caz CS-002 (prima rulare <code>T0</code>, delamatescu.ro); trimitere la același exemplu în „Controlul documentului”. Fără modificări ale cerințelor.</td></tr>
        </tbody>
      </table>

      <h2>19. Decizii deschise înainte de 1.0.0</h2>

      <ol>
        <li><strong>Aliniarea corpusului la convenția T0/F1…Fn.</strong> Închisă la 13 octombrie 2026: convenția din §11 este acum definită normativ în <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 §7</a> (v1.1.0), iar AVL-001 §17, AVL-202, AVL-101–105 și AVL-201 au fost aliniate.</li>
        <li><strong>Locul în corpus.</strong> De la publicarea ca draft public (2 octombrie 2026), AVL-202 menționează AVL-203 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor, cu statutul „Draft pentru revizuire”. Rămân de făcut la activare: actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001 §17.</li>
        <li><strong>Cerințe identificate.</strong> Formulate în v0.3.0 (2 octombrie 2026): 28 de cerințe <code>AVL203-REQ-001</code> … <code>AVL203-REQ-028</code>, derivate din intenția normativă deja existentă în text, fără reguli noi. Toate sunt la nivel TREBUIE / NU TREBUIE, cu o singură opțiune POATE (REQ-011). Rămâne de confirmat, la activare, setul final și nivelul fiecărei cerințe.</li>
        <li><strong>Implementarea de referință.</strong> Comenzile din document sunt exemple. Există o implementare candidată, versionată (skill-ul <code>verificare-tehnica-avl203</code> din repository, v0.5.0 din 26 octombrie 2026), cu teste automate pe un server local (redirecturi, erori TLS/DNS/timeout, robots.txt indisponibil, răspunsuri non-HTML, integritate), o rulare <code>TEST</code> și o rulare <code>T0</code> pe un singur origin. Validarea ca implementare de referință cere rulări pe mai multe origini și configurații reale, inclusiv protecții anti-bot. Statut: candidată, nevalidată.</li>
        <li><strong>Parserul robots.txt.</strong> De la versiunea 0.4.0, parserul nu mai este condiție pentru determinarea politicii: AVL203-REQ-041 acceptă și aplicarea manuală documentată. Implementarea candidată v0.3.0 conține un parser scris după RFC 9309, cu teste; validarea lui face parte din validarea implementării de referință (decizia 4).</li>
        <li><strong>Șirurile User-Agent.</strong> Manifestul v0.1.0 a fost înghețat la 2 octombrie 2026 (§9). Decizii din 26 octombrie 2026 (Alex Matescu): <code>Claude-SearchBot</code> rămâne <code>DOAR_TOKEN</code>, pentru că Anthropic nu publică șiruri User-Agent complete pentru crawlerele sale (pagina de suport Anthropic despre crawlere, verificată la 26 octombrie 2026); versiunea Chrome din șirul Googlebot este ultima versiune stabilă la data înghețării manifestului și se înregistrează în manifest. Rămâne deschisă confirmarea șirului complet <code>bingbot</code> dintr-o sursă oficială, la următorul manifest, cel târziu la activare.</li>
        <li><strong>Implementarea TC-08 și a diagnosticului.</strong> Introduse în v0.4.0. Implementarea candidată v0.3.0 acoperă <code>TC-08</code>, compoziția planului din §1.1 și stratul de diagnostic din §12; regulile de normalizare pentru <code>TC-08</code> sunt fixate în configurația ei versionată și se înregistrează în manifest. Rămâne de confirmat, la activare, setul final al regulilor de normalizare.</li>
        <li><strong>Aplicarea RFC 9309 fără parser.</strong> Închisă la 23 octombrie 2026 (decizie Alex Matescu): AVL203-REQ-013 este retrasă, iar AVL203-REQ-041 acceptă aplicarea manuală a RFC 9309, documentată pas cu pas, alături de parserul conform.</li>
      </ol>

      <p>Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.</p>

      <blockquote>
        <p><strong>Declarație finală</strong></p>
        <p>Un server răspunde unui request, nu unei întrebări despre vizibilitate.<br />
        AVL-203 documentează ce a răspuns serverul, în ce condiții și cu ce dovezi; restul rămâne de măsurat separat.</p>
      </blockquote>
`;
