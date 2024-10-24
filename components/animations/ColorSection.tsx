import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface ContainerProps {
  className?: string
  children: React.ReactNode
  id: string
  bgColor: string // Tailwind class for background color (e.g., 'bg-yellow-400')
}

const ColorSection = ({ children, id, bgColor, className }: ContainerProps) => {
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger multiple times (entering and exiting the viewport)
    threshold: 0.5, // Trigger when 50% of the component is in view
  })

  useEffect(() => {
    const applyBackgroundTransition = () => {
      // Ensure smooth transitions between background colors
      document.body.style.transition = 'background-color .5s ease-in-out'

      if (inView) {
        // Create a temporary div to get the exact color from the Tailwind class
        const tempDiv = document.createElement('div')
        tempDiv.classList.add(bgColor)
        document.body.appendChild(tempDiv)

        // Retrieve the computed background color and apply it to the body
        const computedColor = getComputedStyle(tempDiv).backgroundColor
        document.body.style.backgroundColor = computedColor

        // Clean up the temporary div
        document.body.removeChild(tempDiv)
      }
    }

    // Apply the background color change
    applyBackgroundTransition()

    // Cleanup function: remove the color transition when component unmounts
    return () => {
      document.body.style.backgroundColor = ''
    }
  }, [inView, bgColor])

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.8 }}
      className={` ${className}`}>
      {children}
    </motion.section>
  )
}

export default ColorSection
