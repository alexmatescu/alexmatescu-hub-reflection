import presaData from "@/content/presa/presa.json";
import { alexMatescuPerson } from "@/components/Seo";

const BASE = "https://delamatescu.ro";

export type PresaKind =
  | "interview"
  | "article-about"
  | "mention"
  | "podcast"
  | "authored"
  | "collaboration";

/** "person" | "crandit" | "lab" | orice slug de proiect din /proiecte (ex: "taste-the-corn"). */
export type PresaSubject = "person" | "crandit" | "lab" | (string & {});

export type PresaEntry = {
  id: string;
  kind: PresaKind;
  story: string;
  title: string;
  publication: string;
  publicationUrl: string;
  author: string;
  url: string;
  date: string;
  context: string;
  subject: PresaSubject;
  language: string;
  featured: boolean;
};

export type PresaStory = {
  label: string;
  date: string;
  summary: string;
};

type PresaData = {
  entries: PresaEntry[];
  stories: Record<string, PresaStory>;
};

const data = presaData as PresaData;

export const presaEntries: PresaEntry[] = data.entries;
export const presaStories: Record<string, PresaStory> = data.stories;

/** Toate aparițiile, sortate descrescător după dată. */
export const getPresaEntriesSorted = (): PresaEntry[] =>
  [...presaEntries].sort((a, b) => b.date.localeCompare(a.date));

/** Aparițiile pentru un anumit subiect (persoană, proiect, carte etc.). */
export const getPresaEntriesBySubject = (subject: PresaSubject): PresaEntry[] =>
  getPresaEntriesSorted().filter((e) => e.subject === subject);

/**
 * Aparițiile grupate pe `story` (un eveniment poate fi preluat de mai multe
 * publicații) — fiecare grup are intrările cu `featured: true` primele, apoi
 * descrescător după dată; grupurile sunt ordonate descrescător după data story-ului.
 */
export const getPresaGroupedByStory = (): {
  story: string;
  meta: PresaStory;
  entries: PresaEntry[];
}[] => {
  const byStory = new Map<string, PresaEntry[]>();
  for (const entry of getPresaEntriesSorted()) {
    const list = byStory.get(entry.story) ?? [];
    list.push(entry);
    byStory.set(entry.story, list);
  }

  return [...byStory.entries()]
    .map(([story, entries]) => ({
      story,
      // Non-null: `story` vine din `entry.story` al unei intrări reale din
      // presa.json, deci are mereu o intrare corespondentă în `stories`.
      meta: presaStories[story]!,
      entries: [...entries].sort((a, b) => {
        if (a.featured !== b.featured) return a.featured ? -1 : 1;
        return b.date.localeCompare(a.date);
      }),
    }))
    .sort((a, b) => b.meta.date.localeCompare(a.meta.date));
};

// ---------------------------------------------------------------------------
// Structured data (schema.org) pentru /presa.
//
// Nodul Organization pentru fiecare proiect care are apariții în presă — cheia
// e slug-ul din /proiecte (`subject` din presa.json). Se adaugă o intrare nouă
// aici doar când un proiect chiar are o apariție (nu se inventează în avans).
// ---------------------------------------------------------------------------
const projectOrgNodes: Record<
  string,
  { "@type": "Organization"; "@id": string; [key: string]: unknown }
> = {
  "taste-the-corn": {
    "@type": "Organization",
    "@id": `${BASE}/proiecte#taste-the-corn`,
    name: "Taste The Corn",
    foundingDate: "2025-07",
    founder: { "@id": alexMatescuPerson["@id"] },
    location: "Shopping City Sibiu",
  },
};

const subjectAboutRefs = (entry: PresaEntry): { "@id": string }[] => {
  const org = projectOrgNodes[entry.subject];
  const refs: { "@id": string }[] = [];
  if (org) refs.push({ "@id": org["@id"] });
  refs.push({ "@id": alexMatescuPerson["@id"] });
  return refs;
};

