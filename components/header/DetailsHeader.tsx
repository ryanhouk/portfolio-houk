import React, { ReactNode } from 'react';
import Image from 'next/image';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { FadeY } from '../animations';

type Props = {
    title: string;
    imgSrc: string;
    icon?: ReactNode; // This will accept any React component, including SVG icons
};

const DetailsHeader = ({ title, imgSrc, icon }: Props) => {
    // Hooks to animate elements based on scroll position
    const { scrollY } = useViewportScroll();
    const scale = useTransform(scrollY, [0, 500], [1, 1.5]); // Scale transformation
    // const opacity = useTransform(scrollY, [0, 500], [1, 0]); // Opacity transformation

    return (
        <>
            <FadeY className='mx-auto max-w-screen-3xl py-24 lg:py-60'>
                <FadeY delay={0.5} className='md:max-w-4xl xl:max-w-5xl text-center mx-auto mb-10 xl:-mb-12 z-20 relative px-6'>
                    <div className='flex justify-center'>{icon}</div>
                    <h1 className='font-clash text-3xl md:text-7xl xl:text-9xl selection:bg-orange-200'>{title}</h1>
                </FadeY>
                {/* Apply Framer Motion to Image with both scaling and fading */}
                <motion.div style={{ scale }} className='max-w-4xl mx-auto w-full'>
                    <Image src={imgSrc} width={1500} height={1000} alt='' layout='responsive' />
                </motion.div>
            </FadeY>
        </>
    );
};

export default DetailsHeader;
