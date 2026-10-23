---
document_id: "AVL-204"
title: "Grila de interpretare a verificării tehnice"
subtitle: "Technical Diagnostic Interpretation Grid"
level: "C — Methodology"
version: "0.1.0"
status: "Draft pentru revizuire"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-10-22"
date_published: "2026-10-23T07:17:00+03:00"
date_modified: "2026-10-23"
last_reviewed: "2026-10-23"
canonical: "https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-202 — Cadrul metodologic AI Visibility Lab"
  - "AVL-200 — Standardul de dovezi, măsurare și trasabilitate"
  - "AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility"
informative_dependencies: []
keywords:
  - "AI Visibility"
  - "diagnostic tehnic"
  - "grilă de interpretare"
  - "recomandări"
  - "robots.txt"
  - "AVL-204"
---

# AVL-204 — Grila de interpretare a verificării tehnice

## Technical Diagnostic Interpretation Grid

> **Principiu:** aceeași observație primește același diagnostic, indiferent a cui este site-ul. Regulile se publică și se fixează înainte de rulare, ca diagnosticul să poată fi verificat și să nu poată fi ajustat după rezultat.

---

## Controlul documentului

AVL-204 este un document de nivel C — Methodology în corpusul AI Visibility Lab Documentation. Definește regulile prin care observațiile produse de [AVL-203](/lab/metodologie/protocol-verificare-tehnica) devin diagnostic și recomandări (AVL-203 §12).

Versiunea curentă, **0.1.0**, este un **draft pentru revizuire** și nu este activă. Regulile de diagnostic din §6 și criteriile de prioritizare din §7 sunt propuneri de lucru; deciziile rămase deschise înainte de activare sunt enumerate în §15.

Identificatorul AVL-204 a fost alocat la 22 octombrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut, și confirmat de Alex Matescu.

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-204 |
| Nivel | C — Methodology |
| Versiune | 0.1.0 |
| Statut | Draft pentru revizuire |
| Autor | Alex Matescu |
| Organizație | AI Visibility Lab |
| Data creării | 22 octombrie 2026 |
| Ultima verificare | 23 octombrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica |
| Dependențe normative | AVL-001; AVL-202; AVL-200; AVL-203 |
| Tip de versiune în sensul AVL-200 | Measurement Rule Version (AVL-200 §13.1, §19.3) |

În acest document, termenii **TREBUIE**, **NU TREBUIE**, **ESTE OBLIGATORIU**, **AR TREBUI**, **NU AR TREBUI** și **POATE** sunt utilizați în sensul convențiilor RFC 2119 și RFC 8174, adaptate în limba română:

- **TREBUIE / NU TREBUIE** — condiție obligatorie pentru conformitate;
- **AR TREBUI / NU AR TREBUI** — recomandare puternică; abaterea este permisă numai cu justificare documentată;
- **POATE** — opțiune permisă.

În afara propozițiilor normative și a cerințelor identificate `AVL204-REQ-*`, acești termeni nu trebuie interpretați automat ca cerințe de conformitate. Cât timp documentul are statutul „Draft pentru revizuire”, regulile descriu grila propusă pentru versiunea 1.0.0.

---

# 1. Care este scopul grilei?

**Grila stabilește, înainte de orice rulare, cum devin observațiile tehnice diagnostic și cum se ordonează recomandările.**

AVL-203 documentează ce a livrat un server. O evaluare care livrează recomandări, de exemplu auditul AI Visibility, are nevoie și de un pas următor: ce înseamnă observațiile, cât de sigură este concluzia și ce merită făcut întâi. Fără reguli publice, acest pas ar depinde de judecata celui care scrie raportul în ziua respectivă.

Grila are trei roluri:

1. **transparență** — oricine poate verifica de ce o observație a primit un anumit diagnostic;
2. **consecvență** — aceeași observație primește același diagnostic de la o evaluare la alta și de la o entitate la alta;
3. **imparțialitate** — regulile nu favorizează nicio entitate evaluată: nici clientul, nici un concurent, nici site-ul laboratorului.

---

