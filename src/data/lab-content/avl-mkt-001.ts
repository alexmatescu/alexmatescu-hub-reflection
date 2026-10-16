export const avlMkt001MarketScopeEligibilityHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă · Draft pentru revizuire</p>
        <p class="avl-doc-title">AVL-MKT-001 — Market Scope & Eligibility Protocol</p>
        <p class="avl-doc-lead">Protocolul de delimitare a pieței și de eligibilitate a furnizorilor</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-MKT-001</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Familie</th><td>Market Measurement — <code>AVL-MKT-*</code></td></tr>
        <tr><th scope="row">Rol</th><td>protocol normativ de familie</td></tr>
        <tr><th scope="row">Versiune</th><td>0.10.0</td></tr>
        <tr><th scope="row">Statut</th><td>Draft pentru revizuire</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data publicării</th><td>2 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>16 octombrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>16 octombrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate">https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate</a></td></tr>
        <tr><th scope="row">Documente normative superioare</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, <a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a></td></tr>
        <tr><th scope="row">Dependențe informative</th><td><a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104 — Cum se măsoară AI Visibility</a></td></tr>
        </tbody>
        </table>
      </div>

      <blockquote><strong>Principiu:</strong> piața este definită înainte de a măsura cine apare în ea. Criteriile de includere și excludere sunt publicate înainte de colectarea rezultatelor AI și nu sunt modificate retrospectiv pentru a acomoda rezultatul observat.</blockquote>

      <p><strong>AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</strong> este protocolul normativ AI Visibility Lab care definește ce înseamnă o piață într-o măsurare Market Measurement, ce entități pot aparține acelei piețe, ce dovezi sunt suficiente pentru includere și cum este constituit un <strong>Market Reference Set</strong> înainte ca reprezentarea pieței în sistemele AI să fie măsurată.</p>

      <h2>Controlul documentului</h2>

      <p>AVL-MKT-001 este primul document al familiei <strong>Market Measurement</strong> (<code>AVL-MKT-*</code>), o familie funcțională în interiorul Nivelului C — Methodology. Arhitectura familiei este descrisă în <a href="/lab/metodologie">AVL-202, secțiunea 14</a>; namespace-ul și identificatorii sunt definiți în <a href="/lab/introducere">AVL-001</a>.</p>

      <p>Versiunea curentă, <strong>0.10.0</strong>, este un <strong>draft public pentru revizuire</strong>. Documentul nu este activ. Publicarea draftului are rolul unei pre-înregistrări publice: criteriile devin vizibile și datate înainte ca populația pieței să fie cunoscută. La data acestei versiuni:</p>

      <ul>
        <li>pilotul intern pe cazuri-limită nu a fost executat;</li>
        <li>au fost rulate trei piloturi de Market Discovery (<code>MKT-RO-AIV-2026Q4-PILOT</code>, <code>MKT-RO-AIV-2026Q4-PILOT-2</code> și <code>MKT-RO-AIV-2026Q4-PILOT-3</code>); ele testează descoperirea și nu înlocuiesc pilotul intern;</li>
        <li>nu a fost creată nicio instanță <code>MKT-*</code>;</li>
        <li>nu a fost constituit niciun Market Reference Set;</li>
        <li>AVL-MKT-002 — Market Query Panel este planificat și nepublicat.</li>
      </ul>

      <p>Punctele care trebuie închise înainte de versiunea 1.0.0 sunt listate în secțiunea „Decizii deschise înainte de 1.0.0”.</p>

      <p>În acest document, termenii <strong>TREBUIE</strong>, <strong>NU TREBUIE</strong>, <strong>ESTE OBLIGATORIU</strong>, <strong>AR TREBUI</strong>, <strong>NU AR TREBUI</strong> și <strong>POATE</strong> sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:</p>

      <ul>
        <li><strong>TREBUIE / NU TREBUIE</strong> — condiție obligatorie pentru conformitate;</li>
        <li><strong>AR TREBUI / NU AR TREBUI</strong> — recomandare puternică; abaterea este permisă numai cu justificare documentată;</li>
        <li><strong>POATE</strong> — opțiune permisă.</li>
      </ul>

      <p>În afara propozițiilor normative și a cerințelor identificate <code>AVLMKT001-REQ-*</code>, acești termeni nu trebuie interpretați automat ca cerințe de conformitate. Cât timp documentul are statutul „Draft pentru revizuire”, cerințele descriu regula propusă pentru versiunea 1.0.0 și se aplică pilotului intern.</p>

      <h2>Răspunsul scurt</h2>

      <p><strong>AVL-MKT-001 stabilește regula după care este construită referința despre o piață: cine poate aparține pieței, ce dovezi sunt necesare și cum sunt tratate cazurile incerte — înainte ca vreun sistem AI să fie interogat.</strong></p>

      <p>Protocolul separă trei întrebări:</p>

      <ol>
        <li><strong>Există furnizorul în piața definită, conform dovezilor disponibile?</strong> — rezolvată prin Market Discovery și Market Verification, conform acestui protocol.</li>
        <li><strong>Este furnizorul identificat, menționat, citat sau recomandat de un sistem AI?</strong> — măsurată ulterior prin Market Query Panel (AVL-MKT-002, planificat).</li>
        <li><strong>Ce putem afirma despre motivele pentru care furnizorul apare sau nu apare?</strong> — necesită separarea observației de interpretare și nu poate fi dedusă automat din primele două.</li>
      </ol>

      <p><strong>Absența unui furnizor din răspunsurile AI nu demonstrează că furnizorul nu există pe piață. Apariția unui furnizor într-un răspuns AI nu demonstrează că entitatea oferă serviciul pentru care a fost menționată.</strong></p>

      <h2>1. Scop</h2>

      <p>AVL-MKT-001 definește, pentru orice instanță Market Measurement:</p>

      <ol>
        <li>modul de declarare a domeniului pieței (geografie, familie de servicii, perioadă);</li>
        <li>unitatea de analiză și clasele de furnizori;</li>
        <li>criteriile de eligibilitate și dovezile acceptate;</li>
        <li>separarea dintre Market Discovery și Market Verification;</li>
        <li>statusurile de eligibilitate și tratamentul cazurilor incerte;</li>
        <li>Market Cutoff Date și înghețarea Market Reference Set;</li>
        <li>controalele împotriva selection bias;</li>
        <li>tratamentul conflictului de interese;</li>
        <li>cerințele de dovezi specifice eligibilității, ca aplicare a AVL-200;</li>
        <li>publicarea rezultatelor Market Discovery și Market Verification și relația registrelor cu Market Reference Set.</li>
      </ol>

      <p>Un raport despre o piață nu este reproductibil dacă populația măsurată este construită din aceleași răspunsuri AI pe care raportul încearcă ulterior să le evalueze. De aceea, Market Reference Set este o referință construită independent de rezultatele AI care urmează să fie măsurate.</p>

      <h2>2. Domeniu de aplicare</h2>

      <p>AVL-MKT-001 se aplică oricărei instanțe <code>MKT-*</code> care măsoară reprezentarea unei piețe — o populație de furnizori — în sisteme AI.</p>

      <p>Protocolul <strong>măsoară eligibilitatea unei entități pentru includerea într-o piață definită</strong>, nu calitatea furnizorului.</p>

      <p>AVL-MKT-001 <strong>nu</strong> stabilește:</p>

      <ul>
        <li>care furnizor este „cel mai bun” sau ce furnizor ar trebui ales;</li>
        <li>competența profesională sau eficiența serviciilor;</li>
        <li>probabilitatea unui rezultat;</li>
        <li>autoritatea unei entități într-un sistem AI;</li>
        <li>motivele interne ale unei recomandări;</li>
        <li>o cotă comercială de piață sau un clasament.</li>
      </ul>

      <blockquote><strong>Eligibilitatea înseamnă apartenență documentabilă la obiectul cercetat, nu validare profesională.</strong></blockquote>

      <p>AVL-MKT-001 nu definește selecția interogărilor, execuția în sistemele AI sau măsurarea reprezentării. Acestea aparțin AVL-MKT-002 — Market Query Panel (planificat) și instanțelor de măsurare.</p>

      <h2>3. Regula și instanța</h2>

      <p>AVL-MKT-001 este <strong>regula</strong>. O piață concretă, într-o perioadă concretă, este o <strong>instanță</strong>.</p>

      <pre><code>REGULĂ        AVL-MKT-001 — Market Scope &amp; Eligibility Protocol
                 ↓ aplicată asupra unei piețe declarate
