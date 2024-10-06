<template>
  <Card v-if="similar" tag="RouterLink" :to="`/detail-movie/${similar.id}`" class="max-w-[150px] min-w-[130px]  ">
    <template #header>
      <div class="overflow-hidden rounded-lg">
        <Img :src="srcImg" :alt="similar.title"/>
      </div>
    </template>
    <div class="body w-full">
        <h3 class="w-full title text-white text-[13px]   overflow-hidden whitespace-nowrap text-ellipsis  ">
            {{ similar.title }}
        </h3>
    </div>
  </Card>
  
</template>

<script setup>
import { defineProps,computed } from 'vue'
import { string, object,number } from 'vue-types'
import Card from '@/components/base/Card.vue'
import Img from '@/components/base/Img.vue'


const props = defineProps({
    similar: object({
        id:number(),
        title:string(),
        poster_path:string()
    })
})

const srcImg = computed(() => {
    return `https://image.tmdb.org/t/p/w500/${props.similar?.poster_path}`
})
</script>
