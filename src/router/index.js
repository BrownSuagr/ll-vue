import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/hello',
      component: () => import('@/APP.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/hello',
      name: 'hello',
      component: () => import('@/views/HelloBootstrap.vue')
    }
  ]
})

export default router
