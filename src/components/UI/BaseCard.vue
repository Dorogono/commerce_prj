<template>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img :src="imageURL" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">
        {{ title }}
      </h2>
      <div class="badge badge-outline">{{ category }}</div>
      <div class="stats shadow">
        <div class="stat place-items-center">
          <div class="stat-value">${{ price }}</div>
        </div>
        <div class="stat place-items-center">
          <button class="btn btn-outline btn-primary">Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: ["title", "price", "category", "imageURL"],
});
</script>
