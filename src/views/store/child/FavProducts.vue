<template>
  <Container class="min-h-screen">
    <h1 class="title text-gray-200 dark:text-black capitalize text-[35px] font-suns pb-[30px] border-b-[1px] border-black">
        fav list 
    </h1>
    <Row v-if="basket" tag="ul" class="gap-[10px] mt-[35px]" :is-no-wrap="false">
      <CardProduct v-for="item in basket" :key="item.id" :product="item" />
    </Row>
  </Container>
</template>

<script setup>
import Container from '@/components/base/Container.vue'
import { useFavBasketStore } from '@/stores/favBasketStore.js'
import CardProduct from '@/components/main/store/shop/CardProduct.vue'
import Row from '@/components/base/Row.vue'
import { computed } from 'vue'

const basket = computed(() => useFavBasketStore().basket)

</script>

 
