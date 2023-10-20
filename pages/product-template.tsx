import React from 'react'
import Image from 'next/image'  

type Props = {}

const ProductTemplate = (props: Props) => {
    return (
        <>
        <div className='overflow-clip '>
        <section className='bg-black'>
        <div className='max-w-7xl ml-auto'>
            <Image src={`/img/mockup/phone-mock-tape.png`} alt='' width={1000} height={1000} className='w-full -right-96 relative -rotate-12 -top-20' />
        </div>
        </section>
        </div>
        </>
    )
}

export default ProductTemplate;