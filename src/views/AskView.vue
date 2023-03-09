<template>
  <div>
    <div v-for="item in items" v-bind:key="item.key">{{ item.title }}</div>
  </div>
</template>
<script>
import { fetchAskList } from "../api/index.js";
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    const vm = this;

    fetchAskList()
      .then((response) => {
        vm.items = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
