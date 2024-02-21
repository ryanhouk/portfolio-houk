import Link from 'next/link'
import React from 'react'
import IconArrowRight from '../svg/IconArrowRight'

type Props = {}

const FourGrid = (props: Props) => {
  return (
    <>
    <section className='max-w-7xl mx-auto px-8 lg:py-32 py-12'>
        <div className='grid lg:grid-cols-2 gap-4'>
            <Link href={`/`} className='group'>
            <div className='p-4 lg:p-8 rounded-3xl h-[500px] bg-white/5 flex flex-col justify-between'>
                <div>ITEM</div>
                <div>
                    <div className='flex items-center'>
                        <h3 className='text-white font-clash text-3xl mb-2'>Streaming Platforms</h3><IconArrowRight className='w-6 group-hover:ml-4 ml-0 transition-all duration-200 opacity-0 group-hover:opacity-100 text-white mb-2' />
                    </div>
                    <p className='text-white/60 font-mono leading-relaxed group-hover:text-white transition-all duration-200'>Designed & developed streaming products across platforms from tvOS to web and mobile.</p>
                </div>
            </div>
            </Link>
            <div className='p-4 lg:p-8 rounded-3xl h-[500px] bg-white/5'>ITEMS</div>
            <div className='p-4 lg:p-8 rounded-3xl h-[500px] bg-white/5'>ITEMS</div>
            <div className='p-4 lg:p-8 rounded-3xl h-[500px] bg-white/5'>ITEMS</div>
        </div>
    </section>
    </>
  )
}

export default FourGrid