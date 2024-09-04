<template>
  <div v-if="product" class="box_total--prodcuts">
    <div class="box_route">
      <p class="box_route--text">
        {{ $route.path }}
      </p>
    </div>
    <div class="box_main">
      <swiper :slides-per-view="1" :loop="true" :autoplay="{ delay: 3000 }" class="w-[500px] h-[450px] overflow-hidden">
        <swiper-slide v-for="(image, index) in product.images" :key="index" class="p-[20px] h-full overflow-hidden ">
          <Img :src="image" :alt="index" class="h-full mx-auto"/>
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      <div class="box_detail">
        <h2 class="title">
          {{ product.title }}
        </h2>
        <div class="box_rating">
          <Icon v-for="item in rating" :key="rating.id" :name="item.rate >= product.rating  ? 'empty-star':'fill-star'" />
        </div>
        <p class="price">${{ product.price }}</p>
        <p class="description">
          {{ product.description }}
        </p>
        <BoxFilterSizeProduct @SelectValue="changed"/>
        {{ dataFilterSize }}
        <div class="box_baskets"></div>
        <div class="box_share"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { string, number, shape, object, array } from 'vue-types'
import Img from '@/components/base/Img.vue'
import Button from '@/components/base/Button.vue'
import Icon from '@/components/base/Icon.vue'
import BoxFilterSizeProduct from '@/components/main/store/shop/BoxFilterSizeProduct.vue'
import { nanoid } from 'nanoid'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const dataFilterSize = ref('')

const changed = (data) => {
    dataFilterSize.value = data
}

const props = defineProps({
  product: shape({
    id: number(),
    title: string(),
    description: string(),
    category: string(),
    price: number(),
    discountPercentage: number(),
    rating: number(),
    stock: number(),
    tags: array(),
    brand: string(),
    sku: string(),
    weight: number(),
    dimensions: shape({
      width: number(),
      height: number(),
      depth: number()
    }),
    warrantyInformation: string(),
    shippingInformation: string(),
    availabilityStatus: string(),
    returnPolicy: string(),
    minimumOrderQuantity: number(),
    meta: shape({
      createdAt: string(),
      updatedAt: string(),
      barcode: string(),
      qrCode: string()
    }),
    images: array(),
    thumbnail: string()
  })
})

const rating = [
    {
        id:nanoid(3),
        rate:1
    },
    {
        id:nanoid(3),
        rate:2
    },
    {
        id:nanoid(3),
        rate:3
    },
    {
        id:nanoid(3),
        rate:4
    },
    {
        id:nanoid(3),
        rate:5
    }
]
</script>

<style scoped>
.box_total--prodcuts {
  @apply w-full;
}

.box_route {
  @apply w-full bg-gray-300 px-[10px] py-[10px] rounded-md;
}

.box_route--text {
  @apply text-[18px] font-kanit text-gray-700;
}
.box_main {
  @apply w-full flex items-center;
}

.box_detail {
  @apply flex-1 flex flex-col gap-[10px]  p-[25px];
}

.title {
  @apply text-[27px] font-kanit text-gray-700;
}

.box_rating {
    @apply flex flex-nowrap gap-[2px]
}

.description {
    @apply text-gray-700 w-[80%]
}

.price{
    @apply text-gray-700 font-suns text-[25px]
}
</style>
