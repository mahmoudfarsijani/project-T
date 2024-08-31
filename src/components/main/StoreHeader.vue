<template>
  <header class="header">
    <!-- top -->
    <div class="header-top">
      <RouterLink :to="{ name: 'home' }" class="logo"> red store </RouterLink>
      <div class="box-search">
        <input type="text" class="input-search" placeholder="Search" />
        <Button :is-icon-only="true" icon="search" class="bt-search" />
      </div>
      <div class="box-servise">
        <span class="title-service">customer service</span>
        <a href="tel:0020229823" class="number-service">+989123569847</a>
      </div>
    </div>
    <!-- bottom -->
    <nav class="nav">
      <div>
        <FilterCardCatStore class="w-full" />
      </div>
      <ul class="list-routes">
        <li v-for="item in routeNames" :key="item.id">
          <RouterLink :to="`${item.route}`" class="item-list">
            {{ item.name }}
          </RouterLink>
        </li>
      </ul>
      <div class="box-btn">
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
import FilterCardCatStore from '@/components/main/FilterCardCatStore.vue'
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
.header {
  @apply w-full flex flex-col border-b-2 border-blue-500;
}
.header-top {
  @apply w-full flex flex-nowrap justify-between  items-center py-[20px] px-[20px];
}
.logo {
  @apply font-Archivo text-[25px] uppercase text-white dark:text-black;
}
.box-search {
  @apply flex-1 flex justify-center items-center h-[38px];
}
.input-search {
  @apply px-[10px] py-[5px] w-[45%] outline-none text-black rounded-l-md text-[20px];
}
.bt-search {
  @apply bg-white h-full py-[20px] justify-center items-center rounded-r-md;
}
.box-servise {
  @apply flex flex-col items-start;
}
.title-service {
  @apply text-white capitalize font-kanit dark:text-black;
}
.number-service {
  @apply text-white font-kanit dark:text-black;
}
.nav {
  @apply w-full flex flex-nowrap justify-between items-center py-[10px] px-[20px];
}
.nav-item {
  @apply text-white hover:text-orange-500 dark:text-black;
}

.nav-item.active-nav {
  @apply text-yellow-500;
}

.list-routes {
  @apply flex flex-nowrap flex-1 justify-center gap-[20px];
}
.item-list {
  @apply capitalize text-black nav-item font-kanit;
}
.box-btn {
  @apply flex flex-nowrap gap-[10px];
}
</style>
