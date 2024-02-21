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
        <section>
          <div className='mx-auto grid max-w-7xl grid-cols-3 gap-4'>
            <div className='col-span-2 grid grid-cols-3 gap-4 rounded-2xl'>
              <div className='col-span-1 rounded-2xl bg-white/10 backdrop-blur-3xl'>
                SHORT
              </div>
              <div className='col-span-2 rounded-2xl bg-white/10 backdrop-blur-3xl'>
                LONG
              </div>
              <div className='col-span-2 rounded-2xl bg-white/10 backdrop-blur-3xl'>
                SHORT
              </div>
              <div className='col-span-1 rounded-2xl bg-white/10 backdrop-blur-3xl'>
                LONG
              </div>
            </div>

            <div className='col-span-1 h-full rounded-2xl'>
              <div className='h-full rounded-2xl bg-white/10 backdrop-blur-3xl'>
                STUFF
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default index;
