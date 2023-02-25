import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProgrammingView from "../views/ProgrammingView.vue";
import BussinesView from "../views/BussinesView.vue";
import MarketingView from "../views/MarketingView.vue";
import ElearningView from "../views/ElearningView.vue";
import VideoView from "../views/VideoView.vue";
import DesignView from "../views/DesignView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/Bussines",
    name: "Bussines",
    component: BussinesView,
  },
  {
    path: "/programming",
    name: "programming",
    component: ProgrammingView,
  },
  {
    path: "/marketing",
    name: "marketing",
    component: MarketingView,
  },
  {
    path: "/learning",
    name: "learning",
    component: ElearningView,
  },
  {
    path: "/video",
    name: "video",
    component: VideoView,
  },
  {
    path: "/design",
    name: "design",
    component: DesignView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
