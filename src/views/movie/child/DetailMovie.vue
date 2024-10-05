<template>
  <div class="text-white bg-red-500">
    detail movie
    {{ dataDetailMovie}}
  </div>
</template>

<script setup>
import { useRouter, useRoute } from 'vue-router'
import { useFetchDetailMovie } from '@/composables/useDetailMovie.js'


const router = useRouter()
const route = useRoute()
const {dataDetailMovie,isLoadingDetailMovie,errorDetailMovie} = useFetchDetailMovie(route.params.id)
</script>
