**AI VISIBILITY LAB**

AVL-201

**TABULA RASA F0**

Baseline Measurement Specification

*Specificația de măsurare a stării inițiale pentru AI Visibility*

| **Document ID** | AVL-201 |
|----|----|
| **Nivel** | C — Methodology |
| **Versiune** | 1.0.1 |
| **Statut** | Activ |
| **Autor** | Alex Matescu |
| **Organizație** | AI Visibility Lab |
| **Data publicării** | iulie 2026 |
| **Ultima actualizare** | 21 iulie 2026 |
| **Limbă** | română |
| **Dependențe normative** | AVL-001, AVL-104 |
| **Dependențe informative** | AVL-101, AVL-102, AVL-103, AVL-105 |
| **URL canonic propus** | https://delamatescu.ro/lab/metodologie/tabula-rasa-f0 — de confirmat la publicare |

***„Iată ce era înainte. Iată ce este acum. Iată diferența.”***

# Controlul documentului

AVL-201 este primul document normativ al metodologiei AI Visibility Lab. El descrie condițiile minime, pașii obligatorii, dovezile acceptate, taxonomia, regulile de scorare și livrabilele necesare pentru ca o măsurare să poată fi declarată conformă cu Tabula Rasa F0.

În acest document, termenii normativi „TREBUIE”, „NU TREBUIE”, „ESTE OBLIGATORIU”, „AR TREBUI”, „NU AR TREBUI” și „POATE” sunt utilizați în sensul convenției RFC 2119, adaptată în limba română.

- „TREBUIE” exprimă o condiție obligatorie pentru conformitate;

- „AR TREBUI” exprimă o recomandare puternică ce poate fi încălcată numai cu justificare
documentată;

- „POATE” indică o opțiune permisă.

În afara propozițiilor normative și a cerințelor identificate F0-REQ, acești termeni nu trebuie interpretați automat ca cerințe de conformitate.

# Rezumat executiv

Tabula Rasa F0 este faza de documentare completă a stării unei entități în ecosistemul AI înainte de orice intervenție. F0 nu optimizează, nu repară și nu promite rezultate. Măsoară. Faza produce un instantaneu verificabil al identității entității, accesibilității tehnice, datelor structurate, percepției motoarelor AI, surselor citate, prezenței distribuite și corpusului de conținut.

O implementare conformă AVL-201 trebuie să permită unui terț competent să răspundă la patru întrebări:

- ce s-a măsurat,

- în ce condiții a fost măsurat,

- cu ce dovezi a fost măsurat,

- prin ce reguli au fost obținute concluziile.

Fără aceste răspunsuri, rezultatul poate fi util ca observație, dar nu poate fi revendicat drept baseline Tabula Rasa F0 conform AVL-201.

# 1. Scop

Scopul AVL-201 este să definească o specificație publică, repetabilă și auditabilă pentru măsurarea stării inițiale a unei entități în sistemele de căutare și răspuns bazate pe inteligență artificială. Documentul stabilește ce trebuie făcut înaintea oricărei intervenții GEO/AEO, cum
trebuie păstrate dovezile și cum trebuie delimitate observațiile de interpretări.

**F0-REQ-001 —** După începerea F0 și până la închiderea oficială a măsurătorii, entitatea, site-ul, profilurile, datele structurate și prezența distribuită TREBUIE menținute neschimbate.

**F0-REQ-002 —** Orice abatere accidentală de la starea inițială TREBUIE consemnată ca incident de contaminare și evaluată înainte ca rezultatul să fie declarat valid.

# 2. Obiective

- Crearea unui baseline complet și datat pentru entitatea analizată.

- Documentarea stării tehnice și semantice înainte de optimizare.

- Măsurarea prezenței, corectitudinii și citării în sistemele AI selectate.

- Identificarea modului principal de eșec: acces, recuperare, sinteză,
  citare sau identitate.

- Crearea unei referințe comparabile pentru fazele F1, F2 și F3.

- Producerea unui pachet de dovezi suficient pentru verificare
  independentă.

- Protejarea clientului sau subiectului împotriva atribuirii nefondate a
  unor rezultate.

# 3. Domeniu de aplicare

