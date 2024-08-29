<template>
  <Row tag="ul" :is-no-wrap="true" class="w-full">
    <swiper
      :slides-per-view="3"
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
            <p class="subtitle ">
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
import Row from '@/components/base/Row.vue'
import Card from '@/components/base/Card.vue'
import Button from '@/components/base/Button.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { nanoid } from 'nanoid'

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
]
</script>

<style scoped>
.swiper--slide {
  @apply w-[40%]  min-w-[450px] 
  border border-blue-700 rounded-md  
  px-[20px] py-[15px]  hover:bg-blue-700
    duration-500 overflow-hidden duration-700 transition-all hover:shadow-sm hover:shadow-blue-600;
}

.cart--li {
  @apply h-full gap-[75px] justify-between
}

.title {
  @apply text-[45px] text-white uppercase
}

.subtitle {
  @apply text-white text-[35px] lg:text-[45px] uppercase
}

.btn--li {
  @apply capitalize text-white transition-all duration-1000
}

.swiper--slide:hover .btn--li {
  @apply scale-x-100 justify-between  translate-x-[160px]  
}
</style>
