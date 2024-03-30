import { useEffect } from "react";
import { API_OPTION } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

  const dispatch = useDispatch();
  const nowPlayMovies = useSelector(store => store.movies.nowPlayMovies);
  const getNowPlayingMovies = async() => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTION
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    if(!nowPlayMovies) getNowPlayingMovies();
  },[]);
}

export default useNowPlayingMovies;