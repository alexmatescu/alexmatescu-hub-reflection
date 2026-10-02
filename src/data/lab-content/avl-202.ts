export const avl202CadruMetodologicHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-202 — Cadrul metodologic AI Visibility Lab</p>
        <p class="avl-doc-lead">Cum măsurăm, documentăm, intervenim și comparăm vizibilitatea unei entități în Search și AI Search</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-202</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>1.2.0</td></tr>
        <tr><th scope="row">Statut</th><td>Activ</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data publicării</th><td>14 septembrie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>2 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>2 octombrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie">https://delamatescu.ro/lab/metodologie</a></td></tr>
        <tr><th scope="row">Dependență</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a></td></tr>
        <tr><th scope="row">Documente informative</th><td><a href="/lab/cercetare/ce-este-geo-aeo">AVL-101 — Ce este GEO/AEO și AI Visibility</a>, <a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102 — Cum aleg sistemele AI sursele și citările</a>, <a href="/lab/cercetare/seo-vs-geo">AVL-103 — SEO vs GEO</a>, <a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104 — Cum se măsoară AI Visibility</a>, <a href="/lab/cercetare/glosar-geo-aeo">AVL-105 — Glosar GEO/AEO și AI Visibility</a></td></tr>
        <tr><th scope="row">Documente normative asociate</th><td>AVL-200 — Standard dovezi, măsurare și trasabilitate; <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa T0</a></td></tr>
        <tr><th scope="row">Familii metodologice</th><td>Market Measurement — <code>AVL-MKT-*</code>: <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a> (Draft pentru revizuire, v0.9.0); AVL-MKT-002 — Market Query Panel (planificat)</td></tr>
        </tbody>
        </table>
      </div>

      <blockquote><strong>Principiul de bază:</strong> înainte de a optimiza, măsurăm. Înainte de a atribui un rezultat unei intervenții, documentăm ce era înainte și ce s-a schimbat după.</blockquote>

      <h2>Identitatea documentului</h2>

      <p>Documentul-cadru care organizează metodologia AI Visibility Lab și declară relațiile dintre principiile Foundation, standardul de dovezi, specificația de baseline și viitoarele protocoale metodologice.</p>

      <p><strong>Scopul documentului:</strong> definirea cadrului metodologic comun prin care AI Visibility Lab transformă observații despre Search și AI Search în măsurători documentate, comparabile și verificabile și stabilirea relațiilor normative dintre documentele metodologice.</p>

      <p><strong>Publicul căruia i se adresează:</strong> cercetători, practicieni GEO/AEO/SEO, proprietari de site-uri și entități, dezvoltatori, autori și orice persoană care vrea să înțeleagă cum sunt măsurate și interpretate rezultatele publicate de AI Visibility Lab.</p>

      <p>Metodologia AI Visibility Lab transformă întrebări precum „sunt găsit?”, „sunt identificat corect?”, „sunt citat?” sau „ce s-a schimbat după optimizare?” în procese de măsurare documentate, comparabile și verificabile.</p>

      <p>Nu încercăm să deducem algoritmii interni ai platformelor dintr-o singură observație. Stabilim mai întâi starea inițială, păstrăm dovezile, declarăm intervențiile și repetăm măsurarea în condiții cât mai comparabile.</p>

      <h2>Cum se citesc identificatorii AVL</h2>

      <p>Identificatorii AVL sunt <strong>permanenți</strong> și reflectă <strong>ordinea de înregistrare a documentelor</strong>, nu o ierarhie de precedență și nici ordinea recomandată de lectură.</p>

      <p>Un document cu un identificator numeric mai mare poate defini cadrul conceptual în care sunt interpretate documente înregistrate anterior. Relațiile dintre documente sunt declarate explicit prin rol, dependențe și referințe normative; ele nu sunt deduse din număr.</p>

      <p>Prin urmare:</p>

      <ul>
        <li><strong>AVL-200</strong> rămâne identificatorul permanent pentru <strong>Standard dovezi, măsurare și trasabilitate</strong>;</li>
        <li><strong>AVL-201</strong> rămâne identificatorul permanent pentru <strong>Tabula Rasa T0</strong>;</li>
        <li><strong>AVL-202</strong> este identificatorul permanent pentru <strong>Cadrul metodologic AI Visibility Lab</strong>.</li>
      </ul>

      <p>Aceste ID-uri nu se renumerotează retrospectiv doar pentru a produce o succesiune numerică mai elegantă.</p>

      <h3>Identificatorii de familie: <code>AVL-MKT-*</code></h3>

      <p>Pe lângă seria numerică <code>AVL-NNN</code>, Nivelul C poate conține familii metodologice cu namespace propriu. Prima familie de acest tip este <strong>Market Measurement</strong>, cu identificatori de forma <code>AVL-MKT-NNN</code>. Definiția completă a namespace-ului este stabilită în <a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, §17.</p>

      <p>Într-un identificator <code>AVL-MKT-NNN</code>, <code>AVL</code> indică apartenența la corpusul normativ AI Visibility Lab, <code>MKT</code> indică familia Market Measurement, iar <code>NNN</code> identifică permanent documentul în interiorul familiei. Numerotarea familiei începe cu <code>001</code>, este independentă de seria <code>AVL-NNN</code> și reflectă ordinea de înregistrare în familie, nu ordinea de lectură. <strong>AVL-MKT-001</strong> și <strong>AVL-001</strong> sunt documente diferite: numărul comun nu exprimă nicio relație între ele.</p>

      <h3>Ordinea de înregistrare</h3>

      <p><strong>AVL-200 → AVL-201 → AVL-202</strong></p>

      <p>Familia <code>AVL-MKT-*</code> are propria ordine de înregistrare, care începe cu AVL-MKT-001.</p>

      <h3>Ordinea conceptuală recomandată de lectură</h3>

      <p><strong>AVL-001 → AVL-202 → AVL-200 / AVL-201 → documentele familiei AVL-MKT</strong></p>

      <p>AVL-001 stabilește principiile Foundation. AVL-202 descrie cadrul metodologic general. AVL-200 și AVL-201 formalizează componente specifice ale acelui cadru. Documentele <code>AVL-MKT-*</code> formalizează măsurarea reprezentării unei piețe și se citesc după AVL-202.</p>

      <h2>Arhitectura metodologiei</h2>

      <p>Relația dintre documentele existente și cele planificate este:</p>

      <pre><code>AVL-001
