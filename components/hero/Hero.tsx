import React from 'react';
import { FadeY } from '../animations';
import BackgroundGlow from '../animations/BackgroundGlow';

type Props = {};

const Hero = (Props: Props) => {
  return (
    <>
      <section className='relative overflow-clip py-48 lg:py-72'>
        {/* <div className="absolute top-0 h-full w-full bg-[url('/img/texture/bg-noise.png')] bg-repeat opacity-40"></div> */}
        <BackgroundGlow />
        <div className='absolute top-0 z-10 h-32 w-full bg-gradient-to-b from-black to-black/0 lg:h-96'></div>
        <div className='absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t from-black to-black/0 lg:h-96'></div>
        {/* <FadeY className='relative z-20 mb-6 flex justify-center gap-2'>
          <div className='rounded-[4px] bg-white px-3 py-1 font-mono text-xs font-bold text-black transition-all duration-200 hover:cursor-cell hover:bg-red-500 hover:text-white'>
            UX Design
          </div>
          <div className='rounded-[4px] bg-white px-3 py-1 font-mono text-xs font-bold text-black'>
            Accessibility
          </div>
          <div className='rounded-[4px] bg-white px-3 py-1 font-mono text-xs font-bold text-black'>
            Development
          </div>
        </FadeY> */}
        <FadeY className='relative z-20 mb-6 flex justify-center gap-2'>
          <div className='rounded-[4px] bg-gradient-to-tr from-brand-primary to-brand-tertiary bg-clip-text px-3 py-1 font-mono text-sm font-bold text-transparent text-black transition-all duration-200 hover:cursor-cell'>
            UX Design
          </div>
          <div className='rounded-[4px] bg-white px-3 py-1 font-mono text-xs font-bold text-black'>
            Accessibility
          </div>
          <div className='rounded-[4px] bg-white px-3 py-1 font-mono text-xs font-bold text-black'>
            Development
          </div>
        </FadeY>
        <FadeY
          delay={0.25}
          className='relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-8'
        >
          <h1 className='text-center font-clash text-4xl text-white lg:text-9xl'>
            UX Designer & Developer
          </h1>
        </FadeY>
      </section>
    </>
  );
};

export default Hero;
