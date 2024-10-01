<template>
  <Container>
    <div class="flex justify-between pb-[60px] items-center">
        <h1 class="inline text-[35px] capitalize text-white font-kanit">{{ titlePage }}</h1>
        <p class="inline smm:hidden md:flex text-teal-500 capitalize font-kanit text-[14px]">plaese seen all :)</p>
      </div>
      <div v-if="isLoadingEachCat" class="flex justify-center pt-[100px]" >
        <span class="loading loading-ring loading-lg"></span>
      </div>
      <div v-else-if="errorEachCat">
          {{ errorEachCat }}
      </div>
    <RowGrid v-else tag="ul" >
        <li v-for="item in dataEachCat" :key="item.idMeal">
            <CardMeal :meal="item"/>
        </li>
    </RowGrid>
  </Container>
</template>

<script setup>
import { ref } from 'vue'
import Container from '@/components/base/Container.vue'
import { useFetchEachCat } from '@/composables/useRestFetchEachCat.js'
import CardMeal from '@/components/main/resturant/CardMeal.vue'
  import RowGrid from '@/components/base/RowGrid.vue';
import { useRoute } from 'vue-router'
import { computed } from 'vue';

const route = useRoute()
const { dataEachCat, isLoadingEachCat, errorEachCat } = useFetchEachCat(
  'filter',
  null,
  null,
  'a',
  null,
  null,
  route.params.name
)

const titlePage = computed(() => {
    return `these are the most delicious dishes in ${route.params.name}`
})
</script>

<style scoped>
.list-grid {
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  gap: 25px 50px;
}
</style>
