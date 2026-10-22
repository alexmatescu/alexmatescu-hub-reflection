/**
 * Market Discovery (seria MKT-RO-AIV) — sursa paginilor /lab/market-discovery.
 *
 * Cifrele nu se scriu de mână: JSON-urile de aici sunt generate de
 * `scripts/build-market-discovery-data.mjs` din pachetele de dovezi înghețate
 * și din rapoartele piloților (SHA-256 verificat la generare). Aici se
 * adaugă doar textul editorial al fiecărei rulări (titlu, descriere) și
 * etichetele afișate.
 *
 * O rulare nouă (FULL sau M{lună}): se adaugă în `RUNS` din script, se
 * regenerează, apoi se adaugă aici intrarea din `runMeta` și importul JSON.
 */
import pilot1 from "./2026q4-pilot-1.json";
import pilot2 from "./2026q4-pilot-2.json";
import pilot3 from "./2026q4-pilot-3.json";
import pilot5 from "./2026q4-pilot-5.json";
import seriesData from "./series.json";
import {
  MD_GITHUB_REPO,
  MD_HUB_PATH,
  MD_PROTOCOL_PATH,
  MD_SURFACE_LABELS,
  runMeta,
  type RunMeta,
} from "./meta";

export { MD_GITHUB_REPO, MD_HUB_PATH, MD_PROTOCOL_PATH, MD_SURFACE_LABELS };

export type MdExclusivity = {
  group: string;
  entities: number;
  exclusive: number;
  entitiesExtended: number;
  exclusiveExtended: number;
};

/** O observație inclusă în reuniune: de unde provine numele (AVL-MKT-001 REQ-024). */
export type MdProvenance = {
  query: string;
  surface: string;
  provenance: string;
  block?: string;
  position?: string;
  recommended?: boolean;
  url?: string;
  /** Evidence ID-urile capturilor, fără prefixul instanței (ex. E001, E001-AIO). */
  evidence: string[];
  /** Corecție aplicată din anexa de erori (ex. ERR-01). */
  erratum?: string;
};

export type MdEntity = {
  id: string;
  key: string;
  name: string;
  type: string;
  class: string;
  base: boolean;
  queries: string[];
  surfaces: string[];
  surfacesExtended: string[];
  cells: number;
  observations: number;
  recommendedOn: string[];
  identityFlags: string | null;
  /** Relațiile din registrul pilotului, ex. „REL-04 POSSIBLY_SAME → CE-196”. */
  relations: string | null;
  /** În registrul Market Discovery, orice entitate e UNVERIFIED (AVL-MKT-001 §21.1). */
  status: "UNVERIFIED";
  provenance: MdProvenance[];
};

export type MdExecution = {
  surface: string;
  query: string;
  captures: number;
  status: string;
  relevance: string;
  observations: number;
  include: number;
  excludeIrrelevant: number;
  excludeNotProvider: number;
  excludeUncertain: number;
  entitiesBase: number;
  entitiesExtended: number;
  analysis: string;
  sessionConflicts: number;
  contamination: string[];
  aiOverview: boolean;
};

export type MdRunData = {
  slug: string;
  packageSlug: string;
  instanceId: string;
  label: string;
  querySetId: string;
  packageVersion: string;
  reportVersion: string;
  release: { tag: string; published: boolean };
  integrity: Record<string, string>;
  sessions: {
    id: string;
    date: string | null;
    start: string | null;
    end: string | null;
    location: string | null;
    reportedLocation: string | null;
    network: string | null;
  }[];
  queries: { id: string; text: string; class: string; layer: string }[];
  surfaces: {
    id: string;
    captures: number;
    date: string | null;
    accountState: string | null;
    privateWindow: string | null;
    newConversationPerQuery: string | null;
    locationDisplayed: string[];
    sessionConflicts: number;
  }[];
  totals: {
    captures: number;
    executions: number;
    observations: number;
    include: number;
    entitiesBase: number;
    entitiesExtended: number;
    entitiesUncertainOnly: number;
    executionsWithoutCandidates: number;
    sessionConflicts: number;
    contamination: Record<string, number>;
  };
  summary: string[];
  errata: { id: string; file: string; summary: string }[];
  matrix: { query: string; cells: Record<string, number>; union: number }[];
  byQuery: MdExclusivity[];
  bySurface: MdExclusivity[];
  byFamily: MdExclusivity[];
  breadth: { dimension: string; n: number; entities: number }[];
  executions: MdExecution[];
  entities: MdEntity[];
  /** SHA-256 al fiecărei capturi, după Evidence ID (fără sufixul -AIO). */
  evidenceSha: Record<string, string>;
};

export type MdRun = MdRunData & RunMeta & { path: string };

const toRun = (data: MdRunData): MdRun => {
  const meta = runMeta[data.slug];
  if (!meta)
    throw new Error(`Market Discovery: lipsește runMeta pentru ${data.slug}`);
  return { ...data, ...meta, path: `/lab/market-discovery/${data.slug}` };
};

/** Rulările, în ordine cronologică. */
export const mdRuns: MdRun[] = [pilot1, pilot2, pilot3, pilot5].map((d) =>
  toRun(d as unknown as MdRunData),
);

export const findMdRun = (slug: string) => mdRuns.find((r) => r.slug === slug);