/**
 * Mapare `kind` → tip schema.org + relația cu Person (Alex Matescu). Reguli
 * pentru orice `kind` nou adăugat în viitor în presa.json:
 *
 *   interview, article-about  → NewsArticle,    about: Person
 *   mention                   → NewsArticle,    mentions: Person
 *   podcast                   → PodcastEpisode, about: Person
 *   authored, collaboration   → Article,        author: Person
 *
 * `author` nu e niciodată Person (eu) pe un material în care am fost doar
 * intervievat sau menționat — e rezervat strict pentru texte scrise de mine.
 */
const buildArticleNode = (entry: PresaEntry) => {
  const base = {
    "@id": `${BASE}/presa#${entry.id}`,
    url: entry.url,
    headline: entry.title,
    datePublished: entry.date,
    inLanguage: entry.language === "ro" ? "ro-RO" : entry.language,
    publisher: {
      "@type": "Organization",
      name: entry.publication,
      url: entry.publicationUrl,
    },
  };
  // Autorul din publicație (bylinele originale) — NU eu.
  const byline = { "@type": "Person", name: entry.author };

  switch (entry.kind) {
    case "interview":
    case "article-about":
      return {
        "@type": "NewsArticle",
        ...base,
        author: byline,
        about: subjectAboutRefs(entry),
      };
    case "mention":
      return {
        "@type": "NewsArticle",
        ...base,
        author: byline,
        mentions: subjectAboutRefs(entry),
      };
    case "podcast":
      return {
        "@type": "PodcastEpisode",
        ...base,
        author: byline,
        about: subjectAboutRefs(entry),
      };
    case "authored":
    case "collaboration":
      return {
        "@type": "Article",
        ...base,
        author: { "@id": alexMatescuPerson["@id"] },
      };
    default:
      return {
        "@type": "NewsArticle",
        ...base,
        author: byline,
        mentions: subjectAboutRefs(entry),
      };
  }
};

/**
 * `subjectOf` pentru nodul Person global (vezi `src/components/Seo.tsx` +
 * `src/routes/__root.tsx`) — @id-urile aparițiilor în care Person e subiect
 * (nu autor). Exclude `authored`/`collaboration`, unde Person e autorul, nu subiectul.
 */
export const getPresaSubjectOfRefs = (): { "@id": string }[] =>
  getPresaEntriesSorted()
    .filter((e) => e.kind !== "authored" && e.kind !== "collaboration")
    .map((e) => ({ "@id": `${BASE}/presa#${e.id}` }));

const buildPresaJsonLd = () => {
  const sorted = getPresaEntriesSorted();
  const itemListElement = sorted.map((entry, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: buildArticleNode(entry),
  }));

  const usedSubjects = new Set(sorted.map((e) => e.subject));
  const orgNodes = Object.entries(projectOrgNodes)
    .filter(([slug]) => usedSubjects.has(slug))
    .map(([, org]) => org);

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${BASE}/presa#collectionpage`,
        url: `${BASE}/presa`,
        name: "Apariții în presă și mențiuni externe",
        mainEntity: { "@type": "ItemList", itemListElement },
      },
      ...orgNodes,
    ],
  };
};

/**
 * head() complet (title, description, OG/Twitter, canonical, JSON-LD) pentru
 * ruta /presa — randat server-side, ca structured data-ul să fie deja prezent
 * în HTML-ul servit, nu doar injectat client-side la hidratare (același motiv
 * ca `buildLabArticleHead` din `@/data/lab-seo`).
 */
export const buildPresaHead = () => {
  const title = "Apariții în presă și mențiuni externe — Alex Matescu";
  const description =
    "Articole și mențiuni despre Alex Matescu și proiectele sale, apărute în publicații externe — cu link direct către sursa originală.";
  const canonical = `${BASE}/presa`;

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(buildPresaJsonLd()),
      },
    ],
  };
};