AVL-201 se poate aplica unei persoane, companii, organizații,
instituții, mărci, produse, servicii, proiecte, publicații sau unui
site, cu condiția ca obiectul măsurării să fie definit drept entitate și
să poată fi diferențiat de alte entități.

Metodologia este potrivită pentru evaluări individuale, proiecte pilot,
studii de caz, audituri comerciale, cercetare academică aplicată și
monitorizare longitudinală.

# 4. În afara domeniului

F0 nu este, prin el însuși, o măsurare completă a performanței
comerciale sau SEO. El nu măsoară direct:

- venituri, vânzări sau leaduri;

- rata de conversie;

- profitabilitatea;

- traficul organic total;

- pozițiile clasice pentru toate cuvintele-cheie;

- valoarea backlinkurilor;

- sentimentul public general;

- calitatea completă a produsului sau serviciului;

- accesul la factori interni de ranking sau selecție ai furnizorilor AI.

| **Clarificare:** Aceste date pot fi corelate ulterior cu rezultatele F0, dar nu fac parte din conformitatea minimă AVL-201. |
|----|

# 5. Terminologie și definiții operaționale

**Entitate:** Obiectul distinct al măsurării: persoană, organizație,
marcă, produs, serviciu, proiect sau instituție.

**Formă canonică:** Numele și identificarea oficială stabilite pentru
entitate și folosite ca referință în analiză.

**Baseline:** Starea măsurată și documentată înainte de intervenție.

**Snapshot / instantaneu:** Pachetul datat care conservă configurația,
răspunsurile, dovezile și rezultatele unei sesiuni de măsurare.

**Set de interogări:** Colecția versionată de întrebări folosită pentru
testarea entității.

**Set înghețat:** Set de interogări care nu mai este modificat între F0
și comparația F3.

**Rulare:** O execuție individuală a unei interogări într-un motor sau o
interfață AI.

**Sesiune de măsurare:** Grup de rulări efectuate într-un interval și
într-o configurație documentată.

**Sesiune curată:** Sesiune configurată pentru reducerea personalizării
și a contaminării istoricului.

**Motor AI:** Sistemul sau interfața care generează răspunsul analizat.

**Citare:** Afișarea explicită a unei surse asociate unei afirmații sau
unui fragment al răspunsului.

**Mențiune:** Apariția entității în răspuns, fără ca sursa canonică să
fie neapărat citată.

**HIT:** Rezultat în care entitatea este identificată corect și
răspunsul satisface criteriul principal al interogării.

**HIT parțial:** Rezultat relevant, dar incomplet, imprecis, insuficient
atribuit sau parțial depășit.

**COLIZIUNE:** Rezultat în care identitatea entității este amestecată
sau înlocuită cu o altă entitate.

**CONFABULARE:** Afirmație factuală nesusținută sau inventată despre
entitate.

**NULL:** Absența unui rezultat relevant pentru entitate.

**Dovadă primară:** Captură, export, răspuns brut, log, fișier sau
înregistrare care arată direct ce a fost observat.

**Metadate de rulare:** Data, ora, platforma, modelul afișat, limba,
locația, contul, modul de sesiune și alte condiții relevante.

**Contaminare:** Orice schimbare sau influență care compromite
comparabilitatea stării inițiale.

**Conformitate AVL-201:** Îndeplinirea cerințelor obligatorii din
această specificație, cu abaterile documentate.

# 6. Roluri și responsabilități

## 6.1. Responsabilul de metodologie

- aprobă planul F0;

- confirmă forma canonică și domeniul;

- controlează schimbările;

- decide dacă incidentele invalidează baseline-ul;

- aprobă închiderea fazei.

## 6.2. Operatorul de măsurare

- execută rulările;

- păstrează configurația declarată;

- capturează dovezile;

- nu selectează doar răspunsurile favorabile;

- raportează imediat abaterile.

## 6.3. Revizorul

- verifică un eșantion sau întregul pachet;

- recalculează scorurile;

- confirmă coerența taxonomiei;

- documentează dezacordurile.

## 6.4. Subiectul sau clientul

- furnizează informațiile oficiale;

- declară profilurile și activele controlate;

- evită modificările pe durata F0;

- confirmă sau contestă factual fișa entității.

