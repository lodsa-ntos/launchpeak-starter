import React from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { textVariant, textVariantTwo, textVariantThree } from '../utils/motion';

function PurposeSection() {
    const purposeData = [
        {
            icon: (
                <>
                <motion.div
                variants={textVariantTwo(0.2)}
                initial="hidden"
                whileInView="show"
                >
                1️⃣
                </motion.div>
                </>
            ),
            title: (
                <motion.h3
                variants={textVariantTwo(0.2)}
                initial="hidden"
                whileInView="show"
                >
                Helping creators and small businesses launch ideas with a digital impact.
                </motion.h3>  
            ),
            description: (
                <motion.p
                variants={textVariantTwo(0.2)}  
                initial="hidden"
                whileInView="show"
                >
                LaunchPeak exists to transform ideas into clear, modern and conversion-focused pages. We want to make it easier to launch products, apps, events or professional profiles - without the creator needing to understand code or design.
                </motion.p>
            ),
        },
        {
            icon: (
                <>
                <motion.div
                variants={textVariantThree(0.2)}
                initial="hidden"
                whileInView="show"
                >
                2️⃣
                </motion.div>
                </>
            ),
            title: (
                <motion.h3
                variants={textVariantThree(0.2)}
                initial="hidden"
                whileInView="show"
                >
                Offer personalised landing pages that combine aesthetics, speed and functionality.
                </motion.h3>  
            ),
            description: (
                <motion.p
                variants={textVariantThree(0.2)}  
                initial="hidden"
                whileInView="show"
                >
                No generic or slow pages. The aim is to deliver a beautiful, lightweight, responsive and functional digital product - ready to receive visitors, capture leads or generate sales from day one.
                </motion.p>
            ),
        },
    ]


  return (
    <section id='features' className='w-full bg-gray-50 py-16 px-4 sm:px-6 md:px-8'>
        <div className='max-w-6xl mx-auto container'>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>

                {/* Left side Heading text */}
                <motion.div 
                variants={textVariant(0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className=''>
                    <p className='text-sm text-purple-600 font-medium font-Satoshi mb-2'>Achieve more</p>

                    <h2 className='text-3xl md:w-4/5 w-full md:text-4xl font-bold font-Satoshi text-gray-900'>Our purpose</h2>
                </motion.div>

                {/* Middle side text */}
                <div
                className='col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8'>
                    {purposeData.map((item, index) => (
                        <div key={index} className='flex space-x-4'>
                            <div className='w-12 h-12 flex items-center justify-start rounded-lg '>
                                {item.icon}
                            </div>

                            <div>
                                <h3 className='text-xl font-semibold font-Satoshi text-gray-900 mb-2'>{item.title}</h3>
                                <p className='text-gray-600 font-Satoshi'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right side image */}
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default PurposeSection