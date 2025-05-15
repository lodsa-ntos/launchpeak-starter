import React from 'react'
import imgCard1 from '../assets/usecases/analysis.jpg'
import imgCard2 from '../assets/usecases/interior.jpg'
import imgCard3 from '../assets/usecases/ux.jpg'
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { DiResponsive } from "react-icons/di"
import { HiMiniDevicePhoneMobile } from "react-icons/hi2"
import { TbBrandFramerMotion } from "react-icons/tb"
import { RiSeoLine } from "react-icons/ri"
import { fadeIn } from '../utils/motion'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const cardsdata = [
  {
    img: imgCard1,
    title: "Launch your course with clarity and style",
    description: "Boost your online course signups",
    Badge: [
      { icon: <FaReact className='w-4 h-4'/>, label: "React.js", link: "https://react.dev/" },
      { icon: <RiTailwindCssFill className='w-4 h-4'/>, label: "TailwindCSS", link: "https://tailwindcss.com/" },
      { icon: <DiResponsive className='w-4 h-4'/>, label: "Responsive", link: "https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" }
    ]
  },
  {
    img: imgCard2,
    title: "Transform your space with stunning interior design",
    description: "Elevate your home with our expert design services",
    Badge: [
      { icon: <FaReact className='w-4 h-4'/>, label: "React.js", link: "https://react.dev/" },
      { icon: <HiMiniDevicePhoneMobile className='w-4 h-4'/>, label: "Mobile-First UI", link: "https://www.uxpin.com/studio/blog/a-hands-on-guide-to-mobile-first-design/" },
      { icon: <TbBrandFramerMotion className='w-4 h-4'/>, label: "Framer Motion", link: "https://motion.dev/" }
    ]
  },
  {
    img: imgCard3,
    title: "Crafting seamless user experiences",
    description: "Designing intuitive interfaces for your digital products",
    Badge: [
      { icon: <FaReact className='w-4 h-4'/>, label: "React.js", link: "https://react.dev/" },
      { icon: <RiTailwindCssFill className='w-4 h-4'/>, label: "TailwindCSS", link: "https://tailwindcss.com/" },
      { icon: <RiSeoLine className='w-4 h-4'/>, label: "SEO Optimized", link: "https://www.seoptimer.com/" }
    ]
  },
]

function ExempleSection() {

  return (
    <section id="examples" className="w-full bg-lp-bg py-14 px-4 sm:px-6 md:px-8">
  <div className="max-w-7xl mx-auto px-4 pt-12 sm:px-6 lg:px-8 text-center">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-semibold font-Satoshi text-gray-800">
        Real use cases. Real results.
      </h2>
    </div>

    <motion.div 
    variants={fadeIn('up', 0.5)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    className="grid lg:grid-cols-3 gap-12 lg:gap-8">
      {cardsdata.map((card, index) => (
        <div key={index} className="relative flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <div className='relative'>
            <img
              className="w-full h-[280px] object-cover transition-transform duration-500 hover:scale-105"
              src={card.img}
              alt={`example-${index + 1}`}
            />

            {/* CTA button */}
          <div className='absolute bottom-4 right-4 bg-white rounded-lg shadow-md p-1.5 flex items-center gap-2'>
            <a href='#preview' className='flex gap-1 items-center text-xs font-medium font-Satoshi text-blue-600 hover:underline dark:text-blue-500 hover:translate-x-1 transition-transform duration-200 ease-in-out'>
              Preview Design
              <svg className="w-3 h-3 -mb-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M12.293 2.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L15.586 9H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 010-1.414z"/>
              </svg>
            </a>
          </div>
          </div>

          {/* Card content */}
          <div 
          
          className="border-t border-[#EBEBEB] p-5 flex flex-col justify-between flex-1 itemc">

            <div className="flex items-center gap-3 flex-wrap">
              {card.Badge && card.Badge.map((badge, index) => (
                <Badge
                  key={index}
                  icon={badge.icon}
                  color={badge.color}
                  label={badge.label}
                  link={badge.link}
                />
              ))}
            </div>
            
            <h5 className="text-lg text-start font-bold font-Satoshi leading-tight mb-3 mt-2">
              {card.title}
            </h5>
            <p className="text-start font-Satoshi text-sm text-gray-500">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </motion.div>
  </div>
</section>
  )
}

// Badge Component
const Badge = ({ icon, label, link }) => {
  
  return (
  <a
    className={`flex items-center gap-0.5 rounded-full px-2 py-1 text-xs font-medium font-Satoshi tracking-tight ring-1 ring-inset leading-relaxed hover:scale-105 transition-transform duration-200 ease-in-out

    ${label === 'React.js' 
      ? 'bg-blue-50 text-blue-600 ring-blue-700/10' 
      : label === 'TailwindCSS' 
      ? 'bg-cyan-50 text-cyan-600 ring-cyan-700/10' 
      : label === 'Responsive' 
      ? 'bg-purple-50 text-purple-600 ring-purple-700/10' : label === 'Mobile-First UI' 
      ? 'bg-gray-50 text-gray-600 ring-gray-700/10'
      : label === 'Framer Motion'
      ? 'bg-pink-50 text-pink-600 ring-pink-700/10'
      : label === 'SEO Optimized'
      ? 'bg-red-50 text-red-600 ring-red-700/10'
      : 'bg-gray-50 text-gray-600 ring-gray-700/10'
    }
  `}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon} {label}
  </a>
);}

export default ExempleSection