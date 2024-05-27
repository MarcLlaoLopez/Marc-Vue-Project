import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: HomeView
    },
    {
      path: '/pokedex',
      name: 'Pokedex',
      component: () => import('../views/Pokedex.vue')
    },
    {
      path: '/entrenadores',
      name: 'Entrenadores',
      component: () => import('../views/Entrenadores.vue')
    }
  ]
})

export default router
