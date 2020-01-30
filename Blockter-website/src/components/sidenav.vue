<template>
    <div>
        <div :class="{ changeWidth: $store.state.hamburger }" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
    </div>
</template>
<script>
import Vue from "vue";
import Vuex from "vuex";
import { mapMutations } from "vuex";
export default {
    data(){
        return{
              Hamburger: false,
        }
    },
    methods:{
         ...mapMutations({
      hamburgerChange: "changeHamburger"
    })
    }
}
</script>
<style>
.changeWidth{
width:0px !important;
}
.sidenav {
  height: 100%;
  width: 250px;
  position: fixed;
  z-index: 1;
  top: 11.4rem;
  left: 0;
  background-color: pink;
  color: black !important;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}



@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>