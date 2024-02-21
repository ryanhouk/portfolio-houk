import React from 'react'
import { FadeY } from '../animations'
import IconAccess from '../svg/IconAccess'
import Image from 'next/image'

type Props = {}

const BentoGrid = (props: Props) => {
  return (
    <>
            <section className='py-12 lg:pb-32'>
          <div className='mx-auto grid max-w-screen-2xl grid-cols-3 gap-4'>
            <div className='col-span-2 grid grid-cols-3 gap-4 rounded-2xl'>
              <FadeY delay={.25} className='col-span-1 h-96 rounded-3xl bg-white/5 p-4 lg:p-8 flex justify-between flex-col'>
                <IconAccess className='w-16 text-white' />
               <div>
                 <h2 className='font-clash text-xl font-bold text-white'>
                 Heading
                </h2>
                <p className='text-white/60 text-sm font-mono'>stuff</p>
               </div>
              </FadeY>

              <FadeY className='col-span-2 h-96 rounded-3xl bg-white/5 overflow-clip'>
               <Image src='/img/photo/webmob-angle.webp' alt='hero' width={800} height={600} className='object-cover pl-8 opacity-75'/>
              </FadeY>

              <FadeY delay={.25} className='col-span-2 h-96 rounded-3xl bg-white/5 p-4 lg:p-8'>
                SHORT
              </FadeY>
              <FadeY delay={.5} className='col-span-1 h-96 rounded-3xl bg-white/5 p-4 lg:p-8'>
                LONG
              </FadeY>
            </div>

            <FadeY delay={.75} className='col-span-1 h-full rounded-3xl'>
              <div className='h-full rounded-2xl bg-white/5 backdrop-blur-3xl'>
                STUFF
              </div>
            </FadeY>
          </div>
        </section>
    </>
  )
}

export default BentoGrid