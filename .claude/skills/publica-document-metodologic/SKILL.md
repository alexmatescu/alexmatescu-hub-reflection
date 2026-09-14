---
name: publica-document-metodologic
description: Editor autonom pentru documentele normative de metodologie AI Visibility Lab — Nivel C (ex. AVL-200 Standard dovezi/măsurare/trasabilitate, AVL-201 Tabula Rasa F0, AVL-202 Cadrul metodologic și viitoarele documente de acest nivel), publicate sub `/lab/metodologie`. Pipeline complet de publicare/actualizare/activare, de la `.md` la integrare în site: verificare a rigorii normative (termeni RFC 2119/RFC 8174, identificatori `{PREFIX}-REQ-NNN` unici și secvențiali, permanența `document_id`-urilor), gate de status draft→Activ cu verificarea explicită a deciziilor deschise înainte de activarea 1.0.0, consistență încrucișată cu documentul-cadru AVL-202 (arhitectură, ordine de lectură, listă de documente), verificare factuală live, entity consistency, și audit final anti-halucinare. Distinct de `publica-articol-lab` (/lab/articole), `publica-studiu-de-caz` (/lab/studii-de-caz) și `evidence-release` (pachete de dovezi) — nu se substituie și nu se suprapune cu ele. Nu acoperă AVL-001 (Foundation, Nivel A) sau AVL-101–105 (Research, Nivel B), care nu au încă un skill dedicat — semnalează asta explicit dacă userul cere publicarea unuia dintre ele. Invocă atunci când userul cere publicarea/activarea/actualizarea unui document normativ de metodologie AVL (Nivel C), sau cere „un agent care postează standardele/metodologia laboratorului”.
---

# Publică document normativ de metodologie — AI Visibility Lab (Nivel C)

Se aplică exclusiv documentelor normative de **Nivel C — Methodology** din corpusul AI Visibility Lab Documentation (identificate azi: AVL-200, AVL-201, AVL-202; și oricare document viitor cu `document_level`/`level: "C — Methodology"`), publicate sub `/lab/metodologie`. Nu se aplică articolelor din `/lab/articole` (`publica-articol-lab`), studiilor de caz din `/lab/studii-de-caz` (`publica-studiu-de-caz`), pachetelor de dovezi (`evidence-release`), sau documentelor de alt nivel — AVL-001 (Nivel A — Foundation), AVL-101–105 (Nivel B — Research), AVL-301 (Nivel D — Experimente publice), AVL-350 (poziționarea secțiunii studii de caz, întreținut de `publica-studiu-de-caz`), AVL-401 (Nivel E — Articole), AVL-501 (Nivel F — Despre laborator). Dacă userul cere publicarea unuia dintre acestea din urmă, **nu improviza** cu acest skill — AVL-001 și AVL-101–105 nu au încă un pipeline dedicat; semnalează asta explicit și cere direcție înainte de a acționa.

Scopul acestui skill nu e doar wiring tehnic, ci păstrarea integrității unui corpus normativ: un document Nivel C face afirmații de tip „TREBUIE”/„NU TREBUIE” care guvernează cum laboratorul măsoară, publică și interpretează propriile rezultate. O eroare aici (o cerință inventată, un ID renumerotat, o activare prematură) nu strică un articol — strică regula după care sunt verificate toate celelalte articole și studii de caz. **Nu promite și nu presupune niciodată** că respectarea acestui standard garantează citarea, menționarea sau rankingul AI — la fel ca celelalte skill-uri ale laboratorului.

---

## 0. Principii nenegociabile

**Research-first**, identic cu `publica-articol-lab` §0 / `publica-studiu-de-caz` §0: orice afirmație despre comportamentul unui furnizor AI, o statistică, o normă tehnică externă (RFC, NIST etc.) citată drept context sau justificare se verifică live, în sesiunea curentă. Memoria modelului nu e sursă suficientă.

