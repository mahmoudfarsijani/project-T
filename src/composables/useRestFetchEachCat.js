import { ref } from 'vue'
import axios from 'axios'

export const useFetchEachCat = (catName) => {
  const dataEachCat = ref([])
  const isLoadingEachCat = ref(false)
  const errorEachCat = ref(null)

  const fetchData = async () => {
    isLoadingEachCat.value = true
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catName}`)
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
