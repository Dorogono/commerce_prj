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

<style>
section {
  display: flex;
  flex-wrap: wrap;
}
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
