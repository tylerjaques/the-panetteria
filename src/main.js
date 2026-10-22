import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import './assets/css/tailwind.css';
import { routes } from './routes.js';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faInstagram);

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

// The defaults are whatever index.html ships with, i.e. the home page's.
const defaultTitle = document.title;
const description = document.querySelector('meta[name="description"]');
const defaultDescription = description.content;
const canonical = document.querySelector('link[rel="canonical"]');

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | The Panetteria` : defaultTitle;
  description.content = to.meta.description || defaultDescription;
  canonical.href = new URL(to.path, canonical.href).href;
});

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .mount('#app');
