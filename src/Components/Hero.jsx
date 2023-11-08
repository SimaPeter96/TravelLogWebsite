import React from 'react';
import Img from '../Images/landingIMG.jpg';

function Hero() {
  return (
    <div className="w-full h-[98vh] relative">
      <img src={Img} alt="Image" className="w-full h-full object-cover" />

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5">
        <div className="text-transparent-opacity-5 p-4 rounded">
          <h1 className="text-4xl font-bold">MOTHER CITY TOURS</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
