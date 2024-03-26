import React from 'react';
import Image from 'next/image';

type Props = {};

const Package = (props: Props) => {
  return (
    <>
      <section className='relative selection:bg-orange-200'>
        <div className='absolute bottom-0 z-20 h-48 lg:h-96 w-full bg-gradient-to-t from-black via-black to-black/0'></div>

        <p className='text-center font-mono text-white translate-y-8 z-[2] relative hover:translate-y-2 transition-all'>Good stuff in one package!</p>
        <div className='mx-auto lg:w-96 lg:h-56 bg-gradient-to-br from-pink-400 to-yellow-300 rounded-full blur-3xl absolute left-0 right-0 z-0 top-24'></div>

        <Image
          src='/img/objects/package.webp'
          alt='hero'
          width={1920}
          height={1080}
          className='mx-auto lg:max-w-3xl hover:scale-90 transition-all hover:cursor-cell duration-300 px-8 z-10 relative'
        />
      </section>
    </>
  );
};

export default Package;