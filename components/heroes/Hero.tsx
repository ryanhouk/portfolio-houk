import React from 'react'
import { FadeY } from '../animations'
import HeroCarousel from './HeroCarousel'

type Props = {}

const Hero = (Props: Props) => {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-clip selection:bg-orange-200 lg:pb-48 lg:pt-40">
        <div className="absolute top-0 z-10 w-full h-32 bg-gradient-to-b from-black to-black/0 lg:h-96"></div>
        {/* SPLIT */}
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="relative z-20 flex flex-col justify-center max-w-5xl px-8 mx-auto">
              <FadeY className="mb-4 font-mono text-transparent transition-all duration-200 lg:mb-6 bg-gradient-to-tr from-red-600 to-yellow-400 bg-clip-text hover:cursor-cell">
                Ryan Houk
              </FadeY>
              <h1 className="mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-8xl">
                <FadeY delay={0.25}>Designer</FadeY>{' '}
                <FadeY delay={0.5}>& Developer</FadeY>
              </h1>
            </div>
            <FadeY className="relative z-20 px-8" delay={0.75}>
              <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-zinc-400">
                This is a portfolio site. It might look a little messy, but
                product design, development, usability testing, and iterating
                are often a bit messy.
              </p>
            </FadeY>
          </div>
          <div className="col-span-1 text-5xl text-white">
            <HeroCarousel />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
