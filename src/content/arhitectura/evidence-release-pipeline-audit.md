**AUDIT TEHNIC INTERN**

Pipeline-ul `evidence-release` — de la arhivă brută la GitHub Draft Release

Document de audit tehnic, scris pentru a permite unei persoane care nu a citit codul să verifice, pas cu pas, exact ce face agentul `evidence-release` cu o arhivă de dovezi și cu fișierele publicate ca release.

| **Document** | Audit pipeline `evidence-release` |
|----|----|
| **Domeniu** | `.claude/skills/evidence-release/` (agent Claude Code, nu cod de site) |
| **Scop document** | Auditabilitate — nu documentație de utilizare |
| **Autor** | Alex Matescu |
| **Generat de** | Claude, la cererea explicită a autorului, prin citirea directă a fiecărui fișier menționat |
| **Ultima verificare față de cod** | 13 septembrie 2026 |
| **Statut agent audit at** | Activ, testat end-to-end pe fixture, neutilizat încă pe o arhivă reală |

Acest document **nu** e wired în routing-ul site-ului (`src/routes`, `src/data/lab-seo.ts`, `Lab.tsx` etc.) și nu apare pe nicio pagină publică. E o notă tehnică internă, stocată în `src/content/arhitectura/` pentru referință, nu pentru publicare.

---

## 0. Ce e acest agent, în o propoziție

`evidence-release` transformă o arhivă ZIP de screenshot-uri (dovezi brute pentru un studiu de caz AI Visibility Lab) într-un pachet documentat, verificabil prin checksum, gata ca **draft** de GitHub Release — fără să scrie vreo interpretare, fără să modifice vreun byte din arhiva originală, și fără să publice nimic public fără confirmarea ta explicită.

Nu e un skill editorial. Nu decide dacă un rezultat e HIT sau COLIZIUNE. Nu scrie studiul de caz. Doar pregătește dovezile ca să poată fi citate de studiul de caz (`publica-studiu-de-caz`, alt skill, separat).

Secvența completă a pipeline-ului — identică, cuvânt cu cuvânt, cu descrierea din frontmatter-ul `SKILL.md` și cu numerotarea STEP-urilor din §4 mai jos:

```
RAW EVIDENCE → INVENTORY → CLASSIFICATION → REVIEW → EVIDENCE INDEX → README
  → VALIDATION → FREEZE → CHECKSUMS → VERIFICATION → GITHUB DRAFT RELEASE
```

Corespondența cu STEP-urile detaliate în §4: RAW EVIDENCE = `archive.path`, dat ca input la STEP 1 (nu e un pas propriu-zis, e ce primești tu); INVENTORY = STEP 2–3; CLASSIFICATION = STEP 4; REVIEW = STEP 5–6; EVIDENCE INDEX + README = STEP 7; VALIDATION = STEP 8; FREEZE = STEP 9; CHECKSUMS = STEP 10; VERIFICATION = STEP 11; GITHUB DRAFT RELEASE = STEP 12–15 (sumar, confirmare, upload, URL).

---

## 1. Harta completă a fișierelor de care depinde

Tot ce vezi mai jos e citit efectiv de Claude când rulează skill-ul — nu e o listă parțială.

```
.claude/skills/evidence-release/
├── SKILL.md                          ← orchestrarea: cele 15 STEP-uri, ce comandă rulează la fiecare
├── references/
│   ├── evidence-schema.md            ← cele 43 de coloane ale Evidence Index, sursa fiecăreia
│   ├── naming-convention.md          ← nume de fișiere, Evidence ID, Query group ID, layout de output
│   ├── release-policy.md             ← ordinea generate→validate→freeze→checksum→verify→release
│   ├── readme-template.md            ← structura fixă a README-ului generat (17 secțiuni)
│   └── config-schema.md              ← câmpurile din evidence-package.yaml
├── scripts/
│   ├── lib/
│   │   ├── common.mjs                ← toate utilitarele deterministe (hash, YAML, CSV, freeze, gh)
│   │   └── schema.mjs                ← lista de coloane, sursă unică de adevăr pentru CSV
│   ├── inventory_evidence.mjs        ← STEP 2
│   ├── hash_evidence.mjs             ← STEP 3
│   ├── build_index.mjs               ← STEP 5 și STEP 7 (index)
│   ├── build_readme.mjs              ← STEP 7 (README)
│   ├── validate_evidence.mjs         ← STEP 8
│   ├── freeze_artifacts.mjs          ← STEP 9
│   ├── build_checksums.mjs           ← STEP 10
│   ├── verify_checksums.mjs          ← STEP 11
│   └── github_release.mjs            ← STEP 14
└── examples/
    └── evidence-package.example.yaml ← model de config, de copiat per pachet nou
```