# 2. Ce acoperă și ce nu acoperă grila?

**Grila interpretează exclusiv observațiile produse conform AVL-203; nu măsoară vizibilitatea AI și nu înlocuiește un audit SEO complet.**

Grila acoperă: stările diagnosticului, zonele verificate, regulile care leagă observațiile de stări, prioritizarea recomandărilor, afirmațiile excluse și regulile de aplicare identică.

Grila nu acoperă: interogările către sisteme AI, clasificarea răspunsurilor (menționare, citare, recomandare), identitatea entității în surse externe, performanța, securitatea sau investigațiile din afara protocolului minim (AVL-203 §13). Pentru o extensie declarată (AVL-203 §13.1), regulile ei de interpretare se declară separat, înainte de folosire.

> **AVL204-REQ-001 — Grila TREBUIE aplicată numai observațiilor produse conform AVL-203 dintr-o rulare a cărei integritate (TC-07) a fost verificată.**

---

# 3. Principii de aplicare

**Diagnosticul este conservator: când o regulă nu poate fi aplicată sigur, rezultatul coboară spre „problemă posibilă” sau „nu poate fi stabilit”, niciodată spre „problemă confirmată”.**

- **Observația înaintea diagnosticului.** Fiecare constatare trimite la observațiile care o susțin; o constatare fără observație-suport nu se raportează.
- **Regula înaintea rezultatului.** Fiecare constatare indică regula din §6 care a produs-o, prin identificatorul ei.
- **Intenția entității contează.** O restricție care corespunde politicii de acces declarate de entitate în planul de măsurare (AVL-203 §1.1) nu este o problemă.
- **Necunoscutul rămâne vizibil.** O constatare „nu poate fi stabilit” se raportează explicit; nu dispare sub o zonă marcată „nicio problemă observată”.

> **AVL204-REQ-002 — Fiecare constatare TREBUIE să indice zona, starea, identificatorul regulii aplicate și observațiile care o susțin.**

> **AVL204-REQ-003 — Când o regulă nu poate fi aplicată sigur, constatarea NU TREBUIE să primească starea „problemă confirmată”.**

> **AVL204-REQ-004 — O restricție de acces care corespunde politicii declarate de entitate în planul de măsurare NU TREBUIE raportată drept problemă.**

---

# 4. Stările diagnosticului

**Grila folosește cele patru stări definite de AVL-203 §12.1, ordonate după severitate.**

| Ordine | Stare | Sens |
|---|---|---|
| 1 | **Problemă confirmată** | observațiile arată direct problema, în condițiile testate |
| 2 | **Problemă posibilă** | observațiile sunt compatibile cu o problemă, dar nu o pot confirma singure |
| 3 | **Nu poate fi stabilit** | datele disponibile nu permit o concluzie |
| 4 | **Nicio problemă observată** | în condițiile testate, observațiile nu indică o problemă după regulile grilei |

Starea unei zone este starea cea mai severă dintre constatările ei, după ordinea de mai sus. Constatările „nu poate fi stabilit” se raportează separat chiar și atunci când zona are o stare mai severă.

„Nicio problemă observată” descrie condițiile testate. Nu certifică site-ul și nu garantează indexarea, citarea, menționarea sau recomandarea într-un răspuns AI.

> **AVL204-REQ-005 — Starea unei zone TREBUIE să fie starea cea mai severă dintre constatările ei, iar constatările „nu poate fi stabilit” TREBUIE raportate separat.**

> **AVL204-REQ-006 — Starea „nicio problemă observată” NU TREBUIE prezentată drept certificare a site-ului sau drept garanție de indexare, citare, menționare ori recomandare.**

---

# 5. Zonele de diagnostic

**Verificările AVL-203 se grupează în șase zone de diagnostic, fiecare legată de categoriile folosite în raport.**

