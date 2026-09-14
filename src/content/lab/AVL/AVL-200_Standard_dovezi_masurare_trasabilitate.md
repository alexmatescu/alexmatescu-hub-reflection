---
document_id: "AVL-200"
title: "Standardul de dovezi, măsurare și trasabilitate"
subtitle: "Evidence, Measurement & Traceability Standard"
level: "C — Methodology"
version: "1.0.0"
status: "Activ"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-09-13"
date_published: "2026-09-14T08:57:00+03:00"
date_modified: "2026-09-14"
last_reviewed: "2026-09-14"
canonical: "https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-104 — Cum se măsoară AI Visibility"
informative_dependencies:
  - "AVL-101 — Ce este GEO/AEO și AI Visibility"
  - "AVL-102 — Cum aleg sistemele AI sursele și citările"
  - "AVL-103 — SEO și GEO: relații, diferențe și suprapuneri"
  - "AVL-105 — Glosar GEO/AEO și AI Visibility"
  - "AVL-201 — Tabula Rasa F0: Baseline Measurement Specification"
---

# AVL-200 — Standardul de dovezi, măsurare și trasabilitate

## Evidence, Measurement & Traceability Standard

> **Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation**

AVL-200 definește standardul transversal prin care AI Visibility Lab transformă artefacte brute de cercetare în informație măsurabilă și, ulterior, în interpretări care pot fi urmărite înapoi până la dovezile care le susțin.

Documentul nu definește o anumită intervenție GEO/AEO și nu înlocuiește metodologiile concrete, precum Tabula Rasa F0. El stabilește regulile comune pe care orice protocol, experiment, studiu de caz sau măsurare longitudinală TREBUIE să le respecte atunci când capturează, indexează, clasifică, măsoară, agregă, interpretează sau publică dovezi.

AVL-200 pornește de la o regulă simplă:

> **O concluzie nu trebuie să fie mai puternică decât traseul de dovezi care o susține.**

---

## Controlul documentului

AVL-200 este un document normativ de nivel C — Methodology în corpusul AI Visibility Lab Documentation.

Versiunea curentă, **1.0.0**, este activă. AVL-200 este standardul activ al laboratorului pentru evidence, măsurare și trasabilitate, aplicabil transversal conform domeniului de aplicare din §2.

Un set limitat de decizii pur operaționale (politica finală asupra unor artefacte ale Evidence Package, validarea end-to-end a implementării de referință pe un pachet real, auditul complet al schemei Evidence Index față de cerințele `AVL200-REQ`) rămân deschise și sunt documentate explicit, ca excepții acceptate, în §38. Ele nu afectează aplicabilitatea normativă a cerințelor din acest document.

În acest document, termenii **TREBUIE**, **NU TREBUIE**, **ESTE OBLIGATORIU**, **AR TREBUI**, **NU AR TREBUI** și **POATE** sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:

- **TREBUIE / NU TREBUIE** — condiție obligatorie pentru conformitate;
- **AR TREBUI / NU AR TREBUI** — recomandare puternică; abaterea este permisă numai cu justificare documentată;
- **POATE** — opțiune permisă.

În afara propozițiilor normative și a cerințelor identificate `AVL200-REQ-*`, acești termeni nu trebuie interpretați automat ca cerințe de conformitate.

---

# 1. Scop

Scopul AVL-200 este să definească un standard public, repetabil și auditabil pentru:

1. conservarea artefactelor brute;
2. stabilirea provenienței și integrității acestora;
3. transformarea artefactelor în dovezi indexate;
4. separarea faptelor deterministe de clasificările care presupun judecată;
5. transformarea dovezilor în observații;
6. transformarea observațiilor în măsurări;
7. agregarea măsurărilor;
8. delimitarea măsurării de interpretare;
9. trasabilitatea bidirecțională dintre afirmația publicată și artefactul brut;
10. versionarea și auditarea întregului lanț.

> **AVL200-REQ-001 — Orice rezultat publicat ca măsurare conformă AI Visibility Lab TREBUIE să poată fi urmărit până la una sau mai multe dovezi identificabile.**

> **AVL200-REQ-002 — O interpretare NU TREBUIE prezentată drept observație directă, iar o observație NU TREBUIE prezentată drept fapt documentat extern dacă nu există o sursă corespunzătoare.**

---

# 2. Domeniu de aplicare

AVL-200 se aplică transversal tuturor activităților AI Visibility Lab care produc sau utilizează dovezi măsurabile, inclusiv:

- baseline-uri;
- remăsurări longitudinale;
- experimente publice;
- studii de caz;
- audituri;
- teste de entity resolution;
- evaluări ale citării și mențiunii;
- capturi de crawler access și HTTP behavior;
- structured-data validation;
- măsurări Search / AI Search;
- comparații între platforme;
- verificări înainte/după intervenții;
- orice viitor protocol care derivă o concluzie din artefacte observabile.

AVL-200 NU definește:

- taxonomia specifică unui anumit protocol;
- scorurile unei anumite metodologii;
- query set-ul unui anumit studiu;
- intervențiile F1/F2 sau ale altui protocol;
- mecanismele interne nepublicate ale furnizorilor AI;
- o platformă obligatorie de stocare;
- un limbaj de programare obligatoriu;
- GitHub drept cerință metodologică universală.

O implementare POATE utiliza GitHub Releases, fișiere CSV, scripturi Node, baze de date sau alte instrumente, cu condiția să respecte cerințele normative ale acestui standard.

---

# 3. Principiul epistemic fundamental

AI Visibility Lab separă cinci niveluri care NU TREBUIE confundate:

## 3.1. Raw Evidence

Artefactul original produs sau capturat în timpul unei rulări, sesiuni, verificări sau măsurări.

Exemple:

- screenshot original;
- export HTML/PDF/text;
- înregistrare video;
- log de server/CDN/WAF;
- răspuns HTTP capturat;
- fișier `robots.txt` capturat la un moment dat;
- JSON-LD extras;
- export de validator;
- registru de rulare;
- fișier generat de instrumentul de măsurare.

Raw Evidence descrie **ce a fost conservat**, nu ce înseamnă acel artefact.

## 3.2. Indexed Evidence

