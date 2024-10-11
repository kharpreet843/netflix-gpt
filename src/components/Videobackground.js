import React, { useEffect, useState } from 'react'
import { API_OPTIONS } from '../utilis/constants'
import useMovietrailer from './hooks/useMovietrailer';
import { useSelector } from 'react-redux'
const VideoBackground = ({movieId}) => {

useMovietrailer(movieId)


// Retrieve the trailer video from Redux state
const TrailerVideo = useSelector((store) => store.movies.TrailerVideo);

// Log to see the value of TrailerVideo
//console.log('TrailerVideo from Redux Store:', TrailerVideo);

// Only render the iframe if TrailerVideo and TrailerVideo.key exist
return (
  <div className='relative w-screen'>
    {TrailerVideo && TrailerVideo.key ? (
      <iframe
       className='w-screen aspect-video'
        src={`https://www.youtube.com/embed/${TrailerVideo.key}?autoplay=1&mute=1`}
        title="YouTube video player"

        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    ) : (
      <p>Loading trailer...</p>
    )}
  </div>
);
}

export default VideoBackground 