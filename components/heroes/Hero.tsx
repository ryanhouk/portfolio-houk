import React from 'react'
import { FadeY } from '../animations'
import ArrowDown from '../svg/ArrowDown'

type Props = {}

const Hero = (Props: Props) => {
  return (
    <>
      <section className="relative pt-32 pb-20 overflow-clip selection:bg-orange-200 lg:pb-48 lg:pt-72">
        <div className="absolute top-0 z-10 w-full h-32 bg-gradient-to-b from-black to-black/0 lg:h-96"></div>
        <FadeY className="relative z-20 flex max-w-5xl gap-4 px-8 mx-auto mb-4 lg:mb-6 lg:justify-center">
          <div className="font-mono text-transparent transition-all duration-200 bg-gradient-to-tr from-red-600 to-yellow-400 bg-clip-text hover:cursor-cell">
            Ryan Houk
          </div>
        </FadeY>

        <div className="relative z-20 flex flex-col justify-center max-w-5xl px-8 mx-auto">
          <h1 className="mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-8xl">
            <FadeY delay={0.25}>Product Designer</FadeY>{' '}
            <FadeY delay={0.5}>& Developer</FadeY>
          </h1>
        </div>
        <FadeY className="relative z-20 px-8" delay={0.75}>
          <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-zinc-500 lg:text-center">
            This is a portfolio site. It might look a little messy, but product
            design, development, usability testing, and iterating are often a
            bit messy.
          </p>
        </FadeY>
        <FadeY delay={1}>
          <ArrowDown
            className={'mx-auto mt-10 w-6 animate-bounce'}
            strokeColor={'#fff'}
          />
        </FadeY>
      </section>
    </>
  )
}

export default Hero
