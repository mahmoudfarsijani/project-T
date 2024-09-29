<template>
  <Container>
    categories
    {{ dataAllCat }}
  </Container>
</template>

<script setup>
import { useFetchAllCat } from '@/composables/useRestAllCategories.js'
import Container from '@/components/base/Container.vue'

const { dataAllCat, errorDataCat, isLoadingDataCat } = useFetchAllCat()
</script>