# 7. Intrări obligatorii

| **Intrare** | **Conținut minim** |
|----|----|
| Fișa entității | forma canonică, variante, rol, locație, domeniu, URL-uri oficiale, atribute verificabile |
| Harta coliziunilor | entități omonime sau similare și sursele lor dominante |
| Lista activelor oficiale | site, subdomenii, profiluri, directoare, pagini de autor |
| Țara și limba | contextul geografic și lingvistic al măsurării |
| Motoarele incluse | platformele și interfețele testate |
| Setul de interogări | întrebări împărțite pe intenții |
| Planul de dovezi | format, convenție de nume, locație de arhivare |
| Fereastra de măsurare | intervalul calendaristic planificat |
| Declarația de îngheț | confirmarea că nu se fac intervenții până la închidere |

# 8. Ieșiri și livrabile

- Raportul Tabula Rasa F0

- Fișa entității și harta coliziunilor

- Setul înghețat de interogări

- Matricea de acces a crawlerelor

- Raportul de date structurate

- Grila de rezultate interogări × motoare × rulări

- Fișele de percepție per motor

- Harta surselor citate

- Matricea prezenței distribuite

- Inventarul corpusului de conținut

- Registrul incidentelor și abaterilor

- Arhiva de dovezi

- Manifestul snapshot-ului și checksum-uri, când sunt folosite

- Lista priorităților pentru F1 și F2

**F0-REQ-003 —** Un raport fără arhivă de dovezi NU TREBUIE prezentat
drept implementare completă AVL-201.

# 9. Instrumente și condiții minime

AVL-201 nu impune un furnizor unic de instrumente. Implementarea trebuie
însă să permită reproducerea și auditul.

- browser actualizat și profil separat sau mod privat;

- acces la platformele testate;

- instrument pentru capturi integrale sau exporturi;

- foaie de calcul sau bază de date pentru registrul rulărilor;

- ceas și fus orar sincronizate;

- acces la robots.txt, antete HTTP și, când este disponibil, loguri de
  server/CDN;

- validator JSON-LD / Schema.org;

- spațiu de stocare cu versiuni și permisiuni controlate;

- instrument de generare a checksum-urilor, recomandat pentru pachetele
  publice.

# 10. Protocolul de măsurare în zece pași

## 10.1. Pasul 1 — Definirea entității

Se stabilește forma canonică a numelui, variantele legitime, atributele
de identitate și candidații de coliziune. Forma canonică trebuie să fie
suficient de precisă încât un revizor să poată decide dacă un răspuns se
referă la entitatea corectă.

### Cerințe minime

- Fișă completă a entității.

- Listă de variante și aliasuri.

- Hartă a coliziunilor.

- Surse oficiale pentru atributele de identitate.

## 10.2. Pasul 2 — Construcția setului de interogări

Interogările se construiesc înainte de examinarea sistematică a
rezultatelor și se împart pe intenții: identitate, rol/expertiză,
informație factuală, comparație și recomandare. Pentru proiectele
inițiale, domeniul poate fi restrâns, dar restricția trebuie declarată.

### Cerințe minime

- Identificator unic per interogare.

- Text exact și limbă.

- Intenție și criteriu de succes.

- Număr de rulări planificat.

- Versiune și dată de înghețare.

## 10.3. Pasul 3 — Verificarea accesului crawlerelor

Se verifică robots.txt, răspunsurile HTTP, regulile CDN/WAF și logurile
disponibile pentru agenții relevanți. Controlul accesului pentru
căutare, utilizator și antrenare trebuie tratat separat atunci când
furnizorul face această distincție.

### Cerințe minime

- Matrice per agent.

- Directivă observată.

- Coduri HTTP.

- Dovezi din loguri sau teste.

- Nivel de certitudine.

## 10.4. Pasul 4 — Auditul datelor structurate

Se inventariază JSON-LD și alte marcaje, se verifică entitățile
declarate, @id-urile, tipurile, relațiile și concordanța cu textul
vizibil. Auditul urmărește claritatea și consistența, nu presupune că
schema garantează citarea.

### Cerințe minime

- Inventar de noduri și @id-uri.

- Erori și avertismente.

- Relații lipsă sau contradictorii.

