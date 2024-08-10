'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import ArrowRightSquare from '../svg/ArrowRightSquare'

type CardData = {
  image: string
  altText: string
  imageClass: string
}

const cards: CardData[] = [
  {
    image: '/img/mockup/klove/mob/hand-player.webp',
    altText: 'Description for image 1',
    imageClass: 'mx-auto lg:w-full max-w-screen-xl w-[700px]',
  },
  {
    image: '/img/mockup/misc/obama.webp',
    altText: 'Description for image 1',
    imageClass: 'mx-auto lg:w-full w-[1000px] max-w-screen-3xl',
  },
  {
    image: '/img/mockup/mixtape/mt-hand.webp',
    altText: 'Description for image 3',
    imageClass: 'mx-auto w-[1000px] lg:w-full max-w-screen-3xl',
  },
  {
    image: '/img/mockup/klove/web/taya-books.webp',
    altText: 'Description for image 3',
    imageClass: 'mx-auto w-[1000px] lg:w-full -ml-12 -mt-24 max-w-screen-3xl',
  },
  {
    image: '/img/mockup/klove/web/emf-mob.webp',
    altText: 'Description for image 2',
    imageClass: 'mx-auto w-[1000px] lg:w-full max-w-screen-3xl',
  },
]

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length)
  }

  const handleDotClick = (index: number) => {
    setCurrentIndex(index)
  }

  const { image, altText, imageClass } = cards[currentIndex]

  return (
    <>
      {/* BUTTONS */}
      <div className="flex items-center justify-center gap-4">
        <button
          onClick={handlePrev}
          className="p-[1px] group rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 transition-all hover:-translate-x-1 duration-300">
          <div className="flex items-center justify-center w-12 h-12 font-mono text-sm text-white transition-all duration-300 rounded-full group-hover:brightness-150 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <ArrowRightSquare className={'w-6 rotate-180'} />
          </div>
        </button>
        <div className="flex gap-2">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-[5px] w-[5px] rounded-full transition-all ${currentIndex === index ? 'bg-white' : 'bg-white/15'}`}
            />
          ))}
        </div>
        <button
          onClick={handleNext}
          className="p-[1px] group rounded-full bg-gradient-to-b from-zinc-800 to-zinc-950 transition-all hover:translate-x-1 duration-300">
          <div className="flex items-center justify-center w-12 h-12 font-mono text-sm text-white transition-all duration-300 rounded-full group-hover:brightness-150 bg-gradient-to-b from-zinc-900 to-zinc-950">
            <ArrowRightSquare className={'w-6'} />
          </div>
        </button>
      </div>
      {/* IMAGES */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="relative">
          <div className="relative flex justify-center overflow-clip">
            {/* FADES */}
            <div className="absolute bottom-0 z-10 w-full h-32 lg:h-96 bg-gradient-to-t from-black to-black/0"></div>
            <div className="absolute left-0 z-10 h-full lg:w-96 bg-gradient-to-r from-black to-black/0"></div>
            <div className="absolute right-0 z-10 h-full lg:w-96 bg-gradient-to-l from-black to-black/0"></div>
            <Image
              src={image}
              alt={altText}
              className={imageClass}
              width={3060}
              height={2942}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default HeroCarousel
