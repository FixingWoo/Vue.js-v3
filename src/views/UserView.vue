<template>
  <div>
    <p>{{ fetchedUser.id }}</p>
    <p>{{ fetchedUser.created_time }}</p>
    <p>{{ fetchedUser.karma }}</p>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userId);
  },
};
</script>
