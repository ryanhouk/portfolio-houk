import React from 'react'
import Image from 'next/image'

type Props = {}

const Package = (props: Props) => {
  return (
    <>
        <section className='relative group'>
          <div className='absolute bottom-0 z-10 h-48 lg:h-96 w-full bg-gradient-to-t from-black via-black to-black/0'></div>
          <Image
            src='/img/objects/package.webp'
            alt='hero'
            width={1920}
            height={1080}
            className='mx-auto lg:max-w-3xl opacity-50 hover:scale-90 transition-all hover:cursor-cell duration-300 px-8'
          />
        </section>
    </>
  )
}

export default Package