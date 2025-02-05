import React from 'react'
import Hero from '../Components/Hero/Hero'
import WhatWeDo from '../Components/WhatWeDo/WhatWeDo'
import AboutUs from '../Components/AboutUs/AboutUs'
import Stats from '../Components/Stats/Stats'
import ProductsHome from '../Components/ProductsHome/ProductsHome'

function Home() {
  return (
    <>
        <Hero/>
        <WhatWeDo/>
        <AboutUs/>
        <Stats/>
        <ProductsHome/>
    </>
  )
}

export default Home