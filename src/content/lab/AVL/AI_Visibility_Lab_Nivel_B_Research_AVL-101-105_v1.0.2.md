**AI VISIBILITY LAB**

Nivelul B — Research

AVL-101 · AVL-102 · AVL-103 · AVL-104 · AVL-105

*Corpus de cercetare conceptuală despre GEO, AEO și AI Visibility*

Autor: Alex Matescu\
AI Visibility Lab\
Versiunea corpusului: 1.0.2 · iulie 2026

# Cuprinsul corpusului

1.  **AVL-101 — Ce este GEO/AEO și AI Visibility**

2.  **AVL-102 — Cum aleg sistemele AI sursele și citările**

3.  **AVL-103 — SEO și GEO: relații, diferențe și suprapuneri**

4.  **AVL-104 — Cum se măsoară AI Visibility**

5.  **AVL-105 — Glosar GEO/AEO și AI Visibility**

# Cum se utilizează acest corpus

Nivelul B — Research conține documentele conceptuale ale AI Visibility
Lab. Ele definesc vocabularul de lucru, explică mecanismele public
documentate, delimitează relația dintre SEO și GEO și stabilesc cadrul
de măsurare. Documentele trebuie interpretate conform AVL-001 — AI
Visibility Lab Foundation: afirmațiile documentate, observațiile,
inferențele și ipotezele nu sunt echivalente, iar concluziile sunt
limitate la nivelul permis de dovezi.

Informațiile despre produse și platforme sunt dependente de timp.
Cititorul trebuie să verifice data ultimei actualizări și sursa oficială
înainte de a utiliza o afirmație tehnică într-o decizie importantă.

# AVL-101 — Ce este GEO/AEO și AI Visibility

| **Document ID**        | AVL-101           |
|------------------------|-------------------|
| **Nivel**              | B — Research      |
| **Versiune**           | 1.0.2             |
| **Statut**             | Activ             |
| **Autor**              | Alex Matescu      |
| **Organizație**        | AI Visibility Lab |
| **Data publicării**    | iulie 2026        |
| **Ultima actualizare** | 21 iulie 2026     |

## Definiție

GEO (Generative Engine Optimization) este disciplina prin care
conținutul unui site și prezența online a unei entități (persoană,
firmă, brand) sunt optimizate pentru a fi găsite, înțelese și citate de
motoarele generative de răspuns — ChatGPT, Google AI Overviews/AI Mode,
Perplexity, Claude, Microsoft Copilot. Spre deosebire de SEO clasic,
unde obiectivul este poziția în lista de rezultate, în GEO obiectivul
este prezența în răspunsul generat de AI: să fii sursa citată,
recomandarea numită, entitatea descrisă corect.

AEO (Answer Engine Optimization) este termenul-frate, folosit adesea
interșanjabil: optimizarea pentru „motoare de răspuns" — sisteme care nu
returnează linkuri, ci răspunsuri directe. În practica AI Visibility Lab
folosim AI Visibility ca termen-umbrelă: măsurarea și optimizarea
vizibilității unei entități în răspunsurile generate de AI, indiferent
de platformă.

## De unde vine termenul GEO?

Termenul a fost formalizat academic în lucrarea „GEO: Generative Engine
Optimization" (Aggarwal, Murahari, Rajpurohit, Kalyan, Narasimhan,
Deshpande), publicată la conferința ACM KDD 2024. Lucrarea definește
„motoarele generative" (Generative Engines) ca sisteme care combină
modele generative (LLM-uri) cu un motor de căutare: preiau întrebarea
utilizatorului, recuperează documente relevante și sintetizează un
răspuns cu citări. Autorii arată două lucruri esențiale:

Motoarele generative funcționează ca sisteme black-box — creatorii de
conținut nu controlează când și cum le este afișat conținutul, deci
vizibilitatea trebuie măsurată empiric, nu presupusă.

Strategiile cu impact real sunt cele care cresc calitatea intrinsecă și
credibilitatea conținutului (citarea surselor, statistici, claritate,
autoritate), nu repetiția mecanică de cuvinte-cheie.

### Surse: arXiv:2311.09735 · ACM Digital Library, DOI 10.1145/3637528.3671900

## Prin ce diferă GEO de SEO?

Răspunsul scurt: SEO rămâne fundația, dar unitatea de succes se schimbă
— de la „poziția în listă" la „citarea în răspuns".

Poziția oficială a Google merită citată exact pentru că temperează
hype-ul din piață: în ghidul său pentru funcțiile AI din Search, Google
afirmă că bunele practici SEO rămân relevante pentru AI Overviews și AI
Mode, că nu există cerințe suplimentare sau optimizări speciale pentru a
apărea în aceste funcții și că, din perspectiva Google, „optimizarea
pentru căutarea generativă este optimizarea pentru experiența de căutare
— deci tot SEO". (Google Search Central: AI Features and Your Website ·
Google's Guide to Optimizing for Generative AI Features)

În același timp, Microsoft a mers în direcția opusă ca terminologie: în
februarie 2026, Bing a rescris Webmaster Guidelines și a introdus GEO ca
noțiune oficială, tratând „grounding results and citations" (citările în
răspunsurile Copilot) ca rezultat de eligibilitate distinct de pozițiile
clasice, și documentând cum fiecare directivă meta (NOARCHIVE, NOCACHE,
NOSNIPPET) afectează separat răspunsurile AI. Este prima dată când un
motor major scrie GEO în politica oficială.

### Diferențele practice:

Un detaliu tehnic important din documentația Google: funcțiile AI
folosesc RAG (retrieval-augmented generation / grounding) pentru
acuratețe și prospețime, iar AI Mode și AI Overviews pot folosi tehnica
query fan-out — descompun întrebarea utilizatorului în mai multe căutări
pe subteme și surse, apoi asamblează răspunsul. Practic, o singură
întrebare a utilizatorului devine mai multe interogări interne;
conținutul tău concurează la nivelul fiecărei subteme, nu doar la
nivelul întrebării vizibile.

### Cine sunt „cititorii" AI ai site-ului tău: crawlerele

O consecință directă și des ignorată: motoarele AI au crawlere proprii,
separate de Googlebot, iar fiecare are alt rol. Dacă sunt blocate în
robots.txt sau de firewall, site-ul tău nu există pentru stratul AI —
indiferent cât de bun e SEO-ul clasic.

OpenAI operează crawlere distincte, controlabile independent din
robots.txt: GPTBot (colectare pentru antrenarea modelelor),
OAI-SearchBot (indexare pentru rezultatele de căutare din ChatGPT — nu
este folosit pentru antrenare) și ChatGPT-User (accesări declanșate de
utilizatori în conversație). Modificările din robots.txt se propagă în
~24 de ore. (Documentația oficială OpenAI)

Anthropic (Claude) documentează trei roboți cu funcții separate:
ClaudeBot (antrenare), Claude-SearchBot (indexare pentru calitatea
rezultatelor de căutare) și Claude-User (accesări la cererea
utilizatorului); blocarea fiecăruia are consecințe diferite asupra
vizibilității. (Documentația oficială Anthropic)

Perplexity folosește PerplexityBot pentru indexarea conținutului care
apare și este citat în rezultate — explicit nu pentru antrenarea
modelelor — și Perplexity-User pentru accesări declanșate de
utilizatori; publică listele oficiale de IP-uri pentru verificare.
(Documentația oficială Perplexity)

Google folosește Google-Extended ca token separat de control pentru
utilizarea conținutului în modelele Gemini, distinct de Googlebot-ul
clasic de căutare.

Concluzia pentru orice audit de AI Visibility: verificarea accesului
crawlerelor AI este pasul zero. Este una dintre cele mai frecvente
probleme găsite în practică — site-uri cu SEO decent care blochează,
adesea fără să știe (prin firewall, CDN sau setări implicite de CMS),
exact roboții care le-ar aduce citări.

## De ce contează acum?

## 1. Comportamentul de căutare se mută în răspunsuri. Google afirmă în propriul ghid că preferințele utilizatorilor evoluează rapid către experiențe generative de găsire a informației. Microsoft confirmă aceeași tendință din direcția opusă: în ghidurile Bing revizuite în 2026, avertizează că un declin al click-urilor nu mai înseamnă neapărat scădere de vizibilitate, pentru că expunerea conținutului migrează către citările din răspunsurile Copilot.

## 2. Furnizorii au oficializat disciplina. Google a publicat un ghid oficial de optimizare pentru funcțiile AI din Search. Bing a scris GEO în Webmaster Guidelines și a lansat, în februarie 2026, AI Performance în Bing Webmaster Tools — primul dashboard oficial al unui motor major care măsoară citările conținutului tău în răspunsurile Copilot, inclusiv „grounding queries" (micro-interogările interne generate din întrebarea utilizatorului). Măsurarea vizibilității AI nu mai e speculație; are KPI proprii.

## 3. Fereastra de oportunitate este asimetrică. Într-un răspuns AI încap 2–5 surse, nu 10 linkuri plus reclame. Cine devine sursa citată pentru un subiect ocupă o poziție mult mai greu de disputat decât o poziție SERP. Iar pentru piața românească, competiția pe conținut de calitate, structurat și citabil este încă foarte subțire — bariera de intrare este istoric de joasă, dar nu va rămâne așa.

## 4. Riscul nu este doar invizibilitatea, ci descrierea greșită. Un motor AI poate să te omită (NULL), să te confunde cu o entitate cu nume similar (coliziune de entitate) sau să inventeze detalii despre tine (confabulare). Fără măsurare, nu știi în care dintre aceste situații te afli.

Ce înseamnă asta pentru piața din România

### Trei particularități locale pe care le tratăm explicit în metodologia AI Visibility Lab:

