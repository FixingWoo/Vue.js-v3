import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "@/views/NewsView.vue";
import AskView from "@/views/AskView.vue";
import JobsView from "@/views/JobsView.vue";
import ItemView from "@/views/ItemView.vue";
import UserView from "@/views/UserView.vue";
import CreateListView from "@/views/CreateListView.js";
import { store } from "@/store/index.js";
import bus from "@/utils/bus.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    // path - URL
    // component - URL 해당하는 컴포넌트
    {
      path: "/",
      redirect: "/news",
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((erorr) => {
            console.log(erorr);
          });
      },
      // component: CreateListView("NewsView"),
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((erorr) => {
            console.log(erorr);
          });
      },
      // component: CreateListView("AskView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch((erorr) => {
            console.log(erorr);
          });
      },
      // component: CreateListView("JobsView"),
    },
    {
      path: "/user/:id",
      component: UserView,
    },
    {
      path: "/item/:id",
      component: ItemView,
    },
  ],
});
