# Release policy

## Pipeline order — generate → validate → freeze → checksum → verify → package/release

This is the clean rule the whole finalization half of the pipeline is built
around:

> **Nothing that enters the checksum manifest is modified after it is
> generated.**

Concretely, the mandatory order is:

1. **Generate artifacts** (STEP 7) — `build_index.mjs --finalize` +
   `build_readme.mjs` write the finalized Evidence Index and README.
2. **Validate structure/content** (STEP 8) — `validate_evidence.mjs` checks
   them for schema/referential/naming correctness while they're still
   writable. A `FAIL` here must be fixed by re-running STEP 7, never by
   hand-editing the output files.
3. **Freeze/finalize artifacts** (STEP 9) — `freeze_artifacts.mjs` chmods the
   Evidence Index and README to `0o444` (read-only). This is a filesystem
   fact, not a convention: every other script that would write to a
   finalized artifact (`build_index.mjs --finalize`, `build_readme.mjs`)
   calls `assertNotFrozen` first and refuses with a clear error rather than
   silently invalidating a checksum computed over stale content.
4. **Build checksums** (STEP 10) — `build_checksums.mjs` refuses to run
   unless the Evidence Index and README are already frozen. It hashes the
   raw archive (via a canonical-named symlink, never a copy) and the two
   frozen artifacts, and places all three plus the manifest together in the
   versioned output directory — which becomes a genuinely self-contained,
   `shasum -a 256 -c`-verifiable folder.
5. **Verify checksums** (STEP 11) — `verify_checksums.mjs` immediately
   re-runs `shasum -a 256 -c` (or `sha256sum -c`, or an in-process fallback)
   against what STEP 10 just wrote, as a self-check on the checksum step
   itself.
6. **Package/release** (STEP 14) — `github_release.mjs` re-verifies the same
   manifest *again* right before touching `gh` (a second, later-in-time
   confirmation, since human confirmation at STEP 13 may introduce a delay),
   confirms the artifacts are still frozen, then proceeds with the `gh`
   preflight (CLI installed/authenticated, release/version conflict check)
   and the draft create/upload.

A mismatch caught at STEP 11 or STEP 14 means something wrote to the output
directory after it was supposed to be immutable — the fix is to re-run from
STEP 7 (a new metadata version if anything was already checksummed/shared),
never to hand-patch the manifest or the artifacts.

**Unfreezing** (`freeze_artifacts.mjs --unfreeze`) exists only for the
narrow case of correcting a metadata version that was frozen by mistake and
never checksummed/uploaded anywhere. If checksums were already built (STEP
10) — let alone uploaded — the correct fix is always a new
`metadata_version`, not unfreezing this one.

## Raw evidence is immutable

The archive the user provides is the historical source. `evidence-release`
never:

- modifies the ZIP;
- renames files inside it;
- moves the original files;
- edits screenshots;
- re-compresses the archive;
- removes duplicates;
- "cleans up" folder structure;
- retroactively corrects organizational mistakes.

Any anomaly is documented in the Evidence Index (`Archive anomaly` column),
never fixed in place. `scripts/inventory_evidence.mjs` only ever *reads* the
archive (`unzip -t` to validate, `unzip -o -q -d <work>/extracted` to produce
a disposable, read-only-treated inspection copy under `evidence/work/`) — the
original file passed as `archive.path` is never opened for writing.

## Raw archive version vs. metadata version

These are independent counters:

- **Archive version** (`archive.version` in config) — bumps only when the
  raw archive itself changes (a different ZIP, different bytes).
- **Metadata version** (`metadata_version` in config) — bumps when the
  Evidence Index / README / checksums are revised, *without* touching the raw
  archive (corrected classification, a fixed typo in the README, a
  re-adjudicated query mapping).

Valid example: archive v1.0, index v1.1, README v1.1, SHA-256 manifest v1.1 —
the raw evidence hasn't changed, only how it's documented.

`validate_evidence.mjs` FAILs the run if:

- the metadata version referenced by the index/README/checksums filenames
  don't all match each other;
- a release asset with the exact same filename (same archive version) already
  exists on a **published** (non-draft) GitHub Release and the local file's
  SHA-256 differs from what's already published — this is an overwrite risk
  and stops the pipeline.

## Publishing an already-published raw archive asset

