import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Main = () => {
  return (
    <section className='section mid-h-[85vh] lg:min-h-[70vh] flex items-center' id='home'>
      <div className='container mx-auto lg:-mt-28 mt-8'>
        <div className='flex flex-col lg:items-center lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial='hidden'
              whileInView={'show'}
              viewPort={{once:false, amount: 0.7}}
              className='text-2xl font-bold leading-[0.8] lg:text-4xl'
            >
              Hi, I'm Jyothika Manoj
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main