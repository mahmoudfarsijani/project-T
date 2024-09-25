<template>
  <header class="w-full flex flex-nowrap bg-purple-600 py-[15px]">
    <Container class="flex flex-nowrap justify-between">
      <label>
        <RouterLink to="/resturant"> koppee </RouterLink>
      </label>
      <nav>
        <Row tag="ul" class="gap-[10px]">
          <li v-for="item in listNav" :key="item.id">
            <RouterLink :to="{ name: item.name }" class="text-gray-400 dark:text-white">
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
