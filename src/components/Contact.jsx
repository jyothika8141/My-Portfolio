import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Contact = () => {
  return (
    // added id to allow navbar to scroll to this section
    <section className='sectiton mb-40' id='contact'>   
      <div className='container mx-auto'> 
        <div className='flex flex-col lg:flex-row'>
          <motion.div
             variants={fadeIn('down', 0.3)} 
             initial='hidden'
             whileInView={'show'}
             viewPort={{once:false, amount: 0.3}}
             className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-sky-500 font-medium mb-6 tracking-wide'> Get in touch </h4>
              <h2 className='text-4xl lg:text:6xl leading noe font primary'> Let's work together</h2>
            </div>
          </motion.div>
          <motion.div
             variants={fadeIn('left', 0.3)} 
             initial='hidden'
             whileInView={'show'}
             viewPort={{once:false, amount: 0.3}}
             className='flex-1 lg:mt-0 mt-8 border rounded-2xl flex flex-col gap-y-5 pb-12 p-6 items-start'
          >
            <input type='text' placeholder='Enter your name' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-sky-500 transition-all duration-300' />
            <input type='text' placeholder='Enter your email' className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-sky-500 transition-all duration-300' />
            <textarea type='text' placeholder='Enter a message' rows={5} className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-sky-500 transition-all duration-300 resize-none' />
            <button className='btn btn-lg'>Send message </button>
          </motion.div>
        </div>
      </div>

    </section>
  )
}

export default Contact