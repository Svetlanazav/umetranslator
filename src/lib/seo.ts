import { blogPostsData } from "@/pages/BlogPost";

export interface PageMeta {
  title: string;
  description: string;
}

const SITE_URL = "https://svetlanazav.github.io/umetranslator";

const HOME: PageMeta = {
  title:
    "Ume Translator: Decode Texts, Flirt Better, Understand your loveone",
  description:
    "Understand what your partner means with Ume Translator—AI app for flirty, clear texting. Decode messages, flirt like a pro, and bridge women vs man gaps. Try now!",
};

const BLOG: PageMeta = {
  title: "Blog — Texting, Flirting and Dating Advice | Ume Translator",
  description:
    "Practical guides on decoding text messages, flirting without the awkwardness, and understanding what your partner actually means.",
};

// Blog posts open with a <p class="lead"> summary; reuse it as the
// meta description instead of maintaining the same text twice.
function leadParagraph(content: string): string {
  const match = content.match(/<p class="lead">([\s\S]*?)<\/p>/);
  if (!match) return BLOG.description;
  return match[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
}

// GitHub Pages serves these routes as directories and 301s the
// slashless form, so the canonical URL is the one with the trailing slash.
export function canonicalUrl(pathname: string): string {
  return `${SITE_URL}${pathname.replace(/\/*$/, "")}/`;
}

export function getMeta(pathname: string): PageMeta {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return HOME;
  if (path === "/blog") return BLOG;

  const slug = path.startsWith("/blog/") ? path.slice("/blog/".length) : "";
  const post = blogPostsData[slug as keyof typeof blogPostsData];
  if (post) {
    return {
      title: `${post.title} | Ume Translator`,
      description: leadParagraph(post.content),
    };
  }
  return HOME;
}

// Every route that gets its own static HTML file at build time.
export const ROUTES: string[] = [
  "/",
  "/blog",
  ...Object.keys(blogPostsData).map((slug) => `/blog/${slug}`),
];
