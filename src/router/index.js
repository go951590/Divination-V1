import { createRouter, createWebHistory } from 'vue-router'
import SignView from '../views/SignView.vue'
import HomeView from '../views/HomeView.vue'
import CoinView from '../views/CoinView.vue'
import LogView from '../views/LogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/sign_in',
      name: 'sign_in',
      component: SignView
    },
    {
      path: '/sign_up',
      name: 'sign_up',
      component: SignView
    },
    {
      path: '/coin',
      name: 'coin',
      component: CoinView
    },
    {
      path: '/log',
      name: 'log',
      component: LogView
    }
  ]
})

export default router
