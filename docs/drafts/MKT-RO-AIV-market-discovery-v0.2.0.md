---
title: "Market Discovery — MKT-RO-AIV"
version: "0.2.0"
status: "Draft de lucru, intern; neînghețat pentru execuție oficială"
created: "2026-10-12"
language: "ro-RO"
series_id: "MKT-RO-AIV"
query_set_id: "MKT-RO-AIV-DISCOVERY-v0.2.0"
document_role: "Document de instanță MKT-RO-AIV: setul de interogări și condițiile de rulare pentru Market Discovery. Nu este document AVL numerotat (AVL-202 §14.2) și nu constituie AVL-MKT-002 sau Market Reference Set."
supersedes:
  - "MKT-RO-AIV-discovery-query-set-v0.1.0.md"
  - "MKT-RO-AIV-user-query-set-v0.2.0.md și v0.3.0.md (pentru subgrupul USER-SHORT)"
  - "MKT-RO-AIV-combined-query-set-v0.1.0.md"
normative_basis:
  - "AVL-001 — Foundation"
  - "AVL-202 — Cadrul metodologic"
  - "AVL-200 — Standard dovezi, măsurare și trasabilitate"
  - "AVL-MKT-001 v0.9.0 — draft public"
empirical_basis:
  - "MKT-RO-AIV-2026Q4-PILOT (pilotul 1), pachet v1.0 + errata-01, raport intern v0.1"
  - "MKT-RO-AIV-2026Q4-PILOT-2 (pilotul 2), pachet v1.0, raport intern v0.1"
---

# Market Discovery — MKT-RO-AIV

## 1. Statut și ce se schimbă față de v0.1.0

Acest document fixează setul de interogări și condițiile de rulare pentru Market Discovery în seria MKT-RO-AIV. Înlocuiește draftul DISCOVERY v0.1.0, documentul consolidat v0.1.0 și, pentru expresiile scurte, seturile USER v0.2.0 și v0.3.0. Documentele anterioare rămân neschimbate, ca istoric. Draftul DISCOVERY v0.1.0 nu se editează: pachetele celor doi piloți îl citează prin SHA-256.

Versiunea 0.2.0 integrează rezultatele celor doi piloți și deciziile luate după ei, la 12 octombrie 2026. Fiecare regulă nouă are sursa notată în §12. Ce nu a fost decis apare în §13 ca decizie deschisă, nu ca regulă.

Statutul rămâne de draft. Documentul este intern până la analiza completă. Versiunea publică se scrie după analiză și nu conține nume de furnizori. Rapoartele piloților conțin astfel de nume și rămân interne.

Schimbările principale față de v0.1.0:

| Domeniu | v0.1.0 | v0.2.0 |
|---|---|---|
| Seturi active | DISCOVERY; USER separat (CONV și SHORT) | DISCOVERY și USER-SHORT, într-un singur set; USER-CONV nu se mai rulează |
| Rolul USER | Comparație; candidații intrau în reuniune | Sursă de candidați, cu proveniența păstrată; comparația se raportează separat |
| Cadență | Un ciclu complet pe trimestru | Subset pilotat lunar; lista completă și explorarea trimestrial |
| Denumirea rulărilor | Trimestru + T0 / F1…Fn | `<instanță>-FULL` și `<instanță>-M<luna>`; fără T0 / F1…Fn |
| Adâncimea Google | Primele 20 de rezultate organice | ~30 de poziții; primele 3 pagini se păstrează întotdeauna |
| AI Overview | Observație separată, în afara bazei | Bloc integrat în SERP-ul Google, în bază, cu ID de evidență `-AIO` |
| Paginile din rezultate | Se inspectează paginile relevante | Nu se deschid (as-returned); sursele se deschid abia în Verification |
| Software | Technology Provider pentru context, decizie deschisă | Intră în lista de candidați, ca Technology Provider separat |
| „consultant AI” | Q-USER-SHORT-001 | Retras; înlocuit de Q-USER-SHORT-013 `consultanță AI` |

## 2. Instanța, rulările și denumirea lor

Seria urmărește furnizorii relevanți pentru clienți din România. Ordinea de lucru rămâne: Discovery → Candidate Set → Verification → Market Reference Set înghețat → Query Universe / Market Query Panel → măsurarea reprezentării AI.

