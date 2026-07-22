export const avl101GeoAeoHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-101 — Ce este GEO/AEO și AI Visibility</p>
        <p class="avl-doc-lead">Definiții, originea academică a termenului și diferența dintre a fi indexat și a fi citat de un motor generativ</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-101</td></tr>
        <tr><th scope="row">Nivel</th><td>B — Research</td></tr>
        <tr><th scope="row">Versiune</th><td>1.0.1</td></tr>
        <tr><th scope="row">Statut</th><td>Activ</td></tr>
        <tr><th scope="row">Autor</th><td>Alex Matescu</td></tr>
        <tr><th scope="row">Organizație</th><td>AI Visibility Lab</td></tr>
        <tr><th scope="row">Data publicării</th><td>iulie 2026</td></tr>
        <tr><th scope="row">Ultima actualizare</th><td>21 iulie 2026</td></tr>
        </tbody>
        </table>
      </div>

      <h2>Definiție</h2>

      <p>GEO (Generative Engine Optimization) este disciplina prin care conținutul unui site și prezența online a unei entități (persoană, firmă, brand) sunt optimizate pentru a fi găsite, înțelese și citate de motoarele generative de răspuns — ChatGPT, Google AI Overviews/AI Mode, Perplexity, Claude, Microsoft Copilot. Spre deosebire de SEO clasic, unde obiectivul este poziția în lista de rezultate, în GEO obiectivul este prezența în răspunsul generat de AI: să fii sursa citată, recomandarea numită, entitatea descrisă corect.</p>

      <p>AEO (Answer Engine Optimization) este termenul-frate, folosit adesea interșanjabil: optimizarea pentru „motoare de răspuns" — sisteme care nu returnează linkuri, ci răspunsuri directe. În practica AI Visibility Lab folosim AI Visibility ca termen-umbrelă: măsurarea și optimizarea vizibilității unei entități în răspunsurile generate de AI, indiferent de platformă.</p>

      <h2>De unde vine termenul GEO?</h2>

      <p>Termenul a fost formalizat academic în lucrarea „GEO: Generative Engine Optimization" (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan, Deshpande), publicată la conferința ACM KDD 2024. Lucrarea definește „motoarele generative" (Generative Engines) ca sisteme care combină modele generative (LLM-uri) cu un motor de căutare: preiau întrebarea utilizatorului, recuperează documente relevante și sintetizează un răspuns cu citări. Autorii arată două lucruri esențiale:</p>

      <p>Motoarele generative funcționează ca sisteme black-box — creatorii de conținut nu controlează când și cum le este afișat conținutul, deci vizibilitatea trebuie măsurată empiric, nu presupusă.</p>

      <p>Strategiile cu impact real sunt cele care cresc calitatea intrinsecă și credibilitatea conținutului (citarea surselor, statistici, claritate, autoritate), nu repetiția mecanică de cuvinte-cheie.</p>

      <p class="text-sm text-muted-foreground">Surse: <a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">arXiv:2311.09735</a> · <a href="https://dl.acm.org/doi/10.1145/3637528.3671900" target="_blank" rel="noopener noreferrer">ACM Digital Library, DOI 10.1145/3637528.3671900</a></p>

      <h2>Prin ce diferă GEO de SEO?</h2>

      <p>Răspunsul scurt: SEO rămâne fundația, dar unitatea de succes se schimbă — de la „poziția în listă" la „citarea în răspuns".</p>

      <p>Poziția oficială a Google merită citată exact pentru că temperează hype-ul din piață: în ghidul său pentru funcțiile AI din Search, Google afirmă că bunele practici SEO rămân relevante pentru AI Overviews și AI Mode, că nu există cerințe suplimentare sau optimizări speciale pentru a apărea în aceste funcții și că, din perspectiva Google, „optimizarea pentru căutarea generativă este optimizarea pentru experiența de căutare — deci tot SEO" (Google Search Central: AI Features and Your Website · Google's Guide to Optimizing for Generative AI Features).</p>

      <p>În același timp, Microsoft a mers în direcția opusă ca terminologie: în februarie 2026, Bing a rescris Webmaster Guidelines și a introdus GEO ca noțiune oficială, tratând „grounding results and citations" (citările în răspunsurile Copilot) ca rezultat de eligibilitate distinct de pozițiile clasice, și documentând cum fiecare directivă meta (NOARCHIVE, NOCACHE, NOSNIPPET) afectează separat răspunsurile AI. Este prima dată când un motor major scrie GEO în politica oficială.</p>

      <h3>Diferențele practice</h3>

      <p>Un detaliu tehnic important din documentația Google: funcțiile AI folosesc RAG (retrieval-augmented generation / grounding) pentru acuratețe și prospețime, iar AI Mode și AI Overviews pot folosi tehnica query fan-out — descompun întrebarea utilizatorului în mai multe căutări pe subteme și surse, apoi asamblează răspunsul. Practic, o singură întrebare a utilizatorului devine mai multe interogări interne; conținutul tău concurează la nivelul fiecărei subteme, nu doar la nivelul întrebării vizibile.</p>

      <h3>Cine sunt „cititorii" AI ai site-ului tău: crawlerele</h3>

      <p>O consecință directă și des ignorată: motoarele AI au crawlere proprii, separate de Googlebot, iar fiecare are alt rol. Dacă sunt blocate în robots.txt sau de firewall, site-ul tău nu există pentru stratul AI — indiferent cât de bun e SEO-ul clasic.</p>

      <p><strong>OpenAI</strong> operează crawlere distincte, controlabile independent din robots.txt: GPTBot (colectare pentru antrenarea modelelor), OAI-SearchBot (indexare pentru rezultatele de căutare din ChatGPT — nu este folosit pentru antrenare) și ChatGPT-User (accesări declanșate de utilizatori în conversație). Modificările din robots.txt se propagă în ~24 de ore (documentația oficială OpenAI).</p>

      <p><strong>Anthropic (Claude)</strong> documentează trei roboți cu funcții separate: ClaudeBot (antrenare), Claude-SearchBot (indexare pentru calitatea rezultatelor de căutare) și Claude-User (accesări la cererea utilizatorului); blocarea fiecăruia are consecințe diferite asupra vizibilității (documentația oficială Anthropic).</p>

      <p><strong>Perplexity</strong> folosește PerplexityBot pentru indexarea conținutului care apare și este citat în rezultate — explicit nu pentru antrenarea modelelor — și Perplexity-User pentru accesări declanșate de utilizatori; publică listele oficiale de IP-uri pentru verificare (documentația oficială Perplexity).</p>

      <p><strong>Google</strong> folosește Google-Extended ca token separat de control pentru utilizarea conținutului în modelele Gemini, distinct de Googlebot-ul clasic de căutare.</p>

      <p>Concluzia pentru orice audit de AI Visibility: verificarea accesului crawlerelor AI este pasul zero. Este una dintre cele mai frecvente probleme găsite în practică — site-uri cu SEO decent care blochează, adesea fără să știe (prin firewall, CDN sau setări implicite de CMS), exact roboții care le-ar aduce citări.</p>

      <h2>De ce contează acum?</h2>

      <ol>
        <li><strong>Comportamentul de căutare se mută în răspunsuri.</strong> Google afirmă în propriul ghid că preferințele utilizatorilor evoluează rapid către experiențe generative de găsire a informației. Microsoft confirmă aceeași tendință din direcția opusă: în ghidurile Bing revizuite în 2026, avertizează că un declin al click-urilor nu mai înseamnă neapărat scădere de vizibilitate, pentru că expunerea conținutului migrează către citările din răspunsurile Copilot.</li>
        <li><strong>Furnizorii au oficializat disciplina.</strong> Google a publicat un ghid oficial de optimizare pentru funcțiile AI din Search. Bing a scris GEO în Webmaster Guidelines și a lansat, în februarie 2026, AI Performance în Bing Webmaster Tools — primul dashboard oficial al unui motor major care măsoară citările conținutului tău în răspunsurile Copilot, inclusiv „grounding queries" (micro-interogările interne generate din întrebarea utilizatorului). Măsurarea vizibilității AI nu mai e speculație; are KPI proprii.</li>
        <li><strong>Fereastra de oportunitate este asimetrică.</strong> Într-un răspuns AI încap 2–5 surse, nu 10 linkuri plus reclame. Cine devine sursa citată pentru un subiect ocupă o poziție mult mai greu de disputat decât o poziție SERP. Iar pentru piața românească, competiția pe conținut de calitate, structurat și citabil este încă foarte subțire — bariera de intrare este istoric de joasă, dar nu va rămâne așa.</li>
        <li><strong>Riscul nu este doar invizibilitatea, ci descrierea greșită.</strong> Un motor AI poate să te omită (NULL), să te confunde cu o entitate cu nume similar (coliziune de entitate) sau să inventeze detalii despre tine (confabulare). Fără măsurare, nu știi în care dintre aceste situații te afli.</li>
      </ol>

      <h3>Ce înseamnă asta pentru piața din România</h3>

      <h3>Trei particularități locale pe care le tratăm explicit în metodologia AI Visibility Lab</h3>

      <p><strong>Limba și interogările bilingve.</strong> Utilizatorii români întreabă AI-ul și în română, și în engleză, iar terminologia consacrată rămâne în engleză („ce este GEO", nu „optimizare pentru motoare generative"). Conținutul care performează trebuie să definească în română, dar să ancoreze termenii tehnici în forma în care piața îi caută.</p>

      <p><strong>Deficitul de surse citabile în română.</strong> Pentru multe subiecte de nișă, motoarele AI nu găsesc surse românești structurate și ajung să sintetizeze din surse străine sau din agregatoare slabe. Asta produce răspunsuri generice sau greșite despre piața locală — și, simultan, o oportunitate: primele surse românești riguroase pe un subiect devin implicit sursele citate.</p>

      <p><strong>Vizibilitatea în căutare și vizibilitatea AI sunt variabile independente.</strong> Din măsurătorile noastre directe: o entitate poate fi invizibilă în Google/Bing și totuși citată corect de ChatGPT — și invers. De aceea un audit serios măsoară ambele straturi separat, cu metodologie documentată. Acesta este fundamentul fazei noastre F0, Tabula Rasa (pagină în curs de publicare).</p>

      <h2>Întrebări frecvente</h2>

      <p><strong>GEO înlocuiește SEO?</strong> Nu. Google afirmă explicit că funcțiile sale AI se bazează pe aceleași sisteme de ranking și calitate din Search, deci fundamentele SEO rămân condiție necesară. GEO extinde obiectivul: de la a fi listat, la a fi citat și descris corect. Fără SEO tehnic solid, GEO nu are pe ce să se sprijine.</p>

      <p><strong>Care e diferența dintre GEO, AEO și LLMO?</strong> În practică, denumiri suprapuse pentru aceeași disciplină. GEO accentuează motoarele generative (termen din lucrarea academică de la KDD 2024), AEO accentuează „motoarele de răspuns", iar LLMO (Large Language Model Optimization) accentuează modelele. Noi folosim AI Visibility ca termen-umbrelă orientat pe rezultat: ești vizibil și corect reprezentat în răspunsurile AI sau nu.</p>

      <p><strong>Se poate măsura vizibilitatea AI?</strong> Da, și trebuie. La nivel de platformă au apărut primele instrumente oficiale (Bing AI Performance în Webmaster Tools). La nivel de entitate, măsurarea se face prin rulări sistematice de interogări pe mai multe motoare, în condiții controlate, cu rezultate clasificate (citare corectă, citare parțială, coliziune de entitate, confabulare, absență) și comparate în timp față de o linie de bază documentată.</p>

      <p><strong>Cât durează până apar rezultate?</strong> Mai mult decât în PPC, comparabil sau puțin mai repede decât în SEO clasic pe nișe necompetitive. Modificările de acces pentru crawlere se propagă în ore–zile; schimbările de conținut și de coroborare a entității se reflectă în răspunsurile AI de regulă în săptămâni. De aceea metodologia corectă este: linie de bază → intervenție → re-măsurare pe același set de interogări.</p>

      <p><strong>E suficient să „scriu pentru AI"?</strong> Nu există un truc de scriere care să garanteze citarea. Cercetarea academică și ghidurile oficiale converg: câștigă conținutul clar structurat, verificabil, cu surse citate, publicat de o entitate consolidată și coroborată. Google avertizează separat că generarea de pagini la scară, fără valoare adăugată, intră sub politicile sale de spam (ghidul Google despre conținut generat cu AI).</p>

      <h2>Citește în continuare</h2>

      <ul>
        <li>Cum aleg motoarele AI ce citează (în curs de publicare)</li>
        <li>SEO vs. GEO: ce se păstrează, ce se schimbă (în curs de publicare)</li>
        <li>Cum se măsoară vizibilitatea AI (în curs de publicare)</li>
        <li>Tabula Rasa: metodologia F0 (în curs de publicare)</li>
        <li>Glosar GEO/AEO/AI — definițiile tuturor termenilor folosiți în această pagină</li>
        <li>AI Visibility Lab — metodologia completă și studiile de caz</li>
      </ul>

      <h2>Surse și documentație oficială</h2>

      <ul>
        <li><a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">Google Search Central — AI Features and Your Website</a></li>
        <li><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Google Search Central — Google's Guide to Optimizing for Generative AI Features on Google Search</a></li>
        <li><a href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content" target="_blank" rel="noopener noreferrer">Google Search Central — Guidance on Generative AI Content</a></li>
        <li><a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI — Overview of OpenAI Crawlers (GPTBot, OAI-SearchBot, ChatGPT-User)</a></li>
        <li><a href="https://support.anthropic.com/en/articles/8896518" target="_blank" rel="noopener noreferrer">Anthropic — Does Anthropic crawl data from the web? (ClaudeBot, Claude-SearchBot, Claude-User)</a></li>
        <li><a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">Perplexity — Perplexity Crawlers (PerplexityBot, Perplexity-User)</a></li>
        <li><a href="https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/" target="_blank" rel="noopener noreferrer">Microsoft Bing — Bing Webmaster Guidelines (revizuite în februarie 2026 cu includerea GEO); analiză Search Engine Journal</a></li>
        <li><a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD '24 (arXiv)</a> · <a href="https://dl.acm.org/doi/10.1145/3637528.3671900" target="_blank" rel="noopener noreferrer">ACM Digital Library</a></li>
      </ul>

      <p>Metodologia de măsurare folosită de AI Visibility Lab este documentată public în paginile Tabula Rasa și „Cum se măsoară vizibilitatea AI". Această pagină este actualizată pe măsură ce documentația oficială a furnizorilor evoluează.</p>
`;
