import React from 'react'
import { FaRegFutbol } from "react-icons/fa"

function HeroSection() {

  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">

        {/* Hero Section - Left Col */}
        <div className='w-full md:w-1/2 space-y-8'>
            
            
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold font-Satoshi leading-tight'>
                We turn ideas into 
                <span className='text-blue-600 relative inline-block'>pages that sell</span>
            </h1>

            <p className='text-gray-600 text-lg md:text-xl max-w-xl font-Satoshi'>
                Modern, responsive and conversion-optimised landing pages made with React and Tailwind.
            </p>

            <div>
                <button className="btn">
                    <span>Começar agora</span>
                    <FaRegFutbol />
                </button>

                <p className="text-xs text-slate-600 py-4 font-Satoshi font-bold">
                    * 14-day free trial. No credit card required.
                </p>
            </div>
            
        </div>

        {/* Hero Section - Right Col */}
        <div className='w-full md:w-1/2 '>
            Right
        </div>
    </section>
  )
}

export default HeroSection