# Naming conventions

Applies to every evidence package regardless of entity, study, or domain.
Nothing here is entity-specific — all concrete values below are examples.

## 1. Artifact file names

```
<entity-slug>_<measurement-point>_<artifact>_v<version>.<ext>
```

Examples:

- `alex-matescu_t0_evidence-archive_v1.0.zip` (the raw archive itself — never renamed on disk inside the archive; this is only how it's referred to as a release asset)
- `alex-matescu_t0_evidence-index_v1.1.csv`
- `alex-matescu_t0_readme_v1.1.md`
- `alex-matescu_t0_sha256sums_v1.1.txt`

`<entity-slug>`: lowercase kebab-case, matches `^[a-z0-9]+(-[a-z0-9]+)*$`.

`<measurement-point>`: `T0`, `T1`, `T2`, … (longitudinal measurement point —
**never** `F0`/`F1` in this agent's output, even if the parent study uses
F-phase language editorially). If the dataset is a window that a Tn label
would misrepresent, use `window-YYYY-MM-DD_YYYY-MM-DD` instead — but don't
switch conventions silently; `evidence-package.yaml` declares which one
applies and `validate_evidence.mjs` enforces the regex.

`<version>`: raw archive version and metadata version are independent — see
`release-policy.md`.

## 2. GitHub Release tag and title

Tag:

```
evidence-<entity-slug>-<measurement-point>-v<archive-version>
```
(lowercased measurement point in the tag, e.g. `evidence-alex-matescu-t0-v1.0`)

Title:

```
<Entity Name> — <Measurement Point> Evidence Archive v<archive-version>
```

## 3. Evidence ID

```
<ENTITYCODE>-<Tn>-E###
```

`ENTITYCODE` is a short deterministic code stored in `evidence-package.yaml`
(`entity_code`) — chosen once by the user/config, never invented by a script.
`###` is a zero-padded sequential counter, assigned in a fixed, reproducible
order (sorted by `original_relative_path` within the archive), starting at
`001`.

**Stability rule**: once an Evidence ID has appeared in a published (or even
draft-uploaded) evidence index, it must never be reassigned to a different
file. `build_index.mjs` re-runs are idempotent: if a previous evidence-index
CSV exists for the same entity + measurement point, it loads the existing
`(original_relative_path, SHA-256) → Evidence ID` mapping first and only
mints new IDs for files that don't match any existing mapping.

## 4. Query group ID

```
<ENTITYCODE>-<Tn>-<PLATFORM>-<SESSION>-<QUERY-ID>
```

Repeated attempts append `-A#` (e.g. `...-Q03-A2` for the second attempt at
Q03). `PLATFORM` and `SESSION` are normalized tokens from `classification.csv`
(uppercase, no spaces — e.g. `COPILOT`, `S1`).

Every screenshot belonging to the same query execution (including
continuation screenshots — see §5) shares the same Query group ID. Never
create a synthetic new query for a continuation screenshot.

## 5. Capture date/time — never from filesystem metadata

The zip archive's per-file modified-time reflects when the file was zipped
(or, incidentally, last touched on the capturer's machine), not necessarily
when the query was run. `inventory_evidence.mjs` records it separately as
`archive_mtime_iso` (informational, in `inventory.json` only — it never
reaches the Evidence Index). `Capture date` / `Capture time` in the Evidence
Index come only from a timestamp visible on-screen in the capture itself, or
from an explicit, documented run log — otherwise `UNKNOWN`.

## 6. Archive anomalies — document, don't correct

Raw evidence is immutable (see `release-policy.md`). If a screenshot's
location inside the archive disagrees with what it visibly shows, record
both facts rather than "fixing" the folder:

```
Archive platform folder = Perplexity
Observed platform       = Gemini
Archive anomaly          = MISFILED_PLATFORM
```

The file itself stays exactly where it was in the archive; only the index
row documents the discrepancy.

## 7. Output file/folder layout (this agent's own workspace, not the archive)

```
evidence/
  incoming/              # user drops raw archives here (or reference any path via config)
  work/<entity-slug>/<measurement-point>/
    extracted/               # read-only-treated extraction of the raw archive for inspection — never edited
    inventory.json            # deterministic per-file facts (hash, size, dimensions, mtime) + archive_sha256
    classification.csv        # Claude/human-filled judgment fields (staging)
    evidence-index.staging.csv  # STEP 5 preview, before finalize
    evidence-review.csv         # items needing human sign-off (§ SKILL.md STEP 6)
    index-stats.json            # computed counts, consumed by build_readme.mjs / github_release.mjs
    release-notes.md            # generated release body (STEP 14)
    processing-log.jsonl        # append-only audit trail
  output/<entity-slug>/<measurement-point>/<metadata-version>/
    <entity-slug>_<measurement-point>_evidence-archive_v<archive-version>.zip   # symlink to archive.path, added at STEP 10 — never a copy
    <entity-slug>_<measurement-point>_evidence-index_v<metadata-version>.csv    # frozen (0o444) at STEP 9
    <entity-slug>_<measurement-point>_readme_v<metadata-version>.md             # frozen (0o444) at STEP 9
    <entity-slug>_<measurement-point>_sha256sums_v<metadata-version>.txt        # not frozen — it's the manifest, not a manifested file
    validation-report.md                                                        # not frozen — internal artifact, STEP 8
```

Since STEP 10 (`build_checksums.mjs`) places the archive's canonical-named
symlink directly in the versioned output directory, that directory becomes
self-contained and directly verifiable in place:
`cd evidence/output/<slug>/<mp>/<metadata-version> && shasum -a 256 -c
<slug>_<mp>_sha256sums_v<metadata-version>.txt` — no manual gathering of
files from elsewhere needed, exactly the experience a release-asset
downloader will also have once all four files are pulled into one folder.

`evidence/incoming`, `evidence/work`, and `evidence/output` are gitignored by
default (see `release-policy.md` §"Git" for why) — the deliverables live as
GitHub Release assets, not as repository files.