Fiecare rulare a agentului produce, în afara acestui folder, un workspace propriu (nu e parte din skill, e generat la runtime):

```
evidence/
├── incoming/                          ← tu pui arhiva ZIP aici (sau oriunde, cu path în config)
├── work/<entity-slug>/<measurement-point>/
│   ├── extracted/                     ← copie needitabilă a arhivei, doar pentru inspecție vizuală
│   ├── inventory.json                 ← fapte deterministe: hash arhivă, hash/dimensiune per fișier
│   ├── classification.csv             ← judecățile lui Claude/tale, per screenshot
│   ├── evidence-index.staging.csv     ← previzualizare, înainte de finalizare
│   ├── evidence-review.csv            ← lista de „mai trebuie verificat asta"
│   ├── index-stats.json               ← numere agregate (câte platforme, câte contaminări...)
│   ├── release-notes.md               ← corpul release-ului, generat mecanic
│   └── processing-log.jsonl           ← jurnal append-only, o linie per operație
└── output/<entity-slug>/<measurement-point>/<metadata-version>/
    ├── <slug>_<mp>_evidence-archive_v<versiune arhivă>.zip   ← link simbolic către arhiva ta, nu o copie
    ├── <slug>_<mp>_evidence-index_v<metadata-version>.csv    ← îngheţat (read-only) după STEP 9
    ├── <slug>_<mp>_readme_v<metadata-version>.md             ← îngheţat (read-only) după STEP 9
    ├── <slug>_<mp>_sha256sums_v<metadata-version>.txt        ← manifestul de integritate
    └── validation-report.md                                  ← raportul STEP 8, nu se publică
```

`evidence/incoming`, `evidence/work` și `evidence/output` sunt în `.gitignore` — nimic din arhiva brută sau din workspace nu ajunge în istoricul git. Dovezile ajung public doar ca asset-uri ale unui GitHub Release, niciodată ca fișiere din repo.

---

## 2. Unde se situează în arhitectura site-ului

### 2.1 — Nu e cod de site, e un agent Claude Code

Tot ce descrie acest document trăiește în `.claude/skills/`, alături de celelalte trei skill-uri de publicare deja existente: `publica-articol-blog`, `publica-articol-lab`, `publica-studiu-de-caz`. Nimic din `evidence-release` e importat de `src/routes`, `src/pages`, `src/data/lab-seo.ts` sau orice alt fișier care generează efectiv paginile de pe `delamatescu.ro`. Rulează exclusiv în sesiunea Claude Code, prin `node` și `gh`, direct în terminal.

### 2.2 — Cum se leagă de `publica-studiu-de-caz`

`publica-studiu-de-caz` (skill separat, editorial) citează, în corpul unui studiu de caz publicat pe `/lab/studii-de-caz`, dovezi care trebuie să existe undeva verificabil. Standardul de dovezi al laboratorului (AVL-201 §12, documentul normativ din `src/content/lab/AVL/AVL-201_...md`) cere: „captură integrală, export, URL de partajare, înregistrare video, log de server, registru de rulare cu timestamp" — nu „mi-a apărut". `evidence-release` e mecanismul concret prin care o arhivă de capturi devine exact acel tip de dovadă verificabilă, cu un URL de GitHub Release stabil la care studiul de caz poate trimite.

Cele două skill-uri nu se suprapun niciodată:

| | `evidence-release` | `publica-studiu-de-caz` |
|---|---|---|
| Interpretează rezultate (HIT/COLIZIUNE/etc.) | Niciodată | Da, cu dovada corespunzătoare |
| Scrie text editorial | Niciodată | Da |
| Modifică arhiva brută | Niciodată | N/A — nu o vede |
| Publică pe `delamatescu.ro` | Niciodată (nici draft-ul GitHub nu e pe site) | Da, dar se oprește înainte de `git push`/deploy |
| Ține evidența taxonomiei AVL-201 (§2.3) | Nu — nu cunoaște taxonomia | Da |

