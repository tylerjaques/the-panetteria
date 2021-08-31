export default {
  init(VueRouter) {
    const routes = [
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
        path: '/products',
        name: 'products',
        component: () => import(/* webpackChunkName: "about" */ './views/products.vue'),
      },
    ];

    return new VueRouter({
      routes: routes,
      mode: 'history',
      publicPath: '/'
    });
  },
};
