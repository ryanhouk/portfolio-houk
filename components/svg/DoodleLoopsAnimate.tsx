import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {
  className?: string // Make className optional
  startColor: string // Define start color for the gradient
  stopColor: string // Define stop color for the gradient
}

const DoodleLoops = ({ className = '', startColor, stopColor }: Props) => {
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
        className={` ${className}`} // Use template literals to include the className prop
        viewBox="0 0 205 39">
        <defs>
          <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: startColor }} />
            <stop offset="100%" style={{ stopColor: stopColor }} />
          </linearGradient>
        </defs>
        <motion.path
          stroke="url(#loopGradient)" // Use the gradient for the stroke
          strokeLinecap="round"
          strokeWidth="2"
          d="M1 34.135c10.184 1.903 15.622 3.634 23.447-2.753 3.486-2.845 6.634-5.835 8.481-10.015 2.025-4.582 3.574-17.065-4.517-10.894-4.663 3.557-6.373 8.824-6.055 14.546.789 14.18 19.043 13.881 29.481 11.824 9.98-1.968 20.33-7.754 24.388-17.515 1.918-4.615 1.622-12.658-5.599-8.869-5.472 2.872-6.97 10.522-6.628 16.056.563 9.11 13.94 10.675 20.855 10.331 10.947-.544 21.215-10.896 26.701-19.684 2.044-3.274 3.426-12.544-2.811-7.465-12.077 9.835-1.765 26.824 12.401 25.43 11.359-1.118 21.138-13.821 27.422-22.23 1.231-1.65 5.502-15.858-.337-10.823-4.751 4.097-6.99 12.794-4.606 18.565 10.435 25.265 44.594-3.126 59.902-8.25"
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

export default DoodleLoops
