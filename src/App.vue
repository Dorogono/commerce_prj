<template>
  <the-header></the-header>
  <router-view :data-theme="getMode"></router-view>
  <the-footer></the-footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";
import { useFakeStore } from "./store/fakeStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  components: {
    TheHeader,
    TheFooter,
  },
  setup() {
    const { getMode } = storeToRefs(useFakeStore());

    return { getMode };
  },
});
</script>

<style>
section {
  padding-top: 2rem;
}

.products__container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
