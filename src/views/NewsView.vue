<template>
  <div>
    <div v-for="item in items" v-bind:key="item.id">{{ item.title }}</div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    const vm = this;

    axios
      .get("https://api.hnpwa.com/v0/news/1.json")
      .then((response) => {
        console.log(response);
        vm.items = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {},
};
</script>
