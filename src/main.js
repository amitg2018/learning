import Vue from "vue";
import Element from "../node_modules/element-ui";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "../src/assets/style/styles.scss";

Vue.config.productionTip = false;
Vue.use(Element);

new Vue({
  router,
  store,
  Element,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
