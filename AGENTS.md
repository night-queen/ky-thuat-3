# Kĩ Thuật Biểu Diễn — Hát Bội

A static long-form editorial website. **No framework, no bundler, no dependencies.**
Plain HTML + CSS + vanilla JS, served straight from disk.

## Running it

The site is fully static — `index.html` can be opened directly in a browser with
no server at all.

For the Figma Make preview panel, a dev server runs on `$PORT` (default 8443):

```
pnpm run dev       # serve the repo root
pnpm run build     # copy index.html + assets/ into dist/
pnpm run preview   # serve dist/
```

Both scripts are zero-dependency Node programs under `tools/`. There is nothing
to install — `pnpm install` is a no-op.

Edits are picked up on browser refresh. There is no HMR and no watcher; the
server reads from disk on every request and sends `cache-control: no-cache`.

## Key files

- `index.html` — the entire page. All content lives here, in document order.
  An inline SVG sprite at the top of `<body>` holds every ornament
  (`<symbol>`) and background pattern (`<pattern>`); the page references them
  with `<use href="#id">` and `fill="url(#id)"`.
- `assets/css/style.css` — the whole stylesheet, organised in numbered
  sections. Design tokens are CSS custom properties on `:root`.
- `assets/js/main.js` — the behaviour layer: hero parallax, reveal-on-scroll,
  accordions, tabs. One IIFE, no modules.
- `tools/dev-server.mjs`, `tools/build.mjs` — the dev/build scripts.
- `reference/` — source material. `design-brief.md` is the original brief;
  the `IMG_*.png` files are the source document pages. Not shipped.

## Conventions

- **Content is the source of truth.** The Vietnamese wording comes from the
  source document and must not be rewritten, paraphrased, or "corrected".
  Formatting and layout are free to change; wording is not.
- Colour, type, and spacing come from the tokens in `:root`. Add a token
  rather than hard-coding a new value.
- Class names are semantic BEM-ish (`.section__title`, `.card--maroon`), not
  utility classes.
- The `md` breakpoint is `768px`, applied mobile-first via
  `@media (min-width: 768px)`.
- Keep `.reveal` elements working without JS — the `<noscript>` block in
  `<head>` forces them visible.
- The `<!-- figma:* -->` comments in `index.html` are Figma Make injection
  slots. Leave them in place.
