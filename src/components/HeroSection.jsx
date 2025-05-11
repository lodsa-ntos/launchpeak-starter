import React from 'react'
import { FaArrowRight } from "react-icons/fa6"
import { PiRocketLaunchFill } from "react-icons/pi"
import { MdOutlineLocalSee } from "react-icons/md"

function HeroSection() {

  return (
    <section id='home' className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">

        {/* Hero Section - Left Col */}
        <div className='w-full md:w-1/2 space-y-8'>

            <div className='flex items-center gap-2 bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100 transition-colors cursor-pointer font-Satoshi font-medium group'>
                <span className='text-purple-600 grupo-hover:text-amber-300 group-hover:scale-110 transition-transform'><PiRocketLaunchFill /></span>
                <span className='text-sm font-medium font-Satoshi'>Landing pages for Startups & Creators</span>
            </div>            
            
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-Satoshi leading-tight'>
                <span className='inline-block'>We turn ideas into </span>
                
                <span className='text-[#6248d6] relative inline-block'>pages that sell</span>
            </h1>

            <p className='text-gray-600 text-lg md:text-xl max-w-xl font-Satoshi'>
                Modern, responsive and conversion-optimised landing pages made with React and Tailwind.
            </p>

            <div className='gap-3 max-w-md '>
                <div className='flex items-center gap-2'>
                    <button className="btn">
                        <span>Get Started</span>
                    </button>

                    <button className="w-fit px-5 py-2">
                        <a className="inline-flex gap-2 items-center justify-between" href="#examples">
                            <span aria-hidden="true" className='font-medium text-base'>See examples</span>
                        <FaArrowRight className='size-3 -mb-1'/>
                        </a>
                    </button>
                </div>

                <p className="text-xs text-[#b996ff] py-4 font-Satoshi font-bold">
                Delivered fast. No hidden fees. Ready to convert visitors into buyers.
                </p>
            </div>
            
        </div>

        {/* Hero Section - Right Col */}
        <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12 '>
            <div className='relative '>
                <img src="images/hero_mockup5.jpg" alt="hero image" className='relative h-89 z-10 hover:scale-[1.02] transition-transform duration-300'/>
            </div>
        </div>
    </section>
  )
}

export default HeroSection