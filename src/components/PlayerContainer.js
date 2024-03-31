import React from 'react'
import { useSelector } from 'react-redux';
import VideoPlayer from './VideoPlayer';

const PlayerContainer = () => {
  const movieId = useSelector(store=> store.movies.playCurrentMovie);
  return (
    <div>
      {
        movieId && 
        <VideoPlayer movieId={movieId}/>
      }
    </div>
  )
}

export default PlayerContainer;