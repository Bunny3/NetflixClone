import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const gpt = useSelector(store=>store.gpt);
  const {movieResults, movieNames, searchMovies} = gpt;
  if(!movieNames) return null;
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        <MovieList key="SearchMovie" title="Search Results" movies={searchMovies}/>
      </div>
      <div>
        {movieNames.map((movieName,index) => 
          <MovieList key={movieName+''+index} title={movieName+' similar movies '} movies={movieResults[index]}/>)}
      </div>
    </div>
  )
}

export default GptMovieSuggestion;