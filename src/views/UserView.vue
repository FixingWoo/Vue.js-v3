<template>
  <div>
    <user-profile :info="fetchedUser"></user-profile>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  created() {
    const userId = this.$route.params.id;
    this.$store.dispatch("FETCH_USER", userId);
  },
  computed: {
    ...mapGetters(["fetchedUser"]),
  },
};
</script>
