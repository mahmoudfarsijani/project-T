<template>
  <Main class="pt-[200px]">
    <Container>
        {{ dataStore }}
    </Container>
  </Main>
</template>

<script setup>
import Main from '@/components/base/Main.vue'
import { useStoreFetch } from '@/composables/useStoreFetch.js'
import Container from '@/components/base/Container.vue'

const { dataStore, errorStore, isLoading } = useStoreFetch()
</script>
