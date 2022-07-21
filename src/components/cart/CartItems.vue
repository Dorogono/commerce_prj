<template>
  <tr>
    <td class="cart__product">
      <img :src="image" :alt="title" class="image-container" />
      <div class="badge">{{ title }}</div>
    </td>
    <td>${{ singleItemPrice }}</td>
    <td>
      <button class="btn bg-neutral btn-xs" @click="minusItemQuantity">
        -
      </button>
      {{ quantity }}
      <button class="btn bg-neutral btn-xs" @click="addItemQuantity">+</button>
    </td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useFakeStore } from "../../store/fakeStore";

export default defineComponent({
  props: ["title", "quantity", "image", "price", "id"],
  setup(props) {
    const store = useFakeStore();

    const singleItemPrice = computed(() => {
      return (props.price * props.quantity).toFixed(2);
    });

    function addItemQuantity() {
      store.addCartProducts({
        id: props.id,
        quantity: 1,
        price: props.price,
      });
    }

    function minusItemQuantity() {
      store.removeCartProducts({
        id: props.id,
        quantity: 1,
        price: props.price,
      });
    }

    return { addItemQuantity, singleItemPrice, minusItemQuantity };
  },
});
</script>

<style scoped>
.image-container {
  width: 100px;
  height: 100px;
}
.cart__product {
  display: flex;
  align-items: center;
}
</style>
