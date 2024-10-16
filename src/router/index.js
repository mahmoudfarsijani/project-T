import { createRouter, createWebHashHistory } from 'vue-router'
import { auth, onAuthStateChanged } from '@/plugins/firebase.js'

const router = createRouter({
  //  history
  history: createWebHashHistory(),
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
          component: () => import('@/views/store/child/ProductDetail.vue')
          // props: (route) => ({ ...route.params.id, id: parseInt(route.params.id )})
        },
        {
          name: 'fav-products',
          path: '/store/fav-products',
          component: () => import('@/views/store/child/FavProducts.vue')
        },
        {
          name: 'basket-products',
          path: '/store/basket-products',
          component: () => import('@/views/store/child/BasketProducts.vue')
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
      redirect: '/resturant/home',
      components: {
        default: () => import('@/views/resturant/Resturant.vue'),
        headerResturant: () => import('@/components/main/resturant/HeaderResturant.vue')
      },
      meta: { title: 'Resturant', requiresAuth: false },
      children: [
        // default
        {
          path: '',
          name: 'home-rest',
          component: () => import('@/views/resturant/child/HomeRest.vue')
        },
        {
          path: '/resturant/home',
          name: 'home-rest',
          component: () => import('@/views/resturant/child/HomeRest.vue')
        },
        {
          path: '/resturant/about',
          name: 'about-rest',
          component: () => import('@/views/resturant/child/AboutRest.vue')
        },
        {
          path: '/resturant/contact',
          name: 'contact-rest',
          component: () => import('@/views/resturant/child/ContactRest.vue')
        },
        {
          path: '/resturant/categories',
          name: 'categories-rest',
          component: () => import('@/views/resturant/child/pages/CategoriesRest.vue')
        },
        {
          path: '/resturant/country',
          name: 'country-rest',
          component: () => import('@/views/resturant/child/pages/CountryRest.vue')
        },
        {
          path: '/resturant/search',
          name: 'categories-rest',
          component: () => import('@/views/resturant/child/pages/SearchBoxRest.vue')
        },
        {
          path: '/resturant/detailmeal/:id',
          name: 'detail-meal',
          component: () => import('@/views/resturant/child/DetailMeals.vue')
        },
        {
          path: '/resturant/category-meal/:name',
          name: 'category-meal',
          component: () => import('@/views/resturant/child/EachCategory.vue')
        },
        {
          path: '/resturant/country-meal/:name',
          name: 'country-meals',
          component: () => import('@/views/resturant/child/CountryMeals.vue')
        }
      ]
    },
    {
      path: '/movie',
      name: 'movie',
      alias: '/movies',
      component: () => import('@/views/movie/Movie.vue'),
      meta: { title: 'Movie', requiresAuth: false }
    },
    {
      name: 'detail-movie',
      path: '/detail-movie/:id',
      component: () => import('@/views/movie/child/DetailMovie.vue'),
      meta: { title: 'detail-movie', requiresAuth: false }
    },
    {
      name: 'login',
      path: '/login',
      component: () => import('@/views/auth/child/Login.vue'),
      meta: { title: 'login', requiresAuth: false }
    },
    {
      name: 'sign-up',
      path: '/signup',
      component: () => import('@/views/auth/child/SignUp.vue'),
      meta: { title: 'sign up', requiresAuth: false }
    },
    {
      name: 'dashboard',
      path: '/dashboard',
      alias: '/dashboards',
      redirect:'/dashboard/home',
      components: {
        default: () => import('@/views/auth/child/Dashboard.vue'),
        dashboard: () => import('@/components/main/auth/DashboardNav.vue')
      },
      meta: { title: 'dashboard', requiresAuth: false },
      children: [
        {
          path:'',
          name:'dashboard-home',
          component: () => import('@/views/auth/child/DashboardHome.vue')
        },
        {
          name:'dashboard-home',
          path:'/dashboard/home',
          component: () => import('@/views/auth/child/DashboardHome.vue')
        },
        {
          name:'dashboard-pages',
          path:'/dashboard/pages',
          component: () => import('@/views/auth/child/DashboardPages.vue')
        },
        {
          name:'dashboard-chat',
          path:'/dashboard/chat',
          component: () => import('@/views/auth/child/DashboardChat.vue')
        },
        {
          name:'dashboard-task',
          path:'/dashboard/task',
          component: () => import('@/views/auth/child/DashboardTask.vue')
        },
        {
          name:'dashboard-mail',
          path:'/dashboard/mail',
          component: () => import('@/views/auth/child/DashboardMail.vue')
        },
        {
          name:'dashboard-auth',
          path:'/dashboard/auth',
          component: () => import('@/views/auth/child/DashboardAuth.vue')
        },
      ]
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

// current user
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        unsubscribe()
        resolve(user)
      },
      reject
    )
  })
}

// beforeEach
router.beforeEach(async (to, from, next) => {
  if (to.meta.title) {
    document.title = await to.meta.title
  }

  const isAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (isAuth) {
    const user = await getCurrentUser()
    if (!user) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
