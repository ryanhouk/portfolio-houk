import Link from 'next/link'
import React from 'react'
import IconArrowRight from '../svg/IconArrowRight'
// import Image from 'next/image'

type Props = {}

const FourGrid = (props: Props) => {
  return (
    <>
    <section className='max-w-7xl mx-auto px-8 lg:py-32 py-12'>
        <div className='grid lg:grid-cols-2 gap-4'>
            <Link href={`/`} className='group'>
            <div className='rounded-3xl h-[500px] bg-white/5 flex flex-col justify-between overflow-clip'>
                <div>ITEM</div>
                <div className='p-4 lg:p-8 group-hover:-translate-y-4 transition-all duration-300'>
                    <div className='flex items-center'>
                        <h3 className='text-white font-object text-2xl mb-2'>Content Focus</h3><IconArrowRight className='w-6 group-hover:ml-4 ml-0 transition-all duration-200 opacity-0 group-hover:opacity-100 text-white mb-2' />
                    </div>
                    <p className='text-white/60 font-mono leading-relaxed group-hover:text-white transition-all duration-200 text-sm'>Add text</p>
                </div>
            </div>
            </Link>

            <Link href={`/`} className='group'>
            <div className='rounded-3xl h-[500px] bg-white/5 flex flex-col justify-between overflow-clip'>
                <div>ITEM</div>
                <div className='p-4 lg:p-8 group-hover:-translate-y-4 transition-all duration-300'>
                    <div className='flex items-center'>
                        <h3 className='text-white font-object text-2xl mb-2'>Streaming Platforms</h3><IconArrowRight className='w-6 group-hover:ml-4 ml-0 transition-all duration-200 opacity-0 group-hover:opacity-100 text-white mb-2' />
                    </div>
                <p className='text-white/60 font-mono leading-relaxed group-hover:text-white transition-all duration-200 text-sm w-3/4'>Designed, developer and increased listening sessions across platforms.</p>
                </div>
            </div>
            </Link>
            <Link href={`/`} className='group'>
            <div className='rounded-3xl h-[500px] bg-white/5 flex flex-col justify-between overflow-clip'>
                <div>ITEM</div>
                <div className='p-4 lg:p-8 group-hover:-translate-y-4 transition-all duration-300'>
                    <div className='flex items-center'>
                        <h3 className='text-white font-object text-2xl mb-2'>Co-founder</h3><IconArrowRight className='w-6 group-hover:ml-4 ml-0 transition-all duration-200 opacity-0 group-hover:opacity-100 text-white mb-2' />
                    </div>
                    <p className='text-white/60 font-mono leading-relaxed group-hover:text-white transition-all duration-200 text-sm'>Co-founded a startup and raised funding for an all-in-one listing app. Created entry points for users to add and consume content across platforms.</p>
                </div>
            </div>
            </Link>
            <Link href={`/`} className='group'>
            <div className='rounded-3xl h-[500px] bg-white/5 flex flex-col justify-between overflow-clip'>
                <div>ITEM</div>
                <div className='p-4 lg:p-8 group-hover:-translate-y-4 transition-all duration-300'>
                    <div className='flex items-center'>
                        <h3 className='text-white font-object text-2xl mb-2'>Accessibility</h3><IconArrowRight className='w-6 group-hover:ml-4 ml-0 transition-all duration-200 opacity-0 group-hover:opacity-100 text-white mb-2' />
                    </div>
                    <p className='text-white/60 font-mono leading-relaxed group-hover:text-white transition-all duration-200 text-sm'>Using Siteimprove&apos;s accessibility tools, I resolved issues and maintained a high accessibility score for my websites, ensuring they are inclusive and user-friendly for all visitors.</p>
                </div>
            </div>
            </Link>
        </div>
    </section>
    </>
  )
}

export default FourGrid