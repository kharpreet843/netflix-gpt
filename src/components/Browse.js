import React, { useEffect } from 'react'
import Header from './Header';
import useMovies from './hooks/useMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from './hooks/usePopular';
const Browse = () => {
  useMovies();
  usePopular();
  return (
    <div>   
       <Header/>
    <MainContainer/>
    <SecondaryContainer/>
    
    </div>
  )
}

export default Browse;
