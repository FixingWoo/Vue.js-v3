<template>
  <div>
    <p v-for="item in this.$store.state.jobs" v-bind:key="item.id">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }} by {{ item.domain }}</small>
    </p>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>
