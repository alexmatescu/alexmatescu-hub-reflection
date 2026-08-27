export const avl102CumAlegHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-102 — Cum aleg sistemele AI sursele și citările</p>
        <p class="avl-doc-lead">Mecanica celor patru filtre — acces, recuperare, sinteză, selecția citării — prin care un motor AI decide ce citează</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-102</td></tr>
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

      <p>Această pagină face parte din seria de teorie AI Visibility Lab. Dacă nu ești familiarizat cu termenii de bază, începe cu <a href="/lab/cercetare/ce-este-geo-aeo">Ce este GEO/AEO?</a>.</p>

      <h2>Răspunsul scurt</h2>

      <p>Un motor AI ajunge să te citeze doar dacă treci, în ordine, prin patru filtre: (1) accesul — crawlerele AI pot citi conținutul tău; (2) recuperarea — sistemul de retrieval îți selectează conținutul ca relevant pentru interogare, prin mecanisme de tip RAG; (3) sinteza — modelul folosește efectiv informația ta la construirea răspunsului; (4) selecția citării — dintre sursele folosite, a ta este una dintre puținele afișate. Fiecare filtru elimină candidați. Majoritatea eșecurilor de vizibilitate AI se produc la filtrele 1 și 2 — adică înainte ca vreun model să „decidă" ceva despre calitatea conținutului tău.</p>

      <h3>Filtrul 1: Accesul — poate AI-ul să te citească?</h3>

      <p>Nicio optimizare nu contează dacă acest filtru pică. Fiecare furnizor major operează crawlere proprii, cu roluri separate și control independent din robots.txt — inventarul complet, cu documentația oficială a fiecăruia, e în pagina definițională. Aici contează mecanica eșecurilor, pentru că accesul pică în trei moduri distincte:</p>

      <ol>
        <li><strong>Blocare explicită în robots.txt.</strong> Cea mai vizibilă, dar nu cea mai frecventă. Atenție la directivele moștenite: multe site-uri au blocat „tot ce e AI" în 2023–2024 și au uitat. OpenAI notează că modificările din robots.txt se propagă în sistemele sale în aproximativ 24 de ore (documentația OpenAI); Perplexity recomandă în documentația sa permiterea explicită a boților săi atât în robots.txt, cât și la nivel de WAF (documentația Perplexity).</li>
        <li><strong>Blocare tăcută prin firewall/CDN.</strong> Cazul insidios: robots.txt permite accesul, dar WAF-ul, protecția anti-bot a CDN-ului sau limitele de rată resping crawlerele AI cu erori 403/429. În log-uri arată ca trafic suspect respins; pentru motorul AI, site-ul tău pur și simplu nu răspunde. Perplexity publică ghiduri explicite de whitelisting pentru WAF-uri (Cloudflare, AWS) tocmai pentru că problema e răspândită, împreună cu listele oficiale de IP-uri pentru verificarea autenticității boților. Verificarea corectă se face în două direcții: user-agent și IP din listele publicate — altfel accepți și scraperi care se dau drept GPTBot.</li>
        <li><strong>Conținut invizibil la parsare.</strong> Crawlerul primește pagina, dar nu vede conținutul: text randat exclusiv prin JavaScript pe care crawlerul nu-l execută, conținut în imagini fără alternativă text, sau HTML atât de nestructurat încât extractorul nu poate izola blocurile relevante. Regula practică: conținutul care contează trebuie să existe în HTML-ul servit inițial, cu titluri, paragrafe, liste și tabele semantice. Google precizează că poate procesa JavaScript, dar recomandă explicit respectarea bunelor practici de JavaScript SEO — iar celelalte crawlere AI sunt, în general, mai puțin capabile decât Googlebot la randare.</li>
      </ol>

      <p>Pentru funcțiile AI din Google Search există și o condiție formală suplimentară: pagina trebuie să fie indexată și eligibilă pentru afișare cu snippet în Google Search, iar site-ul trebuie să fie inclus în funcțiile generative din setările Search Console (Google Search Central). La Bing, directivele meta au efecte separate asupra răspunsurilor Copilot: NOARCHIVE exclude conținutul din răspunsuri și grounding, NOCACHE limitează Copilot la URL, titlu și snippet — deci o directivă pusă cândva pentru motive de confidențialitate îți poate amputa azi citările AI.</p>

      <h3>Filtrul 2: Recuperarea — te alege sistemul de retrieval?</h3>

      <p>Aici se hotărăște cel mai mult și se înțelege cel mai puțin. Motoarele generative nu „știu" web-ul; ele recuperează documente relevante la momentul întrebării și le dau modelului ca material de lucru. Google descrie explicit cele două mecanisme din propriile funcții AI (ghidul oficial de optimizare pentru AI generativ):</p>

      <p><strong>RAG (retrieval-augmented generation / grounding).</strong> Sistemele de ranking din Search recuperează pagini relevante și actuale din index, iar modelul generează răspunsul pe baza informației din acele pagini, cu linkuri către sursele care susțin afirmațiile. Consecința strategică: poziția ta în sistemele clasice de retrieval rămâne poarta de intrare — la Google prin indexul Search, la ChatGPT prin indexul OAI-SearchBot (istoric sprijinit și pe Bing), la Perplexity prin indexul PerplexityBot. De aceea SEO tehnic solid nu e opțional în GEO; e infrastructura filtrului 2.</p>

      <p><strong>Query fan-out.</strong> Modelul descompune întrebarea utilizatorului în mai multe interogări conexe, rulate concurent, ca să adune material pe subteme. Exemplul din documentația Google: la întrebarea despre repararea unui gazon plin de buruieni, sistemul poate genera intern căutări despre erbicide, metode fără chimicale și prevenție. Consecința: concurezi la nivelul subtemelor, nu al întrebării vizibile. O pagină care acoperă complet și clar o subtemă poate fi recuperată pentru sute de întrebări-mamă diferite. Același mecanism apare la Bing sub numele „grounding queries" — micro-interogări interne, măsurabile din februarie 2026 în raportul AI Performance din Bing Webmaster Tools.</p>

      <p>Important, tot din documentația Google: nu trebuie să creezi pagini separate pentru fiecare variație de interogare sau pentru fiecare fan-out query posibil — producția de pagini la scară pentru manipularea răspunsurilor intră sub politica de spam pentru scaled content abuse. Diferența dintre „acopăr complet subtemele subiectului meu" și „fabric o pagină pentru fiecare permutare de cuvinte" este exact diferența dintre GEO legitim și spam.</p>

      <h3>Filtrul 3: Sinteza — folosește modelul informația ta?</h3>

      <p>Odată recuperat, conținutul tău concurează cu al celorlalte surse din contextul modelului. Aici cercetarea academică oferă cele mai concrete indicii despre ce înclină balanța:</p>

      <p>Lucrarea fondatoare GEO (Aggarwal et al., KDD 2024) a testat sistematic strategii de optimizare și a găsit că cele cu impact măsurabil asupra vizibilității în răspunsuri sunt cele care cresc credibilitatea și densitatea informațională a conținutului — citarea surselor, includerea de statistici, citate de la surse relevante — în timp ce tacticile mecanice de tip îndesare de cuvinte-cheie nu ajută (arXiv:2311.09735).</p>

      <p>Studiul „What evidence do language models find convincing?" (Wan, Wallace, Klein, ACL 2024) a analizat ce tip de dovezi consideră convingătoare modelele de limbaj atunci când arbitrează între surse contradictorii — o direcție de cercetare care confirmă că modelele au preferințe sistematice și măsurabile; nuanța importantă a lucrării: modelele actuale cântăresc în primul rând relevanța sursei față de interogare, mai mult decât semnalele stilistice de credibilitate precum referințele științifice — un argument suplimentar pentru acoperirea completă a subtemelor, nu pentru cosmetizarea textului (<a href="https://aclanthology.org/2024.acl-long.403/" target="_blank" rel="noopener noreferrer">aclanthology.org/2024.acl-long.403</a>).</p>

      <p>Ghidul oficial Google formulează același principiu dinspre practică: sistemele AI compară mai multe surse, deci se remarcă conținutul cu punct de vedere propriu și experiență de primă mână — nu „conținutul-marfă" care reambalează cunoștințe comune și pe care l-ar putea produce oricine, inclusiv un model generativ.</p>

      <p>Sinteza practică a filtrului 3: modelul preferă surse din care poate extrage afirmații verificabile, atribuibile și specifice. Un paragraf care spune ceva precis, cu cifre și sursă, e material de construcție pentru un răspuns. Un paragraf de generalități e zgomot pe care modelul îl are deja din antrenare și nu are motiv să-l citeze.</p>

      <h3>Filtrul 4: Selecția citării — ești printre sursele afișate?</h3>

      <p>Ultimul filtru e cel mai strâmt: un răspuns afișează de regulă 2–5 citări, chiar dacă sistemul a consultat mai multe surse. Lucrarea GEO arată de ce măsurarea e aici mai nuanțată decât în SERP-ul clasic: citările apar încorporate în text, intercalate între ele, nu într-o listă ordonată — deci „vizibilitatea" are componente multiple (ești citat? cât de proeminent? pentru ce porțiune din răspuns?). Două observații operaționale:</p>

      <p><strong>Citarea urmează atribuirea.</strong> Ești citat pentru blocul de conținut din care s-a extras o afirmație folosită în răspuns, nu pentru „site" în ansamblu. Ghidarea Microsoft pentru Bing/Copilot merge explicit în această direcție: conținutul e evaluat pe blocuri autonome — unități care răspund complet la o întrebare specifică, cu titluri descriptive, nu vagi. De aici tiparul recomandat consecvent în tot clusterul nostru: fiecare secțiune începe cu răspunsul, apoi dezvoltă.</p>

      <p><strong>Citarea are inerție de entitate.</strong> Când modelul trebuie să aleagă între surse comparabile, semnalele de încredere la nivel de entitate (cine publică, ce istoric de coroborare are, cât de neambiguu e identificată) departajează. Ceea ce ne duce la stratul care leagă toate cele patru filtre.</p>

      <h3>Stratul transversal: entitatea</h3>

      <p>Filtrele 1–4 operează pe conținut; în paralel, motoarele AI construiesc o reprezentare a entităților — cine ești, ce faci, cum te deosebești de alții cu nume similar. Această reprezentare decide cum ești descris atunci când ești menționat, și dacă ești confundat sau confabulat.</p>

      <p><strong>Date structurate: rolul real, fără mit.</strong> Google e neobișnuit de direct în ghidul său oficial: datele structurate nu sunt obligatorii pentru funcțiile AI și nu există un markup schema.org special pentru AI — dar rămân recomandate ca parte a strategiei SEO generale, pentru eligibilitatea la rezultate îmbogățite (mythbusting-ul oficial Google). Poziția noastră, aliniată cu documentația: JSON-LD nu e un buton magic de citare, ci instrumentul de dezambiguizare a entității — Person, Organization/ProfessionalService, @id stabile, sameAs către profilurile externe. Pentru entități cu nume care intră în coliziune cu altele (caz frecvent și documentat în măsurătorile noastre), acesta e mecanismul principal prin care mașina află care dintre entitățile omonime ești. Documentație: Google — Understand how structured data works · schema.org.</p>

      <p><strong>Coroborarea distribuită.</strong> O entitate e considerată reală și demnă de citare atunci când mai multe surse independente spun despre ea lucruri consecvente: site propriu, profiluri profesionale, mențiuni în publicații, registre. Atenție însă la granița trasată de Google: căutarea de mențiuni neautentice e explicit descurajată — sistemele de calitate și anti-spam se aplică și funcțiilor generative. Coroborarea legitimă se construiește, nu se fabrică.</p>

      <p><strong>Consecvența semnalelor.</strong> Nume identic peste tot, aceeași descriere a rolului, aceleași date de contact, biografii aliniate. Fiecare inconsecvență e un punct în care reprezentarea entității se poate bifurca — iar la bifurcație, modelele aleg varianta cu mai multă autoritate acumulată, care s-ar putea să nu fii tu.</p>

      <h3>Ce NU influențează citarea (mythbusting cu sursă)</h3>

      <p>Piața GEO vinde multe „hack-uri". Ghidul oficial Google le demontează pe cele mai populare, iar noi le listăm ca atare, pentru igiena pieței românești.</p>

      <p>Sursa pentru toate cele de mai sus: Google — Optimizing for generative AI search, secțiunea „Mythbusting".</p>

      <h3>Ce înseamnă asta pentru piața din România</h3>

      <p>Filtrul 1 este, empiric, problema numărul unu local. Multe site-uri românești de IMM-uri rulează pe găzduiri cu protecții anti-bot agresive setate implicit sau pe teme care blochează crawlerele AI fără știrea proprietarului. Înainte de orice discuție despre conținut, auditul trebuie să verifice log-urile și răspunsurile HTTP pentru GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot și Google-Extended.</p>

      <p>Filtrul 2 favorizează, deocamdată, sursele în engleză. Pentru multe subiecte, indexurile de retrieval au puține surse românești de calitate, deci fan-out-ul aduce material străin, iar răspunsul despre piața locală iese generic. Fereastra strategică: paginile românești care răspund complet la subteme specifice pieței locale au concurență minimă la recuperare.</p>

      <p>Stratul de entitate e fragil pentru numele românești. Diacriticele, variantele de transliterare și omonimia (nume de familie frecvente, forme cu/fără diacritice tratate ca echivalente de modele) produc coliziuni de entitate mult mai des decât în piețele anglofone. Măsurarea coliziunilor e parte standard din faza noastră F0, Tabula Rasa.</p>

      <h2>Întrebări frecvente</h2>

      <p><strong>Dacă am SEO bun, sunt automat citat de AI?</strong> Nu. SEO bun te trece de filtrele 1–2 la Google, dar filtrele 3–4 țin de extractibilitatea și credibilitatea conținutului, iar celelalte motoare au propriile crawlere și indexuri, care trebuie verificate separat. Invers e la fel de adevărat: am măsurat entități invizibile în căutarea clasică, dar citate corect de ChatGPT. Cele două straturi sunt variabile independente.</p>

      <p><strong>Pot plăti ca să fiu citat?</strong> Nu există citare plătită în răspunsurile organice ale motoarelor majore. Există publicitate separată în unele produse (ex. ChatGPT a introdus formate publicitare, cu crawler dedicat de verificare a landing page-urilor), dar aceasta e marcată ca atare și nu influențează citările organice.</p>

      <p><strong>Cât de repede se reflectă schimbările?</strong> Accesul (filtrul 1): ore–zile; furnizorii indică ~24h pentru propagarea robots.txt. Recuperarea (filtrul 2): zile–săptămâni, în ritmul de recrawl. Reprezentarea entității: săptămâni–luni, pentru că cere coroborare din mai multe surse. De aceea re-măsurarea (F3) se face pe același set de interogări, la interval suficient.</p>

      <p><strong>Contează linkurile (backlinks) în GEO?</strong> Da, indirect dar substanțial: la Google, retrieval-ul pentru RAG folosește sistemele de ranking din Search, unde linkurile rămân semnal; la celelalte motoare, autoritatea sursei influențează selecția citării. Ce s-a schimbat e că linkurile nu mai sunt singura monedă — coroborarea entității și extractibilitatea conținutului cântăresc alături de ele.</p>

      <p><strong>Fiecare motor AI funcționează la fel?</strong> Arhitectura generală (acces → retrieval → sinteză → citare) e comună, dar implementările diferă: indexuri proprii vs. parteneriate, agresivitatea fan-out-ului, numărul de citări afișate, politica față de conținutul de tip YMYL. De aceea măsurăm pe cinci motoare separat, nu pe unul singur extrapolat.</p>

      <h2>Citește în continuare</h2>

      <ul>
        <li><a href="/lab/cercetare/ce-este-geo-aeo">Ce este GEO/AEO? Ghid complet de AI Visibility</a> — pagina definițională a seriei</li>
        <li><a href="/lab/cercetare/seo-vs-geo">SEO vs. GEO: ce se păstrează, ce se schimbă</a></li>
        <li><a href="/lab/cercetare/cum-se-masoara-ai-visibility">Cum se măsoară vizibilitatea AI</a></li>
        <li><a href="/lab/metodologie/tabula-rasa-f0">Tabula Rasa: metodologia F0</a></li>
        <li><a href="/lab/cercetare/glosar-geo-aeo">Glosar GEO/AEO/AI</a> — RAG, grounding, query fan-out, coliziune de entitate și restul termenilor din această pagină</li>
        <li><a href="/lab">AI Visibility Lab</a> — metodologia completă</li>
      </ul>

      <h2>Surse și documentație oficială</h2>

      <ul>
        <li><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Google Search Central — Optimizing your website for generative AI features on Google Search (RAG, query fan-out, cerințe tehnice, mythbusting, raportul Generative AI din Search Console)</a></li>
        <li><a href="https://developers.google.com/search/docs/appearance/ai-features" target="_blank" rel="noopener noreferrer">Google Search Central — AI Features and Your Website</a></li>
        <li><a href="https://developers.google.com/search/docs/essentials/spam-policies" target="_blank" rel="noopener noreferrer">Google Search Central — Spam policies (scaled content abuse)</a></li>
        <li><a href="https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data" target="_blank" rel="noopener noreferrer">Google Search Central — Understand how structured data works</a></li>
        <li><a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI — Overview of OpenAI Crawlers</a></li>
        <li><a href="https://support.anthropic.com/en/articles/8896518" target="_blank" rel="noopener noreferrer">Anthropic — Does Anthropic crawl data from the web?</a></li>
        <li><a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">Perplexity — Perplexity Crawlers (inclusiv ghiduri WAF și liste de IP-uri)</a></li>
        <li><a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD '24 (arXiv)</a> · <a href="https://dl.acm.org/doi/10.1145/3637528.3671900" target="_blank" rel="noopener noreferrer">ACM Digital Library</a></li>
        <li><a href="https://aclanthology.org/2024.acl-long.403/" target="_blank" rel="noopener noreferrer">Wan, A., Wallace, E., Klein, D. (2024) — What evidence do language models find convincing?, ACL 2024</a></li>
        <li><a href="https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/" target="_blank" rel="noopener noreferrer">Microsoft Bing — Bing Webmaster Guidelines (revizuite februarie 2026: GEO, grounding, directive meta pentru Copilot); analiză</a></li>
      </ul>

      <p>Pagina este actualizată pe măsură ce documentația oficială evoluează. Metodologia de măsurare a celor patru filtre este documentată în paginile <a href="/lab/metodologie/tabula-rasa-f0">Tabula Rasa</a> și „<a href="/lab/cercetare/cum-se-masoara-ai-visibility">Cum se măsoară vizibilitatea AI</a>".</p>

      <h2>Istoricul versiunilor</h2>

      <table>
        <thead><tr><th>Versiune</th><th>Dată</th><th>Statut</th><th>Modificări</th></tr></thead>
        <tbody>
          <tr><td>1.0.1</td><td>21 iulie 2026</td><td>Activ</td><td>Uniformizare metadate.</td></tr>
          <tr><td>1.0.2</td><td>26 august 2026</td><td>Activ</td><td>PATCH: linkuri interne pentru Autor (→ /despre) și Organizație (→ /lab).</td></tr>
        </tbody>
      </table>
`;
