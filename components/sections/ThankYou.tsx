import React from 'react'
import { FadeY } from '../animations'
import DoodleSparkleAnimate from '../svg/DoodleSparkleAnimate'
import LinkButton from '../buttons/LinkButton'

type Props = {}

const ThankYou = (props: Props) => {
  return (
    <>
      <section
        id="Contact"
        className="relative py-12 mt-16 scroll-mt-16 lg:py-32 selection:bg-orange-200">
        <div className="relative z-20 flex flex-col justify-center max-w-5xl px-8 mx-auto">
          <FadeY delay={0.25}>
            <DoodleSparkleAnimate
              startColor={'#dc2626'}
              endColor={'#facc15'}
              className="w-20 mb-2 lg:mx-auto lg:mb-2 lg:w-32"
            />
          </FadeY>
          <h1 className="mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-9xl">
            <FadeY delay={0.5}>Thank You!</FadeY>
          </h1>
          <FadeY delay={0.75}>
            <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-zinc-500 lg:text-center">
              Appreciate you taking the time to check out my portfolio 👍
            </p>
          </FadeY>
        </div>
        <FadeY delay={1} className="flex px-8 mt-8 lg:justify-center">
          <LinkButton
            url={
              'mailto:ryan.houk@proton.me?subject=Hi, Ryan! A message via ryanhouk.com.'
            }
            title={'Contact Me'}
          />
        </FadeY>
      </section>
    </>
  )
}

export default ThankYou
