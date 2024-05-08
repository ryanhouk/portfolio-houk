import Link from 'next/link'
import React from 'react'

type Props = {
  title: string
  clasName?: string
  url: string
}

const BlockButton = ({ title, clasName, url }: Props) => {
  return (
    <>
      <Link
        className={`text-[17px] flex justify-center rounded-[10px] items-center hover:brightness-90 transition-all font-medium bg-[#0A84FF] h-[50px] text-white w-full ${clasName}`}
        href={url}>
        {title}
      </Link>
    </>
  )
}

export default BlockButton