| Zonă | Denumire în raport | Verificări AVL-203 | Categorie de problemă |
|---|---|---|---|
| `Z1` | Răspunsul site-ului și adresa oficială | TC-01, TC-02 | acces |
| `Z2` | Regulile pentru crawlere | TC-03 | acces |
| `Z3` | Descoperirea prin sitemap | TC-04 | descoperire |
| `Z4` | Semnalele paginilor | TC-05 | identitate și descoperire |
| `Z5` | Conținutul livrat în HTML | TC-08 | conținut |
| `Z6` | Răspunsurile pentru crawlere declarate | TC-06 | acces |

`TC-00` (contextul rulării) și `TC-07` (integritatea) sunt condiții de validitate, nu zone. Dacă manifestul rulării lipsește sau verificarea checksum-urilor eșuează pentru un artefact, constatările care depind de acel artefact primesc starea „nu poate fi stabilit” (regula `R-VAL-01`).

---

# 6. Regulile de diagnostic

**Fiecare regulă leagă o observație AVL-203 de o stare. Regulile se aplică pentru fiecare URL din plan; o regulă care nu se potrivește niciunei observații nu produce constatare.**

## 6.1. Validitate

| Regulă | Condiție | Stare |
|---|---|---|
| `R-VAL-01` | manifestul rulării lipsește sau verificarea checksum-urilor eșuează pentru artefactele folosite | nu poate fi stabilit |

## 6.2. Z1 — Răspunsul site-ului și adresa oficială

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z1-01` | URL-ul din plan răspunde, după redirecturi, cu un cod `4xx` sau `5xx` | problemă confirmată |
| `R-Z1-02` | captura eșuează cu eroare TLS sau de certificat | problemă confirmată |
| `R-Z1-03` | variantele `http`/`https` și `www`/fără `www` relevante ajung la destinații finale diferite | problemă confirmată |
| `R-Z1-04` | URL-ul final diferă de URL-ul din plan fără ca redirectul să fie declarat intenționat în plan | problemă posibilă |
| `R-Z1-05` | lanțul de redirecturi are mai mult de un redirect până la URL-ul final | problemă posibilă |
| `R-Z1-06` | o variantă `http` răspunde direct `2xx`, fără redirect spre `https` | problemă posibilă |
| `R-Z1-07` | captura eșuează cu eroare de rețea sau DNS o singură dată, fără confirmare la o captură repetată | nu poate fi stabilit |
| `R-Z1-08` | URL-ul răspunde `2xx` cu cel mult un redirect, iar variantele converg | nicio problemă observată |

## 6.3. Z2 — Regulile pentru crawlere

Regulile `R-Z2-01` și `R-Z2-05` se aplică numai după determinarea politicii robots.txt conform RFC 9309 (selecția grupului, combinarea grupurilor, potrivirea cea mai specifică), printr-un parser conform sau prin aplicare manuală documentată pas cu pas, cum cere AVL203-REQ-041. Constatarea indică metoda folosită. Fără această determinare se aplică `R-Z2-06`.

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z2-01` | regula aplicabilă blochează un URL din plan pentru un crawler din matricea Core (AVL-203 §6), contrar politicii de acces declarate | problemă confirmată |
| `R-Z2-02` | `robots.txt` răspunde `5xx` sau nu poate fi obținut din cauza unei erori de rețea | problemă confirmată |
| `R-Z2-03` | `robots.txt` este redirecționat către alt host sau conține linii care nu pot fi interpretate | problemă posibilă |
| `R-Z2-04` | `robots.txt` răspunde `4xx` | nicio problemă observată |
| `R-Z2-05` | nicio regulă aplicabilă nu blochează URL-urile din plan pentru crawlerele Core, sau blocările corespund politicii declarate | nicio problemă observată |
| `R-Z2-06` | politica aplicabilă nu a putut fi determinată conform RFC 9309 | nu poate fi stabilit |

Justificarea pentru `R-Z2-02` și `R-Z2-04`: RFC 9309 §2.3.1.4 cere crawlerului să considere tot site-ul interzis când `robots.txt` răspunde cu o eroare de server (`5xx`) sau nu poate fi accesat din cauza rețelei; RFC 9309 §2.3.1.3 îi permite să acceseze orice resursă când fișierul răspunde `4xx`. Comportamentul efectiv al fiecărui furnizor nu este verificat de această grilă.