Foundation
   │
   ▼
AVL-202
Cadrul metodologic AI Visibility Lab
   │
   ├── Metodologia de bază (Core Methodology)
   │     ├── AVL-200  Standard dovezi, măsurare și trasabilitate
   │     ├── AVL-201  Tabula Rasa F0 — Baseline
   │     └── viitoare documente metodologice / protocoale
   │
   └── Market Measurement — familia AVL-MKT-*
         ├── AVL-MKT-001  Market Scope &amp; Eligibility Protocol   (Draft pentru revizuire, v0.9.0)
         ├── AVL-MKT-002  Market Query Panel                    (planificat)
         └── viitoare protocoale ale familiei (AVL-MKT-003 …)</code></pre>

      <p>Relația este <strong>conceptuală și normativă</strong>, nu cronologică. AVL-200 și AVL-201 au fost înregistrate înainte ca documentul-cadru AVL-202 să fie formalizat; acest istoric este păstrat, nu rescris.</p>

      <p><strong>AVL-MKT este o familie funcțională în interiorul Nivelului C — Methodology și nu reprezintă un nivel normativ separat.</strong> Documentele familiei sunt guvernate de AVL-001 și de AVL-202 la fel ca oricare alt document de Nivel C.</p>

      <h3>Precedența normativă</h3>

      <pre><code>AVL-001
   ↓
AVL-202
   ↓
protocoale normative specifice familiei (ex. AVL-MKT-*)
   ↓
instanțe ale metodologiei (ex. instanțe MKT-* cu Market Reference Set, măsurători concrete)
   ↓
