import React from 'react'
import {FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  const image = require('../assets/myimage.jpg')
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
              Jyothika <span>Manoj</span>
            </motion.h1>
            <motion.div
               variants={fadeIn('up', 0.5)} 
               initial='hidden'
               whileInView={'show'}
               viewPort={{once:false, amount: 0.7}}
               className='mb-6 mt-8 font-primary text-[36px] lg:text-[60px] leadign-[1] font-semibold'
            >
              <span>I'm a </span>
              <TypeAnimation
                sequence={[
                  "Student",
                  2000, // pause
                  "Web Developer",
                  2000, 
                  "Dancer",
                  2000,
                ]}
                speed={50}
                className='text-sky-500'
                wrapper='span'
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
               variants={fadeIn('up', 0.6)} 
               initial='hidden'
               whileInView={'show'}
               viewPort={{once:false, amount: 0.7}}
               className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
              I'm a 2nd year student at <span className='font-semibold'>Amrita Vishwa Vidyapeetham</span> pursuing B.Tech in Computer Science and Engineering. I'm a passionate web developer. I love to learn new things and explore new technologies.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.8)} 
              initial='hidden'
              whileInView={'show'}
              viewPort={{once:false, amount: 0.7}}
              className='flex max-w-max mx-auto lg:mx-0 items-center gap-x-8 mb-12'
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href="#">My Portfolio</a>
            </motion.div>
            <motion.div
              variants={fadeIn('up', 0.9)} 
              initial='hidden'
              whileInView={'show'}
              viewPort={{once:false, amount: 0.7}}
              className='flex items-center gap-x-4 max-w-max lg:mx-0 mx-auto'
            >
              <a href='#'>
                <FaGithub className='text-2xl' />
              </a>
              <a href='#'>
                <FaLinkedin className='text-2xl' />
              </a>
              <a href='#'>
                <FaInstagram className='text-2xl' />
              </a>

            </motion.div>
          </div>

          <motion.div
            variants={fadeIn('down', 0.6)} 
            initial='hidden'
            whileInView={'show'}
            viewPort={{once:false, amount: 0.7}}
            className='lg:flex hidden flex-1 max-w-[320px] lg:mx-w-[480px]'
          >
            <img src={image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Main