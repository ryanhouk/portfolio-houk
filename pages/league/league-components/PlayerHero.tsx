import React from 'react'
import Image from 'next/image'

import PlayerHeroImage from '../league-images/paolo.webp'

type Props = {}

const PlayerHero = (props: Props) => {
  return (
    <>
      <section className="relative w-full h-full py-24">
        <div className="absolute bottom-0 left-0 right-0 z-20 w-full h-full my-24 bg-gradient-to-t from-black to-black/0"></div>
        <Image
          src={PlayerHeroImage}
          alt={''}
          className="relative z-10 object-cover w-full h-full"
        />
      </section>
    </>
  )
}

export default PlayerHero
