---
document_id: "AVL-204"
title: "Grila de interpretare a verificării tehnice"
subtitle: "Technical Diagnostic Interpretation Grid"
level: "C — Methodology"
version: "0.3.1"
status: "Draft pentru revizuire"
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "2026-10-22"
date_published: "2026-10-26T10:33:00+02:00"
date_modified: "2026-10-28"
last_reviewed: "2026-10-26"
canonical: "https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica"
normative_dependencies:
  - "AVL-001 — AI Visibility Lab Foundation"
  - "AVL-202 — Cadrul metodologic AI Visibility Lab"
  - "AVL-200 — Standardul de dovezi, măsurare și trasabilitate"
  - "AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility"
  - "AVL-201 — Tabula Rasa F0: Baseline Measurement Specification (fișa entității, §7)"
informative_dependencies:
  - "AVL-MKT-001 — Market Scope & Eligibility Protocol"
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

Versiunea curentă, **0.3.1**, este un **draft pentru revizuire** și nu este activă. Regulile de diagnostic din §6 și criteriile de prioritizare din §7 sunt propuneri de lucru, revizuite după prima implementare candidată, o rulare de test și prima rulare T0; deciziile rămase deschise înainte de activare sunt enumerate în §15.

> **Exemplu aplicat.** Diagnosticul primei rulări `T0`, pe delamatescu.ro, cu fiecare zonă și raportul pentru client, e documentat în studiul de caz [CS-002](/lab/studii-de-caz/verificare-tehnica-delamatescu-ro).

Identificatorul AVL-204 a fost alocat la 22 octombrie 2026 ca următorul număr liber din seria documentelor Nivelului C, după scanarea registrului de conținut, și confirmat de Alex Matescu.

| Câmp | Valoare |
| --- | --- |
| Document ID | AVL-204 |
| Nivel | C — Methodology |
| Versiune | 0.3.1 |
| Statut | Draft pentru revizuire |
| Autor | Alex Matescu |
| Organizație | AI Visibility Lab |
| Data creării | 22 octombrie 2026 |
| Ultima verificare | 26 octombrie 2026 |
| Limbă | română |
| URL canonic | https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica |
| Dependențe normative | AVL-001; AVL-202; AVL-200; AVL-203; AVL-201 (fișa entității, §7) |
| Dependențe informative | AVL-MKT-001 |
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
3. **imparțialitate** — regulile nu favorizează nicio entitate evaluată: se aplică la fel fiecărui proiect sau client și site-urilor proprii ale laboratorului.

---

# 2. Ce acoperă și ce nu acoperă grila?

**Grila interpretează exclusiv observațiile produse conform AVL-203; nu măsoară vizibilitatea AI și nu înlocuiește un audit SEO complet.**

Grila acoperă: stările diagnosticului, zonele verificate, regulile care leagă observațiile de stări, prioritizarea recomandărilor, afirmațiile excluse și regulile de aplicare identică.

Grila nu acoperă: interogările către sisteme AI, clasificarea răspunsurilor (menționare, citare, recomandare), identitatea entității în surse externe, performanța, securitatea sau investigațiile din afara protocolului minim (AVL-203 §13). Pentru o extensie declarată (AVL-203 §13.1), regulile ei de interpretare se declară separat, înainte de folosire.

Grila se aplică numai entităților evaluate ca proiect sau client al laboratorului, inclusiv site-urilor proprii ale laboratorului, pentru care există o fișă a entității completată de reprezentantul ei (AVL-201 §7). Nu se aplică concurenților unei entități evaluate și nici entităților identificate în Market Discovery (AVL-MKT-001). Același domeniu de aplicare are și protocolul (AVL-203 §1).

> **AVL204-REQ-001 — Grila TREBUIE aplicată numai după executarea verificării de integritate (TC-07) a rulării. Constatările care se sprijină pe artefacte care nu trec verificarea TREBUIE să primească regula `R-VAL-01`; dacă lipsesc sau nu trec verificarea manifestul rulării, lista de checksum-uri ori planul înghețat, rularea TREBUIE declarată invalidă și NU TREBUIE produs niciun diagnostic.**

> **AVL204-REQ-015 — Grila TREBUIE aplicată numai entităților evaluate ca proiect sau client al laboratorului, pentru care există o fișă a entității completată de reprezentantul ei.**

---

# 3. Principii de aplicare

**Diagnosticul este conservator: când o regulă nu poate fi aplicată sigur, rezultatul coboară spre „problemă posibilă” sau „nu poate fi stabilit”, niciodată spre „problemă confirmată”.**

