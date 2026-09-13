# README structure

`scripts/build_readme.mjs` assembles the README mechanically from
`evidence-package.yaml` + the computed stats (`index-stats.json`, produced by
`build_index.mjs`) + `validation-result.json`. Every number in the generated
README is computed, not asserted. Sections whose content is genuinely
narrative are filled from fixed boilerplate paragraphs (given verbatim
below) — never from free-text the model invents at generation time. If a
section legitimately needs project-specific prose beyond the boilerplate
(e.g. §7's description of the query set, §9's contamination account), that
text comes from `evidence-package.yaml` fields (`notes`, `query_set.*`,
computed contamination stats) — not from an LLM narrating in the moment.

Required section order:

```
# <Entity Name> — <Measurement Point> Evidence Archive

Project: <project>
Case study: <study_name>
Measurement point: <measurement_point>
Evidence package version: archive v<archive.version> / metadata v<metadata_version>
Evidence type(s): <computed from index>
Evidence count: <computed>
Publication date: <today, ISO date>

## 1. Purpose
## 2. Subject
## 3. Evidence sources
## 4. Raw evidence and provenance
## 5. Evidence Index
## 6. Multi-screenshot responses
## 7. Query Set and supplemental evidence
## 8. Experimental conditions
## 9. Session/context contamination        (omitted entirely if none observed)
## 10. Archive anomalies                    (omitted entirely if none observed)
## 11. Evidence integrity
## 12. Interpretation limits
## 13. Experimental limitations
## 14. Relationship to study
## 15. Versioning
## 16. Files
## 17. Publisher
```

## Fixed boilerplate (used verbatim, not paraphrased)

**§1 Purpose** — opens with: "This package preserves the observations used in
the analysis. It documents what was captured, not a claim that AI outputs are
deterministically reproducible."

**§12 Interpretation limits** — must use exactly this framing (never
substitute "identical AI output is reproducible" for it):

> AI outputs are time-dependent and can be affected by model version,
> retrieval/search index state, session/account state, personalization, and
> platform changes between captures. This package supports **auditability**,
> **traceability**, and **verification of recorded observations** — and
> **reproducibility of the documented protocol** — not reproducibility of
> identical AI output.

**§14 Relationship to study** — fixed chain, rendered as-is:

```
Raw Evidence → Indexed Evidence → Observation → Measurement → Interpretation
```
followed by one sentence: this package covers Raw Evidence and Indexed
Evidence only; Observation, Measurement, and Interpretation belong to the
case study that cites this package, not to this package itself.

**§15 Versioning** — explains the archive-version vs. metadata-version split
verbatim from `release-policy.md` §"Raw archive version vs. metadata
version" (short form).

**§17 Publisher** — fixed, unless `evidence-package.yaml` overrides
`project`:

```
AI Visibility Lab
delamatescu.ro/lab
```

## Rules for the computed sections

- **§3 Evidence sources**: list only platforms that actually appear in
  `Observed platform` across the index — never the platform list from
  config if the archive doesn't actually contain that platform.
- **§7 Query Set and supplemental evidence**: state plainly "No canonical
  query set was provided for this package" when `query_set.path` is absent —
  never imply one exists.
- **§8 Experimental conditions**: render only the `extra_columns` that are
  actually declared in config and present in the index — omit conditions the
  study didn't track, rather than listing them as `UNKNOWN` for every row.
- **§9 / §10**: included only if at least one row has
  `Contamination status` ≠ `NONE_OBSERVED`/`NOT_APPLICABLE` (§9) or
  `Archive anomaly` ≠ `NONE` (§10) respectively. Absence of the section *is*
  the signal that nothing was observed — don't pad it with "none found."
- **§13 Experimental limitations**: generated from what's actually in the
  index (e.g. counts of `REVIEW_REQUIRED`, `NEADJUDICAT`-equivalent /
  unadjudicated platforms, control steps excluded from the clean baseline) —
  never a generic disclaimer paragraph unconnected to the real data.
- **§16 Files**: exact filenames of every artifact produced for this
  metadata version (index CSV, README, SHA-256 manifest, raw archive
  filename+version), one per line.
