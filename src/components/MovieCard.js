import React from 'react';
import { POSTER } from '../utilis/constants';

const MovieCard = (props) => {
  return (
    <div>
 <div className="w-80 p-2" >
        <img src={POSTER+props.item.poster_path}>

    </img>

    </div>
    </div>
  )
}

export default MovieCard