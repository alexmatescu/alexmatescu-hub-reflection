export const avl200StandardDovaziMasurareTrasabilitateHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</p>
        <p class="avl-doc-lead">Evidence, Measurement &amp; Traceability Standard</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-200</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>1.0.0</td></tr>
        <tr><th scope="row">Statut</th><td>Activ</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data publicării</th><td>14 septembrie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>14 septembrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>14 septembrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate">https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate</a></td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, <a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104 — Cum se măsoară AI Visibility</a></td></tr>
        <tr><th scope="row">Dependențe informative</th><td><a href="/lab/cercetare/ce-este-geo-aeo">AVL-101 — Ce este GEO/AEO și AI Visibility</a>, <a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102 — Cum aleg sistemele AI sursele și citările</a>, <a href="/lab/cercetare/seo-vs-geo">AVL-103 — SEO și GEO: relații, diferențe și suprapuneri</a>, <a href="/lab/cercetare/glosar-geo-aeo">AVL-105 — Glosar GEO/AEO și AI Visibility</a>, <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</a></td></tr>
        </tbody>
        </table>
      </div>

      <blockquote><strong>Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation</strong></blockquote>

      <p>AVL-200 definește standardul transversal prin care AI Visibility Lab transformă artefacte brute de cercetare în informație măsurabilă și, ulterior, în interpretări care pot fi urmărite înapoi până la dovezile care le susțin.</p>

      <p>Documentul nu definește o anumită intervenție GEO/AEO și nu înlocuiește metodologiile concrete, precum Tabula Rasa F0. El stabilește regulile comune pe care orice protocol, experiment, studiu de caz sau măsurare longitudinală TREBUIE să le respecte atunci când capturează, indexează, clasifică, măsoară, agregă, interpretează sau publică dovezi.</p>

      <p>AVL-200 pornește de la o regulă simplă:</p>

      <blockquote><strong>O concluzie nu trebuie să fie mai puternică decât traseul de dovezi care o susține.</strong></blockquote>

      <h2>Controlul documentului</h2>

      <p>AVL-200 este un document normativ de nivel C — Methodology în corpusul AI Visibility Lab Documentation.</p>

      <p>Versiunea curentă, <strong>1.0.0</strong>, este activă. AVL-200 este standardul activ al laboratorului pentru evidence, măsurare și trasabilitate, aplicabil transversal conform domeniului de aplicare din §2.</p>

      <p>Un set limitat de decizii pur operaționale (politica finală asupra unor artefacte ale Evidence Package, validarea end-to-end a implementării de referință pe un pachet real, auditul complet al schemei Evidence Index față de cerințele <code>AVL200-REQ</code>) rămân deschise și sunt documentate explicit, ca excepții acceptate, în §38. Ele nu afectează aplicabilitatea normativă a cerințelor din acest document.</p>

      <p>În acest document, termenii <strong>TREBUIE</strong>, <strong>NU TREBUIE</strong>, <strong>ESTE OBLIGATORIU</strong>, <strong>AR TREBUI</strong>, <strong>NU AR TREBUI</strong> și <strong>POATE</strong> sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:</p>

      <ul>
        <li><strong>TREBUIE / NU TREBUIE</strong> — condiție obligatorie pentru conformitate;</li>
        <li><strong>AR TREBUI / NU AR TREBUI</strong> — recomandare puternică; abaterea este permisă numai cu justificare documentată;</li>
        <li><strong>POATE</strong> — opțiune permisă.</li>
      </ul>

      <p>În afara propozițiilor normative și a cerințelor identificate <code>AVL200-REQ-*</code>, acești termeni nu trebuie interpretați automat ca cerințe de conformitate.</p>

      <h2>1. Scop</h2>

      <p>Scopul AVL-200 este să definească un standard public, repetabil și auditabil pentru:</p>

      <ol>
        <li>conservarea artefactelor brute;</li>
        <li>stabilirea provenienței și integrității acestora;</li>
        <li>transformarea artefactelor în dovezi indexate;</li>
        <li>separarea faptelor deterministe de clasificările care presupun judecată;</li>
        <li>transformarea dovezilor în observații;</li>
        <li>transformarea observațiilor în măsurări;</li>
        <li>agregarea măsurărilor;</li>
        <li>delimitarea măsurării de interpretare;</li>
        <li>trasabilitatea bidirecțională dintre afirmația publicată și artefactul brut;</li>
        <li>versionarea și auditarea întregului lanț.</li>
      </ol>

      <blockquote><strong>AVL200-REQ-001 — Orice rezultat publicat ca măsurare conformă AI Visibility Lab TREBUIE să poată fi urmărit până la una sau mai multe dovezi identificabile.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-002 — O interpretare NU TREBUIE prezentată drept observație directă, iar o observație NU TREBUIE prezentată drept fapt documentat extern dacă nu există o sursă corespunzătoare.</strong></blockquote>

      <h2>2. Domeniu de aplicare</h2>

      <p>AVL-200 se aplică transversal tuturor activităților AI Visibility Lab care produc sau utilizează dovezi măsurabile, inclusiv:</p>

      <ul>
        <li>baseline-uri;</li>
        <li>remăsurări longitudinale;</li>
        <li>experimente publice;</li>
        <li>studii de caz;</li>
        <li>audituri;</li>
        <li>teste de entity resolution;</li>
        <li>evaluări ale citării și mențiunii;</li>
        <li>capturi de crawler access și HTTP behavior;</li>
        <li>structured-data validation;</li>
        <li>măsurări Search / AI Search;</li>
        <li>comparații între platforme;</li>
        <li>verificări înainte/după intervenții;</li>
        <li>orice viitor protocol care derivă o concluzie din artefacte observabile.</li>
      </ul>

      <p>AVL-200 NU definește:</p>

      <ul>
        <li>taxonomia specifică unui anumit protocol;</li>
        <li>scorurile unei anumite metodologii;</li>
        <li>query set-ul unui anumit studiu;</li>
        <li>intervențiile F1/F2 sau ale altui protocol;</li>
        <li>mecanismele interne nepublicate ale furnizorilor AI;</li>
        <li>o platformă obligatorie de stocare;</li>
        <li>un limbaj de programare obligatoriu;</li>
        <li>GitHub drept cerință metodologică universală.</li>
      </ul>

      <p>O implementare POATE utiliza GitHub Releases, fișiere CSV, scripturi Node, baze de date sau alte instrumente, cu condiția să respecte cerințele normative ale acestui standard.</p>

      <h2>3. Principiul epistemic fundamental</h2>

      <p>AI Visibility Lab separă cinci niveluri care NU TREBUIE confundate:</p>

      <h3>3.1. Raw Evidence</h3>

      <p>Artefactul original produs sau capturat în timpul unei rulări, sesiuni, verificări sau măsurări.</p>

      <p>Exemple:</p>

      <ul>
        <li>screenshot original;</li>
        <li>export HTML/PDF/text;</li>
        <li>înregistrare video;</li>
        <li>log de server/CDN/WAF;</li>
        <li>răspuns HTTP capturat;</li>
        <li>fișier <code>robots.txt</code> capturat la un moment dat;</li>
        <li>JSON-LD extras;</li>
        <li>export de validator;</li>
        <li>registru de rulare;</li>
        <li>fișier generat de instrumentul de măsurare.</li>
      </ul>

      <p>Raw Evidence descrie <strong>ce a fost conservat</strong>, nu ce înseamnă acel artefact.</p>

      <h3>3.2. Indexed Evidence</h3>

      <p>Raw Evidence însoțit de suficiente metadate și relații pentru ca artefactul să poată fi identificat, regăsit, verificat și legat de o rulare sau condiție experimentală.</p>

      <p>Un Indexed Evidence poate include:</p>

      <ul>
        <li>Evidence ID;</li>
        <li>cale/nume original;</li>
        <li>hash;</li>
        <li>dimensiune;</li>
        <li>platformă;</li>
        <li>query / query group;</li>
        <li>measurement point;</li>
        <li>sesiune;</li>
        <li>continuări multi-capture;</li>
        <li>duplicate;</li>
        <li>contaminare;</li>
        <li>anomalii;</li>
        <li>timestamp sau <code>UNKNOWN</code>;</li>
        <li>relații cu alte artefacte.</li>
      </ul>

      <p>Indexed Evidence descrie <strong>ce este artefactul și unde se află în experiment</strong>, nu rezultatul analitic derivat din el.</p>

      <h3>3.3. Observation</h3>

      <p>Afirmație verificabilă direct prin inspectarea uneia sau mai multor dovezi indexate.</p>

      <p>Exemple:</p>

      <ul>
        <li>„Numele entității apare în răspuns.”</li>
        <li>„Este afișat un link către domeniul canonic.”</li>
        <li>„Răspunsul atribuie entității profesia X.”</li>
        <li>„Platforma afișează o eroare.”</li>
        <li>„Screenshot-ul reprezintă partea 2 din același răspuns.”</li>
      </ul>

      <p>O observație NU presupune automat evaluarea corectitudinii sau a semnificației fenomenului.</p>

      <h3>3.4. Measurement</h3>

      <p>Aplicarea unei reguli definite asupra uneia sau mai multor observații pentru a produce o categorie, o valoare, un scor sau un indicator.</p>

      <p>Exemple:</p>

      <ul>
        <li>clasificarea rezultatului ca <code>HIT-C</code>;</li>
        <li><code>Canonical citation = YES</code>;</li>
        <li><code>Collision = NO</code>;</li>
        <li>rata HIT-C pe un set de N rulări;</li>
        <li>distribuția unei taxonomii;</li>
        <li>scor normalizat.</li>
      </ul>

      <p>Măsurarea cere o regulă explicită și reproductibilă.</p>

      <h3>3.5. Interpretation</h3>

      <p>Sensul atribuit unui tipar de măsurare, inclusiv explicații, inferențe, implicații și ipoteze.</p>

      <p>Exemplu:</p>

      <p>„Creșterea ratei HIT-C după intervenție este compatibilă cu o asociere mai puternică între entitate și sursa canonică.”</p>

      <p>Această propoziție poate fi legitimă, dar nu este Raw Evidence, Observation sau Measurement.</p>

      <blockquote><strong>AVL200-REQ-003 — Fiecare nivel TREBUIE să rămână identificabil separat în fluxul de cercetare.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-004 — Un instrument automat NU TREBUIE să transforme o clasificare incertă într-un fapt determinist numai pentru a completa schema.</strong></blockquote>

      <h2>4. Evidence-to-Claim Traceability</h2>

      <p>Lanțul complet urmărit de AI Visibility Lab este:</p>

      <pre><code>Raw Evidence
    ↓