export const mdSeries = seriesData;

export const MD_SURFACE_SHORT: Record<string, string> = {
  GSEARCH: "Google",
  BSEARCH: "Bing",
  GAIMODE: "AI Mode",
  CHATGPT: "ChatGPT",
  CLAUDE: "Claude",
  GEMINI: "Gemini",
  PERPLEXITY: "Perplexity",
  COPILOT: "Copilot",
};

export const MD_ENTITY_TYPE_LABELS: Record<string, string> = {
  ORGANIZATION: "Organizație",
  PERSON: "Persoană",
  PRODUCT: "Produs",
};

export const MD_CLASS_LABELS: Record<string, string> = {
  SERVICE: "Servicii",
  SOFTWARE: "Software",
  MIXED: "Mixt",
  UNCLEAR: "Neclar",
};

export const MD_PROVENANCE_LABELS: Record<string, string> = {
  SERP_RESULT: "Rezultat organic",
  SERP_SNIPPET: "Nume din fragmentul unui rezultat",
  AI_RESPONSE: "Răspuns AI",
  AI_CITATION: "Sursă citată de AI",
  AI_IMAGE_TEXT: "Text din imaginea unui card AI",
};

export const MD_BLOCK_LABELS: Record<string, string> = {
  ORGANIC: "organic",
  AI_OVERVIEW: "AI Overview",
  GENERATED_ANSWER: "răspunsul generat Bing",
  ADS: "reclamă",
};

/**
 * Semnalele de identitate (AVL-MKT-001 REQ-026). Toate se rezolvă abia în
 * Market Verification; aici doar se arată.
 */
export const MD_IDENTITY_FLAG_LABELS: Record<string, string> = {
  ALIAS_UNVERIFIED: "alias neverificat",
  POSSIBLE_SAME_AS: "posibil aceeași entitate cu",
  POSSIBLE_RELATED: "posibil legată de",
  CARD_IMAGE_MISMATCH: "imaginea cardului arată alt nume",
  UNION_TO_CONFIRM: "unire de confirmat cu",
  INCOMPLETE_NAME: "nume incomplet",
  IDENTITY_INCOMPLETE: "identitate incompletă",
  PERSON_DOMAIN_UNION: "persoană unită cu domeniul ei",
  ASSOCIATED: "asociată cu",
  PARTNER_OF: "parteneră cu",
  DEVELOPED_BY: "dezvoltată de",
  DEVELOPS: "dezvoltă",
  PRODUCT_OF: "produs al",
};

/** Semnalele care înseamnă identitate ambiguă, nu doar o relație observată. */
export const MD_AMBIGUOUS_FLAGS = new Set([
  "ALIAS_UNVERIFIED",
  "POSSIBLE_SAME_AS",
  "POSSIBLE_RELATED",
  "CARD_IMAGE_MISMATCH",
  "UNION_TO_CONFIRM",
  "INCOMPLETE_NAME",
  "IDENTITY_INCOMPLETE",
  "PERSON_DOMAIN_UNION",
]);

export const MD_RELATION_LABELS: Record<string, string> = {
  PERSON_BRAND: "persoană ↔ brand",
  FOUNDER_OF: "fondator ↔ firmă",
  LEADS: "conduce",
  PARTNER_OF: "parteneriat",
  DEVELOPS: "dezvoltator ↔ produs",
  PRODUCT_OF: "produs ↔ dezvoltator",
  PARENT_OF: "firmă-mamă ↔ filială",
  POSSIBLE_SAME_AS: "posibil aceeași entitate",
  POSSIBLY_SAME: "posibil aceeași entitate",
  POSSIBLE_RELATED: "posibil legate",
};

/** Relațiile care înseamnă identitate ambiguă. */
export const MD_AMBIGUOUS_RELATIONS = new Set([
  "POSSIBLE_SAME_AS",
  "POSSIBLY_SAME",
  "POSSIBLE_RELATED",
]);

export const MD_FAMILY_LABELS: Record<string, string> = {
  SEARCH_ORGANIC: "Search organic (Google, Bing)",
  AI_SURFACES: "Suprafețe AI (6)",
};

export const MD_STATE_LABELS: Record<string, string> = {
  LOGGED_OUT: "Fără cont",
  LOGGED_IN: "Cont dedicat",
  YES: "Da",
  NO: "Nu",
  RELEVANT: "Relevant",
  PARTIALLY_RELEVANT: "Parțial relevant",
  COMPLETED_WITH_CANDIDATES: "Cu candidați",
  COMPLETED_NO_UNION_CANDIDATES: "Fără candidați",
  COMPLETED_NO_NAMED_ENTITIES: "Fără entități numite",
};

export const mdLabel = (value: string | null | undefined) =>
  value ? (MD_STATE_LABELS[value] ?? value) : "nedeclarat";

const RO_MONTHS = [
  "ianuarie",
  "februarie",
  "martie",
  "aprilie",
  "mai",
  "iunie",
  "iulie",
  "august",
  "septembrie",
  "octombrie",
  "noiembrie",
  "decembrie",
];

export const formatMdDate = (iso: string | null) => {
  if (!iso) return "nedeclarat";
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${RO_MONTHS[(m ?? 1) - 1] ?? ""} ${y}`;
};
