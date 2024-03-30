import React from 'react'
import { IMG_CND } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';

const MovieCard = ({posterPath,movieId}) => {
  // useMovieTrailer(movieId);
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img className='md:hover:scale-150' alt="Movie Card" src={IMG_CND+posterPath}/>
    </div>
  )
};

export default MovieCard;