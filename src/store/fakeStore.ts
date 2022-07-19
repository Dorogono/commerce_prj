import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useFakeStore = defineStore("fakeStore", () => {
  const products = ref(null);

  const getAllProds = computed(() => products.value);

  const loadData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    products.value = data;
    console.log("load");
  };

  return { loadData, getAllProds };
});