Limba și interogările bilingve. Utilizatorii români întreabă AI-ul și în
română, și în engleză, iar terminologia consacrată rămâne în engleză
(„ce este GEO", nu „optimizare pentru motoare generative"). Conținutul
care performează trebuie să definească în română, dar să ancoreze
termenii tehnici în forma în care piața îi caută.

Deficitul de surse citabile în română. Pentru multe subiecte de nișă,
motoarele AI nu găsesc surse românești structurate și ajung să
sintetizeze din surse străine sau din agregatoare slabe. Asta produce
răspunsuri generice sau greșite despre piața locală — și, simultan, o
oportunitate: primele surse românești riguroase pe un subiect devin
implicit sursele citate.

Vizibilitatea în căutare și vizibilitatea AI sunt variabile
independente. Din măsurătorile noastre directe: o entitate poate fi
invizibilă în Google/Bing și totuși citată corect de ChatGPT — și
invers. De aceea un audit serios măsoară ambele straturi separat, cu
metodologie documentată. Acesta este fundamentul fazei noastre F0,
Tabula Rasa (pagină în curs de publicare).

## Întrebări frecvente

GEO înlocuiește SEO? Nu. Google afirmă explicit că funcțiile sale AI se
bazează pe aceleași sisteme de ranking și calitate din Search, deci
fundamentele SEO rămân condiție necesară. GEO extinde obiectivul: de la
a fi listat, la a fi citat și descris corect. Fără SEO tehnic solid, GEO
nu are pe ce să se sprijine.

Care e diferența dintre GEO, AEO și LLMO? În practică, denumiri
suprapuse pentru aceeași disciplină. GEO accentuează motoarele
generative (termen din lucrarea academică de la KDD 2024), AEO
accentuează „motoarele de răspuns", iar LLMO (Large Language Model
Optimization) accentuează modelele. Noi folosim AI Visibility ca
termen-umbrelă orientat pe rezultat: ești vizibil și corect reprezentat
în răspunsurile AI sau nu.

Se poate măsura vizibilitatea AI? Da, și trebuie. La nivel de platformă
au apărut primele instrumente oficiale (Bing AI Performance în Webmaster
Tools). La nivel de entitate, măsurarea se face prin rulări sistematice
de interogări pe mai multe motoare, în condiții controlate, cu rezultate
clasificate (citare corectă, citare parțială, coliziune de entitate,
confabulare, absență) și comparate în timp față de o linie de bază
documentată.

Cât durează până apar rezultate? Mai mult decât în PPC, comparabil sau
puțin mai repede decât în SEO clasic pe nișe necompetitive. Modificările
de acces pentru crawlere se propagă în ore–zile; schimbările de conținut
și de coroborare a entității se reflectă în răspunsurile AI de regulă în
săptămâni. De aceea metodologia corectă este: linie de bază →
intervenție → re-măsurare pe același set de interogări.

E suficient să „scriu pentru AI"? Nu există un truc de scriere care să
garanteze citarea. Cercetarea academică și ghidurile oficiale converg:
câștigă conținutul clar structurat, verificabil, cu surse citate,
publicat de o entitate consolidată și coroborată. Google avertizează
separat că generarea de pagini la scară, fără valoare adăugată, intră
sub politicile sale de spam (ghidul Google despre conținut generat cu
AI).

## Citește în continuare

Cum aleg motoarele AI ce citează (în curs de publicare)

### SEO vs. GEO: ce se păstrează, ce se schimbă (în curs de publicare)

Cum se măsoară vizibilitatea AI (în curs de publicare)

Tabula Rasa: metodologia F0 (în curs de publicare)

Glosar GEO/AEO/AI — definițiile tuturor termenilor folosiți în această
pagină

AI Visibility Lab — metodologia completă și studiile de caz

## Surse și documentație oficială

Google Search Central — AI Features and Your Website:
https://developers.google.com/search/docs/appearance/ai-features

Google Search Central — Google's Guide to Optimizing for Generative AI
Features on Google Search:
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google Search Central — Guidance on Generative AI Content:
https://developers.google.com/search/docs/fundamentals/using-gen-ai-content

OpenAI — Overview of OpenAI Crawlers (GPTBot, OAI-SearchBot,
ChatGPT-User): https://developers.openai.com/api/docs/bots

Anthropic — Does Anthropic crawl data from the web? (ClaudeBot,
Claude-SearchBot, Claude-User):
https://support.anthropic.com/en/articles/8896518

Perplexity — Perplexity Crawlers (PerplexityBot, Perplexity-User):
https://docs.perplexity.ai/docs/resources/perplexity-crawlers

Microsoft Bing — Bing Webmaster Guidelines (revizuite în februarie 2026
cu includerea GEO); analiză: Search Engine Journal,
https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/

Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD
'24: https://arxiv.org/abs/2311.09735 ·
https://dl.acm.org/doi/10.1145/3637528.3671900

Metodologia de măsurare folosită de AI Visibility Lab este documentată
public în paginile Tabula Rasa și „Cum se măsoară vizibilitatea AI".
Această pagină este actualizată pe măsură ce documentația oficială a
furnizorilor evoluează.

# AVL-102 — Cum aleg sistemele AI sursele și citările

| **Document ID**        | AVL-102           |
|------------------------|-------------------|
| **Nivel**              | B — Research      |
| **Versiune**           | 1.0.2             |
| **Statut**             | Activ             |
| **Autor**              | Alex Matescu      |
| **Organizație**        | AI Visibility Lab |
| **Data publicării**    | iulie 2026        |
| **Ultima actualizare** | 21 iulie 2026     |

Această pagină face parte din seria de teorie AI Visibility Lab. Dacă nu
ești familiarizat cu termenii de bază, începe cu Ce este GEO/AEO?.

## Răspunsul scurt

Un motor AI ajunge să te citeze doar dacă treci, în ordine, prin patru
filtre: (1) accesul — crawlerele AI pot citi conținutul tău; (2)
recuperarea — sistemul de retrieval îți selectează conținutul ca
relevant pentru interogare, prin mecanisme de tip RAG; (3) sinteza —
modelul folosește efectiv informația ta la construirea răspunsului; (4)
selecția citării — dintre sursele folosite, a ta este una dintre
puținele afișate. Fiecare filtru elimină candidați. Majoritatea
eșecurilor de vizibilitate AI se produc la filtrele 1 și 2 — adică
înainte ca vreun model să „decidă" ceva despre calitatea conținutului
tău.

### Filtrul 1: Accesul — poate AI-ul să te citească?

Nicio optimizare nu contează dacă acest filtru pică. Fiecare furnizor
major operează crawlere proprii, cu roluri separate și control
independent din robots.txt — inventarul complet, cu documentația
oficială a fiecăruia, e în pagina definițională. Aici contează mecanica
eșecurilor, pentru că accesul pică în trei moduri distincte:

## 1. Blocare explicită în robots.txt. Cea mai vizibilă, dar nu cea mai frecventă. Atenție la directivele moștenite: multe site-uri au blocat „tot ce e AI" în 2023–2024 și au uitat. OpenAI notează că modificările din robots.txt se propagă în sistemele sale în aproximativ 24 de ore (documentația OpenAI); Perplexity recomandă în documentația sa permiterea explicită a boților săi atât în robots.txt, cât și la nivel de WAF (documentația Perplexity).

## 2. Blocare tăcută prin firewall/CDN. Cazul insidios: robots.txt permite accesul, dar WAF-ul, protecția anti-bot a CDN-ului sau limitele de rată resping crawlerele AI cu erori 403/429. În log-uri arată ca trafic suspect respins; pentru motorul AI, site-ul tău pur și simplu nu răspunde. Perplexity publică ghiduri explicite de whitelisting pentru WAF-uri (Cloudflare, AWS) tocmai pentru că problema e răspândită, împreună cu listele oficiale de IP-uri pentru verificarea autenticității boților. Verificarea corectă se face în două direcții: user-agent și IP din listele publicate — altfel accepți și scraperi care se dau drept GPTBot.

## 3. Conținut invizibil la parsare. Crawlerul primește pagina, dar nu vede conținutul: text randat exclusiv prin JavaScript pe care crawlerul nu-l execută, conținut în imagini fără alternativă text, sau HTML atât de nestructurat încât extractorul nu poate izola blocurile relevante. Regula practică: conținutul care contează trebuie să existe în HTML-ul servit inițial, cu titluri, paragrafe, liste și tabele semantice. Google precizează că poate procesa JavaScript, dar recomandă explicit respectarea bunelor practici de JavaScript SEO — iar celelalte crawlere AI sunt, în general, mai puțin capabile decât Googlebot la randare.

Pentru funcțiile AI din Google Search există și o condiție formală
suplimentară: pagina trebuie să fie indexată și eligibilă pentru afișare
cu snippet în Google Search, iar site-ul trebuie să fie inclus în
funcțiile generative din setările Search Console (Google Search
Central). La Bing, directivele meta au efecte separate asupra
răspunsurilor Copilot: NOARCHIVE exclude conținutul din răspunsuri și
grounding, NOCACHE limitează Copilot la URL, titlu și snippet — deci o
directivă pusă cândva pentru motive de confidențialitate îți poate
amputa azi citările AI.

### Filtrul 2: Recuperarea — te alege sistemul de retrieval?

Aici se hotărăște cel mai mult și se înțelege cel mai puțin. Motoarele
generative nu „știu" web-ul; ele recuperează documente relevante la
momentul întrebării și le dau modelului ca material de lucru. Google
descrie explicit cele două mecanisme din propriile funcții AI (ghidul
oficial de optimizare pentru AI generativ):

RAG (retrieval-augmented generation / grounding). Sistemele de ranking
din Search recuperează pagini relevante și actuale din index, iar
modelul generează răspunsul pe baza informației din acele pagini, cu
linkuri către sursele care susțin afirmațiile. Consecința strategică:
poziția ta în sistemele clasice de retrieval rămâne poarta de intrare —
la Google prin indexul Search, la ChatGPT prin indexul OAI-SearchBot
(istoric sprijinit și pe Bing), la Perplexity prin indexul
PerplexityBot. De aceea SEO tehnic solid nu e opțional în GEO; e
infrastructura filtrului 2.

