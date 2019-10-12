import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    },
    {
      path: '/how-to-bind',
      name: 'how to bind',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "h2b" */ './views/HowToBind.vue'),
    },
    {
      path: '/calendar/:calendarId',
      props: true,
      name: 'calendar',
      // route level code-splitting
      component: () => import(/* webpackChunkName: "cal" */ './components/Calendar.vue'),
    },
  ],
});