Instanța pieței este trimestrul: `MKT-RO-AIV-{an}Q{trimestru}`, conform AVL-MKT-001 §3.1. În interiorul unei instanțe, rulările Discovery se denumesc astfel:

| Rulare | Identificator | Exemplu | Conținut |
|---|---|---|---|
| Trimestrială, completă | `<instanță>-FULL` | `MKT-RO-AIV-2026Q4-FULL` | Lista completă (§4, §5) și stratul exploratoriu (§6) |
| Lunară | `<instanță>-M<luna din calendar>` | `MKT-RO-AIV-2026Q4-M11` (noiembrie) | Subsetul lunar (§7) |
| Pilot | `<instanță>-PILOT[-<n>]` | `MKT-RO-AIV-2026Q4-PILOT-2` | Ce declară pilotul |

Numărul lunii este luna din calendar, nu a câta lună din trimestru. Sufixul de lună trebuie să cadă în trimestrul instanței.

T0 și F1…Fn nu se folosesc în Market Discovery. Ele rămân convenția Tabula Rasa (AVL-201). Pilotul rămâne separat de rulările instanței.

Conform AVL-202 §14.3, Discovery-ul oficial urmează după AVL-MKT-001 v1.0.0, care cere întâi pilotul intern de Verification (AVL-MKT-001 §13.2). Până atunci, orice rulare se declară pilot, chiar dacă folosește condițiile din acest document.

## 3. Domeniul pieței

Familia de servicii: GEO, AEO, AI Visibility, AI Search Optimization, LLM Visibility / LLM Optimization orientate spre reprezentarea brandurilor și servicii funcțional echivalente (AVL-MKT-001 §5).

Geografia de interes este România, din perspectiva clientului. Se separă furnizorii locali, independenții și furnizorii internaționali cu dovadă explicită de deservire a României (AVL-MKT-001 §6). Simpla accesibilitate globală nu dovedește această orientare.

Delimitarea pentru prima instanță:

- Serviciile de audit, măsurare, monitorizare, consultanță și optimizare intră în evaluare.
- Un furnizor hibrid software + servicii intră dacă există dovadă a serviciului.
- **Software-ul intră în lista de candidați, ca Technology Provider separat** (decizie din 12 octombrie 2026). Se raportează distinct de prestatorii de servicii. Clasa finală se stabilește în Verification.
- Implementarea nu este condiție de includere și nici motiv de excludere.
- Serviciile generale de agenți AI, chatboturi, automatizări sau training nu devin eligibile automat.

## 4. Setul DISCOVERY — 12 întrebări

Textul din coloana „Interogare exactă” este întregul text transmis, fără preambul, nume de furnizori, an sau instrucțiuni de clasare. Același text se folosește pe toate suprafețele. Textele sunt neschimbate față de v0.1.0. Stratul rămâne CORE-CANDIDATE până la promovarea documentată.

| ID | Clasă principală | Interogare exactă | Pilotat |
|---|---|---|---|
| Q-DISC-001 | TERM | Cine oferă servicii GEO (Generative Engine Optimization) pentru firme din România? | Da, în ambii piloți |
| Q-DISC-002 | TERM | Cine oferă servicii AEO (Answer Engine Optimization) pentru firme din România? | Nu |
| Q-DISC-003 | TERM | Cine oferă servicii de AI Visibility pentru firme din România? | Nu |
| Q-DISC-004 | TERM | Cine oferă servicii de AI Search Optimization pentru firme din România? | Nu |
| Q-DISC-005 | TERM | Cine oferă servicii de LLM Optimization pentru vizibilitatea brandurilor din România în răspunsurile AI? | Nu |
| Q-DISC-006 | PROBLEM | Cine poate ajuta o firmă din România să fie menționată sau recomandată în răspunsurile asistenților AI? | Da, în ambii piloți |
| Q-DISC-007 | PROBLEM | Cine poate ajuta un site al unei firme din România să fie citat ca sursă în răspunsurile AI? | Nu |
| Q-DISC-008 | PROVIDER | Ce agenții SEO oferă și optimizare pentru apariția firmelor din România în răspunsurile AI? | Nu |
| Q-DISC-009 | PROVIDER | Ce consultanți independenți oferă servicii de vizibilitate în răspunsurile AI pentru firme din România? | Da, în ambii piloți |
| Q-DISC-010 | SERVICE | Cine oferă audituri ale vizibilității brandurilor din România în răspunsurile AI? | Nu |
| Q-DISC-011 | SERVICE | Cine oferă servicii de monitorizare a mențiunilor și citărilor brandurilor din România în răspunsurile AI? | Da, în ambii piloți |
| Q-DISC-012 | PROVIDER | Ce furnizori internaționali oferă servicii GEO, AEO sau AI Visibility pentru clienți din România? | Nu |

