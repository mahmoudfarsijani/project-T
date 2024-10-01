import { ref } from 'vue'
import axios from 'axios'

export const useFetchDetail = (mealId) => {
  const dataDetailMeal = ref({})
  const ingredients = ref([])
  const isLoadingDetailMeal = ref(false)
  const errorDetailMeal = ref('')

  const fetchData = async () => {
    isLoadingDetailMeal.value = true
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      )
      dataDetailMeal.value = await response.data.meals[0]

      const ingredientList = []
      for (let i = 1; i <= 20; i++) {
        const ingredient = dataDetailMeal.value[`strIngredient${i}`]
        const measure = dataDetailMeal.value[`strMeasure${i}`]
        if (ingredient && ingredient.trim()) {
          ingredientList.push(`${ingredient} : ${measure}`)
        }
      }
      ingredients.value = ingredientList
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
    errorDetailMeal,
    ingredients
  }
}
