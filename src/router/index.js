import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/home/HomeView.vue";
import ProgrammingView from "../views/programming/ProgrammingView.vue";
import BussinesView from "../views/bussines/BussinesView.vue";
import SubbussinesView from "../views/bussines/SubbussinesView.vue";
import MarketingView from "../views/marketing/MarketingView.vue";
import ElearningView from "../views/elearning/ElearningView.vue";
import VideoView from "../views/designVideo/VideoView.vue";
import DesignView from "../views/design/DesignView.vue";
import CreativityView from "../views/creative/CreativityView.vue";
import VoiceservView from "../views/voice/VoiceservView";
import RegistrationView from "../views/auth/RegistrationView";
import LoginView from "../views/auth/LoginView.vue";
/* userdashboard */
import UserhomeView from "../views/userDashboard/home/UserhomeView.vue";
import UserordersView from "../views/userDashboard/orders/UserordersView.vue";
import UsermessageView from "../views/userDashboard/message/UsermessageView.vue";
import UserreviewView from "../views/userDashboard/reviews/UserreviewView.vue";
import UseraccountView from "../views/userDashboard/account/UseraccountView.vue";
/* admin */
import DashboardView from "../views/admin/dashboard/DashboardView.vue";
import UsersView from "../views/admin/users/UsersView.vue";
import AdduserView from "../views/admin/users/AdduserView.vue";
import LevelsView from "../views/admin/users/LevelsView.vue";
import MoneyView from "../views/admin/withdraw/MoneyView.vue";
import FoldersView from "../views/admin/folders/FoldersView.vue";
import CartsView from "../views/admin/carts/CartsView.vue";
import BillsView from "../views/admin/bills/BillsView.vue";
import OrdersView from "../views/admin/orders/OrdersView.vue";
import CategoriesView from "../views/admin/categories/CategoriesView.vue";
import AddcatView from "../views/admin/categories/AddcatView.vue";
import SubcategoriesView from "../views/admin/categories/SubcategoriesView.vue";
import AddsubView from "../views/admin/categories/AddsubView.vue";
import ReportsView from "../views/admin/reports/ReportsView.vue";
import ConversationView from "../views/admin/conversation/ConversationView.vue";
import ArticlesView from "../views/admin/articles/ArticlesView.vue";
import CreateArticleView from "../views/admin/articles/CreateArticleView.vue";

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
    path: "/subbussines",
    name: "subbussines",
    component: SubbussinesView,
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
  {
    path: "/register",
    name: "register",
    component: RegistrationView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  /* user dashboard */
  {
    path: "/dashboard",
    name: "dashboard",
    component: UserhomeView,
  },
  {
    path: "/orders",
    name: "orders",
    component: UserordersView,
  },
  {
    path: "/message",
    name: "message",
    component: UsermessageView,
  },
  {
    path: "/reviews",
    name: "reviews",
    component: UserreviewView,
  },
  {
    path: "/account",
    name: "account",
    component: UseraccountView,
  },
  /* admin */
  {
    path: "/admin",
    name: "admin",
    component: DashboardView,
  },
  {
    path: "/users",
    name: "users",
    component: UsersView,
  },
  {
    path: "/adduser",
    name: "adduser",
    component: AdduserView,
  },
  {
    path: "/levels",
    name: "levels",
    component: LevelsView,
  },
  {
    path: "/money",
    name: "money",
    component: MoneyView,
  },
  {
    path: "/folders",
    name: "folders",
    component: FoldersView,
  },
  {
    path: "/carts",
    name: "carts",
    component: CartsView,
  },
  {
    path: "/bills",
    name: "bills",
    component: BillsView,
  },
  {
    path: "/orderss",
    name: "orderss",
    component: OrdersView,
  },
  {
    path: "/categories",
    name: "categories",
    component: CategoriesView,
  },
  {
    path: "/addcat",
    name: "addcat",
    component: AddcatView,
  },
  {
    path: "/subcategories",
    name: "subcategories",
    component: SubcategoriesView,
  },
  {
    path: "/add-subcategories",
    name: "addsub",
    component: AddsubView,
  },
  {
    path: "/reports",
    name: "reports",
    component: ReportsView,
  },
  {
    path: "/conversation",
    name: "conversation",
    component: ConversationView,
  },
  {
    path: "/articles",
    name: "articles",
    component: ArticlesView,
  },
  {
    path: "/create",
    name: "create",
    component: CreateArticleView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
