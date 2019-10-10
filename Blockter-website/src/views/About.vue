<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!--  -->

    <div>
      <input v-model="inputtext" type="text" />
      <span>
        <button @click="getmessage()" class>click here</button>
      </span>
      <div>{{message}}</div>
    </div>
    <!--  -->

    <div class="mt-4">
      <h3>checkbox value</h3>
      <b-form-group label="Using options array:">
        <b-form-checkbox-group
          id="checkbox-group-1"
          v-model="selected"
          :options="options"
          name="flavour-1"
        ></b-form-checkbox-group>
      </b-form-group>
      <pre>{{selected}}</pre>
    </div>

    <div class="mt-5 text-center">
      <h3>input limit</h3>
      <div class="row justify-content-center">
        <div class="col-md-4">    <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
      <div class="mt-2">
        Value:{{text.substring(0,5)}}
        <span v-if="text.length > 5">...</span>
      </div></div>
      </div>
  
    </div>
  </div>
</template>
<style lang="scss" scoped>
</style>
<script>
export default {
  data() {
    return {
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" }
      ],
      message: "",
      inputtext: "",
      text: ""
    };
  },
  methods: {
    getmessage() {
      console.log("fsfsfsf", this.message, this.inputtext);
      this.message = this.inputtext;
    }
  }
};
</script>