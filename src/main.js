import Vue from 'vue';
import { Timeline } from 'vue2vis';
import 'vue2vis/dist/vue2vis.css';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.component('timeline', Timeline);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
