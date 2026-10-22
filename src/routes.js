// meta.title and meta.description are applied to the document on each
// navigation in main.js. A route without a title uses the site default.
export const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('./views/index.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/about.vue'),
    meta: {
      title: 'About us',
      description: 'The Panetteria is a small-scale artisan bakery in historic downtown Amherstburg, making bread and sweet and savoury pastries by hand daily.',
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./views/contact.vue'),
    meta: {
      title: 'Contact us',
      description: 'Contact The Panetteria in Amherstburg, Ontario: email, phone, hours and directions to 248 Ramsay St.',
    },
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('./views/menu.vue'),
    meta: {
      title: 'Menu',
      description: 'Sourdough breads, croissants, pastries, sandwiches, quiche and pizza from The Panetteria in Amherstburg.',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
