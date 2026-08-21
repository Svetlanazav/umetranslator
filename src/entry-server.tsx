import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import AppRoutes from "./AppRoutes";
import { getMeta, canonicalUrl } from "./lib/seo";
import "./index.css";

// Called by scripts/prerender.mjs once per route at build time.
// `route` is app-relative ("/blog"); the router sees it prefixed with
// the deploy base, exactly as BrowserRouter does in the browser.
export function render(route: string) {
  const base = import.meta.env.BASE_URL;
  const location = `${base}${route.replace(/^\//, "")}`;
  const html = renderToString(
    <StaticRouter location={location} basename={base}>
      <AppRoutes />
    </StaticRouter>,
  );
  return { html, meta: getMeta(route), canonical: canonicalUrl(route) };
}

export { ROUTES } from "./lib/seo";
export { canonicalUrl as canonical } from "./lib/seo";
