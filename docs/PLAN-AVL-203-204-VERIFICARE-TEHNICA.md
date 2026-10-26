# Plan de lucru — instrumentul de verificare tehnică AVL-203 / AVL-204

Document de lucru intern, sub controlul versiunilor. Ține evidența punctului de plecare, a ce s-a făcut, a ce s-a actualizat, a ce s-a exclus și a ce mai e de făcut pentru stratul tehnic al auditului AI Visibility.

> **Plan încheiat la 26 octombrie 2026.** Toate fazele sunt făcute, iar lucrul a intrat în `main` (merge `1a1852f`). De aici încolo, documentul se folosește doar pentru §6, lista unică a deciziilor deschise până la versiunea 1.0.0, și pentru jurnal. Branch-ul de lucru a fost închis.

| Câmp | Valoare |
| --- | --- |
| Creat | 23 octombrie 2026 |
| Ultima actualizare | 26 octombrie 2026 |
| Branch | `avl-203-0.4.0-avl-204`, integrat în `main` la 26 octombrie 2026 și închis |
| Documente vizate | AVL-203 v0.5.0 (draft), AVL-204 v0.2.0 (draft, publicat la 26 octombrie 2026), AVL-202 v1.7.0 (activ), AVL-201 v1.5.0 (activ) |
| Implementare | skill `verificare-tehnica-avl203`, v0.4.0 (implementare candidată, 150 de teste) |
| Stare | Fazele 0–5 încheiate; merge în `main` făcut (`1a1852f`), deploy-ul îl face Alex; urmează T0 pe delamatescu.ro și deciziile din §6 |

Regula de actualizare: la fiecare pas încheiat se adaugă o intrare în jurnal (§7), se mută punctul din „de făcut” în „făcut” și se actualizează „Ultima actualizare” și „Stare”. Nu se rescrie istoria: deciziile schimbate se consemnează ca decizii noi.

---

## 1. De unde am pornit

### 1.1. Contextul

AVL-203 documentează ce livrează un server în condiții declarate (TC-00…TC-08). AVL-204 definește regulile publice prin care acele observații devin diagnostic și recomandări. Împreună sunt stratul tehnic al auditului AI Visibility (`/lab/audit-ai-visibility`, `src/data/lab-content/audit-ai-visibility.ts`), care promite recomandări cu observație-suport, grad de certitudine (confirmat / posibil / nu poate fi stabilit), element de intervenție și verificare ulterioară. Livrabilul către client este un PDF prezentat de Alex Matescu, nepublicat; grila este publică pentru transparență și imparțialitate.

### 1.2. Starea la 22 octombrie 2026

- AVL-203 v0.3.1 publicat ca draft; v0.4.0 scris doar ca sursă `.md` (commit `c04a738`).
- AVL-204 v0.1.0 scris doar ca sursă `.md`, nepublicat.
- Trei decizii așteptau răspunsul lui Alex: robots.txt fără parser, regulile de judecată din AVL-204, AVL-202 1.6.0.

### 1.3. Inventarul implementării existente (verificat la 23 octombrie 2026)

| Element | Stare |
| --- | --- |
| `.claude/skills/verificare-tehnica-avl203/SKILL.md` | există |
| `scripts/run_avl203.sh` (191 linii) | captura cu `curl` |
| `scripts/analyze_avl203.py` (400 linii) | analiza observațiilor; raportează `NEDETERMINAT` pentru politica robots la toți agenții |
| `config/user-agents.v0.1.0.tsv` | manifestul User-Agent v0.1.0 |
| Teste | **nu există** |
| Scheme Evidence Index / plan | **nu există** |
| Motor de diagnostic AVL-204 | **nu există** |
| CLI cu subcomenzi (plan / capture / verify / analyze / diagnose / report) | **nu există** |
| Acoperire TC-08, compoziția planului (§1.1), aplicarea manuală RFC 9309, REQ-042 | **nu există** |

### 1.4. Promptul de implementare primit

La 23 octombrie 2026, Alex a adus un prompt extins (textul integral în Anexa A) care cere implementarea completă a instrumentului operațional într-o singură sarcină. Alex a cerut explicit **să nu se implementeze nimic**, ci să se analizeze promptul și să se propună acțiunile în ordine, cu argumente, pentru decizii ulterioare.

---

## 2. Ce am făcut

### 2.1. Decizii Alex Matescu, 23 octombrie 2026

1. **AVL203-REQ-013 retrasă**, după precedentul AVL200-REQ-014 (text păstrat ca evidență, identificator nereutilizat). Cerință nouă **AVL203-REQ-041**: politica robots.txt se determină după RFC 9309 prin parser conform **sau** prin aplicare manuală documentată pas cu pas pentru fiecare pereche URL–crawler, cu metoda înregistrată; altfel `NEDETERMINAT`.
2. **Pagina de contact sau o altă pagină cu datele de identitate ale entității devine obligatorie** în planul de măsurare, fără `NOT_APPLICABLE`; absența de pe site se înregistrează și se raportează (**AVL203-REQ-042**).
3. **AVL-202 trece la 1.6.0** (MINOR): AVL-204 inclus în corpus.

### 2.2. Ce s-a actualizat în repository

| Fișier | Modificare |
| --- | --- |
| `src/content/lab/AVL/AVL-203_Protocol_minim_verificare_tehnica_site.md` | REQ-013 retrasă, REQ-041 și REQ-042 noi; §6 descrie aplicarea manuală documentată; checklist, istoric 0.4.0 și deciziile deschise 5 și 8 actualizate |
| `src/content/lab/AVL/AVL-204_Grila_interpretare_verificare_tehnica.md` | Z2 trimite la REQ-041; condiția de determinare a politicii restrânsă la `R-Z2-01` și `R-Z2-05`; §11 aliniat la REQ-042; canonical definitiv; deciziile 2 și 6 închise, decizia 4 completată |
| `src/content/lab/AVL/AVL-202_Cadrul-metodologic-AI-Visibility-Lab.md` | 1.6.0: AVL-204 în identificatori, ordinea de înregistrare și de lectură, arhitectură, hub, documente asociate, card propriu; AVL-203 la v0.4.0 |
| `src/data/lab-content/avl-202.ts`, `avl-203.ts` | conversie HTML aliniată la sursele `.md` |
| `src/data/lab-content/avl-204.ts` | nou |
| `src/pages/Lab.tsx`, `src/data/lab.ts`, `public/sitemap.xml` | ruta `/lab/metodologie/grila-interpretare-verificare-tehnica` legată pe site |
| `docs/REGISTRU-CONTINUT.md`, `docs/registru-continut.json` | regenerate: AVL-204 intrare nouă, AVL-203 0.4.0, AVL-202 1.6.0, 0 anomalii noi |