- **Observația înaintea diagnosticului.** Fiecare constatare trimite la observațiile care o susțin; o constatare fără observație-suport nu se raportează.
- **Regula înaintea rezultatului.** Fiecare constatare indică regula din §6 care a produs-o, prin identificatorul ei.
- **Intenția entității contează.** O restricție care corespunde politicii de acces declarate de entitate (§3.1) nu este o problemă.
- **Necunoscutul rămâne vizibil.** O constatare „nu poate fi stabilit” se raportează explicit; nu dispare sub o zonă marcată „nicio problemă observată”.
- **Succesul cere date complete.** O regulă cu starea „nicio problemă observată” se aplică numai când toate observațiile pe care le cere sunt disponibile. O zonă fără constatări nu este o zonă fără probleme: se raportează „neevaluată”, cu motivul.

> **AVL204-REQ-002 — Fiecare constatare TREBUIE să indice zona, starea, identificatorul regulii aplicate și observațiile care o susțin.**

> **AVL204-REQ-003 — Când o regulă nu poate fi aplicată sigur, constatarea NU TREBUIE să primească starea „problemă confirmată”.**

> **AVL204-REQ-004 — O restricție de acces care corespunde politicii declarate de entitate în planul de măsurare NU TREBUIE raportată drept problemă.**

> **AVL204-REQ-016 — O regulă cu starea „nicio problemă observată” NU TREBUIE aplicată când lipsește o observație pe care condiția ei o cere; constatarea TREBUIE atunci să primească starea „nu poate fi stabilit”, iar o zonă fără constatări TREBUIE raportată „neevaluată”.**

## 3.1. Politica de acces declarată

AI Visibility Lab recomandă accesul total pentru toate crawlerele: de căutare, de antrenare și de fetch la cererea utilizatorului. Politica de acces a entității evaluate face parte din fișa entității (AVL-201 §7), sub numele „Politica crawlere”, și este completată de reprezentantul entității. Dacă reprezentantul nu declară o politică diferită, politica înregistrată este accesul total, cu sursa „recomandarea AI Visibility Lab, nemodificată de reprezentant”. O politică diferită se documentează pentru fiecare crawler (sau categorie de crawlere), cu sursa și data declarării, și se copiază în planul de măsurare înaintea rulării (AVL-203 §1.1).

Politica intenționată nu se deduce din `robots.txt` sau din alte observații ale rulării: ea descrie ce vrea entitatea, iar observațiile arată ce livrează serverul.

> **AVL204-REQ-017 — Politica de acces folosită de grilă TREBUIE preluată din fișa entității, completată de reprezentantul ei; în lipsa unei politici diferite declarate, TREBUIE înregistrat accesul total, cu sursa acestei valori; politica NU TREBUIE dedusă din observațiile rulării.**

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

`TC-00` (contextul rulării) și `TC-07` (integritatea) sunt condiții de validitate, nu zone. Constatările care se sprijină pe un artefact care nu trece verificarea checksum-urilor primesc starea „nu poate fi stabilit” (regula `R-VAL-01`). Dacă lipsesc sau nu trec verificarea manifestul rulării, lista de checksum-uri ori planul înghețat, rularea este invalidă și nu se produce diagnostic, ci un raport de invaliditate (AVL204-REQ-001).

Granularitatea regulilor: zonele Z1, Z4, Z5 și Z6 se evaluează pentru fiecare URL din plan, zona Z2 pentru fiecare pereche URL–crawler din matricea Core și pentru crawlerele de antrenare declarate în plan (§6.3), iar zona Z3 pentru origine.

---

# 6. Regulile de diagnostic

**Fiecare regulă leagă o observație AVL-203 de o stare. Regulile se aplică pentru fiecare element din plan, la granularitatea din §5; o regulă care nu se potrivește niciunei observații nu produce constatare.**

Regulile zonelor Z4 și Z5 se aplică numai URL-urilor al căror răspuns final este `2xx`. Pentru un URL care răspunde, după redirecturi, cu `4xx` sau `5xx`, semnalele și textele descriu răspunsul de eroare, nu resursa: constatarea principală este `R-Z1-01`, iar zonele Z4 și Z5 se raportează „neevaluate” pentru acel URL.

## 6.1. Validitate

| Regulă | Condiție | Stare |
|---|---|---|
| `R-VAL-01` | verificarea checksum-urilor eșuează pentru artefactele pe care se sprijină constatarea | nu poate fi stabilit |

