import Vue from "vue";
import vueRouter from "vue-router";
import login from "../components/start/login";
import rigister from "../components/start/register";
import enter from "@/view/enter";
import home from "@/view/home/home";
import serach from "@/view/serach/serach";
import profile from "@/view/profile/profile";
import cart from "@/view/cart/cart";
import serachItem from "@/view/serach/serachItem";
import goods from "@/view/goods/good";
import order from "@/view/order/order";
import profileOrder from "@/view/profile/profileOrder";
import profileInfo from "@/view/profile/profileInfo";
import chat from "@/view/chat/chat";
import chatShop from "@/view/chat/chatShop";
import chatShopUser from "@/view/chat/chatShopUser";

Vue.use(vueRouter);
const routes = [
  { path: "/", redirect: "/enter" },
  { path: "/login", component: login, meta: { isLogin: true } },
  { path: "/register", component: rigister, meta: { isLogin: true } },
  {
    path: "/serachItem",
    name: "serachItem",
    component: serachItem,
    meta: { isLogin: true },
  },
  { path: "/goods/:id", name: "goods", component: goods },
  { path: "/order", name: "order", component: order },
  { path: "/profileOrder", name: "profileOrder", component: profileOrder },
  { path: "/profileInfo", component: profileInfo, name: "profileInfo" },
  { path: "/chat", component: chat, name: "chat" },
  { path: "/chatShop", component: chatShop, name: "chatShop" },
  { path: "/chatShopUser", component: chatShopUser, name: "chatShopUser" },
  {
    path: "/enter",
    component: enter,
    children: [
      { path: "/", redirect: "/home", meta: { isLogin: true } },
      { path: "/home", component: home, meta: { isLogin: true } },
      { path: "/serach", component: serach, meta: { isLogin: true } },
      { path: "/cart", component: cart, meta: { isLogin: false } },
      { path: "/profile", component: profile, meta: { isLogin: false } },
    ],
  },
];

// 创建router实例
const router = new vueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    next();
  } else {
    let token = localStorage.getItem("my-token");
    if (!token) {
      next("/login");
    } else {
      next();
    }
  }
});

// 导出router
export default router;
