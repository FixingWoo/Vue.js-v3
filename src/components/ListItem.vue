<template>
  <ul class="news-list">
    <li v-for="item in listItems" v-bind:key="item.id" class="post">
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          <template v-if="item.domain">
            <a :href="item.url">{{ item.title }}</a>
            <small class="link-text" v-if="item.domain">
              {{ item.domain }}</small
            >
          </template>
          <template v-else>
            <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
            <small
              ><a class="link-text" :href="item.domain" v-if="item.domain"
                >({{ item.domain }})</a
              >
            </small>
          </template>
        </p>

        <small v-if="item.user" class="link-text">
          by
          <router-link v-bind:to="`/user/${item.user}`">{{
            item.user
          }}</router-link>
        </small>
        <small v-if="item.time_ago" class="link-text">
          {{ item.time_ago }}
        </small>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  created() {
    const path = this.$route.path;

    if (path === "/ask") {
      this.$store.dispatch("FETCH_ASK");
    } else if (path === "/news") {
      this.$store.dispatch("FETCH_NEWS");
    } else if (path === "/jobs") {
      this.$store.dispatch("FETCH_JOBS");
    }
  },
  computed: {
    listItems() {
      const path = this.$route.path;

      if (path === "/ask") {
        return this.$store.state.ask;
      } else if (path === "/news") {
        return this.$store.state.news;
      } else if (path === "/jobs") {
        return this.$store.state.jobs;
      }

      return true;
    },
  },
};
</script>
<style scoped>
.news-list {
  padding: 0;
  margin: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  color: #42b883;
  display: flex;
  align-items: center;
  justify-content: center;
}
.link-text {
  color: #828282;
}
.news-title {
  margin: 0;
}
</style>
