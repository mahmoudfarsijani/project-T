<template>
  <div
    v-if="detail"
    class="w-full flex smm:flex-wrap lg:flex-nowrap items-center gap-[30px] smm:justify-center lg:justify-start"
  >
    <div class="smm:w-[250px] smm:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden">
      <Img :src="detail.strMealThumb" :alt="detail.strMeal" class="w-full h-full object-cover" />
    </div>
    <div class="smm:w-[100%] lg:w-[55%] flex flex-col gap-[10px]">
      <h1 class="title text-[35px] font-kanit text-white">
        {{ detail.strMeal }}
      </h1>
      <p class="subtitle font-sans text-[14px] text-justify text-white">
        {{ detail.strInstructions }}
      </p>
      <div class="flex flex-col gap-[5px]">
        <span class="capitalize font-light text-white"> category: {{ detail.strCategory }} </span>
        <span class="capitalize font-light text-white"> area: {{ detail.strArea }} </span>
        <span v-if="detail.strDrinkAlternate" class="capitalize font-light text-white">
          drink: {{ detail.strDrinkAlternate }}
        </span>
        <span v-if="detail.strSource" class="capitalize font-light text-white">
          source recepies: <a :href="`${detail.strSource}`">click</a>
        </span>
        <span v-if="detail.strYoutube" class="capitalize font-light text-white">
          source youtube: <a :href="`${detail.strYoutube}`">click</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { string, number, shape, object } from 'vue-types'
import Img from '@/components/base/Img.vue'

const props = defineProps({
  detail: shape({
    idMeal: number(),
    strMeal: string(),
    strDrinkAlternate: string(),
    strCategory: string(),
    strArea: string(),
    strInstructions: string(),
    strMealThumb: string(),
    strTags: string(),
    strYoutube: string(),
    strSource: string()
  })
})
</script>
