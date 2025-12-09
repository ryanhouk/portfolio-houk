import React from 'react'
import Figma from '../svg/logos/Figma'
import Tailwind from '../svg/logos/Tailwind'
import LogoWrapper from '../cards/LogoWrapper'
import Nextjs from '../svg/logos/Nextjs'
import Photoshop from '../svg/logos/Photoshop'
import Craft from '../svg/logos/Craft'
import Cursor from '../img/logos/cursor.png'
import Gemini from '../img/logos/google-gemini.webp'
import Image from 'next/image'
import Apple from '../svg/logos/Apple'

const Tools = () => {
  return (
    <>
      <section className="py-8 w-full bg-gradient-to-t from-black border-t lg:py-24 via-white/5 to-white/5 border-zinc-900">
        <div className="px-8 mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4">
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Figma
              </p>
              <Figma className="transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Gemini
              </p>
              <Image
                src={Gemini}
                alt="Gemini logo"
                className="w-20 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0"
              />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Tailwind
              </p>
              <Tailwind className="w-20 transition-all duration-300 lg:w-28 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Next.js
              </p>
              <Nextjs className="w-20 transition-all duration-300 lg:w-24 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Photoshop
              </p>
              <Photoshop className="w-24 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Cursor
              </p>
              <Image
                src={Cursor}
                alt="Cursor logo"
                className="w-20 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0"
              />
            </LogoWrapper>
            {/* <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Arc Browser
              </p>
              <Arc className="w-20 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper> */}
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Apple
              </p>
              <Apple className="mb-2 w-16 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white opacity-0 transition-all duration-200 scale-75 group-hover:opacity-100 font-object group-hover:scale-125">
                Craft Docs
              </p>
              <Craft className="mb-2 w-16 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tools
