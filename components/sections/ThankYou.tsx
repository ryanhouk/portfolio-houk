import React from 'react';
import { FadeY } from '../animations';
import DoodleSparkle from '../svg/DoodleSparkle';
import Link from 'next/link';

type Props = {};

const ThankYou = (props: Props) => {
  return (
    <>
      <section className='relative scroll-mt-16 py-12 lg:py-32'>
        <div className='relative z-20 mx-auto flex max-w-5xl flex-col justify-center px-8'>
          <FadeY delay={0.25}>
            <DoodleSparkle
              startColor={'#dc2626'}
              endColor={'#facc15'}
              className='mb-2 w-20 lg:mx-auto lg:mb-2 lg:w-32'
            />
          </FadeY>
          <h1 className='mb-4 font-clash text-4xl text-white lg:mb-8 lg:text-center lg:text-9xl'>
            <FadeY delay={0.5}>Thank You!</FadeY>
          </h1>
          <FadeY delay={0.75}>
            <p className='mx-auto max-w-2xl font-mono text-sm leading-loose text-white opacity-60 lg:text-center'>
              Appreciate you taking the time to check out my portfolio.
            </p>
          </FadeY>
        </div>
        <FadeY delay={1} className='mt-8 flex px-8 lg:justify-center'>
          <Link
            href={
              'mailto:ryan.houk@proton.me?subject=Hi, Ryan! A message via ryanhouk.com.'
            }
            target='_blank'
            className='rounded-full border-2 border-white px-8 py-3 font-object text-white transition-all duration-300 hover:bg-white hover:text-black'
          >
            Contact Me
          </Link>
        </FadeY>
      </section>
    </>
  );
};

export default ThankYou;
