<template>
  <div id="app">
    <tool-bar></tool-bar>
    <transition name="routing-fade">
      <router-view></router-view>
    </transition>
    <spinner :loading="loadingStatus"></spinner>
  </div>
</template>

<script>
import ToolBar from "./components/ToolBar.vue";
import Spinner from "./components/Spinner.vue";
import bus from "./utils/bus";

export default {
  methods: {
    startSpinner() {
      this.loadingStatus = true;
    },
    endSpinner() {
      this.loadingStatus = false;
    },
  },
  components: {
    ToolBar,
    Spinner,
  },
  data() {
    return {
      loadingStatus: false,
    };
  },
  created() {
    bus.$on("start:spinner", this.startSpinner);
    bus.$on("end:spinner", this.endSpinner);
  },
  beforeDestroy() {
    // 이벤트 객체 clear
    bus.$off("start:spinner", this.startSpinner);
    bus.$off("end:spinner", this.endSpinner);
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
a {
  color: #34495e;
  text-decoration: none;
}
a:hover {
  color: #42b883;
  text-decoration: underline;
}
/* Router Transition */
.routing-fade-enter-active,
.routing-fade-leave-active {
  transition: opacity 0.3s ease;
}
.routing-fade-enter, .routing-fade-leave-to
/* .routing-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
