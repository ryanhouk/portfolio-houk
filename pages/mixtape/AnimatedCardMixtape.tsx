import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CardMixtape from './cards/CardMixtape'

type AnimatedCardMixtapeProps = {
  mixtape: {
    img: string
    title: string
  }
  index: number
}

const AnimatedCardMixtape: React.FC<AnimatedCardMixtapeProps> = ({
  mixtape,
  index,
}) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1, // staggered delay
        duration: 0.6, // slightly longer duration for a smoother feel
        ease: [0.22, 1, 0.36, 1], // This is a custom cubic bezier curve for a smooth ease-out
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}>
      <CardMixtape img={mixtape.img} title={mixtape.title} url="" />
    </motion.div>
  )
}

export default AnimatedCardMixtape
