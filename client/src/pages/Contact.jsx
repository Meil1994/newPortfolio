import React, { useState } from 'react';
import Nav from '../components/Nav'
import Login from '../components/Login'
import Register from '../components/Register';
import {useSelector} from 'react-redux';
import Message from '../components/Message'
import Profile from '../components/Profile'


const Contact = () => {
  const {userInfo} = useSelector((state) => state.auth)
  const [selectedButton, setSelectedButton] = useState('Login'); 
  const [contactButton, setContactButton] = useState('Message'); 

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  const renderSelectedComponent = () => {
    switch (selectedButton) {
      case 'Login':
        return <Login />;
      case 'Register':
        return <Register />;
      default:
        return null;
    }
  };

  const handleContactClick = (buttonName) => {
    setContactButton(buttonName);
  };

  const renderContactComponent = () => {
    switch (contactButton) {
      case 'Message':
        return <Message />;
      case 'Profile':
        return <Profile />;
      default:
        return null;
    }
  };



  return (
    <div className='bg-gradient-to-r from-stone-900 to-slate-600'>
        <Nav/>
        <div className='p-10 pb-20 855:p-40 855:pt-10 855:pb-20 1000:p-60 1000:pt-10 1000:pb-20'>
        {userInfo ? (
            <div>
                <div>
                  <h1 className='text-red-700 text-3xl mt-20'>Contact...</h1>
                  <p className='text-white text-xl'>Hi, {userInfo.username}. Please share with us what you think.</p>
                </div>

                <div>

                  <div className='550:grid 550:grid-cols-3 pt-10'>
                    <div className='col-span-1 p-10 pl-0 pt-0 pr-0 550:pr-10'>
                        <button 
                          className={`w-100% bg-red-700 p-4 text-white ${contactButton === 'Message' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                          onClick={() => handleContactClick('Message')}>
                          Message
                        </button>
                        <button 
                          className={`w-100% bg-red-700 p-4 text-white mt-2 ${contactButton === 'Profile' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                          onClick={() => handleContactClick('Profile')}>
                          Profile
                        </button>
                    </div>

                    <div className='col-span-2 ring-2 ring-red-700'>{renderContactComponent()}</div>

                  </div>

                  

                </div>
            </div>
          ):(
            <div>
                <div>
                  <h1 className='text-white text-lg mt-20'>Contact...</h1>
                  <h1 className='text-red-700 text-2xl'>Login or register to send a message.</h1>
                </div>
                <div className='550:grid 550:grid-cols-3 pt-10'>
                    <div className='col-span-1 p-10 pl-0 pt-0 pr-0 550:pr-10'>
                        <button 
                          className={`w-100% bg-red-700 p-4 text-white ${selectedButton === 'Login' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                          onClick={() => handleButtonClick('Login')}>
                          Login
                        </button>
                        <button 
                          className={`w-100% bg-red-700 p-4 text-white mt-2 ${selectedButton === 'Register' ? 'bg-opacity-100' : 'bg-opacity-50'}`}
                          onClick={() => handleButtonClick('Register')}>
                          Register
                        </button>
                    </div>
                    <div className='col-span-2 ring-2 ring-red-700'>{renderSelectedComponent()}</div>
                </div>
            </div>
          )}

          


        </div>
    </div>
  )
}

export default Contact