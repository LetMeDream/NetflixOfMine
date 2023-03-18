import { useState, useEffect } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import MovieCarrousel from './MovieCarrousel'
import { useWindowSize } from '../utils/useWindowSize'

/* API base routes */
const resourcesUrlBase = 'https://image.tmdb.org/t/p/w500'
const moviesUrlBase = 'https://api.themoviedb.org/3'

const Banner = () => {
  const [mainMovie, setMainMovie] = useState({})
  const [trendingMovies, setTrendingMovies] = useState([])
  const [topRatedMovies, setTopRatedMovies] = useState([])
  const [comedyMovies, setComedyMovies] = useState([])
  const size = useWindowSize()

  useEffect(() => {
    fetchMainMovie()
    fetchTrending()
    fetchTopRated()
    fetchComedy()
    console.log(size.width)
  }, [size])
  const moviesPerPage = () => {
    if (size.width < 600) {
      return 1
    } else if (size.width < 900) {
      return 4
    }
    return 6
  }

  async function fetchTrending () {
    try {
      const response = await fetch(`${moviesUrlBase}/trending/all/week?api_key=d2c77efb4e336d0550f3c1f2c1cde379&language=en-US`)
      const data = await response.json()
      /* console.log(data.results) */
      setTrendingMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchMainMovie () {
    try {
      const response = await fetch(`${moviesUrlBase}/movie/550?api_key=d2c77efb4e336d0550f3c1f2c1cde379`)
      const data = await response.json()
      /* console.log(data) */
      setMainMovie(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchTopRated () {
    try {
      const response = await fetch(`${moviesUrlBase}/movie/top_rated?api_key=d2c77efb4e336d0550f3c1f2c1cde379&language=en-US`)
      const data = await response.json()
      setTopRatedMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  async function fetchComedy () {
    try {
      const response = await fetch(`${moviesUrlBase}/discover/movie?api_key=d2c77efb4e336d0550f3c1f2c1cde379&with_genres=35`)
      const data = await response.json()
      setComedyMovies(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <section
        style={{
          backgroundImage: `url(${resourcesUrlBase}${mainMovie.backdrop_path})`,
          backgroundSize: '100% 100%',
          backgroundColor: 'black'
        }}
        className='banner relative min-h-screen p-10 pt-20 text-white bg-no-repeat bg-center flex items-center'
      >
        <aside
          className='w-full md:w-3/6 drop-shadow-2xl caret-transparent'
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.98)'
          }}
        >
          <h2 className='text-6xl font-roboto mb-4'>
            {mainMovie.title}:
          </h2>
          <p className='max-w-prose text-montserrat mb-6'>
            {mainMovie.overview}
          </p>
          <div className='buttons flex gap-2'>
            <button className='btn bg-white text-black rounded-sm outline-none hover:border-black flex items-center'>
              <BsFillPlayFill className='text-2xl' />
              <span>Play</span>
            </button>
            <button className='btn bg-gray-500 text-white rounded-sm outline-none hover:border-black flex items-center gap-2'>
              <AiOutlineInfoCircle className='text-2xl' />
              <span>More info</span>
            </button>
          </div>
        </aside>
      </section>
      <MovieCarrousel
        movies={topRatedMovies}
        title='Top rated movies in the US'
        moviesPerPage={moviesPerPage()}
      />
      <MovieCarrousel
        movies={trendingMovies}
        title='Trending movies in the US'
        moviesPerPage={moviesPerPage()}
      />
      <MovieCarrousel
        movies={comedyMovies}
        title='All laughs, no laugh Track'
        moviesPerPage={moviesPerPage()}
      />
    </div>

  )
}

export default Banner
