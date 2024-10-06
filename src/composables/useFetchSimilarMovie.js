import { ref } from 'vue'
import axios from 'axios'

export const useFetchSimilar = (movieId) => {
  const dataSimilar = ref([])
  const isLoadingSimilar = ref(false)
  const errorSimilar = ref(null)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsIm5iZiI6MTcyODIwNzEyMS42NzMzMzIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oKG2FlstoGGcRN38VeVj-cJwZqJus4VNTOp-jwH06Z8'
    }
  }

  const fetchData = async () => {
    isLoadingSimilar.value = true
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${movieId}/similar?language=en-US&page=1`,
        options
      )
      dataSimilar.value = response.data.results
    } catch (error) {
      errorSimilar.value = error.message
    } finally {
      isLoadingSimilar.value = false
    }
  }

  fetchData()

  return {
    dataSimilar,
    isLoadingSimilar,
    errorSimilar
  }
}
