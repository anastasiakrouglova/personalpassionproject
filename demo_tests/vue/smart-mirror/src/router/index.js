import Vue from "vue";
import VueRouter from "vue-router";
import Jumps from "../views/Jumps.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "jumps",
    component: Jumps
  },
  {
    path: "/workout",
    name: "workout",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Workout.vue")
  },
  {
    path: "/stretch",
    name: "stretch",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Stretch.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Detail.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
