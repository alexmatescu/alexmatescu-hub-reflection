export const avl103SeoVsGeoHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-103 — SEO și GEO: relații, diferențe și suprapuneri</p>
        <p class="avl-doc-lead">Ce se transferă din SEO clasic, ce își schimbă prioritatea și ce e complet nou în tranziția către GEO</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-103</td></tr>
        <tr><th scope="row">Nivel</th><td>B — Research</td></tr>
        <tr><th scope="row">Versiune</th><td>1.0.2</td></tr>
        <tr><th scope="row">Statut</th><td>Activ</td></tr>
        <tr><th scope="row">Autor</th><td><a href="/despre">Alex Matescu</a></td></tr>
        <tr><th scope="row">Organizație</th><td><a href="/lab">AI Visibility Lab</a></td></tr>
        <tr><th scope="row">Data publicării</th><td>iulie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>26 august 2026</td></tr>
        </tbody>
        </table>
      </div>

      <p>Această pagină face parte din seria de teorie AI Visibility Lab și presupune că știi SEO. Dacă vii din altă direcție, începe cu <a href="/lab/cercetare/ce-este-geo-aeo">Ce este GEO/AEO?</a>; dacă vrei mecanica detaliată a citării, continuă cu <a href="/lab/cercetare/cum-aleg-motoarele-ai">Cum aleg motoarele AI ce citează</a>.</p>

      <h2>Răspunsul scurt</h2>

      <p>SEO nu moare și nu e înlocuit; devine stratul de intrare. Tot ce știi despre crawlare, indexare, calitate a conținutului și autoritate rămâne condiție necesară — Google afirmă explicit că funcțiile sale AI sunt înrădăcinate în aceleași sisteme de ranking și calitate din Search (documentația oficială). Ce se schimbă sunt trei lucruri: unitatea de succes (de la poziție și click la citare și reprezentare corectă), suprafața de joc (de la un index dominant la mai multe motoare cu crawlere și indexuri proprii) și modurile de eșec (apar eșecuri noi — coliziunea de entitate și confabularea — care nu existau în SEO). Restul acestei pagini e maparea practică: ce din competențele tale SEO se transferă direct, ce își schimbă prioritatea și ce trebuie învățat de la zero.</p>

      <h3>Cele două poziții oficiale (și de ce au dreptate amândouă)</h3>

      <h3>Piața pare să primească semnale contradictorii, dar ele se împacă</h3>

      <p><strong>Google: „e tot SEO".</strong> În ghidul său pentru AI generativ, Google tratează AEO și GEO ca etichete pentru muncă ce rămâne, din perspectiva sa, optimizare pentru experiența de căutare — deci SEO. Nu există cerințe suplimentare, markup special sau fișiere speciale pentru AI Overviews și AI Mode (Google Search Central).</p>

      <p><strong>Microsoft: „GEO e categorie oficială".</strong> În februarie 2026, Bing a rescris Webmaster Guidelines introducând GEO ca noțiune numită, cu „grounding results and citations" ca rezultat de eligibilitate distinct și cu efecte documentate ale directivelor meta asupra răspunsurilor Copilot.</p>

      <p><strong>Împăcarea.</strong> Google descrie fundația (aceleași sisteme, aceleași bune practici), Microsoft descrie noul strat de rezultat (citarea în răspunsuri, cu KPI proprii). Ambele sunt adevărate simultan — și exact așa trebuie să-ți structurezi practica: fundație SEO neschimbată, strat nou de obiective, măsurare și audit deasupra ei. Detaliile ambelor poziții, cu surse: <a href="/lab/cercetare/ce-este-geo-aeo">pagina definițională</a>.</p>

      <h3>Ce se păstrează: capitalul tău SEO se transferă</h3>

      <p>Un SEO bun are deja 60–70% din meseria de GEO. Diferența nu e o disciplină paralelă, ci un strat de obiective, audituri și măsurare construit peste ce știi.</p>

      <h3>Ce se schimbă: recalibrări de prioritate</h3>

      <p>Aici e miezul tranziției — aceleași activități, greutăți diferite:</p>

      <ol>
        <li><strong>De la cuvinte-cheie la subteme.</strong> Mecanismul de query fan-out (modelul descompune întrebarea în interogări interne pe subteme) mută competiția la nivelul subtemelor. Cercetarea de cuvinte-cheie devine cercetare de acoperire tematică: nu „pe ce fraze pot ranka", ci „ce subîntrebări ale subiectului meu pot acoperi complet și mai bine decât oricine". Atenție la capcana opusă, semnalată chiar de Google: o pagină pentru fiecare variație de interogare înseamnă scaled content abuse, nu acoperire.</li>
        <li><strong>De la pagină la bloc.</strong> În SERP concurează pagina; în răspunsul AI concurează blocul extractibil — secțiunea care răspunde complet la o întrebare specifică, cu titlu descriptiv și cu răspunsul în primele propoziții. Asta nu contrazice mythbusting-ul Google despre „chunking" (nu există cerință de fragmentare artificială): diferența e între a sparge conținutul în bucăți pentru mașini și a structura fiecare secțiune ca răspuns complet pentru oameni. A doua e bună practică veche de featured snippets, acum cu miză mărită.</li>
        <li><strong>De la un index la cinci.</strong> În SEO românesc, „motorul" înseamnă practic Google. În GEO, suprafața minimă de lucru e ChatGPT, Google (AI Overviews/AI Mode), Perplexity, Claude și Copilot — fiecare cu crawlere, indexuri și comportamente de citare proprii. Consecința de audit: verificarea accesului nu se mai termină la Googlebot.</li>
        <li><strong>De la CTR la citare — și la o relație nouă cu traficul.</strong> Microsoft notează explicit în contextul noilor sale ghiduri că o scădere a click-urilor nu mai înseamnă automat scădere de vizibilitate: conținutul poate apărea acum drept citare sau referință de grounding în Copilot, iar recomandarea e urmărirea impresiilor și a eligibilității pentru citare, nu doar a click-urilor. Pentru rapoartele către clienți, asta schimbă fundamental narativul: vizibilitatea și traficul se decuplează parțial, iar cine raportează doar sesiuni organice va „vedea" declin acolo unde e de fapt migrare a expunerii.</li>
        <li><strong>De la Search Console la un peisaj de măsurare fragmentat.</strong> Instrumentele oficiale abia apar: Google a adăugat raportul de performanță pentru funcțiile AI generative în Search Console, iar Bing a lansat în februarie 2026 dashboard-ul AI Performance în Webmaster Tools, cu citări Copilot și grounding queries. Pentru restul motoarelor, măsurarea rămâne artizanală: rulări sistematice de interogări în condiții controlate, clasificare a rezultatelor, comparație față de o linie de bază — exact golul metodologic pe care îl acoperă Tabula Rasa. Avertismentul oficial Google merită reținut la achiziția de tool-uri: niciun instrument terț nu are acces la sistemele interne de ranking sau AI, deci promisiunile de „metrici interne" sunt semnal de alarmă.</li>
        <li><strong>Entitatea devine cetățean de rang întâi.</strong> În SEO, entitatea era un subiect avansat, opțional pentru multe proiecte. În GEO e centrală, pentru că apar moduri de eșec fără echivalent în SERP: poți fi confundat cu o entitate omonimă (coliziune) sau descris cu detalii inventate (confabulare). Niciun raport de poziții nu prinde aceste eșecuri; doar măsurarea directă a răspunsurilor le vede.</li>
      </ol>

      <h3>Ce e complet nou: audituri care nu existau în SEO</h3>

      <p>Lista scurtă de livrabile noi pe care un practician SEO trebuie să le adauge în repertoriu:</p>

      <ul>
        <li><strong>Auditul de acces al crawlerelor AI</strong> — robots.txt pentru GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended (acesta din urmă fiind un token de control în robots.txt, nu un crawler propriu-zis), plus verificarea blocărilor tăcute din WAF/CDN (403/429 în log-uri) și a directivelor meta cu efect asupra AI (NOARCHIVE/NOCACHE la Bing/Copilot).</li>
        <li><strong>Linia de bază a citărilor</strong> — set înghețat de interogări rulat pe cele cinci motoare în condiții controlate, cu rezultate clasificate (citare corectă / parțială / coliziune / confabulare / absență) și dovezi datate. Fără before, orice after e marketing, nu măsurare.</li>
        <li><strong>Auditul de coliziune a entității</strong> — cine altcineva „răspunde" la numele clientului în răspunsurile AI, ce entitate domină clusterul de omonimie și ce semnale de dezambiguizare lipsesc (JSON-LD cu @id stabile, sameAs, consecvența numelui).</li>
        <li><strong>Monitorizarea traficului referral AI</strong> — segmentarea în analytics a surselor de tip chatgpt.com, perplexity.ai, copilot, gemini, ca linie separată de raportare.</li>
        <li><strong>Re-măsurarea pe set înghețat</strong> — repetarea liniei de bază după intervenții, pe aceleași interogări, pentru atribuire onestă a schimbării.</li>
      </ul>

      <p>Punctele 2, 3 și 5 sunt exact fazele F0 și F3 din metodologia AI Visibility Lab — documentate public, cu instrumentar reproductibil, în <a href="/lab/metodologie/tabula-rasa-f0">Tabula Rasa</a> și <a href="/lab/cercetare/cum-se-masoara-ai-visibility">Cum se măsoară vizibilitatea AI</a>.</p>

      <h3>Ce să nu mai faci: anti-tiparele tranziției</h3>

      <p>Pentru echilibru, și lista scurtă a obiceiurilor SEO care nu se transferă sau devin dăunătoare:</p>

      <ul>
        <li><strong>Raportarea exclusiv pe poziții și sesiuni</strong> — orbește clientul față de stratul unde se mută expunerea.</li>
        <li><strong>Producția de pagini pentru fiecare variație long-tail</strong> — modelele înțeleg sinonime și intenții; la scară, practica intră sub politica de spam (mythbusting-ul Google, cu toate cele cinci mituri demontate).</li>
        <li><strong>Vânzarea de „hack-uri AI"</strong> (llms.txt pentru Google, chunking obligatoriu, schema secretă, mențiuni fabricate) — toate demontate de documentația oficială; pe termen mediu, distrug credibilitatea celui care le vinde.</li>
        <li><strong>Extrapolarea de la Google la toate motoarele</strong> — comportamentele de citare diferă; ce e adevărat pentru AI Overviews nu e automat adevărat pentru Perplexity sau Claude.</li>
      </ul>

      <h3>Ce înseamnă asta pentru piața din România</h3>

      <p>Peisajul local tratează aproape uniform GEO ca extensie comercială a pachetelor SEO existente — un rând nou în ofertă, rar o metodologie distinctă cu măsurare publică. Asta creează două realități pentru cine știe SEO:</p>

      <p><strong>Pentru practicieni: avantaj competitiv accesibil.</strong> Competențele de transfer le ai; ce lipsește pieței sunt auditurile noi (accesul crawlerelor AI, linia de bază a citărilor, coliziunile de entitate) și disciplina de măsurare before/after. Cine le adaugă primul într-o piață care vinde GEO fără măsurare se diferențiază structural, nu cosmetic.</p>

      <p><strong>Pentru clienți care evaluează oferte: întrebările de verificare sunt simple.</strong> Cere metodologia de măsurare publicată, setul de interogări, dovada before/after pe motoare multiple. O ofertă GEO fără linie de bază măsurată e o ofertă SEO redenumită — ceea ce Google, de altfel, ar considera o descriere onestă; problema nu e eticheta, ci absența măsurării.</p>

      <h2>Întrebări frecvente</h2>

      <p><strong>Deci SEO moare sau nu?</strong> Nu moare; își pierde monopolul asupra rezultatului. Rămâne infrastructura obligatorie a vizibilității (Google își construiește funcțiile AI pe sistemele Search), dar rezultatul final urmărit se extinde de la poziție+click la citare+reprezentare corectă. Cine face doar SEO clasic optimizează pentru o parte din suprafața de expunere.</p>

      <p><strong>E GEO doar SEO rebranduit?</strong> Fundația da, stratul de sus nu. Dacă „GEO" dintr-o ofertă înseamnă doar aceleași livrabile SEO cu alt nume — atunci da, e rebranding, iar scepticismul e justificat. Dacă include auditurile noi (acces crawlere AI, linie de bază a citărilor, entitate) și măsurare pe motoare multiple, e un strat real de muncă ce nu exista în SEO.</p>

      <p><strong>Trebuie să învăț tool-uri noi?</strong> Parțial. Instrumentele oficiale noi sunt două și gratuite: raportul Generative AI din Search Console și AI Performance din Bing Webmaster Tools. Piața de tool-uri terțe de monitorizare crește rapid, dar reține avertismentul Google: nimeni nu are acces la metrici interne, deci evaluează-le strict după utilitatea fluxului de lucru, nu după promisiuni.</p>

      <p><strong>Cum explic clientului că traficul scade dar vizibilitatea crește?</strong> Cu date pe două straturi: impresii și citări (Search Console AI, Bing AI Performance, linia de bază pe motoare) lângă sesiuni organice. Chiar Microsoft avertizează că declinul de click-uri nu mai echivalează cu declin de vizibilitate, conținutul putând apărea ca citare în Copilot. Raportarea corectă separă expunerea (unde apari) de trafic (cine ajunge la tine) și urmărește ambele.</p>

      <p><strong>Cu ce încep, concret, luni dimineață?</strong> Cu filtrul 1: verifică robots.txt și log-urile pentru cele șase crawlere AI, apoi directivele meta cu efect asupra Copilot. E auditul cu cel mai bun raport efort/impact, pentru că un singur Disallow moștenit sau o regulă de WAF anulează tot restul muncii. Pașii următori, în ordine: linia de bază a citărilor, apoi entitatea.</p>

      <h2>Citește în continuare</h2>

      <ul>
        <li><a href="/lab/cercetare/ce-este-geo-aeo">Ce este GEO/AEO? Ghid complet de AI Visibility</a> — definiții, origine academică, pozițiile oficiale complete</li>
        <li><a href="/lab/cercetare/cum-aleg-motoarele-ai">Cum aleg motoarele AI ce citează</a> — cele patru filtre și stratul de entitate, cu mecanica detaliată</li>
        <li><a href="/lab/cercetare/cum-se-masoara-ai-visibility">Cum se măsoară vizibilitatea AI</a></li>
        <li><a href="/lab/metodologie/tabula-rasa-f0">Tabula Rasa: metodologia F0</a></li>
        <li><a href="/lab/cercetare/glosar-geo-aeo">Glosar GEO/AEO/AI</a> — toți termenii folosiți în această pagină</li>
        <li><a href="/lab">AI Visibility Lab</a> — metodologia completă și studiile de caz</li>
      </ul>

      <h2>Surse și documentație oficială</h2>

      <ul>
        <li><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Google Search Central — Optimizing your website for generative AI features on Google Search (poziția „e tot SEO", cerințe tehnice, mythbusting, avertismentul despre tool-uri terțe)</a></li>
        <li><a href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content" target="_blank" rel="noopener noreferrer">Google Search Central — Creating helpful, reliable, people-first content</a></li>
        <li><a href="https://developers.google.com/search/docs/fundamentals/third-party-seo" target="_blank" rel="noopener noreferrer">Google Search Central — Guidance on third-party SEO tools and advice</a></li>
        <li><a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google Search Central — Spam policies</a></li>
        <li><a href="https://support.google.com/webmasters/answer/16984139" target="_blank" rel="noopener noreferrer">Google Search Console — Generative AI performance report</a></li>
        <li><a href="https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/" target="_blank" rel="noopener noreferrer">Microsoft Bing — Bing Webmaster Guidelines (revizuite februarie 2026: GEO ca noțiune oficială, directive meta pentru Copilot, recomandarea de urmărire a citărilor în locul click-urilor); analiză</a></li>
        <li><a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI — Overview of OpenAI Crawlers</a></li>
        <li><a href="https://support.anthropic.com/en/articles/8896518" target="_blank" rel="noopener noreferrer">Anthropic — Does Anthropic crawl data from the web?</a></li>
        <li><a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">Perplexity — Perplexity Crawlers</a></li>
        <li><a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD '24</a></li>
      </ul>

      <p>Pagina este actualizată pe măsură ce documentația oficială evoluează.</p>

      <h2>Istoricul versiunilor</h2>

      <table>
        <thead><tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr></thead>
        <tbody>
          <tr><td>1.0.1</td><td>21 iulie 2026</td><td>Activ</td><td>Uniformizare metadate.</td></tr>
          <tr><td>1.0.2</td><td>26 august 2026</td><td>Activ</td><td>PATCH: linkuri interne pentru Autor (→ /despre) și Organizație (→ /lab).</td></tr>
        </tbody>
      </table>
`;