**O regulă proprie AVL nu se atribuie unui furnizor extern, și invers.** O cerință normativă a laboratorului (`{PREFIX}-REQ-NNN`) e o decizie editorială/metodologică a AI Visibility Lab, nu un fapt documentat de Google/OpenAI/Anthropic — și nicio afirmație despre comportamentul unui furnizor nu intră într-un document Nivel C fără sursă verificată (regulă explicită, AVL-200 §35).

**`document_id` e permanent — nu se renumerotează niciodată retroactiv.** Ordinea de înregistrare a ID-urilor nu reflectă neapărat ordinea conceptuală de precedență (AVL-202, „Cum se citesc identificatorii AVL”) — două lucruri distincte, nu le confunda. Un document înregistrat cu un `AVL-2NN` mai mic poate fi conceptual guvernat de un document-cadru înregistrat ulterior (AVL-200/201 sub AVL-202) — asta e istoricul real, păstrează-l, nu-l „corecta”.

**O cerință normativă nu se inventează și nu se relaxează silențios.** Dacă textul sursă cere o clarificare (termen RFC 2119 ambiguu, cerință incompletă), semnalează-o userului — nu decide singur ce „ar trebui" să spună regula.

**Un draft nu devine `Activ`/`1.0.0` doar pentru că a fost cerută publicarea.** Dacă documentul are o secțiune de tip „Decizii deschise înainte de 1.0.0” (precedent: AVL-200 §38) sau echivalent, fiecare punct rămas deschis trebuie fie închis, fie confirmat explicit de user ca excepție acceptată — niciodată presupus rezolvat (§3 mai jos).

**Nu fabrica E-E-A-T sau rigoare normativă.** Nu inventa istoricul versiunilor, dependențe normative inexistente, sau conformitate cu cerințe pe care documentul nu le respectă de fapt.

---

## 1. Domeniul de aplicare (verifică înainte de a trata orice cerere ca fiind pentru acest skill)

**Ce e un document Nivel C — Methodology**: un document normativ transversal care definește *cum* laboratorul măsoară, colectează dovezi, clasifică rezultate sau structurează un protocol — nu un articol, nu un studiu de caz al unei entități reale, nu un document de poziționare a unei secțiuni a site-ului.

**Identificator**: format `AVL-NNN`, permanent, alocat prin scanarea reală a corpusului (§4.4) — nu presupune un interval numeric rezervat (ex. „Nivel C = mereu 2xx”) doar pe baza celor trei precedente curente (AVL-200/201/202); verifică alocarea efectivă la momentul execuției.

**Ce NU e** (verifică înainte de a trata un document ca fiind în domeniul acestui skill):
- **AVL-001 (Nivel A — Foundation)** și **AVL-101–105 (Nivel B — Research)** — niveluri distincte, fără skill dedicat la data acestui document. Nu le publica/actualiza cu acest pipeline; semnalează lipsa unui skill propriu și cere direcție.
- **Studiu de caz** (`/lab/studii-de-caz`, `publica-studiu-de-caz`) — aplică metodologia unei entități reale; un document Nivel C *definește* metodologia, nu o aplică.
- **Articol** (`/lab/articole`, `publica-articol-lab`) — analiză/ghid conceptual, fără termeni normativi RFC 2119 și fără cerințe `{PREFIX}-REQ-NNN`.
- **AVL-350** — document de poziționare a secțiunii `/lab/studii-de-caz`, întreținut exclusiv de `publica-studiu-de-caz`; nu-l atinge din acest skill.
- **Implementarea tehnică `evidence-release`** — agent/scripturi care *aplică* AVL-200, nu documentul normativ însuși.

---

## Faza 0 — Inspecție și ingest

Citește obligatoriu, înainte de orice modificare:

