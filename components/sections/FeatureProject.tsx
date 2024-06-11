import React from 'react'
import Image from 'next/image'

type Props = {}

const FeatureProject = (props: Props) => {
  return (
    <>
      {/* INTRO */}

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
