<template>
  <div class="w-[100%] md:max-w-[350px] lg:max-w-[550px] mx-auto">
    <InputBox
      @update:modelValue="searching"
      icons="search"
      :is-left="true"
      :is-title="false"
      :is-white="true"
      :is-right="true"
      :is-bigged="true"
      placeholder="Come On..."
    />
    <Row
      tag="ul"
      v-if="dataInput.length > 2"
      :is-col="true"
      :is-no-wrap="true"
      class="bg-gray-200 mt-[-4px] py-[10px] px-[8px] rounded-b-md gap-[20px] overflow-y-auto max-h-[350px] justify-start items-start"
    >
      <CardFindMeal v-for="item in datas" :key="item.idMeal" :dataFinded="item" />
    </Row>
    <div v-else-if="isLoading" class="w-full mx-auto">
      <span class="loading loading-ring loading-lg bg-black"></span>
    </div>
    <div v-if="!datas" class="bg-gray-200 mt-[-4px] rounded-b-md flex justify-center py-[5px]">
      <span class="capitalize text-slate-900"> not found! </span>
    </div>
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
const isLoading = ref(false)

const searching = (data) => {
  dataInput.value = data
}

const fetchDatas = async () => {
  if (dataInput.value.length > 2) {
    isLoading.value = true
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${dataInput.value}`
      )
      const res = await response.json()
      datas.value = res.meals
    } catch (error) {
      console.log(error)
    } finally {
      isLoading.value = false
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