- fișierul `.md` sursă, integral (frontmatter + corp);
- **AVL-001** (`src/content/lab/AVL/AVL-001_*.md` sau `src/data/lab-content/avl-001.ts` — cadrul epistemic: Documentat/Observat/Inferat/Ipoteză/Opinie editorială, regulile editoriale generale pe care orice document AVL trebuie să le respecte);
- **AVL-202**, dacă există și e `Activ` (documentul-cadru: arhitectura metodologiei, ordinea conceptuală de lectură, secțiunea „Documentele metodologiei”, lista de dependențe) — orice document Nivel C nou/actualizat trebuie verificat față de ce promite deja AVL-202 despre el (§5 mai jos);
- celelalte documente Nivel C deja publicate (`avl-200.ts`, `avl-201.ts` etc. în `src/data/lab-content/`, dacă există) ca referință de stil (structura `avl-doc-card`/`avl-meta-table`, ordinea secțiunilor, formatul REQ-urilor);
- `src/data/lab.ts` — `labNav`, nodul `/lab/metodologie` și `children`-ul lui (servesc routing-ul; verifică dacă la data execuției index-ul vizibil e încă derivat din `children` sau a migrat la un pattern automat ca la `/lab/articole`/`/lab/studii-de-caz` — nu presupune, verifică);
- `src/pages/Lab.tsx` — `labPageContent` (unde intră HTML-ul documentelor Nivel C), `labPageJsonLdOverrides` (confirmă că documentele Nivel C **nu** sunt incluse acolo — la data acestui skill ele primesc JSON-LD generic `CreativeWork` via `buildLabPageHead`, nu `Article`/`@graph` — verifică că asta e încă adevărat, nu presupune);
- `src/data/lab-seo.ts` — `buildLabPageHead`, `buildLabArticleHead`; confirmă că nu există (încă) un tip `LabMethodologyMeta`/echivalent dedicat — dacă unul a apărut între timp, arhitectura s-a schimbat față de ce descrie acest skill și trebuie urmată noua sursă de adevăr, nu acest document;
- `public/sitemap.xml` — formatul intrărilor `/lab/introducere` și `/lab/metodologie*` (la data acestui skill, **fără** `lastmod`, spre deosebire de articole/studii de caz — verifică dacă convenția s-a schimbat);
- CSS-ul care stilează `.avl-doc-card`/`.avl-meta-table` — confirmă că clasele există încă, nu inventa altele noi fără motiv.

**Nu presupune din acest document structura reală a codului** dacă implementarea proiectului s-a schimbat — verifică mereu fișierele de mai sus.

### 0.1 — Contractul de frontmatter (observat, nu impus rigid)

Documentele existente folosesc câmpuri parțial divergente — nu uniformiza silențios fără o decizie editorială explicită separată:

```yaml
document_id: "AVL-NNN"
title: ""
subtitle: ""                      # opțional, observat la AVL-200
level: "C — Methodology"          # sau document_level — verifică ce folosește documentul concret
document_role: ""                 # opțional, observat la AVL-202 (ex. "methodological-framework")
version: "0.9.0"                  # semver
status: "Draft pentru revizuire"  # sau "Activ" — vezi §3
author: "Alex Matescu"
organization: "AI Visibility Lab"
language: "ro-RO"
date_created: "YYYY-MM-DD"        # opțional, observat la AVL-200
date_published: null              # null până la prima publicare reală (§0.4 din publica-articol-lab, regulă identică)
date_modified: "YYYY-MM-DD"
last_reviewed: "YYYY-MM-DD"
canonical_proposed: ""            # înainte de publicare; devine `canonical` la activare
canonical: ""                     # după ce ruta publică există
normative_dependencies: []        # sau depends_on — verifică convenția reală a documentului
informative_dependencies: []      # sau normative_documents (AVL-202 le folosește diferit de AVL-200 — nu presupune sinonimie)
keywords: []
```

Nu adăuga un câmp `slug` separat — canonicalul rămâne sursa unică (identic cu `publica-articol-lab` §0.3).

`date_published`/`date_modified`/`last_reviewed` urmează regulile din `publica-articol-lab` §0.4/§6.2 (publication time real, nu ora draftului/agentului; `date_modified` nu se schimbă fără modificare editorială reală) — nu le reinventa.

### 0.2 — Scop: document nou / activare draft→Activ / update pe document Activ

