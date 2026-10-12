---
title: "Market Discovery — set unic DISCOVERY și USER, întrebări și metodologie"
version: "0.1.0"
created: "2026-10-11"
language: "ro-RO"
series_id: "MKT-RO-AIV"
document_id: "MKT-RO-AIV-COMBINED-QUERY-SET"
status: "Consolidare pentru pilot; nevalidat empiric; nu activează un protocol normativ"
source_documents:
  - "MKT-RO-AIV-discovery-query-set-v0.1.0.md"
  - "MKT-RO-AIV-user-query-set-v0.3.0.md"
document_role: "Document operațional unic; nu constituie AVL-MKT-002 sau Market Reference Set"
---

# Market Discovery — DISCOVERY + USER

## Ghid de utilizare și structură

Acest fișier reunește toate informațiile din documentele DISCOVERY v0.1.0 și USER v0.3.0. Conține **36 de interogări standard și 4 exploratorii**, cu textele păstrate neschimbate. Versiunea 0.1.0 aparține noului document consolidat; nu resetează versiunile seturilor sursă.

- **Partea I:** toate cele 12 întrebări DISCOVERY, cele 4 exploratorii, rațiunile, delimitarea pieței, regulile de extragere și verificare, pilotul, clarificările și referințele documentului DISCOVERY.
- **Partea II:** toate cele 24 de interogări USER, diferențele dintre formulări, condițiile comune de execuție, câmpurile și comparațiile, din secțiunile operaționale USER v0.3.0.
- **Anexa A:** documentul DISCOVERY v0.1.0 integral, inclusiv metadate și istoric.
- **Anexa B:** documentul USER v0.3.0 integral, inclusiv propriile anexe cu USER v0.1.0 și v0.2.0. Astfel se păstrează și toate informațiile istorice.

Anexele păstrează sursele exact; repetițiile nu reprezintă întrebări suplimentare de rulat. Părțile I și II prezintă conținutul operațional în format lizibil. Regulile de integrare de mai jos prevalează asupra formulărilor istorice incompatibile.

## Inventarul unic și volumul de lucru

| Familie / subgrup | Identificatori | Texte distincte | Suprafețe propuse | Execuții planificate |
|---|---|---:|---:|---:|
| DISCOVERY — specializat | Q-DISC-001…012 | 12 | 8 | 96 |
| USER-CONV — conversațional | Q-USER-CONV-001…012 | 12 | 8 | 96 |
| USER-SHORT — expresii scurte | Q-USER-SHORT-001…012 | 12 | 8 | 96 |
| Total standard | Cele trei grupuri | 36 | 8 | 288 |
| DISCOVERY exploratoriu | Q-DISC-X01…X04 | 4 | Google Search și Bing Search | 8 |
| Total cu explorarea propusă | Toate textele | 40 | Conform rândurilor de mai sus | 296 |

Cele opt suprafețe standard, în ordine: Google Search organic, Bing Search organic, Google AI Mode, ChatGPT, Claude, Copilot, Gemini, Perplexity. AI Overview se observă separat în Google Search, când apare; nu este a noua interogare activă. Reîncercările, verificarea surselor și pilotul scurt se evidențiază separat de cele 296 de execuții planificate.

## Reguli de integrare și precedență

1. **Două familii, trei grupuri de formulări.** DISCOVERY este setul de lucru specializat. USER cuprinde CONV și SHORT; ambele rămân active în această consolidare. Retragerea CONV din vechiul USER v0.2.0 se păstrează numai ca istoric.
2. **Texte fixe.** Se transmite numai textul din coloana de interogare. CONV păstrează preambulul „Am o firmă în România.”; SHORT nu primește preambul sau geografie suplimentară. DISCOVERY păstrează exact propriile formulări. Titlurile, rațiunile și instrucțiunile documentului nu se trimit împreună cu promptul.
3. **Clasificări distincte.** DISCOVERY folosește TERM/PROBLEM/PROVIDER/SERVICE ca unghiuri de identificare a prestatorilor. CONV folosește PROBLEM/GOAL/PROVIDER pentru nevoia exprimată. SHORT nu primește aceste clase a priori; interpretarea se consemnează din rezultate. Etichetele comune nu fac grupurile semantic echivalente.
4. **Statut.** „Standard” sau „oficial de lucru” descrie rolul în exercițiu. Se păstrează statutul de pilot și, pentru nucleul DISCOVERY, CORE-CANDIDATE până la promovarea documentată. Consolidarea nu activează protocolul și nu transformă setul în AVL-MKT-002.
5. **Execuție.** Condițiile comune din partea II se completează cu detaliile din partea I: acces web documentat, fără Deep Research/agent în condiția de bază, logged-out unde este practic disponibil, fereastră propusă de maximum 7 zile consecutive, cutoff și parametri declarați înainte. Nu se presupune că toate suprafețele sunt disponibile.
6. **Ordine.** Pe suprafețele 1, 3, 5 și 7: DISCOVERY → USER-CONV → USER-SHORT. Pe 2, 4, 6 și 8: USER-SHORT → USER-CONV → DISCOVERY. În fiecare grup se rulează 001–012. Modulul exploratoriu se execută separat, după grupurile standard pe Google/Bing, în ordinea X01–X04, în aceeași fereastră. Această poziționare a explorării este convenția de integrare a documentului unic; schimbările se declară înaintea ciclului.
7. **Oprire și totaluri.** Bugetul complet consolidat este 288 de execuții standard + 8 exploratorii, dacă se rulează explorarea propusă. Totalurile de 96, 104 sau 192 din surse se referă la subseturile și versiunile respective. Finalizarea bugetului nu demonstrează epuizarea pieței. Lipsurile și incidentele se declară.
8. **Pilot.** Pilotul scurt DISCOVERY de 12 execuții rămâne disponibil, dar nu validează automat USER, toate celelalte întrebări sau toate suprafețele. Consolidarea nu pretinde că aceste probe au fost efectuate.
9. **Proveniență.** Se păstrează identificatorii, `query_exact`, versiunea setului sursă, subgrupul și versiunea acestui document. ID-urile CONV/SHORT rămân cele din USER v0.3.0; maparea la vechile ID-uri este în partea II. Execuțiile istorice nu se reetichetează retroactiv.
10. **Rezultate și comparație.** Candidații se reunesc cu proveniență și se verifică independent; nu se aleg prin votul platformelor. Se compară separat cele trei grupuri și modulul exploratoriu. Comparațiile sunt descriptive; nu izolează efectul expertizei sau al vocabularului. Familia USER reunită are dublul numărului de întrebări DISCOVERY.
11. **Actualitatea surselor.** Referințele și observațiile despre statutul documentației publice din DISCOVERY sunt cele consemnate la 9 octombrie 2026. Ele sunt conservate, fără a pretinde o nouă verificare a site-ului în această integrare. Trimiterile istorice la documente „separate” se rezolvă acum prin părțile și anexele acestui fișier, când documentele sunt incluse aici.

Fluxul comun rămâne: **Discovery → Candidate Set → Verification → Market Reference Set înghețat → Query Universe / Market Query Panel → măsurarea reprezentării AI.** Instanța trimestrială și T0/F1…Fn au roluri distincte; pilotul se păstrează separat. Nicio interogare de piață și nicio evaluare de furnizori nu au fost executate pentru realizarea acestui document.

---

# Partea I — DISCOVERY: întrebări, scop și procedură

Conținutul documentului DISCOVERY este reprodus mai jos, cu titlurile coborâte cu un nivel. Regulile de integrare de la început clarifică aplicarea lui la întregul set.

Acest document propune formulările pentru descoperirea repetabilă a furnizorilor-candidați. Nu constituie Market Reference Set, AVL-MKT-002, o rulare oficială sau un set validat empiric. Întrebările și parametrii numerici de mai jos sunt propuneri noi pentru pilot, nu decizii deja aprobate în conversațiile anterioare.

### 1. Ce păstrăm din deciziile existente

Seria urmărește trimestrial furnizori relevanți pentru clienți din România. Se reia Discovery în fiecare trimestru, alături de reverificarea entităților cunoscute. Datele brute și proveniența se păstrează. Candidații sunt reuniți, nu selectați prin votul platformelor.

Ordinea de lucru este Discovery → Candidate Set → Verification → Market Reference Set înghețat → Query Universe / Market Query Panel → măsurarea reprezentării AI.

Instanța planificată este MKT-RO-AIV-2026Q4, urmată de instanțe trimestriale noi. Trimestrul identifică instanța pieței. T0 identifică baseline-ul, iar F1…Fn rulările ulterioare atunci când designul le folosește; nu înlocuiesc identificatorul trimestrial. Pilotul rămâne separat.

### 2. Domeniul propus pentru aplicare

Familia de servicii: GEO, AEO, AI Visibility, AI Search Optimization, LLM Visibility / LLM Optimization orientat către reprezentarea brandurilor și servicii funcțional echivalente.

Geografia de interes este România, din perspectiva clientului. Separăm furnizorii locali, independenții și furnizorii internaționali cu dovadă explicită de deservire a României. Simpla accesibilitate globală nu dovedește această orientare.

Propunere de delimitare pentru prima instanță: serviciile de audit, măsurare, monitorizare, consultanță și optimizare intră în evaluare; un furnizor hibrid software + servicii poate intra dacă există dovadă a serviciului. Un instrument exclusiv self-service se păstrează ca Technology Provider pentru context, separat de populația principală de prestatori. Această delimitare trebuie declarată înaintea rulării oficiale; nu este o excludere deja impusă de planul anterior.

Nu se cere implementare ca o condiție obligatorie și nici nu se exclude implementarea oferită de alți furnizori: delimitarea comercială AVL/Ichnometria nu definește piața întreagă.

### 3. Nucleul propus: 12 întrebări

Identificatorii sunt locali acestui set. Nu rezervă documente normative AVL. În pilot, stratul este CORE-CANDIDATE; promovarea la CORE se documentează după evaluare.

Textul din coloana „Interogare exactă” este întregul text transmis. Nu se adaugă preambul, nume de furnizori, anul sau instrucțiuni de clasare. Aceeași formulare se utilizează în Search și pe suprafețele AI; diferențele de rezultat se păstrează separat pe suprafață.

| ID | Clasă principală | Interogare exactă | Rațiune |
|---|---|---|---|
| Q-DISC-001 | TERM | Cine oferă servicii GEO (Generative Engine Optimization) pentru firme din România? | Eticheta GEO dezambiguizată. |
| Q-DISC-002 | TERM | Cine oferă servicii AEO (Answer Engine Optimization) pentru firme din România? | Furnizori care folosesc AEO. |
| Q-DISC-003 | TERM | Cine oferă servicii de AI Visibility pentru firme din România? | Termenul-umbrelă comercial. |
| Q-DISC-004 | TERM | Cine oferă servicii de AI Search Optimization pentru firme din România? | Vocabular alternativ pentru căutarea AI. |
| Q-DISC-005 | TERM | Cine oferă servicii de LLM Optimization pentru vizibilitatea brandurilor din România în răspunsurile AI? | Reduce confuzia cu antrenarea sau optimizarea tehnică a modelelor. |
| Q-DISC-006 | PROBLEM | Cine poate ajuta o firmă din România să fie menționată sau recomandată în răspunsurile asistenților AI? | Nevoia de reprezentare a firmei, fără acronime. |
| Q-DISC-007 | PROBLEM | Cine poate ajuta un site al unei firme din România să fie citat ca sursă în răspunsurile AI? | Citarea sursei, distinctă de menționarea firmei. |
| Q-DISC-008 | PROVIDER | Ce agenții SEO oferă și optimizare pentru apariția firmelor din România în răspunsurile AI? | Servicii integrate în oferte SEO. |
| Q-DISC-009 | PROVIDER | Ce consultanți independenți oferă servicii de vizibilitate în răspunsurile AI pentru firme din România? | Reduce dependența de descoperirea agențiilor. |
| Q-DISC-010 | SERVICE | Cine oferă audituri ale vizibilității brandurilor din România în răspunsurile AI? | Evaluare și diagnostic, inclusiv fără implementare. |
| Q-DISC-011 | SERVICE | Cine oferă servicii de monitorizare a mențiunilor și citărilor brandurilor din România în răspunsurile AI? | Măsurare recurentă; software-ul și serviciul se disting în Verification. |
| Q-DISC-012 | PROVIDER | Ce furnizori internaționali oferă servicii GEO, AEO sau AI Visibility pentru clienți din România? | Acoperire explicită INTL-RO, de verificat din surse. |

Toate întrebările au intenție de identificare a prestatorului. Clasele descriu unghiul principal, nu categorii perfect disjuncte. Frecvența răspunsurilor nu se interpretează ca cerere comercială și nu se presupune că întrebările reprezintă distribuția reală a căutărilor consumatorilor.

