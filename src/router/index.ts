import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'ja',
    component: () => import('../pages/resumeJa.vue'),
  },
  {
    path: '/cn',
    name: 'cn',
    component: () => import('../pages/resumeCn.vue'),
  },

  {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/resumeJa.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
