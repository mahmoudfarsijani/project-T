<template>
  <Container tag="section">
    <div class="box-wrapper flex flex-row justify-between flex-wrap" :class="{'gap-[20px]': isMobile}">
      <div class="img-sec-one h-full w-[100%] lg:w-[70%]">
        <CardLayout
          v-for="item in dataMain"
          :key="item.id"
          :src="item.img"
          tag="div"
          :is-rounded="true"
          class="w-full h-[500px]"
        >
          <template #title-layout>
            <div class="flex flex-col items-center gap-[10px]">
              <h1 class="text-center font-Matemasie text-[45px]">
                {{ item.title }}
              </h1>
              <p class="text-center font-suns text-[14px]">
                {{ item.subtitle }}
              </p>
              <Button
                tag="RouterLink"
                to="/store/shop"
                :is-icon-only="false"
                :is-primary="true"
                :is-rounded-sm="true"
                class="capitalize"
              >
                shop now
              </Button>
            </div>
          </template>
        </CardLayout>
      </div>
      <div class="image-sec-two flex  smm:flex-row lg:flex-col gap-[20px] w-[100%] lg:w-[28%] ">
        <CardLayout
          v-for="item in dataCard"
          :key="item.id"
          :src="item.img"
          tag="div"
          :is-rounded="true"
          class="w-full h-[239px]"
        >
          <template #title-layout>
            <div class="flex flex-col items-center gap-[10px]">
              <h1 class="text-center font-Matemasie text-[35px]">
                {{ item.title }}
              </h1>
              <p class="text-center font-suns text-[14px]">
                {{ item.subtitle }}
              </p>
              <Button
                :is-icon-only="false"
                :is-primary="true"
                :is-rounded-sm="true"
                class="capitalize"
              >
                shop now
              </Button>
            </div>
          </template>
        </CardLayout>
      </div>
    </div>
    <div class="box-feature w-full mt-[60px]">
      <Row v-if="dataFeature" tag="ul" class="justify-between" :is-no-wrap="true" :is-col="isMobile ? true : false" :class="{'gap-[20px]': isMobile}">
        <CardFeatures />
      </Row>
    </div>
  </Container>
</template>

<script setup>
import {ref, onMounted,onUnmounted } from 'vue'
import Container from '@/components/base/Container.vue'
import CardLayout from '@/components/base/CardLayout.vue'
import Button from '@/components/base/Button.vue'
import Row from '@/components/base/Row.vue'
import CardFeatures from '@/components/main/store/home/CardFeatures.vue'
import { listDataLayout } from '@/data/listCardLayoutStoreHome.js'
import { useEventListener } from '@vueuse/core'
import { listFeature } from '@/data/listCardFeaturesStore.js'





const { dataMain, dataCard } = listDataLayout();
const { dataFeature } = listFeature()

const isMobile = ref(false)

const resizeHandler = () => {
 isMobile.value =  window.innerWidth < '1024'
}

onMounted(() => {
  resizeHandler()
  useEventListener(window,'resize',resizeHandler)
})

onUnmounted(() => {
  useEventListener(window,'resize',resizeHandler)
  delete
  useEventListener(window,'resize',resizeHandler)
})
</script>

<style scoped></style>
