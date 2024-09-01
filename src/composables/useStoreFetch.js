import axios from 'axios'
import { ref } from 'vue'

export const useStoreFetch = () => {
  const dataStore = ref([])
  const isLoading = ref(false)
  const errorStore = ref(null)
  const fetchData = async () => {
    isLoading.value = true
    try {
      const response = await axios.get('https://dummyjson.com/products')
      dataStore.value = response.data
    } catch (error) {
      errorStore.value = error.message
    } finally {
      isLoading.value = false
    }
  }
  fetchData()

  return {
    dataStore,
    errorStore,
    isLoading
  }
}