- Never re-upload/overwrite a raw archive asset that is already attached to a
  **published** GitHub Release. `github_release.mjs` never passes
  `--clobber`. If the archive changed, that's a new `archive.version` and a
  new release tag — not an overwrite.
- If only the index/README/checksums changed (new `metadata_version`), those
  three files *can* be re-uploaded to the **same draft** release (same tag) —
  each new metadata version is still a distinct filename (`_v<metadata
  version>`), so this is an addition, not an overwrite either.

## If the release already exists

- **Draft**: inspect existing assets (`gh release view <tag> --json assets`),
  upload only what's missing by filename, never duplicate, never overwrite
  without explicit confirmation from the user.
- **Published**: STOP. Publicly published evidence is treated as immutable.
  Tell the user; propose a new version (new archive version and/or new
  metadata version → new tag) instead of touching the existing release.

## Never auto-publish

`github_release.mjs` only ever creates/updates a **draft** release and
uploads assets to it. Nothing in this pipeline calls `gh release edit
--draft=false` or `gh release publish`. Making the release public is a
separate, explicit action the user takes themselves (CLI or GitHub UI).

## Git

The raw evidence ZIP is never `git add`ed / committed / pushed by this agent
unless the user explicitly asks for that. It ships as a GitHub Release asset,
not as a tracked repository file — this avoids bloating git history with
large binary archives. `evidence/incoming/`, `evidence/work/`, and
`evidence/output/` are gitignored by default for the same reason; the
generated index/README/checksums are small text files the user is free to
also commit if they want a copy in the repo, but evidence-release does not do
this on its own.

## Privacy

`evidence-release` never redacts automatically. If a screenshot appears to
contain personal email, phone numbers, addresses, tokens, API keys,
passwords, or other sensitive account information, the corresponding row is
marked `PRIVACY_REVIEW_REQUIRED` in `Reviewer comment`/`Notes` during
classification, and STEP 13 (upload confirmation) must surface this to the
user before any upload proceeds. The raw archive itself is never modified to
redact anything; a redacted public version, if ever needed, is a separate,
clearly-labeled artifact — not a substitute for the raw evidence.

## End-to-end archive integrity (STEP 2 → STEP 8, re-checked at STEP 14)

`inventory_evidence.mjs` records the whole-file SHA-256 of the raw archive
(`archive_sha256` in `inventory.json`) at the moment it's first inventoried —
before extraction, classification, or indexing. `validate_evidence.mjs`
(STEP 8, "validate structure/content") recomputes that same hash and
compares it. This is not the per-screenshot SHA-256 in the Evidence Index
(which fingerprints individual files inside the archive) — it fingerprints
the archive as a single unit, so that an accidental overwrite, a wrong file
swapped into `archive.path`, or on-disk corruption between STEP 2 and STEP 8
is caught before the artifacts are even frozen, instead of silently shipping
a package whose index/README describe evidence that is no longer the file
being attached to GitHub. A mismatch (or a missing `archive_sha256` from an
older inventory run) is a hard stop — re-run the pipeline from STEP 2 on the
current archive rather than proceeding. Once checksums exist (STEP 10),
`verify_checksums.mjs` (STEP 11) and `github_release.mjs` (STEP 14) cover
the same archive file a second and third time, but by manifest hash rather
than by re-reading `inventory.json`.

## Validation gates the freeze, checksums gate the release

`validate_evidence.mjs` must return `CONTENT_VALID` (warnings allowed, no
`FAIL`s) before `freeze_artifacts.mjs` (STEP 9) runs — see `SKILL.md` STEP 8
for the exact check list. A `FAIL` stops the pipeline; a `WARNING` is
surfaced to the user and documented in `validation-report.md`, but doesn't
block by itself unless it concerns a `REVIEW_REQUIRED` field that could
change Query ID, query boundaries, experiment condition,
inclusion/exclusion, or platform — those require explicit user confirmation
even if every automated check technically passes (see `SKILL.md` STEP 6,
human-in-the-loop, which runs even earlier, before the artifacts are even
generated).

Past that point, `build_checksums.mjs` (STEP 10) and `verify_checksums.mjs`
(STEP 11) are the release gate in the literal sense: `github_release.mjs`
(STEP 14) refuses to proceed at all if the checksum manifest no longer
matches the frozen artifacts, regardless of what STEP 8 concluded earlier.
