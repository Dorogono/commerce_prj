<template>
  <div class="card lg:card-side bg-base-100 shadow-xl">
    <figure>
      <img :src="product.image" alt="Album" width="400" height="400" />
    </figure>
    <div class="card-body">
      <h2 class="card-title">New album is released!</h2>
      <p>Click the button to listen on Spotiwhy app.</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary" @click="addCart">Cart</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useFakeStore } from "../store/fakeStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  setup() {
    const route = useRoute();
    const prodId = ~~route.params.id;

    type Product = {
      id?: number;
      title?: string;
      image?: string;
      description?: string;
      category?: string;
      price?: number;
    };

    const { getAllProds, getCartProdsQuantity, getCartProds } = storeToRefs(
      useFakeStore()
    );
    const store = useFakeStore();

    const product = getAllProds.value.find((product: Product) => {
      return product.id === prodId;
    });

    function addCart() {
      store.addCartProducts({
        ...product,
        quantity: 1,
      });
      console.log(getCartProdsQuantity.value);
      console.log(getCartProds.value);
    }

    return { product, addCart };
  },
});
</script>
