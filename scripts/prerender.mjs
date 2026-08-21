// Renders every route to its own static HTML file.
//
// GitHub Pages is a plain file server with no rewrite support: a request for
// /blog only returns 200 if dist/blog/index.html actually exists. Without
// these files the SPA is served through 404.html, which works for humans but
// tells crawlers the page does not exist.
//
// Run after `vite build` and `vite build --ssr`.

import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");

const { render, ROUTES, canonical } = await import(
  path.join(root, "dist-ssr", "entry-server.js")
);

const shell = await fs.readFile(path.join(dist, "index.html"), "utf8");

const escapeAttr = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

// Replaces the first match, or appends into <head> when the tag is absent.
function upsert(html, pattern, tag) {
  return pattern.test(html)
    ? html.replace(pattern, tag)
    : html.replace("</head>", `    ${tag}\n  </head>`);
}

function buildPage({ html, meta, canonical }) {
  const title = escapeAttr(meta.title);
  const description = escapeAttr(meta.description);

  let page = shell.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`,
  );
  page = upsert(page, /<title>[\s\S]*?<\/title>/, `<title>${title}</title>`);
  page = upsert(
    page,
    /<meta\s+name="description"[\s\S]*?\/>/,
    `<meta name="description" content="${description}" />`,
  );
  page = upsert(
    page,
    /<meta\s+property="og:title"[\s\S]*?\/>/,
    `<meta property="og:title" content="${title}" />`,
  );
  page = upsert(
    page,
    /<meta\s+property="og:description"[\s\S]*?\/>/,
    `<meta property="og:description" content="${description}" />`,
  );
  page = upsert(
    page,
    /<link\s+rel="canonical"[\s\S]*?\/>/,
    `<link rel="canonical" href="${escapeAttr(canonical)}" />`,
  );
  return page;
}

// Unknown paths still need the client-side router, so 404.html keeps the
// empty shell rather than any one route's prerendered markup.
await fs.writeFile(path.join(dist, "404.html"), shell, "utf8");

for (const route of ROUTES) {
  const page = buildPage(render(route));
  const file =
    route === "/"
      ? path.join(dist, "index.html")
      : path.join(dist, route.slice(1), "index.html");

  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, page, "utf8");
  console.log(`prerendered ${route} -> ${path.relative(dist, file)}`);
}

// Keep the sitemap generated from the same route list, so it cannot drift
// from what actually ships.
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...ROUTES.map((route) => `  <url><loc>${canonical(route)}</loc></url>`),
  "</urlset>",
  "",
].join("\n");

await fs.writeFile(path.join(dist, "sitemap.xml"), sitemap, "utf8");
console.log(`wrote sitemap.xml (${ROUTES.length} urls)`);

await fs.rm(path.join(root, "dist-ssr"), { recursive: true, force: true });
