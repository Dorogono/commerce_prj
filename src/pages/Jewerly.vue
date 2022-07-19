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

<script>
import { defineComponent, ref } from "vue";
import { useFakeStore } from "../store/fakeStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const products = ref([]);
    const { getAllProds } = storeToRefs(useFakeStore());

    getAllProds.value.forEach((product) => {
      if (product.category === `jewelery`) {
        products.value.push(product);
      }
    });

    return { products };
  },
});
</script>
