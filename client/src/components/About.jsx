import React from 'react'
import Photo1 from '../assets/photo1.png'

const About = () => {
  return (
    <div className='grid 797:grid-cols-3 p-5 490:p-10 pt-0'>
        <div className='797:col-span-1 flex justify-center pt-10 1200:pt-0 1200:items-center'>
            <img className='object-cover object-center bg-red-300' src={Photo1}/>
        </div>

        <div className='797:col-span-2 pt-10 490:p-10 642:p-20 642:pt-10 642:pb-10 text-md'>
            <p className='text-3xl text-red-700'>
                A little about me..
            </p>
            <p className='mt-5'>
                Greetings! I'm <span className='underline underline-offset-2'>Meilchu T. Cabaluna</span>, a talented web developer hailing from the vibrant 
                city of Davao. Prepare to be captivated by what I bring to the table!
            </p>
            <p className='mt-5'>
                I thrive on challenges that blend excitement and creativity, and nothing fuels my 
                passion more than crafting exceptional websites. Contrary to what meets the eye, 
                beneath my cool exterior lies a world of dynamic personality and innovative ideas.
            </p>
            <p className='mt-5'>
                When I'm not busy coding, you'll find me immersed in the captivating worlds of manga 
                and anime. This unique hobby of mine fuels my imagination and inspires 
                fresh approaches to web development.
            </p>
            <p className='mt-5'>
                Collaboration is at the heart of my work. I thrive in team environments where ideas 
                flow freely and innovative solutions take shape. I believe effective communication 
                is paramount, ensuring that every project is a resounding success.
            </p>
            <p className='mt-5'>
                Let's embark on a journey where communication is not just a buzzword but a guiding 
                principle that shapes remarkable web experiences.
            </p>
            <p className='mt-5'>
                Looking forward to connecting with you and bringing your vision to life!
            </p>
            <p className='mt-10'>
                Warm regards,
            </p>
            <p>
                Meilchu T. Cabaluna
            </p>
        </div>
    </div>
  )
}

export default About