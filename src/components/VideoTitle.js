import React from 'react';
import { IoIosInformationCircleOutline, IoMdPlay } from "react-icons/io";
import Popup from 'reactjs-popup';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p> 
      <div className='my-2 md:m-0'>
        <button className='bg-white text-black py-1 md:py-4 px-3 md:px-12 my-2 text-xl rounded-lg mr-5 hover:bg-opacity-80'>
          <div className='flex'>
          <span className='my-2 mr-1'><IoMdPlay/></span>
          <span className='my-1'>Play</span>
          </div>
        </button>
        <button className='hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>
        <div className='flex'>
          <span className='my-2 mr-1'><IoIosInformationCircleOutline /></span>
          <span className='my-1'>More Info</span>
          </div>
        </button>
      </div>
    </div>
  )
}

export default VideoTitle;