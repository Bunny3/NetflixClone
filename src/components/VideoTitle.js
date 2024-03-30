import React from 'react';
import { IoIosInformationCircleOutline, IoMdPlay } from "react-icons/io";

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-bold'>{title}</h1>
      <p className='py-6 text-lg w-1/4'>{overview}</p> 
      <div className=' '>
        <button className='bg-white text-black p-4 px-12 text-xl rounded-lg mr-5 hover:bg-opacity-80'>
          <div className='flex'>
          <span><IoMdPlay/></span>
          <span className='mb-2'>Play</span>
          </div>
        </button>
        <button className='bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
        
        <div className='flex'>
          <span><IoIosInformationCircleOutline /></span>
          <span >More Info</span>
          </div></button>
      </div>
    </div>
  )
}

export default VideoTitle;