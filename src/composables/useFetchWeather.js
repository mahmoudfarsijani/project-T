import { ref } from 'vue'
import axios from 'axios'

export const useFetchWeather = () => {
  const dataWeather = ref({})
  const isLoadingWeather = ref(false)
  const errorWeather = ref(null)
  const api_key = '8bb7695670955dea30d29790a6ef51a7'

  const fetchData = async (url) => {
    isLoadingWeather.value = true
    try {
      const response = await axios.get(url)
      console.log(response.data)
      dataWeather.value = response.data
    } catch (error) {
      errorWeather.value = error.message
    } finally {
      isLoadingWeather.value = false
    }
  }

  return {
    dataWeather,
    isLoadingWeather,
    errorWeather,
    fetchData
  }
}