## 6.4. Z3 — Descoperirea prin sitemap

Regulile folosesc statusurile TC-04 din AVL-203 §7.

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z3-01` | status `UNAVAILABLE` | problemă confirmată |
| `R-Z3-02` | status `FOUND_AT_CONVENTIONAL_PATH` (sitemap existent, dar nedeclarat în `robots.txt`) | problemă posibilă |
| `R-Z3-03` | status `NOT_FOUND` | problemă posibilă |
| `R-Z3-04` | status `UNKNOWN` | nu poate fi stabilit |
| `R-Z3-05` | status `DECLARED` | nicio problemă observată |

## 6.5. Z4 — Semnalele paginilor

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z4-01` | meta robots sau `X-Robots-Tag` conține `noindex` ori `none` pentru un URL pe care politica declarată îl vrea indexat | problemă confirmată |
| `R-Z4-02` | canonicalul declarat trimite la un URL care, capturat, nu răspunde `2xx` | problemă confirmată |
| `R-Z4-03` | un bloc JSON-LD nu este JSON valid sintactic | problemă confirmată |
| `R-Z4-04` | pagina nu are `<title>` sau are un `<title>` gol | problemă confirmată |
| `R-Z4-05` | canonicalul declarat trimite la alt URL decât URL-ul final, fără ca asta să fie declarat intenționat în plan | problemă posibilă |
| `R-Z4-06` | pagina canonică despre entitate (AVL-203 §1.1) nu conține niciun bloc JSON-LD | problemă posibilă |
| `R-Z4-07` | `<html lang>` lipsește | problemă posibilă |
| `R-Z4-08` | un semnal are valoarea `UNKNOWN` la extracție | nu poate fi stabilit |
| `R-Z4-09` | niciuna dintre condițiile de mai sus nu se aplică | nicio problemă observată |

Aceste reguli descriu semnalele declarate în HTML-ul brut. Ele nu evaluează canonicalul selectat de un motor și nu validează vocabularul Schema.org (AVL203-REQ-016).

## 6.6. Z5 — Conținutul livrat în HTML

Regulile folosesc statusurile TC-08 din AVL-203 §8.1, pentru fiecare text-cheie declarat în plan.

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z5-01` | un text-cheie are statusul `ABSENT_FROM_RAW_HTML` | problemă confirmată (în HTML-ul brut) |
| `R-Z5-02` | un text-cheie are statusul `PRESENT_IN_METADATA_ONLY` | problemă posibilă |
| `R-Z5-03` | un text-cheie are statusul `UNKNOWN` | nu poate fi stabilit |
| `R-Z5-04` | toate textele-cheie au statusul `PRESENT_IN_BODY` | nicio problemă observată |

Problema confirmată de `R-Z5-01` este absența textului din HTML-ul brut. Efectul asupra unui crawler anume rămâne o problemă posibilă și se formulează ca atare (AVL203-REQ-032).

## 6.7. Z6 — Răspunsurile pentru crawlere declarate

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z6-01` | pentru un User-Agent declarat, statusul HTTP sau URL-ul final diferă de cele ale clientului de referință | problemă confirmată (răspuns diferit pentru User-Agent-ul declarat) |
| `R-Z6-02` | pentru un User-Agent declarat, headerele relevante diferă (de exemplu `X-Robots-Tag`, `Content-Type`) | problemă confirmată (răspuns diferit pentru User-Agent-ul declarat) |
| `R-Z6-03` | dimensiunea sau hash-ul diferă, iar capturile clientului de referință nu au arătat variabilitate intrinsecă | problemă posibilă |
| `R-Z6-04` | capturile clientului de referință arată variabilitate intrinsecă: comparația de conținut | nu poate fi stabilit |
| `R-Z6-05` | status, URL final și headere relevante identice pentru toți User-Agent-ii declarați, iar conținutul identic sau neevaluabil conform `R-Z6-04` | nicio problemă observată (pentru status, URL și headere) |