### 2.3 — De ce T0/T1/T2 aici, dar F0/F1/F2 în studiile de caz

Studiile de caz publicate (`src/data/lab-content/tabula-rasa-entity-resolution-studiu-de-caz.ts`, sursa `.md` din `src/content/studii de caz/01. Alex Matescu/`) folosesc convenția editorială F0→F3 din AVL-201/AVL-001 („Tabula Rasa F0: Baseline Measurement Specification"). `evidence-release` refuză deliberat această convenție și impune `T0`/`T1`/`T2`... (`naming-convention.md` §1, verificat de `MEASUREMENT_POINT_RE` în `lib/common.mjs`) — pentru că acest agent trebuie să funcționeze identic pentru orice entitate viitoare (o companie, un produs, un oraș), nu doar pentru Tabula Rasa. Nu presupune că viitoarele studii vor folosi terminologia F-phase a acestui laborator specific.

### 2.4 — Relația cu documentele normative AVL

`evidence-release` nu citește și nu depinde de niciun fișier din `src/content/lab/AVL/` sau `src/data/lab-content/avl-*.ts` la runtime — nu are nicio dependență de cod cu ele. Relația e conceptuală: agentul e implementarea tehnică a cerinței de „arhivă de dovezi datate și înghețate, cu manifest de fișiere și checksum-uri" din AVL-201 §21.3 („Manifestul snapshot-ului") și din AVL-001 §9 (separarea observație/inferență) — dar AVL-201 însuși nu menționează SHA-256, freeze la nivel de filesystem, sau GitHub Release; acelea sunt decizii de implementare ale acestui skill, nu cerințe extrase automat din documentul normativ.

---

## 3. Principiul de arhitectură din care derivă totul

Fiecare decizie de design din acest agent decurge din o singură regulă (`SKILL.md` §1):

> **Claude clasifică, CODE execută.**

Claude (eu, în sesiunea de lucru) poate: să deschidă vizual un screenshot cu `Read`, să identifice ce platformă arată, ce query e vizibil, dacă e continuarea altei capturi, dacă arată o contaminare de sesiune. Aici se termină rolul meu.

Un script (`.mjs`, Node, fără librării externe) face absolut tot restul: calculează hash-uri, citește dimensiuni de imagine din header-ul binar al fișierului, sortează, atribuie identificatori, scrie CSV/README/checksum-uri, verifică, vorbește cu `gh`. Niciun script nu inventează o valoare — un câmp pe care nu-l poate determina devine `UNKNOWN`, `NOT_APPLICABLE` sau `UNCLASSIFIED` (trei sensuri diferite, nu interschimbabile — §5 mai jos), niciodată o presupunere.

A doua regulă, la fel de strictă (`SKILL.md` §1.1):

> **Nimic din ceea ce intră în manifestul de checksum-uri nu mai este modificat după ce a fost generat.**

Asta explică de ce pipeline-ul are exact ordinea pe care o are: generează → validează → **îngheață fișierele pe disc (chmod read-only)** → calculează checksum-uri → verifică-le imediat → verifică-le din nou chiar înainte de upload. Fiecare din aceste verificări e implementată ca un cod care oprește execuția (`process.exit(1)`), nu ca o instrucțiune pe care aș putea să o „interpretez" diferit într-o sesiune viitoare.

---

## 4. Parcurgerea completă, pas cu pas (STEP 1–15)

Fiecare pas de mai jos e exact ce rulează, în ordine, de la o comandă `/evidence-release <config>`. Comenzile arătate rulează din rădăcina repository-ului.

### STEP 1 — Citirea configului

Nu există niciun cod care rulează încă. Claude citește `evidence-package.yaml` (structura din `references/config-schema.md`) și verifică pur textual că există câmpurile obligatorii: `entity_name`, `entity_slug`, `entity_code`, `study_name`, `measurement_point`, `archive.path`, `archive.version`, `metadata_version`. Dacă lipsește vreunul și nu poate fi dedus fără ambiguitate, Claude **întreabă** — nu completează cu o presupunere.

Config-ul e parsat efectiv de `lib/common.mjs::parseSimpleYaml` — **nu** e un parser YAML general, e un parser scris special pentru forma exactă de care are nevoie acest fișier (chei simple, o singură imbricare, liste simple). Motivul: proiectul nu are nicio librărie YAML în `package.json`, și agentul nu are voie să adauge o dependență nouă fără aprobare. Dacă un config folosește o formă YAML mai complexă (ancore, scalari multi-linie), parserul **eșuează explicit** — nu-l interpretează greșit în silențiu.

