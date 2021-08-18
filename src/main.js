import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/css/app.css';
import './assets/css/tailwind.css';
import Router from './router';

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFacebook, faInstagram);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(VueRouter);
const router = Router.init(VueRouter);


new Vue({
  router,
  render: (h) => h(App),
  created () {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect
      delete sessionStorage.redirect
      this.$router.push(redirect)
    }
  }
}).$mount('#app');
