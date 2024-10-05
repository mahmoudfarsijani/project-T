<template>
  <div class="text-white flex flex-col w-[100%] max-w-[650px]  h-[400px]">
    <InputAutoSearch
      type="text"
      placeholder="Search..."
      @update:model-value="searched"
      :is-full="true"
    />
    <Row  tag="ul" v-if="datas.length" :is-col="true" class="gap-[15px]  max-h-[350px] overflow-y-scroll flex-nowrap mt-[-5px] bg-gray-200  px-[10px] rounded-b-md pt-[10px]" >
      <CardListMovie v-for="item in datas" :key="item.id" :movies="item" />
    </Row>
    <div v-if="!datas" class="flex justify-center bg-gray-200">
        <p class="text-red-700 capitalize">not found!</p>
    </div>
  </div>
</template>

<script setup>
import InputAutoSearch from '@/components/base/InputAutoSearch.vue'
import Row from '@/components/base/Row.vue'
import CardListMovie from '@/components/main/movie/CardListMovie.vue'
import { ref } from 'vue'
import { debounce } from 'lodash'
import axios from 'axios'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsIm5iZiI6MTcyODExOTAzMy4xMDQyMDksInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1dqXjQKqV5E9dS1V_4tnyT5DKCU7TOmqkSeNBkfSFvU'
  }
}
const inputValue = ref('')
const datas = ref([])
const fetchData = debounce(async (dataValue) => {
  if (dataValue.length > 2) {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${dataValue}&include_adult=false&language=en-US&page=1`,
        options
      )
      datas.value = response.data.results
    } catch (err) {
      console.log(err)
    }
  } else {
    datas.value = []
  }
}, 300)

const searched = (v) => {
  fetchData(v)
  inputValue.value = v
}
</script>