Indexed Evidence
    ↓
Observation
    ↓
Measurement
    ↓
Interpretation
    ↓
Published Claim</code></pre>

      <p>Trasabilitatea TREBUIE să funcționeze în ambele direcții.</p>

      <p>Dinspre dovadă spre afirmație:</p>

      <pre><code>artifact → Evidence ID → observation → measurement → interpretation → claim</code></pre>

      <p>Dinspre afirmație spre dovadă:</p>

      <pre><code>claim → interpretation/measurement → observation → Evidence ID → raw artifact → integrity record</code></pre>

      <blockquote><strong>AVL200-REQ-005 — Pentru orice afirmație materială derivată dintr-o măsurare proprie, laboratorul TREBUIE să poată identifica baza de evidence care o susține.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-006 — O valoare agregată TREBUIE să permită identificarea populației de măsurări din care a fost calculată.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-007 — Un rezultat eliminat, exclus sau contaminat NU TREBUIE să dispară silențios din audit trail; starea și motivul excluderii TREBUIE documentate.</strong></blockquote>

      <h2>5. Fapte deterministe, clasificări și valori derivate</h2>

      <p>Pentru a limita amestecul dintre calcul și judecată, fiecare câmp relevant AR TREBUI să aparțină uneia dintre următoarele clase:</p>

      <h3>5.1. DETERMINISTIC</h3>

      <p>Valoare calculabilă direct din fișier, filesystem sau alt input tehnic fără judecată semantică.</p>

      <p>Exemple:</p>

      <ul>
        <li>SHA-256;</li>
        <li>dimensiune în bytes;</li>
        <li>nume de fișier;</li>
        <li>cale;</li>
        <li>format;</li>
        <li>dimensiuni imagine;</li>
        <li>existența unui fișier;</li>
        <li>număr de rânduri.</li>
      </ul>

      <p>Aceste valori AR TREBUI produse de cod, nu completate manual atunci când pot fi calculate sigur.</p>

      <h3>5.2. CLASSIFICATION</h3>

      <p>Valoare care presupune inspecție și judecată umană sau asistată de AI.</p>

      <p>Exemple:</p>

      <ul>
        <li>platformă observată;</li>
        <li>query observat;</li>
        <li>continuitatea logică a capturilor;</li>
        <li>contaminare;</li>
        <li>tip de evidence;</li>
        <li>motiv de excludere;</li>
        <li>rezultat taxonomic.</li>
      </ul>

      <p>Clasificările TREBUIE să permită audit și review.</p>

      <h3>5.3. DERIVED</h3>

      <p>Valoare calculată determinist din câmpuri deja existente.</p>

      <p>Exemple:</p>

      <ul>
        <li>Evidence ID construit conform unei convenții;</li>
        <li>Query Group ID;</li>
        <li>continuation flag;</li>
        <li>duplicate status bazat pe hash;</li>
        <li>agregări și scoruri definite matematic.</li>
      </ul>

      <blockquote><strong>AVL200-REQ-008 — O valoare determinist-calculabilă NU TREBUIE inventată sau estimată de evaluator dacă poate fi obținută direct din sursă.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-009 — Originea fiecărui câmp material AR TREBUI să fie identificabilă drept DETERMINISTIC, CLASSIFICATION sau DERIVED.</strong></blockquote>

      <h2>6. Semantica stărilor necunoscute</h2>

      <p>AI Visibility Lab NU echivalează absența informației cu un răspuns negativ.</p>

      <p>Valorile minime recomandate sunt:</p>

      <table>
        <thead>
          <tr><th>Valoare</th><th>Sens</th></tr>
        </thead>
        <tbody>
          <tr><td><code>YES</code></td><td>condiția a fost observată/confirmată conform regulii</td></tr>
          <tr><td><code>NO</code></td><td>condiția relevantă a fost verificată și nu este prezentă</td></tr>
          <tr><td><code>UNKNOWN</code></td><td>câmpul este relevant și a fost analizat, dar valoarea nu poate fi stabilită</td></tr>
          <tr><td><code>NOT_APPLICABLE</code></td><td>câmpul nu se aplică obiectului respectiv</td></tr>
          <tr><td><code>UNCLASSIFIED</code></td><td>câmpul nu a fost încă evaluat</td></tr>
          <tr><td><code>UNRESOLVED</code></td><td>există o relație sau referință declarată care nu poate fi încă rezolvată</td></tr>
        </tbody>
      </table>

      <p><code>UNKNOWN</code> ≠ <code>NO</code>.</p>

      <p><code>NOT_APPLICABLE</code> ≠ <code>UNKNOWN</code>.</p>

      <p><code>UNCLASSIFIED</code> ≠ <code>UNKNOWN</code>.</p>

      <blockquote><strong>AVL200-REQ-010 — <code>UNKNOWN</code> NU TREBUIE convertit în <code>NO</code> numai pentru a produce un dataset complet.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-011 — O versiune finală a unui Evidence Index NU TREBUIE să conțină <code>UNCLASSIFIED</code> pentru câmpuri obligatorii.</strong></blockquote>

      <h2>7. Faza metodologică și punctul de măsurare</h2>

      <p>AVL-200 separă două concepte care pot coincide într-un anumit studiu, dar nu sunt sinonime.</p>

      <h3>7.1. Methodological Phase</h3>

      <p>Faza descrie rolul unei etape într-o metodologie.</p>

      <p>Exemple existente în AI Visibility Lab:</p>

      <ul>
        <li><code>F0</code> — baseline / Tabula Rasa;</li>
        <li><code>F1</code> — intervenție asupra sursei canonice;</li>
        <li><code>F2</code> — consolidarea prezenței distribuite;</li>
        <li><code>F3</code> — remăsurare în arhitectura curentă a metodologiei.</li>
      </ul>

      <p>Fazele aparțin <strong>designului metodologic</strong>.</p>

      <h3>7.2. Measurement Point</h3>

      <p>Punctul de măsurare identifică o observație longitudinală în timp, independent de numele fazei metodologice.</p>

      <p>Convenția recomandată prospectiv:</p>

      <ul>
        <li><code>T0</code> — primul punct de măsurare;</li>
        <li><code>T1</code> — următorul punct;</li>
        <li><code>T2</code> etc.;</li>
        <li>sau o fereastră temporală explicită atunci când un singur punct nu este suficient.</li>
      </ul>

      <p>Un singur F poate include mai multe T-uri.</p>

      <p>Exemplu:</p>

      <pre><code>F1 / T1