- Diferențe între markup și conținut.

## 10.5. Pasul 5 — Linia de bază a răspunsurilor și citărilor

Setul înghețat se rulează pe motoarele selectate, în condiții cât mai
comparabile și documentate. Fiecare răspuns se păstrează integral și se
clasifică. Nu este permisă păstrarea exclusivă a celei mai favorabile
rulări.

### Cerințe minime

- Răspuns brut.

- Captură sau export.

- Surse afișate.

- Clasificare principală și secundară.

- Metadate complete.

## 10.6. Pasul 6 — Linia de bază a înțelegerii entității

Se analizează descrierea produsă de fiecare motor: rol, locație,
experiență, organizații asociate, cronologie, ton și actualitate. Scopul
este identificarea diferenței dintre simpla apariție și reprezentarea
corectă.

### Cerințe minime

- Fișă de percepție per motor.

- Atribute corecte, lipsă, vechi sau false.

- Surse care susțin fiecare atribut important.

## 10.7. Pasul 7 — Analiza surselor citate

Pentru interogările relevante se inventariază sursele pe care motoarele
le afișează, inclusiv atunci când entitatea analizată nu apare. Se
separă sursa citată de sursa presupus folosită.

### Cerințe minime

- URL, domeniu și tip de sursă.

- Frecvență per motor și interogare.

- Poziție sau proeminență, dacă este observabilă.

- Relevanță pentru F2.

## 10.8. Pasul 8 — Auditul prezenței distribuite

Se inventariază profilurile, directoarele, publicațiile, registrele și
mențiunile externe. Se urmăresc numele, descrierea, actualitatea,
legătura către sursa canonică și contradicțiile.

### Cerințe minime

- Matricea prezenței distribuite.

- Surse controlate vs. independente.

- Inconsecvențe și riscuri de bifurcare.

## 10.9. Pasul 9 — Auditul corpusului de conținut

Se inventariază conținutul sursei canonice și se evaluează relevanța,
calitatea, actualitatea și valoarea de coroborare. În F0 se documentează
deciziile propuse, dar nu se execută.

### Cerințe minime

- Inventar URL.

- Tip și temă.

- Stare tehnică și editorială.

- Decizie propusă pentru F1.

## 10.10. Pasul 10 — Instantaneul reproductibil

Toate artefactele sunt înghețate într-un pachet datat și neschimbabil.
Pachetul trebuie să includă un manifest al fișierelor și registrul
versiunilor. Pentru proiectele cu cerință ridicată de audit se recomandă
checksum-uri.

### Cerințe minime

- Arhivă F0.

- Manifest.

- Data și ora închiderii.

- Semnătura responsabilului de metodologie.

- Lista abaterilor.

# 11. Protocolul sesiunii curate

**F0-REQ-004 —** Configurația sesiunii TREBUIE stabilită înainte de
prima rulare și folosită consecvent în interiorul aceleiași serii.

**F0-REQ-005 —** Contul, memoria, istoricul, locația, limba și
disponibilitatea căutării web TREBUIE documentate.

**F0-REQ-006 —** Atunci când o platformă nu permite controlul unei
variabile, limitarea TREBUIE declarată, nu ascunsă.

Configurația recomandată include: fereastră privată sau profil dedicat,
conversație nouă pentru fiecare interogare, memorie dezactivată unde
este posibil, limbă explicită, locație reală fără VPN, fără introducerea
prealabilă a numelui entității în aceeași sesiune și fără reformulări
iterative înaintea capturării rezultatului principal.

# 12. Standardul de dovezi

## 12.1. Dovezi acceptate

- captură integrală care include interogarea și răspunsul;

- export HTML, PDF sau text brut al conversației;

- URL de partajare, dacă nu expune date sensibile și rămâne accesibil;

- înregistrare video a sesiunii;

- log de server, CDN sau WAF;

- fișier robots.txt și antete HTTP capturate la dată;

- codul JSON-LD sau exportul validatorului;

- registrul de rulare cu timestamp și configurație.

## 12.2. Dovezi insuficiente singure

- relatarea verbală „mi-a apărut”;

- captura decupată fără interogare;

- captura fără dată sau identificator de rulare;

- text copiat manual fără dovada contextului;

