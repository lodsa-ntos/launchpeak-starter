import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import { PiRocketLaunchFill } from "react-icons/pi"

// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

function HeroSection() {

  return (
    <section id='home' className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">

        {/* Hero Section - Left Col */}
        <div className='w-full md:w-1/2 space-y-8'>

            <motion.div
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView="show"
            >
                <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer font-Satoshi font-medium group'>
                    <span className='text-purple-600 grupo-hover:text-amber-300 group-hover:scale-110 transition-transform'><PiRocketLaunchFill /></span>
                    <span className='text-sm font-medium font-Satoshi'>Landing pages for Startups & Creators</span>
                </div>
            </motion.div>            
            
            <motion.h1 
            variants={textVariant(0.3)}
            initial="hidden"
            whileInView="show"
            className='text-4xl md:text-5xl lg:text-6xl font-bold font-Satoshi leading-tight' translate='no'>
                <span className='inline-block break-words hyphens-auto'>We turn ideas into </span>
                
                <span className='text-[#6248d6] relative inline-block'>pages that sell</span>
            </motion.h1>

            <motion.p 
            variants={fadeIn('up', 0.4)}
            initial="hidden"
            whileInView="show"
            className='text-gray-600 text-lg md:text-xl max-w-xl font-Satoshi'>
                Modern, responsive and conversion-optimised landing pages made with React and Tailwind.
            </motion.p>

            <motion.div 
            variants={fadeIn('up', 0.5)}
            initial="hidden"
            whileInView="show"
            className='gap-3 max-w-md '>
                <div className='flex items-center gap-2'>
                    <button className="btn">
                        <a href="https://wa.link/7zv7ge" target='_blank'><span>Get Started</span></a>
                    </button>

                    <button className="w-fit px-5 py-2">
                        <a className="inline-flex gap-2 items-center justify-between hover:opacity-90 hover:text-indigo-600 hover:translate-x-1 transition-transform duration-200 ease-in-out" href="#examples">
                            <span aria-hidden="true" className='font-medium text-base'>See examples</span>
                        <FaArrowRight className='size-3 -mb-1'/>
                        </a>
                    </button>
                </div>

                <p className="text-xs text-gray-500 py-4 font-Satoshi font-semibold">
                Delivered fast. No hidden fees. Ready to convert visitors into buyers.
                </p>
            </motion.div>
            
        </div>

        {/* Hero Section - Right Col */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial="hidden"
        whileInView="show"
        className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 '>
            <div className='relative '>
                <img src="images/hero_mockup5.jpg" alt="hero image" className='relative h-89 z-10 hover:scale-[1.02] transition-transform duration-300'/>
            </div>
        </motion.div>
    </section>
  )
}

export default HeroSection