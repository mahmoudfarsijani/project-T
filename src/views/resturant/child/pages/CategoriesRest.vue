<template>
  <Container>
    <div class="flex justify-between pb-[60px] items-center">
      <h1 class="inline text-[35px] capitalize text-white font-kanit">categoy your food is here</h1>
      <p class="inline smm:hidden md:flex text-teal-500 capitalize font-kanit text-[14px]">plaese seen all :)</p>
    </div>
    <RowGrid tag="ul">
      <CardCatMeal v-for="item in dataFinal" :key="item.idCategory" :meal="item" />
    </RowGrid>
  </Container>
</template>

<script setup>
import { useFetchAllCat } from '@/composables/useRestAllCategories.js'
import Container from '@/components/base/Container.vue'
import CardCatMeal from '@/components/main/resturant/CardCatMeal.vue'
import RowGrid from '@/components/base/RowGrid.vue'
import { slice } from 'lodash'
import { computed } from 'vue'

const { dataAllCat, errorDataCat, isLoadingDataCat } = useFetchAllCat()


const dataFinal = computed(() => {
  return dataAllCat.value.slice(0,12)
})
</script>

<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 25px 50px;
}
</style>