Verificări: `tsc` trece; `build` trece; lint fără erori în fișierele atinse (119 erori preexistente în alte fișiere); ambele rute răspund 200 local, cu titlu, canonical și tabel de identitate corecte.

### 2.3. Precizări semnalate lui Alex

- Restrângerea condiției Z2 la `R-Z2-01` și `R-Z2-05` (în loc de `R-Z2-01…03`) este o corecție de regulă într-un draft nepublicat: `R-Z2-02`/`R-Z2-03` nu depind de politică, iar `R-Z2-05` depinde și lipsea.
- Regulile `R-Z*` și pragurile P1–P3 **nu** au fost confirmate explicit; deciziile deschise 1 și 3 din AVL-204 §15 rămân deschise.

---

## 3. Analiza promptului de implementare

### 3.1. Ce e valoros

Punctele A–J din prompt identifică lacune reale ale AVL-204 v0.1.0, de exemplu:

- o regulă de succes (`R-Z1-08`, `R-Z2-05`, `R-Z4-09`) se poate declanșa pe un set de date incomplet (J);
- TC-04 nu acoperă cazurile fără declarație cu 401/403/429 sau redirect neterminat (C);
- TC-08 nu are o stare pentru textul aflat numai în payload de hidratare sau în comentarii (D);
- AVL204-REQ-009 („fiecare recomandare”) intră în tensiune cu §7 (constatările „nu poate fi stabilit” nu primesc clasă) (F);
- R-Z4-02 cere capturarea canonicalului, care poate ieși din limitele planului (I).

Promptul cere corect: să nu se activeze nicio versiune 1.0.0, să nu se închidă tacit decizii, să se țină propunerile normative separat și să se folosească formula „implementare candidată”.

### 3.2. Ce trebuie corectat sau reîncadrat

1. **Prea mult într-o singură sarcină.** Cod, scheme, teste, matrice de conformitate, raport TEST, documentație și pagina auditului, cu instrucțiunea „nu te opri la un plan”. Riscul: un livrabil mare, greu de verificat, în care alegerile de implementare devin reguli de facto. Se împarte în faze cu puncte de decizie.
2. **Amestecă trei tipuri de lucru** cu workflow-uri diferite: cod (skill-ul `verificare-tehnica-avl203`), propuneri normative (document separat) și documente publice (`publica-document-metodologic`).
3. **Pornește de la o stare depășită.** Diferența repo ↔ site (AVL-202 1.5.0 și AVL-203 0.3.1 servite public) se datora modificărilor necomise și nedeployate. Sincronizarea documentelor (punctul 9 din prompt) era deja făcută aproape integral; rămâne pagina auditului, care citează AVL-203, dar nu AVL-204.
4. **Exporturile atașate** („Pasted markdown…”) sunt copii egale sau mai vechi decât sursele din repository. Sursa de adevăr este `src/content/lab/AVL/`.
5. **Afirmații despre furnizori** (de exemplu tratamentul codului 429 de către Google) trebuie verificate live înainte de a intra în cod sau în reguli, nu preluate din prompt.
6. **„Compatibil cu stack-ul proiectului”** poate împinge spre un CLI nou în TypeScript, deci spre un al doilea sistem, interzis chiar de prompt. Recomandarea este extinderea implementării Python existente.

---

## 4. Planul de acțiuni, în ordine

Fiecare fază se încheie cu un punct de decizie al lui Alex înainte de faza următoare.

### Faza 0 — Închiderea lucrului deschis

- [x] **0.1. Commit și push pentru AVL-203 0.4.0, AVL-204 0.1.0, AVL-202 1.6.0** pe branch-ul `avl-203-0.4.0-avl-204` (23 octombrie 2026).
  *Argument:* codul trebuie să implementeze o versiune publicată și datată; altfel matricea de conformitate trimite la un text pe care nu îl vede nimeni.
- [x] **0.2. Merge în `main` și deploy** (merge `1a1852f`, 26 octombrie 2026; deploy-ul îl face Alex, manual).
  *Argument:* elimină diferența repo ↔ site semnalată de prompt.

### Faza 1 — Registrul ambiguităților (document, fără cod)

- [x] **1.1. Document intern de clasificare a punctelor A–J** (`docs/avl-203-204-registru-implementare.md`, 25 octombrie 2026; plus punctele K–M găsite la citire), fiecare punct încadrat ca:
  - **regulă exactă din draft** — se implementează ca atare;
  - **alegere operațională** — fixată de noi, versionată în configurația scriptului, nu schimbă diagnosticul (lista headerelor comparate la TC-06, normalizarea TC-08, timeouts, limita de redirecturi);
  - **propunere normativă** — ar schimba diagnosticul, rămâne neactivă până la decizia lui Alex (tabela completă TC-04, tratamentul 429, `R-Z2-03` pentru redirect permis de RFC, calificarea Z6, `priority=null`).

  *Argument:* cel mai mare câștig la cel mai mic cost. Fără el, codul decide tacit ce înseamnă regulile. Produce lista exactă de decizii pentru AVL-204 0.2.0.
- [x] **1.2. Verificarea live a surselor externe** (25 octombrie 2026; registru §2) invocate în A–J: RFC 9309 (redirect, 4xx/5xx, linii necunoscute), documentația Google despre 429.
  *Argument:* regula research-first a skill-urilor laboratorului; o regulă AVL nu se sprijină pe o afirmație nevalidată despre un furnizor.

