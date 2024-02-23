import React from 'react'
// import logo from "./../assets/logo.jpg"
const logo = "https://res.cloudinary.com/dm1tnakkg/image/upload/v1708713680/assets/logo_dqafgx.jpg"

function Loading() {
  return (
    // <div className='hero h-full'>
      <div className="hero h-screen bg-white relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-yellow-600"></div>
        <img src={logo}  className="rounded-full h-28 w-28" />
      </div>
    // </div>
  )
}

export default Loading