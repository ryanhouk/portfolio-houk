import React, { useState } from 'react'
import Image from 'next/image'

type Props = {
  img: string
  alt: string
  appSource: string
}

const CardImage = ({ img, alt, appSource }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <>
      <div
        id="CardLink"
        className={`h-[192px hover:cursor-pointer w-full bg-[#1C1C1E]/[.6] border-[1px] border-white/5 rounded-[16px] relative z-0 overflow-clip flex flex-col items-start group ${isExpanded ? 'h-[288px]' : 'h-[192px]'} transition-all ease-in-out duration-300`}
        onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-center w-full p-[5px]">
          <Image
            className="object-cover rounded-xl opacity-90"
            src={img}
            height={182}
            width={351}
            alt={alt}
          />
        </div>
        <div className="flex w-full gap-2 p-2 transition-all border-y border-white/5">
          <div className="h-[34px] bg-white/5 text-white text-xs font-medium text-center flex justify-center items-center rounded-full w-full border border-white/5">
            {appSource}
          </div>
          <div className="h-[34px] bg-white/5 text-white text-xs font-medium text-center flex justify-center items-center rounded-full w-full border border-white/5">
            Add To
          </div>
        </div>
        <div className="flex items-center justify-start w-full h-12 px-3 text-sm text-center text-white/40">
          <p>Comment...</p>
        </div>
      </div>
    </>
  )
}

export default CardImage
