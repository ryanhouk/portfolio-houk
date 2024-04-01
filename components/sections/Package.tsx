import React from 'react'
import Image from 'next/image'

type Props = {}

const Package = (props: Props) => {
  return (
    <>
      <section className="relative selection:bg-orange-200">
        <div className="absolute bottom-0 z-20 w-full h-48 bg-gradient-to-t from-black via-black to-black/0 lg:h-96"></div>

        <p className="relative z-[2] translate-y-8 text-center font-mono text-white transition-all hover:translate-y-2">
          Good stuff in one package!
        </p>
        <div className="absolute left-0 right-0 z-0 mx-auto rounded-full top-24 bg-gradient-to-br from-pink-400 to-yellow-300 blur-3xl lg:h-56 lg:w-96"></div>

        <Image
          src="/img/objects/package.webp"
          alt="hero"
          width={1920}
          height={1080}
          className="relative z-10 px-8 mx-auto transition-all duration-300 hover:scale-90 hover:cursor-cell lg:max-w-3xl"
        />
      </section>
    </>
  )
}

export default Package
