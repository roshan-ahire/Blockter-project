<template>
  <div>
    <b-navbar toggleable="lg" type="dark" class="main-navbar">
      <b-container>
        <b-navbar>
          <b-navbar-brand href="#">
            <img src="../assets/logo.png" alt="logo" />
          </b-navbar-brand>
        </b-navbar>
        {{$store.state}}
        <div
          :class="{ change: $store.state.hamburger }"
          class="hamburger"
          @click="hamburgerChange($store.state.hamburger )"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <slot name="navlinks"></slot>
          </b-navbar-nav>

          <!-- Right aligned button-->
          <b-navbar-nav class="ml-auto">
            <b-button size="sm" class="rounded-pill font-weight-bold btn-color">LOG IN</b-button>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      Hamburger: $store.state.hamburger
    };
  },
  methods: {
    ...mapMutations({
      hamburgerChange: "changeHamburger"
    })
    // myFunction(){
    //   console.log("kkkkkkkkkkk",this.Hamburger)
    //   this.Hamburger= !this.Hamburger;

    // }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.main-navbar {
  background-color: $navbar-color;
}

.btn-color {
  background-color: #dd003f;
  border-color: #dd003f;
}

.btn-color:hover {
  background-color: #dd003f !important;
}
.bar1,
.bar2,
.bar3 {
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: 0.4s;
}

.change .bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {
  opacity: 0;
}

.change .bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
}
</style>
