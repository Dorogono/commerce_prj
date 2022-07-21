import { createApp } from "vue";

import router from "./router";
import pinia from "./store/index";
import App from "./App.vue";

import "./styles/style.css";
import "./styles/app.css";

import BaseCard from "./components/UI/BaseCard.vue";
import BaseCarousel from "./components/UI/BaseCarousel.vue";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.component("base-card", BaseCard);
app.component("base-carousel", BaseCarousel);

app.mount("#app");
