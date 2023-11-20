import React from 'react';
import BgImg1 from '../Images/BgImage.png';
import Bokaap from '../Images/BokaapImg.jpg';
import google from '../assets/google.svg';

const Login = () => {
  return (
    <div className="w-screen h-screen flex">
      <div className="w-1/2 relative">
        <img src={BgImg1} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-0 left-0 right-0 text-left mt-10 ml-10">
          <span className="text-4xl font-bold text-blue mix-blend-overlay font-poppins">
            MOTHER CITY TOURS
          </span>
          <div className='relative h-48 w-48 mt-24 mx-6'>
            <span className='font-bold text-white mb-8'>Login into your account</span>
          </div>
          <div className='py-4'>
            <span className='mr-6 text-md'>Email</span>
            <input
              type='text'
              className='w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-500'
              name='email'
              id='email'
              style={{ width: 'calc(100% - 1rem)' }} // Adjust placeholder width
            />
          </div>
          <div className='py-4'>
            <span className='mb-2 text-md'>Password</span>
            <input 
              type='password' // Change input type to password for password field
              className='w-full p-2 border border-gray-300 rounded-md placeholder:text-gray-500'
              name='pass'
              id='pass'
              style={{ width: 'calc(100% - 1rem)' }} // Adjust placeholder width
            />
          </div>
          <div className='flex justify-between items-center w-full py-4'>
            <div className='mr-24'>
              <input type='checkbox' name='ch'  id='ch' className='mr-2'/>
              <span className="text-md">Remember me</span>
            </div>
            <span className='font-bold text-md'>Forgot password?</span>
          </div>
          <button className='w-full bg-transparent shadow-lg border border-white text-md p-2 rounded-lg mb-6 text-white hover:bg-[#75AFF2]'>LOGIN</button>
          <button className='w-full bg-white border-white shadow-lg text-md p-2 rounded-lg flex items-center justify-center'>
            <img src={google} alt='' className='w-6 h-6 inline mr-2' />
            SIGN IN WITH GOOGLE
          </button>
          <div className='text-end text-black'>Don't have an account?
            <span className='font-bold text-black'>Sign up</span>
          </div>
        </div>
      </div>

      <div className="w-1/2 relative">
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
