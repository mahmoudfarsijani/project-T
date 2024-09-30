<template>
  <Container>
    <div class="flex justify-between pb-[60px] items-center">
      <h1 class="inline text-[35px] capitalize text-white font-kanit">i hope you have a delicious choice</h1>
      <p class="inline smm:hidden md:flex text-teal-500 capitalize font-kanit text-[14px]">plaese seen all :)</p>
    </div>
    <RowGrid tag="ul">
      <CardMeal v-for="item in dataEachCat" :key="item.idCategory" :meal="item"/>
    </RowGrid>
  </Container>
</template>

<script setup>
import { ref } from 'vue'
import Container from '@/components/base/Container.vue';
import CardMeal from '@/components/main/resturant/CardMeal.vue'
import RowGrid from '@/components/base/RowGrid.vue';
import { useFetchEachCat } from '@/composables/useRestFetchEachCat.js'
import { useRoute } from 'vue-router';


const route = useRoute()
const { dataEachCat, isLoadingEachCat, errorEachCat } = useFetchEachCat(route.params.name)
</script>


<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 25px 50px;
}
</style>
