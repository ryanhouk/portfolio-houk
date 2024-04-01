import React from 'react'
import { FadeY } from '../animations'
import Image from 'next/image'
import Link from 'next/dist/client/link'
import ArrowRight from '../svg/ArrowRight'

type Props = {}

const BentoGrid = (props: Props) => {
  return (
    <>
      <section className="px-8 py-12 selection:bg-orange-200 lg:py-32">
        <div className="grid gap-4 mx-auto max-w-screen-2xl lg:grid-cols-3">
          <div className="grid gap-4 rounded-2xl lg:col-span-2 lg:grid-cols-3">
            <FadeY
              delay={0.25}
              className="flex flex-col justify-between col-span-1 border group h-96 overflow-clip rounded-3xl border-white/10">
              <Link
                href={
                  'https://medium.com/prototypr/accessibility-in-web-design-the-responsibility-of-developers-c82ecdd9ebf2'
                }
                target="_blank">
                <div className="relative z-10 p-6 bg-black">
                  <h2 className="text-lg text-white font-object">
                    Accessibility in web design & the responsibility of
                    developers
                  </h2>
                  <div className="flex items-center">
                    <p className="mt-2 font-mono text-xs text-white/50 group-hover:text-white">
                      Read More
                    </p>
                    <ArrowRight
                      className="ml-0 mt-[10px] w-4 opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100"
                      strokeColor={'#fff'}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <Image
                  src={'/img/blog/blog-access.webp'}
                  alt={''}
                  height={400}
                  width={600}
                  className="object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-110"
                />
              </Link>
            </FadeY>

            <FadeY className="border group h-96 overflow-clip rounded-3xl border-white/10 lg:col-span-2">
              <Link
                href={
                  'https://ryanhouk.medium.com/do-netflix-hbo-spotify-twitter-hulu-apple-and-google-agree-with-these-designers-9d8d8ae2e9a1'
                }
                target="_blank">
                <div className="relative z-10 p-6 bg-black">
                  <h2 className="text-lg text-white font-object">
                    Do Netflix, HBO, Apple, Google, Hulu, Twitter and Spotify,
                    agree with these designers?
                  </h2>
                  <div className="flex items-center">
                    <p className="mt-2 font-mono text-xs text-white/50 group-hover:text-white">
                      Read More
                    </p>
                    <ArrowRight
                      className="ml-0 mt-[10px] w-4 opacity-0 transition-all group-hover:ml-2 group-hover:opacity-100"
                      strokeColor={'#fff'}
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <Image
                  src={'/img/blog/blog-agree.webp'}
                  alt={''}
                  height={400}
                  width={600}
                  className="object-cover object-center w-full h-full transition-all duration-300 group-hover:scale-110"
                />
              </Link>
            </FadeY>

            <FadeY
              delay={0.25}
              className="p-4 h-96 rounded-3xl bg-white/5 lg:col-span-2 lg:p-8">
              SHORT
            </FadeY>
            <FadeY
              delay={0.5}
              className="p-4 h-96 rounded-3xl bg-white/5 lg:col-span-1 lg:p-8">
              LONG
            </FadeY>
          </div>

          <FadeY delay={0.75} className="h-full rounded-3xl lg:col-span-1">
            <div className="h-full rounded-2xl bg-white/5 backdrop-blur-3xl">
              STUFF
            </div>
          </FadeY>
        </div>
      </section>
    </>
  )
}

export default BentoGrid
