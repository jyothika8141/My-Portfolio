import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Project = () => {
  return (
    <section className='section h-screen' id='project'>
      <div className='container mx-auto'>
        <div className='flex lg:flex-row flex-col gap-x-10'> 
        <motion.div
            variants={fadeIn('down', 0.3)} 
            initial='hidden'
            whileInView={'show'}
            viewPort={{once:false, amount: 0.3}}
            className='flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0'
          >
            <div>
              <h2 className='h2 leading-tight'>
                My Projects
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum. 
              </p>
            </div>

            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>
              <div className='group-hover bg-black z-40 w-full h-full absolute transition-all duration-300 curson-pointer'></div>

              <img src={img1} alt="" className='group-hover:scale-125 transition-all duration-500 cursor-pointer' />

              <div className='absolute -bottom-full left-12 group-'
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Project  