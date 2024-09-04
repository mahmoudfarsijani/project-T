<template>
  <Card
    v-if="product"
    tag="RouterLink"
    :to="`/store/product-detail/${product.id}`"
    :is-white="true"
    :is-pointer="true"
    class="cart_product"
  >
    <template #header>
      <div class="box_img">
        <Img :src="product.thumbnail" :alt="product.title" class="box_img--img" />
        <div class="box_img--layout">
          <div class="box__img-layout--btns">
            <Button tag="button" :is-icon-only="true" @click.stop.prevent="addBasket(product)" :icon="isFav ? 'fill-heart' : 'empty-heart'" />
            <Button :is-icon-only="true" icon="basket" />
          </div>
        </div>
      </div>
    </template>
    <div class="cart_product--body">
      <h3 class="title">
        {{ product.title }}
      </h3>
      <p class="price">${{ product.price }}</p>
      <div class="flex flex-nowrap w-full justify-center items-center gap-[10px]">
        <div class="star-box">
          <Icon
            v-for="item in ratingValue"
            :key="item.rate"
            :name="product.rating >= item.rate ? 'fill-star' : 'empty-star'"
          />
        </div>
        <span class="text-[13px] text-black font-suns">
          {{ productRate }}
        </span>
      </div>
    </div>
  </Card>
</template>

<script setup>
import { ref, defineProps, computed } from 'vue'
import { string, number, shape, object } from 'vue-types'
import Card from '@/components/base/Card.vue'
import Img from '@/components/base/Img.vue'
import Icon from '@/components/base/Icon.vue'
import Button from '@/components/base/Button.vue'

import { useFavBasketStore } from '@/stores/favBasketStore.js'

const props = defineProps({
  product: object({
    id: number().isRequired,
    title: string().isRequired,
    category: string().isRequired,
    price: number().isRequired,
    rating: number().isRequired,
    thumbnail: string().isRequired
  })
})

const ratingValue = [
  {
    rate: 1
  },
  {
    rate: 2
  },
  {
    rate: 3
  },
  {
    rate: 4
  },
  {
    rate: 5
  }
]

const productRate = computed(() => props.product.rating.toFixed(1))

// store
const { addBasket, isAvailable } = useFavBasketStore()
const data = useFavBasketStore()
const isFav = computed(() => useFavBasketStore().isAvailable(props.product))
const favBasketLength = computed(() => data.lengthBasketFav)
</script>

<style scoped>
.cart_product {
  @apply w-[200px] p-[10px] rounded-lg hover:shadow-md duration-700;
}

.box_img {
  @apply w-full h-[200px] relative overflow-hidden;
}

.box_img--img {
  @apply w-full  duration-700 transition-transform;
}

.box_img--layout {
  @apply w-full h-0 absolute inset-0  bg-white bg-opacity-95 flex justify-center items-center rounded-lg   duration-700 overflow-hidden;
}

.cart_product:hover .box_img--layout {
  @apply h-full;
}

.cart_product--body {
  @apply flex flex-col items-center h-[120px] justify-between;
}

.title {
  @apply h-[50px] text-black text-center font-kanit text-[16px];
}

.price {
  @apply text-black font-mono text-[18px];
}

.star-box {
  @apply text-black flex flex-nowrap;
}

.box__img-layout--btns {
  @apply flex flex-nowrap gap-[25px];
}

.cart_product:hover .box_img--img {
  @apply scale-150;
}
</style>
