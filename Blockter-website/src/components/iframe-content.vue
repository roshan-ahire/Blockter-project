<template>
  <div>
    <div class="iframe-background">
      <div class="pt-5">
        <b-container>
          <b-row>
            <b-col md="8" class="p-0">
              <div class="font-weight-bold text-left pt-5">
                <div class="text-white">IN THEATER</div>
              </div>
              <!--  -->
              <div>
                <div class="py-5">
                  <div>
                    <b-embed
                      type="iframe"
                      aspect="16by9"
                      src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0"
                      name="iframe_a"
                      allowfullscreen
                    ></b-embed>
                  </div>
                </div>
              </div>
            </b-col>

            <b-col md="4" class="p-0">
              <div class="text-right pt-5">
                <div class="text-white pr-5 small">
                  VIEW ALL
                  <span>
                    <font-awesome-icon :icon="['fas', 'chevron-right']" class="small text-white"/>
                  </span>
                </div>
              </div>
              <!--  -->
              <div class="object-color">
                <font-awesome-icon :icon="['fas', 'chevron-up']" class="text-white mt-2"/>
                <b-media tag="li" class="my-3 ">
                  <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                  <p class="mb-0 text-left">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                  </p>
                </b-media>
                <b-media tag="li" class="my-3">
                  <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                  <p class="mb-0 text-left">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                  </p>
                </b-media>
                <b-media tag="li" class="my-3">
                  <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                  <p class="mb-0 text-left">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                  </p>
                </b-media>
                <b-media tag="li" class="my-3">
                  <b-img slot="aside" blank blank-color="#cba" width="64" alt="placeholder"></b-img>
                  <p class="mb-0 text-left">
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin
                  </p>
                </b-media>
                 <font-awesome-icon :icon="['fas', 'chevron-up']" class="text-white mt-2"/>
              </div>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.iframe-background {
  background: linear-gradient(rgba(32, 33, 44, 0.7), rgba(33, 34, 46, 0.7));
  .object-color {
    background: linear-gradient(rgba(18, 18, 24, 0.7), rgba(15, 16, 22, 0.7));
    margin-top: 53px;
    height: 428px;
  }
}
</style>


