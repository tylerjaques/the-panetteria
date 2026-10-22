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

- `index.html` (repo root) is Vite's entry. It holds the site-wide meta description, Open Graph tags and the Google Fonts `<link>`s. It loads Google Analytics from `public/gtag.js` rather than an inline script, so the CSP doesn't need `'unsafe-inline'` for scripts. Keep new scripts out of inline `<script>` tags.
- `vite.config.js` has a small `structuredData` plugin that injects schema.org `Bakery` JSON-LD (address, phone, weekly hours) into `index.html` at build time, generated from `config.json`.
- `src/main.js` creates the app and router and registers FontAwesome globally. Only the Facebook and Instagram brand icons are registered, so add any new icon with `library.add`. A router `afterEach` sets the page title, meta description and canonical URL from each route's `meta`.
- `src/routes.js` is the only route list. Pages are lazy-loaded from `src/views/`, and a catch-all redirects unknown paths to `/`. Give new routes a `meta.title` and `meta.description`. `public/sitemap.xml` is maintained by hand, so update it when you add or remove a page.
- Components use `<script setup>` (Composition API). Import `.vue` files with their extension, and give every `v-for` a `:key`.
- Each view is a `.page` column: `components/top.vue` (pass `overlay` on the home page), a `<main id="main" tabindex="-1" class="middle">` (the skip link in `App.vue` targets it) with an `<h1 class="page-header">`, then `components/bottom.vue`. The page scrolls normally; don't reintroduce a fixed scrolling wrapper.
- Business details, hours, holiday hours, the banner, the menu and the product photos all live in `src/assets/data/config.json`. Most routine commits edit this file:
  - `banner`: `message` plus `start`/`end` dates (`YYYY-MM-DD`, inclusive). `App.vue` shows it only within that range. Write the year in the message.
  - `hours`: weekday names with 24-hour `opens`/`closes` (`null` for closed). The footer, the home page's "Open today" line and the JSON-LD all read these.
  - `holidayHours`: `start`/`end` dates for when the footer shows it, and `entries` with a `label` and `opens`/`closes`.
  - `menu.sections[].items[]`: `{ name, price?, description?, tags? }`.
  - `products`: photo `file`, `width`, `height` and `alt` text for the `/menu` photo wall.
- `src/hours.js` has the date and hours helpers. Dates are compared in the bakery's time zone (`America/Toronto`), not the visitor's.
- Images live in `public/images/`. Reference them by absolute path (`/images/...`), in templates and in CSS `url()`. Photos are WebP, with a few widths for large ones (for example `head-about-1000.webp` / `-2000.webp`, `front-1280/1920/2560.webp`). Convert new photos to WebP before adding them (for example with `sharp` or Squoosh) rather than committing multi-megabyte PNGs or JPEGs, and give every `<img>` alt text plus `width`/`height`.
- Styling has no `tailwind.config.js`: Tailwind 4 is configured in CSS. `src/assets/css/tailwind.css` is the single entry. It imports Tailwind and `app.css`, defines the brand color in `@theme` (`--color-primary`, which gives `bg-primary`/`text-primary`), and sets the site-wide `:focus-visible` ring. `app.css` holds the site's custom classes, built with `@apply`. The font classes (`libre-baskerville`, `montserrat`) are declared with `@utility` so they can be used in `@apply`. Use Tailwind 4 syntax, for example `bg-black/75` rather than `bg-opacity-*`. Text on the teal must be black: white on teal is only 2.3:1.

## Hosting and deployment

The site is hosted on AWS Amplify, which builds and deploys automatically when changes are merged:

- Merging into `demo` deploys to a staging URL.
- Merging into `main` deploys to production at www.thepanetteria.com.

So the usual flow is: make changes, merge into `demo`, check staging, then merge into `main`.

`amplify.yml` is the build spec and overrides the console's build settings. It pins Node 22 via nvm, which needs the Amazon Linux 2023 build image, then runs `npm ci` and `npm run build` and publishes `dist/`.

`customHttp.yml` sets the response headers Amplify serves, including HSTS, X-Frame-Options and the Content-Security-Policy. When you add a new third-party script, font, image host or iframe, add its origin to the matching CSP directive there, or the browser will block it.
