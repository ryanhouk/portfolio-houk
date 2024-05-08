import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  className?: string
  size: number // This prop will determine the size of the circles
}

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
}

const BackgroundGlow = ({ className, size }: Props) => {
  // Using inline styles to dynamically set the size
  const circleStyle = {
    height: `${size}px`,
    width: `${size}px`,
  }

  return (
    <div
      className={`absolute inset-0 z-0 flex items-center justify-center ${className}`}>
      <div
        className="relative"
        style={{ height: `${size}px`, width: `${size}px` }}>
        <motion.div
          className="absolute bg-orange-500 rounded-full mix-blend-screen blur-3xl filter"
          style={{ ...circleStyle }}
          variants={circleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bg-purple-500 rounded-full mix-blend-screen blur-3xl filter"
          style={{ ...circleStyle, x: '25%', y: '20%' }}
          variants={circleVariants}
          animate="animate"
        />
        <motion.div
          className="absolute rounded-full bg-cyan-500 mix-blend-screen blur-3xl filter"
          style={{ ...circleStyle, x: '-25%', y: '20%' }}
          variants={circleVariants}
          animate="animate"
        />
      </div>
    </div>
  )
}

export default BackgroundGlow
