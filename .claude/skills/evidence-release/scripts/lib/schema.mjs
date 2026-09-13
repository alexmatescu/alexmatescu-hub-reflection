// evidence-release / scripts/lib/schema.mjs
//
// Single source of truth for the Evidence Index column list. Mirrors
// references/evidence-schema.md exactly — if you change one, change both.

// Filled directly from archive bytes/filesystem facts. No judgment.
export const DETERMINISTIC_COLUMNS = [
  "Evidence ID", // actually DERIVED, but fixed position — see FULL_HEADER
];

// The classification staging file (classification.csv) carries exactly
// these columns, keyed by Original relative path. Left blank => UNCLASSIFIED.
export const CLASSIFICATION_COLUMNS = [
  "Observed platform",
  "Session ID",
  "Capture date",
  "Capture time",
  "Capture timezone",
  "Evidence type",
  "Query ID",
  "Query bucket",
  "Query text",
  "Query role",
  "Query attempt number",
  "Capture part number",
  "Capture parts total",
  "Continuation of original relative path",
  "Primary query-set relevance",
  "Review status",
  "Mapping status",
  "Mapping basis",
  "Contamination status",
  "Contamination reason",
  "Analysis inclusion status",
  "Query rewrite observed",
  "Query rewrite text",
  "Archive anomaly",
  "Reviewer comment",
  "Notes",
];

// Columns that are legitimately allowed to stay blank (empty string) rather
// than being flagged UNCLASSIFIED when left empty in classification.csv.
export const OPTIONAL_BLANK_COLUMNS = new Set([
  "Reviewer comment",
  "Notes",
  "Query rewrite text",
  "Continuation of original relative path",
  "Contamination reason",
]);

export const SENTINELS = new Set(["UNKNOWN", "NOT_APPLICABLE", "NOT_VISIBLE", "UNCLASSIFIED"]);

export const ENUMS = {
  "Query role": [
    "main_query",
    "clarification",
    "additional_clarification_query",
    "contaminated_query",
    "procedural_control",
    "setup",
    "diagnostic",
    "supplemental",
  ],
  "Primary query-set relevance": ["YES", "NO", "UNKNOWN"],
  "Review status": ["REVIEWED", "REVIEW_REQUIRED", "UNREVIEWED"],
  "Mapping status": ["CONFIRMED", "REVIEW_REQUIRED", "NOT_APPLICABLE"],
  "Contamination status": [
    "NONE_OBSERVED",
    "CONTAMINATED",
    "SUSPECTED",
    "UNKNOWN",
    "CONTROL_STEP",
  ],
  "Analysis inclusion status": [
    "INCLUDE",
    "EXCLUDE_FROM_CLEAN_BASELINE",
    "EXCLUDE_CONTROL_STEP",
    "ARCHIVE_ONLY_NOT_PRIMARY_ANALYSIS",
    "REVIEW_REQUIRED",
  ],
  "Query rewrite observed": ["YES", "NO", "UNKNOWN"],
  "Continuation flag": ["YES", "NO", "NOT_APPLICABLE"],
  "Archive anomaly": ["NONE", "MISFILED_PLATFORM", "MISFILED_SESSION", "UNLABELED", "OTHER"],
};

// Full Evidence Index column order (§ evidence-schema.md). extra_columns
// (from config) are appended after this by build_index.mjs.
export const FULL_HEADER = [
  "Evidence ID",
  "Entity name",
  "Measurement point",
  "Dataset version",
  "Archive platform folder",
  "Observed platform",
  "Session ID",
  "Original session folder",
  "Capture date",
  "Capture time",
  "Capture timezone",
  "Captured at ISO 8601",
  "Evidence type",
  "Query ID",
  "Query bucket",
  "Query text",
  "Query role",
  "Query group ID",
  "Query attempt number",
  "Capture part number",
  "Capture parts total",
  "Continuation flag",
  "Continuation of Evidence ID",
  "Primary query-set relevance",
  "Review status",
  "Mapping status",
  "Mapping basis",
  "Contamination status",
  "Contamination reason",
  "Analysis inclusion status",
  "Query rewrite observed",
  "Query rewrite text",
  "Archive anomaly",
  "Original filename",
  "Original relative path",
  "File size bytes",
  "Image dimensions pixels",
  "SHA-256",
  "Source file preserved",
  "Reviewer comment",
  "Notes",
  "Duplicate status",
  "Duplicate of Evidence ID",
];

export const CLASSIFICATION_KEY_COLUMNS = ["Original relative path", "Original filename"];

export const CONTINUATION_REF_COLUMN = "Continuation of original relative path";

