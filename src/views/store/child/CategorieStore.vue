<template>
  <Container class="pb-[180px]">
    <h1 class="title text-[35px] capitalize text-gray-200 dark:text-slate-600">
      {{ $route.params.categorie }}
    </h1>
    <div class="flex flex-col justify-center items-center mt-[50px]">
      <div v-if="isLoadingStoreCat">
        <span class="loading loading-spinner loading-lg bg-black"></span>
      </div>
      <div v-else-if="errorStoreCat">
        <h2 class="title-error">
          {{ errorStoreCat }}
        </h2>
      </div>
      <div v-else class="w-full">
        <RowGrid>
          <CardProduct v-for="item in dataStoreCat.products" :key="item.div" :product="item" />
        </RowGrid>
      </div>
    </div>
  </Container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { useStoreFetchCat } from '@/composables/useStoreFetchCategories.js'
import Container from '@/components/base/Container.vue'
import RowGrid from '@/components/base/RowGrid.vue'
import CardProduct from '@/components/main/store/shop/CardProduct.vue'

const route = useRoute()
const { dataStoreCat, isLoadingStoreCat, errorStoreCat } = useStoreFetchCat(
  'products',
  'category',
  route.params.categorie
)
</script>

<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 25px 50px;
}
</style>
