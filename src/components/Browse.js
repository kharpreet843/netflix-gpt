import React, { useEffect } from 'react'
import Header from './Header';
import useMovies from './hooks/useMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopular from './hooks/usePopular';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  useMovies();
  usePopular();
  const sGptSearch=useSelector((store)=>store.gpt.showgptSearch);
  console.log(sGptSearch)
  return (
    <div>   
       <Header/>
       {sGptSearch ? <GptSearch/> : <>  <MainContainer/>
        <SecondaryContainer/></>}
  
    
    </div>
  )
}

export default Browse;
