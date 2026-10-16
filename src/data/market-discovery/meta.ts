/**
 * Market Discovery — metadatele ușoare ale rulărilor, pentru rute (head,
 * loader) și pentru textele hub-ului. Nu importă datele complete
 * (entități, proveniență): acelea se încarcă doar cu pagina, din `./index`.
 */
import runsData from "./runs.json";

export const MD_HUB_PATH = "/lab/market-discovery";
export const MD_PROTOCOL_PATH =
  "/lab/metodologie/protocol-delimitare-piata-eligibilitate";
export const MD_GITHUB_REPO =
  "https://github.com/alexmatescu/alexmatescu-hub-reflection";

export const MD_SURFACE_LABELS: Record<string, string> = {
  GSEARCH: "Google Search",
  BSEARCH: "Bing Search",
  GAIMODE: "Google AI Mode",
  CHATGPT: "ChatGPT",
  CLAUDE: "Claude",
  GEMINI: "Gemini",
  PERPLEXITY: "Perplexity",
  COPILOT: "Copilot",
};

export const MD_HUB_TITLE =
  "Market Discovery: cine apare când cauți servicii de AI Visibility în România";
export const MD_HUB_DESCRIPTION =
  "Seria MKT-RO-AIV a AI Visibility Lab: aceleași întrebări puse lui Google, Bing, AI Mode, ChatGPT, Claude, Gemini, Perplexity și Copilot, cu fiecare rezultat capturat, clasificat și numărat. Piloții 2026Q4, cu date și dovezi trasabile.";

/** Textul editorial al fiecărei rulări; restul vine din JSON. */
export type RunMeta = {
  title: string;
  seoTitle: string;
  description: string;
  /** Data publicării paginii (ISO). */
  datePublished: string;
  /** Ce declară rularea, într-o frază. */
  scope: string;
  /** Datele rulării, afișate (run-sheet-ul pilotului 2 nu le are declarate). */
  runDates: string;
};

export const runMeta: Record<string, RunMeta> = {
  "2026q4-pilot-1": {
    title:
      "Pilotul 1 Market Discovery: 4 întrebări × 8 suprafețe, rulat din Italia",
    seoTitle: "Market Discovery 2026Q4 — Pilotul 1",
    description:
      "Primul pilot Market Discovery din seria MKT-RO-AIV: 4 întrebări DISCOVERY pe Google, Bing, AI Mode, ChatGPT, Claude, Gemini, Perplexity și Copilot. 99 de capturi, 32 de execuții, 91 de entități candidate în bază.",
    datePublished: "2026-10-16",
    runDates: "9 octombrie 2026",
    scope:
      "Primul test al setului de întrebări v0.1.0, rulat la 9 octombrie 2026 din Italia, pentru a verifica procedura de captură, clasificare și deduplicare.",
  },
  "2026q4-pilot-2": {
    title:
      "Pilotul 2 Market Discovery: aceleași 4 întrebări, rulate din România",
    seoTitle: "Market Discovery 2026Q4 — Pilotul 2",
    description:
      "Al doilea pilot Market Discovery din seria MKT-RO-AIV: aceleași 4 întrebări ca pilotul 1, rulate din Sibiu pe 8 suprafețe. 109 capturi, 32 de execuții, 84 de entități candidate în bază și comparația cu pilotul 1.",
    datePublished: "2026-10-16",
    runDates: "11 octombrie 2026",
    scope:
      "Repetarea pilotului 1 din România, la 11 octombrie 2026, cu AI Overview capturat ca bloc separat, pentru a vedea cât de stabil e ce găsește Discovery.",
  },
  "2026q4-pilot-3": {
    title:
      "Pilotul 3 Market Discovery: celelalte 8 întrebări din set, pe 8 suprafețe",
    seoTitle: "Market Discovery 2026Q4 — Pilotul 3",
    description:
      "Al treilea pilot Market Discovery din seria MKT-RO-AIV: cele 8 întrebări din setul v0.2.0 nerulate anterior, pe 8 suprafețe. 227 de capturi, 64 de execuții, 174 de entități candidate în bază, 241 cumulat pe cei trei piloți.",
    datePublished: "2026-10-16",
    runDates: "13–14 octombrie 2026",
    scope:
      "Completarea setului de întrebări v0.2.0, rulată la 13–14 octombrie 2026 din Sibiu, cu Google citit până la ~30 de poziții.",
  },
};

export type MdRunHead = RunMeta & {
  slug: string;
  instanceId: string;
  sessionDates: string[];
  path: string;
};

/** Rulările, în ordine cronologică, doar cu metadatele necesare rutelor. */
export const mdRunHeads: MdRunHead[] = runsData.map((r) => {
  const meta = runMeta[r.slug];
  if (!meta)
    throw new Error(`Market Discovery: lipsește runMeta pentru ${r.slug}`);
  return { ...r, ...meta, path: `${MD_HUB_PATH}/${r.slug}` };
});

export const findMdRunHead = (slug: string) =>
  mdRunHeads.find((r) => r.slug === slug);
