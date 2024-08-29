import { createRouter, createWebHistory } from 'vue-router'
 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: () => import('@/views/HomeView.vue')
      }
    },
    {
      path:'/store',
      name:'store',
      component: () => import('@/views/store/Store.vue')
    },
    {
      path:'/weather',
      name:'weather',
      component: () => import('@/views/weather/Weather.vue')
    },
    {
      path:'/auth',
      name:'auth',
      component: () => import('@/views/auth/Auth.vue')
    },
    {
      path:'/resturant',
      name:'resturant',
      component: () => import('@/views/resturant/Resturant.vue')
    },
    {
      path:'/movie',
      name:'movie',
      component: () => import('@/views/movie/Movie.vue')
    },
  ]
})

export default router
