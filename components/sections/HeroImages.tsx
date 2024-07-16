import React from 'react'
import Image from 'next/image'

type Props = {}

const HeroImages = (props: Props) => {
  return (
    <section className="relative flex justify-center">
      {/* FADES */}
      <div className="absolute bottom-0 z-10 w-full h-32 lg:h-96 bg-gradient-to-t from-black to-black/0"></div>
      <div className="absolute left-0 z-10 h-full lg:w-96 bg-gradient-to-r from-black to-black/0"></div>
      <div className="absolute right-0 z-10 h-full lg:w-96 bg-gradient-to-l from-black to-black/0"></div>
      {/* FADES END */}
      <Image
        className="mx-auto lg:w-full max-w-screen-3xl w-[700px]"
        src={'/img/mockup/klove/mob/hand-player.webp'}
        alt={''}
        width={3060}
        height={2942}
      />
    </section>
  )
}

export default HeroImages
