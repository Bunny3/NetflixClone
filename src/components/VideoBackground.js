import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer';
import { useSelector } from 'react-redux';

//fetch trailer
const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector(store=>store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className='w-screen'>
      
      <iframe 
      className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/"+trailerVideo?.key+"?autoplay=1&mute=1&loop=3;playlist="+trailerVideo?.key} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerPolicy="strict-origin-when-cross-origin" 
      n></iframe>
    </div>
  )
};
{/* <iframe src="https://www.youtube.com/embed/E7yQbq83Qig" title="KUNG FU PANDA 4 | New Final Trailer (HD)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
export default VideoBackground;