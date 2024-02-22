import React from 'react';
import { FadeY } from '../animations';
import ArrowDown from '../svg/ArrowDown';

type Props = {};

const Hero = (Props: Props) => {
  return (
    <>
      <section className='relative overflow-clip pt-32 pb-20 lg:pb-48 lg:pt-72'>

        {/* <div className="absolute top-0 h-full w-full bg-[url('/img/texture/bg-noise.png')] bg-repeat opacity-40"></div> */}
        <div className='absolute top-0 z-10 h-32 w-full bg-gradient-to-b from-black to-black/0 lg:h-96'></div>
        <div className='absolute bottom-0 z-10 h-32 w-full bg-gradient-to-t from-black to-black/0 lg:h-96'></div>


        <FadeY className='relative z-20 mx-auto mb-4 lg:mb-6 flex max-w-5xl lg:justify-center gap-4 px-8'>
          <div className='bg-gradient-to-tr from-red-600 to-yellow-400 bg-clip-text font-mono text-transparent transition-all duration-200 hover:cursor-cell'>
            @ryanhouk
          </div>
        </FadeY>

        <div
          className='relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-8'
        >
          <h1 className='font-clash text-4xl text-white lg:text-9xl lg:text-center mb-4 lg:mb-8'><FadeY delay={.25}>UX Designer &</FadeY> <FadeY delay={.5}>Developer</FadeY></h1>
         
        </div>
         <FadeY className='relative z-20 px-8' delay={.75}>
          <p className='lg:text-center text-white font-mono opacity-60 max-w-2xl mx-auto text-sm leading-loose'>
            This is a portfolio site. It might look a little messy, but design, development, usability testing, and iterating is often a little messy. 
          </p>
         </FadeY>
         <FadeY delay={1}>
            <ArrowDown className={'mx-auto w-6 animate-bounce mt-10'} strokeColor={'#fff'} />
         </FadeY>
      </section>
    </>
  );
};

export default Hero;
