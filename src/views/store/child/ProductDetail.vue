<template>
  <div>
    <Container class="min-h-screen">
      <div class="box-1">
        <div v-if="isLoadingStore">
          <span class="loading loading-spinner loading-lg bg-black"></span>
        </div>
        <div v-else-if="errorStore">
          {{ errorStore }}
        </div>
        <BoxProducts v-else :product="dataStore" />
      </div>
    </Container>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStoreFetch } from '@/composables/useStoreFetch.js'
import { useRoute } from 'vue-router'
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'
import BoxProducts from '@/components/main/store/shop/BoxProducts.vue'

const route = useRoute()
const productId = computed(() => {
  return route.params.id
})
const { dataStore, errorStore, isLoadingStore } = useStoreFetch(productId.value)
</script>
