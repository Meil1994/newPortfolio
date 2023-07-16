import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { TiThMenuOutline } from 'react-icons/ti';
import { CgCloseR} from 'react-icons/cg';

import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useLogoutMutation } from '../slices/usersApiSlice';
import { logout } from '../slices/authSlice';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

const Nav = () => {
  const {userInfo} = useSelector((state) => state.auth)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrollingDown, setScrollingDown] = useState(false);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You will be logged out.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, logout'
    }).then((result) => {
      if (result.isConfirmed) {
        toast.error('You have been logged out!'); 
        handleLogout();
      }
    });
  };
  
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollingDown(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div>
        <div
        className={`797:hidden fixed inset-y-0 left-0 z-50 bg-slate-700 w-75% 642:w-50% transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {isScrollingDown && (
          <button className="absolute top-3 right-3 text-white" onClick={closeMenu}>
            <CgCloseR size={24} />
          </button>
        )}
        <ul className='text-white text-lg p-10 500:p-20 500:pt-10'>
          <li className=' p-2 rounded-lg'><a href='/'>Home</a></li>
          <li className=' p-2 mt-2 rounded-lg'><a href='/projects'>Project</a></li>
          <li className=' p-2 mt-2 rounded-lg'><a href='/contact'>Contact</a></li>
          <li className=' p-2 mt-2 rounded-lg'><a href='https://drive.google.com/file/d/1TUsKekzQ97pIHVo3zL5HRF-IsLZtBQzI/view' target='blank'>Resume</a></li>
          <li className=' p-2 mt-2 rounded-lg'>
              {userInfo ? (
                <>
                  <button onClick={logoutHandler}>Logout</button>
                </>
              ) :(
                <></>
              )}
          </li>
        </ul>
      </div>

      <div className='grid grid-cols-2 797:grid-cols-5 p-5 pt-5 pb-2 600:p-20 600:pt-5 600:pb-2'>
        <div className='797:col-span-1'>
          <a href='/'><img src={logo} className='w-28 h-28 ring-2 ring-red-700' alt='Logo' /></a>
        </div>

        <div className='797:col-span-4'>
          <ul className='flex justify-end items-center h-20 text-white'>
            <li className='hidden 797:block'>
              <a href='/'>Home</a>
            </li>
            

            <li className='cursor-pointer hidden 797:block ml-5'>
              <a href='/projects'>Project</a>
            </li>

            <li className='cursor-pointer hidden 797:block ml-5'>
              <a href='/contact'>Contact</a>
            </li>
            <li className='cursor-pointer hidden 797:block ml-5'>
              <a href='https://drive.google.com/file/d/1TUsKekzQ97pIHVo3zL5HRF-IsLZtBQzI/view' target='blank'>Resume</a>
            </li>
            <li className='797:hidden text-3xl'>
              {isMenuOpen ? (
                <CgCloseR onClick={toggleMenu} />
              ) : (
                <TiThMenuOutline onClick={toggleMenu} />
              )}
            </li>


            <li className='cursor-pointer hidden 797:block ml-5'>
              {userInfo ? (
                <>
                  <button onClick={logoutHandler}>Logout</button>
                </>
              ) :(
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
