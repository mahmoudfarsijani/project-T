<template>
  <header class="w-full flex flex-nowrap py-[20px] relative top-0 items-center">
    <Container class="flex flex-nowrap  items-center ">
      <label class="flex-1">
        <RouterLink to="/" class="text-[25px] uppercase font-Archivo text-white">
          koppee
        </RouterLink>
      </label>
      <Button tag="button" v-if="!showMenu" :is-icon-only="true" icon="hamburger-right" @click="showHandler"/>
      <nav>
        <Row tag="ul" v-if="showMenu" class="gap-[15px]">
          <li v-for="item in listNav" :key="item.id">
            <RouterLink :to="{ name: item.name }" class="list-item">
              {{ item.label }}
            </RouterLink>
          </li>
        </Row>
       <div v-if="!showMenu" class="flex  absolute w-full h-screen bg-lime-500 top-0 left-0 right-0 z-[9999] transition-transform duration-700" :class="{'translate-x-[-4000px]' : isShow,'translate-x-[-4000px]' : !isShow}" >
        <Row tag="ul" :is-col="true">
          <li v-for="item in listNav" :key="item.id" @click="showHandler">
            <RouterLink :to="{ name: item.name }" class="list-item">
              {{ item.label }}
            </RouterLink>
          </li>
        </Row>
        <Button tag="button" v-if="!showMenu" :is-icon-only="true" icon="close" @click="showHandler"/>
       </div>
      </nav>
    </Container>
  </header>
</template>

<script setup>
import {ref,onMounted,onUnmounted} from 'vue'
import Row from '@/components/base/Row.vue'
import Button from '@/components/base/Button.vue'
import Container from '@/components/base/Container.vue'
import {useEventListener} from '@vueuse/core'
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

const showMenu = ref(null)
const sizeHandler = () => {
  if (window.innerWidth < 1120) {
    showMenu.value = false
  } else {
    showMenu.value = true
  }
}

useEventListener(window,'resize',sizeHandler)

onMounted(() => {
  sizeHandler()
  useEventListener(window,'resize',sizeHandler)
})

onUnmounted(() => {
  useEventListener(window,'resize',sizeHandler)
  delete   useEventListener(window,'resize',sizeHandler)
})

const isShow = ref(false)
const showHandler = () => {
  isShow.value = !isShow.value
}
</script>

<style scoped>
.list-item {
  @apply text-white capitalize;
}

.list-item.active-nav {
  @apply text-slate-800;
}
</style>
