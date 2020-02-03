import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hamburger: false
  },

  mutations: {
    changeHamburger(state, value) {
      state.hamburger = !value;
      console.log("kkkkksksksk", state.hamburger, value);
    }
  },
  actions: {}
});
