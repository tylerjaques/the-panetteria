export const routes = [
    {
      path: '/',
      name: 'index',
      component: () => import(/* webpackChunkName: "about" */ './views/index.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('redirect') !== null) {
          const redirect = sessionStorage.redirect
          delete sessionStorage.redirect
          next(redirect)
        } else {
          next()
        }
      },
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

