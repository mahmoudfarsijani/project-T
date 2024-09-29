<template>
  <Card
    v-if="dataFinded"
    tag="RouterLink"
    :to="`/resturant/detailmeal/${dataFinded.idMeal}`"
    :is-row="true"
    class="gap-[10px] w-full py-[20px]"
    :is-pointer="true"
  >
    <template #header>
      <div class="w-[35px] h-[35px] rounded-full overflow-hidden">
        <img
          :src="dataFinded.strMealThumb"
          :alt="dataFinded.strMeal"
          class="w-full h-full object-cover"
        />
      </div>
    </template>
    <div class="body">
      <h3 class="title">
        {{ dataFinded.strMeal }}
      </h3>
    </div>
  </Card>
</template>

<script setup>
import Card from '@/components/base/Card.vue'
import Img from '@/components/base/Img.vue'
import { defineProps } from 'vue'
import { string, object, shape, array } from 'vue-types'

const props = defineProps({
  dataFinded: object({
    idMeal: string(),
    strMealThumb: string(),
    strMeal: string()
  })
})
</script>
