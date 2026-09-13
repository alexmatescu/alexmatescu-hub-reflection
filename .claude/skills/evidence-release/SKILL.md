---
name: evidence-release
description: Transformă o arhivă brută de capturi/screenshots într-un Evidence Package documentat, verificabil și pregătit ca GitHub Release (draft) — pentru orice entitate, studiu, măsurare longitudinală (T0/T1/T2/...) sau fereastră experimentală din AI Visibility Lab. Pipeline determinist RAW EVIDENCE → INVENTORY → CLASSIFICATION → REVIEW → EVIDENCE INDEX → README → VALIDATION → FREEZE → CHECKSUMS → VERIFICATION → GITHUB DRAFT RELEASE. NU scrie studiul de caz, NU interpretează rezultatele editorial, NU modifică metodologia experimentului, NU publică concluzii, NU modifică raw evidence, NU publică automat (se oprește la draft release). Invocă atunci când userul cere procesarea/publicarea unui pachet de dovezi (evidence package/archive), pregătirea unui GitHub Release cu dovezi, sau cere „un agent care procesează evidence/screenshots pentru studii de caz".
---

# evidence-release — Evidence Package pipeline

Domeniul acestui skill e strict: transformă o arhivă brută de dovezi într-un
pachet documentat, verificabil, gata ca DRAFT GitHub Release. **Nu** e un
skill editorial — nu scrie, nu interpretează, nu redactează un studiu de caz.
Distinct și complementar cu `publica-studiu-de-caz`: acela consumă (citează)
un evidence package deja publicat de acest skill; nu se substituie unul
altuia, nu modifică celălalt skill în timpul rulării acestuia.

**Secvența completă a pipeline-ului** (identică în descrierea skill-ului, în
fluxul de mai jos și în `src/content/arhitectura/evidence-release-pipeline-audit.md`):

```
RAW EVIDENCE → INVENTORY → CLASSIFICATION → REVIEW → EVIDENCE INDEX → README
  → VALIDATION → FREEZE → CHECKSUMS → VERIFICATION → GITHUB DRAFT RELEASE
```

## 0. Ce NU face acest agent (recapitulare obligatorie)

- Nu scrie sau redactează studiul de caz.
- Nu interpretează rezultatele în scop editorial (niciun HIT/COLIZIUNE/verdict — acelea aparțin studiului de caz care citează acest pachet).
- Nu modifică metodologia experimentului.
- Nu publică concluzii.
- Nu modifică raw evidence (arhiva, fișierele din interior, denumirile) — vezi `references/release-policy.md`.
- Nu publică automat release-ul — se oprește mereu la DRAFT (STEP 14).
- Nu inventează timestamp-uri, hash-uri, dimensiuni, filenames sau alte fapte deterministe — acelea vin exclusiv din scripturi (§1 principiu de arhitectură).
- Nu automatizează necontrolat clasificările incerte — vezi human-in-the-loop, STEP 6.
- Nu modifică un artifact deja înghețat (STEP 9) — vezi §1.1 mai jos.

## 1. Principiu de arhitectură — AI clasifică, CODE execută

Claude poate: inspecta vizual screenshoturi (`Read`), identifica platforma/
query-ul, observa continuarea unui rezultat, clasifica tipul de evidence,
semnala anomalii/contaminare, propune metadata în `classification.csv`.

Scripturile (`scripts/*.mjs`, Node ESM, fără dependențe noi) fac tot restul:
inventariere, SHA-256, dimensiuni imagine, sortare, Evidence ID, Query group
ID, generare CSV/README/checksums, validare, freeze, interacțiune `gh`.
Niciun script nu ghicește o valoare — un câmp necunoscut devine `UNKNOWN` /
`NOT_APPLICABLE` / `UNCLASSIFIED`, niciodată o presupunere (vezi
`references/evidence-schema.md`).

Toate comenzile `node scripts/*.mjs` de mai jos rulează **din rădăcina
repository-ului** (căile `evidence/work/...` și `evidence/output/...` sunt
relative la `cwd`).

### 1.1 — Invariantul de freeze (obligatoriu, guvernează ordinea pipeline-ului)

> **Nimic ce intră în manifestul de checksum-uri nu mai este modificat după
> ce a fost generat.**

De aceea ordinea fazei de finalizare e strict:

```
generate artifacts → validate structure/content → freeze/finalize artifacts
  → build checksums → verify checksums → package/release
```

