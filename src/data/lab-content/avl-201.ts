export const avl201TabulaRasaF0Html = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</p>
        <p class="avl-doc-lead">Specificația de măsurare a stării inițiale pentru AI Visibility</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-201</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>1.1.1</td></tr>
        <tr><th scope="row">Statut</th><td>Activ</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data publicării</th><td>iulie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>14 septembrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/introducere">AVL-001</a>, <a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104</a>, <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200</a></td></tr>
        <tr><th scope="row">Dependențe informative</th><td><a href="/lab/cercetare/ce-este-geo-aeo">AVL-101</a>, <a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102</a>, <a href="/lab/cercetare/seo-vs-geo">AVL-103</a>, <a href="/lab/cercetare/glosar-geo-aeo">AVL-105</a></td></tr>
        </tbody>
        </table>
      </div>

      <blockquote>„Iată ce era înainte. Iată ce este acum. Iată diferența.”</blockquote>

      <h2>Controlul documentului</h2>

      <p>AVL-201 este primul document normativ al metodologiei AI Visibility Lab. El descrie condițiile minime, pașii obligatorii, dovezile acceptate, taxonomia, regulile de scorare și livrabilele necesare pentru ca o măsurare să poată fi declarată conformă cu Tabula Rasa F0.</p>

      <p>În acest document, termenii normativi „TREBUIE”, „NU TREBUIE”, „ESTE OBLIGATORIU”, „AR TREBUI”, „NU AR TREBUI” și „POATE” sunt utilizați în sensul convenției RFC 2119, adaptată în limba română. „TREBUIE” exprimă o condiție obligatorie pentru conformitate; „AR TREBUI” exprimă o recomandare puternică ce poate fi încălcată numai cu justificare documentată; „POATE” indică o opțiune permisă. În afara propozițiilor normative și a cerințelor identificate F0-REQ, acești termeni nu trebuie interpretați automat ca cerințe de conformitate.</p>

      <h2>Rezumat executiv</h2>

      <p>Tabula Rasa F0 este faza de documentare completă a stării unei entități în ecosistemul AI înainte de orice intervenție. F0 nu optimizează, nu repară și nu promite rezultate. Măsoară. Faza produce un instantaneu verificabil al identității entității, accesibilității tehnice, datelor structurate, percepției motoarelor AI, surselor citate, prezenței distribuite și corpusului de conținut.</p>

      <p>O implementare conformă AVL-201 trebuie să permită unui terț competent să răspundă la patru întrebări: ce s-a măsurat, în ce condiții, cu ce dovezi și prin ce reguli au fost obținute concluziile. Fără aceste răspunsuri, rezultatul poate fi util ca observație, dar nu poate fi revendicat drept baseline Tabula Rasa conform AVL-201.</p>

      <h2>1. Scop</h2>

      <p>Scopul AVL-201 este să definească o specificație publică, repetabilă și auditabilă pentru măsurarea stării inițiale a unei entități în sistemele de căutare și răspuns bazate pe inteligență artificială. Documentul stabilește ce trebuie făcut înaintea oricărei intervenții GEO/AEO, cum trebuie păstrate dovezile și cum trebuie delimitate observațiile de interpretări.</p>

      <blockquote><strong>F0-REQ-001</strong> — Nicio intervenție asupra entității, site-ului, profilurilor, datelor structurate sau prezenței distribuite NU TREBUIE aplicată după începerea F0 și înainte de închiderea oficială a măsurătorii.</blockquote>

      <blockquote><strong>F0-REQ-002</strong> — Orice abatere accidentală de la starea inițială TREBUIE consemnată ca incident de contaminare și evaluată înainte ca rezultatul să fie declarat valid.</blockquote>

      <h2>2. Obiective</h2>

      <ul>
        <li>Crearea unui baseline complet și datat pentru entitatea analizată.</li>
        <li>Documentarea stării tehnice și semantice înainte de optimizare.</li>
        <li>Măsurarea prezenței, corectitudinii și citării în sistemele AI selectate.</li>
        <li>Identificarea modului principal de eșec: acces, recuperare, sinteză, citare sau identitate.</li>
        <li>Crearea unei referințe comparabile pentru fazele F1, F2 și F3.</li>
        <li>Producerea unui pachet de dovezi suficient pentru verificare independentă.</li>
        <li>Protejarea clientului sau subiectului împotriva atribuirii nefondate a unor rezultate.</li>
      </ul>

      <h2>3. Domeniu de aplicare</h2>

      <p>AVL-201 se poate aplica unei persoane, companii, organizații, instituții, mărci, produse, servicii, proiecte, publicații sau unui site, cu condiția ca obiectul măsurării să fie definit drept entitate și să poată fi diferențiat de alte entități.</p>

      <p>Metodologia este potrivită pentru evaluări individuale, proiecte pilot, studii de caz, audituri comerciale, cercetare academică aplicată și monitorizare longitudinală.</p>

      <p>Faptul că metodologia poate fi aplicată în audituri comerciale descrie o capacitate a protocolului, nu o ofertă de servicii comerciale active din partea AI Visibility Lab.</p>

      <h2>4. În afara domeniului</h2>

      <p>F0 nu este, prin el însuși, o măsurare completă a performanței comerciale sau SEO. El nu măsoară direct:</p>

      <ul>
        <li>venituri, vânzări sau leaduri;</li>
        <li>rata de conversie;</li>
        <li>profitabilitatea;</li>
        <li>traficul organic total;</li>
        <li>pozițiile clasice pentru toate cuvintele-cheie;</li>
        <li>valoarea backlinkurilor;</li>
        <li>sentimentul public general;</li>
        <li>calitatea completă a produsului sau serviciului;</li>
        <li>accesul la factori interni de ranking sau selecție ai furnizorilor AI.</li>
      </ul>

      <blockquote><strong>Clarificare:</strong> Aceste date pot fi corelate ulterior cu rezultatele F0, dar nu fac parte din conformitatea minimă AVL-201.</blockquote>

      <h2>5. Terminologie și definiții operaționale</h2>

      <p><strong>Entitate:</strong> Obiectul distinct al măsurării: persoană, organizație, marcă, produs, serviciu, proiect sau instituție.</p>
      <p><strong>Formă canonică:</strong> Numele și identificarea oficială stabilite pentru entitate și folosite ca referință în analiză.</p>
      <p><strong>Baseline:</strong> Starea măsurată și documentată înainte de intervenție.</p>
      <p><strong>Snapshot / instantaneu:</strong> Pachetul datat care conservă configurația, răspunsurile, dovezile și rezultatele unei sesiuni de măsurare.</p>
      <p><strong>Set de interogări:</strong> Colecția versionată de întrebări folosită pentru testarea entității.</p>
      <p><strong>Set înghețat:</strong> Set de interogări care nu mai este modificat între F0 și comparația F3.</p>
      <p><strong>Rulare:</strong> O execuție individuală a unei interogări într-un motor sau o interfață AI.</p>
      <p><strong>Sesiune de măsurare:</strong> Grup de rulări efectuate într-un interval și într-o configurație documentată.</p>
      <p><strong>Sesiune curată:</strong> Sesiune configurată pentru reducerea personalizării și a contaminării istoricului.</p>
      <p><strong>Motor AI:</strong> Sistemul sau interfața care generează răspunsul analizat.</p>
      <p><strong>Citare:</strong> Afișarea explicită a unei surse asociate unei afirmații sau unui fragment al răspunsului.</p>
      <p><strong>Mențiune:</strong> Apariția entității în răspuns, fără ca sursa canonică să fie neapărat citată.</p>
      <p><strong>HIT:</strong> Rezultat în care entitatea este identificată corect și răspunsul satisface criteriul principal al interogării.</p>
      <p><strong>HIT parțial:</strong> Rezultat relevant, dar incomplet, imprecis, insuficient atribuit sau parțial depășit.</p>
      <p><strong>COLIZIUNE:</strong> Rezultat în care identitatea entității este amestecată sau înlocuită cu o altă entitate.</p>
      <p><strong>CONFABULARE:</strong> Afirmație factuală nesusținută sau inventată despre entitate.</p>
      <p><strong>NULL:</strong> Absența unui rezultat relevant pentru entitate.</p>
      <p><strong>Dovadă primară:</strong> Captură, export, răspuns brut, log, fișier sau înregistrare care arată direct ce a fost observat.</p>
      <p><strong>Metadate de rulare:</strong> Data, ora, platforma, modelul afișat, limba, locația, contul, modul de sesiune și alte condiții relevante.</p>
      <p><strong>Contaminare:</strong> Orice schimbare sau influență care compromite comparabilitatea stării inițiale.</p>
      <p><strong>Conformitate AVL-201:</strong> Îndeplinirea cerințelor obligatorii din această specificație, cu abaterile documentate.</p>

      <h2>6. Roluri și responsabilități</h2>

      <h3>6.1. Responsabilul de metodologie</h3>
      <ul>
        <li>aprobă planul F0;</li>
        <li>confirmă forma canonică și domeniul;</li>
        <li>controlează schimbările;</li>
        <li>decide dacă incidentele invalidează baseline-ul;</li>
        <li>aprobă închiderea fazei.</li>
      </ul>

      <h3>6.2. Operatorul de măsurare</h3>
      <ul>
        <li>execută rulările;</li>
        <li>păstrează configurația declarată;</li>
        <li>capturează dovezile;</li>
        <li>nu selectează doar răspunsurile favorabile;</li>
        <li>raportează imediat abaterile.</li>
      </ul>

      <h3>6.3. Revizorul</h3>
      <ul>
        <li>verifică un eșantion sau întregul pachet;</li>
        <li>recalculează scorurile;</li>
        <li>confirmă coerența taxonomiei;</li>
        <li>documentează dezacordurile.</li>
      </ul>

      <h3>6.4. Subiectul sau clientul</h3>
      <ul>
        <li>furnizează informațiile oficiale;</li>
        <li>declară profilurile și activele controlate;</li>
        <li>evită modificările pe durata F0;</li>
        <li>confirmă sau contestă factual fișa entității.</li>
      </ul>

      <h2>7. Intrări obligatorii</h2>

      <table>
        <thead><tr><th>Intrare</th><th>Conținut minim</th></tr></thead>
        <tbody>
          <tr><td>Fișa entității</td><td>forma canonică, variante, rol, locație, domeniu, URL-uri oficiale, atribute verificabile</td></tr>
          <tr><td>Harta coliziunilor</td><td>entități omonime sau similare și sursele lor dominante</td></tr>
          <tr><td>Lista activelor oficiale</td><td>site, subdomenii, profiluri, directoare, pagini de autor</td></tr>
          <tr><td>Țara și limba</td><td>contextul geografic și lingvistic al măsurării</td></tr>
          <tr><td>Motoarele incluse</td><td>platformele și interfețele testate</td></tr>
          <tr><td>Setul de interogări</td><td>întrebări împărțite pe intenții</td></tr>
          <tr><td>Planul de dovezi</td><td>format, convenție de nume, locație de arhivare</td></tr>
          <tr><td>Fereastra de măsurare</td><td>intervalul calendaristic planificat</td></tr>
          <tr><td>Declarația de îngheț</td><td>confirmarea că nu se fac intervenții până la închidere</td></tr>
        </tbody>
      </table>

      <h2>8. Ieșiri și livrabile</h2>

      <ul>
        <li>Raportul Tabula Rasa F0</li>
        <li>Fișa entității și harta coliziunilor</li>
        <li>Setul înghețat de interogări</li>
        <li>Matricea de acces a crawlerelor</li>
        <li>Raportul de date structurate</li>
        <li>Grila de rezultate interogări × motoare × rulări</li>
        <li>Fișele de percepție per motor</li>
        <li>Harta surselor citate</li>
        <li>Matricea prezenței distribuite</li>
        <li>Inventarul corpusului de conținut</li>
        <li>Registrul incidentelor și abaterilor</li>
        <li>Arhiva de dovezi</li>
        <li>Manifestul snapshot-ului și checksum-uri, când sunt folosite</li>
        <li>Lista priorităților pentru F1 și F2</li>
      </ul>

      <blockquote><strong>F0-REQ-003</strong> — Un raport fără arhivă de dovezi NU TREBUIE prezentat drept implementare completă AVL-201.</blockquote>

      <h2>9. Instrumente și condiții minime</h2>

      <p>AVL-201 nu impune un furnizor unic de instrumente. Implementarea trebuie însă să permită reproducerea și auditul.</p>

      <ul>
        <li>browser actualizat și profil separat sau mod privat;</li>
        <li>acces la platformele testate;</li>
        <li>instrument pentru capturi integrale sau exporturi;</li>
        <li>foaie de calcul sau bază de date pentru registrul rulărilor;</li>
        <li>ceas și fus orar sincronizate;</li>
        <li>acces la robots.txt, antete HTTP și, când este disponibil, loguri de server/CDN;</li>
        <li>validator JSON-LD / Schema.org;</li>
        <li>spațiu de stocare cu versiuni și permisiuni controlate;</li>
        <li>instrument de generare a checksum-urilor, recomandat pentru pachetele publice.</li>
      </ul>

      <h2>10. Protocolul de măsurare în zece pași</h2>

      <h3>10.1. Pasul 1 — Definirea entității</h3>
      <p>Se stabilește forma canonică a numelui, variantele legitime, atributele de identitate și candidații de coliziune. Forma canonică trebuie să fie suficient de precisă încât un revizor să poată decide dacă un răspuns se referă la entitatea corectă.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Fișă completă a entității.</li>
        <li>Listă de variante și aliasuri.</li>
        <li>Hartă a coliziunilor.</li>
        <li>Surse oficiale pentru atributele de identitate.</li>
      </ul>

      <h3>10.2. Pasul 2 — Construcția setului de interogări</h3>
      <p>Interogările se construiesc înainte de examinarea sistematică a rezultatelor și se împart pe intenții: identitate, rol/expertiză, informație factuală, comparație și recomandare. Pentru proiectele inițiale, domeniul poate fi restrâns, dar restricția trebuie declarată.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Identificator unic per interogare.</li>
        <li>Text exact și limbă.</li>
        <li>Intenție și criteriu de succes.</li>
        <li>Număr de rulări planificat.</li>
        <li>Versiune și dată de înghețare.</li>
      </ul>

      <h3>10.3. Pasul 3 — Verificarea accesului crawlerelor</h3>
      <p>Se verifică robots.txt, răspunsurile HTTP, regulile CDN/WAF și logurile disponibile pentru agenții relevanți. Controlul accesului pentru căutare, utilizator și antrenare trebuie tratat separat atunci când furnizorul face această distincție.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Matrice per agent.</li>
        <li>Directivă observată.</li>
        <li>Coduri HTTP.</li>
        <li>Dovezi din loguri sau teste.</li>
        <li>Nivel de certitudine.</li>
      </ul>

      <h3>10.4. Pasul 4 — Auditul datelor structurate</h3>
      <p>Se inventariază JSON-LD și alte marcaje, se verifică entitățile declarate, @id-urile, tipurile, relațiile și concordanța cu textul vizibil. Auditul urmărește claritatea și consistența, nu presupune că schema garantează citarea.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Inventar de noduri și @id-uri.</li>
        <li>Erori și avertismente.</li>
        <li>Relații lipsă sau contradictorii.</li>
        <li>Diferențe între markup și conținut.</li>
      </ul>

      <h3>10.5. Pasul 5 — Linia de bază a răspunsurilor și citărilor</h3>
      <p>Setul înghețat se rulează pe motoarele selectate, în condiții cât mai comparabile și documentate. Fiecare răspuns se păstrează integral și se clasifică. Nu este permisă păstrarea exclusivă a celei mai favorabile rulări.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Răspuns brut.</li>
        <li>Captură sau export.</li>
        <li>Surse afișate.</li>
        <li>Clasificare principală și secundară.</li>
        <li>Metadate complete.</li>
      </ul>

      <h3>10.6. Pasul 6 — Linia de bază a înțelegerii entității</h3>
      <p>Se analizează descrierea produsă de fiecare motor: rol, locație, experiență, organizații asociate, cronologie, ton și actualitate. Scopul este identificarea diferenței dintre simpla apariție și reprezentarea corectă.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Fișă de percepție per motor.</li>
        <li>Atribute corecte, lipsă, vechi sau false.</li>
        <li>Surse care susțin fiecare atribut important.</li>
      </ul>

      <h3>10.7. Pasul 7 — Analiza surselor citate</h3>
      <p>Pentru interogările relevante se inventariază sursele pe care motoarele le afișează, inclusiv atunci când entitatea analizată nu apare. Se separă sursa citată de sursa presupus folosită.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>URL, domeniu și tip de sursă.</li>
        <li>Frecvență per motor și interogare.</li>
        <li>Poziție sau proeminență, dacă este observabilă.</li>
        <li>Relevanță pentru F2.</li>
      </ul>

      <h3>10.8. Pasul 8 — Auditul prezenței distribuite</h3>
      <p>Se inventariază profilurile, directoarele, publicațiile, registrele și mențiunile externe. Se urmăresc numele, descrierea, actualitatea, legătura către sursa canonică și contradicțiile.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Matricea prezenței distribuite.</li>
        <li>Surse controlate vs. independente.</li>
        <li>Inconsecvențe și riscuri de bifurcare.</li>
      </ul>

      <h3>10.9. Pasul 9 — Auditul corpusului de conținut</h3>
      <p>Se inventariază conținutul sursei canonice și se evaluează relevanța, calitatea, actualitatea și valoarea de coroborare. În F0 se documentează deciziile propuse, dar nu se execută.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Inventar URL.</li>
        <li>Tip și temă.</li>
        <li>Stare tehnică și editorială.</li>
        <li>Decizie propusă pentru F1.</li>
      </ul>

      <h3>10.10. Pasul 10 — Instantaneul reproductibil</h3>
      <p>Toate artefactele sunt înghețate într-un pachet datat și neschimbabil. Pachetul trebuie să includă un manifest al fișierelor și registrul versiunilor. Pentru proiectele cu cerință ridicată de audit se recomandă checksum-uri.</p>
      <h4>Cerințe minime</h4>
      <ul>
        <li>Arhivă F0.</li>
        <li>Manifest.</li>
        <li>Data și ora închiderii.</li>
        <li>Semnătura responsabilului de metodologie.</li>
        <li>Lista abaterilor.</li>
      </ul>

      <h2>11. Protocolul sesiunii curate</h2>

      <blockquote><strong>F0-REQ-004</strong> — Configurația sesiunii TREBUIE stabilită înainte de prima rulare și folosită consecvent în interiorul aceleiași serii.</blockquote>

      <blockquote><strong>F0-REQ-005</strong> — Contul, memoria, istoricul, locația, limba și disponibilitatea căutării web TREBUIE documentate.</blockquote>

      <blockquote><strong>F0-REQ-006</strong> — Atunci când o platformă nu permite controlul unei variabile, limitarea TREBUIE declarată, nu ascunsă.</blockquote>

      <p>Configurația recomandată include: fereastră privată sau profil dedicat, conversație nouă pentru fiecare interogare, memorie dezactivată unde este posibil, limbă explicită, locație reală fără VPN, fără introducerea prealabilă a numelui entității în aceeași sesiune și fără reformulări iterative înaintea capturării rezultatului principal.</p>

      <h2>12. Standardul de dovezi</h2>

      <h3>12.1. Dovezi acceptate</h3>
      <ul>
        <li>captură integrală care include interogarea și răspunsul;</li>
        <li>export HTML, PDF sau text brut al conversației;</li>
        <li>URL de partajare, dacă nu expune date sensibile și rămâne accesibil;</li>
        <li>înregistrare video a sesiunii;</li>
        <li>log de server, CDN sau WAF;</li>
        <li>fișier robots.txt și antete HTTP capturate la dată;</li>
        <li>codul JSON-LD sau exportul validatorului;</li>
        <li>registrul de rulare cu timestamp și configurație.</li>
      </ul>

      <h3>12.2. Dovezi insuficiente singure</h3>
      <ul>
        <li>relatarea verbală „mi-a apărut”;</li>
        <li>captura decupată fără interogare;</li>
        <li>captura fără dată sau identificator de rulare;</li>
        <li>text copiat manual fără dovada contextului;</li>
        <li>rezumatul operatorului fără răspunsul brut;</li>
        <li>un singur rezultat selectat dintr-o serie nedeclarată.</li>
      </ul>

      <h3>12.3. Convenția de denumire</h3>
      <p>Format recomandat: <code>F0_[entitate]_[motor]_[queryID]_[run]_[YYYYMMDD-HHMM]_[limbă].ext</code></p>
      <p>Exemplu: <code>F0_AlexMatescu_ChatGPT_QID03_R02_20260721-0935_RO.png</code></p>

      <h2>13. Taxonomia rezultatelor</h2>

      <table>
        <thead><tr><th>Cod</th><th>Definiție</th><th>Regulă de utilizare</th></tr></thead>
        <tbody>
          <tr><td>HIT</td><td>Entitatea corectă este identificată, iar răspunsul satisface criteriul principal al interogării.</td><td>Poate exista cu sau fără citarea sursei canonice.</td></tr>
          <tr><td>HIT-C</td><td>HIT cu citarea explicită a sursei canonice.</td><td>Subcategorie recomandată pentru analiza citării.</td></tr>
          <tr><td>HIT parțial</td><td>Entitatea este corectă, dar răspunsul este incomplet, prea vag, parțial depășit sau slab atribuit.</td><td>Necesită notarea motivului.</td></tr>
          <tr><td>MENȚIUNE</td><td>Entitatea apare, dar nu este răspunsul principal sau nu satisface criteriul.</td><td>Nu se echivalează cu HIT.</td></tr>
          <tr><td>COLIZIUNE</td><td>Răspunsul atribuie datele altei entități sau amestecă două identități.</td><td>Se indică entitatea concurentă.</td></tr>
          <tr><td>CONFABULARE</td><td>Răspunsul inventează sau afirmă fără suport un fapt despre entitate.</td><td>Se păstrează fragmentul exact.</td></tr>
          <tr><td>SURSĂ GREȘITĂ</td><td>Răspunsul este plauzibil, dar citarea nu susține afirmația sau se referă la altă entitate.</td><td>Poate coexista cu HIT parțial sau coliziune.</td></tr>
          <tr><td>FAPT ÎNVECHIT</td><td>Răspunsul folosește o informație care a fost corectă, dar nu mai este actuală.</td><td>Se documentează sursa actuală.</td></tr>
          <tr><td>NULL</td><td>Entitatea lipsește sau sistemul declară că nu are informații suficiente.</td><td>Nu este automat o eroare a platformei.</td></tr>
          <tr><td>REFUZ / LIMITARE</td><td>Platforma refuză, nu poate căuta sau afișează o eroare.</td><td>Se raportează separat de NULL.</td></tr>
        </tbody>
      </table>

      <h2>14. Scorarea</h2>

      <p>Scorarea transformă observațiile într-un rezumat comparabil. Ea nu trebuie să înlocuiască răspunsurile brute și nu trebuie interpretată drept probabilitate internă a platformei.</p>

      <h3>14.1. Scor de rezultat recomandat</h3>

      <table>
        <thead><tr><th>Rezultat</th><th>Punctaj</th></tr></thead>
        <tbody>
          <tr><td>HIT-C</td><td>4</td></tr>
          <tr><td>HIT fără citare canonică</td><td>3</td></tr>
          <tr><td>HIT parțial</td><td>2</td></tr>
          <tr><td>MENȚIUNE</td><td>1</td></tr>
          <tr><td>NULL / REFUZ</td><td>0</td></tr>
          <tr><td>FAPT ÎNVECHIT</td><td>-1</td></tr>
          <tr><td>SURSĂ GREȘITĂ</td><td>-2</td></tr>
          <tr><td>COLIZIUNE</td><td>-3</td></tr>
          <tr><td>CONFABULARE</td><td>-4</td></tr>
        </tbody>
      </table>

      <p>Scorul normalizat recomandat pentru un set de N rulări este:</p>

      <p><strong>Scor normalizat = 100 × (Σ puncte − minim posibil) / (maxim posibil − minim posibil)</strong></p>

      <p>Pentru schema de mai sus, maximul este 4 × N, iar minimul este -4 × N. Raportul trebuie să publice și distribuția categoriilor, deoarece două entități pot avea același scor prin combinații foarte diferite.</p>

      <h3>14.2. Indicatori obligatorii</h3>
      <ul>
        <li>Rata HIT totală.</li>
        <li>Rata HIT-C.</li>
        <li>Rata de coliziune.</li>
        <li>Rata de confabulare.</li>
        <li>Rata NULL.</li>
        <li>Proporția faptelor învechite.</li>
        <li>Scor normalizat, dacă este folosit.</li>
        <li>Numărul total de rulări și acoperirea pe motoare.</li>
      </ul>

      <blockquote><strong>F0-REQ-007</strong> — Niciun scor agregat NU TREBUIE publicat fără numărul de rulări, perioada, motoarele și distribuția categoriilor.</blockquote>

      <h2>15. Controlul calității și revizuirea</h2>
      <ul>
        <li>Cel puțin 10% din rulări AR TREBUI reclasificate de un al doilea evaluator pentru proiectele comerciale.</li>
        <li>Divergențele de clasificare TREBUIE rezolvate printr-o regulă explicită și păstrate în registru.</li>
        <li>Calculele AR TREBUI refăcute automat sau verificate independent.</li>
        <li>Eșantionul de dovezi TREBUIE să includă rezultate pozitive, negative și ambigue.</li>
        <li>Raportul final TREBUIE să conțină limitările și incidentele.</li>
      </ul>

      <h2>16. Repetabilitate și comparație F0–F3</h2>

      <p>F3 trebuie să reutilizeze același set înghețat, aceleași criterii și, pe cât posibil, aceeași configurație. Schimbările inevitabile ale platformelor se documentează ca variabile externe.</p>

      <blockquote><strong>F0-REQ-008</strong> — Comparația F0–F3 TREBUIE realizată pe aceleași identificatoare de interogări. Interogările noi pot fi adăugate ca serie separată, dar NU TREBUIE amestecate în scorul comparativ principal.</blockquote>

      <blockquote><strong>F0-REQ-009</strong> — Orice schimbare de motor, model, interfață, țară, limbă sau metodă de captură TREBUIE semnalată în tabelul de comparabilitate.</blockquote>

      <p>Intervalul dintre F0 și F3 nu este universal. El trebuie să permită crawl, indexare și propagarea schimbărilor, fără a fi atât de lung încât efectul intervențiilor să fie inseparabil de deriva naturală a sistemelor.</p>

      <h2>17. Limitări</h2>
      <ul>
        <li>Sistemele sunt stocastice și pot produce răspunsuri diferite la aceeași interogare.</li>
        <li>Indexurile și modelele se modifică fără notificare completă.</li>
        <li>Interfețele pot folosi personalizare sau localizare imposibil de eliminat total.</li>
        <li>Sursele afișate nu reprezintă neapărat toate sursele utilizate intern.</li>
        <li>Absența citării nu demonstrează absența folosirii informației.</li>
        <li>Apariția după intervenție nu demonstrează singură cauzalitatea.</li>
        <li>Un baseline este specific perioadei și configurației măsurate.</li>
        <li>Motoarele pot avea politici și arhitecturi diferite; rezultatele nu se generalizează automat între ele.</li>
      </ul>

      <h2>18. Reguli de interpretare</h2>

      <p>Interpretarea trebuie să pornească de la modul de eșec dominant, nu de la scorul total.</p>

      <table>
        <thead><tr><th>Profil observat</th><th>Interpretare inițială</th></tr></thead>
        <tbody>
          <tr><td>Acces slab</td><td>Crawler sau infrastructură blocată; prioritatea F1 este remedierea accesului.</td></tr>
          <tr><td>Acces bun, NULL ridicat</td><td>Conținutul nu este recuperat sau entitatea nu este suficient asociată cu domeniul interogării.</td></tr>
          <tr><td>Mențiuni multe, citări puține</td><td>Entitatea este cunoscută, dar sursa canonică nu este selectată sau afișată.</td></tr>
          <tr><td>HIT parțial / fapte învechite</td><td>Identitatea există, dar sursele dominante sunt incomplete sau depășite.</td></tr>
          <tr><td>Coliziune ridicată</td><td>Problema principală este dezambiguizarea și coroborarea identității.</td></tr>
          <tr><td>Confabulare ridicată</td><td>Există lacune informaționale, surse slabe sau asocieri neclare; se evită concluziile comerciale bazate pe simpla prezență.</td></tr>
          <tr><td>HIT-C ridicat</td><td>Poate fi recomandată monitorizarea, nu neapărat optimizarea extinsă.</td></tr>
        </tbody>
      </table>

      <blockquote><strong>Regulă:</strong> Diagnosticul trebuie să poată concluziona și că nu este necesară o intervenție amplă. F0 nu este o justificare automată pentru vânzarea fazelor următoare.</blockquote>

      <h2>19. Criterii de conformitate</h2>

      <p>O implementare poate fi declarată „conformă AVL-201” numai dacă îndeplinește toate cerințele obligatorii și include:</p>

      <ul>
        <li>forma canonică și harta coliziunilor;</li>
        <li>set înghețat de interogări;</li>
        <li>condiții de sesiune documentate;</li>
        <li>minimum o dovadă primară per rulare inclusă în analiză;</li>
        <li>taxonomie aplicată consecvent;</li>
        <li>metadate suficiente pentru reproducere;</li>
        <li>arhivă finală și manifest;</li>
        <li>registrul abaterilor;</li>
        <li>raportarea limitărilor;</li>
        <li>aprobarea responsabilului de metodologie.</li>
      </ul>

      <p>Niveluri recomandate de declarație:</p>

      <ul>
        <li>Conform AVL-201 — toate cerințele obligatorii sunt îndeplinite.</li>
        <li>Conform parțial AVL-201 — domeniul sau dovezile sunt restrânse; abaterile sunt enumerate.</li>
        <li>Inspirat de AVL-201 — metodologia este folosită orientativ, fără revendicarea conformității.</li>
      </ul>

      <h2>20. Structura raportului final</h2>

      <ol>
        <li>Rezumat executiv.</li>
        <li>Scop și domeniu.</li>
        <li>Fișa entității.</li>
        <li>Metodă și condiții.</li>
        <li>Setul de interogări.</li>
        <li>Accesul crawlerelor.</li>
        <li>Date structurate.</li>
        <li>Rezultatele motoarelor.</li>
        <li>Percepția entității.</li>
        <li>Sursele citate.</li>
        <li>Prezența distribuită.</li>
        <li>Corpusul de conținut.</li>
        <li>Scoruri și distribuții.</li>
        <li>Diagnostic pe filtre.</li>
        <li>Limitări și incidente.</li>
        <li>Priorități pentru F1–F2.</li>
        <li>Anexe și manifestul dovezilor.</li>
      </ol>

      <h2>21. Șabloane minime</h2>

      <h3>21.1. Registrul rulărilor</h3>
      <table>
        <thead><tr><th>Run ID</th><th>Query ID</th><th>Motor</th><th>Data/ora</th><th>Configurație</th><th>Clasificare</th><th>Citare canonică</th><th>Evidence ID</th><th>Observații</th></tr></thead>
        <tbody>
          <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>

      <h3>21.2. Registrul incidentelor</h3>
      <table>
        <thead><tr><th>Incident ID</th><th>Dată</th><th>Descriere</th><th>Artefacte afectate</th><th>Impact</th><th>Decizie</th><th>Aprobare</th></tr></thead>
        <tbody>
          <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>

      <h3>21.3. Manifestul snapshot-ului</h3>
      <table>
        <thead><tr><th>Evidence ID</th><th>Nume fișier</th><th>Tip</th><th>Sursă</th><th>Timestamp</th><th>Checksum</th><th>Note</th></tr></thead>
        <tbody>
          <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
        </tbody>
      </table>

      <h2>22. Întrebări frecvente</h2>

      <p><strong>De ce nu începem direct optimizarea?</strong> Pentru că fără baseline nu putem separa efectul intervenției de starea preexistentă și de variația naturală a platformelor.</p>

      <p><strong>Cât durează F0?</strong> O implementare restrânsă poate dura câteva zile. Una completă, cu audit tehnic, cinci motoare, rulări repetate și revizuire, se întinde realist pe aproximativ două-trei săptămâni calendaristice.</p>

      <p><strong>Pot executa singur metodologia?</strong> Da. O versiune de bază poate acoperi fișa entității, setul de interogări și linia de bază. Conformitatea completă necesită însă dovezi, audit tehnic și control de calitate.</p>

      <p><strong>Ce se întâmplă dacă rezultatele sunt deja bune?</strong> Recomandarea poate fi monitorizarea. O metodologie credibilă trebuie să poată concluziona că optimizarea extinsă nu este necesară.</p>

      <p><strong>O singură captură este suficientă?</strong> Nu pentru o concluzie generală. Poate documenta o observație, dar nu o rată, o tendință sau efectul unei intervenții.</p>

      <p><strong>De ce publicați metodologia?</strong> Pentru că transparența face rezultatele verificabile. Avantajul profesional nu stă în secretul pașilor, ci în execuție, disciplină, date și interpretare.</p>

      <h2>23. Referințe și documente asociate</h2>

      <ul>
        <li><strong><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>:</strong> Document fondator și standard epistemic.</li>
        <li><strong><a href="/lab/cercetare/ce-este-geo-aeo">AVL-101 — Ce este GEO/AEO și AI Visibility</a>:</strong> Definiții și context.</li>
        <li><strong><a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102 — Cum aleg sistemele AI sursele și citările</a>:</strong> Modelul celor patru filtre.</li>
        <li><strong><a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104 — Cum se măsoară AI Visibility</a>:</strong> Fundamentele taxonomiei și măsurării.</li>
        <li><strong><a href="/lab/cercetare/glosar-geo-aeo">AVL-105 — Glosar GEO/AEO și AI Visibility</a>:</strong> Terminologie extinsă.</li>
        <li><a href="https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec" target="_blank" rel="noopener noreferrer">Google — robots.txt specification</a></li>
        <li><a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI — Overview of OpenAI Crawlers</a></li>
        <li><a href="https://support.anthropic.com/en/articles/8896518" target="_blank" rel="noopener noreferrer">Anthropic — Web crawling documentation</a></li>
        <li><a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">Perplexity — Perplexity Crawlers</a></li>
        <li><a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">Google Search Central — Structured data</a></li>
        <li><a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">Aggarwal et al. — GEO: Generative Engine Optimization</a></li>
      </ul>

      <h2>24. Istoricul versiunilor</h2>

      <table>
        <thead><tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr></thead>
        <tbody>
          <tr><td>1.0.0</td><td>iulie 2026</td><td>Activ</td><td>Prima versiune normativă publică a specificației Tabula Rasa F0.</td></tr>
          <tr><td>1.0.1</td><td>21 iulie 2026</td><td>Activ</td><td>PATCH: uniformizare metadate; referință la RFC 2119; marcarea URL-ului canonic ca propus până la confirmarea publicării.</td></tr>
          <tr><td>1.1.0</td><td>26 august 2026</td><td>Activ</td><td>MINOR: linkuri interne pentru Autor (→ /despre) și Organizație (→ /lab); precizare adăugată la secțiunea 3 care distinge aplicabilitatea metodologiei în audituri comerciale de o ofertă activă de servicii comerciale ale AI Visibility Lab.</td></tr>
          <tr><td>1.1.1</td><td>14 septembrie 2026</td><td>Activ</td><td>PATCH: adăugarea AVL-200 — Standard dovezi, măsurare și trasabilitate ca dependință normativă explicită, ca parte a activării formale a AVL-200 (v1.0.0, 14 septembrie 2026).</td></tr>
        </tbody>
      </table>

      <blockquote><strong>Declarație finală:</strong> Tabula Rasa F0 nu demonstrează că o intervenție viitoare va funcționa. Ea stabilește condițiile minime pentru ca o schimbare ulterioară să poată fi comparată, verificată și discutată onest.</blockquote>
`;
