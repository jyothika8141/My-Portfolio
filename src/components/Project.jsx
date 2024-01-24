import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Project = () => {
  const project = require('../assets/project.png')
  const ruralIndia = require('../assets/ruralIndia.png')
  const dbms = require('../assets/dbms.webp')

  return (
    <section className='section h-screen mt-40 mb-80 lg:-my-10 xl:my-10' id='project'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row flex-col gap-x-10'> 
        <motion.div
            variants={fadeIn('right', 0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewPort={{once:false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div className='lg:py-12 xl:py-20 pr-10'>
              <h2 className='h2 leading-tight xl:py-1.5'>
                My Projects
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
              </p>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover bg-black/40 hover:bg-black/70  z-40 w-full h-full absolute transition-all duration-300 curson-pointer'></div>

              <img src={dbms} alt="" className=' group-hover:scale-125 transition-all duration-500 cursor-pointer' />

              <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-sky-400 font-primary lg:text-3xl text-2xl'>DBMS</span>
              </div>

              <div className='absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-white font-primary lg:text-4xl text-2xl'>Login System</span>
              </div>
               
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewPort={{once:false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover bg-black/40 hover:bg-black/70  z-40 w-full h-full absolute transition-all duration-300 curson-pointer'></div>
            
              <img src={ruralIndia} alt="" className='group-hover:scale-125 transition-all duration-500 cursor-pointer' />

              <div className='absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-sky-400 font-primary lg:text-3xl text-2xl'>Web Development</span>
              </div>

              <div className='absolute -bottom-full right-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-white font-primary lg:text-4xl text-2xl'>Rural Tourism</span>
              </div>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover bg-black/40 hover:bg-black/70 z-40 w-full h-full absolute transition-all duration-300 curson-pointer'></div>
            
              <img src={project} alt="" className='group-hover:scale-125 transition-all duration-500 cursor-pointer' />

              <div className='absolute -bottom-full right-12 group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-sky-400 font-primary lg:text-3xl text-2xl'>Web Development</span>
              </div>

              <div className='absolute -bottom-full right-12 group-hover:bottom-14 transition-all duration-500 z-50'>
                <span className='text-white font-primary lg:text-4xl text-2xl'>Online Bouquet Shop</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Project  