- **Document nou** (primul draft al unui subiect metodologic încă neînregistrat) → tot pipeline-ul; documentul rămâne `status: "Draft pentru revizuire"` până când §3 confirmă că poate fi activat, sau se publică explicit ca draft intern neconectat la site dacă userul așa decide.
- **Activare draft → `Activ`/`1.0.0`** (documentul există deja, e complet, dar are status draft) → Faza 2/§3 obligatorii (verificarea deciziilor deschise), apoi Faza 5–9 pentru wiring efectiv.
- **Update pe document deja `Activ`** (corecție, clarificare, cerință nouă, dependință nouă) → determină dacă schimbarea e materială asupra cerințelor normative (`{PREFIX}-REQ-NNN` nou/modificat/eliminat) — dacă da, bump de `version` (minor dacă adaugă fără să rupă compatibilitatea, major dacă schimbă sensul unei cerințe existente) + rând nou în „Istoricul versiunilor”; dacă e doar typo/link mort, patch minor fără ceremonie. Verifică impactul asupra documentelor care declară acest document ca dependință (§2.3) și asupra AVL-202 dacă arhitectura descrisă acolo se schimbă (§5).

---

## Faza 1 — Claim ledger și verificare factuală

Identic cu `publica-articol-lab` Faza 1 (ierarhie de surse §1.1, verificare URL §1.2, routing pe provider §1.3, regula denominatorului §1.4, citare vizibilă pentru afirmații materiale §1.5, niveluri de certitudine §1.6 — vocabularul AVL-001: Documentat/Observat/Inferat/Ipoteză/Opinie editorială). Se aplică oricărei afirmații despre lumea externă citate ca justificare a unei cerințe (ex. o referință la RFC 2119/RFC 8174, un comportament de furnizor citat ca motivație). **Nu se aplică** cerințelor proprii AVL — acelea sunt decizii editoriale ale laboratorului, nu afirmații care au nevoie de sursă externă, dar au nevoie de claritate și precedent intern (§2).

---

## Faza 2 — Rigoare normativă (specifică documentelor Nivel C)

1. **Termeni RFC 2119/RFC 8174** — TREBUIE/NU TREBUIE/AR TREBUI/NU AR TREBUI/POATE folosiți doar cu sensul declarat explicit de document (secțiunea „Controlul documentului” din fiecare document Nivel C existent declară asta) — verifică că textul nu folosește acești termeni în afara propozițiilor normative/cerințelor `{PREFIX}-REQ-NNN` într-un mod care ar putea fi citit greșit ca cerință de conformitate.
2. **Identificatori de cerință unici și secvențiali** — `{PREFIX}-REQ-NNN` (ex. `AVL200-REQ-001`, `F0-REQ-001`) fără duplicate, fără goluri nejustificate; dacă documentul actualizează o cerință existentă, ID-ul ei nu se schimbă — o cerință retrasă se marchează ca atare în istoric, nu dispare silențios.
3. **Consistența `version`/`status`** — un document cu cerințe încă needeterminate sau cu o secțiune de „Decizii deschise” nerezolvată rămâne `Draft pentru revizuire`; nu seta `Activ`/`1.0.0` fără să treci prin §3.
4. **Dependențele declarate există și sunt corecte** — orice `depends_on`/`normative_dependencies`/`normative_documents`/`informative_dependencies` trebuie să refere documente care există efectiv în corpus (fișier `.md` sursă, publicat sau nu) și să nu creeze un ciclu de dependență (A depinde de B care depinde de A). Verifică direcția reală: „normativ” înseamnă că documentul citat impune reguli documentului curent, „informativ” înseamnă context fără obligație de conformitate — nu le amesteca.
5. **Nu renumerota `document_id`** — chiar dacă ordinea conceptuală de lectură diferă de ordinea de înregistrare (§0 principii), ID-ul rămâne cel înregistrat.

---

## Faza 3 — Gate de activare (draft → `Activ`/`1.0.0`)

Aplică-l ori de câte ori scopul (§0.2) implică trecerea unui document de la `Draft pentru revizuire` la `Activ`.

