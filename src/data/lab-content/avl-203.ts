export const avl203ProtocolVerificareTehnicaHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă · Draft pentru revizuire</p>
        <p class="avl-doc-title">AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</p>
        <p class="avl-doc-lead">Core Technical Web Measurement Protocol</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-203</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>0.3.0</td></tr>
        <tr><th scope="row">Statut</th><td>Draft pentru revizuire</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data creării</th><td>1 octombrie 2026</td></tr>
        <tr><th scope="row">Data publicării</th><td>2 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>2 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>1 octombrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica">https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica</a></td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, <a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>, <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a></td></tr>
        <tr><th scope="row">Relație cu AVL-201</th><td>componentă reutilizabilă la baseline și remăsurări; nu înlocuiește <a href="/lab/metodologie/tabula-rasa-f0">AVL-201</a></td></tr>
        </tbody>
        </table>
      </div>

      <blockquote><strong>Principiu:</strong> documentăm ceea ce livrează un server în condiții declarate; nu confundăm accesibilitatea tehnică cu indexarea, recuperarea informației, citarea, menționarea sau recomandarea de către un sistem AI.</blockquote>

      <h2>Controlul documentului</h2>

      <p>AVL-203 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation, propus ca protocol în ramura Core Methodology descrisă de AVL-202.</p>

      <p>Versiunea curentă, <strong>0.3.0</strong>, este un <strong>draft public pentru revizuire</strong> și nu este activă. Documentul este publicat pentru transparență, ca regula să fie vizibilă și datată înainte de activare. Cerințele de conformitate sunt formulate ca cerințe identificate <code>AVL203-REQ-*</code>; implementarea de referință nu este încă validată. Deciziile rămase deschise înainte de activare sunt enumerate în §18.</p>

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

      <blockquote><strong>AVL203-REQ-001 — Lista URL-urilor testate, motivul alegerii fiecăruia și limitele eșantionului TREBUIE declarate înaintea primului request al unei rulări din seria de măsurare.</strong></blockquote>

      <p>Protocolul conservă și rezultate negative, erori, redirecturi neașteptate, date indisponibile și abateri. Absența unei dovezi nu se transformă într-un <code>NO</code> nejustificat (AVL-200 §6).</p>

      <blockquote><strong>AVL203-REQ-002 — Rezultatele negative, erorile, redirecturile neașteptate, datele indisponibile și abaterile TREBUIE conservate și raportate.</strong></blockquote>

      <blockquote><strong>AVL203-REQ-003 — Absența unei dovezi NU TREBUIE raportată ca <code>NO</code>; o valoare care nu poate fi stabilită TREBUIE raportată ca <code>UNKNOWN</code>, <code>NOT_APPLICABLE</code> sau eroare, distinct de <code>NO</code>.</strong></blockquote>

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

      <p><strong>Nucleul măsoară identitatea rulării, accesibilitatea HTTP, redirecturile, regulile robots, descoperirea sitemap-ului, semnalele documentului, paritatea răspunsurilor declarate pentru User-Agent-uri și integritatea artefactelor.</strong></p>

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

      <p>Se documentează statusul, URL-ul efectiv, redirecturile, corpul și grupurile <code>User-agent</code>, <code>Allow</code>, <code>Disallow</code>, precum și declarațiile <code>Sitemap</code>. Interpretarea unei reguli pentru un URL cere aplicarea corectă a RFC 9309 și a extensiilor furnizorului: selecția grupului specific produsului înaintea grupului <code>*</code>, combinarea grupurilor care corespund aceluiași token și regula celei mai specifice potriviri între <code>Allow</code> și <code>Disallow</code> (RFC 9309 §2.2). <code>grep</code> este doar inspecție preliminară; dacă parserul complet lipsește, rezultatul politicii rămâne <code>NEDETERMINAT</code>, nu <code>ALLOW</code> implicit.</p>

      <blockquote><strong>AVL203-REQ-013 — Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309 (selecția grupului, combinarea grupurilor și cea mai specifică potrivire); în lipsa unui parser conform, rezultatul TREBUIE raportat <code>NEDETERMINAT</code>.</strong></blockquote>

      <p>Matricea Core urmărește politica relevantă pentru <code>*</code>, <code>Googlebot</code>, <code>bingbot</code>, <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code> și <code>PerplexityBot</code>. La data verificării acestui draft (1 octombrie 2026), documentația furnizorilor descrie <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code> și <code>PerplexityBot</code> drept crawlere asociate căutării sau afișării surselor, nu antrenării modelelor; rolul lor se reverifică la fiecare versiune a protocolului.</p>

      <p>Agenții pentru antrenarea modelelor (de exemplu <code>GPTBot</code>, <code>ClaudeBot</code>) și cei pentru fetch la cererea utilizatorului (de exemplu <code>ChatGPT-User</code>, <code>Claude-User</code>, <code>Perplexity-User</code>) sunt analize distincte, declanșate de întrebarea cercetării. Pentru agenții de tip user fetch, OpenAI și Perplexity declară că regulile robots.txt pot să nu se aplice sau sunt în general ignorate, iar Anthropic declară că și Claude-User respectă robots.txt; diferențele se documentează per furnizor, nu se generalizează. <code>Google-Extended</code> este token de control în robots.txt, nu User-Agent HTTP separat.</p>

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
          <tr><td><code>UNAVAILABLE</code></td><td>există sitemap declarat, dar niciunul nu răspunde <code>2xx</code>; sau, fără declarație, căile convenționale răspund cu erori de captură ori <code>5xx</code></td></tr>
          <tr><td><code>FOUND_AT_CONVENTIONAL_PATH</code></td><td>nicio declarație, dar <code>/sitemap.xml</code> sau <code>/sitemap_index.xml</code> răspunde <code>2xx</code></td></tr>
          <tr><td><code>NOT_FOUND</code></td><td>nicio declarație și toate căile convenționale răspund <code>404</code> sau <code>410</code></td></tr>
          <tr><td><code>UNKNOWN</code></td><td>robots.txt nu a putut fi capturat, deci prezența sau absența declarației nu poate fi stabilită</td></tr>
        </tbody>
      </table>

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

      <p>La înghețarea manifestului v0.1.0 (2 octombrie 2026): OpenAI și Perplexity publică șiruri complete pentru <code>OAI-SearchBot</code> și <code>PerplexityBot</code>; Google publică șirul Googlebot cu placeholder de versiune Chrome; Anthropic descrie <code>Claude-SearchBot</code>, dar nu publică un șir complet; șirul complet <code>bingbot</code> nu a putut fi confirmat din pagina Bing (§18.6). O schimbare a manifestului înseamnă o versiune nouă a lui.</p>

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

      <h2>12. Ce rămâne în afara protocolului minim?</h2>

      <p><strong>Core exclude implicit investigațiile de infrastructură și semantică profundă care nu sunt necesare fiecărei rulări AVL, dar permite extensii declarate când întrebarea de cercetare le cere.</strong></p>

      <p>Exemple de investigații separate: diagnostic DNS/TLS extins, Core Web Vitals și performanță, validare completă a sitemap-ului, crawlingul complet al site-ului și identificarea URL-urilor orfane, rendering JavaScript, validare integrală Schema.org și grafuri de entități, autentificarea efectivă a roboților prin loguri/IP, comportamentul avansat al WAF-urilor și accesibilitatea ARIA. <code>llms.txt</code> poate fi capturat experimental, dar nu este o condiție normativă de vizibilitate AI demonstrată.</p>

      <h2>13. Ce nu poate demonstra protocolul?</h2>

      <p><strong>Protocolul nu poate demonstra singur indexarea efectivă, selecția sursei, înțelegerea entității, citarea, menționarea sau recomandarea într-un răspuns AI.</strong></p>

      <p>Răspunsul <code>200</code> nu se prezintă drept indexare, iar un <code>403</code> pentru un User-Agent declarat nu se prezintă drept dovadă că întreaga infrastructură a furnizorului este blocată. Îmbunătățirile de vizibilitate nu se atribuie unei intervenții exclusiv pe baza co-ocurenței temporale. AVL-202 și AVL-200 (§15) determină limitele concluziilor, politica dovezilor și transparența incertitudinilor.</p>

      <h2>14. Ce trebuie să livreze o execuție conformă?</h2>

      <p><strong>O execuție trebuie să livreze dovezi brute, un index de artefacte, un set de observații tehnice verificabile și un manifest care permite repetarea procesului.</strong></p>

      <p>Livrabilele minime sunt: manifestul rulării (inclusiv versiunea manifestului User-Agent), răspunsurile și headerele colectate, codurile de ieșire <code>curl</code>, rezultatul verificărilor per element <code>TC-*</code> (inclusiv variabilitatea intrinsecă de la TC-06), clasificările <code>UNKNOWN</code>/<code>NOT_APPLICABLE</code>/erori păstrate distinct de <code>NO</code>, evidence index, hash-uri, excepții și versiunea protocolului/scriptului. Un rezumat interpretativ poate fi publicat separat doar dacă rămâne trasabil până la evidență. Schema exactă și identificatorii se validează față de AVL-200 și față de implementarea de referință.</p>

      <blockquote><strong>AVL203-REQ-028 — O execuție conformă TREBUIE să livreze toate livrabilele minime de mai sus.</strong></blockquote>

      <h2>15. Checklist de conformitate</h2>

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
        <li><strong>AVL203-REQ-013</strong> — Politica robots.txt aplicabilă unui crawler NU TREBUIE declarată fără aplicarea RFC 9309 (selecția grupului, combinarea grupurilor și cea mai specifică potrivire).</li>
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
      </ul>

      <h2>16. Documente asociate</h2>

      <h3>Normative</h3>

      <ul>
        <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>.</li>
        <li><a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>.</li>
        <li><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>.</li>
      </ul>

      <h3>Informative</h3>

      <ul>
        <li><a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</a>.</li>
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

      <h2>17. Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr><td>0.1.0</td><td>1 octombrie 2026</td><td>Draft pentru revizuire</td><td>Primul draft înregistrat. Definește setul minim de verificări <code>TC-00</code>–<code>TC-07</code>, poziționarea Evidence Capture Process înaintea lanțului AVL-200, convenția de etichetare a rulărilor (<code>T0</code> baseline, <code>F1</code> … <code>Fn</code> rulări ulterioare) și limitele protocolului. Identificator AVL-203 alocat din registru și confirmat de Alex Matescu; eticheta de lucru „AVL-TECH-001” retrasă. Slugul <code>/lab/metodologie/protocol-verificare-tehnica</code> confirmat. Afirmațiile despre RFC 9309, RFC 9110, Sitemaps, Google, OpenAI, Anthropic și Perplexity verificate la sursă la 1 octombrie 2026.</td></tr>
          <tr><td>0.2.0</td><td>2 octombrie 2026</td><td>Draft pentru revizuire</td><td>Revizie după prima implementare candidată și o rulare de test. TC-06: dubla captură a clientului de referință devine obligatorie, iar diferențele de dimensiune/hash nu se atribuie User-Agent-ului când răspunsul variază intrinsec (constatare din rularea de test: corpul paginii a diferit între două requesturi identice). Manifest User-Agent versionat, cu statusuri <code>OFICIAL</code> / <code>OFICIAL_CU_VERSIUNE_ALEASA</code> / <code>DOAR_TOKEN</code> / <code>NECONFIRMAT</code>, înghețat la v0.1.0 cu șiruri verificate la sursă la 2 octombrie 2026. TC-04: căile convenționale (<code>/sitemap.xml</code>, <code>/sitemap_index.xml</code>) și regula de atribuire a statusurilor. TC-05: variantele meta robots pentru <code>googlebot</code>/<code>bingbot</code> și validitatea sintactică JSON a blocurilor JSON-LD ca observații permise. Codul de ieșire <code>curl</code> înregistrat pentru fiecare request. Manifestul rulării inclus în checksum-uri. Eticheta <code>TEST</code> pentru rulări de probă din afara seriilor de măsurare. §18.4 și §18.6 actualizate. Publicat ca draft public la <code>/lab/metodologie/protocol-verificare-tehnica</code>; canonicalul devine definitiv; §17.2 actualizat.</td></tr>
          <tr><td>0.3.0</td><td>2 octombrie 2026</td><td>Draft pentru revizuire</td><td>Cerințele de conformitate formalizate: 28 de cerințe <code>AVL203-REQ-001</code> … <code>AVL203-REQ-028</code>, derivate din intenția normativă a versiunii 0.2.0, fără reguli noi. Declarația RFC 2119 / RFC 8174 din „Controlul documentului” înlocuiește nota despre intenția protocolului. Secțiune nouă „Checklist de conformitate” (§15); secțiunile următoare renumerotate (§16–§18). Decizia deschisă 3 actualizată.</td></tr>
        </tbody>
      </table>

      <h2>18. Decizii deschise înainte de 1.0.0</h2>

      <ol>
        <li><strong>Aliniarea corpusului la convenția T0/F1…Fn.</strong> Convenția din §11 (decizie Alex Matescu, 1 octombrie 2026) contrazice versiunea publicată a AVL-200 §7 și AVL-001 §17, unde <code>F0–F3</code> sunt faze metodologice și <code>T0, T1…</code> puncte de măsurare. AVL-200 și AVL-001 trebuie actualizate, ca pas separat, înainte de activarea acestui document.</li>
        <li><strong>Locul în corpus.</strong> De la publicarea ca draft public (2 octombrie 2026), AVL-202 menționează AVL-203 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor, cu statutul „Draft pentru revizuire”. Rămân de făcut la activare: actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001 §17.</li>
        <li><strong>Cerințe identificate.</strong> Formulate în v0.3.0 (2 octombrie 2026): 28 de cerințe <code>AVL203-REQ-001</code> … <code>AVL203-REQ-028</code>, derivate din intenția normativă deja existentă în text, fără reguli noi. Toate sunt la nivel TREBUIE / NU TREBUIE, cu o singură opțiune POATE (REQ-011). Rămâne de confirmat, la activare, setul final și nivelul fiecărei cerințe.</li>
        <li><strong>Implementarea de referință.</strong> Comenzile din document sunt exemple. Există o implementare candidată, versionată (skill-ul <code>verificare-tehnica-avl203</code> din repository, script v0.2.0), rulată la 2 octombrie 2026 într-o rulare <code>TEST</code> pe un singur origin (macOS, curl 8.7.1). Validarea ca implementare de referință cere rulări pe mai multe origini și configurații (redirecturi, erori TLS/DNS, robots.txt indisponibil, răspunsuri non-HTML, protecții anti-bot) și teste ale analizorului. Statut: candidată, nevalidată.</li>
        <li><strong>Parserul robots.txt.</strong> Trebuie ales sau scris un parser conform RFC 9309 (selecția grupurilor, combinarea lor, cea mai specifică potrivire), altfel <code>TC-03</code> rămâne limitat la <code>NEDETERMINAT</code>.</li>
        <li><strong>Șirurile User-Agent.</strong> Manifestul v0.1.0 a fost înghețat la 2 octombrie 2026 (§9). Rămân deschise: confirmarea șirului complet <code>bingbot</code> dintr-o sursă oficială, tratamentul <code>Claude-SearchBot</code> (doar token, cât timp Anthropic nu publică un șir complet) și regula de alegere a versiunii Chrome din șirul Googlebot.</li>
      </ol>

      <p>Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.</p>

      <blockquote>
        <p><strong>Declarație finală</strong></p>
        <p>Un server răspunde unui request, nu unei întrebări despre vizibilitate.<br />
        AVL-203 documentează ce a răspuns serverul, în ce condiții și cu ce dovezi; restul rămâne de măsurat separat.</p>
      </blockquote>
`;