- rezumatul operatorului fără răspunsul brut;

- un singur rezultat selectat dintr-o serie nedeclarată.

## 12.3. Convenția de denumire

Format recomandat:
F0\_\[entitate\]\_\[motor\]\_\[queryID\]\_\[run\]\_\[YYYYMMDD-HHMM\]\_\[limbă\].ext

Exemplu: F0_AlexMatescu_ChatGPT_QID03_R02_20260721-0935_RO.png

# 13. Taxonomia rezultatelor

| **Cod** | **Definiție** | **Regulă de utilizare** |
|----|----|----|
| HIT | Entitatea corectă este identificată, iar răspunsul satisface criteriul principal al interogării. | Poate exista cu sau fără citarea sursei canonice. |
| HIT-C | HIT cu citarea explicită a sursei canonice. | Subcategorie recomandată pentru analiza citării. |
| HIT parțial | Entitatea este corectă, dar răspunsul este incomplet, prea vag, parțial depășit sau slab atribuit. | Necesită notarea motivului. |
| MENȚIUNE | Entitatea apare, dar nu este răspunsul principal sau nu satisface criteriul. | Nu se echivalează cu HIT. |
| COLIZIUNE | Răspunsul atribuie datele altei entități sau amestecă două identități. | Se indică entitatea concurentă. |
| CONFABULARE | Răspunsul inventează sau afirmă fără suport un fapt despre entitate. | Se păstrează fragmentul exact. |
| SURSĂ GREȘITĂ | Răspunsul este plauzibil, dar citarea nu susține afirmația sau se referă la altă entitate. | Poate coexista cu HIT parțial sau coliziune. |
| FAPT ÎNVECHIT | Răspunsul folosește o informație care a fost corectă, dar nu mai este actuală. | Se documentează sursa actuală. |
| NULL | Entitatea lipsește sau sistemul declară că nu are informații suficiente. | Nu este automat o eroare a platformei. |
| REFUZ / LIMITARE | Platforma refuză, nu poate căuta sau afișează o eroare. | Se raportează separat de NULL. |

# 14. Scorarea

Scorarea transformă observațiile într-un rezumat comparabil. Ea nu
trebuie să înlocuiască răspunsurile brute și nu trebuie interpretată
drept probabilitate internă a platformei.

## 14.1. Scor de rezultat recomandat

| **Rezultat**             | **Punctaj** |
|--------------------------|-------------|
| HIT-C                    | 4           |
| HIT fără citare canonică | 3           |
| HIT parțial              | 2           |
| MENȚIUNE                 | 1           |
| NULL / REFUZ             | 0           |
| FAPT ÎNVECHIT            | -1          |
| SURSĂ GREȘITĂ            | -2          |
| COLIZIUNE                | -3          |
| CONFABULARE              | -4          |

Scorul normalizat recomandat pentru un set de N rulări este:

**Scor normalizat = 100 × (Σ puncte - minim posibil) / (maxim posibil -
minim posibil)**

Pentru schema de mai sus, maximul este 4 × N, iar minimul este -4 × N.
Raportul trebuie să publice și distribuția categoriilor, deoarece două
entități pot avea același scor prin combinații foarte diferite.

## 14.2. Indicatori obligatorii

- Rata HIT totală.

- Rata HIT-C.

- Rata de coliziune.

- Rata de confabulare.

- Rata NULL.

- Proporția faptelor învechite.

- Scor normalizat, dacă este folosit.

- Numărul total de rulări și acoperirea pe motoare.

**F0-REQ-007 —** Niciun scor agregat NU TREBUIE publicat fără numărul de
rulări, perioada, motoarele și distribuția categoriilor.

# 15. Controlul calității și revizuirea

- Cel puțin 10% din rulări AR TREBUI reclasificate de un al doilea
  evaluator pentru proiectele comerciale.

- Divergențele de clasificare TREBUIE rezolvate printr-o regulă
  explicită și păstrate în registru.

- Calculele AR TREBUI refăcute automat sau verificate independent.

- Eșantionul de dovezi TREBUIE să includă rezultate pozitive, negative
  și ambigue.

- Raportul final TREBUIE să conțină limitările și incidentele.