### Faza 2 — Fundația tehnică (cod, fără diagnostic)

- [x] **2.1. Modelul de date și planul înghețat.** (25 octombrie 2026: `scripts/avl203/plan.py`, `config/plan-template.json`) Schema planului (categorii, absențe, texte-cheie, politica intenționată per URL/crawler, versiuni, extensii); `plan validate` și `freeze` cu hash; configurație inițială imuabilă, jurnal de execuție și manifest final distincte.
  *Argument:* REQ-001, REQ-029/030/031 și REQ-042 cer planul fixat înainte de primul request; azi nimic nu garantează asta. Planul face posibilă și regula „restricție intenționată ≠ problemă” (AVL204-REQ-004).
- [x] **2.2. Extinderea capturii existente** (25 octombrie 2026: `scripts/avl203/capture.py`, tot cu `curl`; `run_avl203.sh` v0.2 rămâne pentru reproducerea rulărilor vechi), nu un sistem nou: limite de host pentru redirecturi, cereri auxiliare predeclarate (canonical), dubla captură de referință, stderr, exit code, dimensiunea decomprimată separat de `size_download`.
  *Argument:* punctele I și J din prompt, REQ-008 și REQ-019.
- [x] **2.3. Integritate și Evidence Index (TC-07):** (25 octombrie 2026: `scripts/avl203/integrity.py`) verificare per artefact, fișiere lipsă sau neacoperite, raport de invaliditate.
  *Argument:* AVL204-REQ-001 și R-VAL-01 (punctul A). Fără integritate verificată, grila nu are voie să ruleze; tot restul depinde de acest pas.
- [x] **2.4. Fixture-uri HTTP locale și primele teste** (25 octombrie 2026: `tests/`, 45 de teste `unittest`), pe localhost, cu permisiune separată de țintele publice.
  *Argument:* nu există niciun test; fiecare fază următoare are nevoie de cazuri reproductibile.

### Faza 3 — Observațiile care lipsesc

- [x] **3.1. Parser robots.txt conform RFC 9309, cu teste** (25 octombrie 2026: `scripts/avl203/robots.py`, `--robots-manual` pentru aplicarea manuală) (grupuri, combinare, fallback `*`, potrivirea cea mai lungă, Allow la egalitate, percent-encoding) și **import pentru aplicarea manuală documentată** (REQ-041).
  *Argument:* singura cale spre o zonă Z2 care nu iese mereu „nu poate fi stabilit”. `urllib.robotparser` din Python nu este conform RFC 9309 (nu aplică potrivirea cea mai lungă), deci parserul trebuie scris și testat.
- [x] **3.2. TC-08:** (25 octombrie 2026: `scripts/avl203/content.py`) zone, normalizare, maparea la linia originală, tratamentul textului aflat doar în payload de hidratare.
  *Argument:* verificarea nouă din 0.4.0 și cea mai utilă pentru clienți (site-uri care afișează conținutul doar prin JavaScript); scriptul v0.2.0 nu o are.
- [x] **3.3. TC-05 cu parser HTML robust și TC-04 complet** (25 octombrie 2026: `signals.py`, `analyze.py`; comanda `analyze`), cu fiecare sitemap păstrat separat.
  *Argument:* extracția actuală e fragilă; punctul C cere să nu se mascheze un sitemap eșuat.

### Faza 4 — Diagnosticul și raportul

- [x] **4.1. Motorul de reguli AVL-204:** (25 octombrie 2026: `diagnose.py`; fiecare regulă testată pe cele trei cazuri în `tests/test_diagnose.py`) reguli declarate ca date (`rule_id`, `rule_version`), aplicate determinist, fiecare testată pe trei cazuri (se declanșează / nu se declanșează / date insuficiente). Ambiguitățile primesc varianta conservatoare și abatere declarată (AVL204-REQ-003, REQ-012).
  *Argument:* sensul grilei este reproductibilitatea și imposibilitatea ajustării după rezultat; o interpretare generată la fiecare rulare ar încălca exact asta.
- [x] **4.2. Recomandări și raport Markdown în română, cu export JSON.** (25 octombrie 2026: `recommend.py`, `report.py`)
  *Argument:* livrabilul auditului; din el se construiește PDF-ul pentru client.
- [x] **4.3. Matricea de conformitate:** (25 octombrie 2026: `.claude/skills/verificare-tehnica-avl203/CONFORMANCE.md`) AVL203-REQ-001…042 (013 marcat RETIRED, 41 active), AVL204-REQ-001…014 și cerințele AVL-200 aplicabile, cu status real (acoperit / parțial / manual / neaplicabil justificat / blocat).
  *Argument:* arată onest ce e acoperit; fără ea, „implementare candidată” e o afirmație neverificabilă.

### Faza 5 — Prima rulare reală și documentele

- [x] **5.1. Rulare `TEST` pe delamatescu.ro** (25 octombrie 2026, `AVL203-delamatescu-ro-TEST-20261025T170200Z`, în `evidence/work/avl203/`, necomisă), cu plan mic înghețat înainte de captură.
  *Argument:* confirmă pipeline-ul cap-coadă pe un server real; rezultatul e intern și nu susține concluzii publicate (REQ-026).
- [x] **5.2. AVL-204 0.2.0 (și eventual AVL-203 0.5.0)** (25 octombrie 2026, plus AVL-201 1.5.0 și AVL-202 1.7.0) cu propunerile aprobate din 1.1, prin `publica-document-metodologic`.
  *Argument:* revizia are dovezi în spate abia după ce codul și rularea TEST arată unde regulile sunt incomplete.
- [x] **5.3. Pagina auditului:** (25 octombrie 2026: trimiteri la AVL-204 în §1 „Accesibilitatea tehnică”, §6 „Diagnostic” și în lista de surse) trimitere la AVL-204 și statutul de draft al stratului tehnic.
  *Argument:* pagina comercială promite stări de certitudine și recomandări verificabile; trebuie să trimită la grila care le definește.
- [x] **5.4. Actualizarea `SKILL.md`** (25 octombrie 2026) cu comenzile noi și versiunea scriptului.

