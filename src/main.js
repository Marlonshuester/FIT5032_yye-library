import { createApp } from "vue";
import App from "./App.vue";
// import "./style.css";

// import bootstrap css package
import "bootstrap/dist/css/bootstrap.min.css";

import Primevue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { Theme } from "@primevue/themes";

const app = createApp(App);
app.use(Primevue, {
  theme: {
    preset: Aura,
  },
});
// createApp(App).mount("#app");
app.mount("#app");
