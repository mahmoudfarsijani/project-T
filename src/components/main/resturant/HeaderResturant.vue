<template>
  <header class="w-full flex flex-nowrap py-[20px] fixed top-0 items-center ">
    <Container class="flex flex-nowrap justify-between items-center">
      <label>
        <RouterLink to="/" class="text-[25px] uppercase font-Archivo text-white"> koppee </RouterLink>
      </label>
      <nav>
        <Row tag="ul" class="gap-[15px]">
          <li v-for="item in listNav" :key="item.id">
            <RouterLink :to="{ name: item.name }" class="list-item">
              {{ item.label }}
            </RouterLink>
          </li>
        </Row>
      </nav>
    </Container>
  </header>
</template>

<script setup>
import Row from '@/components/base/Row.vue'
import Container from '@/components/base/Container.vue'
import { nanoid } from 'nanoid'

const listNav = [
  {
    label: 'home',
    name: 'home-rest',
    id: nanoid(3)
  },
  {
    label: 'about',
    name: 'about-rest',
    id: nanoid(3)
  },
  {
    label: 'contact',
    name: 'contact-rest',
    id: nanoid(3)
  },
  {
    label: 'menu',
    name: 'menu-rest',
    id: nanoid(3)
  },
  {
    label: 'pages',
    name: 'pages-rest',
    id: nanoid(3)
  }
]
</script>


<style scoped>
  .list-item {
    @apply text-white capitalize
  }

  .list-item.active-nav {
    @apply text-slate-800
  }
</style>