`R-Z6-01` și `R-Z6-02` confirmă că serverul răspunde diferit la un User-Agent declarat. Nu confirmă că infrastructura furnizorului este blocată și nici cloaking (AVL203-REQ-012, AVL203-REQ-021).

> **AVL204-REQ-007 — Diagnosticul TREBUIE produs prin regulile din §6, iar fiecare constatare TREBUIE să citeze identificatorul regulii aplicate.**

> **AVL204-REQ-008 — Regulile zonei Z2 care depind de politica aplicabilă (`R-Z2-01`, `R-Z2-05`) TREBUIE aplicate numai după determinarea politicii robots.txt conform RFC 9309, prin parser conform sau aplicare manuală documentată (AVL203-REQ-041); altfel TREBUIE aplicată regula `R-Z2-06`.**

---

# 7. Prioritizarea recomandărilor

**Fiecare recomandare primește o prioritate din patru criterii publice; prioritatea este interpretare și se declară ca atare.**

| Criteriu | Mic | Mediu | Mare |
|---|---|---|---|
| **Impact potențial** | afectează un URL secundar din plan | afectează mai multe URL-uri sau pagina canonică despre entitate | afectează pagina principală, tot originul sau toate crawlerele Core |
| **Efort** (estimare) | o modificare de configurare sau de conținut punctuală | modificări pe mai multe pagini sau șabloane | modificări de arhitectură, platformă sau infrastructură |
| **Dependențe** | niciuna | depinde de o altă recomandare | depinde de terți (furnizor de hosting, CDN, platformă) |
| **Verificabilitate** | nu poate fi verificată cu AVL-203 | poate fi verificată parțial | poate fi verificată integral cu o verificare `TC-*` la remăsurare |

Clasele de prioritate:

- **P1** — problemă confirmată în zonele Z1, Z2 sau Z6, cu impact potențial mare;
- **P2** — orice altă problemă confirmată, plus problemele posibile cu impact potențial mare;
- **P3** — celelalte probleme posibile.

Constatările „nu poate fi stabilit” nu primesc o clasă de prioritate; pentru ele, recomandarea este o verificare suplimentară (de exemplu o captură repetată sau o extensie declarată). În aceeași clasă, recomandările se ordonează după efort crescător și dependențe.

Efortul este o estimare a celui care redactează raportul; entitatea evaluată îl poate corecta.

> **AVL204-REQ-009 — Fiecare recomandare TREBUIE să primească o clasă de prioritate după regulile din §7, iar estimarea efortului TREBUIE declarată ca estimare.**

---

# 8. Afirmații excluse

**Diagnosticul și recomandările nu conțin afirmații pe care observațiile AVL-203 nu le pot susține.**

| Formulare exclusă | Formulare permisă |
|---|---|
| „Pagina este indexată.” | „Pagina răspunde `200` la URL-ul declarat.” |
| „ChatGPT nu vă poate accesa site-ul.” | „Serverul răspunde `403` la User-Agent-ul declarat `OAI-SearchBot`.” |
| „Site-ul face cloaking.” | „Conținutul diferă între User-Agent-ul declarat și clientul de referință, fără variabilitate intrinsecă observată.” |
| „Tot site-ul poate fi descoperit.” | „Sitemap-ul declarat în `robots.txt` răspunde `200`.” |
| „Google a ales acest canonical.” | „Pagina declară canonicalul X.” |
| „Datele structurate sunt corecte.” | „Blocul JSON-LD este JSON valid sintactic.” |
| „După corectare veți apărea în răspunsurile AI.” | „Corectarea poate fi verificată la remăsurare prin TC-03.” |

> **AVL204-REQ-010 — Diagnosticul și recomandările NU TREBUIE să conțină formulări din coloana „Formulare exclusă” sau echivalente ale lor.**

---

# 9. Aplicare identică și abateri

**Aceeași versiune a grilei se aplică tuturor entităților dintr-o evaluare și oricărei entități evaluate de laborator, fără excepții nedeclarate.**

Când o evaluare compară mai multe entități (de exemplu un client și concurenții lui), toate primesc aceeași versiune a grilei, aceleași reguli și aceleași criterii de prioritizare. Grila se aplică la fel și site-urilor proprii ale laboratorului.

