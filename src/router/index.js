import Vue from "vue"
import VueRouter from "vue-router"
import Post from "../views/Post.vue"
import Check from "../views/Check.vue"

Vue.use(VueRouter)

const routes = [
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
    path: "/check",
    name: "Check",
    component: Check,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
