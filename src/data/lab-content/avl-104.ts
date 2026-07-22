export const avl104MasurareHtml = `
      <div class="avl-doc-card">
        <p class="avl-doc-overline">Document sursă</p>
        <p class="avl-doc-title">AVL-104 — Cum se măsoară AI Visibility</p>
        <p class="avl-doc-lead">Metodologia de măsurare a AI Visibility: setul de interogări, protocolul de rulare, taxonomia rezultatelor și standardul de dovezi</p>

      <table class="avl-meta-table">
        <tbody>
        <tr><th scope="row">Document ID</th><td>AVL-104</td></tr>
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

      <p>Această pagină face parte din seria de teorie AI Visibility Lab. Context recomandat: Ce este GEO/AEO? pentru definiții și Cum aleg motoarele AI ce citează pentru mecanica citării.</p>

      <h2>Răspunsul scurt</h2>

      <p>A măsura vizibilitatea AI înseamnă a documenta sistematic dacă, unde și cât de corect apare o entitate în răspunsurile motoarelor generative — înainte de orice intervenție, apoi din nou după. Măsurarea se face pe două straturi complementare: stratul de platformă (rapoartele oficiale ale motoarelor, care numără impresii pe propriile funcții AI) și stratul de entitate (rulări controlate de interogări pe mai multe motoare, cu rezultate clasificate într-o taxonomie fixă și comparate față de o linie de bază). Principiul de lucru e cel mai vechi din management: nu poți optimiza ce nu măsori — iar în GEO, unde sistemele sunt black-box și rezultatele nedeterministe, măsurarea disciplinată nu e un moft metodologic, ci singura diferență verificabilă dintre optimizare și marketing.</p>

      <h3>De ce măsurarea e problema centrală a GEO</h3>

      <h3>Trei realități structurale fac din măsurare miezul disciplinei, nu un accesoriu</h3>

      <ol>
        <li><strong>Sistemele sunt black-box.</strong> Lucrarea fondatoare a domeniului formulează exact această problemă: creatorii de conținut nu controlează și nu pot inspecta modul în care motoarele generative le folosesc și le afișează conținutul, deci vizibilitatea trebuie stabilită empiric, din exterior, prin observarea răspunsurilor (GEO: Generative Engine Optimization, KDD 2024). Aceeași lucrare arată că măsurarea citărilor cere metrici mai fini decât „apare/nu apare": citările sunt încorporate în text și intercalate, deci contează și proeminența, nu doar prezența.</li>
        <li><strong>Vizibilitatea s-a decuplat de trafic.</strong> Microsoft avertizează explicit, în contextul noilor ghiduri Bing, că scăderea click-urilor nu mai înseamnă automat scădere de vizibilitate — conținutul poate apărea drept citare în răspunsurile Copilot fără click asociat. Analytics-ul clasic nu vede acest strat; doar măsurarea directă a răspunsurilor îl vede.</li>
        <li><strong>Modurile de eșec noi sunt invizibile în orice raport clasic.</strong> Poziții bune în SERP și trafic stabil pot coexista cu o entitate pe care motoarele AI o confundă cu alta omonimă sau o descriu cu detalii inventate. Niciun instrument SEO nu semnalează asta. Am documentat pe propriile măsurători și situația inversă: entitate absentă din rezultatele Google/Bing, dar citată corect de ChatGPT — cele două straturi sunt variabile independente și trebuie măsurate separat.</li>
      </ol>

      <h3>Stratul 1: instrumentele oficiale de platformă (și limitele lor)</h3>

      <p>Din 2026, măsurarea are, în premieră, instrumente oficiale — un pas uriaș față de perioada în care totul era speculație:</p>

      <p><strong>Google Search Console — raportul Generative AI performance.</strong> Arată impresiile site-ului în AI Overviews și AI Mode, cu dimensiuni pe pagini, țări, date și dispozitive; Google îl lansează gradual, către un subset de proprietăți, iar eligibilitatea presupune includerea site-ului în funcțiile generative din Search Console (documentația oficială).</p>

      <p><strong>Bing Webmaster Tools — dashboard-ul AI Performance.</strong> Lansat în februarie 2026; arată cum apare conținutul în răspunsurile Copilot, inclusiv la nivelul „grounding queries" — micro-interogările interne generate din întrebarea utilizatorului.</p>

      <p>Ambele merită activate din prima zi — sunt gratuite și oficiale. Dar limitele lor definesc exact golul pe care îl acoperă stratul 2.</p>

      <p>La acestea se adaugă avertismentul oficial Google privind piața de tool-uri terțe: niciun instrument extern nu are acces la sistemele interne de ranking sau AI, deci promisiunile contrare sunt semnal de alarmă (ghidul Google). Tool-urile terțe de monitorizare pot fi utile ca automatizare a fluxului de lucru — dar nu înlocuiesc metodologia; o execută cel mult.</p>

      <h3>Stratul 2: măsurarea la nivel de entitate — metodologia</h3>

      <p>Aceasta e metodologia pe care o folosim și o publicăm integral, tocmai pentru ca oricine să o poată verifica sau reproduce. Are patru componente: setul de interogări, protocolul de rulare, taxonomia rezultatelor și standardul de dovezi.</p>

      <h3>1. Setul de interogări (query set)</h3>

      <p>Un eșantion fix de întrebări formulate așa cum le-ar pune utilizatorii reali, construit pe trei niveluri de intenție:</p>

      <ul>
        <li><strong>Interogări de identitate</strong> — „cine este [nume]?", variații cu/fără context. Măsoară recunoașterea entității și riscul de coliziune.</li>
        <li><strong>Interogări de rol</strong> — „[nume] + domeniu/serviciu". Măsoară asocierea entității cu activitatea sa.</li>
        <li><strong>Interogări de recomandare</strong> — „ce specialist în [domeniu] recomanzi în [oraș]?". Măsoară prezența în răspunsurile care aduc efectiv clienți — cele mai valoroase comercial și cele mai greu de câștigat.</li>
      </ul>

      <p>Două reguli fac setul valid științific. Regula înghețării: setul se fixează la prima măsurare (F0) și nu se modifică până la re-măsurare (F3) — altfel comparația before/after e compromisă; interogări noi se pot adăuga oricând, dar se raportează separat, ca serie nouă. Regula bilingvismului: pentru piața românească, setul include formulări în română și în engleză, pentru că utilizatorii reali folosesc ambele, iar comportamentul motoarelor diferă între limbi.</p>

      <h3>2. Protocolul de rulare: condiții controlate</h3>

      <p>Răspunsurile AI sunt influențate de istoricul contului, personalizare și locație — deci fără condiții controlate, măsurătoarea e contaminată. Protocolul de sesiune curată:</p>

      <ul>
        <li><strong>Fără istoric și fără personalizare</strong> — mod incognito, funcțiile de memorie dezactivate, conversații temporare acolo unde platforma le oferă.</li>
        <li><strong>Geolocație reală, fără VPN</strong> — locația e o variabilă măsurată, nu un zgomot de ascuns; răspunsurile pentru un utilizator din România sunt exact obiectul studiului.</li>
        <li><strong>Configurație de instrument documentată pre-rulare</strong> — motor, versiune/mod, limbă, dată — notate înainte de fiecare rulare, ca orice instrument de măsură calibrat.</li>
        <li><strong>Cadență sustenabilă</strong> — rulările se distribuie în timp (un motor pe zi e un ritm realist pentru un operator solo), cu data consemnată per rulare — pentru că și data e o variabilă: modelele se actualizează.</li>
        <li><strong>Suprafața de măsurare standard</strong> — cinci motoare: ChatGPT, Google (AI Overviews/AI Mode), Perplexity, Claude, Copilot — pentru că extrapolarea de la unul singur e una dintre erorile documentate ale tranziției de la SEO.</li>
      </ul>

      <h3>3. Categoriile de bază ale rezultatelor: HIT / HIT parțial / COLIZIUNE / CONFABULARE / NULL</h3>

      <p>Pentru explicarea generală a măsurării, fiecare rulare poate fi grupată într-una dintre cinci categorii de bază — HIT, HIT parțial, COLIZIUNE, CONFABULARE și NULL. Implementarea operațională folosește taxonomia extinsă și codurile definite în AVL-201 — Tabula Rasa F0: Baseline Measurement Specification, care detaliază inclusiv HIT-C, MENȚIUNE, SURSĂ GREȘITĂ, FAPT ÎNVECHIT și REFUZ / LIMITARE.</p>

      <p>De ce cinci categorii de bază și nu doar două (apare/nu apare)? Pentru că fiecare categorie indică un mod de eșec diferit: NULL se tratează prin construcția prezenței și verificarea accesului; COLIZIUNEA prin dezambiguizare; CONFABULAREA prin publicarea și coroborarea unor surse autoritative; iar HIT parțial prin actualizare și consolidare. Taxonomia extinsă din AVL-201 păstrează aceste familii de diagnostic, dar oferă coduri mai precise pentru execuție, audit și scorare.</p>

      <p>Din clasificări derivă metricile agregate: rata de HIT per motor și per tip de interogare, rata de coliziune, distribuția pe categoriile de bază și, în implementarea conformă AVL-201, distribuția pe codurile taxonomiei extinse. Se adaugă analiza surselor citate: ce site-uri folosesc motoarele când răspund despre domeniul analizat și unde trebuie consolidată prezența entității.</p>

      <h3>4. Standardul de dovezi</h3>

      <p>Fără dovezi, măsurarea e o afirmație. Standardul minim: captură de ecran datată pentru fiecare rulare, notarea manuală a surselor citate în răspuns, convenție de denumire consecventă a fișierelor (motor_interogare_rulare_dată), și un instantaneu reproductibil al întregii linii de bază — pachetul complet (set de interogări, configurații, clasificări, capturi) arhivat la data măsurării. Acesta e artefactul care face posibilă propoziția cu care se judecă orice serviciu de optimizare: „iată starea din [data F0], iată starea din [data F3], iată ce s-a schimbat".</p>

      <h3>De la măsurare la optimizare: bucla completă</h3>

      <p>Măsurarea nu e un scop în sine; e capătul și începutul buclei de optimizare. În metodologia AI Visibility Lab, bucla are patru faze: F0 — linia de bază (tot ce descrie această pagină, executat înainte de orice intervenție; faza poartă numele Tabula Rasa), F1 — casa entității (sursa canonică: site, date structurate, dezambiguizare), F2 — prezența distribuită (coroborarea din surse independente), F3 — re-măsurarea (același set înghețat, același protocol, aceleași metrici — atribuire onestă a schimbării). Detaliile fiecărei faze: pagina metodologiei.</p>

      <h3>Limitele metodei, spuse onest</h3>

      <h3>O metodologie credibilă își declară limitele; iată-le pe ale noastre</h3>

      <p><strong>Nedeterminismul.</strong> Același motor poate da răspunsuri diferite la aceeași interogare, în rulări succesive. De aceea măsurăm cu rulări repetate per interogare, raportăm rate, nu verdicte din rulare unică, și interpretăm direcția schimbării între F0 și F3, nu zecimalele unui procent.</p>

      <p><strong>Actualizările de modele.</strong> Între F0 și F3, motoarele își schimbă modelele și indexurile — o variabilă necontrolabilă. O atenuăm consemnând configurația la fiecare rulare și interpretând prudent schimbările care coincid cu actualizări majore anunțate public.</p>

      <p><strong>Eșantionul finit.</strong> Un set de interogări e un eșantion, nu recensământul tuturor întrebărilor posibile. Setul bun acoperă cele trei niveluri de intenție și e construit înainte de a vedea rezultatele — nu selectat ulterior ca să arate bine.</p>

      <p><strong>Observatorul plătit.</strong> Când măsurarea și optimizarea sunt făcute de același furnizor, există un conflict de interese structural. Răspunsul nostru e publicarea integrală a metodologiei și a dovezilor: orice terț poate rula același set, cu același protocol, și verifica. Transparența nu elimină conflictul; îl face verificabil.</p>

      <h3>Ce înseamnă asta pentru piața din România</h3>

      <p>Standardul de piață local e, deocamdată, zero măsurare publicată. Ofertele GEO românești nu publică metodologii de măsurare, seturi de interogări sau date before/after — ceea ce face imposibilă verificarea oricărei promisiuni. Pentru cumpărători, testul e simplu și l-am formulat în ghidul de tranziție: cere linia de bază. Limba dublează munca de măsurare — seturile trebuie rulate în română și engleză, pentru că răspunsurile diferă substanțial între limbi la aceleași întrebări. Geolocația României e parte din măsurătoare, nu de ocolit cu VPN: clientul tău real întreabă din România, deci și măsurătoarea ta trebuie să întrebe de acolo. Iar coliziunile de nume sunt endemice pentru entitățile românești (omonimie frecventă, diacritice normalizate silențios de modele) — motiv pentru care taxonomia noastră le tratează ca categorie de rang întâi, nu ca notă de subsol.</p>

      <h2>Întrebări frecvente</h2>

      <p><strong>De ce manual și nu cu un tool automat?</strong> Nu e „manual vs. automat", ci „metodologie vs. instrument". Tool-urile de monitorizare pot automatiza rulările, dar clasificarea COLIZIUNE/CONFABULARE cere judecată asupra identității entității, iar validitatea cere protocol de condiții controlate — ambele independente de unealtă. Plus avertismentul oficial Google: evaluează tool-urile după utilitate, nu după pretenții de acces la metrici interne.</p>

      <p><strong>Câte interogări și câte rulări sunt suficiente?</strong> Pentru o entitate individuală, un set de 10–20 de interogări pe trei niveluri de intenție, rulat pe cinci motoare, cu rulări repetate, produce o linie de bază informativă — ordinea de mărime folosită și în studiile noastre. Mai important decât volumul e disciplina: set înghețat, condiții controlate, dovezi datate.</p>

      <p><strong>Cât de des se re-măsoară?</strong> Intervalul minim rezonabil între F0 și F3 e de ordinul săptămânilor–lunilor, pentru că intervențiile (conținut, coroborare) au nevoie de timp să fie crawl-uite și absorbite. Re-măsurarea prea devreme măsoară zgomot; prea târziu, amestecă efectul intervențiilor cu deriva modelelor.</p>

      <p><strong>Rezultatele variază între rulări — mai e validă măsurarea?</strong> Da, cu condiția să fie proiectată pentru variabilitate: rulări repetate, raportare pe rate, interpretare pe direcția schimbării. E aceeași logică prin care sondajele rămân valide deși răspunsurile individuale variază. Ce nu e valid: concluzii din rulări unice sau compararea unor rulări făcute în condiții diferite.</p>

      <p><strong>Pot să-mi fac singur linia de bază?</strong> Da — metodologia e publicată tocmai pentru asta, iar pentru o primă evaluare e un exercițiu excelent: alege 10 interogări, rulează-le în sesiuni curate pe cele cinci motoare, clasifică rezultatele cu taxonomia de mai sus și păstrează capturile datate. Vei ști în câteva ore lucruri despre entitatea ta pe care niciun raport SEO nu ți le arată.</p>

      <h2>Citește în continuare</h2>

      <ul>
        <li>Tabula Rasa: metodologia F0 (în curs de publicare) — faza de linie de bază, pas cu pas</li>
        <li>Ce este GEO/AEO? Ghid complet de AI Visibility — definiții și context</li>
        <li>Cum aleg motoarele AI ce citează — cele patru filtre pe care măsurarea le diagnostichează</li>
        <li>SEO vs. GEO: ce se păstrează, ce se schimbă — pentru cine vine din SEO</li>
        <li>Glosar GEO/AEO/AI — HIT, coliziune de entitate, confabulare și restul termenilor</li>
        <li>AI Visibility Lab — metodologia completă F0–F3 și studiile de caz</li>
      </ul>

      <h2>Surse și documentație oficială</h2>

      <ul>
        <li><a href="https://support.google.com/webmasters/answer/16984139" target="_blank" rel="noopener noreferrer">Google Search Console — Generative AI performance report (Search) (impresii AI Overviews/AI Mode, dimensiuni, lansare graduală)</a></li>
        <li><a href="https://developers.google.com/search/docs/fundamentals/ai-optimization-guide" target="_blank" rel="noopener noreferrer">Google Search Central — Optimizing your website for generative AI features on Google Search</a></li>
        <li><a href="https://developers.google.com/search/docs/fundamentals/third-party-seo" target="_blank" rel="noopener noreferrer">Google Search Central — Guidance on third-party SEO tools and advice</a></li>
        <li><a href="https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/" target="_blank" rel="noopener noreferrer">Microsoft Bing — dashboard-ul AI Performance din Bing Webmaster Tools (februarie 2026) și Bing Webmaster Guidelines revizuite; analiză</a></li>
        <li><a href="https://arxiv.org/abs/2311.09735" target="_blank" rel="noopener noreferrer">Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD '24 (natura black-box a motoarelor generative, metrici de impresie pentru citări) (arXiv)</a> · <a href="https://dl.acm.org/doi/10.1145/3637528.3671900" target="_blank" rel="noopener noreferrer">ACM Digital Library</a></li>
        <li><a href="https://developers.openai.com/api/docs/bots" target="_blank" rel="noopener noreferrer">OpenAI — Overview of OpenAI Crawlers</a></li>
        <li><a href="https://support.anthropic.com/en/articles/8896518" target="_blank" rel="noopener noreferrer">Anthropic — Does Anthropic crawl data from the web?</a></li>
        <li><a href="https://docs.perplexity.ai/docs/resources/perplexity-crawlers" target="_blank" rel="noopener noreferrer">Perplexity — Perplexity Crawlers</a></li>
      </ul>

      <p>Categoriile de bază HIT / HIT parțial / COLIZIUNE / CONFABULARE / NULL și protocolul de sesiune curată sunt dezvoltate de AI Visibility Lab. Taxonomia operațională extinsă este definită în AVL-201 și este utilizată pentru execuție, audit și scorare. Pagina este actualizată pe măsură ce instrumentele oficiale de măsurare evoluează.</p>
`;