1. Localizează secțiunea de tip „Decizii deschise înainte de X.0.0” (sau echivalent) în documentul sursă.
2. Pentru fiecare punct: verifică dacă a fost efectiv închis (dovadă verificabilă — un fișier, o secțiune, un commit, o confirmare explicită a userului), sau rămâne deschis.
3. Dacă rămân puncte deschise, **nu activa documentul** fără confirmare explicită a userului pentru fiecare punct rămas — folosește o întrebare directă, nu presupune că „probabil e ok”. Documentează în raportul final (§10) exact ce a fost confirmat ca excepție acceptată și de cine.
4. Dacă documentul nu are o astfel de secțiune dar e totuși un draft incomplet (secțiuni lipsă, cerințe needeterminate, TODO-uri interne), tratează-l identic — nu activa un document incomplet doar pentru că lipsește explicit o listă de decizii deschise.
5. Abia după ce toate punctele sunt închise sau explicit acceptate ca excepție: `status: "Activ"`, `version` la prima variantă majoră stabilă (de regulă `1.0.0`), `date_published` completat cu momentul real al publicării (§0.1), `canonical_proposed` → `canonical`.

---

## Faza 4 — Gate de originalitate / E-E-A-T

- **Who** — autor/organizație clar, `@id` consistent (`https://delamatescu.ro/#alex-matescu`), reutilizat din `alexMatescuPerson` (`@/components/Seo`) — nu inventat.
- **How** — proveniența documentului (ce revizii/documente precedente formalizează), metodologia de redactare a cerințelor, ce precedent intern a motivat fiecare cerință nouă.
- **Why** — ce gol metodologic umple documentul; de ce nu poate fi absorbit ca secțiune într-un document Nivel C existent (evită proliferarea de documente aproape-duplicate — verifică suprapunere semantică cu AVL-200/201/202 și orice alt document Nivel C existent înainte de a trata subiectul ca document nou, identic cu `publica-articol-lab` §0.1).
- **Nu fabrica rigoare** — un document normativ câștigă credibilitate din precizia și testabilitatea cerințelor lui, nu din volumul de termeni RFC 2119 folosiți.

---

## Faza 5 — Consistență încrucișată cu AVL-202 (documentul-cadru)

Dacă AVL-202 există și e `Activ` la momentul execuției:

1. Orice document Nivel C **nou** trebuie reflectat în AVL-202: diagrama „Arhitectura metodologiei”, secțiunea „Documentele metodologiei” (rol, relație cu AVL-202, ce detaliază), și „Ordinea conceptuală recomandată de lectură” dacă documentul nou schimbă ordinea utilă de citire.
2. Orice actualizare majoră a unui document Nivel C existent (schimbare de rol, redenumire, deprecare) trebuie reflectată acolo unde AVL-202 îl descrie.
3. **Nu modifica AVL-202 tacit** — e el însuși un document `Activ`/`1.0.0`; o modificare a lui e o schimbare asupra unui document normativ deja publicat, semnalează-o explicit userului ca pas separat (ce se schimbă și de ce), nu ca efect automat al publicării documentului nou.
4. Verifică inconsistențele deja existente în corpus înainte de a le trata ca fiind introduse de tine (precedent cunoscut la data acestui skill: AVL-202 folosește atât „Tabula Rasa F0” cât și „Tabula Rasa T0”, și rutele `/lab/metodologie/tabula-rasa-f0` vs. `/lab/metodologie/tabula-rasa-t0` interschimbabil în text) — semnalează, nu „corecta” unilateral fără decizie editorială explicită.

---

## Faza 6 — Redactare / actualizare

Păstrează structura observată în corpusul existent (AVL-200/AVL-202), fără a o reinventa per document: titlu + subtitlu → „Controlul documentului” (tabel identitate: Document ID, Nivel, Versiune, Statut, Autor, Organizație, date, canonical, dependențe) → declararea convenției RFC 2119 → Scop → Domeniu de aplicare (+ ce NU acoperă) → secțiuni tematice cu cerințele `{PREFIX}-REQ-NNN` inline (blockquote) → „Documente asociate” → „Implementare editorială și factuală” (dacă relevant) → „Checklist de conformitate” → „Istoricul versiunilor” → „Decizii deschise” (doar cât timp documentul rămâne draft) → declarație finală.

