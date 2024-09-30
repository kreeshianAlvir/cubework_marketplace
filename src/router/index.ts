import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from '@/views/SignUp.vue'
import NotfoundView from '@/views/NotfoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign-up',
      name: 'Sign Up Page',
      component: SignUp
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotfoundView
    }
  ]
})

export default router