(STEP 7 → 8 → 9 → 10 → 11 → 14 mai jos). `freeze_artifacts.mjs` (STEP 9)
face acest invariant un fapt de filesystem, nu doar o convenție: Evidence
Index-ul și README-ul finalizate devin `chmod 0o444` (read-only) imediat ce
`validate_evidence.mjs` confirmă `CONTENT_VALID`, și rămân așa. Orice script
care ar rescrie un artifact deja înghețat (`build_index.mjs --finalize`,
`build_readme.mjs`) refuză explicit (`assertNotFrozen`) în loc să invalideze
silențios un checksum deja calculat. `build_checksums.mjs` (STEP 10) la
rândul lui refuză să hash-uiască fișiere care nu sunt încă înghețate.
Verificarea checksum-urilor se face de **două** ori după generare —
imediat (STEP 11) și din nou chiar înainte de upload (STEP 14) — pentru că
poate trece timp între ele (confirmarea explicită a userului, STEP 13).

Corectarea unui artifact deja înghețat/checksum-uit **nu** se face prin
editare în loc — se incrementează `metadata_version` și se reia pipeline-ul
de la STEP 7 pentru versiunea nouă (vezi `references/release-policy.md`).
`freeze_artifacts.mjs --unfreeze` există doar pentru cazul rar în care o
versiune a fost înghețată din greșeală și nu a fost încă checksum-uită/
încărcată nicăieri — nu e o cale de reparare de rutină.

## 2. Input și config

Invocare:

```
/evidence-release <cale/către/evidence-package.yaml>
```

Câmpuri obligatorii în config (vezi `references/config-schema.md`):
`entity_name`, `entity_slug`, `entity_code`, `study_name`,
`measurement_point`, `archive.path`, `archive.version`, `metadata_version`.

**Nu ghici.** Dacă lipsește un câmp obligatoriu și nu poate fi dedus fără
ambiguitate din config/arhivă (de ex. `entity_slug` nu poate fi inferat sigur
din `entity_name` dacă există risc de coliziune cu un slug existent în
`evidence/output/`), oprește-te și întreabă userul (`AskUserQuestion`) —
nu completa cu o presupunere „probabilă".

Nimic din acest skill nu are hardcodat un nume de entitate, un număr de
query-uri, o platformă sau un studiu anume — orice exemplu din acest fișier
e ilustrativ.

## 3. Fluxul complet (STEP 1–15)

Corespondența cu secvența RAW EVIDENCE → ... → GITHUB DRAFT RELEASE de mai
sus: RAW EVIDENCE = `archive.path`, dat ca input la STEP 1; INVENTORY =
STEP 2–3; CLASSIFICATION = STEP 4; REVIEW = STEP 5–6; EVIDENCE INDEX +
README = STEP 7; VALIDATION = STEP 8; FREEZE = STEP 9; CHECKSUMS = STEP 10;
VERIFICATION = STEP 11; GITHUB DRAFT RELEASE = STEP 12–15.

### STEP 1 — Read config
Citește și validează structural `evidence-package.yaml` (vezi
`references/config-schema.md`). Dacă un câmp obligatoriu lipsește, întreabă
userul.

### STEP 2 — Validate + Inventory raw archive
```
node .claude/skills/evidence-release/scripts/inventory_evidence.mjs <config>
```
Validează integritatea ZIP (`unzip -t`), calculează **SHA-256 al arhivei
întregi** (`archive_sha256` în `inventory.json`, alături de
`archive_hashed_at`) — acesta e hash-ul „botez" al dovezilor pe care STEP 8
îl va recalcula și compara, ca să garanteze că artifactele generate descriu
byte-cu-byte fișierul efectiv inventariat, nu o versiune ulterior
suprascrisă/înlocuită. Apoi extrage o copie de inspecție needitabilă în
`evidence/work/<slug>/<mp>/extracted/` (arhiva originală nu e niciodată
scrisă), scrie `inventory.json` (fapte deterministe: cale, nume, dimensiune,
mtime arhivă, hash arhivă) și generează/actualizează skeletonul
`classification.csv` (aditiv — nu distruge clasificări anterioare pentru
fișiere încă prezente).

### STEP 3 — Hash + image metadata
```
node .claude/skills/evidence-release/scripts/hash_evidence.mjs <config>
```
Calculează SHA-256 și dimensiunile imaginii pentru fiecare fișier (parsare
directă de header PNG/JPEG/GIF/WEBP, fără librărie externă), marchează
duplicate byte-identice (**nu le șterge**).

