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
      path: "/case/:id",
      name: "CaseIdWrapper",
      props: true,
      component: () => import("@/pages/Cases/subPages/CaseIdWrapperPage.vue"),
      children: [
        {
          // when /case/:id/docs is matched
          path: '',
          component: () => import("@/pages/Cases/subPages/CaseIdPage.vue"), 
          name: 'CaseId',
          props: true,
        },
        {
          // when /case/:id/docs is matched
          path: 'docs',
          component: () => import("@/pages/Cases/subPages/CaseIdDocsPage.vue"), 
          name: 'caseIdDocs',
          props: true,
        },
        {
          // when /case/:id/cited-apps is matched
          path: 'cited-apps',
          component: () => import("@/pages/Cases/subPages/CaseIdCitedAppsPage.vue"), 
          name: 'caseIdCitedApps',
          props: true,
        },
      ]
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
      component: () => import("@/pages/NotFound/NotFoundPage.vue"),
    },
  ],
});

export default router;
