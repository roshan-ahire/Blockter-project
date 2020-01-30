import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hamburger: false,
  },
  mutations: {
    changeHamburger(state) {
   console.log("kkkkksksksk",state.hamburger)
      state.hamburger = !state.hamburger;
    }
  },
  actions: {}
});
