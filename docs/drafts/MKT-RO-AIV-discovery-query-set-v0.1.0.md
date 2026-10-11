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
