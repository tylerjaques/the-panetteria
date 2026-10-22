# the-panetteria

Website for The Panetteria bakery: www.thepanetteria.com

## Development

```bash
npm install
npm run serve   # local dev server
npm run build   # production build into dist/
npm run lint
```

## Deployment

The site is hosted on AWS Amplify, which builds and deploys automatically:

- Merging into `demo` deploys to the staging URL.
- Merging into `main` deploys to production (www.thepanetteria.com).

Merge into `demo` first, check the change on staging, then merge into `main`.