măsurare</code></pre>

      <p>Un protocol de familie poate detalia, dar nu poate contrazice AVL-202 sau AVL-001. O instanță aplică protocolul; nu îl modifică.</p>

      <h3>Rolul paginii /lab/metodologie</h3>

      <p>Pagina publică <a href="/lab/metodologie">/lab/metodologie</a> este hub-ul metodologic al AI Visibility Lab. Ea are patru funcții:</p>

      <ol>
        <li>prezintă cadrul metodologic general;</li>
        <li>explică ciclul metodologic și principiile comune;</li>
        <li>oferă punctul de intrare către documentele normative;</li>
        <li>arată relațiile dintre standarde, baseline-uri, familiile metodologice și protocoalele viitoare.</li>
      </ol>

      <p>În acest hub, ordinea de afișare trebuie să urmărească <strong>ordinea logică de lectură</strong>, nu ordinea numerică a ID-urilor:</p>

      <ol>
        <li><strong>AVL-202 — Cadrul metodologic AI Visibility Lab</strong></li>
        <li><strong>AVL-200 — Standard dovezi, măsurare și trasabilitate</strong></li>
        <li><strong>AVL-201 — Tabula Rasa T0</strong></li>
        <li>documentele familiei Market Measurement (<code>AVL-MKT-*</code>), începând cu AVL-MKT-001;</li>
        <li>documentele metodologice viitoare.</li>
      </ol>

      <p>Documentele planificate, dar nepublicate, sunt menționate în text fără link. Hub-ul nu conține pagini placeholder pentru documente care nu există încă.</p>

      <h2>Răspunsul scurt</h2>

      <p>Metodologia AI Visibility Lab urmărește un ciclu simplu:</p>

      <p><strong>întrebare → documentare → ipoteză → baseline → intervenție → așteptare → re-măsurare → comparație → concluzii și limite</strong></p>

      <p>Linia de bază este documentată prin <a href="/lab/metodologie/tabula-rasa-f0">Tabula Rasa T0</a>, prima specificație normativă a laboratorului. Aceasta stabilește condițiile minime pentru măsurarea stării inițiale a unei entități: ce trebuie inventariat, ce interogări sunt folosite, cum sunt păstrate dovezile, cum sunt clasificate răspunsurile și ce poate fi comparat ulterior.</p>

      <p>Cadrul include și o ramură dedicată măsurării unei piețe, nu doar a unei entități: familia <strong>Market Measurement (<code>AVL-MKT-*</code>)</strong>. În această ramură, piața este definită și verificată independent, conform unui protocol publicat, înainte ca reprezentarea ei în sistemele AI să fie măsurată (vezi secțiunea 14).</p>

      <p>Metodologia nu promite răspunsuri identice la rulări repetate și nu pretinde control asupra indexării, retrievalului, modelelor sau celorlalte componente interne ale furnizorilor. Scopul metodologiei este <strong>auditabilitatea procesului</strong>: să putem arăta ce a fost măsurat, în ce condiții, cu ce dovezi, ce s-a schimbat și cât de puternică poate fi concluzia rezultată.</p>

      <h2>1. Ce încercăm să măsurăm</h2>

      <p>AI Visibility nu este tratată ca simpla apariție a unui nume într-un răspuns.</p>

      <p>Pentru fiecare entitate urmărim separat dacă:</p>

      <ul>
        <li>informația poate fi accesată;</li>
        <li>conținutul poate fi recuperat ca relevant;</li>
        <li>entitatea este identificată fără ambiguitate;</li>
        <li>informațiile atribuite sunt corecte și actuale;</li>
        <li>sursele susțin afirmațiile făcute;</li>
        <li>entitatea este menționată;</li>
        <li>sursa proprie este citată;</li>
        <li>apar coliziuni, informații învechite sau confabulări.</li>
      </ul>

      <p>Această separare derivă din modelul de cercetare al laboratorului, care tratează accesul, recuperarea, sinteza și selecția citării ca etape distincte și consideră reprezentarea entității un strat transversal.</p>

      <h2>2. Ciclul metodologic</h2>

      <h3>2.1. Definirea întrebării</h3>

      <p>Orice cercetare începe cu o întrebare suficient de precisă încât rezultatul să poată fi verificat.</p>

      <p>Nu:</p>

      <blockquote>„Schema ajută AI?”</blockquote>

      <p>Ci, de exemplu:</p>

      <blockquote>„Se modifică reprezentarea entității X în aceleași interogări după intervenția Y?”</blockquote>

      <p>Întrebarea trebuie să permită observarea unui rezultat și să delimiteze ceea ce poate fi măsurat de ceea ce rămâne necunoscut.</p>

      <h3>2.2. Documentarea stării cunoscute</h3>

      <p>Înainte de experiment sunt verificate:</p>

      <ul>
        <li>documentația oficială a platformelor;</li>
        <li>standardele și specificațiile relevante;</li>
        <li>literatura academică;</li>
        <li>documentele Research ale AI Visibility Lab;</li>
        <li>starea publică actuală a entității.</li>
      </ul>

      <p>Documentația oficială are prioritate pentru afirmațiile despre propriile produse ale furnizorilor. Lipsa unei afirmații oficiale nu este tratată automat drept dovadă că un mecanism nu există.</p>

      <h3>2.3. Formularea ipotezei</h3>

      <p>Ipoteza este formulată <strong>înaintea intervenției</strong> și trebuie să poată fi infirmată.</p>

      <p>Scopul nu este confirmarea unei metode, ci reducerea incertitudinii.</p>

      <p>Un rezultat negativ, parțial sau neconcludent rămâne rezultat și trebuie păstrat.</p>

      <h3>2.4. Stabilirea baseline-ului</h3>

      <p>Starea inițială este documentată înaintea intervențiilor analizate.</p>

      <p>Baseline-ul trebuie să permită comparația ulterioară și să reducă riscul de a atribui unei intervenții un rezultat care exista deja.</p>

      <h3>2.5. Înghețarea elementelor de comparație</h3>

      <p>Setul de interogări, taxonomia, entitățile, platformele și condițiile relevante sunt păstrate pe cât posibil între măsurări.</p>

      <p>Orice schimbare care poate afecta comparabilitatea este declarată.</p>

      <h3>2.6. Aplicarea intervenției</h3>

      <p>Modificările sunt documentate individual, datate și delimitate de schimbările necontrolate atunci când acest lucru este posibil.</p>

      <h3>2.7. Perioada de așteptare</h3>

      <p>Este acordat timp pentru ca ecosistemele externe să poată reflecta schimbările: recrawl, indexare, actualizarea surselor sau alte procese asupra cărora experimentul nu are control direct.</p>

      <h3>2.8. Remăsurarea</h3>

      <p>Setul comparabil este rulat din nou în condiții cât mai apropiate de baseline.</p>

      <h3>2.9. Comparația și interpretarea</h3>

      <p>Diferențele sunt calculate și descrise înainte de formularea interpretării.</p>

      <p>O schimbare temporală este o observație. Explicația acelei schimbări poate fi o inferență sau o ipoteză și trebuie prezentată ca atare.</p>

      <h2>3. F0 — stabilirea liniei de bază</h2>

      <p><a href="/lab/metodologie/tabula-rasa-f0">Tabula Rasa T0</a> documentează starea unei entități înainte de intervenții.</p>

      <p>T0 trebuie să permită unui terț competent să înțeleagă:</p>

      <ul>
        <li>ce a fost măsurat;</li>
        <li>în ce condiții;</li>
        <li>prin ce interogări;</li>
        <li>pe ce platforme;</li>
        <li>ce răspunsuri au fost obținute;</li>
        <li>ce surse au fost afișate;</li>
        <li>cum au fost clasificate rezultatele;</li>
        <li>ce dovezi susțin fiecare observație.</li>
      </ul>

      <p>AVL-201 tratează baseline-ul ca pe un livrabil independent, nu ca pe o etapă informală înaintea „adevăratului” experiment.</p>

      <blockquote><strong>Notă de nomenclatură:</strong> în corpusul existent, <code>F0</code> denumește faza de baseline Tabula Rasa. În studiile longitudinale, un punct de măsurare poate fi notat <code>T0</code>, urmat de <code>T1</code>, <code>T2</code> și așa mai departe. Atunci când un studiu istoric folosește o convenție mai veche, aceasta nu este rescrisă retroactiv; echivalențele sunt documentate explicit.</blockquote>

      <p><strong>→ <a href="/lab/metodologie/tabula-rasa-f0">Citește AVL-201 — Tabula Rasa T0</a></strong></p>

      <h2>4. Query set-ul</h2>

      <p>Măsurarea unei entități nu se bazează pe o singură întrebare.</p>

      <p>Se construiește un set de interogări suficient de larg pentru a testa diferite forme de identificare și reprezentare a entității.</p>

      <p>În funcție de obiectul studiului, query set-ul poate acoperi:</p>

      <ul>
        <li>identitate;</li>
        <li>rol;</li>
        <li>expertiză;</li>
        <li>locație;</li>
        <li>asociere cu organizații sau proiecte;</li>
        <li>informații factuale;</li>
        <li>dezambiguizare;</li>
        <li>comparație;</li>
        <li>recomandare.</li>
      </ul>

      <p>Formulările folosite pentru comparație sunt păstrate exact, iar identificatorii query-urilor trebuie menținuți între fazele comparate. Interogările noi pot fi introduse ulterior, dar nu trebuie amestecate retrospectiv în seria comparativă principală.</p>

      <p>Un query set este un eșantion documentat, nu recensământul tuturor întrebărilor posibile despre o entitate.</p>

      <h2>5. Standardul de dovezi</h2>

      <p>Această secțiune rezumă principiile necesare pentru a înțelege cadrul general. Cerințele detaliate privind dovezile, măsurarea și trasabilitatea sunt formalizate separat în <strong>AVL-200 — Standard dovezi, măsurare și trasabilitate</strong>.</p>

      <p>Fără dovezi, o măsurare rămâne doar o afirmație.</p>

      <p>Pentru rulările relevante păstrăm, în funcție de experiment:</p>

      <ul>
        <li>răspunsul brut;</li>
        <li>captură integrală sau export;</li>
        <li>data și ora;</li>
        <li>platforma și modelul afișat;</li>
        <li>formularea exactă a interogării;</li>
        <li>limba și condițiile sesiunii;</li>
        <li>sursele afișate;</li>
        <li>clasificarea rezultatului;</li>
        <li>incidentele și abaterile de protocol.</li>
      </ul>

      <p>Metodologia cere păstrarea unui instantaneu verificabil al baseline-ului și evitarea selecției doar a rezultatelor favorabile.</p>

      <p>Atunci când dovezile sunt procesate într-un evidence set, <strong>artefactul brut și metadatele derivate rămân separate</strong>. O asociere dedusă din ordine, timestamp sau continuitatea unei sesiuni trebuie marcată ca inferență, nu prezentată drept informație vizibilă direct în captură.</p>

      <p>Unde este folosit un manifest de integritate, checksum-urile trebuie să descrie forma finală a artefactelor publicate. Validarea structurală a setului precede generarea checksum-urilor, iar orice modificare ulterioară a unui fișier acoperit de manifest impune regenerarea checksum-ului corespunzător.</p>

      <h2>6. Taxonomia rezultatelor</h2>

      <p>Răspunsurile nu sunt reduse la „apare / nu apare”.</p>

      <p>Taxonomia operațională de bază include:</p>

      <p><strong>HIT-C</strong> — entitatea este identificată corect și sursa canonică este citată.</p>

      <p><strong>HIT</strong> — entitatea este identificată corect și răspunsul satisface criteriul principal.</p>

      <p><strong>HIT parțial</strong> — răspuns relevant, dar incomplet, imprecis sau insuficient atribuit.</p>

      <p><strong>MENȚIUNE</strong> — entitatea apare, fără îndeplinirea completă a criteriului principal.</p>

      <p><strong>NULL</strong> — nu este produs un rezultat relevant pentru entitate sau sistemul declară că nu dispune de suficiente informații.</p>

      <p><strong>REFUZ / LIMITARE</strong> — platforma refuză, nu poate executa căutarea sau afișează o limitare tehnică; se raportează separat de NULL atunci când distincția poate fi observată.</p>

      <p><strong>FAPT ÎNVECHIT</strong> — entitatea este identificată, dar informația este depășită.</p>

      <p><strong>SURSĂ GREȘITĂ</strong> — atribuirea sau citarea nu susține afirmația relevantă ori se referă la altă entitate.</p>

      <p><strong>COLIZIUNE</strong> — identitatea este confundată sau amestecată cu o altă entitate.</p>

      <p><strong>CONFABULARE</strong> — sistemul atribuie entității informații nesusținute sau inventate.</p>

      <p>Un studiu poate introduce stări suplimentare atunci când designul experimental le cere — de exemplu instabilitate, rezultat nedeterminat sau query drift — dar fiecare etichetă suplimentară trebuie definită înainte de a fi folosită în interpretare.</p>

      <p>Taxonomia există pentru diagnostic. Două entități care obțin același scor agregat pot avea probleme complet diferite.</p>

      <h2>7. Nu măsurăm doar răspunsul AI</h2>

      <p>Tabula Rasa T0 tratează baseline-ul ca pe o fotografie mai largă a entității.</p>

      <p>În funcție de proiect pot fi auditate mai multe straturi.</p>

      <h3>Accesul tehnic</h3>

      <p><code>robots.txt</code>, crawlere, răspunsuri HTTP, CDN/WAF și posibilitatea reală de recuperare a conținutului.</p>

      <h3>Datele structurate</h3>

      <p>Noduri JSON-LD, <code>@id</code>, tipuri, relații și concordanța dintre markup și textul vizibil.</p>

      <p>Datele structurate sunt tratate ca instrument de clarificare semantică, nu ca garanție a indexării, menționării sau citării.</p>

      <h3>Search</h3>

      <p>Rezultatele organice și alte suprafețe de căutare relevante sunt analizate separat de răspunsurile generative atunci când obiectul studiului cere acest lucru.</p>

      <h3>Răspunsurile AI</h3>

      <p>Cum răspund platformele pe query set-ul stabilit, ce informații atribuie entității și ce surse afișează.</p>

      <h3>Înțelegerea entității</h3>

      <p>Rol, locație, experiență, organizații asociate, cronologie, actualitate, coliziuni și eventuale informații false sau lipsă.</p>

      <h3>Ecosistemul extern</h3>

      <p>Profiluri, publicații, directoare, registre, mențiuni și alte surse care confirmă, completează sau contrazic identitatea publică.</p>

      <h2>8. Intervenția</h2>

      <p>După închiderea baseline-ului pot fi introduse modificări.</p>

      <p>Intervențiile trebuie:</p>

      <ul>
        <li>declarate;</li>
        <li>datate;</li>
        <li>documentate individual;</li>
        <li>separate, pe cât posibil, de schimbările necontrolate;</li>
        <li>păstrate într-un registru care poate fi folosit ulterior pentru interpretare.</li>
      </ul>

      <p>Exemplele pot include modificări de conținut, structură, date structurate, dezambiguizare, internal linking, surse canonice sau prezență distribuită.</p>

      <p>Metodologia nu presupune că o schimbare observată după intervenție demonstrează automat cauzalitatea.</p>

      <p>Dacă mai multe intervenții au loc între două puncte de măsurare, rezultatul ulterior nu este atribuit automat uneia singure dintre ele.</p>

      <h2>9. Așteptarea și remăsurarea</h2>

      <p>Sistemele externe nu se actualizează instantaneu și nu sunt controlate de experiment.</p>

      <p>Între două puncte de măsurare pot interveni:</p>

      <ul>
        <li>recrawl;</li>
        <li>indexare sau reindexare;</li>
        <li>actualizarea surselor;</li>
        <li>schimbări ale platformelor sau modelelor;</li>
        <li>schimbări ale interfețelor;</li>
        <li>modificări ale ecosistemului extern;</li>
        <li>cache sau disponibilitate web.</li>
      </ul>

      <p>Ferestrele ulterioare de măsurare reutilizează, pe cât posibil, aceleași query-uri, criterii și condiții.</p>

      <p>Orice schimbare de motor, model, interfață, limbă, țară, stare a contului sau metodă de captură trebuie declarată atunci când poate afecta comparabilitatea.</p>

      <h2>10. Comparația</h2>

      <p>Diferența dintre două ferestre nu este redusă la un singur scor.</p>

      <p>Sunt urmărite separat, în funcție de obiectul studiului:</p>

      <ul>
        <li>rata HIT;</li>
        <li>rata HIT-C;</li>
        <li>rata NULL;</li>
        <li>mențiunile;</li>
        <li>coliziunile;</li>
        <li>confabulările;</li>
        <li>faptele învechite;</li>
        <li>sursele afișate;</li>
        <li>citarea sursei canonice;</li>
        <li>atributele entității;</li>
        <li>diferențele între platforme;</li>
        <li>variația între rulări;</li>
        <li>abaterile de protocol;</li>
        <li>rezultatele excluse din agregarea curată.</li>
      </ul>

      <p>Dacă este publicat un scor agregat, trebuie publicat și contextul lui: numărul de rulări, perioada, platformele, condițiile și distribuția categoriilor relevante.</p>

      <p>Un scor fără distribuția din spate poate ascunde moduri de eșec fundamental diferite.</p>

      <h2>11. Cum clasificăm afirmațiile</h2>

      <p>Rezultatele metodologiei sunt interpretate prin clasificarea epistemică a AI Visibility Lab.</p>

      <p><strong>Documentat</strong> — susținut direct de documentație oficială, standard, specificație sau cercetare primară identificabilă.</p>

      <p><strong>Observat</strong> — rezultat direct al unei măsurători sau al unui test documentat, valabil în condițiile respective.</p>

      <p><strong>Inferat</strong> — concluzie rezonabilă susținută de dovezi, dar neconfirmată direct.</p>

      <p><strong>Ipoteză</strong> — explicație sau predicție care urmează să fie testată și trebuie să poată fi infirmată.</p>

      <p><strong>Opinie editorială</strong> — recomandare sau poziție argumentată.</p>

      <p>O observație individuală nu este transformată într-o regulă universală.</p>

      <p>Dacă explicația unui rezultat nu este cunoscută, metodologia păstrează explicit necunoscutul în loc să îl transforme într-o certitudine aparentă.</p>

      <h2>12. Metodologie, experiment și studiu de caz nu sunt același lucru</h2>

      <h3>Metodologia</h3>

      <p>Definește <strong>cum trebuie măsurat</strong> și care sunt regulile prin care o observație poate deveni rezultat publicabil.</p>

      <p>Exemplu:</p>

      <p><strong><a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa T0</a></strong></p>

      <h3>Experimentul public</h3>

      <p>Pornește de la o <strong>ipoteză declarată înainte</strong> și testează o intervenție sau un fenomen în condiții documentate.</p>

      <p>Rezultatele sunt publicate indiferent dacă susțin, infirmă sau nu permit adjudecarea ipotezei.</p>

      <p><strong>→ <a href="/lab/experimente-publice">Vezi experimentele publice</a></strong></p>

      <h3>Studiul de caz</h3>

      <p>Aplică metodologia asupra unei <strong>entități reale</strong> și documentează evoluția acesteia de-a lungul mai multor ferestre de măsurare.</p>

      <p>Un studiu de caz poate conține mai multe puncte de măsurare și poate include experimente, dar nu este sinonim cu acestea.</p>

      <p><strong>→ <a href="/lab/studii-de-caz">Vezi studiile de caz</a></strong></p>

      <p>Aceeași metodologie poate susține mai multe experimente și mai multe studii de caz.</p>

      <h2>13. Principiile metodologiei</h2>

      <p>Metodologia AI Visibility Lab respectă câteva reguli constante:</p>

      <ul>
        <li>dovezile au prioritate față de rezultatul dorit;</li>
        <li>documentația oficială are prioritate pentru afirmațiile despre propriul produs al unui furnizor;</li>
        <li>afirmațiile nu trebuie formulate mai puternic decât permit dovezile;</li>
        <li>observația este separată de inferență și interpretare;</li>
        <li>necunoscutul nu este transformat în negație;</li>
        <li>rezultatele negative, ambigue și neconcludente sunt păstrate;</li>
        <li>contaminarea și abaterile de protocol sunt documentate, nu ascunse;</li>
        <li>metodologia trebuie descrisă suficient pentru verificare;</li>
        <li>limitările și incidentele sunt publicate;</li>
        <li>documentele și seturile de date sunt versionate atunci când schimbările pot afecta interpretarea;</li>
        <li>utilitatea pentru oameni rămâne criteriul editorial principal;</li>
        <li>rezultatele nu sunt ajustate pentru a valida un serviciu, furnizor sau metodologie proprie;</li>
        <li>corelația temporală nu este prezentată automat drept cauzalitate.</li>
      </ul>

      <h2>14. Market Measurement — măsurarea reprezentării unei piețe</h2>

      <p>Market Measurement este ramura Nivelului C care se ocupă de măsurarea modului în care sistemele AI reprezintă o piață — o populație de furnizori — nu o singură entitate. Ramura este formalizată prin familia normativă <code>AVL-MKT-*</code> și rămâne subordonată AVL-001 și AVL-202.</p>

      <p>Diferența față de măsurarea unei entități este obiectul măsurării. Pentru o entitate, referința este chiar entitatea studiată. Pentru o piață, referința trebuie construită mai întâi: cine face parte din piață, după ce criterii și cu ce dovezi. Fără această referință, nu se poate spune ce a omis, a adăugat sau a reprezentat greșit un sistem AI.</p>

      <p>Această secțiune descrie arhitectura ramurii. Nu conține criteriile de eligibilitate, regulile de construire a panelului de interogări sau alte cerințe operaționale. Regulile operaționale de delimitare a pieței și de eligibilitate sunt definite exclusiv în <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a>; regulile panelului de interogări vor fi definite de AVL-MKT-002 — Market Query Panel (planificat).</p>

      <h3>14.1. Protocol normativ și instanță a protocolului</h3>

      <p>Ramura Market Measurement separă strict <strong>regula</strong> de <strong>rezultatul aplicării regulii</strong>:</p>

      <pre><code>STRAT NORMATIV
