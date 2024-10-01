<template>
  <Container class="pt-[50px]">
    <div v-if="isLoadingDetailMeal" class="flex justify-center pt-[100px]" >
        <span class="loading loading-ring loading-lg"></span>
      </div>
      <div v-else-if="errorDetailMeal">
          {{ errorDetailMeal }}
      </div>
    <InfoDetailMeals v-else :detail="dataDetailMeal" :ingredient="ingredients" />
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

const { dataDetailMeal, isLoadingDetailMeal, errorDetailMeal,ingredients } = useFetchDetail(mealId.value)
</script>
