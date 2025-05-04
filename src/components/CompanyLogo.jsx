import React from 'react'
import slack from '../assets/companies/Slack.png'
import amazon from '../assets/companies/Amazon.png'
import google from '../assets/companies/Google.png'
import github from '../assets/companies/Github.png'
import woocommerce from '../assets/companies/Woocommerce.png'
import netflix from '../assets/companies/Netflix.png'
import worten from '../assets/companies/Worten.png'
import youtube from '../assets/companies/Youtube.png'

function CompanyLogo(){

  const companies = [
    slack,
    amazon,
    google,
    github,
    woocommerce,
    netflix,
    worten,
    youtube
  ]
  return (
    <div className='w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:items-center items-start'>

      <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold font-Satoshi text-left'>
        Proud partners
      </div>

      <div className='flex whitespace-nowrap animate-walkingX'>
        {companies.map((company, index) => (
          <img key={index} src={company} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all'/>
        ))}

        {/* Duplicate companies */}
        {companies.map((company, index) => (
          <img key={`duplicate-${index}`} src={company} alt="company logo" className='mx-12 h-8 w-36 object-contain grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all'/>
        ))}
      </div>
    </div>
  )
}

export default CompanyLogo