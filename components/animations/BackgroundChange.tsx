import { useEffect } from 'react'
import { motion, useViewportScroll } from 'framer-motion'

interface Props {
  children: React.ReactNode
  className?: string
}

// Cast motion.div to any to suppress TypeScript errors with children/className
const MotionDiv = motion.div as any

const BackgroundChange: React.FC<Props> = ({ className, children }) => {
  const { scrollYProgress } = useViewportScroll()

  useEffect(() => {
    const handleScroll = () => {
      const body = document.body
      const html = document.documentElement
      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      const scrollHeight = height - window.innerHeight
      const percentage = (window.pageYOffset / scrollHeight) * 100
      const hue = Math.round((percentage / 100) * 360)
      document.body.style.backgroundColor = `hsl(${hue}, 50%, 50%)`
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <MotionDiv
      style={{ width: '100%', height: '100%' }}
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 0.3 }}
      className={className}>
      {children}
    </MotionDiv>
  )
}

export default BackgroundChange
