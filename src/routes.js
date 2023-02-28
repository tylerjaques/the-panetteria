export const routes = [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/about.vue'),
    },
    {
      path: '/bake-club',
      name: 'bake-club',
      component: () => import(/* webpackChunkName: "about" */ './views/bakeclub.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import(/* webpackChunkName: "about" */ './views/contact.vue'),
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: "about" */ './views/menu.vue'),
    },
];

