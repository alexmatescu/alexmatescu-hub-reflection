// mkt-evidence-package / scripts/lib/mkt.mjs
//
// Convenții specifice Market Discovery: config, căi, coduri de suprafață,
// detecția subfolderelor și a tiparului din numele fișierelor, ID-uri.
// Sursa normativă: references/naming-convention.md și references/config-schema.md.

import path from "node:path";
import { readConfig, SLUG_RE } from "./common.mjs";

// ---------------------------------------------------------------------------
// Suprafețe (naming-convention.md §2, §2.1)
// ---------------------------------------------------------------------------

export const SURFACES = {
  GSEARCH: "SEARCH",
  BSEARCH: "SEARCH",
  GAIMODE: "AI",
  CHATGPT: "AI",
  CLAUDE: "AI",
  COPILOT: "AI",
  GEMINI: "AI",
  PERPLEXITY: "AI",
};

export const SURFACE_ALIASES = {
  GSEARCH: [
    "google",
    "google search",
    "google organic",
    "google serp",
    // AI Overview e un bloc al execuției GSEARCH, nu o suprafață separată.
    "google search + ai overview",
    "google + ai overview",
    "google search ai overview",
    "google search si ai overview",
  ],
  BSEARCH: ["bing", "bing search", "bing organic", "bing serp"],
  GAIMODE: ["google ai mode", "ai mode", "gaimode"],
  CHATGPT: ["chatgpt", "chat gpt", "openai chatgpt"],
  CLAUDE: ["claude", "claude.ai"],
  COPILOT: ["copilot", "microsoft copilot", "bing copilot"],
  GEMINI: ["gemini", "google gemini"],
  PERPLEXITY: ["perplexity", "perplexity ai"],
};

const ALIAS_INDEX = new Map(
  Object.entries(SURFACE_ALIASES).flatMap(([code, aliases]) =>
    aliases.map((a) => [a, code]),
  ),
);

/** Desparte prefixul ordinal („01. ”) de nume și normalizează restul. */
export function normalizeFolderName(name) {
  const nfc = name.normalize("NFC");
  const m = /^(\d+)\s*[.)_-]?\s*(.*)$/.exec(nfc);
  const ordinal = m && m[2] ? m[1] : null;
  const rest = m && m[2] ? m[2] : nfc;
  return {
    ordinal,
    normalized: rest.toLowerCase().replace(/\s+/g, " ").trim(),
  };
}

/**
 * Detectează suprafața unui subfolder. Override-ul din config are prioritate
 * (cheia comparată în NFC). Întoarce { code, basis } sau { code: null }.
 */
export function detectSurface(folderName, surfaceMapOverride) {
  if (surfaceMapOverride) {
    for (const [key, code] of Object.entries(surfaceMapOverride)) {
      if (key.normalize("NFC") === folderName.normalize("NFC")) {
        return { code, basis: "CONFIG_SURFACE_MAP" };
      }
    }
  }
  const { normalized } = normalizeFolderName(folderName);
  const code = ALIAS_INDEX.get(normalized) ?? null;
  return code
    ? { code, basis: "FOLDER_NAME_ALIAS" }
    : { code: null, basis: null };
}

// ---------------------------------------------------------------------------
// Timestamp din numele fișierelor (naming-convention.md §6.1)
// ---------------------------------------------------------------------------

const EXT = String.raw`\.(?:png|jpg|jpeg|webp)$`;
export const FILENAME_PATTERNS = [
  {
    id: "MACOS_RO",
    re: new RegExp(
      String.raw`^Captură de ecran din (?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) la (?<hour>\d{1,2})\.(?<minute>\d{2})\.(?<second>\d{2})(?: \(\d+\))?` +
        EXT,
      "i",
    ),
  },
  {
    id: "MACOS_EN",
    re: new RegExp(
      String.raw`^Screenshot (?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) at (?<hour>\d{1,2})\.(?<minute>\d{2})\.(?<second>\d{2})(?:[\s ](?<ampm>AM|PM))?(?: \(\d+\))?` +
        EXT,
      "i",
    ),
  },
  {
    id: "WINDOWS_SNIP",
    re: new RegExp(
      String.raw`^Screenshot (?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2}) (?<hour>\d{2})(?<minute>\d{2})(?<second>\d{2})` +
        EXT,
      "i",
    ),
  },
];

/** Aplică un tipar; întoarce { raw, parsed } sau null. `parsed` e ora locală, fără offset. */
export function applyFilenamePattern(re, filename) {
  const nfc = filename.normalize("NFC");
  const m = re.exec(nfc);
  if (!m || !m.groups) return null;
  const g = m.groups;
  let hour = parseInt(g.hour, 10);
  if (g.ampm) {
    const pm = g.ampm.toUpperCase() === "PM";
    if (pm && hour < 12) hour += 12;
    if (!pm && hour === 12) hour = 0;
  }
  const pad = (n) => String(n).padStart(2, "0");
  return {
    raw: m[0].replace(new RegExp(EXT, "i"), ""),
    parsed: `${g.year}-${g.month}-${g.day}T${pad(hour)}:${g.minute}:${g.second}`,
  };
}

