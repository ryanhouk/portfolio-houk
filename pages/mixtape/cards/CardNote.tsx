import React from 'react'
import Image from 'next/image'

type Props = {
  title: string
}

const CardNote = ({ title }: Props) => {
  return (
    <>
      <div className="h-[96px] w-full bg-[#1C1C1E]/[.6] p-[5px] border-[1px] border-white/[.05] rounded-[16px] relative z-0 overflow-clip flex flex-row items-center">
        <div className="px-3">
          <h3 className="text-white font-extrabold text-[13px]">{title}</h3>
        </div>
      </div>
    </>
  )
}

export default CardNote
