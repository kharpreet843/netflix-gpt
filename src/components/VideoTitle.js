import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="pt-36 px-12 absolute bg-gradient-to-r from-black w-screen aspect-video">
        <h1 className="font-bold text-3xl p-6 text-white">{title}</h1>
        <p className='p-6 text-lg text-white w-1/4'>{overview}</p>
        <div className="flex gap-2">
<button className='text-black bg-gray-500 p-4 w-40'>Play</button>
<button className='text-black bg-blue-500 p-4 w-50' >More info</button>
        </div>
        </div>
  )
}

export default VideoTitle;
