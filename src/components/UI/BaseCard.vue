<template>
  <router-link :to="url">
    <div class="card w-96 bg-base-100 shadow-xl container-box">
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
        </div>
      </div>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";

export default defineComponent({
  props: ["title", "price", "category", "imageURL", "id"],
  setup(props) {
    let cate: string;

    if (
      props.category === `men's clothing` ||
      props.category === `women's clothing`
    ) {
      cate = "fashion";
    } else {
      cate = props.category;
    }

    const url = computed(() => {
      return cate + "/" + props.id;
    });

    return { url };
  },
});
</script>

<style scoped>
.container-box {
  margin: 1rem;
}
.container-box:hover {
  transform: scale(1.02);
}
</style>
