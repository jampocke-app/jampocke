import Vue from "vue"
import VueRouter from "vue-router"
import Japan from "../views/Japan.vue"
import Show from "../views/Show.vue"
import Post from "../views/Post.vue"
import Check from "../views/Check.vue"
import Randam from "../views/Randam.vue"
import Loginview from "../views/Loginview.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Loginview",
    component: Loginview,
  },
  {
    path: "/Japan",
    name: "Japan",
    component: Japan,
  },
  {
    path: "/Post",
    name: "Post",
    component: Post,
  },
  {
    path: "/Show/:id",
    name: "Show",
    component: Show,
  },
  {
    path: "/Check",
    name: "Check",
    component: Check,
  },
  {
    path: "/Randam",
    name: "Randam",
    component: Randam,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
