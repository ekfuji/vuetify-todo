import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: () => import(/* webpackChunkName: "about" */ '../views/Tarefas.vue')
  },
  {
    path: '/about',
    name: 'Sobre',
    component: () => import(/* webpackChunkName: "about" */ '../views/Sobre.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
