export const avl204GrilaInterpretareVerificareTehnicaHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă · Draft pentru revizuire</p>
        <p class="avl-doc-title">AVL-204 — Grila de interpretare a verificării tehnice</p>
        <p class="avl-doc-lead">Technical Diagnostic Interpretation Grid</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-204</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>0.3.0</td></tr>
        <tr><th scope="row">Statut</th><td>Draft pentru revizuire</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data creării</th><td>22 octombrie 2026</td></tr>
        <tr><th scope="row">Data publicării</th><td>26 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>26 octombrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica">https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica</a></td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, <a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>, <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>, <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</a>, <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0</a> (fișa entității, §7)</td></tr>
        <tr><th scope="row">Dependențe informative</th><td><a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a></td></tr>
        <tr><th scope="row">Tip de versiune în sensul AVL-200</th><td>Measurement Rule Version (<a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200</a> §13.1, §19.3)</td></tr>
        </tbody>
        </table>
      </div>

      <blockquote><strong>Principiu:</strong> aceeași observație primește același diagnostic, indiferent a cui este site-ul. Regulile se publică și se fixează înainte de rulare, ca diagnosticul să poată fi verificat și să nu poată fi ajustat după rezultat.</blockquote>

      <h2>Controlul documentului</h2>

      <p>AVL-204 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation. Definește regulile prin care observațiile produse de <a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203</a> devin diagnostic și recomandări (AVL-203 §12).</p>

      <p>Versiunea curentă, <strong>0.3.0</strong>, este un <strong>draft pentru revizuire</strong> și nu este activă. Regulile de diagnostic din §6 și criteriile de prioritizare din §7 sunt propuneri de lucru, revizuite după prima implementare candidată, o rulare de test și prima rulare T0; deciziile rămase deschise înainte de activare sunt enumerate în §15.</p>

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
        <li><strong>imparțialitate</strong> — regulile nu favorizează nicio entitate evaluată: se aplică la fel fiecărui proiect sau client și site-urilor proprii ale laboratorului.</li>
      </ol>

      <h2>2. Ce acoperă și ce nu acoperă grila?</h2>

      <p><strong>Grila interpretează exclusiv observațiile produse conform AVL-203; nu măsoară vizibilitatea AI și nu înlocuiește un audit SEO complet.</strong></p>

      <p>Grila acoperă: stările diagnosticului, zonele verificate, regulile care leagă observațiile de stări, prioritizarea recomandărilor, afirmațiile excluse și regulile de aplicare identică.</p>

      <p>Grila nu acoperă: interogările către sisteme AI, clasificarea răspunsurilor (menționare, citare, recomandare), identitatea entității în surse externe, performanța, securitatea sau investigațiile din afara protocolului minim (AVL-203 §13). Pentru o extensie declarată (AVL-203 §13.1), regulile ei de interpretare se declară separat, înainte de folosire.</p>

      <p>Grila se aplică numai entităților evaluate ca proiect sau client al laboratorului, inclusiv site-urilor proprii ale laboratorului, pentru care există o fișă a entității completată de reprezentantul ei (AVL-201 §7). Nu se aplică concurenților unei entități evaluate și nici entităților identificate în Market Discovery (AVL-MKT-001). Același domeniu de aplicare are și protocolul (AVL-203 §1).</p>

      <blockquote><strong>AVL204-REQ-001 — Grila TREBUIE aplicată numai după executarea verificării de integritate (TC-07) a rulării. Constatările care se sprijină pe artefacte care nu trec verificarea TREBUIE să primească regula <code>R-VAL-01</code>; dacă lipsesc sau nu trec verificarea manifestul rulării, lista de checksum-uri ori planul înghețat, rularea TREBUIE declarată invalidă și NU TREBUIE produs niciun diagnostic.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-015 — Grila TREBUIE aplicată numai entităților evaluate ca proiect sau client al laboratorului, pentru care există o fișă a entității completată de reprezentantul ei.</strong></blockquote>

      <h2>3. Principii de aplicare</h2>

      <p><strong>Diagnosticul este conservator: când o regulă nu poate fi aplicată sigur, rezultatul coboară spre „problemă posibilă” sau „nu poate fi stabilit”, niciodată spre „problemă confirmată”.</strong></p>

      <ul>
        <li><strong>Observația înaintea diagnosticului.</strong> Fiecare constatare trimite la observațiile care o susțin; o constatare fără observație-suport nu se raportează.</li>
        <li><strong>Regula înaintea rezultatului.</strong> Fiecare constatare indică regula din §6 care a produs-o, prin identificatorul ei.</li>
        <li><strong>Intenția entității contează.</strong> O restricție care corespunde politicii de acces declarate de entitate (§3.1) nu este o problemă.</li>
        <li><strong>Necunoscutul rămâne vizibil.</strong> O constatare „nu poate fi stabilit” se raportează explicit; nu dispare sub o zonă marcată „nicio problemă observată”.</li>
        <li><strong>Succesul cere date complete.</strong> O regulă cu starea „nicio problemă observată” se aplică numai când toate observațiile pe care le cere sunt disponibile. O zonă fără constatări nu este o zonă fără probleme: se raportează „neevaluată”, cu motivul.</li>
      </ul>

      <blockquote><strong>AVL204-REQ-002 — Fiecare constatare TREBUIE să indice zona, starea, identificatorul regulii aplicate și observațiile care o susțin.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-003 — Când o regulă nu poate fi aplicată sigur, constatarea NU TREBUIE să primească starea „problemă confirmată”.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-004 — O restricție de acces care corespunde politicii declarate de entitate în planul de măsurare NU TREBUIE raportată drept problemă.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-016 — O regulă cu starea „nicio problemă observată” NU TREBUIE aplicată când lipsește o observație pe care condiția ei o cere; constatarea TREBUIE atunci să primească starea „nu poate fi stabilit”, iar o zonă fără constatări TREBUIE raportată „neevaluată”.</strong></blockquote>

      <h3>3.1. Politica de acces declarată</h3>

      <p>AI Visibility Lab recomandă accesul total pentru toate crawlerele: de căutare, de antrenare și de fetch la cererea utilizatorului. Politica de acces a entității evaluate face parte din fișa entității (AVL-201 §7), sub numele „Politica crawlere”, și este completată de reprezentantul entității. Dacă reprezentantul nu declară o politică diferită, politica înregistrată este accesul total, cu sursa „recomandarea AI Visibility Lab, nemodificată de reprezentant”. O politică diferită se documentează pentru fiecare crawler (sau categorie de crawlere), cu sursa și data declarării, și se copiază în planul de măsurare înaintea rulării (AVL-203 §1.1).</p>

      <p>Politica intenționată nu se deduce din <code>robots.txt</code> sau din alte observații ale rulării: ea descrie ce vrea entitatea, iar observațiile arată ce livrează serverul.</p>

      <blockquote><strong>AVL204-REQ-017 — Politica de acces folosită de grilă TREBUIE preluată din fișa entității, completată de reprezentantul ei; în lipsa unei politici diferite declarate, TREBUIE înregistrat accesul total, cu sursa acestei valori; politica NU TREBUIE dedusă din observațiile rulării.</strong></blockquote>

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

      <p><code>TC-00</code> (contextul rulării) și <code>TC-07</code> (integritatea) sunt condiții de validitate, nu zone. Constatările care se sprijină pe un artefact care nu trece verificarea checksum-urilor primesc starea „nu poate fi stabilit” (regula <code>R-VAL-01</code>). Dacă lipsesc sau nu trec verificarea manifestul rulării, lista de checksum-uri ori planul înghețat, rularea este invalidă și nu se produce diagnostic, ci un raport de invaliditate (AVL204-REQ-001).</p>

      <p>Granularitatea regulilor: zonele Z1, Z4, Z5 și Z6 se evaluează pentru fiecare URL din plan, zona Z2 pentru fiecare pereche URL–crawler din matricea Core și pentru crawlerele de antrenare declarate în plan (§6.3), iar zona Z3 pentru origine.</p>

      <h2>6. Regulile de diagnostic</h2>

      <p><strong>Fiecare regulă leagă o observație AVL-203 de o stare. Regulile se aplică pentru fiecare element din plan, la granularitatea din §5; o regulă care nu se potrivește niciunei observații nu produce constatare.</strong></p>

      <p>Regulile zonelor Z4 și Z5 se aplică numai URL-urilor al căror răspuns final este <code>2xx</code>. Pentru un URL care răspunde, după redirecturi, cu <code>4xx</code> sau <code>5xx</code>, semnalele și textele descriu răspunsul de eroare, nu resursa: constatarea principală este <code>R-Z1-01</code>, iar zonele Z4 și Z5 se raportează „neevaluate” pentru acel URL.</p>

      <h3>6.1. Validitate</h3>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-VAL-01</code></td><td>verificarea checksum-urilor eșuează pentru artefactele pe care se sprijină constatarea</td><td>nu poate fi stabilit</td></tr>
        </tbody>
      </table>

      <h3>6.2. Z1 — Răspunsul site-ului și adresa oficială</h3>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z1-01</code></td><td>URL-ul din plan răspunde, după redirecturi, cu un cod <code>4xx</code> sau <code>5xx</code>, fără ca acest răspuns să fie declarat intenționat în plan</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z1-02</code></td><td>captura eșuează cu eroare TLS sau de certificat</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z1-03</code></td><td>variantele <code>http</code>/<code>https</code> și <code>www</code>/fără <code>www</code> relevante ajung la destinații finale diferite</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z1-04</code></td><td>URL-ul final diferă de URL-ul din plan fără ca redirectul să fie declarat intenționat în plan</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z1-05</code></td><td>lanțul de redirecturi are mai mult de două redirecturi până la URL-ul final</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z1-06</code></td><td>o variantă <code>http</code> răspunde direct <code>2xx</code>, fără redirect spre <code>https</code></td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z1-07</code></td><td>captura eșuează cu eroare de rețea sau DNS o singură dată, iar captura repetată reușește</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z1-08</code></td><td>URL-ul răspunde <code>2xx</code> cu cel mult două redirecturi, iar toate variantele relevante au fost capturate și converg</td><td>nicio problemă observată</td></tr>
          <tr><td><code>R-Z1-09</code></td><td>captura eșuează cu eroare de rețea, DNS sau timeout și la captura repetată</td><td>problemă confirmată (în condițiile testate)</td></tr>
          <tr><td><code>R-Z1-10</code></td><td>URL-ul răspunde, după redirecturi, cu <code>4xx</code> sau <code>5xx</code>, iar acest răspuns este declarat intenționat în plan</td><td>nicio problemă observată (răspuns declarat)</td></tr>
        </tbody>
      </table>

      <h3>6.3. Z2 — Regulile pentru crawlere</h3>

      <p>Regulile <code>R-Z2-01</code> și <code>R-Z2-05</code> se aplică numai după determinarea politicii robots.txt conform RFC 9309 (selecția grupului, combinarea grupurilor, potrivirea cea mai specifică), printr-un parser conform sau prin aplicare manuală documentată pas cu pas, cum cere AVL203-REQ-041. Constatarea indică metoda folosită. Fără această determinare se aplică <code>R-Z2-06</code>.</p>

      <p>Pe lângă crawlerele din matricea Core, regulile <code>R-Z2-01</code> și <code>R-Z2-05</code> se aplică și crawlerelor de antrenare declarate în planul de măsurare (de exemplu <code>GPTBot</code>, <code>ClaudeBot</code>, <code>Google-Extended</code>, <code>CCBot</code>), cu politica preluată din fișa entității (§3.1). Crawlerele care accesează pagini la cererea unui utilizator (de exemplu <code>ChatGPT-User</code>, <code>Claude-User</code>, <code>Perplexity-User</code>) se raportează numai ca observație: politica RFC 9309 determinată pentru ele apare în raport, fără stare de diagnostic, pentru că furnizorii lor declară că regulile robots.txt pot să nu li se aplice (AVL-203 §6).</p>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z2-01</code></td><td>regula aplicabilă blochează un URL din plan pentru un crawler din matricea Core (AVL-203 §6) sau pentru un crawler de antrenare declarat în plan, contrar politicii de acces declarate</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z2-02</code></td><td><code>robots.txt</code> răspunde <code>5xx</code>, sau nu poate fi obținut din cauza unei erori de rețea nici la captura repetată</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z2-03</code></td><td><code>robots.txt</code> conține linii care seamănă cu o directivă cunoscută scrisă greșit (de exemplu <code>Dissallow</code>)</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z2-04</code></td><td><code>robots.txt</code> răspunde <code>4xx</code>, cu excepția <code>429</code></td><td>nicio problemă observată</td></tr>
          <tr><td><code>R-Z2-05</code></td><td>nicio regulă aplicabilă nu blochează URL-urile din plan pentru crawlerele Core și pentru crawlerele de antrenare declarate în plan, sau blocările corespund politicii declarate</td><td>nicio problemă observată</td></tr>
          <tr><td><code>R-Z2-06</code></td><td>politica aplicabilă nu a putut fi determinată conform RFC 9309</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z2-07</code></td><td><code>robots.txt</code> este redirecționat către alt host și răspunde <code>2xx</code> după cel mult cinci redirecturi</td><td>nicio problemă observată</td></tr>
          <tr><td><code>R-Z2-08</code></td><td><code>robots.txt</code> răspunde <code>429</code></td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z2-09</code></td><td>lanțul de redirecturi al <code>robots.txt</code> are mai mult de cinci redirecturi</td><td>problemă posibilă</td></tr>
        </tbody>
      </table>

      <p>Justificarea pentru <code>R-Z2-02</code> și <code>R-Z2-04</code>: RFC 9309 §2.3.1.4 cere crawlerului să considere tot site-ul interzis când <code>robots.txt</code> răspunde cu o eroare de server (<code>5xx</code>) sau nu poate fi accesat din cauza rețelei; RFC 9309 §2.3.1.3 îi permite să acceseze orice resursă când fișierul răspunde <code>4xx</code>. Comportamentul efectiv al fiecărui furnizor nu este verificat de această grilă.</p>

      <p>Justificarea pentru <code>R-Z2-03</code>, <code>R-Z2-07</code>, <code>R-Z2-08</code> și <code>R-Z2-09</code>: RFC 9309 §2.3.1.5 cere crawlerului să folosească regulile parsabile, deci o linie neinterpretabilă nu invalidează restul fișierului; se semnalează doar liniile care par o directivă scrisă greșit, celelalte rămân observații. RFC 9309 §2.3.1.2 cere urmarea a cel puțin cinci redirecturi consecutive, chiar între autorități diferite, și permite tratarea fișierului ca indisponibil după mai mult de cinci. Codul <code>429</code> este un <code>4xx</code> în sensul RFC 9309, dar documentația Google exclude <code>429</code> din regula după care erorile <code>4xx</code> sunt tratate ca absența fișierului, fără să descrie tratamentul lui (verificat la 25 octombrie 2026); de aceea <code>429</code> primește o regulă separată.</p>

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
          <tr><td><code>R-Z3-04</code></td><td>status <code>UNKNOWN</code> (inclusiv combinațiile pe care tabelul din AVL-203 §7 le trece la <code>UNKNOWN</code>)</td><td>nu poate fi stabilit</td></tr>
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
          <tr><td><code>R-Z4-02</code></td><td>canonicalul declarat trimite la un URL care, capturat, nu răspunde <code>2xx</code> după redirecturi</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z4-03</code></td><td>un bloc JSON-LD nu este JSON valid sintactic</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z4-04</code></td><td>pagina nu are <code>&lt;title&gt;</code> sau are un <code>&lt;title&gt;</code> gol</td><td>problemă confirmată</td></tr>
          <tr><td><code>R-Z4-05</code></td><td>canonicalul declarat trimite la alt URL decât URL-ul final, fără ca asta să fie declarat intenționat în plan</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z4-06</code></td><td>Retrasă în 0.3.0: lipsa oricărui bloc JSON-LD pe pagina canonică despre entitate (AVL-203 §1.1) se raportează numai ca observație TC-05</td><td>—</td></tr>
          <tr><td><code>R-Z4-07</code></td><td><code>&lt;html lang&gt;</code> lipsește</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z4-08</code></td><td>un semnal are valoarea <code>UNKNOWN</code> la extracție, sau ținta canonicalului nu a putut fi capturată în limitele planului</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z4-09</code></td><td>niciuna dintre condițiile de mai sus nu se aplică, iar toate semnalele și țintele canonicalului au fost evaluate</td><td>nicio problemă observată</td></tr>
          <tr><td><code>R-Z4-10</code></td><td>ținta canonicalului răspunde inițial cu un redirect (<code>3xx</code>) și final <code>2xx</code></td><td>problemă posibilă</td></tr>
        </tbody>
      </table>

      <p>Aceste reguli descriu semnalele declarate în HTML-ul brut. Ele nu evaluează canonicalul selectat de un motor și nu validează vocabularul Schema.org (AVL203-REQ-016). Ținta canonicalului se capturează ca cerere auxiliară, în limitele declarate în plan (AVL-203 §1.1); statusul inițial și cel final se înregistrează separat.</p>

      <p>Retragerea <code>R-Z4-06</code> (0.3.0): documentația Google pentru funcțiile AI din Search precizează că nu este nevoie de fișiere noi, fișiere text pentru AI sau markup pentru a apărea în aceste funcții și că nu există date structurate schema.org speciale care trebuie adăugate (pagina „AI features and your website”, actualizată la 10 decembrie 2025, verificată la 26 octombrie 2026). Prezența și validitatea sintactică a blocurilor JSON-LD rămân observații TC-05, iar un bloc invalid rămâne <code>R-Z4-03</code>.</p>

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
          <tr><td><code>R-Z5-05</code></td><td>un text-cheie are statusul <code>PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY</code></td><td>problemă posibilă</td></tr>
        </tbody>
      </table>

      <p>Problema confirmată de <code>R-Z5-01</code> este absența textului din HTML-ul brut. Efectul asupra unui crawler anume rămâne o problemă posibilă și se formulează ca atare (AVL203-REQ-032).</p>

      <h3>6.7. Z6 — Răspunsurile pentru crawlere declarate</h3>

      <table>
        <thead>
          <tr><th>Regulă</th><th>Condiție</th><th>Stare</th></tr>
        </thead>
        <tbody>
          <tr><td><code>R-Z6-01</code></td><td>pentru un User-Agent declarat, statusul HTTP sau URL-ul final diferă nefavorabil de cele ale clientului de referință (status final care nu e <code>2xx</code> când referința e <code>2xx</code>, sau alt URL final), contrar politicii declarate</td><td>problemă confirmată (răspuns diferit pentru User-Agent-ul declarat)</td></tr>
          <tr><td><code>R-Z6-02</code></td><td>pentru un User-Agent declarat, headerele relevante diferă nefavorabil (de exemplu <code>X-Robots-Tag</code> adaugă <code>noindex</code> sau <code>none</code>, ori <code>Content-Type</code> nu mai indică HTML), contrar politicii declarate</td><td>problemă confirmată (răspuns diferit pentru User-Agent-ul declarat)</td></tr>
          <tr><td><code>R-Z6-03</code></td><td>dimensiunea sau hash-ul diferă, iar capturile clientului de referință nu au arătat variabilitate intrinsecă</td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z6-04</code></td><td>capturile clientului de referință arată variabilitate intrinsecă: comparația de conținut</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z6-05</code></td><td>status, URL final și headere relevante identice pentru toți User-Agent-ii declarați, iar conținutul identic sau neevaluabil conform <code>R-Z6-04</code></td><td>nicio problemă observată (pentru status, URL și headere)</td></tr>
          <tr><td><code>R-Z6-06</code></td><td>pentru un User-Agent declarat, statusul, URL-ul final sau headerele relevante diferă, dar nu nefavorabil în sensul <code>R-Z6-01</code> / <code>R-Z6-02</code></td><td>problemă posibilă</td></tr>
          <tr><td><code>R-Z6-07</code></td><td>capturile clientului de referință diferă între ele la status, URL final sau headere relevante: comparația acestor câmpuri</td><td>nu poate fi stabilit</td></tr>
          <tr><td><code>R-Z6-08</code></td><td>răspunsul diferit pentru un User-Agent declarat corespunde politicii declarate (crawler blocat intenționat)</td><td>nicio problemă observată (restricție declarată)</td></tr>
        </tbody>
      </table>

      <p><code>R-Z6-01</code> și <code>R-Z6-02</code> confirmă că serverul răspunde diferit la un User-Agent declarat. Nu confirmă că infrastructura furnizorului este blocată și nici cloaking (AVL203-REQ-012, AVL203-REQ-021). Lista headerelor relevante se fixează în configurația implementării și se înregistrează în manifestul rulării; headerele care variază de la un request la altul (de exemplu <code>Date</code>, identificatorii de request) nu intră în comparație.</p>

      <blockquote><strong>AVL204-REQ-007 — Diagnosticul TREBUIE produs prin regulile din §6, iar fiecare constatare TREBUIE să citeze identificatorul regulii aplicate.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-008 — Regulile zonei Z2 care depind de politica aplicabilă (<code>R-Z2-01</code>, <code>R-Z2-05</code>) TREBUIE aplicate numai după determinarea politicii robots.txt conform RFC 9309, prin parser conform sau aplicare manuală documentată (AVL203-REQ-041); altfel TREBUIE aplicată regula <code>R-Z2-06</code>.</strong></blockquote>

      <blockquote><strong>AVL204-REQ-018 — Regulile <code>R-Z2-01</code> și <code>R-Z2-05</code> TREBUIE aplicate crawlerelor din matricea Core și crawlerelor de antrenare declarate în plan; crawlerele de fetch la cererea utilizatorului declarate în plan NU TREBUIE să primească stare de diagnostic în zona Z2, iar politica lor determinată conform RFC 9309 TREBUIE raportată ca observație.</strong></blockquote>

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

      <p>Constatările „nu poate fi stabilit” nu primesc o clasă de prioritate; pentru ele, recomandarea este o verificare suplimentară (de exemplu o captură repetată sau o extensie declarată). În aceeași clasă, recomandările se ordonează după efort crescător și dependențe. Verificabilitatea se înregistrează pentru fiecare recomandare, dar nu intră în calculul clasei. Ordinea de execuție dată de dependențe nu schimbă clasa de prioritate.</p>

      <p>Efortul este o estimare a celui care redactează raportul; entitatea evaluată îl poate corecta. Un efort sau o dependență necunoscute rămân declarate ca necunoscute.</p>

      <blockquote><strong>AVL204-REQ-009 — Fiecare recomandare pentru o problemă confirmată sau posibilă TREBUIE să primească o clasă de prioritate după regulile din §7, iar estimarea efortului TREBUIE declarată ca estimare; recomandările de verificare suplimentară pentru constatările „nu poate fi stabilit” NU TREBUIE să primească o clasă.</strong></blockquote>

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

      <p><strong>Aceeași versiune a grilei se aplică identic oricărei entități evaluate de laborator, fără excepții nedeclarate.</strong></p>

      <p>Fiecare proiect sau client primește aceleași reguli și aceleași criterii de prioritizare ca oricare alt proiect evaluat cu aceeași versiune a grilei. Grila se aplică la fel și site-urilor proprii ale laboratorului.</p>

      <p>O situație pe care regulile nu o acoperă sau o acoperă greșit nu se rezolvă printr-o excepție tăcută. Se declară în raport ca <strong>abatere de la grilă</strong>, cu regula vizată, motivul și starea atribuită, iar cazul intră în revizuirea următoarei versiuni.</p>

      <blockquote><strong>AVL204-REQ-011 — O versiune a grilei TREBUIE aplicată identic tuturor entităților evaluate cu ea, inclusiv site-urilor proprii ale laboratorului.</strong></blockquote>

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
          <tr><th>Tip de entitate</th><th>Categorii suplimentare recomandate</th></tr>
        </thead>
        <tbody>
          <tr><td>Organizație cu servicii</td><td>paginile de servicii principale; o pagină de portofoliu sau studii de caz, dacă există</td></tr>
          <tr><td>Magazin online</td><td>pagina categoriei principale; o pagină de produs reprezentativă; paginile de livrare și retur</td></tr>
          <tr><td>Afacere locală</td><td>pagina sau paginile de locație; pagina cu programul de lucru, dacă este distinctă de pagina de contact</td></tr>
          <tr><td>Profesionist independent</td><td>pagina de profil sau CV; pagina de publicații ori proiecte, dacă există</td></tr>
        </tbody>
      </table>

      <p>Un tip de entitate care nu se încadrează în tabel se declară în plan, împreună cu categoriile alese și motivul lor.</p>

      <p>Categoriile suplimentare sunt recomandate, nu obligatorii: lipsa lor din plan se semnalează doar ca avertisment la validarea planului. Absența de pe site a paginii cu datele de identitate (AVL203-REQ-042) se înregistrează în plan și se raportează ca observație, fără regulă de diagnostic proprie.</p>

      <h2>12. Checklist de conformitate</h2>

      <ul>
        <li><strong>AVL204-REQ-001</strong> — Grila TREBUIE aplicată numai după verificarea integrității; artefactele compromise → <code>R-VAL-01</code>; manifest, checksum-uri sau plan compromise → rulare invalidă, fără diagnostic.</li>
        <li><strong>AVL204-REQ-002</strong> — Fiecare constatare TREBUIE să indice zona, starea, regula aplicată și observațiile-suport.</li>
        <li><strong>AVL204-REQ-003</strong> — O regulă care nu poate fi aplicată sigur NU TREBUIE să producă „problemă confirmată”.</li>
        <li><strong>AVL204-REQ-004</strong> — O restricție conformă cu politica declarată de entitate NU TREBUIE raportată drept problemă.</li>
        <li><strong>AVL204-REQ-005</strong> — Starea zonei TREBUIE să fie cea mai severă; constatările „nu poate fi stabilit” TREBUIE raportate separat.</li>
        <li><strong>AVL204-REQ-006</strong> — „Nicio problemă observată” NU TREBUIE prezentată drept certificare sau garanție.</li>
        <li><strong>AVL204-REQ-007</strong> — Diagnosticul TREBUIE produs prin regulile din §6, cu identificatorul regulii citat.</li>
        <li><strong>AVL204-REQ-008</strong> — Regulile Z2 care depind de politica aplicabilă TREBUIE aplicate numai după determinarea ei conform RFC 9309 (parser sau aplicare manuală documentată); altfel <code>R-Z2-06</code>.</li>
        <li><strong>AVL204-REQ-009</strong> — Fiecare recomandare pentru o problemă TREBUIE să primească o clasă de prioritate, cu efortul declarat ca estimare; verificările suplimentare nu primesc clasă.</li>
        <li><strong>AVL204-REQ-010</strong> — Diagnosticul și recomandările NU TREBUIE să conțină formulările excluse.</li>
        <li><strong>AVL204-REQ-011</strong> — O versiune a grilei TREBUIE aplicată identic tuturor entităților evaluate cu ea.</li>
        <li><strong>AVL204-REQ-012</strong> — Orice abatere de la grilă TREBUIE declarată în raport.</li>
        <li><strong>AVL204-REQ-013</strong> — O modificare care poate schimba un diagnostic sau o prioritate TREBUIE să producă o versiune nouă.</li>
        <li><strong>AVL204-REQ-014</strong> — Comparația dintre rulări TREBUIE să folosească aceeași versiune a grilei sau să declare diferențele.</li>
        <li><strong>AVL204-REQ-015</strong> — Grila TREBUIE aplicată numai entităților evaluate ca proiect sau client, cu fișa entității completată de reprezentant.</li>
        <li><strong>AVL204-REQ-016</strong> — Regulile de succes NU TREBUIE aplicate pe date incomplete; o zonă fără constatări TREBUIE raportată „neevaluată”.</li>
        <li><strong>AVL204-REQ-017</strong> — Politica de acces TREBUIE preluată din fișa entității; implicit, accesul total, cu sursa declarată; nu se deduce din observații.</li>
        <li><strong>AVL204-REQ-018</strong> — Regulile <code>R-Z2-01</code>/<code>R-Z2-05</code> TREBUIE aplicate crawlerelor Core și crawlerelor de antrenare declarate în plan; crawlerele de fetch la cererea utilizatorului se raportează numai ca observație.</li>
      </ul>

      <h2>13. Documente asociate</h2>

      <h3>Normative</h3>

      <ul>
        <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>.</li>
        <li><a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>.</li>
        <li><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>.</li>
        <li><a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</a>.</li>
        <li><a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</a> (fișa entității, §7).</li>
      </ul>

      <h3>Informative</h3>

      <ul>
        <li><a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a> (entitățile din Market Discovery nu intră în domeniul grilei).</li>
      </ul>

      <h3>Standarde și referințe externe</h3>

      <p>Verificate la 25 octombrie 2026.</p>

      <ul>
        <li>IETF RFC 9309 — Robots Exclusion Protocol, §2.3.1.2–§2.3.1.5: <a href="https://www.rfc-editor.org/rfc/rfc9309" target="_blank" rel="noopener noreferrer">https://www.rfc-editor.org/rfc/rfc9309</a></li>
        <li>Google — How Google interprets the robots.txt specification (codurile HTTP pentru robots.txt, inclusiv excepția <code>429</code>): <a href="https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec" target="_blank" rel="noopener noreferrer">https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec</a></li>
        <li>Google — How HTTP status codes affect Google's crawlers: <a href="https://developers.google.com/crawling/docs/troubleshooting/http-status-codes" target="_blank" rel="noopener noreferrer">https://developers.google.com/crawling/docs/troubleshooting/http-status-codes</a></li>
      </ul>

      <p>Regulile grilei sunt reguli proprii AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.</p>

      <h2>14. Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr><td>0.1.0</td><td>22 octombrie 2026</td><td>Draft pentru revizuire</td><td>Primul draft. Definește scopul grilei (transparență, consecvență, imparțialitate), stările diagnosticului preluate din AVL-203 §12.1, cele șase zone de diagnostic, regulile <code>R-VAL-01</code>, <code>R-Z1-*</code> … <code>R-Z6-*</code>, prioritizarea P1–P3 după impact potențial, efort, dependențe și verificabilitate, afirmațiile excluse, aplicarea identică și abaterile declarate, versionarea ca Measurement Rule Version și categoriile de pagini pe tip de entitate. Cerințe <code>AVL204-REQ-001</code> … <code>AVL204-REQ-014</code>. Identificator AVL-204 alocat din registru și confirmat de Alex Matescu. Aliniat la deciziile din 23 octombrie 2026 pentru AVL-203 0.4.0: zona Z2 trimite la AVL203-REQ-041 (parser conform sau aplicare manuală documentată a RFC 9309), iar pagina de contact sau de date de identitate este obligatorie în plan (AVL203-REQ-042). AVL-202 1.6.0 include AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor.</td></tr>
          <tr><td>0.2.0</td><td>25 octombrie 2026</td><td>Draft pentru revizuire</td><td>MINOR: revizie după prima implementare candidată (v0.3.0) și o rulare de test, cu propunerile P-01…P-11 aprobate de Alex Matescu la 25 octombrie 2026. Domeniul de aplicare: grila se aplică numai entităților evaluate ca proiect sau client, cu fișa entității completată de reprezentant, nu concurenților și nici entităților din Market Discovery (§2, <code>AVL204-REQ-015</code>); §1 și §9 reformulate în consecință, <code>AVL204-REQ-011</code> reformulată. <code>AVL204-REQ-001</code> precizează granularitatea integrității (artefact → <code>R-VAL-01</code>; manifest, checksum-uri sau plan → rulare invalidă). §3.1 nouă: politica de acces vine din fișa entității („Politica crawlere”), recomandarea laboratorului este accesul total, politica nu se deduce din observații (<code>AVL204-REQ-017</code>; decizia deschisă 5 închisă). Regulile de succes cer date complete, iar o zonă fără constatări e „neevaluată” (<code>AVL204-REQ-016</code>). Zonele Z4 și Z5 nu se evaluează pentru URL-urile cu răspuns final <code>4xx</code>/<code>5xx</code>. Reguli noi sau modificate: <code>R-VAL-01</code>; <code>R-Z1-01</code> (răspuns declarat intenționat), <code>R-Z1-07</code>, <code>R-Z1-08</code>, <code>R-Z1-09</code> (eroare de rețea repetată), <code>R-Z1-10</code>; <code>R-Z2-02</code>, <code>R-Z2-03</code> (doar directive scrise greșit), <code>R-Z2-04</code> (fără <code>429</code>), <code>R-Z2-07</code> (redirect cross-host permis de RFC 9309), <code>R-Z2-08</code> (<code>429</code>), <code>R-Z2-09</code> (peste cinci redirecturi); <code>R-Z3-04</code>; <code>R-Z4-02</code>, <code>R-Z4-08</code>, <code>R-Z4-09</code>, <code>R-Z4-10</code> (canonical cu redirect); <code>R-Z5-05</code> (text doar în scripturi sau zone ascunse, statusul nou din AVL-203 0.5.0); <code>R-Z6-01</code>/<code>R-Z6-02</code> (doar diferențe nefavorabile, contrar politicii declarate), <code>R-Z6-06</code>, <code>R-Z6-07</code> (variabilitatea referinței la status și headere), <code>R-Z6-08</code> (restricție declarată). <code>AVL204-REQ-009</code>: verificările suplimentare nu primesc clasă de prioritate. AVL-201 adăugat ca dependență normativă, AVL-MKT-001 ca dependență informativă. Sursele externe reverificate la 25 octombrie 2026 (RFC 9309; Google, codurile HTTP pentru robots.txt).</td></tr>
          <tr><td>0.3.0</td><td>26 octombrie 2026</td><td>Draft pentru revizuire</td><td>MINOR: deciziile Alex Matescu din 26 octombrie 2026, după prima rulare T0 pe un site propriu. <code>R-Z1-05</code> devine problemă posibilă numai peste două redirecturi, iar <code>R-Z1-08</code> acceptă cel mult două. <code>R-Z4-06</code> retrasă: lipsa JSON-LD pe pagina despre entitate rămâne observație TC-05, conform documentației Google pentru funcțiile AI. Zona Z2 se aplică și crawlerelor de antrenare declarate în plan; crawlerele de fetch la cererea utilizatorului se raportează numai ca observație (<code>AVL204-REQ-018</code>, nouă). §11: categoriile suplimentare sunt recomandate, iar absența paginii de identitate rămâne observație. <code>R-Z3-03</code>, <code>R-Z4-07</code>, <code>R-Z2-08</code>, <code>R-Z2-09</code> și <code>R-Z4-10</code> confirmate ca „problemă posibilă”. Decizii deschise 1 (parțial), 4 și 7 (nouă) închise. Sursă externă verificată la 26 octombrie 2026: Google, „AI features and your website”.</td></tr>
        </tbody>
      </table>

      <h2>15. Decizii deschise înainte de 1.0.0</h2>

      <ol>
        <li><strong>Regulile de diagnostic (§6).</strong> Încadrările semnalate în 0.2.0 au fost decise la 26 octombrie 2026 (decizie Alex Matescu): <code>R-Z1-05</code> devine problemă posibilă numai peste două redirecturi, iar <code>R-Z1-08</code> acceptă cel mult două; <code>R-Z4-06</code> este retrasă (lipsa JSON-LD rămâne observație); <code>R-Z3-03</code>, <code>R-Z4-07</code>, <code>R-Z2-08</code>, <code>R-Z2-09</code> și <code>R-Z4-10</code> își păstrează starea „problemă posibilă”. Setul complet al regulilor se confirmă la activare, odată cu validarea implementării de referință (AVL-203 §19.4).</li>
        <li><strong>Determinarea politicii robots.txt.</strong> Închisă la 23 octombrie 2026: AVL203-REQ-041 acceptă parserul conform și aplicarea manuală documentată a RFC 9309; regulile <code>R-Z2-01</code> și <code>R-Z2-05</code> pot fi aplicate prin oricare dintre ele.</li>
        <li><strong>Prioritizarea (§7).</strong> Pragurile criteriilor și regula claselor P1–P3 se testează pe primele evaluări și se ajustează înainte de 1.0.0.</li>
        <li><strong>Categoriile pe tip de entitate (§11).</strong> Închisă la 26 octombrie 2026 (decizie Alex Matescu): categoriile suplimentare sunt recomandate, nu obligatorii; absența paginii cu datele de identitate rămâne observație, fără regulă de diagnostic proprie.</li>
        <li><strong>Formatul politicii de acces declarate.</strong> Închisă la 25 octombrie 2026 (decizie Alex Matescu): politica face parte din fișa entității („Politica crawlere”), completată de reprezentant; recomandarea laboratorului este accesul total pentru toate crawlerele; o politică diferită se documentează pentru fiecare crawler sau categorie (§3.1).</li>
        <li><strong>Locul în corpus.</strong> Închisă la 23 octombrie 2026: AVL-202 1.6.0 menționează AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor. La activare rămân de făcut actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001 §17.</li>
        <li><strong>Crawlerele din afara matricei Core.</strong> Închisă la 26 octombrie 2026 (decizie Alex Matescu): crawlerele de antrenare declarate în plan primesc regulile <code>R-Z2-01</code>/<code>R-Z2-05</code>; crawlerele de fetch la cererea utilizatorului se raportează numai ca observație (§6.3, <code>AVL204-REQ-018</code>).</li>
      </ol>

      <p>Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.</p>

      <blockquote>
        <p><strong>Declarație finală</strong></p>
        <p>Un diagnostic este credibil numai dacă oricine poate refolosi regula care l-a produs.<br />
        AVL-204 publică regula înaintea rezultatului.</p>
      </blockquote>
`;
