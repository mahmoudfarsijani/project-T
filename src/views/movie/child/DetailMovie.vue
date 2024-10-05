<template>
  <Main>
    <div
      class="min-h-screen bg-no-repeat bg-center"
      :style="{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)) ,url('${srcImg}')`,
        backgroundRepeat: 'norepeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%'
      }"
    >
      <Container class="text-white">
        <div v-if="isLoadingDetailMovie">
          <span class="loading loading-ring loading-lg"></span>
        </div>
        <div v-else-if="errorDetailMovie">
          {{ errorDetailMovie }}
        </div>
        <SecOneDetailMovie v-else :detail="dataDetailMovie" />
      </Container>
    </div>
  </Main>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useFetchDetailMovie } from '@/composables/useDetailMovie.js'
import Container from '@/components/base/Container.vue'
import SecOneDetailMovie from '@/components/main/movie/detailsSection/SecOneDetailMovie.vue'
import Main from '@/components/base/Main.vue'
import { computed } from 'vue'

const router = useRouter()
const route = useRoute()
const { dataDetailMovie, isLoadingDetailMovie, errorDetailMovie } = useFetchDetailMovie(
  route.params.id
)

const srcImg = computed(() => {
  if (dataDetailMovie.value.poster_path) {
    return `https://image.tmdb.org/t/p/w500/${dataDetailMovie.value?.poster_path}`
  }
})
console.log(srcImg)
</script>

<style>
.b {
  background-position: center;

  background-size: cover;
}
</style>
