import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './Videobackground';

const MainContainer = () => {
    const movies=useSelector(store=>store.movies.NowPlayingMovies);
 //   console.log(JSON.stringify(movies, null, 2));
    if(movies==null) return;
    const Mainmovie=movies[0]
//    console.log(Mainmovie)
const {title,overview,id}=Mainmovie;
  return (
    <div>
      <VideoTitle title={title} overview={overview}/>
       <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer