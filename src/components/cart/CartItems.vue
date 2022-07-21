<template>
  <tr>
    <td>
      <img :src="image" :alt="title" class="image-container" />
      <div>{{ title }}</div>
    </td>
    <td>${{ singleItemPrice }}</td>
    <td>
      <button class="btn bg-base-300" @click="minusItemQuantity">-</button>
      {{ quantity }}
      <button class="btn bg-base-300" @click="addItemQuantity">+</button>
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
  width: 300px;
  height: 300px;
}
.btn {
  color: black;
}
</style>
