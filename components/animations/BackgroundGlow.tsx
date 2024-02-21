// AnimatedCircles.tsx
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  className?: string;
};

const circleVariants = {
  animate: {
    scale: [1, 1.2, 1],
    x: ['0%', '10%', '0%'],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

const BackgroundGlow = ({ className }: Props) => {
  return (
    // Updated to ensure it's centered and covers the intended area
    <div className={`absolute inset-0 z-0 flex items-center justify-center ${className}`}>
      <div className='relative lg:h-96 lg:w-96'>
        <motion.div
          className='absolute h-96 w-96 rounded-full bg-white mix-blend-screen blur-3xl filter'
          variants={circleVariants}
          animate='animate'
        />
        <motion.div
          className='absolute h-96 w-96 rounded-full bg-white mix-blend-screen blur-3xl filter'
          style={{ x: '25%', y: '20%' }}
          variants={circleVariants}
          animate='animate'
        />
        <motion.div
          className='absolute h-96 w-96 rounded-full bg-white mix-blend-screen blur-3xl filter'
          style={{ x: '-25%', y: '20%' }}
          variants={circleVariants}
          animate='animate'
        />
      </div>
    </div>
  );
};

export default BackgroundGlow;