---

## 5. Ce am exclus

| Exclus | Motiv |
| --- | --- |
| Implementarea în această etapă | cerința explicită a lui Alex: doar propunere, decizie ulterioară |
| Un CLI nou, paralel (de exemplu în TypeScript) | promptul și principiul „fără sisteme paralele”; se extinde skill-ul existent |
| Dashboard, interogări AI, scor global SEO/GEO | în afara stratului tehnic (prompt §2, AVL-204 §2) |
| Randare JavaScript, crawl integral, validare Schema.org, Core Web Vitals, verificarea crawlerelor prin IP/loguri | în afara Core (AVL-203 §13); posibile doar ca extensii declarate (§13.1) |
| Activarea AVL-203 / AVL-204 la 1.0.0 | deciziile deschise nu sunt închise |
| Închiderea deciziilor 1 și 3 din AVL-204 §15 (regulile R-Z*, P1–P3) | nu au fost confirmate explicit |
| Exporturile „Pasted markdown…” ca sursă | copii egale sau mai vechi decât sursele din repository |

---

## 6. Ce mai e de făcut — lista unică a deciziilor deschise

Aceasta este singura listă urmărită. Textul normativ al fiecărei decizii rămâne în documentul ei: AVL-203 §19, AVL-204 §15. Deciziile se iau câte 2–3, pe cazuri reale, după rularea T0 pe delamatescu.ro. Când se închide o decizie, se consemnează în istoricul versiunilor documentului respectiv și se taie din lista de aici.

**Pași următori**

| # | Pas | Cine | Stare |
| --- | --- | --- | --- |
| 1 | Deploy după merge-ul `1a1852f` | Alex | de făcut |
| 2 | Rulare T0 pe delamatescu.ro (politica PERMIS + INDEXAT), după deploy | Claude rulează, Alex aprobă momentul | de făcut |
| 3 | Deciziile de mai jos, pe baza rezultatelor T0 | Alex decide, Claude pregătește variantele | de făcut |

**Decizii deschise înainte de 1.0.0**

| ID | Document | Decizia | Ce rămâne de stabilit |
| --- | --- | --- | --- |
| DD-01 | AVL-204 §15.1 | Regulile de diagnostic | încadrarea `R-Z1-05` (lanț cu mai mult de un redirect), `R-Z3-03` (lipsa sitemap-ului), `R-Z4-06` (lipsa JSON-LD pe pagina despre entitate), `R-Z4-07` (lipsa `lang`); stările regulilor noi `R-Z2-08` (`429`), `R-Z2-09` (peste cinci redirecturi), `R-Z4-10` |
| DD-02 | AVL-204 §15.3 | Prioritizarea P1–P3 | pragurile criteriilor, testate pe primele evaluări |
| DD-03 | AVL-204 §15.4 | Categoriile pe tip de entitate | lista tipurilor și dacă absența paginii de identitate (AVL203-REQ-042) primește o regulă proprie |
| DD-04 | AVL-203 §19.3 | Setul final de cerințe | confirmarea cerințelor și a nivelului fiecăreia, la activare |
| DD-05 | AVL-203 §19.4, §19.5 | Implementarea de referință | validarea implementării candidate v0.4.0, inclusiv a parserului RFC 9309 |
| DD-06 | AVL-203 §19.6 | Șirurile User-Agent | șirul complet `bingbot` dintr-o sursă oficială, tratamentul `Claude-SearchBot`, regula pentru versiunea Chrome din Googlebot |
| DD-07 | AVL-203 §19.7 | TC-08 și diagnosticul | setul final al regulilor de normalizare TC-08 și al stratului de diagnostic |
| DD-08 | AVL-203 §19.2, AVL-204 §15.6 | Activarea | la activare: statutul în AVL-202 și includerea în lista Nivelului C din AVL-001 §17 |

Închise anterior (pentru trasabilitate): Faza 1 și D-01…D-08 (25 octombrie 2026: alegerile tehnice le face Claude); P-01…P-11 (25 octombrie 2026, P-03 modificată); AVL-204 §15.2 și §15.5; AVL-203 §19.1 și §19.8. Alinierea skill-ului la REQ-041, REQ-042 și TC-08 e făcută în v0.3.0–v0.4.0.

---

## 7. Jurnal