Raw Evidence însoțit de suficiente metadate și relații pentru ca artefactul să poată fi identificat, regăsit, verificat și legat de o rulare sau condiție experimentală.

Un Indexed Evidence poate include:

- Evidence ID;
- cale/nume original;
- hash;
- dimensiune;
- platformă;
- query / query group;
- measurement point;
- sesiune;
- continuări multi-capture;
- duplicate;
- contaminare;
- anomalii;
- timestamp sau `UNKNOWN`;
- relații cu alte artefacte.

Indexed Evidence descrie **ce este artefactul și unde se află în experiment**, nu rezultatul analitic derivat din el.

## 3.3. Observation

Afirmație verificabilă direct prin inspectarea uneia sau mai multor dovezi indexate.

Exemple:

- „Numele entității apare în răspuns.”
- „Este afișat un link către domeniul canonic.”
- „Răspunsul atribuie entității profesia X.”
- „Platforma afișează o eroare.”
- „Screenshot-ul reprezintă partea 2 din același răspuns.”

O observație NU presupune automat evaluarea corectitudinii sau a semnificației fenomenului.

## 3.4. Measurement

Aplicarea unei reguli definite asupra uneia sau mai multor observații pentru a produce o categorie, o valoare, un scor sau un indicator.

Exemple:

- clasificarea rezultatului ca `HIT-C`;
- `Canonical citation = YES`;
- `Collision = NO`;
- rata HIT-C pe un set de N rulări;
- distribuția unei taxonomii;
- scor normalizat.

Măsurarea cere o regulă explicită și reproductibilă.

## 3.5. Interpretation

Sensul atribuit unui tipar de măsurare, inclusiv explicații, inferențe, implicații și ipoteze.

Exemplu:

„Creșterea ratei HIT-C după intervenție este compatibilă cu o asociere mai puternică între entitate și sursa canonică.”

Această propoziție poate fi legitimă, dar nu este Raw Evidence, Observation sau Measurement.

> **AVL200-REQ-003 — Fiecare nivel TREBUIE să rămână identificabil separat în fluxul de cercetare.**

> **AVL200-REQ-004 — Un instrument automat NU TREBUIE să transforme o clasificare incertă într-un fapt determinist numai pentru a completa schema.**

---

# 4. Evidence-to-Claim Traceability

Lanțul complet urmărit de AI Visibility Lab este:

```text
Raw Evidence
    ↓
Indexed Evidence
    ↓
Observation
    ↓
Measurement
    ↓
Interpretation
    ↓
Published Claim
```

Trasabilitatea TREBUIE să funcționeze în ambele direcții.

Dinspre dovadă spre afirmație:

```text
artifact → Evidence ID → observation → measurement → interpretation → claim
```

Dinspre afirmație spre dovadă:

```text
claim → interpretation/measurement → observation → Evidence ID → raw artifact → integrity record
```

> **AVL200-REQ-005 — Pentru orice afirmație materială derivată dintr-o măsurare proprie, laboratorul TREBUIE să poată identifica baza de evidence care o susține.**

> **AVL200-REQ-006 — O valoare agregată TREBUIE să permită identificarea populației de măsurări din care a fost calculată.**

> **AVL200-REQ-007 — Un rezultat eliminat, exclus sau contaminat NU TREBUIE să dispară silențios din audit trail; starea și motivul excluderii TREBUIE documentate.**

---

# 5. Fapte deterministe, clasificări și valori derivate

Pentru a limita amestecul dintre calcul și judecată, fiecare câmp relevant AR TREBUI să aparțină uneia dintre următoarele clase:

## 5.1. DETERMINISTIC

Valoare calculabilă direct din fișier, filesystem sau alt input tehnic fără judecată semantică.

Exemple:

- SHA-256;
- dimensiune în bytes;
- nume de fișier;
- cale;
- format;
- dimensiuni imagine;
- existența unui fișier;
- număr de rânduri.

Aceste valori AR TREBUI produse de cod, nu completate manual atunci când pot fi calculate sigur.

## 5.2. CLASSIFICATION

Valoare care presupune inspecție și judecată umană sau asistată de AI.

Exemple:

- platformă observată;
- query observat;
- continuitatea logică a capturilor;
- contaminare;
- tip de evidence;
- motiv de excludere;
- rezultat taxonomic.

Clasificările TREBUIE să permită audit și review.

## 5.3. DERIVED

Valoare calculată determinist din câmpuri deja existente.

Exemple:

- Evidence ID construit conform unei convenții;
- Query Group ID;
- continuation flag;
- duplicate status bazat pe hash;
- agregări și scoruri definite matematic.

> **AVL200-REQ-008 — O valoare determinist-calculabilă NU TREBUIE inventată sau estimată de evaluator dacă poate fi obținută direct din sursă.**

> **AVL200-REQ-009 — Originea fiecărui câmp material AR TREBUI să fie identificabilă drept DETERMINISTIC, CLASSIFICATION sau DERIVED.**

---

# 6. Semantica stărilor necunoscute

AI Visibility Lab NU echivalează absența informației cu un răspuns negativ.

Valorile minime recomandate sunt:

| Valoare | Sens |
|---|---|
| `YES` | condiția a fost observată/confirmată conform regulii |
| `NO` | condiția relevantă a fost verificată și nu este prezentă |
| `UNKNOWN` | câmpul este relevant și a fost analizat, dar valoarea nu poate fi stabilită |
| `NOT_APPLICABLE` | câmpul nu se aplică obiectului respectiv |
| `UNCLASSIFIED` | câmpul nu a fost încă evaluat |
| `UNRESOLVED` | există o relație sau referință declarată care nu poate fi încă rezolvată |

`UNKNOWN` ≠ `NO`.

`NOT_APPLICABLE` ≠ `UNKNOWN`.

`UNCLASSIFIED` ≠ `UNKNOWN`.

> **AVL200-REQ-010 — `UNKNOWN` NU TREBUIE convertit în `NO` numai pentru a produce un dataset complet.**

> **AVL200-REQ-011 — O versiune finală a unui Evidence Index NU TREBUIE să conțină `UNCLASSIFIED` pentru câmpuri obligatorii.**

---

