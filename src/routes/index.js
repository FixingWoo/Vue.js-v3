import Vue from "vue";
import VueRouter from "vue-router";
import ItemView from "../views/ItemView.vue";
import UserView from "../views/UserView.vue";
import CreateListView from "../views/CreateListView.js";

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
      component: CreateListView("NewsView"),
    },
    {
      path: "/ask",
      name: "ask",
      component: CreateListView("AskView"),
    },
    {
      path: "/jobs",
      name: "jobs",
      component: CreateListView("JobsView"),
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
