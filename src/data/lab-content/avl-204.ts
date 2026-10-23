export const avl204GrilaInterpretareVerificareTehnicaHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă · Draft pentru revizuire</p>
        <p class="avl-doc-title">AVL-204 — Grila de interpretare a verificării tehnice</p>
        <p class="avl-doc-lead">Technical Diagnostic Interpretation Grid</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-204</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>0.1.0</td></tr>
        <tr><th scope="row">Statut</th><td>Draft pentru revizuire</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data creării</th><td>22 octombrie 2026</td></tr>
        <tr><th scope="row">Data publicării</th><td>23 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>23 octombrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica">https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica</a></td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, <a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>, <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>, <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</a></td></tr>
        <tr><th scope="row">Tip de versiune în sensul AVL-200</th><td>Measurement Rule Version (<a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200</a> §13.1, §19.3)</td></tr>
        </tbody>
        </table>
      </div>

      <blockquote><strong>Principiu:</strong> aceeași observație primește același diagnostic, indiferent a cui este site-ul. Regulile se publică și se fixează înainte de rulare, ca diagnosticul să poată fi verificat și să nu poată fi ajustat după rezultat.</blockquote>

      <h2>Controlul documentului</h2>

      <p>AVL-204 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation. Definește regulile prin care observațiile produse de <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203</a> devin diagnostic și recomandări (AVL-203 §12).</p>

      <p>Versiunea curentă, <strong>0.1.0</strong>, este un <strong>draft pentru revizuire</strong> și nu este activă. Regulile de diagnostic din §6 și criteriile de prioritizare din §7 sunt propuneri de lucru; deciziile rămase deschise înainte de activare sunt enumerate în §15.</p>

      <p>Identificatorul AVL-204 a fost alocat la 22 octombrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut, și confirmat de Alex Matescu.</p>

      <p>În acest document, termenii <strong>TREBUIE</strong>, <strong>NU TREBUIE</strong>, <strong>ESTE OBLIGATORIU</strong>, <strong>AR TREBUI</strong>, <strong>NU AR TREBUI</strong> și <strong>POATE</strong> sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:</p>

      <ul>
        <li><strong>TREBUIE / NU TREBUIE</strong> — condiție obligatorie pentru conformitate;</li>
        <li><strong>AR TREBUI / NU AR TREBUI</strong> — recomandare puternică; abaterea este permisă numai cu justificare documentată;</li>
        <li><strong>POATE</strong> — opțiune permisă.</li>
      </ul>

      <p>În afara propozițiilor normative și a cerințelor identificate <code>AVL204-REQ-*</code>, acești termeni nu trebuie interpretați automat ca cerințe de conformitate. Cât timp documentul are statutul „Draft pentru revizuire”, regulile descriu grila propusă pentru versiunea 1.0.0.</p>

      <h2>1. Care este scopul grilei?</h2>

      <p><strong>Grila stabilește, înainte de orice rulare, cum devin observațiile tehnice diagnostic și cum se ordonează recomandările.</strong></p>

      <p>AVL-203 documentează ce a livrat un server. O evaluare care livrează recomandări, de exemplu auditul AI Visibility, are nevoie și de un pas următor: ce înseamnă observațiile, cât de sigură este concluzia și ce merită făcut întâi. Fără reguli publice, acest pas ar depinde de judecata celui care scrie raportul în ziua respectivă.</p>

      <p>Grila are trei roluri:</p>

      <ol>
        <li><strong>transparență</strong> — oricine poate verifica de ce o observație a primit un anumit diagnostic;</li>
        <li><strong>consecvență</strong> — aceeași observație primește același diagnostic de la o evaluare la alta și de la o entitate la alta;</li>
        <li><strong>imparțialitate</strong> — regulile nu favorizează nicio entitate evaluată: nici clientul, nici un concurent, nici site-ul laboratorului.</li>
      </ol>

      <h2>2. Ce acoperă și ce nu acoperă grila?</h2>

      <p><strong>Grila interpretează exclusiv observațiile produse conform AVL-203; nu măsoară vizibilitatea AI și nu înlocuiește un audit SEO complet.</strong></p>

      <p>Grila acoperă: stările diagnosticului, zonele verificate, regulile care leagă observațiile de stări, prioritizarea recomandărilor, afirmațiile excluse și regulile de aplicare identică.</p>

      <p>Grila nu acoperă: interogările către sisteme AI, clasificarea răspunsurilor (menționare, citare, recomandare), identitatea entității în surse externe, performanța, securitatea sau investigațiile din afara protocolului minim (AVL-203 §13). Pentru o extensie declarată (AVL-203 §13.1), regulile ei de interpretare se declară separat, înainte de folosire.</p>

      <blockquote><strong>AVL204-REQ-001 — Grila TREBUIE aplicată numai observațiilor produse conform AVL-203 dintr-o rulare a cărei integritate (TC-07) a fost verificată.</strong></blockquote>

      <h2>3. Principii de aplicare</h2>

      <p><strong>Diagnosticul este conservator: când o regulă nu poate fi aplicată sigur, rezultatul coboară spre „problemă posibilă” sau „nu poate fi stabilit”, niciodată spre „problemă confirmată”.</strong></p>

      <ul>
        <li><strong>Observația înaintea diagnosticului.</strong> Fiecare constatare trimite la observațiile care o susțin; o constatare fără observație-suport nu se raportează.</li>
        <li><strong>Regula înaintea rezultatului.</strong> Fiecare constatare indică regula din §6 care a produs-o, prin identificatorul ei.</li>
        <li><strong>Intenția entității contează.</strong> O restricție care corespunde politicii de acces declarate de entitate în planul de măsurare (AVL-203 §1.1) nu este o problemă.</li>
        <li><strong>Necunoscutul rămâne vizibil.</strong> O constatare „nu poate fi stabilit” se raportează explicit; nu dispare sub o zonă marcată „nicio problemă observată”.</li>
      </ul>

      <blockquote><strong>AVL204-REQ-002 — Fiecare constatare TREBUIE să indice zona, starea, identificatorul regulii aplicate și observațiile care o susțin.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-003 — Când o regulă nu poate fi aplicată sigur, constatarea NU TREBUIE să primească starea „problemă confirmată”.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-004 — O restricție de acces care corespunde politicii declarate de entitate în planul de măsurare NU TREBUIE raportată drept problemă.</strong></blockquote>

      <h2>4. Stările diagnosticului</h2>

      <p><strong>Grila folosește cele patru stări definite de AVL-203 §12.1, ordonate după severitate.</strong></p>

      <table>
        <thead>
          <tr><th>Ordine</th><th>Stare</th><th>Sens</th></tr>
        </thead>
        <tbody>
          <tr><td>1</td><td><strong>Problemă confirmată</strong></td><td>observațiile arată direct problema, în condițiile testate</td></tr>
          <tr><td>2</td><td><strong>Problemă posibilă</strong></td><td>observațiile sunt compatibile cu o problemă, dar nu o pot confirma singure</td></tr>
          <tr><td>3</td><td><strong>Nu poate fi stabilit</strong></td><td>datele disponibile nu permit o concluzie</td></tr>
          <tr><td>4</td><td><strong>Nicio problemă observată</strong></td><td>în condițiile testate, observațiile nu indică o problemă după regulile grilei</td></tr>
        </tbody>
      </table>

      <p>Starea unei zone este starea cea mai severă dintre constatările ei, după ordinea de mai sus. Constatările „nu poate fi stabilit” se raportează separat chiar și atunci când zona are o stare mai severă.</p>

      <p>„Nicio problemă observată” descrie condițiile testate. Nu certifică site-ul și nu garantează indexarea, citarea, menționarea sau recomandarea într-un răspuns AI.</p>

      <blockquote><strong>AVL204-REQ-005 — Starea unei zone TREBUIE să fie starea cea mai severă dintre constatările ei, iar constatările „nu poate fi stabilit” TREBUIE raportate separat.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-006 — Starea „nicio problemă observată” NU TREBUIE prezentată drept certificare a site-ului sau drept garanție de indexare, citare, menționare ori recomandare.</strong></blockquote>

      <h2>5. Zonele de diagnostic</h2>

      <p><strong>Verificările AVL-203 se grupează în șase zone de diagnostic, fiecare legată de categoriile folosite în raport.</strong></p>

      <table>
        <thead>
          <tr><th>Zonă</th><th>Denumire în raport</th><th>Verificări AVL-203</th><th>Categorie de problemă</th></tr>
        </thead>
        <tbody>
          <tr><td><code>Z1</code></td><td>Răspunsul site-ului și adresa oficială</td><td>TC-01, TC-02</td><td>acces</td></tr>
          <tr><td><code>Z2</code></td><td>Regulile pentru crawlere</td><td>TC-03</td><td>acces</td></tr>
          <tr><td><code>Z3</code></td><td>Descoperirea prin sitemap</td><td>TC-04</td><td>descoperire</td></tr>
          <tr><td><code>Z4</code></td><td>Semnalele paginilor</td><td>TC-05</td><td>identitate și descoperire</td></tr>
          <tr><td><code>Z5</code></td><td>Conținutul livrat în HTML</td><td>TC-08</td><td>conținut</td></tr>
          <tr><td><code>Z6</code></td><td>Răspunsurile pentru crawlere declarate</td><td>TC-06</td><td>acces</td></tr>
        </tbody>
      </table>

      <p><code>TC-00</code> (contextul rulării) și <code>TC-07</code> (integritatea) sunt condiții de validitate, nu zone. Dacă manifestul rulării lipsește sau verificarea checksum-urilor eșuează pentru un artefact, constatările care depind de acel artefact primesc starea „nu poate fi stabilit” (regula <code>R-VAL-01</code>).</p>

      <h2>6. Regulile de diagnostic</h2>

      <p><strong>Fiecare regulă leagă o observație AVL-203 de o stare. Regulile se aplică pentru fiecare URL din plan; o regulă care nu se potrivește niciunei observații nu produce constatare.</strong></p>

      <h3>6.1. Validitate</h3>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-VAL-01</code></td><td>manifestul rulării lipsește sau verificarea checksum-urilor eșuează pentru artefactele folosite</td><td>nu poate fi stabilit</td></tr>
        </tbody>
      </table>

      <h3>6.2. Z1 — Răspunsul site-ului și adresa oficială</h3>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z1-01</code></td><td>URL-ul din plan răspunde, după redirecturi, cu un cod <code>4xx</code> sau <code>5xx</code></td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z1-02</code></td><td>captura eșuează cu eroare TLS sau de certificat</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z1-03</code></td><td>variantele <code>http</code>/<code>https</code> și <code>www</code>/fără <code>www</code> relevante ajung la destinații finale diferite</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z1-04</code></td><td>URL-ul final diferă de URL-ul din plan fără ca redirectul să fie declarat intenționat în plan</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z1-05</code></td><td>lanțul de redirecturi are mai mult de un redirect până la URL-ul final</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z1-06</code></td><td>o variantă <code>http</code> răspunde direct <code>2xx</code>, fără redirect spre <code>https</code></td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z1-07</code></td><td>captura eșuează cu eroare de rețea sau DNS o singură dată, fără confirmare la o captură repetată</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z1-08</code></td><td>URL-ul răspunde <code>2xx</code> cu cel mult un redirect, iar variantele converg</td><td>nicio problemă observată</td></tr>
        </tbody>
      </table>

      <h3>6.3. Z2 — Regulile pentru crawlere</h3>

      <p>Regulile <code>R-Z2-01</code> și <code>R-Z2-05</code> se aplică numai după determinarea politicii robots.txt conform RFC 9309 (selecția grupului, combinarea grupurilor, potrivirea cea mai specifică), printr-un parser conform sau prin aplicare manuală documentată pas cu pas, cum cere AVL203-REQ-041. Constatarea indică metoda folosită. Fără această determinare se aplică <code>R-Z2-06</code>.</p>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z2-01</code></td><td>regula aplicabilă blochează un URL din plan pentru un crawler din matricea Core (AVL-203 §6), contrar politicii de acces declarate</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z2-02</code></td><td><code>robots.txt</code> răspunde <code>5xx</code> sau nu poate fi obținut din cauza unei erori de rețea</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z2-03</code></td><td><code>robots.txt</code> este redirecționat către alt host sau conține linii care nu pot fi interpretate</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z2-04</code></td><td><code>robots.txt</code> răspunde <code>4xx</code></td><td>nicio problemă observată</td></tr>
          <tr><td><code>R-Z2-05</code></td><td>nicio regulă aplicabilă nu blochează URL-urile din plan pentru crawlerele Core, sau blocările corespund politicii declarate</td><td>nicio problemă observată</td></tr>
          <tr><td><code>R-Z2-06</code></td><td>politica aplicabilă nu a putut fi determinată conform RFC 9309</td><td>nu poate fi stabilit</td></tr>
        </tbody>
      </table>

      <p>Justificarea pentru <code>R-Z2-02</code> și <code>R-Z2-04</code>: RFC 9309 §2.3.1.4 cere crawlerului să considere tot site-ul interzis când <code>robots.txt</code> răspunde cu o eroare de server (<code>5xx</code>) sau nu poate fi accesat din cauza rețelei; RFC 9309 §2.3.1.3 îi permite să acceseze orice resursă când fișierul răspunde <code>4xx</code>. Comportamentul efectiv al fiecărui furnizor nu este verificat de această grilă.</p>

      <h3>6.4. Z3 — Descoperirea prin sitemap</h3>

      <p>Regulile folosesc statusurile TC-04 din AVL-203 §7.</p>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z3-01</code></td><td>status <code>UNAVAILABLE</code></td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z3-02</code></td><td>status <code>FOUND_AT_CONVENTIONAL_PATH</code> (sitemap existent, dar nedeclarat în <code>robots.txt</code>)</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z3-03</code></td><td>status <code>NOT_FOUND</code></td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z3-04</code></td><td>status <code>UNKNOWN</code></td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z3-05</code></td><td>status <code>DECLARED</code></td><td>nicio problemă observată</td></tr>
        </tbody>
      </table>

      <h3>6.5. Z4 — Semnalele paginilor</h3>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z4-01</code></td><td>meta robots sau <code>X-Robots-Tag</code> conține <code>noindex</code> ori <code>none</code> pentru un URL pe care politica declarată îl vrea indexat</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z4-02</code></td><td>canonicalul declarat trimite la un URL care, capturat, nu răspunde <code>2xx</code></td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z4-03</code></td><td>un bloc JSON-LD nu este JSON valid sintactic</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z4-04</code></td><td>pagina nu are <code>&lt;title&gt;</code> sau are un <code>&lt;title&gt;</code> gol</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z4-05</code></td><td>canonicalul declarat trimite la alt URL decât URL-ul final, fără ca asta să fie declarat intenționat în plan</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z4-06</code></td><td>pagina canonică despre entitate (AVL-203 §1.1) nu conține niciun bloc JSON-LD</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z4-07</code></td><td><code>&lt;html lang&gt;</code> lipsește</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z4-08</code></td><td>un semnal are valoarea <code>UNKNOWN</code> la extracție</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z4-09</code></td><td>niciuna dintre condițiile de mai sus nu se aplică</td><td>nicio problemă observată</td></tr>
        </tbody>
      </table>

      <p>Aceste reguli descriu semnalele declarate în HTML-ul brut. Ele nu evaluează canonicalul selectat de un motor și nu validează vocabularul Schema.org (AVL203-REQ-016).</p>

      <h3>6.6. Z5 — Conținutul livrat în HTML</h3>

      <p>Regulile folosesc statusurile TC-08 din AVL-203 §8.1, pentru fiecare text-cheie declarat în plan.</p>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z5-01</code></td><td>un text-cheie are statusul <code>ABSENT_FROM_RAW_HTML</code></td><td>problemă confirmată (în HTML-ul brut)</td></tr>
          <tr><td><code>R-Z5-02</code></td><td>un text-cheie are statusul <code>PRESENT_IN_METADATA_ONLY</code></td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z5-03</code></td><td>un text-cheie are statusul <code>UNKNOWN</code></td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z5-04</code></td><td>toate textele-cheie au statusul <code>PRESENT_IN_BODY</code></td><td>nicio problemă observată</td></tr>
        </tbody>
      </table>

      <p>Problema confirmată de <code>R-Z5-01</code> este absența textului din HTML-ul brut. Efectul asupra unui crawler anume rămâne o problemă posibilă și se formulează ca atare (AVL203-REQ-032).</p>

      <h3>6.7. Z6 — Răspunsurile pentru crawlere declarate</h3>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z6-01</code></td><td>pentru un User-Agent declarat, statusul HTTP sau URL-ul final diferă de cele ale clientului de referință</td><td>problemă confirmată (răspuns diferit pentru User-Agent-ul declarat)</td></tr>
          <tr><td><code>R-Z6-02</code></td><td>pentru un User-Agent declarat, headerele relevante diferă (de exemplu <code>X-Robots-Tag</code>, <code>Content-Type</code>)</td><td>problemă confirmată (răspuns diferit pentru User-Agent-ul declarat)</td></tr>
          <tr><td><code>R-Z6-03</code></td><td>dimensiunea sau hash-ul diferă, iar capturile clientului de referință nu au arătat variabilitate intrinsecă</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z6-04</code></td><td>capturile clientului de referință arată variabilitate intrinsecă: comparația de conținut</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z6-05</code></td><td>status, URL final și headere relevante identice pentru toți User-Agent-ii declarați, iar conținutul identic sau neevaluabil conform <code>R-Z6-04</code></td><td>nicio problemă observată (pentru status, URL și headere)</td></tr>
        </tbody>
      </table>

      <p><code>R-Z6-01</code> și <code>R-Z6-02</code> confirmă că serverul răspunde diferit la un User-Agent declarat. Nu confirmă că infrastructura furnizorului este blocată și nici cloaking (AVL203-REQ-012, AVL203-REQ-021).</p>

      <blockquote><strong>AVL204-REQ-007 — Diagnosticul TREBUIE produs prin regulile din §6, iar fiecare constatare TREBUIE să citeze identificatorul regulii aplicate.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-008 — Regulile zonei Z2 care depind de politica aplicabilă (<code>R-Z2-01</code>, <code>R-Z2-05</code>) TREBUIE aplicate numai după determinarea politicii robots.txt conform RFC 9309, prin parser conform sau aplicare manuală documentată (AVL203-REQ-041); altfel TREBUIE aplicată regula <code>R-Z2-06</code>.</strong></blockquote>

      <h2>7. Prioritizarea recomandărilor</h2>

      <p><strong>Fiecare recomandare primește o prioritate din patru criterii publice; prioritatea este interpretare și se declară ca atare.</strong></p>

      <table>
        <thead>
          <tr><th>Criteriu</th><th>Mic</th><th>Mediu</th><th>Mare</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Impact potențial</strong></td><td>afectează un URL secundar din plan</td><td>afectează mai multe URL-uri sau pagina canonică despre entitate</td><td>afectează pagina principală, tot originul sau toate crawlerele Core</td></tr>
          <tr><td><strong>Efort</strong> (estimare)</td><td>o modificare de configurare sau de conținut punctuală</td><td>modificări pe mai multe pagini sau șabloane</td><td>modificări de arhitectură, platformă sau infrastructură</td></tr>
          <tr><td><strong>Dependențe</strong></td><td>niciuna</td><td>depinde de o altă recomandare</td><td>depinde de terți (furnizor de hosting, CDN, platformă)</td></tr>
          <tr><td><strong>Verificabilitate</strong></td><td>nu poate fi verificată cu AVL-203</td><td>poate fi verificată parțial</td><td>poate fi verificată integral cu o verificare <code>TC-*</code> la remăsurare</td></tr>
        </tbody>
      </table>

      <p>Clasele de prioritate:</p>

      <ul>
        <li><strong>P1</strong> — problemă confirmată în zonele Z1, Z2 sau Z6, cu impact potențial mare;</li>
        <li><strong>P2</strong> — orice altă problemă confirmată, plus problemele posibile cu impact potențial mare;</li>
        <li><strong>P3</strong> — celelalte probleme posibile.</li>
      </ul>

      <p>Constatările „nu poate fi stabilit” nu primesc o clasă de prioritate; pentru ele, recomandarea este o verificare suplimentară (de exemplu o captură repetată sau o extensie declarată). În aceeași clasă, recomandările se ordonează după efort crescător și dependențe.</p>

      <p>Efortul este o estimare a celui care redactează raportul; entitatea evaluată îl poate corecta.</p>

      <blockquote><strong>AVL204-REQ-009 — Fiecare recomandare TREBUIE să primească o clasă de prioritate după regulile din §7, iar estimarea efortului TREBUIE declarată ca estimare.</strong></blockquote>

      <h2>8. Afirmații excluse</h2>

      <p><strong>Diagnosticul și recomandările nu conțin afirmații pe care observațiile AVL-203 nu le pot susține.</strong></p>

      <table>
        <thead>
          <tr><th>Formulare exclusă</th><th>Formulare permisă</th></tr>
        </thead>
        <tbody>
          <tr><td>„Pagina este indexată.”</td><td>„Pagina răspunde <code>200</code> la URL-ul declarat.”</td></tr>
          <tr><td>„ChatGPT nu vă poate accesa site-ul.”</td><td>„Serverul răspunde <code>403</code> la User-Agent-ul declarat <code>OAI-SearchBot</code>.”</td></tr>
          <tr><td>„Site-ul face cloaking.”</td><td>„Conținutul diferă între User-Agent-ul declarat și clientul de referință, fără variabilitate intrinsecă observată.”</td></tr>
          <tr><td>„Tot site-ul poate fi descoperit.”</td><td>„Sitemap-ul declarat în <code>robots.txt</code> răspunde <code>200</code>.”</td></tr>
          <tr><td>„Google a ales acest canonical.”</td><td>„Pagina declară canonicalul X.”</td></tr>
          <tr><td>„Datele structurate sunt corecte.”</td><td>„Blocul JSON-LD este JSON valid sintactic.”</td></tr>
          <tr><td>„După corectare veți apărea în răspunsurile AI.”</td><td>„Corectarea poate fi verificată la remăsurare prin TC-03.”</td></tr>
        </tbody>
      </table>

      <blockquote><strong>AVL204-REQ-010 — Diagnosticul și recomandările NU TREBUIE să conțină formulări din coloana „Formulare exclusă” sau echivalente ale lor.</strong></blockquote>

      <h2>9. Aplicare identică și abateri</h2>

      <p><strong>Aceeași versiune a grilei se aplică tuturor entităților dintr-o evaluare și oricărei entități evaluate de laborator, fără excepții nedeclarate.</strong></p>

      <p>Când o evaluare compară mai multe entități (de exemplu un client și concurenții lui), toate primesc aceeași versiune a grilei, aceleași reguli și aceleași criterii de prioritizare. Grila se aplică la fel și site-urilor proprii ale laboratorului.</p>

      <p>O situație pe care regulile nu o acoperă sau o acoperă greșit nu se rezolvă printr-o excepție tăcută. Se declară în raport ca <strong>abatere de la grilă</strong>, cu regula vizată, motivul și starea atribuită, iar cazul intră în revizuirea următoarei versiuni.</p>

      <blockquote><strong>AVL204-REQ-011 — Toate entitățile dintr-o evaluare TREBUIE evaluate cu aceeași versiune a grilei.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-012 — O abatere de la o regulă a grilei TREBUIE declarată în raport, cu regula vizată, motivul și starea atribuită; o abatere nedeclarată NU TREBUIE să existe.</strong></blockquote>

      <h2>10. Versionarea grilei</h2>

      <p><strong>Grila este o Measurement Rule Version în sensul AVL-200: o schimbare de regulă care poate schimba un diagnostic produce o versiune nouă.</strong></p>

      <p>Rapoartele rămân atribuite versiunii grilei cu care au fost produse. O remăsurare (<code>F1</code> … <code>Fn</code>) folosește aceeași versiune ca rularea cu care se compară; dacă versiunea s-a schimbat între timp, raportul declară ambele versiuni și diferențele relevante.</p>

      <blockquote><strong>AVL204-REQ-013 — O modificare a unei reguli sau a unui criteriu care poate schimba un diagnostic ori o prioritate TREBUIE să producă o versiune nouă a grilei, iar raportul TREBUIE să indice versiunea folosită.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-014 — Comparația dintre două rulări TREBUIE să folosească aceeași versiune a grilei sau să declare explicit versiunile diferite și efectul lor asupra comparației.</strong></blockquote>

      <h2>11. Categoriile de pagini pe tip de entitate</h2>

      <p><strong>Completează categoriile obligatorii din AVL-203 §1.1 cu pagini specifice tipului de entitate.</strong></p>

      <p>Pagina de contact sau de date de identitate este obligatorie pentru orice tip de entitate (AVL203-REQ-042) și nu se repetă în tabel.</p>

      <table>
        <thead>
          <tr><th>Tip de entitate</th><th>Categorii suplimentare propuse</th></tr>
        </thead>
        <tbody>
          <tr><td>Organizație cu servicii</td><td>paginile de servicii principale; o pagină de portofoliu sau studii de caz, dacă există</td></tr>
          <tr><td>Magazin online</td><td>pagina categoriei principale; o pagină de produs reprezentativă; paginile de livrare și retur</td></tr>
          <tr><td>Afacere locală</td><td>pagina sau paginile de locație; pagina cu programul de lucru, dacă este distinctă de pagina de contact</td></tr>
          <tr><td>Profesionist independent</td><td>pagina de profil sau CV; pagina de publicații ori proiecte, dacă există</td></tr>
        </tbody>
      </table>

      <p>Un tip de entitate care nu se încadrează în tabel se declară în plan, împreună cu categoriile alese și motivul lor.</p>

      <h2>12. Checklist de conformitate</h2>

      <ul>
        <li><strong>AVL204-REQ-001</strong> — Grila TREBUIE aplicată numai observațiilor produse conform AVL-203 dintr-o rulare cu integritatea verificată.</li>
        <li><strong>AVL204-REQ-002</strong> — Fiecare constatare TREBUIE să indice zona, starea, regula aplicată și observațiile-suport.</li>
        <li><strong>AVL204-REQ-003</strong> — O regulă care nu poate fi aplicată sigur NU TREBUIE să producă „problemă confirmată”.</li>
        <li><strong>AVL204-REQ-004</strong> — O restricție conformă cu politica declarată de entitate NU TREBUIE raportată drept problemă.</li>
        <li><strong>AVL204-REQ-005</strong> — Starea zonei TREBUIE să fie cea mai severă; constatările „nu poate fi stabilit” TREBUIE raportate separat.</li>
        <li><strong>AVL204-REQ-006</strong> — „Nicio problemă observată” NU TREBUIE prezentată drept certificare sau garanție.</li>
        <li><strong>AVL204-REQ-007</strong> — Diagnosticul TREBUIE produs prin regulile din §6, cu identificatorul regulii citat.</li>
        <li><strong>AVL204-REQ-008</strong> — Regulile Z2 care depind de politica aplicabilă TREBUIE aplicate numai după determinarea ei conform RFC 9309 (parser sau aplicare manuală documentată); altfel <code>R-Z2-06</code>.</li>
        <li><strong>AVL204-REQ-009</strong> — Fiecare recomandare TREBUIE să primească o clasă de prioritate, cu efortul declarat ca estimare.</li>
        <li><strong>AVL204-REQ-010</strong> — Diagnosticul și recomandările NU TREBUIE să conțină formulările excluse.</li>
        <li><strong>AVL204-REQ-011</strong> — Toate entitățile unei evaluări TREBUIE evaluate cu aceeași versiune a grilei.</li>
        <li><strong>AVL204-REQ-012</strong> — Orice abatere de la grilă TREBUIE declarată în raport.</li>
        <li><strong>AVL204-REQ-013</strong> — O modificare care poate schimba un diagnostic sau o prioritate TREBUIE să producă o versiune nouă.</li>
        <li><strong>AVL204-REQ-014</strong> — Comparația dintre rulări TREBUIE să folosească aceeași versiune a grilei sau să declare diferențele.</li>
      </ul>

      <h2>13. Documente asociate</h2>

      <h3>Normative</h3>

      <ul>
        <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>.</li>
        <li><a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>.</li>
        <li><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>.</li>
        <li><a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</a>.</li>
      </ul>

      <h3>Standarde și referințe externe</h3>

      <p>Verificate la 22 octombrie 2026.</p>

      <ul>
        <li>IETF RFC 9309 — Robots Exclusion Protocol, §2.3.1.3 și §2.3.1.4: <a href="https://www.rfc-editor.org/rfc/rfc9309" target="_blank" rel="noopener noreferrer">https://www.rfc-editor.org/rfc/rfc9309</a></li>
      </ul>

      <p>Regulile grilei sunt reguli proprii AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.</p>

      <h2>14. Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr><td>0.1.0</td><td>22 octombrie 2026</td><td>Draft pentru revizuire</td><td>Primul draft. Definește scopul grilei (transparență, consecvență, imparțialitate), stările diagnosticului preluate din AVL-203 §12.1, cele șase zone de diagnostic, regulile <code>R-VAL-01</code>, <code>R-Z1-*</code> … <code>R-Z6-*</code>, prioritizarea P1–P3 după impact potențial, efort, dependențe și verificabilitate, afirmațiile excluse, aplicarea identică și abaterile declarate, versionarea ca Measurement Rule Version și categoriile de pagini pe tip de entitate. Cerințe <code>AVL204-REQ-001</code> … <code>AVL204-REQ-014</code>. Identificator AVL-204 alocat din registru și confirmat de Alex Matescu. Aliniat la deciziile din 23 octombrie 2026 pentru AVL-203 0.4.0: zona Z2 trimite la AVL203-REQ-041 (parser conform sau aplicare manuală documentată a RFC 9309), iar pagina de contact sau de date de identitate este obligatorie în plan (AVL203-REQ-042). AVL-202 1.6.0 include AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor.</td></tr>
        </tbody>
      </table>

      <h2>15. Decizii deschise înainte de 1.0.0</h2>

      <ol>
        <li><strong>Regulile de diagnostic (§6).</strong> Sunt propuneri de lucru. Rămân de confirmat, în special: încadrarea <code>R-Z1-05</code> (lanț cu mai mult de un redirect), <code>R-Z3-03</code> (lipsa unui sitemap ca problemă posibilă), <code>R-Z4-06</code> (lipsa JSON-LD pe pagina canonică despre entitate) și <code>R-Z4-07</code> (lipsa <code>lang</code>).</li>
        <li><strong>Determinarea politicii robots.txt.</strong> Închisă la 23 octombrie 2026: AVL203-REQ-041 acceptă parserul conform și aplicarea manuală documentată a RFC 9309; regulile <code>R-Z2-01</code> și <code>R-Z2-05</code> pot fi aplicate prin oricare dintre ele.</li>
        <li><strong>Prioritizarea (§7).</strong> Pragurile criteriilor și regula claselor P1–P3 se testează pe primele evaluări și se ajustează înainte de 1.0.0.</li>
        <li><strong>Categoriile pe tip de entitate (§11).</strong> Lista tipurilor și a categoriilor suplimentare este provizorie. Rămâne de stabilit și dacă absența de pe site a unei pagini cu datele de identitate ale entității (AVL203-REQ-042) primește o regulă de diagnostic proprie.</li>
        <li><strong>Formatul politicii de acces declarate.</strong> Trebuie stabilit cum declară entitatea, în plan, politica intenționată pentru fiecare crawler (căutare, antrenare, fetch la cererea utilizatorului).</li>
        <li><strong>Locul în corpus.</strong> Închisă la 23 octombrie 2026: AVL-202 1.6.0 menționează AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor. La activare rămân de făcut actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001 §17.</li>
      </ol>

      <p>Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.</p>

      <blockquote>
        <p><strong>Declarație finală</strong></p>
        <p>Un diagnostic este credibil numai dacă oricine poate refolosi regula care l-a produs.<br />
        AVL-204 publică regula înaintea rezultatului.</p>
      </blockquote>
`;
