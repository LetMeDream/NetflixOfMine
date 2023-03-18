const moviesUrlBase = 'https://api.themoviedb.org/3'

export async function fetchTrending () {
  try {
    const response = await fetch(`${moviesUrlBase}/trending/all/week?api_key=d2c77efb4e336d0550f3c1f2c1cde379&language=en-US`)
    const data = await response.json()
    /* console.log(data.results) */
    return data.results
  } catch (error) {
    console.log(error)
  }
}

export async function fetchMainMovie () {
  try {
    const response = await fetch(`${moviesUrlBase}/movie/550?api_key=d2c77efb4e336d0550f3c1f2c1cde379`)
    const data = await response.json()
    /* console.log(data) */
    return data
  } catch (error) {
    console.log(error)
  }
}
