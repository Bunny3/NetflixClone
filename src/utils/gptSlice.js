import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: 'gpt',
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
    searchMovies: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
    addGptSearchResult: (state,action) => {
      state.searchMovies = action.payload;
    }
  },
});

export const { toggleGptSearchView, addGptMovieResult, addGptSearchResult } = gptSlice.actions;
export default gptSlice.reducer;