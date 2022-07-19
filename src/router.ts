import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home.vue";
import Fashion from "./pages/Fashion.vue";
import Jewerly from "./pages/Jewerly.vue";
import Electronics from "./pages/Electronics.vue";

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
      path: "/jewerly",
      component: Jewerly,
    },
    {
      path: "/electronics",
      component: Electronics,
    },
  ],
});

export default router;