# 16. Repetabilitate și comparație F0–F3

F3 trebuie să reutilizeze același set înghețat, aceleași criterii și, pe
cât posibil, aceeași configurație. Schimbările inevitabile ale
platformelor se documentează ca variabile externe.

**F0-REQ-008 —** Comparația F0–F3 TREBUIE realizată pe aceleași
identificatoare de interogări. Interogările noi pot fi adăugate ca serie
separată, dar NU TREBUIE amestecate în scorul comparativ principal.

**F0-REQ-009 —** Orice schimbare de motor, model, interfață, țară, limbă
sau metodă de captură TREBUIE semnalată în tabelul de comparabilitate.

Intervalul dintre F0 și F3 nu este universal. El trebuie să permită
crawl, indexare și propagarea schimbărilor, fără a fi atât de lung încât
efectul intervențiilor să fie inseparabil de deriva naturală a
sistemelor.

# 17. Limitări

- Sistemele sunt stocastice și pot produce răspunsuri diferite la
  aceeași interogare.

- Indexurile și modelele se modifică fără notificare completă.

- Interfețele pot folosi personalizare sau localizare imposibil de
  eliminat total.

- Sursele afișate nu reprezintă neapărat toate sursele utilizate intern.

- Absența citării nu demonstrează absența folosirii informației.

- Apariția după intervenție nu demonstrează singură cauzalitatea.

- Un baseline este specific perioadei și configurației măsurate.

- Motoarele pot avea politici și arhitecturi diferite; rezultatele nu se
  generalizează automat între ele.

# 18. Reguli de interpretare

Interpretarea trebuie să pornească de la modul de eșec dominant, nu de
la scorul total.

| **Profil observat** | **Interpretare inițială** |
|----|----|
| Acces slab | Crawler sau infrastructură blocată; prioritatea F1 este remedierea accesului. |
| Acces bun, NULL ridicat | Conținutul nu este recuperat sau entitatea nu este suficient asociată cu domeniul interogării. |
| Mențiuni multe, citări puține | Entitatea este cunoscută, dar sursa canonică nu este selectată sau afișată. |
| HIT parțial / fapte învechite | Identitatea există, dar sursele dominante sunt incomplete sau depășite. |
| Coliziune ridicată | Problema principală este dezambiguizarea și coroborarea identității. |
| Confabulare ridicată | Există lacune informaționale, surse slabe sau asocieri neclare; se evită concluziile comerciale bazate pe simpla prezență. |
| HIT-C ridicat | Poate fi recomandată monitorizarea, nu neapărat optimizarea extinsă. |

| **Regulă:** Diagnosticul trebuie să poată concluziona și că nu este necesară o intervenție amplă. F0 nu este o justificare automată pentru vânzarea fazelor următoare. |
|----|

# 19. Criterii de conformitate

O implementare poate fi declarată „conformă AVL-201” numai dacă
îndeplinește toate cerințele obligatorii și include:

- forma canonică și harta coliziunilor;

- set înghețat de interogări;

- condiții de sesiune documentate;

- minimum o dovadă primară per rulare inclusă în analiză;

- taxonomie aplicată consecvent;

- metadate suficiente pentru reproducere;

- arhivă finală și manifest;

- registrul abaterilor;

- raportarea limitărilor;

- aprobarea responsabilului de metodologie.

Niveluri recomandate de declarație:

- Conform AVL-201 — toate cerințele obligatorii sunt îndeplinite.

- Conform parțial AVL-201 — domeniul sau dovezile sunt restrânse;
  abaterile sunt enumerate.

- Inspirat de AVL-201 — metodologia este folosită orientativ, fără
  revendicarea conformității.

# 20. Structura raportului final

1.  Rezumat executiv.

2.  Scop și domeniu.

3.  Fișa entității.

4.  Metodă și condiții.

5.  Setul de interogări.

6.  Accesul crawlerelor.

7.  Date structurate.

8.  Rezultatele motoarelor.

9.  Percepția entității.

10. Sursele citate.

11. Prezența distribuită.

12. Corpusul de conținut.

13. Scoruri și distribuții.

14. Diagnostic pe filtre.

15. Limitări și incidente.

16. Priorități pentru F1–F2.

