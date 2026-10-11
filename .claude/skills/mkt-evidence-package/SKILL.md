---
name: mkt-evidence-package
description: Transformă un folder brut de capturi de Market Discovery (seria MKT-RO-AIV — SERP-uri Google/Bing și răspunsuri AI, organizate pe suprafețe) într-un pachet de dovezi sigilat, documentat și verificabil, plus un registru de observații (fiecare rezultat/furnizor numit în fiecare execuție, cu poziție, URL acolo unde e vizibil, proveniență și calificarea relevanței față de query). Pipeline determinist SEAL → INVENTORY → QUERY SET → SESSION CONTEXT (analiza vizuală a contextului de sesiune: incognito, logat/nelogat, locație, chat temporar/existent, contaminare) → REVIEW → CAPTURE CLASSIFICATION → REVIEW → OBSERVATION EXTRACTION → REVIEW → ARTIFACTS → VALIDATION → FREEZE → CHECKSUMS → VERIFICATION → (opțional) GITHUB DRAFT RELEASE. NU face Verification/eligibilitate, NU deduplică entități în Candidate Set, NU interpretează rezultatele, NU modifică setul de query-uri sau capturile brute, NU publică. Distinct de `evidence-release` (rezervat studiilor pe entitatea Alex Matescu). Invocă atunci când userul cere procesarea capturilor unei rulări Discovery / pilot / T0 / Fn din Market Measurement, sau „pachetul de dovezi pentru Discovery".
---

# mkt-evidence-package — pachet de dovezi + registru de observații pentru Market Discovery

Domeniul acestui skill: o **instanță** de rulare Discovery (pilot, T0, F1…Fn ai
unei instanțe trimestriale MKT-RO-AIV) → pachet sigilat + registru de
observații brute. Construit pornind de la `evidence-release` (principiile de
imutabilitate, freeze și checksums sunt preluate), dar adaptat unei măsurători
de **piață**, nu de entitate. Cele două skill-uri sunt independente: nu se
importă cod unul din altul, nu se modifică unul pe altul.

```
SEAL → INVENTORY → QUERY SET → SESSION CONTEXT → REVIEW (0) → CAPTURE CLASSIFICATION → REVIEW (1)
  → OBSERVATION EXTRACTION → REVIEW (2) → ARTIFACTS → VALIDATION → FREEZE
  → CHECKSUMS → VERIFICATION → [GITHUB DRAFT RELEASE — opțional, dezactivat implicit]
```

Bază metodologică: setul de query-uri declarat în config (pentru pilot:
`docs/drafts/MKT-RO-AIV-discovery-query-set-v0.1.0.md`), AVL-200, AVL-MKT-001
(draft). Skill-ul aplică regulile setului; nu le schimbă.

## 0. Ce NU face acest agent

