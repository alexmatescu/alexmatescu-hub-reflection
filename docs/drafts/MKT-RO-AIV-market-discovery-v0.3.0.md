---
title: "Market Discovery — MKT-RO-AIV"
version: "0.3.0"
status: "Draft de lucru, intern; neînghețat pentru execuție oficială"
created: "2026-10-16"
language: "ro-RO"
series_id: "MKT-RO-AIV"
query_set_id: "MKT-RO-AIV-DISCOVERY-v0.3.0"
document_role: "Document de instanță MKT-RO-AIV: setul de interogări și condițiile de rulare pentru Market Discovery. Nu este document AVL numerotat (AVL-202 §14.2) și nu constituie AVL-MKT-002 sau Market Reference Set."
supersedes:
  - "MKT-RO-AIV-market-discovery-v0.2.0.md (SHA-256 0f0c18de2993e5de57db96424a23c5e113bdd8a5fb0503f33fe223ed2aa135d3; neschimbat, citat de pachetul pilotului 3)"
normative_basis:
  - "AVL-001 — Foundation"
  - "AVL-202 — Cadrul metodologic"
  - "AVL-200 — Standard dovezi, măsurare și trasabilitate"
  - "AVL-MKT-001 v0.10.0 — draft public"
empirical_basis:
  - "MKT-RO-AIV-2026Q4-PILOT (pilotul 1), pachet v1.0 + errata-01, raport intern v0.1"
  - "MKT-RO-AIV-2026Q4-PILOT-2 (pilotul 2), pachet v1.0, raport intern v0.1"
  - "MKT-RO-AIV-2026Q4-PILOT-3 (pilotul 3), pachet v1.1 (arhivă v1.0, metadate v1.1), raport intern v0.1, review RV-01…RV-12 închis la 2026-10-15"
---

# Market Discovery — MKT-RO-AIV

## 1. Statut și ce se schimbă față de v0.2.0

Acest document fixează setul de interogări și condițiile de rulare pentru Market Discovery în seria MKT-RO-AIV. Înlocuiește versiunea 0.2.0. Versiunea 0.2.0 rămâne neschimbată, ca istoric: pachetul pilotului 3 o citează prin cale și prin SHA-256 (`0f0c18de…aa135d3`). Documentele anterioare (DISCOVERY v0.1.0, documentul consolidat v0.1.0, seturile USER v0.2.0 și v0.3.0) rămân și ele neschimbate.

Versiunea 0.3.0 integrează pilotul 3, deciziile luate după el (14–16 octombrie 2026) și regula de publicare din AVL-MKT-001 v0.10.0 §21 (16 octombrie 2026). Fiecare regulă nouă are sursa notată în §12. Ce nu a fost decis apare în §13 ca decizie deschisă, nu ca regulă.

Statutul rămâne de draft. Documentul este intern până la analiza completă. **Registrul Market Discovery este însă public** (AVL-MKT-001 §21.1): numele candidaților se publică, fiecare cu statutul `UNVERIFIED`, cu proveniența observației și cu dovezile disponibile (§9.3). Această regulă înlocuiește prevederea din v0.2.0 §1, potrivit căreia versiunea publică nu conține nume de furnizori. Rapoartele interne ale piloților rămân documente de lucru; registrul public se generează din ele și din pachetele înghețate.

Schimbările principale față de v0.2.0:

| Domeniu | v0.2.0 | v0.3.0 |
|---|---|---|
| Acoperirea setului DISCOVERY | 4 din 12 întrebări pilotate | Toate 12 rulate o dată în piloți (001, 006, 009, 011 de două ori) |
| Publicarea numelor | Versiunea publică nu conține nume de furnizori | Registrul Market Discovery e public, cu statutul `UNVERIFIED` și proveniența (AVL-MKT-001 v0.10.0 §21) |
| Review | Decizii caz cu caz | Reguli generale R1–R3, cu cod pe fiecare rând calificat (§9.1) |
| Corecții după înghețare | Anexă de erori (errata) | Errata pentru erori de date; versiune nouă de metadate pentru corecții de formă, cu arhiva neschimbată (§9.2) |
| Q-DISC-006 și Q-DISC-007 | 006 cu decizie amânată; 007 nepilotat | Ambele rămân cum au fost definite; evaluarea întrebărilor se face după finalizarea Market Discovery (§4) |
| Q-DISC-012 | În set, nepilotat | În Candidate Set, cu entitățile marcate ca internaționale (RV-08, pilotul 3) |
| Agenții SEO fără mențiune AI | — | Listă separată pentru Verification, în afara reuniunii (RV-07, pilotul 3) |
| Baza în rapoarte | Definită în §10.1 | Definiția din §10.1 rămâne; rapoartele folosesc o bază comparabilă cu piloții 1–2, declarată (§10.1) |

## 2. Instanța, rulările și denumirea lor

Seria urmărește furnizorii relevanți pentru clienți din România. Ordinea de lucru rămâne: Discovery → Candidate Set → Verification → Market Reference Set înghețat → Query Universe / Market Query Panel → măsurarea reprezentării AI.

Cele trei etape produc artefacte distincte (AVL-MKT-001 §21.3):

| Artefact | Ce conține | Statut |
|---|---|---|
| Registrul Market Discovery | Toți candidații identificați, cu proveniența fiecărei observații | Public; fiecare entitate `UNVERIFIED` |
| Registrul Market Verification | Toți candidații evaluați, fiecare cu un status din AVL-MKT-001 §9 | Public, după Verification |
| Market Reference Set | Intrările `ELIGIBLE` la Market Cutoff Date, înghețate | Constituit independent, în scopul cercetării laboratorului; nevalidat de o autoritate relevantă |

