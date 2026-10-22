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
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('./views/contact.vue'),
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('./views/menu.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];
