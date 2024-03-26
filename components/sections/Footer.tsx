import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
    <section className='border-t border-white/10 py-8 lg:py-16 relative z-10 selection:bg-orange-200'>
        <p className='font-mono max-w-4xl mx-auto text-center text-xs'><span className='text-white'>Designed & developed by</span> <span className='bg-gradient-to-tr from-red-600 to-yellow-400 bg-clip-text text-transparent'>Ryan Houk</span></p>
    </section>
    </>
  )
}

export default Footer