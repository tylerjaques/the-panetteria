import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import './assets/css/app.css';
import './assets/css/tailwind.css';
import { routes } from './routes.js';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Router);
const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