O situație pe care regulile nu o acoperă sau o acoperă greșit nu se rezolvă printr-o excepție tăcută. Se declară în raport ca **abatere de la grilă**, cu regula vizată, motivul și starea atribuită, iar cazul intră în revizuirea următoarei versiuni.

> **AVL204-REQ-011 — Toate entitățile dintr-o evaluare TREBUIE evaluate cu aceeași versiune a grilei.**

> **AVL204-REQ-012 — O abatere de la o regulă a grilei TREBUIE declarată în raport, cu regula vizată, motivul și starea atribuită; o abatere nedeclarată NU TREBUIE să existe.**

---

# 10. Versionarea grilei

**Grila este o Measurement Rule Version în sensul AVL-200: o schimbare de regulă care poate schimba un diagnostic produce o versiune nouă.**

Rapoartele rămân atribuite versiunii grilei cu care au fost produse. O remăsurare (`F1` … `Fn`) folosește aceeași versiune ca rularea cu care se compară; dacă versiunea s-a schimbat între timp, raportul declară ambele versiuni și diferențele relevante.

> **AVL204-REQ-013 — O modificare a unei reguli sau a unui criteriu care poate schimba un diagnostic ori o prioritate TREBUIE să producă o versiune nouă a grilei, iar raportul TREBUIE să indice versiunea folosită.**

> **AVL204-REQ-014 — Comparația dintre două rulări TREBUIE să folosească aceeași versiune a grilei sau să declare explicit versiunile diferite și efectul lor asupra comparației.**

---

# 11. Categoriile de pagini pe tip de entitate

**Completează categoriile obligatorii din AVL-203 §1.1 cu pagini specifice tipului de entitate.**

Pagina de contact sau de date de identitate este obligatorie pentru orice tip de entitate (AVL203-REQ-042) și nu se repetă în tabel.

| Tip de entitate | Categorii suplimentare propuse |
|---|---|
| Organizație cu servicii | paginile de servicii principale; o pagină de portofoliu sau studii de caz, dacă există |
| Magazin online | pagina categoriei principale; o pagină de produs reprezentativă; paginile de livrare și retur |
| Afacere locală | pagina sau paginile de locație; pagina cu programul de lucru, dacă este distinctă de pagina de contact |
| Profesionist independent | pagina de profil sau CV; pagina de publicații ori proiecte, dacă există |

Un tip de entitate care nu se încadrează în tabel se declară în plan, împreună cu categoriile alese și motivul lor.

---

# 12. Checklist de conformitate

- [ ] **AVL204-REQ-001** — Grila TREBUIE aplicată numai observațiilor produse conform AVL-203 dintr-o rulare cu integritatea verificată.
- [ ] **AVL204-REQ-002** — Fiecare constatare TREBUIE să indice zona, starea, regula aplicată și observațiile-suport.
- [ ] **AVL204-REQ-003** — O regulă care nu poate fi aplicată sigur NU TREBUIE să producă „problemă confirmată”.
- [ ] **AVL204-REQ-004** — O restricție conformă cu politica declarată de entitate NU TREBUIE raportată drept problemă.
- [ ] **AVL204-REQ-005** — Starea zonei TREBUIE să fie cea mai severă; constatările „nu poate fi stabilit” TREBUIE raportate separat.
- [ ] **AVL204-REQ-006** — „Nicio problemă observată” NU TREBUIE prezentată drept certificare sau garanție.
- [ ] **AVL204-REQ-007** — Diagnosticul TREBUIE produs prin regulile din §6, cu identificatorul regulii citat.
- [ ] **AVL204-REQ-008** — Regulile Z2 care depind de politica aplicabilă TREBUIE aplicate numai după determinarea ei conform RFC 9309 (parser sau aplicare manuală documentată); altfel `R-Z2-06`.
- [ ] **AVL204-REQ-009** — Fiecare recomandare TREBUIE să primească o clasă de prioritate, cu efortul declarat ca estimare.
- [ ] **AVL204-REQ-010** — Diagnosticul și recomandările NU TREBUIE să conțină formulările excluse.
- [ ] **AVL204-REQ-011** — Toate entitățile unei evaluări TREBUIE evaluate cu aceeași versiune a grilei.
- [ ] **AVL204-REQ-012** — Orice abatere de la grilă TREBUIE declarată în raport.
- [ ] **AVL204-REQ-013** — O modificare care poate schimba un diagnostic sau o prioritate TREBUIE să producă o versiune nouă.
- [ ] **AVL204-REQ-014** — Comparația dintre rulări TREBUIE să folosească aceeași versiune a grilei sau să declare diferențele.

