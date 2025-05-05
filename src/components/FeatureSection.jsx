import React from 'react'

function FeatureSection() {

  const featureData = [
    {
      icon: "🎯",
      title: "Focus on Conversion",
      description: "Designed to guide the visitor to the click. Each section has a strategic purpose.",
    },
    {
      icon: "📱",
      title: "Mobile-First Design",
      description: "Your page will be beautiful and functional on any screen - from mobile to desktop.",
    },
    {
      icon: "⚡",
      title: "Fast charging",
      description: "Clean, optimised code with React and Tailwind. No lags.",
    },
    {
      icon: "🎨",
      title: "Customised design",
      description: "Your page will be beautiful and functional on any screen - from mobile to desktop.",
    },
    {
      icon: "🔗",
      title: "Ready for integrations",
      description: "Forms, email captures, automations or video embedding - all integrated.",
    },
    {
      icon: "🔍",
      title: "Basic SEO Included",
      description: "Your page starts with a solid foundation for being found on Google.",
    },
]


  return (
    <section id='features' className='max-w-7xl mx-auto px-4 py-16 '>
      
      {/* Feature Section - Title */}
      <div className='text-center mb-16'>
        <h2 className='text-3xl font-bold font-Satoshi mb-4'>What makes our landing pages different?</h2>
        <p className='text-gray-600 font-Satoshi'>We don't just deliver beautiful design. <br />
          We deliver pages designed to guide the visitor to action.</p>
      </div>

      {/* Feature Section - Boxs */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        {featureData.map((item, index) => (
          <div key={index} className='flex flex-col text-center items-center p-6 '>

            <div className='w-24 h-24 rounded-full mb-6 flex items-center justify-center' style={{backgroundColor: index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : index === 2 ? "#FFF3E4" : index === 3 ? "#E6F4FF" : index === 4 ? "#E6FFFA" : "#F0F9FF"}}>
              <div className='text-3xl'>{item.icon}</div>
            </div>

            <h3 className='text-2xl font-medium font-Satoshi mb-3'>{item.title}</h3>
            <p className='text-gray-500 text-center font-Satoshi'>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Feature Section - Closing block */}
      <div className='text-center mt-16'>
        <p className='px-8 py-3 font-medium font-Satoshi italic grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-200'>We don’t just give your idea a place — we give it presence. With 
          <span className='font-Lobster text-lp-purple hover:text-lp-purple-light transition-colors duration-200'>Launch</span>
          <span className='font-Lobster text-lp-blue hover:text-lp-blue-light transition-colors duration-200'>Peak</span>, 
          you’ll launch with purpose.
        </p>
      </div>

    </section>
  )
}

export default FeatureSection