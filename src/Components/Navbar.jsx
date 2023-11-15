import React from 'react';
import Logo from '../Images/TravelAppLogo.png';
import  { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 bg-white bg-opacity-30 shadow-md'>
      <div className="mx-8">
        <img src={Logo} className="logo" alt='logo' style={{ width: '80px' }} />
      </div>
      <div className='flex space-x-6 mr-12 pb-1'>
        <button className='text-white bg-transparent border-2 shadow-md h-9 w-50 border-slate-100 rounded-md text-xs' >LOGIN</button>
        <button className='text-white border-slate-100 rounded-md shadow-md h-9 text-xs'>SIGN UP</button>
      </div>
    </div>
  );
}

export default Navbar;