| Data | Ce s-a întâmplat |
| --- | --- |
| 22 octombrie 2026 | AVL-203 0.4.0 și AVL-204 0.1.0 scrise ca surse `.md` (commit `c04a738`); trei decizii trimise lui Alex. |
| 23 octombrie 2026 | Deciziile 1–3 primite și aplicate; conversie `.ts`, wiring AVL-204, AVL-202 1.6.0; tsc, build, registru verificate. |
| 23 octombrie 2026 | Analiza promptului de implementare; planul de acțiuni din §4; acest document creat. Commit și push pe `avl-203-0.4.0-avl-204`. |
| 25 octombrie 2026 | Alex: merge și deploy la final; se începe cu Faza 1. Registrul `docs/avl-203-204-registru-implementare.md`: A–J plus K–M, 12 alegeri operaționale (OP-01…12), 10 propuneri normative (P-01…10), 8 decizii (D-01…08). Surse verificate live: RFC 9309; Google robots.txt spec (actualizată 23 oct. 2026) și pagina despre codurile HTTP (4 feb. 2026). Constatări: Google exclude `429` din regula pentru `4xx` fără să descrie tratamentul la robots; scriptul v0.2.0 clasifică greșit ca `UNAVAILABLE` cazurile TC-04 neacoperite de tabel. |
| 25 octombrie 2026 | Alex: alegerile tehnice le face Claude; întrebările normative vin după rularea TEST, pe cazuri concrete. Faza 2: CLI `scripts/avl203_cli.py` (plan init/validate/freeze, capture, verify), modulele `scripts/avl203/` v0.3.0, configurația `config/operational.v0.1.0.json` (OP-*), șablonul de plan, 45 de teste pe server local (plan, captură, TLS/DNS/timeout, redirect în buclă, cereri auxiliare, integritate). Toate trec; probă CLI cap-coadă pe fixture: VALID. |
| 25 octombrie 2026 | Faza 3: parser RFC 9309 (grupuri, combinare, fallback `*`, potrivirea cea mai lungă, `allow` la egalitate, `*`/`$`, percent-encoding, stări de fișier §2.3.1) și import pentru aplicarea manuală; TC-05 (toate aparițiile, locația, `<base href>`, `Link` header, `X-Robots-Tag` pe scope); TC-04 după tabel, cazurile neacoperite → `UNKNOWN` + DEV-P04 (abaterea din v0.2 corectată); TC-06 cu variabilitatea referinței și pe status/headere (P-06 conservator); TC-08 pe zone, cu zonele auxiliare → `UNKNOWN` + DEV-P05 și locația în fișierul original. Comanda `analyze` (offline, director derivat nou, poarta de integritate). 103 teste trec. |
| 25 octombrie 2026 | Faza 4: motorul de reguli (`R-VAL-01`, `R-Z1-*`…`R-Z6-*`, abateri DEV-*), recomandări P1–P3 cu `priority = null` pentru verificările suplimentare, raport `report.md` + `report.json`, verificarea automată a formulărilor excluse, matricea de conformitate. 142 de teste. P-11 nou în registru (pagină non-`2xx` → DEV-N01). |
| 25 octombrie 2026 | 5.1: rulare TEST pe delamatescu.ro (5 pagini, 48 de requesturi, 0 erori, integritate VALID). Rezultat: Z1–Z5 „nicio problemă observată”; Z6 „nu poate fi stabilit” — fiecare răspuns HTML conține un token semnat, diferit la fiecare request, deci comparația de conținut între User-Agent-i e neevaluabilă (25 din 71 de constatări). Politica de acces și intenția de indexare declarate `NECUNOSCUT` (nedeclarate de entitate). Verificat pe dovezile brute: diferențele dintre cele două capturi de referință, locația TC-08, regulile robots. 5.4: `SKILL.md` rescris pentru v0.3.0. |
| 25 octombrie 2026 | Alex: Z6 rămâne fără mascare și fără schimbare de regulă (conținutul „nu poate fi stabilit” e rezultatul; sursa variației: `data-context-token` injectat de Lovable); delamatescu.ro permite toate crawlerele și vrea paginile indexate (PERMIS + INDEXAT în planurile următoare). AVL-204 rămâne 0.1.0. 5.3: pagina auditului trimite la AVL-204; tsc, lint și build trec. |
| 25 octombrie 2026 | Alex aprobă P-01…P-11; P-03 modificată (acces total recomandat, „Politica crawlere” în fișa entității, completată de reprezentant); verificarea se aplică doar proiectelor și clienților. Merge `main` în branch (`1cb67bf`, AVL-201 1.4.0 adus pe branch). 5.2: AVL-204 0.2.0 (REQ-015…017, reguli noi și modificate), AVL-203 0.5.0 (REQ-043…045, tabelul TC-04, status TC-08 nou), AVL-201 1.5.0 (fișa entității), AVL-202 1.7.0; `.md` + `.ts`, registrul fără anomalii noi, paginile 200 local. Implementarea v0.4.0: plan cu `entity_sheet` și politică fără `NECUNOSCUT`, reguli 0.2.0, 150 de teste. |
| 26 octombrie 2026 | Merge în `main` (`1a1852f`). Conflictele au fost doar la articolele de blog, păstrate din `main` (deja publicate), și la registrul de conținut, regenerat; PNG-urile articolelor de blog nu au intrat. AVL-204 publicat ca draft: `date_published` 26 octombrie 2026, 10:33. Verificări: tsc, lint pe fișierele din merge, teste, build, 150 de teste ale skill-ului, 10 pagini cu 200 local; registrul fără anomalii noi. Planul a fost marcat încheiat, iar §6 a devenit lista unică a deciziilor deschise (DD-01…DD-08). Branch-ul a fost închis. |

---

## Anexa A — Promptul de implementare analizat (text integral)

Primit de la Alex Matescu la 23 octombrie 2026. Păstrat ca referință pentru punctul de plecare; nu este o specificație aprobată. Ce se implementează se decide pe baza §4 și §6.

````text
Lucrezi în repository-ul delamatescu.ro. Implementează instrumentul operațional de verificare tehnică pentru audituri și servicii GEO/AEO, conform AVL-203 v0.4.0 și AVL-204 v0.1.0, ambele drafturi. Vreau cod funcțional, testat, documentat și o integrare coerentă cu metodologia existentă. Nu te opri la un plan.
1. Citește sursele și inspectează proiectul
Citește instrucțiunile repository-ului, inclusiv AGENTS.md și CLAUDE.md, dacă există. Inspectează git status; păstrează modificările existente ale utilizatorului. Folosește rg pentru descoperire.

Surse de lucru furnizate:
- „Pasted markdown (2)(2).md”: AVL-203 v0.4.0 — Protocolul minim de verificare tehnică a unui site pentru AI Visibility.
- „Pasted markdown(20261023-035119).md”: AVL-204 v0.1.0 — Grila de interpretare a verificării tehnice.
Identifică documentele prin document_id și versiune, nu exclusiv prin numele fișierului. Exporturile au Markdown escapate și marcaje de formatare redundante: păstrează originalele și normalizează numai copii de lucru, cu verificarea tabelelor, linkurilor, codului și cerințelor. Nu aplica global înlocuiri care pot strica backslash-urile din comenzi sau expresii regulate.

Citește în repository versiunile actuale ale AVL-001, AVL-200, AVL-202, AVL-203, AVL-204 dacă există, registrul documentelor, pagina auditului și implementările relevante. Verifică relația cu AVL-201 fără a-i schimba rolul de specificație baseline.

În particular, caută skill-ul verificare-tehnica-avl203, scriptul candidat v0.2.0, manifestul User-Agent v0.1.0, schemele Evidence Index, generatorul de rapoarte și testele existente. Existența lor este afirmată de document, dar trebuie verificată în repo. Extinde implementarea existentă când este adecvată; nu crea un al doilea sistem paralel. Dacă nu o găsești, documentează căutarea și construiește o implementare minimă compatibilă cu stack-ul proiectului.

