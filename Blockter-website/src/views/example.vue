<template>
  <div class="about">
    <h1 class="text-center text-capitalize">only for practice</h1>
    <hr />
    <div>
      <section>
        <h2 class="text-center text-capitalize text-warning">1. manualy created tab</h2>
        <div class="row justify-content-center m-auto">
          <div class="col-md-4">
            <div class="d-flex justify-content-center">
              <div class="m-2 tab-section" :class="{active:tab===1 && btn}" @click="tab=1;">one</div>
              <div class="m-2 tab-section" :class="{active:tab===2}" @click="tab=2">two</div>
              <div class="m-2 tab-section" :class="{active:tab===3}" @click="tab=3">three</div>
            </div>
            <div class="tabs">
              <div v-show="tab==1">this is a first tab</div>
              <div v-show="tab==2">this is a second tab</div>
              <div v-show="tab==3">
                this is a third tab
                <p>
                  <button @click="tab=1">click</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <section>
          <h2 class="text-center">2. responsive</h2>
          <button @click="clickButton()" class="btn btn-lg btn-warning mb-3">click me</button>
          <div class="row m-auto">
            <div :class="{'addWidth': toggled === true}"  class="div-one bg-warning">sgksgfksgkgfksg</div>
            <div :class="{'minusWidth': toggled === true}" class="bg-primary div-two">sgfdsgfsgkfskgkg</div>
          </div>
        </section>
      </div>
    </div>
    <hr />
  </div>
</template>

<style lang="scss" scoped>
.addWidth{
  width: 20% !important;
   transition: 0.7s;  
}
.minusWidth{
  width: 80% !important;
   transition: 0.7s;
}
.div-one {
  height: 200px;
  width: 0%;
}
.div-two {
  height: 200px;
  width: 100%;
}
.active {
  background-color: red !important;
}
.list li {
  display: inline;
}
.d-flex .tab-section {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
}
.tabs {
  background-color: rgba(0, 0, 0, 0.5);
  width: 50%;
  margin: 0 auto;
}
</style>

<script>
export default {
  data() {
    return {
      tab: "1",
      btn: true,
     toggled: false,
    };
  },
  methods: {
     clickButton: function() {
      this.toggled = !this.toggled;
    },
  }
};
</script>