F1 / T2
F1 / T3</code></pre>

      <p>Această situație poate apărea dacă aceeași intervenție este remăsurată de mai multe ori fără trecerea la o altă fază metodologică.</p>

      <h3>7.3. Convenții istorice și deviații</h3>

      <p>Documentele și studiile realizate înainte de formalizarea AVL-200 POT conține convenții în care <code>F</code> a fost folosit și ca identificator practic al unui snapshot sau measurement point.</p>

      <p>Aceste cazuri NU TREBUIE rescrise retroactiv numai pentru uniformizare vizuală.</p>

      <p>Corectarea corpusului TREBUIE făcută prin:</p>

      <ol>
        <li>păstrarea artefactului istoric;</li>
        <li>documentarea convenției folosite la momentul respectiv;</li>
        <li>introducerea regulii noi în versiunea următoare a documentației;</li>
        <li>publicarea unui mapping sau a unei note de compatibilitate când este necesar;</li>
        <li>evitarea falsificării istoriei executării.</li>
      </ol>

      <blockquote><strong>AVL200-REQ-012 — Faza metodologică și measurement point-ul TREBUIE tratate ca dimensiuni distincte în noile implementări conforme AVL-200.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-013 — O etichetă istorică deja folosită în evidence sau într-un rezultat publicat NU TREBUIE schimbată silențios numai pentru a corespunde unei convenții ulterioare.</strong></blockquote>

      <h2>8. Raw Evidence Standard</h2>

      <h3>8.1. Principiul conservării</h3>

      <p>Raw Evidence reprezintă forma conservată care intră în lanțul de audit.</p>

      <p>După înregistrarea sa într-o rundă de măsurare, Raw Evidence NU TREBUIE modificat in-place pentru a îmbunătăți lizibilitatea, denumirea, ordinea, rezultatul sau conformitatea aparentă.</p>

      <p>Operații precum conversia de format, redimensionarea, OCR-ul, redactarea sau adnotarea produc <strong>artefacte derivate</strong>, nu înlocuitori ai originalului.</p>

      <blockquote><strong>AVL200-REQ-014 — Raw Evidence original TREBUIE păstrat separat de orice copie procesată sau derivată.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-015 — O modificare a bytes-ilor Raw Evidence după înregistrarea hash-ului invalidează asocierea cu acel hash și TREBUIE tratată ca o versiune nouă sau ca incident.</strong></blockquote>

      <h3>8.2. Dovezi acceptabile</h3>

      <p>În funcție de protocol, pot fi acceptate:</p>

      <ul>
        <li>capturi integrale;</li>
        <li>exporturi conversaționale;</li>
        <li>fișiere brute;</li>
        <li>înregistrări video;</li>
        <li>loguri;</li>
        <li>răspunsuri HTTP;</li>
        <li>fișiere de configurare;</li>
        <li>registre de rulare;</li>
        <li>alte artefacte care permit verificarea directă a fenomenului măsurat.</li>
      </ul>

      <h3>8.3. Dovezi insuficiente singure</h3>

      <p>Nu sunt suficiente singure pentru o afirmație de conformitate:</p>

      <ul>
        <li>relatarea operatorului fără artefact;</li>
        <li>screenshot decupat care elimină informația esențială de context;</li>
        <li>screenshot fără posibilitatea legării de o rulare;</li>
        <li>text transcris manual fără original;</li>
        <li>rezumatul evaluatorului fără evidence;</li>
        <li>un rezultat selectat dintr-o serie nedeclarată.</li>
      </ul>

      <h2>9. Provenance Standard</h2>

      <p>Provenance răspunde la întrebarea:</p>

      <blockquote><strong>De unde provine artefactul și prin ce proces a ajuns în acest pachet?</strong></blockquote>

      <p>Pentru fiecare artefact material, protocolul AR TREBUI să păstreze, atunci când pot fi determinate legitim:</p>

      <ul>
        <li>entitatea;</li>
        <li>studiul;</li>
        <li>faza metodologică;</li>
        <li>measurement point;</li>
        <li>platforma;</li>
        <li>query-ul / query ID;</li>
        <li>run ID;</li>
        <li>sesiunea;</li>
        <li>limba;</li>
        <li>data și ora;</li>
        <li>fusul orar;</li>
        <li>configurația de cont;</li>
        <li>starea memoriei/istoricului;</li>
        <li>disponibilitatea web search;</li>
        <li>locația relevantă metodologic;</li>
        <li>modelul afișat, dacă este disponibil;</li>
        <li>instrumentul/operatorul;</li>
        <li>calea originală;</li>
        <li>numele original;</li>
        <li>hash-ul.</li>
      </ul>

      <p>Dacă o valoare nu poate fi stabilită, se aplică semantica din secțiunea 6.</p>

      <blockquote><strong>AVL200-REQ-016 — Timestamp-ul unei capturi NU TREBUIE dedus din mtime-ul fișierului dacă acel mtime reflectă numai arhivarea, copierea sau extracția.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-017 — Provenance metadata NU TREBUIE completată cu valori aproximative prezentate drept certe.</strong></blockquote>

      <h2>10. Integrity, authenticity, completeness și validity</h2>

      <p>AVL-200 separă concepte care NU sunt echivalente.</p>

      <h3>10.1. Integrity</h3>

      <p>Integritatea răspunde:</p>

      <blockquote>Bytes verificați acum sunt aceiași cu bytes fixați anterior?</blockquote>

      <p>Un hash criptografic poate demonstra egalitatea cu o stare hash-uită anterior, nu autenticitatea fenomenului capturat.</p>

      <h3>10.2. Provenance</h3>

      <p>Provenance descrie lanțul de origine și procesare.</p>

      <h3>10.3. Authenticity</h3>

      <p>Authenticity exprimă gradul în care există bază suficientă pentru a considera artefactul o reprezentare autentică a evenimentului/rulării declarate.</p>

      <p>Un hash calculat după ce un artefact a fost deja modificat nu poate detecta modificarea anterioară calculării hash-ului.</p>

      <h3>10.4. Completeness</h3>

      <p>Completeness exprimă dacă setul de evidence conține toate artefactele cerute de protocol.</p>

      <h3>10.5. Validity</h3>

      <p>Validity exprimă dacă artefactul și procedura sunt adecvate pentru măsurarea sau afirmația pentru care sunt utilizate.</p>

      <blockquote><strong>AVL200-REQ-018 — O verificare SHA-256 reușită NU TREBUIE descrisă drept dovadă suficientă a autenticității sau validității experimentale.</strong></blockquote>

      <h2>11. Evidence Index</h2>

      <p>Evidence Index este registrul structurat care leagă artefactele de contextul experimental.</p>

      <p>Un index conform AR TREBUI să permită cel puțin:</p>

      <ul>
        <li>identificare unică;</li>
        <li>regăsire;</li>
        <li>verificare hash;</li>
        <li>relația cu query/run/session;</li>
        <li>relații multipart;</li>
        <li>relații duplicate;</li>
        <li>status de contaminare;</li>
        <li>status de includere/excludere;</li>
        <li>anomalie de arhivare;</li>
        <li>review status;</li>
        <li>versionare.</li>
      </ul>

      <h3>11.1. Evidence ID</h3>

      <p>Evidence ID TREBUIE să fie:</p>

      <ul>
        <li>unic în domeniul definit al studiului;</li>
        <li>stabil după publicare;</li>
        <li>neambiguu;</li>
        <li>rezolvabil către artefactul indexat.</li>
      </ul>

      <p>Un Evidence ID atribuit unei perechi stabile de identitate a artefactului NU AR TREBUI reasignat altui artefact.</p>

      <h3>11.2. Multi-part evidence</h3>

      <p>Când un singur răspuns necesită mai multe capturi:</p>

      <ul>
        <li>capturile TREBUIE tratate ca părți ale aceleiași unități logice;</li>
        <li>ordinea TREBUIE păstrată;</li>
        <li>relația cu partea principală TREBUIE explicitată;</li>
        <li>o continuare NU TREBUIE transformată într-un query nou numai pentru că query-ul nu mai este vizibil în cadru.</li>
      </ul>

      <h3>11.3. Duplicate</h3>

      <p>Duplicatele byte-identice POT fi detectate prin hash.</p>

      <p>Ele NU TREBUIE șterse automat dacă existența duplicatului este relevantă pentru auditul arhivei.</p>

      <p>Near-duplicates NU TREBUIE declarați identici numai pe baza asemănării vizuale.</p>

      <h2>12. Observation Standard</h2>

      <p>Observation trebuie să fie formulată astfel încât un evaluator independent să poată răspunde:</p>

      <blockquote>„Pot vedea asta direct în evidence?”</blockquote>

      <p>O observație conformă:</p>

      <ul>
        <li>indică Evidence ID-ul sau setul de Evidence IDs;</li>
        <li>descrie doar ceea ce este vizibil/derivabil direct;</li>
        <li>evită explicațiile cauzale;</li>
        <li>evită atribuirea unei intenții platformei;</li>
        <li>evită inferențele despre mecanisme interne;</li>
        <li>păstrează incertitudinea atunci când evidence-ul este ambiguu.</li>
      </ul>

      <p>Exemplu conform:</p>

      <blockquote>„Răspunsul afișează numele entității și citează domeniul canonic.”</blockquote>

      <p>Exemplu neconform ca observație:</p>

      <blockquote>„Modelul are încredere în domeniul canonic.”</blockquote>

      <p>A doua propoziție este o interpretare despre un mecanism intern neobservabil.</p>

      <blockquote><strong>AVL200-REQ-019 — Fiecare observație materială TREBUIE să fie legată de evidence-ul care permite verificarea ei.</strong></blockquote>

      <h2>13. Measurement Standard</h2>

      <p>Measurement transformă observația printr-o regulă definită înainte sau declarată transparent la momentul analizei.</p>

      <p>O regulă de măsurare AR TREBUI să specifice:</p>

      <ul>
        <li>inputurile;</li>
        <li>criteriul;</li>
        <li>valorile permise;</li>
        <li>tratamentul necunoscutelor;</li>
        <li>tratamentul contaminării;</li>
        <li>tratamentul duplicatelelor;</li>
        <li>includerea/excluderea;</li>
        <li>formula de agregare, dacă există;</li>
        <li>versiunea regulii.</li>
      </ul>

      <blockquote><strong>AVL200-REQ-020 — O clasificare TREBUIE să aibă un criteriu operațional suficient de precis pentru a putea fi aplicat de un al doilea evaluator.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-021 — Un scor agregat NU TREBUIE publicat fără denominator, perioadă, populație analizată și regulă de calcul.</strong></blockquote>

      <h3>13.1. Measurement Rule Version</h3>

      <p>Pe lângă versiunea arhivei și versiunea metadatelor, o implementare matură AR TREBUI să păstreze versiunea regulii de măsurare atunci când taxonomia, criteriile sau formula se pot schimba.</p>

      <p>Exemplu conceptual:</p>

      <pre><code>archive_version: 1
