<template>
  <div class="w-[100%]  md:max-w-[350px] lg:max-w-[550px] mx-auto">
    <InputBox @update:modelValue="searching" icons="search" :is-left="true" :is-title="false" :is-white="true" :is-right="true" :is-bigged="true"/>
    <Row tag="ul" v-if="dataInput.length > 2" :is-col="true" class="bg-gray-200 mt-[-4px] py-[10px] px-[10px] rounded-b-md gap-[20px]">
       <CardFindMeal v-for="item in datas" :key="item.idMeal" :dataFinded="item"/>
    </Row>
  </div>
</template>

<script setup>
import InputBox from '@/components/main/store/InputBox.vue'
import Row from '@/components/base/Row.vue'
import CardFindMeal from '@/components/main/resturant/CardFindMeal.vue'

import { ref, watch } from 'vue'
import { debounce } from 'lodash'

const dataInput = ref('')
const datas = ref([])

const searching = (data) => {
  dataInput.value = data
}

const fetchDatas = async () => {
  if (dataInput.value.length > 2) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${dataInput.value}`
      )
      const res = await response.json()
      datas.value = res.meals
    } catch (error) {
      console.log(error)
    }
  } else {
    datas.value = []
  }
}

const fetchDebounce = debounce(fetchDatas, 200)

watch(dataInput, () => {
  fetchDebounce()
})
</script>
