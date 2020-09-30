import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import GoogleAuth from "./config/google.js";

const gauthOption = {
  // eslint-disable-next-line
  clientId: "745478166073-6pqqiojeous9m3s3moi88krc0obh6u8d.apps.googleusercontent.com",
  scope: "profile email",
  prompt: "select_account"
};

Vue.use(GoogleAuth, gauthOption);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");