### 4. Stratul exploratoriu propus pentru primul pilot

Pentru primul pilot propun patru interogări suplimentare, rulate în Google Search și Bing Search. Limitarea suprafețelor este un compromis operațional explicit, nu un test de reprezentare transversală.

| ID | Interogare exactă | Ce explorează |
|---|---|---|
| Q-DISC-X01 | Cine oferă servicii de optimizare pentru apariția firmelor din România în ChatGPT? | Descoperire prin numele unui produs, în locul categoriei. |
| Q-DISC-X02 | Cine oferă servicii de optimizare pentru Google AI Overviews și AI Mode pentru firme din România? | Furnizori care se poziționează în ecosistemul Google. |
| Q-DISC-X03 | Cine oferă servicii GEO, AEO sau AI Visibility în Sibiu? | Sensibilitate locală; rezultatul nu reprezintă separat o piață Sibiu validată. |
| Q-DISC-X04 | Which providers offer GEO, AEO or AI visibility services to businesses in Romania? | Furnizori și pagini comerciale accesibile prin engleză. |

În trimestre viitoare se pot preregistra alte patru întrebări exploratorii: variante Perplexity/Gemini/Claude/Copilot, alte orașe, „LLM Visibility”, „AI SEO”, directoare profesionale sau profile publice. Fiecare text nou primește ID și rațiune înainte de execuție. Nu este permisă alegerea numai a întrebărilor care returnează un anumit furnizor.

Termenii Agentic Visibility / machine accessibility pot fi testați într-un modul de frontieră. Serviciile generale de creare de agenți AI, chatboturi sau automatizări nu devin eligibile automat. Extinderea pieței necesită o decizie de scope distinctă.

### 5. De ce evităm alte formulări în nucleu

- „Cei mai buni”, „top 10”, „lideri”: selectează reputație sau ierarhii și poate restrânge Discovery.
- „Recomandă-mi doar furnizori cu studii de caz / metodologie publică”: introduce filtre de maturitate care nu sunt echivalente cu apartenența la piață.
- „Agenții din România” ca unică formulare: poate exclude independenți și furnizori internaționali relevanți.
- „Cine face marketing cu AI?”: confundă folosirea AI pentru prestare cu serviciile de vizibilitate în AI.
- „Alternative la Alex Matescu / AI Visibility Lab”: introduce o ancoră proprie în descoperirea de bază.
- „Cine a apărut nou trimestrul acesta?”: solicită sistemului o reconstrucție istorică; noutatea se stabilește din comparația registrelor.

Nu se cere un număr fix de furnizori într-un răspuns AI. Se extrag toți candidații din răspunsul inițial complet, inclusiv cei fără URL; lipsa URL-ului se documentează.

### 6. Condiții propuse de rulare

Parametrii sunt propuși pentru testare și fixare după pilot.

| Element | Propunere |
|---|---|
| Suprafețe CORE | Google Search organic; Bing Search organic; Google AI Mode; ChatGPT; Claude; Copilot; Gemini; Perplexity. |
| Google AI Overview | Observație separată în rularea Google Search, când este afișat; nu reprezintă o a noua interogare activă. |
| Număr execuții | O execuție pe pereche întrebare–suprafață pentru Discovery de bază. Nu estimează stabilitatea sau probabilitatea apariției. |
| Google/Bing | Primele 20 de rezultate organice în ordinea afișată, sau toate disponibile dacă sunt mai puține. Pozițiile se numără înainte de deduplicarea furnizorilor. |
| Ads / module locale | Se conservă în captură; candidații se înregistrează cu proveniență separată, în strat suplimentar, fără amestec cu randamentul CORE organic. |
| Sisteme conversaționale | Conversație nouă pentru fiecare întrebare; primul răspuns complet; fără follow-up sau regenerate în CORE. |
| Clarificare solicitată de AI | Se conservă ca răspuns inițial; eventuala continuare este exploratorie, legată de rularea originală. |
| Acces web | Activat explicit unde există control; setarea și utilizarea observată se înregistrează distinct. Citările singure nu dovedesc exhaustiv ce a fost accesat. |
| Moduri speciale | Fără Deep Research / agent în CORE propus. Un astfel de mod, dacă se testează, reprezintă o condiție distinctă. |
| Cont | Logged-out unde este practic disponibil; altfel cont și setări documentate, păstrate consecvent. |
| Context | Fără fișiere, proiecte, conversații anterioare sau listă de furnizori atașată; memoria și instrucțiunile personale se dezactivează unde este posibil și se documentează. |
| Geografie | România ca piață declarată; locația fizică și cea afișată/inferată de produs se notează separat. Incognito nu garantează absența personalizării sau a localizării. |
| Fereastră | Propunere: cel mult 7 zile consecutive pentru un ciclu; începutul, sfârșitul și cutoff-ul se declară înainte. |
| Indisponibilitate | Se consemnează ca atare, nu ca absență a furnizorilor. O singură reîncercare pentru eroare tehnică, în fereastra declarată, cu păstrarea ambelor execuții. |

Volum CORE propus: 12 × 8 = 96 execuții per ciclu complet. Cele patru query-uri exploratorii pe două motoare adaugă 8 execuții. Observarea AI Overview și verificarea surselor adaugă muncă, fără a reprezenta aceleași unități de numărare.

Pentru Search se inspectează paginile relevante din fereastra de 20 de rezultate. Pentru liste/directoare, se parcurge integral pagina accesată și se notează candidații potențiali cu URL și proveniență; continuările paginate sau navigarea pe alte pagini intră în registrul suplimentar. Pentru AI se păstrează răspunsul și lista surselor; numele găsite exclusiv prin deschiderea unei surse sunt discovery asistat de sursă, nu mențiuni ale răspunsului AI.

### 7. Oprire și pilot

Pilot scurt propus: Q-DISC-001, 006, 009 și 011 pe Google Search, Bing Search și ChatGPT, pentru 12 execuții. Testează vocabularul, extragerea, adâncimea și efortul. Nu validează singur celelalte întrebări sau suprafețe; înainte de înghețare acestea trebuie de asemenea probate.

Pentru fiecare întrebare se examinează candidații unici, contribuția la reuniunea setului, ambiguitățile și timpul. Contribuția exclusivă se calculează față de toate celelalte query-uri, nu numai față de cele executate mai devreme; altfel ordinea ar favoriza artificial primele întrebări.

Propunerea de oprire oficială este bazată pe buget fix: toate cele 96 de perechi CORE disponibile, adâncimea fixată și cele 8 execuții exploratorii preregistrate. Orice lipsă se declară. După aceste etape se raportează randamentul explorării; nu se declară automat saturație.

Această regulă închide o rundă documentată, nu dovedește că piața a fost epuizată. Dacă pilotul arată randament mare la adâncimea-limită sau în explorare, se mărește bugetul în versiunea următoare, înainte de prima execuție oficială. Pragul numeric de saturație nu este inventat acum.

### 8. Extragere și verificare

Se reunesc candidații din toate sursele și se păstrează fiecare observație. Aceeași entitate poate avea mai multe nume, domenii sau apariții; deduplicarea nu șterge traseul descoperirii. Brandul și persoana asociată nu se numără automat ca doi furnizori.

Fișa minimă a observației: run_id, query_id, suprafață, nume observat, descrierea serviciului, ordine observată, URL-uri afișate, evidence_id, dată/oră, strat CORE/EXPLORATORY/SUPPLEMENTAL, note.

În Verification se verifică distinct identitatea, serviciul efectiv oferit, relevanța pentru România, valabilitatea temporală și trasabilitatea sursei. Se aplică statusurile protocolului, păstrând separat incertitudinea. Nu se cere modelului să decidă ELIGIBLE prin simpla recomandare.

Furnizorii cunoscuți din ciclurile anterioare sunt reverificați separat chiar dacă nu mai apar în Discovery. Se separă „redescoperit prin CORE”, „cunoscut anterior, reverificat” și „nou în registru”. Nou în registru nu înseamnă nou înființat. Neredescoperit nu înseamnă ieșit de pe piață.

O rută suplimentară prin directoare, organizații profesionale, publicații sau surse cunoscute poate reduce dependența de Search/AI. Sursele și adâncimea se preregistrează; nu se aleg pentru a include preferențial o entitate. Verificarea din surse directe nu elimină singură biasul de descoperire.

### 9. Clarificări necesare în documentație

1. AVL-MKT-001 permite AI în Discovery, însă REQ-015 cere freeze înainte de „prima execuție AI”. Propunere de precizare: „înainte de prima execuție AI destinată măsurării reprezentării pieței; execuțiile de Discovery se păstrează separat și nu sunt reutilizate ca măsurători ale panelului”. Această propunere nu modifică pagina publică.
2. Corpusul păstrează încă formulări F0 și T1/T2 în unele documente mai vechi. Pentru noul set păstrăm decizia T0 + F1…Fn și declarăm discrepanța; nu redenumim dovezile istorice.
3. Protocolul public AVL-MKT-001 are statut Draft v0.9.0, iar AVL-MKT-002 este planificat. Setul poate fi testat acum, dar rularea oficială urmează activării protocolului și declarării instanței, cutoff-ului și condițiilor.
4. Înainte de freeze se închid explicit delimitarea software/servicii, condiția per suprafață, fereastra calendaristică, cutoff-ul, adâncimea și regula de oprire.

### 10. Surse consultate și limitele revizuirii

Referințe principale, accesate la 9 octombrie 2026:

- https://delamatescu.ro/lab
- https://delamatescu.ro/lab/introducere
- https://delamatescu.ro/lab/cercetare
- https://delamatescu.ro/lab/metodologie
- https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate
- https://delamatescu.ro/lab/metodologie/tabula-rasa-f0
- https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica
- https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate
- https://delamatescu.ro/lab/articole
- https://delamatescu.ro/lab/studii-de-caz
- Market Discovery Execution Plan — MKT-RO-AIV, v0.1.0, fișier datat 2 octombrie 2026, citit în versiunea disponibilă.
- Istoricul relevant recuperat al discuțiilor privind Market Measurement, regulile trimestriale și convenția T0/Fn. Recuperarea contextului nu reprezintă o lectură exhaustivă a tuturor conversațiilor contului.

Au fost consultate documentele metodologice și de cercetare, paginile de secțiune și materiale editoriale conexe. Aceasta este o revizuire pentru proiectarea Discovery, nu un audit factual integral al fiecărei afirmații de pe site și nici o verificare a întregii bibliografii externe. Nu s-au executat interogările de piață propuse și nu s-au evaluat furnizori.

### Istoric

0.1.0 — 9 octombrie 2026: prima propunere de întrebări exacte; 12 CORE-CANDIDATE și 4 EXPLORATORY; reguli operaționale propuse pentru pilot și observații privind coerența corpusului.

---

# Partea II — USER: întrebări, diferențe și procedură comună

Cele două subgrupuri de mai jos provin din USER v0.3.0. Numerotarea secțiunilor din sursă se păstrează pentru trasabilitate.

### 2. USER-CONV — cele 12 întrebări din v0.1.0

Se copiază exclusiv promptul complet, cu preambul și diacritice, fără ghilimele sau instrucțiuni de rol. Nu se furnizează identitatea firmei. Situațiile descrise sunt simulate, nu afirmații despre firma autorului.

| ID v0.3.0 | ID sursă v0.1.0 | Intenție | Prompt complet, neschimbat |
|---|---|---|---|
| Q-USER-CONV-001 | Q-USER-001 | PROBLEM | Am o firmă în România. De ce nu apare firma mea în ChatGPT? |
| Q-USER-CONV-002 | Q-USER-002 | PROBLEM | Am o firmă în România. De ce ChatGPT recomandă concurența, dar pe mine nu? |
| Q-USER-CONV-003 | Q-USER-003 | PROBLEM | Am o firmă în România. Ce pot face dacă AI-ul spune lucruri greșite despre firma mea? |
| Q-USER-CONV-004 | Q-USER-004 | PROBLEM | Am o firmă în România. Site-ul meu apare pe Google, dar nu apare în răspunsurile AI. Ce pot face? |
| Q-USER-CONV-005 | Q-USER-005 | GOAL | Am o firmă în România. Cum fac să îmi găsească oamenii firma când întreabă un asistent AI? |
| Q-USER-CONV-006 | Q-USER-006 | GOAL | Am o firmă în România. Cum fac să îmi recomande ChatGPT firma când cineva caută serviciile mele? |
| Q-USER-CONV-007 | Q-USER-007 | GOAL | Am o firmă în România. Cum fac să apară linkul site-ului meu în răspunsurile AI? |
| Q-USER-CONV-008 | Q-USER-008 | GOAL | Am o firmă în România. Cum fac să apară firma mea în răspunsurile date de AI pe Google? |
| Q-USER-CONV-009 | Q-USER-009 | PROVIDER | Am o firmă în România. Cine mă poate ajuta să apară firma mea în ChatGPT? |
| Q-USER-CONV-010 | Q-USER-010 | PROVIDER | Am o firmă în România. Cine poate verifica ce spun asistenții AI despre firma mea? |
| Q-USER-CONV-011 | Q-USER-011 | PROVIDER | Am o firmă în România. Cine poate urmări dacă firma mea este recomandată de asistenții AI? |
| Q-USER-CONV-012 | Q-USER-012 | PROVIDER | Am o firmă în România. Caut pe cineva care să mă ajute ca asistenții AI să găsească informații corecte despre firma mea. La cine pot apela? |