Surse publice de control:
- https://delamatescu.ro/lab/introducere
- https://delamatescu.ro/lab/metodologie
- https://delamatescu.ro/lab/metodologie/standard-dovezi-masurare-trasabilitate
- https://delamatescu.ro/lab/metodologie/protocol-verificare-tehnica
- https://delamatescu.ro/lab/metodologie/grila-interpretare-verificare-tehnica
- https://delamatescu.ro/lab/audit-ai-visibility
La verificarea externă din 23 octombrie 2026 au fost servite AVL-200 v2.0.0 activ, AVL-202 v1.5.0 activ și AVL-203 v0.3.1 draft. AVL-204 nu a putut fi citit prin instrumentul de navigare; aceasta nu dovedește un 404. Atașamentul AVL-204 afirmă existența AVL-202 v1.6.0. Verifică diferența dintre repository și versiunea publică; nu presupune că toate sunt deja sincronizate.

Documentele normative superioare guvernează principiile; atașamentele definesc ținta implementării noi. Dacă repo are versiuni ulterioare, compară schimbările și nu face downgrade. Nu înlocui silențios o regulă normativă prin propria preferință tehnică.
2. Domeniu și rezultate urmărite
Construiește un instrument CLI local, reutilizabil pentru mai multe entități, care produce:
1. plan de măsurare validat și înghețat înainte de captură;
2. capturi HTTP și context de execuție;
3. Evidence Index și integritate verificată;
4. observații TC-00–TC-08;
5. aplicații explicite ale regulilor AVL-204 și diagnostic pe zone;
6. recomandări prioritizate și raport lizibil în română;
7. matrice de conformitate cerință → implementare → test → dovadă/limită.
Acesta este stratul tehnic al auditului, nu întregul audit AI Visibility. Nu construi un dashboard, nu implementa interogări AI și nu introduce un scor global SEO/GEO. Nu adăuga în Core randare JavaScript, crawl integral, validare semantică Schema.org, Core Web Vitals sau verificare reală a crawlerelor prin IP/loguri. Extensiile rămân declarate separat.
3. Separă regulile de deciziile de implementare
Înainte de cod, scrie un registru scurt al diferențelor și ambiguităților. Continuă implementarea părților determinate. Distinge:
- reguli reproduse exact din draft;
- alegeri operaționale permise, fixate și versionate;
- propuneri normative care ar schimba diagnosticul și rămân neactivate.
Nu declara documentele active sau implementarea „validată de referință”. Folosește „implementare candidată pentru draftul AVL-203 v0.4.0 / AVL-204 v0.1.0”. Dacă o ambiguitate împiedică aplicarea sigură a unei reguli, folosește mecanismul conservator și abaterea documentată permise de AVL204-REQ-003 și REQ-012, cu motiv și observații-suport. Nu inventa o regulă oficială sau o severitate.

Verifică și consemnează explicit următoarele:

A. Integritate: AVL204-REQ-001 cere integritate verificată, iar R-VAL-01 descrie și integritatea eșuată. Separă rezultatul validării de diagnosticul de fond. În lipsa manifestului sau în caz de integritate compromisă, emite raport de invaliditate și nu produce concluzii substantiale din artefactele afectate. Granularitatea per artefact și invaliditatea globală a contextului trebuie documentate.

B. Politică intenționată: REQ-004 exclude restricțiile intenționate din probleme, dar R-Z1-01 și R-Z6-01/02 pot fi declanșate de ele. Păstrează observația, identifică regula specifică și explică aplicarea constrângerii generale. Nu penaliza implicit o restricție declarată. Politica necunoscută nu se inventează pentru concurenți sau clienți.

C. TC-04: tabelul nu definește exhaustiv cazul fără declarație cu 401/403/429, redirect neterminat sau combinații între căile convenționale. Un 2xx cu HTML nu dovedește sitemap valid; DECLARED măsoară declarația și răspunsul, nu validitatea XML. Păstrează statusul protocolului unde condiția este satisfăcută, tipul efectiv și fiecare eroare separat. Pentru cazurile neacoperite, UNKNOWN cu abatere explicită; propune separat o tabelă de decizie completă. Nu masca sitemap-uri individuale eșuate atunci când unul reușit determină DECLARED.

D. TC-08: definește explicit zonele analizate, normalizarea și locațiile. Textul doar în scripturi non-JSON-LD, de exemplu payload de hidratare, nu încape clar în stările draftului: nu afirma ABSENT_FROM_RAW_HTML dacă octeții îl conțin. Păstrează observația auxiliară și folosește UNKNOWN cu abatere în cazul neacoperit, fără a introduce o stare normativă nouă. Aceeași precauție pentru text doar în head/title sau comentarii. Nu echivala textul din body cu vizibilitatea în browser.

E. Z6: diferența de status/URL/header este observabilă; caracterul nefavorabil și cauza ei sunt probleme distincte. Draftul o numește „problemă confirmată”, cu o calificare specifică. Păstrează calificarea în raport și notează separat propunerea de revizuire; nu genera automat o recomandare de eliminare a oricărei diferențe. Variabilitatea clientului de referință poate afecta și statusul/headerele; nu atribui cauzal diferența User-Agent-ului. UNKNOWN pentru comparația de conținut nu se pierde în sumarul zonei.

F. Priorități: §7 exclude UNKNOWN de la P1–P3, dar REQ-009 spune „fiecare recomandare”. Pentru verificări suplimentare folosește priority=null, cu motivul excepției din §7. Efortul și dependențele necunoscute rămân necunoscute. Verificabilitatea se înregistrează, dar nu inventa o pondere în formula P1–P3. Graful dependențelor și ordinea de execuție nu trebuie confundate cu severitatea.

G. Contact/identitate: categoria este obligatorie, dar o pagină poate lipsi. Planul trebuie să poată înregistra absența fără URL inventat și fără NOT_APPLICABLE. Nu considera afirmația operatorului dovadă exhaustivă despre site. Păstrează proveniența constatării și limita verificării; diagnosticul specific rămâne deschis în AVL-204 §15.4.