# 7. Faza metodologică și punctul de măsurare

AVL-200 separă două concepte care pot coincide într-un anumit studiu, dar nu sunt sinonime.

## 7.1. Methodological Phase

Faza descrie rolul unei etape într-o metodologie.

Exemple existente în AI Visibility Lab:

- `F0` — baseline / Tabula Rasa;
- `F1` — intervenție asupra sursei canonice;
- `F2` — consolidarea prezenței distribuite;
- `F3` — remăsurare în arhitectura curentă a metodologiei.

Fazele aparțin **designului metodologic**.

## 7.2. Measurement Point

Punctul de măsurare identifică o observație longitudinală în timp, independent de numele fazei metodologice.

Convenția recomandată prospectiv:

- `T0` — primul punct de măsurare;
- `T1` — următorul punct;
- `T2` etc.;
- sau o fereastră temporală explicită atunci când un singur punct nu este suficient.

Un singur F poate include mai multe T-uri.

Exemplu:

```text
F1 / T1
F1 / T2
F1 / T3
```

Această situație poate apărea dacă aceeași intervenție este remăsurată de mai multe ori fără trecerea la o altă fază metodologică.

## 7.3. Convenții istorice și deviații

Documentele și studiile realizate înainte de formalizarea AVL-200 POT conține convenții în care `F` a fost folosit și ca identificator practic al unui snapshot sau measurement point.

Aceste cazuri NU TREBUIE rescrise retroactiv numai pentru uniformizare vizuală.

Corectarea corpusului TREBUIE făcută prin:

1. păstrarea artefactului istoric;
2. documentarea convenției folosite la momentul respectiv;
3. introducerea regulii noi în versiunea următoare a documentației;
4. publicarea unui mapping sau a unei note de compatibilitate când este necesar;
5. evitarea falsificării istoriei executării.

> **AVL200-REQ-012 — Faza metodologică și measurement point-ul TREBUIE tratate ca dimensiuni distincte în noile implementări conforme AVL-200.**

> **AVL200-REQ-013 — O etichetă istorică deja folosită în evidence sau într-un rezultat publicat NU TREBUIE schimbată silențios numai pentru a corespunde unei convenții ulterioare.**

---

# 8. Raw Evidence Standard

## 8.1. Principiul conservării

Raw Evidence reprezintă forma conservată care intră în lanțul de audit.

După înregistrarea sa într-o rundă de măsurare, Raw Evidence NU TREBUIE modificat in-place pentru a îmbunătăți lizibilitatea, denumirea, ordinea, rezultatul sau conformitatea aparentă.

Operații precum conversia de format, redimensionarea, OCR-ul, redactarea sau adnotarea produc **artefacte derivate**, nu înlocuitori ai originalului.

> **AVL200-REQ-014 — Raw Evidence original TREBUIE păstrat separat de orice copie procesată sau derivată.**

> **AVL200-REQ-015 — O modificare a bytes-ilor Raw Evidence după înregistrarea hash-ului invalidează asocierea cu acel hash și TREBUIE tratată ca o versiune nouă sau ca incident.**

## 8.2. Dovezi acceptabile

În funcție de protocol, pot fi acceptate:

- capturi integrale;
- exporturi conversaționale;
- fișiere brute;
- înregistrări video;
- loguri;
- răspunsuri HTTP;
- fișiere de configurare;
- registre de rulare;
- alte artefacte care permit verificarea directă a fenomenului măsurat.

## 8.3. Dovezi insuficiente singure

Nu sunt suficiente singure pentru o afirmație de conformitate:

- relatarea operatorului fără artefact;
- screenshot decupat care elimină informația esențială de context;
- screenshot fără posibilitatea legării de o rulare;
- text transcris manual fără original;
- rezumatul evaluatorului fără evidence;
- un rezultat selectat dintr-o serie nedeclarată.

---

# 9. Provenance Standard

Provenance răspunde la întrebarea:

> **De unde provine artefactul și prin ce proces a ajuns în acest pachet?**

Pentru fiecare artefact material, protocolul AR TREBUI să păstreze, atunci când pot fi determinate legitim:

- entitatea;
- studiul;
- faza metodologică;
- measurement point;
- platforma;
- query-ul / query ID;
- run ID;
- sesiunea;
- limba;
- data și ora;
- fusul orar;
- configurația de cont;
- starea memoriei/istoricului;
- disponibilitatea web search;
- locația relevantă metodologic;
- modelul afișat, dacă este disponibil;
- instrumentul/operatorul;
- calea originală;
- numele original;
- hash-ul.

Dacă o valoare nu poate fi stabilită, se aplică semantica din secțiunea 6.

> **AVL200-REQ-016 — Timestamp-ul unei capturi NU TREBUIE dedus din mtime-ul fișierului dacă acel mtime reflectă numai arhivarea, copierea sau extracția.**

> **AVL200-REQ-017 — Provenance metadata NU TREBUIE completată cu valori aproximative prezentate drept certe.**

---

# 10. Integrity, authenticity, completeness și validity

AVL-200 separă concepte care NU sunt echivalente.

## 10.1. Integrity

Integritatea răspunde:

> Bytes verificați acum sunt aceiași cu bytes fixați anterior?

Un hash criptografic poate demonstra egalitatea cu o stare hash-uită anterior, nu autenticitatea fenomenului capturat.

## 10.2. Provenance

Provenance descrie lanțul de origine și procesare.

## 10.3. Authenticity

Authenticity exprimă gradul în care există bază suficientă pentru a considera artefactul o reprezentare autentică a evenimentului/rulării declarate.

Un hash calculat după ce un artefact a fost deja modificat nu poate detecta modificarea anterioară calculării hash-ului.

## 10.4. Completeness

Completeness exprimă dacă setul de evidence conține toate artefactele cerute de protocol.

## 10.5. Validity

Validity exprimă dacă artefactul și procedura sunt adecvate pentru măsurarea sau afirmația pentru care sunt utilizate.

> **AVL200-REQ-018 — O verificare SHA-256 reușită NU TREBUIE descrisă drept dovadă suficientă a autenticității sau validității experimentale.**

---

# 11. Evidence Index

Evidence Index este registrul structurat care leagă artefactele de contextul experimental.