## 6.2. Z1 — Răspunsul site-ului și adresa oficială

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z1-01` | URL-ul din plan răspunde, după redirecturi, cu un cod `4xx` sau `5xx`, fără ca acest răspuns să fie declarat intenționat în plan | problemă confirmată |
| `R-Z1-02` | captura eșuează cu eroare TLS sau de certificat | problemă confirmată |
| `R-Z1-03` | variantele `http`/`https` și `www`/fără `www` relevante ajung la destinații finale diferite | problemă confirmată |
| `R-Z1-04` | URL-ul final diferă de URL-ul din plan fără ca redirectul să fie declarat intenționat în plan | problemă posibilă |
| `R-Z1-05` | lanțul de redirecturi are mai mult de două redirecturi până la URL-ul final | problemă posibilă |
| `R-Z1-06` | o variantă `http` răspunde direct `2xx`, fără redirect spre `https` | problemă posibilă |
| `R-Z1-07` | captura eșuează cu eroare de rețea sau DNS o singură dată, iar captura repetată reușește | nu poate fi stabilit |
| `R-Z1-08` | URL-ul răspunde `2xx` cu cel mult două redirecturi, iar toate variantele relevante au fost capturate și converg | nicio problemă observată |
| `R-Z1-09` | captura eșuează cu eroare de rețea, DNS sau timeout și la captura repetată | problemă confirmată (în condițiile testate) |
| `R-Z1-10` | URL-ul răspunde, după redirecturi, cu `4xx` sau `5xx`, iar acest răspuns este declarat intenționat în plan | nicio problemă observată (răspuns declarat) |

## 6.3. Z2 — Regulile pentru crawlere

Regulile `R-Z2-01` și `R-Z2-05` se aplică numai după determinarea politicii robots.txt conform RFC 9309 (selecția grupului, combinarea grupurilor, potrivirea cea mai specifică), printr-un parser conform sau prin aplicare manuală documentată pas cu pas, cum cere AVL203-REQ-041. Constatarea indică metoda folosită. Fără această determinare se aplică `R-Z2-06`.

Pe lângă crawlerele din matricea Core, regulile `R-Z2-01` și `R-Z2-05` se aplică și crawlerelor de antrenare declarate în planul de măsurare (de exemplu `GPTBot`, `ClaudeBot`, `Google-Extended`, `CCBot`), cu politica preluată din fișa entității (§3.1). Crawlerele care accesează pagini la cererea unui utilizator (de exemplu `ChatGPT-User`, `Claude-User`, `Perplexity-User`) se raportează numai ca observație: politica RFC 9309 determinată pentru ele apare în raport, fără stare de diagnostic, pentru că furnizorii lor declară că regulile robots.txt pot să nu li se aplice (AVL-203 §6).

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z2-01` | regula aplicabilă blochează un URL din plan pentru un crawler din matricea Core (AVL-203 §6) sau pentru un crawler de antrenare declarat în plan, contrar politicii de acces declarate | problemă confirmată |
| `R-Z2-02` | `robots.txt` răspunde `5xx`, sau nu poate fi obținut din cauza unei erori de rețea nici la captura repetată | problemă confirmată |
| `R-Z2-03` | `robots.txt` conține linii care seamănă cu o directivă cunoscută scrisă greșit (de exemplu `Dissallow`) | problemă posibilă |
| `R-Z2-04` | `robots.txt` răspunde `4xx`, cu excepția `429` | nicio problemă observată |
| `R-Z2-05` | nicio regulă aplicabilă nu blochează URL-urile din plan pentru crawlerele Core și pentru crawlerele de antrenare declarate în plan, sau blocările corespund politicii declarate | nicio problemă observată |
| `R-Z2-06` | politica aplicabilă nu a putut fi determinată conform RFC 9309 | nu poate fi stabilit |
| `R-Z2-07` | `robots.txt` este redirecționat către alt host și răspunde `2xx` după cel mult cinci redirecturi | nicio problemă observată |
| `R-Z2-08` | `robots.txt` răspunde `429` | problemă posibilă |
| `R-Z2-09` | lanțul de redirecturi al `robots.txt` are mai mult de cinci redirecturi | problemă posibilă |

Justificarea pentru `R-Z2-02` și `R-Z2-04`: RFC 9309 §2.3.1.4 cere crawlerului să considere tot site-ul interzis când `robots.txt` răspunde cu o eroare de server (`5xx`) sau nu poate fi accesat din cauza rețelei; RFC 9309 §2.3.1.3 îi permite să acceseze orice resursă când fișierul răspunde `4xx`. Comportamentul efectiv al fiecărui furnizor nu este verificat de această grilă.

