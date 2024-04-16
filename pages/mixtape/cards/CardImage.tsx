import React from 'react'
import Image from 'next/image'

type Props = {
  img: string

  alt: string
}

const CardImage = ({ img, alt }: Props) => {
  return (
    <>
      <div className="h-[192px] w-full bg-[#1C1C1E]/[.6] p-[5px] border-[1px] border-white/[.05] rounded-2xl relative z-0 overflow-clip flex flex-row items-center">
        <Image
          className="object-cover rounded-xl opacity-90"
          src={img}
          height={182}
          width={351}
          alt={alt}
        />
      </div>
    </>
  )
}

export default CardImage
