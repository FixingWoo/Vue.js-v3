<template>
  <ul class="news-list">
    <li
      v-for="item in this.$store.state.news"
      v-bind:key="item.id"
      class="post"
    >
      <div class="points">
        {{ item.points || 0 }}
      </div>
      <div>
        <p class="news-title">
          {{ item.title }}
        </p>
        <small class="link-text">
          by
          <router-link v-bind:to="`/user/${item.user}`">{{
            item.user
          }}</router-link>
        </small>
      </div>
    </li>
  </ul>
  <!-- <div>
    <p v-for="item in this.$store.state.news" v-bind:key="item.id">
      <a v-bind:href="item.url">{{ item.title }}</a>
      <small
        >{{ item.time_ago }}
        by
        <router-link v-bind:to="`/user/${item.user}`">{{
          item.user
        }}</router-link>
      </small>
    </p> -->
  <!-- </div> -->
</template>
<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
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
