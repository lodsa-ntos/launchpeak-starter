import React from 'react'
import { FiArrowRight } from "react-icons/fi"

const ContactSection = () => {

  return (
    <section className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <div className='bg-lp-blue rounded-2xl overflow-hidden'>
        <div className='relative md:px-16 py-16 px-6 md:py-24'>

          {/* Gradient Background */}
          <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>

          <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12'>

            {/* Left content */}
            <div className='text-white max-w-lg text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium font-Satoshi mb-4'>Ready to launch with impact?</h2>
              <p className='text-blue-100 text-sm sm:text-base'>Leave your email and I’ll get in touch to help you create a landing page that connects and converts.</p>
            </div>

            {/* Right content */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>
              <input type="email" placeholder='Enter your e-mail address' className='w-full sm:w-auto md:w-80 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-l-xl sm:rounded-r-none focus:outline-none font-Satoshi bg-white'
              />
              
              <button className='text-white bg-lp-purple w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-none sm:rounded-r-lg flex items-center gap-2 hover:bg-purple-600 transition'>
                <span>Discover</span>
                <FiArrowRight className='size-5'/>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection