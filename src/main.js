import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueConfetti from "vue-confetti";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

library.add(faCoffee, faTwitter);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(VueConfetti);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
