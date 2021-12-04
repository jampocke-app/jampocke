import Vue from "vue"
import VueRouter from "vue-router"
import Japan from "../views/Japan.vue"
import Show from "../views/Show.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Japan",
    component: Japan,
  },
  {
    path: "/Show/:id",
    name: "Show",
    component: Show,
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
