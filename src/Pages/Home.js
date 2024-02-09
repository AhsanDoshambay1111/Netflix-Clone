import React from 'react'
import Hero from '../components/Hero'
import HeroSec1 from '../components/HeroSec1'
import HeroSec2 from '../components/HeroSec2'
import HeroSec3 from '../components/HeroSec3'
import HeroSec4 from '../components/HeroSec4'
import Faq from '../components/Faq'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
     <HeroSec1/>
        <HeroSec2/>
      <HeroSec3/>
      <HeroSec4/>
      <Faq/>
      <Footer/>
    </div>
    
  )
}

export default Home
