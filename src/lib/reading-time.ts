/**
 * Timpul de citire al articolelor noi de blog (`@/data/blog-content/`).
 *
 * Convenția proiectului (unică, deterministă — nu se estimează manual):
 * - se numără cuvintele textului vizibil din `html` (sau din `content`, la
 *   articolele fără `html`), după eliminarea tag-urilor, a `<script>`/`<style>`
 *   și a entităților HTML;
 * - secțiunile de surse/bibliografie (un `<h2>` care începe cu „Surse",
 *   „Bibliografie" sau „Referințe", până la următorul `<h2>` sau final) NU
 *   intră în calcul — sunt liste de referințe, nu text citit;
 * - întrebările frecvente și restul corpului intră în calcul;
 * - 200 de cuvinte pe minut, rotunjit în sus, minimum 1 minut;
 * - rezultatul are formatul folosit în tot site-ul: „13 min".
 *
 * Arhiva Blogger (`blogger-posts.json`) NU trece prin acest calcul — își
 * păstrează valorile istorice.
 */

export const WORDS_PER_MINUTE = 200;

const SECTIUNE_SURSE =
  /<h2\b[^>]*>\s*(?:<[^>]+>\s*)*(?:Surse|Bibliografie|Referințe)\b[\s\S]*?(?=<h2\b|$)/gi;

export function countReadingWords(html: string): number {
  const text = html
    .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
    .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
    .replace(SECTIUNE_SURSE, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z0-9#]+;/gi, " ");
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

export function readingTimeFromHtml(html: string): string {
  const minute = Math.max(
    1,
    Math.ceil(countReadingWords(html) / WORDS_PER_MINUTE),
  );
  return `${minute} min`;
}
