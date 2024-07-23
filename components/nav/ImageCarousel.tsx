import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const images = [
  '/img/mockup/klove/mob/hand-player.webp',
  '/img/mockup/klove/mob/hand-mt.webp',
  '/img/mockup/klove/mob/hand-mt-grid.webp',
  // Add more image paths as needed
]

const variants = {
  enter: { opacity: 0 },
  center: { zIndex: 1, opacity: 1 },
  exit: { zIndex: 0, opacity: 0 },
}

const swipeConfidenceThreshold = 10000

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity
}

const wrapIndex = (index: number, length: number) => {
  return ((index % length) + length) % length
}

const ImageCarousel: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0])

  const imageIndex = wrapIndex(page, images.length)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  return (
    <>
      <div className="relative flex justify-center gap-8">
        {/* CONTROLS */}
        <div className="next" onClick={() => paginate(1)}>
          <p className="text-white">NEXT</p>
        </div>
        <div className="prev" onClick={() => paginate(-1)}>
          <p className="text-white">PREV</p>
        </div>
        {/* CONTROLS END */}
      </div>
      <AnimatePresence initial={false} custom={direction}>
        <div className="absolute bottom-0 z-10 w-full h-32 lg:h-96 bg-gradient-to-t from-black to-black/0"></div>
        <div className="absolute left-0 z-10 h-full lg:w-96 bg-gradient-to-r from-black to-black/0"></div>
        <div className="absolute right-0 z-10 h-full lg:w-96 bg-gradient-to-l from-black to-black/0"></div>
        <div className="relative z-0">
          <motion.img
            className="mx-auto lg:w-full max-w-screen-3xl w-[700px]"
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ opacity: { duration: 0.5 } }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x)

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1)
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1)
              }
            }}
          />
        </div>
      </AnimatePresence>
    </>
  )
}

export default ImageCarousel