INSTANȚĂ      MKT-{țară}-{domeniu}-{an}Q{trimestru}
                 ↓
REFERINȚĂ     Market Reference Set al instanței</code></pre>

      <p>Protocolul nu fixează o anumită țară, o anumită familie de servicii sau o anumită perioadă. Acestea sunt declarate de fiecare instanță.</p>

      <blockquote><strong>AVLMKT001-REQ-001 — Domeniul pieței TREBUIE definit și publicat înaintea constituirii Market Reference Set și înaintea oricărei măsurări AI a instanței.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-002 — Fiecare instanță TREBUIE să declare, înainte de Market Discovery: geografia, familia de servicii, perioada (trimestrul), Market Cutoff Date și versiunea AVL-MKT-001 aplicată.</strong></blockquote>

      <h3>3.1. Identificatorul instanței</h3>

      <p>Formatul identificatorului de instanță este definit în <a href="/lab/introducere">AVL-001</a>: <code>MKT-{țară}-{domeniu}-{an}Q{trimestru}</code>, unde <code>{țară}</code> este codul ISO 3166-1 alpha-2 al pieței geografice, iar <code>{domeniu}</code> este tokenul pieței, fixat la prima instanță a seriei.</p>

      <h3>3.2. Perioada instanței și rulările</h3>

      <p>Market Measurement distinge perioada instanței de rulările din interiorul ei:</p>

      <table>
        <thead>
          <tr><th>Axă</th><th>Ce identifică</th><th>Exemplu</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>Perioada instanței (Q)</strong></td><td>instanța temporală a pieței: piața documentată până la Market Cutoff Date și măsurată în acel trimestru</td><td><code>MKT-RO-AIV-2026Q4</code>, <code>MKT-RO-AIV-2027Q1</code></td></tr>
          <tr><td><strong>Rulările Market Discovery</strong></td><td>rulările de descoperire din interiorul unei instanțe: rularea trimestrială completă (<code>FULL</code>) și rulările lunare (<code>M{lună}</code>, luna din calendar, cu două cifre)</td><td><code>MKT-RO-AIV-2026Q4-FULL</code>, <code>MKT-RO-AIV-2026Q4-M11</code></td></tr>
          <tr><td><strong>Rulările de măsurare AI</strong></td><td>execuțiile Market Query Panel, după înghețarea Market Reference Set</td><td>schema aparține AVL-MKT-002</td></tr>
        </tbody>
      </table>

      <p>Trimestrul identifică piața. Sufixul unei rulări identifică rularea și nu înlocuiește perioada instanței. Luna unei rulări lunare trebuie să cadă în trimestrul instanței. Un pilot se identifică separat (<code>{instanță}-PILOT</code>, <code>{instanță}-PILOT-{n}</code>) și nu este o rulare a instanței.</p>

      <p>Ce interogări conține fiecare rulare și cu ce cadență se execută se declară în documentul instanței, nu în acest protocol.</p>

      <p><strong>Convenția T0 / F1 … Fn nu se folosește pentru rulările Market Discovery.</strong> Ea rămâne convenția punctelor de măsurare din AVL-200 §7, aplicată în designul Tabula Rasa (AVL-201). Pentru rulările de măsurare AI, schema se stabilește în AVL-MKT-002.</p>

      <h3>3.3. Prima aplicare planificată (exemplu, nu regulă)</h3>

      <p>Prima instanță planificată este <code>MKT-RO-AIV-2026Q4</code>: furnizorii de servicii GEO, AEO, AI Visibility și servicii funcțional echivalente, relevanți pentru clienți din România. Tokenul <code>AIV</code> este cel propus în AVL-001. Instanța nu a fost creată la data acestei versiuni; declarația ei completă va fi publicată conform AVLMKT001-REQ-002.</p>

      <h2>4. Unitatea de analiză</h2>

      <p>Unitatea principală este <strong>Provider Entity</strong>: persoană, practician independent, companie, agenție, organizație sau furnizor hibrid software + servicii, dacă există dovezi publice suficiente că oferă un serviciu inclus în domeniul pieței declarat de instanță.</p>

      <table>
        <thead>
          <tr><th>Clasă</th><th>Definiție operațională</th></tr>
        </thead>
        <tbody>
          <tr><td>Independent Provider</td><td>Persoană care oferă direct serviciile analizate</td></tr>
          <tr><td>Service Provider</td><td>Companie sau agenție care oferă servicii eligibile</td></tr>
          <tr><td>Technology Provider</td><td>Furnizor predominant de software sau infrastructură</td></tr>
          <tr><td>Hybrid Provider</td><td>Furnizor care combină produse software și servicii</td></tr>
          <tr><td>Adjacent Provider</td><td>Entitate activă într-un domeniu apropiat, fără dovezi suficiente pentru setul principal</td></tr>
        </tbody>
      </table>

      <p>Clasele sunt descriptive, nu scoruri de calitate.</p>

      <h2>5. Familia de servicii</h2>

      <p>Fiecare instanță declară familia de servicii măsurată. Criteriul principal este <strong>funcția declarată public a serviciului</strong>, nu denumirea lui.</p>

      <p>Pentru familia de servicii a primei aplicări planificate, pot fi eligibile servicii de <strong>GEO — Generative Engine Optimization</strong>, <strong>AEO — Answer Engine Optimization</strong>, <strong>AI Visibility</strong>, <strong>AI Search Optimization</strong>, <strong>LLM Visibility / LLM Optimization</strong> și alte servicii de vizibilitate în căutarea generativă funcțional echivalente.</p>

      <p>Terminologia acestui domeniu este neuniformă. Google menționează explicit termenii „AEO” și „GEO”, dar precizează că, din perspectiva Google Search, optimizarea pentru căutarea generativă rămâne SEO. Microsoft folosește termenii „GEO” și „AI Visibility” în anunțurile Bing Webmaster Tools despre raportarea AI (secțiunea 16). Prin urmare, prezența acronimului <code>GEO</code> nu este nici condiție necesară, nici dovadă suficientă pentru eligibilitate.</p>

      <h3>5.1. Echivalența funcțională</h3>

      <p>O entitate nu este exclusă doar pentru că nu folosește denumirea uzuală a serviciului. Poate fi evaluată prin <strong>echivalență funcțională</strong>, cu păstrarea sursei și a justificării clasificării.</p>

      <p>Utilizarea AI ca instrument pentru prestarea unui serviciu nu este echivalentă cu furnizarea unui serviciu orientat spre vizibilitatea în sisteme AI.</p>

      <h3>5.2. Ce nu este suficient pentru includere</h3>

      <p>Nu sunt suficiente singure: publicarea unui articol despre subiect; o postare pe social media; autodescrierea generică drept „expert AI”; apariția într-un răspuns AI; includerea într-o listă terță fără confirmare; furnizarea unui serviciu apropiat (de exemplu, SEO tradițional) fără dovada serviciului inclus.</p>

      <h2>6. Clase geografice</h2>

      <p>Clasele geografice sunt definite generic, în raport cu țara declarată de instanță (<code>{CC}</code> = codul ISO 3166-1 alpha-2):</p>

      <table>
        <thead>
          <tr><th>Clasă</th><th>Definiție</th></tr>
        </thead>
        <tbody>
          <tr><td><code>{CC}-DOMESTIC</code></td><td>furnizor stabilit în țara instanței și activ pe piața ei</td></tr>
          <tr><td><code>{CC}-INDEPENDENT</code></td><td>practician independent activ profesional în țara instanței</td></tr>
          <tr><td><code>INTL-{CC}</code></td><td>furnizor internațional cu dovadă explicită că deservește țara instanței</td></tr>
          <tr><td><code>GLOBAL</code></td><td>furnizor accesibil internațional, fără dovadă suficientă de orientare explicită către țara instanței</td></tr>
        </tbody>
      </table>

      <p>Exemplu pentru prima aplicare planificată: <code>RO-DOMESTIC</code>, <code>RO-INDEPENDENT</code>, <code>INTL-RO</code>, <code>GLOBAL</code>.</p>

      <p>„Piața din țara X” nu este sinonimă automat cu „entități înregistrate în țara X”. Clasa <code>GLOBAL</code> poate fi folosită pentru context, fără a fi amestecată automat cu populația principală.</p>

      <h2>7. Dovezile de eligibilitate</h2>

      <h3>7.1. Niveluri de dovezi</h3>

      <p><strong>E1 — Sursă oficială directă.</strong> Pagină oficială de servicii, site oficial al furnizorului, ofertă comercială publică sau documentație oficială. E1 este sursa preferată.</p>

      <p><strong>E2 — Declarație oficială atribuibilă.</strong> Anunț oficial, profil profesional controlat de furnizor, interviu, comunicat sau prezentare publică oficială.</p>

      <p><strong>E3 — Sursă terță independentă.</strong> Publicație, studiu de caz publicat de client, director profesional, analiză independentă sau organizație terță. E3 este utilă pentru discovery și coroborare; fără confirmare directă, cazul poate rămâne <code>UNVERIFIED</code>.</p>

      <p>Nivelurile E1–E3 descriu <strong>originea</strong> dovezii de eligibilitate. Ele nu înlocuiesc lanțul de dovezi din AVL-200.</p>

      <h3>7.2. Relația cu AVL-200</h3>

      <p>Pentru lifecycle, integrity, indexing și traceability se aplică <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>. AVL-MKT-001 definește doar <strong>ce dovezi sunt necesare pentru eligibilitate</strong>:</p>

      <ul>
        <li><strong>devine Raw Evidence</strong> captura sursei pe care se sprijină o decizie de eligibilitate (de exemplu, captura integrală sau exportul paginii oficiale de servicii), la momentul verificării;</li>
        <li><strong>este indexată</strong> fiecare captură folosită într-o decizie <code>ELIGIBLE</code>, <code>INELIGIBLE</code>, <code>OUT OF SCOPE</code> sau <code>HISTORICAL</code>, cu legătura către furnizor (<code>provider_id</code>), instanță, URL, data accesării și nivelul E1–E3;</li>
        <li><strong>metadata minimă</strong> este cea din fișa furnizorului (secțiunea 10), completată cu metadata de provenance cerută de AVL-200 §9; valorile care nu pot fi stabilite urmează semantica stărilor necunoscute din AVL-200 §6;</li>
        <li><strong>freeze</strong> se aplică la înghețarea Market Reference Set (secțiunea 12), cu manifest de integritate verificat conform AVL-200 §21–§23.</li>
      </ul>

      <blockquote><strong>AVLMKT001-REQ-003 — Entity resolution: o entitate TREBUIE să poată fi identificată fără ambiguitate materială înainte de a primi statutul <code>ELIGIBLE</code>.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-004 — Service evidence: TREBUIE să existe dovadă publică verificabilă că entitatea oferă un serviciu inclus în familia de servicii a instanței.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-005 — Market relevance: TREBUIE să existe dovadă că serviciul este disponibil sau relevant pentru piața geografică a instanței.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-006 — Temporal validity: dovada TREBUIE să fie relevantă pentru perioada instanței și disponibilă până la Market Cutoff Date.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-007 — Source traceability: dovada TREBUIE să poată fi urmărită prin URL, dată de acces și artefact conservat conform secțiunii 7.2.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-008 — Statutul <code>ELIGIBLE</code> TREBUIE atribuit numai atunci când AVLMKT001-REQ-003 – AVLMKT001-REQ-007 sunt îndeplinite.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-009 — Menționarea unei entități de către un sistem AI NU TREBUIE folosită singură drept dovadă de eligibilitate.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-010 — Dovezile pe care se sprijină deciziile de eligibilitate TREBUIE conservate ca Raw Evidence și indexate conform AVL-200 înainte de înghețarea Market Reference Set.</strong></blockquote>

      <h2>8. Market Discovery și Market Verification</h2>

      <h3>8.1. Market Discovery</h3>

      <p>Candidații pot fi găsiți prin motoare de căutare, sisteme AI, site-uri oficiale, directoare, platforme profesionale, publicații, conferințe, asociații și alte surse terțe. Metodele folosite sunt documentate. <strong>Discovery identifică, nu validează.</strong> Un sistem AI poate fi folosit pentru discovery, dar menționarea în răspunsul lui nu constituie dovadă de eligibilitate.</p>

      <h3>8.2. Market Verification</h3>

      <p>Fiecare candidat identificat în discovery este verificat individual, conform secțiunii 7, și primește un statut din secțiunea 9.</p>

      <blockquote><strong>AVLMKT001-REQ-011 — Market Discovery și Market Verification TREBUIE tratate și documentate distinct.</strong></blockquote>

      <h2>9. Statusuri de eligibilitate</h2>

      <table>
        <thead>
          <tr><th>Status</th><th>Semnificație</th></tr>
        </thead>
        <tbody>
          <tr><td><code>ELIGIBLE</code></td><td>Criteriile sunt îndeplinite</td></tr>
          <tr><td><code>INELIGIBLE</code></td><td>Dovezile permit concluzia că entitatea nu îndeplinește domeniul instanței</td></tr>
          <tr><td><code>UNVERIFIED</code></td><td>Entitatea a fost identificată, dar dovezile nu permit confirmarea</td></tr>
          <tr><td><code>AMBIGUOUS</code></td><td>Există dovezi contradictorii sau probleme de entity resolution</td></tr>
          <tr><td><code>OUT OF SCOPE</code></td><td>Entitatea este reală, dar nu aparține pieței definite</td></tr>
          <tr><td><code>HISTORICAL</code></td><td>Serviciul a existat anterior, fără dovadă suficientă de activitate la Market Cutoff Date</td></tr>
        </tbody>
      </table>

      <p>Corespondența cu termenii folosiți în AVL-202 §14: <code>ELIGIBLE</code> = eligibil, <code>UNVERIFIED</code> = neverificat, <code>AMBIGUOUS</code> = ambiguu.</p>

      <blockquote><strong>AVLMKT001-REQ-012 — Statutul <code>UNVERIFIED</code> NU TREBUIE interpretat drept <code>INELIGIBLE</code>.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-013 — Statusurile și clasele NU TREBUIE prezentate drept scoruri de calitate.</strong></blockquote>

      <h2>10. Fișa furnizorului</h2>

      <p>Pentru fiecare candidat verificat se păstrează:</p>

      <pre><code>provider_id:
canonical_name:
entity_type:
official_url:
country:
market_class:
provider_class:
public_service_name:
service_family:
eligibility_status:
evidence_level:
evidence_url:
evidence_id:
source_publication_date:
verification_date:
market_cutoff_date:
entity_resolution_notes:
eligibility_rationale:
uncertainties:</code></pre>

      <p><code>evidence_id</code> leagă fișa de Evidence Index-ul instanței (AVL-200 §11). O afirmație materială care nu poate fi urmărită până la sursa ei nu este tratată drept fapt verificat.</p>

      <h2>11. Market Cutoff Date</h2>

      <p>Fiecare instanță declară o <strong>Market Cutoff Date</strong>. Market Reference Set reprezintă piața documentabilă conform protocolului până la acel moment.</p>

      <p>Un furnizor identificat după cutoff nu este introdus retrospectiv într-o instanță închisă pentru a face datasetul mai complet. El poate apărea în următoarea instanță a seriei.</p>

      <h2>12. Market Reference Set și înghețarea lui</h2>

      <p><strong>Market Reference Set</strong> este setul furnizorilor identificați și verificați conform protocolului până la Market Cutoff Date. Nu este lista exhaustivă a tuturor furnizorilor existenți și nu trebuie descris astfel.</p>

      <p>Market Reference Set este un artefact de instanță, nu un document normativ, și nu primește identificator <code>AVL-MKT-*</code>.</p>

      <blockquote><strong>AVLMKT001-REQ-014 — Market Reference Set TREBUIE constituit independent de rezultatele AI evaluate ulterior.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-015 — Market Reference Set TREBUIE înghețat, cu manifest de integritate verificat conform AVL-200, înainte de prima execuție AI a instanței.</strong></blockquote>

      <h3>12.1. Checklist pentru freeze</h3>

      <ul>
        <li>domeniul pieței, geografia și familia de servicii sunt declarate;</li>
        <li>Market Cutoff Date este fixată;</li>
        <li>instanța are identificator stabil;</li>
        <li>metodele de discovery sunt documentate;</li>
        <li>fiecare candidat a trecut prin verification;</li>
        <li>fiecare <code>ELIGIBLE</code> are dovezi conservate și indexate;</li>
        <li>cazurile incerte au status explicit;</li>
        <li>entity resolution este verificat;</li>
        <li>relațiile materiale relevante sunt declarate (secțiunea 14);</li>
        <li>schimbările față de instanța anterioară sunt documentate;</li>
        <li>manifestul de integritate a fost generat și verificat.</li>
      </ul>

      <h2>13. Controlul selection bias</h2>

      <p>Un furnizor nu este inclus doar pentru că apare frecvent în AI sau în Google, este cunoscut autorului, are audiență mare ori este client, partener sau competitor. Un furnizor eligibil nu este eliminat pentru că nu apare în răspunsurile AI.</p>

      <blockquote><strong>Zero AI visibility este un rezultat posibil al măsurării, nu un criteriu de excludere.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-016 — Absența din răspunsurile AI NU TREBUIE folosită pentru eliminarea unui furnizor eligibil.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-017 — Modificarea criteriilor după observarea rezultatelor TREBUIE versionată și documentată; măsurătorile realizate sub o versiune anterioară rămân atribuite acelei versiuni.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-018 — Rezultatele negative, absențele, ambiguitățile și contradicțiile TREBUIE păstrate.</strong></blockquote>

      <h3>13.1. Ce rămâne fix și ce evoluează</h3>

      <ul>
        <li><strong>Metodologia înghețată:</strong> definițiile și regulile folosite într-o serie comparabilă sunt păstrate sau versionate explicit.</li>
        <li><strong>Starea pieței:</strong> furnizorii pot apărea, dispărea sau schimba serviciile.</li>
        <li><strong>Vocabularul:</strong> terminologia poate evolua.</li>
        <li><strong>Discovery:</strong> metodele de identificare pot evolua, fără confundarea discovery cu verification.</li>
      </ul>

      <blockquote><strong>AVLMKT001-REQ-019 — Schimbările care afectează comparabilitatea între instanțe TREBUIE versionate.</strong></blockquote>

      <h3>13.2. Pilotul intern</h3>

      <p>Înainte de versiunea 1.0.0, protocolul este testat printr-un <strong>pilot intern</strong> pe cazuri-limită (de exemplu: echivalență funcțională, furnizori <code>GLOBAL</code>, furnizori <code>HISTORICAL</code>, entitatea afiliată autorului). Pilotul:</p>

      <ul>
        <li>verifică dacă protocolul poate clasifica coerent cazurile-limită;</li>
        <li>nu constituie Market Reference Set oficial;</li>
        <li>nu stabilește populația finală a pieței;</li>
        <li>nu este prezentat ca măsurare trimestrială;</li>
        <li>poate conduce la modificarea acestui draft înainte de 1.0.0, cu modificările documentate în istoricul versiunilor.</li>
      </ul>

      <h2>14. Conflict de interese</h2>

      <p><strong>Declarație.</strong> Autorul acestui protocol este Alex Matescu, fondatorul și coordonatorul AI Visibility Lab. În prima aplicare planificată — piața serviciilor GEO, AEO și AI Visibility relevante pentru clienți din România — autorul sau o entitate afiliată lui pot îndeplini criteriile de eligibilitate, iar ceilalți furnizori evaluați pot fi concurenți comerciali ai autorului. Situația este declarată aici, nu tratată ca ipoteză.</p>

      <p>Atunci când autorul, AI Visibility Lab sau o entitate afiliată este evaluată:</p>

      <ul>
        <li>se aplică exact aceleași criterii ca oricărui alt candidat;</li>
        <li>se folosesc numai dovezi publice verificabile, conservate conform secțiunii 7.2;</li>
        <li>relația este declarată în instanță și în orice raport derivat;</li>
        <li>statutul rezultat este păstrat și publicat indiferent dacă este favorabil sau nefavorabil;</li>
        <li>entitatea afiliată nu primește tratament preferențial în discovery, verification sau raportare;</li>
        <li>includerea sau excluderea ei nu modifică retrospectiv criteriile.</li>
      </ul>

      <blockquote><strong>AVLMKT001-REQ-020 — Relațiile materiale cunoscute dintre autor, AI Visibility Lab și entitățile evaluate TREBUIE declarate în instanță și în orice raport derivat.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-021 — O entitate afiliată autorului sau AI Visibility Lab TREBUIE evaluată cu aceleași criterii și dovezi ca orice alt candidat, iar statutul ei TREBUIE păstrat indiferent de rezultat.</strong></blockquote>

      <p>Verificarea de către o terță parte a deciziilor privind entitatea afiliată este un control suplimentar posibil pentru instanțele viitoare. În această versiune nu este o cerință.</p>

      <p>Principiul general al independenței este stabilit în <a href="/lab/metodologie">AVL-202, secțiunea „Independență și conflict de interese”</a>.</p>

      <h2>15. Stratul de referință și stratul de reprezentare AI</h2>

      <p>Distincția arhitecturală dintre cele două straturi este definită în <a href="/lab/metodologie">AVL-202, §14</a>. Pentru aplicarea acestui protocol, combinațiile posibile sunt:</p>

      <p><code>ELIGIBLE + SURFACED</code>, <code>ELIGIBLE + NOT SURFACED</code>, <code>UNVERIFIED + SURFACED</code>, <code>AMBIGUOUS + SURFACED</code>, <code>OUT OF SCOPE + SURFACED</code>.</p>

      <p>Aceste diferențe sunt rezultate ale măsurării, nu motive pentru rescrierea retrospectivă a referinței.</p>

      <h2>16. Ce documentează furnizorii AI</h2>

      <p>AVL-MKT-001 nu presupune existența unei formule universale pentru menționare, citare sau recomandare. Afirmațiile de mai jos au fost verificate în documentația oficială la 2 octombrie 2026.</p>

      <ul>
        <li><strong>Google Search.</strong> Google spune că bunele practici SEO rămân relevante pentru funcțiile AI din Search, pentru că acestea se bazează pe sistemele de bază de ranking și calitate, și descrie grounding (RAG) și query fan-out. O pagină trebuie să fie indexată și eligibilă pentru afișare cu snippet, iar site-ul trebuie inclus în funcțiile AI generative din Search Console. Google precizează că nu sunt necesare fișiere machine-readable noi, fișiere text pentru AI sau markup special și că îndeplinirea cerințelor nu garantează crawling, indexare sau afișare.</li>
        <li><strong>OpenAI.</strong> OpenAI spune că orice site public poate apărea în ChatGPT search și recomandă ca <code>OAI-SearchBot</code> să nu fie blocat, pentru ca conținutul să poată fi descoperit, afișat și citat. Site-urile care blochează <code>OAI-SearchBot</code> nu sunt afișate în răspunsurile de căutare, deși pot apărea ca linkuri de navigare.</li>
        <li><strong>Anthropic.</strong> Anthropic separă <code>ClaudeBot</code> (colectare de conținut pentru modele), <code>Claude-User</code> (acces la cererea utilizatorului) și <code>Claude-SearchBot</code> (calitatea rezultatelor de căutare). Blocarea <code>Claude-User</code> poate reduce vizibilitatea în căutarea inițiată de utilizator; blocarea <code>Claude-SearchBot</code> poate reduce vizibilitatea și acuratețea în rezultatele de căutare.</li>
        <li><strong>Microsoft Bing.</strong> Raportul AI Performance din Bing Webmaster Tools (februarie 2026) afișează citări, pagini citate, grounding queries și evoluția în timp; anunțul îl descrie ca un pas timpuriu spre instrumente GEO. Extensia din iunie 2026 adaugă Intents, Topics, Citation Share și Compare; Microsoft precizează că Citation Share este o metrică observațională, nu un sistem de ranking și nici un scor de calitate.</li>
        <li><strong>Perplexity.</strong> Perplexity descrie <code>PerplexityBot</code> ca crawler destinat afișării și legării site-urilor în rezultatele de căutare Perplexity, nefolosit pentru antrenarea modelelor de bază, și recomandă permiterea lui în <code>robots.txt</code>.</li>
      </ul>

      <p><strong>Concluzia permisă:</strong> accesibilitatea, posibilitatea de retrieval și calitatea informației sunt documentate ca relevante în aceste ecosisteme. Ele nu formează o regulă universală care garantează citarea sau recomandarea. Observația că un furnizor apare sau nu apare nu dovedește un mecanism intern.</p>

      <blockquote><strong>AVLMKT001-REQ-022 — Afirmațiile despre comportamentul sistemelor AI TREBUIE susținute prioritar prin documentația oficială, atunci când aceasta există.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-023 — O observație despre reprezentarea unui furnizor NU TREBUIE transformată automat într-o afirmație despre un mecanism intern al sistemului AI.</strong></blockquote>

      <h2>17. Prezentarea entităților</h2>

      <p>Regulile editoriale generale — clasificarea afirmațiilor, ierarhia surselor, separarea faptelor de interpretare — sunt stabilite în <a href="/lab/introducere">AVL-001</a> și nu sunt repetate aici. Specific Market Measurement:</p>

      <ul>
        <li>se folosește denumirea canonică utilizată de entitate;</li>
        <li>fără dovezi nu se atribuie furnizorilor titulaturi, dimensiunea companiei, clienți, rezultate, cote de piață, statut de lider sau calificative precum „primul”, „cel mai mare”, „principalul” ori „cel mai bun”;</li>
        <li>fiecare afirmație despre un furnizor urmează structura <code>entitate → afirmație → sursă → dată → statut</code>.</li>
      </ul>

      <h2>18. Limitări</h2>

      <p>Discovery nu poate demonstra exhaustiv identificarea fiecărui furnizor. O ofertă poate exista fără pagină publică; un practician poate lucra exclusiv prin recomandări; paginile pot apărea sau dispărea; terminologia poate evolua; sursele pot fi incomplete; entity resolution poate rămâne incertă.</p>

      <p>De aceea, Market Reference Set este <strong>setul furnizorilor identificați și verificați conform protocolului până la Market Cutoff Date</strong>, nu „lista completă a tuturor furnizorilor existenți”.</p>

      <h2>19. Corectarea erorilor</h2>

      <p>O eroare factuală trebuie corectată. Când este relevant, se păstrează valoarea anterioară, valoarea corectată, data, motivul, sursa și impactul asupra rezultatelor. Dacă populația se schimbă material, se evaluează necesitatea recalculării raportului instanței.</p>

      <h2>20. Ordinea de aplicare</h2>

      <pre><code>AVL-MKT-001 v0.9.0 — draft public (pre-înregistrare)
        ↓