Justificarea pentru `R-Z2-03`, `R-Z2-07`, `R-Z2-08` și `R-Z2-09`: RFC 9309 §2.3.1.5 cere crawlerului să folosească regulile parsabile, deci o linie neinterpretabilă nu invalidează restul fișierului; se semnalează doar liniile care par o directivă scrisă greșit, celelalte rămân observații. RFC 9309 §2.3.1.2 cere urmarea a cel puțin cinci redirecturi consecutive, chiar între autorități diferite, și permite tratarea fișierului ca indisponibil după mai mult de cinci. Codul `429` este un `4xx` în sensul RFC 9309, dar documentația Google exclude `429` din regula după care erorile `4xx` sunt tratate ca absența fișierului, fără să descrie tratamentul lui (verificat la 25 octombrie 2026); de aceea `429` primește o regulă separată.

## 6.4. Z3 — Descoperirea prin sitemap

Regulile folosesc statusurile TC-04 din AVL-203 §7.

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z3-01` | status `UNAVAILABLE` | problemă confirmată |
| `R-Z3-02` | status `FOUND_AT_CONVENTIONAL_PATH` (sitemap existent, dar nedeclarat în `robots.txt`) | problemă posibilă |
| `R-Z3-03` | status `NOT_FOUND` | problemă posibilă |
| `R-Z3-04` | status `UNKNOWN` (inclusiv combinațiile pe care tabelul din AVL-203 §7 le trece la `UNKNOWN`) | nu poate fi stabilit |
| `R-Z3-05` | status `DECLARED` | nicio problemă observată |

## 6.5. Z4 — Semnalele paginilor

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z4-01` | meta robots sau `X-Robots-Tag` conține `noindex` ori `none` pentru un URL pe care politica declarată îl vrea indexat | problemă confirmată |
| `R-Z4-02` | canonicalul declarat trimite la un URL care, capturat, nu răspunde `2xx` după redirecturi | problemă confirmată |
| `R-Z4-03` | un bloc JSON-LD nu este JSON valid sintactic | problemă confirmată |
| `R-Z4-04` | pagina nu are `<title>` sau are un `<title>` gol | problemă confirmată |
| `R-Z4-05` | canonicalul declarat trimite la alt URL decât URL-ul final, fără ca asta să fie declarat intenționat în plan | problemă posibilă |
| `R-Z4-06` | Retrasă în 0.3.0: lipsa oricărui bloc JSON-LD pe pagina canonică despre entitate (AVL-203 §1.1) se raportează numai ca observație TC-05 | — |
| `R-Z4-07` | `<html lang>` lipsește | problemă posibilă |
| `R-Z4-08` | un semnal are valoarea `UNKNOWN` la extracție, sau ținta canonicalului nu a putut fi capturată în limitele planului | nu poate fi stabilit |
| `R-Z4-09` | niciuna dintre condițiile de mai sus nu se aplică, iar toate semnalele și țintele canonicalului au fost evaluate | nicio problemă observată |
| `R-Z4-10` | ținta canonicalului răspunde inițial cu un redirect (`3xx`) și final `2xx` | problemă posibilă |

Aceste reguli descriu semnalele declarate în HTML-ul brut. Ele nu evaluează canonicalul selectat de un motor și nu validează vocabularul Schema.org (AVL203-REQ-016). Ținta canonicalului se capturează ca cerere auxiliară, în limitele declarate în plan (AVL-203 §1.1); statusul inițial și cel final se înregistrează separat.

Retragerea `R-Z4-06` (0.3.0): documentația Google pentru funcțiile AI din Search precizează că nu este nevoie de fișiere noi, fișiere text pentru AI sau markup pentru a apărea în aceste funcții și că nu există date structurate schema.org speciale care trebuie adăugate (pagina „AI features and your website”, actualizată la 10 decembrie 2025, verificată la 26 octombrie 2026). Prezența și validitatea sintactică a blocurilor JSON-LD rămân observații TC-05, iar un bloc invalid rămâne `R-Z4-03`.

## 6.6. Z5 — Conținutul livrat în HTML

