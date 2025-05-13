import React, { useState } from 'react'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

function Navbar()  {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.nav className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-300 shadow-sm leading-relaxed'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
        {/* Logo */}
        <div className='flex items-center cursor-pointer'>
          <a href="#home">
            <span className='text-xl font-Lobster text-lp-purple opacity-85 hover:opacity-100 transition-opacity'>Launch</span>
            <span className='text-xl font-Lobster text-blue-600 opacity-100 hover:opacity-85 transition-opacity'>Peak.</span>
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          id="nav-menu"
          className={`absolute top-0 ${
            menuOpen ? 'left-0' : 'left-[100%]'
          } min-h-[100vh] w-full bg-[#2D2A55]/95 backdrop-blur-sm flex items-center justify-center duration-300 ease-in-out overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`
        }
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            {[
              { href: '#home', label: 'Home' },
              { href: '#features', label: 'Features' },
              { href: '#examples', label: 'Examples' },
              { href: '#plans', label: 'Plans' },
              { href: '#contact', label: 'Contact' }
            ].map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                onClick={() => {setActiveLink(link.href); closeMenu() }} 
                className={`nav-link 
                  ${
                    menuOpen
                     ? activeLink === link.href
                      ? 'text-blue-400 after:w-full'
                      : 'text-white'

                    : activeLink === link.href
                      ? 'text-blue-600 after:w-full'
                      : 'text-gray-600'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </ul>
        </div>

        {/* Icon Toggle */}
        <div 
          role='button' 
          aria-expanded={menuOpen}
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
          className="text-xl sm:text-3xl cursor-pointer z-50 lg:hidden" onClick={toggleMenu}
        >
          {menuOpen ? <RiCloseLine className='text-white'/> : <RiMenu4Line />}
        </div>
        
      </div>
    </motion.nav>
  )
}

export default Navbar