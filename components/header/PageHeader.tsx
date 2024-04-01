import React from 'react'
import { FadeY } from '../animations'

type Props = {
  title: string
  backgroundImage: string
}

const PageHeader = ({ title, backgroundImage }: Props) => {
  return (
    <>
      <section
        className="relative flex h-[75vh] flex-col justify-end overflow-clip bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-black/80 to-black/0"></div>
        <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black to-black/0"></div>
      </section>

      <FadeY once className="relative z-20 px-8 mx-auto max-w-7xl xl:px-0">
        <h1 className="text-3xl text-center text-white font-clash lg:text-8xl">
          {title}
        </h1>
      </FadeY>
    </>
  )
}

export default PageHeader
