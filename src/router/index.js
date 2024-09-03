import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  //  history
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes
  routes: [
    {
      path: '/',
      name: 'home',
      alias: '/home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Home', requiresAuth: false }
    },
    {
      path: '/store',
      name: 'store',
      alias: '/stores',
      redirect: '/store/home',
      components: {
        default: () => import('@/views/store/Store.vue'),
        headerStore: () => import('@/components/main/store/StoreHeader.vue'),
        footerStore: () => import('@/components/main/store/StoreFooter.vue')
      },
      meta: { title: 'Store Market', requiresAuth: false },
      children: [
        // پیش فرض
        {
          path: '',
          name: 'home-store',
          component: () => import('@/views/store/child/HomeStore.vue')
        },
        {
          path: '/store/home',
          name: 'home-store',
          component: () => import('@/views/store/child/HomeStore.vue')
        },
        {
          name: 'shop-store',
          path: '/store/shop',
          component: () => import('@/views/store/child/ShopStore.vue')
        },
        {
          name: 'detail-shop-store',
          path: '/store/detail-shop',
          component: () => import('@/views/store/child/DetailShopStore.vue')
        },
        {
          name: 'contact-store',
          path: '/store/contact',
          component: () => import('@/views/store/child/ContactStore.vue')
        },
        {
          name: 'categories-store',
          path: '/store/categories/:categorie',
          component: () => import('@/views/store/child/CategorieStore.vue')
        },
        {
          name: 'product-detail',
          path: '/store/product-detail/:id',
          component: () => import('@/views/store/child/ProductDetail.vue'),
          // props: (route) => ({ ...route.params.id, id: parseInt(route.params.id )})
        }
      ]
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
    },
    {
      name: '404',
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue')
    }
  ],
  // link active class
  linkActiveClass: 'active-nav',

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