- Nu modifică folderul de capturi, fișierele din el sau denumirile lor; nu modifică arhiva după sigilare.
- Nu deschide paginile din rezultate și nu extrage nume din surse neafișate — principiul **as-returned** (§2).
- Nu face Verification (identitate, serviciu, relevanță pentru România, eligibilitate). Calificarea `IRRELEVANT` din registru privește **legătura cu query-ul**, nu eligibilitatea furnizorului (§2.2).
- Nu deduplică entități și nu construiește Candidate Set-ul — registrul păstrează fiecare observație brută; deduplicarea e etapa următoare.
- Nu interpretează (fără clasamente, „cel mai vizibil", concluzii despre piață).
- Nu modifică setul de query-uri, nu adaugă query-uri, nu reetichetează retroactiv execuții.
- Nu inventează timestamp-uri, hash-uri, poziții, URL-uri — ce nu e vizibil devine `NOT_VISIBLE`/`UNKNOWN`.
- Nu publică. Pasul GitHub e dezactivat implicit; chiar activat, se oprește la DRAFT.
- Nu face `git add`/`commit`/`push`.

## 1. Principiu de arhitectură — AI clasifică, CODE execută

Identic cu `evidence-release`: Claude inspectează vizual capturile și propune
clasificări (capturi) și observații (registru) în CSV-uri de staging.
Scripturile (`scripts/*.mjs`, Node ESM, fără dependențe noi; utilitarele comune
sunt **copiate** din `evidence-release/scripts/lib`, cu notă de proveniență)
fac: hash, sigilare, zip, Evidence ID, execution ID, observation ID, benzi de
adâncime, statistici, validare, freeze, checksums, `gh`.

Sentinelele `UNKNOWN` / `NOT_APPLICABLE` / `NOT_VISIBLE` / `NO` / `UNCLASSIFIED`
au semnificația din `references/capture-index-schema.md` §Sentinels. `UNKNOWN`
≠ `NO`: AI Overview necapturat ⇒ `UNKNOWN`, nu „nu a apărut".

### 1.1 Invariantul de sigilare

> **Evidence ID-ul se atribuie o singură dată, la sigilare, fiecărei capturi,
> și rămâne legat de perechea (cale relativă, SHA-256) pentru totdeauna.**

### 1.2 Invariantul de freeze (preluat din `evidence-release`)

> **Nimic din manifestul de checksum-uri nu mai e modificat după generare.**
> Corecțiile → `metadata_version` nouă, pipeline reluat de la STEP 11.

## 2. Principii specifice Discovery

### 2.1 As-returned

Se înregistrează exclusiv ce afișează suprafața ca rezultat direct al
interogării: rezultatele SERP organice (poziție, titlu, URL afișat, fragment)
și textul răspunsului AI cu sursele afișate. Paginile din rezultate și sursele
citate nu se deschid. Un director/listă apare ca rezultat de tip
`DIRECTORY_LIST`; entitățile din interiorul lui **nu** se extrag — cu excepția
numelor vizibile chiar în fragmentul SERP (`SERP_SNIPPET`). Proveniențe
permise: `SERP_RESULT`, `SERP_SNIPPET`, `AI_RESPONSE`, `AI_CITATION`.

### 2.2 Relevanța față de query

Pe două niveluri, ambele propuse de Claude și confirmate de user la REVIEW:

- **execuție** (`response_relevance`): răspunsul/SERP-ul în ansamblu tratează
  intenția query-ului? `RELEVANT` / `PARTIALLY_RELEVANT` / `IRRELEVANT` / `UNCERTAIN`;
- **observație** (`query_relevance`): rândul respectiv are legătură cu familia
  de servicii cerută de query? `RELEVANT` / `IRRELEVANT` / `UNCERTAIN`.

Orice valoare diferită de `RELEVANT` cere `relevance_basis` (ce se vede pe
ecran care o justifică — de exemplu „termenul din query interpretat într-un
alt sens, vizibil în titlu/răspuns"). Rândurile irelevante **rămân** în
registru, cu `candidate_union_inclusion = EXCLUDE_IRRELEVANT`; nu se șterg.
Relevanța față de query nu e un verdict despre furnizor.

### 2.3 Adâncimea Search

Poziția organică se numără continuu peste paginile SERP (reclame, module
locale, AI Overview, „People also ask" etc. nu primesc poziție organică). Banda
de adâncime (`1-10`, `11-20`, `21-30`, …) e derivată de script. Adâncimea
preregistrată din setul de query-uri e declarată în config; rândurile de peste
ea sunt marcate `beyond_declared_depth = YES`, nu excluse.

### 2.4 Contextul de sesiune se observă, nu se presupune

Starea sesiunii (incognito, cont, locație, mod de conversație, contaminare)
se stabilește întâi din capturi și abia apoi din declarații. Reguli:

- O valoare pozitivă cere un indicator vizibil, de exemplu eticheta „Incognito”, butonul „Conectați-vă”, avatarul contului sau eticheta „Temporary chat”.
- Lipsa unui indicator nu înseamnă starea opusă. Valoarea corectă e `NOT_VISIBLE`, nu `NO`. Excepție: când interfața arată explicit starea alternativă, de exemplu un buton „Conectați-vă” e dovadă pentru `LOGGED_OUT`.
- Contaminarea înseamnă orice context anterior vizibil care poate influența răspunsul. Exemple: mesaje anterioare în același fir, referințe la utilizator, firma lui sau conversații trecute, memorie actualizată, instrucțiuni sau fișiere atașate, istoric sau sugestii personalizate în caseta de căutare. Contaminarea se marchează. Nu elimină execuția.
- Datele de cont (email, nume) nu se transcriu niciodată. Se notează doar că sunt vizibile, iar captura primește `PRIVACY_REVIEW_REQUIRED`.

## 3. Input

```
/mkt-evidence-package <cale/către/instanță.mkt-package.yaml>
```

- **config** — `references/config-schema.md`, exemplu în `examples/`;
- **folderul de capturi** — nearhivat, câte un subfolder pe suprafață. Agentul
  determină singur subfolderele, maparea lor la suprafețe (prin aliasuri
  exacte, `naming-convention.md` §2.1) și numele fișierelor, inclusiv tiparul de
  timestamp (§6.1);
- **setul de query-uri** — fișierul `.md` sursă + SHA-256 declarat;
- **fișa rulării** (`run-sheet.yaml`) — **opțională**. Declarația operatorului
  pentru ce nu se vede în capturi și pentru abateri. Contextul de sesiune vizibil
  îl extrage agentul (STEP 5). Șablon în `references/run-sheet-template.md`.

Agentul întreabă userul (`AskUserQuestion`) doar în două situații: lipsește
un câmp obligatoriu, sau un subfolder nu are alias ori se suprapune cu altul.
Nimic nu se completează „probabil".

## 4. Fluxul (STEP 1–17)

### STEP 1 — Read config
Validează structural config-ul (`instance_id`, `instance_type`, căi, query set, versiuni). Maparea suprafețelor nu se cere în config; o determină STEP 2.

### STEP 2 — SEAL (sigilarea folderului și crearea arhivei)
```
node .claude/skills/mkt-evidence-package/scripts/seal_capture_folder.mjs <config>
```
1. **Detecție.** Parcurge folderul fără să scrie în el. Detectează subfolderele, le mapează la suprafețe (§2.1), alege tiparul de timestamp din nume (§6.1) și scrie `detection-report.json`. Căile se păstrează cu bytes-ii exacți de pe disc (macOS folosește NFD), iar pentru sortare se folosește forma NFC. Fișierele de sistem (`.DS_Store`) apar în manifest ca `SYSTEM_FILE_EXCLUDED`: nu primesc Evidence ID și nu intră în zip.
2. Calculează SHA-256 pe fiecare fișier și atribuie Evidence ID în această ordine (`references/naming-convention.md` §3). Ordinea e doar de identificare, nu cronologică.
3. Scrie `capture-manifest.json` (cale, nume, dimensiune, SHA-256, Evidence ID, subfolder, `filename_timestamp_raw`).
4. Creează zip-ul cu fișierele în ordinea manifestului (`zip -X`, fără atribute extinse), în `evidence/incoming/mkt/`.
5. Verifică: `unzip -t`; re-hash al fiecărei intrări din zip comparat cu manifestul; re-hash al folderului sursă comparat cu manifestul (detectează modificări în timpul sigilării).
6. Înregistrează `archive_sha256` + `sealed_at`. Orice nepotrivire → STOP, nicio arhivă considerată validă.

Re-rularea pe un folder deja sigilat: dacă manifestul existent coincide → no-op; dacă diferă → STOP (nu se reatribuie ID-uri; o arhivă nouă = `archive.version` nouă, cu ID-urile vechi păstrate pentru perechile (cale, SHA-256) identice).

### STEP 3 — INVENTORY
`inventory_archive.mjs` — extrage o copie de inspecție din zip (nu din folder) în `evidence/work/mkt/<instance-slug>/extracted/`, dimensiuni imagine, duplicate byte-identice (marcate, nu șterse), skeleton `capture-classification.csv` cu Evidence ID și coloanele deterministe precompletate.

### STEP 4 — QUERY SET
`build_query_set.mjs` — verifică SHA-256 al fișierului `.md` declarat, extrage tabelele de query-uri în `query-set.csv` (`query_set_id`, `query_id`, `query_exact`, `subgroup`, `class`, `layer`, `source_sha256`). Textul nu se normalizează. Lista `queries_executed` din config trebuie să fie un subset al setului.

### STEP 5 — SESSION CONTEXT (Claude, pas preliminar)
Înainte de orice analiză pe query sau pe rezultate, Claude deschide fiecare
captură cu `Read` și extrage **doar contextul de sesiune vizibil**, în
`session-context.csv` (`references/session-context-schema.md`):

- **Search (GSEARCH, BSEARCH):** fereastră privată/incognito, logat/nelogat, locația afișată de motor, limba interfeței;
- **AI:** logat/nelogat, modul conversației (temporară / conversație nouă standard / conversație existentă), modelul afișat, modurile speciale vizibile, indicatorii de memorie sau personalizare, contextul atașat;
- **toate suprafețele:** contaminare (`NONE_OBSERVED` / `SUSPECTED` / `CONTAMINATED` / `NOT_ASSESSABLE`), cu tipul și baza vizuală, plus semnalarea datelor private.

Fiecare valoare are o bază vizuală (`*_basis`): ce element de pe ecran o
susține. Lipsa unui indicator nu dovedește starea opusă (§2.4). În acest pas
nu se clasifică query-ul și nu se extrag rezultate.

`build_session_context.mjs` agregă apoi valorile pe execuție și pe suprafață
(`CONSISTENT` / `CONFLICT` / `NOT_VISIBLE`) și le compară cu fișa rulării,
dacă există (`MATCH` / `MISMATCH` / `NOT_DECLARED`).

### STEP 6 — REVIEW (0) context de sesiune — obligatoriu
Se arată userului: `detection-report.json` (subfoldere → suprafețe, tiparul
numelor), tabelul de context pe suprafață, toate conflictele dintre capturi,
toate nepotrivirile cu fișa rulării, toate execuțiile `SUSPECTED`/`CONTAMINATED`
și rândurile `PRIVACY_REVIEW_REQUIRED`. **Nu se trece la clasificarea pe query
fără confirmarea explicită.** Corecțiile → înapoi la STEP 5.

Fișa rulării (`run-sheet.yaml`) e opțională. Completează ce nu se vede în
capturi (dispozitiv, locația fizică, setări văzute doar în pagina de setări,
abateri, motivele lor). Dacă lipsește, câmpurile nevăzute rămân `UNKNOWN` în README.

### STEP 7 — CAPTURE CLASSIFICATION (Claude)
Deschide fiecare captură cu `Read` și completează `capture-classification.csv`
(`references/capture-index-schema.md`): suprafața observată, query-ul (din textul
vizibil + ordinea capturilor în subfolder — `mapping_basis` obligatoriu), rolul
capturii, părțile, pagina SERP, intervalul de poziții organice vizibile,
`execution_status`, `response_relevance` + `relevance_basis`, ora vizibilă pe
ecran (doar dacă e vizibilă), anomalii, privacy (`PRIVACY_REVIEW_REQUIRED`).
Celulele de judecată rămase goale devin `UNCLASSIFIED` și blochează.

### STEP 8 — REVIEW (1) capturi — obligatoriu
`build_capture_index.mjs` (staging) → `capture-review.csv` + sumar: capturi /
execuții reconstituite pe suprafață × query / execuții lipsă față de
`queries_executed × surfaces` / `REVIEW_REQUIRED` / relevanță ≠ RELEVANT /
privacy / anomalii. Toate execuțiile cu `response_relevance ≠ RELEVANT` și
toate maparea `REVIEW_REQUIRED` se arată userului. **Nu se trece la STEP 9 fără
confirmarea explicită.** Corecțiile → înapoi la STEP 7.

### STEP 9 — OBSERVATION EXTRACTION (Claude)
Pentru fiecare execuție confirmată, completează `observation-staging.csv`
(`references/observation-register-schema.md`):

- **SERP**: un rând `SERP_RESULT` pentru fiecare rezultat organic vizibil (poziție, titlu, URL afișat, numele afișat al site-ului, tipul paginii); câte un rând `SERP_SNIPPET` pentru fiecare nume de furnizor vizibil în fragmentul unui rezultat terț, legat de rândul-părinte;
- **AI**: un rând `AI_RESPONSE` pentru fiecare entitate numită în text, în ordinea primei apariții (inclusiv fără URL — `url_displayed = NOT_VISIBLE`); un rând `AI_CITATION` pentru fiecare sursă afișată;
- `observed_name`, `title_displayed`, `snippet_or_description_observed` — **verbatim**, fără corectare;
- `query_relevance` + `relevance_basis`; `entity_kind_observed`.

Execuțiile `IRRELEVANT` se extrag la fel de complet — irelevanța e o calificare, nu un motiv de omisiune.

### STEP 10 — REVIEW (2) observații — obligatoriu
`build_register.mjs` (staging) → `observation-review.csv` + sumar: observații pe
proveniență / suprafață / query / bandă de adâncime; `IRRELEVANT`, `UNCERTAIN`,
`UNCLASSIFIED`; rânduri fără URL. Toate rândurile `IRRELEVANT`/`UNCERTAIN` se
confirmă explicit de user. Corecțiile → înapoi la STEP 9.

### STEP 11 — ARTIFACTS
```
node .../build_capture_index.mjs <config> --finalize
node .../build_register.mjs <config> --finalize
node .../copy_supporting_artifacts.mjs <config>
node .../build_readme.mjs <config>
```
Generează capture index-ul și registrul (`--finalize` eșuează la orice `UNCLASSIFIED` sau problemă blocantă), copiază byte-identic în output manifestul de sigilare, `query-set.csv`, fișa rulării și contextul de sesiune, apoi scrie README-ul (`references/readme-template.md`, umplut mecanic din artefactele finalizate).

### STEP 12 — VALIDATION
`validate_package.mjs` — schemă, enum-uri, Evidence ID-uri unice și prezente în manifest, fiecare observație legată de o execuție și de cel puțin o captură existentă, `query_id` ∈ query set, `relevance_basis` prezent unde e cerut, `SERP_SNIPPET` cu părinte valid, poziții organice fără goluri/dubluri neexplicate pe execuție, recalcularea `archive_sha256` vs sigilare, consistența versiunilor. Status: `CONTENT_VALID` / `HUMAN_REVIEW_REQUIRED` / `VALIDATION_FAILED`.

### STEP 13 — FREEZE
`freeze_artifacts.mjs` — `chmod 0o444` pe toate artefactele care intră în manifest, doar dacă validarea e `CONTENT_VALID` (sau `HUMAN_REVIEW_REQUIRED` cu `--confirmed-review`, după confirmarea userului). `--unfreeze` e refuzat după ce există manifestul de checksums.

### STEP 14 — CHECKSUMS
`build_checksums.mjs` — SHA-256 pentru arhivă (link simbolic canonic), manifest, query set, run sheet (dacă există), session context, capture index, register, README.

### STEP 15 — VERIFICATION
`verify_checksums.mjs` — `shasum -a 256 -c` asupra manifestului tocmai scris.

### STEP 16 — SUMMARY
Status validare + verificare, sumarele de la STEP 6/8/10, lista exactă de fișiere din `evidence/output/mkt/<instance-slug>/<metadata_version>/`. **Aici se oprește implicit.**

### STEP 17 — GitHub draft release (opțional)
Rulează doar dacă `release.github.enabled: true` în config **și** userul răspunde afirmativ la întrebarea textuală „Upload package to GitHub draft release?". Comportament identic cu `evidence-release` STEP 13–15 (re-verificare checksums, fără `--clobber`, STOP dacă release-ul e public, niciodată `--draft=false`). Înainte de întrebare se reamintește: pachetul conține SERP-uri și răspunsuri care numesc terți, iar rândurile `PRIVACY_REVIEW_REQUIRED` se listează din nou.

## 5. Idempotență și audit

Toate scripturile sunt re-rulabile: sigilarea e no-op pe manifest identic,
ID-urile (Evidence / execution / observation) se reutilizează pentru aceleași
chei, freeze e no-op pe fișiere înghețate, release-ul nu duplică asset-uri.
Fiecare script scrie în `evidence/work/mkt/<instance-slug>/processing-log.jsonl`
(append-only): timestamp, operație, input, output, status, warnings.

## 6. Referințe

- `references/config-schema.md` — config-ul instanței.
- `references/naming-convention.md` — Evidence ID, execution ID, observation ID, coduri de suprafață, nume de fișiere, layout.
- `references/capture-index-schema.md` — coloanele capture index-ului + sentinele.
- `references/observation-register-schema.md` — coloanele registrului + reguli de extragere.
- `references/session-context-schema.md` — contextul de sesiune extras din capturi (STEP 5), agregarea și reconcilierea cu fișa rulării.
- `references/run-sheet-template.md` — fișa rulării, opțională, completată de operator.
- `references/readme-template.md` — structura README-ului pachetului.
- `references/package-policy.md` — imutabilitate, versionare, freeze, release, privacy, git.
- `examples/mkt-evidence-package.example.yaml` — config pentru pilotul MKT-RO-AIV-2026Q4-PILOT.

## 7. Checklist final

- [ ] Folderul sursă neatins; manifestul folder = manifestul zip = SHA-urile din index.
- [ ] `archive_sha256` identic între STEP 2 și STEP 12.
- [ ] Fiecare captură are exact un Evidence ID, atribuit la sigilare.
- [ ] Setul de query-uri verificat prin SHA-256; toate `query_id`-urile din index ∈ set.
- [ ] Execuțiile lipsă față de `queries_executed × surfaces` declarate, nu ascunse.
- [ ] Contextul de sesiune extras din capturi, cu bază vizuală pentru fiecare valoare. Conflictele, nepotrivirile și contaminările confirmate la REVIEW (0).
- [ ] REVIEW (0), REVIEW (1) și REVIEW (2) confirmate explicit de user.
- [ ] Toate rândurile `IRRELEVANT`/`UNCERTAIN` au `relevance_basis` și au fost confirmate.
- [ ] Nicio observație din pagini neafișate (as-returned).
- [ ] `CONTENT_VALID` (sau `HUMAN_REVIEW_REQUIRED` confirmat) înainte de freeze.
- [ ] Artefactele înghețate înainte de checksums; verificarea checksums `PASS`.
- [ ] Niciun upload fără `release.github.enabled: true` + confirmare explicită.
- [ ] Niciun `git add`/`commit`/`push`.
