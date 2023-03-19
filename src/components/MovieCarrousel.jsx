import React from 'react'
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
// Default theme
import '@splidejs/react-splide/css'
/* Icons */
import { GrFormNext } from 'react-icons/gr'
import { AiOutlineHeart } from 'react-icons/ai'

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
                  className='flex flex-col items-center text-white text-center cursor-pointer group'
                >
                  <div className='overflow-hidden relative'>
                    <img
                      src={`${resourcesUrlBase}${movie.backdrop_path}`} alt={`Image for ${movie.title ? movie.title : movie.name}`}
                      className='bg transition-all duration-500 ease-in-out hover:scale-110 z-10 relative'
                    />
                    <div className='transition-all duration-300 pointer-events-none absolute z-20 opacity-0 group-hover:opacity-70 bg-slate-800 w-full h-full top-0 left-0 flex flex-col justify-around'>
                      <p className='text-sm leading-3 overflow-hidden text-clip'>
                        {movie.overview.split(' ').slice(0, 15).join(' ')}...
                      </p>
                      <div className='img-footer flex justify-around items-center'>
                        <div className='rate text-md'>
                          {movie.vote_average.toFixed(2)}/10
                        </div>
                        <div className='like pointer-events-auto text-lg'>
                          <AiOutlineHeart className='hover:text-red-500' />
                        </div>
                      </div>
                    </div>
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
          <button type='button' aria-controls='splide01-track' className='splide__arrow splide__arrow--prev -left-10 fill-white'>
            <GrFormNext className='text-4xl fill-white' />
          </button>
          <button type='button' aria-controls='splide01-track' className='splide__arrow splide__arrow--next -right-10'>
            <GrFormNext className='text-4xl' />
          </button>
        </div>

      </Splide>

    </div>
  )
}

export default Trending
