<template>
  <Container tag="section">
    <div class="box-wrapper flex flex-row justify-between ">
      <div class="img-sec-one h-full w-[70%]">
        <CardLayout
          v-for="item in dataMain"
          :key="item.id"
          :src="item.img"
          tag="div"
          :is-rounded="true"
          class="w-full h-[420px]"

        >
          <template #title-layout>
            <div class="flex flex-col items-center gap-[10px]">
              <h1 class="text-center font-Matemasie text-[45px]">
                {{ item.title }}
              </h1>
              <p class="text-center font-suns text-[14px]">
                {{ item.subtitle }}
              </p>
              <Button tag="RouterLink" to="/store/shop" :is-icon-only="false" :is-primary="true" :is-rounded-sm="true" class="capitalize"> shop now </Button>
            </div>
          </template>
        </CardLayout>
      </div>
      <div class="image-sec-two flex flex-col gap-[20px] w-[28%]">
          <CardLayout
            v-for="item in dataCard"
            :key="item.id"
            :src="item.img"
            tag="div"
            :is-rounded="true"
            class="w-full h-[200px]"
          >
            <template #title-layout>
              <div class="flex flex-col items-center gap-[10px]">
                <h1 class="text-center font-Matemasie text-[35px]">
                  {{ item.title }}
                </h1>
                <p class="text-center font-suns text-[14px]">
                  {{ item.subtitle }}
                </p>
                <Button :is-icon-only="false" :is-primary="true" :is-rounded-sm="true" class="capitalize"> shop now </Button>
              </div>
            </template>
          </CardLayout>
      </div>
    </div>
  </Container>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import CardLayout from '@/components/base/CardLayout.vue'
import Button from '@/components/base/Button.vue'
import { nanoid } from 'nanoid'

const dataMain = [
  {
    title: 'kids fashion',
    subtitle:
      'Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam',
    id: nanoid(3),
    img: '/img/three-store.jpg'
  }
]

const dataCard = [
  {
    title: 'Save 20%',
    subtitle: 'Special Offer',
    id: nanoid(3),
    img: '/img/two-store.jpg'
  },
  {
    title: 'Save 20%',
    subtitle: 'Special Offer',
    id: nanoid(3),
    img: '/img/one-store-home.jpg'
  }
]
</script>

<style scoped>

</style>
