<template>
  <Container class="flex justify-center items-center min-h-screen">
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
          <CardProduct v-for="item in dataStoreCat.products" :key="item.div" :product="item"/>
        </RowGrid>
    </div>
  </Container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { useStoreFetchCat } from '@/composables/useStoreFetchCategories.js'
import Container from '@/components/base/Container.vue';
import RowGrid from '@/components/base/RowGrid.vue';
import CardProduct from '@/components/main/store/shop/CardProduct.vue';

const route = useRoute()
const { dataStoreCat, isLoadingStoreCat, errorStoreCat } = useStoreFetchCat('products','category',route.params.categorie)
</script>

<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 25px 50px;
}
</style>
