import React from 'react'
import Figma from '../svg/logos/Figma'
import Tailwind from '../svg/logos/Tailwind'

type Props = {}

const Tools = (props: Props) => {
  return (
    <>
      <section className="px-8 mx-auto max-w-screen-2xl">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          <div className="relative flex items-center justify-center w-full h-48 transition-all rounded-3xl bg-white/5 hover:bg-white/0 group hover:cursor-cell">
            <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
              Figma
            </p>
            <Figma className="transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
          </div>
          <div className="relative flex items-center justify-center w-full h-48 transition-all rounded-3xl bg-white/5 hover:bg-white/0 group hover:cursor-cell">
            <p className="absolute z-10 text-white transition-all duration-200 scale-75 opacity-0 group-hover:opacity-100 font-object group-hover:scale-125">
              Tailwind
            </p>
            <Tailwind className="w-24 transition-all duration-300 group-hover:scale-90 group-hover:opacity-0" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Tools
