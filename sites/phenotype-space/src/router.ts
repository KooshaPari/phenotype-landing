import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import Home from "./views/Home.vue";
import SWE from "./views/SWE.vue";
import Keyboards from "./views/Keyboards.vue";
import Me from "./views/Me.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", name: "home", component: Home },
  { path: "/swe", name: "swe", component: SWE },
  { path: "/keyboards", name: "keyboards", component: Keyboards },
  { path: "/me", name: "me", component: Me },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
