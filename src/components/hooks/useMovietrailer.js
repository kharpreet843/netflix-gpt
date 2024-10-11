import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addTrailervideo } from '../../utilis/movieSlice';
import { API_OPTIONS } from '../../utilis/constants';

const useMovietrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    try {
      console.log("Movie ID:", movieId);
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await response.json();
      const results = json.results;

      if (results && results.length > 0) {
        const filteredData = results.filter(
          (video) => video.type === 'Trailer' || video.type === 'Official Trailer'
        );
        const trailer = filteredData.length ? filteredData[0] : results[0];
        console.log("Trailer Data:", trailer); // Check the trailer data before dispatch
        dispatch(addTrailervideo(trailer)); // Dispatch the trailer object
      } else {
        console.log('No trailer found for this movie.');
      }
    } catch (error) {
      console.error('Error fetching trailer:', error);
    }
  };

  useEffect(() => {
    if (movieId) {
      getMovieTrailer();
    }
  }, [movieId]);
};

export default useMovietrailer;