Instanța pieței este trimestrul: `MKT-RO-AIV-{an}Q{trimestru}`, conform AVL-MKT-001 §3.1. În interiorul unei instanțe, rulările Discovery se denumesc astfel:

| Rulare | Identificator | Exemplu | Conținut |
|---|---|---|---|
| Trimestrială, completă | `<instanță>-FULL` | `MKT-RO-AIV-2026Q4-FULL` | Lista completă (§4, §5) și stratul exploratoriu (§6) |
| Lunară | `<instanță>-M<luna din calendar>` | `MKT-RO-AIV-2026Q4-M11` (noiembrie) | Subsetul lunar (§7) |
| Pilot | `<instanță>-PILOT[-<n>]` | `MKT-RO-AIV-2026Q4-PILOT-3` | Ce declară pilotul |

Numărul lunii este luna din calendar, nu a câta lună din trimestru. Sufixul de lună trebuie să cadă în trimestrul instanței.

T0 și F1…Fn nu se folosesc în Market Discovery (AVL-MKT-001 §3.2, de la v0.9.1). Ele rămân convenția punctelor de măsurare din AVL-200 §7, aplicată în Tabula Rasa (AVL-201). Pilotul rămâne separat de rulările instanței.

Conform AVL-202 §14.3, Discovery-ul oficial urmează după AVL-MKT-001 v1.0.0, care cere întâi pilotul intern de Verification (AVL-MKT-001 §13.2). Până atunci, orice rulare se declară pilot, chiar dacă folosește condițiile din acest document. Cei trei piloți de până acum (`-PILOT`, `-PILOT-2`, `-PILOT-3`) sunt rulări pilot, nu rulări ale instanței.

## 3. Domeniul pieței

Familia de servicii: GEO, AEO, AI Visibility, AI Search Optimization, LLM Visibility / LLM Optimization orientate spre reprezentarea brandurilor și servicii funcțional echivalente (AVL-MKT-001 §5).

Geografia de interes este România, din perspectiva clientului. Se separă furnizorii locali, independenții și furnizorii internaționali cu dovadă explicită de deservire a României (AVL-MKT-001 §6). Simpla accesibilitate globală nu dovedește această orientare.

Delimitarea pentru prima instanță:

- Serviciile de audit, măsurare, monitorizare, consultanță și optimizare intră în evaluare.
- Un furnizor hibrid software + servicii intră dacă există dovadă a serviciului.
- **Software-ul intră în lista de candidați, ca Technology Provider separat** (decizie din 12 octombrie 2026). Se raportează distinct de prestatorii de servicii. Clasa finală se stabilește în Verification.
- **Entitățile găsite prin Q-DISC-012 intră în Candidate Set, marcate ca internaționale** (RV-08, pilotul 3). Relevanța lor pentru România se stabilește în Verification, conform AVL-MKT-001 §6.
- Implementarea nu este condiție de includere și nici motiv de excludere.
- Serviciile generale de agenți AI, chatboturi, automatizări sau training nu devin eligibile automat.

## 4. Setul DISCOVERY — 12 întrebări

Textul din coloana „Interogare exactă” este întregul text transmis, fără preambul, nume de furnizori, an sau instrucțiuni de clasare. Același text se folosește pe toate suprafețele. Textele sunt neschimbate față de v0.2.0 și v0.1.0. Stratul rămâne CORE-CANDIDATE până la promovarea documentată.

| ID | Clasă principală | Interogare exactă | Pilotat |
|---|---|---|---|
| Q-DISC-001 | TERM | Cine oferă servicii GEO (Generative Engine Optimization) pentru firme din România? | Da, piloții 1 și 2 |
| Q-DISC-002 | TERM | Cine oferă servicii AEO (Answer Engine Optimization) pentru firme din România? | Da, pilotul 3 |
| Q-DISC-003 | TERM | Cine oferă servicii de AI Visibility pentru firme din România? | Da, pilotul 3 |
| Q-DISC-004 | TERM | Cine oferă servicii de AI Search Optimization pentru firme din România? | Da, pilotul 3 |
| Q-DISC-005 | TERM | Cine oferă servicii de LLM Optimization pentru vizibilitatea brandurilor din România în răspunsurile AI? | Da, pilotul 3 |
| Q-DISC-006 | PROBLEM | Cine poate ajuta o firmă din România să fie menționată sau recomandată în răspunsurile asistenților AI? | Da, piloții 1 și 2 |
| Q-DISC-007 | PROBLEM | Cine poate ajuta un site al unei firme din România să fie citat ca sursă în răspunsurile AI? | Da, pilotul 3 |
| Q-DISC-008 | PROVIDER | Ce agenții SEO oferă și optimizare pentru apariția firmelor din România în răspunsurile AI? | Da, pilotul 3 |
| Q-DISC-009 | PROVIDER | Ce consultanți independenți oferă servicii de vizibilitate în răspunsurile AI pentru firme din România? | Da, piloții 1 și 2 |
| Q-DISC-010 | SERVICE | Cine oferă audituri ale vizibilității brandurilor din România în răspunsurile AI? | Da, pilotul 3 |
| Q-DISC-011 | SERVICE | Cine oferă servicii de monitorizare a mențiunilor și citărilor brandurilor din România în răspunsurile AI? | Da, piloții 1 și 2 |
| Q-DISC-012 | PROVIDER | Ce furnizori internaționali oferă servicii GEO, AEO sau AI Visibility pentru clienți din România? | Da, pilotul 3 |

Fiecare întrebare a fost rulată cel puțin o dată, pe toate cele 8 suprafețe. Întrebările 001, 006, 009 și 011 au două rulări (piloții 1 și 2, din locații diferite); celelalte 8 au una singură (pilotul 3). Rezultatele întrebărilor cu o singură rulare nu se compară direct cu cele ale întrebărilor cu două rulări.

Ce au arătat piloții, pe întrebare:

