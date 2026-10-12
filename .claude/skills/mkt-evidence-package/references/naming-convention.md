# Convenții de nume și identificatori

## 1. Principiu

Toți identificatorii sunt asamblați de scripturi din părți declarate în
config sau clasificate de Claude/user. Claude nu scrie niciodată un ID
formatat de mână.

## 2. Coduri de suprafață

| Cod | Suprafață | Tip |
|---|---|---|
| `GSEARCH` | Google Search organic | SEARCH |
| `BSEARCH` | Bing Search organic | SEARCH |
| `GAIMODE` | Google AI Mode | AI |
| `CHATGPT` | ChatGPT | AI |
| `CLAUDE` | Claude | AI |
| `COPILOT` | Copilot | AI |
| `GEMINI` | Gemini | AI |
| `PERPLEXITY` | Perplexity | AI |

AI Overview nu are cod propriu: e un bloc al execuției `GSEARCH`.
Codurile noi se adaugă doar documentat aici, înaintea rulării.

### 2.1 Detectarea automată a suprafeței după numele subfolderului

1. Se normalizează numele: NFC, se elimină prefixul ordinal `^\d+\s*[.)_-]?\s*`, care se păstrează separat ca `folder_ordinal`. Rezultatul se trece în litere mici și spațiile multiple se reduc la unul.
2. Rezultatul se compară prin **egalitate exactă** cu tabelul de aliasuri. Nu se folosește potrivire parțială, deci „google” nu prinde „google ai mode”.
3. Un alias găsit înseamnă că maparea se acceptă automat, cu baza `FOLDER_NAME_ALIAS`.
4. Agentul se oprește și întreabă userul (`AskUserQuestion`) doar dacă un subfolder nu are alias sau dacă două subfoldere ajung la același cod.

| Cod | Aliasuri (după normalizare) |
|---|---|
| `GSEARCH` | `google`, `google search`, `google organic`, `google serp`, `google search + ai overview`, `google + ai overview`, `google search ai overview`, `google search si ai overview` |
| `BSEARCH` | `bing`, `bing search`, `bing organic`, `bing serp` |
| `GAIMODE` | `google ai mode`, `ai mode`, `gaimode` |
| `CHATGPT` | `chatgpt`, `chat gpt`, `openai chatgpt` |
| `CLAUDE` | `claude`, `claude.ai` |
| `COPILOT` | `copilot`, `microsoft copilot`, `bing copilot` |
| `GEMINI` | `gemini`, `google gemini` |
| `PERPLEXITY` | `perplexity`, `perplexity ai` |

Maparea pe folder e o premisă. Suprafața care se vede în captură o confirmă
sau o contrazice. Dacă o contrazice, se marchează `MISFILED_SURFACE` și
fișierul nu se mută.

## 3. Evidence ID — atribuit la sigilare

```
<instance_id>-E<NNN>
```

Exemplu: `MKT-RO-AIV-2026Q4-PILOT-E001`. `NNN` are 3 cifre, sau 4 dacă instanța
depășește 999 de capturi (lățimea se fixează la sigilare, pentru toată
arhiva). Ordinea e calea relativă normalizată NFC, sortată după cod Unicode.
Ordinea e de identificare, nu cronologică.

**Unicode.** macOS scrie numele fișierelor în forma descompusă (NFD). De
exemplu, „ă” din „Captură” apare ca `a` + U+0306. Manifestul păstrează:

- `original_relative_path`, cu bytes-ii exacți de pe disc. Zip-ul și verificarea se fac pe aceste căi.
- `relative_path_nfc`, care se folosește doar pentru sortare și afișare.

Numele nu se rescriu niciodată.

**Stabilitate:** un Evidence ID e legat permanent de perechea (cale relativă,
SHA-256). La o arhivă nouă (`archive.version` nouă), perechile identice își
păstrează ID-ul. Fișierele noi primesc numere după ultimul ID existent, iar
un număr nu se reutilizează niciodată.

### 3.1 Documentele operatorului (Document ID)

