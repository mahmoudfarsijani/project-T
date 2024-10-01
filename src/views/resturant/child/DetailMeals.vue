<template>
  <Container >
    <InfoDetailMeals :detail="dataDetailMeal" />
  </Container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetchDetail } from '@/composables/useRestFetchDetailMeal.js'
import Container from '@/components/base/Container.vue'
import InfoDetailMeals from '@/components/main/resturant/InfoDetailMeals.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mealId = computed(() => {
  return route.params.id
})

const { dataDetailMeal, isLoadingDetailMeal, errorDetailMeal } = useFetchDetail(mealId.value)
</script>
