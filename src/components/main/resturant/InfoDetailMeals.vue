<template>
  <div
    v-if="detail"
    class="w-full flex smm:flex-wrap lg:flex-nowrap gap-[30px] smm:justify-center lg:justify-start"
  >
    <div class="smm:w-[250px] smm:h-[250px] lg:w-[350px] lg:h-[350px] rounded-full overflow-hidden">
      <Img :src="detail.strMealThumb" :alt="detail.strMeal" class="w-full h-full object-cover" />
    </div>
    <div class="smm:w-[100%] lg:w-[55%] flex flex-col gap-[10px]">
      <h1 class="title text-[35px] font-kanit text-white">
        {{ detail.strMeal }}
      </h1>
      <p class="subtitle font-sans text-[14px] text-justify text-white">
        {{ sliceDescription }} <span v-if="!isMore" @click="showMore">...</span>
      </p>

      <div class="flex flex-col gap-[5px]">
        <span class="capitalize font-light text-white"
          ><span class="capitalize font-bold text-white">category:</span> {{ detail.strCategory }}
        </span>
        <span class="capitalize font-light text-white">
          <span class="capitalize font-bold text-white">area:</span> {{ detail.strArea }}
        </span>
        <span v-if="detail.strDrinkAlternate" class="capitalize font-light text-white">
          <span class="capitalize font-bold text-whitedrink:"></span> {{ detail.strDrinkAlternate }}
        </span>
        <span v-if="detail.strSource" class="capitalize font-light text-white">
          <span class="capitalize font-bold text-white">source recepies:</span>
          <a :href="`${detail.strSource}`">click</a>
        </span>
        <span v-if="detail.strYoutube" class="capitalize font-light text-white">
          <span class="capitalize font-bold text-white"> source youtube:</span>
          <a :href="`${detail.strYoutube}`">click</a>
        </span>
        <div v-if="ingredient">
          <span class="flex flex-col capitalize font-bold text-white">
            ingredients:
            <span
              v-for="(item, index) in ingredient"
              :key="index"
              class="capitalize font-light text-white"
              >{{ item }}</span
            >
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { string, number, shape, object, array } from 'vue-types'
import { slice } from 'lodash'
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
  }),
  ingredient: array()
})

const isMore = ref(false)
const showMore = () => {
  isMore.value = !isMore.value
}

const sliceDescription = computed(() => {
  if (props.detail.strInstructions && !isMore.value) {
    return props.detail?.strInstructions.slice(0, 500)
  }
  return props.detail?.strInstructions
})
</script>
