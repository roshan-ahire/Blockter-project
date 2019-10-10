<template>
  <div>
    <div>hellow world</div>
    <b-form-group label="Using options array:">
      <b-form-checkbox-group
        id="checkbox-group-1"
        v-model="blog.categories"
        :options="options"
        name="flavour-1"
      ></b-form-checkbox-group>
    </b-form-group>
    <div>
      Selected:
      <strong>{{ selected }}</strong>
    </div>selected name
    <ul v-for="category in blog.categories" :key="category">
      <li>{{category}}</li>
    </ul>
    <!--  -->
    <div class="row justify-content-center">
      <div class="col-md-4">
        <b-form-select v-model="blog.bunch" :options="optionsCheck" size="sm" class="mt-3"></b-form-select>
        <div class="mt-3">
          Selected:
          <strong>{{ selected }}</strong>

          <h2>check:{{blog.bunch}}</h2>
        </div>
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
      selected: null,
      optionsCheck: [
        { value: "Please select an option", text: "Please select an option" },
        { value: "This is First option", text: "This is First option" },
        { value: "Selected Option", text: "Selected Option" },
        {
          value: "This is an option with object value",
          text: "This is an option with object value"
        },
        {
          value: "This one is disabled",
          text: "This one is disabled",
          disabled: true
        }
      ],

      blog: {
        bunch: "",
        categories: []
      },
      selected: [], // Must be an array reference!
      options: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" }
      ]
    };
  }
};
</script>