<template>
  <Container>
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
