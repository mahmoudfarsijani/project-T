<template>
  <Container class="flex justify-center items-center min-h-screen">
    <div v-if="isLoadingStoreCat">
        <span class="loading loading-spinner loading-lg bg-black"></span>
    </div>
    <div v-else-if="errorStoreCat">
        <h2 class="title-error">
            {{ errorStoreCat }}
        </h2>
    </div>
    <div v-else>
        {{ dataStoreCat }}
    </div>
  </Container>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { useStoreFetchCat } from '@/composables/useStoreFetchCategories.js'
import Container from '@/components/base/Container.vue';

const route = useRoute()
const { dataStoreCat, isLoadingStoreCat, errorStoreCat } = useStoreFetchCat('products','category',route.params.categorie)
</script>
