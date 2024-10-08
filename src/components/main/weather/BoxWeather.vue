<template>
  <div class="flex  justify-center h-screen items-center gap-[50px]">
    <div class="w-full h-[350px] flex flex-col gap-[35px]  items-center ">
      <SearchCity @update:input-value="findName" />
      <div v-if="isLoadingWeather">
        <!-- loading -->
        <span class="loading loading-ring loading-lg"></span>
      </div>
      <div v-else-if="errorWeather">
        <!-- error -->
        {{ errorWeather }}
      </div>
      <CardInfoWeather v-else="dataWeather" :details="dataWeather" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CardInfoWeather from '@/components/main/weather/CardInfoWeather.vue'
import { useFetchWeather } from '@/composables/useFetchWeather.js'
import SearchCity from '@/components/main/weather/SearchCity.vue'

const api_key = '8bb7695670955dea30d29790a6ef51a7'
const { dataWeather, isLoadingWeather, errorWeather, fetchData } = useFetchWeather()

const findName = (v) => {
  fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${v}&appid=${api_key}`)
}
</script>
