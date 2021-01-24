import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Admin from '@/components/admin/Admin.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Admin',
    component: Admin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
