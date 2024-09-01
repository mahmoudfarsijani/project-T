<template>
  <Row tag="ul" :is-no-wrap="true" class="w-full">
    <swiper
      :slides-per-view="isMobile ? 1 : 3"
      :space-between="40"
      @swiper="onSwiper"
      loop="true"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="item in dataCards" :key="item.id" class="swiper--slide">
        <Card tag="li" class="cart--li">
          <template #header>
            <h2 class="title ">
              {{ item.name }}
            </h2>
          </template>
          <div class="body">
            <p class="subtitle">
              {{ item.title }}
            </p>
          </div>
          <template #footer>
            <Button
              tag="RouterLink"
              :to="{ name: `${item.router}` }"
              :is-icon-only="false"
              icon="arrow-right"
              class="btn--li"
              :class="{'btn--li-mobile':isMobile}"
            >
              go to page
            </Button>
          </template>
        </Card>
      </SwiperSlide>
    </swiper>
  </Row>
</template>

<script setup>


import { ref,onMounted,onUnmounted } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { nanoid } from 'nanoid'
import { useEventListener } from '@vueuse/core'


import Row from '@/components/base/Row.vue'
import Card from '@/components/base/Card.vue'
import Button from '@/components/base/Button.vue'
import 'swiper/css'


 

// variable 
const isMobile = ref(false);

const dataCards = [
  {
    id: nanoid(3),
    name: 'store',
    title: 'products sale for you!',
    router: 'store'
  },
  {
    id: nanoid(3),
    name: 'resturant',
    title: 'yumi yumi for best people',
    router: 'resturant'
  },
  {
    id: nanoid(3),
    name: 'movie',
    title: 'Watch movies at any time',
    router: 'movie'
  },
  {
    id: nanoid(3),
    name: 'weather',
    title: 'You can check the reputation weather',
    router: 'weather'
  },
  {
    id: nanoid(3),
    name: 'auth',
    title: 'Enter your dashboard',
    router: 'auth'
  }
];


//  custome hook directive
const changeValue = () => {
  isMobile.value = window.innerWidth < '800';
}
onMounted(() => {
  changeValue()
  useEventListener(window,'resize',changeValue)
})
onUnmounted(() => {
  useEventListener(window,'resize',changeValue)
  delete 
  useEventListener(window,'resize',changeValue)
})
</script>

<style scoped>
.swiper--slide {
  @apply w-[40%]  min-w-[350px] 
  border border-blue-700 rounded-md  
  px-[20px] py-[15px]  hover:bg-blue-700
  overflow-hidden duration-700 transition-all hover:shadow-sm
   hover:shadow-blue-600 dark:border-blue-400 ;
}

.swiper--slide:hover {
  @apply dark:bg-blue-400
}

.cart--li {
  @apply h-full gap-[75px] justify-between
}

.title {
  @apply text-[45px] text-white uppercase font-Archivo  duration-700 dark:text-gray-900
}

.subtitle {
  @apply text-white dark:text-gray-900 text-[35px] lg:text-[40px] uppercase font-suns font-medium
}

.btn--li,.btn--li-mobile {
  @apply capitalize text-white dark:text-gray-900 transition-all duration-1000  w-[25%] font-suns
}

.swiper--slide:hover .btn--li {
  @apply scale-x-100   translate-x-[160px]   
}

.swiper--slide:hover .btn--li-mobile {
  @apply scale-x-100   translate-x-[30px] 
}

.swiper--slide:hover .title {
  @apply text-black dark:text-white
}

</style>
