<template>
  <header class="header" :class="{ 'scroll-show': isScroll }">
    <Container>
      <!-- top -->
      <div class="header-top w-full">
        <div class="box-logos" :class="{ 'w-full': isMobile }">
          <Button
            v-if="isMobile"
            :is-icon-only="true"
            icon="hamburger"
            @click="isShowMenu = !isShowMenu"
          />
          <RouterLink :to="{ name: 'home' }" class="logo"> red store </RouterLink>
        </div>
        <div v-if="!isMobile" class="box-search">
          <InputBox
            icons="search"
            :is-absolute="true"
            :is-bigged="true"
            :is-rounded="true"
            placeholder="Search"
          />
        </div>
        <div v-if="!isMobile" class="box-servise">
          <span class="title-service">customer service</span>
          <a href="tel:0020229823" class="number-service">+989123569847</a>
        </div>
      </div>
      <!-- bottom -->
      <nav class="nav">
        <div>
          <FilterCardCatStore class="w-full" />
        </div>
        <!-- desktop -->
        <ul v-if="!isMobile" class="list-routes">
          <li v-for="item in routeNames" :key="item.id">
            <RouterLink :to="`${item.route}`" class="item-list">
              {{ item.name }}
            </RouterLink>
          </li>
        </ul>
        <!-- mobile -->
        <div v-else class="nav-mobile" :class="{ 'show-menu-mobile': isShowMenu }">
          <div class="box-list-mobile">
            <Button
              :is-icon-only="true"
              icon="close"
              @click="isShowMenu = !isShowMenu"
              class="self-start"
            />
            <ul class="list-mobile">
              <li v-for="item in routeNames" :key="item.id">
                <RouterLink
                  :to="`${item.route}`"
                  class="item-list"
                  @click="isShowMenu = !isShowMenu"
                >
                  {{ item.name }}
                </RouterLink>
              </li>
            </ul>
          </div>
        </div>
        <div class="box-btn">
          <div class="flex flex-nowrap items-center">
            <Button tag="RouterLink"  to="/store/fav-products" :is-icon-only="true" icon="fill-heart" />
            <label  class="text-[13px] bg-blue-300 text-black px-[6px] rounded-full border-black border-[1px]">
              {{ favBasketLength.lengthBasketFav }}
            </label>
          </div>
          <Button tag="RouterLink" to="/store/basket-products" :is-icon-only="true" icon="basket" />
        </div>
      </nav>
    </Container>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useEventListener } from '@vueuse/core'
import { nanoid } from 'nanoid'

import Row from '@/components/base/Row.vue'
import AppLink from '@/components/base/AppLink.vue'
import Button from '@/components/base/Button.vue'
import FilterCardCatStore from '@/components/main/store/FilterCardCatStore.vue'
import Container from '@/components/base/Container.vue'
import InputBox from '@/components/main/store/InputBox.vue'
import {useFavBasketStore} from '@/stores/favBasketStore.js'

// datas fro route-names and title nav
const routeNames = [
  {
    name: 'home',
    route: '/store/home',
    id: nanoid(3)
  },
  {
    name: 'shop',
    route: '/store/shop',
    id: nanoid(3)
  },
  {
    name: 'contact',
    route: '/store/contact',
    id: nanoid(3)
  }
]

// variables
const isMobile = ref(false)
const isShowMenu = ref(false)
const isScroll = ref(false)

const resizeHandler = () => {
  isMobile.value = window.innerWidth < '760'
}
const scrollHandler = () => {
  if (document.documentElement.scrollTop > 2) {
    return (isScroll.value = true)
  }
  return (isScroll.value = false)
}

// data store
const favBasketLength = useFavBasketStore()

onMounted(() => {
  scrollHandler(), useEventListener(window, 'scroll', scrollHandler)
})
onUnmounted(() => {
  useEventListener(window, 'scroll', scrollHandler)
  delete useEventListener(window, 'scroll', scrollHandler)
})
onMounted(() => {
  resizeHandler()
  useEventListener(window, 'resize', resizeHandler)
})

onUnmounted(() => {
  useEventListener(window, 'resize', resizeHandler)
  delete useEventListener(window, 'resize', resizeHandler)
})
</script>

<style scoped>
.header {
  @apply w-full flex fixed top-0 flex-col  transition-all duration-700 z-[999];
}
.scroll-show {
  @apply backdrop-blur-md bg-white/10;
}
.box-logos {
  @apply flex gap-[10px] flex-nowrap items-center justify-between;
}
.header-top {
  @apply w-full flex flex-nowrap justify-between  items-center py-[20px];
}
.logo {
  @apply font-Archivo text-[20px] md:text-[25px] uppercase text-white dark:text-black;
}
.box-search {
  @apply flex-1 flex justify-center items-center h-[38px];
}
.input-search {
  @apply px-[10px] py-[5px] w-[50%] outline-none text-black rounded-l-md text-[20px];
}
.bt-search {
  @apply bg-white h-full py-[20px] justify-center items-center rounded-r-md;
}
.box-servise {
  @apply flex flex-col items-end;
}
.title-service {
  @apply text-white capitalize font-kanit dark:text-black smm:text-[13px] md:text-[15px];
}
.number-service {
  @apply text-white font-kanit dark:text-black smm:text-[13px] md:text-[15px];
}
.nav {
  @apply w-full flex flex-nowrap justify-between items-center py-[10px];
}
.nav-item {
  @apply text-white hover:text-orange-500 dark:text-black;
}

.nav-item.active-nav {
  @apply text-yellow-500;
}

.list-routes {
  @apply flex flex-nowrap flex-1 justify-center gap-[30px];
}
.item-list {
  @apply capitalize text-black nav-item font-kanit;
}
.box-btn {
  @apply flex flex-nowrap gap-[35px];
}
.nav-mobile {
  @apply h-screen bg-gray-800 absolute top-0 right-0 left-0 w-0 
     overflow-hidden duration-700 dark:bg-gray-200 z-[1111];
}
.show-menu-mobile {
  @apply w-screen origin-left;
}

.list-mobile {
  @apply flex flex-col justify-center items-center gap-[10px];
}

.box-list-mobile {
  @apply w-full h-full flex flex-col gap-[50px] px-[20px] py-[25px];
}
</style>
