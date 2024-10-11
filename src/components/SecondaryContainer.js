import React from 'react'
import Movielist from './Movielist'
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
    const movielist=useSelector(store=>store.movies)
    console.log(movielist)
  return (
  <>
    {movielist.NowPlayingMovies && (
      <div className='bg-black'>
        <Movielist title="Now Playing" movies={movielist.NowPlayingMovies} />
      </div>
    )}

    {movielist.PopularMovies && (
      <div className='bg-black'>
        <Movielist title="Popular" movies={movielist.PopularMovies} />
      </div>
    )}
  </>
);
}

export default SecondaryContainer