H. Robots: distinge RFC 9309 de comportamentele furnizorilor. Redirectul robots către alt host este permis de RFC și nu dovedește singur o defecțiune; linii necunoscute nu invalidează toate regulile. Verifică explicit tratamentul 429: Google îl exclude din regula generală pentru 4xx. Aplică draftul transparent în modul RFC și nu raporta acea concluzie ca verificare a comportamentului Google. Orice revizuire a R-Z2-03/04 este o propunere versionată, nu o corecție ascunsă.

I. Canonical: R-Z4-02 presupune capturarea țintei, dar aceasta poate fi descoperită abia după request. Planul trebuie să predeclare politica pentru cereri auxiliare, limitele și domeniile permise. Marchează țintele ca dovezi auxiliare, nu ca extindere tacită a eșantionului. Nu testa ținte din afara limitelor; raportează imposibilitatea de stabilire. Distinge statusul inițial de statusul final după redirect.

J. Repetabilitate și completitudine: regulile nu acoperă toate combinațiile, de exemplu DNS eșuat repetat sau URL 2xx fără rezultat complet pentru variante. O regulă de succes nu se aplică prin absența erorilor dintr-un set de date incomplet. Zonele fără observații nu sunt implicit „nicio problemă observată”.
4. Model de date și plan
Reutilizează schemele existente când sunt compatibile. Definește și validează explicit:
- run_id unic; series_id când există; measurement_point T0/Fn sau TEST; methodological_phase separat;
- entity_id, tipul entității, origin exact;
- categorii de pagini, URL-uri, motive, aplicabilitate, absențe și limite ale eșantionului;
- textele-cheie per URL și scopul lor;
- politica intenționată per URL/crawler: permis, blocat intenționat sau necunoscut, cu sursa și data declarării; indexarea intenționată separat de acces;
- versiunile protocolului, grilei, scriptului, schemelor și manifestului UA;
- normalizarea textului și lista exactă a headerelor comparate;
- timeouts, redirecturi, compresie, rate limit, retry-uri, limite de volum și cereri auxiliare;
- extensiile declarate sau lista goală explicită.
Îngheață și hash-uiește planul înainte de primul request de măsurare. Pregătirea planului poate necesita explorare, dar acele cereri sunt preflight separat, nu dovezi strecurate în rulare. Nu adapta textele-cheie după rezultate. O completare ulterioară generează rulare nouă sau abatere explicită.

Manifestul inițial nu poate cunoaște ora finală și rezultatele requesturilor. Salvează configurația inițială imuabilă, jurnalul execuției și manifestul final distinct, cu legături între ele. Finalizează manifestul înainte de checksum; nu îl modifica apoi pentru a-i introduce propriul hash. Hash-ul listei checksum poate fi consemnat în raportul derivat.
5. Captura și analiza
TC-00: salvează UTC, mediul, versiunea curl și instrumentelor, versiunile și parametrii efectivi; necunoscutele sunt explicite. Nu publica IP sau alte date personale inutile.

TC-01/02: GET cu TLS verificat, redirecturi limitate și explicite, headere complete, corp final, stderr, exit code și metrici. Separă size_download de dimensiunea corpului salvat/decomprimat. Identifică header block final corect inclusiv în prezența proxy CONNECT sau răspunsurilor intermediare. Matricea host/protocol se aplică numai variantelor relevante declarate.

TC-03: robots.txt de la originul exact. Separă transportul, liniile extrase și politica aplicabilă. Matricea Core: *, Googlebot, bingbot, OAI-SearchBot, Claude-SearchBot, PerplexityBot; * este wildcard de politică, nu crawler HTTP. Parserul trebuie demonstrat prin teste RFC 9309: grupuri specifice, combinare, fallback *, potrivire specifică, Allow la egalitate, case sensitivity relevantă, percent encoding și caractere speciale. Dacă nu ai suport corect, păstrează NEDETERMINAT și oferă import pentru aplicare manuală documentată per URL–crawler, cu referințe la evidence. Nu folosi grep ca decizie.

TC-04: capturează toate sitemap-urile declarate în limitele planului și ambele căi convenționale. Nu urma recursiv indexul de sitemap ca implicit Core. Păstrează probele și clasifică după tabel; limitările de buget devin incompletitudine explicită.

TC-05: parser HTML robust pentru title, canonical, robots/googlebot/bingbot, lang, blocuri JSON-LD; X-Robots-Tag din headerele finale. Păstrează toate aparițiile, valorile originale, scope-ul crawlerului și locația în sursa brută. Rezolvă URL-uri relative conform bazei documentului, păstrând valoarea originală. JSON valid sintactic nu înseamnă Schema.org valid. Pentru non-HTML, corp incomplet sau parsing incert, folosește UNKNOWN cu motiv.

TC-06: minimum două requesturi de referință pentru fiecare URL, cu parametri identici, apoi requesturi pentru fiecare UA din manifestul versionat. Nu pretinde că aceeași identitate declarată autentifică infrastructura furnizorului. Nu reînnoi automat manifestul între rulări. Înregistrează separat OFICIAL, OFICIAL_CU_VERSIUNE_ALEASA, DOAR_TOKEN, NECONFIRMAT și sursele/datele. Compară doar headerele relevante declarate, nu Date/request-id ca diferențe de diagnostic. Diferențele brute rămân conservate.

TC-07: hash SHA-256, dimensiuni, identificatori și căi calculabile. Manifestul și raw evidence sunt incluse; fișierul checksum nu se include în sine. Verifică toate intrările și semnalează fișiere lipsă, modificate sau neacoperite din setul obligatoriu. Păstrează datele brute imuabile; reanaliza produce un director derivat nou. Integritatea criptografică nu certifică autenticitatea serverului înainte de captură.

