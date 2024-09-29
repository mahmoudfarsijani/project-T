import { ref } from 'vue'
import axios from 'axios'

export const useFetchAllCat = () => {
  const dataAllCat = ref([])
  const errorDataCat = ref(null)
  const isLoadingDataCat = ref(false)

  const fetchData = async () => {
    isLoadingDataCat.value = true
    try {
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
      dataAllCat.value = response.data.categories
    } catch (error) {
      errorDataCat.value = error.message
    } finally {
      isLoadingDataCat.value = false
    }
  }

  fetchData()

  return {
    dataAllCat,
    errorDataCat,
    isLoadingDataCat
  }
}
