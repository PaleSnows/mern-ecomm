import React from 'react'
import Hero from '../components/hero/Hero'
import Popular from '../components/popular/Popular'
import Offers from '../components/offers/Offers'
import NewCollection from '../components/newCollection/NewCollection'
import NewsLEtter from '../components/newsletter/NewsLEtter'
import Footer from '../components/footer/Footer'

const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offers/>
        <NewCollection/>
        <NewsLEtter/>
        

    </div>
  )
}

export default Shop