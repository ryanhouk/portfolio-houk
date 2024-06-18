import React from 'react'
import Figma from '../svg/logos/Figma'
import Tailwind from '../svg/logos/Tailwind'
import LogoWrapper from '../cards/LogoWrapper'
import Nextjs from '../svg/logos/Nextjs'
import ReactLogo from '../svg/logos/ReactLogo'
import Photoshop from '../svg/logos/Photoshop'
import Vscode from '../svg/logos/Vscode'
import Chatgpt from '../svg/logos/Chatgpt'
import Arc from '../svg/logos/Arc'
import Apple from '../svg/logos/Apple'
import Craft from '../svg/logos/Craft'

type Props = {}

const Tools = (props: Props) => {
  return (
    <>
      <section className="w-full py-8 border-t lg:py-32 bg-gradient-to-t from-black via-white/5 to-white/5 border-zinc-900">
        <div className="px-8 mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-2 gap-4 lg:gap-6 lg:grid-cols-4">
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                Figma
              </p>
              <Figma className="transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                VS Code
              </p>
              <Vscode className="w-20 transition-all duration-300 lg:w-28 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                Tailwind
              </p>
              <Tailwind className="w-20 transition-all duration-300 lg:w-28 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            {/* <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                React
              </p>
              <ReactLogo className="w-20 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper> */}
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                Next.js
              </p>
              <Nextjs className="w-20 transition-all duration-300 lg:w-24 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                Photoshop
              </p>
              <Photoshop className="w-24 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                ChatGPT
              </p>
              <Chatgpt className="w-20 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                Arc Browser
              </p>
              <Arc className="w-20 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
            {/* <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                Apple
              </p>
              <Apple className="w-16 mb-2 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper> */}
            <LogoWrapper>
              <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
                Craft Docs
              </p>
              <Craft className="w-16 mb-2 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
            </LogoWrapper>
          </div>
        </div>
      </section>
    </>
  )
}

export default Tools
