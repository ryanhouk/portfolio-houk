import React from 'react';
import Navbar from '../components/nav/Navbar';
import Hero from '../components/hero/Hero';
import Image from 'next/image';
import { FadeY } from '../components/animations';

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className='relative overflow-clip'>
        <div className='fixed bottom-0 z-10 h-32 w-full bg-gradient-to-t from-black to-black/0 lg:h-32'></div>

        {/* NAV */}
        <Navbar />

        {/* INTRO HERO */}
        <Hero />

        {/* IMGS */}
        <section className='relative px-8'>
          <div className='absolute bottom-0 z-10 h-96 w-full bg-gradient-to-t from-black via-black to-black/0'></div>
          <Image
            src='/img/photo/package.webp'
            alt='hero'
            width={1920}
            height={1080}
            className='mx-auto max-w-2xl opacity-50 hover:scale-90 transition-all hover:cursor-cell duration-300'
          />
        </section>

        {/* BENTO GRID */}
        <section className='py-12 lg:pb-32'>
          <h2 className='font-clash text-4xl text-white lg:text-8xl text-center mb-8'>
            Heading
          </h2>
          <div className='mx-auto grid max-w-screen-2xl grid-cols-3 gap-4'>
            <div className='col-span-2 grid grid-cols-3 gap-4 rounded-2xl'>
              <FadeY delay={.25} className='col-span-1 h-80 rounded-3xl bg-white/5 p-4 backdrop-blur-3xl lg:p-8'>
                <h2 className='font-clash text-xl font-bold text-white'>
                  UX Design
                </h2>
              </FadeY>
              <div className='col-span-2 h-80 rounded-3xl bg-white/5 p-4 backdrop-blur-3xl lg:p-8'>
                LONG
              </div>
              <div className='col-span-2 h-80 rounded-3xl bg-white/5 p-4 backdrop-blur-3xl lg:p-8'>
                SHORT
              </div>
              <div className='col-span-1 h-80 rounded-3xl bg-white/5 p-4 backdrop-blur-3xl lg:p-8'>
                LONG
              </div>
            </div>

            <div className='col-span-1 h-full rounded-3xl'>
              <div className='h-full rounded-2xl bg-white/5 backdrop-blur-3xl'>
                STUFF
              </div>
            </div>
          </div>
        </section>

        {/* END DIV */}
      </div>
    </>
  );
};

export default index;
