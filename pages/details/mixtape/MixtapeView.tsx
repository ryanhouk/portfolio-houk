import React from 'react'
import { motion } from 'framer-motion'
import CardMixtape from './cards/CardMixtape'

const MixtapeView = () => {
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // staggered delay
        duration: 0.6, // duration for smoother animation
        ease: [0.22, 1, 0.36, 1], // custom cubic bezier for a smooth ease-out
      },
    }),
  }

  return (
    <section className="flex flex-col p-4 gap-y-2">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={variants}>
        <CardMixtape
          img={'/img/mixtape/banner/tahoe.jpg'}
          title={'Tahoe Trip'}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={variants}>
        <CardMixtape
          img={'/img/mixtape/banner/nike-red.jpg'}
          title={'Nike SB Blazer Wishlist'}
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={variants}>
        <CardMixtape
          img={'/img/mixtape/banner/pasta.jpg'}
          title={'Recipe: Rigatoni with Creamy Tomato Sauce'}
        />
      </motion.div>
    </section>
  )
}

export default MixtapeView
