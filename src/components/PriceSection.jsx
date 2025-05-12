import { GiCheckMark } from "react-icons/gi"
import React from 'react';
import { FaWhatsapp } from "react-icons/fa"

const pricingPlans = [
  {
    title: "Starter",
    price: "29",
    currency: "USD",
    frequency: "/One-Time",
    description: "Perfect if you need a clean and effective one-page site to introduce your brand or product.",
    features: [
      "1-page responsive layout",
      "Mobile-first design",
      "Clean, minimal UI",
      "Delivered in 5 days",
    ],
    cta: "Get Started",
    microtext: "Built with purpose. Delivered with clarity.",
    mostPopular: false,
  },
  {
    title: "Pro ",
    price: "59",
    currency: "USD",
    frequency: "/One-Time",
    description: "Includes extra pages and engaging animations to boost user experience and conversions.",
    features: [
      "Up to 3 pages",
      "Animations (Framer Motion)",
      "SEO basic",
      "Delivered in 3 days",
    ],
    cta: "Get Started",
    microtext: "Built with purpose. Delivered with clarity.",
    mostPopular: true,
  },
  {
    title: "Premium",
    price: "99",
    currency: "USD",
    frequency: "/One-Time",
    description: "Ideal for showcasing your portfolio or service with style and clarity.",
    features: [
      "Unlimited sections/pages",
      "Unique design layout",
      "SEO advanced",
      "Contact form integration",
      "Priority delivery (48h)",
      (
        <>
        <span className="flex items-center text-sm gap-1 leading-relaxed">
            + Support via WhatsApp
            <FaWhatsapp className="text-green-500 shrink-0 w-4 h-4"/>
        </span>
        </>
      )
      ,
    ],
    cta: "Get Started",
    microtext: "Built with purpose. Delivered with clarity.",
    mostPopular: false,
  },
];

function PriceSection() {
    
  return (
    <section id='plans' className='w-full py-16 px-4 sm:px-6 md:px-8'>
        <div className='mx-auto max-w-7xl bg-white px-4 pt-24 sm:px-6 lg:px-8 text-center'>

            <h2 className='text-3xl font-extrabold font-Satoshi text-black sm:text-5xl sm:leading-tight sm:tracking-tight'>
                My Pricing Plan
            </h2>

            <p className='mt-4 text-lg text-slate-500 font-Satoshi'>
                Flexible plans for modern websites — choose yours and get online fast.
            </p>
        </div>

        <div className="relative">

            {/* Background decoration */}
            <div className='absolute inset-0 flex flex-col'>

                <div className="flex-1"></div>
                <div className="bg-slate-50 flex-1"></div>

            </div>

            {/* Pricing Plans */}

            <div className='max-w-7xl mx-auto grid lg:grid-cols-3 gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8'>
                {pricingPlans.map((plan) => (
                    <div key={plan.title} className={`
                        ${plan.mostPopular 
                            ? 'relative border-lp-purple p-8 shadow-lg bg-white rounded-2xl flex flex-col border-2'

                            : 'relative border border-slate-200 p-8 shadow-lg bg-white rounded-2xl flex flex-col'
                        }
                    `}>
                
                        <h3 className='text-lg font-Satoshi font-semibold leading-5'>{plan.title}</h3>
                        {plan.mostPopular && (
                            <p className='absolute top-0 -translate-y-1/2 bg-lp-purple text-white px-3 py-0.5 text-sm font-semibold font-Satoshi tracking-wide rounded-full shadow-md'>
                                Most Popular
                            </p>
                        )}
                        
                        <p className='mt-4 text-sm text-slate-700 leading-6'>{plan.description}</p>

                        <div className='-mx-6 mt-4 bg-slate-50 p-6 rounded-lg'>
                            <p className='text-sm font-semibold font-Satoshi text-slate-500 flex items-center'>
                                <span >{plan.currency}</span>
                                <span className='ml-3 text-4xl text-slate-900'>${plan.price}</span>
                                <span className='ml-1.5'>{plan.frequency}</span>
                            </p>
                            <p className="text-gray-500 text-xs">One-time payment. Lifetime access. </p>
                        </div>

                        {/* Features */}
                        <ul className='mt-6 space-y-4 flex-1'>
                            {plan.features.map((feature) => (
                                
                                <li key={feature} className='text-sm text-slate-700 leading-5 font-Satoshi flex'>
                                    <GiCheckMark className="h-4 w-4 text-lp-purple-light shrink-0" />
                                    <span className="ml-3">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                            <a href="" className={`mt-8 block px-6 py-4 text-sm font-semibold font-Satoshi leading-4 text-center rounded-lg 
                                
                                ${
                                    plan.mostPopular 
                                    ? 'text-white bg-lp-purple hover:bg-indigo-600 shadow-md' 
                                    : 'text-lp-purple bg-purple-50 hover:bg-purple-100 '
                                }
                            `}
                        >
                            {plan.cta}
                        </a>

                        {/* Microtext */}
                        <p className='mt-4 -mb-2 text-sm text-slate-500 font-Satoshi text-center'>
                            {plan.microtext} 
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default PriceSection