PROBLEM descrie o dificultate; GOAL exprimă un rezultat dorit; PROVIDER caută explicit ajutor extern. USER-CONV presupune familiaritate cu produsele AI, fără terminologie GEO/AEO; nu acoperă persoanele care nu cunosc deloc aceste produse.

### 3. USER-SHORT — cele 12 expresii din v0.2.0

Se copiază exclusiv expresia, cu scrierea și diacriticele originale. Nu se adaugă preambul, propoziție explicativă, instrucțiune de rol sau „România” acolo unde lipsește.

| ID v0.3.0 | ID sursă v0.2.0 | Expresia exactă, neschimbată |
|---|---|---|
| Q-USER-SHORT-001 | Q-USER-001 | consultant AI |
| Q-USER-SHORT-002 | Q-USER-002 | recomandare ChatGPT |
| Q-USER-SHORT-003 | Q-USER-003 | promovare ChatGPT |
| Q-USER-SHORT-004 | Q-USER-004 | firma mea pe ChatGPT |
| Q-USER-SHORT-005 | Q-USER-005 | apariție în ChatGPT |
| Q-USER-SHORT-006 | Q-USER-006 | vizibilitate AI |
| Q-USER-SHORT-007 | Q-USER-007 | promovare firmă AI |
| Q-USER-SHORT-008 | Q-USER-008 | optimizare site ChatGPT |
| Q-USER-SHORT-009 | Q-USER-009 | marketing AI |
| Q-USER-SHORT-010 | Q-USER-010 | agenție AI România |
| Q-USER-SHORT-011 | Q-USER-011 | specialist ChatGPT |
| Q-USER-SHORT-012 | Q-USER-012 | servicii promovare AI |

Identitatea unei interogări include `query_set_id`, `query_id` și `query_exact`. În v0.3.0 se adaugă `query_subgroup`, `source_query_set_id` și `source_query_id` pentru trasabilitate. Același ID local Q-USER-001 din cele două surse desemnează texte diferite. Rezultatele istorice rămân atribuite versiunilor originale; nu se reetichetează retroactiv ca execuții v0.3.0.

### 4. Diferențe între formulări și limitele comparației

| Dimensiune | DISCOVERY | USER-CONV | USER-SHORT |
|---|---|---|---|
| Rol | Descoperire ghidată de definiția pieței | Nevoi exprimate conversațional | Căutare prin expresii nespecializate |
| Formă | Întrebări complete și structurate | Întrebări complete, limbaj accesibil | Expresii de 2–4 cuvinte |
| Vocabular | GEO, AEO, AI Visibility, audit, monitorizare | Probleme, rezultate dorite, ajutor | Consultant, promovare, marketing, specialist, ChatGPT |
| Intenție | Identificarea explicită a furnizorilor relevanți | 4 PROBLEM, 4 GOAL, 4 PROVIDER | Incompletă sau ambiguă; se clasifică din rezultate |
| Geografie în text | România în întrebările de bază, conform surselor | România în toate cele 12 prompturi | România doar în Q-USER-SHORT-010 |
| Platformă numită | Conform setului separat | ChatGPT 4; Google AI 1; AI generic 7 | ChatGPT 6; AI generic 6 |
| Rezultat observat | Furnizori și surse relevante | Explicații, acțiuni, clarificări și furnizori | Interpretări, soluții, furnizori și surse, inclusiv adiacente |

În USER-CONV, ChatGPT apare în 001, 002, 006 și 009; răspunsurile AI din Google în 008. În USER-SHORT, ChatGPT apare în 002, 003, 004, 005, 008 și 011. Aceste distribuții sunt alegeri de proiectare, nu estimări de popularitate. Suprafața de execuție se înregistrează separat de platforma numită în prompt.

Ambiguitatea USER-SHORT este intenționată: „recomandare ChatGPT” poate însemna recomandarea produsului, recomandare făcută cu produsul sau dorința de a fi recomandat de acesta; „marketing AI” poate conduce către producerea de conținut cu AI. Se notează numai interpretarea susținută de răspuns, fără presupuneri despre raționamentul intern. Termenii largi pot conduce spre automatizări, training ori software. Rezultatele internaționale și adiacente se păstrează în observațiile brute; eligibilitatea pentru piața românească se verifică ulterior.

Comparația este descriptivă: formulările diferă în lungime, vocabular, intenție, geografie și platformă. Nu izolează experiența utilizatorului sau efectul jargonului. Numerele identice nu definesc perechi semantice între DISCOVERY, CONV și SHORT. Un experiment controlat ulterior ar necesita aceeași nevoie, geografie și platformă, schimbând numai formularea. Numărul egal de interogări nu înseamnă echivalență semantică.

### 5. Execuție consolidată

Se rulează subgrupurile distinct și se raportează separat în fiecare ciclu. Suprafețele propuse, în ordinea din surse, sunt: Google Search organic, Bing Search organic, Google AI Mode, ChatGPT, Claude, Copilot, Gemini și Perplexity, în limita disponibilității lor la execuție.

| Acoperire | Interogări | Suprafețe | Execuții planificate |
|---|---:|---:|---:|
| USER-CONV | 12 | 8 | 96 |
| USER-SHORT | 12 | 8 | 96 |
| USER consolidat | 24 | 8 | 192 |
| DISCOVERY + USER consolidat | 36 | 8 | 288 |

În surse, 192 desemna DISCOVERY + o singură variantă USER. În v0.3.0, 192 desemnează numai cele două subgrupuri USER; ciclul complet cu DISCOVERY are 288. Cele patru interogări exploratorii menționate în surse rămân modul separat și nu intră în aceste totaluri. Incidentele și reîncercările se raportează separat.

Se păstrează conversație nouă pentru fiecare prompt, fără furnizori sugerați, fișiere, numele autorului sau identitatea firmei. Condițiile de cont, memorie/personalizare, căutare, dispozitiv, adâncime Search și oprire se mențin comparabile în aceeași fereastră temporală preregistrată. Se înregistrează modelul și interfața afișate, data, ora, locația observată și abaterile. Incognito și conversația nouă nu garantează absența personalizării.

Pilotul păstrează propunerea de 20 de rezultate organice pe Google/Bing și un singur răspuns complet inițial pe suprafețele conversaționale. Aceste praguri nu sunt validate empiric.

Adaptarea ordinii la v0.3.0: pe suprafețele 1, 3, 5 și 7 se rulează DISCOVERY → USER-CONV → USER-SHORT; pe 2, 4, 6 și 8, USER-SHORT → USER-CONV → DISCOVERY. Dacă se rulează numai USER, se omite DISCOVERY. În fiecare subgrup se păstrează ordinea 001–012. Ordinea se fixează înainte și se păstrează între cicluri sau se documentează schimbarea; nu elimină toate efectele temporale.

O indisponibilitate tehnică nu este un răspuns fără furnizori. Se poate aplica o singură reîncercare conform regulii preregistrate, păstrând ambele înregistrări.

### 6. Rezultate valide și câmpuri de înregistrare

Explicațiile fără furnizori sunt rezultate valide pentru întrebările informaționale. Clarificările și categoriile adiacente sunt observații valide pentru expresiile ambigue. Nu se răspunde la clarificări și nu se adaugă „dar cine mă poate ajuta?” în seria principală. Continuările pot forma un modul separat, cu text fix și proveniență.

Se separă rezultatele organice, reclamele, modulele locale și AI Overview. Furnizorii descoperiți doar în pagini deschise sunt candidați din discovery asistat de sursă, nu mențiuni directe ale SERP-ului sau răspunsului AI.

Câmpurile comune consolidate sunt: `instance_id`, `query_set_id`, `query_subgroup`, `query_id`, `query_exact`, `source_query_set_id`, `source_query_id`, `intent_class`, `execution_surface`, `target_platform_in_prompt`, `run_id`, `timestamp`, `environment_id`, `execution_status`, `raw_evidence_id`.

`intent_class` păstrează PROBLEM/GOAL/PROVIDER pentru CONV și este N/A pentru SHORT. Pentru interpretarea observată se folosesc separat `interpreted_intent`, `interpretation_evidence`, categoria soluției și orientarea geografică observabilă. UNKNOWN și MULTIPLE marchează sensurile neclare ori mixte. Categoriile includ AI Visibility, automatizări, training, conținut/marketing, software, alta sau incertă.

Pentru răspunsurile AI se păstrează toate câmpurile din surse:

- `explanations_present` și `actionable_advice_present`: YES/NO/UNKNOWN;
- `clarification_requested`, `provider_named`, `software_tool_named`: YES/NO;
- `provider_recommended`: YES/NO/UNCERTAIN;
- `terminology_introduced`: de exemplu GEO/AEO introduse în răspuns;
- `source_urls` și legătura lor cu afirmațiile;
- numele și descrierile furnizorilor, separat de instrumente și publisheri.

Câmpurile pot coexista. O recomandare explicită propune furnizorul ca opțiune de ajutor; menționarea sau citarea unui articol nu este suficientă. Pentru Search se păstrează poziția, URL-ul și tipul: pagină comercială de posibil prestator, articol/ghid, director/listă, instrument software, altul sau incert. Prezența în rezultate nu se codifică drept recomandare editorială a motorului.

### 7. Comparații și interpretare

Se compară în aceeași suprafață și același ciclu: DISCOVERY–CONV, DISCOVERY–SHORT și CONV–SHORT. Reuniunea USER poate fi raportată suplimentar, cu mențiunea că are 24 de interogări, față de 12 pentru DISCOVERY. Nu se interpretează numărul brut mai mare de candidați din reuniune fără această diferență de volum. Search organic și răspunsurile AI nu formează un clasament unic.

Se păstrează toate dimensiunile din surse: execuții completate și incidente cu numitorul real; răspunsuri care numesc versus recomandă furnizori; candidați unici, comuni și exclusivi; surse și tipuri de pagini; explicații, instrucțiuni și clarificări; distribuția intențiilor, soluțiilor și geografiei; comparațiile după Verification pentru furnizori eligibili, distinct de datele brute.

Clasele PROBLEM/GOAL/PROVIDER și examinarea separată a 009–012 sunt valabile numai pentru CONV. SHORT nu are un subset PROVIDER predefinit. Mai puțini furnizori nu înseamnă automat performanță inferioară: opt întrebări CONV sunt informaționale sau orientate spre rezultat, iar SHORT nu cere uniform prestatori GEO/AEO ori România.

Pentru oricare două grupuri A și B de candidați deduplicați se raportează mărimile lor, intersecția și diferențele. Opțional, Jaccard = |A ∩ B| / |A ∪ B|; dacă reuniunea este goală, se raportează N/A. Entitățile afișate, candidații potențial relevanți și furnizorii confirmați eligibili rămân categorii separate.

O singură execuție descrie observația punctuală, nu probabilitatea stabilă de recomandare. Aceasta ar necesita repetări preregistrate. Exemplele fictive și limitele concluziilor din ambele surse sunt păstrate în anexele A și B, secțiunea 9; nu reprezintă rezultate măsurate și nu permit generalizări despre toți utilizatorii sau cauzalitatea jargonului.

### 8. Market Reference Set și reprezentarea AI

Candidații potențial relevanți din toate grupurile intră în aceeași reuniune de Discovery, cu proveniența păstrată și eligibilitate verificată independent. Entitățile adiacente rămân în observațiile brute fără eligibilitate automată.

Comparațiile de Discovery pot fi publicate descriptiv, cu limitele explicite. Pentru evaluarea reprezentării unei piețe verificate, Market Reference Set se îngheață înaintea unor execuții noi și separate. Aceleași răspunsuri nu construiesc populația și nu constituie simultan evaluarea independentă a reprezentării sale.

Nou identificat nu înseamnă nou intrat pe piață. Absența din răspuns sau ciclu nu dovedește încetarea activității.


## Istoricul documentului unic

