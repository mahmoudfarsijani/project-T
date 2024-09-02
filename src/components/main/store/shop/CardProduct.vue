<template>
  <Card :is-white="true" class="w-[200px] p-[10px] rounded-lg">
    <template #header>
      <div class="box-img w-full h-[200px]">
        <Img :src="product.thumbnail" :alt="product.title"/>
      </div>
    </template>
    <div class="body flex flex-col items-center h-[120px] justify-between">
      <h3 class="title h-[50px] text-black text-center font-kanit text-[16px]">
        {{ product.title }}
      </h3>
      <p class="price text-black font-mono text-[18px]">
        ${{ product.price }}
      </p>
      <div class="star-box text-black">
        {{ product.rating }}
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import { string, number, shape, object } from 'vue-types'
import Card from '@/components/base/Card.vue'
import Img from '@/components/base/Img.vue'
import Icon from '@/components/base/Icon.vue'


const props = defineProps({
     product: shape({
        id: number(),
        title: string(),
        category:string(),
        price: number(),
        rating:number(),
        thumbnail: string()
     })
})
</script>