Un index conform AR TREBUI să permită cel puțin:

- identificare unică;
- regăsire;
- verificare hash;
- relația cu query/run/session;
- relații multipart;
- relații duplicate;
- status de contaminare;
- status de includere/excludere;
- anomalie de arhivare;
- review status;
- versionare.

## 11.1. Evidence ID

Evidence ID TREBUIE să fie:

- unic în domeniul definit al studiului;
- stabil după publicare;
- neambiguu;
- rezolvabil către artefactul indexat.

Un Evidence ID atribuit unei perechi stabile de identitate a artefactului NU AR TREBUI reasignat altui artefact.

## 11.2. Multi-part evidence

Când un singur răspuns necesită mai multe capturi:

- capturile TREBUIE tratate ca părți ale aceleiași unități logice;
- ordinea TREBUIE păstrată;
- relația cu partea principală TREBUIE explicitată;
- o continuare NU TREBUIE transformată într-un query nou numai pentru că query-ul nu mai este vizibil în cadru.

## 11.3. Duplicate

Duplicatele byte-identice POT fi detectate prin hash.

Ele NU TREBUIE șterse automat dacă existența duplicatului este relevantă pentru auditul arhivei.

Near-duplicates NU TREBUIE declarați identici numai pe baza asemănării vizuale.

---

# 12. Observation Standard

Observation trebuie să fie formulată astfel încât un evaluator independent să poată răspunde:

> „Pot vedea asta direct în evidence?”

O observație conformă:

- indică Evidence ID-ul sau setul de Evidence IDs;
- descrie doar ceea ce este vizibil/derivabil direct;
- evită explicațiile cauzale;
- evită atribuirea unei intenții platformei;
- evită inferențele despre mecanisme interne;
- păstrează incertitudinea atunci când evidence-ul este ambiguu.

Exemplu conform:

> „Răspunsul afișează numele entității și citează domeniul canonic.”

Exemplu neconform ca observație:

> „Modelul are încredere în domeniul canonic.”

A doua propoziție este o interpretare despre un mecanism intern neobservabil.

> **AVL200-REQ-019 — Fiecare observație materială TREBUIE să fie legată de evidence-ul care permite verificarea ei.**

---

# 13. Measurement Standard

Measurement transformă observația printr-o regulă definită înainte sau declarată transparent la momentul analizei.

O regulă de măsurare AR TREBUI să specifice:

- inputurile;
- criteriul;
- valorile permise;
- tratamentul necunoscutelor;
- tratamentul contaminării;
- tratamentul duplicatelelor;
- includerea/excluderea;
- formula de agregare, dacă există;
- versiunea regulii.

> **AVL200-REQ-020 — O clasificare TREBUIE să aibă un criteriu operațional suficient de precis pentru a putea fi aplicat de un al doilea evaluator.**

> **AVL200-REQ-021 — Un scor agregat NU TREBUIE publicat fără denominator, perioadă, populație analizată și regulă de calcul.**

## 13.1. Measurement Rule Version

Pe lângă versiunea arhivei și versiunea metadatelor, o implementare matură AR TREBUI să păstreze versiunea regulii de măsurare atunci când taxonomia, criteriile sau formula se pot schimba.

Exemplu conceptual:

```text
archive_version: 1
metadata_version: 1.1
measurement_rule_version: 2.0
```

Același Raw Evidence poate fi reevaluat printr-o regulă nouă fără a pretinde că evidence-ul însuși s-a schimbat.

---

# 14. Aggregation Standard

Agregarea transformă măsurări individuale în indicatori de grup.

Pentru orice agregare, TREBUIE cunoscute:

- N total;
- unitatea de analiză;
- perioada/fereastra;
- motoarele/platformele incluse;
- categoriile incluse;
- cazurile excluse;
- tratamentul `UNKNOWN` / `NOT_APPLICABLE` / `REFUZ` etc.;
- formula.

Agregarea NU TREBUIE să ascundă distribuții importante.

Două seturi cu același scor mediu pot avea distribuții radical diferite.

> **AVL200-REQ-022 — Când un indicator agregat poate masca tipuri distincte de eșec, distribuția categoriilor AR TREBUI publicată împreună cu indicatorul.**

---

# 15. Interpretation Boundary

Interpretation începe acolo unde evaluatorul răspunde la întrebarea:

> „Ce înseamnă acest tipar?”

Interpretarea poate include:

- explicații posibile;
- comparații;
- implicații;
- atribuiri prudente;
- inferențe;
- ipoteze pentru următoarea fază.

Interpretarea TREBUIE să respecte AVL-001 și să păstreze distincția dintre:

- documentat extern;
- observat direct;
- măsurat;
- inferat;
- ipotetizat.

> **AVL200-REQ-023 — O corelație observată între o intervenție și o schimbare NU TREBUIE descrisă automat drept cauzalitate.**

> **AVL200-REQ-024 — O interpretare bazată pe un eșantion finit NU TREBUIE generalizată la comportamentul universal al unei platforme fără bază suplimentară.**

---

# 16. Human-in-the-loop și controlul calității

AVL-200 definește două forme distincte de review.

## 16.1. Exception Review

Se aplică elementelor ambigue, conflictuale sau cu impact asupra structurii datasetului.

Exemple:

- Query ID incert;
- continuare incertă;
- platformă ambiguă;
- contaminare;
- includere/excludere;
- mapping confirmat fără bază;
- privacy issue.

Astfel de probleme POT bloca finalizarea.

## 16.2. Quality-Control Sampling

Un dataset poate conține erori în cazuri pe care evaluatorul inițial nu le-a considerat ambigue.

Prin urmare, proiectele cu cerințe ridicate de audit AR TREBUI să includă o verificare independentă pe un eșantion de clasificări aparent clare.

> **AVL200-REQ-025 — Elementele care pot modifica identitatea query-ului, condiția experimentală, includerea/excluderea sau platforma NU TREBUIE finalizate automat atunci când clasificarea rămâne incertă.**

> **AVL200-REQ-026 — Review-ul incertitudinilor NU TREBUIE tratat drept substitut complet pentru quality-control sampling.**

---

# 17. Contaminare, incidente și anomalii

