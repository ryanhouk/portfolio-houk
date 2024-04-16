import React from 'react'
import Link from 'next/link'

type Props = {
  img: string
  title: string
  url: string
}

const CardMixtape = ({ img, title, url }: Props) => {
  return (
    <>
      <div className="h-[180px] w-full bg-[#1C1C1E]/[.6] p-[5px] border-[1px] border-white/[.08] rounded-2xl relative z-0 overflow-clip group">
        <Link href={url} className="absolute inset-0 z-30"></Link>
        {/* Use url here */}
        <h2 className="absolute bottom-0 left-0 right-0 z-20 px-4 py-2 text-xl font-extrabold leading-tight text-white drop-shadow-sm">
          {title}
        </h2>
        <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black/60 via-black/30 to-black/0 h-1/3"></div>
        <div
          className="opacity-80 bg-cover bg-center h-[170px] rounded-xl z-[8] relative transition-all ease-in-out"
          style={{ backgroundImage: `url(${img})` }}></div>
      </div>
    </>
  )
}

export default CardMixtape
