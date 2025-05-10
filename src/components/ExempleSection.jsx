import React from 'react'
import imgCard1 from '../assets/usecases/analysis.jpg'
import imgCard2 from '../assets/usecases/interior.jpg'
import imgCard3 from '../assets/usecases/ux.jpg'
import { FaReact } from "react-icons/fa"
import { RiTailwindCssFill } from "react-icons/ri"
import { DiResponsive } from "react-icons/di"


const cardsdata = [
  {
    img: imgCard1,
    title: "Launch your course with clarity and style",
    description: "Boost your online course signups",
  },
  {
    img: imgCard2,
    title: "Transform your space with stunning interior design",
    description: "Elevate your home with our expert design services",
  },
  {
    img: imgCard3,
    title: "Crafting seamless user experiences",
    description: "Designing intuitive interfaces for your digital products",
  },
]

function ExempleSection() {

  return (
    <section id="examples" className="w-full bg-lp-bg py-16 px-4 sm:px-6 md:px-8">
  <div className="max-w-7xl mx-auto">
    <div className="text-center mb-10">
      <h2 className="text-3xl font-semibold font-Satoshi text-gray-800">
        Real use cases. Real results.
      </h2>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {cardsdata.map((card, index) => (
        <div key={index} className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
          <img
            className="w-full h-[280px] object-cover transition-transform duration-500 hover:scale-105"
            src={card.img}
            alt={`example-${index + 1}`}
          />

          <div className="border-t border-[#EBEBEB] p-5 flex flex-col justify-between flex-1">

            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <Badge icon={<FaReact />} color="blue" label="React.js" link="https://react.dev/" />
              <Badge icon={<RiTailwindCssFill />} color="cyan" label="TailwindCSS" link="https://tailwindcss.com/" />
              <Badge icon={<DiResponsive />} color="purple" label="Responsive" link="https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design" />
            </div>
            
            <h5 className="text-lg font-bold font-Satoshi leading-tight mb-2">
              {card.title}
            </h5>
            <p className="font-Satoshi text-sm text-gray-500">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
  )
}

// Badge Component
const Badge = ({ icon, color, label, link }) => (
  <a
    className={`flex items-center gap-1.5 rounded-full bg-${color}-50 px-2.5 py-1 text-xs font-medium text-${color}-600 ring-1 ring-${color}-700/10 ring-inset font-Satoshi tracking-tight`}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon} {label}
  </a>
);

export default ExempleSection