AVL-200 distinge:

## 17.1. Contamination

Influență care poate compromite comparabilitatea experimentală.

Exemple:

- istoric conversațional;
- personalizare;
- intervenție aplicată înainte de închiderea baseline-ului;
- query reformulat în aceeași sesiune când protocolul interzice acest lucru;
- schimbare de cont/configurație.

## 17.2. Archive Anomaly

Problemă de organizare sau proveniență care nu implică automat invalidarea observației.

Exemple:

- screenshot într-un folder de platformă greșit;
- nume inconsistent;
- fișier duplicat;
- ordine incertă.

## 17.3. Protocol Deviation

Abatere de la protocolul declarat.

O abatere NU TREBUIE ascunsă pentru a păstra aparența unui experiment „curat”.

> **AVL200-REQ-027 — Orice abatere materială descoperită după execuție TREBUIE documentată, evaluată pentru impact și păstrată în istoricul studiului.**

---

# 18. Privacy și publicarea evidence-ului

Raw Evidence poate conține informații care nu trebuie publicate.

AVL-200 distinge cel puțin:

## 18.1. Publicable

Poate fi publicat conform protocolului.

## 18.2. Privacy Review Required

Conține sau poate conține date personale ori informații care necesită evaluare înainte de publicare.

## 18.3. Secret / Credential — Hard Block

Parolele, token-urile, cheile API, cookie-urile de autentificare sau alte secrete operaționale NU TREBUIE publicate, chiar dacă operatorul dorește publicarea rapidă a pachetului.

Dacă publicarea necesită redactare:

- originalul TREBUIE păstrat în forma protejată adecvată;
- versiunea redactată TREBUIE identificată ca artefact derivat;
- relația cu originalul TREBUIE documentată;
- artefactul derivat NU TREBUIE substituit silențios originalului.

> **AVL200-REQ-028 — Datele confidențiale și secretele de acces NU TREBUIE incluse într-un evidence package public.**

---

# 19. Versioning Model

AVL-200 separă minimum următoarele versiuni.

## 19.1. Archive Version

Se schimbă când se schimbă setul de Raw Evidence sau bytes care compun arhiva.

## 19.2. Metadata Version

Se schimbă când aceleași dovezi primesc corecții sau completări de indexare/metadata fără modificarea raw archive.

## 19.3. Measurement Rule Version

Se schimbă când taxonomia, criteriile sau formula de măsurare se modifică suficient încât rezultatul ar putea fi recalculat diferit.

## 19.4. Document Version

Versiunea documentului metodologic care definește regulile aplicabile.

> **AVL200-REQ-029 — Corectarea unui artifact finalizat NU TREBUIE realizată prin suprascriere silențioasă dacă versiunea respectivă a fost deja publicată sau utilizată ca referință.**

> **AVL200-REQ-030 — O versiune nouă TREBUIE să păstreze legătura cu versiunea precedentă și motivul schimbării.**

---

# 20. State Model pentru Evidence Package

O implementare conformă AR TREBUI să distingă stări echivalente cu:

```text
COLLECTED
   ↓
INVENTORIED
   ↓
CLASSIFIED
   ↓
REVIEWED
   ↓
VALIDATED
   ↓
FROZEN
   ↓
INTEGRITY_VERIFIED
   ↓
RELEASED / PUBLISHED
```

Stările descriu maturitatea pachetului, nu valoarea rezultatului experimental.

## 20.1. Tranziții

- `COLLECTED → INVENTORIED` — raw archive a fost identificată și inventariată;
- `INVENTORIED → CLASSIFIED` — a fost adăugată metadata de judecată;
- `CLASSIFIED → REVIEWED` — excepțiile obligatorii au fost rezolvate;
- `REVIEWED → VALIDATED` — structura și relațiile au trecut validarea;
- `VALIDATED → FROZEN` — versiunea este închisă pentru modificări in-place;
- `FROZEN → INTEGRITY_VERIFIED` — manifestul de integritate a fost generat și verificat;
- `INTEGRITY_VERIFIED → RELEASED` — pachetul a fost încărcat/publicat conform politicii studiului.

O corecție după `FROZEN` AR TREBUI să producă o nouă versiune, nu întoarcerea silențioasă a aceleiași versiuni în `CLASSIFIED`.

---

# 21. Freeze, write protection și integrity verification

AVL-200 separă trei concepte.

## 21.1. Freeze policy

Decizia procedurală că o versiune este închisă pentru editare in-place.

## 21.2. Write protection

Mecanism tehnic care reduce riscul modificării accidentale, de exemplu permisiuni read-only.

Write protection NU este echivalent cu imuabilitatea criptografică și poate fi reversibilă prin intervenția unui operator cu permisiuni suficiente.

## 21.3. Integrity verification

Mecanismul prin care o modificare poate fi detectată, de exemplu SHA-256 și verificarea ulterioară a manifestului.

> **AVL200-REQ-031 — Artefactele finale TREBUIE validate înainte de calcularea manifestului final de integritate.**

> **AVL200-REQ-032 — După fixarea manifestului unei versiuni, orice modificare a unui artefact protejat de acel manifest TREBUIE tratată ca invalidare sau versiune nouă.**

---

# 22. Evidence Package

Un Evidence Package este pachetul versionat care permite unui terț să verifice ce evidence a fost utilizat și în ce formă.

Pachetul public conform AR TREBUI să conțină cel puțin:

1. Raw Evidence archive sau acces controlat la aceasta, după politica studiului;
2. Evidence Index;
3. README / manifest descriptiv;
4. manifest de integritate;
5. identificatori de versiune;
6. suficiente informații pentru legătura cu studiul și measurement point-ul.

O implementare POATE include suplimentar:

- validation report;
- release notes;
- machine-readable manifest;
- schema version;
- processing log final;
- semnătură digitală;
- DOI sau alt persistent identifier.

## 22.1. Self-contained package

Atunci când este practic, pachetul AR TREBUI să fie verificabil fără a depinde de fișiere locale neverificabile sau de căi disponibile numai operatorului.

## 22.2. Validation Report

Dacă un `validation-report` este prezentat public drept dovadă că pachetul a trecut validarea, el AR TREBUI inclus în suprafața de integritate a release-ului sau asociat printr-un mecanism echivalent.