Cele 4 întrebări pilotate au adus entități exclusive în ambii piloți, fiecare cu alt profil: Q-DISC-001 aduce mai ales agenții, Q-DISC-009 persoane, iar Q-DISC-011 instrumente software.

Celelalte 8 nu au fost rulate. Se testează pentru prima dată în rularea FULL. Rezultatele lor nu pot fi comparate cu cele ale întrebărilor pilotate pe baza unei singure rulări.

**Q-DISC-006 rămâne în set** (RV-07, amânat). Este întrebarea cea mai instabilă între piloți. În pilotul 2, patru din cele șase suprafețe AI nu au numit niciun prestator, ci au explicat cum apare o firmă în AI. Decizia se ia după ce 007 și 010, apropiate ca sens, au fost rulate.

## 5. Setul USER-SHORT — 12 expresii scurte

Se transmite exclusiv expresia, cu scrierea și diacriticele din tabel. Nu se adaugă preambul, propoziție explicativă, instrucțiune de rol sau „România” acolo unde lipsește.

| ID | Expresia exactă |
|---|---|
| Q-USER-SHORT-002 | recomandare ChatGPT |
| Q-USER-SHORT-003 | promovare ChatGPT |
| Q-USER-SHORT-004 | firma mea pe ChatGPT |
| Q-USER-SHORT-005 | apariție în ChatGPT |
| Q-USER-SHORT-006 | vizibilitate AI |
| Q-USER-SHORT-007 | promovare firmă AI |
| Q-USER-SHORT-008 | optimizare site ChatGPT |
| Q-USER-SHORT-009 | marketing AI |
| Q-USER-SHORT-010 | agenție AI România |
| Q-USER-SHORT-011 | specialist ChatGPT |
| Q-USER-SHORT-012 | servicii promovare AI |
| Q-USER-SHORT-013 | consultanță AI |

**Retragerea Q-USER-SHORT-001.** Textul „consultant AI” este identic în română și în engleză. Nimic din el nu ancorează limba, iar sistemele tind să răspundă în engleză. Ancora trebuie să fie în textul însuși, pentru că expresiile se transmit fără completări. Noul text, `consultanță AI`, ancorează limba prin diacritice și rămâne fără geografie, ca celelalte expresii. Mută însă puțin sensul: de la persoana consultantului la serviciu. Fiind un text nou, primește ID nou (Q-USER-SHORT-013). Q-USER-SHORT-001 rămâne atribuit textului vechi și nu se mai rulează (AVL-MKT-001 REQ-017).

**USER-CONV nu se mai rulează.** Cele 12 întrebări conversaționale („Am o firmă în România. …”) rămân doar ca istoric, în USER v0.3.0.

**Rolul expresiilor scurte.** USER-SHORT este și sursă de candidați. Furnizorii găsiți prin expresiile scurte intră în aceeași reuniune ca cei din DISCOVERY, cu proveniența păstrată pe fiecare observație. Comparația DISCOVERY–USER-SHORT se raportează separat, pe proveniență (§10.3). Eligibilitatea nu depinde de întrebarea prin care a fost găsit un furnizor; se stabilește în Verification.

Expresiile sunt scenarii de căutare plauzibile, nu expresii validate printr-un eșantion de utilizatori sau prin volume de căutare. Ambiguitatea lor este intenționată. Un răspuns explicativ, o cerere de clarificare sau rezultate dintr-o categorie adiacentă (automatizări, training, conținut, software) sunt observații valide. Niciuna dintre expresii nu a fost încă rulată.

## 6. Stratul exploratoriu

Interogările exploratorii se rulează o dată pe trimestru, în rularea FULL, pe Google Search și Bing Search. Se raportează separat de setul standard.

