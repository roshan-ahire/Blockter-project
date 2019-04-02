import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// require styles
import "swiper/dist/css/swiper.css";
// import Swiper from "vue-swiper";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faCaretDown,
  faTh,
  faDumbbell,
  faChevronDown,
  faSearch,
  faChevronRight,
  faChevronUp

} from "@fortawesome/free-solid-svg-icons"; //fas fa

import {
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble
 
} from "@fortawesome/free-brands-svg-icons"; //fab

import { faCommentAlt } from "@fortawesome/free-regular-svg-icons";


import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faCaretDown,
  faTh,
  faDumbbell,
  faChevronDown,
  faSearch,
  faChevronRight,
  faChevronUp

); //fas
library.add(faCommentAlt); //far

library.add(
  faLinkedinIn,
  faFacebookSquare,
  faTwitter,
  faGoogle,
  faYoutube,
  faInstagram,
  faDribbble
); //fab

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);
// Vue.use(Swiper);
Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
