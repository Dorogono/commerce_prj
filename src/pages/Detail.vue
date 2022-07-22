<template>
  <section>
    <div class="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img :src="product.image" alt="Album" width="300" height="300" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <div class="card-actions justify-around">
          <div class="alert shadow-lg">
            <div>${{ product.price }}</div>
            <div class="flex-none">
              <button class="btn btn-sm btn-primary" @click="addCart">
                Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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

    const { getAllProds } = storeToRefs(useFakeStore());
    const store = useFakeStore();

    const product: any = getAllProds.value.find(
      (product: any) => product.id === prodId
    );

    function addCart() {
      store.addCartProducts({
        ...product,
        quantity: 1,
      });
    }

    return { product, addCart };
  },
});
</script>
