export const avl350StudiiDeCazHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-350 — Studii de caz</p>
        <p class="avl-doc-lead">Document de poziționare și structură editorială</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-350</td></tr>
        <tr><th scope="row">Nivel</th><td>D2 — Case Studies</td></tr>
        <tr><th scope="row">Versiune</th><td>1.3.0</td></tr>
        <tr><th scope="row">Statut</th><td>Activ</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>4 septembrie 2026</td></tr>
        </tbody>
        </table>
      </div>

      <p>Pagina <strong>Studii de caz</strong> reunește colaborările reale în care metodologia și principiile AI Visibility Lab — entity resolution, coerența semnalelor, dovezi verificabile, separarea observației de inferență — sunt aplicate direct pe o entitate sau un brand concret, cu dovezi, limite și rezultate publicate integral.</p>

      <p>Spre deosebire de <a href="/lab/experimente-publice">Experimente publice</a>, care testează ipoteze declarate dinainte pe un teren neutru, un studiu de caz documentează o aplicare continuă a metodologiei asupra unui subiect real, urmărit de-a lungul mai multor ferestre de măsurare.</p>

      <h2>Ce documentează un studiu de caz</h2>

      <p>Fiecare studiu de caz publicat aici va include, unde subiectul permite:</p>

      <ul>
        <li>obiectul de studiu (entitatea) și motivul pentru care a fost ales;</li>
        <li>Query Universe-ul și Query Set-urile înghețate folosite, cu criteriul din spatele fiecăreia;</li>
        <li>auditul/baseline-ul inițial și, dacă e cazul, unul sau mai multe experimente controlate incluse în studiu;</li>
        <li>taxonomia de clasificare a rezultatelor;</li>
        <li>dovezile — capturi originale, evidence set, mapping query → rezultat;</li>
        <li>rezultatele agregate, cu limitele lor explicite;</li>
        <li>ce demonstrează și, la fel de important, ce nu demonstrează observațiile;</li>
        <li>o secțiune de transparență metodologică, inclusiv eventualele conflicte de interes.</li>
      </ul>

      <p>Un studiu de caz individual nu primește un identificator AVL-xxx (rezervat documentelor normative sau de poziționare, ca acesta) — primește un identificator propriu, format CS-NNN (ex. CS-001), definit în registrul de ID-uri al laboratorului.</p>

      <h2>Ce nu este această secțiune</h2>

      <p>Studiile de caz nu sunt experimente publice cu ipoteză predefinită și teren neutru (vezi <a href="/lab/experimente-publice">Experimente publice</a>), nu sunt documentație metodologică normativă (vezi <a href="/lab/metodologie">Metodologie</a>) și nu sunt analize sau explicații conceptuale despre industrie (vezi <a href="/lab/articole">Articole</a>).</p>

      <p>Primele studii de caz publicate aici documentează aplicarea metodologiei pe entități controlate direct de AI Visibility Lab — nu pe proiecte comerciale ale unor terți. Colaborările comerciale vor fi documentate separat, în secțiunea <a href="/lab/experimente-publice">Experimente publice</a>, care va fi actualizată ulterior cu acest tip de conținut.</p>

      <h2>Cui se adresează această pagină</h2>

      <p>Studiile de caz sunt destinate specialiștilor SEO, GEO și AEO, brandurilor și persoanelor care vor să înțeleagă cum arată, în practică și pe termen lung, aplicarea rigorii AI Visibility Lab asupra unei identități reale — nu doar principiile ei declarate.</p>

      <blockquote>Pagina Studii de caz documentează colaborări reale în care metodologia AI Visibility Lab este aplicată direct, cu dovezi publicate integral și limite metodologice asumate — distinct de experimentele publice cu ipoteză predefinită și de proiectele comerciale, documentate separat.</blockquote>

      <h2>Istoricul versiunilor</h2>

      <table>
        <thead><tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr></thead>
        <tbody>
          <tr><td>1.0.0</td><td>4 septembrie 2026</td><td>Activ</td><td>Prima versiune a documentului de poziționare a secțiunii.</td></tr>
          <tr><td>1.1.0</td><td>4 septembrie 2026</td><td>Activ</td><td>MINOR, audit metodologic: clarificare ID (CS-NNN pentru instanțe, niciodată AVL-xxx); reformularea listei de conținut a unui studiu de caz (Query Universe/Query Set înghețat, audit/baseline, experimente incluse — nu „ipoteză experimentală" generică, care ar confunda Case Study cu Experiment). Secțiunea rămâne pregătită tehnic (routing, meta, JSON-LD), dar neactivată în navigație până la publicarea primului studiu de caz.</td></tr>
          <tr><td>1.2.0</td><td>4 septembrie 2026</td><td>Activ</td><td>MINOR: secțiunea activată în navigație (labNav, index /lab) — infrastructura confirmată și testată. Primul studiu de caz (#001 — Alex Matescu, CS-001) rămâne intenționat nepublicat; va fi activat separat, într-un pas independent ulterior.</td></tr>
          <tr><td>1.3.0</td><td>4 septembrie 2026</td><td>Activ</td><td>MINOR: primul studiu de caz (#001 — Alex Matescu, CS-001, experiment Tabula Rasa) publicat și conectat în navigație, prin skill-ul dedicat <code>.claude/skills/publica-studiu-de-caz</code>.</td></tr>
        </tbody>
      </table>
`;