### STEP 2 — Validare + inventariere arhivă brută (`inventory_evidence.mjs`)

```
node .claude/skills/evidence-release/scripts/inventory_evidence.mjs <config>
```

1. Verifică că `archive.path` există pe disc.
2. Rulează `unzip -t <arhivă>` — testul de integritate al utilitarului de sistem `unzip`. Dacă arhiva e coruptă, se oprește aici.
3. Calculează **SHA-256 al arhivei întregi** (`sha256File`, din `lib/common.mjs` — citește fișierul ca stream, fără să-l încarce integral în memorie) și îl scrie în `inventory.json` ca `archive_sha256`. Acesta e „amprenta la naștere" a dovezilor — comparat mai târziu la STEP 8.
4. Extrage arhiva cu `unzip -o -q <arhivă> -d evidence/work/<slug>/<mp>/extracted/`. Arhiva originală **nu e niciodată deschisă pentru scriere** — doar citită de `unzip -t` și de calculul de hash.
5. Parcurge recursiv `extracted/` (`walkFiles`, sortare alfabetică prin `localeCompare`), ignorând `.DS_Store`, `Thumbs.db` și folderul `__MACOSX` (artefacte tipice ale arhivelor create pe macOS).
6. Pentru fiecare fișier, calculează determinist (fără nicio judecată): `original_relative_path`, `original_filename`, `archive_platform_folder` (primul segment din cale — literal, nu interpretat), `original_session_folder` (segmentele din mijloc), `file_size_bytes`, `archive_mtime_iso` (timpul de modificare de pe disc — **doar informativ**, niciodată folosit ca oră de captură reală, pentru că reflectă când a fost arhivat fișierul, nu când a fost făcut screenshot-ul).
7. Scrie tot în `inventory.json`.
8. Generează sau actualizează `classification.csv` — un fișier-schelet cu o linie per fișier găsit, cu toate coloanele de judecată goale. Dacă `classification.csv` exista deja dintr-o rulare anterioară, rândurile existente **nu sunt șterse** — se păstrează judecățile deja făcute pentru fișierele încă prezente (comportament aditiv, idempotent).

### STEP 3 — Hash și dimensiuni imagine per fișier (`hash_evidence.mjs`)

```
node .claude/skills/evidence-release/scripts/hash_evidence.mjs <config>
```

Pentru fiecare fișier din `inventory.json`:

1. Calculează SHA-256 pe bytes-ii reali din arhivă (nu pe o copie recomprimată).
2. Citește primii 256KB din fișier (`readHeaderBuffer`) și încearcă să extragă lățimea/înălțimea, parsând direct formatul binar — **fără nicio librărie de imagini**:
   - **PNG**: citește chunk-ul `IHDR` (offset fix, octeți 16–23).
   - **GIF**: citește header-ul `GIF87a`/`GIF89a` (octeți 6–9, little-endian).
   - **JPEG**: parcurge markerii `0xFF..` până găsește un marker SOF (start-of-frame) și citește lățimea/înălțimea de acolo — poate fi mai departe în fișier dacă există un blob EXIF mare, de aceea bufferul e de 256KB, nu doar câțiva octeți.
   - **WEBP**: suportă `VP8X` (extended) și `VP8 ` (lossy); **nu** suportă `VP8L` (lossless) — pentru acel caz returnează `UNKNOWN`, deliberat, mai degrabă decât o presupunere.
   - Dacă formatul nu e recunoscut sau bufferul e trunchiat înainte de a ajunge la datele de dimensiune, rezultatul e `UNKNOWN` — niciodată o valoare ghicită.
3. Detectează duplicate byte-identice: dacă două fișiere au același SHA-256, al doilea (în ordine alfabetică de cale) e marcat `DUPLICATE`, cu referință către primul. **Nu se șterge niciun fișier** — doar se marchează.
4. Rescrie `inventory.json` cu aceste câmpuri adăugate.

### STEP 4 — Analiză vizuală și clasificare (Claude, nu cod)

Acesta e singurul pas unde eu (Claude) fac o muncă efectivă de interpretare — și e delimitat strict. Deschid fiecare fișier din `extracted/` cu instrumentul `Read` și determin:

