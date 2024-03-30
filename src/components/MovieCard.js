import React from 'react'
import { IMG_CND } from '../utils/constants';

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-48 pr-4'>
      <img alt="Movie Card" src={IMG_CND+posterPath}/>
    </div>
  )
};

export default MovieCard;