Regulile folosesc statusurile TC-08 din AVL-203 §8.1, pentru fiecare text-cheie declarat în plan.

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z5-01` | un text-cheie are statusul `ABSENT_FROM_RAW_HTML` | problemă confirmată (în HTML-ul brut) |
| `R-Z5-02` | un text-cheie are statusul `PRESENT_IN_METADATA_ONLY` | problemă posibilă |
| `R-Z5-03` | un text-cheie are statusul `UNKNOWN` | nu poate fi stabilit |
| `R-Z5-04` | toate textele-cheie au statusul `PRESENT_IN_BODY` | nicio problemă observată |
| `R-Z5-05` | un text-cheie are statusul `PRESENT_IN_SCRIPT_OR_HIDDEN_ONLY` | problemă posibilă |

Problema confirmată de `R-Z5-01` este absența textului din HTML-ul brut. Efectul asupra unui crawler anume rămâne o problemă posibilă și se formulează ca atare (AVL203-REQ-032).

## 6.7. Z6 — Răspunsurile pentru crawlere declarate

| Regulă | Condiție | Stare |
|---|---|---|
| `R-Z6-01` | pentru un User-Agent declarat, statusul HTTP sau URL-ul final diferă nefavorabil de cele ale clientului de referință (status final care nu e `2xx` când referința e `2xx`, sau alt URL final), contrar politicii declarate | problemă confirmată (răspuns diferit pentru User-Agent-ul declarat) |
| `R-Z6-02` | pentru un User-Agent declarat, headerele relevante diferă nefavorabil (de exemplu `X-Robots-Tag` adaugă `noindex` sau `none`, ori `Content-Type` nu mai indică HTML), contrar politicii declarate | problemă confirmată (răspuns diferit pentru User-Agent-ul declarat) |
| `R-Z6-03` | dimensiunea sau hash-ul diferă, iar capturile clientului de referință nu au arătat variabilitate intrinsecă | problemă posibilă |
| `R-Z6-04` | capturile clientului de referință arată variabilitate intrinsecă: comparația de conținut | nu poate fi stabilit |
| `R-Z6-05` | status, URL final și headere relevante identice pentru toți User-Agent-ii declarați, iar conținutul identic sau neevaluabil conform `R-Z6-04` | nicio problemă observată (pentru status, URL și headere) |
| `R-Z6-06` | pentru un User-Agent declarat, statusul, URL-ul final sau headerele relevante diferă, dar nu nefavorabil în sensul `R-Z6-01` / `R-Z6-02` | problemă posibilă |
| `R-Z6-07` | capturile clientului de referință diferă între ele la status, URL final sau headere relevante: comparația acestor câmpuri | nu poate fi stabilit |
| `R-Z6-08` | răspunsul diferit pentru un User-Agent declarat corespunde politicii declarate (crawler blocat intenționat) | nicio problemă observată (restricție declarată) |

`R-Z6-01` și `R-Z6-02` confirmă că serverul răspunde diferit la un User-Agent declarat. Nu confirmă că infrastructura furnizorului este blocată și nici cloaking (AVL203-REQ-012, AVL203-REQ-021). Lista headerelor relevante se fixează în configurația implementării și se înregistrează în manifestul rulării; headerele care variază de la un request la altul (de exemplu `Date`, identificatorii de request) nu intră în comparație.

> **AVL204-REQ-007 — Diagnosticul TREBUIE produs prin regulile din §6, iar fiecare constatare TREBUIE să citeze identificatorul regulii aplicate.**

> **AVL204-REQ-008 — Regulile zonei Z2 care depind de politica aplicabilă (`R-Z2-01`, `R-Z2-05`) TREBUIE aplicate numai după determinarea politicii robots.txt conform RFC 9309, prin parser conform sau aplicare manuală documentată (AVL203-REQ-041); altfel TREBUIE aplicată regula `R-Z2-06`.**

> **AVL204-REQ-018 — Regulile `R-Z2-01` și `R-Z2-05` TREBUIE aplicate crawlerelor din matricea Core și crawlerelor de antrenare declarate în plan; crawlerele de fetch la cererea utilizatorului declarate în plan NU TREBUIE să primească stare de diagnostic în zona Z2, iar politica lor determinată conform RFC 9309 TREBUIE raportată ca observație.**

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

Constatările „nu poate fi stabilit” nu primesc o clasă de prioritate; pentru ele, recomandarea este o verificare suplimentară (de exemplu o captură repetată sau o extensie declarată). În aceeași clasă, recomandările se ordonează după efort crescător și dependențe. Verificabilitatea se înregistrează pentru fiecare recomandare, dar nu intră în calculul clasei. Ordinea de execuție dată de dependențe nu schimbă clasa de prioritate.

Efortul este o estimare a celui care redactează raportul; entitatea evaluată îl poate corecta. Un efort sau o dependență necunoscute rămân declarate ca necunoscute.

> **AVL204-REQ-009 — Fiecare recomandare pentru o problemă confirmată sau posibilă TREBUIE să primească o clasă de prioritate după regulile din §7, iar estimarea efortului TREBUIE declarată ca estimare; recomandările de verificare suplimentară pentru constatările „nu poate fi stabilit” NU TREBUIE să primească o clasă.**

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

**Aceeași versiune a grilei se aplică identic oricărei entități evaluate de laborator, fără excepții nedeclarate.**

Fiecare proiect sau client primește aceleași reguli și aceleași criterii de prioritizare ca oricare alt proiect evaluat cu aceeași versiune a grilei. Grila se aplică la fel și site-urilor proprii ale laboratorului.

O situație pe care regulile nu o acoperă sau o acoperă greșit nu se rezolvă printr-o excepție tăcută. Se declară în raport ca **abatere de la grilă**, cu regula vizată, motivul și starea atribuită, iar cazul intră în revizuirea următoarei versiuni.

> **AVL204-REQ-011 — O versiune a grilei TREBUIE aplicată identic tuturor entităților evaluate cu ea, inclusiv site-urilor proprii ale laboratorului.**

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

| Tip de entitate | Categorii suplimentare recomandate |
|---|---|
| Organizație cu servicii | paginile de servicii principale; o pagină de portofoliu sau studii de caz, dacă există |
| Magazin online | pagina categoriei principale; o pagină de produs reprezentativă; paginile de livrare și retur |
| Afacere locală | pagina sau paginile de locație; pagina cu programul de lucru, dacă este distinctă de pagina de contact |
| Profesionist independent | pagina de profil sau CV; pagina de publicații ori proiecte, dacă există |

Un tip de entitate care nu se încadrează în tabel se declară în plan, împreună cu categoriile alese și motivul lor.

Categoriile suplimentare sunt recomandate, nu obligatorii: lipsa lor din plan se semnalează doar ca avertisment la validarea planului. Absența de pe site a paginii cu datele de identitate (AVL203-REQ-042) se înregistrează în plan și se raportează ca observație, fără regulă de diagnostic proprie.

---

# 12. Checklist de conformitate

- [ ] **AVL204-REQ-001** — Grila TREBUIE aplicată numai după verificarea integrității; artefactele compromise → `R-VAL-01`; manifest, checksum-uri sau plan compromise → rulare invalidă, fără diagnostic.
- [ ] **AVL204-REQ-002** — Fiecare constatare TREBUIE să indice zona, starea, regula aplicată și observațiile-suport.
- [ ] **AVL204-REQ-003** — O regulă care nu poate fi aplicată sigur NU TREBUIE să producă „problemă confirmată”.
- [ ] **AVL204-REQ-004** — O restricție conformă cu politica declarată de entitate NU TREBUIE raportată drept problemă.
- [ ] **AVL204-REQ-005** — Starea zonei TREBUIE să fie cea mai severă; constatările „nu poate fi stabilit” TREBUIE raportate separat.
- [ ] **AVL204-REQ-006** — „Nicio problemă observată” NU TREBUIE prezentată drept certificare sau garanție.
- [ ] **AVL204-REQ-007** — Diagnosticul TREBUIE produs prin regulile din §6, cu identificatorul regulii citat.
- [ ] **AVL204-REQ-008** — Regulile Z2 care depind de politica aplicabilă TREBUIE aplicate numai după determinarea ei conform RFC 9309 (parser sau aplicare manuală documentată); altfel `R-Z2-06`.
- [ ] **AVL204-REQ-009** — Fiecare recomandare pentru o problemă TREBUIE să primească o clasă de prioritate, cu efortul declarat ca estimare; verificările suplimentare nu primesc clasă.
- [ ] **AVL204-REQ-010** — Diagnosticul și recomandările NU TREBUIE să conțină formulările excluse.
- [ ] **AVL204-REQ-011** — O versiune a grilei TREBUIE aplicată identic tuturor entităților evaluate cu ea.
- [ ] **AVL204-REQ-012** — Orice abatere de la grilă TREBUIE declarată în raport.
- [ ] **AVL204-REQ-013** — O modificare care poate schimba un diagnostic sau o prioritate TREBUIE să producă o versiune nouă.
- [ ] **AVL204-REQ-014** — Comparația dintre rulări TREBUIE să folosească aceeași versiune a grilei sau să declare diferențele.
- [ ] **AVL204-REQ-015** — Grila TREBUIE aplicată numai entităților evaluate ca proiect sau client, cu fișa entității completată de reprezentant.
- [ ] **AVL204-REQ-016** — Regulile de succes NU TREBUIE aplicate pe date incomplete; o zonă fără constatări TREBUIE raportată „neevaluată”.
- [ ] **AVL204-REQ-017** — Politica de acces TREBUIE preluată din fișa entității; implicit, accesul total, cu sursa declarată; nu se deduce din observații.
- [ ] **AVL204-REQ-018** — Regulile `R-Z2-01`/`R-Z2-05` TREBUIE aplicate crawlerelor Core și crawlerelor de antrenare declarate în plan; crawlerele de fetch la cererea utilizatorului se raportează numai ca observație.

---

# 13. Documente asociate

## Normative

- AVL-001 — AI Visibility Lab Foundation.
- AVL-202 — Cadrul metodologic AI Visibility Lab.
- AVL-200 — Standardul de dovezi, măsurare și trasabilitate.
- AVL-203 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility.
- AVL-201 — Tabula Rasa F0: Baseline Measurement Specification (fișa entității, §7).

## Informative

- AVL-MKT-001 — Market Scope & Eligibility Protocol (entitățile din Market Discovery nu intră în domeniul grilei).

## Exemplu aplicat

- [CS-002 — Verificarea AVL-203 a delamatescu.ro, punctul T0](/lab/studii-de-caz/verificare-tehnica-delamatescu-ro): prima aplicare a grilei 0.3.0 pe o rulare `T0` reală (delamatescu.ro, 26 octombrie 2026): 109 constatări pe cele șase zone, recomandarea de tip verificare suplimentară, raportul tehnic și raportul pe zone pentru client. Studiul de caz ilustrează aplicarea grilei; nu face parte din normă și nu modifică regulile.

## Standarde și referințe externe

Verificate la 25 octombrie 2026.

- IETF RFC 9309 — Robots Exclusion Protocol, §2.3.1.2–§2.3.1.5: https://www.rfc-editor.org/rfc/rfc9309
- Google — How Google interprets the robots.txt specification (codurile HTTP pentru robots.txt, inclusiv excepția `429`): https://developers.google.com/crawling/docs/robots-txt/robots-txt-spec
- Google — How HTTP status codes affect Google's crawlers: https://developers.google.com/crawling/docs/troubleshooting/http-status-codes

Regulile grilei sunt reguli proprii AI Visibility Lab și nu trebuie prezentate drept standard industrial oficial.

---

# 14. Istoricul versiunilor

| Versiune | Dată | Statut | Modificări |
|---|---|---|---|
| 0.1.0 | 22 octombrie 2026 | Draft pentru revizuire | Primul draft. Definește scopul grilei (transparență, consecvență, imparțialitate), stările diagnosticului preluate din AVL-203 §12.1, cele șase zone de diagnostic, regulile `R-VAL-01`, `R-Z1-*` … `R-Z6-*`, prioritizarea P1–P3 după impact potențial, efort, dependențe și verificabilitate, afirmațiile excluse, aplicarea identică și abaterile declarate, versionarea ca Measurement Rule Version și categoriile de pagini pe tip de entitate. Cerințe `AVL204-REQ-001` … `AVL204-REQ-014`. Identificator AVL-204 alocat din registru și confirmat de Alex Matescu. Aliniat la deciziile din 23 octombrie 2026 pentru AVL-203 0.4.0: zona Z2 trimite la AVL203-REQ-041 (parser conform sau aplicare manuală documentată a RFC 9309), iar pagina de contact sau de date de identitate este obligatorie în plan (AVL203-REQ-042). AVL-202 1.6.0 include AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor. |
| 0.2.0 | 25 octombrie 2026 | Draft pentru revizuire | MINOR: revizie după prima implementare candidată (v0.3.0) și o rulare de test, cu propunerile P-01…P-11 aprobate de Alex Matescu la 25 octombrie 2026. Domeniul de aplicare: grila se aplică numai entităților evaluate ca proiect sau client, cu fișa entității completată de reprezentant, nu concurenților și nici entităților din Market Discovery (§2, `AVL204-REQ-015`); §1 și §9 reformulate în consecință, `AVL204-REQ-011` reformulată. `AVL204-REQ-001` precizează granularitatea integrității (artefact → `R-VAL-01`; manifest, checksum-uri sau plan → rulare invalidă). §3.1 nouă: politica de acces vine din fișa entității („Politica crawlere”), recomandarea laboratorului este accesul total, politica nu se deduce din observații (`AVL204-REQ-017`; decizia deschisă 5 închisă). Regulile de succes cer date complete, iar o zonă fără constatări e „neevaluată” (`AVL204-REQ-016`). Zonele Z4 și Z5 nu se evaluează pentru URL-urile cu răspuns final `4xx`/`5xx`. Reguli noi sau modificate: `R-VAL-01`; `R-Z1-01` (răspuns declarat intenționat), `R-Z1-07`, `R-Z1-08`, `R-Z1-09` (eroare de rețea repetată), `R-Z1-10`; `R-Z2-02`, `R-Z2-03` (doar directive scrise greșit), `R-Z2-04` (fără `429`), `R-Z2-07` (redirect cross-host permis de RFC 9309), `R-Z2-08` (`429`), `R-Z2-09` (peste cinci redirecturi); `R-Z3-04`; `R-Z4-02`, `R-Z4-08`, `R-Z4-09`, `R-Z4-10` (canonical cu redirect); `R-Z5-05` (text doar în scripturi sau zone ascunse, statusul nou din AVL-203 0.5.0); `R-Z6-01`/`R-Z6-02` (doar diferențe nefavorabile, contrar politicii declarate), `R-Z6-06`, `R-Z6-07` (variabilitatea referinței la status și headere), `R-Z6-08` (restricție declarată). `AVL204-REQ-009`: verificările suplimentare nu primesc clasă de prioritate. AVL-201 adăugat ca dependență normativă, AVL-MKT-001 ca dependență informativă. Sursele externe reverificate la 25 octombrie 2026 (RFC 9309; Google, codurile HTTP pentru robots.txt). |
| 0.3.0 | 26 octombrie 2026 | Draft pentru revizuire | MINOR: deciziile Alex Matescu din 26 octombrie 2026, după prima rulare T0 pe un site propriu. `R-Z1-05` devine problemă posibilă numai peste două redirecturi, iar `R-Z1-08` acceptă cel mult două. `R-Z4-06` retrasă: lipsa JSON-LD pe pagina despre entitate rămâne observație TC-05, conform documentației Google pentru funcțiile AI. Zona Z2 se aplică și crawlerelor de antrenare declarate în plan; crawlerele de fetch la cererea utilizatorului se raportează numai ca observație (`AVL204-REQ-018`, nouă). §11: categoriile suplimentare sunt recomandate, iar absența paginii de identitate rămâne observație. `R-Z3-03`, `R-Z4-07`, `R-Z2-08`, `R-Z2-09` și `R-Z4-10` confirmate ca „problemă posibilă”. Decizii deschise 1 (parțial), 4 și 7 (nouă) închise. Sursă externă verificată la 26 octombrie 2026: Google, „AI features and your website”. |
| 0.3.1 | 28 octombrie 2026 | Draft pentru revizuire | PATCH: §13 — subsecțiune nouă „Exemplu aplicat”, cu trimitere la studiul de caz CS-002 (prima rulare `T0`, delamatescu.ro); trimitere la același exemplu în „Controlul documentului”. Fără modificări ale regulilor. |

---

# 15. Decizii deschise înainte de 1.0.0

1. **Regulile de diagnostic (§6).** Încadrările semnalate în 0.2.0 au fost decise la 26 octombrie 2026 (decizie Alex Matescu): `R-Z1-05` devine problemă posibilă numai peste două redirecturi, iar `R-Z1-08` acceptă cel mult două; `R-Z4-06` este retrasă (lipsa JSON-LD rămâne observație); `R-Z3-03`, `R-Z4-07`, `R-Z2-08`, `R-Z2-09` și `R-Z4-10` își păstrează starea „problemă posibilă”. Setul complet al regulilor se confirmă la activare, odată cu validarea implementării de referință (AVL-203 §19.4).
2. **Determinarea politicii robots.txt.** Închisă la 23 octombrie 2026: AVL203-REQ-041 acceptă parserul conform și aplicarea manuală documentată a RFC 9309; regulile `R-Z2-01` și `R-Z2-05` pot fi aplicate prin oricare dintre ele.
3. **Prioritizarea (§7).** Pragurile criteriilor și regula claselor P1–P3 se testează pe primele evaluări și se ajustează înainte de 1.0.0.
4. **Categoriile pe tip de entitate (§11).** Închisă la 26 octombrie 2026 (decizie Alex Matescu): categoriile suplimentare sunt recomandate, nu obligatorii; absența paginii cu datele de identitate rămâne observație, fără regulă de diagnostic proprie.
5. **Formatul politicii de acces declarate.** Închisă la 25 octombrie 2026 (decizie Alex Matescu): politica face parte din fișa entității („Politica crawlere”), completată de reprezentant; recomandarea laboratorului este accesul total pentru toate crawlerele; o politică diferită se documentează pentru fiecare crawler sau categorie (§3.1).
6. **Locul în corpus.** Închisă la 23 octombrie 2026: AVL-202 1.6.0 menționează AVL-204 în arhitectura metodologiei, în ordinea de lectură și în lista documentelor. La activare rămân de făcut actualizarea statutului în AVL-202 și includerea în lista Nivelului C din AVL-001 §17.
7. **Crawlerele din afara matricei Core.** Închisă la 26 octombrie 2026 (decizie Alex Matescu): crawlerele de antrenare declarate în plan primesc regulile `R-Z2-01`/`R-Z2-05`; crawlerele de fetch la cererea utilizatorului se raportează numai ca observație (§6.3, `AVL204-REQ-018`).

Aceste puncte nu trebuie tratate ca închise până la o decizie explicită, documentată în istoricul versiunilor.

---

> **Declarație finală**
>
> Un diagnostic este credibil numai dacă oricine poate refolosi regula care l-a produs.
> AVL-204 publică regula înaintea rezultatului.
