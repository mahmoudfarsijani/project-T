<template>
  <div>
    <Container>
      country rest
      <RowGrid>
        <CardCountry v-for="(item,index) in dataEachCat" :key="index" :country="item"/>
      </RowGrid>
    </Container>
  </div>
</template>

<script setup>

import Container from '@/components/base/Container.vue'
import { useFetchEachCat } from '@/composables/useRestFetchEachCat.js'
import RowGrid from '@/components/base/RowGrid.vue';
import CardCountry from '@/components/main/resturant/CardCountry.vue'

import { useRoute } from 'vue-router';

const route = useRoute()
  const { dataEachCat, isLoadingEachCat, errorEachCat } = useFetchEachCat(null,'list',null,'a',null,'list')

// import { useFetchNameMeal } from '@/composables/useFetchNameMeal.js'


// const { dataMeal, isLoadingMeal, errorMeal } = useFetchNameMeal(dataInput.value)
</script>

<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 25px 50px;
}
</style>
