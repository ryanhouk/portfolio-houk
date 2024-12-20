import React, { useEffect } from 'react'
import Navbar from '../components/nav/Navbar'
import About from '../components/sections/About'
import LoopingText from '../components/animations/LoopingText'
import Blog from '../components/sections/Blog'
import Footer from '../components/sections/Footer'
import SkillsGrid from '../components/sections/SkillsGrid'
import ThankYou from '../components/sections/ThankYou'
import CaseStudies from '../components/sections/CaseStudies'
import Tools from '../components/sections/Tools'
// import HeroCarousel from '../components/heroes/HeroCarousel'
import HeroCarousel from '../components/heroes/HeroCarousel'
import HeroReturns from '../components/heroes/HeroReturns'
import FaveThings from '../components/sections/FaveThings'

type Props = {}

const Index = (props: Props) => {
  useEffect(() => {
    // Save the current body background color
    const originalBackgroundColor = document.body.style.backgroundColor

    // Set the body background to the desired color when the component mounts
    document.body.style.backgroundColor = 'black' // or any color you prefer

    // Revert back to the original color when the component unmounts
    return () => {
      document.body.style.backgroundColor = originalBackgroundColor
    }
  }, [])

  return (
    <>
      <div id="Home" className="relative overflow-clip">
        <div className="fixed bottom-0 z-10 w-full h-32 bg-gradient-to-t from-black to-black/0 lg:h-32"></div>
        <Navbar />
        {/* <Hero /> */}
        <HeroReturns />
        <HeroCarousel />
        {/* <ScrollCards /> */}
        {/* <Package /> */}
        <SkillsGrid />
        <LoopingText />
        {/* <FeatureProject /> */}
        {/* <WorkHighlights /> */}
        <CaseStudies />
        <Tools />
        {/* <SkillCallouts /> */}
        <Blog />
        <About />
        <FaveThings />
        <ThankYou />
        <Footer />
        {/* END DIV */}
      </div>
    </>
  )
}

export default Index
