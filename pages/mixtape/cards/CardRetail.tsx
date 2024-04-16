import React from 'react'
import Image from 'next/image'

type Props = {
  img: string
  title: string
  website: string
  subtext: string
  alt: string
}

const CardRetail = ({ img, title, website, subtext, alt }: Props) => {
  return (
    <>
      <div className="h-[96px] w-full bg-[#1C1C1E]/[.6] p-[5px] border-[1px] border-white/[.05] rounded-[16px] relative z-0 overflow-clip flex flex-row items-center">
        <Image
          className="object-cover rounded-xl opacity-90 aspect-square"
          src={img}
          height={86}
          width={86}
          alt={alt}
        />
        <div className="mx-3">
          <h3 className="text-white font-extrabold text-[13px] line-clamp-2">
            {title}
          </h3>
          <p className="text-white/60 text-[13px] line-clamp-1">{subtext}</p>
          <div className="flex items-center mt-2">
            <div className="w-4 h-4 rounded-full bg-white/20 mr-[6px]"></div>
            <p className="text-white/60 text-[11px]">{website}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardRetail
