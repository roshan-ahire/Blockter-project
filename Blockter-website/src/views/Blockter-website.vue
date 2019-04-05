<template>
  <div>
    <div class="main-backgroung">
      <!-- use navbar componet -->
      <Navbar>
        <b-nav-item href="#" slot="navlinks" v-for="link in navlinks" v-bind:key="link.index" v-scroll-to="link.divid">
          <span class="small font-weight-bold"> 
                        {{link.name}}
                        </span>
          <span v-if="link.icon">
                        <font-awesome-icon :icon="['fas', 'chevron-down']" class="ml-1 small arrow-hover"/>
                      </span>
        </b-nav-item>
      </Navbar>
      <!-- background image start -->
      <div class=" background-poster pb-5">
        <!-- using component -->
        <div id="home">
        <Formgroup>
        </Formgroup>
        </div>
        <!-- using component -->
        <!-- <CardImg>
                      </CardImg> -->
        <swiper1/>
        <!-- <swiper1/> -->
      </div>
  
      <!-- using component -->
      <div id="movies">
      <IframeVideo>
  
      </IframeVideo>
      </div>
      <!-- using component -->
      <div id="tvshows">
      <Findus>
      </Findus>
      </div>
      <!-- using component -->
       <div id="news">
      <div class="footer-poster">
       
        <Footer>
        </Footer>
      </div>
      </div>
      <!-- using component -->
     
   <Footerlast>
      </Footerlast>
    </div>
  
  
  </div>
</template>

<script>
  import Navbar from "@/components/blockter-navbar.vue";
  import Formgroup from "@/components/blockter-form.vue";
  import CardImg from "@/components/card-carousel.vue";
  import IframeVideo from "@/components/iframe-content.vue";
  import swiper1 from "@/components/swipe.vue";
  import Findus from "@/components/find-us.vue";
  import Footer from "@/components/blockter-footer.vue";
  import Footerlast from "@/components/footer-last.vue";
  
  export default {
    data() {
      return {
        navlinks: [{
            name: "HOME",
            icon: true,
            divid: "#home"
          },
          {
            name: "MOVIES",
            icon: true,
            divid: "#movies"
          },
  
          {
            name: "TVSHOWS",
            icon: true,
            divid: "#tvshows"
          },
          {
            name: "CELEBRITIES",
            icon: true,
            divid: "#celebrities"
          },
          {
            name: "NEWS",
            icon: true,
            divid: "#news"
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
      swiper1,
      Findus,
      Footer,
      Footerlast
    }
  };
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
  .main-backgroung {
    background-color: #020d18 !important;
    height: auto;
    .nav-link {
      color: $form-text;
    }
    .nav-link:hover {
      color: yellow !important;
    }
    .arrow-hover:hover {
      color: yellow !important;
    }
    // second background poster
    .background-poster {
      background: linear-gradient(rgba(1, 1, 17, 0.864), rgba(4, 4, 29, 0.755)), url("../assets/back-poster.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: auto;
      background-repeat: repeat-y;
    }
    .footer-poster {
      background: linear-gradient(rgba(1, 1, 17, 0.864), rgba(4, 4, 29, 0.755)), url("../assets/back-poster.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: auto;
      background-repeat: repeat-y;
    }
  }
</style>
