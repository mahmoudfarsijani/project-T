<template>
  <header
    class="w-full flex flex-nowrap py-[20px] smm:fixed lg:fixed top-0 items-cente transition-all duration-700 z-[998]"
    :class="{ 'bg-black ': iShowBack }"
  >
    <Container class="flex flex-nowrap items-center">
      <label class="flex-1">
        <RouterLink to="/" class="text-[25px] uppercase font-Archivo text-white bg-transparent">
          koppee
        </RouterLink>
      </label>
      <Button
        tag="button"
        v-if="!showMenu"
        :is-icon-only="true"
        icon="hamburger-right"
        @click="showHandler"
      />
      <nav>
        <Row tag="ul" v-if="showMenu" class="gap-[15px] items-center">
          <li v-for="item in listNav" :key="item.id">
            <RouterLink :to="{ name: item.name }" class="list-item">
              {{ item.label }}
            </RouterLink>
          </li>
          <li class="list-item relative" ref="dropdownCont">
            <Button :is-icon-only="false" icon="arrow-bottom" @click.prevent="showDropDown">
              Pages
            </Button>
            <div
              v-show="isDropDown"
              class="dropdown w-[150px] absolute flex flex-col gap-[10px] bg-cyan-900 bg-opacity-55 right-0 top-[60px] rounded-md overflow-hidden duration-700 transition-all p-[10px]"
            >
              <li v-for="item in routePages" :key="item.id">
                <RouterLink
                  :to="`${item.route}`"
                  class="capitalize"
                  @click="isDropDown = !isDropDown"
                >
                  {{ item.label }}
                </RouterLink>
              </li>
            </div>
          </li>
        </Row>
        <div
          v-if="!showMenu"
          class="flex absolute w-full h-screen bg-cyan-950 top-0 left-0 right-0 z-[9999] justify-center items-center transition-transform duration-700"
          :class="{ 'translate-x-[-4000px]': isShow, 'translate-x-[-4000px]': !isShow }"
        >
          <Row tag="ul" :is-col="true" class="items-center gap-[15px]">
            <li v-for="item in listNav" :key="item.id" @click="showHandler">
              <RouterLink :to="{ name: item.name }" class="list-item">
                {{ item.label }}
              </RouterLink>
            </li>
            <li class="list-item relative  mt-[-10px]" ref="dropdownCont">
              <Button :is-icon-only="false" icon="arrow-right" @click.prevent="showDropDown">
                Pages
              </Button>
              <div
                v-show="isDropDown"
                class="dropdown w-[150px] absolute flex flex-col items-center gap-[10px]   right-[-120px] top-[0px] rounded-md overflow-hidden duration-700 transition-all p-[10px]"
              >
                <li v-for="item in routePages" :key="item.id">
                  <RouterLink
                    :to="`${item.route}`"
                    class="capitalize"
                    @click="isShow = !isShow"
                  >
                    {{ item.label }}
                  </RouterLink>
                </li>
              </div>
            </li>
          </Row>
          <Button
            tag="button"
            v-if="!showMenu"
            :is-icon-only="true"
            icon="close"
            @click="showHandler"
            class="absolute top-[23px] right-[19px]"
          />
        </div>
      </nav>
    </Container>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import Row from '@/components/base/Row.vue'
import Button from '@/components/base/Button.vue'
import Container from '@/components/base/Container.vue'
import { useEventListener } from '@vueuse/core'
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
  }
]

const routePages = [
  {
    label: 'categories',
    route: '/resturant/categories',
    id: nanoid(3)
  },
  {
    label: 'search',
    route: '/resturant/search',
    id: nanoid(3)
  },
  {
    label: 'country',
    route: '/resturant/country',
    id: nanoid(3)
  }
]

const showMenu = ref(null)
const iShowBack = ref(null)

const sizeHandler = () => {
  if (window.innerWidth < 1120) {
    showMenu.value = false
  } else {
    showMenu.value = true
  }
}

const backgroundHandler = () => {
  if (document.documentElement.scrollTop > 5) {
    iShowBack.value = true
  } else {
    iShowBack.value = false
  }
}

useEventListener(window, 'resize', sizeHandler)
useEventListener(window, 'scroll', backgroundHandler)

onMounted(() => {
  sizeHandler()
  useEventListener(window, 'resize', sizeHandler)
})

onMounted(() => {
  backgroundHandler()
  useEventListener(window, 'scroll', backgroundHandler)
})

onUnmounted(() => {
  useEventListener(window, 'resize', sizeHandler)
  delete useEventListener(window, 'resize', sizeHandler)
})

onUnmounted(() => {
  useEventListener(window, 'scroll', backgroundHandler)
  delete useEventListener(window, 'scroll', backgroundHandler)
})

const isShow = ref(false)
const showHandler = () => {
  isShow.value = !isShow.value
}

const isDropDown = ref(false)
const dropdownCont = ref(null)
const showDropDown = () => {
  isDropDown.value = !isDropDown.value
}

const HandleOutSide = (event) => {
  if (dropdownCont.value && !dropdownCont.value.contains(event.target)) {
    isDropDown.value = false
  }
}

onMounted(() => {
  useEventListener(document, 'click', HandleOutSide)
})

onUnmounted(() => {
  useEventListener(document, 'click', HandleOutSide)
  delete useEventListener(document, 'click', HandleOutSide)
})
</script>

<style scoped>
.list-item {
  @apply text-white capitalize;
}

.list-item.active-nav {
  @apply text-green-500;
}
</style>
