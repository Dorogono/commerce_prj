<template>
  <section>
    <div class="overflow-x-auto cart-table">
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
          <tr class="cart__total">
            <td>Total</td>
            <td>${{ getCartProdsPrice }}</td>
            <td>{{ getCartProdsQuantity }}개</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
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

<style scoped>
.cart-table {
  margin-top: -1rem;
}
.cart__total {
  color: hsl(var(--s));
  font-size: 1.3rem;
}
</style>
