import React from 'react'
import imgCard2 from '../assets/usecases/analysis.jpg'
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { DiResponsive } from "react-icons/di"
import { PiDeviceMobileCameraLight } from "react-icons/pi"
import { TbBrandFramerMotion } from "react-icons/tb"

function ExempleSection() {

  return (
    <section id='examples' className='w-full bg-lp-bg py-16 px-4 sm:px-6 md:px-8'>

        <div className="container">
          <div className="text-center">
            <div className="title-span">
              <h2 className='text-3xl font-semibold font-Satoshi text-gray-800 mb-10 container mx-auto px-4 sm:px-6 lg:px-8'>Real use cases. Real results.</h2>
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
                  <div className="left-3 top-3 absolute px-2 py-1 rounded-fullshadow-sm inline-flex items-center rounded-md bg-purple-50 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset">LaunchPeack Edu</div>
                </div>
                <div className="pt-[20px]">
                  <div className="flex items-center gap-[12px] mr-[10px]">
                    <span className='items-center justify-between gap-1 flex'>
                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://react.dev/"><FaReact /> React.js</a>

                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://tailwindcss.com/"><RiTailwindCssFill /> TailwindCSS</a>

                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-purple-50-50 px-2.5 py-1 text-xs font-medium text-purple-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"><DiResponsive /> Responsive</a>
                    </span>
                  </div>
                  <h5 className='text-base font-bold font-Satoshi mt-2'>Launch your course with clarity and style</h5>
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
                  <div className="left-3 top-3 absolute px-2 py-1 rounded-fullshadow-sm inline-flex items-center rounded-md bg-purple-50 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset">LaunchPeack App</div>
                </div>
                <div className="pt-[20px]">
                  <div className="flex items-center gap-[12px] mr-[10px]">
                  <span className='items-center justify-between gap-1 flex'>
                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://react.dev/"><FaReact /> React.js</a>

                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/"><PiDeviceMobileCameraLight /> Mobile-First UI</a>

                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-purple-50-50 px-2.5 py-1 text-xs font-medium text-purple-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://motion.dev/"><TbBrandFramerMotion /> Frame Motion</a>
                    </span>
                  </div>
                  <h5 className='text-base font-bold font-Satoshi mt-2'>Convert users with a high-impact landing</h5>
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
                  <div className="left-3 top-3 absolute px-2 py-1 rounded-fullshadow-sm inline-flex items-center rounded-md bg-purple-50 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset">LaunchPeak Portfolio</div>
                </div>
                <div className="pt-[20px]">
                  <div className="flex items-center gap-[12px] mr-[10px]">
                  <span className='items-center justify-between gap-1 flex'>
                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://react.dev/"><FaReact /> React.js</a>

                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-cyan-50 px-2.5 py-1 text-xs font-medium text-cyan-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://tailwindcss.com/"><RiTailwindCssFill /> TailwindCSS</a>

                      <a className='flex flex-wrap items-center gap-1.5 rounded-full bg-purple-50-50 px-2.5 py-1 text-xs font-medium text-purple-600 ring-1 ring-blue-700/10 ring-inset font-Satoshi tracking-tight' href="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design"><DiResponsive /> Responsive</a>
                    </span>
                  </div>
                  <h5 className='text-base font-bold font-Satoshi mt-2'>Stand out with a clean and modern</h5>
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