metadata_version: 1.1
measurement_rule_version: 2.0</code></pre>

      <p>Același Raw Evidence poate fi reevaluat printr-o regulă nouă fără a pretinde că evidence-ul însuși s-a schimbat.</p>

      <h2>14. Aggregation Standard</h2>

      <p>Agregarea transformă măsurări individuale în indicatori de grup.</p>

      <p>Pentru orice agregare, TREBUIE cunoscute:</p>

      <ul>
        <li>N total;</li>
        <li>unitatea de analiză;</li>
        <li>perioada/fereastra;</li>
        <li>motoarele/platformele incluse;</li>
        <li>categoriile incluse;</li>
        <li>cazurile excluse;</li>
        <li>tratamentul <code>UNKNOWN</code> / <code>NOT_APPLICABLE</code> / <code>REFUZ</code> etc.;</li>
        <li>formula.</li>
      </ul>

      <p>Agregarea NU TREBUIE să ascundă distribuții importante.</p>

      <p>Două seturi cu același scor mediu pot avea distribuții radical diferite.</p>

      <blockquote><strong>AVL200-REQ-022 — Când un indicator agregat poate masca tipuri distincte de eșec, distribuția categoriilor AR TREBUI publicată împreună cu indicatorul.</strong></blockquote>

      <h2>15. Interpretation Boundary</h2>

      <p>Interpretation începe acolo unde evaluatorul răspunde la întrebarea:</p>

      <blockquote>„Ce înseamnă acest tipar?”</blockquote>

      <p>Interpretarea poate include:</p>

      <ul>
        <li>explicații posibile;</li>
        <li>comparații;</li>
        <li>implicații;</li>
        <li>atribuiri prudente;</li>
        <li>inferențe;</li>
        <li>ipoteze pentru următoarea fază.</li>
      </ul>

      <p>Interpretarea TREBUIE să respecte AVL-001 și să păstreze distincția dintre:</p>

      <ul>
        <li>documentat extern;</li>
        <li>observat direct;</li>
        <li>măsurat;</li>
        <li>inferat;</li>
        <li>ipotetizat.</li>
      </ul>

      <blockquote><strong>AVL200-REQ-023 — O corelație observată între o intervenție și o schimbare NU TREBUIE descrisă automat drept cauzalitate.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-024 — O interpretare bazată pe un eșantion finit NU TREBUIE generalizată la comportamentul universal al unei platforme fără bază suplimentară.</strong></blockquote>

      <h2>16. Human-in-the-loop și controlul calității</h2>

      <p>AVL-200 definește două forme distincte de review.</p>

      <h3>16.1. Exception Review</h3>

      <p>Se aplică elementelor ambigue, conflictuale sau cu impact asupra structurii datasetului.</p>

      <p>Exemple:</p>

      <ul>
        <li>Query ID incert;</li>
        <li>continuare incertă;</li>
        <li>platformă ambiguă;</li>
        <li>contaminare;</li>
        <li>includere/excludere;</li>
        <li>mapping confirmat fără bază;</li>
        <li>privacy issue.</li>
      </ul>

      <p>Astfel de probleme POT bloca finalizarea.</p>

      <h3>16.2. Quality-Control Sampling</h3>

      <p>Un dataset poate conține erori în cazuri pe care evaluatorul inițial nu le-a considerat ambigue.</p>

      <p>Prin urmare, proiectele cu cerințe ridicate de audit AR TREBUI să includă o verificare independentă pe un eșantion de clasificări aparent clare.</p>

      <blockquote><strong>AVL200-REQ-025 — Elementele care pot modifica identitatea query-ului, condiția experimentală, includerea/excluderea sau platforma NU TREBUIE finalizate automat atunci când clasificarea rămâne incertă.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-026 — Review-ul incertitudinilor NU TREBUIE tratat drept substitut complet pentru quality-control sampling.</strong></blockquote>

      <h2>17. Contaminare, incidente și anomalii</h2>

      <p>AVL-200 distinge:</p>

      <h3>17.1. Contamination</h3>

      <p>Influență care poate compromite comparabilitatea experimentală.</p>

      <p>Exemple:</p>

      <ul>
        <li>istoric conversațional;</li>
        <li>personalizare;</li>
        <li>intervenție aplicată înainte de închiderea baseline-ului;</li>
        <li>query reformulat în aceeași sesiune când protocolul interzice acest lucru;</li>
        <li>schimbare de cont/configurație.</li>
      </ul>

      <h3>17.2. Archive Anomaly</h3>

      <p>Problemă de organizare sau proveniență care nu implică automat invalidarea observației.</p>

      <p>Exemple:</p>

      <ul>
        <li>screenshot într-un folder de platformă greșit;</li>
        <li>nume inconsistent;</li>
        <li>fișier duplicat;</li>
        <li>ordine incertă.</li>
      </ul>

      <h3>17.3. Protocol Deviation</h3>

      <p>Abatere de la protocolul declarat.</p>

      <p>O abatere NU TREBUIE ascunsă pentru a păstra aparența unui experiment „curat”.</p>

      <blockquote><strong>AVL200-REQ-027 — Orice abatere materială descoperită după execuție TREBUIE documentată, evaluată pentru impact și păstrată în istoricul studiului.</strong></blockquote>

      <h2>18. Privacy și publicarea evidence-ului</h2>

      <p>Raw Evidence poate conține informații care nu trebuie publicate.</p>

      <p>AVL-200 distinge cel puțin:</p>

      <h3>18.1. Publicable</h3>

      <p>Poate fi publicat conform protocolului.</p>

      <h3>18.2. Privacy Review Required</h3>

      <p>Conține sau poate conține date personale ori informații care necesită evaluare înainte de publicare.</p>

      <h3>18.3. Secret / Credential — Hard Block</h3>

      <p>Parolele, token-urile, cheile API, cookie-urile de autentificare sau alte secrete operaționale NU TREBUIE publicate, chiar dacă operatorul dorește publicarea rapidă a pachetului.</p>

      <p>Dacă publicarea necesită redactare:</p>

      <ul>
        <li>originalul TREBUIE păstrat în forma protejată adecvată;</li>
        <li>versiunea redactată TREBUIE identificată ca artefact derivat;</li>
        <li>relația cu originalul TREBUIE documentată;</li>
        <li>artefactul derivat NU TREBUIE substituit silențios originalului.</li>
      </ul>

      <blockquote><strong>AVL200-REQ-028 — Datele confidențiale și secretele de acces NU TREBUIE incluse într-un evidence package public.</strong></blockquote>

      <h2>19. Versioning Model</h2>

      <p>AVL-200 separă minimum următoarele versiuni.</p>

      <h3>19.1. Archive Version</h3>

      <p>Se schimbă când se schimbă setul de Raw Evidence sau bytes care compun arhiva.</p>

      <h3>19.2. Metadata Version</h3>

      <p>Se schimbă când aceleași dovezi primesc corecții sau completări de indexare/metadata fără modificarea raw archive.</p>

      <h3>19.3. Measurement Rule Version</h3>

      <p>Se schimbă când taxonomia, criteriile sau formula de măsurare se modifică suficient încât rezultatul ar putea fi recalculat diferit.</p>

      <h3>19.4. Document Version</h3>

      <p>Versiunea documentului metodologic care definește regulile aplicabile.</p>

      <blockquote><strong>AVL200-REQ-029 — Corectarea unui artifact finalizat NU TREBUIE realizată prin suprascriere silențioasă dacă versiunea respectivă a fost deja publicată sau utilizată ca referință.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-030 — O versiune nouă TREBUIE să păstreze legătura cu versiunea precedentă și motivul schimbării.</strong></blockquote>

      <h2>20. State Model pentru Evidence Package</h2>

      <p>O implementare conformă AR TREBUI să distingă stări echivalente cu:</p>

      <pre><code>COLLECTED
   ↓
