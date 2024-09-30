<template>
  <Card
    v-if="meal"
    tag="RouterLink"
    :to="`/resturant/detailmeal/${meal.idMeal}`"
    :is-pointer="true"
    class="cart__cat"
    :is-rounded="true"
  >
    <template #header>
      <div class="w-full h-[150px] rounded-full overflow-hidden">
        <Img
          :src="meal.strMealThumb"
          :alt="meal.strMeal"
          class="w-full h-full object-cover"
        />
      </div>
    </template>
    <div class="body">
      <h2 class="text-gray-200 text-[15px] font-light   text-center">
        {{ meal.strMeal }}
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
    strMeal: string(),
    strMealThumb: string(),
    idMeal: number(),
  })
})
</script>

<style scoped>

    .cart__cat {
        @apply gap-[20px]    bg-cyan-950 bg-opacity-55 duration-1000   pb-[10px] pt-[20px]
        
    }

   
</style>
