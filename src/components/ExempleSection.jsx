import React from 'react'
import imgCard1 from '../assets/usecases/ux.jpg'
import imgCard2 from '../assets/usecases/analysis.jpg'
import imgCard3 from '../assets/usecases/interior.jpg'

function ExempleSection() {

  return (
    <section id='examples' className='w-full bg-lp-bg py-16 px-4 sm:px-6 md:px-8 padd blog-sec'>

        <div className="container">
          <div className="text-center">
            <div className="title-span">
              <h2 className='text-3xl font-semibold font-Satoshi text-gray-800 mb-10 container mx-auto px- sm:px-6 lg:px-8'>Real use cases. Real results.</h2>
            </div>
          </div>

            {/* Example cards */}
            <div className="w-full container mx-auto flex px-4 sm:px-6 lg:px-8 md:h-full h-full grid-cols-3 md:grid-cols-3 gap-8">

            {/* First card */}
            <div className="col-md-4">
              <div className="border-solid border-[1px] border-[#EBEBEB] bg-white rounded-lg shadow-md mb-2 p-5 flex flex-col justify-between">
                <div className="relative">
                  <div className="overflow-hidden relative rounded-md w-[20rem]">
                    <img className='transform hover:scale-[1.2]' src={imgCard2} alt="examples images" />
                  </div>
                  <div className="bg-lp-purple text-white text-xs left-3 top-3 absolute px-3 py-1 rounded-full font-medium shadow-sm">LaunchPeack Edu</div>
                </div>
                <div className="pt-[20px]">
                  <div className="flex items-center gap-[12px] mr-[10px]">
                    <a className='text-lp-purple-light text-sm font-[600] font-Satoshi' href="">08 April 2025</a>
                    <a className='text-lp-purple-light text-sm font-[600] font-Satoshi' href="">By coding Lod Santos</a>
                  </div>
                  <h5 className='text-base font-bold font-Satoshi'>Launch your course with clarity and style</h5>
                  <p className='font-Satoshi'>Boost your online course signups</p>
                </div>
              </div>
            </div>

            {/* Second card */}
            <div className="col-md-4">
              <div className="border-solid border-[1px] border-[#EBEBEB] rounded-lg shadow-lg mb-8 p-[20px]">
                <div className="relative">
                  <div className="overflow-hidden relative rounded-md w-[20rem]">
                    <img className='transform hover:scale-[1.2]' src={imgCard2} alt="examples images" />
                  </div>
                  <div className="bg-lp-purple text-white text-xs left-3 top-3 absolute px-3 py-1 rounded-full font-medium shadow-sm">LaunchPeack App</div>
                </div>
                <div className="pt-[20px]">
                  <div className="flex items-center gap-[12px] mr-[10px]">
                    <a className='text-lp-purple-light text-sm font-[600] font-Satoshi' href="">08 April 2025</a>
                    <a className='text-lp-purple-light text-sm font-[600] font-Satoshi' href="">By coding Lod Santos</a>
                  </div>
                  <h5 className='text-base font-bold font-Satoshi'>Convert users with a high-impact landing</h5>
                  <p className='font-Satoshi'>Landing page that converts app installs.</p>
                </div>
              </div>
            </div>
            
            {/* Third card */}
            <div className="col-md-4">
              <div className="border-solid border-[1px] border-[#EBEBEB] rounded-lg shadow-lg mb-8 p-[20px]">
                <div className="relative">
                  <div className="overflow-hidden relative rounded-md w-[20rem]">
                    <img className='transform hover:scale-[1.2]' src={imgCard2} alt="examples images" />
                  </div>
                  <div className="bg-lp-purple text-white text-xs left-3 top-3 absolute px-3 py-1 rounded-full font-medium shadow-sm">LaunchPeak Portfolio</div>
                </div>
                <div className="pt-[20px]">
                  <div className="flex items-center gap-[12px] mr-[10px]">
                    <a className='text-lp-purple-light text-sm font-[600] font-Satoshi' href="">08 April 2025</a>
                    <a className='text-lp-purple-light text-sm font-[600] font-Satoshi' href="">By coding Lod Santos</a>
                  </div>
                  <h5 className='text-base font-bold font-Satoshi'>Stand out with a clean and modern</h5>
                  <p className='font-Satoshi'>Present your work with clarity and impact.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default ExempleSection