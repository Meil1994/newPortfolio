import React from 'react'
import Nav from '../components/Nav'
import tbc from '../assets/tbc.png'
import tbc1 from '../assets/tbc1.png'
import mp2 from '../assets/mp2.png'
import portfolio from '../assets/portfolio.png'
import { LuGithub } from 'react-icons/lu';
import { FiExternalLink } from 'react-icons/fi';

const Projects = () => {
  return (
    <div className='bg-gradient-to-r from-stone-900 to-slate-600'>
        <Nav/>
        <div>
            <div className='p-5 pt-0 pb-0 358:p-10 358:pb:0 358:pt-0 500:p-10 500:pt 500:pb-0 1100:p-60 1100:pt-0 1100:pb-0'>
                <h1 className='text-white text-xl mt-20'>Projects...</h1>
                <h1 className='text-red-700 text-3xl mb-10'>Welcome to my projects page.</h1>
            </div>
            <div className='grid 750:grid-cols-2 p-5 pt-0 pb-10 358:p-10 358:pb:10 358:pt-0 500:p-10 500:pt-0 1100:p-60 1100:pt-0 1100:pb-10'>
                <div className='col-span-1'>
                    <img className='object-cover ring-4 ring-white p-2 h-100% w-100%'  src={tbc}/>
                </div>
                <div className='col-span-1 pt-5 750:pt-0 750:pl-5 text-white'>
                    <p className='text-xl'>The Browns Casita</p>
                    <p className='mt-2 text-sm'>This project is a booking website for a rented cottage situated in Davao del Norte.</p>
                    <p className='mt-5 text-sm'>A project build with Laravel, Tailwind, HTML, PHP, Javascript, Jquery, MySQL, and PayPal button.</p>
                    <p className='mt-5 text-sm'>I also created an admin site to update the price and promos, create, delete, and update the booking manually, and view feedback and messages.</p>
                    <div className='pt-4 flex'>
                        <a target='blank' href='https://github.com/Meil1994/TheBrownsCasita2' className='text-3xl'><LuGithub className='ring-2 ring-white rounded-full p-1 hover:bg-slate-900'/></a>
                        <a target='blank' href='https://thebrownscasita.com/' className='text-3xl'><FiExternalLink className='ring-2 ml-4 ring-white rounded-full p-1 hover:bg-slate-900'/></a>
                    </div>
                </div>
            </div>

            <div className='p-5 pt-0 pb-10 358:p-10 358:pb:0 358:pt-0 500:p-10 500:pt-0 1100:p-60 1100:pt-0 1100:pb-0'>
              <hr/>
            </div>

            <div className='grid 750:grid-cols-2 p-5 pt-0 pb-10 358:p-10 358:pb:10 358:pt-0 500:p-10 500:pt-0 1100:p-60 1100:pt-10 1100:pb-10'>
                <div className='col-span-1 text-white'>
                    <p className='text-xl'>Pitch Bit and Buy</p>
                    <p className='mt-2 text-sm'>This project is an eCommerce website that can be use as bidding platform. It can also be used as a customer and a seller website.</p>
                    <p className='mt-5 text-sm'>A dynamic website created using React, Javascript, and Bootstrap. The idea is to create an eCommerce platform that can also process bidding. Although it is dynamic, the data is only saved in the JSON file using fetch API.</p>
                    <p className='mt-5 text-sm'>This website has a profile page for updating personal information, posting products, viewing added products. It also has a store page that can act as a regular store and bidding place.</p>
                    <div className='pt-4 flex'>
                        <a target='blank' href='https://github.com/Meil1994/MP2' className='text-3xl'><LuGithub className='ring-2 ring-white rounded-full p-1 hover:bg-slate-900'/></a>
                    </div>
                </div>
                <div className='col-span-1 750:pl-5 pt-5 750:pt-0'>
                    <img className='object-cover ring-4 ring-white p-2 h-100% w-100%'  src={mp2}/>
                </div>
            </div>

            <div className='p-5 pt-0 pb-10 358:p-10 358:pb:0 358:pt-0 500:p-10 500:pt-0 1100:p-60 1100:pt-0 1100:pb-0'>
              <hr/>
            </div>

            <div className='grid 750:grid-cols-2 p-5 pt-0 pb-10 358:p-10 358:pb:10 358:pt-0 500:p-10 500:pt-0 1100:p-60 1100:pt-10 1100:pb-10'>
                <div className='col-span-1'>
                    <img className='object-cover ring-4 ring-white p-2 h-100% w-100%'  src={tbc1}/>
                </div>
                <div className='col-span-1 pt-5 750:pt-0 750:pl-5 text-white'>
                    <p className='text-xl'>The Browns Casita Part 1</p>
                    <p className='mt-2 text-sm'>This project is my KodeGo mini project 1.</p>
                    <p className='mt-5 text-sm'>A static website built for a local business located in Davao del Norte. It is a simple 3 pages site that was created using HTML, Javascript, CSS, and Bootstrap.</p>
                    <p className='mt-5 text-sm'>This project is what I consider the start of my journey as a web developer.</p>
                    <div className='pt-4 flex'>
                        <a target='blank' href='https://github.com/Meil1994/home' className='text-3xl'><LuGithub className='ring-2 ring-white rounded-full p-1 hover:bg-slate-900'/></a>
                        <a target='blank' href='https://meil1994.github.io/home/1-home/' className='text-3xl'><FiExternalLink className='ring-2 ml-4 ring-white rounded-full p-1 hover:bg-slate-900'/></a>
                    </div>
                </div>
            </div>

            <div className='p-5 pt-0 pb-10 358:p-10 358:pb:0 358:pt-0 500:p-10 500:pt-0 1100:p-60 1100:pt-0 1100:pb-0'>
              <hr/>
            </div>

            <div className='grid 750:grid-cols-2 p-5 pt-0 pb-10 358:p-10 358:pb:10 358:pt-0 500:p-10 500:pt-0 1100:p-60 1100:pt-10 1100:pb-10'>
                <div className='col-span-1 text-white'>
                    <p className='text-xl'>My Personal Portfolio</p>
                    <p className='mt-2 text-sm'>This project is a personal project to highlight my web development skills.</p>
                    <p className='mt-5 text-sm'>It is a dynamic website created using the MERN stack and Tailwind CSS. The website will feature my projects and provide information about myself.</p>
                    <p className='mt-5 text-sm'>Additionally, this website includes login, profile update, and message sending functionality.</p>
                    <div className='pt-4 flex'>
                        <a target='blank' href='' className='text-3xl'><LuGithub className='ring-2 ring-white rounded-full p-1 hover:bg-slate-900'/></a>
                        <a target='blank' href='https://meilchucabaluna.net/' className='text-3xl'><FiExternalLink className='ring-2 ml-4 ring-white rounded-full p-1 hover:bg-slate-900'/></a>
                    </div>
                </div>
                <div className='col-span-1 750:pl-5 pt-5 750:pt-0'>
                    <img className='object-cover ring-4 ring-white p-2 h-100% w-100%'  src={portfolio}/>
                </div>
            </div>

        </div>

        
    </div>
  )
}

export default Projects