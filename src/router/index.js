import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/store',
      name: 'store',
      alias: '/stores',
      components: {
        default: () => import('@/views/store/Store.vue'),
        headerStore: () => import('@/components/main/Header.vue')
      },
      meta: { title: 'Store Market', requiresAuth: false }
    },
    {
      path: '/weather',
      name: 'weather',
      alias: '/weathers',
      component: () => import('@/views/weather/Weather.vue'),
      meta: { title: 'Weather', requiresAuth: false }
    },
    {
      path: '/auth',
      name: 'auth',
      alias: '/auths',
      component: () => import('@/views/auth/Auth.vue'),
      meta: { title: 'Auth', requiresAuth: false }
    },
    {
      path: '/resturant',
      name: 'resturant',
      alias: '/resturants',
      component: () => import('@/views/resturant/Resturant.vue'),
      meta: { title: 'Resturant', requiresAuth: false }
    },
    {
      path: '/movie',
      name: 'movie',
      alias: '/movies',
      component: () => import('@/views/movie/Movie.vue'),
      meta: { title: 'Movie', requiresAuth: false }
    }
  ],

  // scroll behavior
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return to.hash
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// beforeEach
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router
