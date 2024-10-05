<template>
  <div class="text-white flex flex-col gap-[20px]">
    <InputAutoSearch
      type="text"
      placeholder="Search..."
      @update:model-value="searched"
      :is-full="true"
    />
    <Row tag="ul" :is-col="true" class="gap-[15px]">
      <CardListMovie v-for="item in data" :key="item.id" :movies="item" />
    </Row>
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
// const inputValue = ref('')
const data = ref([])
const fetchData = debounce(async (dataValue) => {
  if (dataValue.length > 2) {
    try {
      const response = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${dataValue}&include_adult=false&language=en-US&page=1`,
        options
      )
      data.value = response.data.results
    } catch (err) {
      console.log(err)
    }
  } else {
    data.value = []
  }
}, 300)

const searched = (v) => {
  fetchData(v)
}
</script>
