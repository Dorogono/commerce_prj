import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useFakeStore = defineStore("fakeStore", () => {
  type Product = {
    id?: number;
    title?: string;
    image?: string;
    price?: number;
    description?: string;
    category?: string;
  };

  type cartProduct = {
    id?: number;
    title?: string;
    image?: string;
    price?: number;
    description?: string;
    category?: string;
    quantity: number;
  };

  let products = ref<Product[]>([]);
  let cartProducts = ref<cartProduct[]>([]);
  let totalQuantity = ref<number>(0);
  let totalPrice = ref<number>(0);
  let htmlMode = ref<string>("light");

  async function loadData() {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    products.value = data;
    console.log("load");
  }

  function addCartProducts(item: cartProduct) {
    const idx = cartProducts.value.findIndex((prod) => prod.id === item.id);

    if (idx === -1) {
      cartProducts.value.push(item);
      totalQuantity.value += item.quantity;
      totalPrice.value += item.quantity * (item.price || 0);
    } else {
      cartProducts.value[idx].quantity += item.quantity;
      totalQuantity.value += item.quantity;
      totalPrice.value += item.quantity * (item.price || 0);
    }
  }
  function removeCartProducts(item: cartProduct) {
    const idx = cartProducts.value.findIndex((prod) => prod.id === item.id);

    cartProducts.value[idx].quantity--;
    totalQuantity.value--;
    totalPrice.value -= item.price || 0;
    if (cartProducts.value[idx].quantity === 0) {
      cartProducts.value.splice(idx, 1);
    }
  }

  function toggleMode() {
    if (htmlMode.value === "light") htmlMode.value = "dark";
    else htmlMode.value = "light";
  }

  const getAllProds = computed(() => products.value);
  const getCartProds = computed(() => cartProducts.value);
  const getCartProdsQuantity = computed(() => totalQuantity.value);
  const getCartProdsPrice = computed(() => totalPrice.value.toFixed(2));
  const getMode = computed(() => htmlMode.value);

  return {
    loadData,
    getMode,
    getAllProds,
    getCartProds,
    getCartProdsQuantity,
    getCartProdsPrice,
    toggleMode,
    addCartProducts,
    removeCartProducts,
  };
});
