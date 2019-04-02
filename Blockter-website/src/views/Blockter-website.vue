<template>
    <div>
        <div class="main-backgroung">
            <!-- use navbar componet -->
            <Navbar>
                <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index">
                    <span class="small font-weight-bold"> {{link.name}}</span>
                    <span style="color:#fff" v-if="link.icon">
                                                     <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1 small arrow-hover"/>
                                                 </span>
                </b-nav-item>
            </Navbar>
            <!-- background image start -->
            <div class=" background-poster pb-5">
                <!-- using component -->
                <Formgroup>
                </Formgroup>
                <!-- using component -->
                <CardImg>
                    </CardImg>
                <!-- <swiper1/> -->

    
            </div>
           
            <!-- using component -->
            <IframeVideo>
    
            </IframeVideo>
      
        </div>
    
    
    </div>
</template>

<script>
import Navbar from "@/components/blockter-navbar.vue";
import Formgroup from "@/components/blockter-form.vue";
import CardImg from "@/components/card-carousel.vue";
import IframeVideo from "@/components/iframe-content.vue";
import swiper1 from "@/components/swipe.vue";

export default {
  data() {
    return {
      navlinks: [
        {
          name: "HOME",
          icon: true,
          divid: "#welcome"
        },
        {
          name: "MOVIES",
          icon: true,
          divid: "#landing"
        },

        {
          name: "TVSHOWS",
          icon: true,
          divid: "#documentation"
        },
        {
          name: "CELEBRITIES",
          icon: true,
          divid: "#purchase"
        },
        {
          name: "NEWS",
          icon: true,
          divid: "#documentation"
        }
      ]
    };
  },

  methods: {
    onSlideChangeStart(currentPage) {
      console.log("onSlideChangeStart", currentPage);
    },
    onSlideChangeEnd(currentPage) {
      console.log("onSlideChangeEnd", currentPage);
    }
  },

  components: {
    Navbar,
    Formgroup,
    CardImg,
    IframeVideo,
    swiper1
  }
};
</script>

<style lang="scss">
.main-backgroung {
  background-color: #111014;
  height: 3000px;
  .nav-link {
    color: rgba(255, 255, 255, 0.75) !important;
  }
  .nav-link:hover {
    color: yellow !important;
  }
  .arrow-hover:hover {
    color: yellow !important;
  }
  // second background poster
  .background-poster {
    background: linear-gradient(rgba(1, 1, 17, 0.864), rgba(4, 4, 29, 0.755)),
      url("../assets/back-poster.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: auto;
    background-repeat: repeat-y;
  }
}
</style>
