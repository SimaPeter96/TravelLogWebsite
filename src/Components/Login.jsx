import React from 'react';
import BgImg1 from '../Images/BgImage.png';
import Bokaap from '../Images/BokaapImg.jpg';

const Login = () => {
  return (
    <div className="w-screen h-screen grid md:grid-cols-2">
      <div className="relative">
        <img src={BgImg1} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 text-center mt-10">
          <span className="text-4xl font-bold text-blue mix-blend-overlay font-poppins">
            MOTHER CITY TOURS
          </span>
          <div className='relative h-48 w-48 mt-24 mx-8'>
          <span className='font-bold text-white mb-8 '>Login into your account</span>
          </div>
          <div className='py-4'>
            <span className='mb-2 text-md'>Email</span>
            <input
               type='text'
               className='w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500'
               name='email'
               id='email'
            />
          </div>
          <div className='py-4'>
            <span className='mb-2 text-md'>Password</span>
            <input 
               type='text'
               className='w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-500'
               name='pass'
               id='pass'
             />
          </div>
          <div className='flex justify-between w-full py-4'>
            <div className='mr-24'>
               <input type='checkbox' name='ch'  id='ch' className='mr-2'/>
               <span class="text-md">Remember me</span>
            </div>
            <span className='font-bold text-md'>Forgot password?</span>

          </div>
        </div>
      </div>

      <div className="relative">
        <img src={Bokaap} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 text-center mt-10">
          <span className="text-6xl font-bold text-blue mix-blend-overlay font-poppins">
            WELCOME BACK 
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
