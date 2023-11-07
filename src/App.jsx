import React from 'react';
import { Navbar, Hero, Footer} from './Components';
import { hero } from '.data/mothercitytoursdata';


const App = () => {
  return (
    <> 
      <Navbar/>
         <Hero hero={hero}/>
      <Footer/>
    </>
    
  );
};

export default App;