0.1.0 — 11 octombrie 2026: integrarea DISCOVERY v0.1.0 și USER v0.3.0; 36 de interogări standard și 4 exploratorii; reguli de precedență, inventar comun, 288 de execuții standard și 8 exploratorii propuse; surse păstrate integral. Versiunile documentelor sursă și toate istoricele lor sunt conservate în anexele următoare.

---

# Anexa A — MKT-RO-AIV-discovery-query-set-v0.1.0.md, integral

Conținut istoric integral. SHA-256 al sursei: `898e1a26ab2e66940164487152b63f0126188810dfc6ab08c2968bde60f817b7`.

````markdown
---
title: "Market Discovery Query Set — MKT-RO-AIV"
version: "0.1.0"
status: "Propunere pentru pilot; neînghețat pentru execuție oficială"
created: "2026-10-09"
language: "ro-RO"
series_id: "MKT-RO-AIV"
document_role: "Anexă operațională propusă la Market Discovery Execution Plan"
normative_basis:
  - "AVL-001 — Foundation"
  - "AVL-202 — Cadrul metodologic"
  - "AVL-200 — Standard dovezi, măsurare și trasabilitate"
  - "AVL-MKT-001 v0.9.0 — draft public"
related_document: "MKT-RO-AIV-DISCOVERY-PLAN v0.1.0, 2026-10-02"
---

# Market Discovery Query Set — MKT-RO-AIV

Acest document propune formulările pentru descoperirea repetabilă a furnizorilor-candidați. Nu constituie Market Reference Set, AVL-MKT-002, o rulare oficială sau un set validat empiric. Întrebările și parametrii numerici de mai jos sunt propuneri noi pentru pilot, nu decizii deja aprobate în conversațiile anterioare.

## 1. Ce păstrăm din deciziile existente

Seria urmărește trimestrial furnizori relevanți pentru clienți din România. Se reia Discovery în fiecare trimestru, alături de reverificarea entităților cunoscute. Datele brute și proveniența se păstrează. Candidații sunt reuniți, nu selectați prin votul platformelor.

Ordinea de lucru este Discovery → Candidate Set → Verification → Market Reference Set înghețat → Query Universe / Market Query Panel → măsurarea reprezentării AI.

Instanța planificată este MKT-RO-AIV-2026Q4, urmată de instanțe trimestriale noi. Trimestrul identifică instanța pieței. T0 identifică baseline-ul, iar F1…Fn rulările ulterioare atunci când designul le folosește; nu înlocuiesc identificatorul trimestrial. Pilotul rămâne separat.

## 2. Domeniul propus pentru aplicare

Familia de servicii: GEO, AEO, AI Visibility, AI Search Optimization, LLM Visibility / LLM Optimization orientat către reprezentarea brandurilor și servicii funcțional echivalente.

Geografia de interes este România, din perspectiva clientului. Separăm furnizorii locali, independenții și furnizorii internaționali cu dovadă explicită de deservire a României. Simpla accesibilitate globală nu dovedește această orientare.

Propunere de delimitare pentru prima instanță: serviciile de audit, măsurare, monitorizare, consultanță și optimizare intră în evaluare; un furnizor hibrid software + servicii poate intra dacă există dovadă a serviciului. Un instrument exclusiv self-service se păstrează ca Technology Provider pentru context, separat de populația principală de prestatori. Această delimitare trebuie declarată înaintea rulării oficiale; nu este o excludere deja impusă de planul anterior.

Nu se cere implementare ca o condiție obligatorie și nici nu se exclude implementarea oferită de alți furnizori: delimitarea comercială AVL/Ichnometria nu definește piața întreagă.

## 3. Nucleul propus: 12 întrebări

Identificatorii sunt locali acestui set. Nu rezervă documente normative AVL. În pilot, stratul este CORE-CANDIDATE; promovarea la CORE se documentează după evaluare.

Textul din coloana „Interogare exactă” este întregul text transmis. Nu se adaugă preambul, nume de furnizori, anul sau instrucțiuni de clasare. Aceeași formulare se utilizează în Search și pe suprafețele AI; diferențele de rezultat se păstrează separat pe suprafață.

| ID | Clasă principală | Interogare exactă | Rațiune |
|---|---|---|---|
| Q-DISC-001 | TERM | Cine oferă servicii GEO (Generative Engine Optimization) pentru firme din România? | Eticheta GEO dezambiguizată. |
| Q-DISC-002 | TERM | Cine oferă servicii AEO (Answer Engine Optimization) pentru firme din România? | Furnizori care folosesc AEO. |
| Q-DISC-003 | TERM | Cine oferă servicii de AI Visibility pentru firme din România? | Termenul-umbrelă comercial. |
| Q-DISC-004 | TERM | Cine oferă servicii de AI Search Optimization pentru firme din România? | Vocabular alternativ pentru căutarea AI. |
| Q-DISC-005 | TERM | Cine oferă servicii de LLM Optimization pentru vizibilitatea brandurilor din România în răspunsurile AI? | Reduce confuzia cu antrenarea sau optimizarea tehnică a modelelor. |
| Q-DISC-006 | PROBLEM | Cine poate ajuta o firmă din România să fie menționată sau recomandată în răspunsurile asistenților AI? | Nevoia de reprezentare a firmei, fără acronime. |
| Q-DISC-007 | PROBLEM | Cine poate ajuta un site al unei firme din România să fie citat ca sursă în răspunsurile AI? | Citarea sursei, distinctă de menționarea firmei. |
| Q-DISC-008 | PROVIDER | Ce agenții SEO oferă și optimizare pentru apariția firmelor din România în răspunsurile AI? | Servicii integrate în oferte SEO. |
| Q-DISC-009 | PROVIDER | Ce consultanți independenți oferă servicii de vizibilitate în răspunsurile AI pentru firme din România? | Reduce dependența de descoperirea agențiilor. |
| Q-DISC-010 | SERVICE | Cine oferă audituri ale vizibilității brandurilor din România în răspunsurile AI? | Evaluare și diagnostic, inclusiv fără implementare. |
| Q-DISC-011 | SERVICE | Cine oferă servicii de monitorizare a mențiunilor și citărilor brandurilor din România în răspunsurile AI? | Măsurare recurentă; software-ul și serviciul se disting în Verification. |
| Q-DISC-012 | PROVIDER | Ce furnizori internaționali oferă servicii GEO, AEO sau AI Visibility pentru clienți din România? | Acoperire explicită INTL-RO, de verificat din surse. |

Toate întrebările au intenție de identificare a prestatorului. Clasele descriu unghiul principal, nu categorii perfect disjuncte. Frecvența răspunsurilor nu se interpretează ca cerere comercială și nu se presupune că întrebările reprezintă distribuția reală a căutărilor consumatorilor.

## 4. Stratul exploratoriu propus pentru primul pilot

Pentru primul pilot propun patru interogări suplimentare, rulate în Google Search și Bing Search. Limitarea suprafețelor este un compromis operațional explicit, nu un test de reprezentare transversală.

| ID | Interogare exactă | Ce explorează |
|---|---|---|
| Q-DISC-X01 | Cine oferă servicii de optimizare pentru apariția firmelor din România în ChatGPT? | Descoperire prin numele unui produs, în locul categoriei. |
| Q-DISC-X02 | Cine oferă servicii de optimizare pentru Google AI Overviews și AI Mode pentru firme din România? | Furnizori care se poziționează în ecosistemul Google. |
| Q-DISC-X03 | Cine oferă servicii GEO, AEO sau AI Visibility în Sibiu? | Sensibilitate locală; rezultatul nu reprezintă separat o piață Sibiu validată. |
| Q-DISC-X04 | Which providers offer GEO, AEO or AI visibility services to businesses in Romania? | Furnizori și pagini comerciale accesibile prin engleză. |

În trimestre viitoare se pot preregistra alte patru întrebări exploratorii: variante Perplexity/Gemini/Claude/Copilot, alte orașe, „LLM Visibility”, „AI SEO”, directoare profesionale sau profile publice. Fiecare text nou primește ID și rațiune înainte de execuție. Nu este permisă alegerea numai a întrebărilor care returnează un anumit furnizor.

Termenii Agentic Visibility / machine accessibility pot fi testați într-un modul de frontieră. Serviciile generale de creare de agenți AI, chatboturi sau automatizări nu devin eligibile automat. Extinderea pieței necesită o decizie de scope distinctă.

## 5. De ce evităm alte formulări în nucleu

- „Cei mai buni”, „top 10”, „lideri”: selectează reputație sau ierarhii și poate restrânge Discovery.
- „Recomandă-mi doar furnizori cu studii de caz / metodologie publică”: introduce filtre de maturitate care nu sunt echivalente cu apartenența la piață.
- „Agenții din România” ca unică formulare: poate exclude independenți și furnizori internaționali relevanți.
- „Cine face marketing cu AI?”: confundă folosirea AI pentru prestare cu serviciile de vizibilitate în AI.
- „Alternative la Alex Matescu / AI Visibility Lab”: introduce o ancoră proprie în descoperirea de bază.
- „Cine a apărut nou trimestrul acesta?”: solicită sistemului o reconstrucție istorică; noutatea se stabilește din comparația registrelor.

Nu se cere un număr fix de furnizori într-un răspuns AI. Se extrag toți candidații din răspunsul inițial complet, inclusiv cei fără URL; lipsa URL-ului se documentează.

## 6. Condiții propuse de rulare

Parametrii sunt propuși pentru testare și fixare după pilot.

| Element | Propunere |
|---|---|
| Suprafețe CORE | Google Search organic; Bing Search organic; Google AI Mode; ChatGPT; Claude; Copilot; Gemini; Perplexity. |
| Google AI Overview | Observație separată în rularea Google Search, când este afișat; nu reprezintă o a noua interogare activă. |
| Număr execuții | O execuție pe pereche întrebare–suprafață pentru Discovery de bază. Nu estimează stabilitatea sau probabilitatea apariției. |
| Google/Bing | Primele 20 de rezultate organice în ordinea afișată, sau toate disponibile dacă sunt mai puține. Pozițiile se numără înainte de deduplicarea furnizorilor. |
| Ads / module locale | Se conservă în captură; candidații se înregistrează cu proveniență separată, în strat suplimentar, fără amestec cu randamentul CORE organic. |
| Sisteme conversaționale | Conversație nouă pentru fiecare întrebare; primul răspuns complet; fără follow-up sau regenerate în CORE. |
| Clarificare solicitată de AI | Se conservă ca răspuns inițial; eventuala continuare este exploratorie, legată de rularea originală. |
| Acces web | Activat explicit unde există control; setarea și utilizarea observată se înregistrează distinct. Citările singure nu dovedesc exhaustiv ce a fost accesat. |
| Moduri speciale | Fără Deep Research / agent în CORE propus. Un astfel de mod, dacă se testează, reprezintă o condiție distinctă. |
| Cont | Logged-out unde este practic disponibil; altfel cont și setări documentate, păstrate consecvent. |
| Context | Fără fișiere, proiecte, conversații anterioare sau listă de furnizori atașată; memoria și instrucțiunile personale se dezactivează unde este posibil și se documentează. |
| Geografie | România ca piață declarată; locația fizică și cea afișată/inferată de produs se notează separat. Incognito nu garantează absența personalizării sau a localizării. |
| Fereastră | Propunere: cel mult 7 zile consecutive pentru un ciclu; începutul, sfârșitul și cutoff-ul se declară înainte. |
| Indisponibilitate | Se consemnează ca atare, nu ca absență a furnizorilor. O singură reîncercare pentru eroare tehnică, în fereastra declarată, cu păstrarea ambelor execuții. |

Volum CORE propus: 12 × 8 = 96 execuții per ciclu complet. Cele patru query-uri exploratorii pe două motoare adaugă 8 execuții. Observarea AI Overview și verificarea surselor adaugă muncă, fără a reprezenta aceleași unități de numărare.

Pentru Search se inspectează paginile relevante din fereastra de 20 de rezultate. Pentru liste/directoare, se parcurge integral pagina accesată și se notează candidații potențiali cu URL și proveniență; continuările paginate sau navigarea pe alte pagini intră în registrul suplimentar. Pentru AI se păstrează răspunsul și lista surselor; numele găsite exclusiv prin deschiderea unei surse sunt discovery asistat de sursă, nu mențiuni ale răspunsului AI.

## 7. Oprire și pilot

Pilot scurt propus: Q-DISC-001, 006, 009 și 011 pe Google Search, Bing Search și ChatGPT, pentru 12 execuții. Testează vocabularul, extragerea, adâncimea și efortul. Nu validează singur celelalte întrebări sau suprafețe; înainte de înghețare acestea trebuie de asemenea probate.

