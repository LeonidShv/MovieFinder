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
      path: "/movie/:id",
      name: "movie",
      component: () => import("@/pages/MoviePage/index.vue"),
      props: true,
    },
    {
      path: "/components",
      name: "components",
      component: () => import("@/pages/Components/index.vue"),
    },
  ],
});

export default router;