### STEP 4 — Analyze / group / classify (Claude)
Deschide fișierele din `evidence/work/<slug>/<mp>/extracted/` cu `Read`.
Pentru fiecare screenshot, determină din conținutul vizual + ordinea
fișierelor + folder + (dacă e vizibil) timestamp:

- platforma observată vizual (poate diferi de `archive_platform_folder`, deja
  calculat determinist în `inventory.json` — nu-l corecta, doar documentează
  divergența ca `MISFILED_PLATFORM` în coloana `Archive anomaly`);
- dacă e continuarea logică a rezultatului anterior (regula de continuitate)
  — **nu crea un query nou** pentru o continuare; folosește `Capture part
  number`/`Capture parts total`/coloana `Continuation of original relative
  path` (numele fișierului părții 1, nu un Evidence ID — Evidence ID-urile nu
  există încă în acest pas, se rezolvă automat la `build_index.mjs`);
- query-ul, rolul lui (`main_query`/`clarification`/`contaminated_query`/...),
  contaminarea sesiunii, orice anomalie de arhivare.

Rescrie complet `evidence/work/<slug>/<mp>/classification.csv` (`Write`),
păstrând exact header-ul generat la STEP 2 (`Original relative path` +
`Original filename` + coloanele din `references/evidence-schema.md` +
`extra_columns` din config). **Fiecare celulă de judecată trebuie completată
cu o valoare reală sau un sentinel explicit** (`UNKNOWN`, `NOT_APPLICABLE`) —
nu lăsa gol decât coloanele explicit opționale (`Reviewer comment`, `Notes`,
`Query rewrite text` când nu se aplică, `Continuation of original relative
path` când nu se aplică, `Contamination reason` când nu se aplică). O celulă
lăsată goală în afara acestor coloane devine automat `UNCLASSIFIED` la
`build_index.mjs` și blochează finalizarea (STEP 7).

Aplică strict: `UNKNOWN` ≠ `NO`. Dacă nu poți stabili dacă userul era logged
in, scrie `UNKNOWN`, nu `NO`.

**Privacy**: dacă un screenshot pare să conțină email personal, telefon,
adresă, token/API key, parolă sau alte date de cont sensibile, scrie
`PRIVACY_REVIEW_REQUIRED` în `Reviewer comment` pentru rândul respectiv —
asta oprește upload-ul la STEP 13 până la confirmarea explicită a userului.
Nu modifica arhiva pentru a redacta nimic.

### STEP 5 — Generate staging evidence index
```
node .claude/skills/evidence-release/scripts/build_index.mjs <config>
```
(fără `--finalize`). Scrie `evidence/work/<slug>/<mp>/evidence-index.staging.csv`,
`evidence-review.csv` (orice `UNCLASSIFIED`, enum invalid, referință de
continuare nerezolvată, duplicat, `Mapping status=CONFIRMED` fără
`Mapping basis`, contaminare fără motiv, rewrite fără text) și
`index-stats.json`. Afișează în consolă sumarul cerut: Total screenshots /
Mapped / Review required / Contaminated / Control steps / Supplemental /
Anomalies / Possible duplicates.

### STEP 6 — Human review (obligatoriu, nu opțional)
Arată userului sumarul de mai sus și, dacă `evidence-review.csv` conține
elemente care ar putea schimba Query ID, granițele unui query,
condiția experimentală, includerea/excluderea din analiză, sau platforma —
**nu trece la STEP 7 fără confirmarea explicită a userului**. Poți arăta
oricând o versiune preliminară (`evidence-index.staging.csv`). Dacă userul
corectează clasificarea, revino la STEP 4 → 5.

### STEP 7 — Generate artifacts (EVIDENCE INDEX + README)
```
node .claude/skills/evidence-release/scripts/build_index.mjs <config> --finalize
node .claude/skills/evidence-release/scripts/build_readme.mjs <config>
```
`build_index.mjs --finalize` FAILează dacă mai există celule `UNCLASSIFIED`.
La succes, scrie
`evidence/output/<slug>/<mp>/<metadata_version>/<slug>_<mp>_evidence-index_v<metadata_version>.csv`.
Idempotent: Evidence ID-urile deja publicate într-o versiune anterioară
(`(cale, SHA-256)` identice) sunt reutilizate, nu re-atribuite. `build_readme.mjs`
scrie README-ul (structura fixă din `references/readme-template.md`, 17
secțiuni, umplută mecanic din index + config — nicio proză liberă generată
ad-hoc de model în acest pas). Ambele scripturi refuză (`assertNotFrozen`)
să rescrie un fișier deja înghețat la o rulare anterioară pentru aceeași
`metadata_version` (STEP 9) — vezi §1.1.