Dacă este exclus din manifest, documentația TREBUIE să precizeze că este un artefact intern și nu o componentă protejată a Evidence Package-ului public.

> **AVL200-REQ-033 — Limita exactă a Evidence Package-ului TREBUIE declarată explicit.**

---

# 23. Checksum și manifestul de integritate

SHA-256 este algoritmul recomandat implicit pentru manifestele actuale AI Visibility Lab, fără a exclude un algoritm viitor mai potrivit.

Manifestul:

- AR TREBUI să folosească nume canonice de fișier;
- TREBUIE să permită verificarea independentă;
- NU TREBUIE să includă o valoare inventată;
- NU TREBUIE prezentat drept dovadă a corectitudinii semantice a clasificării.

Verificarea AR TREBUI executată:

1. imediat după generare;
2. din nou înainte de o operație mutativă de publicare/upload, dacă între cele două momente poate interveni o perioadă sau o confirmare umană.

> **AVL200-REQ-034 — Un manifest de integritate TREBUIE verificat, nu doar generat.**

---

# 24. Audit Trail

Audit Trail descrie acțiunile și rezultatele procesului, nu raționamentul intern privat al unui model AI.

Un audit trail util poate include:

- timestamp;
- operație;
- script/instrument;
- input;
- output;
- status;
- warnings;
- reviewer;
- versiune.

Audit Trail-ul poate fi append-only în timpul procesării.

Dacă logul continuă să se modifice după înghețarea Evidence Package-ului, el TREBUIE tratat ca artefact distinct de package-ul pe care a fost deja calculat checksum-ul sau trebuie finalizat într-o versiune separată.

> **AVL200-REQ-035 — Audit trail-ul NU TREBUIE să conțină explicații ale „gândirii interne” a modelului; trebuie să înregistreze acțiuni, decizii declarate și rezultate verificabile.**

---

# 25. Idempotency și rerun

Un pipeline de evidence matur AR TREBUI să poată fi rulat repetat fără a distruge artefacte valide sau a schimba identificatori stabili fără motiv.

Comportamente recomandate:

- păstrarea clasificărilor existente pentru artefacte neschimbate;
- reutilizarea Evidence ID-urilor pentru aceeași identitate de artefact;
- evitarea upload-urilor duplicate;
- refuzul suprascrierii unei versiuni publicate;
- semnalarea diferențelor, nu „curățarea” lor automată.

> **AVL200-REQ-036 — O rerulare NU TREBUIE să rescrie silențios istoria unui pachet deja publicat.**

---

# 26. Separarea AI de execuția deterministă

Implementarea de referință AI Visibility Lab adoptă principiul:

> **AI clasifică; codul execută operațiile deterministe.**

Aceasta este o strategie de implementare, nu o obligație de tehnologie.

Principiul normativ din spatele ei este:

- judecata semantică TREBUIE diferențiată de calcul;
- valorile calculabile TREBUIE obținute determinist atunci când este posibil;
- incertitudinea clasificării TREBUIE reprezentată explicit;
- un model AI NU TREBUIE folosit ca sursă pentru hash, dimensiune de fișier, timestamp absent sau alt fapt ce poate fi verificat direct.

> **AVL200-REQ-037 — Sistemul TREBUIE să poată distinge ce valori au fost calculate, ce valori au fost clasificate și ce valori au fost derivate.**

---

# 27. Implementarea de referință `evidence-release`

AI Visibility Lab poate utiliza agentul `evidence-release` drept implementare tehnică de referință pentru segmentul:

```text
Raw Evidence → Indexed Evidence → Verified Evidence Package
```

Implementarea curentă:

- citește config-ul pachetului;
- verifică și inventariază arhiva;
- calculează hash-uri și metadata tehnică;
- permite clasificare vizuală controlată;
- generează staging index;
- introduce human-review gate;
- generează Evidence Index și README;
- validează structura și conținutul;
- aplică write protection/freeze;
- construiește și verifică checksum-uri;
- prezintă sumarul;
- solicită confirmare explicită;
- pregătește/încarcă un GitHub Draft Release;
- se oprește înainte de publicarea release-ului.

Această implementare NU definește prin ea însăși metodologia AVL-200.

Dacă implementarea se schimbă, cerințele normative ale AVL-200 rămân sursa metodologică de adevăr.

## 27.1. Statutul implementării

Până la validarea end-to-end pe un pachet real și documentarea rezultatului, implementarea de referință AR TREBUI descrisă drept **provisional / în validare operațională**, nu drept dovadă suficientă că toate cerințele AVL-200 sunt îndeplinite în orice situație.

---

# 28. Reproducibility vs. repeatability

Sistemele AI sunt time-dependent și pot fi influențate de:

- versiunea modelului;
- indexul/retrieval state;
- account/session state;
- personalizare;
- disponibilitatea search/retrieval;
- geografie;
- schimbări de produs;
- sursele disponibile la momentul rulării.

Prin urmare, AVL-200 distinge:

## 28.1. Reproducibilitatea protocolului

Un terț poate înțelege și executa aceeași procedură documentată.

## 28.2. Reproducerea outputului identic

Nu este garantată și, pentru sisteme generative dinamice, poate fi imposibilă.

> **AVL200-REQ-038 — Documentația NU TREBUIE să promită reproducerea unui răspuns AI identic atunci când protocolul poate garanta doar reproducibilitatea procedurii.**

---

# 29. Failure Conditions

O implementare conformă TREBUIE să se oprească sau să evidențieze explicit statutul de conformitate atunci când apare cel puțin una dintre următoarele situații materiale:

- raw archive nu poate fi citită/verificată;
- hash-ul arhivei se schimbă neașteptat;
- Evidence IDs nu sunt unice;
- referințe obligatorii sunt nerezolvate;
- `UNCLASSIFIED` rămâne în câmpuri obligatorii;
- un element critic necesită human review nefinalizat;
- există un secret/credential în pachetul de publicare;
- manifestul de integritate nu verifică;
- o versiune publică ar trebui suprascrisă pentru a continua;
- output-ul final nu poate fi legat de evidence-ul sursă.

