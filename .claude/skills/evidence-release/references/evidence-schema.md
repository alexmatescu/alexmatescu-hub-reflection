# Evidence Index — schema

This is the authoritative column list for `<entity-slug>_<measurement-point>_evidence-index_v<metadata-version>.csv`.
`scripts/build_index.mjs` writes exactly these columns, in this order, plus any
`extra_columns` declared in `evidence-package.yaml` (appended at the end, never
interleaved). One concept per column — never encode more than one fact in a
cell, never embed JSON in a cell.

Every column is filled by exactly one of three sources. `build_index.mjs`
enforces this — it does not invent a value for any column under any
circumstance:

- **DETERMINISTIC** — computed by script from filesystem/archive bytes. Never
  editable by a human or by Claude.
- **CLASSIFICATION** — supplied by Claude (via visual inspection) or a human
  reviewer in the staging `classification.csv`, then copied through verbatim.
- **DERIVED** — computed by script from other columns (e.g. Evidence ID,
  duplicate detection) using a fixed, auditable rule — never a judgment call.

| # | Column | Source | Allowed values / format | Notes |
|---|---|---|---|---|
| 1 | Evidence ID | DERIVED | `<ENTITYCODE>-<Tn>-E###` | Stable once assigned — see `naming-convention.md` §3. |
| 2 | Entity name | DETERMINISTIC | free text | From config `entity_name`, copied identically to every row. |
| 3 | Measurement point | DETERMINISTIC | `T0`, `T1`, … or `window-YYYY-MM-DD_YYYY-MM-DD` | From config. |
| 4 | Dataset version | DETERMINISTIC | `<metadata_version>` | From config, copied identically to every row. |
| 5 | Archive platform folder | DETERMINISTIC | verbatim or `NOT_APPLICABLE` | The first path segment of `Original relative path`, taken literally (not corrected, not interpreted) — `NOT_APPLICABLE` if the file sits at archive root. |
| 6 | Observed platform | CLASSIFICATION | free text, `UNKNOWN`, or `NOT_VISIBLE` | What Claude/reviewer actually sees on screen. |
| 7 | Session ID | CLASSIFICATION | normalized id, e.g. `S1` | Assigned consistently within one archive by the reviewer/Claude — requires understanding what constitutes a session for this study, so it's judgment, not a raw path fact. |
| 8 | Original session folder | DETERMINISTIC | verbatim or `NOT_APPLICABLE` | The path segments between the first (`Archive platform folder`) and the filename, joined verbatim — `NOT_APPLICABLE` if there's no such segment. Literal provenance, not a claim about what the folder means. |
| 9 | Capture date | CLASSIFICATION | `YYYY-MM-DD` or `UNKNOWN` | Only from a timestamp **visible in the screenshot** or an explicit run log — never from zip/filesystem mtime (see `naming-convention.md` §5). |
| 10 | Capture time | CLASSIFICATION | `HH:MM` (24h) or `UNKNOWN` | Same rule as above. |
| 11 | Capture timezone | CLASSIFICATION | e.g. `+03:00`, or `UNKNOWN` | From config `timezone` only when the capture protocol guarantees it; otherwise `UNKNOWN`. |
| 12 | Captured at ISO 8601 | DERIVED | full ISO 8601 or `UNKNOWN` | Composed from date+time+timezone **only if all three are known**; otherwise `UNKNOWN`. |
| 13 | Evidence type | CLASSIFICATION | `screenshot`, `export`, `video`, `log`, `other` | |
| 14 | Query ID | CLASSIFICATION | id from `query_set` or `SUPPLEMENTAL-###` | |
| 15 | Query bucket | CLASSIFICATION | free text or `NOT_APPLICABLE` | Functional category, from query_set if available. |
| 16 | Query text | CLASSIFICATION | free text or `UNKNOWN` | Canonical text if it matches the query set, else the text actually observed. |
| 17 | Query role | CLASSIFICATION | `main_query`, `clarification`, `additional_clarification_query`, `contaminated_query`, `procedural_control`, `setup`, `diagnostic`, `supplemental` | Extend only with an explicit new value documented in the README. |
| 18 | Query group ID | DERIVED | `<ENTITYCODE>-<Tn>-<PLATFORM>-<SESSION>-<QUERY-ID>[-A#]` | Assembled by `build_index.mjs` from Observed platform + Session ID + Query ID + Query attempt number, per `naming-convention.md` §4 — Claude/reviewer supplies the parts, not the formatted string. |
| 19 | Query attempt number | CLASSIFICATION | integer ≥1 or `NOT_APPLICABLE` | |
| 20 | Capture part number | CLASSIFICATION | integer ≥1 or `NOT_APPLICABLE` | Position within a multi-screenshot result. |
| 21 | Capture parts total | CLASSIFICATION | integer ≥1 or `NOT_APPLICABLE` | Total screenshots in that query group. |
| 22 | Continuation flag | DERIVED | `YES`, `NO`, `NOT_APPLICABLE` | From Capture part number: `NOT_APPLICABLE` if part number is `NOT_APPLICABLE`, `NO` if `1`, `YES` if `>1`. |
| 23 | Continuation of Evidence ID | DERIVED → validated | Evidence ID of part 1, or `NOT_APPLICABLE` | Resolved by `build_index.mjs` from the classification.csv column `Continuation of original relative path` (Claude/reviewer names the *file*, not an ID that doesn't exist yet). Must resolve to a real row — `validate_evidence.mjs` FAILs otherwise. |
| 24 | Primary query-set relevance | CLASSIFICATION | `YES`, `NO`, `UNKNOWN` | Whether this belongs to the main analysis set. |
| 25 | Review status | CLASSIFICATION | `REVIEWED`, `REVIEW_REQUIRED`, `UNREVIEWED` | |
| 26 | Mapping status | CLASSIFICATION | `CONFIRMED`, `REVIEW_REQUIRED`, `NOT_APPLICABLE` | Adjudication status of the query↔evidence association. |
| 27 | Mapping basis | CLASSIFICATION | free text | Why the association was made (timestamp, ordering, visible text continuity, session log…). Required whenever Mapping status is `CONFIRMED`. |
| 28 | Contamination status | CLASSIFICATION | `NONE_OBSERVED`, `CONTAMINATED`, `SUSPECTED`, `UNKNOWN`, `CONTROL_STEP` | |
| 29 | Contamination reason | CLASSIFICATION | free text or `NOT_APPLICABLE` | Required whenever status ≠ `NONE_OBSERVED`/`NOT_APPLICABLE`. |
| 30 | Analysis inclusion status | CLASSIFICATION | `INCLUDE`, `EXCLUDE_FROM_CLEAN_BASELINE`, `EXCLUDE_CONTROL_STEP`, `ARCHIVE_ONLY_NOT_PRIMARY_ANALYSIS`, `REVIEW_REQUIRED` | |
| 31 | Query rewrite observed | CLASSIFICATION | `YES`, `NO`, `UNKNOWN` | |
| 32 | Query rewrite text | CLASSIFICATION | free text or `NOT_APPLICABLE` | Required when col. 31 is `YES`. |
| 33 | Archive anomaly | CLASSIFICATION | `NONE`, `MISFILED_PLATFORM`, `MISFILED_SESSION`, `UNLABELED`, `OTHER` (+ free-text detail in Notes) | See `naming-convention.md` §6. |
| 34 | Original filename | DETERMINISTIC | verbatim from archive | |
| 35 | Original relative path | DETERMINISTIC | verbatim from archive | |
| 36 | File size bytes | DETERMINISTIC | integer | |
| 37 | Image dimensions pixels | DETERMINISTIC | `WIDTHxHEIGHT` or `UNKNOWN` | `UNKNOWN` only if the format/header couldn't be parsed — never guessed. |
| 38 | SHA-256 | DETERMINISTIC | 64 hex chars | Computed on the raw bytes inside the archive, no re-encoding. |
| 39 | Source file preserved | DETERMINISTIC | `YES` | Always `YES` — evidence-release never alters raw evidence. |
| 40 | Reviewer comment | CLASSIFICATION | free text or empty | Human-supplied only. |
| 41 | Notes | CLASSIFICATION | free text or empty | Methodological/provenance notes; never a dumping ground for structured data that has its own column. |
| 42 | Duplicate status | DERIVED | `UNIQUE`, `DUPLICATE`, `POSSIBLE_VISUAL_DUPLICATE` | From SHA-256 comparison across the archive; `POSSIBLE_VISUAL_DUPLICATE` is only ever set by a human/Claude note in classification.csv, never inferred from hashes. |
| 43 | Duplicate of Evidence ID | DERIVED | Evidence ID or `NOT_APPLICABLE` | First (by sort order) evidence with the same SHA-256. |

## UNKNOWN vs NOT_APPLICABLE vs NO vs UNCLASSIFIED — non-negotiable

- `UNKNOWN` — the field is meaningful for this row, was actively considered, and cannot be determined from the available evidence.
- `NOT_APPLICABLE` — the field does not apply to this row's evidence type/condition at all.
- `NO` — actively and observably false. Never used as a stand-in for "couldn't tell."
- `UNCLASSIFIED` — a sentinel `build_index.mjs` writes automatically for any CLASSIFICATION cell left blank in `classification.csv` — meaning "nobody looked at this yet," distinct from `UNKNOWN` ("someone looked and couldn't tell"). Any row containing `UNCLASSIFIED` is written to `evidence-review.csv` and blocks a package from being marked `READY_FOR_DRAFT_RELEASE` (see `SKILL.md` STEP 9/13).

`validate_evidence.mjs` does not enforce the `UNKNOWN` vs `NO` semantic
distinction (it can't verify intent) — that's a review-time rule for whoever
fills `classification.csv`, restated in `SKILL.md`. It does enforce that no
`UNCLASSIFIED` cell reaches a index build marked release-ready.

## Extending the schema

New experimental-condition columns (`logged_in`, `incognito`, `memory_state`,
`personalization_state`, `browser`, `location`, `language`, `model`,
`search_enabled`, `account_type`, `iteration`, or anything else a new study
needs) are declared in `evidence-package.yaml` under `extra_columns: [...]`.
They become additional CLASSIFICATION columns, filled the same way, appended
after column 43. Never fold structured per-condition data into `Notes`.
