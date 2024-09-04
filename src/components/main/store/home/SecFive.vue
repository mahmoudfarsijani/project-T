
<template>
    <Container tag="section">
      <div class="box-title mt-[50px]">
        <h2 class="title text-[35px] uppercase text-white dark:text-black font-kanit">
          recent products
        </h2>
      </div>
      <div v-if="isLoadingStore">
        <span class="loading loading-spinner loading-lg bg-black"></span>
      </div>
      <div v-else-if="errorStore">
        {{ errorStore }}
      </div>
      <RowGrid v-else tag="ul" class="list-cat mt-[35px]">
        <CardProduct v-for="item in dataSlice" :key="item.id" :product="item" />
      </RowGrid>
    </Container>
  </template>

  <script setup>
    import { computed } from 'vue'
    import Container from '@/components/base/Container.vue'
    import RowGrid from '@/components/base/RowGrid.vue'
    import CardProduct from '@/components/main/store/shop/CardProduct.vue'
    import { useStoreFetch } from '@/composables/useStoreFetch.js'
    import { slice } from 'lodash'

    const { dataStore, errorStore, isLoadingStore } = useStoreFetch()

    const dataStoreFinall = computed(() => {
      return dataStore.value.products
    })
    const dataSlice = computed(() => {
      return slice(dataStoreFinall.value, 0, 6)
    })
  </script>

  <style scoped>
    .list-cat {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 15px;
    }
  </style>