`title`/`description` — descriu corect scopul normativ al documentului, fără a promite mai multă autoritate decât are („standard propriu AI Visibility Lab”, nu „standard industrial”).

---

## Faza 7 — Conversie HTML (`.ts`)

Manual, nu convertor generic — stil identic cu `avl-001.ts`/`avl-201.ts`: bloc `<div class="avl-doc-card">` cu overline/title/lead + `<table class="avl-meta-table">` pentru identitatea documentului, apoi corpul cu `<h2>`/`<h3>`, `<blockquote>` pentru cerințele `{PREFIX}-REQ-NNN` și pentru citate structurale, `<table>` cu headers explicite pentru taxonomii/comparații, linkuri externe cu `target="_blank" rel="noopener noreferrer"`, linkuri interne către alte documente AVL prin ruta lor publică reală (nu presupusă).

---

## Faza 8 — Wiring

Actualizează exact (confirmă fiecare cale la Faza 0, nu presupune):

1. **`src/data/lab-content/avl-{NNN}.ts`** (sau slug echivalent, urmând convenția reală a fișierelor deja prezente) — `export const {const}Html = \`...\`;`.
2. **`src/pages/Lab.tsx`** — import + intrare nouă în `labPageContent["/lab/metodologie/{slug}"]`.
3. **`src/data/lab.ts`** — nod copil nou în `children` al nodului `/lab/metodologie` din `labNav`: `{ to, label, lead }` — **obligatoriu tehnic** pentru routing (`findLabPage`/`findLabParent`), identic cu regula de la `publica-studiu-de-caz` §9 pas 4.
4. **`public/sitemap.xml`** — `<url><loc>https://delamatescu.ro/lab/metodologie/{slug}</loc>...</url>`, urmând formatul deja folosit de intrările `/lab/metodologie*` la data execuției (verifică dacă au sau nu `<lastmod>` — nu presupune).
5. **AVL-202** (dacă aplicabil, §5) — pas separat, semnalat explicit în raport, niciodată implicit.
6. **Nu adăuga documentul în `labArticleMeta` sau `labCaseStudyMeta`** (`src/data/lab-seo.ts`) — un document Nivel C nu e articol nici studiu de caz; arhitectura lui de JSON-LD e diferită (`CreativeWork` generic via `buildLabPageHead`, confirmat la Faza 0) — dacă la momentul execuției arhitectura reală diverge de asta, urmeaz-o pe cea reală, nu presupunerea din acest document.

---

## Faza 9 — Technical audit, build și validare

```bash
npx tsc --noEmit
npm run lint
npm run build
```

(verifică `package.json` înainte să presupui comenzile). Dacă mediul permite, pornește dev server și confirmă pe ruta reală: title, description, canonical, H1, tabelul de identitate, cerințele randate corect, linkurile interne către alte documente AVL funcționale, și că `/lab/metodologie` listează documentul (dacă indexul e vizibil acolo la data execuției).

`robots.txt`/`llms.txt`/IndexNow — nu le modifica pentru publicarea de rutină, identic cu celelalte skill-uri ale laboratorului.

---

## Faza 10 — Audit final anti-halucinare

Identic cu `publica-articol-lab` Faza 11/11.1, plus specific documentelor normative:

- Nicio cerință `{PREFIX}-REQ-NNN` nouă nu a fost inventată sau reformulată dincolo de ce textul sursă/userul a cerut efectiv.
- Niciun mecanism intern al unui furnizor AI nu e prezentat drept „documentat” fără sursă verificată live.
- Nicio dependență normativă (`depends_on`/`normative_dependencies` etc.) nu a fost adăugată fără să existe efectiv documentul citat.
- Statusul `Activ` nu a fost setat fără trecerea explicită prin gate-ul de activare (Faza 3).
- Niciun `document_id` existent nu a fost renumerotat sau reasignat.

---

## Faza 11 — Raport final