AVL-MKT-001
Market Scope &amp; Eligibility Protocol

        ↓ aplicat asupra unei piețe concrete

STRAT DE INSTANȚĂ / DOVADĂ
Market Reference Set</code></pre>

      <p><strong><a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a></strong> (Draft pentru revizuire, v0.9.0) definește regulile după care o piață este delimitată și verificată înainte de orice măsurare. Criteriile, dovezile acceptate, statusurile și procedura completă se află numai în AVL-MKT-001.</p>

      <p><strong>Market Reference Set</strong> este rezultatul aplicării protocolului asupra unei piețe concrete, la un moment determinat. Market Reference Set nu este document normativ și nu primește identificator <code>AVL-MKT-*</code>. El aparține unei instanțe de măsurare.</p>

      <h3>14.2. Fluxul Market Measurement</h3>

      <pre><code>AVL-MKT-001
Market Scope &amp; Eligibility Protocol
        ↓
Market Discovery
        ↓
Market Verification
        ↓
Market Reference Set
        ↓
Market Query Universe
        ↓
AVL-MKT-002
Market Query Panel
        ↓
AI Execution
        ↓
Measurement
        ↓
Quarterly Market Report</code></pre>

      <p>Numerotarea AVL-MKT-001 și AVL-MKT-002 exprimă ordinea de înregistrare în familie. Ea nu înseamnă că AVL-MKT-002 este aplicat imediat după AVL-MKT-001: între cele două se află aplicarea protocolului și constituirea Market Reference Set.</p>

      <div class="overflow-x-auto">
      <table>
        <thead>
          <tr><th>Etapă</th><th>Strat</th><th>Rol</th><th>Identificator <code>AVL-MKT-*</code></th></tr>
        </thead>
        <tbody>
          <tr><td>AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</td><td>normativ</td><td>Definește, înaintea măsurării, piața, criteriile, regulile, dovezile acceptate și eligibilitatea.</td><td>da</td></tr>
          <tr><td>Market Discovery</td><td>instanță</td><td>Identifică larg candidații potențiali.</td><td>nu</td></tr>
          <tr><td>Market Verification</td><td>instanță</td><td>Aplică regulile AVL-MKT-001 fiecărui candidat.</td><td>nu</td></tr>
          <tr><td>Market Reference Set</td><td>instanță (referință)</td><td>Populația identificată și verificată conform protocolului la data de cutoff; stratul independent de referință pentru măsurarea ulterioară.</td><td>nu</td></tr>
          <tr><td>Market Query Universe</td><td>instanță</td><td>Spațiul interogărilor plauzibile prin care utilizatorii sau sistemele pot ajunge la piața analizată.</td><td>nu</td></tr>
          <tr><td>AVL-MKT-002 — Market Query Panel</td><td>normativ</td><td>Definește cum este selectat din Query Universe un subset controlat și reproductibil, folosit pentru măsurare longitudinală.</td><td>da</td></tr>
          <tr><td>AI Execution</td><td>instanță</td><td>Aplică panelul sistemelor AI analizate.</td><td>nu</td></tr>
          <tr><td>Measurement</td><td>instanță</td><td>Compară reprezentarea produsă de sistemele AI cu Market Reference Set și cu celelalte variabile definite metodologic.</td><td>nu</td></tr>
          <tr><td>Quarterly Market Report</td><td>instanță (publicare)</td><td>Publică rezultatul unei instanțe concrete de măsurare.</td><td>nu</td></tr>
        </tbody>
      </table>
      </div>

      <p>Etapele marcate ca instanță nu devin documente AVL. Ele sunt produse ale aplicării metodologiei și sunt identificate prin instanța de măsurare căreia îi aparțin (secțiunea 14.5).</p>

      <h3>14.3. Ordinea temporală și protecția împotriva selection bias</h3>

      <p>Criteriile de eligibilitate trebuie fixate înainte ca populația pieței să fie cunoscută. Altfel, criteriile pot fi ajustate, conștient sau nu, pentru a include sau exclude furnizori deja observați. Ordinea planificată este:</p>

      <pre><code>AVL-MKT-001 Draft public (v0.9.0)
        ↓
