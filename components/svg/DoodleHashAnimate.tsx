import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Extending the Props type to include className and optional gradient colors
type Props = {
  className?: string
  StartColor: string
  EndColor: string
}

const DoodleHashAnimate = ({ className = '', StartColor, EndColor }: Props) => {
  const hasGradient = StartColor && EndColor
  const svgRef = useRef(null)
  const isInView = useInView(svgRef, { amount: 0.5 })
  const [startAnimation, setStartAnimation] = useState(false)

  useEffect(() => {
    if (isInView) {
      setStartAnimation(true)
    } else {
      setStartAnimation(false)
    }
  }, [isInView])

  return (
    <div ref={svgRef}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className={`${className}`}
        viewBox="0 0 69 108">
        {hasGradient && (
          <defs>
            <linearGradient
              id="doodleGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor={StartColor} />
              <stop offset="100%" stopColor={EndColor} />
            </linearGradient>
          </defs>
        )}
        <motion.path
          stroke={hasGradient ? 'url(#doodleGradient)' : 'currentColor'} // Using gradient if provided
          strokeLinecap="round"
          strokeWidth="2.409"
          d="M5.033 52.813C21.237 42.895 37.54 30.93 55.324 23.851c3.343-1.33 6.501-2.34 10.05-2.71M2.749 71.023c15.56-9.7 30.999-19.763 47.016-28.707 5.532-3.09 11.223-6.124 17.353-7.833M1.487 83.403c21.474-13.367 42.73-26.733 65.75-37.26M46.923 2C40.26 36.116 35.497 71.234 34.002 106M27.721 7.349c-3.214 21.819-4.657 43.496-5.74 65.507"
          initial={{ pathLength: 0 }} // Initial path length
          animate={startAnimation ? { pathLength: 1 } : { pathLength: 0 }} // Final path length
          transition={{
            duration: 2, // Animation duration in seconds
            ease: 'easeInOut', // Easing function
          }}
        />
      </svg>
    </div>
  )
}

export default DoodleHashAnimate
