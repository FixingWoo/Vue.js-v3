<template>
  <div>
    <section class="header-container">
      <user-profile :info="fetchedItem"></user-profile>
    </section>
    <section>
      <div v-html="fetchedItem.content" class="content"></div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile.vue";

export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["fetchedItem"]),
  },
  created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch("FETCH_ITEM", itemId);
  },
};
</script>