| ID | Interogare exactă | Ce explorează |
|---|---|---|
| Q-DISC-X01 | Cine oferă servicii de optimizare pentru apariția firmelor din România în ChatGPT? | Descoperire prin numele unui produs, în locul categoriei |
| Q-DISC-X02 | Cine oferă servicii de optimizare pentru Google AI Overviews și AI Mode pentru firme din România? | Furnizori poziționați în ecosistemul Google |
| Q-DISC-X03 | Cine oferă servicii GEO, AEO sau AI Visibility în Sibiu? | Sensibilitate locală; nu reprezintă o piață Sibiu validată |
| Q-DISC-X04 | Which providers offer GEO, AEO or AI visibility services to businesses in Romania? | Furnizori și pagini comerciale accesibile prin engleză |

Interogările exploratorii noi se preregistrează înaintea trimestrului în care se rulează, cu ID și rațiune. Nu este permisă alegerea numai a întrebărilor care returnează un anumit furnizor.

## 7. Cadența și volumul

### 7.1. Ce se rulează

| Rulare | Interogări | Suprafețe | Execuții |
|---|---|---:|---:|
| Lunară `-M<luna>` | DISCOVERY 001, 006, 009, 011 + USER-SHORT 003, 008, 012, 013 | 8 | 64 |
| Trimestrială `-FULL`, standard | DISCOVERY 001–012 + USER-SHORT 002–013 | 8 | 192 |
| Trimestrială `-FULL`, exploratoriu | Q-DISC-X01…X04 | 2 (Google, Bing) | 8 |

Subsetul lunar DISCOVERY sunt cele 4 întrebări pilotate. Cele 4 expresii USER-SHORT lunare au fost alese de operator. Q-USER-SHORT-013 înlocuiește în subset textul retras „consultant AI”.

Pentru comparație, cei doi piloți au avut 32 de execuții fiecare și aproximativ 100–110 capturi. O rulare lunară are deci în jur de 200–220 de capturi, iar una FULL în jur de 650.

### 7.2. De ce lunar și nu la câteva zile

Repetarea acelorași interogări la intervale de câteva zile nu este o strategie longitudinală adecvată. Între rulări atât de apropiate piața practic nu se schimbă, iar diferențele reflectă în principal variația răspunsurilor. În cei doi piloți, rulați la două zile distanță, doar 38% dintre entități au apărut în ambele rulări.

Strategia se revizuiește:

- interogările standard pilotate se rulează lunar;
- lista completă și interogările exploratorii se rulează o dată pe trimestru.

Rulările lunare ale unui trimestru alimentează reuniunea de candidați a instanței trimestriale. Ele permit și estimarea variației dintre rulări în interiorul trimestrului, separat de schimbarea dintre trimestre.

Decizia a rezultat din piloți și se aplică de aici înainte. Pachetele piloților 1 și 2, deja sigilate și urcate ca release-uri draft, nu se modifică.

### 7.3. Închiderea reuniunii trimestriale

Reuniunea de candidați a unui trimestru cuprinde rulările `-M<luna>` și `-FULL` ale instanței. Se închide la Market Cutoff Date, declarată înainte de prima rulare a instanței (AVL-MKT-001 REQ-002, §11).

Finalizarea bugetului nu demonstrează epuizarea pieței. Reuniunea a crescut de la 91 la 127 de entități cu a doua rulare pilot, deci Discovery nu e aproape de saturație cu o singură rulare pe pereche.

## 8. Condițiile de rulare

### 8.1. Suprafețe și sesiune

| Element | Regula v0.2.0 | Sursa |
|---|---|---|
| Suprafețe | Google Search, Bing Search, Google AI Mode, ChatGPT, Claude, Copilot, Gemini, Perplexity | Ambii piloți: toate 8 aduc entități exclusive; niciuna nu se elimină pe baza unei rulări |
| Locație | Rulare din România. Se notează separat locația fizică, rețeaua și locația afișată de produs | Pilotul 1 (Italia) vs pilotul 2 (Sibiu, afișat Brașov) |
| Cont | Google, Bing, AI Mode și ChatGPT: fără cont, fereastră privată. Claude, Gemini, Perplexity și Copilot: cont gratuit, mod temporar | Condiția folosită în ambii piloți |
| Context | Fereastră nouă sau conversație nouă pentru fiecare interogare; cookie-uri refuzate; fără fișiere, proiecte, memorie, liste de furnizori sau identitatea autorului | Ambii piloți |
| Răspuns AI | Primul răspuns complet; fără follow-up sau regenerare. O cerere de clarificare se conservă ca răspuns | v0.1.0 §6 |
| Moduri speciale | Fără Deep Research sau agent | v0.1.0 §6 |
| Contextul de sesiune | Se stabilește din capturi, nu din declarații. Ce nu se vede este `NOT_VISIBLE`. Contaminarea se marchează, nu elimină execuția | Skill `mkt-evidence-package` §2.4 |
| Indisponibilitate | Se consemnează ca atare, nu ca absență a furnizorilor. O singură reîncercare pentru eroare tehnică, cu păstrarea ambelor execuții | v0.1.0 §6 |

