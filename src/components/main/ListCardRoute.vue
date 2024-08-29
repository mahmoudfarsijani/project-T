<template>
  <Row tag="ul" :is-no-wrap="true" class="w-full">
    <swiper
      :slides-per-view="3"
      :space-between="40"
      @swiper="onSwiper"
      loop="true"
      @slideChange="onSlideChange"
    >
      <SwiperSlide v-for="item in dataCards" :key="item.id">
        <Card
          tag="RouterLink"
          :to="{ name: `${item.router}` }"
          :is-router="true"
          class="w-[40%] h-[450px] min-w-[450px] border border-green-400 rounded-md gap-[75px] px-[20px] py-[15px] hover:bg-green-400 duration-700 "
        >
          <template #header>
            <h2 class="title text-[45px] text-white uppercase">
              {{ item.name }}
            </h2>
          </template>
          <div class="body">
            <p class="subtitle text-white text-[50px] uppercase">
              {{ item.title }}
            </p>
          </div>
          <template #footer>
            <Button
              tag="RouterLink"
              :to="{name:`${item.router}`}"
              :is-icon-only="false"
              icon="arrow-right"
              class="capitalize text-white"
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
