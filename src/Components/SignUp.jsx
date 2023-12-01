import React, { useState } from 'react'
import ImgBg from '../Images/wineImg.jpg'
import Img from '../Images/blueBg.png'
import google from '../assets/google.svg'
import validator from 'validator';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  
  // Validation functions
  const validateEmail = () => {
    if (!validator.isEmail(email)) {
      // Handle invalid email
      console.log('Invalid email');
    }
  };

  const validatePassword = () => {
    if (password !== confirmPassword) {
      // Handle password mismatch
      console.log('Passwords do not match');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or further validation
    validateEmail();
    validatePassword();
    // ...
  };

  return (
    <div className='w-screen h-screen flex'>
      <div className='w-1/2 relative'>
      <img src={ImgBg} alt="WineImg" className="w-full h-full object-cover" />
      </div>
      <div className='absolute top-2 left-0 right-0 text-left mt-10 ml-10'>
        <div className='SignUpHeading py-12'>
          <span className='text-4xl font-bold mt-32 ml-32 text-blue mix-blend-overlay font-poppins'>
            MOTHER CITY TOURS
          </span>
          <div className='slogan ps-48'>
          <h2 className='text-md font-bold  text-blue mix-blend-overlay font-poppins'>EXPERIENCE ENJOY EXPLORE</h2>
          </div>
        </div>
      </div>
      <div className="w-1/2 relative">
        <img src={Img} alt=""  className="w-full h-full object-cover"></img>
      <div className="SignUptitle absolute top-0 left-10 right-25text-center mt-10 ">
        <span className='text-4xl font-bold text-blue mix-blend-overlay font-poppins ml-16' >SIGN UP</span>
        <div className='subheading pt-6 ml-16'>
          <h2 className='text-md font-bold  text-white font-poppins'>Create your account</h2>
        </div>
        <div className='ml-16'>
        <form action='#' onSubmit={handleSubmit}>
          <div className='grid grid-cols-2 gap-5'>
            <input type="text" 
            placeholder="Firstname" 
            className='border border-gray-400 p-1 px-2 rounded'
            value={firstName}
            onChange={(e)=> setFirstName(e.target)}
            ></input>
            <input type="text" 
            placeholder="Surname" 
            className='border border-gray-400 p-1 px-2 rounded'
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
          <div className='mt-5'>
            <input type="text" 
            placeholder="Phone number" 
            className='border border-gray-400 py-1 px-2 w-full rounded'
            value={phoneNuumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className='mt-5'>
            <input type="text" 
            placeholder="Email" 
            className='border border-gray-400 py-1 px-2 w-full rounded'
            value={email}
            onChange={(e) => setPhoneNumber(e.target.value)}
            ></input>
          </div>
          <div className='mt-5'>
            <input type="text" 
            placeholder="Create password" 
            className='border border-gray-400 py-1 px-2 w-full rounded'
            ></input>
          </div>
          <div className='mt-5'>
            <input type="text" 
            placeholder="Confirm password" 
            className='border border-gray-400 py-1 px-2 w-full rounded'
            value={password}
            onChange={(e) => setConfirmPassword(e.target.value)}
            ></input> 
          </div>
          <div className='mr-24'>
              <input type='checkbox' name='ch'  id='ch' className='mr-2'/>
              <span className="text-md text-white">I accept the Terms of Use & Privacy Policy </span>
          </div>
          <div className='mt-5'>
            <button 
            type='submit'
            className='w-full bg-transparent border border-white py-2 text-white hover:bg-blue-400 rounded shadow-inner  ' 
            >
              SIGN UP
              </button>
          </div>
          <div className='mt-5'>
            <button className='w-full bg-white border border-white py-2 text-black hover:bg-transparent rounded shadow-inner '>
            <img src={google} alt='' className='w-6 h-6 inline mr-2' />
              SIGN UP WITH GOOGLE
              </button>
          </div>
         </form>
      </div>
       </div>
      </div>
    </div>
  )
}

export default SignUp