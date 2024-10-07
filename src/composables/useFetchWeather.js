import { ref } from "vue";
import axios from 'axios'


const useFetchWeather = (name) => {
    const dataWeather = ref({})
    const isLoadingWeather = ref(false)
    const errorWeather = ref(null)

    const fetchData = async () => {
        isLoadingWeather.value = true {
            try {
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${import.meta.env.VITE_API_KEY_WEATHER}`)
                dataWeather.value = response.data
            } catch(error) {
                errorWeather.value = console.error(.message);
            } finally {
                isLoadingWeather.value = false
            }
        }
    }
    fetchData()

    return {
        dataWeather,
        isLoadingWeather,
        errorWeather
    }
}