import data from "./blogger-posts.json";

export type Post = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  tags?: string[];
  date: string;
  dateModified?: string;
  readingTime: string;
  excerpt: string;

  seoTitle?: string;
  metaDescription?: string;
  focusKeyword?: string;

  author?: {
    name: string;
    slug: string;
    url: string;
  };

  heroImage?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };

  canonicalPath?: string;
  featured?: boolean;

  /** Original Blogger HTML (sanitized). When present, rendered as HTML. */
  html?: string;

  /** Fallback paragraph array for hand-written posts. */
  content?: string[];
};


export const posts: Post[] = data.posts as Post[];
export const categories = data.categories as string[];