Pentru fiecare întrebare se examinează candidații unici, contribuția la reuniunea setului, ambiguitățile și timpul. Contribuția exclusivă se calculează față de toate celelalte query-uri, nu numai față de cele executate mai devreme; altfel ordinea ar favoriza artificial primele întrebări.

Propunerea de oprire oficială este bazată pe buget fix: toate cele 96 de perechi CORE disponibile, adâncimea fixată și cele 8 execuții exploratorii preregistrate. Orice lipsă se declară. După aceste etape se raportează randamentul explorării; nu se declară automat saturație.

Această regulă închide o rundă documentată, nu dovedește că piața a fost epuizată. Dacă pilotul arată randament mare la adâncimea-limită sau în explorare, se mărește bugetul în versiunea următoare, înainte de prima execuție oficială. Pragul numeric de saturație nu este inventat acum.

## 8. Extragere și verificare

Se reunesc candidații din toate sursele și se păstrează fiecare observație. Aceeași entitate poate avea mai multe nume, domenii sau apariții; deduplicarea nu șterge traseul descoperirii. Brandul și persoana asociată nu se numără automat ca doi furnizori.

Fișa minimă a observației: run_id, query_id, suprafață, nume observat, descrierea serviciului, ordine observată, URL-uri afișate, evidence_id, dată/oră, strat CORE/EXPLORATORY/SUPPLEMENTAL, note.

În Verification se verifică distinct identitatea, serviciul efectiv oferit, relevanța pentru România, valabilitatea temporală și trasabilitatea sursei. Se aplică statusurile protocolului, păstrând separat incertitudinea. Nu se cere modelului să decidă ELIGIBLE prin simpla recomandare.

Furnizorii cunoscuți din ciclurile anterioare sunt reverificați separat chiar dacă nu mai apar în Discovery. Se separă „redescoperit prin CORE”, „cunoscut anterior, reverificat” și „nou în registru”. Nou în registru nu înseamnă nou înființat. Neredescoperit nu înseamnă ieșit de pe piață.

O rută suplimentară prin directoare, organizații profesionale, publicații sau surse cunoscute poate reduce dependența de Search/AI. Sursele și adâncimea se preregistrează; nu se aleg pentru a include preferențial o entitate. Verificarea din surse directe nu elimină singură biasul de descoperire.

## 9. Clarificări necesare în documentație

1. AVL-MKT-001 permite AI în Discovery, însă REQ-015 cere freeze înainte de „prima execuție AI”. Propunere de precizare: „înainte de prima execuție AI destinată măsurării reprezentării pieței; execuțiile de Discovery se păstrează separat și nu sunt reutilizate ca măsurători ale panelului”. Această propunere nu modifică pagina publică.
2. Corpusul păstrează încă formulări F0 și T1/T2 în unele documente mai vechi. Pentru noul set păstrăm decizia T0 + F1…Fn și declarăm discrepanța; nu redenumim dovezile istorice.
3. Protocolul public AVL-MKT-001 are statut Draft v0.9.0, iar AVL-MKT-002 este planificat. Setul poate fi testat acum, dar rularea oficială urmează activării protocolului și declarării instanței, cutoff-ului și condițiilor.
4. Înainte de freeze se închid explicit delimitarea software/servicii, condiția per suprafață, fereastra calendaristică, cutoff-ul, adâncimea și regula de oprire.

## 10. Surse consultate și limitele revizuirii

Referințe principale, accesate la 9 octombrie 2026:

- https://delamatescu.ro/lab
- https://delamatescu.ro/lab/introducere
- https://delamatescu.ro/lab/cercetare
- https://delamatescu.ro/lab/metodologie
- https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate
- https://delamatescu.ro/lab/metodologie/tabula-rasa-f0
- https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica
- https://delamatescu.ro/lab/metodologie/protocol-delimitare-piata-eligibilitate
- https://delamatescu.ro/lab/articole
- https://delamatescu.ro/lab/studii-de-caz
- Market Discovery Execution Plan — MKT-RO-AIV, v0.1.0, fișier datat 2 octombrie 2026, citit în versiunea disponibilă.
- Istoricul relevant recuperat al discuțiilor privind Market Measurement, regulile trimestriale și convenția T0/Fn. Recuperarea contextului nu reprezintă o lectură exhaustivă a tuturor conversațiilor contului.

Au fost consultate documentele metodologice și de cercetare, paginile de secțiune și materiale editoriale conexe. Aceasta este o revizuire pentru proiectarea Discovery, nu un audit factual integral al fiecărei afirmații de pe site și nici o verificare a întregii bibliografii externe. Nu s-au executat interogările de piață propuse și nu s-au evaluat furnizori.

## Istoric

0.1.0 — 9 octombrie 2026: prima propunere de întrebări exacte; 12 CORE-CANDIDATE și 4 EXPLORATORY; reguli operaționale propuse pentru pilot și observații privind coerența corpusului.
````

# Anexa B — MKT-RO-AIV-user-query-set-v0.3.0.md, integral

Conținut istoric integral. SHA-256 al sursei: `26bee7850192c08e9a97f541b34a727cda05d292f53a9aaa288b6c89c55d7df7`.

````markdown
---
title: "Market Discovery — USER consolidat: întrebări conversaționale și expresii scurte"
version: "0.3.0"
status: "Set standard de lucru pentru pilot; nevalidat empiric"
created: "2026-10-11"
language: "ro-RO"
series_id: "MKT-RO-AIV"
query_set_id: "USER-RO-v0.3.0"
source_versions: ["USER-RO-v0.1.0", "USER-RO-v0.2.0"]
related_query_set: "MKT-RO-AIV-discovery-query-set-v0.1.0.md — Q-DISC-001…012"
document_role: "Anexă operațională; nu constituie AVL-MKT-002"
---

# USER-RO v0.3.0 — versiune consolidată

## 1. Scop, conținut și reguli de precedență

Această versiune reunește toate cele 24 de interogări din cele două fișiere sursă, fără modificarea textelor, și păstrează integral celelalte informații în anexele A și B. Secțiunile 1–9 constituie instrucțiunile consolidate pentru v0.3.0; anexele conservă documentele istorice, inclusiv metadatele, explicațiile, exemplele și istoricul lor.

La cererea de reunire, cele două variante USER sunt păstrate ca subgrupuri distincte:

- **USER-CONV**: cele 12 întrebări complete din v0.1.0, cu preambulul „Am o firmă în România.”;
- **USER-SHORT**: cele 12 expresii scurte din v0.2.0, fără preambul sau completări.

DISCOVERY rămâne setul oficial de lucru, cu expertiză în domeniu, documentat separat. Niciunul dintre cele două fișiere USER nu conține lista integrală Q-DISC-001…012; prezenta consolidare nu inventează și nu înlocuiește acea listă. Se păstrează astfel două familii: DISCOVERY și USER; familia USER are acum două subgrupuri.

**Precedență:** instrucțiunea din v0.2.0 care retrăgea v0.1.0 este istorică și nu se aplică v0.3.0. Ambele variante sunt incluse în versiunea curentă. Clasele PROBLEM/GOAL/PROVIDER se aplică numai USER-CONV. Volumele și ordinea de execuție de mai jos înlocuiesc regulile incompatibile din anexe. Restul regulilor metodologice din surse se păstrează, cu aplicare la subgrupul corespunzător.

Formulările sunt scenarii plauzibile, nu date validate despre comportamentul sau volumele de căutare ale utilizatorilor. „Oficial” descrie rolul DISCOVERY în exercițiu, nu validarea empirică. Statutul rămâne de pilot; documentul nu raportează execuții de piață noi.

## 2. USER-CONV — cele 12 întrebări din v0.1.0

Se copiază exclusiv promptul complet, cu preambul și diacritice, fără ghilimele sau instrucțiuni de rol. Nu se furnizează identitatea firmei. Situațiile descrise sunt simulate, nu afirmații despre firma autorului.

| ID v0.3.0 | ID sursă v0.1.0 | Intenție | Prompt complet, neschimbat |
|---|---|---|---|
| Q-USER-CONV-001 | Q-USER-001 | PROBLEM | Am o firmă în România. De ce nu apare firma mea în ChatGPT? |
| Q-USER-CONV-002 | Q-USER-002 | PROBLEM | Am o firmă în România. De ce ChatGPT recomandă concurența, dar pe mine nu? |
| Q-USER-CONV-003 | Q-USER-003 | PROBLEM | Am o firmă în România. Ce pot face dacă AI-ul spune lucruri greșite despre firma mea? |
| Q-USER-CONV-004 | Q-USER-004 | PROBLEM | Am o firmă în România. Site-ul meu apare pe Google, dar nu apare în răspunsurile AI. Ce pot face? |
| Q-USER-CONV-005 | Q-USER-005 | GOAL | Am o firmă în România. Cum fac să îmi găsească oamenii firma când întreabă un asistent AI? |
| Q-USER-CONV-006 | Q-USER-006 | GOAL | Am o firmă în România. Cum fac să îmi recomande ChatGPT firma când cineva caută serviciile mele? |
| Q-USER-CONV-007 | Q-USER-007 | GOAL | Am o firmă în România. Cum fac să apară linkul site-ului meu în răspunsurile AI? |
| Q-USER-CONV-008 | Q-USER-008 | GOAL | Am o firmă în România. Cum fac să apară firma mea în răspunsurile date de AI pe Google? |
| Q-USER-CONV-009 | Q-USER-009 | PROVIDER | Am o firmă în România. Cine mă poate ajuta să apară firma mea în ChatGPT? |
| Q-USER-CONV-010 | Q-USER-010 | PROVIDER | Am o firmă în România. Cine poate verifica ce spun asistenții AI despre firma mea? |
| Q-USER-CONV-011 | Q-USER-011 | PROVIDER | Am o firmă în România. Cine poate urmări dacă firma mea este recomandată de asistenții AI? |
| Q-USER-CONV-012 | Q-USER-012 | PROVIDER | Am o firmă în România. Caut pe cineva care să mă ajute ca asistenții AI să găsească informații corecte despre firma mea. La cine pot apela? |

PROBLEM descrie o dificultate; GOAL exprimă un rezultat dorit; PROVIDER caută explicit ajutor extern. USER-CONV presupune familiaritate cu produsele AI, fără terminologie GEO/AEO; nu acoperă persoanele care nu cunosc deloc aceste produse.

## 3. USER-SHORT — cele 12 expresii din v0.2.0

Se copiază exclusiv expresia, cu scrierea și diacriticele originale. Nu se adaugă preambul, propoziție explicativă, instrucțiune de rol sau „România” acolo unde lipsește.

| ID v0.3.0 | ID sursă v0.2.0 | Expresia exactă, neschimbată |
|---|---|---|
| Q-USER-SHORT-001 | Q-USER-001 | consultant AI |
| Q-USER-SHORT-002 | Q-USER-002 | recomandare ChatGPT |
| Q-USER-SHORT-003 | Q-USER-003 | promovare ChatGPT |
| Q-USER-SHORT-004 | Q-USER-004 | firma mea pe ChatGPT |
| Q-USER-SHORT-005 | Q-USER-005 | apariție în ChatGPT |
| Q-USER-SHORT-006 | Q-USER-006 | vizibilitate AI |
| Q-USER-SHORT-007 | Q-USER-007 | promovare firmă AI |
| Q-USER-SHORT-008 | Q-USER-008 | optimizare site ChatGPT |
| Q-USER-SHORT-009 | Q-USER-009 | marketing AI |
| Q-USER-SHORT-010 | Q-USER-010 | agenție AI România |
| Q-USER-SHORT-011 | Q-USER-011 | specialist ChatGPT |
| Q-USER-SHORT-012 | Q-USER-012 | servicii promovare AI |

Identitatea unei interogări include `query_set_id`, `query_id` și `query_exact`. În v0.3.0 se adaugă `query_subgroup`, `source_query_set_id` și `source_query_id` pentru trasabilitate. Același ID local Q-USER-001 din cele două surse desemnează texte diferite. Rezultatele istorice rămân atribuite versiunilor originale; nu se reetichetează retroactiv ca execuții v0.3.0.

## 4. Diferențe între formulări și limitele comparației

| Dimensiune | DISCOVERY | USER-CONV | USER-SHORT |
|---|---|---|---|
| Rol | Descoperire ghidată de definiția pieței | Nevoi exprimate conversațional | Căutare prin expresii nespecializate |
| Formă | Întrebări complete și structurate | Întrebări complete, limbaj accesibil | Expresii de 2–4 cuvinte |
| Vocabular | GEO, AEO, AI Visibility, audit, monitorizare | Probleme, rezultate dorite, ajutor | Consultant, promovare, marketing, specialist, ChatGPT |
| Intenție | Identificarea explicită a furnizorilor relevanți | 4 PROBLEM, 4 GOAL, 4 PROVIDER | Incompletă sau ambiguă; se clasifică din rezultate |
| Geografie în text | România în întrebările de bază, conform surselor | România în toate cele 12 prompturi | România doar în Q-USER-SHORT-010 |
| Platformă numită | Conform setului separat | ChatGPT 4; Google AI 1; AI generic 7 | ChatGPT 6; AI generic 6 |
| Rezultat observat | Furnizori și surse relevante | Explicații, acțiuni, clarificări și furnizori | Interpretări, soluții, furnizori și surse, inclusiv adiacente |

