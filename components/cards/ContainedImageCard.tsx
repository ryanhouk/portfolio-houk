import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  imageUrl: string
  altText: string
  title: string
  credit: string
  url: string
}

const ContainedImageCard = ({
  imageUrl,
  altText,
  title,
  credit,
  url,
}: Props) => {
  return (
    <>
      <Link href={url} className="transition-all group">
        <div className="w-64 p-[1px] rounded-[21px] bg-gradient-to-b from-zinc-800 to-zinc-950 transition-all duration-300">
          <div className="transition-all bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-[20px] flex items-center group-hover:to-zinc-900">
            <Image
              alt={altText}
              src={imageUrl}
              height={1000}
              width={1000}
              className="w-20 p-1"
            />
            <div className="mx-2">
              <h3 className="text-sm text-white font-object">{title}</h3>
              <p className="font-mono text-xs text-white/50">{credit}</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default ContainedImageCard
