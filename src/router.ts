import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Fashion from "./pages/Fashion.vue";
import Jewelery from "./pages/Jewelery.vue";
import Electronics from "./pages/Electronics.vue";
import Detail from "./pages/Detail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/fashion",
      component: Fashion,
    },
    {
      path: "/fashion/:id",
      component: Detail,
      props: true,
    },
    {
      path: "/jewelery",
      component: Jewelery,
    },
    {
      path: "/jewelery/:id",
      component: Detail,
      props: true,
    },
    {
      path: "/electronics",
      component: Electronics,
    },
    {
      path: "/electronics/:id",
      component: Detail,
      props: true,
    },
  ],
});

export default router;