/**
 * Alege tiparul: primul din bibliotecă (sau override-ul din config) care acoperă
 * TOATE fișierele; altfel, per fișier, primul tipar care se potrivește.
 */
export function detectFilenamePattern(filenames, overridePattern) {
  const library = overridePattern
    ? [
        { id: "CONFIG_OVERRIDE", re: new RegExp(overridePattern) },
        ...FILENAME_PATTERNS,
      ]
    : FILENAME_PATTERNS;
  for (const p of library) {
    if (
      filenames.length > 0 &&
      filenames.every((f) => applyFilenamePattern(p.re, f))
    ) {
      return { mode: "SINGLE_PATTERN", pattern_id: p.id, library };
    }
  }
  return { mode: "PER_FILE", pattern_id: null, library };
}

// ---------------------------------------------------------------------------
// Config + căi
// ---------------------------------------------------------------------------

export const INSTANCE_ID_RE = /^[A-Z0-9]+(-[A-Z0-9]+)*$/;
// config-schema.md: PILOT / FULL / M<luna> (două cifre), luna în trimestrul instanței
export const INSTANCE_TYPE_RE = /^(PILOT|FULL|M(0[1-9]|1[0-2]))$/;
export const QUARTER_RE = /^\d{4}Q[1-4]$/;

/** Problema de `instance_type` față de `quarter`, sau null dacă e valid. */
export function instanceTypeProblem(instanceType, quarter) {
  if (!INSTANCE_TYPE_RE.test(instanceType))
    return "instance_type invalid (PILOT / FULL / M<luna>)";
  if (instanceType.startsWith("M") && QUARTER_RE.test(quarter ?? "")) {
    const month = Number(instanceType.slice(1));
    if (Math.ceil(month / 3) !== Number(quarter.slice(-1)))
      return `instance_type ${instanceType} nu e o lună din ${quarter}`;
  }
  return null;
}

const REQUIRED = [
  "series_id",
  "instance_id",
  "instance_slug",
  "instance_type",
  "quarter",
  "capture_folder.path",
  "archive.version",
  "metadata_version",
  "query_set.source_path",
  "query_set.source_sha256",
  "query_set.query_set_id",
  "queries_executed",
];

function getPath(obj, dotted) {
  return dotted
    .split(".")
    .reduce((o, k) => (o == null ? undefined : o[k]), obj);
}

/** Citește și validează config-ul. Aruncă eroare cu lista completă a problemelor. */
export async function loadConfig(configPath) {
  const config = await readConfig(configPath);
  const problems = [];
  for (const key of REQUIRED) {
    const v = getPath(config, key);
    if (
      v === undefined ||
      v === null ||
      v === "" ||
      (Array.isArray(v) && v.length === 0)
    ) {
      problems.push(`lipsește câmpul obligatoriu: ${key}`);
    }
  }
  if (config.instance_id && !INSTANCE_ID_RE.test(config.instance_id))
    problems.push("instance_id invalid");
  if (config.instance_slug && !SLUG_RE.test(config.instance_slug))
    problems.push("instance_slug invalid (kebab-case)");
  if (config.instance_type) {
    const problem = instanceTypeProblem(config.instance_type, config.quarter);
    if (problem) problems.push(problem);
  }
  if (config.quarter && !QUARTER_RE.test(config.quarter))
    problems.push("quarter invalid (YYYYQn)");
  if (
    config.query_set?.source_sha256 &&
    !/^[0-9a-f]{64}$/.test(config.query_set.source_sha256)
  ) {
    problems.push("query_set.source_sha256 nu e un SHA-256 hex");
  }
  if (config.release?.github?.draft === false)
    problems.push("release.github.draft trebuie să rămână true");
  if (problems.length) {
    throw new Error(
      `Config invalid (${configPath}):\n  - ${problems.join("\n  - ")}`,
    );
  }
  return config;
}

export function instancePaths(config) {
  const slug = config.instance_slug;
  const workDir = path.resolve("evidence/work/mkt", slug);
  return {
    workDir,
    incomingDir: path.resolve("evidence/incoming/mkt"),
    outputDir: path.resolve(
      "evidence/output/mkt",
      slug,
      String(config.metadata_version),
    ),
    logPath: path.join(workDir, "processing-log.jsonl"),
    manifestPath: path.join(workDir, "capture-manifest.json"),
    detectionPath: path.join(workDir, "detection-report.json"),
    inventoryPath: path.join(workDir, "inventory.json"),
    extractedDir: path.join(workDir, "extracted"),
    querySetPath: path.join(workDir, "query-set.csv"),
    sessionContextPath: path.join(workDir, "session-context.csv"),
    sessionReviewPath: path.join(workDir, "session-context-review.csv"),
    sessionSummaryPath: path.join(workDir, "session-context-summary.json"),
    captureClassificationPath: path.join(workDir, "capture-classification.csv"),
    // CONVERT (STEP 1b, AVL200-REQ-041): PNG folder → WebP folder sealed at STEP 2.
    webpDir: path.join(workDir, "webp"),
    convertedDir: path.join(workDir, "webp", "converted"),
    webpManifestPath: path.join(workDir, "webp", "webp-conversion.csv"),
    webpSummaryPath: path.join(workDir, "webp", "webp-conversion.json"),
    archivePath: path.resolve(
      "evidence/incoming/mkt",
      `${slug}_capture-archive_v${config.archive.version}.zip`,
    ),
  };
}

