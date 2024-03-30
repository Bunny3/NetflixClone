import React from 'react'
import MovieCard from './MovieCard';
import Shimmer from './Shimmer';

const MovieList = ({title, movies}) => {
  return movies?.length >0 ?( 
    <div className='px-6 text-white'>
      <h1 className='text-lg md:text-3xl py-4'>{title}</h1>
      <div className='flex overflow-x-scroll'>
        <div className='flex'>
          {movies?.map(movie => 
          <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id}/>)}
        </div>
      </div>
    </div>
  ) : null;
}

export default MovieList;