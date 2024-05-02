import React from 'react'
import Hero from '../components/hero/Hero'
import Populeer from '../components/popular/Populeer'
import Offer from '../components/offers/Offer'
import NewCollection from '../components/newcollection/NewCollection'
import Newsletter from '../components/newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Populeer/>
        <Offer/>
        <NewCollection/>
        <Newsletter/>
    </div>
  )
}

export default Shop