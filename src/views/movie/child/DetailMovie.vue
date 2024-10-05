<template>
  <Main>
    <Container class="text-white bg-red-500">
      detail movie
      {{ dataDetailMovie }}
    </Container>
  </Main>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useFetchDetailMovie } from '@/composables/useDetailMovie.js'
import Container from '@/components/base/Container.vue'
import Main from '@/components/base/Main.vue'

const router = useRouter()
const route = useRoute()
const { dataDetailMovie, isLoadingDetailMovie, errorDetailMovie } = useFetchDetailMovie(
  route.params.id
)
</script>
