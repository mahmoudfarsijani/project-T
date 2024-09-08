<template>
  <div v-if="product" class="box_total--prodcuts">
    <div class="box_route">
      <p class="box_route--text">
        {{ $route.path }}
      </p>
    </div>
    <div class="box_main flex flex-col lg:flex-row gap-[10px] mt-[25px]">
      <swiper
        :slides-per-view="1"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        class="w-full lg:w-[45%] h-[450px] overflow-hidden bg-white rounded-md"
      >
        <swiper-slide
          v-for="(image, index) in product.images"
          :key="index"
          class="p-[20px] h-full overflow-hidden"
        >
          <Img :src="image" :alt="index" class="h-full mx-auto" />
        </swiper-slide>
        <div class="swiper-pagination"></div>
      </swiper>
      <div
        v-if="product"
        class="box_detail h-[500px] lg:h-[450px] overflow-hidden bg-white rounded-md"
      >
        <h2 class="title">
          {{ product.title }}
        </h2>
        <div class="box_rating">
          <Icon
            v-for="item in rating"
            :key="rating.id"
            :name="item.rate >= product.rating ? 'empty-star' : 'fill-star'"
          />
        </div>
        <p class="price">${{ product.price }}</p>
        <p class="description">
          {{ product.description }}
        </p>
        <div class="flex flex-col flex-nowrap gap-[15px] mt-[25px]">
          <div
            v-if="product.category === 'mens-shirts' || product.category === 'womens-dresses'"
            class="flex flex-nowrap gap-[10px]"
          >
            <p class="title_size text-gray-200 dark:text-gray-700 capitalize">sizes:</p>
            <BoxFilterRadioProduct
              v-for="option in optionsFilterSize"
              name="myFilterSize"
              :key="option.value"
              :label="option.label"
              :model-value="dataFilterSize"
              :value="option.value"
              @update:modelValue="updateSelectedSizeValue"
            />
          </div>
          <div
            v-if="
              product.category === 'mens-shoes' ||
              product.category === 'mens-shirts' ||
              product.category === 'womens-dresses'
            "
            class="flex gap-[10px]"
          >
            <p class="title_size text-gray-200 dark:text-gray-700 capitalize">colors:</p>
            <BoxFilterRadioProduct
            type="radio"
              v-for="option in optionsFilterColor"
              name="myFilterColor"
              :key="option.value"
              :label="option.label"
              :model-value="dataFilterColor"
              :value="option.value"
              @update:modelValue="updateSelectedColorValue"
            />
          </div>
          <div
            v-if="product.category === 'womens-shoes' || product.category === 'mens-shoes'"
            class="flex gap-[10px]"
          >
            <p class="title_size text-gray-200 dark:text-gray-700 capitalize">sizes:</p>
            <BoxFilterRadioProduct
              v-for="option in optionsFilterSizeShoes"
              type="radio"
              name="myFilterSizeShoes"
              :key="option.value"
              :label="option.label"
              :model-value="dataFilterSizeShoes"
              :value="option.value"
              @update:modelValue="updateSelectedSizeShoesValue"
            />
          </div>
        </div>
        <div class="box_baskets flex flex-nowrap items-center gap-[25px] mt-[15px]">
          <div class="flex flex-nowrap items-center">
            <Button
              tag="button"
              :is-icon-only="true"
              icon="minus"
              :is-yellow="true"
              @click="decrement(product)"
            />
            <span class="bg-gray-400 py-[7.8px] px-[15px]">{{quantityNumber}}</span>
            <Button
              tag="button"
              :is-icon-only="true"
              icon="pluse"
              :is-yellow="true"
              @click="increment(product)"
            />
          </div>
          <Button
            :is-icon-only="false"
            icon="basket"
            :is-primary="true"
            :is-rounded-sm="true"
            class="text-black"
            @click="addBasket(product)"
          >
            Add To Cart
          </Button>
        </div>
        <div class="box_share flex flex-nowrap gap-[10px] items-center">
          <p class="share_title text-gray-200 dark:text-gray-700">Share on:</p>
          <div class="btn_social flex flex-nowrap items-center gap-[10px]">
            <Button :is-icon-only="true" icon="instagram" />
            <Button :is-icon-only="true" icon="twitter" />
            <Button :is-icon-only="true" icon="gmail" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed,provide } from 'vue'
import { string, number, shape, object, array } from 'vue-types'
import Img from '@/components/base/Img.vue'
import Button from '@/components/base/Button.vue'
import Icon from '@/components/base/Icon.vue'
import BoxFilterRadioProduct from '@/components/main/store/shop/BoxFilterRadioProduct.vue'
import { listOptionsDetailProduct } from '@/data/listOptionDetailProduct.js'
import { useAddBasketStore } from '@/stores/addBasketStore.js'
import { nanoid } from 'nanoid'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

const dataFilterSize = ref('')
const dataFilterColor = ref('')
const dataFilterSizeShoes = ref('')
const { optionsFilterSize, optionsFilterColor, optionsFilterSizeShoes } = listOptionsDetailProduct()
// stores
const { addBasket, increment, decrement } = useAddBasketStore()
const basketList = computed(() => useAddBasketStore().basket)

const quantityNumber = computed(() => {
  const item = basketList.value.find((prod) => prod.id === props.product.id)

  return item ? item.quantity : '0'
})




const updateSelectedSizeValue = (newValue) => {
  dataFilterSize.value = newValue
}

const updateSelectedColorValue = (newValue) => {
  dataFilterColor.value = newValue
}

const updateSelectedSizeShoesValue = (newValue) => {
  dataFilterSizeShoes.value = newValue
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
    thumbnail: string(),
    quantity: number()
  })
})

const rating = [
  {
    id: nanoid(3),
    rate: 1
  },
  {
    id: nanoid(3),
    rate: 2
  },
  {
    id: nanoid(3),
    rate: 3
  },
  {
    id: nanoid(3),
    rate: 4
  },
  {
    id: nanoid(3),
    rate: 5
  }
]
</script>

<style scoped>
.box_total--prodcuts {
  @apply w-full;
}

.box_route {
  @apply w-full bg-gray-300  px-[10px] py-[10px] rounded-md;
}

.box_route--text {
  @apply text-[18px] font-kanit text-gray-700;
}
.box_main {
  @apply w-full justify-center items-center;
}

.box_detail {
  @apply w-full flex-1 flex flex-col gap-[10px] p-[10px]  lg:p-[25px];
}

.title {
  @apply text-[27px] font-kanit text-gray-700;
}

.box_rating {
  @apply flex flex-nowrap gap-[2px];
}

.description {
  @apply text-gray-700 w-[80%];
}

.price {
  @apply text-gray-700 font-suns text-[25px];
}
</style>
