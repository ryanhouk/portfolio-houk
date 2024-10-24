import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

interface HeroProps {
  backgroundImageUrl: string
  className?: string
  textContent: string
}

const Hero: React.FC<HeroProps> = ({
  backgroundImageUrl,
  className,
  textContent,
}) => {
  const [scrollPos, setScrollPos] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [isMobile, setIsMobile] = useState(false) // To track if the screen is mobile size

  useEffect(() => {
    const handleScroll = () => {
      setScrollPos(window.scrollY / 3)
    }

    const handleResize = () => {
      setIsMobile(window.matchMedia('(max-width: 768px)').matches)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Initial check on component mount
    handleResize()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div id="hero" className={`relative h-[95dvh] lg:h-screen ${className}`}>
      <div className="w-full top-0 bg-gradient-to-b from-zinc-900 to-black h-[500px]"></div>
      <motion.div
        className={`absolute inset-0 z-10 bg-cover bg-top overflow-clip border border-zinc-800 transition-all duration-300 ${
          scrollPos > 0
            ? 'm-0'
            : isMobile
              ? 'mx-8 mt-20' // Mobile margin
              : 'm-24' // Desktop margin
        }`}
        style={{
          backgroundImage: `url(${backgroundImageUrl})`,
        }}
        animate={{
          opacity: isHovered ? 0.5 : 1, // Animating opacity on hover
          borderRadius: scrollPos > 0 ? '0px' : '2.5rem', // 1.5rem is equivalent to rounded-3xl
        }}
        transition={{
          type: 'tween',
          ease: 'linear',
          duration: 0.25, // Adjust duration for smooth transition
        }}>
        <div className="absolute bottom-0 w-full bg-gradient-to-t from-black to-transparent h-96"></div>
      </motion.div>

      {/* Text Content Above the Background */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center px-6 mx-auto max-w-7xl"
        animate={{ y: 0 }} // No vertical movement (parallax removed)
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}>
        <h1
          className="px-4 text-3xl text-center text-white font-clash lg:mb-8 lg:text-8xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}>
          {textContent}
        </h1>
      </motion.div>
    </div>
  )
}

export default Hero