Query fan-out. Modelul descompune întrebarea utilizatorului în mai multe
interogări conexe, rulate concurent, ca să adune material pe subteme.
Exemplul din documentația Google: la întrebarea despre repararea unui
gazon plin de buruieni, sistemul poate genera intern căutări despre
erbicide, metode fără chimicale și prevenție. Consecința: concurezi la
nivelul subtemelor, nu al întrebării vizibile. O pagină care acoperă
complet și clar o subtemă poate fi recuperată pentru sute de
întrebări-mamă diferite. Același mecanism apare la Bing sub numele
„grounding queries" — micro-interogări interne, măsurabile din februarie
2026 în raportul AI Performance din Bing Webmaster Tools.

Important, tot din documentația Google: nu trebuie să creezi pagini
separate pentru fiecare variație de interogare sau pentru fiecare
fan-out query posibil — producția de pagini la scară pentru manipularea
răspunsurilor intră sub politica de spam pentru scaled content abuse.
Diferența dintre „acopăr complet subtemele subiectului meu" și „fabric o
pagină pentru fiecare permutare de cuvinte" este exact diferența dintre
GEO legitim și spam.

### Filtrul 3: Sinteza — folosește modelul informația ta?

Odată recuperat, conținutul tău concurează cu al celorlalte surse din
contextul modelului. Aici cercetarea academică oferă cele mai concrete
indicii despre ce înclină balanța:

Lucrarea fondatoare GEO (Aggarwal et al., KDD 2024) a testat sistematic
strategii de optimizare și a găsit că cele cu impact măsurabil asupra
vizibilității în răspunsuri sunt cele care cresc credibilitatea și
densitatea informațională a conținutului — citarea surselor, includerea
de statistici, citate de la surse relevante — în timp ce tacticile
mecanice de tip îndesare de cuvinte-cheie nu ajută (arXiv:2311.09735).

Studiul „What evidence do language models find convincing?" (Wan,
Wallace, Klein, ACL 2024) a analizat ce tip de dovezi consideră
convingătoare modelele de limbaj atunci când arbitrează între surse
contradictorii — o direcție de cercetare care confirmă că modelele au
preferințe sistematice și măsurabile; nuanța importantă a lucrării:
modelele actuale cântăresc în primul rând relevanța sursei față de
interogare, mai mult decât semnalele stilistice de credibilitate precum
referințele științifice — un argument suplimentar pentru acoperirea
completă a subtemelor, nu pentru cosmetizarea textului
(aclanthology.org/2024.acl-long.403).

Ghidul oficial Google formulează același principiu dinspre practică:
sistemele AI compară mai multe surse, deci se remarcă conținutul cu
punct de vedere propriu și experiență de primă mână — nu
„conținutul-marfă" care reambalează cunoștințe comune și pe care l-ar
putea produce oricine, inclusiv un model generativ.

Sinteza practică a filtrului 3: modelul preferă surse din care poate
extrage afirmații verificabile, atribuibile și specifice. Un paragraf
care spune ceva precis, cu cifre și sursă, e material de construcție
pentru un răspuns. Un paragraf de generalități e zgomot pe care modelul
îl are deja din antrenare și nu are motiv să-l citeze.

### Filtrul 4: Selecția citării — ești printre sursele afișate?

Ultimul filtru e cel mai strâmt: un răspuns afișează de regulă 2–5
citări, chiar dacă sistemul a consultat mai multe surse. Lucrarea GEO
arată de ce măsurarea e aici mai nuanțată decât în SERP-ul clasic:
citările apar încorporate în text, intercalate între ele, nu într-o
listă ordonată — deci „vizibilitatea" are componente multiple (ești
citat? cât de proeminent? pentru ce porțiune din răspuns?). Două
observații operaționale:

Citarea urmează atribuirea. Ești citat pentru blocul de conținut din
care s-a extras o afirmație folosită în răspuns, nu pentru „site" în
ansamblu. Ghidarea Microsoft pentru Bing/Copilot merge explicit în
această direcție: conținutul e evaluat pe blocuri autonome — unități
care răspund complet la o întrebare specifică, cu titluri descriptive,
nu vagi. De aici tiparul recomandat consecvent în tot clusterul nostru:
fiecare secțiune începe cu răspunsul, apoi dezvoltă.

Citarea are inerție de entitate. Când modelul trebuie să aleagă între
surse comparabile, semnalele de încredere la nivel de entitate (cine
publică, ce istoric de coroborare are, cât de neambiguu e identificată)
departajează. Ceea ce ne duce la stratul care leagă toate cele patru
filtre.

### Stratul transversal: entitatea

Filtrele 1–4 operează pe conținut; în paralel, motoarele AI construiesc
o reprezentare a entităților — cine ești, ce faci, cum te deosebești de
alții cu nume similar. Această reprezentare decide cum ești descris
atunci când ești menționat, și dace ești confundat sau confabulat.

Date structurate: rolul real, fără mit. Google e neobișnuit de direct în
ghidul său oficial: datele structurate nu sunt obligatorii pentru
funcțiile AI și nu există un markup schema.org special pentru AI — dar
rămân recomandate ca parte a strategiei SEO generale, pentru
eligibilitatea la rezultate îmbogățite (mythbusting-ul oficial Google).
Poziția noastră, aliniată cu documentația: JSON-LD nu e un buton magic
de citare, ci instrumentul de dezambiguizare a entității — Person,
Organization/ProfessionalService, @id stabile, sameAs către profilurile
externe. Pentru entități cu nume care intră în coliziune cu altele (caz
frecvent și documentat în măsurătorile noastre), acesta e mecanismul
principal prin care mașina afle care dintre entitățile omonime ești.
Documentație: Google — Understand how structured data works ·
schema.org.

Coroborarea distribuită. O entitate e considerată reală și demnă de
citare atunci când mai multe surse independente spun despre ea lucruri
consecvente: site propriu, profiluri profesionale, mențiuni în
publicații, registre. Atenție însă la granița trasată de Google:
căutarea de mențiuni neautentice e explicit descurajată — sistemele de
calitate și anti-spam se aplică și funcțiilor generative. Coroborarea
legitimă se construiește, nu se fabrică.

Consecvența semnalelor. Nume identic peste tot, aceeași descriere a
rolului, aceleași date de contact, biografii aliniate. Fiecare
inconsecvență e un punct în care reprezentarea entității se poate
bifurca — iar la bifurcație, modelele aleg varianta cu mai multă
autoritate acumulată, care s-ar putea să nu fii tu.

### Ce NU influențează citarea (mythbusting cu sursă)

Piața GEO vinde multe „hack-uri". Ghidul oficial Google le demontează pe
cele mai populare, iar noi le listăm ca atare, pentru igiena pieței
românești:

| **Mitul** | **Realitatea documentată** |
|----|----|
| „Ai nevoie de llms.txt" | Google Search declară explicit că nu folosește astfel de fișiere; crearea lor nici nu ajută, nici nu dăunează vizibilității în Google. Pot avea rost doar pentru alte sisteme care le citesc. |
| „Trebuie să «chunk-uiești» conținutul în bucăți mici pentru AI" | Nu există o cerință de fragmentare și nici o lungime ideală de pagină; sistemele înțeleg pagini cu mai multe subiecte. Structura clară ajută cititorii — și prin asta și extracția — dar nu e un format special „pentru AI". |
| „Rescrie textele special pentru AI, cu toate variațiile de long-tail" | Modelele înțeleg sinonime și sensuri generale; nu trebuie capturată fiecare formulare posibilă a unei căutări. |
| „Cumpără/plantează mențiuni peste tot" | Mențiunile neautentice sunt tratate de sistemele anti-spam; coroborarea contează doar când e reală. |
| „Există un schema.org secret pentru AI" | Nu există; datele structurate ajută la înțelegerea entității și la rich results, nu ca cerință specială AI. |

Sursa pentru toate cele de mai sus: Google — Optimizing for generative
AI search, secțiunea „Mythbusting".

Ce înseamnă asta pentru piața din România

Filtrul 1 este, empiric, problema numărul unu local. Multe site-uri
românești de IMM-uri rulează pe găzduiri cu protecții anti-bot agresive
setate implicit sau pe teme care blochează crawlerele AI fără știrea
proprietarului. Înainte de orice discuție despre conținut, auditul
trebuie să verifice log-urile și răspunsurile HTTP pentru GPTBot,
OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot și
Google-Extended.

Filtrul 2 favorizează, deocamdată, sursele în engleză. Pentru multe
subiecte, indexurile de retrieval au puține surse românești de calitate,
deci fan-out-ul aduce material străin, iar răspunsul despre piața locală
iese generic. Fereastra strategică: paginile românești care răspund
complet la subteme specifice pieței locale au concurență minimă la
recuperare.

Stratul de entitate e fragil pentru numele românești. Diacriticele,
variantele de transliterare și omonimia (nume de familie frecvente,
forme cu/fără diacritice tratate ca echivalente de modele) produc
coliziuni de entitate mult mai des decât în piețele anglofone. Măsurarea
coliziunilor e parte standard din faza noastră F0, Tabula Rasa.

## Întrebări frecvente

Dacă am SEO bun, sunt automat citat de AI? Nu. SEO bun te trece de
filtrele 1–2 la Google, dar filtrele 3–4 țin de extractibilitatea și
credibilitatea conținutului, iar celelalte motoare au propriile crawlere
și indexuri, care trebuie verificate separat. Invers e la fel de
adevărat: am măsurat entități invizibile în căutarea clasică, dar citate
corect de ChatGPT. Cele două straturi sunt variabile independente.

