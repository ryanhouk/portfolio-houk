import React from 'react'
import Image from 'next/image'
import { StaticImageData } from 'next/image'

type Props = {
  playerImage: StaticImageData
  teamName: string
}

const PlayerCard = ({ playerImage, teamName }: Props) => {
  return (
    <>
      <div className="w-[600px] h-[800px] flex-shrink-0 bg-red-500 hover:cursor-pointer group">
        <div className="relative overflow-clip group">
          <div className="absolute inset-0 z-10 h-full bg-gradient-to-t from-black to-transparent"></div>
          <Image
            src={playerImage}
            alt={'Player hero image'}
            className="object-contain h-[600px] object-bottom mt-auto w-full mx-auto transition-transform duration-300 group-hover:scale-110"
            priority
          />
        </div>
        <h2 className="mb-1 text-4xl font-black text-center text-white">
          {teamName}
        </h2>
        {/* <p className="font-mono text-center text-white/50">Ryan Houk</p> */}
      </div>
    </>
  )
}

export default PlayerCard