### 8.2. Search

**Google.** Adâncimea este de aproximativ 30 de poziții organice, în funcție de câte rezultate încarcă fiecare pagină. Primele 3 pagini de rezultate se capturează și se păstrează întotdeauna, ca evidență.

Pozițiile se numără continuu peste pagini, înainte de deduplicare. Reclamele, modulele și AI Overview nu primesc poziție organică. Rezultatele se raportează pe benzi (1–10, 11–20, 21–30).

Motivul: în ambii piloți, pozițiile 21–29 ale Q-DISC-001 au adus câte 4 entități care nu au apărut nicăieri altundeva.

**AI Overview.** Este un bloc integrat în SERP-ul Google, atunci când e generat. Nu are folder sau capturi dedicate și rămâne parte din rularea Google Search.

În evidențe este tratat distinct. Fiecare captură Google în care se vede blocul primește un ID de evidență propriu: Evidence ID-ul capturii cu sufixul `-AIO`, de exemplu `MKT-RO-AIV-2026Q4-M11-E001-AIO`. ID-ul trimite la aceeași captură, cu același SHA-256. Observațiile din AI Overview citează doar aceste ID-uri și fac parte din baza Discovery.

Motivul: în pilotul 2, AI Overview a numit 29 de entități, iar 9 nu au apărut nicăieri altundeva.

**Bing.** Se capturează toate rezultatele organice afișate. În ambii piloți, Bing a afișat o singură pagină, cu aproximativ 10 rezultate. Dacă apare o pagină a doua, captarea ei este o decizie deschisă (§13).

Răspunsul generat de Bing se înregistrează ca bloc `GENERATED_ANSWER`, separat de rezultatele organice, în stratul suplimentar. Un bloc generat afișat fără text se consemnează ca observație de execuție.

**Reclame și alte module.** Se conservă în captură. Candidații se înregistrează cu proveniență separată, în stratul suplimentar.

### 8.3. As-returned

Se înregistrează doar ce afișează suprafața ca rezultat direct al interogării: rezultatele SERP (poziție, titlu, URL afișat, fragment), blocurile generate și textul răspunsurilor AI, cu sursele afișate.

Paginile din rezultate și sursele citate nu se deschid în Discovery. Aceasta înlocuiește regula din v0.1.0 §6 („se inspectează paginile relevante”), de la care ambii piloți s-au abătut declarat (DEV-02). Deschiderea surselor ține de Verification.

Un director sau o listă apare ca rezultat. Entitățile din interiorul ei nu se extrag, cu excepția numelor vizibile chiar în fragmentul afișat.

### 8.4. Fereastra și ordinea

Propunerile din v0.1.0 rămân valabile, ca propuneri:

- o rulare se încheie în cel mult 7 zile consecutive;
- începutul, sfârșitul și cutoff-ul se declară înainte.

Ordinea seturilor alternează pe suprafețe:

- pe suprafețele 1, 3, 5 și 7: DISCOVERY → USER-SHORT;
- pe suprafețele 2, 4, 6 și 8: USER-SHORT → DISCOVERY;
- în fiecare set, interogările se rulează în ordinea ID-urilor.

Explorarea se rulează după setul standard, pe Google și Bing. Orice abatere se declară în fișa rulării.

## 9. Pachetul de evidențe și extragerea

Fiecare rulare se procesează cu skill-ul `mkt-evidence-package`:

SEAL → INVENTORY → QUERY SET → SESSION CONTEXT → REVIEW (0) → CAPTURE CLASSIFICATION → REVIEW (1) → OBSERVATION EXTRACTION → REVIEW (2) → ARTIFACTS → VALIDATION → FREEZE → CHECKSUMS → VERIFICATION.

Reguli preluate din piloți:

