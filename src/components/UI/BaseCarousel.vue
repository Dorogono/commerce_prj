<template>
  <Carousel class="carousel-container">
    <Slide v-for="slide in 3" :key="slide" :wrap-around="true">
      <div class="carousel__item">{{ slide }}</div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Pagination, Slide } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  components: {
    Carousel,
    Slide,
    Pagination,
  },
});
</script>

<style>
.carousel-container {
  background-color: black;
}
.carousel__item {
  min-height: 30rem;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}
</style>
