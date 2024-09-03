<template>
  <Container class="mt-[90px]">
    <div class="box_wrapper flex flex-wrap justify-between gap-[20px]">
      <CardLayout tag="div" v-for="item in dataSecFour" :key="item.id" :src="item.img" class="w-full lg:w-[49%] h-[300px]" :is-rounded="true">
        <template #title-layout>
            <div class="flex flex-col items-center gap-[10px]">
              <h1 class="text-center font-Matemasie text-[45px]">
                {{ item.off }}
              </h1>
              <p class="text-center font-suns text-[14px]">
                {{ item.title }}
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
  </Container>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import CardLayout from '@/components/base/CardLayout.vue'
import Button from '@/components/base/Button.vue';
import { listDataSecFour } from '@/data/listCardSecFour.js'

const { dataSecFour } = listDataSecFour()
</script>