Pot plăti ca să fiu citat? Nu există citare plătită în răspunsurile
organice ale motoarelor majore. Există publicitate separată în unele
produse (ex. ChatGPT a introdus formate publicitare, cu crawler dedicat
de verificare a landing page-urilor), dar aceasta e marcată ca atare și
nu influențează citările organice.

Cât de repede se reflectă schimbările? Accesul (filtrul 1): ore–zile;
furnizorii indică ~24h pentru propagarea robots.txt. Recuperarea
(filtrul 2): zile–săptămâni, în ritmul de recrawl. Reprezentarea
entității: săptămâni–luni, pentru că cere coroborare din mai multe
surse. De aceea re-măsurarea (F3) se face pe același set de interogări,
la interval suficient.

Contează linkurile (backlinks) în GEO? Da, indirect dar substanțial: la
Google, retrieval-ul pentru RAG folosește sistemele de ranking din
Search, unde linkurile rămân semnal; la celelalte motoare, autoritatea
sursei influențează selecția citării. Ce s-a schimbat e că linkurile nu
mai sunt singura monedă — coroborarea entității și extractibilitatea
conținutului cântăresc alături de ele.

Fiecare motor AI funcționează la fel? Arhitectura generală (acces →
retrieval → sinteză → citare) e comună, dar implementările diferă:
indexuri proprii vs. parteneriate, agresivitatea fan-out-ului, numărul
de citări afișate, politica față de conținutul de tip YMYL. De aceea
măsurăm pe cinci motoare separat, nu pe unul singur extrapolat.

## Citește în continuare

Ce este GEO/AEO? Ghid complet de AI Visibility — pagina definițională a
seriei

### SEO vs. GEO: ce se păstrează, ce se schimbă (în curs de publicare)

Cum se măsoară vizibilitatea AI (în curs de publicare)

Tabula Rasa: metodologia F0 (în curs de publicare)

Glosar GEO/AEO/AI — RAG, grounding, query fan-out, coliziune de entitate
și restul termenilor din această pagină

AI Visibility Lab — metodologia completă

## Surse și documentație oficială

Google Search Central — Optimizing your website for generative AI
features on Google Search (RAG, query fan-out, cerințe tehnice,
mythbusting, raportul Generative AI din Search Console):
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google Search Central — AI Features and Your Website:
https://developers.google.com/search/docs/appearance/ai-features

Google Search Central — Spam policies (scaled content abuse):
https://developers.google.com/search/docs/essentials/spam-policies

Google Search Central — Understand how structured data works:
https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data

OpenAI — Overview of OpenAI Crawlers:
https://developers.openai.com/api/docs/bots

Anthropic — Does Anthropic crawl data from the web?:
https://support.anthropic.com/en/articles/8896518

Perplexity — Perplexity Crawlers (inclusiv ghiduri WAF și liste de
IP-uri): https://docs.perplexity.ai/docs/resources/perplexity-crawlers

Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD
'24: https://arxiv.org/abs/2311.09735 ·
https://dl.acm.org/doi/10.1145/3637528.3671900

Wan, A., Wallace, E., Klein, D. (2024) — What evidence do language
models find convincing?, ACL 2024:
https://aclanthology.org/2024.acl-long.403/

Microsoft Bing — Bing Webmaster Guidelines (revizuite februarie 2026:
GEO, grounding, directive meta pentru Copilot); analiză:
https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/

Pagina este actualizată pe măsură ce documentația oficială evoluează.
Metodologia de măsurare a celor patru filtre este documentată în
paginile Tabula Rasa și „Cum se măsoară vizibilitatea AI".

# AVL-103 — SEO și GEO: relații, diferențe și suprapuneri

| **Document ID**        | AVL-103           |
|------------------------|-------------------|
| **Nivel**              | B — Research      |
| **Versiune**           | 1.0.2             |
| **Statut**             | Activ             |
| **Autor**              | Alex Matescu      |
| **Organizație**        | AI Visibility Lab |
| **Data publicării**    | iulie 2026        |
| **Ultima actualizare** | 21 iulie 2026     |

Această pagină face parte din seria de teorie AI Visibility Lab și
presupune că știi SEO. Dacă vii din altă direcție, începe cu Ce este
GEO/AEO?; dacă vrei mecanica detaliată a citării, continuă cu Cum aleg
motoarele AI ce citează.

## Răspunsul scurt

SEO nu moare și nu e înlocuit; devine stratul de intrare. Tot ce știi
despre crawlare, indexare, calitate a conținutului și autoritate rămâne
condiție necesară — Google afirmă explicit că funcțiile sale AI sunt
înrădăcinate în aceleași sisteme de ranking și calitate din Search
(documentația oficială). Ce se schimbă sunt trei lucruri: unitatea de
succes (de la poziție și click la citare și reprezentare corectă),
suprafața de joc (de la un index dominant la mai multe motoare cu
crawlere și indexuri proprii) și modurile de eșec (apar eșecuri noi —
coliziunea de entitate și confabularea — care nu existau în SEO). Restul
acestei pagini e maparea practică: ce din competențele tale SEO se
transferă direct, ce își schimbă prioritatea și ce trebuie învățat de la
zero.

Cele două poziții oficiale (și de ce au dreptate amândouă)

### Piața pare să primească semnale contradictorii, dar ele se împacă:

Google: „e tot SEO". În ghidul său pentru AI generativ, Google tratează
AEO și GEO ca etichete pentru muncă ce rămâne, din perspectiva sa,
optimizare pentru experiența de căutare — deci SEO. Nu există cerințe
suplimentare, markup special sau fișiere speciale pentru AI Overviews și
AI Mode (Google Search Central).

Microsoft: „GEO e categorie oficială". În februarie 2026, Bing a rescris
Webmaster Guidelines introducând GEO ca noțiune numită, cu „grounding
results and citations" ca rezultat de eligibilitate distinct și cu
efecte documentate ale directivelor meta asupra răspunsurilor Copilot.

Împăcarea: Google descrie fundația (aceleași sisteme, aceleași bune
practici), Microsoft descrie noul strat de rezultat (citarea în
răspunsuri, cu KPI proprii). Ambele sunt adevărate simultan — și exact
așa trebuie să-ți structurezi practica: fundație SEO neschimbată, strat
nou de obiective, măsurare și audit deasupra ei. Detaliile ambelor
poziții, cu surse: pagina definițională.

### Ce se păstrează: capitalul tău SEO se transferă

### Maparea directă a competențelor:

| **Competența SEO** | **Rolul ei în GEO** | **Ce spune documentația** |
|----|----|----|
| **SEO tehnic** (crawlabilitate, indexare, canonicalizare, redirects) | Neschimbat ca importanță; e filtrul 1–2 din [mecanica citării](). La Google, eligibilitatea pentru funcțiile AI cere pagină indexată și eligibilă pentru snippet. | Google: cerințele tehnice Search se aplică integral funcțiilor AI ([sursa]()) |
| **Conținut de calitate / E-E-A-T** | Devine și mai discriminant: sistemele AI compară surse între ele, deci experiența de primă mână și punctul de vedere propriu departajează față de „conținutul-marfă". | Google: conținut unic, „people-first", non-commodity ([sursa]()) |
| **Structura semantică** (headinguri, liste, tabele, HTML curat) | Se transferă direct și crește în valoare: extractoarele AI izolează blocuri; Bing evaluează explicit conținutul pe blocuri autonome cu titluri descriptive. | Google: HTML semantic recomandat, fără obsesia validității perfecte ([sursa]()) |
| **Date structurate** (schema.org, JSON-LD) | Rol recalibrat: nu cerință AI, ci instrument de dezambiguizare a entității și eligibilitate rich results — capătă greutate nouă pentru entitățile cu risc de coliziune. | Google: nu există schema specială pentru AI; rămâne bună practică SEO ([sursa]()) |
| **Autoritate / linkuri** | Rămân semnal la retrieval (RAG-ul Google folosește sistemele de ranking din Search) și la departajarea între surse comparabile. | Vezi filtrele 2 și 4 din [mecanica citării]() |
| **JavaScript SEO** | Se transferă cu un plus de severitate: crawlerele AI non-Google randează în general mai slab decât Googlebot, deci conținutul critic trebuie să existe în HTML-ul inițial. | Google: bunele practici JS SEO rămân valabile ([sursa]()) |
| **Igiena anti-spam** | Identică: politicile de spam (inclusiv scaled content abuse) se aplică explicit și funcțiilor generative. | Google: [spam policies]() |

Concluzia tabelului: un SEO bun are deja 60–70% din meseria de GEO.
Diferența nu e o disciplină paralelă, ci un strat de obiective, audituri
și măsurare construit peste ce știi.

### Ce se schimbă: recalibrări de prioritate

### Aici e miezul tranziției — aceleași activități, greutăți diferite:

## 1. De la cuvinte-cheie la subteme. Mecanismul de query fan-out (modelul descompune întrebarea în interogări interne pe subteme — detalii și sursă) mută competiția la nivelul subtemelor. Cercetarea de cuvinte-cheie devine cercetare de acoperire tematică: nu „pe ce fraze pot ranka", ci „ce subîntrebări ale subiectului meu pot acoperi complet și mai bine decât oricine". Atenție la capcana opusă, semnalată chiar de Google: o pagină pentru fiecare variație de interogare înseamnă scaled content abuse, nu acoperire.

## 2. De la pagină la bloc. În SERP concurează pagina; în răspunsul AI concurează blocul extractibil — secțiunea care răspunde complet la o întrebare specifică, cu titlu descriptiv și cu răspunsul în primele propoziții. Asta nu contrazice mythbusting-ul Google despre „chunking" (nu există cerință de fragmentare artificială): diferența e între a sparge conținutul în bucăți pentru mașini și a structura fiecare secțiune ca răspuns complet pentru oameni. A doua e bună practică veche de featured snippets, acum cu miză mărită.

