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
        width="309"
        height="174"
        viewBox="0 0 309 174">
        <defs>
          <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
            stroke="url(#iconGradient)"
            strokeWidth={strokeWidth}
            d="M3 171.27c36.069-36.07 84.84-67.401 136-76.089 13.912-2.362 81.6-14.146 81.6 12.089 0 12.566-14.083 10.333-21.511 6.4-14.623-7.741-25.52-15.182-35.733-28.8-15.766-21.02-33.097-54.945-9.956-76.8 9.987-9.432 29.096-4.067 38.4 2.845 9.122 6.776 15.192 15.472 22.044 24.355 5.57 7.22 4.075 6.488 8.356-1.6 10.746-20.298 44.944-34.557 50.844-2.844 3.311 17.793-2.547 33.241-8 49.6-2.048 6.145-5.223 16.826-9.6 21.689-4.764 5.294-7.345-3.148-5.689-7.645 4.119-11.179 9.681-16 21.689-16 10.861 0 25.27 8.445 25.956 20.8.381 6.855 2.115 5.178 4.444 0 1.808-4.016 4.445-16.849 4.445-12.444 0 1.552-.086 14.398-1.6 15.289-5.39 3.17-12.71 3.229-18.489 5.155"
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