Un fișier direct în rădăcina folderului de capturi, cu extensie de document
(`docx`, `doc`, `pdf`, `md`, `txt`, `rtf`, `odt`, `pages`, `xlsx`, `csv`,
`yaml`, `yml`), e un **document al operatorului**, de exemplu notițele rulării
într-un fișier Word. El:

- se sigilează: SHA-256 în manifest (`operator_documents`), intră în zip după capturi și trece prin aceleași verificări;
- primește `<instance_id>-D<NN>` (ordinea: cale NFC), nu Evidence ID, și nu are rând în capture index sau în session context;
- se citește la STEP 5: declarațiile din el se transcriu în fișa rulării, cu trimitere la Document ID.

Orice alt fișier din rădăcină (de exemplu o captură fără subfolder) sau un
fișier care nu e captură într-un subfolder de suprafață oprește sigilarea și
cere decizia userului.

### 3.2 Evidence ID al blocului AI Overview

```
<Evidence ID>-AIO
```

Exemplu: `MKT-RO-AIV-2026Q4-PILOT-2-E001-AIO`.

AI Overview e un bloc integrat în SERP-ul Google. Nu are subfolder, rulare
sau capturi proprii: se capturează în aceeași execuție `GSEARCH`, în aceleași
fișiere ca rezultatele organice. În evidențe e tratat distinct: fiecare
captură `GSEARCH` în care se vede blocul (`blocks_visible` conține
`AI_OVERVIEW`) primește un Evidence ID al blocului, format din Evidence ID-ul
capturii plus sufixul `-AIO`.

- ID-ul e derivat de `build_capture_index.mjs`, nu la sigilare. Nu e un fișier: trimite la aceeași captură, cu același SHA-256, și nu are rând în manifest.
- Capture index-ul îl scrie în `ai_overview_evidence_id`, iar partea blocului în `ai_overview_part` (`1/2`, `2/2`…, în ordinea `part_number`).
- Rândurile din registru cu `serp_block = AI_OVERVIEW` citează **doar** ID-uri `-AIO`. Celelalte rânduri nu citează niciodată un ID `-AIO`. Scripturile opresc orice abatere.
- Răspunsul generat de Bing (`GENERATED_ANSWER`) nu primește ID de bloc.

Decizie: RV-05 din raportul pilotului 2, 2026-10-12.

## 4. Execution ID și Observation ID

```
execution_id   = <instance_id>-<SURFACE>-<QUERY_ID>[-A<n>]
observation_id = <execution_id>-O<NNN>
```

Exemplu: `MKT-RO-AIV-2026Q4-PILOT-GSEARCH-Q-DISC-001` și
`MKT-RO-AIV-2026Q4-PILOT-GSEARCH-Q-DISC-001-O017`.

`-A<n>` apare doar de la a doua încercare (reîncercare după eroare tehnică).
Prima încercare nu are sufix. `O<NNN>` urmează ordinea observată: poziția
afișării pentru SERP (blocurile AI Overview, reclamele și răspunsul generat
apar în ordinea în care se văd pe pagină; `SERP_SNIPPET` imediat după
părintele lui), ordinea primei apariții pentru AI (`AI_CITATION` după toate
rândurile `AI_RESPONSE` și `AI_IMAGE_TEXT`). `observed_order` e unic în
execuție: e cheia deciziilor de review.

## 5. Fișiere și tag

```
<instance-slug>_capture-archive_v<archive.version>.zip
<instance-slug>_capture-manifest_v<archive.version>.json
<instance-slug>_query-set_<query_set_id>.csv
<instance-slug>_run-sheet_v<metadata_version>.yaml          # doar dacă există
<instance-slug>_session-context_v<metadata_version>.csv
<instance-slug>_capture-index_v<metadata_version>.csv
<instance-slug>_observation-register_v<metadata_version>.csv
<instance-slug>_readme_v<metadata_version>.md
<instance-slug>_sha256sums_v<metadata_version>.txt
```

Tag GitHub (doar dacă release-ul e activat):
`mkt-evidence-<instance-slug>-v<archive.version>`. Titlu: `<instance_id> — Discovery Evidence Package v<archive.version>`.