## 3. De la un index la cinci. În SEO românesc, „motorul" înseamnă practic Google. În GEO, suprafața minimă de lucru e ChatGPT, Google (AI Overviews/AI Mode), Perplexity, Claude și Copilot — fiecare cu crawlere, indexuri și comportamente de citare proprii (inventarul complet cu documentația fiecăruia). Consecința de audit: verificarea accesului nu se mai termină la Googlebot.

## 4. De la CTR la citare — și la o relație nouă cu traficul. Microsoft notează explicit în contextul noilor sale ghiduri că o scădere a click-urilor nu mai înseamnă automat scădere de vizibilitate: conținutul poate apărea acum drept citare sau referință de grounding în Copilot, iar recomandarea e urmărirea impresiilor și a eligibilității pentru citare, nu doar a click-urilor. Pentru rapoartele către clienți, asta schimbă fundamental narativul: vizibilitatea și traficul se decuplează parțial, iar cine raportează doar sesiuni organice va „vedea" declin acolo unde e de fapt migrare a expunerii.

## 5. De la Search Console la un peisaj de măsurare fragmentat. Instrumentele oficiale abia apar: Google a adăugat raportul de performanță pentru funcțiile AI generative în Search Console (documentația), iar Bing a lansat în februarie 2026 dashboard-ul AI Performance în Webmaster Tools, cu citări Copilot și grounding queries. Pentru restul motoarelor, măsurarea rămâne artizanală: rulări sistematice de interogări în condiții controlate, clasificare a rezultatelor, comparație față de o linie de bază — exact golul metodologic pe care îl acoperă Tabula Rasa. Avertismentul oficial Google merită reținut la achiziția de tool-uri: niciun instrument terț nu are acces la sistemele interne de ranking sau AI, deci promisiunile de „metrici interne" sunt semnal de alarmă (ghidul Google despre consultanța terță).

## 6. Entitatea devine cetățean de rang întâi. În SEO, entitatea era un subiect avansat, opțional pentru multe proiecte. În GEO e centrală, pentru că apar moduri de eșec fără echivalent în SERP: poți fi confundat cu o entitate omonimă (coliziune) sau descris cu detalii inventate (confabulare). Niciun raport de poziții nu prinde aceste eșecuri; doar măsurarea directă a răspunsurilor le vede. Mecanica stratului de entitate: filtrul transversal.

### Ce e complet nou: audituri care nu existau în SEO

### Lista scurtă de livrabile noi pe care un practician SEO trebuie să le adauge în repertoriu:

Auditul de acces al crawlerelor AI — robots.txt pentru GPTBot,
OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot,
Google-Extended (acesta din urmă fiind un token de control în
robots.txt, nu un crawler propriu-zis), plus verificarea blocărilor
tăcute din WAF/CDN (403/429 în log-uri) și a directivelor meta cu efect
asupra AI (NOARCHIVE/NOCACHE la Bing/Copilot).

Linia de bază a citărilor — set înghețat de interogări rulat pe cele
cinci motoare în condiții controlate, cu rezultate clasificate (citare
corectă / parțială / coliziune / confabulare / absență) și dovezi
datate. Fără before, orice after e marketing, nu măsurare.

Auditul de coliziune a entității — cine altcineva „răspunde" la numele
clientului în răspunsurile AI, ce entitate domină clusterul de omonimie
și ce semnale de dezambiguizare lipsesc (JSON-LD cu @id stabile, sameAs,
consecvența numelui).

Monitorizarea traficului referral AI — segmentarea în analytics a
surselor de tip chatgpt.com, perplexity.ai, copilot, gemini, ca linie
separată de raportare.

Re-măsurarea pe set înghețat — repetarea liniei de bază după
intervenții, pe aceleași interogări, pentru atribuire onestă a
schimbării.

Punctele 2, 3 și 5 sunt exact fazele F0 și F3 din metodologia AI
Visibility Lab — documentate public, cu instrumentar reproductibil, în
Tabula Rasa și Cum se măsoară vizibilitatea AI.

Ce să nu mai faci: anti-tiparele tranziției

Pentru echilibru, și lista scurtă a obiceiurilor SEO care nu se
transferă sau devin dăunătoare:

Raportarea exclusiv pe poziții și sesiuni — orbește clientul față de
stratul unde se mută expunerea (vezi punctul 4 de mai sus).

Producția de pagini pentru fiecare variație long-tail — modelele înțeleg
sinonime și intenții; la scară, practica intră sub politica de spam
(mythbusting-ul Google, cu toate cele cinci mituri demontate).

Vânzarea de „hack-uri AI" (llms.txt pentru Google, chunking obligatoriu,
schema secretă, mențiuni fabricate) — toate demontate de documentația
oficială; pe termen mediu, distrug credibilitatea celui care le vinde.

Extrapolarea de la Google la toate motoarele — comportamentele de citare
diferă; ce e adevărat pentru AI Overviews nu e automat adevărat pentru
Perplexity sau Claude.

Ce înseamnă asta pentru piața din România

Peisajul local tratează aproape uniform GEO ca extensie comercială a
pachetelor SEO existente — un rând nou în ofertă, rar o metodologie
distinctă cu măsurare publică. Asta creează două realități pentru cine
știe SEO:

Pentru practicieni: avantaj competitiv accesibil. Competențele de
transfer le ai; ce lipsește pieței sunt auditurile noi (accesul
crawlerelor AI, linia de bază a citărilor, coliziunile de entitate) și
disciplina de măsurare before/after. Cine le adaugă primul într-o piață
care vinde GEO fără măsurare se diferențiază structural, nu cosmetic.

Pentru clienți care evaluează oferte: întrebările de verificare sunt
simple. Cere metodologia de măsurare publicată, setul de interogări,
dovada before/after pe motoare multiple. O ofertă GEO fără linie de bază
măsurată e o ofertă SEO redenumită — ceea ce Google, de altfel, ar
considera o descriere onestă; problema nu e eticheta, ci absența
măsurării.

## Întrebări frecvente

Deci SEO moare sau nu? Nu moare; își pierde monopolul asupra
rezultatului. Rămâne infrastructura obligatorie a vizibilității (Google
își construiește funcțiile AI pe sistemele Search), dar rezultatul final
urmărit se extinde de la poziție+click la citare+reprezentare corectă.
Cine face doar SEO clasic optimizează pentru o parte din suprafața de
expunere.

E GEO doar SEO rebranduit? Fundația da, stratul de sus nu. Dacă „GEO"
dintr-o ofertă înseamnă doar aceleași livrabile SEO cu alt nume — atunci
da, e rebranding, iar scepticismul e justificat. Dacă include auditurile
noi (acces crawlere AI, linie de bază a citărilor, entitate) și măsurare
pe motoare multiple, e un strat real de muncă ce nu exista în SEO.

Trebuie să învăț tool-uri noi? Parțial. Instrumentele oficiale noi sunt
două și gratuite: raportul Generative AI din Search Console și AI
Performance din Bing Webmaster Tools. Piața de tool-uri terțe de
monitorizare crește rapid, dar reține avertismentul Google: nimeni nu
are acces la metrici interne, deci evaluează-le strict după utilitatea
fluxului de lucru, nu după promisiuni.

Cum explic clientului că traficul scade dar vizibilitatea crește? Cu
date pe două straturi: impresii și citări (Search Console AI, Bing AI
Performance, linia de bază pe motoare) lângă sesiuni organice. Chiar
Microsoft avertizează că declinul de click-uri nu mai echivalează cu
declin de vizibilitate, conținutul putând apărea ca citare în Copilot.
Raportarea corectă separă expunerea (unde apari) de trafic (cine ajunge
la tine) și urmărește ambele.

Cu ce încep, concret, luni dimineață? Cu filtrul 1: verifică robots.txt
și log-urile pentru cele șase crawlere AI, apoi directivele meta cu
efect asupra Copilot. E auditul cu cel mai bun raport efort/impact,
pentru că un singur Disallow moștenit sau o regulă de WAF anulează tot
restul muncii. Pașii următori, în ordine: linia de bază a citărilor,
apoi entitatea.

## Citește în continuare

Ce este GEO/AEO? Ghid complet de AI Visibility — definiții, origine
academică, pozițiile oficiale complete

Cum aleg motoarele AI ce citează — cele patru filtre și stratul de
entitate, cu mecanica detaliată

Cum se măsoară vizibilitatea AI (în curs de publicare)

Tabula Rasa: metodologia F0 (în curs de publicare)

Glosar GEO/AEO/AI — toți termenii folosiți în această pagină

AI Visibility Lab — metodologia completă și studiile de caz

## Surse și documentație oficială

Google Search Central — Optimizing your website for generative AI
features on Google Search (poziția „e tot SEO", cerințe tehnice,
mythbusting, avertismentul despre tool-uri terțe):
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google Search Central — Creating helpful, reliable, people-first
content:
https://developers.google.com/search/docs/fundamentals/creating-helpful-content

Google Search Central — Guidance on third-party SEO tools and advice:
https://developers.google.com/search/docs/fundamentals/third-party-seo

Google Search Central — Spam policies:
https://developers.google.com/search/docs/essentials/spam-policies

Google Search Console — Generative AI performance report:
https://support.google.com/webmasters/answer/16984139

Microsoft Bing — Bing Webmaster Guidelines (revizuite februarie 2026:
GEO ca noțiune oficială, directive meta pentru Copilot, recomandarea de
urmărire a citărilor în locul click-urilor); analiză:
https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/

OpenAI — Overview of OpenAI Crawlers:
https://developers.openai.com/api/docs/bots

Anthropic — Does Anthropic crawl data from the web?:
https://support.anthropic.com/en/articles/8896518

Perplexity — Perplexity Crawlers:
https://docs.perplexity.ai/docs/resources/perplexity-crawlers

Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD
'24: https://arxiv.org/abs/2311.09735