> **AVL200-REQ-039 — Eșecul unei cerințe obligatorii NU TREBUIE convertit în PASS prin ignorare, ștergere sau reformulare cosmetică.**

---

# 30. Conformance

Un proces poate fi declarat **AVL-200 conform** numai dacă:

1. separă Raw Evidence, Indexed Evidence, Observation, Measurement și Interpretation;
2. păstrează proveniența materială;
3. utilizează semantica explicită a necunoscutelor;
4. păstrează Raw Evidence original;
5. permite trasabilitatea evidence-to-claim;
6. documentează contaminările și abaterile;
7. aplică versionare;
8. validează înainte de freeze/checksum;
9. verifică manifestul de integritate;
10. tratează privacy și secretele conform secțiunii 18;
11. nu suprascrie silențios o versiune publicată;
12. păstrează delimitarea dintre observație, măsurare și interpretare.

Conformitatea cu AVL-200 NU implică automat conformitatea cu AVL-201 sau cu alt protocol specific. Fiecare metodologie poate adăuga cerințe proprii.

---

# 31. Relația cu AVL-201 — Tabula Rasa F0

AVL-201 definește protocolul concret pentru baseline-ul Tabula Rasa F0.

AVL-200 definește standardul transversal de evidence, measurement și traceability pe care baseline-ul și viitoarele faze îl pot utiliza.

Începând cu activarea AVL-200 (v1.0.0, 14 septembrie 2026), AVL-201 declară AVL-200 ca dependință normativă explicită în controlul documentului. Rescrierea efectivă a secțiunilor generice din AVL-201 pentru a referenția direct AVL-200, în locul duplicării actuale, rămâne o revizie de conținut separată, neexecutată încă — adăugarea dependinței nu presupune, prin ea însăși, că duplicarea a fost eliminată.

La următoarea revizie de conținut a AVL-201, elementele generic aplicabile tuturor studiilor AR TREBUI referențiate către AVL-200, în timp ce AVL-201 ar trebui să păstreze ceea ce este specific F0:

- scopul baseline-ului;
- condiția fără intervenție;
- query set-ul F0;
- sesiunea curată F0;
- taxonomia F0;
- scoring-ul F0;
- livrabilele specifice baseline-ului;
- relația cu fazele ulterioare.

## 31.1. Compatibilitate istorică F/T

Publicarea AVL-200 NU invalidează automat studiile executate anterior sub convențiile existente.

Primul baseline poate fi publicat în forma în care a fost executat și documentat, cu deviațiile reale păstrate.

Ulterior, revizia documentației poate introduce mapping-ul dintre faza metodologică și measurement point fără a pretinde că artefactele istorice au fost denumite altfel decât au fost în realitate.

Aceasta este o aplicație directă a principiului AI Visibility Lab conform căruia metodologia se actualizează prin documentarea erorilor și a abaterilor, nu prin cosmetizarea retrospectivă a rezultatului.

Mapping-ul de nomenclatură dintre `F0` (numele istoric al fazei de baseline) și `T0` (notația generică de measurement point folosită de AI Visibility Lab începând cu AVL-202) este documentat explicit în **AVL-202 §„Cum se citesc identificatorii AVL"** și în nota de nomenclatură din corpul AVL-202. AVL-200 nu duplică acel mapping aici — artefactele și rutele deja publicate sub convenția F0 nu sunt rescrise retroactiv (§17.3).

---

# 32. Relația cu pagina `/lab/metodologie`

Pagina `/lab/metodologie` ar trebui să funcționeze ca hartă publică a sistemului metodologic, nu ca duplicat al acestui standard.

Structura recomandată:

```text
Research question
      ↓
Protocol design
      ↓
Measurement execution
      ↓
Raw Evidence
      ↓
Indexed Evidence
      ↓
Observation
      ↓
Measurement
      ↓
Interpretation
      ↓
Published claim
      ↓
Case study / experiment / report
```

Pagina ar trebui să explice ce document guvernează fiecare strat:

- AVL-001 — governance epistemic;
- AVL-104 — fundamentul măsurării AI Visibility;
- AVL-200 — evidence, measurement și traceability;
- AVL-201 — baseline Tabula Rasa F0;
- documentele ulterioare — intervenții și remăsurări;
- studiile de caz — aplicații concrete ale metodologiei.

---

# 33. Limitări

AVL-200 nu elimină următoarele limitări:

- sistemele AI rămân parțial black-box;
- aceeași rulare poate produce output diferit în alt moment;
- un screenshot nu dovedește mecanismul intern care a produs răspunsul;
- un hash nu dovedește autenticitatea pre-hash;
- un evaluator poate clasifica greșit;
- un protocol poate omite o variabilă relevantă;
- o asociere temporală nu demonstrează cauzalitate;
- un Evidence Package complet nu garantează că interpretarea este corectă;
- reproducerea procedurii nu garantează reproducerea outputului.

Scopul standardului este reducerea incertitudinii și creșterea auditabilității, nu eliminarea tuturor surselor de eroare.

---

# 34. Documente asociate

## Normative

- AVL-001 — AI Visibility Lab Foundation.
- AVL-104 — Cum se măsoară AI Visibility.

## Informative

- AVL-101 — Ce este GEO/AEO și AI Visibility.
- AVL-102 — Cum aleg sistemele AI sursele și citările.
- AVL-103 — SEO și GEO: relații, diferențe și suprapuneri.
- AVL-105 — Glosar GEO/AEO și AI Visibility.
- AVL-201 — Tabula Rasa F0: Baseline Measurement Specification.

## Standarde și referințe externe

- RFC 2119 — Key words for use in RFCs to Indicate Requirement Levels.
- RFC 8174 — Ambiguity of Uppercase vs Lowercase in RFC 2119 Key Words.
- NIST Secure Hash Standard (SHA-2 family), pentru contextul utilizării SHA-256.

Referințele externe susțin terminologia tehnică generală. Regulile metodologice AVL-200 rămân standardul propriu al AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.

---

# 35. Implementare editorială și factuală

La publicarea acestui document:

