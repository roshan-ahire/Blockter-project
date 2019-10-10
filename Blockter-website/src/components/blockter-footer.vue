<template>
  <div class="text-left">
    <div class="footer-poster">
      <div class="text-white py-5 one">
        <b-container>
          <b-row>
            <b-col md="3">
              <div class="text-left my-5">
                <figure>
                  <img src="../assets/logo.png" alt="logo" />
                </figure>
                <div class="pt-4 footer-text small">
                  5th Avenue st, manhattan
                  <br />New York, NY 10001
                </div>
                <div class="pt-4">
                  <span class="small footer-text">Call us:</span>
                  <span :class="{'text-red':colorChange === true}">
                    +01) 202 342
                    6789
                  </span>
                </div>
              </div>
            </b-col>
            <b-col cols="2">
              <div class="text-left my-5">
                <div class="font-weight-bold pt-4">Resources</div>
                <div class="small pt-4">
                  <ul class="footer-list">
                    <li class="footer-link">About Block Buster</li>
                    <li class="footer-link">Contact Us</li>
                    <li class="footer-link">Forums</li>
                    <li class="footer-link">Blog</li>
                    <li class="footer-link">Help Center</li>
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col cols="2">
              <div class="text-left my-5">
                <div class="font-weight-bold pt-4">Legal</div>
                <div class="small pt-4">
                  <ul class="footer-list">
                    <li class="footer-link">Terms of Use</li>
                    <li class="footer-link">Privacy Policy</li>
                    <li class="footer-link">Security</li>
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col cols="2">
              <div class="text-left my-5">
                <div class="font-weight-bold pt-4">Account</div>
                <div class="small pt-4">
                  <ul class="footer-list">
                    <li class="footer-link">My Account</li>
                    <li class="footer-link">Watchlist</li>
                    <li class="footer-link">Collection</li>
                    <li class="footer-link">User Guide</li>
                  </ul>
                </div>
              </div>
            </b-col>
            <b-col md="3">
              <div class="text-left my-5">
                <div name="roshan" class="font-weight-bold pt-4">Newsletter</div>
                {{name}}
                <div class="footer-text pt-4 small">
                  Subscribe to our newsletter system now to get latest news from
                  us
                </div>
                <div class="pt-5 small">
                  <!-- <b-form-input
                  v-model="text"
                  class="inputbox"
                  placeholder="Enter your email"
                  ></b-form-input>-->

                  <div class="input-group mb-3">
                    <input
                      type="text"
                      class="form-control inputbox border-right-0"
                      placeholder="Enter your email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <span class="input-group-text inputbox border-left-0" id="basic-addon2">
                        <font-awesome-icon :icon="['fas', 'envelope']" class="small" />
                      </span>
                    </div>
                  </div>
                </div>
                <div class="small pt-3">
                  <a href="#" class="subscribe-color">SUBSCRIBE NOW</a>
                  <h1>{{name}}</h1>
                  {{lists}}
                  <span>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      class="small subscribe-color ml-2"
                    />
                  </span>
                </div>
              </div>
              <div>
                list
                <!-- <h2 v-for="list in lists" :key="list">
                  {{list.name}}
                  {{list.rollNo}}
                </h2>-->
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
      <div class="border border-danger">
        <h3 class="text-white">* it is a toggle button</h3>

        <button v-on:click="clickButton()" class="btn btn-primary">click here</button>
        <h2
          :class="{'blue': toggled === true, 'green': toggled === false}"
          class="red-back mt-2"
        >color change</h2>
        <input
          type="text"
          :class="{'': toggled === true, 'redError': toggled === false}"
          class="form-control inputbox border-right-0"
          placeholder="Enter your email"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
      </div>
      <div class="mt-2 border border-primary">
        <h3 class="text-white">* it is a one click button</h3>
        <button v-on:click="clickbtn()" class="btn btn-primary">click here</button>
        <h1 :class="{'text-red':colorChange === true}" class="text-white">hellow roshan</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["name", "lists"],
  data() {
    return {
      text: "",
      toggled: true,
      colorChange: false
    };
  },
  methods: {
    clickButton: function() {
      this.toggled = !this.toggled;
    },
    clickbtn: function() {
      console.log("red");
      this.colorChange = true;
    }
  },
  // computed:{
  //       function myfunction() {
  //       if (
  //         document.documentElement.scrollTop > "150" ||
  //         document.body.scrollTop > "150"
  //       ) 
        
  //       {
  //         document.getElementById("mainnav").style.background =
  //           "rgba(0,0,0,0.9)";
  //         document.getElementById("navh").style.display = "none";
  //         document.getElementById("mainnav").style.paddingTop = "0px";
  //         document.getElementById("mainnav").style.transition =
  //           "background 0.5s";
  //         document.getElementById("mainnav").style.transition = "all 0.5s";
  //       } else {
  //         document.getElementById("navh").style.display = "block";
  //         document.getElementById("mainnav").style.background = "";
  //         document.getElementById("mainnav").style.paddingTop = "5px";
  //         document.getElementById("mainnav").style.transition =
  //           "background 0.5s";
  //         document.getElementById("mainnav").style.transition = "all 0.5s";
  //       }
  //     }
  // }

  
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";

.footer-poster {
  background: linear-gradient(rgba(1, 1, 17, 0.864), rgba(4, 4, 29, 0.755)),
    url("../assets/back-poster.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  background-repeat: repeat-y;

  // .col-2 {
  //   -ms-flex: 0 0 16.666667%;
  //   -webkit-box-flex: 0;
  //   flex: 0 0 16.666667%;
  //   max-width: 40%;
  // }
  .footer-text {
    color: $para-text;
    line-height: 25px;
  }

  // 2nd col
  .footer-list {
    padding: 0px;
    list-style: none;
    .footer-link {
      color: $para-text;
      line-height: 23px;
    }
  }

  //   3rd col

  // 4th col for input box
  .inputbox {
    background-color: transparent;
    border: 1px solid #8b96a3;
    font-size: 13px;
    border-radius: 2px;
  }
  .inputbox:focus {
    outline: none;
    box-shadow: none;
    border-color: #8b96a3;
    color: white;
  }
  .input-group-append {
    margin-left: -4px;
  }
  .subscribe-color {
    color: $last-text;
    font-weight: bold;
  }
  .red {
    background: red;
  }

  .blue {
    background: blue;
  }

  .green {
    background: green;
  }
  .redError {
    border: 1px solid red;
  }
  .text-red {
    color: red !important;
  }
  @media only screen and (max-width: 600px) {
    .one {
      text-align: none;
      padding-left: 50px;
    }
  }
}
</style>
