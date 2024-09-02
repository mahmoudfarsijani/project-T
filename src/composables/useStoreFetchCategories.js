import axios from 'axios'
import { ref } from 'vue'

export const useStoreFetchCat = (name, category = '', catName = '') => {
  const dataStoreCat = ref([])
  const isLoadingStoreCat = ref(false)
  const errorStoreCat = ref(null)

  const fetchData = async () => {
    isLoadingStoreCat.value = true
    try {
      const response = await axios.get(`https://dummyjson.com/${name}/${category}/${catName}`)
      dataStoreCat.value = response.data
    } catch (error) {
      errorStoreCat.value = error.message
    } finally {
      isLoadingStoreCat.value = false
    }
  }

  fetchData()

  return {
    dataStoreCat,
    isLoadingStoreCat,
    errorStoreCat
  }
}
