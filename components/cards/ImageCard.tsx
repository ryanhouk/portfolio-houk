import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  imageUrl: string
  altText: string
  title: string
  credit: string
  url: string
  btnTitle: string
  rounded?: string
}

const ImageCard = ({
  imageUrl,
  altText,
  title,
  credit,
  url,
  btnTitle,
  rounded,
}: Props) => {
  return (
    <>
      <div className={`group overflow-clip ${rounded}`}>
        <Link
          href={url}
          target="_blank"
          className="relative transition-all overflow-clip">
          {/* BTN */}
          <div className="relative">
            <div className="absolute inset-0 z-20 flex items-center justify-center">
              <div className="py-3 mt-6 font-mono text-sm text-white transition-all duration-300 border rounded-full opacity-0 px-7 group-hover:opacity-100 bg-black/10 backdrop-blur-2xl border-white/10 group-hover:mt-0">
                {btnTitle}
              </div>
            </div>
            <div className="absolute z-10 w-full h-full transition-all bg-black opacity-0 group-hover:opacity-40"></div>
            <Image
              alt={altText}
              src={imageUrl}
              height={1000}
              width={1000}
              className={`object-contain transition-all duration-300 ${rounded}`}
            />
          </div>
          <div className="relative z-20 mt-2 text-center transition-all duration-300 lg:mt-3">
            <h3 className="text-white font-object lg:mx-6">{title}</h3>
            <p className="font-mono text-xs text-white/50">{credit}</p>
          </div>
        </Link>
      </div>
    </>
  )
}

export default ImageCard
