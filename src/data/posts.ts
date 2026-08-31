import data from "./blogger-posts.json";
import { oLumePreaMarePentruUnSingurOmPost } from "@/data/blog-content/o-lume-prea-mare-pentru-un-singur-om";

/**
 * Structura articolelor de blog — câmpurile de mai jos sunt grupate și ordonate
 * ca să oglindească `LabArticleMeta` (@/data/lab-seo.ts), sursa de uniformitate
 * pentru toate articolele (Lab + blog). Unde blogul are deja un nume de câmp
 * consacrat (`date` în loc de `datePublished`, `canonicalPath` în loc de
 * `canonical`, `schemaKeywords` în loc de `keywords`), NU l-am redenumit —
 * ar rupe cele 131 de articole existente din blogger-posts.json fără niciun
 * beneficiu real (ordinea într-un `type` TS nu are efect la runtime, contează
 * doar pentru lizibilitate). Fiecare câmp nou/redenumit conceptual are în
 * comentariu echivalentul lui din LabArticleMeta.
 */
export type Post = {
  // --- Identitate & conținut (~ title/description/canonical) ---
  slug: string;
  title: string;
  subtitle: string;
  excerpt: string;
  /** Meta description SEO; dacă lipsește, se cade pe `excerpt`. ~ `description`. */
  metaDescription?: string;
  /** Path canonic /blog/:slug (derivat din `slug` dacă lipsește). ~ `canonical`. */
  canonicalPath?: string;

  // --- Date (aceeași semantică ca datePublished/dateModified/lastReviewed) ---
  /** Prima publicare publică — NU data draftului/research-ului. ~ `datePublished`. */
  date: string;
  /** Data ultimei modificări de conținut. ~ `dateModified`. */
  dateModified?: string;
  /**
   * Data ultimei verificări factuale reale (poate diferi de `dateModified`).
   * ~ `lastReviewed`. Ca și în Lab, NU e emis în JSON-LD — e metadată
   * editorială; dacă articolul afișează „Ultima verificare factuală" în
   * byline (în `html`), scrie-o manual acolo, la fel ca acest câmp.
   */
  lastReviewed?: string;

  // --- Clasificare editorială (~ category/articleType) ---
  category: string;
  /**
   * Tipul editorial al materialului (ex. "Reflecție", "Poveste", "Ghid").
   * ~ `articleType`. Ca și în Lab (unde apare doar în indexul /lab/articole,
   * nu în JSON-LD), momentan e metadată de clasificare — nu e afișat în UI-ul
   * blogului și nu e emis în structured data.
   */
  articleType?: string;
  tags?: string[];

  // --- Structured data suplimentar (~ about/faq/citations) ---
  /** Entități tematice (schema.org `about`). Identic cu `about` din Lab. */
  about?: string[];
  /**
   * Întrebări frecvente pentru schema.org FAQPage. Identic cu `faq` din Lab:
   * textul vizibil al FAQ tot trebuie scris manual în `html`, câmpul ăsta
   * alimentează doar JSON-LD-ul (vezi `buildBlogPostHead` din blog-seo.ts).
   */
  faq?: { q: string; a: string }[];
  /** Surse citate efectiv în articol, pentru schema.org `citation`. Identic cu `citations` din Lab. */
  citations?: { name: string; url: string }[];
  /** Persoane menționate (schema.org `mentions`) — extensie proprie blogului, fără echivalent în Lab. */
  mentions?: string[];
  /** Termeni descriptivi ai conținutului — NU keyword stuffing. ~ `keywords`. */
  schemaKeywords?: string[];
  focusKeyword?: string;

  // --- Imagine (~ image) ---
  /** Imaginea principală. ~ `image` (acolo e {url, alt} flat; aici include și dimensiuni). */
  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  /** Override pentru alt text-ul din OG/Twitter, dacă diferă de `heroImage.alt`. */
  imageAlt?: string;

  // --- SEO / social override-uri (fără echivalent direct în Lab) ---
  seoTitle?: string;
  ogTitle?: string;
  ogDescription?: string;
  twitterTitle?: string;
  twitterDescription?: string;

  // --- Prezentare & autor ---
  readingTime: string;
  author?: {
    name: string;
    slug: string;
    url: string;
  };
  featured?: boolean;

  // --- Conținut ---
  /** Original Blogger HTML (sanitized). When present, rendered as HTML. */
  html?: string;

  /** Fallback paragraph array for hand-written posts. */
  content?: string[];
};

const legacyPosts: Post[] = data.posts as Post[];

/**
 * Articole noi, publicate de la 2026-08-30 încolo — NU se mai adaugă în
 * `blogger-posts.json` (care rămâne arhiva „înghețată" a celor 131 de
 * articole deja existente, neexportate/nemigrate). Fiecare articol nou e un
 * fișier independent în `@/data/blog-content/`, la fel ca meta-urile Lab din
 * `@/data/lab-content/` (vezi `labArticleMeta` în `@/data/lab-seo.ts`).
 *
 * Cum publici un articol nou — vezi și `blog-post-template.ts`:
 * 1. Copiază `blog-post-template.ts` într-un fișier nou
 *    `@/data/blog-content/<slug>.ts` și completează-l (`satisfies Post`).
 * 2. Importă obiectul aici și adaugă-l în array-ul de mai jos.
 * Ordinea cronologică se rezolvă automat mai jos (sortare după `date`) —
 * nu contează unde îl pui în listă.
 */
const newPosts: Post[] = [oLumePreaMarePentruUnSingurOmPost];

export const posts: Post[] = [...newPosts, ...legacyPosts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);

export const categories = Array.from(
  new Set([
    ...(data.categories as string[]),
    ...newPosts.map((p) => p.category),
  ]),
);
