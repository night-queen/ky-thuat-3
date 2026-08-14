# Kĩ Thuật Biểu Diễn — Hát Bội

A long-form editorial website on the performance techniques of Vietnamese
*hát bội* — eyes, hands, feet, horse-riding, and beard-stroking.

Plain HTML, CSS, and JavaScript. No React, no Vite, no Tailwind, no build
step, and no dependencies of any kind.

## Viewing it

**Just open `index.html` in a browser.** That is the whole site.

If you want it on a local address instead (for phone testing, or the Figma
Make preview panel):

```sh
pnpm run dev       # http://localhost:8443
pnpm run build     # assemble dist/
pnpm run preview   # serve dist/
```

Those scripts are two short Node files in `tools/`. `pnpm install` has nothing
to install.

## Layout

```
index.html            the entire page, plus an SVG sprite of every ornament
assets/css/style.css  the entire stylesheet
assets/js/main.js     nav, mobile menu, parallax, reveals, accordions, tabs
tools/                dev server + build script
reference/            source document pages and the original design brief
```

## Deploying

The site is static, so anything that serves files will host it: GitHub Pages,
Netlify, Vercel, Cloudflare Pages, or a plain folder on a web server. Run
`pnpm run build` and publish `dist/`, or publish the repo root directly —
they contain the same thing.

The only external request the page makes is to Google Fonts for *Playfair
Display* and *Be Vietnam Pro*. If the site must work fully offline, download
those two families into `assets/fonts/` and swap the `<link>` in `index.html`
for local `@font-face` rules.

## Editing

Content and structure live in `index.html`, in the order they appear on the
page. Colours, type, and spacing come from the CSS custom properties at the
top of `style.css` — change a token there and it updates everywhere.

The Vietnamese text is transcribed from the source document in `reference/`
and should not be reworded.