pilot intern pe cazuri-limită
        ↓
corecții documentate
        ↓
AVL-MKT-001 v1.0.0 / Activ
        ↓
declararea instanței (ex. MKT-RO-AIV-2026Q4)
        ↓
Market Discovery — registrul public al candidaților
        ↓
Market Verification — registrul public al entităților verificate
        ↓
Market Reference Set — freeze
        ↓
AVL-MKT-002 — Market Query Panel → execuție AI → măsurare</code></pre>

      <h2>21. Publicarea rezultatelor Market Discovery și Market Verification</h2>

      <p>Market Discovery și Market Verification produc două registre publice distincte. Publicarea lor face verificabilă trecerea de la observație la eligibilitate și nu schimbă natura etapelor: Discovery identifică, Verification evaluează (secțiunea 8). Formatul identificatorilor celor două registre rămâne o decizie deschisă (decizia 2).</p>

      <h3>21.1. Registrul Market Discovery</h3>

      <p>Market Discovery produce un registru public al entităților candidate identificate prin execuțiile documentate ale setului de interogări declarat de instanță. Fiecare entitate este publicată inițial cu statutul <code>UNVERIFIED</code>, împreună cu proveniența observației (rularea, interogarea, suprafața și captura în care a apărut) și cu dovezile disponibile. În acest registru, <code>UNVERIFIED</code> înseamnă că entitatea a fost identificată, dar nu a trecut încă prin Market Verification.</p>

      <p>Includerea în registrul Market Discovery nu confirmă existența, activitatea comercială, eligibilitatea sau calitatea serviciilor unei entități. Identitățile ambigue și mențiunile fără corespondent confirmat sunt semnalate distinct. Semnalarea lor nu este un status de eligibilitate: statusul <code>AMBIGUOUS</code> se atribuie numai în Market Verification.</p>

      <blockquote><strong>AVLMKT001-REQ-024 — Fiecare entitate din registrul Market Discovery TREBUIE publicată cu statutul <code>UNVERIFIED</code>, cu proveniența observației și cu dovezile disponibile.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-025 — Includerea în registrul Market Discovery NU TREBUIE prezentată drept confirmare a existenței, a activității comerciale, a eligibilității sau a calității serviciilor unei entități.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-026 — Identitățile ambigue și mențiunile fără corespondent confirmat TREBUIE semnalate distinct în registrul Market Discovery.</strong></blockquote>

      <h3>21.2. Registrul Market Verification</h3>

      <p>Market Verification este o etapă metodologică separată, în care entitățile candidate sunt evaluate conform criteriilor publice de eligibilitate (secțiunile 7 și 9). Rezultatul ei este <strong>registrul Market Verification</strong>, registrul entităților verificate. Fiecare intrare primește unul dintre statusurile din secțiunea 9:</p>

      <table>
        <thead>
          <tr><th>Status</th><th>Ce înseamnă în registru</th></tr>
        </thead>
        <tbody>
          <tr><td><code>ELIGIBLE</code></td><td>Entitatea îndeplinește criteriile aplicabile (AVLMKT001-REQ-003 – AVLMKT001-REQ-007).</td></tr>
          <tr><td><code>INELIGIBLE</code></td><td>Dovezile permit concluzia că entitatea nu îndeplinește domeniul instanței.</td></tr>
          <tr><td><code>UNVERIFIED</code></td><td>Entitatea a fost evaluată, dar dovezile nu permit confirmarea. Nu este echivalent cu <code>INELIGIBLE</code> (AVLMKT001-REQ-012).</td></tr>
          <tr><td><code>AMBIGUOUS</code></td><td>Există dovezi contradictorii sau probleme de entity resolution nerezolvate.</td></tr>
          <tr><td><code>OUT OF SCOPE</code></td><td>Entitatea este reală, dar nu aparține pieței definite.</td></tr>
          <tr><td><code>HISTORICAL</code></td><td>Serviciul a existat anterior, fără dovadă suficientă de activitate la Market Cutoff Date.</td></tr>
        </tbody>
      </table>

      <p><strong>Registrul furnizorilor eligibili</strong> este partea registrului Market Verification care cuprinde exclusiv intrările <code>ELIGIBLE</code>. Intrările cu celelalte statusuri se publică și ele, pentru că rezultatele negative, ambiguitățile și contradicțiile se păstrează (AVLMKT001-REQ-018).</p>

      <p>Pentru fiecare intrare se indică sursa Market Discovery (rularea și observația din care provine candidatul), data verificării, versiunea AVL-MKT-001 aplicată și dovezile relevante, conform fișei furnizorului (secțiunea 10). Forma dovezilor pentru statusurile incerte rămâne o decizie deschisă (decizia 3).</p>

      <p>Publicarea eligibilității nu constituie certificare, recomandare comercială sau clasament al calității serviciilor.</p>

      <blockquote><strong>AVLMKT001-REQ-027 — Fiecare intrare din registrul Market Verification TREBUIE să indice statusul din secțiunea 9, sursa Market Discovery, data verificării, versiunea AVL-MKT-001 aplicată și dovezile relevante.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-028 — Registrul furnizorilor eligibili TREBUIE să cuprindă exclusiv intrări cu statusul <code>ELIGIBLE</code>.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-029 — Publicarea eligibilității NU TREBUIE prezentată drept certificare, recomandare comercială sau clasament al calității serviciilor.</strong></blockquote>

      <h3>21.3. Relația cu Market Reference Set</h3>

      <p>Cele două registre și Market Reference Set sunt artefacte de instanță distincte:</p>

      <pre><code>Registrul Market Discovery
  = toți candidații identificați, cu statutul UNVERIFIED
        ↓ Market Verification