- **Un folder de capturi pentru fiecare rulare.** Documentele operatorului din rădăcina folderului se sigilează cu Document ID.
- **Deciziile REVIEW (2)** se aplică doar pe cheia `(execution_id, observed_order)`, câte o decizie pe rând. În pilotul 1, un script care căuta rândurile după nume a aplicat o decizie și pe al doilea rând cu același nume (ERR-01).
- **Corecțiile după înghețare** se publică ca anexă de erori (errata), nu ca versiune nouă a pachetului. Fișierele înghețate nu se modifică. Precedent: `errata-01` la pilotul 1.
- **Fiecare execuție are un rezultat explicit.** O execuție completă fără entități numite (`COMPLETED_NO_NAMED_ENTITIES`) este un rezultat, nu o lipsă.
- **Fiecare sursă afișată (chip, card) este un rând de citare.** Un nume repetat în același răspuns are un singur rând.
- **Fragmentele SERP se transcriu verbatim.** Numele dintr-un fragment se înregistrează ca observație separată, legată de rezultatul părinte.
- **Persoanele numite doar ca fondator sau autor** se marchează `PERSON_ASSOCIATED` și nu intră automat în reuniune.
- **Textul din imaginea unui card AI** se înregistrează ca proveniență distinctă (`AI_IMAGE_TEXT`). Dacă intră în reuniune este o decizie deschisă (RV-08).
- **Nu se extrag** numele produselor AI și ale motoarelor de căutare (ChatGPT, Gemini, Google, Bing etc.) și nici standardele (Schema.org). Platformele recomandate ca acțiune se înregistrează ca `OTHER`.
- **Relevanța față de interogare** se califică pe execuție și pe observație. Rândurile irelevante rămân în registru, marcate. Relevanța nu este un verdict despre furnizor.

Pachetele se pot urca pe GitHub doar ca release-uri draft. Publicarea este o decizie separată.

## 10. Reuniunea de candidați și comparațiile

### 10.1. Baza și stratul suplimentar

| Strat | Ce conține |
|---|---|
| Bază | Google organic până la adâncimea declarată (~30), AI Overview, Bing organic, cele 6 suprafețe AI |
| Suplimentar | Răspunsul generat Bing, reclamele, alte module SERP, Google peste adâncimea declarată |
| Exploratoriu | Interogările Q-DISC-X01…X04 |
| În afara reuniunii | Rândurile `EXCLUDE_*`. Cazurile incerte apar doar în scenariile de sensibilitate |

Baza v0.2.0 diferă de baza folosită în rapoartele piloților. Acolo, baza a exclus Google 21–29 și toate modulele SERP, ca cele două rulări să rămână comparabile. Pentru pilotul 2, baza v0.2.0 ar fi avut 96 de entități, față de 84. Comparațiile cu piloții se fac pe definiția lor, declarată.

### 10.2. Deduplicarea

Unitatea numărată este entitatea candidată. Rapoartele piloților au folosit regulile de unire de mai jos. Ele se propun pentru preînregistrare. Decizia formală este deschisă (RV-20 din pilotul 1).

- **U0** — aceeași denumire; diferă doar majusculele, diacriticele, spațiile sau TLD-ul.
- **U1** — domeniul sau eticheta sursei este chiar denumirea.
- **U2** — observația leagă explicit cele două forme.
- **U3** — diferă doar un descriptor, sau eticheta este trunchiată.

Nu se unesc, ci se leagă prin relații: persoana și brandul sau organizația ei, produsul și dezvoltatorul lui, denumirile doar asemănătoare. Limita inferioară se raportează cu aceste relații comasate.

Deduplicarea nu șterge traseul descoperirii. Fiecare unire are regula și justificarea scrise.

### 10.3. Comparația DISCOVERY–USER-SHORT

Se raportează pe proveniență, în aceeași suprafață și aceeași rulare. A și B sunt mulțimile de candidați deduplicați ale celor două seturi. Se raportează:

- |A|, |B|, |A∩B|, |A\B| și |B\A|;
- opțional, indicele Jaccard;
- N/A când reuniunea este goală.

Comparația este descriptivă. Seturile diferă în lungime, vocabular, intenție, geografie și platformă, deci comparația nu izolează efectul expertizei sau al jargonului. Un număr mai mic de candidați eligibili în USER-SHORT nu înseamnă performanță inferioară.

