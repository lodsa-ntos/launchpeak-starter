import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'

// import Swiper core and required modules
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function ExempleSection() {

  const swiperWrapperRef = useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;

    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.style.marginLeft = screenWidth <= 520 ? "0px" : screenWidth <= 650 ? "-50px" : screenWidth <= 800 ? "-100px" : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener('resize', adjustMargin);
    return () => window.removeEventListener('resize', adjustMargin);
  }, [])

  const slides = [
    {
      title: 'Example 1',
      description: 'Description for example 1',
      imgSrc: 'images/varition/website.jpg',
      categories: ['Category 1', 'Category 2'],
    },
    {
      title: 'Example 2',
      description: 'Description for example 2',
      imgSrc: 'images/varition/simple.jpg',
      categories: ['Category 1', 'Category 2'],
    },
    {
      title: 'Example 3',
      description: 'Description for example 3',
      imgSrc: 'images/varition/interior.jpg',
      categories: ['Category 1', 'Category 2'],
    },
    {
      title: 'Example 4',
      description: 'Description for example 4',
      imgSrc: 'images/varition/ux.jpg',
      categories: ['Category 1', 'Category 2'],
    }
  ];

  return (
    <section id='examples' className='w-full bg-lp-bg py-16 px-4 sm:px-6 md:px-8'>
        
        <h2 className='text-3xl font-semibold font-Satoshi text-gray-800 mb-10'>Real use cases. Real results.</h2>

        <div className='flex items-center justify-center h-[100vh] bg-[#03171d] font-Satoshi overflow-hidden'>
          <div className='w-[80%]'>
            <Swiper modules={[Pagination]}
              grabCursor
              initialSlide={2}
              centeredSlides
              slidesPerView="auto"
              speed={800}
              slideToClickedSlide
              pagination={{clickable: true}}
              breakpoints={{
                320: {spaceBetween:40},
                650: {spaceBetween:30},
                1000: {spaceBetween:20},
              }}
              onSwiper={(swiper) => {
                swiperWrapperRef.current = swiper.wrapperEl;

              }}
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img 
                    className='block w-full h-full object-cover' 
                    src={slide.imgSrc} 
                    alt={slide.title} 
                  />

                  <div className='title'>
                    <h1>{slide.title}</h1>
                  </div>
                  <div className='content'>
                    <div className='text-box'>
                      <p>{slide.description}</p>
                    </div>
                    <div className='footer-swip'>
                      <div className='category'>
                        {slide.categories.map((category, indx) => (
                          <span key={indx} style={{"--i" : indx + 1}}>
                            {category}
                          </span>
                        ))}
                      </div>
                      <button className='btn-swip group'>
                        <span className='label'> More...</span>
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

    </section>
  )
}

export default ExempleSection