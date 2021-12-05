import Vue from "vue"
import VueRouter from "vue-router"
import Japan from "../views/Japan.vue"
import Show from "../views/Show.vue"
import Post from "../views/Post.vue"
import Check from "../views/Check.vue"
import randam from "../views/randam.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Japan",
    component: Japan,
  },
  {
    path: "/post",
    name: "Post",
    component: Post,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/Show/:id",
    name: "Show",
    component: Show,
  },
  {
    path: "/check",
    name: "Check",
    component: Check,
  },
  {
    path: "/randam",
    name: "randam",
    component: randam,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
