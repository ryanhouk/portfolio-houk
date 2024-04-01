import React, { ReactNode } from 'react'
import { useAnimation, motion } from 'framer-motion'

interface SeekCursorHoverProps {
  children: ReactNode
  className?: string
}

const SeekCursorHover: React.FC<SeekCursorHoverProps> = ({
  children,
  className = '',
}) => {
  const animationControl = useAnimation()

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX, clientY } = e
    const moveX = clientX - window.innerWidth / 2
    const moveY = clientY - window.innerHeight / 2
    const offsetFactor = 15
    animationControl.start({
      x: moveX / offsetFactor,
      y: moveY / offsetFactor,
      transition: { type: 'spring', damping: 20, stiffness: 100 }, // Add this line
    })
  }

  return (
    <motion.div
      animate={animationControl}
      onMouseMove={handleMouseMove}
      className={className}>
      {children}
    </motion.div>
  )
}

export default SeekCursorHover
