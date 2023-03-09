import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import ItemsView from "../views/ItemsView.vue";
import UsersView from "../views/UsersView.vue";
 
Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    // path - URL
    // component - URL 해당하는 컴포넌트
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      component: NewsView
    },
    {
      path:"/ask",
      component: AskView
    },
    {
      path:"/jobs",
      component: JobsView
    },
    {
      path:"/items",
      component: ItemsView
    },
    {
      path:"/users",
      component: UsersView
    },
  ]
});