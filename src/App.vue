<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheHeader from "./components/layout/TheHeader.vue";
import { useFakeStore } from "./store/fakeStore";

export default defineComponent({
  components: {
    TheHeader,
  },
  setup() {
    const store = useFakeStore();

    async function loadProducts() {
      await store.loadData();
    }

    loadProducts();
  },
});
</script>
