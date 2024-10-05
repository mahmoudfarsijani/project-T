<template>
  <div
    v-if="detail"
    class="flex smm:flex-col md:flex-row lg:flex-row w-full gap-[50px] pt-[70px] min-h-screen"
  >
    <!-- <div class="smm:w-[60%] md:w-[35%] max-w-[250px] smm:mx-auto md:mx-0">
              <div class="w-full overflow-hidden rounded-md">
                  <Img :src="srcImg" :alt="detail.title" class="w-full h-full"/>
              </div>
          </div> -->
    <div class="smm:w-[100%] lg:w-[70%] flex flex-col items-start gap-[10px]">
      <h1 class="title smm:text-[37px] md:text-[37px] lg:text-[49px] font-kanit">
        {{ detail.title }}
      </h1>
      <div class="flex items-center gap-[15px]">
        <div class="flex flex-nowrap">
          <Icon
            v-for="item in listCount"
            :key="item.id"
            :name="item.count <= countRange ? 'fill-star' : 'empty-star'"
          />
        </div>
        <span class="text-[14px] font-light"> {{ countRange }} (IMDB) </span>
        <div v-if="isLoadingDetailMovie">
          <span class="loading loading-ring loading-lg"></span>
        </div>
        <span v-else="dataDetailMovie" class="text-[14px] font-light">
          {{ details.dataTime }}
        </span>
      </div>
      <p class="subtitle smm:text-[15px] md:text-[17px] lg:text-[17px] font-Archivo">
        {{ detail.overview }}
      </p>
      <div v-if="isLoadingDetailMovie">
        <span class="loading loading-ring loading-lg"></span>
      </div>
      <Row v-else tag="ul" :is-col="true">
        <li class="smm:text-[12px] md:text-[16px]">
          <span class="mr-2 capitalize font-kanit font-bold text-teal-400"> staring: </span>
          <span class="font-light">
            {{ details.dataCredits }}
          </span>
        </li>
        <li class="smm:text-[12px] md:text-[16px] whitespace-nowrap">
          <span class="mr-2 capitalize font-kanit font-bold text-teal-400"> genres: </span>
          <span class="font-light">
            {{ details.dataGenres }}
          </span>
        </li>
      </Row>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed } from 'vue'
import { string, object, array, shape, number, bool } from 'vue-types'
import { slice } from 'lodash'
import { useRoute, useRouter } from 'vue-router'
import Img from '@/components/base/Img.vue'
import Row from '@/components/base/Row.vue'
import Icon from '@/components/base/Icon.vue'
import {listCount} from '@/data/listCount.js'
import { nanoid } from 'nanoid'
import { useFetchDetailMovie } from '@/composables/useDetailMovie.js'

const router = useRouter()
const route = useRoute()
const { dataDetailMovie, isLoadingDetailMovie, errorDetailMovie } = useFetchDetailMovie(
  route.params.id,
  'credits'
)

const props = defineProps({
  detail: shape({
    adult: bool(),
    backdrop_path: string(),
    budget: string(),
    genres: array(),
    homepage: string(),
    id: number(),
    imdb_id: number(),
    origin_country: array(),
    original_language: string(),
    original_title: string(),
    overview: string(),
    popularity: number(),
    poster_path: string(),
    production_companies: array(),
    production_countries: array(),
    release_date: string(),
    spoken_languages: array(),
    status: string(),
    tagline: string(),
    title: string(),
    vote_average: number(),
    vote_count: number(),
    runtime: number()
  })
})

const countRange = computed(() => {
  if (props.detail.vote_count) {
    return Math.floor(props.detail.vote_average).toFixed(1)
  }
})

const details = computed(() => {
  const dataGenres = ref('')
  const dataCredits = ref([])
  const dataTime = ref('')

  // time
  const hours = Math.floor(props.detail?.runtime / 60)
  const remaining = props.detail?.runtime % 60
  dataTime.value = `${hours}h: ${remaining}m`

  // genres
  if (props.detail?.genres) {
    dataGenres.value = props.detail?.genres.map((item) => item.name).join(' ,')
  }

  // credits
  if (dataDetailMovie.value.cast) {
    const dataMaped = dataDetailMovie.value.cast
      .map((item) => item.original_name)
      .slice(0, 3)
      .join(' ,')
    dataCredits.value = dataMaped
  }

  return {
    dataGenres,
    dataCredits,
    dataTime
  }
})
</script>
