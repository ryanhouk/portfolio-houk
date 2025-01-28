import React from 'react'
import Image from 'next/image'
import LogoColor from '../images/mixtape-white.svg'
import Link from 'next/link'
import HorizontalImageScroller from './HorizontalImageScroller'
import ImageShrink from './ImageShrink'
import LogoApple from '../svg/LogoApple'
import { FadeY } from '../../../components/animations'
import BackgroundWarm from '../images/background-warm.webp'
import IconMixtape from '../svg/IconMixtape'

type Props = {}

const Index = (props: Props) => {
  return (
    <>
      {/* NAV */}
      {/* <section className="p-4 bg-neutral-900">
        <div className="flex items-center justify-between max-w-6xl pb-4 mx-auto">
          <Image
            src={LogoColor}
            alt="Mixtape Logo"
            className="w-24 -mb-1 lg:w-32"
          />
          <div className="flex gap-6 mt-2">
            <Link
              className="font-medium text-[#F6F1E9] transition-all hover:opacity-50"
              href={''}>
              Our Mission
            </Link>
            <Link
              className="font-medium text-[#F6F1E9] transition-all hover:opacity-50"
              href={''}>
              Beta Signup
            </Link>
          </div>
        </div>
      </section> */}

      {/* INTRO */}
      <div className="flex w-full h-1">
        <div className="flex-1 bg-[#FB2925]"></div>
        <div className="flex-1 bg-[#FC850A]"></div>
        <div className="flex-1 bg-[#FFAA13]"></div>
      </div>
      <section className="bg-neutral-900">
        <div className="max-w-6xl px-8 py-16 mx-auto lg:py-32">
          <FadeY>
            <IconMixtape className="w-12 mx-auto mb-4 text-white lg:w-16" />
            <Image
              src={LogoColor}
              alt="Mixtape Logo"
              className="mx-auto w-44 lg:w-64"
            />
          </FadeY>
          <FadeY delay={0.25} className="max-w-xl mx-auto">
            {/* <h2 className="text-3xl font-black text-[#F6F1E9] lg:text-6xl text-center">
              Join the beta
            </h2> */}
            <p className="mt-4 text-[#F6F1E9]/70 text-lg lg:text-2xl mb-6 px-6 lg:px-0 lg:mb-8 text-center">
              Sign up now for early access to Mixtape. Save anything from the
              web and organize it your way.
            </p>
          </FadeY>
          <FadeY delay={0.5} className="flex justify-center">
            <Link
              href={''}
              className="font-bold w-64 flex items-center justify-center gap-4 text-neutral-800 bg-[#F6F1E9] text-center hover:text-neutral-800 rounded-xl px-4 py-3 transition-all hover:opacity-80">
              <LogoApple className="w-4" /> Join the Beta
            </Link>
          </FadeY>
        </div>
      </section>
      {/* FEATURE */}
      <section className="pb-32 bg-neutral-900">
        <HorizontalImageScroller />
      </section>

      {/* BANNER */}
      <ImageShrink image={BackgroundWarm} title="Organize it your way." />

      {/* LOWER */}
      <section className="py-8 lg:py-32 bg-[#F6F1E9] border-t border-neutral-800/20">
        <FadeY delay={0.25} className="max-w-xl mx-auto">
          <p className="px-6 mt-4 mb-6 text-lg text-center text-neutral-900 lg:text-2xl lg:px-0 lg:mb-8">
            Sign up now for early access to Mixtape. Save anything from the web
            and organize it your way.
          </p>
        </FadeY>
        <FadeY delay={0.5} className="flex justify-center pb-8">
          <Link
            href={''}
            className="font-bold w-64 flex items-center justify-center gap-4 text-neutral-800 bg-[#F6F1E9] border-2 border-neutral-800 text-center hover:text-neutral-800 rounded-xl px-4 py-3 transition-all hover:opacity-80">
            <LogoApple className="w-4" /> Join the Beta
          </Link>
        </FadeY>
      </section>
    </>
  )
}

export default Index
