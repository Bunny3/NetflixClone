import React from 'react'
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { netflix_background } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
    <div className='fixed -z-10'>
      <img 
        className='w-screen h-screen object-cover'
        src={netflix_background}
        alt='logo'
      ></img>
    </div>
    <div className=''>
      <GptSearchBar/>
      <GptMovieSuggestion/>
    </div>
    </>
  )
}

export default GptSearch;