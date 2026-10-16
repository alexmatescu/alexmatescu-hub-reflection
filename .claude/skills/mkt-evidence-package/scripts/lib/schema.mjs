// mkt-evidence-package / scripts/lib/schema.mjs
//
// Coloanele CSV-urilor de staging, enum-urile și regulile de aplicabilitate.
// Sursa normativă: references/session-context-schema.md și
// references/capture-index-schema.md. Orice schimbare se face întâi acolo.

// ---------------------------------------------------------------------------
// Session context (session-context-schema.md §2)
// ---------------------------------------------------------------------------

// applies: "ALL" | "SEARCH" | "AI" | "BROWSER" (S + AI rulat în browser)
// enum: valori permise; null = text liber (sau verbatim) cu sentinelele indicate.
// requiredWhen: coloana-bază e obligatorie când predicatul e adevărat.
export const SESSION_COLUMNS = [
  { name: "evidence_id", source: "PREFILL" },
  { name: "original_relative_path", source: "PREFILL" },
  { name: "mapped_surface", source: "PREFILL" },
  {
    name: "observed_surface",
    applies: "ALL",
    enum: null,
    sentinels: ["UNKNOWN"],
  },
  {
    name: "ui_frame_visible",
    applies: "ALL",
    enum: ["FULL", "PARTIAL", "CONTENT_ONLY"],
  },
  {
    name: "browser_observed",
    applies: "ALL",
    enum: null,
    sentinels: ["NATIVE_APP", "NOT_VISIBLE"],
  },
  {
    name: "private_window_observed",
    applies: "BROWSER",
    enum: ["YES", "NO", "NOT_VISIBLE"],
  },
  {
    name: "private_window_basis",
    applies: "BROWSER",
    basisFor: "private_window_observed",
  },
  {
    name: "account_state_observed",
    applies: "ALL",
    enum: ["LOGGED_IN", "LOGGED_OUT", "NOT_VISIBLE"],
  },
  {
    name: "account_state_basis",
    applies: "ALL",
    basisFor: "account_state_observed",
  },
  {
    name: "account_identity_visible",
    applies: "ALL",
    enum: ["YES", "NO", "NOT_APPLICABLE"],
  },
  {
    name: "account_tier_observed",
    applies: "AI",
    enum: null,
    sentinels: ["NOT_VISIBLE"],
  },
  // Locația se notează pe toate suprafețele: Gemini și AI Mode o pot afișa în interfață.
  {
    name: "location_displayed",
    applies: "ALL",
    enum: null,
    sentinels: ["NOT_VISIBLE"],
  },
  {
    name: "location_source",
    applies: "ALL",
    enum: [
      "FOOTER",
      "LOCAL_MODULE",
      "SETTINGS",
      "AI_INTERFACE",
      "RESPONSE_TEXT",
      "OTHER",
      "NOT_APPLICABLE",
    ],
  },
  {
    name: "ui_language_observed",
    applies: "ALL",
    enum: null,
    sentinels: ["NOT_VISIBLE"],
  },
  {
    name: "conversation_mode_observed",
    applies: "AI",
    enum: [
      "TEMPORARY",
      "NEW_CONVERSATION",
      "EXISTING_CONVERSATION",
      "NOT_VISIBLE",
    ],
  },
  {
    name: "conversation_mode_basis",
    applies: "AI",
    basisFor: "conversation_mode_observed",
  },
  {
    name: "prior_turns_visible",
    applies: "AI",
    enum: ["YES", "NO", "NOT_VISIBLE"],
  },
  {
    name: "history_sidebar_visible",
    applies: "AI",
    enum: ["YES", "NO", "NOT_VISIBLE"],
  },
  {
    name: "model_displayed",
    applies: "AI",
    enum: null,
    sentinels: ["NOT_VISIBLE"],
  },
  {
    name: "special_mode_observed",
    applies: "AI",
    enum: ["NONE_VISIBLE", "DEEP_RESEARCH", "AGENT", "REASONING", "OTHER"],
  },
  {
    name: "web_search_indicator",
    applies: "AI",
    enum: ["VISIBLE", "NOT_VISIBLE"],
  },
  {
    name: "memory_indicator",
    applies: "AI",
    enum: null,
    sentinels: ["NOT_VISIBLE"],
  },
  {
    name: "attached_context_visible",
    applies: "AI",
    enum: ["YES", "NOT_VISIBLE"],
  },
  {
    name: "contamination_status",
    applies: "ALL",
    enum: ["NONE_OBSERVED", "SUSPECTED", "CONTAMINATED", "NOT_ASSESSABLE"],
  },
  { name: "contamination_types", applies: "ALL", listEnum: true },
  { name: "contamination_basis", applies: "ALL" },
  {
    name: "privacy_flag",
    applies: "ALL",
    enum: ["NONE_OBSERVED", "PRIVACY_REVIEW_REQUIRED", "PRIVACY_CONFIRMED"],
  },
  {
    name: "review_status",
    applies: "ALL",
    enum: ["REVIEWED", "REVIEW_REQUIRED"],
  },
  { name: "notes", applies: "ALL", optional: true },
];