pilot intern
        ↓
corectarea protocolului
        ↓
AVL-MKT-001 v1.0.0 / Activ
        ↓
Market Discovery oficial
        ↓
Market Verification oficială
        ↓
înghețarea Market Reference Set
        ↓
Market Query Panel
        ↓
măsurarea AI</code></pre>

      <p>Procedura pilotului intern, regulile de versionare a criteriilor și controalele operaționale împotriva selection bias sunt definite în <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a>.</p>

      <p>Scopul acestei ordini este ca fiecare raport de piață să poată afirma verificabil că <strong>criteriile de eligibilitate au fost definite și publicate înainte de constituirea Market Reference Set și înainte de măsurarea reprezentării furnizorilor în sistemele AI</strong>.</p>

      <h3>14.4. Stratul de referință și stratul de reprezentare AI</h3>

      <p>Market Measurement compară două straturi care nu trebuie confundate:</p>

      <pre><code>STRAT DE REFERINȚĂ
Market Reference Set
= furnizori identificați și verificați independent,
  conform AVL-MKT-001

        versus

STRAT DE REPREZENTARE AI
Răspunsurile sistemelor AI
= furnizori identificați / menționați / citați / recomandați
  de sistemele măsurate</code></pre>

      <p>Statusurile de eligibilitate și combinațiile lor cu apariția în răspunsurile AI sunt definite în <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a>.</p>

      <p>Apariția într-un răspuns AI nu demonstrează eligibilitatea. Absența din răspunsurile AI nu invalidează eligibilitatea. Eligibilitatea este stabilită exclusiv prin aplicarea AVL-MKT-001; răspunsurile AI sunt obiectul măsurării, nu sursa referinței.</p>

      <p>Această separare face măsurabilă diferența dintre <strong>piața documentată</strong> și <strong>piața reprezentată de AI</strong>.</p>

      <h3>14.5. Instanțele Market Measurement (<code>MKT-*</code>)</h3>

      <p>Documentele normative și instanțele concrete folosesc identificatori diferiți:</p>

      <ul>
        <li><code>AVL-MKT-NNN</code> — protocol normativ al familiei Market Measurement;</li>
        <li><code>MKT-{țară}-{domeniu}-{an}Q{trimestru}</code> — instanță concretă de măsurare a unei piețe (de exemplu, <code>MKT-RO-AIV-2026Q4</code>).</li>
      </ul>

      <p>Formatul instanțelor și regulile lui sunt definite în AVL-001, §17. Aceeași piață poate fi măsurată longitudinal (<code>MKT-RO-AIV-2026Q4</code>, <code>MKT-RO-AIV-2027Q1</code>, <code>MKT-RO-AIV-2027Q2</code> …) fără modificarea protocoalelor normative. Exemplul este ilustrativ; nicio instanță <code>MKT-*</code> nu a fost creată la data acestei versiuni. Relația dintre perioada unei instanțe (trimestrul) și axa rulărilor T0 / F1 … Fn este precizată în AVL-MKT-001.</p>

      <h3>Principiul ramurii</h3>

      <pre><code>REGULA
