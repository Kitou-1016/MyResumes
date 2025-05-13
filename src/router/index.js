import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/implementation",
      name: "implementation",
      component: () => import("../views/implementation.vue"),
    },
    {
      path: "/resumes",
      name: "resumes",
      component: () => import("../views/Resumes.vue"),
    },
  ],
});

export default router;