- Cele 4 întrebări din piloții 1–2 au adus entități exclusive în ambii piloți, fiecare cu alt profil: Q-DISC-001 aduce mai ales agenții, Q-DISC-009 persoane, iar Q-DISC-011 instrumente software.
- **Q-DISC-012** (furnizori internaționali) aduce cel mai mult și e cel mai separat: 73 de entități, 48 exclusive (66%). Din cele 114 entități noi ale pilotului 3, 47 apar la Q-DISC-012.
- **Q-DISC-007** (site citat ca sursă) a adus cel mai puțin: 18 entități, 5 execuții fără candidați (Bing, AI Mode, Claude, Copilot, Gemini), iar pe Bing 87% din rezultate sunt irelevante (citare academică). Cele 6 entități exclusive vin toate din Google organic. Pe suprafețele AI fără candidați, răspunsurile au explicat cum devine un site citabil, fără să numească prestatori — același tipar ca la Q-DISC-006 în pilotul 2.
- **Q-DISC-002, 003, 004 și 005** se suprapun mult (Q-DISC-004 și 005 au câte 9 entități exclusive). Se păstrează toate (RV-10, pilotul 3).

**Q-DISC-006 și Q-DISC-007 rămân în set, cu textele și clasele definite** (decizia operatorului, 16 octombrie 2026). Q-DISC-006 este întrebarea cea mai instabilă între piloții 1 și 2; în pilotul 2, patru din cele șase suprafețe AI nu au numit niciun prestator, ci au explicat cum apare o firmă în AI.

**Evaluarea întrebărilor se face după finalizarea întregului proces Market Discovery** (decizia operatorului, 16 octombrie 2026). Până atunci, nicio întrebare a setului nu se reformulează, nu se comasează, nu se mută în stratul exploratoriu și nu se elimină. Constatările din piloți (randamentul pe întrebare, execuțiile fără candidați, suprapunerile) se păstrează ca date pentru acea evaluare, nu ca motiv de modificare a setului. Decizia înlocuiește reformularea lui Q-DISC-007 decisă la 15 octombrie 2026 (RV-09, pilotul 3); raportul pilotului 3 și lista lui de review nu se modifică.

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

Interogările exploratorii noi se preregistrează înaintea trimestrului în care se rulează, cu ID și rațiune. Nu este permisă alegerea numai a întrebărilor care returnează un anumit furnizor. Niciuna dintre interogările exploratorii nu a fost încă rulată.

## 7. Cadența și volumul

### 7.1. Ce se rulează

| Rulare | Interogări | Suprafețe | Execuții |
|---|---|---:|---:|
| Lunară `-M<luna>` | DISCOVERY 001, 006, 009, 011 + USER-SHORT 003, 008, 012, 013 | 8 | 64 |
| Trimestrială `-FULL`, standard | DISCOVERY 001–012 + USER-SHORT 002–013 | 8 | 192 |
| Trimestrială `-FULL`, exploratoriu | Q-DISC-X01…X04 | 2 (Google, Bing) | 8 |

Subsetul lunar DISCOVERY sunt cele 4 întrebări pilotate în piloții 1 și 2. Cele 4 expresii USER-SHORT lunare au fost alese de operator. Q-USER-SHORT-013 înlocuiește în subset textul retras „consultant AI”.

Pentru comparație: piloții 1 și 2 au avut câte 32 de execuții și aproximativ 100–110 capturi; pilotul 3 a avut 64 de execuții și 227 de capturi, cu Google citit până la ~30 de poziții. O rulare lunară are deci în jur de 200–230 de capturi, iar una FULL în jur de 650–700.

### 7.2. De ce lunar și nu la câteva zile

Repetarea acelorași interogări la intervale de câteva zile nu este o strategie longitudinală adecvată. Între rulări atât de apropiate piața practic nu se schimbă, iar diferențele reflectă în principal variația răspunsurilor. În piloții 1 și 2, rulați la două zile distanță, doar 38% dintre entități au apărut în ambele rulări.

Strategia rămâne cea din v0.2.0:

- interogările standard pilotate se rulează lunar;
- lista completă și interogările exploratorii se rulează o dată pe trimestru.

Rulările lunare ale unui trimestru alimentează reuniunea de candidați a instanței trimestriale. Ele permit și estimarea variației dintre rulări în interiorul trimestrului, separat de schimbarea dintre trimestre.

### 7.3. Închiderea reuniunii trimestriale

Reuniunea de candidați a unui trimestru cuprinde rulările `-M<luna>` și `-FULL` ale instanței. Se închide la Market Cutoff Date, declarată înainte de prima rulare a instanței (AVL-MKT-001 REQ-002, §11).

Finalizarea bugetului nu demonstrează epuizarea pieței. Reuniunea a crescut de la 91 la 127 de entități cu a doua rulare pilot și la 241 cu pilotul 3, care a rulat celelalte 8 întrebări. Discovery nu este aproape de saturație.

## 8. Condițiile de rulare

### 8.1. Suprafețe și sesiune