- fiecare afirmație despre comportamentul unui furnizor AI TREBUI reverificată live dacă este materială;
- o afirmație proprie metodologică TREBUIE identificată ca regulă AI Visibility Lab, nu atribuită unui provider extern;
- documentul NU TREBUIE să pretindă că hash-urile, JSON-LD, GitHub Releases sau orice alt mecanism garantează citarea sau vizibilitatea AI;
- data publicării TREBUIE completată numai la momentul primei publicări publice reale;
- `last_reviewed` TREBUIE să reflecte o verificare factuală efectivă;
- canonicalul rămâne propus până când ruta publică este implementată.

---

# 36. Checklist de conformitate AVL-200

## Evidence

- [ ] Raw Evidence original este păstrat.
- [ ] Evidence-ul poate fi identificat prin ID stabil.
- [ ] Hash-urile sunt calculate determinist.
- [ ] Provenance este documentat fără valori inventate.
- [ ] Multipart evidence este legat explicit.
- [ ] Duplicatele sunt documentate, nu șterse silențios.

## Classification

- [ ] `UNKNOWN` este separat de `NO`.
- [ ] `NOT_APPLICABLE` este separat de `UNKNOWN`.
- [ ] Nu există `UNCLASSIFIED` în câmpurile obligatorii ale versiunii finale.
- [ ] Cazurile critice incerte au trecut human review.

## Measurement

- [ ] Observația este separată de measurement.
- [ ] Measurement rule este documentată.
- [ ] Denominatorul și populația sunt declarate.
- [ ] Tratamentul cazurilor excluse/contaminate este explicit.
- [ ] Versiunea regulii este identificabilă când regulile s-au schimbat.

## Traceability

- [ ] Fiecare claim material derivat din studiu poate fi urmărit spre measurement.
- [ ] Measurement poate fi urmărit spre observation.
- [ ] Observation poate fi urmărită spre Evidence ID.
- [ ] Evidence ID poate fi rezolvat spre raw artifact.

## Integrity

- [ ] Artefactele sunt validate înainte de freeze.
- [ ] Freeze/write protection este distinct conceptual de integrity verification.
- [ ] Manifestul este generat după finalizarea artefactelor protejate.
- [ ] Manifestul a fost verificat.
- [ ] O modificare ulterioară produce versiune nouă sau incident.

## Privacy

- [ ] Niciun secret/credential nu intră în pachetul public.
- [ ] Datele personale necesită review conform politicii.
- [ ] Orice redacted derivative este etichetat drept derivat.

## Versioning

- [ ] Archive version este explicită.
- [ ] Metadata version este explicită.
- [ ] Measurement-rule version este explicită atunci când este relevantă.
- [ ] Document version este explicită.
- [ ] Istoricul modificărilor este păstrat.

## Publication

- [ ] Limita Evidence Package-ului este declarată.
- [ ] Statusul release-ului este clar.
- [ ] Nicio versiune publicată nu a fost suprascrisă silențios.
- [ ] Data publicării nu a fost inventată.

---

# 37. Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
|---|---|---|---|
| 0.9.0 | 13 septembrie 2026 | Draft pentru revizuire | Prima versiune completă propusă. Formalizează lanțul Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation; introduce Evidence-to-Claim Traceability, separarea phase/timepoint, semanticile UNKNOWN/NO/NOT_APPLICABLE/UNCLASSIFIED, provenance/integrity/validity, versionarea arhivei/metadatelor/regulii de măsurare, state model-ul Evidence Package, freeze/integrity, human review, privacy și relația cu implementarea `evidence-release`. |
| 1.0.0 | 14 septembrie 2026 | Activ | Activare formală. Canonicalul devine definitiv (`/lab/metodologie/standard-dovezi-masurare-trasabilitate`); AVL-001 actualizat pentru a include AVL-200 la Nivelul C; AVL-201 actualizat pentru a declara AVL-200 ca dependință normativă; mapping-ul istoric F0/T0 referențiat explicit către AVL-202; fact-check final al citărilor externe (RFC 2119, RFC 8174, NIST FIPS 180-4) efectuat și confirmat. Un set de decizii pur operaționale rămân deschise, documentate explicit ca excepții acceptate în §38 — activarea nu a fost condiționată de închiderea lor completă, decizie confirmată de Alex Matescu la 14 septembrie 2026. |

---

# 38. Excepții acceptate la activare (v1.0.0)

Secțiunea „Decizii deschise înainte de 1.0.0” din draftul 0.9.0 avea 12 puncte. La activare (14 septembrie 2026), punctele 1, 2, 3, 4, 10 și 11 au fost închise (vezi §37). Punctele rămase sunt decizii pur operaționale, fără impact asupra aplicabilității normative a cerințelor `AVL200-REQ` din acest document, și au fost acceptate explicit ca excepții deschise de Alex Matescu la activare:

5. statutul `validation-report.md` (artefact public protejat de manifest vs. artefact intern) — nedecis; tratat provizoriu drept artefact intern (§22.2) până la o decizie explicită;
6. statutul `release-notes.md` în Evidence Package — nedecis;
7. politica pentru audit trail final și eventuala lui fixare/hash-uire — nedecisă;
8. validarea end-to-end a implementării de referință `evidence-release` pe un pachet real — neconfirmată; există cel puțin o arhivă de evidence brută candidată în lucru, dar parcurgerea completă a pipeline-ului (inventariere → hash → clasificare → review → index → README → validare → freeze → checksum → verificare → draft release) nu a fost documentată ca finalizată;
9. verificarea explicită că schema Evidence Index și implementarea agentului `evidence-release` satisfac integral cerințele `AVL200-REQ` aplicabile — neauditată.

Aceste puncte NU TREBUIE tratate ca închise. Statutul lor real rămâne cel descris mai sus până la o verificare sau decizie explicită ulterioară, documentată la rândul ei într-o versiune viitoare (§19.4).

---

> **Declarație finală**
>
> AI Visibility Lab nu tratează dovada ca decor al concluziei.
> Concluzia este permisă numai în măsura în care poate fi urmărită printr-un lanț explicit de observații, măsurări și artefacte verificabile.
> Când procesul descoperă o abatere, o incertitudine sau o eroare, aceasta se documentează și se versionază; nu se corectează retrospectiv numai pentru a produce o poveste mai curată.