1. Rezumat (document nou / activare / update, ce s-a schimbat).
2. Fișiere atinse (listă exactă, inclusiv AVL-202 dacă a fost modificat — §5).
3. Claim ledger (afirmații externe verificate, dacă există).
4. Cerințe `{PREFIX}-REQ-NNN` noi/modificate/retrase — listă.
5. Dacă a fost o activare: lista deciziilor deschise, care au fost închise, care au fost acceptate explicit ca excepție și de cine (§3).
6. Metadata: `document_id`, `version`, `status`, date, `canonical`, dependențe.
7. Impact asupra documentelor dependente (dacă altul depinde normativ de acesta și trebuie re-verificat).
8. Rezultate tehnice: typecheck / lint / build / runtime — fiecare PASS/FAIL/NOT RUN.
9. Limitări — ce nu a putut fi verificat.

Încheie cu formula de stop: „Procesul intern este complet. Nu am executat git add, git commit, git push sau deploy. Documentul este pregătit local. Operațiile Git și publicarea efectivă rămân de executat manual de utilizator.” Nu declara documentul „activ” sau „live” dacă gate-ul de activare (Faza 3) nu a fost trecut explicit.

---

## Checklist final obligatoriu

- [ ] Domeniul de aplicare confirmat — documentul e efectiv Nivel C — Methodology, nu articol/studiu de caz/alt nivel fără skill propriu (§1).
- [ ] `document_id` verificat față de registrul real al corpusului, niciodată renumerotat.
- [ ] Termeni RFC 2119/RFC 8174 folosiți doar cu sensul declarat, doar în propoziții normative/cerințe.
- [ ] Toate `{PREFIX}-REQ-NNN` sunt unice, secvențiale, fără dispariții silențioase.
- [ ] Dependențele declarate există efectiv și au direcția corectă (normativ vs. informativ).
- [ ] Dacă documentul a fost activat: gate-ul din Faza 3 a fost parcurs explicit, fără nicio decizie deschisă presupusă rezolvată.
- [ ] Dacă AVL-202 e afectat: modificarea lui a fost semnalată explicit, ca pas separat.
- [ ] Documentul nu a fost adăugat în `labArticleMeta`/`labCaseStudyMeta`.
- [ ] Nod copil adăugat în `labNav` sub `/lab/metodologie` (obligatoriu tehnic pentru routing).
- [ ] `sitemap.xml` actualizat, urmând formatul real observat.
- [ ] Typecheck, lint, build trec; runtime verificat dacă mediul permite.
- [ ] Niciun `git add`/`commit`/`push`/deploy executat.
- [ ] Documentul nu a fost declarat „activ”/„live” fără trecerea prin Faza 3.

---

## Ce NU se face (recapitulare rapidă)

- Nu activa un document draft (`status: "Activ"`, `1.0.0`) fără să parcurgi explicit gate-ul din Faza 3.
- Nu renumerota niciun `document_id` existent, chiar dacă ordinea de lectură recomandată diferă de ordinea de înregistrare.
- Nu inventa cerințe `{PREFIX}-REQ-NNN`, dependențe normative sau istoric de versiuni.
- Nu atribui unui furnizor extern o regulă proprie AVL, și nu introduce o afirmație despre un furnizor fără sursă verificată live.
- Nu modifica AVL-202 (sau alt document Nivel C deja `Activ`) tacit, ca efect automat al publicării altui document.
- Nu amesteca documentul în `labArticleMeta`/`labCaseStudyMeta`.
- Nu sări peste nodul copil din `labNav` — fără el, ruta nu se rezolvă.
- Nu publica/actualiza AVL-001, AVL-101–105, AVL-301, AVL-350, AVL-401 sau AVL-501 cu acest skill.
- Nu face `git add`, `git commit`, `git push` sau deploy.
- Nu declara documentul „activ” sau „live” dacă Faza 3 nu a fost parcursă explicit.

---

## Utilizare

```
/publica-document-metodologic src/content/lab/AVL/AVL-200_Standard_dovezi_masurare_trasabilitate.md
```

sau, pentru activarea unui draft deja complet:

```
/publica-document-metodologic activează AVL-200 la 1.0.0
```

Nu face `git add`, `git commit`, `git push` sau deploy fără cerere explicită.