| Element | Regula v0.3.0 | Sursa |
|---|---|---|
| Suprafețe | Google Search, Bing Search, Google AI Mode, ChatGPT, Claude, Copilot, Gemini, Perplexity | Toți trei piloții: toate 8 aduc entități exclusive; niciuna nu se elimină pe baza unei rulări |
| Locație | Rulare din România. Se notează separat locația fizică, rețeaua și locația afișată de produs | Pilotul 1 (Italia) vs piloții 2 și 3 (Sibiu, afișat Brașov; în pilotul 3, rețea Vodafone, locația Brașov afișată de Google și Gemini) |
| Cont | Google, Bing, AI Mode și ChatGPT: fără cont, fereastră privată. Claude, Gemini, Perplexity și Copilot: cont gratuit, mod temporar | Condiția folosită în toți trei piloții |
| Context | Fereastră nouă sau conversație nouă pentru fiecare interogare; cookie-uri refuzate; fără fișiere, proiecte, memorie, liste de furnizori sau identitatea autorului | Toți trei piloții |
| Răspuns AI | Primul răspuns complet; fără follow-up sau regenerare. O cerere de clarificare se conservă ca răspuns | v0.1.0 §6 |
| Moduri speciale | Fără Deep Research sau agent | v0.1.0 §6 |
| Contextul de sesiune | Se stabilește din capturi, nu din declarații. Ce nu se vede este `NOT_VISIBLE`. Contaminarea se marchează, nu elimină execuția | Skill `mkt-evidence-package` §2.4 |
| Indisponibilitate | Se consemnează ca atare, nu ca absență a furnizorilor. O singură reîncercare pentru eroare tehnică, cu păstrarea ambelor execuții | v0.1.0 §6 |
| Sesiuni de lucru | O rulare poate fi împărțită în sesiuni de lucru declarate (de exemplu WS1 și WS2), fiecare cu data și suprafețele ei | Pilotul 3: WS1 13 octombrie (Google, Bing, AI Mode, ChatGPT, Claude), WS2 14 octombrie (Copilot, Gemini, Perplexity) |

### 8.2. Search

**Google.** Adâncimea este de aproximativ 30 de poziții organice, în funcție de câte rezultate încarcă fiecare pagină. Primele 3 pagini de rezultate se capturează și se păstrează întotdeauna, ca evidență.

Pozițiile se numără continuu peste pagini, înainte de deduplicare. Reclamele, modulele și AI Overview nu primesc poziție organică. Rezultatele se raportează pe benzi (1–10, 11–20, 21–30).

Motivul: în piloții 1 și 2, pozițiile 21–29 ale Q-DISC-001 au adus câte 4 entități care nu au apărut nicăieri altundeva. În pilotul 3, primul rulat cu adâncimea ~30, banda 21–30 a adus 8 entități găsite nicăieri altundeva.

Când tranziția dintre două capturi consecutive nu poate fi verificată vizual, pozițiile se iau ca atare și se presupun continue, cu un semnal documentat (regula R2, §9.1).

**AI Overview.** Este un bloc integrat în SERP-ul Google, atunci când e generat. Nu are folder sau capturi dedicate și rămâne parte din rularea Google Search.

În evidențe este tratat distinct. Fiecare captură Google în care se vede blocul primește un ID de evidență propriu: Evidence ID-ul capturii cu sufixul `-AIO`, de exemplu `MKT-RO-AIV-2026Q4-M11-E001-AIO`. ID-ul trimite la aceeași captură, cu același SHA-256. Observațiile din AI Overview citează doar aceste ID-uri și fac parte din baza Discovery.

Motivul: în pilotul 2, AI Overview a numit 29 de entități, iar 9 nu au apărut nicăieri altundeva. În pilotul 3, AI Overview a adus 8 entități găsite nicăieri altundeva.

**Bing.** Se capturează toate rezultatele organice afișate. În piloții 1 și 2, Bing a afișat o singură pagină, cu aproximativ 10 rezultate. În pilotul 3, la Q-DISC-008 existau și paginile următoare, dar s-a capturat doar pagina 1 (RV-11, acceptat ca limită). Captarea paginii a doua rămâne o decizie deschisă (§13).

Răspunsul generat de Bing se înregistrează ca bloc `GENERATED_ANSWER`, separat de rezultatele organice, în stratul suplimentar. Un bloc generat afișat fără text se consemnează ca observație de execuție.

**Reclame și alte module.** Se conservă în captură. Candidații se înregistrează cu proveniență separată, în stratul suplimentar.

### 8.3. As-returned

Se înregistrează doar ce afișează suprafața ca rezultat direct al interogării: rezultatele SERP (poziție, titlu, URL afișat, fragment), blocurile generate și textul răspunsurilor AI, cu sursele afișate.

Paginile din rezultate și sursele citate nu se deschid în Discovery. Deschiderea surselor ține de Verification.

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

## 9. Pachetul de evidențe, extragerea și publicarea

Fiecare rulare se procesează cu skill-ul `mkt-evidence-package`:

SEAL → INVENTORY → QUERY SET → SESSION CONTEXT → REVIEW (0) → CAPTURE CLASSIFICATION → REVIEW (1) → OBSERVATION EXTRACTION → REVIEW (2) → ARTIFACTS → VALIDATION → FREEZE → CHECKSUMS → VERIFICATION.

Reguli preluate din piloți:

- **Un folder de capturi pentru fiecare rulare.** Documentele operatorului din rădăcina folderului se sigilează cu Document ID.
- **Deciziile REVIEW (2)** se aplică doar pe cheia `(execution_id, observed_order)`, câte o decizie pe rând, cu `apply_review_decisions.mjs`. În pilotul 1, un script care căuta rândurile după nume a aplicat o decizie și pe al doilea rând cu același nume (ERR-01).
- **Fiecare execuție are un rezultat explicit.** O execuție completă fără entități numite (`COMPLETED_NO_NAMED_ENTITIES`) sau fără candidați în reuniune (`COMPLETED_NO_UNION_CANDIDATES`) este un rezultat, nu o lipsă.
- **Fiecare sursă afișată (chip, card) este un rând de citare.** Un nume repetat în același răspuns are un singur rând.
- **Fragmentele SERP se transcriu verbatim.** Numele dintr-un fragment se înregistrează ca observație separată, legată de rezultatul părinte.
- **Persoanele numite doar ca fondator sau autor** se marchează `PERSON_ASSOCIATED` și nu intră automat în reuniune.
- **Textul din imaginea unui card AI** se înregistrează ca proveniență distinctă (`AI_IMAGE_TEXT`). În pilotul 3, cele 20 de rânduri de acest tip erau logo-uri de pe cardul aceleiași entități și au fost unite cu entitatea cardului (U3); nicio entitate nu a intrat în reuniune doar din text de imagine. Decizia generală rămâne deschisă (§13).
- **Nu se extrag** numele produselor AI și ale motoarelor de căutare (ChatGPT, Gemini, Google, Bing etc.) și nici standardele (Schema.org). Platformele recomandate ca acțiune se înregistrează ca `OTHER`.
- **Relevanța față de interogare** se califică pe execuție și pe observație. Rândurile irelevante rămân în registru, marcate. Relevanța nu este un verdict despre furnizor.
- **Fișierele CSV generate nu se editează în Excel.** În pilotul 3, o salvare din Excel a schimbat separatorii în `;`; fișierul a fost regenerat din script.

