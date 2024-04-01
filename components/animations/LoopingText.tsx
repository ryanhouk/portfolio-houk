import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  className?: string
}

const LoopingText: React.FC<Props> = ({ className }: Props) => {
  return (
    <>
      <div
        className={`relative flex w-full items-center justify-start overflow-hidden border-y border-white/20 py-6 selection:bg-orange-200 lg:h-32 lg:py-16 ${className}`}>
        <motion.div
          className="flex text-3xl font-bold text-white gap-x-8 whitespace-nowrap font-clash lg:text-7xl"
          initial={{ x: '0vw' }} // Start off the right edge of the screen
          animate={{ x: '-100vw' }} // End off the left edge of the screen
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 40, // Duration for the text to move across the screen, adjust as needed
            ease: 'linear',
          }}>
          <div className="flex items-center">
            AB Testing
            <div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
          <div className="flex items-center">
            Dashboards
            <div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
          <div className="flex items-center">
            Usability Testing
            <div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
          <div className="flex items-center">
            Web Applications
            <div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
          <div className="flex items-center">
            Surveys<div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
          <div className="flex items-center">
            iOS & Android Apps
            <div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
          <div className="flex items-center">
            IA<div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
          <div className="flex items-center">
            tvOS<div className="w-4 h-4 ml-8 rounded-full bg-white/40"></div>
          </div>
        </motion.div>
      </div>
    </>
  )
}

export default LoopingText