## 6. Ora capturii — trei surse, niciodată amestecate

| Câmp | Sursă |
|---|---|
| `capture_time_on_screen` | vizibilă în captură, altfel `NOT_VISIBLE` |
| `filename_timestamp_raw` / `filename_timestamp_parsed` | din numele generat de sistemul de operare (`OS_FILENAME`) |
| ora din fișa rulării | declarată de operator, la nivel de suprafață/sesiune |

`mtime` din filesystem sau din zip nu ajunge niciodată în index.

### 6.1 Detectarea automată a tiparului din nume

Agentul testează pe toate numele de fișiere, în ordine, tiparele din
biblioteca de mai jos, după normalizarea NFC. Tiparul ales este primul care
se potrivește cu **toate** fișierele. Dacă niciun tipar nu acoperă toate
fișierele, se parsează fiecare fișier cu tiparul care i se potrivește, iar
cele fără potrivire rămân cu `filename_timestamp_parsed = UNKNOWN`.
Acoperirea (fișiere potrivite din total) apare în `detection-report.json`.

| ID | Tipar (după NFC) | Exemplu |
|---|---|---|
| `MACOS_RO` | `^Captură de ecran din (?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) la (?<hour>\d{1,2})\.(?<minute>\d{2})\.(?<second>\d{2})(?: \(\d+\))?\.(png|jpg|jpeg)$` | `Captură de ecran din 2026-10-09 la 17.25.51.png` |
| `MACOS_EN` | `^Screenshot (?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) at (?<hour>\d{1,2})\.(?<minute>\d{2})\.(?<second>\d{2})(?:[\s\u202f](?<ampm>AM|PM))?(?: \(\d+\))?\.(png|jpg|jpeg)$` | `Screenshot 2026-10-09 at 5.25.51 PM.png` |
| `WINDOWS_SNIP` | `^Screenshot (?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) (?<hour>\d{2})(?<minute>\d{2})(?<second>\d{2})\.(png|jpg|jpeg)$` | `Screenshot 2026-10-09 172551.png` |

Timestamp-ul extras din nume reprezintă ora locală a dispozitivului.
Fusul orar se ia din fișa rulării. Când în același folder există două
fișiere cu același timestamp (sufixul ` (2)`), ordinea lor se stabilește
după numele complet și se marchează în `notes`.

Valoarea extrasă are sursa `OS_FILENAME`. Ea poate servi ca
`mapping_basis` pentru ordinea capturilor, dar nu înlocuiește
`capture_time_on_screen`.

## 7. Anomalii de arhivare

Documentate, nu corectate: `MISFILED_SURFACE` (subfolderul diferă de
suprafața observată), `UNEXPECTED_FILE`, `ORDER_CONFLICT` (ordinea fișierelor
contrazice textul vizibil), `OTHER` (cu detaliu în `notes`).

## 8. Layout

```
evidence/
  incoming/mkt/<instance-slug>_capture-archive_v<av>.zip      # creat la SEAL
  work/mkt/<instance-slug>/
    capture-manifest.json
    detection-report.json         # subfoldere → suprafețe, tipar de nume, acoperire, fișiere de sistem
    extracted/                    # copie de inspecție din zip, nu se editează
    inventory.json
    query-set.csv
    session-context.csv           # staging, Claude/user (STEP 5)
    session-context-review.csv
    capture-classification.csv    # staging, Claude/user
    capture-index.staging.csv
    capture-review.csv
    observation-staging.csv       # staging, Claude/user
    observation-register.staging.csv
    observation-review.csv
    review-decisions.csv          # deciziile REVIEW (2), una pe rând (STEP 10)
    observation-staging.pre-review.csv  # copia dinaintea aplicării deciziilor
    stats.json
    processing-log.jsonl
  output/mkt/<instance-slug>/<metadata_version>/
    ... fișierele din §5 (arhiva = link simbolic canonic) + validation-report.md
```

Căile sunt sub `evidence/incoming|work|output`, deja în `.gitignore`.
