export const avl205FisaEntitatiiHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă · Draft pentru revizuire</p>
        <p class="avl-doc-title">AVL-205 — Fișa entității</p>
        <p class="avl-doc-lead">Entity Sheet</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-205</td></tr>
        <tr><th scope="row">Nivel</th><td>C — Methodology</td></tr>
        <tr><th scope="row">Versiune</th><td>0.2.0</td></tr>
        <tr><th scope="row">Statut</th><td>Draft pentru revizuire</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data creării</th><td>3 noiembrie 2026</td></tr>
        <tr><th scope="row">Data publicării</th><td>4 noiembrie 2026</td></tr>
        <tr><th scope="row">Ultima verificare</th><td>4 noiembrie 2026</td></tr>
        <tr><th scope="row">Limbă</th><td>română</td></tr>
        <tr><th scope="row">URL canonic</th><td><a href="https://delamatescu.ro/lab/metodologie/fisa-entitatii">https://delamatescu.ro/lab/metodologie/fisa-entitatii</a></td></tr>
        <tr><th scope="row">Dependențe normative</th><td><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a>, <a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a>, <a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a>, <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0</a> (§6.4, §7, §10.1; v1.6.0)</td></tr>
        <tr><th scope="row">Dependențe informative</th><td><a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică</a>, <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204 — Grila de interpretare a verificării tehnice</a>, <a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a>, <a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102</a>, <a href="/lab/cercetare/seo-vs-geo">AVL-103</a>, <a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104</a></td></tr>
        </tbody>
        </table>
      </div>

      <nav class="article-toc" aria-labelledby="cuprins">
        <p id="cuprins" class="article-toc-title">Cuprins</p>
        <ol>
          <li><a href="#controlul-documentului">Controlul documentului</a></li>
          <li><a href="#1-ce-este-fisa-entitatii">1. Ce este fișa entității?</a></li>
          <li><a href="#2-ce-nu-este-fisa-entitatii">2. Ce nu este fișa entității?</a></li>
          <li><a href="#3-cum-se-completeaza-fisa">3. Cum se completează fișa?</a>
            <ol>
              <li><a href="#cine-completeaza">Cine completează</a></li>
              <li><a href="#continutul-minim">Conținutul minim</a></li>
              <li><a href="#ce-se-noteaza-la-fiecare-informatie">Ce se notează la fiecare informație</a></li>
              <li><a href="#ce-isi-asuma-reprezentantul">Ce își asumă reprezentantul</a></li>
              <li><a href="#ce-nu-se-trece-in-fisa">Ce nu se trece în fișă</a></li>
            </ol>
          </li>
          <li><a href="#4-cum-se-verifica-fisa-in-t0">4. Cum se verifică reprezentarea fișei în surse?</a>
            <ol>
              <li><a href="#4-1-entitate-ambigua-sau-suspecta">4.1. Entitate ambiguă sau suspectă</a></li>
            </ol>
          </li>
          <li><a href="#5-identificarea-fisei">5. Identificarea fișei</a></li>
          <li><a href="#6-tipul-entitatii">6. Tipul entității</a></li>
          <li><a href="#7-forma-canonica-si-variantele-min">7. Forma canonică și variantele [min]</a>
            <ol>
              <li><a href="#7-1-variante-legitime-si-aliasuri-min">7.1. Variante legitime și aliasuri [min]</a></li>
              <li><a href="#7-2-forme-gresite-observate">7.2. Forme greșite observate</a></li>
            </ol>
          </li>
          <li><a href="#8-rolul-si-activitatea-min">8. Rolul și activitatea [min]</a></li>
          <li><a href="#9-locatia-si-piata-min">9. Locația și piața [min]</a></li>
          <li><a href="#10-atribute-verificabile-min">10. Atribute verificabile [min]</a></li>
          <li><a href="#11-activele-oficiale-min">11. Activele oficiale [min]</a>
            <ol>
              <li><a href="#11-1-site-si-pagini-canonice-min">11.1. Site și pagini canonice [min]</a></li>
              <li><a href="#11-2-profiluri-si-conturi-administrate-de-entitate">11.2. Profiluri și conturi administrate de entitate</a></li>
              <li><a href="#11-3-imagini-oficiale">11.3. Imagini oficiale</a></li>
              <li><a href="#11-4-acces-autorizat-pentru-masurare">11.4. Acces autorizat pentru măsurare</a></li>
            </ol>
          </li>
          <li><a href="#12-relatii-si-ancore-de-dezambiguizare">12. Relații și ancore de dezambiguizare</a></li>
          <li><a href="#13-harta-coliziunilor">13. Harta coliziunilor</a></li>
          <li><a href="#14-prezenta-distribuita">14. Prezența distribuită</a></li>
          <li><a href="#15-politica-crawlere-min">15. Politica crawlere [min]</a>
            <ol>
              <li><a href="#15-1-indexare-si-raspunsuri-declarate-intentionat">15.1. Indexare și răspunsuri declarate intenționat</a></li>
            </ol>
          </li>
          <li><a href="#16-ce-vrea-entitatea-sa-i-se-recunoasca">16. Ce vrea entitatea să i se recunoască</a></li>
          <li><a href="#17-angajamente-pentru-durata-t0">17. Angajamente pentru durata <code>T0</code></a>
            <ol>
              <li><a href="#17-1-completarea-retroactiva">17.1. Completarea retroactivă</a></li>
            </ol>
          </li>
          <li><a href="#18-informatii-pentru-website-serviciu-optional">18. Informații pentru website (serviciu opțional)</a></li>
          <li><a href="#19-revizuire-si-aprobare-inainte-de-publicare">19. Revizuire și aprobare înainte de publicare</a></li>
          <li><a href="#20-confirmarea-reprezentantului">20. Confirmarea reprezentantului</a></li>
          <li><a href="#21-istoricul-fisei">21. Istoricul fișei</a></li>
          <li><a href="#22-provenienta-campurilor">22. Proveniența câmpurilor</a></li>
          <li><a href="#23-documente-asociate">23. Documente asociate</a>
            <ol>
              <li><a href="#normative">Normative</a></li>
              <li><a href="#informative">Informative</a></li>
              <li><a href="#referinte-externe">Referințe externe</a></li>
            </ol>
          </li>
          <li><a href="#24-istoricul-versiunilor">24. Istoricul versiunilor</a></li>
          <li><a href="#25-decizii-deschise-inainte-de-1-0-0">25. Decizii deschise înainte de 1.0.0</a></li>
        </ol>
      </nav>

      <blockquote>
        <p><strong>Principiu:</strong> o entitate nu poate fi măsurată corect dacă nu știm exact cine este. Fișa fixează, înaintea măsurării, ce declară entitatea despre ea și din ce surse oficiale, ca rezultatele să poată fi comparate cu o referință, nu cu o impresie.</p>
      </blockquote>

      <h2 id="controlul-documentului">Controlul documentului</h2>

      <p>AVL-205 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation. Descrie fișa entității: documentul prin care entitatea evaluată, împreună cu Alex Matescu, declară informațiile oficiale despre ea înaintea baseline-ului <code>T0</code>. Explică fiecare câmp: ce înseamnă, cum se completează și cine îl completează.</p>

      <p>Conținutul minim al fișei este stabilit de <a href="/lab/metodologie/tabula-rasa-f0">AVL-201 §7</a>: forma canonică, variante, rol, locație, domeniu, URL-uri oficiale, atribute verificabile, politica crawlere. AVL-205 nu schimbă acest minim. Îl detaliază și adaugă câmpurile care fac fișa folosibilă în lucrul cu clientul. Dacă AVL-205 și AVL-201 diferă, prevalează AVL-201. Pentru politica crawlere (§15), prevalează <a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204 §3.1</a>.</p>

      <p>Din versiunea 1.6.0 (4 noiembrie 2026), AVL-201 trimite la AVL-205 din §7, unde definește fișa entității, și din §10.1, unde cere fișa completă. Tot de la această dată, <a href="/lab/metodologie">AVL-202</a> (1.8.0) include AVL-205 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor.</p>

      <p>Versiunea curentă, <strong>0.2.0</strong>, este un <strong>draft pentru revizuire</strong> și nu este activă. Deciziile rămase deschise înainte de activare sunt enumerate în §25.</p>

      <p>Identificatorul AVL-205 a fost alocat la 4 noiembrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut, și confirmat de Alex Matescu.</p>

      <p>AVL-205 nu introduce cerințe proprii în această versiune. Termenii <strong>TREBUIE</strong>, <strong>NU TREBUIE</strong> și <strong>AR TREBUI</strong> apar numai în cerințele citate din alte documente (<code>F0-REQ-*</code>, <code>AVL200-REQ-*</code>, <code>AVL203-REQ-*</code>, <code>AVL204-REQ-*</code>), cu sensul convențiilor RFC 2119 și RFC 8174 declarat acolo.</p>

      <h2 id="1-ce-este-fisa-entitatii">1. Ce este fișa entității?</h2>

      <p><strong>Fișa entității adună, într-un singur loc, informațiile oficiale despre entitatea evaluată: cine este, cum se numește, ce face, unde activează, ce surse controlează, cu cine poate fi confundată și ce acces vrea pentru crawlere.</strong></p>

      <p>Entitatea poate fi o persoană, o companie, o organizație, o instituție, o marcă, un produs, un serviciu, un proiect, o publicație sau un site (AVL-201 §3). Fișa se completează de client (sau de reprezentantul lui) împreună cu Alex Matescu, înainte de baseline-ul <code>T0</code>.</p>

      <p>Fișa are trei roluri:</p>

      <ol>
        <li><strong>referința măsurării</strong> — în <code>T0</code>, informațiile din fișă se verifică în mediile digitale: site, profiluri, directoare, registre, publicații, Search și răspunsurile AI. Fără fișă nu se poate decide dacă un răspuns descrie entitatea corectă (AVL-201 §10.1);</li>
        <li><strong>condiția verificării tehnice</strong> — o rulare AVL-203 privește numai entități pentru care există o fișă completată de reprezentant (AVL203-REQ-043, AVL204-REQ-015);</li>
        <li><strong>baza intervențiilor de după <code>T0</code></strong> — relațiile dintre profiluri, articole, știri și alte surse, definite sau actualizate în etapa sursei canonice și în etapa prezenței distribuite (<a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 §7.1</a>), și informațiile pentru website-ul entității, numai pentru clienții care aleg acest serviciu (§18).</li>
      </ol>

      <p>Nimic din fișă nu se publică înainte ca informațiile să fie revizuite și aprobate împreună cu clientul (§19).</p>

      <h2 id="2-ce-nu-este-fisa-entitatii">2. Ce nu este fișa entității?</h2>

      <p><strong>Fișa descrie entitatea. Nu este setul de interogări, nu este planul de măsurare și nu este raportul.</strong></p>

      <ul>
        <li><strong>Nu este setul de interogări.</strong> Clientul spune pentru ce întrebări vrea să apară (§16), dar setul se construiește de laborator înainte de examinarea rezultatelor și se îngheață la <code>T0</code> (AVL-201 §10.2).</li>
        <li><strong>Nu este planul de măsurare.</strong> Țara, limba, motoarele, fereastra de măsurare și planul de dovezi sunt intrări separate ale <code>T0</code> (AVL-201 §7). Fișa le poate propune, planul le fixează.</li>
        <li><strong>Nu este un rezultat.</strong> Coloana „Stare la <code>T0</code>” consemnează ce arată sursele publice despre fiecare informație, nu o evaluare a entității.</li>
        <li><strong>Nu este fișa furnizorului din Market Measurement.</strong> Entitățile identificate într-o instanță de piață se descriu prin fișa furnizorului (<a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 §10</a>), completată de laborator din surse publice, fără participarea entității.</li>
        <li><strong>Nu se completează pentru concurenții unei entități evaluate.</strong> Aceștia pot apărea în harta coliziunilor (§13) sau în sursele citate, dar nu primesc fișă proprie (AVL-203 §1).</li>
      </ul>

      <h2 id="3-cum-se-completeaza-fisa">3. Cum se completează fișa?</h2>

      <p><strong>Fiecare câmp are o definiție, un exemplu și un marcaj care spune cine îl completează. Câmpurile cerute de AVL-201 §7 sunt marcate [min].</strong></p>

      <h3 id="cine-completeaza">Cine completează</h3>

      <table>
        <thead>
          <tr><th>Marcaj</th><th>Cine completează</th></tr>
        </thead>
        <tbody>
          <tr><td><strong>C</strong></td><td>clientul sau reprezentantul entității</td></tr>
          <tr><td><strong>Î</strong></td><td>împreună: clientul declară, Alex Matescu formulează și verifică formularea, nu adevărul declarației</td></tr>
          <tr><td><strong>L</strong></td><td>Alex Matescu (laboratorul), după verificare</td></tr>
        </tbody>
      </table>

      <h3 id="continutul-minim">Conținutul minim</h3>

      <p>Câmpurile marcate <strong>[min]</strong> acoperă conținutul minim din AVL-201 §7: forma canonică (§7), variantele (§7.1), rolul (§8), locația (§9), domeniul (§8), URL-urile oficiale (§11.1), atributele verificabile (§10) și politica crawlere (§15). <strong>Domeniul</strong> înseamnă domeniul de activitate al serviciilor entității, nu domeniul web; site-ul intră la URL-urile oficiale. AVL-201 folosește din versiunea 1.6.0 formularea „domeniul de activitate”.</p>

      <p>Fișa cuprinde și <strong>harta coliziunilor</strong> (§13) și <strong>lista activelor oficiale</strong> (§11). AVL-201 §7 le tratează ca intrări distincte, dar §8 le livrează împreună cu fișa, iar §6.4 cere subiectului să declare activele controlate. În AVL-205 sunt păstrate în același document.</p>

      <h3 id="ce-se-noteaza-la-fiecare-informatie">Ce se notează la fiecare informație</h3>

      <table>
        <thead>
          <tr><th>Coloană</th><th>Ce înseamnă</th></tr>
        </thead>
        <tbody>
          <tr><td>Valoare</td><td>informația declarată de entitate</td></tr>
          <tr><td>Sursa oficială</td><td>pagina, documentul sau registrul care o susține; dacă nu există, „declarația reprezentantului, [data]”</td></tr>
          <tr><td>Stare la <code>T0</code></td><td>ce arată sursele publice la verificare (§4)</td></tr>
          <tr><td>Evidence ID</td><td>identificatorul capturii care documentează starea, dacă există (<a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 §11</a>)</td></tr>
        </tbody>
      </table>

      <h3 id="ce-isi-asuma-reprezentantul">Ce își asumă reprezentantul</h3>

      <p><strong>Ce declară reprezentantul în fișă este asumat de el și considerat corect.</strong> Laboratorul nu verifică veridicitatea declarațiilor, de exemplu angajatorul, studiile sau certificările: verificarea lor nu face parte din măsurare. Alex Matescu verifică formularea, adică dacă informația e clară, completă și scrisă la fel în toată fișa, nu adevărul ei.</p>

      <p>Fișa rămâne referința măsurării. Când o sursă publică afirmă altceva decât fișa, starea descrie sursa (§4), nu entitatea. Excepția este entitatea ambiguă sau suspectă (<a href="#4-1-entitate-ambigua-sau-suspecta">§4.1</a>).</p>

      <h3 id="ce-nu-se-trece-in-fisa">Ce nu se trece în fișă</h3>

      <p>Parolele, token-urile, cheile API, cookie-urile și alte secrete de acces nu se trec niciodată în fișă (AVL-200 §18.3, AVL200-REQ-028). Un acces autorizat, de exemplu la Search Console sau la logurile serverului, se notează doar ca existent, cu canalul prin care a fost acordat (§11.4).</p>

      <h2 id="4-cum-se-verifica-fisa-in-t0">4. Cum se verifică reprezentarea fișei în surse?</h2>

      <p><strong>Pentru fiecare informație declarată, verificarea <code>T0</code> notează ce afirmă sursele publice despre ea, cu sursa și data verificării. Se verifică reprezentarea informației în surse, nu adevărul ei (<a href="#ce-isi-asuma-reprezentantul">§3, „Ce își asumă reprezentantul”</a>).</strong></p>

      <p>Stările preiau categoriile din AVL-201 §10.6 („atribute corecte, lipsă, vechi sau false”) și semantica valorilor necunoscute din AVL-200 §6.</p>

      <table>
        <thead>
          <tr><th>Stare</th><th>Sens</th></tr>
        </thead>
        <tbody>
          <tr><td><code>CORECT</code></td><td>sursa publică verificată afirmă aceeași informație ca fișa</td></tr>
          <tr><td><code>VECHI</code></td><td>sursa afirmă o informație care a fost corectă, dar nu mai este actuală</td></tr>
          <tr><td><code>FALS</code></td><td>sursa afirmă altceva decât fișa sau atribuie informația altei entități</td></tr>
          <tr><td><code>LIPSĂ</code></td><td>informația a fost căutată în sursele declarate și nu apare</td></tr>
          <tr><td><code>UNKNOWN</code></td><td>informația a fost căutată, dar nu se poate stabili ce afirmă sursa (de exemplu, pagina nu se încarcă sau sursa e ambiguă)</td></tr>
          <tr><td><code>NEVERIFICAT</code></td><td>informația nu a fost încă verificată</td></tr>
        </tbody>
      </table>

      <p><code>LIPSĂ</code> descrie sursa, nu entitatea: faptul că o informație nu apare online nu o face falsă (AVL-200 §6, AVL200-REQ-010). Starea se notează pe sursă: aceeași informație poate fi <code>CORECT</code> pe site și <code>VECHI</code> pe un profil.</p>
      <p><strong>La punctele următoare (<code>F1</code> … <code>Fn</code>), verificarea se repetă pe aceleași surse și cu aceleași stări, față de fișa valabilă la acel punct.</strong> Schimbările de stare dintre puncte se notează pe sursă, cu Evidence ID-ul fiecărui punct. Pentru o fișă completată retroactiv (§17.1), prima verificare pe surse se face la primul punct de măsurare de după completare și devine referința stărilor pentru punctele următoare; starea de la <code>T0</code> nu se reconstituie. Coloana „Stare la <code>T0</code>” se citește atunci ca stare la punctul verificării, cu punctul notat (de exemplu, <code>F4</code>).</p>

      <h3 id="4-1-entitate-ambigua-sau-suspecta">4.1. Entitate ambiguă sau suspectă</h3>

      <p><strong>AI Visibility Lab nu lucrează cu entități a căror asociere poate afecta imaginea laboratorului sau a lui Alex Matescu.</strong> O entitate este considerată ambiguă sau suspectă (cele două denumiri formează un singur statut) când, în mediul digital, apare cel puțin una dintre situațiile următoare:</p>

      <ol>
        <li>mai multe surse independente contrazic sistematic fișa;</li>
        <li>apar dovezi care pun la îndoială entitatea (persoana sau organizația) ori serviciul ei;</li>
        <li>entității îi sunt aduse public acuzații.</li>
      </ol>

      <p>Statutul poate apărea la completarea fișei, în <code>T0</code> sau în orice etapă ulterioară. Când este constatat:</p>

      <ul>
        <li>colaborarea se închide;</li>
        <li>faptul se documentează intern, cu sursele și dovezile care l-au motivat (<a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 §11</a>); documentarea nu se publică (AVL-001 §21);</li>
        <li>clientului i se comunică închiderea colaborării și statutul „entitate ambiguă sau suspectă”.</li>
      </ul>

      <p>Diferențele obișnuite dintre fișă și surse, de exemplu o informație veche pe un profil, un atribut lipsă sau o coliziune de nume (§13), nu fac o entitate ambiguă sau suspectă. Ele sunt chiar obiectul măsurării.</p>

      <h2 id="5-identificarea-fisei">5. Identificarea fișei</h2>

      <p><strong>Cine este entitatea în raport cu laboratorul, cine o reprezintă și ce serviciu a cerut.</strong></p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>ID fișă</td><td>identificatorul documentului, cu versiunea</td><td><code>FE-exemplu-srl-v1</code></td><td>L</td></tr>
          <tr><td>Versiunea fișei</td><td>crește la fiecare modificare a unei informații (§21)</td><td><code>1</code>, <code>2</code></td><td>L</td></tr>
          <tr><td>ID entitate</td><td>identificator scurt, stabil, fără diacritice, folosit în plan, dovezi și rapoarte</td><td><code>exemplu-srl</code>, <code>delamatescu-ro</code></td><td>L</td></tr>
          <tr><td>Relația cu laboratorul</td><td>proiect, client sau laborator (site propriu); o rulare AVL-203 se face numai pentru aceste relații (AVL203-REQ-043)</td><td>client</td><td>Î</td></tr>
          <tr><td>Reprezentantul entității</td><td>persoana care declară informațiile și politica crawlere în numele entității, cu calitatea ei</td><td>Ion Popescu, administrator</td><td>C</td></tr>
          <tr><td>Data completării</td><td>ziua în care reprezentantul confirmă versiunea curentă</td><td>4 noiembrie 2026</td><td>Î</td></tr>
          <tr><td>Responsabilul de metodologie</td><td>aprobă fișa și confirmă forma canonică și domeniul de activitate (AVL-201 §6.1)</td><td>Alex Matescu</td><td>L</td></tr>
          <tr><td>Operatorul de măsurare</td><td>cine execută rulările <code>T0</code> (AVL-201 §6.2)</td><td>Alex Matescu</td><td>L</td></tr>
          <tr><td>Conflict de interese</td><td>relația comercială, de control sau de participare cu entitatea; se declară dacă rezultatele se publică (<a href="/lab/introducere">AVL-001 §21</a>, AVL-202 „Independență și conflict de interese”)</td><td>„Site-ul propriu al laboratorului”</td><td>L</td></tr>
          <tr><td>Serviciul contractat</td><td>ce s-a cerut: audit, baseline <code>T0</code>, etapa sursei canonice, etapa prezenței distribuite, website sau alt serviciu</td><td>audit AI Visibility</td><td>Î</td></tr>
        </tbody>
      </table>

      <h2 id="6-tipul-entitatii">6. Tipul entității</h2>

      <p><strong>Ce fel de entitate este măsurată. Tipul decide ce pagini și ce surse sunt relevante.</strong></p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Tipul de entitate</td><td>categoria din AVL-201 §3: persoană, companie, organizație, instituție, marcă, produs, serviciu, proiect, publicație, site</td><td>persoană</td><td>Î</td></tr>
          <tr><td>Tipul pentru verificarea tehnică</td><td>categoria din AVL-203 §1.1 și AVL-204 §11: organizație cu servicii, magazin online, afacere locală, profesionist independent sau alt tip, cu motiv</td><td>profesionist independent</td><td>L</td></tr>
          <tr><td>Entități legate care se tratează separat</td><td>persoana și firma ei, o marcă și compania care o deține sunt entități distincte; fiecare primește fișa ei sau se trece ca relație în §12</td><td>persoana X și firma X SRL</td><td>Î</td></tr>
        </tbody>
      </table>

      <p>Un profesionist independent care lucrează sub numele propriu și are un site propriu primește o singură fișă, a persoanei. Site-ul se trece ca activ oficial (§11.1), nu ca entitate separată, iar ID-ul entității poate fi format din domeniul site-ului, ca în seria AVL-203 (exemplu: <code>delamatescu-ro</code> pentru Alex Matescu și delamatescu.ro).</p>

      <h2 id="7-forma-canonica-si-variantele-min">7. Forma canonică și variantele [min]</h2>

      <p><strong>Forma canonică este numele și identificarea oficială stabilite pentru entitate și folosite ca referință în analiză (AVL-201 §5).</strong> Trebuie să fie destul de precisă încât un revizor să poată decide dacă un răspuns se referă la entitatea corectă (AVL-201 §10.1). E bine să fie folosită identic pe site, în profiluri și în datele structurate (<a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz">„Ce este o entitate pentru AI”</a>).</p>

      <p>Forma canonică nu este același lucru cu sursa canonică. Forma canonică este numele de referință, iar sursa canonică este ansamblul surselor controlate de entitate (AVL-200 §7.1; aici §11).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Forma canonică a numelui [min]</td><td>numele principal, scris exact cum îl folosește entitatea public</td><td>„Alex Matescu”</td><td>Î</td></tr>
          <tr><td>Denumirea legală, dacă diferă</td><td>numele din registrul comerțului sau din actele oficiale</td><td>„Exemplu Consulting SRL” pentru marca „Exemplu”</td><td>C</td></tr>
          <tr><td>Scrierea cu și fără diacritice</td><td>forma folosită public; motoarele pot trata formele cu și fără diacritice ca echivalente sau ca diferite (<a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102</a>)</td><td>„Mătescu” nu este folosită; forma publică este „Matescu”</td><td>Î</td></tr>
        </tbody>
      </table>

      <h3 id="7-1-variante-legitime-si-aliasuri-min">7.1. Variante legitime și aliasuri [min]</h3>

      <p><strong>Numele reale sub care entitatea apare legitim: numele complet, o prescurtare, o transliterare, un nume anterior, un nume de marcă.</strong> Nu se trec grafii inventate pentru căutare. Variantele legitime pot deveni <code>alternateName</code> în datele structurate (§18).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Variantă</td><td>numele alternativ, exact cum apare</td><td>„Alexandru Matescu”</td><td>C</td></tr>
          <tr><td>Tipul variantei</td><td>nume complet, prescurtare, transliterare, nume anterior, nume de marcă</td><td>nume complet</td><td>Î</td></tr>
          <tr><td>Unde este folosită</td><td>sursa în care apare varianta</td><td>acte oficiale, LinkedIn</td><td>C</td></tr>
        </tbody>
      </table>

      <h3 id="7-2-forme-gresite-observate">7.2. Forme greșite observate</h3>

      <p><strong>Grafiile greșite sau apropiate care pot produce confuzii, de exemplu o literă dublată sau o diacritică omisă.</strong> Nu sunt forme ale entității. Se folosesc în interogările de dezambiguizare și în harta coliziunilor (§13).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Formă greșită</td><td>grafia care nu aparține entității, dar o poate atrage în rezultate</td><td>„Alex Mateescu”</td><td>Î</td></tr>
          <tr><td>Unde apare</td><td>sursa sau suprafața în care a fost observată</td><td>o căutare Google pe numele entității</td><td>L</td></tr>
          <tr><td>Cu cine poate fi confundată</td><td>entitatea reală care poartă această formă, dacă există</td><td>o altă persoană cu acest nume, din alt oraș</td><td>L</td></tr>
        </tbody>
      </table>

      <h2 id="8-rolul-si-activitatea-min">8. Rolul și activitatea [min]</h2>

      <p><strong>Ce face entitatea acum și cum vrea să fie descrisă.</strong> O persoană sau o firmă poate avea mai multe roluri legitime. Când sursele le prezintă separat, fără legături între ele, unui sistem îi poate fi mai greu să stabilească faptul că descriu aceeași entitate (<a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz">„Ce este o entitate pentru AI”</a>, fragmentarea).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Descrierea principală</td><td>o propoziție: cine este și ce face entitatea acum</td><td>„Exemplu SRL oferă audit energetic pentru clădiri rezidențiale în Sibiu.”</td><td>Î</td></tr>
          <tr><td>Rolul principal [min]</td><td>activitatea pe care entitatea vrea să o comunice acum</td><td>auditor energetic</td><td>C</td></tr>
          <tr><td>Roluri secundare</td><td>experiența care explică traiectoria; nu se ascund roluri reale</td><td>proiectant instalații</td><td>C</td></tr>
          <tr><td>Domeniul de activitate al serviciilor [min]</td><td>domeniul în care entitatea oferă servicii sau produse</td><td>eficiență energetică în construcții</td><td>C</td></tr>
          <tr><td>Serviciile sau produsele principale</td><td>lista serviciilor, cu numărul lor; paginile lor intră în planul AVL-203 ca pagini de ofertă (AVL-203 §1.1)</td><td>audit energetic, certificat energetic</td><td>C</td></tr>
          <tr><td>Pentru cine lucrează entitatea</td><td>tipul de clienți sau publicul</td><td>proprietari de locuințe, asociații de proprietari</td><td>C</td></tr>
          <tr><td>Diferențiatori declarați</td><td>ce o deosebește de alți furnizori; numai afirmații pe care entitatea le poate susține cu dovezi, fără calificative ca „primul” sau „cel mai bun” (AVL-MKT-001 §17)</td><td>„auditori atestați, cu raport în 5 zile lucrătoare”</td><td>C</td></tr>
          <tr><td>Roluri sau poziționări anterioare</td><td>informații corecte în trecut, care pot apărea în surse ca <code>VECHI</code> și pot concura cu descrierea actuală</td><td>fost angajat al firmei Y până în 2024</td><td>C</td></tr>
        </tbody>
      </table>

      <h2 id="9-locatia-si-piata-min">9. Locația și piața [min]</h2>

      <p><strong>Unde activează entitatea și cum poate fi contactată public.</strong> Aceleași date, scrise la fel peste tot, reduc riscul ca reprezentarea entității să se bifurce (AVL-102, „Consecvența semnalelor”).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Țara [min]</td><td>țara în care activează entitatea</td><td>România</td><td>C</td></tr>
          <tr><td>Localitatea [min]</td><td>orașul sau localitatea de referință</td><td>Sibiu</td><td>C</td></tr>
          <tr><td>Adresa publică</td><td>numai dacă entitatea o face publică; o persoană fizică poate declara doar localitatea</td><td>str. Exemplu nr. 1, Sibiu</td><td>C</td></tr>
          <tr><td>Zona deservită</td><td>local, regional, național sau internațional</td><td>județul Sibiu și județele vecine</td><td>C</td></tr>
          <tr><td>Limbile de comunicare</td><td>limbile în care entitatea oferă informații și servicii</td><td>română, engleză</td><td>C</td></tr>
          <tr><td>Telefonul și e-mailul publice</td><td>datele de contact pe care entitatea le vrea publice, identice în toate sursele</td><td>contact@exemplu.ro</td><td>C</td></tr>
          <tr><td>Programul, dacă se aplică</td><td>pentru afacerile locale (AVL-204 §11)</td><td>luni–vineri, 9–17</td><td>C</td></tr>
        </tbody>
      </table>

      <h2 id="10-atribute-verificabile-min">10. Atribute verificabile [min]</h2>

      <p><strong>Faptele de identitate care pot fi confirmate dintr-o sursă oficială (AVL-201 §10.1).</strong> Ele sunt materialul cu care se compară descrierile produse de motoare: rol, locație, experiență, organizații asociate, cronologie (AVL-201 §10.6). Pentru fiecare atribut se notează și dacă poate fi publicat (da, nu sau de decis).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Data înființării sau anul de început al activității</td><td>când a început entitatea să existe sau să activeze</td><td>2018</td><td>C</td></tr>
          <tr><td>Forma juridică și datele de registru</td><td>forma juridică, codul fiscal (CUI), numărul de la registrul comerțului</td><td>SRL, CUI și număr ONRC</td><td>C</td></tr>
          <tr><td>Fondatori, asociați, conducere</td><td>persoanele care conduc sau dețin entitatea, când sunt publice</td><td>administrator: Ion Popescu</td><td>C</td></tr>
          <tr><td>Organizații asociate</td><td>angajator, parteneri, asociații profesionale</td><td>membru al unei asociații profesionale</td><td>C</td></tr>
          <tr><td>Studii, certificări, autorizații</td><td>calificările care susțin rolul declarat</td><td>atestat de auditor energetic</td><td>C</td></tr>
          <tr><td>Proiecte, publicații, cărți</td><td>lucrările atribuibile entității</td><td>o carte, un proiect public</td><td>C</td></tr>
          <tr><td>Premii și apariții în presă</td><td>distincții și articole despre entitate</td><td>interviu într-o publicație locală</td><td>C</td></tr>
          <tr><td>Cronologia principală</td><td>etapele importante, în ordine</td><td>2018 înființare, 2022 extindere</td><td>Î</td></tr>
          <tr><td>Identificatori publici</td><td>ORCID, Wikidata, ISNI sau ID-uri din registre profesionale; numai cei care aparțin sigur entității</td><td>un ID ORCID verificat</td><td>Î</td></tr>
        </tbody>
      </table>

      <h2 id="11-activele-oficiale-min">11. Activele oficiale [min]</h2>

      <p><strong>Sursele controlate direct de entitate și profilurile pe care le administrează.</strong> Ele formează sursa canonică: site-ul oficial, paginile canonice, datele structurate și textele de identificare (AVL-200 §7.1). Clientul le declară (AVL-201 §6.4). La <code>T0</code>, laboratorul verifică dacă fiecare există, ce afirmă și dacă trimite înapoi la sursa canonică.</p>

      <h3 id="11-1-site-si-pagini-canonice-min">11.1. Site și pagini canonice [min]</h3>

      <p><strong>Adresele site-ului și paginile lui de referință.</strong> Categoriile urmează planul de măsurare din AVL-203 §1.1.</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Originea canonică (domeniul web)</td><td>adresa oficială a site-ului, cu varianta aleasă: cu sau fără <code>www</code>, cu <code>https</code></td><td><code>https://delamatescu.ro</code></td><td>C</td></tr>
          <tr><td>Pagina principală</td><td>prima pagină a site-ului</td><td><code>https://exemplu.ro/</code></td><td>C</td></tr>
          <tr><td>Pagina canonică despre entitate</td><td>pagina „Despre” sau de profil, care explică cine este entitatea</td><td><code>https://exemplu.ro/despre</code></td><td>C</td></tr>
          <tr><td>Pagina de contact sau de date de identitate</td><td>pagina care arată cine răspunde de site; obligatorie în planul AVL-203, iar dacă lipsește, absența se raportează (AVL203-REQ-042)</td><td><code>https://exemplu.ro/contact</code></td><td>C</td></tr>
          <tr><td>Paginile principale de servicii sau produse</td><td>câte o pagină pentru fiecare serviciu principal din §8</td><td><code>https://exemplu.ro/audit-energetic</code></td><td>C</td></tr>
          <tr><td>Paginile de referință desemnate de entitate</td><td>hub-uri sau pagini-pilon pe care entitatea le consideră cele mai bune surse despre ea</td><td>un ghid publicat pe site</td><td>C</td></tr>
          <tr><td>Subdomenii</td><td>alte adrese sub același domeniu</td><td><code>blog.exemplu.ro</code></td><td>C</td></tr>
          <tr><td>Alte domenii deținute</td><td>inclusiv domenii vechi sau redirecționate</td><td><code>exemplu-vechi.ro</code></td><td>C</td></tr>
        </tbody>
      </table>

      <h3 id="11-2-profiluri-si-conturi-administrate-de-entitate">11.2. Profiluri și conturi administrate de entitate</h3>

      <p><strong>Conturile pe care entitatea le controlează pe alte platforme.</strong> Pentru fiecare se notează URL-ul, numele afișat, descrierea (bio), dacă trimite la site și cine îl administrează. Numele și descrierea ar trebui să fie coerente cu forma canonică (§7) și cu descrierea principală (§8).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>LinkedIn</td><td>profilul personal sau pagina companiei</td><td><code>https://www.linkedin.com/in/…</code></td><td>C</td></tr>
          <tr><td>Facebook</td><td>pagina sau profilul public</td><td><code>https://www.facebook.com/…</code></td><td>C</td></tr>
          <tr><td>Instagram</td><td>contul public</td><td><code>https://www.instagram.com/…</code></td><td>C</td></tr>
          <tr><td>X</td><td>contul public</td><td><code>https://x.com/…</code></td><td>C</td></tr>
          <tr><td>YouTube</td><td>canalul</td><td><code>https://www.youtube.com/@…</code></td><td>C</td></tr>
          <tr><td>TikTok</td><td>contul public</td><td><code>https://www.tiktok.com/@…</code></td><td>C</td></tr>
          <tr><td>Google Business Profile</td><td>profilul afacerii în Google, pentru entitățile cu locație</td><td>linkul profilului</td><td>C</td></tr>
          <tr><td>Pagini de autor</td><td>paginile de autor din publicații sau platforme pe care entitatea le administrează</td><td>pagina de autor dintr-o revistă</td><td>C</td></tr>
          <tr><td>Directoare și registre cu profil creat de entitate</td><td>profiluri pe care entitatea și le-a creat sau le întreține</td><td>un director profesional</td><td>C</td></tr>
          <tr><td>Alte platforme</td><td>orice alt profil administrat de entitate</td><td>—</td><td>C</td></tr>
        </tbody>
      </table>

      <p>Pentru fiecare profil se notează:</p>

      <table>
        <thead>
          <tr><th>Coloană</th><th>Ce înseamnă</th></tr>
        </thead>
        <tbody>
          <tr><td>URL</td><td>adresa exactă a profilului</td></tr>
          <tr><td>Nume afișat</td><td>numele sub care apare profilul, exact cum e scris; de comparat cu forma canonică (§7)</td></tr>
          <tr><td>Descrierea (bio)</td><td>textul de prezentare al profilului; de comparat cu descrierea principală (§8)</td></tr>
          <tr><td>Trimite la site?</td><td>dacă profilul are link către site-ul entității</td></tr>
          <tr><td>Cine îl administrează</td><td>entitatea, o agenție sau altă persoană</td></tr>
          <tr><td>Stare la <code>T0</code></td><td>ce arată profilul la verificare (§4)</td></tr>
        </tbody>
      </table>

      <h3 id="11-3-imagini-oficiale">11.3. Imagini oficiale</h3>

      <p><strong>Fotografia sau logo-ul pe care entitatea le folosește oficial, cu drepturile de utilizare.</strong> Verificarea <code>T0</code> notează și imaginile afișate de motoare: o imagine greșită este o eroare de reprezentare chiar dacă textul este corect (<a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul Tabula Rasa</a>, §11).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Fotografia de profil sau logo-ul</td><td>imaginea oficială, ca URL sau fișier</td><td><code>https://exemplu.ro/logo.svg</code></td><td>C</td></tr>
          <tr><td>Drepturile de utilizare</td><td>cine deține imaginea și unde poate fi folosită</td><td>fotografie proprie, utilizare liberă pe site și profiluri</td><td>C</td></tr>
        </tbody>
      </table>

      <h3 id="11-4-acces-autorizat-pentru-masurare">11.4. Acces autorizat pentru măsurare</h3>

      <p><strong>Instrumentele la care entitatea dă acces, ca observațiile externe să fie completate cu date interne.</strong> Se notează doar dacă accesul a fost acordat și prin ce canal, niciodată parola.</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Google Search Console</td><td>datele de indexare și căutare ale site-ului în Google</td><td>da, invitație pe contul operatorului</td><td>C</td></tr>
          <tr><td>Bing Webmaster Tools</td><td>datele site-ului în Bing</td><td>nu</td><td>C</td></tr>
          <tr><td>Logurile serverului sau ale CDN-ului</td><td>cererile primite de site, inclusiv de la crawlere</td><td>da, export lunar</td><td>C</td></tr>
          <tr><td>Analytics</td><td>traficul site-ului, inclusiv vizitele venite din sisteme AI</td><td>da, acces de citire</td><td>C</td></tr>
        </tbody>
      </table>

      <h2 id="12-relatii-si-ancore-de-dezambiguizare">12. Relații și ancore de dezambiguizare</h2>

      <p><strong>Legăturile dintre entitate și oameni, organizații, locuri și surse.</strong> Relațiile arată că mai multe surse descriu aceeași entitate. Tot ele pot servi drept ancore de dezambiguizare: contexte precum orașul, compania sau domeniul web, după care un sistem găsește entitatea corectă (<a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">studiul Tabula Rasa</a>, §1).</p>

      <p>Fiecare relație se scrie ca o propoziție scurtă: entitate, relație, entitate legată, sursa care o confirmă.</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Entitate</td><td>entitatea din fișă sau o entitate legată de ea</td><td>Ion Popescu</td><td>Î</td></tr>
          <tr><td>Relație</td><td>legătura, formulată ca verb</td><td>este administrator al</td><td>Î</td></tr>
          <tr><td>Entitate legată</td><td>persoana, organizația, locul, domeniul sau publicația</td><td>Exemplu SRL</td><td>Î</td></tr>
          <tr><td>Sursa care confirmă relația</td><td>pagina sau registrul în care relația apare explicit</td><td>pagina „Despre” a firmei</td><td>Î</td></tr>
        </tbody>
      </table>

      <p>Exemple de relații: are sediul în, locuiește în, lucrează la, este fondator al, deține domeniul, este autor al, este membru al.</p>

      <h2 id="13-harta-coliziunilor">13. Harta coliziunilor</h2>

      <p><strong>Entitățile cu nume identic sau asemănător, cu sursele lor dominante (AVL-201 §7).</strong> Harta servește la interogările de dezambiguizare și la clasificarea <code>COLIZIUNE</code> (AVL-201 §13). Auditul de coliziune verifică cine altcineva „răspunde” la numele entității (<a href="/lab/cercetare/seo-vs-geo">AVL-103</a>).</p>

      <p>Despre alte persoane se notează numai informația publică necesară pentru a le distinge de entitate. Ele nu se publică fără anonimizare (AVL-001 §21).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Entitatea concurentă</td><td>cine mai poartă numele sau un nume apropiat</td><td>o firmă cu nume asemănător</td><td>L</td></tr>
          <tr><td>Numele sau forma</td><td>forma exactă sub care apare</td><td>„Exemplu Group SA”</td><td>L</td></tr>
          <tr><td>Ce o distinge</td><td>rolul, localitatea sau organizația care o separă de entitatea din fișă</td><td>alt oraș, alt domeniu de activitate</td><td>L</td></tr>
          <tr><td>Sursele ei dominante</td><td>sursele în care apare cel mai des</td><td>site propriu, un director de firme</td><td>L</td></tr>
          <tr><td>Tipul coliziunii</td><td>omonim, nume apropiat, firmă cu nume similar sau termen generic</td><td>nume apropiat</td><td>L</td></tr>
          <tr><td>Unde a fost observată</td><td>suprafața în care s-a produs confuzia</td><td>Google Search, ChatGPT</td><td>L</td></tr>
        </tbody>
      </table>

      <h2 id="14-prezenta-distribuita">14. Prezența distribuită</h2>

      <p><strong>Informațiile despre entitate din afara sursei canonice: publicații, știri, interviuri, directoare, registre și mențiuni, controlate sau independente (AVL-200 §7.1, AVL-201 §10.8).</strong> Clientul declară ce cunoaște. Laboratorul completează în <code>T0</code> ce găsește. Aceasta este baza matricei prezenței distribuite.</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Sursa</td><td>publicația, directorul sau registrul</td><td>o publicație locală</td><td>Î</td></tr>
          <tr><td>URL</td><td>adresa exactă a paginii</td><td><code>https://…</code></td><td>Î</td></tr>
          <tr><td>Data</td><td>data publicării sau a ultimei actualizări</td><td>12 martie 2025</td><td>L</td></tr>
          <tr><td>Controlată sau independentă</td><td>dacă entitatea poate modifica sursa</td><td>independentă</td><td>L</td></tr>
          <tr><td>Ce afirmă despre entitate</td><td>informația relevantă, pe scurt</td><td>rolul și localitatea</td><td>L</td></tr>
          <tr><td>Trimite la sursa canonică?</td><td>dacă sursa are link către site-ul entității</td><td>nu</td><td>L</td></tr>
          <tr><td>Acțiunea propusă după <code>T0</code></td><td>ce merită corectat, aliniat sau completat</td><td>cerere de actualizare a rolului</td><td>Î</td></tr>
        </tbody>
      </table>

      <p>Acțiunea propusă se notează în <code>T0</code>, dar nu se execută până la închiderea baseline-ului (AVL-201 §10.9, F0-REQ-001).</p>

      <h2 id="15-politica-crawlere-min">15. Politica crawlere [min]</h2>

      <p><strong>Accesul pe care entitatea îl vrea pentru crawlerele de căutare, de antrenare și de fetch la cererea utilizatorului (AVL-201 §7, AVL-204 §3.1).</strong> Îl completează reprezentantul entității. AI Visibility Lab recomandă accesul total pentru toate crawlerele.</p>

      <p>Dacă reprezentantul nu declară o politică diferită, se înregistrează accesul total, cu sursa „recomandarea AI Visibility Lab, nemodificată de reprezentant”. O politică diferită se declară pe crawler sau pe categorie, cu sursa și data. Politica se copiază în planul AVL-203 înaintea rulării și nu se deduce din <code>robots.txt</code>: ea descrie ce vrea entitatea, iar verificarea tehnică arată ce livrează serverul (AVL204-REQ-017).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Opțiunea reprezentantului</td><td>acceptă recomandarea (acces total) sau declară o politică diferită</td><td>accept recomandarea</td><td>C</td></tr>
          <tr><td>Categoria</td><td>căutare, antrenare sau fetch la cererea utilizatorului</td><td>antrenare</td><td>C</td></tr>
          <tr><td>Crawlerul</td><td>numele agentului sau al tokenului din <code>robots.txt</code></td><td><code>GPTBot</code></td><td>C</td></tr>
          <tr><td>Politica</td><td><code>PERMIS</code> sau <code>BLOCAT_INTENTIONAT</code></td><td><code>BLOCAT_INTENTIONAT</code></td><td>C</td></tr>
          <tr><td>Domeniul de aplicare</td><td>tot site-ul sau anumite căi</td><td>tot site-ul</td><td>C</td></tr>
          <tr><td>Sursa și data declarației</td><td>cine a declarat politica și când</td><td>declarația administratorului, 4 noiembrie 2026</td><td>Î</td></tr>
        </tbody>
      </table>

      <p>Crawlerele urmărite la data acestui document sunt cele din planul primei rulări AVL-203 (<a href="/lab/studii-de-caz/verificare-tehnica-delamatescu-ro">CS-002</a>):</p>

      <table>
        <thead>
          <tr><th>Categorie</th><th>Crawlere</th></tr>
        </thead>
        <tbody>
          <tr><td>căutare</td><td><code>Googlebot</code>, <code>bingbot</code>, <code>OAI-SearchBot</code>, <code>Claude-SearchBot</code>, <code>PerplexityBot</code></td></tr>
          <tr><td>antrenare</td><td><code>GPTBot</code>, <code>ClaudeBot</code>, <code>Google-Extended</code> (token în <code>robots.txt</code>, nu User-Agent separat), <code>CCBot</code></td></tr>
          <tr><td>fetch la cererea utilizatorului</td><td><code>ChatGPT-User</code>, <code>Claude-User</code>, <code>Perplexity-User</code></td></tr>
        </tbody>
      </table>

      <p>Crawlerele de fetch la cererea utilizatorului se raportează numai ca observație, pentru că furnizorii lor declară că regulile din <code>robots.txt</code> pot să nu li se aplice (<a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 §6</a>, AVL204-REQ-018). Lista se reverifică la fiecare versiune a protocolului AVL-203.</p>

      <h3 id="15-1-indexare-si-raspunsuri-declarate-intentionat">15.1. Indexare și răspunsuri declarate intenționat</h3>

      <p><strong>Paginile pe care entitatea nu vrea să le indexeze și răspunsurile pe care le-a configurat deliberat.</strong> Un răspuns declarat aici nu se raportează drept problemă în verificarea tehnică (AVL-204 §6.2, §6.5).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Pagina sau zona</td><td>URL-ul sau grupul de pagini</td><td><code>/cont/</code></td><td>C</td></tr>
          <tr><td>Vrea să fie indexată?</td><td>da sau nu</td><td>nu</td><td>C</td></tr>
          <tr><td>Redirect, eroare sau canonical intenționat</td><td>răspunsul configurat deliberat</td><td>redirect permanent de la domeniul vechi</td><td>C</td></tr>
          <tr><td>Motiv</td><td>de ce a fost configurat așa</td><td>domeniul vechi a fost înlocuit</td><td>C</td></tr>
        </tbody>
      </table>

      <h2 id="16-ce-vrea-entitatea-sa-i-se-recunoasca">16. Ce vrea entitatea să i se recunoască</h2>

      <p><strong>Ce întrebări contează pentru entitate și ce ar trebui să spună un răspuns corect despre ea.</strong> Este informație de intrare pentru setul de interogări, nu setul însuși. Setul se construiește de laborator înainte de examinarea rezultatelor, pe intenții (identitate, rol, informație factuală, comparație, recomandare), și se îngheață la <code>T0</code> (AVL-201 §10.2, F0-REQ-008; <a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104</a>).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Întrebările pentru care vrea să apară</td><td>formulările pe care le folosesc clienții ei</td><td>„cine face audit energetic în Sibiu?”</td><td>C</td></tr>
          <tr><td>Ce ar trebui să spună corect un răspuns</td><td>3–5 fapte esențiale despre entitate</td><td>rolul, localitatea, serviciul principal</td><td>Î</td></tr>
          <tr><td>Informații greșite sau vechi deja observate</td><td>ce a văzut entitatea până acum, cu exemplu și dată</td><td>un răspuns AI care o descrie cu rolul vechi</td><td>C</td></tr>
          <tr><td>Recomandarea pentru care vrea să fie aleasă</td><td>rol + domeniu de activitate + zonă geografică</td><td>auditor energetic în județul Sibiu</td><td>C</td></tr>
          <tr><td>Piața și limbile de măsurat</td><td>propunere pentru planul <code>T0</code> (AVL-201 §7, „Țara și limba”)</td><td>România, română și engleză</td><td>Î</td></tr>
          <tr><td>Motoarele de interes</td><td>propunere; lista finală o stabilește laboratorul în planul <code>T0</code></td><td>ChatGPT, Google AI Mode</td><td>Î</td></tr>
        </tbody>
      </table>

      <h2 id="17-angajamente-pentru-durata-t0">17. Angajamente pentru durata <code>T0</code></h2>

      <p><strong>Ce se angajează entitatea să nu schimbe cât timp se măsoară starea inițială.</strong> O intervenție făcută în timpul <code>T0</code> amestecă starea inițială cu efectul intervenției.</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Declarația de îngheț</td><td>entitatea nu modifică site-ul, profilurile, datele structurate sau prezența externă de la începutul <code>T0</code> până la închiderea lui (F0-REQ-001; AVL-201 §7)</td><td>confirmat, cu data</td><td>C</td></tr>
          <tr><td>Anunțarea schimbărilor neplanificate</td><td>orice schimbare care apare totuși se anunță, ca să fie consemnată ca incident (F0-REQ-002)</td><td>confirmat</td><td>C</td></tr>
          <tr><td>Schimbări deja programate</td><td>modificări care nu pot fi amânate, cu data lor</td><td>lansarea unui produs pe 15 noiembrie</td><td>C</td></tr>
          <tr><td>Forma înghețului între punctele de măsurare</td><td>după închiderea <code>T0</code> și până la punctul următor, entitatea poate declara fie îngheț complet, fie îngheț al identității: numele, rolul, locația, profilurile, datele structurate și paginile de identitate rămân neschimbate, iar conținutul nou (articole, documentație) se poate publica. În timpul <code>T0</code> se aplică integral F0-REQ-001.</td><td>îngheț al identității, conținut nou permis</td><td>C</td></tr>
        </tbody>
      </table>

      <h3 id="17-1-completarea-retroactiva">17.1. Completarea retroactivă</h3>

      <p><strong>Când fișa se completează după un <code>T0</code> deja făcut, de exemplu pentru o serie începută înaintea AVL-205, ea devine referința punctelor următoare (<code>F1</code> … <code>Fn</code>).</strong> Completarea retroactivă nu schimbă rezultatele <code>T0</code> și nici referința folosită atunci (AVL200-REQ-013). Fișa notează că a fost completată după <code>T0</code> și data completării. Prima verificare pe surse a unei fișe completate retroactiv se face la punctul următor (§4). Exemplu: fișa pentru delamatescu.ro și Alex Matescu (§25, deciziile 1 și 4), verificată pe surse la <code>F4</code> Tabula Rasa.</p>

      <h2 id="18-informatii-pentru-website-serviciu-optional">18. Informații pentru website (serviciu opțional)</h2>

      <p><strong>Numai pentru clienții care aleg serviciul de website sau etapa sursei canonice.</strong> Informațiile se preiau din fișă după verificarea <code>T0</code> și devin propuneri, aprobate de client înainte de publicare (§19). Etapa sursei canonice nu are încă un document normativ propriu (AVL-001), deci secțiunea aceasta este operațională, nu normativă.</p>

      <p>Datele structurate descriu doar ce apare vizibil pe pagină. Nu garantează indexarea, menționarea sau citarea (<a href="/lab/metodologie">AVL-202 §7</a>).</p>

      <table>
        <thead>
          <tr><th>Informație pe site</th><th>Proprietatea schema.org</th><th>Se aplică la</th><th>Vine din</th></tr>
        </thead>
        <tbody>
          <tr><td>Numele canonic</td><td><code>name</code></td><td>persoană, organizație</td><td>§7</td></tr>
          <tr><td>Variantele legitime</td><td><code>alternateName</code></td><td>persoană, organizație</td><td>§7.1</td></tr>
          <tr><td>Descrierea principală</td><td><code>description</code></td><td>persoană, organizație</td><td>§8</td></tr>
          <tr><td>Rolul</td><td><code>jobTitle</code></td><td>persoană</td><td>§8</td></tr>
          <tr><td>Pagina canonică despre entitate</td><td><code>url</code>, cu un <code>@id</code> stabil</td><td>persoană, organizație</td><td>§11.1</td></tr>
          <tr><td>Localitatea</td><td><code>homeLocation</code></td><td>persoană</td><td>§9</td></tr>
          <tr><td>Adresa</td><td><code>address</code></td><td>persoană, organizație</td><td>§9</td></tr>
          <tr><td>Zona deservită</td><td><code>areaServed</code></td><td>organizație</td><td>§9</td></tr>
          <tr><td>Domeniile de expertiză</td><td><code>knowsAbout</code></td><td>persoană, organizație</td><td>§8</td></tr>
          <tr><td>Profilurile care identifică sigur entitatea</td><td><code>sameAs</code>, numai pentru identități fără echivoc</td><td>persoană, organizație</td><td>§11.2</td></tr>
          <tr><td>Organizația la care lucrează persoana</td><td><code>worksFor</code></td><td>persoană</td><td>§12</td></tr>
          <tr><td>Fondatorul organizației</td><td><code>founder</code></td><td>organizație</td><td>§12</td></tr>
          <tr><td>Organizațiile din care face parte</td><td><code>memberOf</code></td><td>persoană, organizație</td><td>§12</td></tr>
          <tr><td>Imaginea oficială</td><td><code>image</code></td><td>persoană, organizație</td><td>§11.3</td></tr>
          <tr><td>Logo-ul</td><td><code>logo</code></td><td>organizație</td><td>§11.3</td></tr>
          <tr><td>Datele de contact</td><td><code>email</code>, <code>telephone</code>, <code>contactPoint</code></td><td>persoană, organizație</td><td>§9</td></tr>
          <tr><td>Data înființării</td><td><code>foundingDate</code></td><td>organizație</td><td>§10</td></tr>
        </tbody>
      </table>

      <p>Proprietățile și tipurile cărora li se aplică au fost verificate pe schema.org la 4 noiembrie 2026 (<a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">Person</a>, <a href="https://schema.org/Organization" target="_blank" rel="noopener noreferrer">Organization</a>).</p>

      <h2 id="19-revizuire-si-aprobare-inainte-de-publicare">19. Revizuire și aprobare înainte de publicare</h2>

      <p><strong>Nicio informație din fișă nu se publică pe site, în profiluri, în articole sau într-un studiu de caz fără aprobarea clientului.</strong> Un audit privat nu devine automat studiu de caz public (AVL-201 §3; <a href="/lab/audit-ai-visibility">Auditul AI Visibility</a>). Informațiile confidențiale ale clientului nu se publică fără acord explicit (AVL-001 §21).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Ce se publică</td><td>informația sau textul propus</td><td>descrierea principală nouă</td><td>Î</td></tr>
          <tr><td>Unde</td><td>pagina, profilul sau publicația</td><td>pagina „Despre”</td><td>Î</td></tr>
          <tr><td>Versiunea revizuită</td><td>textul exact aprobat</td><td>versiunea 2 a textului</td><td>Î</td></tr>
          <tr><td>Aprobat de</td><td>reprezentantul care aprobă</td><td>Ion Popescu</td><td>C</td></tr>
          <tr><td>Data aprobării</td><td>ziua aprobării</td><td>20 noiembrie 2026</td><td>C</td></tr>
        </tbody>
      </table>

      <h2 id="20-confirmarea-reprezentantului">20. Confirmarea reprezentantului</h2>

      <p><strong>Reprezentantul confirmă sau contestă factual fișa (AVL-201 §6.4).</strong> O contestare se notează cu valoarea contestată, valoarea propusă și sursa. Fișa se semnează de reprezentant și de responsabilul de metodologie.</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Secțiunea sau câmpul</td><td>ce se confirmă sau se contestă</td><td>§9, localitatea</td><td>C</td></tr>
          <tr><td>Confirmat sau contestat</td><td>decizia reprezentantului</td><td>contestat</td><td>C</td></tr>
          <tr><td>Valoarea propusă</td><td>valoarea corectă, după reprezentant</td><td>Mediaș</td><td>C</td></tr>
          <tr><td>Sursa</td><td>documentul care susține valoarea propusă</td><td>certificatul de înregistrare</td><td>C</td></tr>
          <tr><td>Semnăturile</td><td>reprezentantul entității și responsabilul de metodologie, cu data</td><td>—</td><td>C, L</td></tr>
        </tbody>
      </table>

      <h2 id="21-istoricul-fisei">21. Istoricul fișei</h2>

      <p><strong>Fișa se versionează.</strong> O corectură păstrează valoarea anterioară, valoarea corectată, data, motivul și sursa (AVL-MKT-001 §19). Valorile folosite într-o măsurare deja făcută nu se schimbă retroactiv (AVL200-REQ-013). Versiunea fișei folosită la <code>T0</code> se menționează în plan și în raport (AVL-201 §20).</p>

      <table>
        <thead>
          <tr><th>Câmp</th><th>Ce înseamnă</th><th>Exemplu sau cum se completează</th><th>Cine</th></tr>
        </thead>
        <tbody>
          <tr><td>Versiunea fișei</td><td>numărul versiunii noi</td><td>2</td><td>L</td></tr>
          <tr><td>Data</td><td>ziua modificării</td><td>5 decembrie 2026</td><td>L</td></tr>
          <tr><td>Ce s-a schimbat</td><td>câmpul modificat</td><td>rolul principal</td><td>L</td></tr>
          <tr><td>Valoarea anterioară</td><td>ce scria înainte</td><td>proiectant</td><td>L</td></tr>
          <tr><td>Motiv și sursă</td><td>de ce s-a schimbat și pe ce bază</td><td>schimbarea activității, anunțată de reprezentant</td><td>Î</td></tr>
          <tr><td>Aprobat de</td><td>cine a aprobat modificarea</td><td>reprezentantul și responsabilul de metodologie</td><td>C, L</td></tr>
        </tbody>
      </table>

      <h2 id="22-provenienta-campurilor">22. Proveniența câmpurilor</h2>

      <p><strong>De unde provine fiecare secțiune a fișei.</strong> Secțiunile fără bază normativă sunt marcate „operațional”.</p>

      <table>
        <thead>
          <tr><th>Secțiune</th><th>Sursa în corpus</th></tr>
        </thead>
        <tbody>
          <tr><td>Conținutul minim [min]</td><td>AVL-201 §7</td></tr>
          <tr><td>§3 „Ce își asumă reprezentantul”, §4.1 Entitate ambiguă sau suspectă</td><td>operațional; decizii Alex Matescu, 4 noiembrie 2026; AVL-001 §21; AVL-200 §11</td></tr>
          <tr><td>§4 Verificarea la <code>F1</code> … <code>Fn</code> și a fișei completate retroactiv</td><td>operațional; decizie Alex Matescu, 4 noiembrie 2026; AVL-200 §7, AVL200-REQ-013</td></tr>
          <tr><td>§5 Identificarea fișei</td><td>AVL-201 §6.1–6.4; AVL-203 §1, AVL203-REQ-043; AVL-204 AVL204-REQ-015; AVL-001 §21; AVL-202 „Independență și conflict de interese”</td></tr>
          <tr><td>§6 Tipul entității</td><td>AVL-201 §3, §5; AVL-203 §1.1; AVL-204 §11</td></tr>
          <tr><td>§7 Forma canonică și variantele</td><td>AVL-201 §5, §10.1; AVL-102; articolul „Ce este o entitate pentru AI”</td></tr>
          <tr><td>§8 Rolul și activitatea</td><td>AVL-201 §7, §10.6; AVL-MKT-001 §17; articolul „Ce este o entitate pentru AI”; documentul de lucru „Audit F0 — Tabula Rasa” (2 iulie 2026), din pachetul de dovezi <code>T0</code> pentru Alex Matescu</td></tr>
          <tr><td>§9 Locația și piața</td><td>AVL-201 §7; AVL-102; AVL-204 §11</td></tr>
          <tr><td>§10 Atribute verificabile</td><td>AVL-201 §7, §10.1, §10.6; articolul „Ce este o entitate pentru AI”</td></tr>
          <tr><td>§11 Activele oficiale</td><td>AVL-200 §7.1, §18.3; AVL-201 §6.4, §7, §10.8; AVL-203 §1.1, AVL203-REQ-042; pagina Auditul AI Visibility; studiul Tabula Rasa §11</td></tr>
          <tr><td>§12 Relații și ancore</td><td>studiul Tabula Rasa §1; articolul „Ce este o entitate pentru AI”; AVL-202 §7</td></tr>
          <tr><td>§13 Harta coliziunilor</td><td>AVL-201 §7, §13; AVL-103; AVL-001 §21</td></tr>
          <tr><td>§14 Prezența distribuită</td><td>AVL-200 §7.1; AVL-201 §10.8, §10.9; AVL-202 §7</td></tr>
          <tr><td>§15 Politica crawlere</td><td>AVL-201 §6.4, §7; AVL-203 §1.1, §6; AVL-204 §3.1, §6.2, §6.3, §6.5, AVL204-REQ-017, AVL204-REQ-018; CS-002</td></tr>
          <tr><td>§16 Ce vrea entitatea să i se recunoască</td><td>AVL-201 §7, §10.2, F0-REQ-008; AVL-104; pagina Auditul AI Visibility</td></tr>
          <tr><td>§17 Angajamente pentru <code>T0</code></td><td>AVL-201 §6.4, §7, F0-REQ-001, F0-REQ-002; forma înghețului între puncte și §17.1: operațional, decizii Alex Matescu, 4 noiembrie 2026; AVL200-REQ-013</td></tr>
          <tr><td>§18 Informații pentru website</td><td>operațional; AVL-200 §7.1; AVL-202 §7; articolul „Ce este o entitate pentru AI”; schema.org</td></tr>
          <tr><td>§19 Revizuire și aprobare</td><td>AVL-201 §3; AVL-001 §21; pagina Auditul AI Visibility</td></tr>
          <tr><td>§20 Confirmarea reprezentantului</td><td>AVL-201 §6.4</td></tr>
          <tr><td>§21 Istoricul fișei</td><td>AVL-MKT-001 §19; AVL200-REQ-013; AVL-201 §20</td></tr>
        </tbody>
      </table>

      <h2 id="23-documente-asociate">23. Documente asociate</h2>

      <h3 id="normative">Normative</h3>

      <ul>
        <li><a href="/lab/introducere">AVL-001 — AI Visibility Lab Foundation</a></li>
        <li><a href="/lab/metodologie">AVL-202 — Cadrul metodologic AI Visibility Lab</a></li>
        <li><a href="/lab/metodologie/standard-dovezi-masurare-trasabilitate">AVL-200 — Standardul de dovezi, măsurare și trasabilitate</a></li>
        <li><a href="/lab/metodologie/tabula-rasa-f0">AVL-201 — Tabula Rasa F0: Baseline Measurement Specification</a></li>
      </ul>

      <h3 id="informative">Informative</h3>

      <ul>
        <li><a href="/lab/metodologie/protocol-verificare-tehnica">AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility</a></li>
        <li><a href="/lab/metodologie/grila-interpretare-verificare-tehnica">AVL-204 — Grila de interpretare a verificării tehnice</a></li>
        <li><a href="/lab/metodologie/protocol-delimitare-piata-eligibilitate">AVL-MKT-001 — Market Scope &amp; Eligibility Protocol</a></li>
        <li><a href="/lab/cercetare/cum-aleg-motoarele-ai">AVL-102 — Cum aleg sistemele AI sursele și citările</a></li>
        <li><a href="/lab/cercetare/seo-vs-geo">AVL-103 — SEO și GEO</a></li>
        <li><a href="/lab/cercetare/cum-se-masoara-ai-visibility">AVL-104 — Cum se măsoară AI Visibility</a></li>
        <li><a href="/lab/articole/ce-este-entitate-ai-studiu-de-caz">Ce este o entitate pentru AI și motoarele de căutare</a></li>
        <li><a href="/lab/studii-de-caz/tabula-rasa-entity-resolution-studiu-de-caz">Studiul de caz Tabula Rasa — identitatea Alex Matescu</a></li>
        <li><a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/blob/main/docs/fise-entitate/FE-delamatescu-ro-v1.md" target="_blank" rel="noopener noreferrer">FE-delamatescu-ro-v1 — fișa entității pentru delamatescu.ro și Alex Matescu</a> (exemplu aplicat, completat retroactiv)</li>
        <li><a href="/lab/studii-de-caz/verificare-tehnica-delamatescu-ro">CS-002 — Verificarea tehnică AVL-203 a delamatescu.ro</a></li>
        <li><a href="/lab/audit-ai-visibility">Auditul AI Visibility</a></li>
      </ul>

      <h3 id="referinte-externe">Referințe externe</h3>

      <ul>
        <li><a href="https://schema.org/Person" target="_blank" rel="noopener noreferrer">Schema.org — Person</a></li>
        <li><a href="https://schema.org/Organization" target="_blank" rel="noopener noreferrer">Schema.org — Organization</a></li>
      </ul>

      <h2 id="24-istoricul-versiunilor">24. Istoricul versiunilor</h2>

      <table>
        <thead>
          <tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr>
        </thead>
        <tbody>
          <tr><td>0.1.0</td><td>4 noiembrie 2026</td><td>Draft pentru revizuire</td><td>Primul draft. Descrie fișa entității cerută de AVL-201 §7: rolul ei, ce nu este, cum se completează, stările verificării <code>T0</code> și definițiile tuturor câmpurilor, în 17 secțiuni (§5–§21), cu proveniența fiecărei secțiuni. Precizează că „domeniu” din AVL-201 §7 înseamnă domeniul de activitate al serviciilor (decizie Alex Matescu, 4 noiembrie 2026). Nu introduce cerințe proprii.</td></tr>
          <tr><td>0.1.1</td><td>4 noiembrie 2026</td><td>Draft pentru revizuire</td><td>PATCH: trimiteri la AVL-201 1.6.0, care trimite la AVL-205 din §7 și §10.1 și folosește formularea „domeniul de activitate”, și la AVL-202 1.8.0, care include AVL-205 în corpus. Deciziile deschise 2 (închisă), 3 și 6 (parțial închise) sunt actualizate. Fără schimbări ale câmpurilor fișei.</td></tr>
          <tr><td>0.2.0</td><td>4 noiembrie 2026</td><td>Draft pentru revizuire</td><td>MINOR, decizii Alex Matescu din 4 noiembrie 2026, după prima fișă completă. §3: marcajul „Î” precizează că Alex Matescu verifică formularea, nu adevărul declarației; subsecțiune nouă „Ce își asumă reprezentantul”: declarațiile reprezentantului sunt asumate de el și considerate corecte. §4 se numește „Cum se verifică reprezentarea fișei în surse?”. Subsecțiune nouă §4.1 „Entitate ambiguă sau suspectă”: criteriile, închiderea colaborării, documentarea internă și comunicarea către client. §6: o singură fișă pentru profesionistul independent cu site propriu. §11.2: ce se notează pentru fiecare profil, cu numele afișat. §17: forma înghețului între punctele de măsurare; subsecțiune nouă §17.1 „Completarea retroactivă”. §4: verificarea pe surse la punctele <code>F1</code> … <code>Fn</code> și prima verificare a unei fișe completate retroactiv. Deciziile deschise 1 (parțial) și 3 (integral) sunt închise; decizia 4: testul stărilor se face la <code>F4</code> Tabula Rasa; trimitere la fișa FE-delamatescu-ro-v1. Nu introduce cerințe proprii.</td></tr>
        </tbody>
      </table>

      <h2 id="25-decizii-deschise-inainte-de-1-0-0">25. Decizii deschise înainte de 1.0.0</h2>

      <ol>
        <li><strong>Primul test pe o entitate reală.</strong> Fișa se completează integral pentru delamatescu.ro și Alex Matescu, entitatea primei rulări AVL-203. Parțial închisă la 4 noiembrie 2026: prima fișă completă, <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/blob/main/docs/fise-entitate/FE-delamatescu-ro-v1.md" target="_blank" rel="noopener noreferrer"><code>FE-delamatescu-ro-v1</code></a>, a fost confirmată de reprezentant și publicată, completată retroactiv (§17.1). Din observațiile completării, versiunea 0.2.0 a preluat coloanele profilurilor (§11.2), fișa unică pentru profesionistul independent (§6), forma înghețului între puncte și completarea retroactivă (§17). Rămân de discutat înainte de activare rolul principal diferit între surse și ancorele folosite de motoare, dar absente din sursa canonică.</li>
        <li><strong>Precizarea „domeniu” în AVL-201.</strong> Închisă la 4 noiembrie 2026 (decizie Alex Matescu): AVL-201 1.6.0 folosește „domeniul de activitate” la §6.1 și §7, cu același sens ca AVL-205 §3.</li>
        <li><strong>Trimiterea din AVL-201, AVL-203 și AVL-204.</strong> Închisă la 4 noiembrie 2026 (decizie Alex Matescu): AVL-201 1.6.0 trimite la AVL-205 din §7 și §10.1, iar AVL-203 0.6.2 și AVL-204 0.3.2 trimit direct la AVL-205, ca dependență informativă; conținutul minim rămâne cel din AVL-201 §7.</li>
        <li><strong>Stările verificării (§4).</strong> Vocabularul <code>CORECT</code>, <code>VECHI</code>, <code>FALS</code>, <code>LIPSĂ</code>, <code>UNKNOWN</code>, <code>NEVERIFICAT</code> se testează pe o fișă completă reală. Decizie Alex Matescu, 4 noiembrie 2026: primul test se face pe seria Tabula Rasa (<code>T0</code> din 2 iulie 2026), la <code>F4</code>, pe fișa <a href="https://github.com/alexmatescu/alexmatescu-hub-reflection/blob/main/docs/fise-entitate/FE-delamatescu-ro-v1.md"><code>FE-delamatescu-ro-v1</code></a>. Verificarea pe surse face parte din măsurarea <code>F4</code>, iar dovezile ei intră în pachetul <code>F4</code>. Decizia se închide după <code>F4</code>, cu observațiile testului.</li>
        <li><strong>Cerințe proprii.</strong> Rămâne de decis dacă AVL-205 primește cerințe <code>AVL205-REQ-*</code>, de exemplu pentru conținutul minim sau pentru versionarea fișei, sau rămâne un document descriptiv.</li>
        <li><strong>Locul în corpus.</strong> Parțial închisă la 4 noiembrie 2026: AVL-202 1.8.0 menționează AVL-205 în arhitectura metodologiei, în ordinea de lectură, în ordinea din hub și în lista documentelor. La activare rămân de făcut actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001.</li>
      </ol>

      <p>Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.</p>

      <blockquote>
        <p><strong>Declarație finală</strong></p>
        <p>O măsurare spune ce văd sistemele despre o entitate. Fișa spune ce este entitatea.<br />
        Fără a doua, prima nu poate fi verificată.</p>
      </blockquote>
`;
