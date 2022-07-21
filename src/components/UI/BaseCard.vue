<template>
  <router-link :to="url" class="container-box">
    <div class="card bg-base-100">
      <img :src="imageURL" alt="Shoes" />
      <div class="card__body">
        <div class="badge badge-outline">{{ category }}</div>
        <h2 class="card__title">
          {{ title }}
        </h2>
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
  height: 400px;
}
.container-box:hover {
  transform: scale(1.02);
}
.card {
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  background-color: #fff;
}
.card img {
  width: 100%;
  height: 250px;
  object-fit: contain;
  background-color: white;
  border-bottom: 1px solid hsl(var(--b3));
}
.card__body {
  color: black;
  width: 100%;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 80px;
  justify-content: space-around;
}
.card__title {
  text-align: center;
}
</style>
