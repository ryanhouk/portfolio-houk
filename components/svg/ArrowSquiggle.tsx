import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  className: string
  startColor: string
  endColor: string
}

const ArrowSquiggle = ({ className, startColor, endColor }: Props) => {
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
        width="208"
        height="155"
        viewBox="0 0 208 155"
        className={className}>
        <defs>
          <linearGradient
            id="arrowGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%">
            <stop offset="0%" stopColor={startColor} />
            <stop offset="100%" stopColor={endColor} />
          </linearGradient>
        </defs>
        <g
          fill="none"
          fillRule="evenodd"
          stroke="none"
          strokeLinecap="round"
          strokeWidth="1">
          <motion.path
            stroke="url(#arrowGradient)"
            strokeWidth="5"
            d="M2.779 3.34c28.332 31.531 67.38 49.002 109.639 53.253 14.554 1.464 31.195.74 45.247-3.945 6.372-2.123 17.566-7.65 17.867-15.198.502-12.531-19.468-8.377-26.568-6.497-12.835 3.397-25.093 22.746-21.232 35.734 7.168 24.109 32.369 45.264 50.295 61.664 7.157 6.548 15.857 11.797 22.624 18.564 2.625 2.625-.425-7.015-.522-8.876-.579-10.984-.98-11.193 1.566.522.353 1.623 3.697 12.778 3.017 13.459-.476.475-21.888-2.776-24.423-2.495"
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

export default ArrowSquiggle