Pagina este actualizată pe măsură ce documentația oficială evoluează.

# AVL-104 — Cum se măsoară AI Visibility

| **Document ID**        | AVL-104           |
|------------------------|-------------------|
| **Nivel**              | B — Research      |
| **Versiune**           | 1.0.1             |
| **Statut**             | Activ             |
| **Autor**              | Alex Matescu      |
| **Organizație**        | AI Visibility Lab |
| **Data publicării**    | iulie 2026        |
| **Ultima actualizare** | 21 iulie 2026     |

Această pagină face parte din seria de teorie AI Visibility Lab. Context
recomandat: Ce este GEO/AEO? pentru definiții și Cum aleg motoarele AI
ce citează pentru mecanica citării.

## Răspunsul scurt

A măsura vizibilitatea AI înseamnă a documenta sistematic dacă, unde și
cât de corect apare o entitate în răspunsurile motoarelor generative —
înainte de orice intervenție, apoi din nou după. Măsurarea se face pe
două straturi complementare: stratul de platformă (rapoartele oficiale
ale motoarelor, care numără impresii pe propriile funcții AI) și stratul
de entitate (rulări controlate de interogări pe mai multe motoare, cu
rezultate clasificate într-o taxonomie fixă și comparate față de o linie
de bază). Principiul de lucru e cel mai vechi din management: nu poți
optimiza ce nu măsori — iar în GEO, unde sistemele sunt black-box și
rezultatele nedeterministe, măsurarea disciplinată nu e un moft
metodologic, ci singura diferență verificabilă dintre optimizare și
marketing.

### De ce măsurarea e problema centrală a GEO

### Trei realități structurale fac din măsurare miezul disciplinei, nu un accesoriu:

## 1. Sistemele sunt black-box. Lucrarea fondatoare a domeniului formulează exact această problemă: creatorii de conținut nu controlează și nu pot inspecta modul în care motoarele generative le folosesc și le afișează conținutul, deci vizibilitatea trebuie stabilită empiric, din exterior, prin observarea răspunsurilor (GEO: Generative Engine Optimization, KDD 2024). Aceeași lucrare arată că măsurarea citărilor cere metrici mai fini decât „apare/nu apare": citările sunt încorporate în text și intercalate, deci contează și proeminența, nu doar prezența.

## 2. Vizibilitatea s-a decuplat de trafic. Microsoft avertizează explicit, în contextul noilor ghiduri Bing, că scăderea click-urilor nu mai înseamnă automat scădere de vizibilitate — conținutul poate apărea drept citare în răspunsurile Copilot fără click asociat. Analytics-ul clasic nu vede acest strat; doar măsurarea directă a răspunsurilor îl vede.

## 3. Modurile de eșec noi sunt invizibile în orice raport clasic. Poziții bune în SERP și trafic stabil pot coexista cu o entitate pe care motoarele AI o confundă cu alta omonimă sau o descriu cu detalii inventate. Niciun instrument SEO nu semnalează asta. Am documentat pe propriile măsurători și situația inversă: entitate absentă din rezultatele Google/Bing, dar citată corect de ChatGPT — cele două straturi sunt variabile independente și trebuie măsurate separat.

### Stratul 1: instrumentele oficiale de platformă (și limitele lor)

Din 2026, măsurarea are, în premieră, instrumente oficiale — un pas
uriaș față de perioada în care totul era speculație:

Google Search Console — raportul Generative AI performance. Arată
impresiile site-ului în AI Overviews și AI Mode, cu dimensiuni pe
pagini, țări, date și dispozitive; Google îl lansează gradual, către un
subset de proprietăți, iar eligibilitatea presupune includerea site-ului
în funcțiile generative din Search Console (documentația oficială).

Bing Webmaster Tools — dashboard-ul AI Performance. Lansat în februarie
2026; arată cum apare conținutul în răspunsurile Copilot, inclusiv la
nivelul „grounding queries" — micro-interogările interne generate din
întrebarea utilizatorului.

Ambele merită activate din prima zi — sunt gratuite și oficiale. Dar
limitele lor definesc exact golul pe care îl acoperă stratul 2:

| **Ce măsoară instrumentele oficiale** | **Ce NU măsoară** |
|----|----|
| Impresii/citări pe **propria platformă** (Google, respectiv Bing) | Celelalte motoare: ChatGPT, Perplexity, Claude — fără echivalent oficial |
| **Cantitatea** expunerii (câte impresii, pe ce pagini) | **Calitatea** reprezentării: ești descris corect? confundat? confabulat? |
| Performanța **paginilor** | Starea **entității**: ce spune efectiv motorul despre tine când ești subiectul întrebării |
| Prezentul (serii de timp de la activare) | **Linia de bază pre-intervenție** pe motoare multiple, comparabilă în timp |

La acestea se adaugă avertismentul oficial Google privind piața de
tool-uri terțe: niciun instrument extern nu are acces la sistemele
interne de ranking sau AI, deci promisiunile contrare sunt semnal de
alarmă (ghidul Google). Tool-urile terțe de monitorizare pot fi utile ca
automatizare a fluxului de lucru — dar nu înlocuiesc metodologia; o
execută cel mult.

### Stratul 2: măsurarea la nivel de entitate — metodologia

Aceasta e metodologia pe care o folosim și o publicăm integral, tocmai
pentru ca oricine să o poată verifica sau reproduce. Are patru
componente: setul de interogări, protocolul de rulare, taxonomia
rezultatelor și standardul de dovezi.

## 1. Setul de interogări (query set)

Un eșantion fix de întrebări formulate așa cum le-ar pune utilizatorii
reali, construit pe trei niveluri de intenție:

Interogări de identitate — „cine este \[nume\]?", variații cu/fără
context. Măsoară recunoașterea entității și riscul de coliziune.

Interogări de rol — „\[nume\] + domeniu/serviciu". Măsoară asocierea
entității cu activitatea sa.

Interogări de recomandare — „ce specialist în \[domeniu\] recomanzi în
\[oraș\]?". Măsoară prezența în răspunsurile care aduc efectiv clienți —
cele mai valoroase comercial și cele mai greu de câștigat.

Două reguli fac setul valid științific. Regula înghețării: setul se
fixează la prima măsurare (F0) și nu se modifică până la re-măsurare
(F3) — altfel comparația before/after e compromisă; interogări noi se
pot adăuga oricând, dar se raportează separat, ca serie nouă. Regula
bilingvismului: pentru piața românească, setul include formulări în
română și în engleză, pentru că utilizatorii reali folosesc ambele, iar
comportamentul motoarelor diferă între limbi.

## 2. Protocolul de rulare: condiții controlate

Răspunsurile AI sunt influențate de istoricul contului, personalizare și
locație — deci fără condiții controlate, măsurătoarea e contaminată.
Protocolul de sesiune curată:

Fără istoric și fără personalizare: mod incognito, funcțiile de memorie
dezactivate, conversații temporare acolo unde platforma le oferă.

Geolocație reală, fără VPN: locația e o variabilă măsurată, nu un zgomot
de ascuns — răspunsurile pentru un utilizator din România sunt exact
obiectul studiului.

Configurație de instrument documentată pre-rulare: motor, versiune/mod,
limbă, dată — notate înainte de fiecare rulare, ca orice instrument de
măsură calibrat.

Cadență sustenabilă: rulările se distribuie în timp (un motor pe zi e un
ritm realist pentru un operator solo), cu data consemnată per rulare —
pentru că și data e o variabilă: modelele se actualizează.

Suprafața de măsurare standard: cinci motoare — ChatGPT, Google (AI
Overviews/AI Mode), Perplexity, Claude, Copilot — pentru că extrapolarea
de la unul singur e una dintre erorile documentate ale tranziției de la
SEO.

## 3. Categoriile de bază ale rezultatelor: HIT / HIT parțial / COLIZIUNE / CONFABULARE / NULL

Pentru explicarea generală a măsurării, fiecare rulare poate fi grupată
într-una dintre cinci categorii de bază — HIT, HIT parțial, COLIZIUNE,
CONFABULARE și NULL. Implementarea operațională folosește taxonomia
extinsă și codurile definite în AVL-201 — Tabula Rasa F0: Baseline
Measurement Specification, care detaliază inclusiv HIT-C, MENȚIUNE,
SURSĂ GREȘITĂ, FAPT ÎNVECHIT și REFUZ / LIMITARE.

De ce cinci categorii de bază și nu doar două (apare/nu apare)? Pentru
că fiecare categorie indică un mod de eșec diferit: NULL se tratează
prin construcția prezenței și verificarea accesului; COLIZIUNEA prin
dezambiguizare; CONFABULAREA prin publicarea și coroborarea unor surse
autoritative; iar HIT parțial prin actualizare și consolidare. Taxonomia
extinsă din AVL-201 păstrează aceste familii de diagnostic, dar oferă
coduri mai precise pentru execuție, audit și scorare.

Din clasificări derivă metricile agregate: rata de HIT per motor și per
tip de interogare, rata de coliziune, distribuția pe categoriile de bază
și, în implementarea conformă AVL-201, distribuția pe codurile
taxonomiei extinse. Se adaugă analiza surselor citate: ce site-uri
folosesc motoarele când răspund despre domeniul analizat și unde trebuie
consolidată prezența entității.

## 4. Standardul de dovezi

Fără dovezi, măsurarea e o afirmație. Standardul minim: captură de ecran
datată pentru fiecare rulare, notarea manuală a surselor citate în
răspuns, convenție de denumire consecventă a fișierelor
(motor_interogare_rulare_dată), și un instantaneu reproductibil al
întregii linii de bază — pachetul complet (set de interogări,
configurații, clasificări, capturi) arhivat la data măsurării. Acesta e
artefactul care face posibilă propoziția cu care se judecă orice
serviciu de optimizare: „iată starea din \[data F0\], iată starea din
\[data F3\], iată ce s-a schimbat".

