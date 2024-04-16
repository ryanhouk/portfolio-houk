import React from 'react'
import { motion } from 'framer-motion'
import CardRetail from './cards/CardRetail'
import CardNote from './cards/CardNote'
import CardImage from './cards/CardImage'

const MyStuffView = () => {
  // Animation variants
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // staggered delay, adjusted manually per card
        duration: 0.6, // duration for smoother animation
        ease: [0.22, 1, 0.36, 1], // custom cubic bezier for a smooth ease-out
      },
    }),
  }

  return (
    <section className="flex flex-col p-4 gap-y-1">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={variants}>
        <CardRetail
          img="/img/mixtape/stuff/planet.jpg"
          title="TikTok is filled with tax advice. Is any of it worth listening to?"
          website="npr.com"
          alt=""
          subtext=""
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={variants}>
        <CardNote title="Alaska Airlines flight @ 6AM on Thursday, June 20th. SMF Airport." />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={2}
        variants={variants}>
        <CardImage img="/img/mixtape/stuff/woman.jpg" alt="" />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={3}
        variants={variants}>
        <CardRetail
          img="/img/mixtape/stuff/nike-blazer-white.jpg"
          title="Nike SB Zoom Blazer Mid"
          website="nike.com"
          alt=""
          subtext="$90"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        variants={variants}>
        <CardRetail
          img="/img/mixtape/stuff/nike-blazer-red.png"
          title="Nike SB Zoom Blazer Mid"
          website="nike.com"
          alt=""
          subtext="$90"
        />
      </motion.div>
    </section>
  )
}

export default MyStuffView