AVL-MKT-001
        ↓
REFERINȚA DESPRE PIAȚĂ
Market Reference Set
        ↓
REPREZENTAREA AI
Market Query Panel + răspunsurile AI</code></pre>

      <p>Mai întâi este definită regula. Apoi este construită independent referința despre piață. Abia după aceea este măsurat modul în care sistemele AI reprezintă acea piață.</p>

      <h2>Documentele metodologiei</h2>

      <p>Documentele de nivel C nu sunt ordonate semantic prin numărul lor. Pentru orientare, această pagină le afișează în ordinea recomandată de lectură.</p>

      <h3>AVL-202 — Cadrul metodologic AI Visibility Lab</h3>

      <p><em>Methodological Framework</em></p>

      <p>Documentul-cadru. Definește ciclul metodologic, clasificarea epistemică, relația dintre baseline, intervenție, remăsurare și interpretare și stabilește cum se leagă între ele standardele și protocoalele metodologice.</p>

      <p><strong>Rol:</strong> framework conceptual și normativ.</p>

      <p><strong>Depinde de:</strong> AVL-001 — AI Visibility Lab Foundation.</p>

      <p><strong>Leagă și contextualizează:</strong> AVL-200, AVL-201, familia Market Measurement (<code>AVL-MKT-*</code>) și viitoarele documente metodologice.</p>

      <h3>AVL-200 — Standard dovezi, măsurare și trasabilitate</h3>

      <p><em>Evidence, Measurement &amp; Traceability Standard</em></p>

      <p>Standardul dedicat modului în care dovezile sunt păstrate, indexate, validate, versionate și legate de observațiile și măsurătorile pe care le susțin.</p>

      <p>În raport cu AVL-202, rolul lui este să detalieze stratul de <strong>evidence integrity și traceability</strong>, fără ca AVL-202 să dubleze toate cerințele sale operaționale.</p>

      <h3>AVL-201 — Tabula Rasa T0</h3>

      <p><em>Baseline Measurement Specification</em></p>

      <p>Specificația normativă pentru documentarea stării inițiale a unei entități înainte de intervenții.</p>

      <p>Acoperă:</p>

      <ul>
        <li>condițiile de conformitate;</li>
        <li>intrările obligatorii;</li>
        <li>query set-ul;</li>
        <li>accesul crawlerelor;</li>
        <li>structured data;</li>
        <li>răspunsurile AI;</li>
        <li>entity understanding;</li>
        <li>sursele;</li>
        <li>prezența distribuită;</li>
        <li>taxonomia;</li>
        <li>standardul de dovezi;</li>
        <li>scorarea;</li>
        <li>controlul calității;</li>
        <li>comparabilitatea în timp.</li>
      </ul>

      <p><strong>→ <a href="/lab/metodologie/tabula-rasa-f0">Citește Tabula Rasa T0</a></strong></p>

      <h3>Familia Market Measurement (<code>AVL-MKT-*</code>)</h3>

      <p><em>Market Measurement</em></p>

      <p>Familia normativă pentru definirea piețelor, construirea instrumentelor de măsurare și compararea longitudinală a reprezentării piețelor în sistemele AI (secțiunea 14).</p>

      <h4>AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</h4>

      <p><strong>Versiune 0.9.0 · Draft pentru revizuire</strong></p>

      <p>Definește obiectul pieței, criteriile de eligibilitate, dovezile necesare, Market Discovery, Market Verification și regulile de constituire a Market Reference Set.</p>

      <p><strong>→ <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">Citește AVL-MKT-001</a></strong></p>

      <h4>AVL-MKT-002 — Market Query Panel</h4>

      <p><strong>Planificat</strong></p>

      <p>Va defini selecția reproductibilă a panelului de interogări folosit pentru măsurarea longitudinală. Documentul nu este încă publicat.</p>

      <p><strong>Rol:</strong> protocoale normative de familie, în interiorul Nivelului C.</p>

      <p><strong>Depind de:</strong> AVL-001 și AVL-202. Dependențele normative suplimentare vor fi declarate de fiecare document la publicare.</p>

      <h3>Metodologia evoluează odată cu cercetarea</h3>

      <p>AI Visibility Lab tratează metodologia ca pe un sistem versionat, nu ca pe un set definitiv de reguli.</p>

      <p>Documente noi pot fi adăugate atunci când cercetarea produce nevoia unor specificații distincte pentru alte faze, tipuri de măsurare, scoruri, evidence processing sau protocoale.</p>

      <p>Orice document metodologic nou trebuie să rămână compatibil cu principiile Foundation și să declare explicit dependențele, versiunea, statutul și limitările sale. Numărul alocat rămâne un identificator permanent; ordinea de lectură și precedența normativă sunt declarate separat.</p>

      <p>Documentele metodologice existente nu sunt versionate în cascadă doar pentru că apare o familie metodologică nouă. Documentele noi își declară propriile dependențe față de documentele existente.</p>

      <p>O metodologie nouă nu rescrie retrospectiv măsurătorile istorice. Atunci când protocolul se maturizează, diferența dintre versiuni este documentată.</p>

      <h2>Vezi metodologia aplicată</h2>

      <p><strong><a href="/lab/studii-de-caz">Studii de caz →</a></strong><br />Aplicarea metodologiei asupra unor entități reale, cu baseline, intervenții, dovezi și evoluție în timp.</p>

      <p><strong><a href="/lab/experimente-publice">Experimente publice →</a></strong><br />Teste cu ipoteze formulate înainte și rezultate publicate indiferent de rezultat.</p>

      <p><strong><a href="/lab/cercetare/cum-se-masoara-ai-visibility">Cum se măsoară AI Visibility →</a></strong><br />Introducerea conceptuală în query set-uri, taxonomie, rulări și măsurarea vizibilității AI.</p>

      <p><strong><a href="/lab/cercetare/glosar-geo-aeo">Glosar GEO/AEO și AI Visibility →</a></strong><br />Vocabularul operațional folosit în documentele și experimentele laboratorului.</p>

      <p><strong><a href="/lab/introducere">AI Visibility Lab Foundation →</a></strong><br />Regulile epistemice și editoriale prin care trebuie citite toate documentele laboratorului.</p>

      <h2>Ce nu demonstrează această metodologie</h2>

      <p>AI Visibility Lab măsoară ceea ce poate fi observat din exterior.</p>

      <p>Metodologia nu oferă acces la algoritmii interni ai furnizorilor și nu demonstrează, prin simpla succesiune temporală a două evenimente, că:</p>

      <ul>
        <li>o intervenție individuală a determinat un răspuns ulterior;</li>
        <li>un sistem a „învățat” o informație dintr-o anumită sursă;</li>
        <li>un anumit element de markup a determinat citarea;</li>
        <li>un rezultat observat pentru o entitate se generalizează tuturor entităților;</li>
        <li>un rezultat observat într-o fereastră va fi identic ulterior.</li>
      </ul>

      <p>Aceste limite nu anulează măsurarea. Ele delimitează ce poate fi susținut onest pe baza ei.</p>

      <h2>Independență și conflict de interese</h2>

      <p>Atunci când autorul măsoară propria persoană, propriul site, o entitate asupra căreia are control editorial sau o metodologie pe care a construit-o, situația trebuie declarată în studiul sau experimentul respectiv.</p>

      <p>Controlul asupra entității poate oferi acces la sursele primare, istoricul modificărilor și identitatea reală care trebuie rezolvată. Acest avantaj metodologic nu elimină potențialul conflict de interese.</p>

      <p>Transparența nu elimină conflictul. Îl face vizibil și auditabil.</p>

      <h2>Citare recomandată</h2>

      <p>Matescu, Alex. „Cadrul metodologic AI Visibility Lab”. <em>AI Visibility Lab Documentation</em>, AVL-202, versiunea 1.2.0, 2026. https://delamatescu.ro/lab/metodologie</p>

      <h2>Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr>
            <td>1.0.0</td>
            <td>14 septembrie 2026</td>
            <td>Activ</td>
            <td>Prima versiune publică a AVL-202. Formalizează cadrul metodologic general, stabilește relația conceptuală dintre AVL-001, AVL-200 și AVL-201, explică permanența identificatorilor AVL și definește ciclul metodologic, separarea observației de interpretare, intervenția, remăsurarea și comparația longitudinală.</td>
          </tr>
          <tr>
            <td>1.1.0</td>
            <td>30 septembrie 2026</td>
            <td>Activ</td>
            <td>MINOR: introduce Market Measurement ca ramură explicită a Nivelului C — Methodology, formalizată prin familia normativă <code>AVL-MKT-*</code> (familie funcțională, nu nivel normativ separat). Adaugă secțiunea 14: separarea dintre protocolul normativ AVL-MKT-001 și Market Reference Set, fluxul Market Measurement, ordinea temporală pilot → protocol activ → Market Reference Set → măsurare, separarea dintre stratul de referință și stratul de reprezentare AI și identificarea instanțelor <code>MKT-*</code>. Actualizează arhitectura, precedența normativă, ordinea de lectură și lista documentelor. AVL-MKT-001 și AVL-MKT-002 sunt menționate ca documente planificate, nepublicate. AVL-200 și AVL-201 nu sunt modificate.</td>
          </tr>
          <tr>
            <td>1.2.0</td>
            <td>2 octombrie 2026</td>
            <td>Activ</td>
            <td>MINOR: AVL-MKT-001 — Market Scope &amp; Eligibility Protocol este publicat ca draft pentru revizuire (v0.9.0) și devine singura sursă a regulilor operaționale de delimitare a pieței și de eligibilitate. Din secțiunea 14 sunt eliminate detaliile operaționale preluate de AVL-MKT-001 (procedura pilotului intern, regula de versionare a criteriilor, tabelul statusurilor), înlocuite cu trimiteri. Se păstrează definiția ramurii, poziția în Nivelul C, precedența normativă, separarea protocol / instanță, fluxul și separarea dintre stratul de referință și stratul de reprezentare AI. Arhitectura, ordinea de lectură și lista documentelor sunt actualizate; AVL-MKT-002 rămâne planificat.</td>
          </tr>
        </tbody>
      </table>

      <h3>Nota metodologică</h3>

      <p>AI Visibility Lab măsoară ceea ce poate fi observat din exterior. Metodologia nu oferă acces la mecanisme interne nepublice și nu transformă corelațiile sau schimbările temporale în dovezi automate de cauzalitate.</p>

      <blockquote>Iată ce era înainte. Iată ce este acum. Iată diferența.</blockquote>
`;
