import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa"
import { FaGithub } from "react-icons/fa";


const footerLinks = {
  company: [
    { name: 'About Me', href: '#about' },
    { name: 'Terms of Use', href: '#terms' },
    { name: 'Privacy Policy', href: '#privacypolicy' },
    { name: 'Contact', href: '#contact' },
  ],
  support: [
    { name: 'FAQs', href: '#faqs' },
    { name: 'Refund Policy', href: '#refund' },
  ],
  contact: [
    { name: 'WhatsApp', href: 'https://wa.link/7zv7ge' },
    { name: 'Email', href: 'mailto:lodney.santoss@gmail.com' },
    { name: (
      <>
      <a href='https://www.fiverr.com/lodney_santos?public_mode=true' target='_blank' className='w-12 h-12 text-green-500 hover:text-green-600 font-bold hover:underline'>Fiverr.</a>
      </>
    ), href: 'https://www.fiverr.com/lodney_santos?public_mode=true' },
  ],
}

function Footer() {

  return (
    <footer className='bg-gray-50'>
      <div className='container mx-auto py-16 pb-8 px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12'>
          {/* Logo */}
          <div className='lg:col-span-4'>
              <div className='flex items-center cursor-pointer mb-6'>
                <a href="#home">
                  <span className='text-xl font-Lobster text-lp-purple opacity-85 hover:opacity-100 transition-opacity'>Launch</span>
                  <span className='text-xl font-Lobster text-blue-600 opacity-100 hover:opacity-85 transition-opacity'>Peak.</span>
                </a>
              </div>
              <p className='text-gray-600 mb-6 md:w-3/4 font-Satoshi'>Build with purpose. High-converting landing pages start here. Let’s make it happen.🌐</p>

              <p className='text-gray-600 mb-2 md:w-3/4 font-medium font-Satoshi'>Find me on:</p>

              <div className='flex gap-4'>
                <a href="https://www.instagram.com/lodextechnologies" target='_blank' className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#E1306C] hover:text-white transition-all duration-200 hover:scale-110'><FaInstagram   className='size-5'/></a>

                <a href="https://github.com/lodsa-ntos" target='_blank' className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-600 hover:text-white transition-all duration-200 hover:scale-110'><FaGithub  className='size-5'/></a>

                <a href="https://www.linkedin.com/in/lodney-santos/" target='_blank' className='w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-lp-blue hover:text-white transition-all duration-200 hover:scale-110'><FaLinkedinIn className='size-5'/></a>
              </div>
            </div>

          {/* Links */}
          <div className='lg:col-span-8'>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  <h3 className='text-lg font-medium font-Satoshi text-gray-800 mb-4 uppercase'>{category}</h3>

                  <ul className='space-y-3'>
                    {links.map((link, index) => (
                      <li key={index}>
                        <a href={link.href} className='text-gray-600 hover:text-gray-900 transition-colors duration-200'>{link.name}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer bottom  */}
        <div className='border-t border-gray-200 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
            <p className='text-gray-600 text-sm font-Satoshi'>Your ideas, my code. Together we create impact. 🚀</p>
            <p className='text-gray-600 text-sm font-Satoshi'>© 2025{new Date().getFullYear} Lodney Santos. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer