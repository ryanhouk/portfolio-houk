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
    <div
      className={`absolute inset-0 z-0 mb-20 mr-16 flex items-center justify-center opacity-30  ${className}`}
    >
      <div className='relative h-96 w-96'>
        <motion.div
          className='absolute h-96 w-96 rounded-full bg-teal-500 mix-blend-overlay blur-3xl filter'
          variants={circleVariants}
          animate='animate'
        />
        <motion.div
          className='absolute h-96 w-96 rounded-full bg-pink-500 mix-blend-overlay blur-3xl filter'
          style={{ x: '25%', y: '20%' }}
          variants={circleVariants}
          animate='animate'
        />
        <motion.div
          className='absolute h-96 w-96 rounded-full bg-blue-500 mix-blend-normal blur-3xl filter'
          style={{ x: '-25%', y: '20%' }}
          variants={circleVariants}
          animate='animate'
        />
      </div>
    </div>
  );
};

export default BackgroundGlow;
