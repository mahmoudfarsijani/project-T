import { ref } from 'vue'
import axios from 'axios'

export const useFetchDetailMovie = (value) => {
  const dataDetailMovie = ref({})
  const isLoadingDetailMovie = ref(false)
  const errorDetailMovie = ref(null)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsIm5iZiI6MTcyODExOTAzMy4xMDQyMDksInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1dqXjQKqV5E9dS1V_4tnyT5DKCU7TOmqkSeNBkfSFvU'
    }
  }

  const fetchData = async () => {
    isLoadingDetailMovie.value = true
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${value}?language=en-US`,
        options
      )
      dataDetailMovie.value = response.data
    } catch (error) {
      errorDetailMovie.value = error
    } finally {
      isLoadingDetailMovie.value = false
    }
  }
  fetchData()

  return {
    dataDetailMovie,
    isLoadingDetailMovie,
    errorDetailMovie
  }
}
