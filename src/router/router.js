import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Homepage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page-home',
      component: HomePage
    },
    {
      path: '/error',
      name: 'page-error',
      
      component: () => import('../views/page-error.vue')
    }
  ]
})

export default router
