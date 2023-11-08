import React from 'react';
import Logo from '../Images/TravelAppLogo.png';


function Navbar() {
  return (
    <div className='w-full min-h-[50px] flex justify-between items-center absolute z-10 bg-transparent '>
      <div className="mx-8">
          <img src={Logo} className="logo" alt='logo'  style={{ width: '80px' }}/>
      </div>
      <div className='flex space-x-4 '>
          <button className='text-black bg-transparent border-2  border-slate-700 rounded-md'>LOGIN</button>
          <button className='text-white border-slate-100 rounded-md'>SIGN UP</button>
      </div>
      
    </div>
  )
}

export default Navbar