### 10.4. Stabilitatea

Cu rulări lunare, pentru fiecare pereche interogare × suprafață din subsetul lunar se pot raporta:

- câte rulări din trimestru au numit fiecare entitate;
- suprapunerea între rulări consecutive.

Criteriul de păstrare sau eliminare a unei interogări se calculează pe cel puțin două rulări, nu pe una. Exclusivitatea dintr-o singură rulare este în bună parte variație.

## 11. Ce au arătat piloții

Cifre agregate, fără nume. Detaliile sunt în rapoartele interne.

| | Pilotul 1 | Pilotul 2 |
|---|---|---|
| Dată, locație | 9 octombrie 2026, Italia | 11 octombrie 2026, Sibiu (afișat: Brașov) |
| Set | DISCOVERY v0.1.0: 001, 006, 009, 011 | La fel |
| Execuții | 32 din 32, complete | 32 din 32, complete; 109 capturi |
| Observații | 498 | 545 |
| Rânduri incluse în reuniune | 301 în registru; 302 după errata-01 | 338 |
| Entități candidate, bază / extins | 91 / 96 | 84 / 102 (96 cu AI Overview în bază) |
| AI Overview | Necapturat | 29 de entități numite, 9 doar acolo |

Concluzii folosite în acest document:

1. **Două rulări se suprapun puțin.** Din 127 de entități găsite în bază de cei doi piloți, 48 apar în amândoi (Jaccard 0,38). Q-DISC-006 este cel mai instabil (0,13), iar Bing organic suprafața cea mai stabilă (0,76).
2. **Nucleul se repetă, coada nu.** Entitățile văzute în pilotul 1 în cel puțin două combinații interogare × suprafață au fost regăsite aproape toate (33 din 35). Cele văzute o singură dată au fost regăsite în 27% din cazuri.
3. **Suprafețele AI aduc majoritatea entităților:** 87–88% din reuniune. Search aduce entități pe care AI-ul nu le numește.
4. **Locația a schimbat Search-ul.** Pe Google, Q-DISC-011 a avut 55% rezultate irelevante din România, față de 90% din Italia. Diferențele combină locația, data și variația normală și nu pot fi separate cu două rulări.
5. **Execuțiile fără candidați sunt rezultate.** În pilotul 2, patru suprafețe AI au răspuns la Q-DISC-006 descriind tipuri de furnizori, fără să numească vreunul.

Piloții nu au făcut Verification. „Entitate candidată” înseamnă doar că un nume a fost afișat ca posibil prestator sau instrument (AVL-MKT-001 REQ-009, REQ-012).

## 12. Deciziile rezultate din piloți

Toate deciziile sunt din 12 octombrie 2026 și au fost luate de operator.

| Decizie | Sursa |
|---|---|
| AI Overview intră în bază ca bloc integrat în SERP-ul Google, cu ID de evidență `-AIO` pe fiecare captură în care apare | RV-05, pilotul 2 |
| Adâncimea Google este ~30 de poziții; primele 3 pagini se păstrează întotdeauna | RV-06, pilotul 2; RV-13, pilotul 1 |
| Software-ul intră în lista de candidați, ca Technology Provider separat | RV-09, pilotul 2; RV-11, pilotul 1 |
| Se rulează doar expresiile scurte USER; USER-CONV nu se mai rulează | Decizia operatorului |
| USER-SHORT este și sursă de candidați; comparația cu DISCOVERY se raportează separat | Decizia operatorului |
| Repetarea la câteva zile este declarată strategie longitudinală neadecvată; subsetul se rulează lunar, lista completă și explorarea trimestrial | Comparația pilot 1 – pilot 2 |
| Rulări lunare: 4 DISCOVERY pilotate + 4 USER-SHORT, pe toate cele 8 suprafețe | Decizia operatorului |
| Denumiri: `-FULL` trimestrial și `-M<luna din calendar>` lunar; T0 / F1…Fn nu se folosesc în Market Discovery | Decizia operatorului |
| „consultant AI” se înlocuiește cu `consultanță AI` (Q-USER-SHORT-013), ca ancoră de limbă | Decizia operatorului |
| Eroarea din pachetul pilotului 1 se declară prin anexa `errata-01`, nu printr-o versiune v1.1 | RV-01, pilotul 1 |
| Q-DISC-006 rămâne în set; decizia finală se amână | RV-07, pilotul 2 |
| Pachetele piloților 1 și 2 nu se modifică; deciziile se aplică de aici înainte | Decizia operatorului |