### 9.1. Regulile de review R1–R3

Decise de operator la 14 octombrie 2026, pentru pilotul 3, și aplicate de aici înainte dacă operatorul le confirmă pentru rularea respectivă. Principiul: **rezultatele se iau ca atare.** Nimic nu se șterge, nu se mută și nu se reetichetează retroactiv. Regulile califică rândurile, iar fiecare rând rămâne în registru, cu codul regulii.

| Regulă | Când se aplică | Efect |
|---|---|---|
| **R1 — alt sens sau alt domeniu** | Rezultatul tratează alt sens al unui termen sau acronim din interogare (R1.1 acronim, R1.2 termen), alt domeniu al AI (R1.3) sau o potrivire doar lexicală (R1.4) | `query_relevance = IRRELEVANT`, codul în `relevance_basis`; includerea devine `EXCLUDE_IRRELEVANT` |
| **R2 — continuitate neverificabilă** | Tranziția dintre două capturi consecutive nu se poate verifica vizual | Semnal documentat, nu review; pozițiile și rândurile se iau ca atare |
| **R3 — includere neclară** | Agenție SEO fără mențiune AI în fragment (R3.1), sugestie de căutare (R3.2), conținut educativ sau publicație (R3.3), rol neclar (R3.4), serviciu adiacent (R3.5), furnizor calificat de răspuns ca nespecific (R3.6), sursă neidentificabilă (R3.7) | Rândul rămâne `UNCERTAIN`, `REVIEWED`; includerea devine `EXCLUDE_UNCERTAIN`; nu intră în reuniune și nu mai e ținut în review |

Pentru R3.7 (relevanță `RELEVANT`, tip de entitate `UNCERTAIN`), regula 4 din `build_register.mjs` a fost aliniată la regula 2: după decizia operatorului, includerea devine `EXCLUDE_UNCERTAIN`. Efectul cazurilor incerte se raportează într-un scenariu de sensibilitate (S2), nu în bază.

Cazurile R3.1 nu se pierd: în pilotul 3, cele 15 agenții SEO fără mențiune AI în capturi au trecut într-o **listă separată pentru Verification**, în afara reuniunii (RV-07).

### 9.2. Corecțiile după înghețare

Fișierele înghețate nu se modifică. Corecțiile se publică astfel:

- **Erorile de date** (o valoare greșită în registru) se declară într-o anexă de erori numerotată (`errata-01`, `errata-02` …), cu SHA-256 propriu. Orice analiză aplică anexa peste registru. Precedent: `errata-01` la pilotul 1.
- **Corecțiile de formă**, care nu schimbă datele (de exemplu, numerotarea secțiunilor din README), se fac printr-o versiune nouă de metadate, cu arhiva de capturi neschimbată. Precedent: pilotul 3, metadate v1.1 peste arhiva v1.0; v1.0 rămâne înghețat.

Pachetele se pot urca pe GitHub doar ca release-uri draft. Publicarea release-ului este o decizie separată a operatorului.

### 9.3. Registrul public Market Discovery

Conform AVL-MKT-001 v0.10.0 §21.1 (REQ-024 – REQ-026), registrul Market Discovery al fiecărei rulări este public. El se publică pe pagina `/lab/market-discovery/<rulare>` și se generează cu `scripts/build-market-discovery-data.mjs`:

- Scriptul citește pachetul înghețat și raportul pilotului. Înainte de orice calcul, verifică SHA-256 al fiecărui fișier folosit față de `sha256sums` al pachetului și față de `sha256sums.txt` al raportului.
- **Intră în registru** entitățile din reuniune (`IN_UNION_BASE` și `IN_UNION_EXTENDED_ONLY`). Rândurile `EXCLUDE_*` și entitățile doar incerte nu se publică drept candidați; ele rămân în pachet.
- **Fiecare entitate are statutul `UNVERIFIED`.** Statutul înseamnă că entitatea a fost identificată, dar nu a trecut prin Market Verification.
- **Proveniența fiecărei observații incluse:** rularea, interogarea, suprafața, tipul observației și blocul (organic, AI Overview, răspuns generat Bing), poziția organică, recomandarea explicită, URL-ul afișat (dacă e vizibil) și Evidence ID-urile capturilor, cu SHA-256 din capture index.
- **Anexele de erori se aplică.** Pentru pilotul 1, rândul corectat prin ERR-01 apare în proveniență, marcat ca atare.
- **Identitățile ambigue** (alias neverificat, posibil aceeași entitate, nume incomplet, imaginea cardului cu alt nume, unire de confirmat) și **relațiile observate** (persoană ↔ brand, dezvoltator ↔ produs etc.) sunt semnalate distinct, pe entitate.
- Pagina spune explicit că includerea nu confirmă existența, activitatea comercială, eligibilitatea sau calitatea serviciilor (REQ-025).

Evidence ID-urile și SHA-256 permit verificarea pe pachet. Capturile devin accesibile public doar după publicarea release-ului de către operator.

