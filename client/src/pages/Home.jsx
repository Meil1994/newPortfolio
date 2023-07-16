import React from 'react'
import me from '../assets/photo.png'
import Nav from '../components/Nav.jsx'
import Experience from '../components/Experience.jsx'
import About from '../components/About.jsx'
import { Element } from 'react-scroll';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-scroll';


const Home = () => {
  const navigate = useNavigate();

  const handleProjects = () => {
    navigate('/projects');
  };

  return (
    <div>
      <div className='bg-gradient-to-r from-stone-900 to-slate-600'>
        <Nav/>
        <div className='grid 797:grid-cols-3 1200:grid-cols-2'>
        
          <div className='col-span-2 1200:col-span-1 p-5 pt-40 600:p-20 600:pt-40 797:pr-5 797:pt-60 855:p-28 855:pr-5 855:pt-60 855:pb-40'>
            <p className='text-red-600 text-xl'>Hello!</p>
            <p className='text-white text-4xl mt-2'>I am Meilchu Cabaluna |</p>
            <p className='text-white mt-2'>A passionate web developer that has experience building websites
              using industry-leading technologies. If you have any questions or would like to discuss a potential project, 
              please don't hesitate to reach out to me. 
              I look forward to hearing from you!
            </p>
            <div className='pt-10 pb-10'>
                <Link
                to="experience-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className='cursor-pointer 322:m-2 322:ml-0 322:mt-6 p-5 pt-2 pb-2 bg-red-600 text-white rounded-2xl hover:bg-red-700'
              >
                Experience
              </Link>

              <Link
                to="about-section"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className='cursor-pointer m-2 322:mt-6 p-5 pt-2 pb-2 bg-red-600 text-white rounded-2xl hover:bg-red-700'
              >
                About
              </Link>
              
            </div>
          </div>

          <div className='hidden 797:flex justify-center'>
            <img className='object-cover object-center'  src={me}/>
          </div>
      
        </div>
      </div>
      <Element name="about-section">
        <About />
      </Element>

      <Element name="experience-section">
        <Experience />
      </Element>
    </div>
  )
}

export default Home