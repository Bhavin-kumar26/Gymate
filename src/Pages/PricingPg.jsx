import React from 'react'
import PagesHeader from '../Components/PagesHeader'
import Pricing from '../Components/Pricing/Pricing'
import Footer from '../Components/Footer'

const PricingPg = () => {
  return (
    <div>
      <PagesHeader text={"Pricing"}/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default PricingPg