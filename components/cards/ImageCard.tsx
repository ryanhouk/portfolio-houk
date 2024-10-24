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

const ImageCard = ({ imageUrl, altText, title, credit, url }: Props) => {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="relative transition-all group opacity-90 hover:opacity-100">
        <Image
          alt={altText}
          src={imageUrl}
          height={1000}
          width={1000}
          className="transition-all duration-300 rounded-lg"
        />
        <Image
          alt={altText}
          src={imageUrl}
          height={1000}
          width={1000}
          className="absolute inset-0 p-5 mt-6 transition-all duration-300 rounded-lg group-hover:mt-8 -z-10 blur-2xl opacity-60 group-hover:blur-3xl"
        />
        <div className="mt-2 text-center transition-all duration-300 lg:mt-5">
          <h3 className="text-lg text-white font-object lg:mx-8 lg:text-2xl">
            {title}
          </h3>
          <p className="font-mono text-xs text-white/50">{credit}</p>
        </div>
      </Link>
    </>
  )
}

export default ImageCard
