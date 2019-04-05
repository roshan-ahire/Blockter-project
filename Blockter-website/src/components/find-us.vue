<template>
  <div>
    <div class=" all-content">
      <b-container>
        <b-row class="mx-1">
          <b-col md="8">
            <Godzillcontent> </Godzillcontent>
          </b-col>
          <b-col md="4">
            <Facebookimg> </Facebookimg>
            <Tweetimg> </Tweetimg>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </div>
</template>

<script>
import Godzillcontent from "@/components/godzill-content.vue";
import Facebookimg from "@/components/facebook-img.vue";
import Tweetimg from "@/components/tweet-img.vue";
export default {
  components: {
    Godzillcontent,
    Facebookimg,
    Tweetimg
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
.all-content {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>
