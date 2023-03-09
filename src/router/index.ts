import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import vueTippy from '../components/vueTippy.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'vueTippuy',
    component: vueTippy
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
