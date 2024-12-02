import React from 'react'
import { FadeY } from '../animations'
import ArrowDown from '../svg/ArrowDown'

type Props = {}

const HeroReturns = (Props: Props) => {
  return (
    <>
      <section className="relative pt-32 overflow-clip selection:bg-orange-200 lg:pt-64">
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
          <p className="max-w-xl mx-auto font-mono text-sm leading-loose text-zinc-400 lg:text-center">
            {`Creativity often thrives in a bit of chaos, as the design process can get a little messy at times. But that’s where the magic happens—turning messy ideas into powerful products.`}
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

export default HeroReturns
