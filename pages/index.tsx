import React from 'react';
import Navbar from '../components/nav/Navbar';
import Hero from '../components/hero/Hero';

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className='relative overflow-clip'>
        <div className='absolute h-full w-full bg-gradient-to-br from-pink-500 via-purple-600 to-blue-600 opacity-20'></div>
        <div className='bottom-0 z-10 h-32 w-full bg-gradient-to-t from-black to-black/0 lg:h-32 fixed'></div>

        {/* NAV */}
        <Navbar />

        {/* INTRO HERO */}
        <Hero />

        {/* IMAGE DIVIDER */}
        <section>
          <div className='mx-auto grid max-w-7xl grid-cols-3 gap-4'>
            <div className='col-span-2 grid grid-cols-3 gap-4 rounded-2xl'>
              <div className='col-span-1 rounded-2xl bg-white/10 backdrop-blur-3xl p-4 lg:p-8'>
                <h2 className='text-white font-bold font-clash text-xl'>UX Design</h2>
              </div>
              <div className='col-span-2 rounded-2xl bg-white/10 backdrop-blur-3xl p-4 lg:p-8'>
                LONG
              </div>
              <div className='col-span-2 rounded-2xl bg-white/10 backdrop-blur-3xl p-4 lg:p-8'>
                SHORT
              </div>
              <div className='col-span-1 rounded-2xl bg-white/10 backdrop-blur-3xl p-4 lg:p-8'>
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