În USER-CONV, ChatGPT apare în 001, 002, 006 și 009; răspunsurile AI din Google în 008. În USER-SHORT, ChatGPT apare în 002, 003, 004, 005, 008 și 011. Aceste distribuții sunt alegeri de proiectare, nu estimări de popularitate. Suprafața de execuție se înregistrează separat de platforma numită în prompt.

Ambiguitatea USER-SHORT este intenționată: „recomandare ChatGPT” poate însemna recomandarea produsului, recomandare făcută cu produsul sau dorința de a fi recomandat de acesta; „marketing AI” poate conduce către producerea de conținut cu AI. Se notează numai interpretarea susținută de răspuns, fără presupuneri despre raționamentul intern. Termenii largi pot conduce spre automatizări, training ori software. Rezultatele internaționale și adiacente se păstrează în observațiile brute; eligibilitatea pentru piața românească se verifică ulterior.

Comparația este descriptivă: formulările diferă în lungime, vocabular, intenție, geografie și platformă. Nu izolează experiența utilizatorului sau efectul jargonului. Numerele identice nu definesc perechi semantice între DISCOVERY, CONV și SHORT. Un experiment controlat ulterior ar necesita aceeași nevoie, geografie și platformă, schimbând numai formularea. Numărul egal de interogări nu înseamnă echivalență semantică.

## 5. Execuție consolidată

Se rulează subgrupurile distinct și se raportează separat în fiecare ciclu. Suprafețele propuse, în ordinea din surse, sunt: Google Search organic, Bing Search organic, Google AI Mode, ChatGPT, Claude, Copilot, Gemini și Perplexity, în limita disponibilității lor la execuție.

| Acoperire | Interogări | Suprafețe | Execuții planificate |
|---|---:|---:|---:|
| USER-CONV | 12 | 8 | 96 |
| USER-SHORT | 12 | 8 | 96 |
| USER consolidat | 24 | 8 | 192 |
| DISCOVERY + USER consolidat | 36 | 8 | 288 |

În surse, 192 desemna DISCOVERY + o singură variantă USER. În v0.3.0, 192 desemnează numai cele două subgrupuri USER; ciclul complet cu DISCOVERY are 288. Cele patru interogări exploratorii menționate în surse rămân modul separat și nu intră în aceste totaluri. Incidentele și reîncercările se raportează separat.

Se păstrează conversație nouă pentru fiecare prompt, fără furnizori sugerați, fișiere, numele autorului sau identitatea firmei. Condițiile de cont, memorie/personalizare, căutare, dispozitiv, adâncime Search și oprire se mențin comparabile în aceeași fereastră temporală preregistrată. Se înregistrează modelul și interfața afișate, data, ora, locația observată și abaterile. Incognito și conversația nouă nu garantează absența personalizării.

Pilotul păstrează propunerea de 20 de rezultate organice pe Google/Bing și un singur răspuns complet inițial pe suprafețele conversaționale. Aceste praguri nu sunt validate empiric.

Adaptarea ordinii la v0.3.0: pe suprafețele 1, 3, 5 și 7 se rulează DISCOVERY → USER-CONV → USER-SHORT; pe 2, 4, 6 și 8, USER-SHORT → USER-CONV → DISCOVERY. Dacă se rulează numai USER, se omite DISCOVERY. În fiecare subgrup se păstrează ordinea 001–012. Ordinea se fixează înainte și se păstrează între cicluri sau se documentează schimbarea; nu elimină toate efectele temporale.

O indisponibilitate tehnică nu este un răspuns fără furnizori. Se poate aplica o singură reîncercare conform regulii preregistrate, păstrând ambele înregistrări.

## 6. Rezultate valide și câmpuri de înregistrare

Explicațiile fără furnizori sunt rezultate valide pentru întrebările informaționale. Clarificările și categoriile adiacente sunt observații valide pentru expresiile ambigue. Nu se răspunde la clarificări și nu se adaugă „dar cine mă poate ajuta?” în seria principală. Continuările pot forma un modul separat, cu text fix și proveniență.

Se separă rezultatele organice, reclamele, modulele locale și AI Overview. Furnizorii descoperiți doar în pagini deschise sunt candidați din discovery asistat de sursă, nu mențiuni directe ale SERP-ului sau răspunsului AI.

Câmpurile comune consolidate sunt: `instance_id`, `query_set_id`, `query_subgroup`, `query_id`, `query_exact`, `source_query_set_id`, `source_query_id`, `intent_class`, `execution_surface`, `target_platform_in_prompt`, `run_id`, `timestamp`, `environment_id`, `execution_status`, `raw_evidence_id`.

`intent_class` păstrează PROBLEM/GOAL/PROVIDER pentru CONV și este N/A pentru SHORT. Pentru interpretarea observată se folosesc separat `interpreted_intent`, `interpretation_evidence`, categoria soluției și orientarea geografică observabilă. UNKNOWN și MULTIPLE marchează sensurile neclare ori mixte. Categoriile includ AI Visibility, automatizări, training, conținut/marketing, software, alta sau incertă.

Pentru răspunsurile AI se păstrează toate câmpurile din surse:

- `explanations_present` și `actionable_advice_present`: YES/NO/UNKNOWN;
- `clarification_requested`, `provider_named`, `software_tool_named`: YES/NO;
- `provider_recommended`: YES/NO/UNCERTAIN;
- `terminology_introduced`: de exemplu GEO/AEO introduse în răspuns;
- `source_urls` și legătura lor cu afirmațiile;
- numele și descrierile furnizorilor, separat de instrumente și publisheri.

Câmpurile pot coexista. O recomandare explicită propune furnizorul ca opțiune de ajutor; menționarea sau citarea unui articol nu este suficientă. Pentru Search se păstrează poziția, URL-ul și tipul: pagină comercială de posibil prestator, articol/ghid, director/listă, instrument software, altul sau incert. Prezența în rezultate nu se codifică drept recomandare editorială a motorului.

## 7. Comparații și interpretare

Se compară în aceeași suprafață și același ciclu: DISCOVERY–CONV, DISCOVERY–SHORT și CONV–SHORT. Reuniunea USER poate fi raportată suplimentar, cu mențiunea că are 24 de interogări, față de 12 pentru DISCOVERY. Nu se interpretează numărul brut mai mare de candidați din reuniune fără această diferență de volum. Search organic și răspunsurile AI nu formează un clasament unic.

Se păstrează toate dimensiunile din surse: execuții completate și incidente cu numitorul real; răspunsuri care numesc versus recomandă furnizori; candidați unici, comuni și exclusivi; surse și tipuri de pagini; explicații, instrucțiuni și clarificări; distribuția intențiilor, soluțiilor și geografiei; comparațiile după Verification pentru furnizori eligibili, distinct de datele brute.

Clasele PROBLEM/GOAL/PROVIDER și examinarea separată a 009–012 sunt valabile numai pentru CONV. SHORT nu are un subset PROVIDER predefinit. Mai puțini furnizori nu înseamnă automat performanță inferioară: opt întrebări CONV sunt informaționale sau orientate spre rezultat, iar SHORT nu cere uniform prestatori GEO/AEO ori România.

Pentru oricare două grupuri A și B de candidați deduplicați se raportează mărimile lor, intersecția și diferențele. Opțional, Jaccard = |A ∩ B| / |A ∪ B|; dacă reuniunea este goală, se raportează N/A. Entitățile afișate, candidații potențial relevanți și furnizorii confirmați eligibili rămân categorii separate.

O singură execuție descrie observația punctuală, nu probabilitatea stabilă de recomandare. Aceasta ar necesita repetări preregistrate. Exemplele fictive și limitele concluziilor din ambele surse sunt păstrate în anexele A și B, secțiunea 9; nu reprezintă rezultate măsurate și nu permit generalizări despre toți utilizatorii sau cauzalitatea jargonului.

## 8. Market Reference Set și reprezentarea AI

Candidații potențial relevanți din toate grupurile intră în aceeași reuniune de Discovery, cu proveniența păstrată și eligibilitate verificată independent. Entitățile adiacente rămân în observațiile brute fără eligibilitate automată.

Comparațiile de Discovery pot fi publicate descriptiv, cu limitele explicite. Pentru evaluarea reprezentării unei piețe verificate, Market Reference Set se îngheață înaintea unor execuții noi și separate. Aceleași răspunsuri nu construiesc populația și nu constituie simultan evaluarea independentă a reprezentării sale.

Nou identificat nu înseamnă nou intrat pe piață. Absența din răspuns sau ciclu nu dovedește încetarea activității.

## 9. Istoric și integritatea surselor

- **0.3.0 — 11 octombrie 2026:** consolidarea v0.1.0 și v0.2.0 la cererea utilizatorului; toate cele 24 de texte păstrate; subgrupuri CONV/SHORT și mapare la ID-urile originale; reconcilierea retragerii, clasificărilor, volumelor și ordinii; ambele surse reproduse integral mai jos. Nicio interogare de piață executată în această consolidare.
- **0.2.0 — 10 octombrie 2026:** înlocuirea întrebărilor complete cu expresii scurte; istoricul complet este în anexa B.
- **0.1.0 — 10 octombrie 2026:** introducerea celor 12 întrebări USER conversaționale și a procedurii de comparație; istoricul complet este în anexa A.

Anexele sunt copii integrale ale fișierelor sursă, nu instrucțiuni care anulează regulile consolidate. Formulările „nou”, „curent”, „retras” și totalurile din anexe se citesc în contextul versiunii istorice respective. Interogările repetate în anexe sunt aceleași 24 de texte, nu interogări suplimentare de executat.

## Anexa A — MKT-RO-AIV-user-query-set-v0.1.0.md, integral

SHA-256 al fișierului sursă: `f4cf09f33557021d5716710388ebc075923b1399c865b5aa05d0f4953c77e024`.

