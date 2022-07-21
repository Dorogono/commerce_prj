<template>
  <div class="overflow-x-auto">
    <table class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <cart-items
          v-for="prod in getCartProds"
          :key="prod.id"
          :id="prod.id"
          :title="prod.title"
          :quantity="prod.quantity"
          :price="prod.price"
          :image="prod.image"
        ></cart-items>
        <tr>
          <td></td>
          <td>${{ getCartProdsPrice }}</td>
          <td>
            {{ getCartProdsQuantity }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFakeStore } from "../store/fakeStore";
import { storeToRefs } from "pinia";
import CartItems from "../components/cart/CartItems.vue";

export default defineComponent({
  components: {
    CartItems,
  },
  setup() {
    const { getCartProds, getCartProdsQuantity, getCartProdsPrice } =
      storeToRefs(useFakeStore());

    return { getCartProds, getCartProdsQuantity, getCartProdsPrice };
  },
});
</script>
