<template>
  <the-header></the-header>
  <router-view :data-theme="getMode"></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheHeader from "./components/layout/TheHeader.vue";
import { useFakeStore } from "./store/fakeStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    TheHeader,
  },
  setup() {
    const { getMode } = storeToRefs(useFakeStore());
    const store = useFakeStore();

    async function loadProducts() {
      await store.loadData();
    }

    loadProducts();

    return { getMode };
  },
});
</script>