```markdown
---
title: "Market Discovery — set utilizator fără cunoștințe de specialitate și comparație între seturi"
version: "0.1.0"
status: "Set standard de lucru pentru pilot; nevalidat empiric"
created: "2026-10-10"
language: "ro-RO"
series_id: "MKT-RO-AIV"
query_set_id: "USER-RO-v0.1.0"
related_query_set: "MKT-RO-AIV-discovery-query-set-v0.1.0.md — Q-DISC-001…012"
document_role: "Anexă operațională; nu constituie AVL-MKT-002"
---

# Setul USER-RO și comparația cu setul DISCOVERY

## 1. Scop și statut

La cererea lui Alex Matescu, se adaugă un al doilea set standard, rulat alături de setul existent la fiecare ciclu. Setul existent se numește aici DISCOVERY; setul nou se numește USER. Ambele au 12 interogări. USER descrie perspectiva unui proprietar de firmă care cunoaște asistenții AI ca produse, dar nu terminologia GEO/AEO.

Formulările sunt ipoteze de limbaj plauzibil, create pentru acest exercițiu. Nu provin dintr-un eșantion de căutări reale și nu reprezintă distribuția demonstrată a comportamentului utilizatorilor. Setul nu acoperă toate tipurile de utilizatori: exclude intenționat persoanele care nu cunosc deloc produsele AI.

Textele sunt fixate pentru pilotul acestei versiuni. O schimbare de text primește o versiune nouă și rămâne legată de istoricul vechi. Numărul egal de întrebări permite un efort comparabil; nu face seturile echivalente semantic.

## 2. Textul exact transmis

Fiecare prompt este format din contextul fix „Am o firmă în România.”, un spațiu și întrebarea de mai jos. Contextul delimitează piața și evită schimbarea geografiei declarate între seturi. Este o convenție de studiu, nu o presupunere că fiecare utilizator real precizează țara.

Coloana următoare conține promptul complet, gata de copiat. Se folosește identic în Search și pe suprafețele AI, fără ghilimelele delimitatoare și fără instrucțiuni suplimentare.

| ID | Intenție | Prompt complet |
|---|---|---|
| Q-USER-001 | PROBLEM | Am o firmă în România. De ce nu apare firma mea în ChatGPT? |
| Q-USER-002 | PROBLEM | Am o firmă în România. De ce ChatGPT recomandă concurența, dar pe mine nu? |
| Q-USER-003 | PROBLEM | Am o firmă în România. Ce pot face dacă AI-ul spune lucruri greșite despre firma mea? |
| Q-USER-004 | PROBLEM | Am o firmă în România. Site-ul meu apare pe Google, dar nu apare în răspunsurile AI. Ce pot face? |
| Q-USER-005 | GOAL | Am o firmă în România. Cum fac să îmi găsească oamenii firma când întreabă un asistent AI? |
| Q-USER-006 | GOAL | Am o firmă în România. Cum fac să îmi recomande ChatGPT firma când cineva caută serviciile mele? |
| Q-USER-007 | GOAL | Am o firmă în România. Cum fac să apară linkul site-ului meu în răspunsurile AI? |
| Q-USER-008 | GOAL | Am o firmă în România. Cum fac să apară firma mea în răspunsurile date de AI pe Google? |
| Q-USER-009 | PROVIDER | Am o firmă în România. Cine mă poate ajuta să apară firma mea în ChatGPT? |
| Q-USER-010 | PROVIDER | Am o firmă în România. Cine poate verifica ce spun asistenții AI despre firma mea? |
| Q-USER-011 | PROVIDER | Am o firmă în România. Cine poate urmări dacă firma mea este recomandată de asistenții AI? |
| Q-USER-012 | PROVIDER | Am o firmă în România. Caut pe cineva care să mă ajute ca asistenții AI să găsească informații corecte despre firma mea. La cine pot apela? |

PROBLEM: utilizatorul descrie o dificultate. GOAL: exprimă un rezultat dorit. PROVIDER: caută explicit ajutor extern.

Întrebările sunt intenționat fără acronime și denumiri de livrabile specializate. Se păstrează diacriticele. Nu se cere sistemului să joace rolul unui începător: perspectiva este exprimată prin conținutul cererii.

PROBLEM și GOAL sunt scenarii simulate. Răspunsurile lor nu constituie dovezi că firma autorului are problema descrisă. Nu se furnizează identitatea firmei.

## 3. Limite deliberate ale designului

Patru prompturi numesc ChatGPT (001, 002, 006, 009); 008 numește răspunsurile AI din Google; celelalte folosesc termeni generici. Distribuția este: ChatGPT — 4/12; Google AI — 1/12; AI generic — 7/12. Această distribuție este o alegere de proiectare și nu o estimare a popularității platformelor.

Un prompt despre ChatGPT poate fi adresat și Gemini sau Claude. Se separă:
- suprafața de execuție: unde este pusă întrebarea;
- platforma-țintă din întrebare: despre ce produs întreabă utilizatorul.

Setul DISCOVERY folosește terminologie și intenție predominant comercială. USER schimbă și vocabularul, și tipul intenției, și uneori platforma-țintă. Prin urmare, comparația este descriptivă între două seturi de scenarii. Nu izolează efectul experienței utilizatorului sau efectul jargonului.

Nu se presupune corespondență unu-la-unu între Q-DISC-001 și Q-USER-001. Pentru un test ulterior al formulării, se proiectează perechi cu aceeași nevoie, geografie și platformă, schimbând numai vocabularul. Acest test nu este executat aici.

## 4. Execuție comparabilă

Se rulează ambele seturi în fiecare ciclu și pe aceleași suprafețe disponibile: Google Search organic, Bing Search organic, Google AI Mode, ChatGPT, Claude, Copilot, Gemini și Perplexity.

Volumul complet propus: 24 de întrebări × 8 suprafețe = 192 de execuții. Cele patru interogări exploratorii din documentul anterior sunt un modul suplimentar, raportat separat.

Se aplică aceleași condiții celor două seturi:
- conversație nouă pentru fiecare prompt;
- fără listă de furnizori, fișiere, numele autorului sau identitatea firmei;
- aceeași condiție de cont, setări de memorie/personalizare, mod de căutare și dispozitiv, în limita controlului disponibil;
- aceeași adâncime Search și același criteriu de oprire;
- aceeași fereastră temporală preregistrată;
- păstrarea modelului și interfeței afișate, datei, orei, locației observate și abaterilor.

În pilot se poate păstra propunerea anterioară: primele 20 de rezultate organice pe Google/Bing, un singur răspuns complet inițial pe fiecare suprafață conversațională. Aceste valori nu sunt validate încă.

Pentru fiecare suprafață se execută seturile cât mai apropiat în timp. Ordinea se fixează înainte: pe suprafețele 1, 3, 5, 7, DISCOVERY apoi USER; pe 2, 4, 6, 8, USER apoi DISCOVERY, conform ordinii suprafețelor enumerate mai sus. Ordinea se păstrează între trimestre sau modificarea se documentează. Aceasta reduce asocierea sistematică dintre set și momentul execuției, fără a elimina toate efectele temporale.

Incognito sau o conversație nouă nu sunt declarate drept garanție de absență a personalizării. Se notează ce a putut fi controlat.

O indisponibilitate tehnică nu este răspuns fără furnizori. O singură reîncercare pentru eroare tehnică, cu păstrarea ambelor execuții, poate urma regula preregistrată a pilotului.

## 5. Ce constituie un rezultat valid pentru USER

Un răspuns care explică problema fără să recomande un prestator este un rezultat valid pentru un prompt informațional. Nu se clasifică automat ca eșec.

Dacă sistemul cere domeniul firmei sau alte clarificări, răspunsul se conservă în această stare. Nu se introduce domeniul autorului pentru a forța continuarea setului standard.

Nu se adaugă „dar cine mă poate ajuta?” după un răspuns informativ în seria principală. O continuare ar crea o condiție conversațională diferită. Poate fi studiată într-un modul separat, cu text fix și proveniență.

În Search se separă rezultatele organice, reclamele, modulele locale și AI Overview. Furnizorii găsiți numai în paginile deschise sunt candidați din discovery asistat de sursă, nu mențiuni directe ale SERP-ului sau ale răspunsului AI.

## 6. Ce înregistrăm la fiecare execuție

Câmpuri comune:
instance_id, query_set_id, query_id, query_exact, intent_class, execution_surface, target_platform_in_prompt, run_id, timestamp, environment_id, execution_status, raw_evidence_id.

Pentru AI se adaugă:
- explanations_present: YES/NO/UNKNOWN;
- actionable_advice_present: YES/NO/UNKNOWN;
- clarification_requested: YES/NO;
- provider_named: YES/NO;
- provider_recommended: YES/NO/UNCERTAIN;
- software_tool_named: YES/NO;
- terminology_introduced: termeni precum GEO/AEO apăruți în răspuns, deși nu erau în prompt;
- source_urls și legătura lor cu afirmațiile;
- numele și descrierile furnizorilor, separat de instrumente și publisheri.

Câmpurile pot coexista: un răspuns poate conține explicații, recomandări și tooluri simultan. Recomandarea se marchează YES când textul propune explicit furnizorul ca opțiune de ajutor; simpla menționare sau citarea unui articol scris de acesta nu sunt suficiente.

Pentru Search se clasifică separat tipul fiecărui rezultat din fereastra observată: pagină comercială a unui posibil prestator, articol/ghid, director/listă, instrument software, altul sau incert. Se păstrează poziția și URL-ul. Apariția unui rezultat nu se codifică drept recomandare editorială a motorului.

## 7. Comparația între seturi

Comparația principală se face în interiorul aceleiași suprafețe și al aceluiași ciclu. Search organic și răspunsurile AI nu se agregă într-un singur clasament.

Se compară:
1. Numărul de execuții completate și incidentele, cu denominatorul real.
2. Numărul de răspunsuri AI care numesc furnizori, separat de cele care îi recomandă explicit.
3. Candidații unici din fiecare set și reuniunea lor.
4. Candidații comuni și cei găsiți numai într-unul dintre seturi.
5. Sursele și tipurile de pagini afișate.
6. Frecvența explicațiilor, instrucțiunilor și solicitărilor de clarificare în USER.
7. Diferențele în interiorul USER între PROBLEM, GOAL și PROVIDER.
8. După Verification, aceleași comparații pentru furnizorii eligibili, separate de observațiile brute.

Pentru suprapunerea candidaților, A este setul de candidați deduplicați din DISCOVERY, B din USER. Se pot raporta cardinalitățile A, B, A∩B, A\\B și B\\A. Opțional: Jaccard = |A∩B| / |A∪B|. Dacă reuniunea este goală, rezultatul este N/A, nu 0% sau 100%.

Nu se tratează numărul mai mic de furnizori din USER ca performanță inferioară: opt întrebări au intenție informațională sau orientată spre rezultat. Subsetul PROVIDER (009–012) poate fi examinat separat, însă nici el nu este o pereche semantică perfectă pentru întregul DISCOVERY.

O singură execuție pe întrebare descrie răspunsul observat. Nu estimează probabilitatea stabilă a recomandării. Pentru această estimare ar fi necesare repetări preregistrate.

## 8. Separarea de Market Reference Set și de raportul de reprezentare AI

Ambele seturi pot produce candidați pentru Discovery; candidații intră în aceeași reuniune, cu proveniența păstrată. Eligibilitatea se verifică independent.

Comparația acestor execuții poate fi publicată ca observație descriptivă asupra procesului de Discovery, cu limite explicite. Dacă scopul este măsurarea acoperirii unei piețe verificate, se îngheață mai întâi Market Reference Set și se fac execuții noi, separate, pentru măsurarea reprezentării. Aceleași răspunsuri nu sunt folosite simultan la construirea populației și drept evaluare independentă a reprezentării ei.

Nou identificat nu înseamnă nou intrat pe piață. Absența dintr-un răspuns sau dintr-un ciclu nu înseamnă că furnizorul a încetat activitatea.

## 9. Exemplu de concluzie permisă

„În această fereastră și pe această suprafață, setul DISCOVERY a returnat furnizorii A, B și C, iar setul USER a returnat B și D. Furnizorul D a fost identificat numai prin formulările USER. Pentru întrebările USER despre probleme, sistemul a oferit preponderent explicații.”

Exemplul folosește litere fictive; nu reprezintă un rezultat măsurat.

Nu rezultă: „utilizatorii fără experiență văd numai B și D” sau „jargonul a cauzat diferența”. Setul nu este un eșantion validat de utilizatori, iar intențiile diferă.

## 10. Istoric

0.1.0 — 10 octombrie 2026: set USER de 12 întrebări și procedură propusă de comparație cu setul DISCOVERY. Nicio interogare de piață nu a fost executată pentru elaborarea acestui document.

```

## Anexa B — MKT-RO-AIV-user-query-set-v0.2.0.md, integral

SHA-256 al fișierului sursă: `6f4cfe1723ed4b42b8d19d80aa331e60640eca57b9e1570a2c41d9ec43a79fbd`.

