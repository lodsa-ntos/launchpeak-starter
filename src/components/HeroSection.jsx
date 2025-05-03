import React from 'react'

function HeroSection() {

  return (
    <section className="container mx-auto flex flex-col md:flex-row justify-between items-center pt-44 pb-6 px-4 sm:px-6 lg:px-8">

        {/* Hero Section - Left Col */}
        <div className='w-full md:w-1/2 space-y-8'>
            Left
        </div>

        {/* Hero Section - Right Col */}
        <div className='w-full md:w-1/2 '>
            Right
        </div>
    </section>
  )
}

export default HeroSection