TC-08: refolosește corpul final TC-01 fără request nou și fără JavaScript. Reguli de normalizare explicite, de exemplu entități HTML decodate, Unicode NFC, spații comprimate și casefold; păstrează diacriticele dacă planul nu declară altceva. Menține maparea către linia/intervalul din sursa originală; nu raporta linia textului normalizat drept linie originală. Caută pe zone și per text-cheie. Nu uni arbitrar noduri fără separatori producând potriviri false. Distinge toate cele patru stări, cu tratarea explicită a lacunelor de la §3.
6. Diagnostic și raport
Regulile trebuie să fie identificabile și versionate, nu texte inventate de un LLM la fiecare rulare. Fiecare constatare include rule_id, rule_version, zonă, URL/crawler, stare, observation_ids și calificările obligatorii. Păstrează separat aplicația regulii deterministe și explicația interpretativă, în acord cu lanțul AVL-200.

Aggregatează zonele conform ordinii din draft, păstrând incertitudinile separat. Nu descrie ordinea stărilor drept probabilitate numerică și nu confunda severitatea cu certitudinea. Evită rezultate pozitive generate prin condiții goale.

Recomandările includ observațiile-suport, gradul de certitudine, elementul de intervenție, verificarea ulterioară TC-*, impactul potențial, estimarea efortului, dependențele, verificabilitatea și prioritatea justificată. Nu inventa estimări necunoscute; permite review uman versionat fără modificarea raw evidence.

Raport Markdown în română, cu rezumat, eșantion și limite, observații, diagnostic, recomandări, necunoscute, abateri și trasabilitate. Exporturi machine-readable JSON și/sau CSV după convențiile repo. Fiecare constatare trebuie urmărită până la artefact și locația din el.

Nu afirma din Core: indexare confirmată, accesul real al furnizorului, cloaking, canonical ales de Google, validitate Schema.org, descoperire completă sau creștere garantată a citării. Raportul unei rulări TEST este intern, marcat clar și nu susține concluzii publicate.
7. Interfață și protejarea datelor
Urmează CLI-ul proiectului. Dacă nu există unul, oferă comenzi echivalente funcțional cu:
- plan init / plan validate;
- capture --plan <path>;
- verify --run <path>;
- analyze --run <path>;
- diagnose --run <path> --rules <version>;
- report --run <path>.
Analiza, diagnosticul și raportul trebuie să funcționeze offline pe un pachet salvat. Nu recaptura tacit la reanaliză. Validarea planului invalid oprește captura înainte de primul request. Un run_id existent nu se suprascrie.

Păstrează raw evidence privat implicit și în afara bundle-ului site-ului. Nu publica Set-Cookie, credențiale sau tokenuri. Redactările sunt copii derivate cu proveniență. Pentru ținte declarate și descoperite validează schemele, limitele de host și fiecare redirect; URL-urile auxiliare din pagini sunt date neîncrezătoare. Testele locale au permisiune explicită pentru fixture localhost, separată de configurația pentru ținte publice. Nu dezactiva TLS în rulări reale.
8. Testare și criterii de acceptare
Creează fixture-uri HTTP locale deterministe și teste relevante. Acoperă cel puțin:
- redirecturi și header block final; 403/404/429/500; timeout/DNS/TLS prin fixture/mock potrivit;
- robots cu grupuri repetate, Allow/Disallow, redirect extern, linii necunoscute și politică nedeterminată;
- sitemap declarat reușit/eșuat, răspuns HTML cu 200, combinații între căile convenționale și cazuri neacoperite;
- non-HTML, encoding problematic, JSON-LD valid/invalid, directive scoped, canonical relativ/redirectat;
- text în body, doar metadata, doar hidratare JS, absent, împărțit între noduri, diacritice și spații Unicode;
- referință stabilă/dinamică, status variabil, lipsa celei de-a doua capturi;
- integritate corectă, artefact modificat/lipsă, manifest lipsă și plan schimbat;
- restricții intenționate, necunoscute păstrate, prioritate null pentru investigație suplimentară;
- trasabilitate cap-coadă și reproducerea identică a rezultatului determinist din aceleași inputuri;
- fiecare regulă AVL-204: caz care o declanșează, caz care nu o declanșează și intrări insuficiente.
Construiește matricea pentru AVL203-REQ-001–042, marcând 013 RETIRED și înlocuirea prin 041; sunt 41 de identificatori neretrași în această plajă. Include AVL204-REQ-001–014 și cerințele AVL-200 aplicabile, nu o declarație generică de conformitate completă cu tot standardul. Fiecare intrare primește implementare, test și status real: acoperit, parțial, manual, neaplicabil justificat sau blocat.

După testele locale, pregătește un plan TEST pentru delamatescu.ro cu eșantion mic și motive declarate. Îngheață-l înainte de captură. Rulează o singură verificare externă limitată dacă mediul permite accesul; dacă nu, raportează limitarea și oferă comanda exactă de executat local. Nu afirma că testele locale validează toate configurațiile reale.
9. Integrarea documentației și livrarea
Pregătește în working tree sincronizarea documentelor și a registrului, fără deploy:
- AVL-203 v0.4.0, inclusiv TC-08 și retragerea REQ-013;
- AVL-204 v0.1.0 ca draft, cu ruta canonică stabilită;
- AVL-202: relații, ordine de lectură și versiuni reale;
- pagina auditului: strat tehnic al serviciului oferit de Alex Matescu, cu referințe corecte și statut draft;
- corecturi editoriale: trimiterile istorice la secțiuni renumerotate și metadatele de verificare, fără a falsifica data verificării surselor externe.
Nu activa v1.0.0, nu închide decizii metodologice deschise și nu schimba automat regulile din §3. Propunerile normative rămân într-un document separat. Dacă repository-ul impune un workflow dedicat pentru modificarea skill-ului existent, respectă-l și declară ce ai făcut efectiv.

Livrează implementarea, schemele, template-ul de plan, fixture-urile, testele, instrucțiunile de utilizare, matricea de conformitate, registrul deciziilor și raportul TEST dacă a putut fi executat. Încheie cu fișierele schimbate, comenzile reale de utilizare, testele rulate și rezultatele lor, limitările și deciziile normative încă deschise. Nu face push sau deploy în această sarcină.
````
