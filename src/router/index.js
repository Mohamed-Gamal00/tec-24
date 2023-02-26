import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import ProgrammingView from "../views/programming/ProgrammingView.vue";
import BussinesView from "../views/bussines/BussinesView.vue";
import MarketingView from "../views/marketing/MarketingView.vue";
import ElearningView from "../views/elearning/ElearningView.vue";
import VideoView from "../views/designVideo/VideoView.vue";
import DesignView from "../views/design/DesignView.vue";
import CreativityView from "../views/creative/CreativityView.vue";
import VoiceservView from "../views/voice/VoiceservView";

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
    path: "/creativity",
    name: "creativity",
    component: CreativityView,
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
  {
    path: "/voice",
    name: "voice",
    component: VoiceservView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
