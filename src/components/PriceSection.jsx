import React from 'react'

function PriceSection() {
  return (
    <section>
        <div className='container mx-auto py-20'>
            <div className="text-center">
                <div className="title-span">Pricing</div>
                <h2 className='title'>My Pricing Plan</h2>
            </div>

            <div className='row-auto mt-5'>
                <div className="col-md-4">
                    <div className="pricing-box">
                        <div className="price-inner">
                            <div className="pr-tag">Basics</div>
                            <h5><span>120</span></h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PriceSection