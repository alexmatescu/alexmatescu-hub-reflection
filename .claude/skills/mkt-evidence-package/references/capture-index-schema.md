# Capture Index — schema

Un rând pentru fiecare captură, adică pentru fiecare Evidence ID. Fișier:
`<instance-slug>_capture-index_v<metadata_version>.csv`. Coloanele apar în
ordinea de mai jos. Fiecare celulă conține un singur fapt.

Fiecare coloană are o singură sursă:

- **SEAL**: scrisă la sigilare, din bytes și din calea fișierului.
- **DETERMINISTIC**: calculată de script din arhivă sau din config.
- **CLASIFICARE**: completată de Claude sau de user în `capture-classification.csv`.
- **DERIVAT**: calculată de script din alte coloane, după o regulă fixă.

| # | Coloană | Sursă | Valori | Note |
|---|---|---|---|---|
| 1 | `evidence_id` | SEAL | `naming-convention.md` §3 | |
| 2 | `instance_id` | DETERMINISTIC | din config | |
| 3 | `instance_type` | DETERMINISTIC | `PILOT` / `T0` / `F<n>` | |
| 4 | `original_relative_path` | SEAL | verbatim | |
| 5 | `original_filename` | SEAL | verbatim | |
| 6 | `archive_surface_folder` | SEAL | verbatim | Primul segment din cale. |
| 7 | `mapped_surface` | DETERMINISTIC | cod de suprafață | Din detecția automată (`naming-convention.md` §2.1). `surface_map` din config o suprascrie doar dacă e declarat. |
| 8 | `observed_surface` | CLASIFICARE | cod de suprafață / `UNKNOWN` | Suprafața care se vede pe ecran. |
| 9 | `query_id` | CLASIFICARE | ID din `query-set.csv` / `NOT_APPLICABLE` | `NOT_APPLICABLE` doar pentru `setup` / `incident` fără query. |
| 10 | `query_text_visible` | CLASIFICARE | verbatim / `NOT_VISIBLE` | Textul query-ului așa cum apare în captură. |
| 11 | `query_text_matches_set` | DERIVAT | `YES` / `NO` / `NOT_APPLICABLE` | Comparație exactă cu `query_exact`. `NO` → intră automat în review. |
| 12 | `attempt` | CLASIFICARE | întreg ≥1 | |
| 13 | `execution_id` | DERIVAT | `naming-convention.md` §4 | Din `mapped_surface` + `query_id` + `attempt`. |
| 14 | `capture_role` | CLASIFICARE | vezi enum | |
| 15 | `part_number` | CLASIFICARE | întreg ≥1 | Poziția capturii în cadrul execuției. |
| 16 | `parts_total` | CLASIFICARE | întreg ≥1 | |
| 17 | `serp_page` | CLASIFICARE | întreg ≥1 / `NOT_APPLICABLE` | Doar pentru SEARCH. |
| 18 | `organic_positions_visible` | CLASIFICARE | `a-b` / `NONE` / `NOT_APPLICABLE` | Pozițiile organice continue, numărate peste pagini. |
| 19 | `blocks_visible` | CLASIFICARE | listă separată prin `;` din: `ORGANIC`, `ADS`, `LOCAL`, `PAA`, `AI_OVERVIEW`, `GENERATED_ANSWER`, `REMOVAL_NOTICE`, `OTHER`; `NOT_APPLICABLE` pentru suprafețele AI | Doar ce se vede. `GENERATED_ANSWER` = blocul de răspuns generat de Bing deasupra rezultatelor. `REMOVAL_NOTICE` = notificarea că unele rezultate au fost eliminate (ex. Bing „Some results have been removed”), cu textul în `notes`. `OTHER` = carusele video și alte module; detaliul în `notes`. |
| 20 | `execution_status` | CLASIFICARE | `COMPLETED` / `CLARIFICATION_REQUESTED` / `UNAVAILABLE` / `TECHNICAL_ERROR` / `UNKNOWN` | Se completează la nivel de execuție și se repetă pe fiecare captură a ei. |
| 21 | `response_relevance` | CLASIFICARE | `RELEVANT` / `PARTIALLY_RELEVANT` / `IRRELEVANT` / `UNCERTAIN` / `NOT_APPLICABLE` | La nivel de execuție (SKILL §2.2). |
| 22 | `relevance_basis` | CLASIFICARE | text / gol | Obligatoriu dacă col. 21 nu e `RELEVANT` / `NOT_APPLICABLE`. Descrie ce se vede pe ecran. |
| 23 | `ai_overview_status` | CLASIFICARE | `CAPTURED` / `NOT_CAPTURED` / `NOT_SHOWN` / `UNKNOWN` / `NOT_APPLICABLE` | Doar pentru `GSEARCH`, la nivel de execuție (aceeași valoare pe toate capturile ei). `CAPTURED` = blocul AI Overview se vede în cel puțin o captură a execuției. `NOT_SHOWN` doar când partea de sus a SERP-ului se vede și blocul lipsește. Pilotul din 2026-10-09: `NOT_CAPTURED`. |
| 24 | `capture_time_on_screen` | CLASIFICARE | `YYYY-MM-DD HH:MM` / `NOT_VISIBLE` | |
| 25 | `filename_timestamp_raw` | SEAL | verbatim / `NONE` | |
| 26 | `filename_timestamp_parsed` | DETERMINISTIC | ISO local / `UNKNOWN` | Sursa e `OS_FILENAME`. Nu e oră observată. |
| 27 | `mapping_basis` | CLASIFICARE | text | Cum s-a făcut legătura captură → execuție: text vizibil, ordine în subfolder, continuitate vizuală. Obligatoriu. |
| 28 | `mapping_status` | CLASIFICARE | `CONFIRMED` / `REVIEW_REQUIRED` | |
| 29 | `archive_anomaly` | CLASIFICARE | `NONE` / `MISFILED_SURFACE` / `UNEXPECTED_FILE` / `ORDER_CONFLICT` / `OTHER` | |
| 29a | `session_context_status` | DERIVAT | `CONSISTENT` / `CONFLICT` / `NOT_VISIBLE` | Din `session-context.csv`, la nivel de execuție. |
| 29b | `execution_contamination_status` | DERIVAT | `NONE_OBSERVED` / `SUSPECTED` / `CONTAMINATED` / `NOT_ASSESSABLE` | Valoarea cea mai severă dintre capturile execuției (`session-context-schema.md` §4). |
| 30 | `privacy_flag` | CLASIFICARE | `NONE_OBSERVED` / `PRIVACY_REVIEW_REQUIRED` | |
| 31 | `review_status` | CLASIFICARE | `REVIEWED` / `REVIEW_REQUIRED` | |
| 32 | `file_size_bytes` | SEAL | întreg | |
| 33 | `image_dimensions_pixels` | DETERMINISTIC | `WxH` / `UNKNOWN` | |
| 34 | `sha256` | SEAL | 64 hex | |
| 35 | `duplicate_status` | DERIVAT | `UNIQUE` / `DUPLICATE` | Din SHA-256. |
| 36 | `duplicate_of_evidence_id` | DERIVAT | ID / `NOT_APPLICABLE` | |
| 37 | `reviewer_comment` | CLASIFICARE | text / gol | Completat doar de user. |
| 38 | `notes` | CLASIFICARE | text / gol | |

## Enum `capture_role`

| Valoare | Când |
|---|---|
| `query_input` | Captura arată doar query-ul introdus, fără rezultat. |
| `main_response` | Răspunsul AI sau SERP-ul organic al execuției. |
| `clarification_response` | AI-ul a cerut o clarificare în loc să răspundă. Răspunsul se păstrează ca atare. |
| `serp_supplemental` | Capturi dominate de reclame sau module locale, fără rezultate organice. |
| `setup` | Setări, stare de cont, configurare. |
| `incident` | Eroare, indisponibilitate, captcha. |

## Sentinele

- `UNKNOWN`: câmpul are sens, a fost examinat și nu poate fi stabilit.
- `NOT_VISIBLE`: informația nu apare pe ecran.
- `NOT_APPLICABLE`: câmpul nu se aplică acestui rând.
- `NO`: fals, în mod observabil. Nu înlocuiește niciodată „nu se poate stabili”.
- `UNCLASSIFIED`: scris automat de script pentru o celulă de clasificare lăsată goală. Blochează `--finalize`.

Coloanele care pot rămâne goale: `relevance_basis` (doar când nu e cerut), `reviewer_comment`, `notes`.
