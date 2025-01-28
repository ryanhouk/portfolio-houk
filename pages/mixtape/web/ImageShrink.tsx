import React from 'react'
import { motion, useViewportScroll, useTransform } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

type Props = {
  title?: string // Optional title to be displayed
  image: StaticImageData // Static image import required
}

const ImageShrink = ({ title = 'Default Title', image }: Props) => {
  const { scrollY } = useViewportScroll()

  // Calculate the starting point for shrinking (1/3 of the viewport height)
  const startScroll = typeof window !== 'undefined' ? window.innerHeight / 3 : 0

  // Define the scale transformation, starting after 1/3 of the viewport height
  const scale = useTransform(
    scrollY,
    [startScroll, startScroll + 300],
    [1, 0.8]
  ) // Shrinks from 1 to 0.8

  return (
    <section className="bg-[#F6F1E9]">
      <motion.div
        style={{
          scale, // Dynamically adjust scale based on scroll position
        }}
        className="relative mx-auto">
        {/* Centered Text */}
        <h2 className="absolute inset-0 flex items-center justify-center text-3xl text-center text-white lg:text-7xl font-object">
          {title}
        </h2>

        {/* Background Image */}
        <Image src={image} alt="Background" className="" />
      </motion.div>
    </section>
  )
}

export default ImageShrink
