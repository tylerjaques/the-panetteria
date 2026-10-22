# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing site for The Panetteria bakery (www.thepanetteria.com): a static Vue 2 SPA built with Vue CLI 5, Vue Router 3 (history mode), Tailwind CSS 3, and SCSS. There is no backend and no test suite.

## Commands

```bash
npm run serve     # dev server with hot reload
npm run build     # production build into dist/
npm run lint      # ESLint (plugin:vue/essential + @vue/airbnb)
npm run sitemap   # regenerate sitemap.xml from routes in vue.config.js
```

There is no deploy command; see Hosting and deployment below.

## Architecture

- `src/main.js` sets up Vue, the router, global CSS, and FontAwesome. Only the Facebook and Instagram brand icons are registered, so register any new icon with `library.add`.
- `src/routes.js` defines the router's routes (`/`, `/about`, `/contact`, `/menu`), each lazy-loaded from `src/views/`. **The route list is duplicated in `vue.config.js`** for the sitemap plugin, because of ESM/CommonJS issues. When you add or remove a page, update both files. `views/bakeclub.vue` exists but has no route.
- Each view puts its own header and footer around its content: `components/top.vue` (or `alttop.vue` on the home page) and `components/bottom.vue`. Store hours are hardcoded in `bottom.vue`.
- `src/App.vue` shows a site-wide dismissible `banner` component, for things like holiday closures. The message text and the active date range (`startDate`/`endDate` in the `bannerActive` computed) are both hardcoded there. Most recent commits are edits to this banner text and its dates, or to the hours.
- Menu content comes from JSON, not markup. `src/assets/data/config.json` holds the menu sections and items plus the list of product photo filenames. `products.json` holds the product categories with photo paths. `views/menu.vue` renders them through `productMenu` and `productPhotos`. `products-alt.json`, `productList.vue` and `productListAlt.vue` are unused alternates.
- Images live in `public/images/` and are referenced by relative path (`./images/...`), not imported.
- Styling mixes Tailwind utilities with custom classes in `src/assets/css/app.css`. That file defines the brand colors (`.bg-primary`, `.text-primary`), and `tailwind.config.js` is not extended.

## Hosting and deployment

The site is hosted on AWS Amplify, which builds and deploys automatically when changes are merged:

- Merging into `demo` deploys to a staging URL.
- Merging into `main` deploys to production at www.thepanetteria.com.

So the usual flow is: make changes, merge into `demo`, check staging, then merge into `main`. `public/_redirects` provides the SPA fallback so history-mode routes resolve to `index.html`.
