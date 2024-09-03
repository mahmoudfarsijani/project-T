import axios from 'axios'
import { ref } from 'vue'

export const useStoreFetch = (id = '') => {
  const dataStore = ref([])
  const isLoadingStore = ref(false)
  const errorStore = ref(null)
  const fetchData = async () => {
    isLoadingStore.value = true
    try {
      const response = await axios.get(`https://dummyjson.com/products${id ? `/${id}` : ''}`)
      console.log(response);
      dataStore.value = response.data
    } catch (error) {
      errorStore.value = error.message
    } finally {
      isLoadingStore.value = false
    }
  }
  fetchData()

  return {
    dataStore,
    errorStore,
    isLoadingStore
  }
}
