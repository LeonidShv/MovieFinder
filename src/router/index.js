import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/pages/HomePage/index.vue"),
    },
    {
      path: "/movies",
      name: "movies",
      component: () => import("@/pages/MoviesPage/index.vue"),
    },
    {
      path: "/components",
      name: "components",
      component: () => import("@/pages/Components/index.vue"),
    },
  ],
});

export default router;
