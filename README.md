# the-panetteria

Website for The Panetteria bakery: www.thepanetteria.com

## Development

Requires Node 20.19+ or 22.12+. Built with Vue 3 and Vite.

```bash
npm install
npm run dev       # local dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint
```

## Deployment

The site is hosted on AWS Amplify, which builds and deploys automatically:

- Merging into `demo` deploys to the staging URL.
- Merging into `main` deploys to production (www.thepanetteria.com).

Merge into `demo` first, check the change on staging, then merge into `main`.

Security headers (including the Content-Security-Policy) are set in `customHttp.yml`.
