import React from 'react'
import BgImg1 from '../Images/BgImage.png'
import bokaap from '../Images/bokaap.jpg'

const Login = () => {
  return (
    <div className="flex w-full h screen">
       <div className="w-full  flex items-center justify-centerlg:w-1/2">
        <img src={BgImg1} alt="" className='w-1/2 h-[100vh]'/>
           {/* <Form>

           </Form> */}
         </div>
         <div className="hidden lg:flex h-full items-center justify-center w-1/10">
            <img src={bokaap} alt="" className=" flex h-full w-1/2 items-"/>

         </div>

     </div>
   
  )
}

export default Login