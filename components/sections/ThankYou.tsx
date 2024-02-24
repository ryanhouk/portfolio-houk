import React from 'react'
import { FadeY } from '../animations'
import DoodleSparkle from '../svg/DoodleSparkle'
import Link from 'next/link'

type Props = {}

const ThankYou = (props: Props) => {
  return (
    <>
    <section className='scroll-mt-16 py-12 lg:py-32 relative'>
        <div className='relative z-20 mx-auto max-w-5xl flex flex-col justify-center px-8'>
          <FadeY delay={0.25}>
            <DoodleSparkle startColor={'#dc2626'} endColor={'#facc15'} className='w-20 mb-2 lg:mb-2 lg:w-32 lg:mx-auto' /></FadeY>
          <h1 className='font-clash text-4xl text-white lg:text-9xl lg:text-center mb-4 lg:mb-8'>
            <FadeY delay={0.5}>Thank You!</FadeY>
          </h1>
          <FadeY delay={0.75}>
            <p className='lg:text-center text-white font-mono opacity-60 max-w-2xl mx-auto text-sm leading-loose'>
              Appreciate you taking the time to check out my portfolio.
            </p>
          </FadeY>
        </div>
         <FadeY delay={1} className='flex lg:justify-center mt-8 px-8'>
            <Link href={'mailto:ryan.houk@proton.me?subject=Hi, Ryan! I like your portfolio.'} target='_blank' className='border-2 border-white px-8 py-3 rounded-full text-white font-object hover:bg-white hover:text-black transition-all duration-300'>Contact Me</Link>
          </FadeY>
      </section>
    </>
  )
}

export default ThankYou