```markdown
---
title: "Market Discovery — set utilizator fără cunoștințe de specialitate și comparație între seturi"
version: "0.2.0"
status: "Set standard de lucru pentru pilot; nevalidat empiric"
created: "2026-10-10"
updated: "2026-10-10"
supersedes_query_set: "USER-RO-v0.1.0"
language: "ro-RO"
series_id: "MKT-RO-AIV"
query_set_id: "USER-RO-v0.2.0"
related_query_set: "MKT-RO-AIV-discovery-query-set-v0.1.0.md — Q-DISC-001…012"
document_role: "Anexă operațională; nu constituie AVL-MKT-002"
---

# Setul USER-RO și comparația cu setul DISCOVERY

## 1. Scop, decizia adoptată și statut

Se păstrează două seturi distincte, rulate în fiecare ciclu trimestrial: DISCOVERY, setul oficial de lucru cu formulări de specialitate, și USER, setul cu expresii scurte din perspectiva unui utilizator standard. Fiecare conține 12 interogări. „Oficial” desemnează rolul adoptat în exercițiu, nu validarea empirică sau activarea unui protocol normativ. Statutul metodologic rămâne de pilot până la validare și înghețare.

Setul DISCOVERY Q-DISC-001…012 rămâne cel din prima propunere, documentat în MKT-RO-AIV-discovery-query-set-v0.1.0.md. Setul USER este înlocuit în această versiune cu expresiile scurte stabilite în conversație la 10 octombrie 2026.

Varianta intermediară USER v0.1.0, cu întrebări complete și preambulul „Am o firmă în România”, este retrasă din utilizarea curentă. Nu formează un al treilea set activ. Eventualele rulări deja făcute cu ea rămân atribuite versiunii 0.1.0 și nu sunt comparate ca și când ar avea aceleași texte.

Formulările USER sunt scenarii de căutare plauzibile, nu expresii validate printr-un eșantion de utilizatori sau volume de căutare. Etichetele descriu modul de formulare, nu persoane recrutate și evaluate într-un studiu.

## 2. Setul USER — expresiile exacte

Se transmite exclusiv expresia din tabel, identic în Search și pe suprafețele AI. Fără preambul, fără completarea în propoziție, fără instrucțiuni de rol și fără adăugarea cuvântului „România” acolo unde acesta nu este deja prezent. Se păstrează scrierea și diacriticele.

| ID | Expresia exactă |
|---|---|
| Q-USER-001 | consultant AI |
| Q-USER-002 | recomandare ChatGPT |
| Q-USER-003 | promovare ChatGPT |
| Q-USER-004 | firma mea pe ChatGPT |
| Q-USER-005 | apariție în ChatGPT |
| Q-USER-006 | vizibilitate AI |
| Q-USER-007 | promovare firmă AI |
| Q-USER-008 | optimizare site ChatGPT |
| Q-USER-009 | marketing AI |
| Q-USER-010 | agenție AI România |
| Q-USER-011 | specialist ChatGPT |
| Q-USER-012 | servicii promovare AI |

Identitatea completă a unei interogări este combinația dintre query_set_id, query_id și query_exact. ID-urile locale Q-USER-001…012 sunt păstrate, însă textele sunt schimbate material față de v0.1.0; ID-ul singur nu este suficient pentru comparații istorice.

## 3. Diferențele dintre DISCOVERY și USER

| Dimensiune | DISCOVERY — set oficial de specialitate | USER — utilizator standard |
|---|---|---|
| Formă | Întrebări complete, explicite și structurate | Expresii scurte de două până la patru cuvinte |
| Vocabular | GEO, AEO, AI Visibility, audit, monitorizare | Consultant, promovare, marketing, specialist, ChatGPT |
| Cunoaștere presupusă | Cunoaște serviciul sau descrie precis nevoia | Cunoaște produsul AI ori ideea de promovare, fără denumirea serviciului |
| Intenție exprimată | Identificarea explicită a furnizorilor relevanți | Intenție incompletă sau ambiguă; interpretarea devine parte din observație |
| Geografie în text | România este precizată în fiecare întrebare de bază | România apare numai în Q-USER-010 |
| Domeniu solicitat | Servicii de vizibilitate în răspunsurile AI | Poate conduce și către automatizări, training, conținut sau software |
| Rol în exercițiu | Descoperire ghidată de definiția pieței | Observarea traseului pornit dintr-o expresie nespecializată |
| Rezultat urmărit | Furnizori și surse relevante pentru piața definită | Sensul atribuit expresiei, categorii de soluții, furnizori și surse |

Exemplu DISCOVERY: „Cine oferă servicii GEO (Generative Engine Optimization) pentru firme din România?” Exemplu USER: „consultant AI”. Nu sunt interogări semantic echivalente și nu constituie o pereche experimentală controlată.

Ambiguitatea USER este intenționată. „Recomandare ChatGPT” poate fi interpretată drept recomandarea produsului, o recomandare făcută cu acesta sau dorința de a fi recomandat de el. „Marketing AI” poate conduce către folosirea AI în marketing. Se consemnează interpretarea susținută de răspuns sau de rezultate, fără a presupune acces la raționamentul intern al sistemului.

Termenii largi sunt evitați în nucleul specializat DISCOVERY, dar păstrați deliberat în USER. Diferența de rol explică alegerea; nu modifică eligibilitatea pieței.

Distribuția USER: ChatGPT numit în 6 expresii (002, 003, 004, 005, 008, 011), AI generic în celelalte 6. Nu este o estimare a popularității platformelor. Suprafața pe care rulezi expresia și produsul numit în ea sunt câmpuri distincte.

Piața analizată rămâne România, însă USER nu o precizează uniform. Rezultatele internaționale se păstrează și se clasifică separat; nu se elimină înainte de a documenta orientarea geografică observabilă. Eligibilitatea pentru piața românească se verifică ulterior.

Comparația descrie efectul întregii formulări: lungime, vocabular, intenție, geografie și platformă-țintă. Nu izolează efectul experienței utilizatorului sau al jargonului. Nu se presupune corespondență unu-la-unu între numerele Q-DISC și Q-USER.

## 4. Execuție comparabilă

Se rulează ambele seturi în fiecare ciclu și pe aceleași suprafețe disponibile: Google Search organic, Bing Search organic, Google AI Mode, ChatGPT, Claude, Copilot, Gemini și Perplexity.

Volumul complet propus: 24 de întrebări × 8 suprafețe = 192 de execuții. Cele patru interogări exploratorii din documentul anterior sunt un modul suplimentar, raportat separat.

Se aplică aceleași condiții celor două seturi:
- conversație nouă pentru fiecare prompt;
- fără listă de furnizori, fișiere, numele autorului sau identitatea firmei;
- aceeași condiție de cont, setări de memorie/personalizare, mod de căutare și dispozitiv, în limita controlului disponibil;
- aceeași adâncime Search și același criteriu de oprire;
- aceeași fereastră temporală preregistrată;
- păstrarea modelului și interfeței afișate, datei, orei, locației observate și abaterilor.

În pilot se poate păstra propunerea anterioară: primele 20 de rezultate organice pe Google/Bing, un singur răspuns complet inițial pe fiecare suprafață conversațională. Aceste valori nu sunt validate încă.

Pentru fiecare suprafață se execută seturile cât mai apropiat în timp. Ordinea se fixează înainte: pe suprafețele 1, 3, 5, 7, DISCOVERY apoi USER; pe 2, 4, 6, 8, USER apoi DISCOVERY, conform ordinii suprafețelor enumerate mai sus. Ordinea se păstrează între trimestre sau modificarea se documentează. Aceasta reduce asocierea sistematică dintre set și momentul execuției, fără a elimina toate efectele temporale.

Incognito sau o conversație nouă nu sunt declarate drept garanție de absență a personalizării. Se notează ce a putut fi controlat.

O indisponibilitate tehnică nu este răspuns fără furnizori. O singură reîncercare pentru eroare tehnică, cu păstrarea ambelor execuții, poate urma regula preregistrată a pilotului.

## 5. Ce constituie un rezultat valid pentru USER

Un răspuns explicativ, o solicitare de clarificare sau rezultate dintr-o categorie adiacentă sunt observații valide pentru o expresie ambiguă. Nu sunt automat eșecuri ale sistemului. Un rezultat din afara pieței GEO/AEO poate reflecta o interpretare plauzibilă a expresiei USER.

Dacă sistemul cere domeniul firmei sau alte clarificări, răspunsul se conservă în această stare. Nu se introduce domeniul autorului pentru a forța continuarea setului standard.

Nu se adaugă „dar cine mă poate ajuta?” după un răspuns informativ în seria principală. O continuare ar crea o condiție conversațională diferită. Poate fi studiată într-un modul separat, cu text fix și proveniență.

În Search se separă rezultatele organice, reclamele, modulele locale și AI Overview. Furnizorii găsiți numai în paginile deschise sunt candidați din discovery asistat de sursă, nu mențiuni directe ale SERP-ului sau ale răspunsului AI.

## 6. Ce înregistrăm la fiecare execuție

Câmpuri comune:
instance_id, query_set_id, query_id, query_exact, execution_surface, target_platform_in_prompt, run_id, timestamp, environment_id, execution_status, raw_evidence_id.

Se înregistrează și interpreted_intent, interpretation_evidence, categoria soluției observate și orientarea geografică observabilă. Intenția este o clasificare a evaluatorului, susținută de răspuns/rezultate, nu acces la un proces intern. Se folosesc UNKNOWN sau MULTIPLE când sensul este neclar ori mixt. Categoriile soluțiilor pot fi AI Visibility, automatizări, training, conținut/marketing, software, alta sau incertă. Nu se aplică noului USER vechile clase PROBLEM/GOAL/PROVIDER.

Pentru AI se adaugă:
- explanations_present: YES/NO/UNKNOWN;
- actionable_advice_present: YES/NO/UNKNOWN;
- clarification_requested: YES/NO;
- provider_named: YES/NO;
- provider_recommended: YES/NO/UNCERTAIN;
- software_tool_named: YES/NO;
- terminology_introduced: termeni precum GEO/AEO apăruți în răspuns, deși nu erau în prompt;
- source_urls și legătura lor cu afirmațiile;
- numele și descrierile furnizorilor, separat de instrumente și publisheri.

Câmpurile pot coexista: un răspuns poate conține explicații, recomandări și tooluri simultan. Recomandarea se marchează YES când textul propune explicit furnizorul ca opțiune de ajutor; simpla menționare sau citarea unui articol scris de acesta nu sunt suficiente.

Pentru Search se clasifică separat tipul fiecărui rezultat din fereastra observată: pagină comercială a unui posibil prestator, articol/ghid, director/listă, instrument software, altul sau incert. Se păstrează poziția și URL-ul. Apariția unui rezultat nu se codifică drept recomandare editorială a motorului.

## 7. Comparația între seturi

Comparația principală se face în interiorul aceleiași suprafețe și al aceluiași ciclu. Search organic și răspunsurile AI nu se agregă într-un singur clasament.

Se compară:
1. Numărul de execuții completate și incidentele, cu denominatorul real.
2. Numărul de răspunsuri AI care numesc furnizori, separat de cele care îi recomandă explicit.
3. Candidații unici din fiecare set și reuniunea lor.
4. Candidații comuni și cei găsiți numai într-unul dintre seturi.
5. Sursele și tipurile de pagini afișate.
6. Frecvența explicațiilor, instrucțiunilor și solicitărilor de clarificare în USER.
7. Distribuția interpretărilor și categoriilor de soluții din USER, inclusiv geografia și cazurile ambigue.
8. După Verification, aceleași comparații pentru furnizorii eligibili, separate de observațiile brute.

Pentru suprapunerea candidaților, A este setul de candidați deduplicați din DISCOVERY, B din USER. Se pot raporta cardinalitățile A, B, A∩B, A\\B și B\\A. Opțional: Jaccard = |A∩B| / |A∪B|. Dacă reuniunea este goală, rezultatul este N/A, nu 0% sau 100%.

Nu se tratează numărul mai mic de furnizori eligibili din USER ca performanță inferioară: expresiile nu cer uniform prestatori GEO/AEO și nici România. Nu există în noul USER un subset PROVIDER predefinit 009–012. Se compară separat entitățile afișate, candidații potențial relevanți și furnizorii confirmați eligibili după Verification.

O singură execuție pe întrebare descrie răspunsul observat. Nu estimează probabilitatea stabilă a recomandării. Pentru această estimare ar fi necesare repetări preregistrate.

## 8. Separarea de Market Reference Set și de raportul de reprezentare AI

Ambele seturi pot produce candidați pentru Discovery; candidații potențial relevanți intră în aceeași reuniune, cu proveniența păstrată. Entitățile adiacente se păstrează în observațiile brute și în clasificarea rezultatelor, fără a fi declarate automat eligibile. Eligibilitatea se verifică independent.

Comparația acestor execuții poate fi publicată ca observație descriptivă asupra procesului de Discovery, cu limite explicite. Dacă scopul este măsurarea acoperirii unei piețe verificate, se îngheață mai întâi Market Reference Set și se fac execuții noi, separate, pentru măsurarea reprezentării. Aceleași răspunsuri nu sunt folosite simultan la construirea populației și drept evaluare independentă a reprezentării ei.

Nou identificat nu înseamnă nou intrat pe piață. Absența dintr-un răspuns sau dintr-un ciclu nu înseamnă că furnizorul a încetat activitatea.

## 9. Exemplu de concluzie permisă

„În această fereastră și pe această suprafață, setul DISCOVERY a returnat furnizorii A, B și C, iar setul USER a returnat B și D. Furnizorul D a fost identificat numai prin formulările USER. Pentru expresia «marketing AI», sistemul a oferit explicații despre folosirea AI pentru producerea de conținut.”

Exemplul folosește litere fictive; nu reprezintă un rezultat măsurat.

Nu rezultă: „utilizatorii fără experiență văd numai B și D” sau „jargonul a cauzat diferența”. Setul nu este un eșantion validat de utilizatori, iar intențiile diferă.

## 10. Istoric

0.2.0 — 10 octombrie 2026: înlocuirea celor 12 întrebări complete USER cu cele 12 expresii scurte; eliminarea preambulului; păstrarea DISCOVERY; adăugarea tabelului comparativ și a regulilor privind ambiguitatea, geografia și interpretarea; retragerea clasificării vechi PROBLEM/GOAL/PROVIDER. Schimbare materială: rezultatele v0.1.0 și v0.2.0 nu se amestecă într-o serie de query-uri identice. Nicio interogare de piață nu a fost executată în această actualizare.


0.1.0 — 10 octombrie 2026: set USER de 12 întrebări și procedură propusă de comparație cu setul DISCOVERY. Nicio interogare de piață nu a fost executată pentru elaborarea acestui document.

```

````