/** On unless the config sets `webp_conversion.enabled: false` — allowed only
 * for runs sealed before AVL-200 2.0.0 (AVL200-REQ-013). */
export function webpConversionEnabled(config) {
  return config.webp_conversion?.enabled !== false;
}

/** The folder STEP 2 seals: the converted WebP folder, or the capture folder
 * itself when conversion is disabled. */
export function sealedFolderPath(config) {
  return webpConversionEnabled(config)
    ? instancePaths(config).convertedDir
    : path.resolve(config.capture_folder.path);
}

export function artifactName(slug, artifact, version, ext) {
  return `${slug}_${artifact}_v${version}.${ext}`;
}

export function evidenceId(instanceId, n, width) {
  return `${instanceId}-E${String(n).padStart(width, "0")}`;
}

export function executionId(instanceId, surface, queryId, attempt) {
  const base = `${instanceId}-${surface}-${queryId}`;
  return attempt && Number(attempt) > 1 ? `${base}-A${attempt}` : base;
}

// ---------------------------------------------------------------------------
// Documente ale operatorului din rădăcina folderului (naming-convention.md §3.1)
// ---------------------------------------------------------------------------

export const CAPTURE_EXTENSIONS = ["png", "jpg", "jpeg", "heic", "webp"];
export const OPERATOR_DOCUMENT_EXTENSIONS = [
  "docx",
  "doc",
  "pdf",
  "md",
  "txt",
  "rtf",
  "odt",
  "pages",
  "xlsx",
  "csv",
  "yaml",
  "yml",
];

const extOf = (rel) =>
  rel.split("/").pop().split(".").length > 1
    ? rel.split(".").pop().toLowerCase()
    : "";

/** Fișier direct în rădăcina folderului, cu extensie de document (nu captură). */
export function isOperatorDocument(relPath) {
  return (
    !relPath.includes("/") &&
    OPERATOR_DOCUMENT_EXTENSIONS.includes(extOf(relPath))
  );
}

export function isCaptureFile(relPath) {
  return CAPTURE_EXTENSIONS.includes(extOf(relPath));
}

export function documentId(instanceId, n) {
  return `${instanceId}-D${String(n).padStart(2, "0")}`;
}

// ---------------------------------------------------------------------------
// Fișiere de sistem (config-schema.md: system_file_patterns)
// ---------------------------------------------------------------------------

const DEFAULT_SYSTEM_PATTERNS = [".DS_Store", "._*", "Thumbs.db"];

export function isSystemFile(relPath, patterns = DEFAULT_SYSTEM_PATTERNS) {
  const parts = relPath.split("/");
  if (parts[0] === "__MACOSX") return true;
  const base = parts[parts.length - 1];
  return patterns.some((p) =>
    p.endsWith("*") ? base.startsWith(p.slice(0, -1)) : base === p,
  );
}

// ---------------------------------------------------------------------------
// Artefactele pachetului final (naming-convention.md §5)
// ---------------------------------------------------------------------------

/** Numele fișierelor din directorul de output, în ordinea din README §15. */
export function packageFiles(config) {
  const slug = config.instance_slug;
  const av = config.archive.version;
  const mv = config.metadata_version;
  const files = {
    archive: `${slug}_capture-archive_v${av}.zip`,
    manifest: `${slug}_capture-manifest_v${av}.json`,
    webpConversion: webpConversionEnabled(config)
      ? `${slug}_webp-conversion_v${av}.csv`
      : null,
    querySet: `${slug}_query-set_${config.query_set.query_set_id}.csv`,
    runSheet: config.run_sheet?.path ? `${slug}_run-sheet_v${mv}.yaml` : null,
    sessionContext: artifactName(slug, "session-context", mv, "csv"),
    captureIndex: artifactName(slug, "capture-index", mv, "csv"),
    register: artifactName(slug, "observation-register", mv, "csv"),
    readme: artifactName(slug, "readme", mv, "md"),
    checksums: artifactName(slug, "sha256sums", mv, "txt"),
  };
  return files;
}

/** Artefactele care se îngheață înainte de checksums (fără arhivă și manifestul de checksums). */
export function frozenArtifactKeys(config) {
  return [
    "manifest",
    "webpConversion",
    "querySet",
    "runSheet",
    "sessionContext",
    "captureIndex",
    "register",
    "readme",
  ].filter((k) => packageFiles(config)[k]);
}
