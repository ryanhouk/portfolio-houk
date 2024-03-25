import React from 'react';
import { FadeY } from '../animations';

type Props = {
    title: string;
    backgroundImage: string;
}

const PageHeader = ({ title, backgroundImage }: Props) => {
  return (
    <>
      <section 
        className="relative overflow-clip h-[75vh] flex flex-col justify-end bg-no-repeat bg-cover" 
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className='h-full w-full absolute bg-gradient-to-b from-black/80 to-black/0 top-0'></div>
        <div className='h-full w-full absolute bg-gradient-to-t from-black to-black/0 top-0'></div>
      </section>

      <FadeY once className='relative z-20 max-w-7xl mx-auto px-8 xl:px-0'>
        <h1 className='text-3xl lg:text-8xl text-white font-clash text-center'>{title}</h1>
      </FadeY>
    </>
  )
}

export default PageHeader;
