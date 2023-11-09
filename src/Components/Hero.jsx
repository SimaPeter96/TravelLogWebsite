import React from 'react';
import Img from '../Images/landingIMG.jpg';

function Hero() {
  return (
    <div className="w-full h-[98vh] relative">
      <img src={Img} alt="Image" className="w-full h-full object-cover" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div>
          <h1 className="text-8xl font-medium mx-auto max-w-6xl pb-48 py-8 text-black mix-blend-overlay font-poppins">MOTHER CITY TOURS</h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
