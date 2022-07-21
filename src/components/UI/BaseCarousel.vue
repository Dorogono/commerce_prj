<template>
  <Carousel class="carousel-container" :autoplay="15000" :wrap-around="true">
    <Slide v-for="image in images" :key="image.id">
      <div class="carousel__item">
        <img :src="image.url" alt="image" />
      </div>
      <router-link :to="`/${image.id}`" class="btn carousel__link-btn">
        {{ image.id.toUpperCase() }} 바로가기
      </router-link>
    </Slide>

    <template #addons>
      <Pagination class="carousel-pagination" />
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
  setup() {
    const images = [
      { id: "fashion", url: "/fashion.jpeg" },
      { id: "jewelery", url: "/jewelery.jpeg" },
      { id: "electronics", url: "/electronic.jpeg" },
    ];

    return { images };
  },
});
</script>

<style>
.carousel__item {
  max-height: 40rem;
  object-fit: cover;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel-pagination {
  position: relative;
  bottom: 1.5rem;
}

.carousel__link-btn {
  position: absolute;
  left: 8rem;
  bottom: 4rem;
}
</style>
