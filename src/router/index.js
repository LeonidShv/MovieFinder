import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "information",
      component: () => import("@/pages/Information/InformationPage.vue")
    },
    {
      path: "/cases",
      name: "cases",
      component: () => import("@/pages/Cases/CasesPage.vue")
    },
    {
      path: "/conclusions",
      name: "conclusions",
      component: () => import("@/pages/Conclusions/ConclusionsPage.vue")
    },
    {
      path: "/parties",
      name: "parties",
      component: () => import("@/pages/Parties/PartiesPage.vue"),
      props: true,
    },
    {
      path: "/representatives",
      name: "representatives",
      component: () => import("@/pages/Representatives/RepresentativesPage.vue"),
      props: true,
    },
    {
      path: "/scl",
      name: "scl",
      component: () => import("@/pages/Scl/SclPage.vue"),
      props: true,
    },
    // {
    //   path: "/add-movie",
    //   name: "addMovie",
    //   component: () => import("@/pages/AddMoviePage/index.vue"),
    //   props: true,
    // },
    {
      path: "/components",
      name: "components",
      component: () => import("@/pages/Components/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/pages/NotFoundPage/index.vue"),
    },
  ],
});

export default router;
