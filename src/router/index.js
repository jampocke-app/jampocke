import Vue from "vue"
import VueRouter from "vue-router"
<<<<<<< HEAD
import Japan from "../views/Japan.vue"
import Show from "../views/Show.vue"
import Post from "../views/Post.vue"
import Check from "../views/Check.vue"
import Randam from "../views/Randam.vue"
import Loginview from "../views/Loginview.vue"
=======
import Post from "../views/Post.vue"
import Check from "../views/Check.vue"
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e

Vue.use(VueRouter)

const routes = [
  {
<<<<<<< HEAD
    path: "/",
    name: "Loginview",
    component: Loginview,
=======
    path: "/post",
    name: "Post",
    component: Post,
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
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
<<<<<<< HEAD
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
=======
    path: "/check",
    name: "Check",
    component: Check,
>>>>>>> ef32ee828eecf0ba57e3994cfba86b1f6a72915e
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
