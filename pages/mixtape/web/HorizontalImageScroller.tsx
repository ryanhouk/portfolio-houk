import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Import static images
import BackgroundRecipes from '../images/recipes.webp'
import BackgroundDisney from '../images/disney.webp'
import BackgroundPodcasts from '../images/podcasts.webp'
import BackgroundWebsites from '../images/websites.webp'
import BackgroundYouTube from '../images/youtube.webp'
import BackgroundShoes from '../images/shoes.webp'
import BackgroundPlans from '../images/hiker.webp'

type Props = {
  speed?: number // Customizable scroll speed
}

// Array of images with unique categories
const images = [
  { src: BackgroundDisney, category: 'Places' },
  { src: BackgroundPodcasts, category: 'Podcasts' },
  { src: BackgroundYouTube, category: 'Videos' },
  { src: BackgroundShoes, category: 'Things' },
  { src: BackgroundWebsites, category: 'Websites' },
  { src: BackgroundRecipes, category: 'Recipes' },
  { src: BackgroundPlans, category: 'Plans' },
]

const HorizontalImageScroller = ({ speed = 30 }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollWidth, setScrollWidth] = useState(0)

  useEffect(() => {
    if (containerRef.current) {
      setScrollWidth(
        containerRef.current.scrollWidth - containerRef.current.offsetWidth
      )
    }
  }, [])

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        ref={containerRef}
        className="flex gap-x-4 lg:gap-x-8"
        animate={{ x: [0, -scrollWidth] }}
        transition={{
          ease: 'linear',
          duration: speed,
          repeat: Infinity,
        }}>
        {[...images, ...images].map((image, index) => (
          <div
            key={index}
            className="relative shrink-0 overflow-clip group hover:cursor-cell rounded-2xl lg:rounded-3xl">
            {/* Title Div Centered */}
            <div
              id="title"
              className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white transition-all scale-90 opacity-0 group-hover:opacity-100 group-hover:scale-100">
              <div className="text-center border-2 border-[#F6F1E9] px-3 py-2 rounded-2xl">
                <p className="text-xl lg:text-3xl font-object">Save</p>
                <p className="text-xl lg:text-3xl font-object">
                  {image.category}
                </p>
              </div>
            </div>

            {/* Background Overlay */}
            <div className="absolute z-10 w-full h-full opacity-0 bg-neutral-900/50 group-hover:opacity-100"></div>

            {/* Floating Category Badge */}
            <div className="absolute px-3 py-1 text-base font-medium text-black transition-all bg-white shadow-md rounded-xl top-4 left-4 group-hover:opacity-0">
              {image.category}
            </div>

            {/* Image */}
            <Image
              src={image.src}
              alt={`Image ${index + 1}`}
              className="object-cover shadow-md w-[200px] h-[314px] lg:w-[340px] lg:h-[530px] transition-all"
              priority={index < images.length}
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default HorizontalImageScroller
