import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Skills = () => {
  const image = require('../assets/skill.jpeg')
  const skills = [
      {
        heading: 'Frontend Development',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
      },
      {
        heading: 'Backend Development',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
      },
      {
        heading: 'Database Management System',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
      },
      {
        heading: 'Data Structures and Algorithms',
        desc: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
      }
  ]
  return (
    <section className='section h-screen mt-24' id='skills'>
      <div className='container mx-auto'>
        <div className='flex-1 flex justify-start items-center lg:flex-row'>
          <div className='mr-40'>
          <motion.div
            variants={fadeIn('right', 0.5)} 
            initial='hidden'
            whileInView={'show'}
            viewPort={{once:false, amount: 0.3}}
            className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix blend-lighten mb-12 lg:mb-0'
          >
            <h2 className='h2 text-sky-500 mb-6'>What my skills are</h2>
            <h3 className='h3 max-w-[455px] mb-16'>Lorem ipsum lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</h3>
          </motion.div>
          {/* <motion.div
            variants={fadeIn('down', 0.6)} 
            initial='hidden'
            whileInView={'show'}
            viewPort={{once:false, amount: 0.7}}
            className='mx-10 max-w-[320px] lg:max-w-[320x]'
          >
            <img src={image} style={{borderRadius:10, borderTopLeftRadius:100, borderBottomRightRadius:100 }} alt="" />
          </motion.div>   */}
          </div>
          <motion.div
              variants={fadeIn('left', 0.5)} 
              initial='hidden'
              whileInView={'show'}
              viewPort={{once:false, amount: 0.3}}
              className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix blend-lighten mb-12 lg:mb-0'
          >
              <div>
                {
                  skills.map((item, index) => {
                    const {heading, desc} = item
                    return (
                      <div key={index} className='flex border-b border-white/20 h-[130px] mb-6'>
                        <div className='max-w-[476px]'>
                          <h4 className='text-xl tracking-wide text-sky-500 font-primary font-semibold'>
                            {heading}
                          </h4>
                          <p className='font-secondary leading-tight mt-2'>
                            {desc}
                          </p>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
          </motion.div>
        </div>
          
      </div>

    </section>
  )
} 

export default Skills