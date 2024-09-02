<template>
    <Card tag="RouterLink" v-for="item in dataCat" :key="item.id" :to="{path:`/store/categories/${item.params}`}" :is-row="true" class="card_cat"  :is-rounded="true" :is-pointer="true">
      <template #header>
        <div class="w-[120px] h-[90px] overflow-hidden">
          <Img :src="item.img" :alt="item.title" class="card_cat--img"/>
        </div>
      </template>
      <div class="body">
        <h3 class="title whitespace-nowrap capitalize text-black">
          {{ item.title }}
        </h3>
        <p class="number-prod"></p>
      </div>
    </Card>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue'
  import { string, number, bool } from 'vue-types'
  import Card from '@/components/base/Card.vue'
  import Img from '@/components/base/Img.vue'
  import { listCardCategories } from '@/data/listCardCategoriesStore.js'
  
  const { dataCat } = listCardCategories()
  </script>

  <style scoped>
    .card_cat {
        @apply   h-[90px] gap-[10px] bg-white hover:bg-blue-400 duration-500 
    }

    .card_cat--img {
        @apply w-full h-full object-cover transition-transform duration-700
    }

    .card_cat:hover .card_cat--img {
        @apply scale-150
    }
</style>
  