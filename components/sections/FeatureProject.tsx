import React from 'react'
import Image from 'next/image'
import { FadeY } from '../animations'
import DoodleScribbleAnimate from '../svg/DoodleScribbleAnimate'

type Props = {}

const FeatureProject = (props: Props) => {
  return (
    <>
      {/* INTRO */}
      <section
        id="Work"
        className="relative z-20 flex flex-col justify-center max-w-5xl px-8 py-12 mx-auto scroll-mt-10 selection:bg-orange-200 lg:pt-32">
        <FadeY>
          <DoodleScribbleAnimate
            startColor={'#dc2626'}
            endColor={'#facc15'}
            className="w-24 mb-2 lg:mx-auto lg:mb-0 lg:w-44"
          />
        </FadeY>
        <h1 className="z-10 mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-9xl">
          <FadeY delay={0.25}>Work </FadeY>
          <FadeY delay={0.5}>Highlights</FadeY>
        </h1>
        <FadeY className="relative z-20" delay={0.75}>
          <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-white opacity-60 lg:text-center">
            There is a lot of work to choose from! Here are a few highlights to
            dive into.
          </p>
        </FadeY>
      </section>

      {/* CONTENT */}
      <section className="relative py-12 lg:pb-32">
        <div className="absolute z-30 w-full bg-gradient-to-b from-black to-black/0 h-28"></div>
        <Image
          src={`/img/mockup/scene/iphone-mixtape.png`}
          height={225}
          width={3000}
          className="relative z-10 w-full scale-150 lg:scale-100"
          alt={''}
        />
        {/* <h3 className="text-white font-clash text-6xl lg:text-[300px] text-center -mt-8 lg:-mt-64 z-0 relative">
          Mixtape
        </h3> */}
      </section>
    </>
  )
}

export default FeatureProject