### STEP 8 — Validation (validate structure/content)
```
node .claude/skills/evidence-release/scripts/validate_evidence.mjs <config>
```
Rulează verificările de schemă/integritate referențială asupra Evidence
Index-ului și README-ului **încă needitabile** (nu depinde de manifestul de
checksum-uri, care nu există încă la acest pas — vezi §1.1): CSV lizibil,
Evidence ID unice, referințe de continuare/duplicat valide, SHA-256 prezent
pe fiecare rând, filenames din index existente în arhivă, consistență de
versiune, convenție de nume, și **recalculează SHA-256 al arhivei întregi și
îl compară cu `archive_sha256` din `inventory.json`** (STEP 2) — o diferență
înseamnă că arhiva a fost suprascrisă/înlocuită/coruptă între timp și oprește
pipeline-ul. Scrie `evidence/output/<slug>/<mp>/<metadata_version>/validation-report.md`
cu status final `CONTENT_VALID` / `HUMAN_REVIEW_REQUIRED` / `VALIDATION_FAILED`.
Un `FAIL` oprește pipeline-ul — regenerează la STEP 7, nu edita manual
fișierele de output.

### STEP 9 — Freeze/finalize artifacts
```
node .claude/skills/evidence-release/scripts/freeze_artifacts.mjs <config>
```
Doar după ce STEP 8 confirmă `CONTENT_VALID` (sau `HUMAN_REVIEW_REQUIRED`
confirmat explicit). Face `chmod 0o444` pe Evidence Index și README
finalizate — de aici încolo, orice corecție necesită o `metadata_version`
nouă, nu editare în loc (§1.1). Arhiva brută nu e atinsă (nu e niciodată
deschisă pentru scriere oriunde în acest pipeline).

### STEP 10 — Checksums (build)
```
node .claude/skills/evidence-release/scripts/build_checksums.mjs <config>
```
Refuză să ruleze dacă Evidence Index-ul sau README-ul nu sunt încă
înghețate. SHA-256 pentru arhivă (prin link simbolic canonic, plasat direct
în directorul de output — fără a copia/redenumi originalul, vezi
`naming-convention.md` §1/§7) + index + README. Nu se include pe sine.
Directorul `evidence/output/<slug>/<mp>/<metadata_version>/` devine astfel
auto-conținut, verificabil direct cu `shasum -a 256 -c`.

### STEP 11 — Verification (checksum-uri)
```
node .claude/skills/evidence-release/scripts/verify_checksums.mjs <config>
```
Rulează imediat `shasum -a 256 -c` (sau `sha256sum -c`, sau un fallback
intern dacă niciunul nu e pe `PATH`) asupra manifestului tocmai scris — un
self-check pe pasul de checksum însuși. `github_release.mjs` (STEP 14)
repetă aceeași verificare chiar înainte de upload, ca a doua confirmare,
mai târziu în timp.

### STEP 12 — Show summary
Prezintă userului: statusul validării (STEP 8) și al verificării de
checksum-uri (STEP 11), sumarul din STEP 5/6, lista exactă de fișiere finale
(`evidence/output/<slug>/<mp>/<metadata_version>/`).

### STEP 13 — Confirmare explicită
Întreabă textual: **"Upload package to GitHub draft release?"** — nu
continua fără un răspuns afirmativ explicit. Dacă orice rând are
`PRIVACY_REVIEW_REQUIRED`, semnalează-l aici din nou înainte de a cere
confirmarea.

