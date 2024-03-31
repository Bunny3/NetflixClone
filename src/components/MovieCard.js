import React from 'react'
import { IMG_CND } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addPlayCurrentMovie, addTrailerVideo } from '../utils/movieSlice';
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useNavigate } from 'react-router-dom';

const MovieCard = ({posterPath,movieId}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handlePlayMovie = (event,movieId) => {
    console.log("This need to be played ", event, movieId);
    dispatch(addPlayCurrentMovie(movieId));
    navigate("/watch");
  };
  // useMovieTrailer(movieId);
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img className='' alt="Movie Card" src={IMG_CND+posterPath} onClick={(e)=>handlePlayMovie(e,movieId)}/>
    </div>
  )
};

export default MovieCard;