## 10. Reuniunea de candidați și comparațiile

### 10.1. Baza și stratul suplimentar

| Strat | Ce conține |
|---|---|
| Bază | Google organic până la adâncimea declarată (~30), AI Overview, Bing organic, cele 6 suprafețe AI |
| Suplimentar | Răspunsul generat Bing, reclamele, alte module SERP, Google peste adâncimea declarată |
| Exploratoriu | Interogările Q-DISC-X01…X04 |
| În afara reuniunii | Rândurile `EXCLUDE_*`. Cazurile incerte apar doar în scenariile de sensibilitate |

Rapoartele celor trei piloți folosesc o bază **comparabilă între ei**, declarată: rândurile INCLUDE fără modulele SERP (AI Overview, răspunsul generat Bing, reclame, alte module). În piloții 1 și 2, baza a exclus și Google 21–29. În pilotul 3, Google 21–30 face parte din bază, pentru că adâncimea declarată e 30; scenariul S0-G20 limitează Google la 20, pentru comparabilitate. Cifrele publicate pe pagina Market Discovery sunt pe această bază comparabilă.

Pe definiția din tabelul de mai sus (AI Overview în bază), pilotul 2 ar avea 96 de entități în bază, față de 84, iar pilotul 3 ar avea 182, față de 174 (scenariul S0-AIO). Comparațiile se fac întotdeauna pe definiția declarată.

### 10.2. Deduplicarea

Unitatea numărată este entitatea candidată. Rapoartele piloților au folosit regulile de unire de mai jos. Ele se propun pentru preînregistrare. Decizia formală este deschisă (RV-20 din pilotul 1).

- **U0** — aceeași denumire; diferă doar majusculele, diacriticele, spațiile sau TLD-ul.
- **U1** — domeniul sau eticheta sursei este chiar denumirea.
- **U2** — observația leagă explicit cele două forme.
- **U3** — diferă doar un descriptor, sau eticheta este trunchiată.

Nu se unesc, ci se leagă prin relații: persoana și brandul sau organizația ei, produsul și dezvoltatorul lui, denumirile doar asemănătoare. Limita inferioară se raportează cu aceste relații comasate. Unde nu e clar dacă două denumiri aparțin aceleiași entități, ele rămân separate, cu relația `POSSIBLY_SAME`, iar decizia se ia în Verification (RV-01 … RV-06, pilotul 3).

Cheile entităților se refolosesc între rulări acolo unde denumirea e aceeași (în pilotul 3, 73 de chei preluate din piloții 1–2). Comparația dintre rulări se face pe cheie.

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

Cifre agregate. Numele sunt în registrul public al fiecărei rulări (§9.3).

| | Pilotul 1 | Pilotul 2 | Pilotul 3 |
|---|---|---|---|
| Dată, locație | 9 octombrie 2026, Italia | 11 octombrie 2026, Sibiu (afișat: Brașov) | 13–14 octombrie 2026, Sibiu, Vodafone (afișat de Google și Gemini: Brașov) |
| Set | DISCOVERY v0.1.0: 001, 006, 009, 011 | La fel | DISCOVERY v0.2.0: 002, 003, 004, 005, 007, 008, 010, 012 |
| Execuții | 32 din 32, complete | 32 din 32, complete; 109 capturi | 64 din 64, complete; 227 de capturi; 5 fără candidați (toate la Q-DISC-007) |
| Observații | 498 | 545 | 1.333 |
| Rânduri incluse în reuniune | 301 în registru; 302 după errata-01 | 338 | 903 |
| Entități candidate, bază / extins | 91 / 96 | 84 / 102 (96 cu AI Overview în bază) | 174 / 182 (182 cu AI Overview în bază) |
| AI Overview | Necapturat | 29 de entități numite, 9 doar acolo | 8 entități doar acolo |

Concluzii folosite în acest document:

1. **Două rulări se suprapun puțin.** Din 127 de entități găsite în bază de piloții 1 și 2, 48 apar în amândoi (Jaccard 0,38). Q-DISC-006 este cel mai instabil (0,13), iar Bing organic suprafața cea mai stabilă (0,76).
2. **Nucleul se repetă, coada nu.** Entitățile văzute în pilotul 1 în cel puțin două combinații interogare × suprafață au fost regăsite aproape toate (33 din 35). Cele văzute o singură dată au fost regăsite în 27% din cazuri. Pilotul 3 confirmă cu alte întrebări: dintre entitățile prezente în 6 sau mai multe celule, 92% erau deja cunoscute; dintre cele prezente într-o singură celulă, 15%.
3. **Suprafețele AI aduc majoritatea entităților:** 87–88% din reuniune în piloții 1 și 2. Search aduce entități pe care AI-ul nu le numește.
4. **Locația a schimbat Search-ul.** Pe Google, Q-DISC-011 a avut 55% rezultate irelevante din România, față de 90% din Italia. Diferențele combină locația, data și variația normală și nu pot fi separate cu două rulări.
5. **Execuțiile fără candidați sunt rezultate.** În pilotul 2, patru suprafețe AI au răspuns la Q-DISC-006 descriind tipuri de furnizori, fără să numească vreunul. În pilotul 3, cinci suprafețe nu au numit niciun furnizor la Q-DISC-007.
6. **Întrebările noi lărgesc mult setul.** Cele 8 întrebări ale pilotului 3 au adus 114 entități noi și au dublat reuniunea (127 → 241 în bază; 256 în setul extins). 35 de entități sunt în bază în toți trei piloții.
7. **Adâncimea Google 21–30 și AI Overview contează.** În pilotul 3, fiecare a adus 8 entități găsite nicăieri altundeva.

