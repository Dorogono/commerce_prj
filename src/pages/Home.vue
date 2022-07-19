<template>
  <section>
    <base-card
      v-for="pro in products"
      :key="pro.id"
      :id="pro.id"
      :title="pro.title"
      :price="pro.price"
      :description="pro.description"
      :category="pro.category"
      :imageURL="pro.image"
    ></base-card>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFakeStore } from "../store/fakeStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const { getAllProds } = storeToRefs(useFakeStore());

    return {
      products: getAllProds,
    };
  },
});
</script>

<style>
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  padding: 2rem;
}
</style>
