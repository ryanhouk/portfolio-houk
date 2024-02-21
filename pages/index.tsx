import React from 'react';
import Navbar from '../components/nav/Navbar';
import Hero from '../components/hero/Hero';

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className='relative overflow-clip'>
        {/* <div className='absolute h-full w-full bg-gradient-to-br from-orange-400 via-red-600 to-cyan-400 opacity-5'></div> */}
        {/* NAV */}
        <Navbar />

        {/* INTRO HERO */}
        <Hero />

        {/* IMAGE DIVIDER */}
        <section>IMAGE DIVIDER</section>
      </div>
    </>
  );
};

export default index;