### STEP 14 — GitHub draft release (package/release)
```
node .claude/skills/evidence-release/scripts/github_release.mjs <config>            # dry-run — arată planul
node .claude/skills/evidence-release/scripts/github_release.mjs <config> --execute   # doar după confirmarea de la STEP 13
```
Înainte de a atinge `gh` deloc: **re-verifică manifestul de checksum-uri**
(a doua confirmare, după STEP 11) și confirmă că Evidence Index-ul/README-ul
sunt încă înghețate — orice discrepanță oprește totul înainte de upload.
Apoi `gh --version`/`gh auth status`, găsește sau creează DRAFT release-ul,
încarcă doar asset-urile lipsă (niciodată `--clobber`), STOP dacă release-ul
e deja PUBLIC (imuabil — vezi `release-policy.md`), verifică asset-urile
încărcate. Nu apelează niciodată `gh release edit --draft=false`.

### STEP 15 — Return draft release URL
Raportează userului URL-ul draft-ului. **STOP — nu publica.**

## 4. Idempotență

Toate scripturile pot fi rulate din nou fără să distrugă starea:
`inventory_evidence.mjs` e aditiv pe `classification.csv`;
`build_index.mjs`/`build_readme.mjs` reutilizează Evidence ID-uri existente
prin `(cale, SHA-256)` și refuză să rescrie un artifact deja înghețat;
`freeze_artifacts.mjs` fără `--unfreeze` e no-op pe fișiere deja înghețate;
`github_release.mjs` reutilizează un draft existent și nu duplică/suprascrie
asset-uri. Nicio rulare succesivă nu „curăță" silențios diferențe — le
semnalează.

## 5. Log și audit trail

Fiecare script scrie în `evidence/work/<slug>/<mp>/processing-log.jsonl`
(append-only): timestamp, operație, input, output, status, script,
warnings. Fără raționament intern al modelului — doar acțiuni și rezultate
verificabile.

## 6. Referințe

- `references/evidence-schema.md` — schema completă a Evidence Index, sursă și enum per coloană, regulile `UNKNOWN`/`NOT_APPLICABLE`/`UNCLASSIFIED`.
- `references/naming-convention.md` — nume de fișiere, tag/title GitHub, Evidence ID, Query group ID, regula capture date/time, anomalii de arhivare, layout-ul directorului de output.
- `references/release-policy.md` — ordinea generate→validate→freeze→checksum→verify→package/release (§1.1), imutabilitatea raw evidence, versionare arhivă vs. metadata, politică de release/overwrite, git, privacy.
- `references/readme-template.md` — structura celor 17 secțiuni + boilerplate fix.
- `references/config-schema.md` — schema `evidence-package.yaml`.
- `examples/evidence-package.example.yaml` — config de pornire.
- `src/content/arhitectura/evidence-release-pipeline-audit.md` — document de audit intern, citește fiecare fișier de mai sus și explică pas cu pas ce face agentul (nu e wired în routing-ul site-ului).

## 7. Checklist final obligatoriu

- [ ] Arhiva brută neatinsă (nicio scriere pe `archive.path`) și SHA-256-ul ei confirmat identic între STEP 2 și STEP 8.
- [ ] Nicio valoare determinist-calculabilă nu a fost introdusă manual/ghicită de Claude.
- [ ] Toate celulele de clasificare sunt completate cu valoare reală sau sentinel explicit (`UNKNOWN`/`NOT_APPLICABLE`), nu `UNCLASSIFIED` rămas.
- [ ] `evidence-review.csv` a fost prezentat userului (STEP 6), iar elementele critice au fost confirmate explicit înainte de STEP 7.
- [ ] `validate_evidence.mjs` → `CONTENT_VALID` (sau `HUMAN_REVIEW_REQUIRED` confirmat explicit) înainte de `freeze_artifacts.mjs` (STEP 9).
- [ ] Evidence Index-ul și README-ul sunt înghețate (0o444) înainte de `build_checksums.mjs` (STEP 10).
- [ ] `verify_checksums.mjs` (STEP 11) și re-verificarea din `github_release.mjs` (STEP 14) ambele `PASS` înainte de orice apel `gh` mutativ.
- [ ] Niciun `PRIVACY_REVIEW_REQUIRED` neconfirmat de user înainte de upload.
- [ ] Confirmarea explicită a userului obținută înainte de `github_release.mjs --execute` (STEP 13).
- [ ] Release-ul rămâne DRAFT — niciun apel de publicare.
- [ ] Niciun `git add`/`commit`/`push` pe arhiva brută sau pe `evidence/` fără cerere explicită a userului.

## Utilizare

```
/evidence-release evidence/incoming/example-entity-t1.evidence-package.yaml
```

Nu face `git add`, `git commit`, `git push` sau publicare de release fără
cerere explicită a userului.