Piloții nu au făcut Verification. „Entitate candidată” înseamnă doar că un nume a fost afișat ca posibil prestator sau instrument (AVL-MKT-001 REQ-009, REQ-012, REQ-025). Reuniunea cumulată de 241 de entități în bază este Candidate Set-ul pentru pasul următor, Verification.

## 12. Deciziile rezultate din piloți

Toate deciziile au fost luate de operator.

| Dată | Decizie | Sursa |
|---|---|---|
| 12 octombrie 2026 | AI Overview intră în bază ca bloc integrat în SERP-ul Google, cu ID de evidență `-AIO` pe fiecare captură în care apare | RV-05, pilotul 2 |
| 12 octombrie 2026 | Adâncimea Google este ~30 de poziții; primele 3 pagini se păstrează întotdeauna | RV-06, pilotul 2; RV-13, pilotul 1 |
| 12 octombrie 2026 | Software-ul intră în lista de candidați, ca Technology Provider separat | RV-09, pilotul 2; RV-11, pilotul 1 |
| 12 octombrie 2026 | Se rulează doar expresiile scurte USER; USER-CONV nu se mai rulează | Decizia operatorului |
| 12 octombrie 2026 | USER-SHORT este și sursă de candidați; comparația cu DISCOVERY se raportează separat | Decizia operatorului |
| 12 octombrie 2026 | Repetarea la câteva zile este declarată strategie longitudinală neadecvată; subsetul se rulează lunar, lista completă și explorarea trimestrial | Comparația pilot 1 – pilot 2 |
| 12 octombrie 2026 | Rulări lunare: 4 DISCOVERY pilotate + 4 USER-SHORT, pe toate cele 8 suprafețe | Decizia operatorului |
| 12 octombrie 2026 | Denumiri: `-FULL` trimestrial și `-M<luna din calendar>` lunar; T0 / F1…Fn nu se folosesc în Market Discovery | Decizia operatorului; AVL-MKT-001 v0.9.1 §3.2 |
| 12 octombrie 2026 | „consultant AI” se înlocuiește cu `consultanță AI` (Q-USER-SHORT-013), ca ancoră de limbă | Decizia operatorului |
| 12 octombrie 2026 | Eroarea din pachetul pilotului 1 se declară prin anexa `errata-01`, nu printr-o versiune v1.1 | RV-01, pilotul 1 |
| 12 octombrie 2026 | Q-DISC-006 rămâne în set; decizia finală se amână | RV-07, pilotul 2 |
| 12 octombrie 2026 | Pachetele piloților 1 și 2 nu se modifică; deciziile se aplică de aici înainte | Decizia operatorului |
| 14 octombrie 2026 | Completarea setului (Q-DISC-002, 003, 004, 005, 007, 008, 010, 012) se rulează ca pilot (`-PILOT-3`), nu ca FULL | Decizia operatorului; v0.2.0 §2 |
| 14 octombrie 2026 | Regulile de review R1–R3 (§9.1); regula 4 din `build_register.mjs` aliniată la regula 2 | Decizia operatorului, pilotul 3 |
| 14 octombrie 2026 | Corecția de formă a README-ului pilotului 3 se face prin metadate v1.1, cu arhiva v1.0 neschimbată | Decizia operatorului, pilotul 3 |
| 15 octombrie 2026 | Deduplicarea RV-01 … RV-06 conform recomandărilor; perechile neclare rămân separate, cu relații, până la Verification | RV-01 … RV-06, pilotul 3 |
| 15 octombrie 2026 | Cele 15 agenții SEO fără mențiune AI (R3.1) trec într-o listă separată pentru Verification, în afara reuniunii | RV-07, pilotul 3 |
| 15 octombrie 2026 | Entitățile din Q-DISC-012 rămân în Candidate Set, marcate ca internaționale | RV-08, pilotul 3 |
| 15 octombrie 2026 | Q-DISC-007 se reformulează (înlocuită la 16 octombrie 2026, vezi mai jos) | RV-09, pilotul 3 |
| 15 octombrie 2026 | Q-DISC-002, 003, 004 și 005 se păstrează până la a doua rulare; comasarea se decide pe două rulări | RV-10, pilotul 3 |
| 15 octombrie 2026 | Bing Q-DISC-008 doar cu pagina 1 și AI Mode Q-DISC-002 cu o singură captură se acceptă ca atare, ca limite ale raportului | RV-11, RV-12, pilotul 3 |
| 16 octombrie 2026 | Registrul Market Discovery e public: numele candidaților se publică cu statutul `UNVERIFIED`, cu proveniența și cu dovezile | AVL-MKT-001 v0.10.0 §21 |
| 16 octombrie 2026 | Q-DISC-006 și Q-DISC-007 rămân cum au fost definite; evaluarea întrebărilor (păstrare, reformulare, comasare, mutare, eliminare) se face după finalizarea întregului proces Market Discovery. Înlocuiește RV-09 din pilotul 3 și închide amânarea RV-07 din pilotul 2 | Decizia operatorului |

## 13. Decizii deschise

**Despre set și rulare**

1. **Evaluarea întrebărilor setului**, după finalizarea întregului proces Market Discovery: păstrare, reformulare, comasare (inclusiv Q-DISC-002 … 005, RV-10 din pilotul 3), mutare în stratul exploratoriu sau eliminare. Datele din piloți pentru Q-DISC-006 și Q-DISC-007 sunt păstrate pentru această evaluare (§4, §11).
2. **Momentul în care Market Discovery se consideră finalizat**, ca punct de pornire pentru evaluarea de la punctul 1.
3. **Rularea FULL și rularea lunară în aceeași lună.** Se poate decide ca FULL să țină loc de rularea lunară din luna în care se execută, pentru că o include. Altfel, ambele se rulează.
4. **Bing, pagina 2**, când există (RV-14, pilotul 1). Pilotul 3 a arătat că situația apare (Q-DISC-008, RV-11).
5. **Fereastra de rulare și cutoff-ul** pentru fiecare tip de rulare.
6. **Criteriul numeric de păstrare a unei interogări**, calculat pe cel puțin două rulări.

