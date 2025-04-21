import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/tentang",
    name: "tentang",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/mars",
    name: "mars",
    component: () => import("../views/Mars.vue"),
  },
  
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("../views/Notfound.vue"), },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
