<template>
  <div class="bg-red-400">
    {{ dataDetailMeal }}
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useFetchDetail } from '@/composables/useRestFetchDetailMeal.js'
import { useRoute } from 'vue-router'

const route = useRoute()
const mealId = computed(() => {
    return route.params.id
})

const { dataDetailMeal, isLoadingDetailMeal, errorDetailMeal } = useFetchDetail(mealId.value)
</script>
