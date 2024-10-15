import React from 'react'
import MovieCard from './MovieCard'
const Movielist = ({title,movies}) => {
   // console.log(movies)
  return (
    <div>
          <div className="p-4">
          <h1 className='text-3xl py-2 text-white'>{title}</h1>
          <div className="flex overflow-x-scroll">
      
      
        <div className='flex '>
        {movies && movies.length > 0 ? (
  movies.map((item) => <MovieCard key={item.id} item={item} />)
) : (
  <p>No movies available</p>
)}
</div>
</div>
        </div></div>
  )
}

export default Movielist