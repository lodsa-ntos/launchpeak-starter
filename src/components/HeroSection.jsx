import React from 'react'
import { FaArrowRight } from "react-icons/fa6"

function HeroSection() {

  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">

        {/* Hero Section - Left Col */}
        <div className='w-full md:w-1/2 space-y-8'>
            
            
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-Satoshi leading-tight'>
                <span className='inline-block'>We turn ideas into </span>
                
                <span className='text-[#3d55cc] relative inline-block'>pages that sell</span>
            </h1>

            <p className='text-gray-600 text-lg md:text-xl max-w-xl font-Satoshi'>
                Modern, responsive and conversion-optimised landing pages made with React and Tailwind.
            </p>

            <div className='gap-3 max-w-md '>
                <button className="btn">
                    <span>Começar agora</span>
                    <FaArrowRight />
                </button>

                <p className="text-xs text-slate-600 py-4 font-Satoshi font-bold">
                    * 14-day free trial. No credit card required.
                </p>
            </div>
            
        </div>

        {/* Hero Section - Right Col */}
        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 '>
            <div className='relative '>
                <img src="images/hero_mockup.jpg" alt="hero image" className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection