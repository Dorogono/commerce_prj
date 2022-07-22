<template>
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useFakeStore } from "../store/fakeStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const products = ref<any>([]);
    const { getAllProds } = storeToRefs(useFakeStore());

    type Product = {
      id?: number;
      category?: string;
    };

    if (getAllProds.value.length > 0) {
      getAllProds.value.forEach((product: Product) => {
        if (
          product.category === `men's clothing` ||
          product.category === `women's clothing`
        ) {
          products.value.push(product);
        }
      });
    }

    return { products };
  },
});
</script>
