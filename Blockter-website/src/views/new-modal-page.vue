
               

<template>
  <div class="cartmainPage">
    <Navbar></Navbar>
    <side></side>
  
    <div :class="{'pad-left': $store.state.hamburger }"  class="content">
      <div class="wishlist-part p-2">
        <!-- wishlist-part Heading  -->
        <div class="text-white text-center">
          <!-- <div class="row"> -->
          <!-- <div class="col-md-8 col-sm-7"> -->
          <div class="fjalla-one text-left">My Wishlist (3 Items)</div>
          <!-- </div> -->
          <!-- <div class="col-md-4 col-sm-5">
              <div class="fjalla-one ">Order Total</div>
          </div>-->
          <!-- </div> -->
        </div>
      </div>
      <!-- wishlist part -->
      <div class="card">
        <div class="cart-section mt-2 mr-2 ml-2">
          <div
            class="cardmain mb-2"
            v-for="cartscontent in cartscontents"
            v-bind:key="cartscontent.index"
          >
            <div class="cardimg">
              <img :src="cartscontent.img" />
            </div>

            <!-- card content start here -->
            <div class="card-detail p-2">
              <div class="row">
                <div class="col-md-8 col-sm-7">
                  <!-- title -->
                  <div class="cartH1">
                    <div class="carttitle">{{cartscontent.carttitle}}</div>
                    <div class="carttitle" :class="cartscontent.cartcolor"></div>
                  </div>
                  <!-- icon -->
                  <div class="amountsize">
                    <!-- size button -->
                    <div class="row">
                      <div class="col-md-3">
                        <div class="prizecart">
                          <span>
                            <fa :icon="['fas', 'rupee-sign']" class="fa-1x" />
                            {{cartscontent.cartprize}}
                          </span>
                        </div>
                      </div>
                      <div class="col-md-9 d-none d-sm-block d-sm-none d-md-block"></div>
                    </div>
                  </div>
                </div>.modal-1
                <div class="col-md-4 col-sm-5">
                  <div class="cartedit-part float-right d-flex">
                    <!-- add and remove button -->

                    <!-- <button type="button" class="btn btn-secondary btn-sm mb-1"> -->
                    <router-link to="/#" class="sign-content mr-2">Remove</router-link>
                    <!-- </button> -->
                    <!-- <button type="button" class="btn btn-link btn-sm"><a href="#" class="myremovetbtn">Remove</a></button> -->
                    <!-- move to bag button -->
                    <!-- <button type="button" class="btn btn-secondary btn-sm mb-1">
                        <router-link to="/#" class="mybagtbtn">Move To Bag</router-link>
                    </button>-->
                    <span>
                      <addBagModal v-bind:cartscontentsData="cartscontent"></addBagModal>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import addBagModal from "@/components/open-modal.vue";
import Navbar from "@/components/blockter-navbar.vue";
import side from "@/components/sidenav.vue";
import Vue from "vue";
import Vuex from "vuex";
import { mapMutations } from "vuex";

export default {
  components: {
    addBagModal,
    Navbar,
    side 
  },
  data() {
    return {
      cartscontents: [
        {
          carttitle: "Men’s Skinny Fit Jeans (L35946248XLN_Whiskered Rinse_32)",
          cartsubtitle: "3 items left in stock",
          cartcolor: "green",
          cartprize: "1000.00",
          id: "1"
        },
        {
          carttitle: "Men’s Skinny Fit Jeans (L35946248XLN_Whiskered Rinse_32)",
          cartsubtitle: "3 items left in stock",
          cartcolor: "red",
          cartprize: "1087.00",
          id: "2"
        },
        {
          carttitle: "Men’s Skinny Fit Jeans (L35946248XLN_Whiskered Rinse_32)",
          cartsubtitle: "3 items left in stock",
          cartcolor: "green",
          cartprize: "1080.00",
          id: "3"
        }
      ]
    };
  },
    methods: {
    ...mapMutations({
      hamburgerChange: "changeHamburger(value)"
    }),
    }
};
</script>

<style lang="scss" scoped>
$dark-grey: gray;
$white: white;
$light-grey: lightgray;
.content{
  padding-left:260px;
   transition: 0.5s;
}
.pad-left{
      padding-left:0 !important;
       transition: 0.5s;
    }
.amountsize {
  margin-bottom: 5px;
}

.cartmainPage {
  .wishlist-part {
    //   font-size: $sub-title-font;
    background: $dark-grey;
  }
  .compare-products {
    color: $dark-grey;
  }
  .compare-products:hover {
    color: $dark-grey;
  }
  .breadcrumb-item + .breadcrumb-item::before {
    content: ">";
    color: $dark-grey;
  }
  .breadcrumb {
    background-color: $white;
  }
  .card-body {
    padding: 10px 10px 0px 10px;
    border-left: 1px solid $light-grey;
  }
  .cartedit-part {
    .myremovetbtn {
      color: $dark-grey;
      text-decoration: underline;
      background-color: transparent;
    }
    .mybagtbtn {
      color: $white;
    }
    
  }
}
.sign-content {
  color: $dark-grey;
  text-decoration: underline !important;
}

.cardmain {
  display: table;
  width: 100%;
  border: 1px solid $light-grey;
  .card-detail {
    display: table-cell;
    vertical-align: top;
    border-left: 1px solid $light-grey;
    .cartH1 {
      min-height: 70px;
    }
  }

  .cardimg {
    width: 126px;
    display: table-cell;
    vertical-align: top;
    img {
      width: 100%;
    }
  }
}
.carttitle {
  word-break: break-all;
}
.green {
  color: green;
}
.red {
  color: red;
}
@media only screen and (max-width: 400px) {
  .cartedit-part button {
    width: 100%;
  }
  .cardimg {
    width: 90px !important;
    vertical-align: middle !important;
  }
}
</style>
