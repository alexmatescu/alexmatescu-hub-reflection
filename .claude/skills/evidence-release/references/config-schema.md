# `evidence-package.yaml` — config schema

One config file per evidence package. Nothing entity-specific is hardcoded
anywhere in `evidence-release` — every concrete value below is an example.

## Required fields

| Field | Type | Notes |
|---|---|---|
| `entity_name` | string | Display name, e.g. `"Alex Matescu"`. |
| `entity_slug` | string | kebab-case, `^[a-z0-9]+(-[a-z0-9]+)*$`. |
| `entity_code` | string | Short code for Evidence IDs, e.g. `AM`. Chosen once by the user — never derived automatically from the name in a way that could silently change between runs. |
| `study_name` | string | e.g. `"Tabula Rasa"`. |
| `measurement_point` | string | `T0`, `T1`, … or `window-YYYY-MM-DD_YYYY-MM-DD`. |
| `archive.path` | string | Path to the raw archive (`.zip`). |
| `archive.version` | string | e.g. `"1.0"`. |
| `metadata_version` | string | e.g. `"1.0"`. Independent of `archive.version` — see `release-policy.md`. |

## Optional fields

| Field | Type | Default | Notes |
|---|---|---|---|
| `project` | string | `"AI Visibility Lab"` | |
| `measurement_window.start` / `.end` | date | — | Required only if `measurement_point` uses the `window-...` form. |
| `timezone` | string | — | IANA or offset. Only used for `Captured at ISO 8601` when a capture's date+time were both observed and a timezone is genuinely known for the whole session — never applied retroactively to guess an offset. |
| `query_set.path` | string | — | CSV/path to canonical Query Set, if one exists. |
| `query_set.required` | boolean | `false` | If `true`, `validate_evidence.mjs` FAILs when any `Query ID` isn't found in the query set (other than `SUPPLEMENTAL-###`). |
| `dataset_version` | string | `metadata_version` | Only set if it must diverge from metadata_version. |
| `notes` | string | — | Free-text carried into README §13/context, not fabricated. |
| `release_tag` | string | derived (see `naming-convention.md` §2) | Explicit override, e.g. to re-use a tag from an older process. |
| `github.repository` | string | current repo's `origin` | `owner/repo`. |
| `github.draft` | boolean | `true` | Must stay `true` — `evidence-release` never creates a non-draft release. |
| `extra_columns` | list of strings | `[]` | Extra CLASSIFICATION columns appended to the schema, e.g. `[logged_in, incognito, memory_state, model]`. |

## Example

```yaml
project: AI Visibility Lab
study_name: Example Study
entity_name: Example Entity
entity_slug: example-entity
entity_code: EE

measurement_point: T1
measurement_window:
  start: 2026-09-02
  end: 2026-09-07

timezone: Europe/Bucharest

archive:
  path: ./evidence/incoming/example-entity-t1.zip
  version: "1.0"

metadata_version: "1.0"

query_set:
  path: ./query-set.csv
  required: false

extra_columns:
  - logged_in
  - incognito
  - model

github:
  repository: owner/repository
  release_tag: evidence-example-entity-t1-v1.0
  draft: true

notes: ""
```

Missing optional fields must not stop the pipeline — every script degrades
gracefully (e.g. no `query_set` → `Query bucket`/`Query text` classification
still works from direct observation, just without cross-checking against a
canonical list).