INVENTORIED
   ↓
CLASSIFIED
   ↓
REVIEWED
   ↓
VALIDATED
   ↓
FROZEN
   ↓
INTEGRITY_VERIFIED
   ↓
RELEASED / PUBLISHED</code></pre>

      <p>Stările descriu maturitatea pachetului, nu valoarea rezultatului experimental.</p>

      <h3>20.1. Tranziții</h3>

      <ul>
        <li><code>COLLECTED → INVENTORIED</code> — raw archive a fost identificată și inventariată;</li>
        <li><code>INVENTORIED → CLASSIFIED</code> — a fost adăugată metadata de judecată;</li>
        <li><code>CLASSIFIED → REVIEWED</code> — excepțiile obligatorii au fost rezolvate;</li>
        <li><code>REVIEWED → VALIDATED</code> — structura și relațiile au trecut validarea;</li>
        <li><code>VALIDATED → FROZEN</code> — versiunea este închisă pentru modificări in-place;</li>
        <li><code>FROZEN → INTEGRITY_VERIFIED</code> — manifestul de integritate a fost generat și verificat;</li>
        <li><code>INTEGRITY_VERIFIED → RELEASED</code> — pachetul a fost încărcat/publicat conform politicii studiului.</li>
      </ul>

      <p>O corecție după <code>FROZEN</code> AR TREBUI să producă o nouă versiune, nu întoarcerea silențioasă a aceleiași versiuni în <code>CLASSIFIED</code>.</p>

      <h2>21. Freeze, write protection și integrity verification</h2>

      <p>AVL-200 separă trei concepte.</p>

      <h3>21.1. Freeze policy</h3>

      <p>Decizia procedurală că o versiune este închisă pentru editare in-place.</p>

      <h3>21.2. Write protection</h3>

      <p>Mecanism tehnic care reduce riscul modificării accidentale, de exemplu permisiuni read-only.</p>

      <p>Write protection NU este echivalent cu imuabilitatea criptografică și poate fi reversibilă prin intervenția unui operator cu permisiuni suficiente.</p>

      <h3>21.3. Integrity verification</h3>

      <p>Mecanismul prin care o modificare poate fi detectată, de exemplu SHA-256 și verificarea ulterioară a manifestului.</p>

      <blockquote><strong>AVL200-REQ-031 — Artefactele finale TREBUIE validate înainte de calcularea manifestului final de integritate.</strong></blockquote>

      <blockquote><strong>AVL200-REQ-032 — După fixarea manifestului unei versiuni, orice modificare a unui artefact protejat de acel manifest TREBUIE tratată ca invalidare sau versiune nouă.</strong></blockquote>

      <h2>22. Evidence Package</h2>

      <p>Un Evidence Package este pachetul versionat care permite unui terț să verifice ce evidence a fost utilizat și în ce formă.</p>

      <p>Pachetul public conform AR TREBUI să conțină cel puțin:</p>

      <ol>
        <li>Raw Evidence archive sau acces controlat la aceasta, după politica studiului;</li>
        <li>Evidence Index;</li>
        <li>README / manifest descriptiv;</li>
        <li>manifest de integritate;</li>
        <li>identificatori de versiune;</li>
        <li>suficiente informații pentru legătura cu studiul și measurement point-ul.</li>
      </ol>

      <p>O implementare POATE include suplimentar:</p>

      <ul>
        <li>validation report;</li>
        <li>release notes;</li>
        <li>machine-readable manifest;</li>
        <li>schema version;</li>
        <li>processing log final;</li>
        <li>semnătură digitală;</li>
        <li>DOI sau alt persistent identifier.</li>
      </ul>

      <h3>22.1. Self-contained package</h3>

      <p>Atunci când este practic, pachetul AR TREBUI să fie verificabil fără a depinde de fișiere locale neverificabile sau de căi disponibile numai operatorului.</p>

      <h3>22.2. Validation Report</h3>

      <p>Dacă un <code>validation-report</code> este prezentat public drept dovadă că pachetul a trecut validarea, el AR TREBUI inclus în suprafața de integritate a release-ului sau asociat printr-un mecanism echivalent.</p>

      <p>Dacă este exclus din manifest, documentația TREBUIE să precizeze că este un artefact intern și nu o componentă protejată a Evidence Package-ului public.</p>

      <blockquote><strong>AVL200-REQ-033 — Limita exactă a Evidence Package-ului TREBUIE declarată explicit.</strong></blockquote>

      <h2>23. Checksum și manifestul de integritate</h2>

      <p>SHA-256 este algoritmul recomandat implicit pentru manifestele actuale AI Visibility Lab, fără a exclude un algoritm viitor mai potrivit.</p>

      <p>Manifestul:</p>

      <ul>
        <li>AR TREBUI să folosească nume canonice de fișier;</li>
        <li>TREBUIE să permită verificarea independentă;</li>
        <li>NU TREBUIE să includă o valoare inventată;</li>
        <li>NU TREBUIE prezentat drept dovadă a corectitudinii semantice a clasificării.</li>
      </ul>

      <p>Verificarea AR TREBUI executată:</p>

      <ol>
        <li>imediat după generare;</li>
        <li>din nou înainte de o operație mutativă de publicare/upload, dacă între cele două momente poate interveni o perioadă sau o confirmare umană.</li>
      </ol>

      <blockquote><strong>AVL200-REQ-034 — Un manifest de integritate TREBUIE verificat, nu doar generat.</strong></blockquote>

      <h2>24. Audit Trail</h2>

      <p>Audit Trail descrie acțiunile și rezultatele procesului, nu raționamentul intern privat al unui model AI.</p>

      <p>Un audit trail util poate include:</p>

      <ul>
        <li>timestamp;</li>
        <li>operație;</li>
        <li>script/instrument;</li>
        <li>input;</li>
        <li>output;</li>
        <li>status;</li>
        <li>warnings;</li>
        <li>reviewer;</li>
        <li>versiune.</li>
      </ul>

      <p>Audit Trail-ul poate fi append-only în timpul procesării.</p>

      <p>Dacă logul continuă să se modifice după înghețarea Evidence Package-ului, el TREBUIE tratat ca artefact distinct de package-ul pe care a fost deja calculat checksum-ul sau trebuie finalizat într-o versiune separată.</p>

      <blockquote><strong>AVL200-REQ-035 — Audit trail-ul NU TREBUIE să conțină explicații ale „gândirii interne” a modelului; trebuie să înregistreze acțiuni, decizii declarate și rezultate verificabile.</strong></blockquote>

      <h2>25. Idempotency și rerun</h2>

      <p>Un pipeline de evidence matur AR TREBUI să poată fi rulat repetat fără a distruge artefacte valide sau a schimba identificatori stabili fără motiv.</p>

      <p>Comportamente recomandate:</p>

      <ul>
        <li>păstrarea clasificărilor existente pentru artefacte neschimbate;</li>
        <li>reutilizarea Evidence ID-urilor pentru aceeași identitate de artefact;</li>
        <li>evitarea upload-urilor duplicate;</li>
        <li>refuzul suprascrierii unei versiuni publicate;</li>
        <li>semnalarea diferențelor, nu „curățarea” lor automată.</li>
      </ul>

      <blockquote><strong>AVL200-REQ-036 — O rerulare NU TREBUIE să rescrie silențios istoria unui pachet deja publicat.</strong></blockquote>

      <h2>26. Separarea AI de execuția deterministă</h2>

      <p>Implementarea de referință AI Visibility Lab adoptă principiul:</p>

      <blockquote><strong>AI clasifică; codul execută operațiile deterministe.</strong></blockquote>

      <p>Aceasta este o strategie de implementare, nu o obligație de tehnologie.</p>

      <p>Principiul normativ din spatele ei este:</p>

      <ul>
        <li>judecata semantică TREBUIE diferențiată de calcul;</li>
        <li>valorile calculabile TREBUIE obținute determinist atunci când este posibil;</li>
        <li>incertitudinea clasificării TREBUIE reprezentată explicit;</li>
        <li>un model AI NU TREBUIE folosit ca sursă pentru hash, dimensiune de fișier, timestamp absent sau alt fapt ce poate fi verificat direct.</li>
      </ul>

      <blockquote><strong>AVL200-REQ-037 — Sistemul TREBUIE să poată distinge ce valori au fost calculate, ce valori au fost clasificate și ce valori au fost derivate.</strong></blockquote>

      <h2>27. Implementarea de referință <code>evidence-release</code></h2>

      <p>AI Visibility Lab poate utiliza agentul <code>evidence-release</code> drept implementare tehnică de referință pentru segmentul:</p>

      <pre><code>Raw Evidence → Indexed Evidence → Verified Evidence Package</code></pre>

      <p>Implementarea curentă:</p>

      <ul>
        <li>citește config-ul pachetului;</li>
        <li>verifică și inventariază arhiva;</li>
        <li>calculează hash-uri și metadata tehnică;</li>
        <li>permite clasificare vizuală controlată;</li>
        <li>generează staging index;</li>
        <li>introduce human-review gate;</li>
        <li>generează Evidence Index și README;</li>
        <li>validează structura și conținutul;</li>
        <li>aplică write protection/freeze;</li>
        <li>construiește și verifică checksum-uri;</li>
        <li>prezintă sumarul;</li>
        <li>solicită confirmare explicită;</li>
        <li>pregătește/încarcă un GitHub Draft Release;</li>
        <li>se oprește înainte de publicarea release-ului.</li>
      </ul>

      <p>Această implementare NU definește prin ea însăși metodologia AVL-200.</p>

      <p>Dacă implementarea se schimbă, cerințele normative ale AVL-200 rămân sursa metodologică de adevăr.</p>

      <h3>27.1. Statutul implementării</h3>

      <p>Până la validarea end-to-end pe un pachet real și documentarea rezultatului, implementarea de referință AR TREBUI descrisă drept <strong>provisional / în validare operațională</strong>, nu drept dovadă suficientă că toate cerințele AVL-200 sunt îndeplinite în orice situație.</p>

      <h2>28. Reproducibility vs. repeatability</h2>

      <p>Sistemele AI sunt time-dependent și pot fi influențate de:</p>

      <ul>
        <li>versiunea modelului;</li>
        <li>indexul/retrieval state;</li>
        <li>account/session state;</li>
        <li>personalizare;</li>
        <li>disponibilitatea search/retrieval;</li>
        <li>geografie;</li>
        <li>schimbări de produs;</li>
        <li>sursele disponibile la momentul rulării.</li>
      </ul>

      <p>Prin urmare, AVL-200 distinge:</p>

      <h3>28.1. Reproducibilitatea protocolului</h3>

      <p>Un terț poate înțelege și executa aceeași procedură documentată.</p>

      <h3>28.2. Reproducerea outputului identic</h3>

      <p>Nu este garantată și, pentru sisteme generative dinamice, poate fi imposibilă.</p>

      <blockquote><strong>AVL200-REQ-038 — Documentația NU TREBUIE să promită reproducerea unui răspuns AI identic atunci când protocolul poate garanta doar reproducibilitatea procedurii.</strong></blockquote>

      <h2>29. Failure Conditions</h2>

      <p>O implementare conformă TREBUIE să se oprească sau să evidențieze explicit statutul de conformitate atunci când apare cel puțin una dintre următoarele situații materiale:</p>

      <ul>
        <li>raw archive nu poate fi citită/verificată;</li>
        <li>hash-ul arhivei se schimbă neașteptat;</li>
        <li>Evidence IDs nu sunt unice;</li>
        <li>referințe obligatorii sunt nerezolvate;</li>
        <li><code>UNCLASSIFIED</code> rămâne în câmpuri obligatorii;</li>
        <li>un element critic necesită human review nefinalizat;</li>
        <li>există un secret/credential în pachetul de publicare;</li>
        <li>manifestul de integritate nu verifică;</li>
        <li>o versiune publică ar trebui suprascrisă pentru a continua;</li>
        <li>output-ul final nu poate fi legat de evidence-ul sursă.</li>
      </ul>

      <blockquote><strong>AVL200-REQ-039 — Eșecul unei cerințe obligatorii NU TREBUIE convertit în PASS prin ignorare, ștergere sau reformulare cosmetică.</strong></blockquote>

      <h2>30. Conformance</h2>

      <p>Un proces poate fi declarat <strong>AVL-200 conform</strong> numai dacă:</p>

      <ol>
        <li>separă Raw Evidence, Indexed Evidence, Observation, Measurement și Interpretation;</li>
        <li>păstrează proveniența materială;</li>
        <li>utilizează semantica explicită a necunoscutelor;</li>
        <li>păstrează Raw Evidence original;</li>
        <li>permite trasabilitatea evidence-to-claim;</li>
        <li>documentează contaminările și abaterile;</li>
        <li>aplică versionare;</li>
        <li>validează înainte de freeze/checksum;</li>
        <li>verifică manifestul de integritate;</li>
        <li>tratează privacy și secretele conform secțiunii 18;</li>
        <li>nu suprascrie silențios o versiune publicată;</li>
        <li>păstrează delimitarea dintre observație, măsurare și interpretare.</li>
      </ol>

      <p>Conformitatea cu AVL-200 NU implică automat conformitatea cu AVL-201 sau cu alt protocol specific. Fiecare metodologie poate adăuga cerințe proprii.</p>

      <h2>31. Relația cu AVL-201 — Tabula Rasa F0</h2>

      <p>AVL-201 definește protocolul concret pentru baseline-ul Tabula Rasa F0.</p>

      <p>AVL-200 definește standardul transversal de evidence, measurement și traceability pe care baseline-ul și viitoarele faze îl pot utiliza.</p>

      <p>Începând cu activarea AVL-200 (v1.0.0, 14 septembrie 2026), <a href="/lab/metodologie/tabula-rasa-f0">AVL-201</a> declară AVL-200 ca dependință normativă explicită în controlul documentului. Rescrierea efectivă a secțiunilor generice din AVL-201 pentru a referenția direct AVL-200, în locul duplicării actuale, rămâne o revizie de conținut separată, neexecutată încă — adăugarea dependinței nu presupune, prin ea însăși, că duplicarea a fost eliminată.</p>

      <p>La următoarea revizie de conținut a AVL-201, elementele generic aplicabile tuturor studiilor AR TREBUI referențiate către AVL-200, în timp ce AVL-201 ar trebui să păstreze ceea ce este specific F0:</p>

      <ul>
        <li>scopul baseline-ului;</li>
        <li>condiția fără intervenție;</li>
        <li>query set-ul F0;</li>
        <li>sesiunea curată F0;</li>
        <li>taxonomia F0;</li>
        <li>scoring-ul F0;</li>
        <li>livrabilele specifice baseline-ului;</li>
        <li>relația cu fazele ulterioare.</li>
      </ul>

      <h3>31.1. Compatibilitate istorică F/T</h3>

      <p>Publicarea AVL-200 NU invalidează automat studiile executate anterior sub convențiile existente.</p>

      <p>Primul baseline poate fi publicat în forma în care a fost executat și documentat, cu deviațiile reale păstrate.</p>

      <p>Ulterior, revizia documentației poate introduce mapping-ul dintre faza metodologică și measurement point fără a pretinde că artefactele istorice au fost denumite altfel decât au fost în realitate.</p>

      <p>Aceasta este o aplicație directă a principiului AI Visibility Lab conform căruia metodologia se actualizează prin documentarea erorilor și a abaterilor, nu prin cosmetizarea retrospectivă a rezultatului.</p>

      <p>Mapping-ul de nomenclatură dintre <code>F0</code> (numele istoric al fazei de baseline) și <code>T0</code> (notația generică de measurement point folosită de AI Visibility Lab începând cu AVL-202) este documentat explicit în <a href="/lab/metodologie">AVL-202 §„Cum se citesc identificatorii AVL"</a> și în nota de nomenclatură din corpul AVL-202. AVL-200 nu duplică acel mapping aici — artefactele și rutele deja publicate sub convenția F0 nu sunt rescrise retroactiv (§17.3).</p>

      <h2>32. Relația cu pagina <code>/lab/metodologie</code></h2>

      <p>Pagina <a href="/lab/metodologie">/lab/metodologie</a> ar trebui să funcționeze ca hartă publică a sistemului metodologic, nu ca duplicat al acestui standard.</p>

      <p>Structura recomandată:</p>

      <pre><code>Research question
      ↓
