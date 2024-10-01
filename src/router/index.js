import { createRouter, createWebHashHistory } from 'vue-router'

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
      redirect:'/resturant/home',
      components: {
        default:  () => import('@/views/resturant/Resturant.vue'),
        headerResturant: () => import('@/components/main/resturant/HeaderResturant.vue'),
      },
      meta: { title: 'Resturant', requiresAuth: false },
      children: [
        // default
        {
          path:'',
          name:'home-rest',
          component:() => import('@/views/resturant/child/HomeRest.vue')
        },
        {
          path:'/resturant/home',
          name:'home-rest',
          component: () => import('@/views/resturant/child/HomeRest.vue')
        },
        {
          path:'/resturant/about',
          name:'about-rest',
          component: () => import('@/views/resturant/child/AboutRest.vue')
        },
        {
          path:'/resturant/contact',
          name:'contact-rest',
          component: () => import('@/views/resturant/child/ContactRest.vue')
        },
        {
          path:'/resturant/menu',
          name:'menu-rest',
          component: () => import('@/views/resturant/child/MenuRest.vue')
        },
        {
          path:'/resturant/pages',
          name:'pages-rest',
          component: () => import('@/views/resturant/child/PagesRest.vue')
        },
        {
          path:'/resturant/categories',
          name:'categories-rest',
          component: () => import('@/views/resturant/child/pages/CategoriesRest.vue')
        },
        {
          path:'/resturant/country',
          name:'country-rest',
          component: () => import('@/views/resturant/child/pages/CountryRest.vue')
        },
        {
          path:'/resturant/search',
          name:'categories-rest',
          component: () => import('@/views/resturant/child/pages/SearchBoxRest.vue')
        },
        {
          path:'/resturant/detailmeal/:id',
          name:'detail-meal',
          component: () => import('@/views/resturant/child/DetailMeals.vue')
        },
        {
          path:'/resturant/category-meal/:name',
          name:'category-meal',
          component: () => import('@/views/resturant/child/EachCategory.vue')
        },
        {
          path:'/resturant/country-meal/:name',
          name:'country-meals',
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