### De la măsurare la optimizare: bucla completă

Măsurarea nu e un scop în sine; e capătul și începutul buclei de
optimizare. În metodologia AI Visibility Lab, bucla are patru faze: F0 —
linia de bază (tot ce descrie această pagină, executat înainte de orice
intervenție; faza poartă numele Tabula Rasa), F1 — casa entității (sursa
canonică: site, date structurate, dezambiguizare), F2 — prezența
distribuită (coroborarea din surse independente), F3 — re-măsurarea
(același set înghețat, același protocol, aceleași metrici — atribuire
onestă a schimbării). Detaliile fiecărei faze: pagina metodologiei.

### Limitele metodei, spuse onest

### O metodologie credibilă își declară limitele; iată-le pe ale noastre:

Nedeterminismul. Același motor poate da răspunsuri diferite la aceeași
interogare, în rulări succesive. De aceea măsurăm cu rulări repetate per
interogare, raportăm rate, nu verdicte din rulare unică, și interpretăm
direcția schimbării între F0 și F3, nu zecimalele unui procent.

Actualizările de modele. Între F0 și F3, motoarele își schimbă modelele
și indexurile — o variabilă necontrolabilă. O atenuăm consemnând
configurația la fiecare rulare și interpretând prudent schimbările care
coincid cu actualizări majore anunțate public.

Eșantionul finit. Un set de interogări e un eșantion, nu recensământul
tuturor întrebărilor posibile. Setul bun acoperă cele trei niveluri de
intenție și e construit înainte de a vedea rezultatele — nu selectat
ulterior ca să arate bine.

Observatorul plătit. Când măsurarea și optimizarea sunt făcute de
același furnizor, există un conflict de interese structural. Răspunsul
nostru e publicarea integrală a metodologiei și a dovezilor: orice terț
poate rula același set, cu același protocol, și verifica. Transparența
nu elimină conflictul; îl face verificabil.

Ce înseamnă asta pentru piața din România

Standardul de piață local e, deocamdată, zero măsurare publicată.
Ofertele GEO românești nu publică metodologii de măsurare, seturi de
interogări sau date before/after — ceea ce face imposibilă verificarea
oricărei promisiuni. Pentru cumpărători, testul e simplu și l-am
formulat în ghidul de tranziție: cere linia de bază. Limba dublează
munca de măsurare — seturile trebuie rulate în română și engleză, pentru
că răspunsurile diferă substanțial între limbi la aceleași întrebări.
Geolocația României e parte din măsurătoare, nu de ocolit cu VPN:
clientul tău real întreabă din România, deci și măsurătoarea ta trebuie
să întrebe de acolo. Iar coliziunile de nume sunt endemice pentru
entitățile românești (omonimie frecventă, diacritice normalizate
silențios de modele) — motiv pentru care taxonomia noastră le tratează
ca categorie de rang întâi, nu ca notă de subsol.

## Întrebări frecvente

De ce manual și nu cu un tool automat? Nu e „manual vs. automat", ci
„metodologie vs. instrument". Tool-urile de monitorizare pot automatiza
rulările, dar clasificarea COLIZIUNE/CONFABULARE cere judecată asupra
identității entității, iar validitatea cere protocol de condiții
controlate — ambele independente de unealtă. Plus avertismentul oficial
Google: evaluează tool-urile după utilitate, nu după pretenții de acces
la metrici interne.

Câte interogări și câte rulări sunt suficiente? Pentru o entitate
individuală, un set de 10–20 de interogări pe trei niveluri de intenție,
rulat pe cinci motoare, cu rulări repetate, produce o linie de bază
informativă — ordinea de mărime folosită și în studiile noastre. Mai
important decât volumul e disciplina: set înghețat, condiții controlate,
dovezi datate.

Cât de des se re-măsoară? Intervalul minim rezonabil între F0 și F3 e de
ordinul săptămânilor–lunilor, pentru că intervențiile (conținut,
coroborare) au nevoie de timp să fie crawl-uite și absorbite.
Re-măsurarea prea devreme măsoară zgomot; prea târziu, amestecă efectul
intervențiilor cu deriva modelelor.

Rezultatele variază între rulări — mai e validă măsurarea? Da, cu
condiția să fie proiectată pentru variabilitate: rulări repetate,
raportare pe rate, interpretare pe direcția schimbării. E aceeași logică
prin care sondajele rămân valide deși răspunsurile individuale variază.
Ce nu e valid: concluzii din rulări unice sau compararea unor rulări
făcute în condiții diferite.

Pot să-mi fac singur linia de bază? Da — metodologia e publicată tocmai
pentru asta, iar pentru o primă evaluare e un exercițiu excelent: alege
10 interogări, rulează-le în sesiuni curate pe cele cinci motoare,
clasifică rezultatele cu taxonomia de mai sus și păstrează capturile
datate. Vei ști în câteva ore lucruri despre entitatea ta pe care niciun
raport SEO nu ți le arată.

## Citește în continuare

Tabula Rasa: metodologia F0 (în curs de publicare) — faza de linie de
bază, pas cu pas

Ce este GEO/AEO? Ghid complet de AI Visibility — definiții și context

Cum aleg motoarele AI ce citează — cele patru filtre pe care măsurarea
le diagnostichează

### SEO vs. GEO: ce se păstrează, ce se schimbă — pentru cine vine din SEO

Glosar GEO/AEO/AI — HIT, coliziune de entitate, confabulare și restul
termenilor

AI Visibility Lab — metodologia completă F0–F3 și studiile de caz

## Surse și documentație oficială

Google Search Console — Generative AI performance report (Search)
(impresii AI Overviews/AI Mode, dimensiuni, lansare graduală):
https://support.google.com/webmasters/answer/16984139

Google Search Central — Optimizing your website for generative AI
features on Google Search:
https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google Search Central — Guidance on third-party SEO tools and advice:
https://developers.google.com/search/docs/fundamentals/third-party-seo

Microsoft Bing — dashboard-ul AI Performance din Bing Webmaster Tools
(februarie 2026) și Bing Webmaster Guidelines revizuite; analiză:
https://www.searchenginejournal.com/bing-adds-geo-to-official-guidelines-expands-ai-abuse-definitions/568442/

Aggarwal, P. et al. (2024) — GEO: Generative Engine Optimization, KDD
'24 (natura black-box a motoarelor generative, metrici de impresie
pentru citări): https://arxiv.org/abs/2311.09735 ·
https://dl.acm.org/doi/10.1145/3637528.3671900

OpenAI — Overview of OpenAI Crawlers:
https://developers.openai.com/api/docs/bots

Anthropic — Does Anthropic crawl data from the web?:
https://support.anthropic.com/en/articles/8896518

Perplexity — Perplexity Crawlers:
https://docs.perplexity.ai/docs/resources/perplexity-crawlers

Categoriile de bază HIT / HIT parțial / COLIZIUNE / CONFABULARE / NULL
și protocolul de sesiune curată sunt dezvoltate de AI Visibility Lab.
Taxonomia operațională extinsă este definită în AVL-201 și este
utilizată pentru execuție, audit și scorare. Pagina este actualizată pe
măsură ce instrumentele oficiale de măsurare evoluează.

# AVL-105 — Glosar GEO/AEO și AI Visibility

| **Document ID**        | AVL-105           |
|------------------------|-------------------|
| **Nivel**              | B — Research      |
| **Versiune**           | 1.0.1             |
| **Statut**             | Activ             |
| **Autor**              | Alex Matescu      |
| **Organizație**        | AI Visibility Lab |
| **Data publicării**    | iulie 2026        |
| **Ultima actualizare** | 21 iulie 2026     |

## Scopul glosarului

Acest document stabilește vocabularul operațional folosit în AI
Visibility Lab. Definițiile sunt formulate pentru cercetarea și
măsurarea vizibilității în sisteme AI; ele nu înlocuiesc definițiile
oficiale ale furnizorilor, standardelor sau literaturii academice.
Atunci când un termen are mai multe sensuri în industrie, glosarul
precizează sensul adoptat în corpus.

## AEO — Answer Engine Optimization

Practici prin care informația este făcută mai ușor de găsit, înțeles și
utilizat de sisteme care răspund direct la întrebări. În corpus, AEO
este tratat ca termen înrudit cu GEO, nu ca disciplină complet separată.

## AI agent

Sistem software bazat pe modele AI care poate planifica și executa
acțiuni folosind instrumente, date și servicii externe. Vizibilitatea
pentru agenți poate implica nu doar citirea conținutului, ci și
posibilitatea de a interacționa cu funcții sau date.

## AI Mode

Experiență generativă din Google Search destinată întrebărilor complexe,
comparațiilor și explorării, care poate utiliza query fan-out și poate
afișa linkuri către surse de sprijin.

## AI Overview

Rezumat generativ afișat de Google Search pentru anumite interogări,
împreună cu linkuri către pagini considerate relevante.

## AI Visibility

Gradul în care o entitate sau sursă este găsită, identificată corect,
descrisă, recomandată ori citată în răspunsurile sistemelor AI. Este
termenul-umbrelă folosit de AI Visibility Lab.

## Apariție

Prezența numelui, mărcii sau sursei într-un răspuns AI, indiferent dacă
există o citare sau un link.

## Autoritate

Calitate atribuită unei surse sau entități pe baza expertizei,
reputației, recunoașterii și coerenței informației. În corpus nu este
tratată ca un factor algoritmic unic sau direct măsurabil.

## Baseline / linie de bază

Măsurarea stării inițiale înainte de intervenții. Permite comparația
ulterioară și reduce riscul de a atribui unei modificări un rezultat
care exista deja.

## Black-box

Sistem ale cărui mecanisme interne nu pot fi inspectate integral de
cercetător. Intrările și ieșirile pot fi observate, dar procesul intern
rămâne parțial necunoscut.

## Citation / citare