- **Platforma observată vizual** — poate diferi de `archive_platform_folder` calculat automat la STEP 2. Nu corectez folderul; documentez divergența ca `Archive anomaly = MISFILED_PLATFORM`.
- **Dacă e continuarea aceluiași rezultat** — dacă o captură arată vizual continuarea logică a răspunsului din captura anterioară (fără un query nou vizibil), o marchez ca parte din același `query group`, nu creez un query fictiv.
- Query-ul, rolul lui (`main_query`, `clarification`, `contaminated_query`, etc.), orice semn de contaminare a sesiunii, orice anomalie de arhivare.

Rescriu integral `evidence/work/<slug>/<mp>/classification.csv`, păstrând exact header-ul generat la STEP 2. Regulă strictă: fiecare celulă trebuie completată cu o valoare reală **sau** un sentinel explicit (`UNKNOWN`, `NOT_APPLICABLE`) — nu o las goală, cu excepția câtorva coloane legitim opționale (comentariu de review, note, textul unei reformulări când nu există una). O celulă lăsată goală în afara acestor excepții devine automat `UNCLASSIFIED` la pasul următor, și blochează finalizarea.

Dacă un screenshot pare să conțină date personale sensibile (email, telefon, token, parolă), scriu `PRIVACY_REVIEW_REQUIRED` — asta oprește upload-ul mai târziu, la STEP 13, până confirmi explicit.

### STEP 5 — Index de staging (`build_index.mjs`, fără `--finalize`)

```
node .claude/skills/evidence-release/scripts/build_index.mjs <config>
```

Combină `inventory.json` (fapte deterministe) cu `classification.csv` (judecățile mele) într-un tabel complet de 43+ coloane (`FULL_HEADER` din `lib/schema.mjs`), calculând și câmpurile derivate:

- **Evidence ID** (`<ENTITYCODE>-<Tn>-E###`) — atribuit în ordine alfabetică de cale, sortabil și reproductibil. Dacă există deja un index publicat pentru aceeași entitate/măsurare (scanează `evidence/output/<slug>/<mp>/*/`), ID-urile existente `(cale, SHA-256)` sunt **reutilizate**, nu re-atribuite — un fișier nu-și schimbă niciodată identificatorul.
- **Query group ID** — asamblat automat din platformă + sesiune + query ID + numărul de tentativă, urmând formatul din `naming-convention.md` §4. Eu ofer componentele; scriptul construiește string-ul exact, ca să nu existe erori de formatare umane.
- **Continuation flag** / **Continuation of Evidence ID** — derivate automat din `Capture part number` și din coloana `Continuation of original relative path` (eu numesc fișierul primei părți, nu un ID care încă nu există în acel moment).
- **Duplicate status** / **Duplicate of Evidence ID** — din comparația de hash de la STEP 3.
- **Captured at ISO 8601** — compus doar dacă data, ora **și** fusul orar sunt toate cunoscute; altfel `UNKNOWN`.

Scrie trei fișiere: `evidence-index.staging.csv` (previzualizare), `evidence-review.csv` (fiecare celulă `UNCLASSIFIED`, fiecare valoare de enum invalidă, fiecare referință de continuare/duplicat nerezolvată, fiecare `Mapping status = CONFIRMED` fără motiv, fiecare contaminare fără explicație), și `index-stats.json` (numere agregate).

### STEP 6 — Revizuire umană (obligatorie, nu opțională)

Îți arăt sumarul (total capturi, câte mapate, câte necesită review, câte contaminate, câți pași de control, câte duplicate posibile) și, dacă `evidence-review.csv` conține elemente care ar putea schimba un Query ID, o graniță de query, o condiție experimentală sau o platformă — **nu trec la pasul următor fără confirmarea ta explicită**. Dacă corectezi clasificarea, ne întoarcem la STEP 4.

### STEP 7 — Generarea artefactelor finale (`build_index.mjs --finalize` + `build_readme.mjs`)

```
node .claude/skills/evidence-release/scripts/build_index.mjs <config> --finalize
node .claude/skills/evidence-release/scripts/build_readme.mjs <config>
```

`build_index.mjs --finalize` refuză (cu `process.exit(1)`) dacă mai există vreo celulă `UNCLASSIFIED`. Dacă totul e completat, scrie fișierul final:
`evidence/output/<slug>/<mp>/<metadata_version>/<slug>_<mp>_evidence-index_v<metadata_version>.csv`.

