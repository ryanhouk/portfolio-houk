import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

type Props = {
  urlSrc: string
  imgSrc: string
  title: string
  description: string
  altText: string
  category: string
}

const FeatureCard = ({
  urlSrc,
  imgSrc,
  title,
  description,
  altText,
  category,
}: Props) => {
  return (
    <>
      <Link
        href={urlSrc}
        className="group overflow-clip rounded-3xl border border-white/[.15] transition-all duration-300 relative">
        <div
          className={`relative overflow-hidden transition-all duration-500 bg-gradient-to-b from-white/10 to-black group-hover:bg-white/30`}>
          <div className="absolute bottom-0 z-10 w-full transition-all h-60 bg-gradient-to-t from-black to-black/0 group-hover:h-16"></div>
          <Image
            src={imgSrc}
            alt={altText}
            height={1440}
            width={1920}
            className="transition-all duration-300 group-hover:scale-110"
          />
        </div>
        <div className="w-full h-full p-6 transition-all duration-500 lg:p-8">
          <div className="mb-2 font-mono text-xs text-transparent bg-white/10 bg-gradient-to-br from-red-500 to-yellow-400 bg-clip-text">
            {category}
          </div>
          <h3 className="mb-2 text-white font-object lg:text-2xl">{title}</h3>
          <p className="font-mono text-sm leading-relaxed transition-all text-white/50 group-hover:text-white">
            {description}
          </p>
        </div>
      </Link>
    </>
  )
}

export default FeatureCard