Protocol design
      ↓
Measurement execution
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
      ↓
Published claim
      ↓
Case study / experiment / report</code></pre>

      <p>Pagina ar trebui să explice ce document guvernează fiecare strat:</p>

      <ul>
        <li>AVL-001 — governance epistemic;</li>
        <li>AVL-104 — fundamentul măsurării AI Visibility;</li>
        <li>AVL-200 — evidence, measurement și traceability;</li>
        <li>AVL-201 — baseline Tabula Rasa F0;</li>
        <li>documentele ulterioare — intervenții și remăsurări;</li>
        <li>studiile de caz — aplicații concrete ale metodologiei.</li>
      </ul>

      <h2>33. Limitări</h2>

      <p>AVL-200 nu elimină următoarele limitări:</p>

      <ul>
        <li>sistemele AI rămân parțial black-box;</li>
        <li>aceeași rulare poate produce output diferit în alt moment;</li>
        <li>un screenshot nu dovedește mecanismul intern care a produs răspunsul;</li>
        <li>un hash nu dovedește autenticitatea pre-hash;</li>
        <li>un evaluator poate clasifica greșit;</li>
        <li>un protocol poate omite o variabilă relevantă;</li>
        <li>o asociere temporală nu demonstrează cauzalitate;</li>
        <li>un Evidence Package complet nu garantează că interpretarea este corectă;</li>
        <li>reproducerea procedurii nu garantează reproducerea outputului.</li>
      </ul>

      <p>Scopul standardului este reducerea incertitudinii și creșterea auditabilității, nu eliminarea tuturor surselor de eroare.</p>

      <h2>34. Documente asociate</h2>

      <h3>Normative</h3>

      <ul>
        <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>.</li>
        <li><a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104 — Cum se măsoară AI Visibility</a>.</li>
      </ul>

      <h3>Informative</h3>

      <ul>
        <li><a href="/lab/cercetare/ce-este-geo-aeo">AVL-101 — Ce este GEO/AEO și AI Visibility</a>.</li>
        <li><a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102 — Cum aleg sistemele AI sursele și citările</a>.</li>
        <li><a href="/lab/cercetare/seo-vs-geo">AVL-103 — SEO și GEO: relații, diferențe și suprapuneri</a>.</li>
        <li><a href="/lab/cercetare/glosar-geo-aeo">AVL-105 — Glosar GEO/AEO și AI Visibility</a>.</li>
        <li><a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</a>.</li>
      </ul>

      <h3>Standarde și referințe externe</h3>

      <ul>
        <li><a href="https://www.rfc-editor.org/info/rfc2119/" target="_blank" rel="noopener noreferrer">RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels</a>.</li>
        <li><a href="https://www.rfc-editor.org/rfc/rfc8174.html" target="_blank" rel="noopener noreferrer">RFC 8174 — Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words</a>.</li>
        <li><a href="https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=910977" target="_blank" rel="noopener noreferrer">NIST Secure Hash Standard (SHA-2 family)</a>, pentru contextul utilizării SHA-256.</li>
      </ul>

      <p>Referințele externe susțin terminologia tehnică generală. Regulile metodologice AVL-200 rămân standardul propriu al AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.</p>

      <h2>35. Implementare editorială și factuală</h2>

      <p>La publicarea acestui document:</p>

      <ul>
        <li>fiecare afirmație despre comportamentul unui furnizor AI TREBUI reverificată live dacă este materială;</li>
        <li>o afirmație proprie metodologică TREBUIE identificată ca regulă AI Visibility Lab, nu atribuită unui provider extern;</li>
        <li>documentul NU TREBUIE să pretindă că hash-urile, JSON-LD, GitHub Releases sau orice alt mecanism garantează citarea sau vizibilitatea AI;</li>
        <li>data publicării TREBUIE completată numai la momentul primei publicări publice reale;</li>
        <li><code>last_reviewed</code> TREBUIE să reflecte o verificare factuală efectivă;</li>
        <li>canonicalul rămâne propus până când ruta publică este implementată.</li>
      </ul>

      <h2>36. Checklist de conformitate AVL-200</h2>

      <h3>Evidence</h3>

      <ul>
        <li>☐ Raw Evidence original este păstrat.</li>
        <li>☐ Evidence-ul poate fi identificat prin ID stabil.</li>
        <li>☐ Hash-urile sunt calculate determinist.</li>
        <li>☐ Provenance este documentat fără valori inventate.</li>
        <li>☐ Multipart evidence este legat explicit.</li>
        <li>☐ Duplicatele sunt documentate, nu șterse silențios.</li>
      </ul>

      <h3>Classification</h3>

      <ul>
        <li>☐ <code>UNKNOWN</code> este separat de <code>NO</code>.</li>
        <li>☐ <code>NOT_APPLICABLE</code> este separat de <code>UNKNOWN</code>.</li>
        <li>☐ Nu există <code>UNCLASSIFIED</code> în câmpurile obligatorii ale versiunii finale.</li>
        <li>☐ Cazurile critice incerte au trecut human review.</li>
      </ul>

      <h3>Measurement</h3>

      <ul>
        <li>☐ Observația este separată de measurement.</li>
        <li>☐ Measurement rule este documentată.</li>
        <li>☐ Denominatorul și populația sunt declarate.</li>
        <li>☐ Tratamentul cazurilor excluse/contaminate este explicit.</li>
        <li>☐ Versiunea regulii este identificabilă când regulile s-au schimbat.</li>
      </ul>

      <h3>Traceability</h3>

      <ul>
        <li>☐ Fiecare claim material derivat din studiu poate fi urmărit spre measurement.</li>
        <li>☐ Measurement poate fi urmărit spre observation.</li>
        <li>☐ Observation poate fi urmărită spre Evidence ID.</li>
        <li>☐ Evidence ID poate fi rezolvat spre raw artifact.</li>
      </ul>

      <h3>Integrity</h3>

      <ul>
        <li>☐ Artefactele sunt validate înainte de freeze.</li>
        <li>☐ Freeze/write protection este distinct conceptual de integrity verification.</li>
        <li>☐ Manifestul este generat după finalizarea artefactelor protejate.</li>
        <li>☐ Manifestul a fost verificat.</li>
        <li>☐ O modificare ulterioară produce versiune nouă sau incident.</li>
      </ul>

      <h3>Privacy</h3>

      <ul>
        <li>☐ Niciun secret/credential nu intră în pachetul public.</li>
        <li>☐ Datele personale necesită review conform politicii.</li>
        <li>☐ Orice redacted derivative este etichetat drept derivat.</li>
      </ul>

      <h3>Versioning</h3>

      <ul>
        <li>☐ Archive version este explicită.</li>
        <li>☐ Metadata version este explicită.</li>
        <li>☐ Measurement-rule version este explicită atunci când este relevantă.</li>
        <li>☐ Document version este explicită.</li>
        <li>☐ Istoricul modificărilor este păstrat.</li>
      </ul>

      <h3>Publication</h3>

      <ul>
        <li>☐ Limita Evidence Package-ului este declarată.</li>
        <li>☐ Statusul release-ului este clar.</li>
        <li>☐ Nicio versiune publicată nu a fost suprascrisă silențios.</li>
        <li>☐ Data publicării nu a fost inventată.</li>
      </ul>

      <h2>37. Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>0.9.0</td>
            <td>13 septembrie 2026</td>
            <td>Draft pentru revizuire</td>
            <td>Prima versiune completă propusă. Formalizează lanțul Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation; introduce Evidence-to-Claim Traceability, separarea phase/timepoint, semanticile UNKNOWN/NO/NOT_APPLICABLE/UNCLASSIFIED, provenance/integrity/validity, versionarea arhivei/metadatelor/regulii de măsurare, state model-ul Evidence Package, freeze/integrity, human review, privacy și relația cu implementarea <code>evidence-release</code>.</td>
          </tr>
          <tr>
            <td>1.0.0</td>
            <td>14 septembrie 2026</td>
            <td>Activ</td>
            <td>Activare formală. Canonicalul devine definitiv (<code>/lab/metodologie/standard-dovezi-masurare-trasabilitate</code>); AVL-001 actualizat pentru a include AVL-200 la Nivelul C; AVL-201 actualizat pentru a declara AVL-200 ca dependință normativă; mapping-ul istoric F0/T0 referențiat explicit către AVL-202; fact-check final al citărilor externe (RFC 2119, RFC 8174, NIST FIPS 180-4) efectuat și confirmat. Un set de decizii pur operaționale rămân deschise, documentate explicit ca excepții acceptate în §38 — activarea nu a fost condiționată de închiderea lor completă, decizie confirmată de Alex Matescu la 14 septembrie 2026.</td>
          </tr>
        </tbody>
      </table>

      <h2>38. Excepții acceptate la activare (v1.0.0)</h2>

      <p>Secțiunea „Decizii deschise înainte de 1.0.0” din draftul 0.9.0 avea 12 puncte. La activare (14 septembrie 2026), punctele 1, 2, 3, 4, 10 și 11 au fost închise (vezi §37). Punctele rămase sunt decizii pur operaționale, fără impact asupra aplicabilității normative a cerințelor <code>AVL200-REQ</code> din acest document, și au fost acceptate explicit ca excepții deschise de Alex Matescu la activare:</p>

      <ol start="5">
        <li>statutul <code>validation-report.md</code> (artefact public protejat de manifest vs. artefact intern) — nedecis; tratat provizoriu drept artefact intern (§22.2) până la o decizie explicită;</li>
        <li>statutul <code>release-notes.md</code> în Evidence Package — nedecis;</li>
        <li>politica pentru audit trail final și eventuala lui fixare/hash-uire — nedecisă;</li>
        <li>validarea end-to-end a implementării de referință <code>evidence-release</code> pe un pachet real — neconfirmată; există cel puțin o arhivă de evidence brută candidată în lucru, dar parcurgerea completă a pipeline-ului (inventariere → hash → clasificare → review → index → README → validare → freeze → checksum → verificare → draft release) nu a fost documentată ca finalizată;</li>
        <li>verificarea explicită că schema Evidence Index și implementarea agentului <code>evidence-release</code> satisfac integral cerințele <code>AVL200-REQ</code> aplicabile — neauditată.</li>
      </ol>

      <p>Aceste puncte NU TREBUIE tratate ca închise. Statutul lor real rămâne cel descris mai sus până la o verificare sau decizie explicită ulterioară, documentată la rândul ei într-o versiune viitoare (§19.4).</p>

      <blockquote>
        <p><strong>Declarație finală</strong></p>
        <p>AI Visibility Lab nu tratează dovada ca decor al concluziei.<br />
        Concluzia este permisă numai în măsura în care poate fi urmărită printr-un lanț explicit de observații, măsurări și artefacte verificabile.<br />
        Când procesul descoperă o abatere, o incertitudine sau o eroare, aceasta se documentează și se versionază; nu se corectează retrospectiv numai pentru a produce o poveste mai curată.</p>
      </blockquote>
`;