`build_readme.mjs` generează README-ul mecanic, din structura fixă descrisă în §6 mai jos — nicio propoziție liberă scrisă de mine în acest moment; fiecare rând e o valoare calculată din index sau un paragraf standard predefinit.

Ambele scripturi verifică, înainte de a scrie, dacă fișierul-țintă e deja **îngheţat** (rezultat al unei rulări anterioare pentru aceeași `metadata_version`) — dacă e, refuză cu un mesaj explicit („bump `metadata_version`, nu edita în loc"), nu suprascriu silențios.

### STEP 8 — Validare de structură/conținut (`validate_evidence.mjs`)

```
node .claude/skills/evidence-release/scripts/validate_evidence.mjs <config>
```

Rulează, fără nicio dependență de `gh` sau de checksum-uri (care încă nu există):

- format `entity_slug` (kebab-case), format `measurement_point` (`Tn` sau `window-YYYY-MM-DD_YYYY-MM-DD`);
- arhiva existentă și integră (`unzip -t` din nou);
- **recalculează SHA-256 al arhivei întregi și îl compară cu `archive_sha256` din `inventory.json`** (STEP 2) — dacă diferă, arhiva a fost suprascrisă/înlocuită/coruptă între timp, și pipeline-ul se oprește aici, înainte ca ceva să fie îngheţat;
- CSV-ul e citibil, ID-urile de dovadă sunt unice, referințele de continuare și de duplicat se rezolvă la un rând existent, SHA-256 e prezent și valid (64 caractere hex) pe fiecare rând, nu există celule `UNCLASSIFIED`/`UNRESOLVED` rămase, toate fișierele din index există efectiv în arhivă, numărul de rânduri corespunde numărului de fișiere din arhivă (altfel `WARNING`, nu blocare automată — poate fi justificat), consistență de versiune între numele fișierelor.

Scrie `validation-report.md` cu status final: `CONTENT_VALID`, `HUMAN_REVIEW_REQUIRED`, sau `VALIDATION_FAILED`. Un `FAIL` oprește complet pipeline-ul — nu se trece la STEP 9 fără regenerare la STEP 7.

### STEP 9 — Îngheţarea artefactelor (`freeze_artifacts.mjs`)

```
node .claude/skills/evidence-release/scripts/freeze_artifacts.mjs <config>
```

Doar dacă STEP 8 a confirmat `CONTENT_VALID` (sau `HUMAN_REVIEW_REQUIRED` confirmat explicit de tine). Face `chmod 0o444` (read-only, la nivel de sistem de fișiere, nu doar o convenție) pe Evidence Index și pe README finalizate. De aici înainte, **orice** script care ar încerca să rescrie aceste fișiere (inclusiv o rulare accidentală repetată a STEP 7) primește o eroare explicită, nu o suprascriere silențioasă. Arhiva brută nu e atinsă aici — n-a fost niciodată deschisă pentru scriere, deci nu are nimic de îngheţat.

`--unfreeze` există ca opțiune, dar strict pentru cazul rar în care o versiune a fost îngheţată din greșeală și **nu a fost încă checksum-uită sau încărcată nicăieri**. Nu e o cale de reparare de rutină.

### STEP 10 — Construirea checksum-urilor (`build_checksums.mjs`)

```
node .claude/skills/evidence-release/scripts/build_checksums.mjs <config>
```

Refuză să ruleze (verifică `isFrozen` pe fiecare fișier) dacă Evidence Index-ul sau README-ul nu sunt deja îngheţate — un checksum calculat pe un fișier care mai poate fi modificat nu garantează nimic.

Creează un **link simbolic** (nu o copie) cu numele canonic al arhivei (`<slug>_<mp>_evidence-archive_v<versiune>.zip`) direct în directorul de output — arhiva reală nu e niciodată copiată sau redenumită, doar referită. Calculează SHA-256 pentru arhivă + index + README, scrie totul în `<slug>_<mp>_sha256sums_v<metadata_version>.txt`, în format compatibil `shasum -a 256 -c`. Manifestul nu se include pe sine în propriul checksum.

Rezultat: directorul `evidence/output/<slug>/<mp>/<metadata_version>/` devine auto-conținut — poți verifica integritatea lui direct, fără să aduni fișiere din altă parte.

### STEP 11 — Verificarea checksum-urilor (`verify_checksums.mjs`)

```
node .claude/skills/evidence-release/scripts/verify_checksums.mjs <config>
```

Rulează imediat `shasum -a 256 -c` (sau `sha256sum -c` pe Linux, sau un fallback intern scris în Node dacă niciun binar nu e disponibil) asupra manifestului tocmai scris — un auto-test pe pasul de checksum însuși, imediat, cât timp starea e proaspătă. Acesta e primul din cele două momente în care checksum-urile sunt reconfirmate (al doilea e la STEP 14, chiar înainte de upload).

### STEP 12 — Sumar pentru tine

Îți arăt: statusul validării (STEP 8), statusul verificării de checksum-uri (STEP 11), sumarul din STEP 5/6, lista exactă de fișiere finale din directorul de output.

### STEP 13 — Confirmare explicită

Te întreb textual: **„Upload package to GitHub draft release?"** — nu continuu fără un răspuns afirmativ clar. Dacă vreun rând are `PRIVACY_REVIEW_REQUIRED`, îl semnalez din nou aici, explicit, înainte de a cere confirmarea.

### STEP 14 — Package/release (`github_release.mjs`)

```
node .claude/skills/evidence-release/scripts/github_release.mjs <config>            # doar plan, nimic executat
node .claude/skills/evidence-release/scripts/github_release.mjs <config> --execute   # doar după STEP 13
```

Fără flag-ul `--execute`, scriptul rulează complet în **mod dry-run**: calculează totul, afișează exact ce ar face, dar nu apelează nicio comandă `gh` care modifică ceva. Flag-ul `--execute` e pasat de mine doar după ce tu ai confirmat explicit la STEP 13 — nu e implicit.

Chiar înainte de a apela `gh`:

1. Verifică din nou (`isFrozen`) că Evidence Index-ul și README-ul sunt încă read-only.
2. **Re-verifică manifestul de checksum-uri** — a doua confirmare, pentru că a putut trece timp între STEP 11 și acum (confirmarea ta la STEP 13). Orice discrepanță oprește tot, înainte de vreun apel către GitHub.
3. Verifică `gh --version` și `gh auth status` — dacă `gh` nu e instalat sau autentificat, se oprește cu instrucțiuni clare, fără să instaleze nimic automat.

Apoi:

4. Verifică dacă există deja un release cu tag-ul calculat (`evidence-<slug>-<mp>-v<versiune arhivă>`). Dacă release-ul există și e **deja public (nu draft)** — STOP, tratat ca imuabil, nu se modifică niciodată automat.
5. Dacă e draft existent, încarcă doar asset-urile care lipsesc (comparate strict după nume) — nu duplică, nu foloseşte niciodată `--clobber`.
6. Dacă nu există niciun release, creează unul nou, explicit `--draft`, cu titlu și notițe generate mecanic din config + statistici (nu scrise liber de mine în acel moment).
7. Verifică din nou lista de asset-uri după upload și raportează dacă ceva lipsește.

Release-ul rămâne **întotdeauna** draft — nicăieri în cod nu există un apel către `gh release edit --draft=false` sau echivalent. Publicarea e o acțiune separată, pe care o faci tu, manual.

### STEP 15 — Raportarea URL-ului

Îți dau URL-ul draft-ului de pe GitHub. **STOP — nu public nimic.**

---

## 5. Schema Evidence Index — cine completează ce

Fișierul `<slug>_<mp>_evidence-index_v<metadata_version>.csv` are 43 de coloane fixe (plus orice `extra_columns` din config, ex. `logged_in`, `model`, `browser`). Fiecare coloană vine dintr-una din exact trei surse, niciodată improvizată:

- **DETERMINISTIC** — calculată direct din bytes/filesystem (ex. `SHA-256`, `File size bytes`, `Archive platform folder`). Nu poate fi editată de mine sau de un om.
- **CLASSIFICATION** — completată de mine (vizual) sau de un om, în `classification.csv` (ex. `Observed platform`, `Query text`, `Contamination status`).
- **DERIVED** — calculată de script din alte coloane, cu o regulă fixă, fără judecată (ex. `Evidence ID`, `Query group ID`, `Continuation flag`, `Duplicate status`).

Patru sentinele distincte, fiecare cu sens diferit — o distincție impusă explicit ca să nu se transforme „nu știu" în „nu":

| Sentinel | Sens |
|---|---|
| `UNKNOWN` | Câmpul e relevant, a fost analizat activ, dar nu se poate determina. |
| `NOT_APPLICABLE` | Câmpul nu se aplică deloc acestui rând. |
| `NO` | Fals, observat activ — niciodată folosit ca „nu știu". |
| `UNCLASSIFIED` | Nimeni nu s-a uitat încă la acest câmp — diferit de `UNKNOWN`. Blochează finalizarea. |

Detaliile complete, coloană cu coloană, sunt în `references/evidence-schema.md` — acest document nu le repetă pe toate, ca să nu devină redundant cu sursa lui de adevăr.

---

## 6. Structura README-ului generat

`build_readme.mjs` produce mecanic un document cu 17 secțiuni fixe (`references/readme-template.md`): Purpose, Subject, Evidence sources, Raw evidence and provenance, Evidence Index, Multi-screenshot responses, Query Set and supplemental evidence, Experimental conditions, Session/context contamination (**omisă complet** dacă nu s-a observat nimic), Archive anomalies (**omisă complet** dacă nu există), Evidence integrity, Interpretation limits, Experimental limitations, Relationship to study, Versioning, Files, Publisher.

Două fraze sunt fixate cuvânt-cu-cuvânt și nu pot fi reformulate de mine:

> AI outputs are time-dependent and can be affected by model version, retrieval/search index state, session/account state, personalization, and platform changes between captures. This package supports **auditability**, **traceability**, and **verification of recorded observations** — and **reproducibility of the documented protocol** — not reproducibility of identical AI output.

și lanțul conceptual:

> Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation

— cu precizarea explicită că acest pachet acoperă doar primii doi termeni; „Observation", „Measurement" și „Interpretation" aparțin studiului de caz care citează pachetul, nu pachetului însuși.

---

## 7. Politica de release — ce nu se întâmplă niciodată

Din `references/release-policy.md`, verificat direct în cod (nu doar declarat):

- **Arhiva brută nu e niciodată deschisă pentru scriere.** Singurele operații pe ea sunt `unzip -t` (test), `unzip -o -q -d ...` (extracție într-un folder separat, needitabil), și citirea de bytes pentru SHA-256.
- **Un asset deja public pe un release publicat nu e niciodată suprascris.** `github_release.mjs` nu apelează niciodată `--clobber`. Dacă release-ul e deja public (non-draft), scriptul se oprește cu `process.exit(1)` înainte de orice altă acțiune.
- **Versiunea arhivei și versiunea metadatelor sunt independente.** O corecție de clasificare sau un README revizuit produce o `metadata_version` nouă, fără să schimbe arhiva sau `archive.version`.
- **Niciun `git add`/`commit`/`push` pe arhivă sau pe `evidence/`** fără cerere explicită — dovezile ajung pe GitHub ca asset de Release, nu ca fișier din repo.
- **Niciun apel de publicare automată.** Draft-ul rămâne draft până apeși tu, manual, „Publish" pe GitHub.
- **Nicio redactare automată de date sensibile.** Un rând marcat `PRIVACY_REVIEW_REQUIRED` oprește upload-ul pentru confirmare, dar nimic nu modifică arhiva pentru a „curăța" conținutul.

---

## 8. Cum poți verifica tu însuți, independent de mine

Toate afirmațiile din acest document sunt verificabile direct, fără să ai încredere doar în text:

```bash
# Verifică integritatea pachetului final (după STEP 10), din propriul director de output:
cd evidence/output/<slug>/<mp>/<metadata_version>
shasum -a 256 -c <slug>_<mp>_sha256sums_v<metadata_version>.txt

# Verifică că index-ul și README-ul sunt efectiv read-only după STEP 9:
ls -la evidence/output/<slug>/<mp>/<metadata_version>/
# -r--r--r--  ...  <slug>_<mp>_evidence-index_v....csv
# -r--r--r--  ...  <slug>_<mp>_readme_v....md

# Verifică jurnalul complet al pipeline-ului pentru o rulare:
cat evidence/work/<slug>/<mp>/processing-log.jsonl

# Verifică sintactic orice script fără să-l rulezi:
node --check .claude/skills/evidence-release/scripts/<script>.mjs
```

Niciun pas din acest document nu se bazează pe memoria mea a codului — a fost scris citind, în această sesiune, conținutul actual, complet, al fiecărui fișier menționat mai sus.
