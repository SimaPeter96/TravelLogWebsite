import React from 'react';
import Logo from '../Images/TravelAppLogo.png';


function Navbar() {
  return (
    <div>
      <div>
          <img src={Logo} className="logo" alt='logo'/>
      </div>
    </div>
  )
}

export default Navbar