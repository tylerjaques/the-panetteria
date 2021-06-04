import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/css/tailwind.css';
import Router from './router';

Vue.use(VueRouter);

Vue.config.productionTip = false;

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
