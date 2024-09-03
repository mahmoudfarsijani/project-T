<template>
    <div>
        <Container>
            {{ dataStore}}
        </Container>
    </div>
  </template>
  
  <script setup>
  import { ref,computed } from 'vue'
  import { useStoreFetch } from '@/composables/useStoreFetch.js'
  import { useRoute } from 'vue-router'
  import Container from '@/components/base/Container.vue';
  import Main from '@/components/base/Main.vue';
  
  const route = useRoute()
  const productId = computed(() => {
    return route.params.id
  })
  const { dataStore, errorStore, isLoadingStore } = useStoreFetch(productId.value)
  </script>
  