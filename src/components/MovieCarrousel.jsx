import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css'
/* Icons */
import { GrFormNext } from 'react-icons/gr'

const resourcesUrlBase = 'https://image.tmdb.org/t/p/w500'

const Trending = ({ movies, title, moviesPerPage }) => {
  return (
    <div className='px-20 pt-6 bg-gray-900'>

      <h2 className='text-white text-2xl mb-6'>
        {title}
      </h2>

      <Splide
        hasTrack={false}
        options={
          {
            perPage: moviesPerPage,
            perMove: moviesPerPage !== 1 ? 2 : 1,
            pagination: false
          }
        }
      >
        <SplideTrack>
          {movies && movies.map((movie) => {
            return (
              <SplideSlide key={movie.id}>
                <div
                  className='flex flex-col items-center text-white text-center cursor-pointer'
                >
                  <div className='overflow-hidden'>
                    <img
                      src={`${resourcesUrlBase}${movie.backdrop_path}`} alt={`Image for ${movie.title ? movie.title : movie.name}`}
                      className='bg transition-all duration-500 ease-in-out hover:scale-110'
                    />
                  </div>
                  <p
                    title={movie.overview}
                  >
                    {movie.original_title ? movie.original_title : movie.name}
                  </p>
                </div>
              </SplideSlide>
            )
          })}
        </SplideTrack>
        <div className='splide__arrows'>
          <button type='button' atia-controls='splide01-track' className='splide__arrow splide__arrow--prev -left-10 fill-white'>
            <GrFormNext className='text-4xl' />
          </button>
          <button type='button' atia-controls='splide01-track' className='splide__arrow splide__arrow--next -right-10'>
            <GrFormNext className='text-4xl' />
          </button>
        </div>

      </Splide>

    </div>
  )
}

export default Trending
