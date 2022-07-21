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
    const products = ref<Object[]>([]);
    const { getAllProds } = storeToRefs(useFakeStore());

    type Product = {
      category?: string;
    };

    getAllProds.value.forEach((product: Product) => {
      if (product.category === `electronics`) {
        products.value.push(product);
      }
    });

    return { products };
  },
});
</script>
