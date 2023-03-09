<template>
  <div>
    <div v-for="item in items" v-bind:key="item.id">{{ item.title }}</div>
  </div>
</template>
<script>
import { fetchNewsList } from "../api/index.js";
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    const vm = this;

    fetchNewsList()
      .then((response) => {
        vm.items = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