17. Anexe și manifestul dovezilor.

# 21. Șabloane minime

## 21.1. Registrul rulărilor

| **Run ID** | **Query ID** | **Motor** | **Data/ora** | **Configurație** | **Clasificare** | **Citare canonică** | **Evidence ID** | **Observații** |
|----|----|----|----|----|----|----|----|----|
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |  |  |

## 21.2. Registrul incidentelor

| **Incident ID** | **Dată** | **Descriere** | **Artefacte afectate** | **Impact** | **Decizie** | **Aprobare** |
|----|----|----|----|----|----|----|
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

## 21.3. Manifestul snapshot-ului

| **Evidence ID** | **Nume fișier** | **Tip** | **Sursă** | **Timestamp** | **Checksum** | **Note** |
|----|----|----|----|----|----|----|
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |
|  |  |  |  |  |  |  |

# 22. Întrebări frecvente

### De ce nu începem direct optimizarea?

Pentru că fără baseline nu putem separa efectul intervenției de starea
preexistentă și de variația naturală a platformelor.

### Cât durează F0?

O implementare restrânsă poate dura câteva zile. Una completă, cu audit
tehnic, cinci motoare, rulări repetate și revizuire, se întinde realist
pe aproximativ două-trei săptămâni calendaristice.

### Pot executa singur metodologia?

Da. O versiune de bază poate acoperi fișa entității, setul de interogări
și linia de bază. Conformitatea completă necesită însă dovezi, audit
tehnic și control de calitate.

### Ce se întâmplă dacă rezultatele sunt deja bune?

Recomandarea poate fi monitorizarea. O metodologie credibilă trebuie să
poată concluziona că optimizarea extinsă nu este necesară.

### O singură captură este suficientă?

Nu pentru o concluzie generală. Poate documenta o observație, dar nu o
rată, o tendință sau efectul unei intervenții.

### De ce publicați metodologia?

Pentru că transparența face rezultatele verificabile. Avantajul
profesional nu stă în secretul pașilor, ci în execuție, disciplină, date
și interpretare.

# 23. Referințe și documente asociate

- **AVL-001 — AI Visibility Lab Foundation:** Document fondator și
  standard epistemic.

- **AVL-101 — Ce este GEO/AEO și AI Visibility:** Definiții și context.

- **AVL-102 — Cum aleg sistemele AI sursele și citările:** Modelul celor
  patru filtre.

- **AVL-104 — Cum se măsoară AI Visibility:** Fundamentele taxonomiei și
  măsurării.

- **AVL-105 — Glosar GEO/AEO și AI Visibility:** Terminologie extinsă.

- **Google — robots.txt specification:**
  [<u>https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec</u>](https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec)

- **OpenAI — Overview of OpenAI Crawlers:**
  [<u>https://developers.openai.com/api/docs/bots</u>](https://developers.openai.com/api/docs/bots)

- **Anthropic — Web crawling documentation:**
  [<u>https://support.anthropic.com/en/articles/8896518</u>](https://support.anthropic.com/en/articles/8896518)

- **Perplexity — Perplexity Crawlers:**
  [<u>https://docs.perplexity.ai/docs/resources/perplexity-crawlers</u>](https://docs.perplexity.ai/docs/resources/perplexity-crawlers)

- **Google Search Central — Structured data:**
  [<u>https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data</u>](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data)

- **Aggarwal et al. — GEO: Generative Engine Optimization:**
  [<u>https://arxiv.org/abs/2311.09735</u>](https://arxiv.org/abs/2311.09735)

# 24. Istoricul versiunilor

| **Versiune** | **Dată** | **Statut** | **Modificări** |
|----|----|----|----|
| 1.0.0 | iulie 2026 | Activ | Prima versiune normativă publică a specificației Tabula Rasa F0. |
| 1.0.1 | 21 iulie 2026 | Activ | PATCH: uniformizare metadate; referință la RFC 2119; marcarea URL-ului canonic ca propus până la confirmarea publicării. |

| **Declarație finală:** Tabula Rasa F0 nu demonstrează că o intervenție viitoare va funcționa. Ea stabilește condițiile minime pentru ca o schimbare ulterioară să poată fi comparată, verificată și discutată onest. |
|----|
