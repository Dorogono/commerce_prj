<template>
  <section class="products__container">
    <base-card
      v-for="prod in products"
      :key="prod.id"
      :id="prod.id"
      :title="prod.title"
      :price="prod.price"
      :description="prod.description"
      :category="prod.category"
      :imageURL="prod.image"
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
      category?: string;
      id?: number;
      title?: string;
      price?: number;
      description?: string;
      image?: string;
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
