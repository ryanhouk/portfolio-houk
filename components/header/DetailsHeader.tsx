import React, { ReactNode } from 'react';
import Image from 'next/image';
import { FadeY } from '../animations';

type Props = {
    title: string;
    imgSrc: string;
    icon?: ReactNode; // This will accept any React component, including SVG icons
};

const DetailsHeader = ({ title, imgSrc, icon }: Props) => {
    return (
        <>
            {/* HEADER */}
            <section className='relative'>
                <FadeY className='mx-auto max-w-screen-3xl py-24 lg:py-60'>
                    <FadeY delay={.5} className='md:max-w-4xl xl:max-w-5xl text-center mx-auto mb-10 xl:-mb-12 z-20 relative px-6'>
                        <div className='flex justify-center'>
                            {icon}
                        </div>
                        <h1 className='font-clash text-3xl md:text-7xl xl:text-9xl selection:bg-orange-200'>{title}</h1>
                    </FadeY>
                    <Image src={imgSrc} width={1500} height={1000} alt='' className='max-w-4xl mx-auto w-full' />
                </FadeY>
            </section>
        </>
    );
};

export default DetailsHeader;