Referință vizibilă către o sursă folosită sau asociată unui răspuns.
Poate apărea ca link, notă, card de sursă ori alt element al interfeței.

## Citation selection / selecția citării

Etapa conceptuală în care, dintre sursele recuperate sau folosite, numai
unele sunt afișate utilizatorului drept citări.

## Crawler

Program automat care accesează pagini web pentru a descoperi, colecta
sau actualiza informații. Furnizorii pot opera crawlere diferite pentru
căutare, utilizare la cererea utilizatorului și dezvoltarea modelelor.

## Dezambiguizare

Procesul prin care un sistem diferențiază entități cu nume identice sau
asemănătoare folosind context, identificatori, relații și surse.

## Date structurate

Informații exprimate într-un vocabular și format machine-readable, de
exemplu Schema.org în JSON-LD. Ele pot clarifica sensul conținutului,
dar nu garantează citarea.

## Documentat

Categorie epistemică pentru o afirmație susținută direct de documentație
oficială, standard, specificație sau cercetare primară identificabilă.

## Embedding

Reprezentare numerică a textului sau altui conținut într-un spațiu
vectorial, utilizată pentru compararea similitudinii semantice și
recuperarea informației.

## Entitate

Obiect distinct despre care pot exista afirmații: persoană, organizație,
produs, loc, publicație, concept sau eveniment. Entitatea nu este
identică cu pagina care o descrie.

## Entity collision / coliziune de entitate

Eroare în care informații despre două sau mai multe entități sunt
amestecate ori atribuite entității greșite.

## Entity resolution

Procesul de asociere a mențiunilor și înregistrărilor diferite cu
aceeași entitate reală.

## Experiment public

Test documentat prin întrebare, ipoteză, condiții, intervenție,
măsurare, dovezi, limitări și concluzii, publicat pentru verificare sau
reproducere.

## Freshness / prospețime

Gradul în care informația este actuală pentru întrebarea și momentul
analizat. Prospețimea necesară diferă în funcție de subiect.

## Generative engine / motor generativ

Sistem care combină generarea de limbaj cu recuperarea sau utilizarea
unor surse pentru a formula un răspuns sintetic.

## GEO — Generative Engine Optimization

Practici și cercetări orientate spre creșterea probabilității ca
informația unei surse sau entități să fie găsită, înțeleasă și
reprezentată corect în răspunsuri generative.

## Grounding

Legarea răspunsului unui model de informații recuperate din surse
externe pentru îmbunătățirea actualității, verificabilității sau
acurateței. Uneori este folosit ca sinonim practic pentru RAG, deși
sensurile tehnice pot diferi.

## Hallucination / confabulare

Generarea unei afirmații nesusținute sau false, prezentată ca
informație. În corpus este preferat termenul „confabulare” când descrie
atribuirea inventată de detalii unei entități.

## Index

Colecție organizată de documente sau reprezentări folosită pentru
căutare și recuperare. Accesarea unei pagini de către crawler nu
garantează includerea ei într-un index.

## Inferat

Categorie epistemică pentru o concluzie rezonabilă derivată din surse
sau observații, dar neconfirmată explicit de o sursă primară.

## Interogare / query

Întrebarea sau instrucțiunea adresată unui sistem. În experimente,
formularea interogării este păstrată exact pentru comparabilitate.

## Knowledge graph

Reprezentare structurată a entităților și relațiilor dintre ele. Poate
sprijini dezambiguizarea și organizarea cunoașterii, dar termenul nu
desemnează un singur produs sau o singură implementare.

## LLM — Large Language Model

Model de limbaj de mari dimensiuni antrenat pentru a procesa și genera
limbaj. Un LLM nu este, prin el însuși, echivalent cu un motor de
căutare sau cu un produs de răspuns conectat la web.

## Mențiune

Apariția unei entități într-un răspuns fără ca o sursă proprie a
entității să fie neapărat citată.

## Nedeterminism

Proprietatea prin care aceeași intrare poate produce rezultate diferite
între rulări, din cauza eșantionării, contextului, actualizărilor sau
altor factori.

## Observat

Categorie epistemică pentru o afirmație care descrie direct un rezultat
obținut într-un test documentat.

## Opinie editorială

Poziție argumentată a autorului sau laboratorului, distinctă de un fapt
documentat ori de un rezultat experimental.

## Prompt

Instrucțiunea transmisă unui model. În cercetarea AI Visibility,
promptul poate include interogarea, contextul conversațional și alte
condiții care influențează răspunsul.

## Query fan-out

Tehnică prin care o întrebare este descompusă în mai multe căutări sau
subinterogări, pentru recuperarea informațiilor necesare unui răspuns
mai complex.

## Query set / set de interogări

Colecție fixă de întrebări folosită pentru măsurare. Setul se îngheață
la baseline pentru ca rezultatele înainte și după intervenție să rămână
comparabile.

## Ranking / clasificare

Procesul de ordonare a rezultatelor sau candidaților după relevanță și
alte criterii. Clasarea în căutarea clasică și selecția surselor într-un
răspuns generativ nu trebuie presupuse identice.

## RAG — Retrieval-Augmented Generation

Arhitectură sau tehnică prin care un sistem recuperează informații
externe și le oferă modelului generativ pentru formularea răspunsului.

## Recommendation query / interogare de recomandare

Întrebare prin care utilizatorul cere selectarea sau compararea unor
persoane, produse, servicii ori organizații. Este distinctă de o
interogare de identitate.

## Relevanță

Gradul în care o sursă sau un fragment răspunde nevoii informaționale
exprimate de interogare și context.

## Reproducibilitate

Posibilitatea ca alt cercetător să reconstruiască suficient condițiile
și pașii unui experiment pentru a verifica direcția rezultatului, chiar
dacă răspunsurile nu sunt textual identice.

## Retrieval / recuperare

Procesul de identificare și selectare a documentelor, fragmentelor sau
datelor relevante pentru o interogare.

## Robots.txt

Fișier standard prin care proprietarul unui site comunică reguli de
acces pentru crawlere. Respectarea și interpretarea regulilor depind de
crawler.

## Schema.org

Vocabular colaborativ de tipuri și proprietăți pentru descrierea
structurată a entităților și conținutului de pe web.

## SERP

Pagina cu rezultate a unui motor de căutare. Include rezultate organice
și poate include funcții speciale, inclusiv răspunsuri generative.

## Sesiune curată

Condiție experimentală menită să reducă influența istoricului,
personalizării și contextului conversațional asupra răspunsului.

## Snippet

Fragment de text sau reprezentare a unei pagini afișată într-un rezultat
de căutare. Eligibilitatea pentru snippet poate influența eligibilitatea
în anumite funcții AI ale căutării.

## Source prominence / proeminența sursei

Vizibilitatea relativă a unei surse în interfața răspunsului: poziție,
frecvență, asociere cu afirmații și ușurința cu care utilizatorul o
poate identifica.

## Structured answer / răspuns structurat

Răspuns organizat în secțiuni, liste, tabele sau alte forme. Structura
nu dovedește folosirea unei surse și nu garantează citarea.

## Taxonomia rezultatelor

Set stabil de categorii prin care sunt clasificate răspunsurile: citare
corectă, citare parțială, mențiune, absență, coliziune, confabulare și
alte stări definite de metodologie.

## Tabula Rasa F0

Faza de baseline a metodologiei AI Visibility Lab, în care starea
entității este documentată înainte de orice intervenție.

## Trust / încredere

Termen general folosit pentru a descrie evaluarea fiabilității unei
surse sau afirmații. Nu este tratat în corpus ca scor intern cunoscut al
unui furnizor.

## Vector database

Sistem de stocare și căutare a vectorilor, folosit adesea pentru
recuperarea conținutului semantic similar cu o interogare.

## Vizibilitate fără click

Situație în care conținutul sau entitatea apare în răspuns, dar
utilizatorul nu accesează sursa. Expunerea și traficul trebuie astfel
măsurate separat.

## WAF — Web Application Firewall

Sistem de protecție care poate bloca sau limita automat traficul. Un
crawler permis în robots.txt poate fi totuși respins de WAF sau CDN.

## Reguli de utilizare a termenilor

- AI Visibility este termenul-umbrelă al corpusului; GEO și AEO descriu
  practici sau perspective din interiorul acestui domeniu.

- „Citare”, „mențiune” și „apariție” nu sunt sinonime și trebuie
  raportate separat.

- „Documentat”, „observat”, „inferat”, „ipoteză” și „opinie editorială”
  descriu statutul epistemic al unei afirmații.

- Atunci când un furnizor folosește o definiție proprie, documentul
  indică furnizorul și nu generalizează automat sensul către alte
  produse.

- Termenii care descriu mecanisme interne sunt folosiți prudent atunci
  când implementarea exactă nu este publică.

## Surse de referință pentru vocabular

- Google Search Central — AI Features and Your Website; Optimizing Your
  Website for Generative AI Features on Google Search.

- OpenAI — Overview of OpenAI Crawlers.

- Anthropic — Does Anthropic Crawl Data from the Web?

- Perplexity — Perplexity Crawlers.

- Schema.org Documentation și W3C JSON-LD 1.1.

- Aggarwal et al. — GEO: Generative Engine Optimization, KDD 2024.

# Actualizare 1.0.2

Au fost restaurate elementele tabulare pierdute la conversia
DOCX–Markdown și absente din ediția anterioară a corpusului:

- AVL-102: tabelul de mythbusting „Mitul / Realitatea documentată” din
  secțiunea „Ce NU influențează citarea”.

- AVL-103: tabelul „Competența SEO / Rolul ei în GEO / Ce spune
  documentația” din secțiunea „Ce se păstrează: capitalul tău SEO se
  transferă”.

- AVL-104: tabelul „Ce măsoară instrumentele oficiale / Ce NU măsoară”
  din secțiunea despre instrumentele oficiale de platformă.