Registrul Market Verification
  = toți candidații evaluați, fiecare cu un status din secțiunea 9
        ↓ Market Cutoff Date + freeze (secțiunea 12)
Market Reference Set
  = intrările ELIGIBLE la Market Cutoff Date, înghețate</code></pre>

      <p>Market Reference Set se constituie din intrările <code>ELIGIBLE</code> ale registrului Market Verification la Market Cutoff Date și se îngheață conform secțiunii 12. Registrul Market Verification se îngheață odată cu el, astfel încât intrările cu celelalte statusuri rămân păstrate în aceeași stare. Un furnizor identificat după cutoff nu este introdus retrospectiv (secțiunea 11); o rectificare care afectează Market Reference Set se tratează conform secțiunii 19.</p>

      <p>Market Reference Set este constituit independent, de AI Visibility Lab, în scopul cercetării laboratorului. Nu este validat de nicio autoritate publică, organism profesional sau autoritate de reglementare și nu are statut oficial. De aceea are rezerve explicite:</p>

      <ul>
        <li>nu este lista exhaustivă a furnizorilor existenți (secțiunea 18);</li>
        <li>nu este o statistică oficială de piață și nici un registru profesional;</li>
        <li>reflectă criteriile și dovezile acestui protocol, în versiunea aplicată, la Market Cutoff Date;</li>
        <li>poate conține erori, corectate conform secțiunilor 19 și 21.5.</li>
      </ul>

      <blockquote><strong>AVLMKT001-REQ-030 — Market Reference Set TREBUIE publicat împreună cu mențiunea că este constituit independent, în scopul cercetării AI Visibility Lab, și că nu este validat de o autoritate relevantă.</strong></blockquote>

      <h3>21.4. Informarea entităților și neutralitatea statutului</h3>

      <p>Entitățile eligibile POT fi informate individual prin canalele oficiale adecvate, exclusiv în scopul transparenței cercetării și al facilitării rectificării eventualelor erori, cu respectarea cerințelor legale aplicabile.</p>

      <p>Răspunsul, lipsa răspunsului sau relația comercială cu operatorul cercetării — autorul și AI Visibility Lab (secțiunea 14) — nu influențează statutul de eligibilitate.</p>

      <blockquote><strong>AVLMKT001-REQ-031 — Informarea individuală a unei entități, atunci când are loc, TREBUIE limitată la transparența cercetării și la facilitarea rectificării erorilor.</strong></blockquote>

      <blockquote><strong>AVLMKT001-REQ-032 — Răspunsul, lipsa răspunsului sau relația comercială a unei entități cu operatorul cercetării NU TREBUIE să influențeze statutul ei de eligibilitate.</strong></blockquote>

      <h3>21.5. Rectificări</h3>

      <p>Rectificările ulterioare se documentează și se publică prin versiuni noi ale registrului afectat, păstrând trasabilitatea observațiilor istorice. O versiune nouă nu șterge intrarea anterioară: păstrează valoarea anterioară, valoarea corectată, data, motivul și sursa (secțiunea 19).</p>

      <blockquote><strong>AVLMKT001-REQ-033 — Rectificările TREBUIE documentate și publicate prin versiuni noi ale registrului afectat; observațiile istorice NU TREBUIE șterse.</strong></blockquote>

      <h2>Documente asociate</h2>

      <ul>
        <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a> — principiile corpusului, namespace-ul <code>AVL-MKT-*</code> și formatul instanțelor <code>MKT-*</code>.</li>
        <li><a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a> — arhitectura ramurii Market Measurement și precedența normativă.</li>
        <li><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a> — lifecycle, integrity, indexing și traceability pentru dovezi.</li>
        <li>AVL-MKT-002 — Market Query Panel — planificat, nepublicat.</li>
      </ul>

      <h2>Surse oficiale</h2>

      <ul>
        <li>Google Search Central — <em>Optimizing your website for generative AI features on Google Search</em> (actualizat 10 iulie 2026): <a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">https://developers.google.com/search/docs/fundamentals/ai-optimization-guide</a></li>
        <li>OpenAI Help Center — <em>Publishers and Developers FAQ</em>: <a href="https://help.openai.com/en/articles/12627856-publishers-and-developers-faq" target="_blank" rel="noopener noreferrer">https://help.openai.com/en/articles/12627856-publishers-and-developers-faq</a></li>
        <li>OpenAI — <em>Overview of OpenAI Crawlers</em>: <a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">https://developers.openai.com/api/docs/bots</a></li>
        <li>Claude Help Center — <em>Does Anthropic crawl data from the web, and how can site owners block the crawler?</em>: <a href="https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler" target="_blank" rel="noopener noreferrer">https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler</a></li>
        <li>Bing Webmaster Blog — <em>Introducing AI Performance in Bing Webmaster Tools Public Preview</em> (10 februarie 2026): <a href="https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/" target="_blank" rel="noopener noreferrer">https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/</a></li>
        <li>Bing Search Blog — <em>New AI Visibility Insights in Bing Webmaster Tools: Intents, Topics, Citation Share, Compare</em> (16 iunie 2026): <a href="https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/" target="_blank" rel="noopener noreferrer">https://blogs.bing.com/search/2026/6/New-AI-Visibility-Insights-in-Bing-Webmaster-Tools-Intents-Topics-Citation-Share-Compare/</a></li>
        <li>Perplexity Docs — <em>Perplexity Crawlers</em>: <a href="https://docs.perplexity.ai/guides/bots" target="_blank" rel="noopener noreferrer">https://docs.perplexity.ai/guides/bots</a></li>
      </ul>

      <p>Documentația oficială descrie comportamentele și controalele pe care furnizorii aleg să le facă publice. Lipsa documentării unui mecanism nu demonstrează inexistența lui. Afirmațiile despre produse externe sunt reverificate la fiecare revizie materială a protocolului.</p>

      <h2>Checklist de conformitate</h2>

      <ul>
        <li>Domeniul pieței a fost publicat înaintea constituirii Market Reference Set (REQ-001).</li>
        <li>Instanța și-a declarat geografia, familia de servicii, perioada, cutoff-ul și versiunea protocolului (REQ-002).</li>
        <li>Fiecare <code>ELIGIBLE</code> îndeplinește REQ-003 – REQ-007 (REQ-008).</li>
        <li>Nicio eligibilitate nu se sprijină doar pe o mențiune AI (REQ-009).</li>
        <li>Dovezile sunt conservate și indexate conform AVL-200 (REQ-010).</li>
        <li>Discovery și Verification sunt documentate distinct (REQ-011).</li>
        <li><code>UNVERIFIED</code> nu a fost tratat ca <code>INELIGIBLE</code>; statusurile nu sunt prezentate ca scoruri (REQ-012, REQ-013).</li>
        <li>Market Reference Set este independent de rezultatele AI și înghețat înaintea execuției AI (REQ-014, REQ-015).</li>
        <li>Absențele din AI nu au eliminat furnizori; schimbările de criterii și de comparabilitate sunt versionate; rezultatele negative sunt păstrate (REQ-016 – REQ-019).</li>
        <li>Relațiile materiale sunt declarate, iar entitatea afiliată a fost tratată identic (REQ-020, REQ-021).</li>
        <li>Afirmațiile despre sistemele AI sunt susținute de documentație oficială și nu sunt transformate în mecanisme interne (REQ-022, REQ-023).</li>
        <li>Registrul Market Discovery publică fiecare candidat cu statutul <code>UNVERIFIED</code> și cu proveniența observației, fără a prezenta includerea drept confirmare; identitățile ambigue sunt semnalate distinct (REQ-024 – REQ-026).</li>
        <li>Registrul Market Verification indică statusul, sursa Market Discovery, data verificării, versiunea protocolului și dovezile; registrul furnizorilor eligibili cuprinde doar <code>ELIGIBLE</code>; eligibilitatea nu este prezentată drept certificare, recomandare sau clasament (REQ-027 – REQ-029).</li>
        <li>Market Reference Set este publicat cu mențiunea constituirii independente și a lipsei validării de către o autoritate relevantă (REQ-030).</li>
        <li>Informarea entităților este limitată la scopul declarat; răspunsul sau relația comercială nu influențează statutul; rectificările sunt versionate fără ștergerea istoricului (REQ-031 – REQ-033).</li>
      </ul>

      <h2>Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr><td>0.10.0</td><td>16 octombrie 2026</td><td>Draft pentru revizuire</td><td>MINOR, cu schimbare de politică de publicare: secțiunea 21 nouă, „Publicarea rezultatelor Market Discovery și Market Verification”, cu cerințele AVLMKT001-REQ-024 – AVLMKT001-REQ-033. Market Discovery produce un registru public al candidaților, toți cu statutul <code>UNVERIFIED</code>; Market Verification produce registrul entităților verificate, cu statusurile din secțiunea 9; registrul furnizorilor eligibili cuprinde exclusiv intrările <code>ELIGIBLE</code>. Se definesc relația celor două registre cu Market Reference Set și rezervele acestuia (constituit independent, în scopul cercetării laboratorului, nevalidat de o autoritate relevantă), informarea entităților, neutralitatea statutului față de răspunsul sau relația comercială cu operatorul cercetării și rectificările prin versiuni noi. Regula se aplică la nivel de protocol; documentele de instanță care prevedeau nepublicarea numelor furnizorilor se aliniază prin versiuni noi, fără editarea versiunilor citate în pachetele de dovezi. Actualizate: secțiunea 1 (punctul 10), secțiunea 20, starea pilotărilor (trei piloturi Market Discovery), checklist-ul de conformitate și deciziile deschise 2 și 3. Afirmațiile din secțiunea 16 au fost reverificate la 16 octombrie 2026; pagina OpenAI Help Center nu a putut fi accesată (HTTP 403), iar afirmațiile despre <code>OAI-SearchBot</code> au fost confirmate în documentația OpenAI despre crawlere, adăugată la surse. Criteriile de eligibilitate, statusurile din secțiunea 9 și cerințele AVLMKT001-REQ-001 – AVLMKT001-REQ-023 nu se schimbă.</td></tr>
          <tr><td>0.9.2</td><td>13 octombrie 2026</td><td>Draft pentru revizuire</td><td>PATCH: decizia deschisă 5 („Convenția T0 / F1 … Fn în corpus”) este închisă și pentru restul corpusului: convenția și etapele denumite sunt definite în AVL-200 §7 (v1.1.0), iar AVL-001, AVL-202, AVL-101–105 și AVL-201 au fost aliniate la 13 octombrie 2026. Fără modificări ale cerințelor sau ale regulilor Market Discovery.</td></tr>
          <tr><td>0.9.1</td><td>12 octombrie 2026</td><td>Draft pentru revizuire</td><td>Secțiunea 3.2 rescrisă: rulările Market Discovery se identifică prin <code>FULL</code> (rularea trimestrială completă) și <code>M{lună}</code> (rulările lunare); convenția T0 / F1 … Fn nu se folosește în Market Discovery și rămâne cea din AVL-200 §7 și Tabula Rasa (AVL-201); schema rulărilor de măsurare AI rămâne în AVL-MKT-002. Modificarea rezultă din două piloturi de Market Discovery (9 și 11 octombrie 2026): repetarea acelorași interogări la câteva zile distanță nu este o strategie longitudinală adecvată. Decizia deschisă 5 actualizată. Criteriile de eligibilitate, statusurile și cerințele <code>AVLMKT001-REQ-*</code> nu se schimbă.</td></tr>
          <tr><td>0.9.0</td><td>2 octombrie 2026</td><td>Draft pentru revizuire</td><td>Prima versiune publică, ca pre-înregistrare a criteriilor înainte de pilotul intern. Față de draftul intern din 30 septembrie 2026: cerințele unificate într-o singură serie <code>AVLMKT001-REQ-001 … 023</code> (înlocuiesc seriile interne <code>MKT-REQ</code> și <code>E-REQ</code>); clasele geografice generalizate (<code>{CC}-DOMESTIC</code> etc.), cu România păstrată ca exemplu de primă aplicare; separate perioada instanței (Q) și axa rulărilor (T0 / F1 … Fn); dovezile de eligibilitate legate de AVL-200; declarație explicită de conflict de interese și cerințele REQ-020 – REQ-021; adăugate REQ-002, REQ-010 și REQ-015; procedura pilotului preluată din AVL-202; regulile editoriale generale înlocuite cu trimitere la AVL-001; afirmațiile despre furnizorii AI reverificate și restrânse la documentația oficială.</td></tr>
        </tbody>
      </table>

      <h2>Decizii deschise înainte de 1.0.0</h2>

      <ol>
        <li><strong>Pilotul intern.</strong> Neexecutat. Rezultatele lui pot modifica criteriile, statusurile sau clasele.</li>
        <li><strong>Identificatorii artefactelor din instanță.</strong> Formatul identificatorilor pentru registrul de discovery, registrul de verification și Market Reference Set nu este încă stabilit (AVL-001 îl lasă documentelor <code>AVL-MKT-*</code> și AVL-200). Secțiunea 21 definește conținutul celor două registre și relația lor cu Market Reference Set; formatul identificatorilor rămâne deschis.</li>
        <li><strong>Dovezile pentru statusurile incerte.</strong> Dacă și în ce formă trebuie conservate dovezi pentru <code>UNVERIFIED</code> și <code>AMBIGUOUS</code>. Secțiunea 21 cere publicarea dovezilor disponibile pentru fiecare intrare; forma conservării lor pentru statusurile incerte rămâne deschisă.</li>
        <li><strong>Verificarea de către o terță parte</strong> a deciziilor privind entitatea afiliată: control opțional sau cerință pentru instanțele viitoare.</li>
        <li><strong>Convenția T0 / F1 … Fn în corpus.</strong> Închisă. Pentru Market Discovery, în versiunea 0.9.1: rulările se identifică prin <code>FULL</code> și <code>M{lună}</code> (secțiunea 3.2). Pentru restul corpusului, la 13 octombrie 2026: convenția și etapele denumite sunt definite în <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 §7</a> (v1.1.0), iar AVL-001, AVL-202, AVL-101–105 și AVL-201 au fost aliniate. Schema rulărilor de măsurare AI rămâne în AVL-MKT-002.</li>
      </ol>

      <p><em>AVL-MKT-001 este un document normativ al AI Visibility Lab, proiect independent de cercetare aplicată și documentare în AI Visibility, GEO și AEO, fondat și coordonat de Alex Matescu. Versiunea 0.10.0 este un draft public pentru revizuire, nu un protocol activ. Ultima verificare factuală și a surselor: 16 octombrie 2026.</em></p>

`;
