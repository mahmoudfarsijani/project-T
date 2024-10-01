import { ref } from 'vue'
import axios from 'axios'

export const useFetchEachCat = (
  filter = '',
  lists = '',
  c = '',
  a = '',
  catName = '',
  list = '',
  country=''
) => {
  const dataEachCat = ref([])
  const isLoadingEachCat = ref(false)
  const errorEachCat = ref(null)

  const fetchData = async () => {
    isLoadingEachCat.value = true
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/${filter || lists}.php?${c || a}=${catName || list || country}`
      )
      console.log(response)
      dataEachCat.value = response.data.meals
    } catch (error) {
      errorEachCat.value = error.message
    } finally {
      isLoadingEachCat.value = false
    }
  }

  fetchData()

  return {
    dataEachCat,
    isLoadingEachCat,
    errorEachCat
  }
}
