import React from 'react';
import Logo from '../Images/TravelAppLogo.png';

function Navbar() {
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 bg-white bg-opacity-30 shadow-md'>
      <div className="mx-8">
        <img src={Logo} className="logo" alt='logo' style={{ width: '80px' }} />
      </div>
      <div className='flex space-x-4 mr-4'>
        <button className='text-white bg-transparent border-2 border-slate-200 rounded-full'>LOGIN</button>
        <button className='text-white border-slate-100 rounded-full'>SIGN UP</button>
      </div>
    </div>
  );
}

export default Navbar;
