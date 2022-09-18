import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      authRequired: true,
    },
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import(/* webpackChunkName: "auth" */ '../views/SignInView.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, _from, next) => {
  const authRequired = to.meta?.authRequired;

  if (authRequired && !store.getters["auth/isAuthenticated"]) {
    return next({name: 'sign-in'});
  }

  return next();
});

export default router
