import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  startColor: string
  endColor: string
  strokeWidth: number
  className?: string
}

const DoodleHeartAnimate = ({
  startColor,
  endColor,
  strokeWidth,
  className,
}: Props) => {
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
    <div ref={svgRef} className={className}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 99 91"
        className="w-full h-auto overflow-visible" // This ensures Tailwind classes control width and height
      >
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        <g fill="none" stroke="none" strokeLinecap="round">
          <motion.path
            stroke="url(#iconGradient)"
            strokeWidth={strokeWidth}
            d="M46.5897 90C32.2617 82.5795 21.668 75.8216 13.4112 62.0208C9.00167 54.6506 4.91717 47.0127 2.69169 38.6607C-0.54097 26.5288 0.793624 10.3852 12.9895 3.52983C28.1392 -4.9859 49.2008 9.31642 45.2853 26.7698C45.1636 27.3123 43.6421 30.6293 44.4297 28.79C48.6716 18.8834 61.263 9.74938 71.1476 6.48662C86.7877 1.32402 97.7846 9.63273 97.1912 26.0637C96.7624 37.9369 88.4709 51.895 80.1949 60.0373C70.4344 69.6401 57.315 75.4033 50.4294 87.5728"
            initial={{ pathLength: 0 }} // Initial path length
            animate={startAnimation ? { pathLength: 1 } : { pathLength: 0 }} // Final path length
            transition={{
              duration: 2, // Animation duration in seconds
              ease: 'easeInOut', // Easing function
            }}
          />
        </g>
      </svg>
    </div>
  )
}

export default DoodleHeartAnimate
