import React from 'react'
import BgImg1 from '../Images/BgImage.png'

const Login = () => {
  return (
    <div className="flex w-full h screen">
       <div className="w-full  flex items-center justify-centerlg:w-1/2">
        <img src={BgImg1} alt="" className='w-1/2 h-[100vh]'/>
           {/* <Form>

           </Form> */}
           <h1 className='text-black'>Mother</h1>
         </div>
         <div className="hidden lg:flex h-full w-1/3">

         </div>

     </div>
   
  )
}

export default Login