const BASE = import.meta.env.BASE_URL;

// Resolves a root-relative asset path against the deploy base path
// ("/" locally at root, "/umetranslator/" on GitHub Pages).
// Absolute URLs and data URIs are returned untouched.
export function asset(path: string): string {
  if (/^(https?:)?\/\//.test(path) || path.startsWith("data:")) return path;
  return `${BASE}${path.replace(/^\//, "")}`;
}

// Rewrites root-relative src/href attributes inside raw HTML content
// (blog posts are stored as HTML strings and injected as-is).
export function withBaseAssets(html: string): string {
  return html.replace(/(src|href)="\/(?!\/)/g, `$1="${BASE}`);
}
