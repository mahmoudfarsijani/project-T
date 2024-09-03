<template>
  <Main class="pt-[200px]">
    <Container class="flex flex-wrap lg:flex-nowrap gap-[20px]">
      <Aside></Aside>
      <Main>
        <div>
          <div class="box-sort"></div>
          <div v-if="isLoadingStore">
            <span class="loading loading-spinner loading-lg bg-black"></span>
          </div>
          <div v-else-if="errorStore">
            <span>
              {{ errorStore }}
            </span>
          </div>
          <RowGrid v-else class="list-grid">
            <CardProduct v-for="item in dataStore.products" :key="item.id" :product="item" />
          </RowGrid>
        </div>
      </Main>
    </Container>
  </Main>
</template>

<script setup>
import Main from '@/components/base/Main.vue'
import { useStoreFetch } from '@/composables/useStoreFetch.js'
import Container from '@/components/base/Container.vue'
import Aside from '@/components/base/Aside.vue'
import RowGrid from '@/components/base/RowGrid.vue'
import CardProduct from '@/components/main/store/shop/CardProduct.vue'

const { dataStore, errorStore, isLoadingStore } = useStoreFetch()
</script>
<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 25px 50px;
}
</style>
