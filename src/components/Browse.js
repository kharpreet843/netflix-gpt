import React, { useEffect } from 'react'
import Header from './Header';
import useMovies from './hooks/useMovies';
import MainContainer from './MainContainer';
const Browse = () => {
  useMovies();
  return (
    <div>    <Header/>
    <MainContainer/>
    
    
    </div>
  )
}

export default Browse;
