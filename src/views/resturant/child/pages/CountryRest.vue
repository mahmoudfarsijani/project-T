<template>
  <div>
    <Container>
      <div class="flex justify-between pb-[60px] items-center">
        <h1 class="inline text-[35px] capitalize text-white font-kanit">you can see the delicious food of every country</h1>
        <p class="inline smm:hidden md:flex text-teal-500 capitalize font-kanit text-[14px]">plaese seen all :)</p>
      </div>
      <div v-if="isLoadingEachCat" class="flex justify-center pt-[100px]" >
        <span class="loading loading-ring loading-lg"></span>
      </div>
      <div v-else-if="errorEachCat">
          {{ errorEachCat }}
      </div>
      <RowGrid v-else>
        <li v-for="(item,index) in dataEachCat" :key="index">
          <CardCountry :country="item"/>
        </li>
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
