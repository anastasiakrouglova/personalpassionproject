import Vue from "vue";
import VueRouter from "vue-router";
import Jump from "../views/Jump.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "jump",
    component: Jump
  },
  {
    path: "/pirouette",
    name: "pirouette",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/Pirouette.vue")
  },
  {
    path: "/stretch",
    name: "stretch",
    component: () =>
      import( "../views/Stretch.vue")
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: () =>
      import("../views/Detail.vue")
  },
  {
    path: "/detail/:id/launch",
    name: "launch",
    component: () =>
      import("../views/Launch.vue")
  },
  {
    path: "/detail/:id/training",
    name: "training",
    component: () =>
      import("../views/Training.vue")
  },
  {
    path: "/chart",
    name: "chart",
    component: () =>
      import("../views/Chart.vue")
  },
  ,
  {
    path: "/settings",
    name: "settings",
    component: () =>
      import( "../views/Settings.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
