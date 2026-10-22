# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing site for The Panetteria bakery (www.thepanetteria.com): a static Vue 3 SPA built with Vite, Vue Router (history mode), Tailwind CSS 4 (via `@tailwindcss/vite`), and SCSS. There is no backend and no test suite. Node `^20.19.0 || >=22.12.0` is required (Vite's minimum).

## Commands

```bash
npm run dev       # dev server with hot reload
npm run build     # production build into dist/
npm run preview   # serve the built dist/ locally
npm run lint      # ESLint 9 flat config (eslint.config.js, eslint-plugin-vue flat/essential)
```

There is no deploy command; see Hosting and deployment below.

## Architecture

- `index.html` (repo root) is Vite's entry. It loads Google Analytics from `public/gtag.js` rather than an inline script, so the CSP doesn't need `'unsafe-inline'` for scripts. Keep new scripts out of inline `<script>` tags.
- `src/main.js` creates the app and router and registers FontAwesome globally. Only the Facebook and Instagram brand icons are registered, so add any new icon with `library.add`.
- `src/routes.js` is the only route list. Pages are lazy-loaded from `src/views/`, and a catch-all redirects unknown paths to `/`. `public/sitemap.xml` is maintained by hand, so update it when you add or remove a page.
- Components use `<script setup>` (Composition API). Import `.vue` files with their extension, and give every `v-for` a `:key`.
- Each view puts its own header and footer around its content: `components/top.vue` (or `alttop.vue` on the home page) and `components/bottom.vue`. Store hours and the holiday-hours date range are hardcoded in `bottom.vue`.
- `src/App.vue` shows a site-wide dismissible `banner` component for things like holiday closures. The message text and the `startDate`/`endDate` that control when it shows are hardcoded there. Most routine commits edit this banner text and its dates, or the hours.
- Menu content comes from `src/assets/data/config.json`: the menu sections and items, plus the product photo filenames shown on `/menu`.
- Images live in `public/images/`. Reference them by absolute path (`/images/...`), in templates and in CSS `url()`.
- Styling has no `tailwind.config.js`: Tailwind 4 is configured in CSS. `src/assets/css/tailwind.css` is the single entry. It imports Google Fonts, Tailwind and `app.css`, and defines the brand color in `@theme` (`--color-primary`, which gives `bg-primary`/`text-primary`). `app.css` holds the site's custom classes, built with `@apply`. The font classes (`libre-baskerville`, `montserrat`, `baskerville`) are declared with `@utility` so they can be used in `@apply`. Use Tailwind 4 syntax, for example `bg-black/75` rather than `bg-opacity-*`.

## Hosting and deployment

The site is hosted on AWS Amplify, which builds and deploys automatically when changes are merged:

- Merging into `demo` deploys to a staging URL.
- Merging into `main` deploys to production at www.thepanetteria.com.

So the usual flow is: make changes, merge into `demo`, check staging, then merge into `main`.

`customHttp.yml` sets the response headers Amplify serves, including HSTS, X-Frame-Options and the Content-Security-Policy. When you add a new third-party script, font, image host or iframe, add its origin to the matching CSP directive there, or the browser will block it.
