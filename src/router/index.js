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
  {
    path: "/blog",
    name: "blog",
    component: () => import("../views/Blog.vue"),
  },
  
  {
    path: "/kontak",
    name: "kontak",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/struktur-organisasi",
    name: "struktur-organisasi",
    component: () => import("../views/StructurOrganization.vue"),
  },
  
  { path: "/:pathMatch(.*)*", name: "NotFound", component: () => import("../views/NotFound.vue"), },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