export const CONTAMINATION_TYPES = [
  "PRIOR_TURNS_IN_THREAD",
  "PERSONALIZED_REFERENCE",
  "MEMORY_INDICATOR",
  "CUSTOM_CONTEXT",
  "SEARCH_HISTORY_SIGNAL",
  "LOGGED_IN_NON_TEMPORARY",
  "OTHER",
];

export const CONTAMINATION_SEVERITY = [
  "CONTAMINATED",
  "SUSPECTED",
  "NONE_OBSERVED",
  "NOT_ASSESSABLE",
];

/** Câmpurile de stare agregate pe suprafață / execuție (session-context-schema.md §4). */
export const AGGREGATED_STATE_FIELDS = [
  "observed_surface",
  "browser_observed",
  "private_window_observed",
  "account_state_observed",
  "account_tier_observed",
  "location_displayed",
  "ui_language_observed",
  "conversation_mode_observed",
  "model_displayed",
  "special_mode_observed",
];

export const SESSION_HEADER = SESSION_COLUMNS.map((c) => c.name);

/** Se aplică această coloană unei suprafețe de tipul dat? */
export function sessionColumnApplies(col, surfaceType) {
  switch (col.applies) {
    case "ALL":
      return true;
    case "SEARCH":
      return surfaceType === "SEARCH";
    case "AI":
      return surfaceType === "AI";
    case "BROWSER":
      return true; // S întotdeauna; AI dacă rulează în browser — decis la clasificare
    default:
      return false;
  }
}

// ---------------------------------------------------------------------------
// Capture classification (capture-index-schema.md) — doar coloanele de judecată
// ---------------------------------------------------------------------------

export const CAPTURE_CLASSIFICATION_HEADER = [
  "evidence_id",
  "original_relative_path",
  "mapped_surface",
  "filename_timestamp_parsed",
  "query_id",
  "query_text_visible",
  "attempt",
  "capture_role",
  "part_number",
  "parts_total",
  "serp_page",
  "organic_positions_visible",
  "blocks_visible",
  "execution_status",
  "response_relevance",
  "relevance_basis",
  "ai_overview_status",
  "capture_time_on_screen",
  "mapping_basis",
  "mapping_status",
  "archive_anomaly",
  "review_status",
  "reviewer_comment",
  "notes",
];

// ---------------------------------------------------------------------------
// Observation staging (observation-register-schema.md) — completat de Claude/user
// ---------------------------------------------------------------------------

export const OBSERVATION_STAGING_HEADER = [
  "execution_id",
  "evidence_ids",
  "provenance",
  "serp_block",
  "organic_position",
  "observed_order",
  "parent_observation_order",
  "observed_name",
  "title_displayed",
  "url_displayed",
  "url_truncated",
  "snippet_or_description_observed",
  "entity_kind_observed",
  "named_as_recommendation",
  "query_relevance",
  "relevance_basis",
  "review_status",
  "notes",
];