---

# 13. Documente asociate

## Normative

- AVL-001 — AI Visibility Lab Foundation.
- AVL-202 — Cadrul metodologic AI Visibility Lab.
- AVL-200 — Standardul de dovezi, măsurare și trasabilitate.
- AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility.

## Standarde și referințe externe

Verificate la 22 octombrie 2026.

- IETF RFC 9309 — Robots Exclusion Protocol, §2.3.1.3 și §2.3.1.4: https://www.rfc-editor.org/rfc/rfc9309

Regulile grilei sunt reguli proprii AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.

---

# 14. Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
|---|---|---|---|
| 0.1.0 | 22 octombrie 2026 | Draft pentru revizuire | Primul draft. Definește scopul grilei (transparență, consecvență, imparțialitate), stările diagnosticului preluate din AVL-203 §12.1, cele șase zone de diagnostic, regulile `R-VAL-01`, `R-Z1-*` … `R-Z6-*`, prioritizarea P1–P3 după impact potențial, efort, dependențe și verificabilitate, afirmațiile excluse, aplicarea identică și abaterile declarate, versionarea ca Measurement Rule Version și categoriile de pagini pe tip de entitate. Cerințe `AVL204-REQ-001` … `AVL204-REQ-014`. Identificator AVL-204 alocat din registru și confirmat de Alex Matescu. Aliniat la deciziile din 23 octombrie 2026 pentru AVL-203 0.4.0: zona Z2 trimite la AVL203-REQ-041 (parser conform sau aplicare manuală documentată a RFC 9309), iar pagina de contact sau de date de identitate este obligatorie în plan (AVL203-REQ-042). AVL-202 1.6.0 include AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor. |

---

# 15. Decizii deschise înainte de 1.0.0

1. **Regulile de diagnostic (§6).** Sunt propuneri de lucru. Rămân de confirmat, în special: încadrarea `R-Z1-05` (lanț cu mai mult de un redirect), `R-Z3-03` (lipsa unui sitemap ca problemă posibilă), `R-Z4-06` (lipsa JSON-LD pe pagina canonică despre entitate) și `R-Z4-07` (lipsa `lang`).
2. **Determinarea politicii robots.txt.** Închisă la 23 octombrie 2026: AVL203-REQ-041 acceptă parserul conform și aplicarea manuală documentată a RFC 9309; regulile `R-Z2-01` și `R-Z2-05` pot fi aplicate prin oricare dintre ele.
3. **Prioritizarea (§7).** Pragurile criteriilor și regula claselor P1–P3 se testează pe primele evaluări și se ajustează înainte de 1.0.0.
4. **Categoriile pe tip de entitate (§11).** Lista tipurilor și a categoriilor suplimentare este provizorie. Rămâne de stabilit și dacă absența de pe site a unei pagini cu datele de identitate ale entității (AVL203-REQ-042) primește o regulă de diagnostic proprie.
5. **Formatul politicii de acces declarate.** Trebuie stabilit cum declară entitatea, în plan, politica intenționată pentru fiecare crawler (căutare, antrenare, fetch la cererea utilizatorului).
6. **Locul în corpus.** Închisă la 23 octombrie 2026: AVL-202 1.6.0 menționează AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor. La activare rămân de făcut actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001 §17.

Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.

---

> **Declarație finală**
>
> Un diagnostic este credibil numai dacă oricine poate refolosi regula care l-a produs.
> AVL-204 publică regula înaintea rezultatului.
