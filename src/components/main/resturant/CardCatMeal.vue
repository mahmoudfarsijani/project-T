<template>
  <Card
    v-if="meal"
    tag="RouterLink"
    :to="`/resturant/category-meal/${meal.strCategory}`"
    :is-pointer="true"
    class="gap-[20px] bg-slate-200 bg-opacity-55 pb-[10px] pt-[20px]"
    :is-rounded="true"
  >
    <template #header>
      <div class="w-full h-[150px]">
        <Img
          :src="meal.strCategoryThumb"
          :alt="meal.strCategory"
          class="w-full h-full object-cover"
        />
      </div>
    </template>
    <div class="body">
      <h2>
        {{ meal.strCategory }}
      </h2>
    </div>
  </Card>
</template>

<script setup>
import { defineProps } from 'vue'
import { string, number, shape, object } from 'vue-types'
import Card from '@/components/base/Card.vue'
import Img from '@/components/base/Img.vue'

const props = defineProps({
  meal: shape({
    idCategory: number(),
    strCategory: string(),
    strCategoryThumb: string(),
    strCategoryDescription: string(),
  })
})
</script>
