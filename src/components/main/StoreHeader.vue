<template>
  <header class="w-full flex flex-col border-b-2 border-blue-500 pb-[10px]">
    <!-- top -->
    <div class="header-top w-full flex flex-nowrap justify-between  items-center py-[20px] px-[20px]">
      <RouterLink :to="{name:'home'}" class="font-Archivo text-[25px] uppercase text-white dark:text-black"> red store </RouterLink>
      <div class="flex-1 flex justify-center">
        <input type="text" class="px-[10px] py-[8px] w-[45%]"/>
      </div>
      <div class="flex flex-col items-start">
        <span class="text-white capitalize font-kanit dark:text-black">customer service</span>
        <a href="tel:0020229823" class="text-white font-kanit dark:text-black">+989123569847</a>
      </div>
    </div>
    <!-- bottom -->
    <nav class=" w-full flex flex-nowrap justify-between py-[10px] px-[20px]">
      <div class="">
        <Button :is-icon-only="false" icon="arrow-bottom" class="capitalize text-white dark:text-black"> categories </Button>
      </div>
      <ul class="flex flex-nowrap flex-1 justify-center gap-[20px]">
        <li v-for="item in routeNames" :key="item.id">
          <RouterLink :to="`${item.route}`" class="capitalize text-black nav-item font-kanit ">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      <div class="box-btn flex flex-nowrap gap-[10px]">
        <Button :is-icon-only="true" icon="fill-heart" />
        <Button :is-icon-only="true" icon="basket" />
      </div>
    </nav>
  </header>
</template>

<script setup>
import Row from '@/components/base/Row.vue'
import AppLink from '@/components/base/AppLink.vue'
import Button from '@/components/base/Button.vue'
import { nanoid } from 'nanoid'

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
    name: 'shop detail',
    route: '/store/detail-shop',
    id: nanoid(3)
  },
  {
    name: 'contact',
    route: '/store/contact',
    id: nanoid(3)
  }
]
</script>


<style scoped>
  .nav-item {
    @apply text-white hover:text-orange-500 dark:text-black
  }

  .nav-item.active-nav {
    @apply text-yellow-500
  }
</style>
