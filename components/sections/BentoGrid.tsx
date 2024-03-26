import React from 'react';
import { FadeY } from '../animations';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import ArrowRight from '../svg/ArrowRight';

type Props = {};

const BentoGrid = (props: Props) => {
  return (
    <>
      <section className='py-12 lg:py-32 px-8 selection:bg-orange-200'>
        <div className='mx-auto grid max-w-screen-2xl lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2 grid lg:grid-cols-3 gap-4 rounded-2xl'>
            <FadeY delay={0.25} className='col-span-1 h-96 rounded-3xl flex justify-between flex-col overflow-clip border border-white/10 group'>
              <Link href={'https://medium.com/prototypr/accessibility-in-web-design-the-responsibility-of-developers-c82ecdd9ebf2'} target='_blank'>
                <div className='p-6 bg-black z-10 relative'>
                  <h2 className='font-object text-lg text-white'>
                    Accessibility in web design & the responsibility of developers
                  </h2>
                  <div className='flex items-center'>
                    <p className='font-mono text-white/50 text-xs mt-2 group-hover:text-white'>Read More</p>
                    <ArrowRight className='w-4 group-hover:ml-2 ml-0 mt-[10px] opacity-0 group-hover:opacity-100 transition-all' strokeColor={'#fff'} strokeWidth={2} />
                  </div>
                </div>
                <Image src={'/img/blog/blog-access.webp'} alt={''} height={400} width={600} className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300' />
              </Link>
            </FadeY>

            <FadeY className='lg:col-span-2 h-96 rounded-3xl overflow-clip border border-white/10 group'>
              <Link href={'https://ryanhouk.medium.com/do-netflix-hbo-spotify-twitter-hulu-apple-and-google-agree-with-these-designers-9d8d8ae2e9a1'} target='_blank'>
                <div className='p-6 bg-black z-10 relative'>
                  <h2 className='font-object text-lg text-white'>
                    Do Netflix, HBO, Apple, Google, Hulu, Twitter and Spotify, agree with these designers?
                  </h2>
                  <div className='flex items-center'>
                    <p className='font-mono text-white/50 text-xs mt-2 group-hover:text-white'>Read More</p>
                    <ArrowRight className='w-4 group-hover:ml-2 ml-0 mt-[10px] opacity-0 group-hover:opacity-100 transition-all' strokeColor={'#fff'} strokeWidth={2} />
                  </div>
                </div>
              <Image src={'/img/blog/blog-agree.webp'} alt={''} height={400} width={600} className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-300' />
              </Link>
            </FadeY>

            <FadeY delay={0.25} className='lg:col-span-2 h-96 rounded-3xl bg-white/5 p-4 lg:p-8'>
              SHORT
            </FadeY>
            <FadeY delay={0.5} className='lg:col-span-1 h-96 rounded-3xl bg-white/5 p-4 lg:p-8'>
              LONG
            </FadeY>
          </div>

          <FadeY delay={0.75} className='lg:col-span-1 h-full rounded-3xl'>
            <div className='h-full rounded-2xl bg-white/5 backdrop-blur-3xl'>
              STUFF
            </div>
          </FadeY>
        </div>
      </section>
    </>
  );
};

export default BentoGrid;
