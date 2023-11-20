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