**Despre extragere și reuniune**

7. **Textul din imagini** (RV-08, pilotul 2): intră sau nu în reuniune ca sursă unică a unei entități.
8. **Regulile de deduplicare U0–U3** și relațiile neunite: preînregistrare formală (RV-20, pilotul 1).
9. **Clasele neclare** (RV-04, pilotul 2) și **blocul generat Bing fără text** (RV-10, pilotul 2).
10. **Confirmarea regulilor R1–R3** pentru rulările următoare: se aplică automat sau se confirmă de operator la fiecare rulare.

**Despre corpus și publicare**

11. **AVL-MKT-001 REQ-015** cere înghețarea Market Reference Set „înainte de prima execuție AI a instanței”. Precizarea propusă în v0.1.0 §9 rămâne valabilă: înainte de prima execuție AI destinată măsurării reprezentării pieței. Execuțiile Discovery se păstrează separat și nu se refolosesc ca măsurători ale panelului.
12. **Pilotul intern de Verification** (AVL-MKT-001 §13.2) nu a fost făcut. De el depind AVL-MKT-001 v1.0.0 și Discovery-ul oficial.
13. **Formatul identificatorilor** pentru registrul Market Discovery, registrul Market Verification și Market Reference Set (AVL-MKT-001, decizia deschisă 2).
14. **Publicarea release-urilor** cu pachetele de dovezi ale celor trei piloți (toate draft la 16 octombrie 2026). Până atunci, registrul public citează Evidence ID-uri și SHA-256, dar capturile nu sunt accesibile public.

Închisă față de v0.2.0: **AVL-MKT-001 §3.2** (v0.2.0, decizia 10). Versiunea 0.9.1 a protocolului a fost integrată în `main` la 12 octombrie 2026 (commit `5416148`), iar trimiterile din AVL-202 și AVL-001 au fost actualizate la 13 octombrie 2026, odată cu versiunea 0.9.2.

## 14. Limite

- Fiecare întrebare DISCOVERY are una sau două rulări pilot; toate expresiile USER-SHORT și toate interogările exploratorii nu au fost încă rulate.
- Piloții au avut câte o rulare pe pereche, cu locații și date diferite. Stabilitatea pe interogare și pe suprafață se poate estima doar pentru cele 4 întrebări rulate de două ori.
- Comparațiile dintre seturi și dintre rulări sunt descriptive. Ele nu măsoară cererea comercială și nici popularitatea platformelor.
- Cazurile incerte (R3) au fost scoase din review în bloc, după regula operatorului, nu decise caz cu caz. Unele pot fi furnizori reali (de exemplu, cele 15 agenții R3.1), pe care fragmentul vizibil nu îi arată ca atare.
- Pozițiile Google după tranzițiile neverificate (R2) presupun că nu lipsește niciun rezultat.
- Claude este una dintre suprafețele măsurate și a fost folosit și la extragerea observațiilor, la propunerea regulilor de review și la analiza piloților. Deciziile de extragere, unire și clasificare sunt explicite și pot fi refăcute de altcineva.
- Entitatea afiliată autorului nu apare în niciuna dintre observațiile celor trei piloți. Absența nu se interpretează (AVL-MKT-001 §13, §14).
- Nou identificat nu înseamnă nou intrat pe piață. Absența dintr-o rulare nu înseamnă ieșire de pe piață.
- Registrul public nu este Market Reference Set și nici registrul furnizorilor eligibili (AVL-MKT-001 §21.3).

## Istoric

0.3.0 — 16 octombrie 2026. Integrează pilotul 3 (13–14 octombrie 2026) și review-ul RV-01…RV-12 (15 octombrie 2026): toate cele 12 întrebări DISCOVERY sunt pilotate; Q-DISC-012 intră în Candidate Set, cu entitățile marcate ca internaționale. Q-DISC-006 și Q-DISC-007 rămân cum au fost definite, iar evaluarea întrebărilor se face după finalizarea întregului proces Market Discovery (decizia operatorului din 16 octombrie 2026, care înlocuiește RV-09). Adăugate: regulile de review R1–R3 și lista separată pentru Verification (§9.1); regula de corecție prin metadate noi (§9.2); registrul public Market Discovery, conform AVL-MKT-001 v0.10.0 §21 (§9.3), care înlocuiește prevederea din v0.2.0 §1 privind nepublicarea numelor; relația registrelor cu Market Reference Set (§2); declararea bazei comparabile folosite în rapoarte (§10.1); sesiunile de lucru (§8.1). Textele interogărilor sunt neschimbate. Decizia deschisă privind AVL-MKT-001 §3.2 este închisă. Versiunea 0.2.0 nu a fost modificată. Nicio interogare de piață nu a fost executată pentru acest document.

0.2.0 — 12 octombrie 2026. Document unic pentru Market Discovery, construit pe rezultatele piloților 1 și 2. DISCOVERY neschimbat ca text. USER-SHORT activ, cu „consultant AI” înlocuit de `consultanță AI` (Q-USER-SHORT-013); USER-CONV retras. Adăugate: cadența lunară/trimestrială și denumirile `-FULL` / `-M<luna>`; Google ~30 de poziții; AI Overview în bază, cu ID-uri `-AIO`; regula as-returned; software ca Technology Provider separat; regulile de extragere și de pachet preluate din piloți; deciziile și punctele deschise. Nicio interogare de piață nu a fost executată pentru acest document.

0.1.0 — 9 octombrie 2026. Prima propunere: 12 CORE-CANDIDATE și 4 EXPLORATORY (`MKT-RO-AIV-discovery-query-set-v0.1.0.md`).
