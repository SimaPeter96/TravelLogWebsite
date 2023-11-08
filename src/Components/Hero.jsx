import React from 'react'
import Img from '../Images/landingIMG.jpg';

function Hero() {
  return (
    <div className='w-full h-[98vh]'>
      <img src={Img}  alt="Image" className='w-full h-screen object-cover'  />

    </div>
  )
}

export default Hero
