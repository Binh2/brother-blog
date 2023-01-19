import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./global.css";
import NavItem from "./components/NavItem.vue";

createApp(App).component("NavItem", NavItem).use(router).mount("#app");
