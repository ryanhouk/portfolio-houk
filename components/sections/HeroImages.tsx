import React from 'react'
import Image from 'next/image'

type Props = {}

const HeroImages = (props: Props) => {
  return (
    <>
      <section className="relative hidden lg:flex">
        <div className="absolute bottom-0 w-full h-96 bg-gradient-to-t from-black to-black/0"></div>
        <div className="absolute left-0 h-full w-96 bg-gradient-to-r from-black to-black/0"></div>
        <div className="absolute right-0 h-full w-96 bg-gradient-to-l from-black to-black/0"></div>
        <Image
          className="w-full mx-auto max-w-screen-3xl"
          src={'/img/mockup/klove/mob/hand-mt-grid.webp'}
          alt={''}
          width={4500}
          height={3375}
        />
      </section>
    </>
  )
}

export default HeroImages
