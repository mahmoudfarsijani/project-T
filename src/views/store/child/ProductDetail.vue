<template>
    <div>
      {{ dataStore}}
    </div>
  </template>
  
  <script setup>
  import { ref,computed } from 'vue'
  import { useStoreFetch } from '@/composables/useStoreFetch.js'
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const productId = computed(() => {
    return route.params.id
  })
  const { dataStore, errorStore, isLoadingStore } = useStoreFetch(productId.value)
  </script>
  