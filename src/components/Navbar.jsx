import React, { useState } from 'react'
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 border-b border-gray-300 shadow-sm'>
      <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
        {/* Logo */}
        <div className='flex items-center cursor-pointer'>
        <span className='text-xl font-Lobster text-[#3d55cc] opacity-85 hover:opacity-100 transition-opacity'>Launch</span>
          <span className='text-xl font-Lobster text-orange-600 opacity-100 hover:opacity-85 transition-opacity'>Peak.</span>
        </div>

        {/* Mobile Menu */}
        <div
          id="nav-menu"
          className={`absolute top-0 ${
            menuOpen ? 'left-0' : 'left-[100%]'
          } min-h-[100vh] w-full bg-[#3d55cc]/95 backdrop-blur-sm flex items-center justify-center duration-300 ease-in-out overflow-hidden lg:static lg:min-h-fit lg:bg-transparent lg:w-auto`}
        >
          <ul className="flex flex-col items-center gap-8 lg:flex-row">
            {[
              { href: '#home', label: 'Home' },
              { href: '#features', label: 'Features' },
              { href: '#examples', label: 'Examples' },
              { href: '#plans', label: 'Plans' },
              { href: '#faqs', label: 'FAQs' },
              { href: '#contact', label: 'Contact' }
            ].map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                onClick={() => {setActiveLink(link.href); closeMenu(); }} 
                className={`nav-link 
                  ${activeLink === link.href
                  ? 'text-blue-700 after:w-full'
                  : menuOpen
                    ? 'text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
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
    </nav>
  )
}

export default Navbar