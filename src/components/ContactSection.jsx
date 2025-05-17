import React from 'react'
import { FiArrowRight } from "react-icons/fi"

const ContactSection = () => {

  return (
    <section id='contact' className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
      <div className='bg-lp-blue rounded-2xl overflow-hidden'>
        <div className='relative md:px-16 py-16 px-6 md:py-24'>

          {/* Gradient Background */}
          <div className='absolute top-0 right-0 w-1/2 h-full bg-blue-700 clip-path-slant hidden md:block'></div>

          <div className='relative flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-4'>

            {/* Left content */}
            <div className='text-white max-w-lg text-center md:text-left'>
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-medium font-Satoshi mb-4'>Ready to order?</h2>
              <p className='text-blue-100 text-sm sm:text-base'>Get in touch to help you create a landing page that connects and converts.</p>
            </div>

            {/* Right content */}
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-0'>

              <button className='text-white bg-lp-purple w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-l-lg sm:rounded-r-lg flex items-center gap-2 hover:bg-purple-600 hover:translate-x-1 transition-transform duration-200 ease-in-out'>
                <a href="https://wa.link/7zv7ge" target='_blank'>
                  <span>Let’s create something amazing! 🎨</span>
                </a>
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