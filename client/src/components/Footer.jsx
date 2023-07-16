import React from 'react'
import Logo from '../assets/logo.png'
import { AiOutlineFacebook } from 'react-icons/ai';
import { LuGithub } from 'react-icons/lu';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlinePhone } from 'react-icons/ai';
import { MdOutlineArrowCircleUp } from 'react-icons/md';


const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-black p-5 pt-10 pb-10 358:p-10 759:p-20 759:pt-10 759:pb-10'>
      <div className='grid 617:grid-cols-2 1081:grid-cols-4'>
          <div className='text-white'>
            <p className='text-red-700 text-2xl'>Contact</p>
            <p className='flex items-center text-sm'><AiOutlinePhone className='text-sm mr-1'/>09369361714</p>
            <p className='flex items-center text-sm mt-2'><AiOutlineMail className='text-sm mr-1'/> meilchucabaluna1994@<br className='328:hidden'/>gmail.com</p>
          </div>

          <div className='flex pt-5 617:pt-0 617:justify-center'>
            <div className='text-white'>
              <p className='text-red-700 text-2xl'>Social</p>
              <a className='hover:text-slate-500 flex items-center text-sm' target='blank' href='https://www.facebook.com/profile.php?id=100081302417501'>< AiOutlineFacebook className='text-xl mr-1'/> Facebook</a>
              <a className='hover:text-slate-500 flex items-center text-sm mt-2' target='blank' href='https://github.com/Meil1994'><LuGithub className='text-xl mr-1'/> Github</a>
              <a className='hover:text-slate-500 flex items-center text-sm mt-2' target='blank' href='https://www.linkedin.com/in/meilchu-cabaluna-003163256/'><AiOutlineLinkedin className='text-xl mr-1'/>Linkedin</a>
            </div>
          </div>

        <div className='flex pt-5 617:pt-0 1081:justify-center'>
          <div className='text-white'>
              <p className='text-red-700 text-2xl'>Pages</p>
              <a className='hover:text-slate-500 text-sm' href='/'>Home</a>
              <br/>
              <a className='hover:text-slate-500 text-sm' href='/projects'>Projects</a>
              <br/>
              <a className='hover:text-slate-500 text-sm' href='/contact'>Contact</a>
              <br/>
              <a className='hover:text-slate-500 text-sm' href='https://drive.google.com/file/d/1TUsKekzQ97pIHVo3zL5HRF-IsLZtBQzI/view' target='blank'>Resume</a>
            </div>
        </div>

          <div className='flex 617:justify-center pt-5 1081:pt-2'>
            <img className='w-28 h-28 ring-4 ring-red-700' src={Logo}/>
          </div>
      </div>
      <div className='flex justify-end'>
        <div
          className='cursor-pointer animate-bounce text-white absolute bg-black ring-2 ring-white -mt-10 hover:bg-slate-700'
          onClick={handleScrollToTop}
        >
          <MdOutlineArrowCircleUp className='text-2xl' />
        </div>
      </div>
    </div>
  )
}

export default Footer