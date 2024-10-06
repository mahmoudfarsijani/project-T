<template>
  <div
    v-if="detail"
    class="flex smm:flex-col md:flex-col lg:flex-col w-full gap-[50px] pt-[40px] min-h-screen"
  >
    <Container>
      <div class="smm:w-[100%] lg:w-[70%] flex flex-col items-start gap-[10px]">
        <h1 class="title smm:text-[37px] md:text-[47px] lg:text-[59px] font-kanit text-gray-200">
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
          <span class="text-[14px] font-light text-gray-200"> {{ countRange }} (IMDB) </span>
          <div v-if="isLoadingDetailMovie">
            <span class="loading loading-ring loading-lg"></span>
          </div>
          <span v-else="dataDetailMovie" class="text-[14px] font-light text-gray-200">
            {{ details.dataTime }}
          </span>
        </div>
        <p class="subtitle smm:text-[13px] md:text-[17px] lg:text-[17px] font-Archivo text-justify text-gray-200">
          {{ detail.overview }}
        </p>
        <div v-if="isLoadingDetailMovie">
          <span class="loading loading-ring loading-lg"></span>
        </div>
        <Row v-else tag="ul" :is-col="true">
          <li class="smm:text-[12px] md:text-[16px]">
            <span class="mr-2 capitalize font-kanit font-bold text-teal-400"> staring: </span>
            <span class="font-light text-gray-200">
              {{ details.dataCredits }}
            </span>
          </li>
          <li class="smm:text-[12px] md:text-[16px] whitespace-nowrap">
            <span class="mr-2 capitalize font-kanit font-bold text-teal-400"> genres: </span>
            <span class="font-light text-gray-200">
              {{ details.dataGenres }}
            </span>
          </li>
          <li class="smm:text-[12px] md:text-[16px] ">
            <span class="mr-2 capitalize font-kanit font-bold text-teal-400"> componies: </span>
            <span class="font-light text-gray-200">
              {{ details.dataComponies }}
            </span>
          </li>
          <li class="smm:text-[12px] md:text-[16px] whitespace-nowrap">
            <span class="mr-2 capitalize font-kanit font-bold text-teal-400"> home page: </span>
            <a :href="linkPages" target="_blank" rel="noopener noreferrer" class="font-light text-gray-200">
              {{ detail.title }}
            </a>
          </li>
        </Row>
      </div>
    </Container>
    <div class="flex flex-col gap-[50px]">
      <Container>
        <h2 class="smm:text-[21px] md:text-[25px] lg:text-[30px] capitalize font-kanit text-gray-200">similar</h2>
      </Container>
      <Row tag="ul" class="px-[5px]">
        <swiper
          :slides-per-view="isMobile ? 3 : 7"
          :space-between="80"
          @swiper="onSwiper"
          :loop="true"
          @slideChange="onSlideChange"
        >
          <SwiperSlide v-for="item in dataSimilar" :key="item.id">
            <CardSimilarMovie :similar="item" />
          </SwiperSlide>
        </swiper>
      </Row>
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref, computed, onMounted, onUnmounted } from 'vue'
import { string, object, array, shape, number, bool } from 'vue-types'
import { useEventListener } from '@vueuse/core'
import { slice } from 'lodash'
import { useRoute, useRouter } from 'vue-router'
import Container from '@/components/base/Container.vue'
import Img from '@/components/base/Img.vue'
import Row from '@/components/base/Row.vue'
import Icon from '@/components/base/Icon.vue'
import CardSimilarMovie from '@/components/main/movie/detailsSection/CardSimilarMovie.vue'
import { listCount } from '@/data/listCount.js'
import { nanoid } from 'nanoid'
import { useFetchDetailMovie } from '@/composables/useDetailMovie.js'
import { useFetchSimilar } from '@/composables/useFetchSimilarMovie.js'
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

const router = useRouter()
const route = useRoute()
const isMobile = ref(false)
const { dataDetailMovie, isLoadingDetailMovie, errorDetailMovie } = useFetchDetailMovie(
  route.params.id,
  'credits'
)
const { dataSimilar, isLoadingSimilar, errorSimilar } = useFetchSimilar(route.params.id)

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
const dataHome = ref('')

const details = computed(() => {
  const dataGenres = ref('')
  const dataCredits = ref([])
  const dataTime = ref('')
  const dataComponies = ref([])

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

  // componies
  if (props.detail?.production_companies) {
    dataComponies.value = props.detail?.production_companies
      .map((item) => {
        return item.name
      })
      .join(' ,')
  }

  return {
    dataGenres,
    dataCredits,
    dataTime,
    dataComponies
  }
})

// link pages
const linkPages = computed(() => {
  // dataHome
  if (props.detail?.homepage) {
    dataHome.value = props.detail?.homepage
  }
  return dataHome.value
})

// isMobile resize handler
const widthHandler = () => {
  isMobile.value = window.innerWidth < 830
}

onMounted(() => {
  widthHandler()
  useEventListener(window, 'resize', widthHandler)
})

onUnmounted(() => {
  useEventListener(window, 'resize', widthHandler)
})

// const logoCom = computed(() => {
//   const logo = ref(null)
//   if(props.detail?.production_companies){
//     logo.value =  props.detail?.production_companies.map(item => item.logo_path)
//   }
//   return `https://image.tmdb.org/t/p/w500/${logo.value}`
// })
</script>