## 13. Decizii deschise

**Despre set și rulare**

1. **Q-DISC-006** (RV-07): păstrare, reformulare sau mutare în stratul exploratoriu, după ce 007 și 010 au fost rulate.
2. **Rularea FULL și rularea lunară în aceeași lună.** Se poate decide ca FULL să țină loc de rularea lunară din luna în care se execută, pentru că o include. Altfel, ambele se rulează.
3. **Bing, pagina 2**, când există (RV-14, pilotul 1).
4. **Fereastra de rulare și cutoff-ul** pentru fiecare tip de rulare.
5. **Criteriul numeric de păstrare a unei interogări**, calculat pe cel puțin două rulări.

**Despre extragere și reuniune**

6. **Textul din imagini** (RV-08): intră sau nu în reuniune.
7. **Regulile de deduplicare U0–U3** și relațiile neunite: preînregistrare formală (RV-20, pilotul 1).
8. **Perechile nerezolvate:** posibil aceeași entitate; persoană ↔ organizație; produs ↔ dezvoltator (RV-01…RV-03 din pilotul 2; RV-03…RV-10 din pilotul 1). Recomandarea este ca ele să rămână separate până la Verification.
9. **Clasele neclare** (RV-04, pilotul 2) și **blocul generat Bing fără text** (RV-10, pilotul 2).

**Despre corpus**

10. **AVL-MKT-001 §3.2.** Versiunea 0.9.1 a protocolului (pregătită la 12 octombrie 2026, nepublicată) rescrie secțiunea: rulările Market Discovery se identifică prin `FULL` și `M{lună}`, iar T0 / F1…Fn nu se folosesc în Market Discovery. Rămân de actualizat trimiterile la versiunea 0.9.0 din AVL-202 și AVL-001.
11. **AVL-MKT-001 REQ-015** cere înghețarea Market Reference Set „înainte de prima execuție AI a instanței”. Precizarea propusă în v0.1.0 §9 rămâne valabilă: înainte de prima execuție AI destinată măsurării reprezentării pieței. Execuțiile Discovery se păstrează separat și nu se refolosesc ca măsurători ale panelului.
12. **Pilotul intern de Verification** (AVL-MKT-001 §13.2) nu a fost făcut. De el depind AVL-MKT-001 v1.0.0 și Discovery-ul oficial.

## 14. Limite

- 8 dintre cele 12 întrebări DISCOVERY, toate expresiile USER-SHORT și toate interogările exploratorii nu au fost încă rulate.
- Piloții au avut câte o rulare pe pereche, cu locații și date diferite. Stabilitatea pe interogare și pe suprafață nu se poate estima încă.
- Comparațiile dintre seturi și dintre rulări sunt descriptive. Ele nu măsoară cererea comercială și nici popularitatea platformelor.
- Claude este una dintre suprafețele măsurate și a fost folosit și la extragerea observațiilor și la analiza piloților. Deciziile de extragere, unire și clasificare sunt explicite și pot fi refăcute de altcineva.
- Entitatea afiliată autorului nu apare în observațiile piloților. Absența nu se interpretează (AVL-MKT-001 §13, §14).
- Nou identificat nu înseamnă nou intrat pe piață. Absența dintr-o rulare nu înseamnă ieșire de pe piață.

## Istoric

0.2.0 — 12 octombrie 2026. Document unic pentru Market Discovery, construit pe rezultatele piloților 1 și 2. DISCOVERY neschimbat ca text. USER-SHORT activ, cu „consultant AI” înlocuit de `consultanță AI` (Q-USER-SHORT-013); USER-CONV retras. Adăugate: cadența lunară/trimestrială și denumirile `-FULL` / `-M<luna>`; Google ~30 de poziții; AI Overview în bază, cu ID-uri `-AIO`; regula as-returned; software ca Technology Provider separat; regulile de extragere și de pachet preluate din piloți; deciziile și punctele deschise. Nicio interogare de piață nu a fost executată pentru acest document.

0.1.0 — 9 octombrie 2026. Prima propunere: 12 CORE-CANDIDATE și 4 EXPLORATORY (`MKT-RO-AIV-discovery-query-set-v0.1.0.md`).
