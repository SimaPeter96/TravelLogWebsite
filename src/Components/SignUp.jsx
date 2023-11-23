import React from 'react'
import ImgBg from '../Images/wineImg.jpg'
import Img from '../Images/blueBg.png'

function SignUp() {
  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/2 relative'>
      <img src={ImgBg} alt="WineImg" className="w-full h-full object-cover" />
      </div>
      <div className='absolute top-2 left-0 right-0 text-left mt-10 ml-10'>
        <div className='SignUpHeading py-12'>
          <span className='text-4xl font-bold mt-32 ml-32 text-blue mix-blend-overlay font-poppins'>
            MOTHER CITY TOURS
          </span>
          <div className='slogan ps-48'>
          <h2 className='text-md font-bold  text-blue mix-blend-overlay font-poppins'>EXPERIENCE ENJOY EXPLORE</h2>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img src={Img} alt=""  className="w-full h-full object-cover"></img>
      <div className="SignUptitle absolute top-0 left-10 right-25text-center mt-10 ">
        <span className='text-4xl font-bold text-blue mix-blend-overlay font-poppins' >SIGN UP</span>
        <div className='subheading'>
          <h2 className='text-md font-bold  text-white font-poppins'>Create your account</h2>
        </div>
      </div>
      <div>
        
      </div>
      </div>
    </div>
  )
}

export default SignUp