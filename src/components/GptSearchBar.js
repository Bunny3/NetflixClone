import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai'
import { API_OPTION } from '../utils/constants';
import { addGptMovieResult, addGptSearchResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const languageKey = useSelector(store => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
    movie+"&include_adult=false&language=en-US&page=1", API_OPTION);
    const json = await data.json();
    return json.results;
  };

  const recomendation = async(movie) => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"
    +movie+"/recommendations?language=en-US&page=1", API_OPTION);
    const json = await data.json();
    return json.results;
  }
  const handleGptSearchClick = async() => {
    // Make an api call to GPT API and get Movie results -> chat gpt UI

    //Inorder to Comment ChatGPT comment the lines the block till line 47
    const gptQuery = "Act as a Movie Recomendation System and suggest some movies for the query : "+ searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil gaya";
    async function main() {
      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: gptQuery }],
        model: 'gpt-3.5-turbo',
      });
      if(!chatCompletion.choices) {
        console.log("Error");
      }
      const gptMovies = chatCompletion.choices?.[0]?.message?.content.split(",");

      //Search for each movie :
      const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      // console.log(tmdbResults);
      dispatch(addGptMovieResult({movieNames:gptMovies,movieResults:tmdbResults}));
    }
    
    main();
// Comment Till here
    // //Recomendation Code block:
    // const getMovieData  = await searchMovieTMDB(searchText.current.value);
    // const data = await Promise.resolve(getMovieData);
    // dispatch(addGptSearchResult(data));
    // const gptMovies = data.map(movie => [movie.id,movie.title]);    
    // const recomendationPromiseArray = await gptMovies.map(movie=>recomendation(movie[0]));
    // const recomendationResults = await Promise.all(recomendationPromiseArray);
    // const gptMoviesName = gptMovies.map(movie=>movie[1]);
    // dispatch(addGptMovieResult({movieNames:gptMoviesName,movieResults:recomendationResults}));
    // //Comment Till here for recommendation code block
  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className='w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg' onSubmit={(e)=>e.preventDefault()}>
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder={lang[languageKey].gptSearchPlaceholder}/>
        <button 
        className='py-2 px-4 m-4 bg-red-700 text-white rounded lg col-span-3'
        onClick={handleGptSearchClick}>
          {lang[languageKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;