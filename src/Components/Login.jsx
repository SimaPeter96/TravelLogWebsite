import React from 'react'
import BgImg1 from '../Images/BgImage.png'
import Bokaap from '../Images/BokaapImg.jpg'

const Login = () => {
  return (
    <div className="w-screen h-screen grid grid-rows 2 md:grid-cols-2">
       <div className="w-full h-full centered md:h-screen">
        <img src={BgImg1} alt="" className='flex h-full w-full items-center'/>
         </div>
         <div className="w-full h-full centered md:h-screen">
            <img src={Bokaap} alt="" className=" flex h-full w-full items-center"/>

         </div>

     </div>
   
  )
}

export default Login