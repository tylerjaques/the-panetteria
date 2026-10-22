import { readFileSync } from 'node:fs';
import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';

const configPath = fileURLToPath(new URL('./src/assets/data/config.json', import.meta.url));

// schema.org Bakery data (address, phone, hours) for search engines, built
// from config.json so it can't drift from what the site shows. It's a JSON
// data block, not a script, so the CSP doesn't need to allow it.
function structuredData() {
  const { business, hours } = JSON.parse(readFileSync(configPath, 'utf8'));
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: business.name,
    url: business.url,
    image: `${business.url}/images/og-image.jpg`,
    logo: `${business.url}/images/Logo.jpg`,
    email: business.email,
    telephone: `+1-${business.phone}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.province,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    openingHoursSpecification: hours
      .filter((entry) => entry.opens && entry.closes)
      .map(({ days, opens, closes }) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: days, opens, closes })),
    sameAs: business.socials.map((social) => social.url),
  };
  return {
    name: 'structured-data',
    transformIndexHtml() {
      return [{ tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(data), injectTo: 'head' }];
    },
  };
}

export default defineConfig({
  plugins: [vue(), tailwindcss(), structuredData()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
