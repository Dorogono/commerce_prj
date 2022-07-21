<template>
  <div>
    <base-carousel class="carousel-container"></base-carousel>
    <section class="products__container">
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
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFakeStore } from "../store/fakeStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const { getAllProds } = storeToRefs(useFakeStore());
    const store = useFakeStore();

    async function loadProducts() {
      await store.loadData();
    }

    loadProducts();
    return {
      products: getAllProds,
    };
  },
});
</script>

<style scoped>
.carousel-container {
  margin-top: -1rem;
}
</style>
