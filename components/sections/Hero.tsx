import React from 'react';
import { FadeY } from '../animations';
import ArrowDown from '../svg/ArrowDown';

type Props = {};

const Hero = (Props: Props) => {
  return (
    <>
      <section className='relative overflow-clip pb-20 pt-32 selection:bg-orange-200 lg:pb-48 lg:pt-72'>
        {/* <div className="absolute top-0 h-full w-full bg-[url('/img/texture/bg-noise.png')] bg-repeat opacity-40"></div> */}
        <div className='absolute top-0 z-10 h-32 w-full bg-gradient-to-b from-black to-black/0 lg:h-96'></div>
        {/* <div className='absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t from-black to-black/0 lg:h-96'></div> */}

        <FadeY className='relative z-20 mx-auto mb-4 flex max-w-5xl gap-4 px-8 lg:mb-6 lg:justify-center'>
          <div className='bg-gradient-to-tr from-red-600 to-yellow-400 bg-clip-text font-mono text-transparent transition-all duration-200 hover:cursor-cell'>
            Ryan Houk
          </div>
        </FadeY>

        <div className='relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-8'>
          <h1 className='mb-4 font-clash text-4xl text-white lg:mb-8 lg:text-center lg:text-9xl'>
            <FadeY delay={0.25}>UX Designer &</FadeY>{' '}
            <FadeY delay={0.5}>Developer</FadeY>
          </h1>
        </div>
        <FadeY className='relative z-20 px-8' delay={0.75}>
          <p className='mx-auto max-w-2xl font-mono text-sm leading-loose text-white opacity-60 lg:text-center'>
            This is a portfolio site. It might look a little messy, but design,
            development, usability testing, and iterating is often a little
            messy.
          </p>
        </FadeY>
        <FadeY delay={1}>
          <ArrowDown
            className={'mx-auto mt-10 w-6 animate-bounce'}
            strokeColor={'#fff'}
          />
        </FadeY>
      </section>
    </>
  );
};

export default Hero;
