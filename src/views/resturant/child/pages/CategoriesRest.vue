<template>
  <Container>
    <RowGrid tag="ul">
      <CardMeal v-for="item in dataAllCat" :key="item.idCategory" :meal="item"/>
    </RowGrid>
  </Container>
</template>

<script setup>
import { useFetchAllCat } from '@/composables/useRestAllCategories.js'
import Container from '@/components/base/Container.vue'
import CardMeal from '@/components/main/resturant/CardMeal.vue'
import RowGrid from '@/components/base/RowGrid.vue';

const { dataAllCat, errorDataCat, isLoadingDataCat } = useFetchAllCat()
</script>

<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 25px 50px;
}
</style>
