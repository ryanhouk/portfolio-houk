import React from 'react'
import { FadeY } from '../animations'
import Link from 'next/link'
import Image from 'next/image'
import DoodleHashAnimate from '../svg/DoodleHashAnimate'

type Props = {}

const About: React.FC<Props> = (props) => {
  return (
    <>
      <section
        id="About"
        className="py-12 scroll-mt-16 selection:bg-orange-200 lg:py-32">
        <div className="relative z-20 flex flex-col justify-center max-w-5xl px-8 mx-auto">
          <FadeY delay={0.25}>
            <DoodleHashAnimate
              StartColor={'#dc2626'}
              EndColor={'#facc15'}
              className="w-10 mb-2 lg:mx-auto lg:mb-0 lg:w-20"
            />
          </FadeY>
          <h2 className="mb-4 text-4xl text-white font-clash lg:mb-8 lg:text-center lg:text-9xl">
            <FadeY delay={0.5}>About Me</FadeY>
          </h2>
          <FadeY delay={0.75}>
            <p className="max-w-2xl mx-auto font-mono text-sm leading-loose text-white opacity-60 lg:text-center">
              A quick snippet about me.
            </p>
          </FadeY>
          <FadeY delay={1} className="flex mt-8 lg:justify-center">
            <Link
              href={
                'mailto:ryan.houk@proton.me?subject=Hey, Ryan! I like your portfolio.'
              }
              className="px-8 py-3 text-white transition-all duration-300 border-2 border-white rounded-full font-object hover:bg-white hover:text-black">
              Contact Me
            </Link>
          </FadeY>
        </div>

        <FadeY className="relative max-w-5xl mx-auto mt-8 lg:mt-24" delay={0.2}>
          <img
            className="w-48 mx-auto -mb-16 transition-all duration-200 lg:w-72"
            src="/img/objects/tape-gray.png"
            alt="piece of duct tape stuck to a letter"
          />
          <div className="p-4 py-12 m-4 bg-white rounded-sm shadow-md lg:p-16 lg:py-16">
            <h3 className="mb-8 font-mono">Hey, friends!</h3>
            <p className="mb-8 font-mono leading-loose">
              I&apos;ve been doing this for over 15 years and continuously
              learning from both success and failure. Empathy? Yep! Usability
              testing? Yep! Aligning business and customer goals? You know it!
            </p>
            <p className="mb-8 font-mono leading-loose">
              It all started with a digital training tutorial for a Pepsi
              bottling plant. I designed the UI in Photoshop (Figma didn&apos;t
              exist yet) and coded the software with Lingo using Macromedia
              Director. Didn&apos; I say I&apos;ve been doing this for a long
              time? I&apos;ve done product design for years until rediscovering
              my love for coding, now I do both.
            </p>
            <p className="mb-8 font-mono leading-loose">
              I&apos;ve worked with startups, co-founded a startup, raised angel
              investments, and worked with agencies. These experiences taught me
              that successfull products result from teams with no egos where
              creative contributions come from everyone.
            </p>
            <p className="font-mono leading-loose">~ Ryan</p>
            <Image
              src="/img/objects/sticker-gray-round.png"
              alt="sticker with the words design with care"
              width={200}
              height={200}
              className="absolute w-40 mx-auto transition-all duration-200 -right-8 -rotate-12 drop-shadow-lg hover:rotate-12 hover:cursor-cell lg:left-0 lg:right-0 lg:w-48"
            />
          </div>
        </FadeY>
      </section>
    </>
  )
}

export default About
