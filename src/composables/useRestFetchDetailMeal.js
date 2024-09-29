import { ref } from 'vue'
import axios from 'axios'

export const useFetchDetail = (mealId) => {
  const dataDetailMeal = ref({})
  const isLoadingDetailMeal = ref(false)
  const errorDetailMeal = ref('')

  const fetchData = async () => {
    isLoadingDetailMeal.value = true
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      )
      dataDetailMeal.value = await response.data.meals
    } catch (error) {
      errorDetailMeal.value = error.message
    } finally {
      isLoadingDetailMeal.value = false
    }
  }

  fetchData()

  return {
    dataDetailMeal,
    isLoadingDetailMeal,
    errorDetailMeal
  }
}
