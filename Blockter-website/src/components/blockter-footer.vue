<template>
  <div>
    <div class="text-white py-5">
      <b-container>
        <b-row>
          <b-col md="3">
            <div class="text-left my-5">
              <figure>
                <img src="../assets/logo.png" alt="logo" />
              </figure>
              <div class="pt-4 footer-text small">
                5th Avenue st, manhattan<br />
                New York, NY 10001
              </div>
              <div class="pt-4 ">
                <span class="small footer-text">Call us:</span> (+01) 202 342
                6789
              </div>
            </div>
          </b-col>
          <b-col md="2">
            <div class="text-left my-5">
              <div class="font-weight-bold pt-4">Resources</div>
              <div class="small pt-4">
                <ul>
                  <li>About Block Buster</li>
                  <li>Contact Us</li>
                  <li>Forums</li>
                  <li>Blog</li>
                  <li>Help Center</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col md="2">
            <div class="text-left my-5">
              <div class="font-weight-bold pt-4">Legal</div>
              <div class="small pt-4">
                <ul>
                  <li>Terms of Use</li>
                  <li>Privacy Policy</li>
                  <li>Security</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col md="2">
            <div class="text-left my-5">
              <div class="font-weight-bold pt-4">Account</div>
              <div class="small pt-4">
                <ul>
                  <li>My Account</li>
                  <li>Watchlist</li>
                  <li>Collection</li>
                  <li>User Guide</li>
                </ul>
              </div>
            </div>
          </b-col>
          <b-col md="3">
            <div class="text-left my-5">
              <div class="font-weight-bold pt-4">Newsletter</div>
              <div class="footer-text pt-4 small">
                Subscribe to our newsletter system now to get latest news from
                us
              </div>
              <div class="pt-5 small">
                <b-form-input
                  v-model="text"
                  class="inputbox"
                  placeholder="Enter your email"
                ></b-form-input>
              </div>
              <div class="small pt-3 subscribe-color">
                SUBSCRIBE NOW
                <span>
                  <font-awesome-icon
                    :icon="['fas', 'chevron-right']"
                    class="small"
                /></span>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.footer-text {
  color: #8b96a3 !important;
  line-height: 25px;
}

// 2nd col
ul {
  padding: 0px;
  list-style: none;
  li {
    color: #8b96a3 !important;
    line-height: 23px;
  }
}

//   3rd col

// 4th col for input box
.inputbox {
  background-color: transparent !important;
  border: 1px solid #8b96a3;
  font-size: 13px;
  border-radius: 2px !important;
}
.subscribe-color {
  color: #dd003f;
  font-weight: bold;
}
</style>
